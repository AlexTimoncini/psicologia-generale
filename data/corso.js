/* Dati del corso — Psicologia Generale (SFO_PGE)
   Aggiornare questo file quando si aggiungono lezioni. */
var PGE = window.PGE = window.PGE || {};

PGE.corso = {
  titolo: "Psicologia Generale",
  sigla: "SFO_PGE",
  lezioniTotali: 24,
  moduli: [
    { id: "M1", nome: "Fondamenti", range: "L01–L07" },
    { id: "M2", nome: "Basi biologiche", range: "L08–L13" },
    { id: "M3", nome: "Processi psicologici", range: "L14–L22" },
    { id: "M4", nome: "Motivazione ed emozioni", range: "L23–L24" }
  ]
};

/* ---------- LEZIONI ---------- */
/* stato: "pronta" = trascrizione elaborata + appunti + mappa disponibili
          "attesa" = solo titolo dalle slide                            */
PGE.lezioni = [
  { id:"L01", modulo:"M1", titolo:"Introduzione alla psicologia generale (I)", sottotitolo:"Una prospettiva storica", stato:"pronta",
    argomenti:["Definizione di psicologia","La nascita della psicologia scientifica","Lo strutturalismo","Il funzionalismo","Le scuole russe","La psicologia dinamica"],
    letture:["Darley & Latané, 1968"] },
  { id:"L02", modulo:"M1", titolo:"Introduzione alla psicologia generale (II)", sottotitolo:"Una prospettiva storica", stato:"pronta",
    argomenti:["La Gestalt","Il comportamentismo"], letture:[] },
  { id:"L03", modulo:"M1", titolo:"Introduzione alla psicologia generale (III)", sottotitolo:"Dal cognitivismo alla psicologia contemporanea", stato:"pronta",
    argomenti:["Il cognitivismo","La mente embodied e l'approccio bio-psico-sociale","Le neuroscienze","La genetica del comportamento","La psicologia socioculturale"], letture:[] },
  { id:"L04", modulo:"M1", titolo:"Metodologia della ricerca (I)", sottotitolo:"Il metodo scientifico", stato:"pronta",
    argomenti:["Il metodo scientifico","La premessa epistemologica","Gli assunti del metodo scientifico","Il processo di ricerca"], letture:["Darley & Latané, 1968"] },
  { id:"L05", modulo:"M1", titolo:"Metodologia della ricerca (II)", sottotitolo:"Variabili, revisione della letteratura, metodi descrittivi", stato:"pronta",
    argomenti:["Le variabili e la loro misurazione","La revisione della letteratura","I metodi descrittivi"], letture:[] },
  { id:"L06", modulo:"M1", titolo:"Metodologia della ricerca (III)", sottotitolo:"Metodo correlazionale e sperimentale", stato:"pronta",
    argomenti:["Il metodo correlazionale","Il metodo sperimentale"], letture:[] },
  { id:"L07", modulo:"M1", titolo:"Metodologia della ricerca (IV)", sottotitolo:"La pubblicazione scientifica e la peer review", stato:"pronta",
    argomenti:["Tipologie di pubblicazione","La revisione tra pari","La divulgazione"], letture:["Andrade-Lara et al., 2023","La letteratura scientifica e l'uso di PubMed"] },
  { id:"L08", modulo:"M2", titolo:"I neuroni", sottotitolo:"Gli elementi-base del comportamento", stato:"pronta",
    argomenti:["Le cellule del sistema nervoso","La struttura dei neuroni","L'attività elettrica","La trasmissione sinaptica","I neurotrasmettitori"], letture:[] },
  { id:"L09", modulo:"M2", titolo:"Il sistema nervoso", sottotitolo:"Struttura e organizzazione generale", stato:"pronta",
    argomenti:["Struttura del SN","Sistema nervoso periferico","Sistema nervoso centrale","Sistema endocrino","Sistema immunitario"], letture:[] },
  { id:"L10", modulo:"M2", titolo:"Il sistema nervoso", sottotitolo:"Il cervello e le sue funzioni", stato:"pronta",
    argomenti:["Gli emisferi cerebrali","La corteccia cerebrale","La lateralizzazione emisferica"], letture:[] },
  { id:"L11", modulo:"M2", titolo:"Lo studio del cervello", sottotitolo:"Metodi di indagine dell'anatomia e della fisiologia cerebrale", stato:"pronta",
    argomenti:["Lo studio delle lesioni cerebrali","Lo studio dell'attività elettrica","Le neuroimmagini","La stimolazione cerebrale","La stimolazione magnetica transcranica"],
    letture:["Il caso Phineas Gage","Il paziente H.M."] },
  { id:"L12", modulo:"M2", titolo:"Evoluzione del sistema nervoso (I)", sottotitolo:"Natura o cultura? Geni ed ereditarietà", stato:"pronta",
    argomenti:["L'evoluzione del sistema nervoso centrale","La genetica","La genetica comportamentale","La genetica sperimentale"],
    letture:["Tryon, 1940 — selezione artificiale e apprendimento"] },
  { id:"L13", modulo:"M2", titolo:"Evoluzione del sistema nervoso (II)", sottotitolo:"La plasticità cerebrale", stato:"pronta",
    argomenti:["L'interazione geni-ambiente","L'epigenetica","La plasticità cerebrale nell'arco di vita","Plasticità cerebrale e stimolazione ambientale"],
    letture:["Petrosini et al., 2009 — approfondimento sull'arricchimento ambientale"] },
  { id:"L14", modulo:"M3", titolo:"Coscienza e attenzione (I)", sottotitolo:"", stato:"attesa",
    argomenti:["La coscienza","L'attenzione"], letture:["Simons & Chabris, 1999","Stroop, 1935"] },
  { id:"L15", modulo:"M3", titolo:"Coscienza e attenzione (II)", sottotitolo:"Stati alterati: sonno e sogni", stato:"attesa",
    argomenti:["Il sonno","I disturbi del sonno","I sogni"], letture:["Zha et al., 2024","Carskadon & Dement, 2011"] },
  { id:"L16", modulo:"M3", titolo:"Sensazione e percezione (I)", sottotitolo:"La sensazione", stato:"attesa",
    argomenti:["I processi sensoriali","I sistemi sensoriali: la vista"], letture:[] },
  { id:"L17", modulo:"M3", titolo:"Sensazione e percezione (II)", sottotitolo:"La percezione", stato:"attesa",
    argomenti:["Realtà fisica e realtà percepita","L'organizzazione percettiva"], letture:["Wagemans et al., 2012"] },
  { id:"L18", modulo:"M3", titolo:"Apprendimento", sottotitolo:"Il ruolo dell'esperienza", stato:"attesa",
    argomenti:["Definire l'apprendimento","Gli apprendimenti associativi","Gli apprendimenti cognitivi"], letture:["Rizzolatti & Craighero, 2004"] },
  { id:"L19", modulo:"M3", titolo:"Memoria", sottotitolo:"", stato:"attesa",
    argomenti:["Cos'è la memoria","I processi di memoria","Quando la memoria fallisce"], letture:["Rubin & Talarico, 2009"] },
  { id:"L20", modulo:"M3", titolo:"Pensiero", sottotitolo:"", stato:"attesa",
    argomenti:["La categorizzazione","Le forme del pensiero","Il ragionamento","Il problem solving"], letture:["Kharkhurin, 2014"] },
  { id:"L21", modulo:"M3", titolo:"Comunicazione e linguaggio", sottotitolo:"", stato:"attesa",
    argomenti:["Comunicazione e linguaggio","Il linguaggio umano"], letture:[] },
  { id:"L22", modulo:"M3", titolo:"Intelligenza", sottotitolo:"", stato:"attesa",
    argomenti:["Definizione e teorie","La valutazione dell'intelligenza"], letture:[] },
  { id:"L23", modulo:"M4", titolo:"Le condotte motivate", sottotitolo:"", stato:"attesa",
    argomenti:["Definizione, prospettive e teorie","Applicazione delle prospettive"], letture:["Galeb, 2024"] },
  { id:"L24", modulo:"M4", titolo:"Le emozioni", sottotitolo:"", stato:"attesa",
    argomenti:["La natura delle emozioni","Le componenti delle emozioni"], letture:["Coppini et al., 2024"] }
];

/* ---------- LA DEFINIZIONE: I SETTE PASSAGGI ---------- */
PGE.definizione = {
  intro: "Sembra la domanda più facile dell'esame ed è una trappola: chi risponde con la sola formula da manuale si ferma alla sufficienza. La risposta completa ha sette passaggi e dura circa tre minuti. La struttura è quella che la docente segue nella lezione.",
  passaggi: [
    { n:1, t:"Etimologia", c:"Dal greco <em>psyché</em> (anima) e <em>lógos</em> (discorso): letteralmente «discorso sull'anima», ovvero scienza della mente. Da liquidare in una frase." },
    { n:2, t:"La definizione generale", c:"In un'accezione molto generale, la psicologia è lo <strong>studio scientifico della mente e del comportamento</strong>." },
    { n:3, t:"I due termini, contrapposti", c:"<strong>Mente</strong>: l'esperienza interiore personale — percezioni, pensieri, ricordi, sentimenti — che dà luogo a un incessante flusso di coscienza. Interiore, soggettiva, non osservabile direttamente.<br><strong>Comportamento</strong>: le azioni osservabili degli esseri umani <em>e degli animali non umani</em>. Esterno, direttamente osservabile.", nota:"Dire «esseri umani e animali non umani», non «l'uomo». È l'errore che rende incomprensibile metà del programma, da Pavlov in avanti." },
    { n:4, t:"Dichiarare che la definizione è insufficiente", c:"È il passaggio che distingue chi ha capito da chi ha memorizzato, e va fatto senza aspettare che lo chiedano: «Questa definizione si presta a essere molto vaga. Che cosa significa, operativamente, studiare scientificamente un pensiero o uno stato d'animo? Questa difficoltà di definizione dell'oggetto è essa stessa una delle ragioni del ritardo con cui la psicologia è nata come scienza.»" },
    { n:5, t:"Il criterio che rende «scientifico» lo studio", c:"Non è l'oggetto ma il <strong>metodo</strong>: l'adozione del metodo sperimentale, che prevede la <strong>verifica empirica</strong>, in opposizione al metodo razionalista-filosofico, che procede per speculazione logica a partire da <strong>assiomi indimostrabili</strong>. Il passaggio è sancito nel <strong>1879</strong>, quando Wundt fonda a Lipsia il primo laboratorio di Psicologia Fisiologica." },
    { n:6, t:"La doppia emancipazione", c:"<strong>Dalla filosofia</strong>: dallo studio della mente sul piano filosofico → allo studio della <strong>relazione mente-corpo sul piano naturalistico</strong>.<br><strong>Dalla medicina</strong>: dallo studio del cervello sul piano meramente fisiologico → allo studio dell'<strong>unità cervello-mente e delle sue interazioni con l'ambiente</strong>." },
    { n:7, t:"La definizione attuale, completa", c:"Studio scientifico del <strong>comportamento e dei processi mentali dell'essere vivente nel suo rapporto con l'ambiente: mentre lo esperisce, vi agisce e lo rappresenta</strong>.", formula:true }
  ],
  chiusura: "Le due traiettorie di emancipazione non sono parallele ma <strong>convergenti</strong>: la filosofia porta la mente dentro il piano naturalistico, la medicina porta il cervello a farsi carico della mente. Si incontrano esattamente nella definizione moderna, dove l'unità mente-cervello viene infine collocata in relazione all'ambiente. Ed è per questo che la definizione contiene tre verbi — esperisce, agisce, rappresenta — che corrispondono alle tre modalità di quel rapporto.",
  ritardo: {
    titolo: "Se chiedono di approfondire il ritardo",
    cause: [
      "<strong>Difficoltà di definire l'oggetto</strong>: come si studia scientificamente un pensiero?",
      "<strong>Difficoltà di considerare l'uomo un oggetto di studio scientifico</strong>.",
      "<strong>Concezione trascendentale della mente</strong>: considerata quasi divina per oltre due millenni, quindi non aggredibile con approccio naturalistico."
    ],
    ponte: "Aggiungi il ponte concreto: il salto non avviene solo per il clima positivista, ma perché la <strong>psicofisica</strong> dimostra empiricamente che un fenomeno psichico è misurabile (legge di Weber-Fechner). Senza quella dimostrazione, il positivismo resta un'affermazione di principio."
  }
};

/* ---------- EXCURSUS STORICO ---------- */
PGE.preScientifica = {
  titolo: "Prima della scienza",
  sommario: "Non sono una scuola. Vanno ricordati per i passaggi concettuali che segnano — non per ciò che hanno scoperto, che è sbagliato.",
  voci: [
    { nome:"Guaritori antichi", contributo:"<strong>Trapanazione</strong>: pietre grezze sfregate sul cranio dei «posseduti» per far uscire gli spiriti.", limite:"Nessun fondamento; spesso letale." },
    { nome:"Ippocrate", contributo:"Prima teoria della personalità: i <strong>quattro temperamenti</strong>.", limite:"Approccio razionalista-filosofico." },
    { nome:"Cartesio", contributo:"<strong>Dualismo</strong>: <em>res cogitans</em> (anima) vs <em>res extensa</em> (corpo, cervello incluso). Nervi come tubi percorsi da energia; contatto tramite la <strong>ghiandola pineale</strong>.", limite:"I fenomeni psichici restano propri dell'anima, quindi non studiabili." },
    { nome:"Franz Joseph Gall", contributo:"<strong>Frenologia</strong>: la personalità risiede nel cervello e si desume dalle protuberanze craniche. Prima idea di <strong>localizzazione</strong> delle funzioni psichiche.", limite:"Nessun fondamento. Ripresa da Lombroso in criminologia." }
  ],
  lascito: "Da Cartesio, la separazione mente/corpo <em>da superare</em>. Da Gall, l'idea <em>da recuperare</em> di una localizzazione cerebrale delle funzioni psichiche."
};

PGE.contesto = {
  titolo: "Il contesto che rende possibile la svolta",
  blocchi: [
    { nome:"Positivismo (1800) — Comte", testo:"Alle scienze naturali è attribuito il ruolo privilegiato di <strong>unica fonte attendibile di conoscenza</strong>. Conseguenza: ogni disciplina, per produrre conoscenza, deve avere base scientifica." },
    { nome:"Psicofisica (Germania)", testo:"Studio di come le <strong>sensazioni percepite dipendano dalle caratteristiche fisiche dello stimolo</strong>, con metodo sperimentale. Precursore diretto della psicologia scientifica.<br><br><strong>Fechner</strong> (1801-1887): la sensazione è oggettiva, materiale, <strong>misurabile</strong>; traduce in termini matematici il rapporto mondo fisico / mondo psichico → <strong>legge di Weber-Fechner</strong>.<br><br><strong>von Helmholtz</strong> (1821-1894): fisiologia sensoriale. <strong>Teoria dell'inferenza inconscia</strong>: la percezione è un processo costruttivo, corretto dall'esperienza pregressa tramite un processo cognitivo inconscio." }
  ]
};

/* Le fasi in cui si raggruppano le scuole nell'excursus. */
PGE.periodi = [
  { id:"fondazione", nome:"La fondazione e le prime scuole", arco:"1879 — 1896",
    testo:"Il metodo sperimentale entra in psicologia con Wundt; lo strutturalismo lo sistematizza e ne rivela il difetto; il funzionalismo sposta la domanda dalla struttura alla funzione, e con essa fa entrare l'ambiente nella disciplina." },
  { id:"collaterali", nome:"Le realtà collaterali", arco:"fine '800 — anni '50",
    testo:"Fuori dall'asse Germania-America: le due scuole russe, <strong>collaterali in senso geografico</strong>, e la psicoanalisi, <strong>collaterale in senso epistemologico</strong>. Da qui escono il precursore diretto del comportamentismo e uno dei tre del cognitivismo." },
  { id:"reazioni", nome:"Le due reazioni a Wundt", arco:"1912 — 1913",
    testo:"A un anno di distanza, due scuole nascono contro lo stesso bersaglio da direzioni opposte: la Gestalt gli rimprovera di <strong>scomporre</strong> l'interiorità, il comportamentismo di <strong>studiarla</strong>. Alla radice, innatismo (Kant) contro empirismo (Locke)." },
  { id:"soglia", nome:"Verso il cognitivismo", arco:"anni '30 — 1967",
    testo:"Il comportamentismo produce il proprio superamento per via interna: prima una variabile interveniente, poi una rappresentazione, infine un circuito neuronale. Con Hebb arriva l'unità mente-cervello, e la strada al cognitivismo è aperta." },
  { id:"contemporanea", nome:"La psicologia contemporanea", arco:"1967 — oggi",
    testo:"Qui l'excursus smette di essere una successione di scuole. Il cognitivismo non viene superato: si <strong>allarga</strong> — la mente torna dentro un corpo e dentro un ambiente, le tre prospettive dell'approccio biopsicosociale si affiancano, e la rivoluzione tecnologica consegna alle neuroscienze il rapporto mente-cervello che era il nodo irrisolto della L01." }
];

/* Le scuole, ordinate per data. Ogni voce ha la terna oggetto/metodo/validità. */
PGE.scuole = [
  {
    id:"nascita", periodo:"fondazione", anno:1879, etichetta:"1879", nome:"La nascita della psicologia scientifica",
    luogo:"Lipsia, Germania", cardine:true, lezione:"L01",
    autori:["Wilhelm Wundt (1832-1920)"],
    precursori:[{nome:"Comte", cosa:"positivismo"},{nome:"Fechner", cosa:"psicofisica"},{nome:"von Helmholtz", cosa:"fisiologia sensoriale"}],
    precorre:[{nome:"Strutturalismo", cosa:"ne è la fonte diretta"},{nome:"Gestalt e comportamentismo", cosa:"ne sono la reazione"}],
    oggetto:"L'<strong>esperienza diretta e immediata</strong> — il contenuto della coscienza che il soggetto ha della propria attività mentale conscia — <strong>scomposto negli elementi irriducibili</strong>, gli «atomi della mente». Obiettivo: cogliere la variazione dell'esperienza cosciente al variare dello stimolo fisico.",
    metodo:"<strong>Introspezione</strong> più misura dei <strong>tempi di reazione</strong>. Quattro vincoli: il soggetto è lo sperimentatore stesso, addestrato; descrive secondo <strong>criteri elementistici e congruenti con le proprietà fisiche dello stimolo</strong>; riferisce l'esperienza immediata e non la sua interpretazione; il tempo di reazione lungo segnala che sta interpretando.",
    validita:"Fonda la disciplina. Il metodo si rivelerà il punto debole.",
    chiavi:["atomi della mente","esperienza diretta e immediata","tempi di reazione"]
  },
  {
    id:"strutturalismo", periodo:"fondazione", anno:1892, etichetta:"1892", nome:"Strutturalismo", luogo:"USA — Cornell University", lezione:"L01",
    autori:["Edward Titchener (1867-1927)"],
    precursori:[{nome:"Wundt", cosa:"ne è l'allievo; porta la psicologia wundtiana negli USA"}],
    precorre:[{nome:"Funzionalismo", cosa:"nasce per reazione"},{nome:"Gestalt", cosa:"nasce per reazione"}],
    oggetto:"La <strong>struttura</strong> della mente e della coscienza: percezioni, emozioni (sentimenti) e idee, analizzate attraverso i rispettivi elementi più semplici.",
    metodo:"Introspezione <strong>ancor più sistematizzata</strong>: un vocabolario che il soggetto deve usare. Furono individuate <strong>44.000 unità sensoriali</strong>.",
    validita:"<strong>Metodo non valido</strong> → la scuola tramonta alla morte di Titchener. Resta però il merito storico decisivo di aver posto <strong>la questione del metodo</strong> come condizione perché la psicologia sia scienza.",
    extra:{
      titolo:"Le due definizioni da distinguere — il cuore epistemologico della scuola",
      html:"<strong>Mente</strong>: somma di <em>tutti</em> i processi mentali che si svolgono durante la vita di un individuo.<br><strong>Coscienza</strong>: somma dei processi che si verificano <em>hic et nunc</em>, che la psicologia sperimentale deve descrivere nei contenuti elementari."
    },
    critiche:[
      {t:"Critica temporale", c:"L'introspezione è in realtà una <strong>retrospezione</strong>: fra la percezione dello stimolo e la sua verbalizzazione passa del tempo, e l'immediatezza — che è l'oggetto dichiarato — è già perduta."},
      {t:"Critica dell'attendibilità", c:"Soggetti perfettamente addestrati fornivano <strong>descrizioni incoerenti degli stessi stimoli fisici</strong> → assenza di replicabilità."}
    ],
    chiavi:["struttura","44.000 unità sensoriali","retrospezione"]
  },
  {
    id:"funzionalismo", periodo:"fondazione", anno:1896, etichetta:"1896", nome:"Funzionalismo", luogo:"USA — Chicago, Harvard", lezione:"L01",
    autori:["Dewey (1859-1952)","Angell (1869-1949)","Carr (1873-1954)","Thorndike (1874-1949)"],
    precursori:[{nome:"Darwin", cosa:"selezione naturale, adattamento"},{nome:"William James", cosa:"stream of consciousness"},{nome:"Strutturalismo", cosa:"vi si oppone"}],
    precorre:[{nome:"Comportamentismo", cosa:"tramite Thorndike"}],
    oggetto:"Le <strong>attività mentali e la loro utilizzazione nella guida del comportamento</strong>; i comportamenti nella loro globalità, in relazione all'<strong>adattamento ambientale</strong>. I fenomeni mentali sono <strong>funzioni</strong>, non contenuti.",
    metodo:"<strong>Eclettico</strong>: sperimentazione di laboratorio, osservazione semplice, osservazione controllata.",
    validita:"Solida. Apre la strada al comportamentismo.",
    extra:{
      titolo:"La catena logica di William James — da esporre per intero",
      html:"Concorda con Wundt sull'importanza dell'esperienza immediata → <strong>dissente</strong> sulla scomponibilità: scomporre la coscienza significa <strong>snaturarla</strong> → la coscienza è <em>stream of consciousness</em>, «fiume che scorre»: nessuno stato, una volta trascorso, si ripropone uguale → i contenuti sono continuamente mutevoli, quindi studiarli è poco sensato → la <strong>mente è effetto dell'adattamento finalizzato all'autoconservazione</strong> → <strong>è più utile studiare come la mente funziona che come è fatta</strong>.<br><br>Aggiungi: <strong>rifiuto dell'introspezione</strong>; incarico ad Harvard (1890)."
    },
    focus:{ nome:"Edward Thorndike", html:"Columbia University. Interprete <strong>originale</strong> del funzionalismo e forte precursore del comportamentismo. Si definiva <strong>connessionista</strong>: i processi psichici sono <strong>connessioni, innate o acquisite, fra situazione e risposta</strong>.<br><br><strong>Legge dell'effetto</strong>: un comportamento seguito da feedback positivo si rinforza e diventa più probabile; seguito da feedback negativo tende a estinguersi." },
    chiavi:["funzioni","adattamento all'ambiente","stream of consciousness","legge dell'effetto"]
  },
  {
    id:"riflessologica", periodo:"collaterali", anno:1900, etichetta:"fine '800 → 1917", nome:"Scuola riflessologica", luogo:"Russia", collaterale:true, lezione:"L01",
    autori:["Ivan Pavlov (1849-1936), Nobel 1904"],
    precursori:[],
    precorre:[{nome:"Comportamentismo", cosa:"precursore diretto"}],
    oggetto:"I <strong>processi psichici come riflessi</strong>, cioè processi fisiologici elementari. Un riflesso è una connessione fra due o più neuroni (input → output), caratterizzata da <strong>automaticità</strong>. Riflessi <strong>spinali</strong> (nessuna consapevolezza) e <strong>cerebrali</strong> (comportamenti un po' più complessi).",
    metodo:"Sperimentale: esperimenti sui cani, poi sull'uomo (riflessi condizionati verbali).",
    validita:"Acquisizioni <strong>tuttora valide</strong> nello studio dell'apprendimento.",
    extra:{
      titolo:"La formula da sapere alla lettera",
      html:"<strong>Teoria dei riflessi condizionati (1902)</strong>: i riflessi condizionati costituiscono una <strong>forma elementare di apprendimento, fondata sull'associazione fra due stimoli</strong>.<br><br><em>Il percorso della scoperta</em>: studiando le secrezioni salivari di cani affamati, Pavlov osserva che gli animali salivano anche alla vista dell'<strong>inserviente senza cibo</strong>, cioè davanti a uno stimolo che in natura non provoca quel riflesso."
    },
    chiavi:["riflessi condizionati","automaticità","associazione fra due stimoli"]
  },
  {
    id:"storico-culturale", periodo:"collaterali", anno:1917, etichetta:"1917 → anni '50", nome:"Scuola storico-culturale", luogo:"Russia", collaterale:true, lezione:"L01",
    autori:["Lev Vygotskij (1896-1934)"],
    precursori:[{nome:"Rivoluzione del 1917", cosa:"marxismo e materialismo"}],
    precorre:[{nome:"Cognitivismo", cosa:"precursore"}],
    oggetto:"Le <strong>funzioni mentali complesse</strong> e la <strong>dimensione sociale</strong> dell'essere umano. Lo sviluppo della psiche è connesso agli <strong>stadi dello sviluppo socio-economico</strong>: più la società è culturalmente ricca, più l'individuo sviluppa funzioni complesse che ne ricalcano l'<em>habitus</em>. Il <strong>linguaggio</strong> è l'espressione principale della vita psichica e sta alla base dei processi di coscienza.",
    metodo:"Adattato ai principi di marxismo e materialismo.",
    validita:"Precursore del cognitivismo; mostra il condizionamento sociale della scienza.",
    extra:{ titolo:"Le due ragioni della sua importanza — servono entrambe", html:"1. Mostra come il <strong>pensiero scientifico stesso possa risentire della società</strong> in cui nasce.<br>2. È <strong>precursore del cognitivismo</strong>, l'ultima scuola a sé stante." },
    chiavi:["funzioni complesse","dimensione sociale","linguaggio"]
  },
  {
    id:"dinamica", periodo:"collaterali", anno:1900, etichetta:"fine '800 / inizio '900", nome:"Psicologia dinamica (psicoanalisi)", luogo:"Austria", collaterale:true, lezione:"L01",
    autori:["Sigmund Freud (1856-1939)"],
    precursori:[{nome:"Charcot", cosa:"ipnosi"},{nome:"Breuer", cosa:"collaborazione clinica"}],
    precorre:[],
    oggetto:"Le <strong>istanze psichiche e le loro relazioni dinamiche</strong>. Due postulati: <strong>unità di base mente-corpo</strong>; <strong>pluralità di livelli di funzione mentale</strong> — inconscio, preconscio, conscio (poi Es, Io, Super-Io).",
    metodo:"<strong>Psicoanalitico</strong>: libere associazioni, interpretazione dei sogni, atti mancati, lapsus, sintomi. <em>Non sperimentale.</em>",
    validita:"Fondazione epistemologica <strong>povera o nulla</strong>: non nasce in ambiente accademico né di laboratorio, ma dalla sistemazione teorica di esperienze cliniche, e non produce conoscenza empiricamente verificabile. Ha però un enorme <strong>valore applicativo</strong>: nuovi metodi di trattamento e cura dei disturbi psichici, e la prima teoria della personalità non solo patologica ma anche normale.",
    extra:{
      titolo:"I due assunti fondamentali",
      html:"1. <strong>Continuità fra normalità e patologia mentale</strong>: lo stesso conflitto produce sia i sintomi clinici sia i fenomeni quotidiani (lapsus, atti mancati). Il lapsus è la «cartina di tornasole» del conflitto: c'è un <em>continuum</em>, non una frattura.<br>2. <strong>Ruolo centrale dell'inconscio</strong> — entità non osservabile direttamente — nel modulare l'attività conscia.<br><br><strong>Il conflitto</strong>: fra <strong>principio di piacere</strong> (soddisfare il piacere interno) e <strong>principio di realtà</strong> (confronto necessario con il mondo reale)."
    },
    chiavi:["istanze psichiche","inconscio","principio di piacere / di realtà"]
  },
  {
    id:"gestalt", periodo:"reazioni", anno:1912, etichetta:"1912", nome:"Gestalt", luogo:"Germania → USA (nazismo)", lezione:"L02",
    autori:["Max Wertheimer (caposcuola)","Wolfgang Köhler","Kurt Koffka","Kurt Lewin"],
    precursori:[{nome:"Kant", cosa:"innatismo, sintesi a priori"},{nome:"Brentano", cosa:"psicologia dell'atto, intenzionalità"},{nome:"von Ehrenfels", cosa:"qualità gestaltiche"},{nome:"Wundt", cosa:"vi si oppone: sbaglia a scomporre"}],
    precorre:[{nome:"Psicologia della percezione", cosa:"acquisizioni tuttora valide"},{nome:"Psicologia sociale", cosa:"tramite Lewin"}],
    motto:"Il tutto è più della somma delle parti.",
    oggetto:"L'<strong>atto unitario della percezione</strong> e le regole responsabili di quest'atto conoscitivo unitario. L'organizzazione percettiva è regolata da <strong>leggi innate</strong>, indipendenti dall'esperienza, geneticamente determinate e <strong>specie-specifiche</strong>.",
    metodo:"<strong>Fenomenologico sperimentale</strong>: studiare il <strong>fenomeno percepito dai soggetti al variare degli stimoli fisici</strong>, senza scomporlo, con rigoroso controllo sperimentale.",
    validita:"Solida; acquisizioni tuttora valide sulla percezione. Si esaurisce come scuola.",
    extra:{
      titolo:"Perché il metodo fenomenologico NON è introspezione",
      html:"Sembrano simili — entrambi chiedono resoconti verbali — ed è una domanda d'esame quasi certa.<br><br><strong>Introspezione</strong>: <em>scompone</em> i contenuti di coscienza negli elementi più semplici; l'osservatore coincide con lo sperimentatore.<br><strong>Fenomenologico</strong>: studia il fenomeno <em>così com'è, senza scomporlo</em>, con controllo rigoroso del variare delle caratteristiche fisiche dello stimolo.<br><br><em>Il motivo teorico</em>: l'atto conoscitivo <strong>unifica e sintetizza</strong>, e il suo esito va oltre le singole parti. Scomporlo lo distrugge."
    },
    focus:{ nome:"Il fenomeno phi e l'insight", html:"<strong>Wertheimer — fenomeno phi</strong>: soggetto in camera oscurata, due fessure in cui una luce si accende alternativamente. Con intervallo <strong>molto breve</strong> il soggetto percepisce <strong>un unico stimolo in movimento</strong>; con intervallo lungo, no. È il <strong>movimento stroboscopico</strong>, alla base dei vecchi cartoni animati.<br><br><strong>Köhler — apprendimento per insight</strong>: scimpanzé e banane appese al soffitto. L'animale usa gli oggetti con <strong>funzionalità diversa da quella originaria</strong>. L'insight è un'<strong>improvvisa e unitaria illuminazione che ristruttura il campo fenomenico</strong>. <em>Non</em> procede per prove ed errori: lì si apprende un'associazione, qui c'è ristrutturazione." },
    chiavi:["atto unitario","metodo fenomenologico","fenomeno phi","insight","teoria di campo"]
  },
  {
    id:"comportamentismo", periodo:"reazioni", anno:1913, etichetta:"1913", nome:"Comportamentismo classico", luogo:"USA", lezione:"L02",
    autori:["John Watson (caposcuola)"],
    precursori:[{nome:"Locke", cosa:"empirismo, tabula rasa"},{nome:"Thorndike", cosa:"legge dell'effetto"},{nome:"Pavlov", cosa:"condizionamento classico"},{nome:"Wundt", cosa:"vi si oppone: studia l'inosservabile"}],
    precorre:[{nome:"Neocomportamentismo", cosa:"fase successiva"}],
    oggetto:"Il <strong>comportamento manifesto</strong> in termini di associazioni <strong>stimolo-risposta</strong>. L'organismo è una <strong>black box</strong>: si misurano solo input e output. È una <strong>psicologia integralmente obiettiva</strong>.",
    metodo:"Sperimentale rigoroso, in laboratorio e sugli animali (<strong>psicologia comparata</strong>), perché sugli animali è possibile ogni manipolazione.",
    validita:"Rigore metodologico. Riduttivo: esclude per principio i processi interni.",
    extra:{
      titolo:"Le tre posizioni epistemologiche di Watson",
      html:"<strong>Molecolarismo</strong>: scompone il comportamento in semplici associazioni S-R — l'analogo degli «atomi della mente» di Wundt, applicato al comportamento.<br><strong>Perifericalismo</strong>: le cause si indagano al più nell'attività di muscoli e nervi periferici; non si postula nemmeno l'intervento del sistema nervoso centrale.<br><strong>Ambientalismo</strong>: l'input ambientale è decisivo nella messa in atto del comportamento."
    },
    focus:{ nome:"Il piccolo Albert", html:"Il bambino gioca volentieri con ratti bianchi da laboratorio. Watson produce <strong>rumori molto forti</strong> mentre gioca → reazione di paura. Per <strong>associazione ripetuta</strong> rumore-animale, il bambino impara ad avere paura dell'animale. Meccanismo: <strong>condizionamento classico pavloviano</strong> applicato all'uomo.", avviso:"Nella registrazione la docente indica Albert come figlio di Watson. Non è così: era un bambino di circa 11 mesi non imparentato, e l'esperimento è di Watson e Rosalie Rayner, 1920." },
    chiavi:["black box","stimolo-risposta","molecolarismo","perifericalismo","ambientalismo","tabula rasa"]
  },
  {
    id:"neocomportamentismo", periodo:"soglia", anno:1930, etichetta:"anni '30-'40", nome:"Neocomportamentismo", luogo:"USA", lezione:"L02",
    autori:["Clark Hull (caposcuola)","Edward Tolman","Burrhus Skinner (a parte)"],
    precursori:[{nome:"Comportamentismo classico", cosa:"ne mette in discussione il divieto"}],
    precorre:[{nome:"Cenocomportamentismo", cosa:"fase successiva"},{nome:"Cognitivismo", cosa:"tramite Tolman"}],
    oggetto:"Si mette in discussione il divieto di interessarsi a <strong>ciò che sta fra stimolo e risposta</strong>. Lo schema rigido S-R diventa <strong>S-O-R</strong>: si postula una <strong>variabile interveniente</strong>, l'organismo.",
    metodo:"Sperimentale, sugli animali.",
    validita:"Riapre la strada allo studio dei processi interni.",
    extra:{
      titolo:"I due esponenti",
      html:"<strong>Hull</strong> — le <strong>pulsioni</strong>: condizione di bisogno (l'organismo richiede glucosio) → <strong>tensione</strong> → spinta a ripristinare l'equilibrio → comportamento (mangiare). Il comportamentista classico vedeva solo il cibo (S) e l'atto del mangiare (R); Hull dice che <em>fra i due c'è la pulsione</em>.<br><br><strong>Tolman</strong> — <strong>rappresentazioni mentali interne</strong> fra S e R. <strong>Apprendimento latente</strong>, basato sulle <strong>mappe cognitive</strong>: memorie organizzate in base alle relazioni spaziali dell'ambiente. È una forma di apprendimento <em>cognitivo</em>."
    },
    focus:{ nome:"Skinner — la voce fuori dal coro", html:"Cronologicamente in questa fase, <strong>teoricamente contro</strong>: <strong>ritorna all'ortodossia watsoniana e la estremizza</strong>. Non nega pensieri e sentimenti, ma afferma che nessun resoconto di ciò che accade dentro il corpo potrà mai spiegare il comportamento.<br><br><strong>Condizionamento operante</strong>: il soggetto <strong>opera attivamente sull'ambiente</strong>; il comportamento è <strong>forgiato dalle conseguenze che produce</strong>. Nella <strong>Skinner Box</strong>, un animale deprivato di cibo preme leve a caso finché trova quella collegata al dispenser: il <strong>rinforzo</strong> aumenta la probabilità di quel comportamento.<br><br><em>Applicazioni</em>: addestramento animale, macchine per l'apprendimento, terapia comportamentale delle fobie. <em>Derive finali</em>: il libero arbitrio come illusione, la società utopistica governata da programmi di rinforzo.", avviso:"Nella lezione «rinforzo negativo» è usato in senso lato per «conseguenza spiacevole». Nel sistema tecnico di Skinner il rinforzo aumenta sempre la risposta; ciò che la riduce è la punizione." },
    chiavi:["variabile interveniente","pulsioni","apprendimento latente","mappe cognitive","condizionamento operante"]
  },
  {
    id:"cenocomportamentismo", periodo:"soglia", anno:1950, etichetta:"anni '50", nome:"Cenocomportamentismo", luogo:"USA / Canada", svolta:true, lezione:"L02",
    autori:["Donald Hebb"],
    precursori:[{nome:"Neocomportamentismo", cosa:"ne prosegue l'apertura"}],
    precorre:[{nome:"Cognitivismo", cosa:"apre direttamente la strada"},{nome:"Neuroscienze", cosa:"unità mente-cervello"}],
    oggetto:"Detto anche <strong>comportamentismo cognitivista</strong>. Le variabili interne vengono identificate come <strong>attività del sistema nervoso centrale</strong>: per la prima volta si parla di <strong>unità mente-cervello</strong>, che nella psicologia contemporanea sarà il principale oggetto di studio.",
    metodo:"Modello <strong>psicofisiologico</strong> — il primo introdotto nella spiegazione del comportamento.",
    validita:"Apre direttamente la strada al cognitivismo e alle neuroscienze.",
    extra:{
      titolo:"Legge di Hebb e assemblee cellulari",
      html:"<strong>Legge di Hebb</strong>: se due neuroni <strong>scaricano insieme</strong> si <strong>potenziano reciprocamente</strong>, e saranno portati ad attivarsi insieme anche in seguito.<br><br><strong>Teoria delle assemblee cellulari</strong>: ampliamento della legge. Mentre quella riguarda due singoli neuroni, questa riguarda <strong>configurazioni ampie</strong>, circuiti diffusi nel cervello, che una volta stabilite <strong>si rafforzano</strong>. Le assemblee cellulari stanno <strong>alla base dell'apprendimento</strong>."
    },
    nodo:"Nella L01 l'assenza dell'unità mente-cervello è il motivo per cui la psicologia non riesce a emanciparsi dalla medicina. Qui, con Hebb, quell'unità viene per la prima volta postulata. È il cerchio che si chiude fra le due lezioni.",
    chiavi:["unità mente-cervello","legge di Hebb","assemblee cellulari"]
  },
  {
    id:"cognitivismo", periodo:"soglia", anno:1967, etichetta:"1967", nome:"Cognitivismo", luogo:"USA", svolta:true, lezione:"L03",
    autori:["Ulric Neisser (1928-2012)"],
    precursori:[{nome:"Cenocomportamentismo", cosa:"ne è la filiazione diretta, per evoluzione e non per reazione"},{nome:"Vygotskij", cosa:"funzioni complesse e linguaggio"},{nome:"Tolman", cosa:"rappresentazioni interne, mappe cognitive"},{nome:"Hebb", cosa:"modello psicofisiologico"},{nome:"Piaget", cosa:"sviluppo dei processi mentali nei bambini"},{nome:"Chomsky", cosa:"predisposizione innata al linguaggio, contro Skinner"},{nome:"Informatica e IA", cosa:"l'avvento del computer e la metafora mente-elaboratore"}],
    precorre:[{nome:"Mente embodied", cosa:"non lo supera: lo allarga"},{nome:"Neuroscienze", cosa:"attraverso l'approccio biopsicosociale"}],
    oggetto:"I <strong>processi cognitivi</strong>: tutti i processi interni alla mente che portano all'emissione di un comportamento. È una psicologia <strong>totalmente mentalistica</strong>. Nella scienza cognitiva l'oggetto si precisa come <strong>architettura funzionale</strong>: la struttura astratta che permette le funzioni intellettive, <em>prescindendo dalla sua base materiale</em>.",
    metodo:"<strong>Metodo simulativo</strong>: si formula un'ipotesi di funzionamento di una funzione cognitiva, se ne costruisce un modello, lo si <strong>implementa nel computer</strong> e si verifica se produce i risultati attesi. Se li produce, l'ipotesi è validata.",
    validita:"Metodologicamente <strong>ineccepibile</strong> — controllo assoluto delle variabili — ma allontana la ricerca dalla vita quotidiana. È <strong>lo stesso Neisser</strong> a criticarlo e a proporre l'<strong>approccio ecologico</strong>. Il cognitivismo non tramonta: è tuttora in essere, allargato.",
    extra:{ titolo:"I due avvenimenti che segnano la nascita", html:"<strong>1. Il simposio sulla teoria dell'informazione (1956)</strong> — tre interventi restano nella storia: <strong>Miller</strong> (memoria a breve termine e <strong>span</strong>), <strong>Newell e Simon</strong> (<strong>problem solving</strong> e spazio problematico), <strong>Chomsky</strong> (teoria del linguaggio).<br><br><strong>2. L'unità TOTE</strong> — Miller, <strong>Galanter</strong> e <strong>Pribram</strong>: <strong>T</strong>est → <strong>O</strong>perate → <strong>T</strong>est → <strong>E</strong>xit, uno schema a feedback retroattivo modellato sul computer.<br><br>Il <strong>manifesto</strong> è <em>Cognitive Psychology</em> di <strong>Neisser</strong> (1967) — che però, come dice la docente, «non fece altro che un\'opera di collage» di cose già in essere." },
    focus:{ nome:"I due filoni della scienza cognitiva", html:"<strong>Modularismo (Fodor)</strong>: dei <strong>trasduttori</strong> convertono gli stimoli in rappresentazioni interne; queste sono i <strong>moduli</strong>, capsule di input che lavorano in modo automatico e parallelo; i loro output confluiscono nei <strong>sistemi centrali</strong>, che li integrano.<br><br><strong>Connessionismo</strong>: primo tentativo di considerare la <strong>base materiale</strong>. L\'architettura mentale è una <strong>rete di unità di elaborazione omogenee</strong> che ricalcano i neuroni — unità di <em>input</em>, <em>nascoste</em>, di <em>output</em>.<br><br><strong>Da non confondere</strong> con il connessionismo di <strong>Thorndike</strong> (L01), che riguardava connessioni situazione-risposta." },
    chiavi:["psicologia totalmente mentalistica","metafora mente-computer","metodo simulativo","approccio ecologico","architettura funzionale"]
  },
  {
    id:"embodied", periodo:"contemporanea", anno:1980, etichetta:"oggi", nome:"La mente embodied e l'approccio biopsicosociale",
    luogo:"—", lezione:"L03",
    autori:["Sviluppo collettivo, non una scuola con un caposcuola"],
    precursori:[{nome:"Cognitivismo", cosa:"non viene superato: si allarga"},{nome:"Neisser", cosa:"l\'approccio ecologico"},{nome:"Darwin", cosa:"l\'adattamento, per la prospettiva biologica"}],
    precorre:[{nome:"Neuroscienze", cosa:"ne sono la prospettiva biologica realizzata"}],
    oggetto:"La mente <strong>incarnata</strong>: i processi cognitivi si svolgono in una mente basata su un <strong>cervello</strong>, che è un organo, che fa parte di un <strong>corpo</strong>. Tre corollari: <strong>1.</strong> la mente ha un corpo; <strong>2.</strong> le competenze cognitive sono descrivibili solo <strong>in azione e in interazione</strong> con l\'ambiente; <strong>3.</strong> la mente è <strong>relazionale</strong>, non una macchina di pensiero.",
    metodo:"<strong>Approccio biopsicosociale</strong>: la questione psicologica è indagata attraverso <strong>tre prospettive</strong> — <strong>biologica</strong> (selezione naturale di tratti adattivi, predisposizioni genetiche, meccanismi cerebrali, influenze ormonali), <strong>psicologica</strong> (paure apprese, aspettative, emozioni, elaborazione cognitiva), <strong>socioculturale</strong> (pari, aspettative sociali e familiari, gruppi, modelli persuasivi).",
    validita:"È l\'assetto attuale della disciplina. Lo studio basato sulla sola intelligenza artificiale non ha più molto senso: va integrato.",
    nodo:"Qui si chiude davvero il cerchio della <strong>L01</strong>: la definizione moderna parlava di «essere vivente nel suo rapporto con l\'ambiente, mentre lo esperisce, vi agisce e lo rappresenta». I tre corollari della mente embodied sono quella definizione, vista dall\'altro capo di centoquarant\'anni.",
    chiavi:["mente incarnata","mente relazionale","biopsicosociale","tre prospettive"]
  },
  {
    id:"neuroscienze", periodo:"contemporanea", anno:1990, etichetta:"oggi", nome:"Le neuroscienze comportamentali",
    luogo:"—", lezione:"L03", cardine:true,
    autori:["Precursori: Karl Lashley (1890-1958), Donald Hebb (1904-1985)"],
    precursori:[{nome:"Hebb", cosa:"plasticità neuronale in forma ancora acerba"},{nome:"Lashley", cosa:"labirinti e asportazione chirurgica; non trova la zona precisa"},{nome:"Approccio biopsicosociale", cosa:"ne sono la prospettiva biologica"}],
    precorre:[],
    oggetto:"I <strong>processi cerebrali</strong> e le altre <strong>funzioni fisiologiche all\'origine del comportamento</strong> — dai comportamenti semplici (esperienze sensoriali, fame, sete, riproduzione) a quelli complessi mediati dalle funzioni superiori (intelligenza, ragionamento, linguaggio). Analizzano <strong>direttamente il rapporto mente-cervello</strong>. Dette anche <strong>psicologia fisiologica</strong> o <strong>psicofisiologia</strong>.",
    metodo:"Reso possibile dalla <strong>rivoluzione tecnologica</strong>: microscopia avanzata fino ai <strong>processi molecolari nelle sinapsi</strong>; registrazione delle <strong>onde cerebrali</strong>; <strong>neuroimmagine strutturale</strong> (TAC, risonanza magnetica) e <strong>funzionale</strong> (PET, fMRI), che permette di studiare l\'attività cerebrale <em>in vivo, mentre il soggetto esegue compiti cognitivi</em>.",
    validita:"È l\'<strong>approccio dominante</strong> nella psicologia attuale. Ha dato molte risposte e posto altrettante domande nuove: «una scienza in fermento».",
    extra:{ titolo:"Le tre espansioni", html:"Le neuroscienze comportamentali sono il contenitore più ampio e contengono oggi:<br><br><strong>Neuroscienze cognitive</strong> — i processi cerebrali in relazione alle <strong>funzioni superiori</strong>.<br><strong>Neuroscienze affettive</strong> — in relazione a ciò che è <strong>emotivo</strong>.<br><strong>Neuroscienze relazionali</strong> — in relazione ai <strong>processi con le altre persone</strong>." },
    nodo:"È qui che l\'<strong>unità mente-cervello</strong> — negata da Cartesio, abbozzata da Gall, mancante nell\'emancipazione dalla medicina, rifiutata dal perifericalismo, postulata da Hebb — diventa finalmente il <strong>principale oggetto di studio</strong> della disciplina.",
    chiavi:["psicofisiologia","neuroimmagine funzionale","in vivo","plasticità neuronale"]
  },
  {
    id:"collaterali-oggi", periodo:"contemporanea", anno:1995, etichetta:"oggi", nome:"Le discipline collaterali",
    luogo:"—", lezione:"L03", collaterale:true,
    autori:["Maslow e Rogers per la psicologia umanistica"],
    precursori:[{nome:"Approccio biopsicosociale", cosa:"ne definisce le tre prospettive"},{nome:"Darwin", cosa:"per la psicologia evoluzionistica"}],
    precorre:[],
    oggetto:"Quattro discipline che affiancano le neuroscienze, perché oggi la psicologia <strong>non è settoriale</strong>: <strong>genetica del comportamento</strong> (come i fattori genetici influenzano le tendenze comportamentali), <strong>psicologia evoluzionistica</strong> (la mente come insieme di moduli specializzati, selezionati su problemi antichi), <strong>psicologia umanistica</strong> (le potenzialità positive della persona), <strong>psicologia socioculturale</strong> (come ambiente sociale e apprendimento culturale influenzano comportamento, cognizione ed emozioni).",
    metodo:"Ciascuna ha il proprio. Il più caratteristico è lo <strong>studio sui gemelli</strong> della genetica del comportamento: gli <strong>omozigoti</strong> condividono la maggior parte del patrimonio genetico e mostrano similarità <em>anche se allevati in ambienti diversi</em>; negli <strong>eterozigoti</strong>, che ne condividono meno, alcune di quelle similarità non si osservano.",
    validita:"Contribuiscono a rispondere al dibattito <strong>natura/cultura</strong>, che l\'<strong>epigenetica</strong> — lo studio dei cambiamenti nel genotipo dovuti all\'interazione con l\'ambiente — arriva a dirimere.",
    focus:{ nome:"Il rovesciamento della psicologia umanistica", html:"<strong>Maslow</strong> e <strong>Rogers</strong> mettono al centro le <strong>aspirazioni più elevate</strong> della persona: per funzionare al meglio, le persone vanno collocate in un ambiente <strong>stimolante e positivo</strong>.<br><br>È il rovesciamento esatto della psicodinamica di Freud, che indagava la patologia. Da qui la <strong>psicologia della salute</strong>: <strong>promozione del benessere</strong>, non solo correzione di ciò che non va." },
    nodo:"<strong>Attenzione all\'omonimia</strong>: la <strong>psicologia socioculturale</strong> contemporanea non è la <strong>scuola storico-culturale</strong> di Vygotskij (L01). Epoca, luogo e impianto teorico sono diversi.",
    chiavi:["studio sui gemelli","epigenetica","moduli specializzati","psicologia della salute","cultura senza base genetica"]
  }
];

/* ---------- FIGURE DI FRONTIERA ---------- */
PGE.frontiera = [
  { nome:"Thorndike", da:"Funzionalismo", a:"Comportamentismo" },
  { nome:"Lewin", da:"Gestalt", a:"Psicologia sociale" },
  { nome:"Tolman", da:"Neocomportamentismo", a:"Cognitivismo" },
  { nome:"Hebb", da:"Cenocomportamentismo", a:"Neuroscienze" },
  { nome:"Chomsky", da:"Psicolinguistica", a:"Cognitivismo" },
  { nome:"Neisser", da:"Cognitivismo (manifesto)", a:"Approccio ecologico — critica il proprio manifesto" }
];

/* ---------- GLOSSARIO DEI SINTAGMI ---------- */
PGE.sintagmi = [
  { t:"relazione mente-corpo sul piano naturalistico", d:"L'emancipazione dalla filosofia.", l:"L01" },
  { t:"unità cervello-mente e delle sue interazioni con l'ambiente", d:"L'emancipazione dalla medicina.", l:"L01" },
  { t:"esperienza diretta e immediata scomposta negli elementi irriducibili", d:"L'oggetto di Wundt.", l:"L01" },
  { t:"criteri elementistici e congruenti con le proprietà fisiche dello stimolo", d:"Come venivano addestrati i soggetti all'introspezione. Non «spontaneamente»: è l'opposto.", l:"L01" },
  { t:"l'introspezione è in realtà una retrospezione", d:"La critica temporale al metodo strutturalista.", l:"L01" },
  { t:"le attività mentali e la loro utilizzazione nella guida del comportamento", d:"L'oggetto del funzionalismo.", l:"L01" },
  { t:"connessioni, innate o acquisite, fra situazione e risposta", d:"Il connessionismo di Thorndike.", l:"L01" },
  { t:"forma elementare di apprendimento fondata sull'associazione fra due stimoli", d:"I riflessi condizionati di Pavlov.", l:"L01" },
  { t:"istanze psichiche e le loro relazioni dinamiche", d:"L'oggetto della psicologia dinamica.", l:"L01" },
  { t:"attività unitaria e unificante", d:"La sintesi a priori kantiana, radice della Gestalt.", l:"L02" },
  { t:"il fenomeno percepito dai soggetti al variare degli stimoli fisici", d:"Il metodo fenomenologico sperimentale.", l:"L02" },
  { t:"improvvisa e unitaria illuminazione che ristruttura il campo fenomenico", d:"L'insight di Köhler.", l:"L02" },
  { t:"molecolarismo, perifericalismo, ambientalismo", d:"Le tre posizioni epistemologiche di Watson.", l:"L02" },
  { t:"variabile interveniente fra stimolo e risposta", d:"La svolta del neocomportamentismo: S-O-R.", l:"L02" },
  { t:"come il comportamento è forgiato dalle conseguenze che produce sull'ambiente", d:"L'oggetto di Skinner.", l:"L02" },
  { t:"due neuroni che scaricano insieme si potenziano reciprocamente", d:"La legge di Hebb.", l:"L02" }
,
  { t:"psicologia totalmente mentalistica", d:"La definizione del cognitivismo. Attenzione: nasce per <strong>evoluzione</strong>, non per reazione.", l:"L03" },
  { t:"biologicamente preprogrammati per apprendere il linguaggio", d:"La tesi di Chomsky contro Skinner.", l:"L03" },
  { t:"architettura funzionale, prescindendo dalla sua base materiale", d:"L'oggetto della scienza cognitiva nella prima fase. È ciò che il connessionismo comincerà a correggere.", l:"L03" },
  { t:"la ricerca psicologica si è allontanata dalla realtà", d:"La critica ecologica di Neisser al proprio manifesto.", l:"L03" },
  { t:"processi cerebrali e altre funzioni fisiologiche all'origine del comportamento", d:"L'oggetto delle neuroscienze comportamentali.", l:"L03" },
  { t:"insieme di moduli specializzati atti a risolvere i problemi dei nostri antenati", d:"La mente secondo la psicologia evoluzionistica.", l:"L03" },
  { t:"valori, credenze, comportamenti e tradizioni durevoli nel tempo", d:"La definizione di cultura. Il punto: non ha base genetica, eppure viene trasmessa.", l:"L03" }
,
  { t:"gli effetti non sono dovuti al caso ma sempre riconducibili a una causa", d:"Il determinismo, assunto epistemologico di base del metodo scientifico.", l:"L04" },
  { t:"tradurre ogni concetto in un formato replicabile e misurabile", d:"L'operazionalizzazione: l'assunto più importante per la scienza psicologica.", l:"L04" },
  { t:"ogni definizione operativa è un'approssimazione al vero", d:"Una definizione totalmente valida è virtualmente impossibile.", l:"L04" },
  { t:"è scientifica ogni teoria confutabile", d:"Popper. Il compito dello scienziato non è accumulare conferme ma falsificare.", l:"L04" },
  { t:"processo circolare di approssimazione al vero", d:"Il processo di ricerca. Si torna alla tappa iniziale, ma a un livello più profondo.", l:"L04" },
  { t:"virtualmente tutto ciò che può variare può essere definito variabile", d:"Anche solo ciò che è presente o assente.", l:"L05" },
  { t:"criteri rigorosi e stabiliti a priori in uno specifico protocollo", d:"Ciò che rende sistematica una revisione sistematica.", l:"L05" },
  { t:"meglio un campione piccolo ma rappresentativo che grande e non rappresentativo", d:"La regola del campionamento. La rappresentatività conta più della numerosità.", l:"L05" },
  { t:"stessa probabilità di essere scelto", d:"Il campionamento casuale. Da non confondere con la scelta «a caso».", l:"L05" },
  { t:"la crescita di una variabile è direttamente proporzionale alla crescita dell'altra", d:"La correlazione positiva. Nella negativa è indirettamente proporzionale.", l:"L06" },
  { t:"bidirezionalità del nesso e intervento di una terza variabile", d:"Le <strong>due</strong> ragioni per cui la correlazione non è causalità.", l:"L06" },
  { t:"il cambiamento che lo sperimentatore induce sulla variabile", d:"La manipolazione sperimentale.", l:"L06" },
  { t:"tutto ciò che può interferire nella relazione, e che va conosciuto per essere controllato", d:"Le variabili di confusione (z).", l:"L06" },
  { t:"le variazioni di y sono dovute alla modificazione di x e non al caso", d:"Lo scopo della verifica delle ipotesi.", l:"L06" },
  { t:"dichiarare falsa l'ipotesi nulla quando in realtà è vera", d:"L'errore di primo tipo (α). Il secondo tipo (β) è il complementare.", l:"L06" },
  { t:"dettagli sufficienti a ripetere lo studio", d:"Il requisito della sezione dei metodi di un articolo. È l'invarianza fatta norma editoriale.", l:"L07" },
  { t:"valutazione ex ante, non ex post", d:"Ciò che distingue la pubblicazione scientifica da quella non scientifica.", l:"L07" }
];

/* ---------- ERRORI DA NON FARE ---------- */
PGE.errori = [
  { no:"«resx cogitans»", si:"<em>res</em> cogitans", l:"L01" },
  { no:"«essere umano» nella definizione", si:"<strong>essere vivente</strong> — umano e animale non umano", l:"L01" },
  { no:"«il metodo filosofico procede senza assiomi né verifica empirica»", si:"Procede <strong>proprio da assiomi indimostrabili</strong>; ciò che manca è la <strong>verifica empirica</strong>", l:"L01" },
  { no:"«Fechner studia le sensazioni con assiomi matematici»", si:"Formula una <strong>legge</strong> (Weber-Fechner) su base sperimentale. Legge e assioma sono opposti epistemologici", l:"L01" },
  { no:"«scuola socio-culturale»", si:"Scuola <strong>storico-culturale</strong>. La psicologia socioculturale è un'altra cosa, una branca contemporanea", l:"L01" },
  { no:"«l'emancipazione dalla filosofia avviene applicando il metodo scientifico»", si:"Circolare. Va detto: dalla mente sul piano filosofico → alla <strong>relazione mente-corpo sul piano naturalistico</strong>", l:"L01" },
  { no:"«introspezione = retrospezione perché verbalizzare è interpretare»", si:"La retrospezione è un problema <strong>temporale</strong>. L'interpretazione è questione diversa, ed è la preoccupazione di Wundt", l:"L01" },
  { no:"«Wundt addestrava i soggetti a essere spontanei»", si:"A descrivere secondo <strong>criteri elementistici e congruenti con le proprietà fisiche dello stimolo</strong>", l:"L01" },
  { no:"«le scuole russe sono collaterali perché non influenzate dall'Occidente»", si:"Perché stanno <strong>fuori dall'asse geografico-accademico</strong>. Pavlov è pienamente sperimentale", l:"L01" },
  { no:"«Pavlov viene ancora studiato» / «Freud ha influenzato la psicologia»", si:"Sono etichette. Va detto <strong>che cosa</strong> ha acquisito ciascuno", l:"L01" },
  { no:"«Albert era il figlio di Watson»", si:"Bambino di ~11 mesi non imparentato; esperimento di <strong>Watson e Rayner, 1920</strong>", l:"L02" },
  { no:"«il metodo fenomenologico è come l'introspezione»", si:"Entrambi usano resoconti verbali, ma il fenomenologico <strong>non scompone</strong> e controlla rigorosamente lo stimolo", l:"L02" },
  { no:"«Skinner appartiene al neocomportamentismo»", si:"Cronologicamente sì, <strong>teoricamente no</strong>: torna all'ortodossia watsoniana e la estremizza", l:"L02" },
  { no:"«rinforzo negativo = punizione»", si:"Il <strong>rinforzo aumenta sempre</strong> la risposta; ciò che la riduce è la <strong>punizione</strong>", l:"L02" },
  { no:"«l'insight procede per prove ed errori»", si:"<strong>No</strong>: è ristrutturazione improvvisa e unitaria del campo fenomenico", l:"L02" }
,
  { no:"«il cognitivismo nasce come reazione al comportamentismo»", si:"È la <strong>filiazione</strong> del cenocomportamentismo: <strong>evoluzione naturale</strong>, non reazione. È l'unica scuola del corso che non nasce contro qualcuno", l:"L03" },
  { no:"«il connessionismo è quello di Thorndike»", si:"Sono <strong>due cose diverse</strong>: Thorndike (L01) parla di connessioni <strong>situazione-risposta</strong>; il connessionismo della scienza cognitiva (L03) è una <strong>rete di unità di elaborazione</strong>", l:"L03" },
  { no:"«la psicologia socioculturale è la scuola di Vygotskij»", si:"No: quella è la scuola <strong>storico-culturale</strong> (Russia, dopo il 1917). La socioculturale è un approccio <strong>contemporaneo</strong>", l:"L03" },
  { no:"«Neisser ha fondato il cognitivismo»", si:"Ne ha scritto il <strong>manifesto</strong> (1967), ma «non fece altro che un'opera di collage» di cose già in essere — ed è poi lui stesso a criticarlo", l:"L03" },
  { no:"«il metodo simulativo era metodologicamente debole»", si:"Al contrario: era <strong>ineccepibile</strong>, con controllo assoluto delle variabili. Il limite è di <strong>validità ecologica</strong>: si allontana dalla vita quotidiana", l:"L03" },
  { no:"«le neuroscienze hanno superato il cognitivismo»", si:"Il cognitivismo è <strong>tuttora in essere</strong>: si è allargato. Le neuroscienze ne realizzano la <strong>prospettiva biologica</strong>", l:"L03" },
  { no:"«la TAC serve a studiare la funzione cerebrale»", si:"TAC e risonanza magnetica sono <strong>strutturali</strong>; la funzione si studia con PET e <strong>risonanza magnetica funzionale</strong>", l:"L03" },
  { no:"«i gemelli eterozigoti condividono tutto il patrimonio genetico»", si:"Sono gli <strong>omozigoti</strong> a condividerne la maggior parte; è per questo che la similarità fra loro, <strong>anche in ambienti diversi</strong>, fa dedurre una base biologica", l:"L03" }
,
  { no:"«il metodo scientifico serve a sostituire il senso comune»", si:"Serve a <strong>salvaguardare</strong> la psicologia dalla psicologia ingenua, che resta una <strong>forma imprescindibile di sapere</strong> con valore pragmatico", l:"L04" },
  { no:"«l'operazionalizzazione dà una misura vera del concetto»", si:"Ogni definizione operativa è un'<strong>approssimazione al vero</strong>: una definizione totalmente valida è <strong>virtualmente impossibile</strong>", l:"L04" },
  { no:"«una teoria confermata molte volte è vera»", si:"Popper: <strong>nessun numero di conferme</strong> rende vera un'affermazione. È vera <strong>finché non si dimostra falsa</strong>", l:"L04" },
  { no:"«la ricerca di base e quella applicata seguono processi diversi»", si:"Il <strong>processo di ricerca è totalmente identico</strong>: cambia il problema, non il metodo", l:"L04" },
  { no:"«la scala Celsius ha uno zero naturale»", si:"È uno <strong>zero arbitrario</strong> (la temperatura di congelamento). Lo zero naturale ce l'ha la scala <strong>Kelvin</strong>", l:"L05" },
  { no:"«le variabili ordinali si possono numerare»", si:"Ammettono solo <strong>ranghi</strong>: non si può dire nulla sull'<strong>intervallo</strong> né sul <strong>rapporto</strong> fra i livelli", l:"L05" },
  { no:"«la meta-analisi si può sempre fare su una revisione sistematica»", si:"Con <strong>troppa eterogeneità</strong> dei risultati sarebbe <strong>fuorviante</strong>: serve che gli studi vadano nella stessa direzione", l:"L05" },
  { no:"«un campione grande è per definizione migliore»", si:"<strong>Meglio piccolo e rappresentativo</strong> che grande e non rappresentativo: gli exit poll sbagliano proprio per questo", l:"L05" },
  { no:"«la correlazione dice che una variabile causa l'altra»", si:"<strong>No</strong>, per <strong>due</strong> ragioni: la <strong>bidirezionalità</strong> del nesso e la possibile <strong>terza variabile</strong>", l:"L06" },
  { no:"«un coefficiente negativo indica una correlazione debole»", si:"Il <strong>segno</strong> dà la <strong>direzione</strong>, il <strong>valore</strong> dà la <strong>forza</strong>: sono due informazioni distinte", l:"L06" },
  { no:"«scelta casuale = prendere i soggetti a caso»", si:"La <strong>scelta casuale è controllata</strong> e garantisce la rappresentatività; prendere «i primi che capitano» è tutt'altro", l:"L06" },
  { no:"«il laboratorio garantisce la validità dell'esperimento»", si:"Garantisce la <strong>validità interna</strong>; la <strong>validità ecologica</strong> resta <strong>bassa</strong> — è il vero limite del metodo", l:"L06" },
  { no:"«se manipolo una variabile ho un esperimento»", si:"Se la VI <strong>non è manipolabile</strong> (genere, età) si ha un <strong>quasi esperimento</strong>: manca il controllo assoluto", l:"L06" },
  { no:"«gli atti di congresso passano la peer review»", si:"<strong>Non</strong> una vera peer review: c'è un controllo del <strong>comitato scientifico</strong> sugli abstract", l:"L07" },
  { no:"«un articolo rifiutato è scientificamente debole»", si:"Può essere rifiutato <strong>pur essendo valido</strong>, se la rivista è satura: l'editor non fa l'analisi scientifica", l:"L07" },
  { no:"«Google Scholar e PubMed sono equivalenti»", si:"PubMed contiene <strong>solo lavori scientifici</strong>; Google Scholar contiene anche <strong>letteratura grigia</strong> non revisionata", l:"L07" }
];
