/* Pills: un feed verticale a scorrimento, una schermata per volta, che mescola
   pillole (flashcard che si «raccontano» riga per riga, con lettura vocale)
   e minigiochi (crocette, vero o falso, chi sono, cronologia, elenco).
   Tutto il contenuto viene dai dati già presenti: quiz, flashcard, nomi,
   scuole, albero. Pensato per il telefono. */

const PL_GRUPPI = [['tutti', 'Tutto'], ['storia', 'Storia'], ['pres', 'Contemporanea'], ['met', 'Metodo'], ['bio', 'Biologia']];

function plGruppoLez(l) {
  const n = parseInt(String(l || '').replace(/\D/g, '').slice(0, 2), 10);
  if (!n) return 'storia';
  if (n <= 2) return 'storia'; if (n === 3) return 'pres'; if (n <= 7) return 'met'; return 'bio';
}
function plGruppoId(id) { const p = id.split(':')[0]; return p === 'def' || p === 'exc' ? 'storia' : p; }
function plTesto(html) { const d = document.createElement('div'); d.innerHTML = html; return d.textContent || ''; }
function plCaso(a) { return a[Math.floor(Math.random() * a.length)]; }

/* ---- generatori di carte ---- */
function plPillola(g) {
  const pool = PGE.flashcard.filter(f => g === 'tutti' || plGruppoLez(f.l) === g);
  const f = plCaso(pool); if (!f) return null;
  const righe = plTesto(f.b).split(/(?<=[.;:!?])\s+/).filter(Boolean);
  return { tipo: 'pillola', eti: f.a, titolo: f.f, righe, html: f.b, lez: f.l };
}
function plCrocette(g) {
  const pool = PGE.quiz.filter(q => g === 'tutti' || plGruppoLez(q.l) === g);
  const q = plCaso(pool); if (!q) return null;
  const giusta = q.o[0];
  return { tipo: 'crocette', eti: q.a, domanda: q.q, opzioni: mescola(q.o), giusta, sp: q.sp, lez: q.l };
}
function plVeroFalso(g) {
  const pool = PGE.quiz.filter(q => g === 'tutti' || plGruppoLez(q.l) === g);
  const q = plCaso(pool); if (!q) return null;
  const vero = Math.random() < 0.5;
  const aff = vero ? q.o[0] : plCaso(q.o.slice(1));
  return { tipo: 'verofalso', eti: q.a, domanda: q.q, aff, vero, sp: q.sp, giusta: q.o[0], lez: q.l };
}
function plChi(g) {
  if (g !== 'tutti' && g !== 'storia' && g !== 'pres') return null;
  const n = plCaso(PGE.nomi);
  const altri = mescola(PGE.nomi.filter(x => x.n !== n.n && x.ruolo === n.ruolo)).slice(0, 3);
  if (altri.length < 3) return null;
  return { tipo: 'chi', eti: n.scuola, indizio: n.indizio, opzioni: mescola([n, ...altri]).map(x => x.n), giusta: n.n, nota: n.nota, anni: n.anni };
}
function plCronologia(g) {
  if (g !== 'tutti' && g !== 'storia') return null;
  const pool = PGE.scuole.filter(s => typeof s.anno === 'number');
  const scelte = mescola(pool).slice(0, 4);
  if (scelte.length < 4) return null;
  return { tipo: 'cronologia', eti: 'Excursus storico', voci: scelte.map(s => ({ nome: s.nome, anno: s.anno, eti: s.etichetta })) };
}
function plElenco(g) {
  if (!window.alAlbero) return null;
  const pool = alAlbero().foglie.filter(f => f.deve && f.deve.length >= 2 && (g === 'tutti' || plGruppoId(f.id) === g));
  const f = plCaso(pool); if (!f) return null;
  let r = f; while (r.gen) r = r.gen;
  return { tipo: 'elenco', eti: r.titolo, titolo: f.titolo, domanda: f.domanda, deve: f.deve, id: f.id };
}
const PL_TIPI = [[plPillola, 3], [plCrocette, 2], [plVeroFalso, 2], [plChi, 1], [plCronologia, 1], [plElenco, 2]];

function plLotto(g, n) {
  const out = [];
  let ultimo = null, tentativi = 0;
  while (out.length < n && tentativi++ < n * 10) {
    const somma = PL_TIPI.reduce((a, t) => a + t[1], 0);
    let r = Math.random() * somma, gen = PL_TIPI[0][0];
    for (const [f, p] of PL_TIPI) { r -= p; if (r <= 0) { gen = f; break; } }
    if (gen === ultimo && Math.random() < 0.7) continue;
    const c = gen(g); if (!c) continue;
    ultimo = gen; out.push(c);
  }
  return out;
}

/* ---- resa ---- */
function plRendi(c, i) {
  const testa = `<div class="pl-testa"><span class="pl-eti">${esc(c.eti || '')}</span><span class="pl-tipo">${{ pillola: 'pillola', crocette: 'crocette', verofalso: 'vero o falso', chi: 'chi sono?', cronologia: 'in ordine', elenco: 'l\'elenco' }[c.tipo]}</span></div>`;
  let corpo = '';
  if (c.tipo === 'pillola') corpo = `
      <div class="pl-progresso" style="--n:${c.righe.length}"><i></i></div>
      <h2 class="pl-titolo">${c.titolo}</h2>
      <div class="pl-righe">${c.righe.map((r, k) => `<p class="pl-riga" style="--i:${k}">${esc(r)}</p>`).join('')}</div>
      <div class="pl-azioni">
        <button class="pl-btn" data-tts>▶ Ascolta</button>
        <button class="pl-btn" data-sapevo="1">La sapevo</button>
        <button class="pl-btn vuoto" data-sapevo="0">Da rivedere</button>
      </div>`;
  else if (c.tipo === 'crocette') corpo = `
      <h2 class="pl-domanda">${c.domanda}</h2>
      <div class="pl-opzioni">${c.opzioni.map(o => `<button class="pl-opz" data-opz>${o}</button>`).join('')}</div>
      <div class="pl-esito" hidden></div>`;
  else if (c.tipo === 'verofalso') corpo = `
      <p class="pl-sotto">${c.domanda}</p>
      <h2 class="pl-domanda pl-aff">«${c.aff}»</h2>
      <div class="pl-vf"><button class="pl-opz" data-vf="1">Vero</button><button class="pl-opz" data-vf="0">Falso</button></div>
      <div class="pl-esito" hidden></div>`;
  else if (c.tipo === 'chi') corpo = `
      <h2 class="pl-domanda">${c.indizio}</h2>
      <div class="pl-opzioni">${c.opzioni.map(o => `<button class="pl-opz" data-opz>${o}</button>`).join('')}</div>
      <div class="pl-esito" hidden></div>`;
  else if (c.tipo === 'cronologia') corpo = `
      <h2 class="pl-domanda">Tocca le scuole dalla più antica alla più recente</h2>
      <div class="pl-opzioni">${mescola(c.voci).map(v => `<button class="pl-opz" data-anno="${v.anno}"><span class="pl-num"></span>${v.nome}<span class="pl-anno">${v.eti}</span></button>`).join('')}</div>
      <div class="pl-esito" hidden></div>`;
  else if (c.tipo === 'elenco') corpo = `
      <p class="pl-sotto">${esc(c.titolo)}</p>
      <h2 class="pl-domanda">${esc(c.domanda)}</h2>
      <p class="pl-sotto">Pensa la risposta, poi scopri i punti uno alla volta e segna quelli che avevi.</p>
      <ol class="pl-deve">${c.deve.map((d, k) => `<li class="pl-punto" data-k="${k}"><button class="pl-scopri">Scopri il punto ${k + 1}</button><span class="pl-punto-testo" hidden>${esc(d)}</span><span class="pl-spunta" hidden><button data-ok="1" title="Lo avevo">✓</button><button data-ok="0" title="Mi mancava">✗</button></span></li>`).join('')}</ol>
      <div class="pl-esito" hidden></div>
      <a class="pl-link" href="#/albero/${encodeURIComponent(c.id)}">Apri sull'albero →</a>`;
  return `<article class="pl-carta pl-${c.tipo}" data-i="${i}">${testa}${corpo}</article>`;
}

function plPunteggio() { return MEM.get('pills.punti', { giuste: 0, sbagliate: 0, serie: 0, record: 0 }); }
function plSegna(ok) {
  const p = plPunteggio();
  if (ok) { p.giuste++; p.serie++; p.record = Math.max(p.record, p.serie); } else { p.sbagliate++; p.serie = 0; }
  MEM.set('pills.punti', p);
  const el = $('#plSerie'); if (el) el.textContent = p.serie;
  const t = $('#plTot'); if (t) t.textContent = p.giuste;
}

function plCollega(art, c) {
  const esito = $('.pl-esito', art);
  const mostra = (ok, html) => { esito.hidden = false; esito.className = 'pl-esito ' + (ok ? 'ok' : 'no'); esito.innerHTML = html; plSegna(ok); };
  if (c.tipo === 'pillola') {
    $$('[data-sapevo]', art).forEach(b => b.onclick = () => { plSegna(b.dataset.sapevo === '1'); $$('[data-sapevo]', art).forEach(x => x.disabled = true); b.classList.add('scelto'); });
    const tts = $('[data-tts]', art);
    if (!('speechSynthesis' in window)) tts.hidden = true;
    else tts.onclick = () => {
      if (speechSynthesis.speaking) { speechSynthesis.cancel(); tts.textContent = '▶ Ascolta'; return; }
      const u = new SpeechSynthesisUtterance(plTesto(c.titolo) + '. ' + c.righe.join(' '));
      u.lang = 'it-IT'; u.rate = 0.95; u.onend = () => tts.textContent = '▶ Ascolta';
      speechSynthesis.speak(u); tts.textContent = '■ Ferma';
    };
  }
  if (c.tipo === 'crocette' || c.tipo === 'chi') $$('[data-opz]', art).forEach(b => b.onclick = () => {
    const ok = b.textContent === c.giusta;
    $$('[data-opz]', art).forEach(x => { x.disabled = true; if (x.textContent === c.giusta) x.classList.add('giusta'); });
    if (!ok) b.classList.add('sbagliata');
    mostra(ok, c.tipo === 'chi' ? `<strong>${c.giusta}</strong> ${c.anni && c.anni !== '—' ? '(' + c.anni + ')' : ''} — ${c.nota}` : (ok ? 'Giusto. ' : 'No. ') + c.sp);
  });
  if (c.tipo === 'verofalso') $$('[data-vf]', art).forEach(b => b.onclick = () => {
    const ok = (b.dataset.vf === '1') === c.vero;
    $$('[data-vf]', art).forEach(x => x.disabled = true); b.classList.add(ok ? 'giusta' : 'sbagliata');
    mostra(ok, (c.vero ? 'Vero. ' : `Falso: la risposta è «${c.giusta}». `) + c.sp);
  });
  if (c.tipo === 'cronologia') {
    const scelte = [];
    $$('[data-anno]', art).forEach(b => b.onclick = () => {
      if (b.disabled) return; b.disabled = true; scelte.push(b); $('.pl-num', b).textContent = scelte.length;
      if (scelte.length === c.voci.length) {
        const anni = scelte.map(x => +x.dataset.anno), ok = anni.every((a, k) => k === 0 || a >= anni[k - 1]);
        scelte.forEach(x => x.classList.add('mostra-anno'));
        mostra(ok, ok ? 'In ordine.' : 'Ordine sbagliato: ' + [...c.voci].sort((a, b) => a.anno - b.anno).map(v => `${v.eti} ${v.nome}`).join(' → '));
      }
    });
  }
  if (c.tipo === 'elenco') {
    let ok = 0, fatti = 0;
    $$('.pl-scopri', art).forEach(b => b.onclick = () => { const li = b.closest('li'); b.hidden = true; $('.pl-punto-testo', li).hidden = false; $('.pl-spunta', li).hidden = false; });
    $$('[data-ok]', art).forEach(b => b.onclick = () => {
      const li = b.closest('li'); $$('[data-ok]', li).forEach(x => x.disabled = true); b.classList.add('scelto');
      fatti++; if (b.dataset.ok === '1') ok++;
      if (fatti === c.deve.length) mostra(ok === c.deve.length, `${ok} su ${c.deve.length}${ok === c.deve.length ? ': completa.' : ': i punti con ✗ sono da ristudiare.'}`);
    });
  }
}

function vistaPills() {
  const g = MEM.get('pills.gruppo', 'tutti');
  const p = plPunteggio();
  main.classList.add('pl-piena');
  main.innerHTML = `
    <div class="pl-barra">
      <div class="filtri">${PL_GRUPPI.map(([k, e]) => `<button class="chip${g === k ? ' attivo' : ''}" data-g="${k}">${e}</button>`).join('')}</div>
      <div class="pl-conto" title="serie attuale · risposte giuste in totale"><b id="plSerie">${p.serie}</b> di fila · <span id="plTot">${p.giuste}</span> giuste</div>
    </div>
    <div class="pl-feed" id="plFeed"></div>`;
  const feed = $('#plFeed');
  const carte = [];
  const aggiungi = () => {
    const lotto = plLotto(g, 6);
    lotto.forEach(c => {
      const i = carte.length; carte.push(c);
      feed.insertAdjacentHTML('beforeend', plRendi(c, i));
      plCollega(feed.lastElementChild, c);
      oss.observe(feed.lastElementChild);
    });
  };
  const oss = new IntersectionObserver(voci => voci.forEach(v => {
    if (!v.isIntersecting) { if (v.target.classList.contains('attiva') && 'speechSynthesis' in window) speechSynthesis.cancel(); return; }
    v.target.classList.add('attiva');
    if (+v.target.dataset.i >= carte.length - 2) aggiungi();
  }), { root: feed, threshold: 0.6 });
  aggiungi();
  $$('[data-g]', main).forEach(b => b.onclick = () => { MEM.set('pills.gruppo', b.dataset.g); vistaPills(); });
}
