/* MAPPE CONCETTUALI — la pagina.

   Una mappa per macro-argomento, da esplorare scendendo: si parte dalla
   radice, si apre un ramo, si scende fino alle definizioni di base.
   La descrizione di un nodo compare solo quando la si chiede — clic sul
   nodo — oppure per tutti insieme con «Descrizioni nella mappa».

   Due viste sugli stessi dati:
     mappa    albero orizzontale, trascinabile e ingrandibile
     elenco   indice annidato: quello da telefono, e da tastiera

   Il disegno della mappa usa nodi HTML (così il testo va a capo da sé
   e si misura) sopra uno strato SVG per i rami. Nessuna libreria.     */

const MP_GAP_X = 58, MP_GAP_Y = 9;
let MP_STATO = null;               /* la mappa viva, per smontarla uscendo */

/* ---------------- preparazione dei dati ----------------
   Da ogni albero ricava: id stabili dal percorso dei titoli, genitore,
   livello, lezione ereditata, colore del ramo, testo per la ricerca.   */
function mpSlug(t) {
  return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 42) || 'nodo';
}
function mpTesto(html) { return String(html || '').replace(/<[^>]+>/g, ''); }
function mpNorm(t) {
  return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function mpParteAtlante(id) {
  if (!id || !PGE.atlante) return null;
  for (const s of PGE.atlante.sezioni) {
    const p = s.parti.find(x => x.id === id);
    if (p) return { sezione: s, parte: p };
  }
  return null;
}

function mpPrepara(macro) {
  if (macro._pronta) return macro;
  /* la lettura della bozza avviene UNA VOLTA SOLA per macro in tutta la
     sessione (al primo caricamento): _pronta viene rimesso a false a ogni
     modifica per rifare gli id, ma senza questa guardia ogni ripreparazione
     rileggerebbe da localStorage la bozza salvata un passo prima — cioè
     PRIMA della modifica appena fatta — e la modifica sparirebbe subito
     dopo averla salvata. */
  if (!macro._inizializzata) {
    macro._inizializzata = true;
    /* fotografia della versione pubblicata, prima di applicare la bozza:
       serve a «Scarta le modifiche» */
    macro._pulitoPubblicato = mpPulisci(macro.radice);
    const bozza = MEM.get('mappe.bozza.' + macro.id, null);
    macro._daBozza = !!bozza;
    if (bozza) macro.radice = bozza;
  }
  const indice = {};
  function visita(n, genitore, liv, ramo, f) {
    const base = genitore ? genitore.id + '/' + mpSlug(n.t) : macro.id;
    let id = base, k = 2;
    while (indice[id]) id = base + '-' + (k++);
    n.id = id; n.genitore = genitore; n.liv = liv;
    n.ramo = liv === 1 ? (genitore.figli.indexOf(n) % 6) : ramo;
    n.lez = n.f || f;
    /* superfluo: segnato sul nodo o ereditato da un antenato */
    n._es = !!n.es || !!(genitore && genitore._es);
    const atl = mpParteAtlante(n.atl);
    n._atl = atl;
    n.descr = n.d || (atl ? atl.parte.scheda.fa : '');
    n._cerca = mpNorm(n.t + ' ' + mpTesto(n.descr));
    n.figli = n.figli || [];
    indice[id] = n;
    n.figli.forEach(c => visita(c, n, liv + 1, n.ramo, n.lez));
  }
  visita(macro.radice, null, 0, -1, macro.radice.f);
  macro._indice = indice;
  macro._pronta = true;
  return macro;
}

function mpPercorso(n) { const p = []; while (n) { p.unshift(n); n = n.genitore; } return p; }

/* Solo i campi autorati (t, d, f, es, atl, figli): esattamente la forma
   con cui i nodi sono scritti a mano in data/mappe.js. Usata sia per
   fotografare la versione pubblicata al primo caricamento, sia per
   salvare la bozza in locale, sia per l'esportazione. */
function mpPulisci(n) {
  const o = { t: n.t };
  if (n.d) o.d = n.d;
  if (n.f) o.f = n.f;
  if (n.es) o.es = true;
  if (n.atl) o.atl = n.atl;
  if (n.figli && n.figli.length) o.figli = n.figli.map(mpPulisci);
  return o;
}

/* Il testo pronto da incollare in data/mappe.js al posto del campo
   "radice" di questa voce — o da passare in chat perché lo faccia. */
function mpTestoEsportazione(macro) {
  const quando = new Date().toLocaleString('it-IT');
  return `/* Mappa "${macro.titolo}" (id:"${macro.id}") — bozza esportata da #/mappe/${macro.id}
   il ${quando}. Sostituisce il campo "radice" della voce corrispondente
   in data/mappe.js. */\n` + JSON.stringify(mpPulisci(macro.radice), null, 2);
}

/* ---------------- il pannello: la descrizione su richiesta ---------------- */
function mpPannello(macro, n, nascondi) {
  if (!n) return `<p class="occhiello">Descrizione</p>
    <p>Clicca un nodo per leggerne la descrizione. Il cerchio a destra del nodo apre e chiude i rami.</p>
    <p class="nota">Nella mappa: trascina per spostarti, rotella o pizzico per ingrandire. Da tastiera: frecce per muoversi, Invio per aprire.</p>`;

  const briciole = mpPercorso(n).map((x, i, a) => i === a.length - 1
    ? `<span aria-current="page">${esc(x.t)}</span>`
    : `<button class="mp-briciola" data-vai="${x.id}">${esc(x.t)}</button>`).join('<span class="mp-sep">›</span>');

  const lez = n.lez ? `<a href="#/lezioni/${n.lez}">Lezione ${n.lez.replace(/^L0?/, '')}</a>` : '';

  /* Un nodo può avere un testo proprio, la scheda dell'atlante, o entrambi.
     La scheda è a schema fisso e si mostra per intero; il link porta alla
     parte già selezionata nel modello (rotta #/atlante/<sezione>/<parte>). */
  let corpo = n.d ? `<p class="mp-descr">${n.d}</p>` : '';
  if (n._atl) {
    const s = n._atl.parte.scheda;
    corpo += (n.d ? `<p class="mp-eti mp-eti-atl">Dalla scheda dell'atlante</p>` : '') +
      PGE.atlante.blocchi.map(([k, et]) => s[k] && s[k] !== '—'
        ? `<div class="mp-blocco"><p class="mp-eti">${et}</p><p>${s[k]}</p></div>` : '').join('') +
      `<p><a class="bottone vuoto mp-3d" href="#/atlante/${n._atl.sezione.id}/${n.atl}">Apri nel modello 3D</a></p>`;
  }

  const sotto = nascondi ? n.figli.filter(c => !c._es) : n.figli;
  const cartellino = n._es
    ? `<p class="mp-cartellino mp-cart-es">Superfluo · esempio, esperimento illustrativo o aneddoto: serve a capire, non va imparato</p>`
    : (!sotto.length && n.liv > 0 ? `<p class="mp-cartellino mp-cart-fin">Elemento finale · da sapere</p>` : '');
  const figli = sotto.length ? `<p class="mp-eti">Scendi</p>
    <div class="mp-scendi">${sotto.map(c => `<button class="mp-giu${c._es ? ' mp-giu-es' : (!c.figli.length ? ' mp-giu-fin' : '')}" data-vai="${c.id}"
      style="--tinta:var(--mp-c${Math.max(c.ramo, 0)})">${esc(c.t)}${c.figli.length ? ` <span>${c.figli.length}</span>` : ''}</button>`).join('')}</div>` : '';

  return `<nav class="mp-briciole" aria-label="Percorso">${briciole}</nav>
    <p class="occhiello">${lez || esc(macro.titolo)}</p>
    <h2 class="mp-titolo">${esc(n.t)}</h2>
    ${cartellino}
    ${corpo}
    ${figli}`;
}

/* ---------------- la vista ---------------- */
function vistaMappe(idMacro) {
  mpChiudi();
  const macro = mpPrepara(PGE.mappe.macro.find(m => m.id === idMacro) ||
    PGE.mappe.macro.find(m => m.id === MEM.get('mappe.ultima', 'def')) || PGE.mappe.macro[0]);
  MEM.set('mappe.ultima', macro.id);
  main.classList.add('mp-full');

  const stretto = window.matchMedia('(max-width: 900px)').matches;
  const st = {
    macro,
    vista: MEM.get('mappe.vista', stretto ? 'elenco' : 'mappa'),
    descr: MEM.get('mappe.descr', false),
    nascondi: MEM.get('mappe.nascondi', false),
    modifica: false, /* non si ricorda da una sessione all'altra: si riparte in lettura */
    aperti: new Set(MEM.get('mappe.aperti.' + macro.id, [macro.radice.id])),
    scelto: MEM.get('mappe.scelto.' + macro.id, null),
    trovati: [], iTrovato: -1,
    tx: 0, ty: 0, s: 1, pos: {}, vivo: true, animazione: 0
  };
  if (!macro._indice[st.scelto] || (st.nascondi && macro._indice[st.scelto]._es)) st.scelto = null;
  const puoSchermoIntero = !!(document.fullscreenEnabled);

  /* i figli che si vedono: con «Nascondi il superfluo» i nodi gialli spariscono */
  const figliDi = n => st.nascondi ? n.figli.filter(c => !c._es) : n.figli;
  const contaDi = n => figliDi(n).reduce((t, c) => t + 1 + contaDi(c), 0);
  const tuttiNodi = Object.values(macro._indice);
  const quantiFinali = tuttiNodi.filter(n => n.liv > 0 && !n.figli.length && !n._es).length;
  const quantiSuperflui = tuttiNodi.filter(n => n._es).length;
  st.aperti.add(macro.radice.id);
  MP_STATO = st;

  const nodi = Object.keys(macro._indice).length;
  main.innerHTML = `
    <p class="occhiello">Studio · Mappe concettuali</p>
    <h1>${esc(macro.titolo)}</h1>
    ${macro._daBozza ? `<p class="nota mp-nota-bozza">Stai vedendo una <strong>bozza modificata in questo browser</strong>, non ancora pubblicata.</p>` : ''}
    <p class="sommario">${nodi} nodi, dalla radice fino alle definizioni di base: ${quantiFinali} elementi finali da sapere e ${quantiSuperflui} superflui. Apri i rami che ti servono; la descrizione compare quando la chiedi.</p>

    <div class="filtri">${PGE.mappe.macro.map(m => `<a class="chip${m.id === macro.id ? ' attivo' : ''}" href="#/mappe/${m.id}">${esc(m.titolo)}</a>`).join('')}</div>

    <div class="mp-attrezzi">
      <div class="mp-segmenti" role="tablist" aria-label="Vista">
        <button role="tab" data-vista="mappa" class="${st.vista === 'mappa' ? 'attivo' : ''}">Mappa</button>
        <button role="tab" data-vista="elenco" class="${st.vista === 'elenco' ? 'attivo' : ''}">Elenco</button>
      </div>
      ${puoSchermoIntero ? `<button class="bottone vuoto" id="mpSchermo">Schermo intero</button>` : ''}
      <button class="bottone vuoto" id="mpApriTutto">Espandi tutto</button>
      <button class="bottone vuoto" id="mpChiudiTutto">Comprimi</button>
      <label class="atl-spunta"><input type="checkbox" id="mpDescr" ${st.descr ? 'checked' : ''}> Descrizioni nella mappa</label>
      <label class="atl-spunta"><input type="checkbox" id="mpNascondi" ${st.nascondi ? 'checked' : ''}> Nascondi il superfluo</label>
      <label class="atl-spunta"><input type="checkbox" id="mpModifica"> Modalità modifica</label>
      <div class="mp-cerca">
        <input type="search" id="mpCerca" placeholder="Cerca un concetto…" autocomplete="off" aria-label="Cerca nella mappa">
        <span id="mpConta" class="mp-conta" aria-live="polite"></span>
      </div>
    </div>

    <div class="mp-modifica-barra" id="mpModificaBarra" hidden>
      <p class="nota">La modifica resta <strong>solo in questo browser</strong> — una bozza salvata in locale, come le risposte dell'Albero di studio. Per farla vedere a tutti bisogna <strong>esportarla</strong> e incollarla in <code>data/mappe.js</code> al posto del campo <code>radice</code> di questa voce, poi ricostruire e pubblicare il sito — oppure incollarla in chat e chiedere di farlo.</p>
      <div class="al-azioni">
        <button class="bottone" id="mpEsporta">Copia questa mappa modificata</button>
        <button class="bottone vuoto" id="mpEsportaFile">Scarica come file</button>
        <button class="bottone vuoto" id="mpScarta">Scarta le modifiche di questa mappa</button>
      </div>
      <p class="mp-esito" id="esito"></p>
    </div>

    <p class="mp-legenda" aria-label="Legenda dei colori">
      <span class="mp-leg mp-leg-fin">elemento finale, da sapere</span>
      <span class="mp-leg mp-leg-es">superfluo: esempi, esperimenti illustrativi, aneddoti</span>
      <span class="mp-leg mp-leg-ramo">ramo intermedio, nel colore del suo ramo</span>
    </p>

    <div class="mp-banco" id="mpBanco">
      <div class="mp-scena${st.vista === 'mappa' ? '' : ' mp-nascosta'}" id="mpScena" tabindex="-1">
        <div class="mp-tela" id="mpTela"><svg class="mp-rami" id="mpRami" aria-hidden="true"></svg></div>
        <div class="mp-zoom">
          <button id="mpPiu" aria-label="Ingrandisci">+</button>
          <button id="mpMeno" aria-label="Rimpicciolisci">−</button>
          <button id="mpAdatta" aria-label="Adatta alla finestra">⤢</button>
        </div>
      </div>
      <div class="mp-elenco${st.vista === 'elenco' ? '' : ' mp-nascosta'}" id="mpElenco"></div>
      <aside class="mp-pannello" id="mpPannello" aria-live="polite"></aside>
    </div>
  `;

  const scena = $('#mpScena'), tela = $('#mpTela'), svg = $('#mpRami');
  const pannello = $('#mpPannello'), elenco = $('#mpElenco');

  function salva() {
    MEM.set('mappe.aperti.' + macro.id, [...st.aperti]);
    MEM.set('mappe.scelto.' + macro.id, st.scelto);
  }

  /* il pannello di lettura, più — in modalità modifica — il modulo
     di modifica sotto: due funzioni separate, una sola chiamata */
  function mostraPannello(n) {
    pannello.innerHTML = mpPannello(macro, n, st.nascondi) + (st.modifica ? mpModuloModifica(n) : '');
  }

  /* ================= MODIFICA ================= */
  function mpModuloModifica(n) {
    if (!n) return `<div class="mp-editor">
      <p class="mp-eti">Modifica</p>
      <p class="nota">Seleziona un nodo per modificarlo, oppure aggiungi un primo ramo alla radice.</p>
      <div class="mp-editor-azioni"><button class="bottone vuoto" id="mpAggiungi">Aggiungi un ramo alla radice</button></div>
    </div>`;
    const radice = n.liv === 0;
    return `<div class="mp-editor">
      <p class="mp-eti">Modifica questo nodo</p>
      <label class="mp-campo">Titolo
        <input type="text" id="mpCT" value="${esc(n.t)}">
      </label>
      <label class="mp-campo">Descrizione <span class="nota">— HTML: &lt;strong&gt;, &lt;em&gt;, &lt;br&gt;…</span>
        <textarea id="mpCD" rows="5" spellcheck="false">${esc(n.d || '')}</textarea>
      </label>
      ${n._atl ? `<p class="nota">Questo nodo prende anche la scheda dell'atlante (<code>atl:"${esc(n.atl)}"</code>): la descrizione qui sopra si aggiunge, non la sostituisce.</p>` : ''}
      <label class="mp-campo">Lezione di riferimento <span class="nota">— vuoto = eredita da sopra</span>
        <input type="text" id="mpCF" value="${esc(n.f || '')}" placeholder="es. L08">
      </label>
      <label class="mp-check"><input type="checkbox" id="mpCE" ${n.es ? 'checked' : ''}> Superfluo — esempio, esperimento illustrativo o aneddoto</label>
      <div class="mp-editor-azioni">
        <button class="bottone" id="mpSalva">Salva le modifiche</button>
        <button class="bottone vuoto" id="mpAggiungi">Aggiungi un nodo sotto</button>
        ${!radice ? `<button class="bottone vuoto" id="mpSu">Sposta su</button>
        <button class="bottone vuoto" id="mpGiu">Sposta giù</button>
        <button class="bottone vuoto mp-elimina" id="mpElimina">Elimina questo nodo</button>` : ''}
      </div>
    </div>`;
  }

  function mpContaSotto(n) { return (n.figli || []).reduce((s, c) => s + 1 + mpContaSotto(c), 0); }

  /* Ogni operazione che cambia titoli o struttura passa da qui: rifà
     gli id (dipendono dal percorso dei titoli), tiene aperto e
     selezionato il nodo su cui si stava lavorando, salva la bozza. */
  function mpRipreparaEPersisti(nodoRif) {
    const eraAperto = st.aperti.has(nodoRif.id);
    macro._pronta = false;
    mpPrepara(macro);
    if (eraAperto) st.aperti.add(nodoRif.id);
    if (nodoRif.genitore) st.aperti.add(nodoRif.genitore.id);
    st.scelto = nodoRif.id;
    MEM.set('mappe.bozza.' + macro.id, mpPulisci(macro.radice));
    salva();
    mostraPannello(nodoRif);
    ridisegna(nodoRif.id);
  }

  function mpAggiungiFiglio(genitore) {
    const nuovo = { t: 'Nuovo nodo', d: '' };
    (genitore.figli = genitore.figli || []).push(nuovo);
    st.aperti.add(genitore.id);
    mpRipreparaEPersisti(nuovo);
  }

  function mpElimina(n) {
    if (!n.genitore) return;
    const sotto = mpContaSotto(n);
    if (!confirm(`Eliminare «${n.t}»${sotto ? ` e i suoi ${sotto} sotto-nodi` : ''}? Resta solo in questo browser finché non pubblichi la mappa.`)) return;
    const g = n.genitore;
    g.figli = g.figli.filter(x => x !== n);
    mpRipreparaEPersisti(g);
  }

  function mpSposta(n, delta) {
    const g = n.genitore; if (!g) return;
    const arr = g.figli, i = arr.indexOf(n), j = i + delta;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    mpRipreparaEPersisti(n);
  }

  function mpScartaBozza() {
    if (!confirm(`Scartare tutte le modifiche di «${macro.titolo}» e tornare alla versione pubblicata? Non si può annullare.`)) return;
    MEM.del('mappe.bozza.' + macro.id);
    MEM.del('mappe.aperti.' + macro.id);
    MEM.del('mappe.scelto.' + macro.id);
    macro.radice = mpPulisci(macro._pulitoPubblicato);
    macro._pronta = false;
    vistaMappe(macro.id);
  }

  /* ================= SELEZIONE ================= */
  function seleziona(id, opz) {
    opz = opz || {};
    const n = macro._indice[id]; if (!n) return;
    st.scelto = id;
    /* per vedere un nodo bisogna che i suoi antenati siano aperti */
    mpPercorso(n).slice(0, -1).forEach(a => st.aperti.add(a.id));
    if (opz.apri && n.figli.length) st.aperti.add(id);
    mostraPannello(n);
    salva();
    ridisegna(opz.centra !== false ? id : null);
    if (opz.focus) {
      const el = st.vista === 'mappa' ? tela.querySelector(`[data-id="${CSS.escape(id)}"]`) : elenco.querySelector(`[data-voce="${CSS.escape(id)}"]`);
      el && el.focus({ preventScroll: true });
    }
  }

  function apriChiudi(id) {
    if (st.aperti.has(id) && id !== macro.radice.id) {
      st.aperti.delete(id);
      /* chiudere un ramo chiude anche i sotto-rami: riaprendolo si riparte pulito */
      Object.keys(macro._indice).forEach(k => { if (k.indexOf(id + '/') === 0) st.aperti.delete(k); });
    } else st.aperti.add(id);
    salva();
    ridisegna(null, id);
  }

  pannello.addEventListener('click', e => {
    const b = e.target.closest('[data-vai]');
    if (b) { seleziona(b.dataset.vai, { apri: true }); return; }
    /* chi apre il modello da una mappa vuole studiare quella parte:
       se l'atlante era rimasto in modalità test, il quiz la coprirebbe */
    if (e.target.closest('.mp-3d')) MEM.set('atlante.modo', 'studio');
    if (!st.modifica) return;

    if (e.target.closest('#mpAggiungi')) { mpAggiungiFiglio(macro._indice[st.scelto] || macro.radice); return; }
    const n = macro._indice[st.scelto];
    if (!n) return;
    if (e.target.closest('#mpSalva')) {
      const titolo = $('#mpCT', pannello).value.trim();
      if (!titolo) { $('#esito').textContent = 'Il titolo non può restare vuoto.'; return; }
      n.t = titolo;
      n.d = $('#mpCD', pannello).value;
      if ($('#mpCE', pannello).checked) n.es = true; else delete n.es;
      const lez = $('#mpCF', pannello).value.trim();
      if (lez) n.f = lez; else delete n.f;
      mpRipreparaEPersisti(n);
      $('#esito').textContent = 'Salvato in questo browser.';
    } else if (e.target.closest('#mpSu')) mpSposta(n, -1);
    else if (e.target.closest('#mpGiu')) mpSposta(n, 1);
    else if (e.target.closest('#mpElimina')) mpElimina(n);
  });

  function ridisegna(centraSu, ancora) {
    if (st.vista === 'mappa') disegnaMappa(centraSu, ancora);
    else disegnaElenco(centraSu);
  }

  /* ================= VISTA MAPPA ================= */
  function visibili() {
    const out = [];
    (function giu(n) { out.push(n); if (st.aperti.has(n.id)) figliDi(n).forEach(giu); })(macro.radice);
    return out;
  }

  function htmlNodo(n) {
    const aperto = st.aperti.has(n.id);
    const sotto = figliDi(n);
    const cls = ['mp-nodo',
      n._es ? 'mp-superfluo' : (!sotto.length && n.liv > 0 ? 'mp-finale' : ''),
      n.liv === 0 ? 'mp-radice' : '',
      n.id === st.scelto ? 'mp-scelto' : '',
      st.trovati.includes(n.id) ? 'mp-trovato' : '',
      n._atl ? 'mp-con3d' : ''].filter(Boolean).join(' ');
    const tinta = n.liv === 0 ? 'var(--accento)' : `var(--mp-c${n.ramo})`;
    return `<div class="${cls}" data-id="${n.id}" tabindex="0" role="button"
        aria-label="${esc(n.t)}${n._es ? ', superfluo' : ''}${sotto.length ? (aperto ? ', aperto' : ', ' + sotto.length + ' rami chiusi') : (n.liv > 0 ? ', elemento finale' : '')}"
        style="--tinta:${tinta}">
      <span class="mp-t">${esc(n.t)}</span>
      ${st.descr && n.liv > 0 ? `<span class="mp-d">${n.descr}</span>` : ''}
      ${sotto.length ? `<button class="mp-apri" data-apri="${n.id}" tabindex="-1" aria-label="${aperto ? 'Chiudi' : 'Apri'} il ramo">${aperto ? '−' : sotto.length}</button>` : ''}
    </div>`;
  }

  function disegnaMappa(centraSu, ancora) {
    const vis = visibili();
    const prima = Object.assign({}, st.pos);
    /* coordinate a schermo dell'ancora, per tenerla ferma mentre il ramo si apre */
    const primaAncora = ancora && prima[ancora] ? { x: prima[ancora].x * st.s + st.tx, y: prima[ancora].y * st.s + st.ty } : null;

    /* 1 — i nodi nel DOM, per misurarli */
    tela.querySelectorAll('.mp-nodo').forEach(el => el.remove());
    tela.insertAdjacentHTML('beforeend', vis.map(htmlNodo).join(''));
    const els = {};
    tela.querySelectorAll('.mp-nodo').forEach(el => els[el.dataset.id] = el);
    const mis = {};
    vis.forEach(n => { const el = els[n.id]; mis[n.id] = { w: el.offsetWidth, h: el.offsetHeight }; });

    /* 2 — colonne per livello, righe per foglia: i genitori al centro dei figli */
    const colW = [];
    vis.forEach(n => colW[n.liv] = Math.max(colW[n.liv] || 0, mis[n.id].w));
    const colX = []; let x = 0;
    colW.forEach((w, i) => { colX[i] = x; x += w + MP_GAP_X; });
    let y = 0;
    const pos = {};
    (function piazza(n) {
      const m = mis[n.id];
      const figli = st.aperti.has(n.id) ? figliDi(n) : [];
      if (!figli.length) { pos[n.id] = { x: colX[n.liv], y: y + m.h / 2, w: m.w, h: m.h }; y += m.h + MP_GAP_Y; return; }
      const inizio = y;
      figli.forEach(piazza);
      const fine = y - MP_GAP_Y;
      let cy = (inizio + fine) / 2;
      /* un genitore più alto del blocco dei figli non deve sovrapporsi al vicino */
      if (m.h > fine - inizio) { const extra = m.h - (fine - inizio); y += extra; cy += extra / 2; }
      pos[n.id] = { x: colX[n.liv], y: cy, w: m.w, h: m.h };
    })(macro.radice);
    const larg = x, alt = y;
    svg.setAttribute('width', larg); svg.setAttribute('height', alt);
    svg.style.width = larg + 'px'; svg.style.height = alt + 'px';

    /* 3 — da dove parte l'animazione: i nuovi nodi escono dal genitore */
    const da = {};
    vis.forEach(n => {
      if (prima[n.id]) da[n.id] = prima[n.id];
      else { let g = n.genitore; while (g && !prima[g.id]) g = g.genitore; da[n.id] = g ? Object.assign({}, prima[g.id], { w: pos[n.id].w, h: pos[n.id].h, nuovo: true }) : pos[n.id]; }
    });
    st.pos = pos;

    /* l'ancora resta dov'era sullo schermo: si sposta la tela, non l'occhio */
    if (primaAncora && pos[ancora]) {
      st.tx = primaAncora.x - pos[ancora].x * st.s;
      st.ty = primaAncora.y - pos[ancora].y * st.s;
    }

    const rami = vis.filter(n => n.genitore);
    const pigro = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    cancelAnimationFrame(st.animazione);
    const t0 = performance.now(), durata = pigro || !Object.keys(prima).length ? 0 : 300;

    function fotogramma(ora) {
      const k = durata ? Math.min(1, (ora - t0) / durata) : 1;
      const e = 1 - Math.pow(1 - k, 3);
      const cur = {};
      vis.forEach(n => {
        const a = da[n.id], b = pos[n.id];
        cur[n.id] = { x: a.x + (b.x - a.x) * e, y: a.y + (b.y - a.y) * e, w: b.w, h: b.h };
        const el = els[n.id];
        el.style.transform = `translate(${cur[n.id].x}px,${cur[n.id].y - b.h / 2}px)`;
        if (a.nuovo) el.style.opacity = e;
      });
      svg.innerHTML = rami.map(n => {
        const p = cur[n.genitore.id], c = cur[n.id];
        const x1 = p.x + p.w, y1 = p.y, x2 = c.x, y2 = c.y, xm = (x1 + x2) / 2;
        return `<path d="M${x1},${y1} C${xm},${y1} ${xm},${y2} ${x2},${y2}" style="stroke:var(--mp-c${n.ramo})"
          class="${n.id === st.scelto || (st.scelto && st.scelto.indexOf(n.id + '/') === 0) ? 'mp-ramo-attivo' : ''}"/>`;
      }).join('');
      applicaVista();
      if (k < 1) st.animazione = requestAnimationFrame(fotogramma);
    }
    fotogramma(performance.now());

    if (centraSu && pos[centraSu]) centra(centraSu);
  }

  /* ---- trascinare e ingrandire ---- */
  function applicaVista() { tela.style.transform = `translate(${st.tx}px,${st.ty}px) scale(${st.s})`; }
  function zoomA(s, cx, cy) {
    s = Math.min(2.4, Math.max(0.25, s));
    st.tx = cx - (cx - st.tx) * (s / st.s);
    st.ty = cy - (cy - st.ty) * (s / st.s);
    st.s = s; applicaVista();
  }
  function centra(id) {
    const p = st.pos[id]; if (!p) return;
    const r = scena.getBoundingClientRect();
    /* se il nodo ha i figli aperti, lo si tiene a sinistra del centro:
       i figli stanno alla sua destra e devono entrare nella vista */
    const n = macro._indice[id];
    const quota = n && figliDi(n).length && st.aperti.has(id) ? 0.32 : 0.5;
    const mx = r.width * quota - (p.x + p.w / 2) * st.s, my = r.height / 2 - p.y * st.s;
    const dx = st.tx, dy = st.ty, t0 = performance.now();
    const pigro = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (pigro) { st.tx = mx; st.ty = my; applicaVista(); return; }
    (function passo(ora) {
      const k = Math.min(1, (ora - t0) / 380), e = 1 - Math.pow(1 - k, 3);
      st.tx = dx + (mx - dx) * e; st.ty = dy + (my - dy) * e; applicaVista();
      if (k < 1 && st.vivo) requestAnimationFrame(passo);
    })(t0);
  }
  function adatta() {
    const r = scena.getBoundingClientRect();
    const w = parseFloat(svg.getAttribute('width')) || 1, h = parseFloat(svg.getAttribute('height')) || 1;
    const s = Math.min(1.1, Math.max(0.25, Math.min((r.width - 48) / w, (r.height - 48) / h)));
    st.s = s; st.tx = (r.width - w * s) / 2; st.ty = (r.height - h * s) / 2; applicaVista();
  }

  scena.addEventListener('wheel', e => {
    e.preventDefault();
    const r = scena.getBoundingClientRect();
    zoomA(st.s * Math.exp(-e.deltaY * 0.0016), e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });

  const puntatori = new Map();
  let trascina = null, pizzico = null;
  scena.addEventListener('pointerdown', e => {
    if (e.target.closest('.mp-zoom')) return;
    puntatori.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (puntatori.size === 1) trascina = { x: e.clientX, y: e.clientY, tx: st.tx, ty: st.ty, mosso: false };
    if (puntatori.size === 2) {
      const [a, b] = [...puntatori.values()];
      pizzico = { d: Math.hypot(a.x - b.x, a.y - b.y), s: st.s };
      trascina = null;
    }
  });
  scena.addEventListener('pointermove', e => {
    if (!puntatori.has(e.pointerId)) return;
    puntatori.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pizzico && puntatori.size === 2) {
      const [a, b] = [...puntatori.values()];
      const r = scena.getBoundingClientRect();
      zoomA(pizzico.s * Math.hypot(a.x - b.x, a.y - b.y) / pizzico.d, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      return;
    }
    if (!trascina) return;
    const dx = e.clientX - trascina.x, dy = e.clientY - trascina.y;
    if (!trascina.mosso && Math.hypot(dx, dy) < 5) return;
    if (!trascina.mosso) { trascina.mosso = true; scena.setPointerCapture(e.pointerId); scena.classList.add('mp-trascina'); }
    st.tx = trascina.tx + dx; st.ty = trascina.ty + dy; applicaVista();
  });
  function fine(e) {
    puntatori.delete(e.pointerId);
    if (puntatori.size < 2) pizzico = null;
    scena.classList.remove('mp-trascina');
    const eraTrascinamento = trascina && trascina.mosso;
    if (puntatori.size === 0) trascina = null;
    if (eraTrascinamento) return;
    /* un clic, non un trascinamento */
    if (e.type !== 'pointerup') return;
    const ap = e.target.closest('[data-apri]');
    if (ap) { apriChiudi(ap.dataset.apri); return; }
    const nodo = e.target.closest('.mp-nodo');
    if (nodo) {
      const id = nodo.dataset.id;
      /* primo clic: seleziona e apre; clic sul nodo già scelto: apre o chiude */
      if (id === st.scelto) apriChiudi(id);
      else seleziona(id, { apri: true });
    }
  }
  scena.addEventListener('pointerup', fine);
  scena.addEventListener('pointercancel', fine);

  $('#mpPiu').onclick = () => { const r = scena.getBoundingClientRect(); zoomA(st.s * 1.25, r.width / 2, r.height / 2); };
  $('#mpMeno').onclick = () => { const r = scena.getBoundingClientRect(); zoomA(st.s / 1.25, r.width / 2, r.height / 2); };
  $('#mpAdatta').onclick = adatta;

  /* ---- tastiera nella mappa: frecce come in un albero ---- */
  tela.addEventListener('keydown', e => {
    const el = e.target.closest('.mp-nodo'); if (!el) return;
    const n = macro._indice[el.dataset.id];
    const fratelli = n.genitore ? figliDi(n.genitore) : [n];
    const i = fratelli.indexOf(n);
    let vai = null;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (n.id === st.scelto) apriChiudi(n.id); else seleziona(n.id, { apri: true, focus: true }); return; }
    if (e.key === 'ArrowRight') vai = figliDi(n)[0] ? (st.aperti.add(n.id), figliDi(n)[0]) : null;
    if (e.key === 'ArrowLeft') vai = n.genitore;
    if (e.key === 'ArrowDown') vai = fratelli[i + 1];
    if (e.key === 'ArrowUp') vai = fratelli[i - 1];
    if (vai) { e.preventDefault(); seleziona(vai.id, { focus: true }); }
  });

  /* ================= VISTA ELENCO ================= */
  function disegnaElenco(centraSu) {
    function voce(n) {
      const aperto = st.aperti.has(n.id);
      const sotto = figliDi(n);
      const tinta = n.liv === 0 ? 'var(--accento)' : `var(--mp-c${n.ramo})`;
      const mostra = st.descr || n.id === st.scelto;
      const tipo = n._es ? ' mp-superfluo' : (!sotto.length && n.liv > 0 ? ' mp-finale' : '');
      return `<li role="treeitem" class="${tipo.trim()}" aria-level="${n.liv + 1}" ${sotto.length ? `aria-expanded="${aperto}"` : ''} style="--tinta:${tinta}">
        <div class="mp-riga${n.id === st.scelto ? ' mp-scelto' : ''}${st.trovati.includes(n.id) ? ' mp-trovato' : ''}">
          ${sotto.length
            ? `<button class="mp-freccia" data-apri="${n.id}" aria-label="${aperto ? 'Chiudi' : 'Apri'}">${aperto ? '▾' : '▸'}</button>`
            : '<span class="mp-freccia mp-foglia" aria-hidden="true">●</span>'}
          <button class="mp-voce" data-voce="${n.id}">${esc(n.t)}</button>
          ${sotto.length && !aperto ? `<span class="mp-quanti">${contaDi(n)}</span>` : ''}
          ${n._atl ? '<span class="mp-bollino" title="Anche nel modello 3D">3D</span>' : ''}
        </div>
        ${mostra && n.liv > 0 ? `<div class="mp-d-elenco">${n.descr}</div>` : ''}
        ${aperto && sotto.length ? `<ul role="group">${sotto.map(voce).join('')}</ul>` : ''}
      </li>`;
    }
    elenco.innerHTML = `<ul class="mp-lista" role="tree" aria-label="${esc(macro.titolo)}">${voce(macro.radice)}</ul>`;
    if (centraSu) {
      const el = elenco.querySelector(`[data-voce="${CSS.escape(centraSu)}"]`);
      el && el.scrollIntoView({ block: 'nearest' });
    }
  }
  elenco.addEventListener('click', e => {
    const ap = e.target.closest('[data-apri]');
    if (ap) { apriChiudi(ap.dataset.apri); return; }
    const v = e.target.closest('[data-voce]');
    if (!v) return;
    /* nell'elenco il clic sul nodo già scelto richiude la sua descrizione */
    if (v.dataset.voce === st.scelto) { st.scelto = null; salva(); mostraPannello(null); disegnaElenco(); return; }
    seleziona(v.dataset.voce, { apri: true, centra: false });
  });

  /* ================= ATTREZZI ================= */
  $$('.mp-segmenti button', main).forEach(b => b.onclick = () => {
    st.vista = b.dataset.vista; MEM.set('mappe.vista', st.vista);
    $$('.mp-segmenti button', main).forEach(x => x.classList.toggle('attivo', x === b));
    scena.classList.toggle('mp-nascosta', st.vista !== 'mappa');
    elenco.classList.toggle('mp-nascosta', st.vista !== 'elenco');
    st.pos = {};
    ridisegna(st.scelto);
    if (st.vista === 'mappa' && !st.scelto) adatta();
  });

  $('#mpApriTutto').onclick = () => {
    Object.values(macro._indice).forEach(n => { if (n.figli.length) st.aperti.add(n.id); });
    salva(); ridisegna(); if (st.vista === 'mappa') adatta();
  };
  $('#mpChiudiTutto').onclick = () => {
    st.aperti = new Set([macro.radice.id]); salva(); ridisegna(); if (st.vista === 'mappa') adatta();
  };
  $('#mpDescr').onchange = e => { st.descr = e.target.checked; MEM.set('mappe.descr', st.descr); ridisegna(st.scelto); };
  $('#mpNascondi').onchange = e => {
    st.nascondi = e.target.checked; MEM.set('mappe.nascondi', st.nascondi);
    if (st.nascondi && st.scelto && macro._indice[st.scelto]._es) {
      st.scelto = macro._indice[st.scelto].genitore ? macro._indice[st.scelto].genitore.id : null; salva();
    }
    mostraPannello(macro._indice[st.scelto]);
    ridisegna(st.scelto);
  };

  $('#mpModifica').onchange = e => {
    st.modifica = e.target.checked;
    $('#mpModificaBarra').hidden = !st.modifica;
    mostraPannello(macro._indice[st.scelto]);
  };
  $('#mpEsporta').onclick = () => copia(mpTestoEsportazione(macro));
  $('#mpEsportaFile').onclick = () => {
    scarica(mpTestoEsportazione(macro), `mappa-${macro.id}-${new Date().toISOString().slice(0, 10)}.js`);
    $('#esito').textContent = 'Scaricato.';
  };
  $('#mpScarta').onclick = mpScartaBozza;

  /* ---- schermo intero: tutta la pagina (barra dei filtri e attrezzi
     comprese, non solo la mappa), per non perdere i controlli ---- */
  const btnSchermo = $('#mpSchermo');
  if (btnSchermo) {
    const suFullscreen = () => {
      const attivo = document.fullscreenElement === main;
      btnSchermo.textContent = attivo ? 'Esci da schermo intero' : 'Schermo intero';
      main.classList.toggle('mp-schermo', attivo);
      if (st.vista === 'mappa') { st.pos = {}; ridisegna(st.scelto); if (!st.scelto) adatta(); }
    };
    document.addEventListener('fullscreenchange', suFullscreen);
    st.suFullscreen = suFullscreen;
    btnSchermo.onclick = () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else main.requestFullscreen().catch(() => {});
    };
  }

  /* ---- ricerca: apre i rami che contengono i risultati ---- */
  let attesa = 0;
  $('#mpCerca').addEventListener('input', e => {
    clearTimeout(attesa);
    attesa = setTimeout(() => {
      const q = mpNorm(e.target.value.trim());
      st.trovati = q.length < 2 ? [] : Object.values(macro._indice).filter(n => n._cerca.includes(q) && !(st.nascondi && n._es)).map(n => n.id);
      st.iTrovato = -1;
      st.trovati.forEach(id => mpPercorso(macro._indice[id]).slice(0, -1).forEach(a => st.aperti.add(a.id)));
      $('#mpConta').textContent = q.length < 2 ? '' : st.trovati.length ? `${st.trovati.length} · Invio per scorrere` : 'nessun risultato';
      ridisegna();
      if (st.vista === 'mappa' && st.trovati.length) adatta();
    }, 160);
  });
  $('#mpCerca').addEventListener('keydown', e => {
    if (e.key !== 'Enter' || !st.trovati.length) return;
    e.preventDefault();
    st.iTrovato = (st.iTrovato + (e.shiftKey ? -1 : 1) + st.trovati.length) % st.trovati.length;
    seleziona(st.trovati[st.iTrovato]);
    $('#mpConta').textContent = `${st.iTrovato + 1} di ${st.trovati.length}`;
  });

  /* ================= AVVIO ================= */
  mostraPannello(macro._indice[st.scelto]);
  ridisegna();
  if (st.vista === 'mappa') {
    if (st.scelto) centra(st.scelto);
    else adatta();
  }
  st.ridimensiona = () => { if (st.vista === 'mappa' && !st.scelto) adatta(); };
  window.addEventListener('resize', st.ridimensiona);
}

function mpChiudi() {
  if (!MP_STATO) return;
  MP_STATO.vivo = false;
  cancelAnimationFrame(MP_STATO.animazione);
  window.removeEventListener('resize', MP_STATO.ridimensiona);
  if (MP_STATO.suFullscreen) document.removeEventListener('fullscreenchange', MP_STATO.suFullscreen);
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  MP_STATO = null;
}
window.addEventListener('hashchange', () => { if (location.hash.indexOf('#/mappe') !== 0) mpChiudi(); });
