/* ATLANTE 3D — il motore.

   Modulo ES: viene importato dinamicamente da assets/atlante.js e solo
   se il browser regge WebGL. Se l'import fallisce — per esempio in
   standalone.html, aperto da file://, dove i moduli non si caricano —
   la pagina resta in piedi con le sole schede.

   Tre.js sta in assets/vendor/, con gli import riscritti a percorsi
   relativi: nessuna import map, nessuna CDN, nessun passaggio di build.

   Una PARTE = un THREE.Group. Vale sia per la geometria procedurale
   (il gruppo contiene i mesh generati dal campo `geo`) sia per il .glb
   (il gruppo contiene i mesh il cui nome comincia col prefisso `mesh`).
   Così esplosione, evidenziazione e raycasting hanno un solo bersaglio. */

import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';
import { mergeGeometries } from './vendor/BufferGeometryUtils.js';

const GRADI = Math.PI / 180;

/* ---------------- numeri casuali riproducibili ----------------
   Stesso seme, stessa forma: il neurone di oggi è quello di ieri. */
function caso(seme) {
  let a = (seme | 0) + 0x6D2B79F5;
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* ---------------- costruttori di geometria ----------------
   Ognuno restituisce una BufferGeometry già nella posizione giusta.
   Il campo `t` della specifica sceglie il costruttore.              */

function applica(g, s) {
  if (s.scala) g.scale(s.scala[0], s.scala[1], s.scala[2]);
  if (s.rot) g.rotateX(s.rot[0] * GRADI), g.rotateY(s.rot[1] * GRADI), g.rotateZ(s.rot[2] * GRADI);
  if (s.pos) g.translate(s.pos[0], s.pos[1], s.pos[2]);
  return g;
}

function curvaDaPunti(punti, chiusa) {
  return new THREE.CatmullRomCurve3(punti.map(p => new THREE.Vector3(p[0], p[1], p[2])), !!chiusa);
}

/* segmento tronco-conico da a a b, orientato */
function segmento(a, b, ra, rb, lati) {
  const d = new THREE.Vector3().subVectors(b, a);
  const h = d.length();
  if (h < 1e-6) return null;
  const g = new THREE.CylinderGeometry(rb, ra, h, lati || 10, 1, true);
  g.translate(0, h / 2, 0);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  g.applyQuaternion(q);
  g.translate(a.x, a.y, a.z);
  return g;
}

/* albero dendritico / terminali assonici — ricorsivo e deterministico.
   Con soloSpine emette solo le spine, con soloPunte solo i bottoni:
   stesso seme, quindi combaciano sempre col ramo che li porta.       */
function albero(s) {
  const rnd = caso(s.seme || 1);
  const fuori = [];
  const dec = s.decadi || 0.65;

  function ramo(o, dir, lung, r, liv) {
    const fine = o.clone().addScaledVector(dir, lung);
    if (s.soloPunte) {
      if (liv <= 1) fuori.push(new THREE.SphereGeometry(s.punta.r, 14, 12).translate(fine.x, fine.y, fine.z));
    } else if (s.soloSpine) {
      const passo = s.spina.passo, n = Math.max(1, Math.floor(lung / passo));
      /* base ortonormale attorno alla direzione del ramo */
      const u = new THREE.Vector3(0, 1, 0);
      if (Math.abs(dir.dot(u)) > 0.9) u.set(1, 0, 0);
      const e1 = new THREE.Vector3().crossVectors(dir, u).normalize();
      const e2 = new THREE.Vector3().crossVectors(dir, e1).normalize();
      for (let i = 0; i < n; i++) {
        const p = o.clone().addScaledVector(dir, (i + 0.5) * (lung / n));
        const f = rnd() * Math.PI * 2, rr = s.spina.r;
        p.addScaledVector(e1, Math.cos(f) * r * 0.95).addScaledVector(e2, Math.sin(f) * r * 0.95);
        fuori.push(new THREE.SphereGeometry(rr, 8, 6).translate(p.x, p.y, p.z));
      }
    } else {
      const g = segmento(o, fine, r, r * dec, 10);
      if (g) fuori.push(g);
      fuori.push(new THREE.SphereGeometry(r * dec * 1.05, 10, 8).translate(fine.x, fine.y, fine.z));
    }
    if (liv <= 1) return;

    const u = new THREE.Vector3(0, 1, 0);
    if (Math.abs(dir.dot(u)) > 0.9) u.set(1, 0, 0);
    const e1 = new THREE.Vector3().crossVectors(dir, u).normalize();
    const e2 = new THREE.Vector3().crossVectors(dir, e1).normalize();
    const nr = s.rami;
    for (let i = 0; i < nr; i++) {
      const ap = (s.apertura * (0.55 + rnd() * 0.9)) * GRADI;
      const az = (i / nr) * Math.PI * 2 + rnd() * 1.1;
      const nd = dir.clone().multiplyScalar(Math.cos(ap))
        .addScaledVector(e1, Math.cos(az) * Math.sin(ap))
        .addScaledVector(e2, Math.sin(az) * Math.sin(ap)).normalize();
      ramo(fine, nd, lung * dec * (0.8 + rnd() * 0.4), r * dec, liv - 1);
    }
  }

  ramo(new THREE.Vector3(...s.origine), new THREE.Vector3(...s.dir).normalize(), s.lung, s.r, s.livelli);
  return fuori;
}

/* n copie in posizioni pseudo-casuali dentro un guscio sferico */
function sparsi(s, costruisci) {
  const rnd = caso(s.seme || 1), c = s.centro || [0, 0, 0], fuori = [];
  for (let i = 0; i < s.n; i++) {
    const u = rnd() * 2 - 1, f = rnd() * Math.PI * 2;
    const rad = s.guscio[0] + (s.guscio[1] - s.guscio[0]) * Math.cbrt(rnd());
    const sr = Math.sqrt(1 - u * u);
    const p = [c[0] + rad * sr * Math.cos(f), c[1] + rad * u, c[2] + rad * sr * Math.sin(f)];
    const rot = s.ruotaACaso ? [rnd() * 360, rnd() * 360, rnd() * 360] : null;
    costruisci(Object.assign({}, s.geo), fuori, p, rot);
  }
  return fuori;
}

/* costruisce una specifica `geo` in un elenco { geometria, tinta } */
function costruisci(spec, tintaEreditata, fuori) {
  const tinta = spec.tinta || tintaEreditata;
  const spingi = g => { if (g) fuori.push({ g: applica(g, spec), tinta: tinta }); };

  switch (spec.t) {
    case 'gruppo':
      spec.figli.forEach(f => costruisci(f, tinta, fuori));
      return fuori;

    case 'specchia': {
      const dentro = [];
      costruisci(spec.geo, tinta, dentro);
      dentro.forEach(v => {
        fuori.push(v);
        const m = v.g.clone();
        m.scale(spec.asse === 'x' ? -1 : 1, spec.asse === 'y' ? -1 : 1, spec.asse === 'z' ? -1 : 1);
        m.computeVertexNormals();
        fuori.push({ g: m, tinta: v.tinta });
      });
      return fuori;
    }

    case 'ripeti': {
      const da = spec.da || [0, 0, 0];
      for (let i = 0; i < spec.n; i++) {
        const f = Object.assign({}, spec.geo);
        const base = [da[0] + spec.passo[0] * i, da[1] + spec.passo[1] * i, da[2] + spec.passo[2] * i];
        /* i pioli del DNA seguono l'elica: ruotano con l'altezza */
        if (f.elica) {
          const a = (base[1] - da[1]) / f.elica.h * f.elica.giri * Math.PI * 2;
          f.rot = [0, -a / GRADI, 90];
          delete f.elica;
        }
        const dentro = [];
        costruisci(f, tinta, dentro);
        dentro.forEach(v => { v.g.translate(base[0], base[1], base[2]); fuori.push(v); });
      }
      return fuori;
    }

    case 'sparsi':
      sparsi(spec, (g, out, p, rot) => {
        const f = Object.assign({}, g, { pos: p });
        if (rot) f.rot = rot;
        costruisci(f, tinta, fuori);
      });
      return fuori;

    case 'albero':
      albero(spec).forEach(g => fuori.push({ g: g, tinta: tinta }));
      return fuori;

    case 'sfera':   spingi(new THREE.SphereGeometry(spec.r, spec.seg || 32, Math.round((spec.seg || 32) * 0.75))); return fuori;
    case 'capsula': spingi(new THREE.CapsuleGeometry(spec.r, spec.h, 6, 20)); return fuori;
    case 'cilindro':spingi(new THREE.CylinderGeometry(spec.r2, spec.r1, spec.h, 26, 1)); return fuori;
    case 'cono':    spingi(new THREE.ConeGeometry(spec.r, spec.h, 26, 1)); return fuori;
    case 'toro':    spingi(new THREE.TorusGeometry(spec.r, spec.tubo, 12, 44, (spec.arco || 360) * GRADI)); return fuori;
    case 'tubo':    spingi(new THREE.TubeGeometry(curvaDaPunti(spec.punti), spec.seg || 48, spec.r, 10, false)); return fuori;

    case 'elica': {
      const p = [], n = 48;
      for (let i = 0; i <= n; i++) {
        const a = (i / n) * spec.giri * Math.PI * 2 + (spec.fase || 0) * GRADI;
        p.push([Math.cos(a) * spec.r, -spec.h / 2 + (i / n) * spec.h, Math.sin(a) * spec.r]);
      }
      spingi(new THREE.TubeGeometry(curvaDaPunti(p), 90, spec.tubo, 8, false));
      return fuori;
    }
    default:
      console.warn('atlante: geometria sconosciuta', spec.t);
      return fuori;
  }
}

/* ---------------- materiali ---------------- */
function materiale(cache, esa, opacita) {
  const chiave = esa + '|' + (opacita || 1);
  if (cache[chiave]) return cache[chiave];
  const m = new THREE.MeshStandardMaterial({
    color: new THREE.Color(esa),
    roughness: 0.68, metalness: 0.0,
    transparent: opacita < 1, opacity: opacita || 1,
    depthWrite: !(opacita < 1),
    side: opacita < 1 ? THREE.DoubleSide : THREE.FrontSide
  });
  m.userData.base = m.color.clone();
  cache[chiave] = m;
  return m;
}

/* ---------------- l'API pubblica ---------------- */
export function creaScena(contenitore, sezione, opzioni) {
  opzioni = opzioni || {};
  const tinte = opzioni.tinte || {};
  const pigro = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.94;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.localClippingEnabled = true;
  contenitore.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;touch-action:none;outline:none';

  const scena = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(42, 1, 0.05, 400);
  const c = sezione.camera;
  cam.position.set(c.pos[0], c.pos[1], c.pos[2]);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scena.add(new THREE.HemisphereLight(0xfff1e4, 0x2a2622, 0.88));
  const chiave = new THREE.DirectionalLight(0xffe4c8, 1.32);
  chiave.position.set(2.6, 3.1, 3.6); scena.add(chiave);
  const fill = new THREE.DirectionalLight(0xc8d4e0, 0.32);
  fill.position.set(-2.8, 0.5, 2.2); scena.add(fill);
  const stacco = new THREE.DirectionalLight(0xb0c0cc, 0.52);
  stacco.position.set(-4.6, 2.0, -3.2); scena.add(stacco);

  const controlli = new OrbitControls(cam, renderer.domElement);
  controlli.enableDamping = true; controlli.dampingFactor = 0.09;
  controlli.enablePan = true;
  controlli.screenSpacePanning = true;
  controlli.zoomToCursor = true;
  controlli.rotateSpeed = 0.72;
  controlli.zoomSpeed = 0.88;
  controlli.panSpeed = 0.7;
  controlli.minDistance = Math.min(c.min || 0.35, 0.35);
  controlli.maxDistance = Math.max(c.max || 40, 40);
  /* evita il capovolgimento: è la causa più comune di «mi sono perso» */
  controlli.minPolarAngle = 0.16;
  controlli.maxPolarAngle = Math.PI - 0.16;
  controlli.target.set(c.mira[0], c.mira[1], c.mira[2]);
  controlli.autoRotateSpeed = 0.5;

  const tasti = Object.create(null);
  function suTasto(ev, giu) {
    const el = document.activeElement;
    if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return;
    if (/^Key[WASDQE]$/.test(ev.code) || ev.code === 'Home') ev.preventDefault();
    tasti[ev.code] = giu;
    if (giu && ev.code === 'Home' && !segui) api.reset();
  }
  const onKeyDown = ev => suTasto(ev, true);
  const onKeyUp = ev => suTasto(ev, false);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  function muoviLibera(dt) {
    const vx = (tasti.KeyD ? 1 : 0) - (tasti.KeyA ? 1 : 0);
    const vz = (tasti.KeyS ? 1 : 0) - (tasti.KeyW ? 1 : 0);
    const vy = (tasti.KeyE ? 1 : 0) - (tasti.KeyQ ? 1 : 0);
    if (!vx && !vz && !vy) return;
    const vel = (tasti.ShiftLeft || tasti.ShiftRight ? 6.5 : 2.8) * dt;
    const avanti = new THREE.Vector3();
    cam.getWorldDirection(avanti);
    const destra = new THREE.Vector3().crossVectors(avanti, cam.up).normalize();
    const su = cam.up.clone().normalize();
    const delta = new THREE.Vector3()
      .addScaledVector(destra, vx * vel)
      .addScaledVector(avanti, -vz * vel)
      .addScaledVector(su, vy * vel);
    cam.position.add(delta);
    controlli.target.add(delta);
  }

  const cacheMat = {};
  const gruppi = {};        /* id parte -> THREE.Group      */
  const basi = {};          /* id parte -> posizione a riposo */
  const radice = new THREE.Group();
  scena.add(radice);

  let aspetto = sezione.id === 'encefalo' ? 'studio' : 'didattico';
  let ghost = 1;            /* 1 = resto opaco; <1 lo sbiadisce, stile Neurotorium */
  let isolamento = 1;       /* 1 = contesto visibile; si abbassa solo con Isola */
  let segui = null;         /* passo della lezione: evidenzia un insieme, non un pezzo */
  const pianoTaglio = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
  let asseTaglio = null, kTaglio = 0.5;
  const scatola = new THREE.Box3();

  function misura() {
    scatola.setFromObject(radice);
    if (scatola.isEmpty()) scatola.set(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1));
  }

  function coloreParte(parte, stato) {
    const did = new THREE.Color(tinte[parte.tinta] || '#999999');
    if (aspetto !== 'studio' || sezione.id !== 'encefalo') {
      if (stato === 'scelta') return did.clone().lerp(new THREE.Color(0xffffff), 0.12);
      if (stato === 'sopra') return did.clone().lerp(new THREE.Color(0xffffff), 0.28);
      return did;
    }
    if (parte.gruppo === 'liquor') return new THREE.Color(tinte[parte.tinta] || '#2EB0C4');
    if (parte.gruppo === 'sotto' || parte.gruppo === 'primitivo') {
      const col = new THREE.Color(tinte[parte.tinta] || '#A89078');
      if (stato === 'scelta') col.lerp(new THREE.Color('#E8C36A'), 0.22);
      else if (stato === 'sopra') col.lerp(new THREE.Color(0xffffff), 0.12);
      return col;
    }
    const studio = new THREE.Color('#9A846C');
    const col = new THREE.Color(parte.gruppo === 'aree' ? (tinte[parte.tinta] || studio) : studio);
    if (stato === 'scelta' && parte.gruppo !== 'aree') col.lerp(new THREE.Color('#E8C36A'), 0.28);
    else if (stato === 'sopra') col.lerp(new THREE.Color(0xffffff), 0.12);
    return col;
  }

  function applicaTaglio() {
    radice.traverse(o => {
      if (!o.isMesh) return;
      /* non rianimare le aree se il gruppo è spento: altrimenti i ritagli
         restano spine bianche sulla sezione. */
      let g = o.parent;
      while (g && !g.userData.parte) g = g.parent;
      if (g && g.userData.parte && g.userData.parte.gruppo === 'aree' && !g.visible) {
        o.visible = false;
        return;
      }
      o.visible = true;
    });
    if (!asseTaglio) {
      renderer.clippingPlanes = [];
      return;
    }
    misura();
    const min = scatola.min, max = scatola.max;
    /* sagittale: normale +X tiene x ≥ t (emisfero destro). La camera
       mediale sta a −X e guarda la faccia di taglio. k=0.5 cade sulla
       linea mediana anatomica, non a metà della scatola (il midollo
       allunga y, non x, ma i nervi sporcano il bbox). */
    let n, t;
    if (asseTaglio === 'sagittale' && sezione.id === 'encefalo') {
      n = new THREE.Vector3(1, 0, 0);
      t = -0.42 + 0.90 * kTaglio;
      radice.traverse(o => {
        if (o.isMesh && /_L$/.test(o.name)) o.visible = false;
      });
    } else if (asseTaglio === 'sagittale') {
      n = new THREE.Vector3(1, 0, 0);
      t = min.x + (max.x - min.x) * kTaglio;
    } else if (asseTaglio === 'orizzontale') {
      n = new THREE.Vector3(0, -1, 0);
      t = min.y + (max.y - min.y) * kTaglio;
    } else {
      n = new THREE.Vector3(0, 0, -1);
      t = min.z + (max.z - min.z) * kTaglio;
    }
    const pto = new THREE.Vector3(
      asseTaglio === 'sagittale' ? t : 0,
      asseTaglio === 'orizzontale' ? t : 0,
      asseTaglio === 'coronale' ? t : 0
    );
    pianoTaglio.setFromNormalAndCoplanarPoint(n, pto);
    renderer.clippingPlanes = [pianoTaglio];
  }

  /* --- costruzione dei gruppi da geometria procedurale --- */
  function daProcedurale() {
    sezione.parti.forEach(parte => {
      if (!parte.geo) return;
      const pezzi = costruisci(parte.geo, parte.tinta, []);
      const perTinta = {};
      pezzi.forEach(p => (perTinta[p.tinta] = perTinta[p.tinta] || []).push(p.g));
      const gruppo = new THREE.Group();
      Object.keys(perTinta).forEach(t => {
        const gg = perTinta[t];
        gg.forEach(g => { g.deleteAttribute('uv'); });
        const unita = gg.length > 1 ? mergeGeometries(gg, false) : gg[0];
        if (!unita) return;
        unita.computeVertexNormals();
        const mesh = new THREE.Mesh(unita, materiale(cacheMat, tinte[t] || '#999999', parte.opacita || 1).clone());
        mesh.name = parte.mesh + (Object.keys(perTinta).length > 1 ? '_' + t : '');
        gruppo.add(mesh);
        if (gg.length > 1) gg.forEach(g => g.dispose());
      });
      registra(parte, gruppo);
    });
  }

  /* --- costruzione dei gruppi dai mesh del .glb ---
     Ogni mesh va alla parte col prefisso corrispondente più lungo,
     così Enc_Area_Motoria non finisce dentro Enc_Area.             */
  function daModello(radiceGlb) {
    radiceGlb.updateMatrixWorld(true);
    const meshes = [];
    radiceGlb.traverse(o => { if (o.isMesh) meshes.push(o); });

    const sacchi = {};
    meshes.forEach(o => {
      let vinta = null;
      sezione.parti.forEach(p => {
        if (o.name !== p.mesh && o.name.indexOf(p.mesh + '_') !== 0) return;
        if (!vinta || p.mesh.length > vinta.mesh.length) vinta = p;
      });
      if (!vinta) { console.warn('atlante: mesh senza parte —', o.name); return; }
      (sacchi[vinta.id] = sacchi[vinta.id] || []).push(o);
    });

    sezione.parti.forEach(parte => {
      const suoi = sacchi[parte.id];
      if (!suoi) { console.warn('atlante: nessun mesh per', parte.mesh, 'in', sezione.modello); return; }
      const gruppo = new THREE.Group();
      suoi.forEach(o => {
        o.material = materiale(cacheMat, tinte[parte.tinta] || '#999999', parte.opacita || 1).clone();
        gruppo.add(o);                     /* il trasferimento conserva la posa locale */
      });
      registra(parte, gruppo);
    });
  }

  function registra(parte, gruppo) {
    gruppo.userData = { id: parte.id, parte: parte, selezionabile: parte.selezionabile !== false };
    gruppi[parte.id] = gruppo;
    basi[parte.id] = gruppo.position.clone();
    radice.add(gruppo);
  }

  /* ---------------- interazione ---------------- */
  const raggio = new THREE.Raycaster();
  const puntatore = new THREE.Vector2();
  let sopra = null, scelta = null, evidenziata = null;
  const ascolti = { scelta: [], sopra: [], isola: [] };

  function bersaglio(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    puntatore.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
    puntatore.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    raggio.setFromCamera(puntatore, cam);
    const colpi = raggio.intersectObjects(radice.children, true);
    for (const colpo of colpi) {
      /* il raycaster di three.js non guarda `visible`: i gruppi nascosti
         vanno scartati a mano, o si cliccano le aree invisibili */
      let o = colpo.object, nascosto = false;
      while (o && o !== radice) { if (!o.visible) nascosto = true; o = o.parent; }
      if (nascosto) continue;
      o = colpo.object;
      while (o && !o.userData.id) o = o.parent;
      if (o && o.userData.selezionabile) return o.userData.id;
    }
    return null;
  }

  let attesaMossa = 0;
  function suMossa(ev) {
    if (attesaMossa) return;
    attesaMossa = requestAnimationFrame(() => {
      attesaMossa = 0;
      const id = bersaglio(ev);
      if (id === sopra) return;
      sopra = id;
      renderer.domElement.style.cursor = id ? 'pointer' : 'grab';
      ascolti.sopra.forEach(f => f(id, ev.clientX, ev.clientY));
      dipingi();
    });
  }
  let giu = null;
  renderer.domElement.addEventListener('pointerdown', e => { giu = { x: e.clientX, y: e.clientY }; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!giu) return;
    const mosso = Math.hypot(e.clientX - giu.x, e.clientY - giu.y) > 6;
    giu = null;
    if (mosso) return;                   /* era una rotazione, non un clic */
    const id = bersaglio(e);
    if (segui) return;
    if (id) api.seleziona(id, true);
    else if (scelta) api.seleziona(null, false);
  });
  renderer.domElement.addEventListener('dblclick', e => {
    if (segui) return;
    const id = bersaglio(e);
    if (id) { api.seleziona(id, true); api.isola(true); }
    else api.reset();
  });
  renderer.domElement.addEventListener('pointermove', suMossa);
  renderer.domElement.addEventListener('pointerleave', () => {
    sopra = null; ascolti.sopra.forEach(f => f(null)); dipingi();
  });

  /* ---------------- aspetto: evidenza, sbiadito, selezione ---------------- */
  function dipingi() {
    const set = segui && segui._set;
    const acceso = evidenziata || scelta;
    Object.keys(gruppi).forEach(id => {
      const g = gruppi[id];
      const parte = g.userData.parte;
      const attiva = set && set.size ? set.has(id) : id === acceso;
      const passata = id === sopra;
      const spenta = set && set.size ? !set.has(id) : (acceso && !attiva);
      const stato = attiva ? 'scelta' : (passata ? 'sopra' : 'base');
      const col = coloreParte(parte, stato);
      g.traverse(o => {
        if (!o.isMesh) return;
        const m = o.material;
        m.color.copy(col);
        const opBase = (parte.opacita || 1);
        const fattore = segui ? ghost * isolamento : (aspetto === 'studio' ? ghost * isolamento : 0.18);
        let vuoi = spenta ? opBase * fattore : opBase;
        /* in sezione il guscio diventa un velo: altrimenti la parete
           laterale interna è di nuovo una palla beige che copre tutto. */
        if (aspetto === 'studio' && parte.gruppo === 'lobi' && !attiva && asseTaglio)
          vuoi = Math.min(vuoi, 0.22);
        if (parte.gruppo === 'liquor' && parte.id !== 'enc.meningi') vuoi = Math.min(vuoi, opBase);
        if (attiva && parte.id === 'enc.meningi') vuoi = 0.42;
        m.opacity = vuoi;
        m.transparent = vuoi < 1;
        m.depthWrite = vuoi >= 0.95;
        if (parte.gruppo === 'liquor') {
          m.roughness = 0.22;
          m.emissive.set('#062028');
          m.depthWrite = false;
        }
        m.side = (vuoi < 1 || renderer.clippingPlanes.length) ? THREE.DoubleSide : THREE.FrontSide;
        m.clippingPlanes = renderer.clippingPlanes;
        m.clipShadows = true;
      });
    });
  }

  /* pulsazione della parte da indovinare, in modalità test */
  let fase = 0;
  function pulsa(dt) {
    if (!evidenziata || pigro) return;
    fase += dt * 2.6;
    const k = 0.5 + 0.5 * Math.sin(fase);
    const g = gruppi[evidenziata];
    if (!g) return;
    g.traverse(o => {
      if (!o.isMesh) return;
      o.material.emissive.setRGB(0.18 * k, 0.30 * k, 0.28 * k);
    });
  }

  /* ---------------- animazioni ---------------- */
  const tweens = [];
  function tween(da, a, durata, passo) {
    if (pigro) { passo(a); return; }
    tweens.push({ da: da, a: a, t: 0, d: durata, passo: passo });
  }
  const dolce = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

  let esplosioneOra = 0, esplosioneMira = 0;
  const stratoEsplosione = { lobi: 1.18, aree: 1.28, sotto: 0.88, primitivo: 1.0, liquor: 0.72, cerniera: 1, somatico: 1, autonomo: 1 };
  function applicaEsplosione(t) {
    esplosioneOra = t;
    sezione.parti.forEach(p => {
      const g = gruppi[p.id]; if (!g) return;
      const d = p.esplodi || [0, 0, 0];
      const k = sezione.raggioEsplosione * t * (stratoEsplosione[p.gruppo] || 1);
      g.position.set(basi[p.id].x + d[0] * k, basi[p.id].y + d[1] * k, basi[p.id].z + d[2] * k);
    });
  }

  function inquadraScatola(scatola, pad) {
    if (scatola.isEmpty()) return;
    const centro = scatola.getCenter(new THREE.Vector3());
    const raggioSfera = Math.max(scatola.getSize(new THREE.Vector3()).length() * 0.5, 0.12);
    const dist = Math.min(Math.max(raggioSfera / Math.tan(cam.fov * GRADI / 2) * 2.05 * (pad || 1), c.min * 1.05), c.max);
    const dir = cam.position.clone().sub(controlli.target).normalize();
    const centroModello = new THREE.Vector3(c.mira[0], c.mira[1], c.mira[2]);
    const verso = centro.clone().sub(centroModello);
    if (verso.lengthSq() > 1e-4) {
      verso.normalize();
      if (dir.dot(verso) < 0.15) dir.lerp(verso, 0.9).normalize();
    }
    const meta = centro.clone().addScaledVector(dir, dist);
    const daPos = cam.position.clone(), daMira = controlli.target.clone();
    tween(0, 1, 0.7, k => {
      cam.position.lerpVectors(daPos, meta, k);
      controlli.target.lerpVectors(daMira, centro, k);
    });
    if (pigro) { cam.position.copy(meta); controlli.target.copy(centro); }
  }

  /* ---------------- ciclo ---------------- */
  let vivo = true, ultimo = performance.now(), richiesta = 0;
  function ciclo(ora) {
    if (!vivo) return;
    richiesta = requestAnimationFrame(ciclo);
    const dt = Math.min((ora - ultimo) / 1000, 0.1); ultimo = ora;
    for (let i = tweens.length - 1; i >= 0; i--) {
      const w = tweens[i];
      w.t = Math.min(1, w.t + dt / w.d);
      w.passo(w.da + (w.a - w.da) * dolce(w.t));
      if (w.t >= 1) tweens.splice(i, 1);
    }
    pulsa(dt);
    muoviLibera(dt);
    controlli.update();
    renderer.render(scena, cam);
  }

  function ridimensiona() {
    const w = contenitore.clientWidth, h = contenitore.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    cam.aspect = w / h; cam.updateProjectionMatrix();
  }
  const osserva = new ResizeObserver(ridimensiona);
  osserva.observe(contenitore);

  /* ---------------- API ---------------- */
  const api = {
    parti: gruppi,

    esplodi(t, quieto) {
      esplosioneMira = t;
      tween(esplosioneOra, t, 0.75, applicaEsplosione);
      if (pigro) applicaEsplosione(t);
      if (quieto) return;
      /* allontanati lungo la direzione attuale, così i pezzi restano in quadro */
      const dir = cam.position.clone().sub(controlli.target);
      if (dir.lengthSq() > 1e-6) {
        const dist0 = new THREE.Vector3(c.pos[0], c.pos[1], c.pos[2])
          .distanceTo(new THREE.Vector3(c.mira[0], c.mira[1], c.mira[2]));
        const aPos = controlli.target.clone().add(dir.normalize().multiplyScalar(dist0 * (1 + t * 0.75)));
        const daPos = cam.position.clone();
        tween(0, 1, 0.75, k => { cam.position.lerpVectors(daPos, aPos, k); });
        if (pigro) cam.position.copy(aPos);
      }
    },
    valoreEsplosione() { return esplosioneMira; },

    /* un passo della lezione: accende le strutture citate in quel punto,
       sistema vista, taglio e colori, e lascia il resto come contesto */
    guida(spec) {
      segui = spec || null;
      const acc = new Set((spec && spec.accendi) || []);
      if (segui) segui._set = acc;
      const nas = new Set((spec && spec.nascondi) || []);
      if (sezione.id === 'encefalo' && !(spec && spec.meningi)) nas.add('enc.meningi');
      sezione.parti.forEach(p => {
        const g = gruppi[p.id];
        if (!g) return;
        if (p.gruppo === 'aree') g.visible = !!(spec && spec.aree && (!acc.size || acc.has(p.id)));
        else g.visible = !nas.has(p.id);
      });
      if (spec && spec.aspetto) aspetto = spec.aspetto === 'didattico' ? 'didattico' : 'studio';
      ghost = spec && spec.resto != null ? spec.resto : 1;
      isolamento = spec && spec.sfuma != null ? spec.sfuma : 1;
      scelta = acc.size ? acc.values().next().value : null;
      if (spec && spec.esplodi != null) api.esplodi(spec.esplodi, true);
      const stringi = spec && spec.stringi && acc.size;
      if (spec && spec.vista && (stringi || spec.inquadra)) {
        const v = (sezione.viste || {})[spec.vista];
        if (v) {
          cam.position.set(v.pos[0], v.pos[1], v.pos[2]);
          controlli.target.set(v.mira[0], v.mira[1], v.mira[2]);
        }
      } else if (spec && spec.vista) api.vistaAnatomica(spec.vista);
      if (spec && Object.prototype.hasOwnProperty.call(spec, 'taglio')) api.taglia(spec.taglio, spec.k);
      dipingi();
      if (spec && spec.inquadra) api.inquadra(spec.inquadra);
      else if (stringi) api.inquadraMolti([...acc]);
    },
    esciGuida() { segui = null; },

    seleziona(id, avvicina) {
      if (segui) return;
      scelta = id;
      if (!id) isolamento = 1;
      const parte = id && sezione.parti.find(p => p.id === id);
      if (sezione.id === 'encefalo') {
        sezione.parti.forEach(p => {
          if (p.gruppo !== 'aree') return;
          const g = gruppi[p.id];
          if (!g) return;
          if (parte && parte.gruppo === 'aree') g.visible = p.id === id;
        });
      }
      dipingi();
      if (id && avvicina) api.inquadra(id);
      ascolti.scelta.forEach(f => f(id));
      if (!id) ascolti.isola.forEach(f => f(false));
    },

    isola(on) {
      if (segui) return;
      isolamento = on && scelta ? 0.08 : 1;
      dipingi();
      ascolti.isola.forEach(f => f(isolamento < 0.99));
    },

    mostraParte(id, visibile) {
      const g = gruppi[id];
      if (g) g.visible = !!visibile;
    },

    /* la parte da indovinare: pulsa, tutto il resto sbiadisce */
    evidenzia(id) { evidenziata = id; fase = 0; if (!id) spegniEmissive(); dipingi(); },

    /* nasconde o mostra un intero gruppo di parti — le aree funzionali
       sono placche appoggiate sulla corteccia: sotto il lobo resta intero */
    mostraGruppo(gruppo, visibile) {
      sezione.parti.forEach(p => {
        if (p.gruppo !== gruppo) return;
        const g = gruppi[p.id];
        if (g) g.visible = visibile;
      });
    },

    inquadra(id) {
      const g = gruppi[id]; if (!g) return;
      inquadraScatola(new THREE.Box3().setFromObject(g));
    },

    inquadraMolti(ids) {
      const scatola = new THREE.Box3();
      (ids || []).forEach(id => {
        const g = gruppi[id];
        if (g && g.visible) scatola.union(new THREE.Box3().setFromObject(g));
      });
      if (!scatola.isEmpty()) inquadraScatola(scatola, 0.62);
    },

    inquadraGruppo(nome) {
      const scatola = new THREE.Box3();
      let ok = false;
      sezione.parti.forEach(p => {
        if ((p.gruppo || null) !== (nome || null)) return;
        const g = gruppi[p.id];
        if (!g || !g.visible) return;
        scatola.union(new THREE.Box3().setFromObject(g));
        ok = true;
      });
      if (ok) inquadraScatola(scatola);
    },

    inquadraTutto() {
      const daPos = cam.position.clone(), daMira = controlli.target.clone();
      const aPos = new THREE.Vector3(c.pos[0], c.pos[1], c.pos[2]);
      const aMira = new THREE.Vector3(c.mira[0], c.mira[1], c.mira[2]);
      tween(0, 1, 0.8, k => { cam.position.lerpVectors(daPos, aPos, k); controlli.target.lerpVectors(daMira, aMira, k); });
      if (pigro) { cam.position.copy(aPos); controlli.target.copy(aMira); }
    },

    giraDaSola(b) { controlli.autoRotate = b; },

    aspetto(nome) {
      aspetto = nome === 'studio' ? 'studio' : 'didattico';
      dipingi();
    },
    valoreAspetto() { return aspetto; },

    /* taglio anatomico: asse in {sagittale,orizzontale,coronale} o null per toglierlo */
    taglia(asse, k) {
      asseTaglio = asse || null;
      if (k != null) kTaglio = k;
      applicaTaglio();
      dipingi();
    },
    valoreTaglio() { return { asse: asseTaglio, k: kTaglio }; },

    reset() {
      segui = null;
      asseTaglio = null;
      api._clipDaVista = false;
      isolamento = 1;
      scelta = null;
      applicaTaglio();
      dipingi();
      const v = (sezione.viste && sezione.viste.laterale) || sezione.camera;
      const aPos = new THREE.Vector3(v.pos[0], v.pos[1], v.pos[2]);
      const aMira = new THREE.Vector3(v.mira[0], v.mira[1], v.mira[2]);
      const daPos = cam.position.clone(), daMira = controlli.target.clone();
      tween(0, 1, 0.7, k => {
        cam.position.lerpVectors(daPos, aPos, k);
        controlli.target.lerpVectors(daMira, aMira, k);
      });
      if (pigro) { cam.position.copy(aPos); controlli.target.copy(aMira); }
      ascolti.scelta.forEach(f => f(null));
      ascolti.isola.forEach(f => f(false));
    },

    /* 1 = il resto resta solido; 0.15 = il resto è un fantasma, la scelta resta piena */
    resto(t) { ghost = t; isolamento = 1; dipingi(); },

    vistaAnatomica(nome) {
      const v = (sezione.viste || {})[nome];
      if (!v) return;
      if (sezione.id === 'encefalo') {
        if (nome === 'mediale') {
          asseTaglio = 'sagittale';
          kTaglio = 0.50;
          api._clipDaVista = true;
          applicaTaglio();
          dipingi();
        } else if (api._clipDaVista) {
          asseTaglio = null;
          api._clipDaVista = false;
          applicaTaglio();
          dipingi();
        }
      }
      const daPos = cam.position.clone(), daMira = controlli.target.clone();
      const aPos = new THREE.Vector3(v.pos[0], v.pos[1], v.pos[2]);
      const aMira = new THREE.Vector3(v.mira[0], v.mira[1], v.mira[2]);
      tween(0, 1, 0.75, k => {
        cam.position.lerpVectors(daPos, aPos, k);
        controlli.target.lerpVectors(daMira, aMira, k);
      });
      if (pigro) { cam.position.copy(aPos); controlli.target.copy(aMira); }
    },

    fotografa() {
      renderer.render(scena, cam);
      return renderer.domElement.toDataURL('image/png');
    },

    /* dove disegnare l'etichetta di una parte, in pixel del contenitore */
    schermo(id) {
      const g = gruppi[id]; if (!g) return null;
      const p = new THREE.Box3().setFromObject(g).getCenter(new THREE.Vector3()).project(cam);
      if (p.z > 1) return null;
      return { x: (p.x * 0.5 + 0.5) * contenitore.clientWidth, y: (-p.y * 0.5 + 0.5) * contenitore.clientHeight };
    },

    su(evento, f) { ascolti[evento] && ascolti[evento].push(f); },

    distruggi() {
      vivo = false;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      cancelAnimationFrame(richiesta); cancelAnimationFrame(attesaMossa);
      osserva.disconnect(); controlli.dispose();
      scena.traverse(o => { if (o.isMesh) { o.geometry.dispose(); } });
      Object.keys(cacheMat).forEach(k => cacheMat[k].dispose());
      if (scena.environment) scena.environment.dispose();
      pmrem.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };

  function spegniEmissive() {
    Object.keys(gruppi).forEach(id => gruppi[id].traverse(o => { if (o.isMesh) o.material.emissive.setHex(0x000000); }));
  }

  /* ---------------- avvio ---------------- */
  ridimensiona();
  renderer.domElement.style.cursor = 'grab';

  if (!sezione.modello) {
    daProcedurale();
    misura();
    dipingi();
    ciclo(performance.now());
    return Promise.resolve(api);
  }

  return new Promise((risolvi, rifiuta) => {
    new GLTFLoader().load(
      opzioni.basePercorso ? opzioni.basePercorso + sezione.modello : sezione.modello,
      glb => {
        daModello(glb.scene);
        misura();
        dipingi();
        ciclo(performance.now());
        risolvi(api);
      },
      undefined,
      err => { api.distruggi(); rifiuta(err); }
    );
  });
}
