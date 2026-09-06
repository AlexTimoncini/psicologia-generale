/* =========================================================
   ALBERO DI STUDIO — ripasso per scrittura attiva
   I nodi `daScheda` vengono espansi a runtime dai blocchi della
   scheda: perché nasce, radici, precursori, oggetto, metodo,
   teorie, esponenti (con le loro teorie), esperimenti, validità,
   precorre, errori, esposizione d'insieme.
   ========================================================= */

const AL_SOGLIA = 70;   /* sotto questa soglia la voce è "da ristudiare" */

const alHas = a => Array.isArray(a) && a.length > 0;
const alTesto = s => String(s == null ? '' : s).replace(/<[^>]+>/g, '');
function alSlug(s) { return sfoltisci(alTesto(s)).split(' ').filter(Boolean).slice(0, 4).join('-') || 'x'; }

/* slug unici all'interno di una lista */
function alSlugs(lista, campo) {
  const visti = {};
  return lista.map(x => {
    let k = alSlug(campo ? x[campo] : x);
    if (visti[k]) { visti[k]++; k += '-' + visti[k]; } else visti[k] = 1;
    return k;
  });
}

function alArgomentoPer(cap) {
  const v = (PGE.argomenti && PGE.argomenti.voci || []).find(v => (v.capitoli || []).includes(cap));
  return v ? v.id : null;
}

/* ---------- espansione di una scheda in rami e foglie ---------- */
function alDaScheda(nodo) {
  const s = PGE.schede.fascicoli.flatMap(f => f.schede).find(x => x.id === nodo.daScheda);
  if (!s) return { id: nodo.id, titolo: nodo.titolo, figli: [] };
  const N = alTesto(s.nome), sid = s.id;
  const fonte = { cap: s.identificazione.capitolo, scheda: sid, arg: alArgomentoPer(s.identificazione.capitolo) };
  const F = (id, titolo, domanda, rif) => ({ id, titolo, domanda, fonte, rif });
  const figli = [];

  if (s.tipo === 'concetto') {
    (s.definizioni || []).forEach((d, i) => figli.push(F(`${sid}:def:${alSlug(d.termine)}`, alTesto(d.termine),
      `Enuncia «${alTesto(d.termine)}» e spiegane il senso.`, `${sid} › definizioni[${i}]`)));
    if (alHas(s.errori)) figli.push(F(`${sid}:errori`, 'Dove si perde il voto',
      `Quali sono gli errori tipici su «${N}»? Per ciascuno: la formulazione sbagliata e quella corretta.`, `${sid} › errori`));
    return { id: nodo.id, titolo: nodo.titolo, occhiello: s.identificazione.unaRiga, fonte, figli };
  }

  if (s.nasceDa) figli.push(F(`${sid}:nasce`, 'Perché nasce',
    `Da quale problema o esigenza nasce «${N}», e qual è la formula che lo riassume?`, `${sid} › nasceDa`));

  if (alHas(s.radici)) {
    const k = alSlugs(s.radici, 'nome');
    figli.push({ id: `${sid}:radici`, titolo: 'Le radici', figli: s.radici.map((r, i) =>
      F(`${sid}:rad:${k[i]}`, alTesto(r.nome), `Che cos'è «${alTesto(r.nome)}», che tipo di radice è, e quale tesi porta a «${N}»?`, `${sid} › radici[${i}]`)) });
  }
  if (alHas(s.precursori)) {
    const k = alSlugs(s.precursori, 'nome');
    figli.push({ id: `${sid}:precursori`, titolo: 'I precursori', figli: s.precursori.map((p, i) =>
      F(`${sid}:prec:${k[i]}`, alTesto(p.nome), `Chi o che cos'è «${alTesto(p.nome)}», da dove viene e qual è il suo apporto a «${N}»?`, `${sid} › precursori[${i}]`)) });
  }
  if (s.oggetto) figli.push(F(`${sid}:oggetto`, "L'oggetto di studio", `Qual è l'oggetto di studio di «${N}»? Formula e spiegazione.`, `${sid} › oggetto`));
  if (s.metodo)  figli.push(F(`${sid}:metodo`,  'Il metodo', `Qual è il metodo di «${N}»? Formula, spiegazione e vincoli.`, `${sid} › metodo`));

  if (alHas(s.teorie)) {
    const k = alSlugs(s.teorie, 'nome');
    figli.push({ id: `${sid}:teorie`, titolo: 'Le teorie', figli: s.teorie.map((t, i) =>
      F(`${sid}:teo:${k[i]}`, alTesto(t.nome), `Enuncia «${alTesto(t.nome)}» e spiegane il senso.`, `${sid} › teorie[${i}]`)) });
  }
  if (alHas(s.esponenti)) {
    const k = alSlugs(s.esponenti, 'nome');
    figli.push({ id: `${sid}:esponenti`, titolo: 'Gli esponenti', figli: s.esponenti.map((e, i) => {
      const E = alTesto(e.nome), base = `${sid}:esp:${k[i]}`;
      const chi = `Chi è ${E}: anni, ruolo, luogo, e che cosa ha fatto per «${N}».`;
      if (!alHas(e.teorie)) return F(base, E, chi, `${sid} › esponenti[${i}]`);
      const kt = alSlugs(e.teorie, 'nome');
      return { id: base, titolo: E, meta: [e.anni, e.ruolo].filter(x => x && x !== '—').join(' · '), figli: [
        F(`${base}:chi`, 'Chi è e che cosa ha fatto', chi, `${sid} › esponenti[${i}]`),
        ...e.teorie.map((t, j) => F(`${base}:teo:${kt[j]}`, alTesto(t.nome), `Enuncia «${alTesto(t.nome)}» di ${E} e spiegane il senso.`, `${sid} › esponenti[${i}] › teorie[${j}]`))
      ] };
    }) });
  }
  if (alHas(s.esperimenti)) {
    const k = alSlugs(s.esperimenti, 'nome');
    figli.push({ id: `${sid}:esperimenti`, titolo: 'Gli esperimenti', figli: s.esperimenti.map((x, i) =>
      F(`${sid}:esper:${k[i]}`, alTesto(x.nome), `Descrivi «${alTesto(x.nome)}»: disegno, risultato e significato.`, `${sid} › esperimenti[${i}]`)) });
  }
  if (s.validita) figli.push(F(`${sid}:validita`, 'La validità', `La validità di «${N}»: merito, limite ed esito.`, `${sid} › validita`));
  if (alHas(s.precorre)) figli.push(F(`${sid}:precorre`, 'Che cosa precorre', `Che cosa precorre «${N}», e in che modo?`, `${sid} › precorre`));
  if (alHas(s.errori)) figli.push(F(`${sid}:errori`, 'Dove si perde il voto',
    `Quali sono gli errori tipici su «${N}»? Per ciascuno: la formulazione sbagliata e quella corretta.`, `${sid} › errori`));
  figli.push(F(`${sid}:orale`, "L'esposizione d'insieme", `Esponi «${N}» per intero, come all'orale, in quattro-cinque minuti.`, `${sid} › intera scheda`));

  return { id: nodo.id, titolo: nodo.titolo, occhiello: s.identificazione.unaRiga, fonte, figli: alSpiana(figli) };
}

/* un gruppo con un solo elemento non merita un ramo: il figlio sale di livello
   (stesso id, così i voti restano validi) con un'etichetta al singolare */
const AL_SINGOLARE = { radici: 'La radice', precursori: 'Il precursore', teorie: 'La teoria', esponenti: "L'esponente", esperimenti: "L'esperimento" };
function alSpiana(figli) {
  return figli.map(g => {
    if (!g.figli || g.figli.length !== 1) return g;
    const tipo = g.id.split(':').pop(), unico = g.figli[0];
    if (!AL_SINGOLARE[tipo]) return g;
    if (unico.figli) return { ...unico, titolo: `${AL_SINGOLARE[tipo]}: ${unico.titolo}` };
    return { ...unico, titolo: `${AL_SINGOLARE[tipo]}: ${unico.titolo}` };
  });
}

/* ---------- albero completo, con genitori e indice ---------- */
let AL_CACHE = null;
function alAlbero() {
  if (AL_CACHE) return AL_CACHE;
  const indice = {}, foglie = [];
  const visita = (n, gen) => {
    const m = n.daScheda ? alDaScheda(n) : { ...n };
    m.gen = gen; indice[m.id] = m;
    if (m.figli) m.figli = m.figli.map(f => visita(f, m));
    else foglie.push(m);
    return m;
  };
  AL_CACHE = { rami: PGE.albero.rami.map(r => visita(r, null)), indice, foglie };
  return AL_CACHE;
}

/* ---------- stato: risposte e voti ---------- */
const alRisposte = () => MEM.get('albero.risposte', {});

function alVoti() {
  const repo = PGE.albero.voti || {}, loc = MEM.get('albero.voti', {}), out = {};
  new Set([...Object.keys(repo), ...Object.keys(loc)]).forEach(id => {
    const a = repo[id], b = loc[id];
    const v = !a ? b : !b ? a : (String(b.d) >= String(a.d) ? b : a);
    const st = {};
    [a, b].forEach(x => { if (!x) return; (x.storico || []).forEach(h => st[h.d] = h.p); st[x.d] = x.p; });
    out[id] = { ...v, storico: Object.keys(st).sort().map(d => ({ d, p: st[d] })) };
  });
  return out;
}

function alFascia(p) { return p == null ? '' : p < 50 ? 'basso' : p < AL_SOGLIA ? 'medio' : p < 90 ? 'buono' : 'alto'; }

/* corretta = il voto si riferisce proprio a questa versione della risposta */
function alStato(id, R, V) {
  const r = R[id], v = V[id], scritta = r && r.t && r.t.trim();
  if (v && (!scritta || v.r === r.d || (!v.r && String(r.d).slice(0, 10) <= String(v.d).slice(0, 10)))) return 'corretta';
  return scritta ? 'da-correggere' : 'da-scrivere';
}

function alAggrega(n, R, V) {
  if (!n.figli) {
    const v = V[n.id], st = alStato(n.id, R, V);
    return { foglie: 1, scritte: st !== 'da-scrivere' ? 1 : 0, corrette: v ? 1 : 0, somma: v ? v.p : 0, daCorreggere: st === 'da-correggere' ? 1 : 0, deboli: v && v.p < AL_SOGLIA ? 1 : 0 };
  }
  const t = { foglie: 0, scritte: 0, corrette: 0, somma: 0, daCorreggere: 0, deboli: 0 };
  n.figli.forEach(f => { const a = alAggrega(f, R, V); Object.keys(t).forEach(k => t[k] += a[k]); });
  return t;
}
const alMedia = a => a.corrette ? Math.round(a.somma / a.corrette) : null;

const alData = d => { try { return new Date(d).toLocaleDateString('it-IT', { day: 'numeric', month: 'short' }); } catch (e) { return d; } };
const alFasc = sid => '#/schede/F' + String(sid).charAt(1) + '?a=' + sid;

/* ---------- rendering ---------- */
function alVoto(p, cls) {
  return p == null ? '' : `<span class="al-voto al-v-${alFascia(p)} ${cls || ''}">${p}</span>`;
}

function alRendiFoglia(f, R, V, prof) {
  const r = R[f.id] || {}, v = V[f.id], st = alStato(f.id, R, V);
  const fo = f.fonte || {};
  const link = [
    fo.scheda ? `<a href="${alFasc(fo.scheda)}">scheda ${fo.scheda}</a>` : '',
    fo.cap ? `<a href="#/manuale/${fo.cap}">cap. ${parseInt(fo.cap.slice(1), 10) || fo.cap}</a>` : '',
    fo.arg ? `<a href="#/argomenti/${fo.arg}">esposizione</a>` : ''
  ].filter(Boolean).join(' · ');
  const storico = v && v.storico && v.storico.length > 1
    ? `<span class="al-storico">${v.storico.map(h => h.p).join(' → ')}</span>` : '';
  const stato = st === 'corretta' ? `corretta il ${alData(v.d)}`
              : st === 'da-correggere' ? `scritta il ${alData(r.d)} · da correggere`
              : 'da scrivere';
  return `<div class="al-foglia al-${st}" data-id="${f.id}" id="al-${f.id}">
    <div class="al-foglia-testa">
      <p class="al-domanda"><strong>${esc(f.titolo)}</strong> <span>${esc(f.domanda || '')}</span></p>
      <div class="al-voto-col">${alVoto(v && v.p)}${storico}</div>
    </div>
    <textarea rows="4" placeholder="Scrivi qui, a memoria, quello che diresti all'orale…" spellcheck="false">${esc(r.t || '')}</textarea>
    <div class="al-piede">
      <span class="al-stato">${stato}</span>
      ${link ? `<span class="al-fonte">ristudia: ${link}</span>` : ''}
    </div>
    ${v && v.n ? `<p class="al-nota"><span>correzione</span> ${v.n}</p>` : ''}
  </div>`;
}

function alRendiNodo(n, R, V, prof, aperti) {
  if (!n.figli) return alRendiFoglia(n, R, V, prof);
  const a = alAggrega(n, R, V), m = alMedia(a);
  const aperto = aperti ? aperti.has(n.id) : prof === 0;
  const meta = [
    `${a.foglie} ${a.foglie === 1 ? 'domanda' : 'domande'}`,
    a.scritte ? `${a.scritte} scritte` : '',
    a.corrette ? `${a.corrette} corrette` : '',
    a.deboli ? `<b>${a.deboli} sotto ${AL_SOGLIA}</b>` : ''
  ].filter(Boolean).join(' · ');
  return `<details class="al-nodo al-p${Math.min(prof, 3)}" data-id="${n.id}" id="al-${n.id}"${aperto ? ' open' : ''}>
    <summary>
      <span class="al-tit">${esc(n.titolo)}${n.meta ? ` <em>${esc(n.meta)}</em>` : ''}</span>
      <span class="al-meta">${meta}</span>
      ${m != null ? alVoto(m, 'al-media') : '<span class="al-voto al-vuoto">—</span>'}
    </summary>
    ${n.occhiello && prof > 0 ? `<p class="al-occhiello">${n.occhiello}</p>` : ''}
    <div class="al-figli">${n.figli.map(f => alRendiNodo(f, R, V, prof + 1, aperti)).join('')}</div>
  </details>`;
}

function vistaAlbero(vai) {
  const T = alAlbero(), R = alRisposte(), V = alVoti();
  const salvati = MEM.get('albero.aperti', null);
  const aperti = salvati ? new Set(salvati) : null;
  const tot = alAggrega({ figli: T.rami }, R, V), media = alMedia(tot);
  const filtro = MEM.get('albero.filtro', 'tutte');

  main.innerHTML = `
    <p class="occhiello">Allenamento</p>
    <h1>Albero di studio</h1>
    <p class="sommario">${PGE.albero.intro}</p>

    <div class="griglia tre" style="margin-bottom:1.6rem">
      <div class="dato"><span class="dato-cifra">${tot.foglie}</span><span class="dato-eti">domande sull'albero</span></div>
      <div class="dato"><span class="dato-cifra">${tot.scritte}</span><span class="dato-eti">risposte scritte · ${tot.daCorreggere} da correggere</span></div>
      <div class="dato"><span class="dato-cifra">${media != null ? media : '—'}</span><span class="dato-eti">media delle ${tot.corrette} corrette · ${tot.deboli} sotto ${AL_SOGLIA}</span></div>
    </div>

    <div class="al-strumenti">
      <div class="filtri" id="alFiltri">
        ${[['tutte', 'Tutte'], ['da-scrivere', 'Da scrivere'], ['da-correggere', 'Da correggere'], ['deboli', `Sotto ${AL_SOGLIA}`], ['corretta', 'Corrette']]
          .map(([k, e]) => `<button class="chip${filtro === k ? ' attivo' : ''}" data-filtro="${k}">${e}</button>`).join('')}
      </div>
      <div class="al-azioni">
        <button class="bottone vuoto" id="alProssima">Vai alla prima da scrivere</button>
        <button class="bottone vuoto" id="alChiudi">Chiudi tutto</button>
        <button class="bottone" id="alEsporta">Copia tutte le risposte per la correzione</button>
        <button class="bottone vuoto" id="alScarica">Scarica come file</button>
        <label class="al-check"><input type="checkbox" id="alTutte"> anche le già corrette</label>
      </div>
      <p class="al-esito" id="esito"></p>
      <details class="al-blocco">
        <summary>Lavorare in blocco: scrivere tutto in un documento solo, incollare voti</summary>
        <div class="al-importa">
          <p class="nota">Il <strong>questionario</strong> è un unico testo con tutte le domande visibili (segue il filtro) e uno spazio sotto ogni <em>RISPOSTA:</em>. Compilalo dove vuoi, poi incollalo qui sotto: le risposte finiscono nelle caselle giuste — le voci lasciate vuote non toccano quello che c'era.</p>
          <div class="al-azioni">
            <button class="bottone vuoto" id="alQuestionario">Copia il questionario</button>
            <button class="bottone vuoto" id="alQuestionarioFile">Scarica il questionario</button>
          </div>
          <textarea rows="6" id="alBloccoTesto" spellcheck="false" placeholder="Incolla qui il questionario compilato, oppure il JSON dei voti."></textarea>
          <div class="al-azioni">
            <button class="bottone" id="alBloccoRisposte">Importa le risposte</button>
            <button class="bottone vuoto" id="alImportaVai">Importa i voti (JSON)</button>
          </div>
          <p class="nota">I voti arrivano comunque da soli: dopo la correzione vengono pubblicati nel sito e compaiono al prossimo caricamento. Incollarli serve solo per vederli subito.</p>
        </div>
      </details>
    </div>

    <div class="al-albero" id="alAlbero" data-filtro="${filtro}">
      ${T.rami.map(r => alRendiNodo(r, R, V, 0, aperti)).join('')}
    </div>

    <div class="scheda" style="margin-top:2rem">
      <h3 style="margin-top:0">Come si usa</h3>
      <ol style="margin:0;padding-left:1.2rem;font-size:.93rem;color:var(--grafite)">
        <li>Apri un ramo, leggi la domanda, scrivi la risposta <strong>senza guardare</strong>. Si salva da sola mentre scrivi.</li>
        <li>Quando hai scritto un blocco, premi <em>Copia le risposte</em> e incolla il testo in chat: la correzione dà un <strong>voto da 1 a 100</strong> e una nota su che cosa mancava.</li>
        <li>I voti tornano sull'albero — pubblicati nel sito o incollati qui con <em>Incolla i voti</em>. Il ramo mostra la <strong>media</strong> delle sue domande.</li>
        <li>Filtra <em>Sotto ${AL_SOGLIA}</em>: sono le voci da ristudiare. Riscrivile dopo aver riletto la scheda: il voto nuovo si aggiunge allo storico (<span class="al-storico">45 → 78</span>).</li>
      </ol>
    </div>`;

  alCollega(T);
  alApplicaFiltro();
  if (vai) alApriPercorso(vai, true);
}

/* ---------- interazione ---------- */
const AL_TIMER = {};
function alCollega(T) {
  const albero = $('#alAlbero');

  /* salvataggio automatico delle risposte */
  albero.addEventListener('input', e => {
    const ta = e.target; if (ta.tagName !== 'TEXTAREA') return;
    const f = ta.closest('.al-foglia'), id = f.dataset.id;
    clearTimeout(AL_TIMER[id]);
    AL_TIMER[id] = setTimeout(() => {
      const R = alRisposte();
      if (ta.value.trim()) R[id] = { t: ta.value, d: new Date().toISOString() }; else delete R[id];
      MEM.set('albero.risposte', R);
      alAggiornaFoglia(f);
    }, 400);
  });

  /* memoria dei rami aperti */
  albero.addEventListener('toggle', e => {
    const d = e.target; if (!d.classList || !d.classList.contains('al-nodo')) return;
    const s = new Set(MEM.get('albero.aperti', T.rami.map(r => r.id)));
    d.open ? s.add(d.dataset.id) : s.delete(d.dataset.id);
    MEM.set('albero.aperti', [...s]);
  }, true);

  $$('#alFiltri .chip').forEach(b => b.addEventListener('click', () => {
    $$('#alFiltri .chip').forEach(x => x.classList.toggle('attivo', x === b));
    albero.dataset.filtro = b.dataset.filtro; MEM.set('albero.filtro', b.dataset.filtro);
    alApplicaFiltro();
  }));

  $('#alChiudi').addEventListener('click', () => { $$('#alAlbero details').forEach(d => d.open = false); MEM.set('albero.aperti', []); });
  $('#alProssima').addEventListener('click', () => {
    const f = $$('#alAlbero .al-foglia.al-da-scrivere').find(x => !x.hidden);
    if (!f) { $('#esito').textContent = 'Non c\'è nulla da scrivere con questo filtro.'; return; }
    alApriPercorso(f.dataset.id, true);
  });
  const giorno = () => new Date().toISOString().slice(0, 10);
  $('#alEsporta').addEventListener('click', () => {
    const t = alEsportazione($('#alTutte').checked);
    if (!t) { $('#esito').textContent = 'Nessuna risposta da correggere: scrivine qualcuna prima.'; return; }
    copia(t);
  });
  $('#alScarica').addEventListener('click', () => {
    const t = alEsportazione($('#alTutte').checked);
    if (!t) { $('#esito').textContent = 'Nessuna risposta da correggere: scrivine qualcuna prima.'; return; }
    scarica(t, `albero-risposte-${giorno()}.txt`);
    $('#esito').textContent = 'Scaricato. In chat basta dire «correggi l\'albero».';
  });
  $('#alQuestionario').addEventListener('click', () => copia(alQuestionario()));
  $('#alQuestionarioFile').addEventListener('click', () => { scarica(alQuestionario(), `albero-questionario-${giorno()}.txt`); $('#esito').textContent = 'Questionario scaricato.'; });
  $('#alBloccoRisposte').addEventListener('click', () => alImportaRisposte($('#alBloccoTesto').value));
  $('#alImportaVai').addEventListener('click', () => alImporta($('#alBloccoTesto').value));
}

/* ---------- questionario: tutte le domande visibili in un testo solo ---------- */
function alQuestionario() {
  const T = alAlbero(), R = alRisposte();
  const percorso = f => { const p = []; for (let g = f.gen; g; g = g.gen) p.unshift(g.titolo); return p.join(' › '); };
  const visibili = new Set($$('#alAlbero .al-foglia').filter(x => !x.hidden).map(x => x.dataset.id));
  const righe = [
    'ALBERO DI STUDIO — questionario',
    `Data: ${new Date().toLocaleDateString('it-IT')}`,
    '',
    'Scrivi ogni risposta sotto la riga RISPOSTA:, a memoria. Poi incolla tutto il testo in «Importa le risposte» sul sito, oppure passalo direttamente in chat per la correzione.',
    '', '———', ''
  ];
  T.foglie.filter(f => visibili.has(f.id)).forEach(f => {
    righe.push(`[${f.id}] ${percorso(f)} › ${f.titolo}`, `Domanda: ${f.domanda || ''}`, 'RISPOSTA:', (R[f.id] && R[f.id].t || '').trim(), '', '———', '');
  });
  return righe.join('\n');
}

/* legge un questionario compilato (o un'esportazione) e riempie le caselle */
function alImportaRisposte(testo) {
  const T = alAlbero(), R = alRisposte();
  const righe = String(testo || '').split(/\r?\n/);
  let id = null, dentro = false, buf = [], n = 0, ignorati = 0;
  const chiudi = () => {
    if (id) { const t = buf.join('\n').trim(); if (t) { if (T.indice[id] && !T.indice[id].figli) { R[id] = { t, d: new Date().toISOString() }; n++; } else ignorati++; } }
    id = null; dentro = false; buf = [];
  };
  righe.forEach(l => {
    const m = l.match(/^\[([A-Za-z0-9:_-]+)\]/);
    if (m) { chiudi(); id = m[1]; return; }
    if (!id) return;
    if (/^———+\s*$/.test(l)) { chiudi(); return; }
    if (!dentro) { if (/^RISPOSTA:\s*$/.test(l)) dentro = true; return; }
    buf.push(l);
  });
  chiudi();
  if (!n && !ignorati) { $('#esito').textContent = 'Non ho trovato risposte: serve il formato del questionario, con [id] e RISPOSTA:.'; return; }
  MEM.set('albero.risposte', R);
  vistaAlbero();
  $('#esito').textContent = `Importate ${n} risposte${ignorati ? `, ${ignorati} ignorate (id sconosciuto)` : ''}.`;
}

/* riaggiorna stato e contatori senza ridisegnare tutto */
function alAggiornaFoglia(f) {
  const R = alRisposte(), V = alVoti(), id = f.dataset.id, st = alStato(id, R, V);
  f.className = 'al-foglia al-' + st;
  const r = R[id] || {}, v = V[id];
  $('.al-stato', f).textContent = st === 'corretta' ? `corretta il ${alData(v.d)}` : st === 'da-correggere' ? `scritta il ${alData(r.d)} · da correggere` : 'da scrivere';
  /* contatori dei rami che la contengono */
  const T = alAlbero();
  let n = T.indice[id] && T.indice[id].gen;
  while (n) {
    const d = document.getElementById('al-' + n.id);
    if (d) { const a = alAggrega(n, R, V), m = alMedia(a);
      $('.al-meta', d).innerHTML = [`${a.foglie} ${a.foglie === 1 ? 'domanda' : 'domande'}`, a.scritte ? `${a.scritte} scritte` : '', a.corrette ? `${a.corrette} corrette` : '', a.deboli ? `<b>${a.deboli} sotto ${AL_SOGLIA}</b>` : ''].filter(Boolean).join(' · ');
      const vv = $('summary .al-voto', d); if (vv) vv.outerHTML = m != null ? alVoto(m, 'al-media') : '<span class="al-voto al-vuoto">—</span>'; }
    n = n.gen;
  }
  const tot = alAggrega({ figli: T.rami }, R, V);
  const cifre = $$('.dato-cifra'); if (cifre[1]) cifre[1].textContent = tot.scritte;
  const eti = $$('.dato-eti'); if (eti[1]) eti[1].textContent = `risposte scritte · ${tot.daCorreggere} da correggere`;
}

function alApplicaFiltro() {
  const albero = $('#alAlbero'), fil = albero.dataset.filtro || 'tutte';
  const V = alVoti();
  $$('.al-foglia', albero).forEach(f => {
    const v = V[f.dataset.id];
    const ok = fil === 'tutte' ? true
      : fil === 'deboli' ? !!(v && v.p < AL_SOGLIA)
      : f.classList.contains('al-' + fil);
    f.hidden = !ok;
  });
  /* i rami senza foglie visibili spariscono */
  $$('details.al-nodo', albero).reverse().forEach(d => {
    d.hidden = ![...d.querySelectorAll('.al-foglia')].some(f => !f.hidden);
  });
}

function alApriPercorso(id, focus) {
  const T = alAlbero(); let n = T.indice[id]; if (!n) return;
  const s = new Set(MEM.get('albero.aperti', T.rami.map(r => r.id)));
  for (let g = n.gen; g; g = g.gen) { const d = document.getElementById('al-' + g.id); if (d) { d.open = true; d.hidden = false; s.add(g.id); } }
  MEM.set('albero.aperti', [...s]);
  const el = document.getElementById('al-' + id); if (!el) return;
  el.hidden = false;
  setTimeout(() => { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); if (focus) { const ta = $('textarea', el); if (ta) ta.focus(); } }, 60);
}

/* ---------- esportazione per la correzione ---------- */
function alEsportazione(tutte) {
  const T = alAlbero(), R = alRisposte(), V = alVoti();
  const percorso = f => { const p = []; for (let g = f.gen; g; g = g.gen) p.unshift(g.titolo); return p.join(' › '); };
  const voci = T.foglie.filter(f => { const st = alStato(f.id, R, V); return st === 'da-correggere' || (tutte && st === 'corretta'); });
  if (!voci.length) return '';
  const righe = [
    'ALBERO DI STUDIO — risposte da correggere',
    `Data: ${new Date().toLocaleDateString('it-IT')}`,
    'Corso: Psicologia Generale (SFO_PGE)',
    '',
    `Per ogni voce dai un voto da 1 a 100 su quello che avrei dovuto dire (traccia: campo «deve» in data/albero.js, oppure il blocco della scheda indicato in «rif»), con una nota breve su che cosa mancava. Aggiorna PGE.albero.voti nel sito e restituiscimi il JSON da incollare in «Incolla i voti». Conserva il campo r: è la versione della risposta corretta.`,
    '', '———', ''
  ];
  voci.forEach(f => {
    const r = R[f.id], v = V[f.id];
    righe.push(`[${f.id}] ${percorso(f)} › ${f.titolo}`, `Domanda: ${f.domanda || ''}`, `rif: ${f.rif || (f.fonte && f.fonte.scheda ? f.fonte.scheda : '')} · scritta: ${r.d}`);
    if (v) righe.push(`Voto precedente: ${v.p} (${v.d})`);
    righe.push('RISPOSTA:', r.t.trim(), '', '———', '');
  });
  return righe.join('\n');
}

/* ---------- importazione dei voti ---------- */
function alImporta(testo) {
  let dati;
  try { dati = JSON.parse(testo.trim()); } catch (e) { $('#esito').textContent = 'Non è un JSON valido.'; return; }
  if (dati && dati.voti) dati = dati.voti;
  const T = alAlbero(), loc = MEM.get('albero.voti', {});
  let n = 0, ignorati = 0;
  Object.keys(dati || {}).forEach(id => {
    const v = dati[id]; if (!T.indice[id] || !v || typeof v.p !== 'number') { ignorati++; return; }
    const prec = loc[id];
    const storico = {};
    if (prec) { (prec.storico || []).forEach(h => storico[h.d] = h.p); storico[prec.d] = prec.p; }
    (v.storico || []).forEach(h => storico[h.d] = h.p);
    const d = v.d || new Date().toISOString().slice(0, 10);
    delete storico[d];
    loc[id] = { p: Math.max(1, Math.min(100, Math.round(v.p))), d, n: v.n || '', r: v.r || '', storico: Object.keys(storico).sort().map(k => ({ d: k, p: storico[k] })) };
    n++;
  });
  MEM.set('albero.voti', loc);
  vistaAlbero();
  $('#esito').textContent = `Importati ${n} voti${ignorati ? `, ${ignorati} ignorati (id sconosciuto o voto mancante)` : ''}.`;
}
