/* Psicologia Generale — guida allo studio
   Applicazione statica: routing a hash, nessun backend, nessuno storage. */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const main = $('#contenuto');

const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));

/* ---------------- TEMA: figura / sfondo ---------------- */
const temaBtn = $('#temaBtn');
function applicaTema(t) {
  document.documentElement.dataset.tema = t;
  $('.tema-testo').textContent = t;
  const mc = document.querySelector('meta[name="theme-color"]');
  if (mc) mc.content = t === 'figura' ? '#EDEFEA' : '#12161C';
  if (window.mermaid) configuraMermaid();
}
temaBtn.addEventListener('click', () => {
  applicaTema(document.documentElement.dataset.tema === 'figura' ? 'sfondo' : 'figura');
  const r = location.hash;
  if (r.includes('/lezioni/')) instrada();
});
if (window.matchMedia('(prefers-color-scheme: dark)').matches) applicaTema('sfondo');

function configuraMermaid() {
  const s = getComputedStyle(document.documentElement);
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    securityLevel: 'loose',
    themeVariables: {
      background: s.getPropertyValue('--carta-alta').trim(),
      primaryColor: s.getPropertyValue('--carta').trim(),
      primaryTextColor: s.getPropertyValue('--inchiostro').trim(),
      primaryBorderColor: s.getPropertyValue('--linea').trim(),
      lineColor: s.getPropertyValue('--grafite').trim(),
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize: '13px'
    }
  });
}

/* ---------------- MENU MOBILE ---------------- */
$('#menuBtn').addEventListener('click', () => $('#barra').classList.toggle('aperta'));

/* ---------------- ROUTER ---------------- */
const rotte = {
  '/':                  vistaQuadro,
  '/definizione':       vistaDefinizione,
  '/excursus':          vistaExcursus,
  '/filiazioni':        vistaFiliazioni,
  '/manuale':           vistaManuale,
  '/argomenti':         vistaArgomenti,
  '/schede':            vistaSchede,
  '/nomi':              vistaNomi,
  '/flashcard':         vistaFlashcard,
  '/quiz':              vistaQuiz,
  '/lezioni':           vistaLezioni,
  '/programma':         vistaProgramma,
  '/sintagmi':          vistaSintagmi,
  '/errori':            vistaErrori,
  '/esame/simulazione': vistaSimulazione,
  '/esame/allenamento': vistaAllenamento,
  '/esame/archivio':    vistaArchivio
};

function instrada() {
  const percorso = (location.hash.slice(1) || '/').split('?')[0];
  main.innerHTML = '';
  fermaTimer();

  const lez = percorso.match(/^\/lezioni\/(L\d+)$/);
  const cap = percorso.match(/^\/manuale\/([CA]\d+)$/);
  const arg = percorso.match(/^\/argomenti\/(D\d+)$/);
  const fas = percorso.match(/^\/schede\/(F\d+)$/);
  if (lez) vistaLezione(lez[1]);
  else if (cap) vistaCapitolo(cap[1]);
  else if (arg) vistaArgomento(arg[1]);
  else if (fas) vistaFascicolo(fas[1]);
  else if (rotte[percorso]) rotte[percorso]();
  else vistaAssente(percorso);

  avvolgiTabelle();
  $$('.barra a').forEach(a => a.classList.toggle('attivo', a.getAttribute('href') === '#' + percorso));
  $('#barra').classList.remove('aperta');
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', instrada);

/* ---------------- VISTE: CONCETTI ---------------- */

function vistaQuadro() {
  const pronte = PGE.lezioni.filter(l => l.stato === 'pronta').length;
  const prove  = PGE.risultati.length;
  const media  = prove ? (PGE.risultati.reduce((s, r) => s + r.totale, 0) / prove).toFixed(1) : '—';

  main.innerHTML = `
    <p class="occhiello">Guida allo studio</p>
    <h1>Il tutto è più della somma delle parti</h1>
    <p class="sommario">Il materiale del corso riorganizzato per concetti anziché per lezioni, e rimesso in forma di manuale: la definizione della disciplina, l'excursus storico con la terna che la docente chiede a ogni scuola — oggetto, metodo, validità — e la metodologia della ricerca, dal metodo scientifico alla pubblicazione. Con quiz, flashcard e allenamento sui nomi per verificare che regga.</p>

    <div class="griglia tre" style="margin-bottom:2.5rem">
      <div class="dato"><span class="dato-cifra">${PGE.manuale.capitoli.length}</span><span class="dato-eti">capitoli del manuale</span></div>
      <div class="dato"><span class="dato-cifra">${PGE.quiz.length + PGE.flashcard.length + PGE.nomi.length}</span><span class="dato-eti">esercizi disponibili</span></div>
      <div class="dato"><span class="dato-cifra">${media}${prove ? '<span style="font-size:1rem;color:var(--grafite)">/30</span>' : ''}</span><span class="dato-eti">media delle prove</span></div>
    </div>

    <h2>Studiare</h2>
    <div class="griglia due">
      ${[
        ['#/manuale','Il manuale', `${PGE.manuale.capitoli.length} capitoli in forma di manuale vero e proprio: prosa espositiva, riquadri, sintesi e domande di verifica. È il posto da cui partire.`],
        ['#/excursus','Excursus storico','Le scuole raggruppate per fasi, con la catena delle esigenze che porta dall\'una all\'altra. Per ciascuna: oggetto, metodo, validità.'],
        ['#/definizione','La definizione','I sette passaggi per rispondere alla domanda «che cos\'è la psicologia» senza lasciare punti sul tavolo.'],
        ['#/filiazioni','Linee di filiazione','Chi precede chi, in entrambe le direzioni: i punti in cui la docente costruisce i ponti, e i più interrogati.'],
        ['#/manuale/C16','Metodologia della ricerca','Il metodo scientifico e i suoi assunti, il processo di ricerca, le variabili, i metodi descrittivi, il correlazionale, lo sperimentale, la pubblicazione.'],
        ['#/argomenti','Come si espone a voce',`${PGE.argomenti.voci.length} esposizioni scritte come si direbbero all'orale, dall'attacco alla chiusura, con le indicazioni di regìa nascondibili.`]
      ].map(([h,t,d]) => `
        <a class="scheda" href="${h}" style="text-decoration:none">
          <h3 style="margin-top:0">${t}</h3>
          <p style="margin:0;color:var(--grafite);font-size:.92rem">${d}</p>
        </a>`).join('')}
    </div>

    <h2>Allenarsi</h2>
    <div class="griglia due">
      ${[
        ['#/quiz','Quiz a crocette', `${PGE.quiz.length} domande a quattro opzioni, con spiegazione dopo ogni risposta. I distrattori sono le risposte di un\'altra scuola: sbagliare qui è informativo.`],
        ['#/flashcard','Flashcard', `${PGE.flashcard.length} carte a tre scatole. Le sbagliate tornano, quelle sapute due volte escono dal giro.`],
        ['#/nomi','Scrivere i nomi', `${PGE.nomi.length} nomi e luoghi, con il confronto lettera per lettera. Titchener, Vygotskij, Wertheimer, von Helmholtz: qui si sbaglia sempre.`],
        ['#/esame/simulazione','Simulazione d\'esame','Tre domande aperte, venti minuti, poi le risposte si esportano per la correzione.']
      ].map(([h,t,d]) => `
        <a class="scheda" href="${h}" style="text-decoration:none">
          <h3 style="margin-top:0">${t}</h3>
          <p style="margin:0;color:var(--grafite);font-size:.92rem">${d}</p>
        </a>`).join('')}
    </div>

    <h2>Il metodo di ripasso</h2>
    <div class="scheda">
      <p style="margin-top:0">Per ogni scuola, recita ad alta voce la terna, sempre nello stesso ordine:</p>
      <p style="font-family:var(--dati);font-size:1.05rem;color:var(--accento);letter-spacing:.05em;margin:.8rem 0">OGGETTO → METODO → VALIDITÀ</p>
      <p style="margin-bottom:0">È lo schema con cui la docente organizza la lezione, quindi probabilmente quello con cui interroga. Se ti blocchi su una delle tre, quella scuola non è pronta.</p>
    </div>`;
}

function vistaDefinizione() {
  const d = PGE.definizione;
  main.innerHTML = `
    <p class="occhiello">Concetti · Definizione</p>
    <h1>Che cos'è la psicologia</h1>
    <p class="sommario">${d.intro}</p>

    <h2>La risposta in sette passaggi</h2>
    <div>${d.passaggi.map(p => `
      <div class="passo ${p.formula ? 'formula' : ''}">
        <div class="passo-n">${String(p.n).padStart(2,'0')}</div>
        <div class="passo-corpo">
          <h3>${p.t}</h3>
          <p>${p.c}</p>
          ${p.nota ? `<div class="avviso"><strong>Attenzione.</strong> ${p.nota}</div>` : ''}
        </div>
      </div>`).join('')}
    </div>

    <h2>La chiusura che alza il voto</h2>
    <div class="scheda"><p style="margin:0">${d.chiusura}</p></div>

    <h2>${d.ritardo.titolo}</h2>
    <p>Le cause sono <strong>tre</strong>, e vanno enumerate come tali:</p>
    <ol>${d.ritardo.cause.map(c => `<li>${c}</li>`).join('')}</ol>
    <div class="nota">${d.ritardo.ponte}</div>`;
}

function vistaExcursus() {
  const pre = PGE.preScientifica, ctx = PGE.contesto;
  const filtro = MEM.get('excursus.filtro', '');

  const pietre = [
    { a:"1879", t:"Wundt, Lipsia", id:"nascita" },
    { a:"1892", t:"Strutturalismo", id:"strutturalismo" },
    { a:"1896", t:"Funzionalismo", id:"funzionalismo" },
    { a:"1912", t:"Gestalt", id:"gestalt" },
    { a:"1913", t:"Comportamentismo", id:"comportamentismo" }
  ];

  main.innerHTML = `
    <p class="occhiello">Concetti · Excursus storico</p>
    <h1>L'asse</h1>
    <p class="sommario">L'excursus non è una cronologia ma una <strong>catena di esigenze</strong>: ogni scuola nasce da un problema lasciato aperto dalla precedente. La domanda con cui percorrerlo non è «che cosa viene dopo?» ma <strong>«che cosa non funzionava prima?»</strong>.</p>

    <div class="pietre">
      <p class="pietre-tit">Le cinque date da non sbagliare</p>
      <div class="pietre-riga">
        ${pietre.map(p => `<a class="pietra" href="#scuola-${p.id}"><span class="pietra-a">${p.a}</span><span class="pietra-t">${p.t}</span></a>`).join('')}
      </div>
    </div>

    <h2>Prima della scienza</h2>
    <p class="nota" style="margin-bottom:1rem">${pre.sommario}</p>
    <table>
      <thead><tr><th>Figura</th><th>Contributo</th><th>Perché non è scienza</th></tr></thead>
      <tbody>${pre.voci.map(v => `<tr><td><strong>${v.nome}</strong></td><td>${v.contributo}</td><td style="color:var(--grafite)">${v.limite}</td></tr>`).join('')}</tbody>
    </table>
    <div class="nota">${pre.lascito}</div>

    <h2>${ctx.titolo}</h2>
    <div class="griglia due">
      ${ctx.blocchi.map(b => `<div class="scheda"><h3 style="margin-top:0">${b.nome}</h3><p style="margin-bottom:0;font-size:.93rem">${b.testo}</p></div>`).join('')}
    </div>

    <h2>Le scuole di pensiero</h2>
    <p class="nota" style="margin-bottom:1rem">Ogni nodo si apre sulla terna <strong>oggetto — metodo — validità</strong>, sui precursori e su ciò che a sua volta precorre. I nodi pieni sono i punti di svolta.</p>

    <div class="filtri" id="excFiltri">
      <button class="chip${filtro === '' ? ' attivo' : ''}" data-f="">Tutte</button>
      <button class="chip${filtro === 'L01' ? ' attivo' : ''}" data-f="L01">Lezione 1</button>
      <button class="chip${filtro === 'L02' ? ' attivo' : ''}" data-f="L02">Lezione 2</button>
      <button class="chip${filtro === 'svolte' ? ' attivo' : ''}" data-f="svolte">Solo le svolte</button>
      <button class="chip${filtro === 'collaterali' ? ' attivo' : ''}" data-f="collaterali">Collaterali</button>
      <button class="chip vuoto" id="excApri">Apri tutti</button>
    </div>

    <div id="excAsse">${asseScuole(filtro)}</div>

    <h2>Tavola sinottica</h2>
    <p class="nota" style="margin-bottom:1rem">La stessa informazione in forma comparabile: è la griglia con cui conviene ripassare la sera prima.</p>
    <table>
      <thead><tr><th>Scuola</th><th>Oggetto</th><th>Metodo</th><th>Validità</th></tr></thead>
      <tbody>${PGE.scuole.filter(x => !x.futura).map(x => `<tr>
        <td><strong>${x.nome.replace(/^La |^Il |^Lo /, '')}</strong><br><span style="font-family:var(--dati);font-size:.72rem;color:var(--grafite)">${x.etichetta}</span></td>
        <td style="font-size:.86rem">${scorcia(x.oggetto)}</td>
        <td style="font-size:.86rem">${scorcia(x.metodo)}</td>
        <td style="font-size:.86rem;color:var(--grafite)">${scorcia(x.validita)}</td></tr>`).join('')}</tbody>
    </table>

    <h2>Che cosa portarsi via</h2>
    <div class="griglia due">
      <div class="scheda"><h3 style="margin-top:0">La terna</h3><p style="margin-bottom:0;font-size:.93rem">Di ogni scuola bisogna saper dire <strong>che cosa</strong> studia, <strong>come</strong> lo studia e <strong>se il come regge</strong>. Nella maggior parte dei casi la scuola muore per il secondo termine, non per il primo.</p></div>
      <div class="scheda"><h3 style="margin-top:0">Le cinque mosse</h3><p style="margin-bottom:0;font-size:.93rem">Collocazione · l'<strong>esigenza</strong> da cui nasce · la terna · un <strong>esperimento</strong> o concetto tecnico · il <strong>ponte</strong> verso la scuola successiva. È lo scheletro di qualunque risposta d'esame su questo modulo.</p></div>
    </div>`;

  collegaExcursus();
}

/* riduce una descrizione lunga alla prima frase, conservando il grassetto */
function scorcia(html) {
  const t = String(html).split(/\.\s(?=[A-Z«])/)[0];
  return t.length < String(html).length - 1 ? t + '.' : t;
}

function asseScuole(filtro) {
  const passa = s =>
    filtro === '' ? true :
    filtro === 'svolte' ? !!(s.cardine || s.svolta) :
    filtro === 'collaterali' ? !!s.collaterale :
    s.lezione === filtro;

  return PGE.periodi.map(p => {
    const ss = PGE.scuole.filter(s => s.periodo === p.id && passa(s));
    if (!ss.length) return '';
    return `<div class="fase">
        <div class="fase-testa">
          <h3>${p.nome}</h3>
          <span class="fase-arco">${p.arco}</span>
        </div>
        <p class="fase-testo">${p.testo}</p>
        <div class="asse">${ss.map((s, i) => nodoScuola(s, i)).join('')}</div>
      </div>`;
  }).join('') || `<p class="nota">Nessuna scuola corrisponde a questo filtro.</p>`;
}

/* i nodi vengono ricostruiti a ogni cambio di filtro: si ricollegano solo loro */
function collegaNodiScuola() {
  $$('#excAsse .nodo-testa').forEach(b => b.addEventListener('click', () => {
    const n = b.closest('.nodo');
    const aperto = n.classList.toggle('aperto');
    b.setAttribute('aria-expanded', aperto);
    $('.nodo-corpo', n).hidden = !aperto;
  }));
}

/* i comandi fuori dall'asse si collegano una volta sola */
function collegaExcursus() {
  collegaNodiScuola();

  $$('#excFiltri .chip[data-f]').forEach(b => b.addEventListener('click', () => {
    MEM.set('excursus.filtro', b.dataset.f);
    $$('#excFiltri .chip[data-f]').forEach(x => x.classList.toggle('attivo', x === b));
    $('#excAsse').innerHTML = asseScuole(b.dataset.f);
    collegaNodiScuola();
    $('#excApri').textContent = 'Apri tutti';
  }));

  const ap = $('#excApri');
  ap.addEventListener('click', () => {
    const daAprire = $$('#excAsse .nodo:not(.aperto)').length > 0;
    $$('#excAsse .nodo').forEach(n => {
      n.classList.toggle('aperto', daAprire);
      const t = $('.nodo-testa', n); if (t) t.setAttribute('aria-expanded', daAprire);
      const c = $('.nodo-corpo', n); if (c) c.hidden = !daAprire;
    });
    ap.textContent = daAprire ? 'Chiudi tutti' : 'Apri tutti';
  });

  $$('.pietra').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    /* se il filtro attivo nasconde la scuola cercata, si torna a «Tutte» */
    if (!document.getElementById(id)) {
      MEM.set('excursus.filtro', '');
      $$('#excFiltri .chip[data-f]').forEach(x => x.classList.toggle('attivo', x.dataset.f === ''));
      $('#excAsse').innerHTML = asseScuole('');
      collegaNodiScuola();
    }
    const t = document.getElementById(id);
    if (!t) return;
    if (!t.classList.contains('aperto')) $('.nodo-testa', t).click();
    t.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
}

function nodoScuola(s, i) {
  const cls = [s.cardine && 'cardine', s.svolta && 'svolta', s.futura && 'futura', s.collaterale && 'collaterale'].filter(Boolean).join(' ');
  return `
  <div class="nodo ${cls}" id="scuola-${s.id}">
    <div class="nodo-anno">${s.etichetta}</div>
    <button class="nodo-testa" aria-expanded="false">
      <span class="nodo-nome">${s.nome}</span>
      ${s.collaterale ? '<span class="tag">collaterale</span>' : ''}
      ${s.svolta ? '<span class="tag acc">svolta</span>' : ''}
      ${s.futura ? '<span class="tag">in arrivo</span>' : ''}
      <span class="nodo-luogo">${s.luogo} · ${s.lezione}</span>
    </button>
    <div class="nodo-corpo" hidden>
      ${s.motto ? `<p style="font-family:var(--display);font-size:1.15rem;color:var(--accento);margin:0 0 1rem">«${s.motto}»</p>` : ''}
      <div class="terna">
        <div class="terna-voce"><div class="terna-eti">Oggetto</div><p>${s.oggetto}</p></div>
        <div class="terna-voce"><div class="terna-eti">Metodo</div><p>${s.metodo}</p></div>
        <div class="terna-voce"><div class="terna-eti">Validità</div><p>${s.validita}</p></div>
        <div class="terna-voce"><div class="terna-eti">Autori</div><p>${s.autori.join(' · ')}</p></div>
      </div>
      ${s.precursori.length ? `<div class="terna-voce" style="margin-bottom:.7rem"><div class="terna-eti">Deriva da</div><div class="rel">${s.precursori.map(p => `<span><b>${p.nome}</b> — ${p.cosa}</span>`).join('')}</div></div>` : ''}
      ${s.precorre.length ? `<div class="terna-voce" style="margin-bottom:1rem"><div class="terna-eti">Precorre</div><div class="rel">${s.precorre.map(p => `<span><b>${p.nome}</b> — ${p.cosa}</span>`).join('')}</div></div>` : ''}
      ${s.critiche ? `<h3>Le due critiche al metodo — sono distinte</h3>${s.critiche.map(c => `<p style="font-size:.93rem"><strong>${c.t}.</strong> ${c.c}</p>`).join('')}` : ''}
      ${s.extra ? `<h3>${s.extra.titolo}</h3><p style="font-size:.93rem">${s.extra.html}</p>` : ''}
      ${s.focus ? `<h3>${s.focus.nome}</h3><p style="font-size:.93rem">${s.focus.html}</p>${s.focus.avviso ? `<div class="avviso"><strong>Imprecisione nella lezione.</strong> ${s.focus.avviso}</div>` : ''}` : ''}
      ${s.nodo ? `<div class="nota" style="margin-top:1rem">${s.nodo}</div>` : ''}
      ${s.chiavi.length ? `<div class="rel" style="margin-top:1rem">${s.chiavi.map(k => `<span style="font-family:var(--dati);font-size:.7rem">${k}</span>`).join('')}</div>` : ''}
    </div>
  </div>`;
}

function vistaFiliazioni() {
  main.innerHTML = `
    <p class="occhiello">Concetti · Filiazioni</p>
    <h1>Chi precede chi</h1>
    <p class="sommario">Da sapere in entrambe le direzioni: «chi è precursore di chi» e «da cosa deriva questa scuola». Sono i punti in cui la docente costruisce i ponti, e statisticamente i più interrogati.</p>
    <div class="mappa" id="mappaFil"></div>

    <h2>Le quattro figure di frontiera</h2>
    <table>
      <thead><tr><th>Figura</th><th>Da</th><th>A</th></tr></thead>
      <tbody>${PGE.frontiera.map(f => `<tr><td><strong>${f.nome}</strong></td><td>${f.da}</td><td>${f.a}</td></tr>`).join('')}</tbody>
    </table>

    <h2>Il nodo che si chiude</h2>
    <div class="scheda"><p style="margin:0">Nella <strong>L01</strong> l'assenza dell'unità mente-cervello è il motivo per cui la psicologia non riesce a emanciparsi dalla medicina. Nella <strong>L02</strong>, con <strong>Hebb</strong> e il modello psicofisiologico, quell'unità viene per la prima volta postulata — e diventa il principale oggetto di studio della psicologia contemporanea.</p></div>

    <h2>I precursori da citare in coppia</h2>
    <p>I <strong>due precursori del comportamentismo</strong> vanno nominati insieme, perché vengono da tradizioni diverse: Thorndike dal funzionalismo americano, Pavlov dalla riflessologia russa. Il loro minimo comune denominatore: entrambi studiano l'<strong>apprendimento</strong> e usano la <strong>psicologia comparata</strong>.</p>
    <p>I <strong>tre precursori del cognitivismo</strong>: Vygotskij (storico-culturale), Tolman (neocomportamentismo), Hebb (cenocomportamentismo).</p>`;

  const g = `graph TD
    W["WUNDT 1879<br/>Lipsia"] --> S["STRUTTURALISMO 1892<br/>Titchener"]
    S -->|reazione| F["FUNZIONALISMO 1896<br/>Chicago"]
    W -->|"reazione:<br/>scompone troppo"| G["GESTALT 1912"]
    W -->|"reazione:<br/>studia l'inosservabile"| C["COMPORTAMENTISMO 1913<br/>Watson"]
    D["Darwin"] -.-> F
    J["William James"] -.-> F
    F --> T["THORNDIKE<br/>legge dell'effetto"]
    P["PAVLOV<br/>riflessi condizionati"] -.-> C
    T -.-> C
    K["Kant · Brentano"] -.-> G
    L["Locke — empirismo"] -.-> C
    C --> N["NEOCOMPORTAMENTISMO<br/>Hull · Tolman"]
    N --> CE["CENOCOMPORTAMENTISMO<br/>Hebb"]
    N -.->|"fuori dal coro"| SK["SKINNER<br/>condizionamento operante"]
    V["VYGOTSKIJ"] --> CO["COGNITIVISMO 1967"]
    N --> CO
    CE --> CO
    G -.-> LE["LEWIN<br/>psicologia sociale"]`;
  disegnaMermaid('#mappaFil', g, 'fil');
}

function vistaSintagmi() {
  main.innerHTML = `
    <p class="occhiello">Strumenti</p>
    <h1>I sintagmi da memorizzare</h1>
    <p class="sommario">Sono ${PGE.sintagmi.length}. Vanno imparati alla lettera, non parafrasati: è esattamente il punto in cui all'orale si scivola. Ripetili ad alta voce, non rileggendoli.</p>
    ${PGE.sintagmi.map((s, i) => `
      <div style="display:grid;grid-template-columns:2.2rem 1fr;gap:1rem;padding:.9rem 0;border-bottom:1px solid var(--linea-fine)">
        <div style="font-family:var(--dati);font-size:.75rem;color:var(--accento)">${String(i+1).padStart(2,'0')}</div>
        <div>
          <p style="font-family:var(--display);font-size:1.08rem;margin:0 0 .2rem">«${s.t}»</p>
          <p style="margin:0;font-size:.88rem;color:var(--grafite)">${s.d} <span style="font-family:var(--dati);font-size:.7rem">· ${s.l}</span></p>
        </div>
      </div>`).join('')}`;
}

function vistaErrori() {
  main.innerHTML = `
    <p class="occhiello">Strumenti</p>
    <h1>Errori da non fare</h1>
    <p class="sommario">Raccolti dalle simulazioni d'esame e dalle imprecisioni delle registrazioni. Vale la pena rileggerli il giorno prima.</p>
    <table>
      <thead><tr><th style="width:38%">Da evitare</th><th>Corretto</th><th style="width:8%"></th></tr></thead>
      <tbody>${PGE.errori.map(e => `<tr><td style="color:var(--segnale)">${e.no}</td><td>${e.si}</td><td style="font-family:var(--dati);font-size:.7rem;color:var(--grafite)">${e.l}</td></tr>`).join('')}</tbody>
    </table>`;
}

/* ---------------- VISTE: LEZIONI ---------------- */

function vistaLezioni() {
  main.innerHTML = `
    <p class="occhiello">Materiali</p>
    <h1>Le lezioni</h1>
    <p class="sommario">Per ogni lezione elaborata: trascrizione rielaborata dell'audio, appunti che fondono parlato e slide, mappa concettuale. Le lezioni in attesa mostrano solo gli argomenti dalle slide.</p>
    ${PGE.corso.moduli.map(m => `
      <h2>${m.nome} <span style="font-family:var(--dati);font-size:.7rem;color:var(--grafite);letter-spacing:.1em">${m.range}</span></h2>
      ${PGE.lezioni.filter(l => l.modulo === m.id).map(l => `
        <a class="lez-riga" href="#/lezioni/${l.id}" data-stato="${l.stato}">
          <span class="lez-id">${l.id}</span>
          <span><span class="lez-tit">${l.titolo}</span>${l.sottotitolo ? `<br><span class="lez-sot">${l.sottotitolo}</span>` : ''}</span>
          <span class="tag ${l.stato === 'pronta' ? 'acc' : ''}">${l.stato === 'pronta' ? 'elaborata' : 'in attesa'}</span>
        </a>`).join('')}`).join('')}`;
}

function vistaLezione(id) {
  const l = PGE.lezioni.find(x => x.id === id);
  if (!l) return vistaAssente(id);

  main.innerHTML = `
    <p class="occhiello"><a href="#/lezioni" style="text-decoration:none">Lezioni</a> · ${l.id}</p>
    <h1>${l.titolo}</h1>
    ${l.sottotitolo ? `<p class="sommario">${l.sottotitolo}</p>` : ''}
    <div class="rel" style="margin-bottom:1rem">${l.argomenti.map(a => `<span>${a}</span>`).join('')}</div>
    ${l.letture.length ? `<p style="font-size:.88rem;color:var(--grafite)"><strong>Approfondimenti:</strong> ${l.letture.join(' · ')}</p>` : ''}
    ${l.stato === 'attesa'
      ? `<div class="scheda" style="margin-top:2rem"><h3 style="margin-top:0">Lezione non ancora elaborata</h3><p style="margin-bottom:0">Gli argomenti qui sopra vengono dalle slide. Appena carichi la trascrizione dell'audio, questa pagina si popola con trascrizione rielaborata, appunti e mappa concettuale.</p></div>`
      : `<div class="schede-nav" id="schede">
           <button data-s="appunti" class="attivo">Appunti</button>
           <button data-s="trascrizione">Trascrizione elaborata</button>
           <button data-s="mappa">Mappa concettuale</button>
         </div>
         <div id="pannello"><p style="color:var(--grafite)">Carico…</p></div>`}`;

  if (l.stato !== 'pronta') return;

  const mostra = s => {
    $$('#schede button').forEach(b => b.classList.toggle('attivo', b.dataset.s === s));
    const p = $('#pannello');
    if (s === 'mappa') {
      p.innerHTML = '<div class="mappa" id="mappaLez"><p style="color:var(--grafite)">Carico la mappa…</p></div>';
      leggiContenuto(`contenuti/mappe/${id}.mmd`, `mappe/${id}`)
        .then(t => disegnaMermaid('#mappaLez', t, 'lez-' + id))
        .catch(() => $('#mappaLez').innerHTML = messaggioFile());
    } else {
      p.innerHTML = '<p style="color:var(--grafite)">Carico…</p>';
      leggiContenuto(`contenuti/${id}_${s}.md`, `${id}_${s}`)
        .then(t => { p.innerHTML = `<div class="prosa">${md(t)}</div>`; avvolgiTabelle(p); })
        .catch(e => { console.error(e); p.innerHTML = messaggioFile(); });
    }
  };
  $$('#schede button').forEach(b => b.addEventListener('click', () => mostra(b.dataset.s)));
  mostra('appunti');
}

/* legge un file di contenuto: prima la copia inclusa nella pagina (build
   autonoma, funziona anche da file://), poi la rete. */
function leggiContenuto(percorso, chiave) {
  const inc = window.PGE && PGE.contenuti && PGE.contenuti[chiave];
  if (inc) return Promise.resolve(inc);
  return fetch(percorso).then(r => { if (!r.ok) throw new Error(percorso); return r.text(); });
}

function messaggioFile() {
  return `<div class="scheda"><h3 style="margin-top:0">Contenuto non caricato</h3>
    <p style="margin-bottom:0">Il browser non è riuscito a leggere il file. Se stai aprendo il sito con un doppio clic sul file, serve un piccolo server locale: apri la cartella nel terminale ed esegui <code>python3 -m http.server</code>, poi vai su <code>localhost:8000</code>. Una volta pubblicato su GitHub Pages il problema non si presenta.</p></div>`;
}

function vistaProgramma() {
  main.innerHTML = `
    <p class="occhiello">Materiali</p>
    <h1>Il programma del corso</h1>
    <p class="sommario">L'architettura non è casuale: è la definizione della L01 svolta in programma. Prima il metodo che rende la psicologia una scienza, poi il substrato biologico, poi i processi in rapporto con l'ambiente.</p>
    ${PGE.corso.moduli.map(m => {
      const ls = PGE.lezioni.filter(l => l.modulo === m.id);
      return `<h2>${m.nome}</h2>
      <p style="font-family:var(--dati);font-size:.7rem;color:var(--grafite);letter-spacing:.1em;text-transform:uppercase">${m.range} · ${ls.length} lezioni</p>
      <table><tbody>${ls.map(l => `<tr><td style="width:3.5rem;font-family:var(--dati);font-size:.78rem;color:var(--accento)"><a href="#/lezioni/${l.id}" style="text-decoration:none">${l.id}</a></td><td><strong>${l.titolo}</strong>${l.sottotitolo ? ` — ${l.sottotitolo}` : ''}<br><span style="font-size:.84rem;color:var(--grafite)">${l.argomenti.join(' · ')}</span></td></tr>`).join('')}</tbody></table>`;
    }).join('')}

    <h2>I nove domini dei processi psicologici</h2>
    <p>Tutto ciò che precede la L14 non è un «aspetto studiato» ma il <strong>come</strong> e il <strong>su cosa</strong>: prima il metodo con cui si studia, poi il substrato biologico su cui i processi girano.</p>
    <div class="griglia tre">
      ${['Coscienza e attenzione','Sensazione','Percezione','Apprendimento','Memoria','Pensiero','Linguaggio','Intelligenza','Motivazione ed emozioni']
        .map(d => `<div class="dato" style="border-top-width:1px"><span style="font-weight:500">${d}</span></div>`).join('')}
    </div>`;
}

/* ---------------- ESAME ---------------- */

let timerId = null;
function fermaTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

function pescaDomande(n) {
  const d = [...PGE.domande];
  for (let i = d.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [d[i], d[j]] = [d[j], d[i]]; }
  const alte = d.filter(x => x.peso === 'alto'), altre = d.filter(x => x.peso !== 'alto');
  return [...alte, ...altre].slice(0, n);
}

function vistaSimulazione() {
  const durata = 20 * 60;
  const dom = pescaDomande(3);

  main.innerHTML = `
    <p class="occhiello">Esame · Simulazione</p>
    <h1>Simulazione cronometrata</h1>
    <p class="sommario">Tre domande, venti minuti, niente appunti. Al termine esporti le risposte e me le passi in chat: le correggo in trentesimi e aggiungo il risultato all'archivio.</p>
    <div class="azioni">
      <button class="bottone" id="avvia">Avvia la prova</button>
      <span class="timer" id="timer">20:00</span>
      <span style="font-size:.85rem;color:var(--grafite)">Ogni domanda vale 10 punti.</span>
    </div>
    <div id="prova" hidden>
      ${dom.map((q, i) => schedaDomanda(q, i, false)).join('')}
      <div class="azioni">
        <button class="bottone" id="esporta">Copia le risposte per la correzione</button>
        <button class="bottone vuoto" id="scarica">Scarica come file</button>
        <span id="esito" style="font-size:.85rem;color:var(--accento)"></span>
      </div>
    </div>`;

  $('#avvia').addEventListener('click', e => {
    e.target.disabled = true;
    e.target.textContent = 'Prova in corso';
    $('#prova').hidden = false;
    $('textarea')?.focus();
    let r = durata;
    const t = $('#timer');
    timerId = setInterval(() => {
      r--;
      t.textContent = `${String(Math.floor(r/60)).padStart(2,'0')}:${String(r%60).padStart(2,'0')}`;
      t.classList.toggle('allarme', r <= 180);
      if (r <= 0) { fermaTimer(); t.textContent = 'Tempo scaduto'; $$('textarea').forEach(x => x.readOnly = true); }
    }, 1000);
  });

  collegaConteggio();
  const testo = () => componiEsportazione('Simulazione cronometrata', dom);
  $('#esporta').addEventListener('click', () => copia(testo()));
  $('#scarica').addEventListener('click', () => scarica(testo(), `prova_${new Date().toISOString().slice(0,10)}.txt`));
}

function vistaAllenamento() {
  const argomenti = [...new Set(PGE.domande.map(d => d.arg))];
  main.innerHTML = `
    <p class="occhiello">Esame · Allenamento</p>
    <h1>Allenamento libero</h1>
    <p class="sommario">Nessun timer. Scegli l'argomento, rispondi, e solo dopo apri la traccia degli elementi attesi per fare l'autovalutazione. Se vuoi il voto, esporta e passamela.</p>
    <div class="azioni">
      <label style="font-size:.9rem">Argomento
        <select id="filtro" style="font:inherit;font-size:.9rem;padding:.45rem .6rem;border:1px solid var(--linea);border-radius:3px;background:var(--carta);color:var(--inchiostro);margin-left:.5rem">
          <option value="">tutti</option>
          ${argomenti.map(a => `<option>${a}</option>`).join('')}
        </select>
      </label>
    </div>
    <div id="elenco"></div>`;

  const rendi = () => {
    const f = $('#filtro').value;
    const dom = PGE.domande.filter(d => !f || d.arg === f);
    $('#elenco').innerHTML = dom.map((q, i) => schedaDomanda(q, i, true)).join('') + `
      <div class="azioni">
        <button class="bottone" id="esporta">Copia le risposte per la correzione</button>
        <span id="esito" style="font-size:.85rem;color:var(--accento)"></span>
      </div>`;
    collegaConteggio();
    $('#esporta').addEventListener('click', () => copia(componiEsportazione('Allenamento libero', dom)));
  };
  $('#filtro').addEventListener('change', rendi);
  rendi();
}

function schedaDomanda(q, i, conTraccia) {
  return `
  <div class="domanda" data-id="${q.id}">
    <div class="domanda-eti">Domanda ${i + 1} · ${q.arg} · ${q.lezione}</div>
    <div class="domanda-testo">${esc(q.testo)}</div>
    <textarea placeholder="Scrivi qui la risposta…"></textarea>
    <div class="conta">0 parole</div>
    ${conTraccia ? `<details class="attesi"><summary>Mostra gli elementi attesi</summary><ul>${q.attesi.map(a => `<li>${esc(a)}</li>`).join('')}</ul></details>` : ''}
  </div>`;
}

function collegaConteggio() {
  $$('.domanda').forEach(d => {
    const ta = $('textarea', d), c = $('.conta', d);
    ta.addEventListener('input', () => {
      const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      c.textContent = `${n} parole`;
    });
  });
}

function componiEsportazione(modalita, dom) {
  const righe = [
    `PROVA — ${modalita}`,
    `Data: ${new Date().toLocaleDateString('it-IT')}`,
    `Corso: Psicologia Generale (SFO_PGE)`,
    ``,
    `Correggi queste risposte in trentesimi, con lo stesso criterio severo delle volte precedenti, e aggiorna l'archivio del sito.`,
    ``, `———`, ``
  ];
  $$('.domanda').forEach((d, i) => {
    const q = dom.find(x => x.id === d.dataset.id) || dom[i];
    righe.push(`DOMANDA ${i + 1} [${q.id} · ${q.arg} · ${q.lezione}]`, q.testo, ``, `RISPOSTA:`, $('textarea', d).value.trim() || '(non risposto)', ``, `———`, ``);
  });
  return righe.join('\n');
}

function copia(t) {
  navigator.clipboard.writeText(t)
    .then(() => $('#esito').textContent = 'Copiato. Incollalo in chat per la correzione.')
    .catch(() => { scarica(t, 'prova.txt'); $('#esito').textContent = 'Copia non riuscita: ho scaricato il file.'; });
}

function scarica(t, nome) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([t], { type: 'text/plain' }));
  a.download = nome; a.click(); URL.revokeObjectURL(a.href);
}

/* ---------------- ARCHIVIO E STATISTICHE ---------------- */

function vistaArchivio() {
  const r = PGE.risultati;
  if (!r.length) {
    main.innerHTML = `<p class="occhiello">Esame · Archivio</p><h1>Archivio e statistiche</h1>
      <div class="scheda"><h3 style="margin-top:0">Nessuna prova registrata</h3>
      <p style="margin-bottom:0">Fai una <a href="#/esame/simulazione">simulazione</a>, esporta le risposte e passamele in chat: dopo la correzione il risultato compare qui, con l'andamento nel tempo e la media per argomento.</p></div>`;
    return;
  }

  const media = (r.reduce((s, x) => s + x.totale, 0) / r.length).toFixed(1);
  const ultimo = r[r.length - 1];

  const perArg = {};
  r.forEach(p => p.domande.forEach(d => {
    perArg[d.arg] = perArg[d.arg] || { s: 0, n: 0 };
    perArg[d.arg].s += d.voto / d.max * 30;
    perArg[d.arg].n++;
  }));
  const arg = Object.entries(perArg).map(([k, v]) => ({ arg: k, m: v.s / v.n, n: v.n })).sort((a, b) => a.m - b.m);

  main.innerHTML = `
    <p class="occhiello">Esame · Archivio</p>
    <h1>Archivio e statistiche</h1>
    <p class="sommario">Ogni prova corretta viene registrata qui: voto, motivazione domanda per domanda, e andamento nel tempo.</p>

    <div class="griglia tre" style="margin-bottom:2rem">
      <div class="dato"><span class="dato-cifra">${media}<span style="font-size:1rem;color:var(--grafite)">/30</span></span><span class="dato-eti">media delle prove</span></div>
      <div class="dato"><span class="dato-cifra">${ultimo.totale}<span style="font-size:1rem;color:var(--grafite)">/30</span></span><span class="dato-eti">ultima prova</span></div>
      <div class="dato"><span class="dato-cifra">${r.length}</span><span class="dato-eti">prove sostenute</span></div>
    </div>

    ${r.length > 1 ? `<h2>Andamento</h2><div class="scheda">${graficoAndamento(r)}</div>` : ''}

    <h2>Media per argomento</h2>
    <p class="nota" style="margin-bottom:1rem">Ordinati dal più debole. È qui che conviene spendere il ripasso.</p>
    <table>
      <thead><tr><th style="width:30%">Argomento</th><th style="width:45%">Livello</th><th>Media</th><th>Prove</th></tr></thead>
      <tbody>${arg.map(a => `<tr>
        <td><strong>${a.arg}</strong></td>
        <td><div class="barra-voto"><i style="width:${a.m / 30 * 100}%"></i></div></td>
        <td style="font-family:var(--dati)">${a.m.toFixed(1)}/30</td>
        <td style="color:var(--grafite)">${a.n}</td></tr>`).join('')}
      </tbody>
    </table>

    <h2>Le prove</h2>
    ${r.slice().reverse().map(p => `
      <div class="scheda" style="margin-bottom:1.2rem">
        <div style="display:flex;align-items:baseline;gap:1rem;flex-wrap:wrap;margin-bottom:.8rem">
          <h3 style="margin:0;font-family:var(--display);font-size:1.2rem">${p.titolo}</h3>
          <span style="font-family:var(--dati);font-size:.7rem;color:var(--grafite)">${new Date(p.data).toLocaleDateString('it-IT')} · ${p.modalita}</span>
          <span style="margin-left:auto;font-family:var(--display);font-size:1.6rem;font-weight:600;color:var(--accento)">${p.totale}<span style="font-size:.9rem;color:var(--grafite)">/${p.max}</span></span>
        </div>
        <table style="margin:0 0 1rem">
          <tbody>${p.domande.map(d => `<tr>
            <td style="width:22%"><strong>${d.arg}</strong><br><span style="font-family:var(--dati);font-size:.7rem;color:var(--grafite)">${d.id}</span></td>
            <td style="width:9%;font-family:var(--dati);color:${d.voto / d.max >= .8 ? 'var(--accento)' : d.voto / d.max >= .6 ? 'inherit' : 'var(--segnale)'}">${d.voto}/${d.max}</td>
            <td style="font-size:.88rem;color:var(--grafite)">${d.nota}</td></tr>`).join('')}
          </tbody>
        </table>
        <p style="margin:0;font-size:.93rem"><strong>Giudizio.</strong> ${p.commento}</p>
        ${p.nota ? `<div class="nota" style="margin-top:.8rem;font-size:.88rem">${p.nota}</div>` : ''}
      </div>`).join('')}`;
}

function graficoAndamento(r) {
  const w = 640, h = 200, ml = 34, mb = 26, mt = 10, mr = 10;
  const px = i => ml + (r.length === 1 ? 0 : i * (w - ml - mr) / (r.length - 1));
  const py = v => mt + (30 - v) / 30 * (h - mt - mb);
  const d = r.map((p, i) => `${i ? 'L' : 'M'}${px(i)},${py(p.totale)}`).join(' ');
  return `<svg class="grafico" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Andamento dei voti">
    ${[0, 18, 24, 30].map(v => `<line class="assi" x1="${ml}" y1="${py(v)}" x2="${w - mr}" y2="${py(v)}"/><text class="etichetta" x="4" y="${py(v) + 3}">${v}</text>`).join('')}
    <line class="soglia" x1="${ml}" y1="${py(18)}" x2="${w - mr}" y2="${py(18)}"/>
    <path class="linea" d="${d}"/>
    ${r.map((p, i) => `<circle class="punto" cx="${px(i)}" cy="${py(p.totale)}" r="4"><title>${p.titolo}: ${p.totale}/30</title></circle>
      <text class="etichetta" x="${px(i)}" y="${h - 8}" text-anchor="middle">${new Date(p.data).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' })}</text>`).join('')}
  </svg>`;
}


/* ---------------- MARKDOWN INTERNO ----------------
   Nessuna libreria esterna: il Markdown lo produciamo noi,
   quindi ne convertiamo il sottoinsieme che usiamo davvero. */
function inline(s) {
  return s
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(>])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/(^|[\s(>])_([^_\n]+)_/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function md(src) {
  const righe = String(src).replace(/\r\n?/g, '\n').split('\n');
  const out = [];
  let i = 0;

  const celle = r => r.replace(/^\||\|$/g, '').split('|').map(c => inline(c.trim()));

  while (i < righe.length) {
    const r = righe[i];

    if (!r.trim()) { i++; continue; }

    /* blocco di codice */
    if (/^```/.test(r)) {
      const buf = []; i++;
      while (i < righe.length && !/^```/.test(righe[i])) buf.push(righe[i++]);
      i++;
      out.push('<pre><code>' + buf.join('\n').replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])) + '</code></pre>');
      continue;
    }

    /* linea orizzontale */
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(r)) { out.push('<hr>'); i++; continue; }

    /* titoli */
    const h = r.match(/^(#{1,6})\s+(.*)$/);
    if (h) { const n = h[1].length; out.push(`<h${n}>${inline(h[2])}</h${n}>`); i++; continue; }

    /* tabella: riga con pipe seguita dalla riga separatrice */
    if (/\|/.test(r) && i + 1 < righe.length && /^\s*\|?[\s:-]*-[\s:|-]*$/.test(righe[i + 1])) {
      const intest = celle(r);
      i += 2;
      const corpo = [];
      while (i < righe.length && /\|/.test(righe[i]) && righe[i].trim()) corpo.push(celle(righe[i++]));
      out.push('<table><thead><tr>' + intest.map(c => `<th>${c}</th>`).join('') +
               '</tr></thead><tbody>' + corpo.map(rr => '<tr>' + rr.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') +
               '</tbody></table>');
      continue;
    }

    /* citazione */
    if (/^>\s?/.test(r)) {
      const buf = [];
      while (i < righe.length && /^>\s?/.test(righe[i])) buf.push(righe[i++].replace(/^>\s?/, ''));
      out.push('<blockquote>' + md(buf.join('\n')) + '</blockquote>');
      continue;
    }

    /* elenchi */
    const puntato = /^\s*[-*+]\s+/, numerato = /^\s*\d+[.)]\s+/;
    if (puntato.test(r) || numerato.test(r)) {
      const num = numerato.test(r);
      const tag = num ? 'ol' : 'ul';
      const voci = [];
      while (i < righe.length && (num ? numerato : puntato).test(righe[i])) {
        let v = righe[i++].replace(num ? numerato : puntato, '');
        /* righe di continuazione indentate */
        while (i < righe.length && /^\s{2,}\S/.test(righe[i]) && !puntato.test(righe[i]) && !numerato.test(righe[i]))
          v += ' ' + righe[i++].trim();
        voci.push(`<li>${inline(v)}</li>`);
      }
      out.push(`<${tag}>${voci.join('')}</${tag}>`);
      continue;
    }

    /* paragrafo */
    const buf = [];
    while (i < righe.length && righe[i].trim() && !/^(#{1,6}\s|>|\s*[-*+]\s|\s*\d+[.)]\s|```)/.test(righe[i]) &&
           !/^(-{3,}|\*{3,}|_{3,})\s*$/.test(righe[i])) buf.push(righe[i++]);
    if (buf.length) out.push('<p>' + inline(buf.join(' ')) + '</p>');
  }
  return out.join('\n');
}

/* ---------------- MAPPE: ripiego senza libreria ----------------
   Se mermaid non è disponibile, il grafo viene letto e mostrato
   come elenco di relazioni: meno bello, ma leggibile e sempre presente. */
function mappaDiRipiego(codice) {
  const nomi = {};
  codice.replace(/(\w[\w-]*)\s*[\[\{\(]+\s*"?(.*?)"?\s*[\]\}\)]+/g, (_, id, t) => { nomi[id] = t.replace(/<br\s*\/?>/g, ' '); return _; });
  const nome = id => nomi[id] || id;

  const archi = [];
  codice.split('\n').forEach(l => {
    const m = l.match(/^\s*(\w[\w-]*)(?:[\[\{\(].*?[\]\}\)])?\s*(-\.->|==>|-->|---)\s*(?:\|\s*"?(.*?)"?\s*\|)?\s*(\w[\w-]*)/);
    if (m) archi.push({ a: m[1], tipo: m[2], eti: (m[3] || '').replace(/<br\s*\/?>/g, ' '), b: m[4] });
  });
  if (!archi.length) return '<p style="color:var(--grafite)">Mappa non disponibile.</p>';

  return `<p style="font-family:var(--dati);font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:var(--grafite);margin:0 0 .8rem">Relazioni della mappa</p>` +
    archi.map(x => `<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:.6rem;align-items:center;padding:.45rem 0;border-bottom:1px solid var(--linea-fine)">
      <span style="text-align:right;font-size:.86rem">${esc(nome(x.a))}</span>
      <span style="font-family:var(--dati);font-size:.68rem;color:var(--accento);white-space:nowrap">${x.tipo === '-.->' ? '┈▶' : x.tipo === '==>' ? '━▶' : '─▶'}${x.eti ? ' ' + esc(x.eti) : ''}</span>
      <span style="font-size:.86rem">${esc(nome(x.b))}</span>
    </div>`).join('');
}

/* ---------------- MERMAID ---------------- */
function disegnaMermaid(sel, codice, id) {
  const el = $(sel); if (!el) return;
  if (typeof mermaid === 'undefined') { el.innerHTML = mappaDiRipiego(codice); return; }
  try {
    configuraMermaid();
    mermaid.render('m-' + id + '-' + Date.now(), codice)
      .then(({ svg }) => el.innerHTML = svg)
      .catch(() => el.innerHTML = mappaDiRipiego(codice));
  } catch (e) { el.innerHTML = mappaDiRipiego(codice); }
}

/* ---------------- RICERCA ---------------- */
const indice = [];
function costruisciIndice() {
  PGE.scuole.forEach(s => indice.push({ t: s.nome, c: `${s.etichetta} · ${s.luogo}`, ct: 'Scuola', h: `#/excursus` }));
  PGE.lezioni.forEach(l => indice.push({ t: `${l.id} — ${l.titolo}`, c: l.argomenti.join(', '), ct: 'Lezione', h: `#/lezioni/${l.id}` }));
  PGE.sintagmi.forEach(s => indice.push({ t: s.t, c: s.d, ct: 'Sintagma', h: '#/sintagmi' }));
  PGE.errori.forEach(e => indice.push({ t: e.no.replace(/<[^>]+>/g, ''), c: e.si.replace(/<[^>]+>/g, ''), ct: 'Errore', h: '#/errori' }));
  PGE.domande.forEach(d => indice.push({ t: d.testo.slice(0, 80) + '…', c: `${d.arg} · ${d.lezione}`, ct: 'Domanda', h: '#/esame/allenamento' }));
  PGE.definizione.passaggi.forEach(p => indice.push({ t: p.t, c: p.c.replace(/<[^>]+>/g, '').slice(0, 90), ct: 'Definizione', h: '#/definizione' }));
  PGE.preScientifica.voci.forEach(v => indice.push({ t: v.nome, c: v.contributo.replace(/<[^>]+>/g, '').slice(0, 90), ct: 'Pre-scientifica', h: '#/excursus' }));
  (PGE.manuale && PGE.manuale.capitoli || []).forEach(c => indice.push({ t: c.n + '. ' + c.titolo, c: c.sommario, ct: 'Manuale', h: '#/manuale/' + c.id }));
  (PGE.argomenti && PGE.argomenti.voci || []).forEach(v => indice.push({ t: v.titolo, c: 'Esposizione orale · ' + v.minuti + ' min · ' + v.perni.slice(0, 4).join(', '), ct: 'Argomento', h: '#/argomenti/' + v.id }));
  ((PGE.schede && PGE.schede.fascicoli) || []).forEach(f => f.schede.forEach(x => indice.push({ t: x.nome, c: x.identificazione.unaRiga.replace(/<[^>]+>/g, ''), ct: 'Scheda', h: '#/schede/' + f.id })));
  (PGE.nomi || []).forEach(n => indice.push({ t: n.n, c: n.scuola + ' — ' + n.indizio, ct: 'Nome', h: '#/nomi' }));
  (PGE.flashcard || []).forEach(c => indice.push({ t: c.f.replace(/<[^>]+>/g, ''), c: c.b.replace(/<[^>]+>/g, '').slice(0, 90), ct: 'Flashcard', h: '#/flashcard' }));
  (PGE.quiz || []).forEach(q => indice.push({ t: q.q.slice(0, 80) + (q.q.length > 80 ? '…' : ''), c: q.o[0].slice(0, 90), ct: 'Quiz', h: '#/quiz' }));
}

const velo = $('#cercaVelo'), input = $('#cercaInput'), esiti = $('#cercaEsiti');
function apriCerca() { velo.hidden = false; input.value = ''; esiti.innerHTML = '<p class="cerca-vuoto">Scrivi per cercare fra scuole, lezioni, sintagmi, errori e domande d\'esame.</p>'; input.focus(); }
function chiudiCerca() { velo.hidden = true; }
$('#cercaBtn').addEventListener('click', apriCerca);
velo.addEventListener('click', e => { if (e.target === velo) chiudiCerca(); });
document.addEventListener('keydown', e => {
  if (e.key === '/' && !/input|textarea|select/i.test(e.target.tagName)) { e.preventDefault(); apriCerca(); }
  if (e.key === 'Escape') chiudiCerca();
});
input.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  if (q.length < 2) { esiti.innerHTML = '<p class="cerca-vuoto">Scrivi almeno due lettere.</p>'; return; }
  const r = indice.filter(x => (x.t + ' ' + x.c).toLowerCase().includes(q)).slice(0, 12);
  esiti.innerHTML = r.length
    ? r.map(x => `<a href="${x.h}"><span class="ct">${x.ct}</span>${esc(x.t)}<br><span style="color:var(--grafite);font-size:.8rem">${esc(x.c.slice(0, 90))}</span></a>`).join('')
    : '<p class="cerca-vuoto">Nessun risultato. Prova con un nome, una data o un termine tecnico.</p>';
  $$('#cercaEsiti a').forEach(a => a.addEventListener('click', chiudiCerca));
});

/* le tabelle larghe diventano scorrevoli su schermo stretto */
function avvolgiTabelle(ctx = main) {
  $$('table', ctx).forEach(t => {
    if (t.parentElement.classList.contains('tab-scroll')) return;
    const w = document.createElement('div');
    w.className = 'tab-scroll';
    t.replaceWith(w); w.appendChild(t);
  });
}

function vistaAssente(p) {
  main.innerHTML = `<p class="occhiello">Pagina non trovata</p><h1>Qui non c'è niente</h1>
    <p class="sommario">Il percorso <code>${esc(p)}</code> non corrisponde a nessuna sezione.</p>
    <div class="azioni"><a class="bottone" href="#/">Torna al quadro generale</a></div>`;
}

/* ---------------- AVVIO ---------------- */
costruisciIndice();
$('#statoLez').textContent = PGE.lezioni.filter(l => l.stato === 'pronta').slice(-1)[0]?.id || '—';
instrada();
