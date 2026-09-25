/* ATLANTE 3D — la pagina.

   Tre sezioni (neurone, encefalo, SNP) sullo stesso impianto: un banco 3D
   a sinistra, la scheda a schema fisso a destra, l'elenco delle parti sotto.

   Il WebGL sta in assets/atlante3d.js, che è un modulo ES importato
   dinamicamente. Se l'import non riesce — standalone.html aperto da
   file://, WebGL spento, browser vecchio — la pagina resta in piedi:
   restano le schede, l'elenco e il test. Il 3D è un modo di guardare
   il contenuto, non il contenuto.

   Due modi:
     studio   si clicca una parte, si legge la scheda
     test     il sistema accende una parte e chiede come si chiama        */

let ATL = null;          /* la scena viva, o null              */
let ATL_ETI = 0;         /* richiesta di animazione per le etichette */
let ATL_GUIDA_TASTO = null;

function atlChiudi() {
  if (ATL_ETI) cancelAnimationFrame(ATL_ETI), ATL_ETI = 0;
  if (ATL_GUIDA_TASTO) window.removeEventListener('keydown', ATL_GUIDA_TASTO), ATL_GUIDA_TASTO = null;
  if (ATL) { try { ATL.distruggi(); } catch (e) {} ATL = null; }
  document.body.classList.remove('atl-immersivo');
}
window.addEventListener('hashchange', () => {
  if (location.hash.indexOf('#/atlante') !== 0) atlChiudi();
});

function atlSezione(id) {
  return PGE.atlante.sezioni.find(s => s.id === id) || PGE.atlante.sezioni[0];
}
function atlParte(sez, id) { return sez.parti.find(p => p.id === id); }

/* confronto delle risposte scritte: si ignorano accenti, punteggiatura,
   articoli iniziali e il plurale più banale */
function atlNormalizza(t) {
  return String(t).toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\b(il|lo|la|i|gli|le|un|uno|una|dei|del|della|delle|di|a|da)\b/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function atlIndovinato(parte, risposta) {
  const r = atlNormalizza(risposta);
  if (r.length < 3) return false;
  const buone = [parte.nome].concat(parte.alias || []).map(atlNormalizza);
  return buone.some(b => b === r || (r.length >= 5 && (b.indexOf(r) === 0 || r.indexOf(b) === 0)));
}

/* ---------------- la scheda, schema fisso ---------------- */
function atlScheda(sez, parte) {
  if (!parte) {
    return `<div class="atl-vuota">
      <p class="occhiello">Scheda</p>
      <p>Clicca una parte del modello, o un nome nell'elenco qui sotto.</p>
      <p class="nota">Trascina per girare, rotella per avvicinare. La barra
      <strong>Esplosione</strong> stacca i pezzi; <strong>Ricomponi</strong> li rimette a posto.</p>
    </div>`;
  }
  const f = parte.scheda.fonte || {};
  const blocchi = PGE.atlante.blocchi.map(([chiave, etichetta]) => {
    const v = parte.scheda[chiave];
    return `<div class="atl-blocco">
      <p class="atl-eti">${etichetta}</p>
      <p class="atl-testo${v === '—' ? ' atl-assente' : ''}">${v || '—'}</p>
    </div>`;
  }).join('');
  const rimandi = [
    f.lez ? `<a href="#/lezioni/${f.lez}">Lezione ${f.lez.replace(/^L0?/, '')}</a>` : '',
    f.cap ? `<a href="#/manuale/${f.cap}">Manuale ${f.cap}</a>` : '',
    f.arg ? `<a href="#/argomenti/${f.arg}">Come si espone</a>` : ''
  ].filter(Boolean).join(' · ');

  return `<div class="atl-scheda-corpo">
    <p class="occhiello">${esc(sez.titolo)}${parte.gruppo && sez.gruppi ? ' · ' + esc((sez.gruppi.find(g => g[0] === parte.gruppo) || [, ''])[1]) : ''}</p>
    <h2 class="atl-nome">${esc(parte.nome)}</h2>
    ${parte.alias && parte.alias.length ? `<p class="atl-alias">anche: ${parte.alias.map(esc).join(' · ')}</p>` : ''}
    ${blocchi}
    ${rimandi ? `<p class="atl-rimandi">${rimandi}</p>` : ''}
  </div>`;
}

/* ---------------- l'elenco delle parti ---------------- */
function atlElenco(sez, scelta) {
  const selezionabili = sez.parti.filter(p => p.selezionabile !== false);
  const gruppi = sez.gruppi || [[null, '']];
  const perGruppo = gruppi.map(([chiave, titolo]) => {
    const parti = selezionabili.filter(p => (p.gruppo || null) === chiave);
    if (!parti.length) return '';
    return `${titolo ? `<p class="atl-gruppo-tit">${esc(titolo)}</p>` : ''}
      <div class="atl-chips">${parti.map(p => `
        <button class="atl-chip${p.id === scelta ? ' attiva' : ''}" data-parte="${p.id}"
          style="--tinta:${PGE.atlante.tinte[p.tinta] || '#888'}">${esc(p.nome)}</button>`).join('')}</div>`;
  }).join('');
  const senzaGruppo = selezionabili.filter(p => !p.gruppo);
  const resto = (sez.gruppi && senzaGruppo.length)
    ? `<div class="atl-chips">${senzaGruppo.map(p => `
        <button class="atl-chip${p.id === scelta ? ' attiva' : ''}" data-parte="${p.id}"
          style="--tinta:${PGE.atlante.tinte[p.tinta] || '#888'}">${esc(p.nome)}</button>`).join('')}</div>`
    : '';
  return perGruppo + resto;
}

function atlAlberoHtml(sez, scelta, nascoste, areeOn) {
  nascoste = nascoste || {};
  const selezionabili = sez.parti.filter(p => p.selezionabile !== false);
  const gruppi = sez.gruppi || [[null, sez.titolo]];
  const blocchi = gruppi.map(([chiave, titolo]) => {
    if (chiave === 'aree' && !areeOn) return '';
    const parti = selezionabili.filter(p => (p.gruppo || null) === chiave);
    if (!parti.length) return '';
    return `<div class="atl-albero-blocco">
      <button type="button" class="atl-albero-g" data-inquadra-gruppo="${chiave || ''}">${esc(titolo)}</button>
      ${parti.map(p => `
        <div class="atl-albero-riga${p.id === scelta ? ' scelta' : ''}${nascoste[p.id] ? ' off' : ''}">
          <button type="button" class="atl-albero-parte" data-parte="${p.id}">
            <span class="atl-albero-tinta" style="background:${PGE.atlante.tinte[p.tinta] || '#888'}"></span>
            ${esc(p.nome)}
          </button>
          <button type="button" class="atl-albero-occhio" data-occhio="${p.id}"
            title="${nascoste[p.id] ? 'Mostra' : 'Nascondi'}"
            aria-pressed="${nascoste[p.id] ? 'true' : 'false'}">${nascoste[p.id] ? '○' : '●'}</button>
        </div>`).join('')}
    </div>`;
  }).join('');
  const orfani = selezionabili.filter(p => sez.gruppi && !p.gruppo);
  const extra = orfani.length ? `<div class="atl-albero-blocco">
    ${orfani.map(p => `
      <div class="atl-albero-riga${p.id === scelta ? ' scelta' : ''}${nascoste[p.id] ? ' off' : ''}">
        <button type="button" class="atl-albero-parte" data-parte="${p.id}">
          <span class="atl-albero-tinta" style="background:${PGE.atlante.tinte[p.tinta] || '#888'}"></span>
          ${esc(p.nome)}
        </button>
        <button type="button" class="atl-albero-occhio" data-occhio="${p.id}"
          title="${nascoste[p.id] ? 'Mostra' : 'Nascondi'}">${nascoste[p.id] ? '○' : '●'}</button>
      </div>`).join('')}
  </div>` : '';
  return blocchi + extra;
}

/* ---------------- la vista ---------------- */
function vistaAtlante(idSezione, idParte) {
  atlChiudi();
  const sez = atlSezione(idSezione || MEM.get('atlante.sezione', 'encefalo'));
  MEM.set('atlante.sezione', sez.id);
  document.body.classList.add('atl-immersivo');
  main.classList.add('pl-piena');

  const modo = MEM.get('atlante.modo', 'studio');
  const punti = MEM.get('atlante.punti', {});

  main.innerHTML = `
    <div class="atl-portale" id="atlPortale">
      <div class="atl-scena" id="atlScena">
        <div class="atl-carico" id="atlCarico">
          <span class="atl-carico-testo">${sez.modello ? 'Carico il modello…' : 'Costruisco il modello…'}</span>
        </div>
        <div class="atl-pin-strato" id="atlPin" aria-hidden="true"></div>
        <p class="atl-nome-volante" id="atlVolante" hidden></p>
      </div>

      <header class="atl-top">
        <a class="atl-via" href="#/">← Studio</a>
        <nav class="atl-sezioni" aria-label="Sezioni dell'atlante">
          ${PGE.atlante.sezioni.map(s => `<a class="${s.id === sez.id ? 'attiva' : ''}" href="#/atlante/${s.id}">${esc(s.titolo)}</a>`).join('')}
        </nav>
        <div class="atl-modi" role="tablist">
          <button class="atl-modo${modo === 'studio' ? ' attivo' : ''}" data-modo="studio" role="tab">Studio</button>
          ${sez.percorso ? `<button class="atl-modo${modo === 'lezione' ? ' attivo' : ''}" data-modo="lezione" role="tab">Lezione</button>` : ''}
          <button class="atl-modo${modo === 'test' ? ' attivo' : ''}" data-modo="test" role="tab">Come si chiama?</button>
          <span class="atl-punteggio" id="atlPunteggio"></span>
        </div>
      </header>

      <aside class="atl-albero" id="atlAlbero">
        <div class="atl-albero-testa">
          <p class="atl-albero-tit">Parti</p>
          <button type="button" class="atl-albero-chiudi" id="atlAlberoChiudi" aria-label="Chiudi elenco">×</button>
        </div>
        <div class="atl-albero-lista" id="atlAlberoLista"></div>
      </aside>

      <aside class="atl-guida" id="atlGuida" ${modo === 'lezione' ? '' : 'hidden'}>
        <p class="atl-guida-meta" id="atlGuidaMeta"></p>
        <h2 class="atl-guida-tit" id="atlGuidaTit"></h2>
        <p class="atl-guida-testo" id="atlGuidaTesto"></p>
        <p class="atl-guida-pezzi" id="atlGuidaPezzi"></p>
        <div class="atl-guida-nav">
          <button type="button" id="atlGuidaPrima">Indietro</button>
          <button type="button" id="atlGuidaDopo">Avanti</button>
        </div>
      </aside>

      <div class="atl-esplodi-dock" id="atlEsplodiDock" ${modo === 'lezione' ? 'hidden' : ''}>
        <label class="atl-cursore"><span>Esplodi</span>
          <input type="range" id="atlEsplosione" min="0" max="100" value="0"></label>
        <div class="atl-esplodi-pre">
          <button type="button" data-esp="0">Insieme</button>
          <button type="button" data-esp="40">Stacca</button>
          <button type="button" data-esp="100">Apri</button>
        </div>
      </div>

      <div class="atl-gizmo" id="atlGizmo" hidden>
        ${[['laterale','Laterale'],['dorsale','Dorsale'],['ventrale','Ventrale'],['mediale','Mediale'],['frontale','Frontale']].map(([v,l]) =>
          `<button type="button" data-vista="${v}">${l}</button>`).join('')}
      </div>

      <button type="button" class="atl-indietro" id="atlIndietro" hidden>↖ ${esc(sez.titolo)}</button>
      <button type="button" class="atl-titolo" id="atlTitolo">
        <span class="atl-titolo-gruppo" id="atlTitoloGruppo">${esc(sez.occhiello || '')}</span>
        <span class="atl-titolo-nome" id="atlTitoloNome">${esc(sez.titolo)}</span>
      </button>

      <aside class="atl-scheda" id="atlScheda" hidden aria-live="polite"></aside>

      <div class="atl-cerca-box" id="atlCercaBox" hidden>
        <input type="search" id="atlCercaInput" placeholder="Cerca una struttura" autocomplete="off">
        <div class="atl-cerca-esiti" id="atlCercaEsiti"></div>
      </div>

      <div class="atl-pannello" id="atlSlice" hidden>
        <p class="atl-pannello-tit">Sezioni</p>
        <div class="atl-piani">
          <button type="button" data-piano="sagittale">Sagittale</button>
          <button type="button" data-piano="orizzontale">Orizzontale</button>
          <button type="button" data-piano="coronale">Coronale</button>
        </div>
        <label class="atl-cursore"><span>Taglio</span>
          <input type="range" id="atlTaglio" min="0" max="100" value="50"></label>
        <label class="atl-cursore"><span>Resto</span>
          <input type="range" id="atlResto" min="8" max="100" value="100"></label>
      </div>

      <div class="atl-pannello atl-aiuto" id="atlAiuto" hidden>
        <p class="atl-pannello-tit">Comandi</p>
        <ul class="atl-aiuto-lista">
          <li><strong>Trascina</strong> — ruota</li>
          <li><strong>Tasto destro</strong> o <strong>Shift+trascina</strong> — sposta</li>
          <li><strong>Rotella</strong> — zoom sul punto</li>
          <li><strong>Elenco a sinistra</strong> — scegli e inquadra una parte</li>
          <li><strong>Esplodi</strong> — stacca i pezzi; Insieme li rimette</li>
          <li><strong>Clic</strong> — seleziona (il resto resta visibile)</li>
          <li><strong>Doppio clic</strong> — isola; sul vuoto, reset</li>
          <li><strong>W A S D</strong> e <strong>Q E</strong> — camera libera (Shift: più veloce)</li>
          <li><strong>Home</strong> — torna all'insieme</li>
        </ul>
        <p class="nota">I nomi sono quelli della lezione. Le forme sono didattiche, non da risonanza.</p>
      </div>

      <div class="atl-pannello" id="atlEsplodiPannello" hidden></div>

      <div class="atl-test" id="atlTest" hidden></div>

      <footer class="atl-barra">
        <button type="button" id="atlPartiBtn"><span>☰</span> Parti</button>
        <button type="button" id="atlCercaBtn"><span>⌕</span> Cerca</button>
        <button type="button" id="atlEtichetteBtn"><span>≡</span> Etichette</button>
        <button type="button" id="atlSliceBtn"><span>⊟</span> Sezioni</button>
        <button type="button" id="atlEsplodiBtn"><span>⤢</span> Esplodi</button>
        <button type="button" id="atlResetBtn"><span>⌂</span> Reset</button>
        <button type="button" id="atlFoto"><span>📷</span> Screenshot</button>
        <button type="button" id="atlAiutoBtn"><span>?</span> Aiuto</button>
        ${sez.id === 'encefalo' ? `<button type="button" id="atlColoriBtn" class="attivo"><span>●</span> Studio</button>` : ''}
        ${sez.gruppi && sez.gruppi.some(g => g[0] === 'aree')
          ? `<button type="button" id="atlAreeBtn"><span>◎</span> Aree</button>` : ''}
      </footer>
    </div>
  `;

  /* ---- riferimenti ---- */
  const scena = $('#atlScena'), pannello = $('#atlScheda'), carico = $('#atlCarico');
  const strato = $('#atlPin'), volante = $('#atlVolante'), zonaTest = $('#atlTest');
  let scelta = null, quesito = null;

  /* ---- navigazione fra i modi ---- */
  $$('.atl-modo', main).forEach(b => b.onclick = () => {
    MEM.set('atlante.modo', b.dataset.modo);
    vistaAtlante(sez.id);
  });

  function mostraPunteggio() {
    const p = punti[sez.id] || { giusti: 0, totale: 0 };
    $('#atlPunteggio').textContent = p.totale
      ? `${p.giusti} su ${p.totale} · ${Math.round(p.giusti / p.totale * 100)}%` : '';
  }
  mostraPunteggio();

  const titolo = $('#atlTitolo'), titoloGruppo = $('#atlTitoloGruppo'), titoloNome = $('#atlTitoloNome');
  const gizmo = $('#atlGizmo');
  const btnAree = $('#atlAreeBtn');
  let areeOn = false;
  if (sez.viste) gizmo.hidden = false;

  const nascoste = {};
  let isolato = false;

  function disegnaAlbero() {
    const lista = $('#atlAlberoLista');
    if (!lista) return;
    lista.innerHTML = atlAlberoHtml(sez, scelta, nascoste, areeOn);
  }

  function apriScheda(parte) {
    pannello.hidden = !parte;
    pannello.innerHTML = parte ? atlScheda(sez, parte) +
      `<div class="atl-scheda-azioni">
        <button type="button" class="atl-isola${isolato ? ' attivo' : ''}" id="atlIsolaBtn">${isolato ? 'Mostra tutto' : 'Isola'}</button>
        <button type="button" class="atl-chiudi" id="atlChiudiScheda">Chiudi</button>
      </div>` : '';
    const c = $('#atlChiudiScheda');
    if (c) c.onclick = () => { pannello.hidden = true; };
    const is = $('#atlIsolaBtn');
    if (is) is.onclick = () => {
      isolato = !isolato;
      if (ATL) ATL.isola(isolato);
      is.classList.toggle('attivo', isolato);
      is.textContent = isolato ? 'Mostra tutto' : 'Isola';
    };
  }

  function seleziona(id, daElenco) {
    scelta = id;
    const indietro = $('#atlIndietro');
    if (!id) {
      titoloGruppo.textContent = sez.occhiello || '';
      titoloNome.textContent = sez.titolo;
      if (indietro) indietro.hidden = true;
      pannello.hidden = true;
      isolato = false;
      history.replaceState(null, '', '#/atlante/' + sez.id);
      if (ATL && daElenco) ATL.seleziona(null, false);
      disegnaAlbero();
      return;
    }
    const parte = atlParte(sez, id);
    if (parte) {
      const g = (sez.gruppi || []).find(x => x[0] === parte.gruppo);
      titoloGruppo.textContent = g ? g[1] : sez.titolo;
      titoloNome.textContent = parte.nome;
      if (indietro) indietro.hidden = false;
      if (parte.gruppo === 'aree' && ATL && btnAree) {
        areeOn = true;
        btnAree.classList.add('attivo');
      }
      if (!pannello.hidden) apriScheda(parte);
      history.replaceState(null, '', '#/atlante/' + sez.id + '/' + id);
    }
    if (ATL && daElenco) ATL.seleziona(id, true);
    disegnaAlbero();
  }

  titolo.onclick = () => {
    if (!scelta) return;
    pannello.hidden = !pannello.hidden;
    if (!pannello.hidden) apriScheda(atlParte(sez, scelta));
  };

  /* ---- modalità test ---- */
  function nuovoQuesito() {
    const pool = sez.parti.filter(p => p.selezionabile !== false);
    const giusta = pool[Math.floor(Math.random() * pool.length)];
    /* i distrattori vengono prima dallo stesso gruppo: sono quelli che
       si confondono davvero */
    const vicine = mescola(pool.filter(p => p.id !== giusta.id && p.gruppo === giusta.gruppo));
    const lontane = mescola(pool.filter(p => p.id !== giusta.id && p.gruppo !== giusta.gruppo));
    const distrattori = vicine.slice(0, 3);
    while (distrattori.length < 3 && lontane.length) distrattori.push(lontane.pop());
    quesito = { parte: giusta, opzioni: mescola([giusta].concat(distrattori)) };
    disegnaQuesito();
    if (ATL) { ATL.evidenzia(giusta.id); ATL.inquadra(giusta.id); }
  }

  function disegnaQuesito(esito) {
    if (!quesito) return;
    const scritto = MEM.get('atlante.scritto', false);
    zonaTest.innerHTML = `
      <p class="atl-domanda">Come si chiama la parte accesa nel modello?</p>
      ${scritto
        ? `<form class="atl-forma" id="atlForma">
             <input type="text" id="atlRisposta" autocomplete="off" placeholder="Scrivi il nome" ${esito ? 'disabled' : ''}>
             <button class="bottone" type="submit" ${esito ? 'disabled' : ''}>Rispondi</button>
           </form>`
        : `<div class="atl-opzioni">${quesito.opzioni.map(o => `
             <button class="atl-opz${esito ? (o.id === quesito.parte.id ? ' giusta' : (o.id === esito.datoId ? ' sbagliata' : '')) : ''}"
               data-opz="${o.id}" ${esito ? 'disabled' : ''}>${esc(o.nome)}</button>`).join('')}</div>`}
      ${esito ? `<p class="atl-esito ${esito.ok ? 'ok' : 'no'}">
          ${esito.ok ? 'Giusto.' : 'No: era <strong>' + esc(quesito.parte.nome) + '</strong>.'}
        </p>
        <div class="azioni"><button class="bottone" id="atlAvanti">Un'altra</button>
        <button class="bottone vuoto" id="atlLeggi">Leggi la scheda</button></div>` : ''}
      <label class="atl-spunta atl-scritto"><input type="checkbox" id="atlScritto" ${scritto ? 'checked' : ''}> Scrivi il nome invece di scegliere</label>
    `;

    $('#atlScritto').onchange = e => { MEM.set('atlante.scritto', e.target.checked); disegnaQuesito(esito); };

    if (!esito) {
      $$('.atl-opz', zonaTest).forEach(b => b.onclick = () => rispondi(b.dataset.opz, null));
      const forma = $('#atlForma');
      if (forma) {
        forma.onsubmit = ev => { ev.preventDefault(); rispondi(null, $('#atlRisposta').value); };
        $('#atlRisposta').focus();
      }
    } else {
      $('#atlAvanti').onclick = nuovoQuesito;
      $('#atlLeggi').onclick = () => { seleziona(quesito.parte.id, true); pannello.scrollIntoView({ block: 'nearest' }); };
    }
  }

  function rispondi(datoId, testo) {
    const ok = datoId ? datoId === quesito.parte.id : atlIndovinato(quesito.parte, testo);
    const p = punti[sez.id] || { giusti: 0, totale: 0 };
    p.totale++; if (ok) p.giusti++;
    punti[sez.id] = p; MEM.set('atlante.punti', punti); mostraPunteggio();
    disegnaQuesito({ ok, datoId });
    pannello.innerHTML = atlScheda(sez, quesito.parte);
    if (ATL) ATL.evidenzia(null), ATL.seleziona(quesito.parte.id, false);
  }

  if (modo === 'test') zonaTest.hidden = false;

  function chiudiPannelli(salvo) {
    ['atlCercaBox', 'atlSlice', 'atlEsplodiPannello', 'atlAiuto'].forEach(id => {
      if (id !== salvo) $('#' + id).hidden = true;
    });
    $$('.atl-barra button').forEach(b => {
      if (b.id !== 'atlColoriBtn' && b.id !== 'atlAreeBtn' && b.id !== 'atlEtichetteBtn')
        b.classList.toggle('aperto', b.id === salvo + 'Btn' || false);
    });
  }

  /* ---- il 3D, se si riesce ----
     import() dentro uno script classico risolve il percorso sul documento,
     non sul file che lo chiama: './atlante3d.js' finirebbe nella radice del
     sito. new URL lo ancora alla cartella della pagina, e così funziona
     anche servito da una sottocartella (GitHub Pages: /<repo>/). */
  import(new URL('assets/atlante3d.js', document.baseURI).href + (location.hostname === '127.0.0.1' || location.hostname === 'localhost' ? '?' + Date.now() : ''))
    .then(mod => mod.creaScena(scena, sez, { tinte: PGE.atlante.tinte }))
    .then(api => {
      if (location.hash.indexOf('#/atlante') !== 0) { api.distruggi(); return; }
      ATL = api;
      carico.remove();

      api.su('scelta', id => seleziona(id, false));
      api.su('isola', on => {
        isolato = !!on;
        const is = $('#atlIsolaBtn');
        if (is) {
          is.classList.toggle('attivo', isolato);
          is.textContent = isolato ? 'Mostra tutto' : 'Isola';
        }
      });
      api.su('sopra', (id, x, y) => {
        if (!id) { volante.hidden = true; return; }
        const parte = atlParte(sez, id);
        volante.textContent = parte ? parte.nome : '';
        volante.hidden = false;
        const r = scena.getBoundingClientRect();
        volante.style.left = (x - r.left) + 'px';
        volante.style.top = (y - r.top) + 'px';
      });

      let piano = null;
      $$('#atlGizmo [data-vista]').forEach(b => b.onclick = () => {
        api.vistaAnatomica(b.dataset.vista);
        if (b.dataset.vista === 'mediale') {
          piano = 'sagittale';
          $$('#atlSlice [data-piano]').forEach(x => x.classList.toggle('attivo', x.dataset.piano === 'sagittale'));
          $('#atlSlice').hidden = false;
          $('#atlSliceBtn').classList.add('aperto');
        }
      });
      $('#atlResetBtn').onclick = () => {
        piano = null;
        $$('#atlSlice [data-piano]').forEach(x => x.classList.remove('attivo'));
        chiudiPannelli(null);
        if (modo === 'lezione' && sez.percorso) { applicaPasso(passoLezione); return; }
        seleziona(null, true);
        api.reset();
        applicaEsplosioneUI(0);
      };
      $('#atlAiutoBtn').onclick = () => {
        const p = $('#atlAiuto');
        const apri = p.hidden;
        chiudiPannelli(apri ? 'atlAiuto' : null);
        p.hidden = !apri;
        $('#atlAiutoBtn').classList.toggle('aperto', apri);
      };
      $('#atlIndietro').onclick = () => {
        seleziona(null, true);
        api.reset();
        applicaEsplosioneUI(0);
      };

      function applicaEsplosioneUI(v) {
        const sl = $('#atlEsplosione');
        if (sl) sl.value = Math.round(v * 100);
        api.esplodi(v);
        $('#atlEsplodiBtn').classList.toggle('aperto', v > 0.08);
        $$('#atlEsplodiDock [data-esp]').forEach(b => {
          b.classList.toggle('attivo', Math.abs(+b.dataset.esp / 100 - v) < 0.08);
        });
        if (v >= 0.28 && !etichetteOn) accendiEtichette(true);
      }
      $('#atlEsplosione').oninput = e => applicaEsplosioneUI(+e.target.value / 100);
      $$('#atlEsplodiDock [data-esp]').forEach(b => {
        b.onclick = () => applicaEsplosioneUI(+b.dataset.esp / 100);
      });
      $('#atlEsplodiBtn').onclick = () => {
        const sl = $('#atlEsplosione');
        const on = +sl.value < 45;
        applicaEsplosioneUI(on ? 1 : 0);
      };

      const albero = $('#atlAlbero');
      $('#atlPartiBtn').onclick = () => {
        const apri = !albero.classList.contains('aperto');
        albero.classList.toggle('aperto', apri);
        $('#atlPartiBtn').classList.toggle('aperto', apri);
      };
      $('#atlAlberoChiudi').onclick = () => {
        albero.classList.remove('aperto');
        $('#atlPartiBtn').classList.remove('aperto');
      };
      $('#atlAlberoLista').onclick = e => {
        const occhio = e.target.closest('[data-occhio]');
        if (occhio) {
          const id = occhio.dataset.occhio;
          nascoste[id] = !nascoste[id];
          api.mostraParte(id, !nascoste[id]);
          disegnaAlbero();
          return;
        }
        const gruppo = e.target.closest('[data-inquadra-gruppo]');
        if (gruppo) { api.inquadraGruppo(gruppo.dataset.inquadraGruppo); return; }
        const riga = e.target.closest('[data-parte]');
        if (riga) {
          seleziona(riga.dataset.parte, true);
          apriScheda(atlParte(sez, riga.dataset.parte));
        }
      };

      $('#atlSliceBtn').onclick = () => {
        const p = $('#atlSlice');
        const apri = p.hidden;
        chiudiPannelli(apri ? 'atlSlice' : null);
        p.hidden = !apri;
        $('#atlSliceBtn').classList.toggle('aperto', apri);
      };
      $$('#atlSlice [data-piano]').forEach(b => b.onclick = () => {
        piano = piano === b.dataset.piano ? null : b.dataset.piano;
        $$('#atlSlice [data-piano]').forEach(x => x.classList.toggle('attivo', x.dataset.piano === piano));
        api.taglia(piano, +$('#atlTaglio').value / 100);
      });
      $('#atlTaglio').oninput = e => api.taglia(piano, +e.target.value / 100);
      $('#atlResto').oninput = e => api.resto(+e.target.value / 100);

      $('#atlCercaBtn').onclick = () => {
        const p = $('#atlCercaBox');
        const apri = p.hidden;
        chiudiPannelli(apri ? 'atlCercaBox' : null);
        p.hidden = !apri;
        $('#atlCercaBtn').classList.toggle('aperto', apri);
        if (apri) $('#atlCercaInput').focus();
      };
      $('#atlCercaInput').oninput = e => {
        const q = atlNormalizza(e.target.value);
        const hits = !q ? [] : sez.parti.filter(p => p.selezionabile !== false && (
          atlNormalizza(p.nome).indexOf(q) >= 0 ||
          (p.alias || []).some(a => atlNormalizza(a).indexOf(q) >= 0)
        )).slice(0, 8);
        $('#atlCercaEsiti').innerHTML = hits.map(p =>
          `<button type="button" data-parte="${p.id}">${esc(p.nome)}</button>`).join('');
      };
      $('#atlCercaEsiti').onclick = e => {
        const b = e.target.closest('[data-parte]');
        if (!b) return;
        seleziona(b.dataset.parte, true);
        $('#atlCercaBox').hidden = true;
        $('#atlCercaBtn').classList.remove('aperto');
      };

      let etichetteOn = false;
      function accendiEtichette(on) {
        etichetteOn = on;
        $('#atlEtichetteBtn').classList.toggle('aperto', on);
        if (!on) { strato.innerHTML = ''; cancelAnimationFrame(ATL_ETI); ATL_ETI = 0; return; }
        const etichettabili = sez.parti.filter(p => p.selezionabile !== false && p.gruppo !== 'aree' && !nascoste[p.id]);
        strato.innerHTML = etichettabili.map(p => `<span class="atl-pin" data-pin="${p.id}">${esc(p.nome)}</span>`).join('');
        const pin = {};
        $$('.atl-pin', strato).forEach(s => pin[s.dataset.pin] = s);
        (function muovi() {
          ATL_ETI = requestAnimationFrame(muovi);
          etichettabili.forEach(p => {
            const s = pin[p.id], q = api.schermo(p.id);
            if (!s) return;
            if (!q) { s.style.opacity = 0; return; }
            s.style.opacity = 1;
            s.style.transform = `translate(${q.x}px,${q.y}px)`;
          });
        })();
      }
      $('#atlEtichetteBtn').onclick = () => accendiEtichette(!etichetteOn);

      if (btnAree) {
        btnAree.onclick = () => {
          areeOn = !areeOn;
          btnAree.classList.toggle('attivo', areeOn);
          api.mostraGruppo('aree', areeOn);
          disegnaAlbero();
        };
      }

      const btnCol = $('#atlColoriBtn');
      if (btnCol) {
        btnCol.onclick = () => {
          const studio = api.valoreAspetto() === 'studio';
          api.aspetto(studio ? 'didattico' : 'studio');
          btnCol.classList.toggle('attivo', !studio);
          btnCol.innerHTML = studio ? '<span>●</span> Colori' : '<span>●</span> Studio';
        };
      }

      $('#atlFoto').onclick = () => {
        const a = document.createElement('a');
        a.href = api.fotografa();
        a.download = 'atlante-' + sez.id + '.png';
        a.click();
      };

      let passoLezione = 0;
      function applicaPasso(i) {
        const path = sez.percorso || [];
        if (!path.length) return;
        passoLezione = Math.max(0, Math.min(path.length - 1, i));
        MEM.set('atlante.passo.' + sez.id, passoLezione);
        const s = path[passoLezione];
        const meta = $('#atlGuidaMeta'), tit = $('#atlGuidaTit'), testo = $('#atlGuidaTesto');
        const pezzi = $('#atlGuidaPezzi');
        if (meta) meta.textContent = 'Lezione ' + String(s.lez || '').replace(/^L0?/, '') + '  ·  ' + (passoLezione + 1) + ' / ' + path.length;
        if (tit) tit.textContent = s.titolo;
        if (testo) testo.innerHTML = s.testo;
        if (pezzi) {
          const nomi = (s.accendi || []).map(id => { const p = atlParte(sez, id); return p ? p.nome : ''; }).filter(Boolean);
          pezzi.textContent = nomi.length ? nomi.join(' · ') : '';
        }
        const prima = $('#atlGuidaPrima'), dopo = $('#atlGuidaDopo');
        if (prima) prima.disabled = passoLezione === 0;
        if (dopo) dopo.textContent = passoLezione === path.length - 1 ? 'Fine' : 'Avanti';
        titoloGruppo.textContent = 'Lezione ' + String(s.lez || '').replace(/^L0?/, '');
        titoloNome.textContent = s.titolo;
        api.guida(s);
        const btnCol = $('#atlColoriBtn');
        if (btnCol && s.aspetto) {
          const studio = s.aspetto !== 'didattico';
          btnCol.classList.toggle('attivo', studio);
          btnCol.innerHTML = studio ? '<span>●</span> Studio' : '<span>●</span> Colori';
        }
        if (btnAree) {
          areeOn = !!s.aree;
          btnAree.classList.toggle('attivo', areeOn);
        }
      }
      if (modo === 'lezione' && sez.percorso) {
        const prima = $('#atlGuidaPrima'), dopo = $('#atlGuidaDopo');
        if (prima) prima.onclick = () => applicaPasso(passoLezione - 1);
        if (dopo) dopo.onclick = () => {
          if (passoLezione >= sez.percorso.length - 1) return;
          applicaPasso(passoLezione + 1);
        };
        if (ATL_GUIDA_TASTO) window.removeEventListener('keydown', ATL_GUIDA_TASTO);
        ATL_GUIDA_TASTO = ev => {
          const el = document.activeElement;
          if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return;
          if (ev.key === 'ArrowRight') { ev.preventDefault(); applicaPasso(passoLezione + 1); }
          if (ev.key === 'ArrowLeft') { ev.preventDefault(); applicaPasso(passoLezione - 1); }
        };
        window.addEventListener('keydown', ATL_GUIDA_TASTO);
        applicaPasso(MEM.get('atlante.passo.' + sez.id, 0) || 0);
      }

      if (sez.id === 'encefalo' && modo !== 'lezione') {
        api.mostraGruppo('aree', false);
        const ba = $('#atlAreeBtn');
        if (ba) ba.classList.remove('attivo');
        api.mostraParte('enc.meningi', false);
        nascoste['enc.meningi'] = true;
      }
      disegnaAlbero();
      $('#atlAlbero').classList.add('aperto');
      if (modo !== 'lezione' && idParte && atlParte(sez, idParte)) {
        const parte = atlParte(sez, idParte);
        if (parte.gruppo === 'aree') {
          areeOn = true;
          if (btnAree) btnAree.classList.add('attivo');
        }
        seleziona(idParte, true);
      }
      if (modo === 'test') nuovoQuesito();
    })
    .catch(err => {
      console.warn('atlante: 3D non disponibile —', err && err.message);
      scena.classList.add('atl-senza3d');
      carico.innerHTML = `<div class="atl-ripiego">
        <p class="occhiello">Modello 3D non disponibile</p>
        <p>Il visore 3D è un modulo ES: non si carica da <code>file://</code>
        — quindi non in <code>standalone.html</code> — e richiede WebGL.
        Apri il sito da un server (<code>python3 -m http.server</code>) o dalla versione online.</p>
        <p class="nota">Il contenuto resta tutto qui sotto: le schede e il test funzionano comunque.</p>
      </div>`;
      if (modo === 'test') nuovoQuesito();
    });
}
