/* Psicologia Generale — manuale e strumenti di allenamento.
   Caricato prima di app.js: le funzioni sono globali e il router le trova.
   L'unico stato persistente è in localStorage, sotto il prefisso "pge:". */

/* ---------------- MEMORIA LOCALE ---------------- */
const MEM = {
  get(k, d) { try { const v = localStorage.getItem('pge:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('pge:' + k, JSON.stringify(v)); } catch (e) {} },
  del(k)    { try { localStorage.removeItem('pge:' + k); } catch (e) {} }
};

/* mescola una copia dell'array */
function mescola(a) {
  const c = [...a];
  for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
  return c;
}

/* normalizzazione per il confronto dei nomi: via accenti, punteggiatura, maiuscole */
function sfoltisci(s) {
  return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

/* barra di avanzamento riusabile */
function barretta(fatto, totale, etichetta) {
  const p = totale ? Math.round(fatto / totale * 100) : 0;
  return `<div class="avanz"><div class="avanz-testa"><span>${etichetta}</span><span>${fatto}/${totale}</span></div>
    <div class="avanz-vasca"><i style="width:${p}%"></i></div></div>`;
}

/* =========================================================
   MANUALE
   ========================================================= */
function vistaManuale() {
  const m = PGE.manuale;
  const letti = MEM.get('manuale.letti', []);
  const totMin = m.capitoli.reduce((s, c) => s + c.minuti, 0);

  main.innerHTML = `
    <p class="occhiello">Manuale</p>
    <h1>${m.titolo}</h1>
    <p class="sommario">${m.sottotitolo}. ${m.intro}</p>

    <div class="griglia tre" style="margin:1.6rem 0">
      <div class="dato"><div class="dato-cifra">${m.capitoli.length}</div><div class="dato-eti">capitoli</div></div>
      <div class="dato"><div class="dato-cifra">${totMin}′</div><div class="dato-eti">lettura completa</div></div>
      <div class="dato"><div class="dato-cifra">${letti.length}</div><div class="dato-eti">già letti</div></div>
    </div>

    ${barretta(letti.length, m.capitoli.length, 'Avanzamento nella lettura')}

    ${m.parti.map(p => {
      const cs = m.capitoli.filter(c => c.parte === p.id);
      if (!cs.length) return '';
      return `<h2>${p.nome}</h2>
        <p class="nota" style="margin-bottom:1rem">${p.occhiello}</p>
        <div class="cap-elenco">
          ${cs.map(c => `
            <a class="cap-riga${letti.includes(c.id) ? ' letto' : ''}" href="#/manuale/${c.id}">
              <span class="cap-n">${c.n}</span>
              <span class="cap-corpo">
                <span class="cap-tit">${c.titolo}</span>
                <span class="cap-som">${c.sommario}</span>
                <span class="cap-tag">${c.chiavi.slice(0, 4).map(k => `<em>${k}</em>`).join('')}</span>
              </span>
              <span class="cap-meta">${c.minuti}′<br><span class="cap-lez">${c.lezione}</span></span>
            </a>`).join('')}
        </div>`;
    }).join('')}

    ${letti.length ? `<div class="azioni"><button class="bottone vuoto" id="azzeraLettura">Azzera l'avanzamento</button></div>` : ''}`;

  const az = $('#azzeraLettura');
  if (az) az.addEventListener('click', () => { MEM.del('manuale.letti'); vistaManuale(); });
}

function vistaCapitolo(id) {
  const m = PGE.manuale;
  const i = m.capitoli.findIndex(c => c.id === id);
  if (i < 0) return vistaAssente('/manuale/' + id);
  const c = m.capitoli[i], prec = m.capitoli[i - 1], succ = m.capitoli[i + 1];
  const letti = MEM.get('manuale.letti', []);

  main.innerHTML = `
    <p class="occhiello"><a href="#/manuale" style="text-decoration:none">Manuale</a> · capitolo ${c.n}</p>
    <div class="cap-testata">
      <div>
        <h1 style="margin-bottom:.3rem">${c.titolo}</h1>
        <p class="sommario" style="margin-bottom:0">${c.sommario}</p>
      </div>
      <div class="cap-testata-meta">${c.minuti}′ · ${c.lezione}</div>
    </div>
    <div class="cap-impianto">
      <aside class="cap-indice" id="capIndice"></aside>
      <div class="prosa" id="capTesto"><p style="color:var(--grafite)">Carico il capitolo…</p></div>
    </div>
    <div class="cap-piede">
      <button class="bottone${letti.includes(id) ? ' vuoto' : ''}" id="segnaLetto">${letti.includes(id) ? '✓ Segnato come letto' : 'Segna come letto'}</button>
      <div class="cap-salti">
        ${prec ? `<a class="bottone vuoto" href="#/manuale/${prec.id}">← ${prec.n}. ${prec.titolo.slice(0, 34)}${prec.titolo.length > 34 ? '…' : ''}</a>` : '<span></span>'}
        ${succ ? `<a class="bottone vuoto" href="#/manuale/${succ.id}">${succ.n}. ${succ.titolo.slice(0, 34)}${succ.titolo.length > 34 ? '…' : ''} →</a>` : '<span></span>'}
      </div>
    </div>`;

  $('#segnaLetto').addEventListener('click', () => {
    const l = MEM.get('manuale.letti', []);
    const k = l.indexOf(id);
    if (k < 0) l.push(id); else l.splice(k, 1);
    MEM.set('manuale.letti', l);
    const b = $('#segnaLetto');
    b.textContent = k < 0 ? '✓ Segnato come letto' : 'Segna come letto';
    b.classList.toggle('vuoto', k < 0);
  });

  leggiContenuto(`contenuti/manuale/${id}.md`, 'manuale/' + id)
    .then(t => {
      const el = $('#capTesto');
      /* il titolo è già nella testata della pagina: si toglie dal corpo */
      el.innerHTML = md(String(t).replace(/^#\s+.*\n/, ''));
      avvolgiTabelle(el);
      costruisciIndiceCapitolo(el);
    })
    .catch(() => { $('#capTesto').innerHTML = messaggioFile(); });
}

/* indice laterale costruito dai titoli di secondo livello */
function costruisciIndiceCapitolo(el) {
  const tit = $$('h2, h3', el).filter(h => h.textContent.trim());
  const nav = $('#capIndice');
  if (!nav || tit.length < 3) { if (nav) nav.style.display = 'none'; return; }

  tit.forEach((h, i) => h.id = 'sez-' + i);
  nav.innerHTML = `<p class="cap-indice-tit">In questo capitolo</p>` +
    tit.map((h, i) => `<a href="#sez-${i}" class="liv-${h.tagName.toLowerCase()}" data-i="${i}">${esc(h.textContent)}</a>`).join('');

  $$('a', nav).forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(a.getAttribute('href').slice(1))
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  /* evidenzia la sezione in vista */
  const oss = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const i = tit.indexOf(en.target);
      $$('a', nav).forEach(a => a.classList.toggle('qui', +a.dataset.i === i));
    });
  }, { rootMargin: '-70px 0px -75% 0px' });
  tit.forEach(h => oss.observe(h));
}

/* =========================================================
   ALLENAMENTO SUI NOMI
   ========================================================= */
let nomiStato = null;

function vistaNomi() {
  const scuole = [...new Set(PGE.nomi.map(n => n.scuola))];
  const st = MEM.get('nomi.stat', { giuste: 0, sbagliate: 0 });

  main.innerHTML = `
    <p class="occhiello">Allenamento</p>
    <h1>Scrivere i nomi</h1>
    <p class="sommario">All'orale un nome sbagliato si sente; allo scritto si vede. Qui compare l'indizio, tu scrivi il nome. Il controllo è sulle <strong>lettere</strong>: le varianti di traslitterazione e i segni diacritici sono accettati, ma vengono segnalati.</p>

    <div class="pannello-avvio">
      <label>Che cosa allenare
        <select id="nomiFiltro">
          <option value="">Tutti i ${PGE.nomi.length} nomi</option>
          <option value="d3">Solo i più insidiosi (${PGE.nomi.filter(n => n.d === 3).length})</option>
          <option value="persone">Solo persone (${PGE.nomi.filter(n => n.ruolo !== 'Luogo').length})</option>
          <option value="luoghi">Solo luoghi (${PGE.nomi.filter(n => n.ruolo === 'Luogo').length})</option>
          ${scuole.map(s => `<option value="s:${esc(s)}">${esc(s)}</option>`).join('')}
        </select>
      </label>
      <button class="bottone" id="nomiVia">Comincia</button>
    </div>

    ${st.giuste + st.sbagliate ? `<p class="nota">Storico complessivo: <strong>${st.giuste}</strong> corretti, <strong>${st.sbagliate}</strong> sbagliati — ${Math.round(st.giuste / (st.giuste + st.sbagliate) * 100)}% di precisione. <button class="mini-btn" id="nomiAzzera">azzera</button></p>` : ''}

    <div id="nomiCampo"></div>

    <h2>Tutti i nomi, con le trappole</h2>
    <p class="nota" style="margin-bottom:1rem">Da leggere prima di allenarsi. Il grassetto segnala il punto esatto in cui si sbaglia.</p>
    <div class="tab-scroll"><table>
      <thead><tr><th>Nome</th><th>Chi / che cos'è</th><th>Come si scrive</th></tr></thead>
      <tbody>${PGE.nomi.map(n => `<tr>
        <td><strong>${esc(n.n)}</strong>${n.nome !== '—' ? `<br><span style="color:var(--grafite);font-size:.82rem">${esc(n.nome)}</span>` : ''}</td>
        <td style="font-size:.88rem">${esc(n.scuola)}${n.anni !== '—' ? ` · ${esc(n.anni)}` : ''}<br><span style="color:var(--grafite)">${n.indizio}</span></td>
        <td style="font-size:.88rem">${n.nota}</td></tr>`).join('')}</tbody>
    </table></div>`;

  const az = $('#nomiAzzera');
  if (az) az.addEventListener('click', () => { MEM.del('nomi.stat'); vistaNomi(); });
  $('#nomiVia').addEventListener('click', avviaNomi);
}

function avviaNomi() {
  const f = $('#nomiFiltro').value;
  let lista = PGE.nomi;
  if (f === 'd3') lista = lista.filter(n => n.d === 3);
  else if (f === 'persone') lista = lista.filter(n => n.ruolo !== 'Luogo');
  else if (f === 'luoghi') lista = lista.filter(n => n.ruolo === 'Luogo');
  else if (f.startsWith('s:')) lista = lista.filter(n => n.scuola === f.slice(2));
  if (!lista.length) return;

  nomiStato = { coda: mescola(lista), i: 0, giuste: 0, sbagliate: 0, errori: [], totale: lista.length };
  rendiNome();
}

function rendiNome() {
  const s = nomiStato, campo = $('#nomiCampo');
  if (!campo) return;

  if (s.i >= s.coda.length) {
    campo.innerHTML = `
      <div class="scheda esito">
        <h3 style="margin-top:0">Serie completata</h3>
        <p class="esito-cifra">${s.giuste}<span>/${s.totale}</span></p>
        ${s.errori.length
          ? `<p>Da rivedere: ${s.errori.map(e => `<strong>${esc(e)}</strong>`).join(' · ')}</p>
             <div class="azioni"><button class="bottone" id="nomiRiprova">Ripeti solo questi ${s.errori.length}</button>
             <button class="bottone vuoto" id="nomiDaCapo">Ricomincia tutta la serie</button></div>`
          : `<p>Nessun errore. Tutti i nomi scritti correttamente.</p>
             <div class="azioni"><button class="bottone" id="nomiDaCapo">Ricomincia</button></div>`}
      </div>`;
    const r = $('#nomiRiprova');
    if (r) r.addEventListener('click', () => {
      const sub = PGE.nomi.filter(n => s.errori.includes(n.n));
      nomiStato = { coda: mescola(sub), i: 0, giuste: 0, sbagliate: 0, errori: [], totale: sub.length };
      rendiNome();
    });
    $('#nomiDaCapo').addEventListener('click', avviaNomi);
    return;
  }

  const n = s.coda[s.i];
  campo.innerHTML = `
    <div class="scheda nome-scheda">
      <div class="nome-testa">
        <span class="nome-conta">${s.i + 1} / ${s.coda.length}</span>
        <span class="nome-punti">${s.giuste} corretti · ${s.sbagliate} sbagliati</span>
      </div>
      <p class="nome-indizio">${n.indizio}</p>
      <div class="rel nome-rel">
        <span>${esc(n.scuola)}</span>
        ${n.anni !== '—' ? `<span>${esc(n.anni)}</span>` : ''}
        <span>${esc(n.ruolo)}</span>
      </div>
      <form id="nomeForm" autocomplete="off">
        <input type="text" id="nomeInput" placeholder="Scrivi il nome…" autocomplete="off" autocapitalize="words" spellcheck="false">
        <button class="bottone" type="submit">Verifica</button>
      </form>
      <div class="azioni" style="margin-top:.6rem">
        <button class="mini-btn" id="nomeAiuto">Mostra la prima lettera e la lunghezza</button>
        <button class="mini-btn" id="nomeSalta">Non lo so, mostrami la risposta</button>
      </div>
      <div id="nomeEsito"></div>
    </div>`;

  const inp = $('#nomeInput');
  inp.focus();

  $('#nomeForm').addEventListener('submit', e => { e.preventDefault(); verificaNome(n, inp.value); });
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); verificaNome(n, inp.value); }
  });
  $('#nomeAiuto').addEventListener('click', () => {
    $('#nomeEsito').innerHTML = `<div class="nome-aiuto">${esc(n.n[0])}${'·'.repeat(Math.max(0, n.n.length - 1))} &nbsp;— ${n.n.length} caratteri</div>`;
    inp.focus();
  });
  $('#nomeSalta').addEventListener('click', () => verificaNome(n, '', true));
}

function verificaNome(n, risposta, saltata) {
  const s = nomiStato;
  const dato = String(risposta).trim();
  const forme = [n.n, ...n.alt];
  const esatta = forme.some(f => f.trim() === dato);
  const quasi  = !esatta && forme.some(f => sfoltisci(f) === sfoltisci(dato)) && dato !== '';

  let html;
  if (saltata) {
    s.sbagliate++; s.errori.push(n.n);
    html = `<div class="nome-esito no"><strong>Si scrive ${esc(n.n)}</strong><div class="nome-nota">${n.nota}</div></div>`;
  } else if (esatta) {
    s.giuste++;
    html = `<div class="nome-esito si"><strong>Esatto — ${esc(n.n)}</strong>${
      dato.toLowerCase() !== n.n.toLowerCase() && n.alt.includes(dato) ? `<div class="nome-nota">Variante accettata. La forma usata nel corso è <strong>${esc(n.n)}</strong>.</div>` : ''}</div>`;
  } else if (quasi) {
    s.giuste++;
    html = `<div class="nome-esito quasi"><strong>Corretto nelle lettere — ${esc(n.n)}</strong>
      <div class="nome-nota">Hai scritto «${esc(dato)}»: mancano i segni o la punteggiatura. ${n.nota}</div></div>`;
  } else {
    s.sbagliate++; s.errori.push(n.n);
    html = `<div class="nome-esito no"><strong>Si scrive ${esc(n.n)}</strong>
      <div class="nome-diff">${confrontaLettere(dato, n.n)}</div>
      <div class="nome-nota">${n.nota}</div></div>`;
  }

  const st = MEM.get('nomi.stat', { giuste: 0, sbagliate: 0 });
  if (!saltata) { if (esatta || quasi) st.giuste++; else st.sbagliate++; } else st.sbagliate++;
  MEM.set('nomi.stat', st);

  $('#nomeEsito').innerHTML = html + `<div class="azioni"><button class="bottone" id="nomeAvanti">Prosegui →</button></div>`;
  $('#nomeInput').disabled = true;
  $('#nomeAiuto').disabled = true;
  $('#nomeSalta').disabled = true;
  const av = $('#nomeAvanti');
  av.focus();
  av.addEventListener('click', () => { s.i++; rendiNome(); });
}

/* Confronto lettera per lettera. Le due parole vengono allineate con la
   sottosequenza comune più lunga e mostrate su due righe: quello che hai
   scritto e quello che si scrive, incolonnati carattere per carattere. */
function confrontaLettere(dato, giusto) {
  if (!dato) return `<div class="diff-riga"><span class="diff-eti">si scrive</span>
    <span class="diff-cel">${[...giusto].map(c => `<span class="man">${esc(c)}</span>`).join('')}</span></div>`;

  const a = [...dato], b = [...giusto];
  const T = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      T[i][j] = a[i].toLowerCase() === b[j].toLowerCase() ? T[i + 1][j + 1] + 1 : Math.max(T[i + 1][j], T[i][j + 1]);

  let i = 0, j = 0, tuo = '', suo = '';
  const vuoto = '<span class="nulla">·</span>';
  while (i < a.length && j < b.length) {
    if (a[i].toLowerCase() === b[j].toLowerCase()) {
      tuo += `<span class="ok">${esc(a[i])}</span>`;
      suo += `<span class="ok">${esc(b[j])}</span>`;
      i++; j++;
    } else if (T[i + 1][j] >= T[i][j + 1]) {
      tuo += `<span class="ex">${esc(a[i])}</span>`; suo += vuoto; i++;
    } else {
      tuo += vuoto; suo += `<span class="man">${esc(b[j])}</span>`; j++;
    }
  }
  while (i < a.length) { tuo += `<span class="ex">${esc(a[i++])}</span>`; suo += vuoto; }
  while (j < b.length) { tuo += vuoto; suo += `<span class="man">${esc(b[j++])}</span>`; }

  return `<div class="diff-riga"><span class="diff-eti">hai scritto</span><span class="diff-cel">${tuo}</span></div>
    <div class="diff-riga"><span class="diff-eti">si scrive</span><span class="diff-cel">${suo}</span></div>
    <div class="diff-leg"><span class="ex">di troppo</span><span class="man">mancanti</span></div>`;
}

/* =========================================================
   FLASHCARD — sistema a tre scatole
   ========================================================= */
let fcStato = null;

function vistaFlashcard() {
  const arg = [...new Set(PGE.flashcard.map(c => c.a))];
  const box = MEM.get('fc.box', {});
  const conta = n => PGE.flashcard.filter((c, i) => (box[i] || 0) === n).length;

  main.innerHTML = `
    <p class="occhiello">Allenamento</p>
    <h1>Flashcard</h1>
    <p class="sommario">${PGE.flashcard.length} carte. Il fronte pone la domanda, il retro dà la risposta nella formulazione da usare all'esame. Dopo aver girato la carta dichiari se la sapevi: le carte sbagliate tornano, quelle sapute due volte escono dal giro.</p>

    <div class="griglia tre" style="margin:1.6rem 0">
      <div class="dato"><div class="dato-cifra">${conta(0)}</div><div class="dato-eti">da imparare</div></div>
      <div class="dato"><div class="dato-cifra">${conta(1)}</div><div class="dato-eti">in corso</div></div>
      <div class="dato"><div class="dato-cifra">${conta(2)}</div><div class="dato-eti">acquisite</div></div>
    </div>
    ${barretta(conta(2), PGE.flashcard.length, 'Carte acquisite')}

    <div class="pannello-avvio">
      <label>Argomento
        <select id="fcArg">
          <option value="">Tutti (${PGE.flashcard.length})</option>
          ${arg.map(a => `<option value="${esc(a)}">${esc(a)} (${PGE.flashcard.filter(c => c.a === a).length})</option>`).join('')}
        </select>
      </label>
      <label>Selezione
        <select id="fcModo">
          <option value="dovute">Solo quelle non ancora acquisite</option>
          <option value="tutte">Tutte, anche le acquisite</option>
          <option value="zero">Solo quelle mai indovinate</option>
        </select>
      </label>
      <button class="bottone" id="fcVia">Comincia</button>
    </div>
    ${Object.keys(box).length ? `<p class="nota">Il progresso è salvato in questo browser. <button class="mini-btn" id="fcAzzera">azzera tutto</button></p>` : ''}
    <div id="fcCampo"></div>`;

  const az = $('#fcAzzera');
  if (az) az.addEventListener('click', () => { MEM.del('fc.box'); vistaFlashcard(); });
  $('#fcVia').addEventListener('click', avviaFlashcard);
}

function avviaFlashcard() {
  const a = $('#fcArg').value, modo = $('#fcModo').value;
  const box = MEM.get('fc.box', {});
  let idx = PGE.flashcard.map((c, i) => i).filter(i => !a || PGE.flashcard[i].a === a);
  if (modo === 'dovute') idx = idx.filter(i => (box[i] || 0) < 2);
  else if (modo === 'zero') idx = idx.filter(i => !box[i]);

  if (!idx.length) {
    $('#fcCampo').innerHTML = `<div class="scheda"><p style="margin:0">Nessuna carta corrisponde: hai già acquisito tutto quello che rientra in questa selezione. Prova con «Tutte, anche le acquisite».</p></div>`;
    return;
  }
  fcStato = { coda: mescola(idx), i: 0, girata: false, sapute: 0, mancate: 0, totale: idx.length };
  rendiFlashcard();
}

function rendiFlashcard() {
  const s = fcStato, campo = $('#fcCampo');
  if (!campo) return;

  if (s.i >= s.coda.length) {
    campo.innerHTML = `<div class="scheda esito">
      <h3 style="margin-top:0">Mazzo finito</h3>
      <p class="esito-cifra">${s.sapute}<span>/${s.totale}</span></p>
      <p>${s.mancate ? `${s.mancate} carte tornano nel giro: le ritrovi alla prossima sessione.` : 'Tutte sapute.'}</p>
      <div class="azioni"><button class="bottone" id="fcAncora">Un altro giro</button>
      <a class="bottone vuoto" href="#/flashcard">Cambia selezione</a></div></div>`;
    $('#fcAncora').addEventListener('click', avviaFlashcard);
    return;
  }

  const k = s.coda[s.i], c = PGE.flashcard[k];
  const box = MEM.get('fc.box', {});
  const liv = box[k] || 0;

  campo.innerHTML = `
    <div class="fc-guscio">
      <div class="fc-testa">
        <span>${s.i + 1} / ${s.coda.length}</span>
        <span class="fc-eti">${esc(c.a)} · ${esc(c.l)} · <a href="#/manuale/${c.c}">cap. ${c.c}</a></span>
        <span class="fc-liv liv${liv}">${['da imparare', 'in corso', 'acquisita'][liv]}</span>
      </div>
      <div class="fc-carta${s.girata ? ' girata' : ''}" id="fcCarta">
        <div class="fc-faccia fc-fronte"><span class="fc-tipo">${esc(c.t)}</span><div>${c.f}</div></div>
        <div class="fc-faccia fc-retro"><span class="fc-tipo">risposta</span><div>${c.b}</div></div>
      </div>
      <div class="azioni fc-azioni">
        ${s.girata
          ? `<button class="bottone vuoto" id="fcNo">Non la sapevo</button>
             <button class="bottone" id="fcSi">La sapevo</button>`
          : `<button class="bottone" id="fcGira">Gira la carta</button>`}
      </div>
    </div>`;

  if (!s.girata) {
    const g = () => { s.girata = true; rendiFlashcard(); };
    $('#fcGira').addEventListener('click', g);
    $('#fcCarta').addEventListener('click', g);
  } else {
    $('#fcSi').addEventListener('click', () => segnaFlashcard(k, true));
    $('#fcNo').addEventListener('click', () => segnaFlashcard(k, false));
  }
}

function segnaFlashcard(k, saputa) {
  const s = fcStato;
  const box = MEM.get('fc.box', {});
  box[k] = saputa ? Math.min(2, (box[k] || 0) + 1) : 0;
  MEM.set('fc.box', box);
  if (saputa) s.sapute++; else { s.mancate++; s.coda.push(k); }
  s.i++; s.girata = false;
  rendiFlashcard();
}

/* =========================================================
   QUIZ A SCELTA MULTIPLA
   ========================================================= */
let qzStato = null;

function vistaQuiz() {
  const arg = [...new Set(PGE.quiz.map(q => q.a))];
  const storico = MEM.get('quiz.storico', []);
  const sbagliate = MEM.get('quiz.sbagliate', []);

  main.innerHTML = `
    <p class="occhiello">Allenamento</p>
    <h1>Quiz a crocette</h1>
    <p class="sommario">${PGE.quiz.length} domande a quattro opzioni. I distrattori non sono casuali: sono le risposte di <em>un'altra</em> scuola, o l'altra metà di una coppia che si confonde spesso. Dopo ogni risposta arriva la spiegazione — è lì che sta il valore dell'esercizio.</p>

    <div class="pannello-avvio">
      <label>Argomento
        <select id="qzArg">
          <option value="">Tutti (${PGE.quiz.length})</option>
          ${arg.map(a => `<option value="${esc(a)}">${esc(a)} (${PGE.quiz.filter(q => q.a === a).length})</option>`).join('')}
        </select>
      </label>
      <label>Quante
        <select id="qzQuante">
          <option value="10">10 domande</option>
          <option value="20">20 domande</option>
          <option value="30">30 domande</option>
          <option value="0">Tutte quelle disponibili</option>
        </select>
      </label>
      <label>Difficoltà
        <select id="qzDiff">
          <option value="">Tutte</option>
          <option value="1">Base</option>
          <option value="2">Intermedia</option>
          <option value="3">Avanzata</option>
        </select>
      </label>
      <button class="bottone" id="qzVia">Comincia</button>
    </div>

    ${sbagliate.length ? `<p class="nota">Hai <strong>${sbagliate.length}</strong> domande sbagliate in sospeso. <button class="mini-btn" id="qzRipassa">ripassa solo quelle</button> · <button class="mini-btn" id="qzPulisci">dimenticale</button></p>` : ''}

    <div id="qzCampo"></div>

    ${storico.length ? `<h2>Le tue prove</h2>
      <div class="tab-scroll"><table>
        <thead><tr><th>Quando</th><th>Selezione</th><th>Esito</th><th>%</th></tr></thead>
        <tbody>${storico.slice(-12).reverse().map(p => `<tr>
          <td style="font-family:var(--dati);font-size:.8rem">${esc(p.data)}</td>
          <td>${esc(p.arg || 'tutti gli argomenti')}</td>
          <td>${p.giuste}/${p.totale}</td>
          <td><div class="barra-voto"><i style="width:${Math.round(p.giuste / p.totale * 100)}%"></i></div></td>
        </tr>`).join('')}</tbody>
      </table></div>
      <div class="azioni"><button class="bottone vuoto" id="qzAzzeraStorico">Azzera lo storico</button></div>` : ''}`;

  $('#qzVia').addEventListener('click', avviaQuiz);
  const rp = $('#qzRipassa');
  if (rp) rp.addEventListener('click', () => avviaQuiz(true));
  const pl = $('#qzPulisci');
  if (pl) pl.addEventListener('click', () => { MEM.del('quiz.sbagliate'); vistaQuiz(); });
  const az = $('#qzAzzeraStorico');
  if (az) az.addEventListener('click', () => { MEM.del('quiz.storico'); vistaQuiz(); });
}

function avviaQuiz(soloSbagliate) {
  let pool;
  let etichetta;

  if (soloSbagliate === true) {
    const sb = MEM.get('quiz.sbagliate', []);
    pool = PGE.quiz.filter(q => sb.includes(q.q));
    etichetta = 'ripasso degli errori';
  } else {
    const a = $('#qzArg').value, d = $('#qzDiff').value, n = +$('#qzQuante').value;
    pool = PGE.quiz.filter(q => (!a || q.a === a) && (!d || q.d === +d));
    pool = mescola(pool);
    if (n) pool = pool.slice(0, n);
    etichetta = a || '';
  }

  if (!pool.length) {
    $('#qzCampo').innerHTML = `<div class="scheda"><p style="margin:0">Nessuna domanda corrisponde a questa combinazione di filtri.</p></div>`;
    return;
  }

  qzStato = {
    coda: mescola(pool).map(q => ({ q, opzioni: mescola(q.o.map((t, i) => ({ t, giusta: i === 0 }))) })),
    i: 0, giuste: 0, risposte: [], arg: etichetta
  };
  rendiQuiz();
}

function rendiQuiz() {
  const s = qzStato, campo = $('#qzCampo');
  if (!campo) return;

  if (s.i >= s.coda.length) return chiudiQuiz();

  const v = s.coda[s.i];
  campo.innerHTML = `
    <div class="scheda qz-scheda">
      <div class="qz-testa">
        <span>Domanda ${s.i + 1} / ${s.coda.length}</span>
        <span class="qz-eti">${esc(v.q.a)} · ${esc(v.q.l)} · <a href="#/manuale/${v.q.c}">cap. ${v.q.c}</a></span>
      </div>
      <div class="avanz-vasca sottile"><i style="width:${s.i / s.coda.length * 100}%"></i></div>
      <p class="qz-domanda">${esc(v.q.q)}</p>
      <div class="qz-opzioni" id="qzOpz">
        ${v.opzioni.map((o, i) => `<button class="qz-opz" data-i="${i}"><span class="qz-lettera">${'ABCD'[i]}</span><span>${esc(o.t)}</span></button>`).join('')}
      </div>
      <div id="qzEsito"></div>
    </div>`;

  $$('#qzOpz .qz-opz').forEach(b => b.addEventListener('click', () => rispondiQuiz(+b.dataset.i)));
}

function rispondiQuiz(scelta) {
  const s = qzStato, v = s.coda[s.i];
  const giusta = v.opzioni[scelta].giusta;
  if (giusta) s.giuste++;
  s.risposte.push({ q: v.q, giusta });

  const sb = MEM.get('quiz.sbagliate', []);
  const k = sb.indexOf(v.q.q);
  if (!giusta && k < 0) sb.push(v.q.q);
  if (giusta && k >= 0) sb.splice(k, 1);
  MEM.set('quiz.sbagliate', sb);

  $$('#qzOpz .qz-opz').forEach((b, i) => {
    b.disabled = true;
    if (v.opzioni[i].giusta) b.classList.add('giusta');
    else if (i === scelta) b.classList.add('errata');
  });

  $('#qzEsito').innerHTML = `
    <div class="qz-spiega ${giusta ? 'si' : 'no'}">
      <strong>${giusta ? 'Corretto.' : 'Non è questa.'}</strong> ${v.q.sp}
    </div>
    <div class="azioni"><button class="bottone" id="qzAvanti">${s.i + 1 < s.coda.length ? 'Prossima domanda →' : 'Vedi il risultato'}</button></div>`;
  const av = $('#qzAvanti');
  av.focus();
  av.addEventListener('click', () => { s.i++; rendiQuiz(); });
}

function chiudiQuiz() {
  const s = qzStato;
  const perc = Math.round(s.giuste / s.coda.length * 100);
  const perArg = {};
  s.risposte.forEach(r => {
    perArg[r.q.a] = perArg[r.q.a] || { n: 0, g: 0 };
    perArg[r.q.a].n++; if (r.giusta) perArg[r.q.a].g++;
  });
  const errate = s.risposte.filter(r => !r.giusta);

  const storico = MEM.get('quiz.storico', []);
  storico.push({ data: new Date().toISOString().slice(0, 10), arg: s.arg, giuste: s.giuste, totale: s.coda.length });
  MEM.set('quiz.storico', storico.slice(-50));

  const giudizio = perc >= 90 ? 'Il materiale è sotto controllo.'
    : perc >= 75 ? 'Solido, ma i punti sotto vanno rivisti.'
    : perc >= 60 ? 'Le nozioni ci sono; manca la precisione sulle distinzioni.'
    : 'Conviene rileggere i capitoli indicati prima di riprovare.';

  $('#qzCampo').innerHTML = `
    <div class="scheda esito">
      <h3 style="margin-top:0">Prova conclusa</h3>
      <p class="esito-cifra">${s.giuste}<span>/${s.coda.length}</span></p>
      <div class="barra-voto grande"><i style="width:${perc}%"></i></div>
      <p>${perc}% — ${giudizio}</p>

      <h3>Per argomento</h3>
      <div class="tab-scroll"><table>
        <thead><tr><th>Argomento</th><th>Esito</th><th></th></tr></thead>
        <tbody>${Object.entries(perArg).sort((a, b) => a[1].g / a[1].n - b[1].g / b[1].n)
          .map(([a, v]) => `<tr><td>${esc(a)}</td><td>${v.g}/${v.n}</td>
          <td><div class="barra-voto"><i style="width:${Math.round(v.g / v.n * 100)}%"></i></div></td></tr>`).join('')}</tbody>
      </table></div>

      ${errate.length ? `<h3>Le domande sbagliate</h3>
        <div class="qz-riepilogo">${errate.map(r => `
          <div class="qz-err">
            <p class="qz-err-q">${esc(r.q.q)}</p>
            <p class="qz-err-r"><strong>Risposta corretta:</strong> ${esc(r.q.o[0])}</p>
            <p class="qz-err-s">${r.q.sp} <a href="#/manuale/${r.q.c}">→ capitolo ${r.q.c}</a></p>
          </div>`).join('')}</div>` : ''}

      <div class="azioni">
        ${errate.length ? `<button class="bottone" id="qzRifai">Rifai solo le ${errate.length} sbagliate</button>` : ''}
        <button class="bottone vuoto" id="qzNuovo">Nuova prova</button>
      </div>
    </div>`;

  const rf = $('#qzRifai');
  if (rf) rf.addEventListener('click', () => {
    qzStato = {
      coda: mescola(errate.map(r => r.q)).map(q => ({ q, opzioni: mescola(q.o.map((t, i) => ({ t, giusta: i === 0 }))) })),
      i: 0, giuste: 0, risposte: [], arg: s.arg
    };
    rendiQuiz();
  });
  $('#qzNuovo').addEventListener('click', () => vistaQuiz());
}

/* =========================================================
   ARGOMENTI — le esposizioni orali
   ========================================================= */
function vistaArgomenti() {
  const a = PGE.argomenti;
  const letti = MEM.get('argomenti.letti', []);
  const totMin = a.voci.reduce((s, v) => s + v.minuti, 0);

  main.innerHTML = `
    <p class="occhiello">Argomenti</p>
    <h1>${a.sottotitolo}</h1>
    <p class="sommario">${a.intro}</p>

    <div class="griglia tre" style="margin:1.6rem 0">
      <div class="dato"><div class="dato-cifra">${a.voci.length}</div><div class="dato-eti">esposizioni</div></div>
      <div class="dato"><div class="dato-cifra">${totMin}′</div><div class="dato-eti">di parlato</div></div>
      <div class="dato"><div class="dato-cifra">${letti.length}</div><div class="dato-eti">già ripassate</div></div>
    </div>
    ${barretta(letti.length, a.voci.length, 'Argomenti ripassati')}

    ${a.cartelle.map(k => {
      const vs = a.voci.filter(v => v.cartella === k.id);
      if (!vs.length) return '';
      const fatti = vs.filter(v => letti.includes(v.id)).length;
      return `<div class="cartella">
        <div class="cartella-testa">
          <h2>${k.nome}</h2>
          <span class="cartella-conta">${fatti}/${vs.length}</span>
        </div>
        <p class="cartella-occhiello">${k.occhiello}</p>
        <div class="arg-elenco">
          ${vs.map(v => `
            <a class="arg-riga${letti.includes(v.id) ? ' letto' : ''}" href="#/argomenti/${v.id}">
              <span class="arg-durata">${v.minuti}′</span>
              <span class="arg-corpo">
                <span class="arg-tit">${v.titolo}</span>
                <span class="arg-dom">${esc(v.domanda)}</span>
                <span class="arg-perni">${v.perni.slice(0, 5).map(p => `<em>${esc(p)}</em>`).join('')}</span>
              </span>
              <span class="arg-meta">${v.lezione}</span>
            </a>`).join('')}
        </div>
      </div>`;
    }).join('')}

    ${letti.length ? `<div class="azioni"><button class="bottone vuoto" id="azzeraArg">Azzera l'avanzamento</button></div>` : ''}`;

  const az = $('#azzeraArg');
  if (az) az.addEventListener('click', () => { MEM.del('argomenti.letti'); vistaArgomenti(); });
}

function vistaArgomento(id) {
  const a = PGE.argomenti;
  const i = a.voci.findIndex(v => v.id === id);
  if (i < 0) return vistaAssente('/argomenti/' + id);
  const v = a.voci[i], prec = a.voci[i - 1], succ = a.voci[i + 1];
  const k = a.cartelle.find(c => c.id === v.cartella);
  const letti = MEM.get('argomenti.letti', []);
  const regiaVisibile = MEM.get('argomenti.regia', true);
  const corpoGrande = MEM.get('argomenti.grande', false);

  main.innerHTML = `
    <p class="occhiello"><a href="#/argomenti" style="text-decoration:none">Argomenti</a> · ${esc(k ? k.nome : '')}</p>
    <div class="cap-testata">
      <div>
        <h1 style="margin-bottom:.3rem">${v.titolo}</h1>
        <p class="arg-domanda-testata">${esc(v.domanda)}</p>
      </div>
      <div class="cap-testata-meta">${v.minuti}′ · ${v.lezione}</div>
    </div>

    <div class="arg-barra">
      <div class="arg-perni-testata">${v.perni.map(p => `<em>${esc(p)}</em>`).join('')}</div>
      <div class="arg-comandi">
        <button class="chip${regiaVisibile ? ' attivo' : ''}" id="argRegia">Regìa</button>
        <button class="chip${corpoGrande ? ' attivo' : ''}" id="argGrande">Testo grande</button>
        ${v.capitoli.map(c => `<a class="chip" href="#/manuale/${c}">cap. ${c}</a>`).join('')}
      </div>
    </div>

    <div class="prosa discorso${corpoGrande ? ' grande' : ''}${regiaVisibile ? '' : ' senza-regia'}" id="argTesto">
      <p style="color:var(--grafite)">Carico l'esposizione…</p>
    </div>

    <div class="cap-piede">
      <button class="bottone${letti.includes(id) ? ' vuoto' : ''}" id="segnaArg">${letti.includes(id) ? '✓ Ripassato' : 'Segna come ripassato'}</button>
      <div class="cap-salti">
        ${prec ? `<a class="bottone vuoto" href="#/argomenti/${prec.id}">← ${prec.titolo.slice(0, 32)}${prec.titolo.length > 32 ? '…' : ''}</a>` : '<span></span>'}
        ${succ ? `<a class="bottone vuoto" href="#/argomenti/${succ.id}">${succ.titolo.slice(0, 32)}${succ.titolo.length > 32 ? '…' : ''} →</a>` : '<span></span>'}
      </div>
    </div>`;

  $('#segnaArg').addEventListener('click', () => {
    const l = MEM.get('argomenti.letti', []);
    const j = l.indexOf(id);
    if (j < 0) l.push(id); else l.splice(j, 1);
    MEM.set('argomenti.letti', l);
    const b = $('#segnaArg');
    b.textContent = j < 0 ? '✓ Ripassato' : 'Segna come ripassato';
    b.classList.toggle('vuoto', j < 0);
  });

  $('#argRegia').addEventListener('click', () => {
    const on = !$('#argTesto').classList.contains('senza-regia');
    $('#argTesto').classList.toggle('senza-regia', on);
    $('#argRegia').classList.toggle('attivo', !on);
    MEM.set('argomenti.regia', !on);
  });

  $('#argGrande').addEventListener('click', () => {
    const on = $('#argTesto').classList.toggle('grande');
    $('#argGrande').classList.toggle('attivo', on);
    MEM.set('argomenti.grande', on);
  });

  leggiContenuto(`contenuti/argomenti/${id}.md`, 'argomenti/' + id)
    .then(t => {
      const el = $('#argTesto');
      /* titolo, domanda e durata sono già nella testata: si tolgono dal corpo */
      const corpo = String(t)
        .replace(/^#\s+.*\n/, '')
        .replace(/^\s*(?:>[^\n]*\n)+/, '');
      el.innerHTML = md(corpo);
      avvolgiTabelle(el);
      marcaRegia(el);
    })
    .catch(() => { $('#argTesto').innerHTML = messaggioFile(); });
}

/* i paragrafi di sola regìa vengono isolati, così da poterli nascondere */
function marcaRegia(el) {
  $$('p', el).forEach(p => {
    const t = p.textContent.trim();
    if (/^\[\s*Regia\s*:/i.test(t) && /\]$/.test(t)) p.classList.add('regia');
  });
  /* il primo paragrafo in corsivo è la nota d'uso: la si rende meno invadente */
  const primo = $('p', el);
  if (primo && primo.querySelector('em') && primo.textContent.length < 260) primo.classList.add('nota-uso');
}
