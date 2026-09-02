/* SCHEDE — struttura rigida e ripetuta, pensata per il ripasso schematico
   e per la stampa in fascicoli PDF.

   Ogni scheda di tipo "scuola" ha SEMPRE gli stessi dodici blocchi,
   nello stesso ordine. I blocchi vuoti restano visibili con un trattino,
   così la forma non cambia mai da una scheda all'altra:

     1  identificazione   { anno, luogo, lezione, capitolo, unaRiga }
     2  nasceDa           { problema, formula }
     3  radici            [ { nome, tipo, tesi } ]
     4  precursori        [ { nome, provenienza, apporto } ]
     5  oggetto           { formula, glossa }
     6  metodo            { formula, glossa, vincoli[] }
     7  teorie            [ { nome, enunciato, glossa } ]
     8  esponenti         [ { nome, anni, ruolo, luogo, chiE, haFatto[], teorie[], esperimenti[] } ]
     9  esperimenti       [ { nome, disegno[], risultato, significato } ]
    10  validita          { merito, limite, esito }
    11  precorre          [ { nome, come } ]
    12  formule[] · errori[] */

var PGE = window.PGE = window.PGE || {};

PGE.schede = { fascicoli: [] };

/* =========================================================
   FASCICOLO 1 — LA DEFINIZIONE DI PSICOLOGIA
   ========================================================= */
PGE.schede.fascicoli.push({
  id: "F1",
  n: "I",
  titolo: "La definizione di psicologia",
  sottotitolo: "Che cos'è, perché nasce tardi, con quale criterio si dice scientifica",
  lezione: "Lezione 1",
  intro: "Il fascicolo copre la prima metà della Lezione 1. Non contiene scuole ma <strong>concetti</strong>, e perciò le schede seguono uno schema più corto: definizione, articolazione, perché serve, formule alla lettera, errori. Le schede delle scuole cominciano dal Fascicolo II.",
  schede: [

/* ---------- F1.1 ---------- */
{
  id:"S101", tipo:"concetto", nome:"L'oggetto della psicologia",
  identificazione:{ anno:"—", luogo:"—", lezione:"L01", capitolo:"C01",
    unaRiga:"La definizione della disciplina in tre versioni successive: etimologica, generale, attuale. Solo la terza si usa all'esame." },
  definizioni:[
    { termine:"Etimologia", testo:"Dal greco <em>psyché</em> (anima) e <em>lógos</em> (discorso): letteralmente «discorso sull'anima», cioè scienza della mente.",
      glossa:"Serve a mostrare da dove viene il problema — l'oggetto originario è l'anima, cioè per definizione qualcosa che non si lascia misurare — e va liquidata in una frase." },
    { termine:"Definizione generale", testo:"Studio scientifico della <strong>mente</strong> e del <strong>comportamento</strong>.",
      glossa:"È volutamente vaga, e la vaghezza va dichiarata spontaneamente: è essa stessa una delle cause del ritardo della disciplina." },
    { termine:"Definizione attuale", testo:"Studio scientifico del <strong>comportamento e dei processi mentali dell'essere vivente nel suo rapporto con l'ambiente: mentre lo esperisce, vi agisce e lo rappresenta</strong>.",
      glossa:"È la formulazione da usare. Ogni suo elemento è motivato e va saputo giustificare uno per uno." }
  ],
  articolazione:{
    titolo:"I due termini della definizione generale, contrapposti su tre dimensioni",
    colonne:["", "Mente", "Comportamento"],
    righe:[
      ["Che cos'è","L'esperienza interiore personale: percezioni, pensieri, ricordi, sentimenti","Le azioni degli esseri umani <strong>e degli animali non umani</strong> nell'ambiente"],
      ["Dove si colloca","All'<strong>interno</strong> del soggetto","All'<strong>esterno</strong>, nell'ambiente"],
      ["Come si accede","Solo per via <strong>soggettiva</strong>: nessuno vede il pensiero di un altro","<strong>Direttamente osservabile</strong> da chiunque"],
      ["Che cosa produce","Un incessante <strong>flusso di coscienza</strong>: ciò di cui siamo consapevoli nel <em>qui e ora</em>","Una sequenza di atti registrabili e misurabili"]
    ]
  },
  scomposizione:{
    titolo:"La definizione attuale, elemento per elemento",
    voci:[
      { chiave:"«Studio scientifico»", valore:"Richiama il <strong>metodo sperimentale</strong> e la verifica empirica. È la parola che porta con sé l'intero criterio di scientificità." },
      { chiave:"«Comportamento e processi mentali»", valore:"Non più «mente» al singolare, come se fosse una cosa, ma <strong>processi</strong>: la mente non è un oggetto da descrivere, è un insieme di operazioni. È l'eredità del <strong>funzionalismo</strong>." },
      { chiave:"«Dell'essere vivente»", valore:"Non «dell'uomo». Rientrano gli animali non umani, e con essi la <strong>psicologia comparata</strong>, che è un metodo elettivo della disciplina." },
      { chiave:"«Nel suo rapporto con l'ambiente»", valore:"È l'elemento decisivo, assente nella definizione generale: comportamento e processi mentali non si studiano in isolamento ma <strong>in relazione</strong>. Eredità congiunta di Darwin, del funzionalismo e dell'ambientalismo comportamentista." },
      { chiave:"«Lo esperisce»", valore:"Il versante <strong>ricettivo</strong>: sensazione e percezione. Viene dalla psicofisica, da Wundt, dalla Gestalt." },
      { chiave:"«Vi agisce»", valore:"Il versante <strong>attivo</strong>: azione e comportamento manifesto. Viene dal funzionalismo e dal comportamentismo." },
      { chiave:"«Lo rappresenta»", valore:"Il versante <strong>interno</strong>: rappresentazioni mentali, mappe cognitive, linguaggio. Viene da Vygotskij, Tolman, cognitivismo." }
    ]
  },
  percheServe:"Le due traiettorie di emancipazione — dalla filosofia e dalla medicina — non corrono parallele ma <strong>convergono</strong>: la filosofia porta la mente dentro il piano naturalistico, la medicina porta il cervello a farsi carico della mente. Si incontrano esattamente nella definizione moderna, dove l'unità mente-cervello viene collocata in relazione all'ambiente. Ed è proprio perché quel rapporto ha tre facce che la definizione contiene tre verbi. <strong>La definizione attuale è la forma compressa dell'intero excursus storico.</strong>",
  formule:[
    "Studio scientifico del comportamento e dei processi mentali dell'essere vivente nel suo rapporto con l'ambiente: mentre lo esperisce, vi agisce e lo rappresenta."
  ],
  errori:[
    { no:"«La psicologia è lo studio della mente»", si:"«…del comportamento e dei <strong>processi mentali</strong> dell'<strong>essere vivente</strong> nel suo rapporto con l'ambiente»" },
    { no:"«Il comportamento sono le azioni dell'uomo»", si:"«…degli esseri umani <strong>e degli animali non umani</strong>» — senza questo, metà del programma diventa incomprensibile" },
    { no:"Elencare i tre verbi senza dire a che cosa corrispondono", si:"Ciascuno nomina una modalità del rapporto con l'ambiente e ha una paternità storica precisa" },
    { no:"Fermarsi all'etimologia e alla definizione generale", si:"È un decimo della risposta: la definizione completa ha sette passaggi e dura circa tre minuti" }
  ]
},

/* ---------- F1.2 ---------- */
{
  id:"S102", tipo:"concetto", nome:"Il ritardo e la doppia emancipazione",
  identificazione:{ anno:"—", luogo:"—", lezione:"L01", capitolo:"C02",
    unaRiga:"Oltre due millenni di psicologia filosofica contro poco più di 140 anni di psicologia scientifica: perché, e da chi la disciplina ha dovuto separarsi." },
  definizioni:[
    { termine:"Il dato di fatto", testo:"La fisica moderna nasce nel Seicento, la chimica nel Settecento, la biologia nell'Ottocento. La <strong>psicologia scientifica nel 1879</strong>.",
      glossa:"Non si tratta di disinteresse: la mente è uno degli oggetti più discussi del pensiero occidentale. Si tratta del fatto che per tutto quel tempo se ne parlava con un <strong>altro metodo</strong>." },
    { termine:"Metodo razionalista", testo:"Speculazione logica: da premesse — spesso <strong>assiomi indimostrabili</strong> — si traggono conclusioni per via deduttiva. <strong>Nessuna verifica empirica</strong>.",
      glossa:"È il metodo con cui la mente è stata studiata per due millenni, ed è il criterio che squalifica come non scientifica ogni concezione pre-1879." },
    { termine:"Metodo sperimentale", testo:"Osservazione controllata, manipolazione, misura, <strong>verifica empirica tangibile</strong>, sul modello delle scienze naturali.",
      glossa:"Il criterio di scientificità non è l'oggetto ma il <strong>metodo</strong>: la mente veniva studiata anche prima, e intensamente. Cambia il <em>come</em>." }
  ],
  articolazione:{
    titolo:"Le tre cause del ritardo, in scala crescente di profondità",
    colonne:["", "Causa", "Che tipo di ostacolo è"],
    righe:[
      ["1","Difficoltà di <strong>definire l'oggetto</strong>: che cosa significa studiare scientificamente un pensiero?","<strong>Tecnica</strong> — «non so come misurarlo». Un metodo scientifico richiede che l'oggetto sia isolabile, manipolabile e misurabile"],
      ["2","Difficoltà di considerare l'<strong>uomo</strong> un oggetto di studio scientifico","<strong>Antropologica</strong> — «non mi è lecito trattarlo così». Le scienze naturali trattano il loro oggetto in modo deterministico; applicarlo all'uomo urta contro una lunga tradizione"],
      ["3","<strong>Concezione trascendentale della mente</strong>: considerata quasi divina per oltre due millenni","<strong>Metafisica</strong> — «non ha senso trattarlo così». Non è un problema di strumenti mancanti, è un problema di categorie"]
    ]
  },
  scomposizione:{
    titolo:"La doppia emancipazione — entrambe le formule hanno due termini",
    voci:[
      { chiave:"Dalla filosofia", valore:"Dallo studio della mente sul <strong>piano filosofico</strong> → allo studio della <strong>relazione mente-corpo sul piano naturalistico</strong>.<br><em>Cambiano insieme l'oggetto — non più la mente sola ma la sua relazione con qualcosa di materiale — e il piano, non più speculativo ma naturalistico.</em>" },
      { chiave:"Dalla medicina", valore:"Dallo studio del cervello sul <strong>piano meramente fisiologico</strong> → allo studio dell'<strong>unità cervello-mente e delle sue interazioni con l'ambiente</strong>.<br><em>Il cervello era già studiato scientificamente, come organo. Mancava il <strong>ponte concettuale</strong>: ammettere che la mente potesse essere determinata dal funzionamento del cervello.</em>" },
      { chiave:"Dove si scioglie il nodo", valore:"L'unità mente-cervello sarà postulata per la prima volta dentro una teoria psicologica da <strong>Donald Hebb</strong>, con il cenocomportamentismo, negli anni Cinquanta — e diventerà il principale oggetto di studio delle <strong>neuroscienze</strong>. Il corso apre qui la parentesi e la chiude nella L03." }
    ]
  },
  percheServe:"Il ritardo si spiega di solito con il <strong>positivismo</strong>, che attribuisce alle scienze naturali il ruolo di unica fonte attendibile di conoscenza. È vero ma insufficiente: il positivismo è un'<strong>affermazione di principio</strong> — dice che la psicologia <em>dovrebbe</em> essere una scienza, non dice come. Il passaggio all'atto richiede una dimostrazione concreta che un fenomeno psichico <strong>possa</strong> essere misurato, e quella la fornisce la <strong>psicofisica</strong> con la legge di Weber-Fechner. Aggiungere questo ponte è ciò che trasforma un elenco corretto in un ragionamento.",
  formule:[
    "Dallo studio della mente sul piano filosofico alla relazione mente-corpo sul piano naturalistico.",
    "Dallo studio del cervello sul piano meramente fisiologico all'unità cervello-mente e alle sue interazioni con l'ambiente."
  ],
  errori:[
    { no:"«Si è emancipata dalla filosofia»", si:"Le formule hanno <strong>due termini</strong>: la risposta è <em>da che cosa a che cosa</em>. Perdere il secondo è l'errore più frequente" },
    { no:"«Prima non si studiava il cervello»", si:"Il cervello <strong>era già studiato</strong>, in modo deterministico, come organo. Mancava il ponte concettuale dell'unità mente-cervello" },
    { no:"Citare solo il positivismo", si:"Senza la <strong>psicofisica</strong> il positivismo resta un auspicio: serve la dimostrazione che lo psichico è misurabile" }
  ]
}

]});

/* =========================================================
   FASCICOLO 2 — L'EXCURSUS STORICO
   ========================================================= */
PGE.schede.fascicoli.push({
  id: "F2",
  n: "II",
  titolo: "L'excursus storico",
  sottotitolo: "Dalle concezioni pre-scientifiche alla soglia del cognitivismo",
  lezione: "Lezioni 1 e 2",
  intro: "Ogni scheda di scuola ha <strong>gli stessi dodici blocchi, nello stesso ordine</strong>. I blocchi non pertinenti restano visibili con un trattino, così la forma non cambia mai. Il criterio di lettura è quello del corso: <strong>oggetto → metodo → validità</strong>; e la domanda che tiene insieme la successione non è «che cosa viene dopo» ma <strong>«che cosa non funzionava prima»</strong>.",
  schede: [

/* ---------- F2.1 — PRE-SCIENTIFICA ---------- */
{
  id:"S201", tipo:"scuola", nome:"La fase pre-scientifica",
  identificazione:{ anno:"V sec. a.C. — inizio XIX sec.", luogo:"Grecia, Francia, area germanica", lezione:"L01", capitolo:"C03",
    unaRiga:"Non è una scuola. Sono figure che hanno quasi tutte torto, e si studiano per i passaggi concettuali che segnano — non per ciò che hanno scoperto." },
  nasceDa:{ problema:"Non nasce da un problema teorico: è la condizione di partenza. La mente è oggetto di discorso da due millenni, ma con metodo razionalista.",
    formula:"Il criterio che squalifica tutte queste concezioni è unico: <strong>approccio razionalista-filosofico, senza alcuna verifica empirica</strong>." },
  radici:[ { nome:"Filosofia razionalista", tipo:"metodo", tesi:"La conoscenza si produce per speculazione logica a partire da premesse che sono spesso assiomi indimostrabili." } ],
  precursori:[],
  oggetto:{ formula:"L'anima, gli umori corporei, il carattere, la sede delle facoltà psichiche.",
    glossa:"L'oggetto varia da figura a figura, e nessuna lo definisce in modo operativo. È precisamente la prima delle tre cause del ritardo." },
  metodo:{ formula:"Speculazione, analogia, aneddoto. In un caso — la trapanazione — intervento fisico basato su una spiegazione magica.",
    glossa:"Nessuna delle affermazioni prodotte viene mai sottoposta a controllo.", vincoli:[] },
  teorie:[
    { nome:"Possessione", enunciato:"I disturbi del comportamento sono causati da uno spirito maligno entrato nel corpo, che va fatto uscire.",
      glossa:"Per quanto la spiegazione sia magica, la localizzazione dell'intervento non è casuale: si interviene sulla <strong>testa</strong>. C'è già, in forma mitica, l'intuizione che la vita psichica abbia a che fare con il cranio." },
    { nome:"Dottrina dei quattro temperamenti", enunciato:"La personalità dipende dalla prevalenza di uno dei quattro umori corporei: sanguigno, collerico, malinconico, flemmatico.",
      glossa:"È la <strong>prima teoria della personalità</strong> della storia occidentale, e sposta la causa dei disturbi dagli spiriti al corpo. Resta però costruita per analogia con la dottrina dei quattro elementi, e mai verificata." },
    { nome:"Dualismo cartesiano", enunciato:"Due sostanze distinte: la <em>res cogitans</em> (spirito, anima, mente, i fenomeni psichici) e la <em>res extensa</em> (la materia, il corpo, <strong>cervello incluso</strong>).",
      glossa:"È il dettaglio decisivo: il cervello sta dalla parte della materia, <strong>non è la sede della mente</strong>. Finché è così, l'unità mente-cervello è impensabile." },
    { nome:"Frenologia", enunciato:"Le caratteristiche di personalità risiedono nel cervello, in aree distinte, e si desumono dalle <strong>protuberanze della scatola cranica</strong>.",
      glossa:"Nessun fondamento: le mappe erano compilate per analogia e aneddoto, mai validate. Ma con Gall compare per la prima volta, in forma sbagliata, l'idea di <strong>localizzazione</strong> cerebrale delle funzioni psichiche." }
  ],
  esponenti:[
    { nome:"Guaritori antichi", anni:"—", ruolo:"Pratica pre-medica", luogo:"—",
      chiE:"Figure delle società antiche che trattavano i disturbi del comportamento interpretandoli come possessione.",
      haFatto:["Praticavano la <strong>trapanazione</strong>: pietre grezze sfregate sulla scatola cranica del posseduto fino ad aprire un foro, perché lo spirito potesse uscirne.","La pratica causava spesso la morte del paziente, o comunque menomazioni gravi."],
      teorie:[], esperimenti:[] },
    { nome:"Ippocrate", anni:"V sec. a.C.", ruolo:"Medico", luogo:"Grecia",
      chiE:"Rappresenta un salto: sposta la causa dei disturbi dagli spiriti al corpo, ed è il primo passo verso una concezione naturalistica.",
      haFatto:["Formula la <strong>prima teoria della personalità</strong> della storia occidentale.","Individua <strong>quattro temperamenti</strong> fondati sulla prevalenza di uno dei quattro umori."],
      teorie:[{ nome:"I quattro temperamenti", enunciato:"<strong>Sanguigno</strong> (sangue): ottimista, socievole, mutevole. <strong>Collerico</strong> (bile gialla): irascibile, energico, impulsivo. <strong>Malinconico</strong> (bile nera): riflessivo, triste, introverso. <strong>Flemmatico</strong> (flegma): calmo, lento, imperturbabile." }],
      esperimenti:[] },
    { nome:"Cartesio (René Descartes)", anni:"1596-1650", ruolo:"Filosofo e matematico", luogo:"Francia",
      chiE:"La figura più importante della fase: formula in modo esplicito il problema che la psicologia dovrà smontare. Non apre la strada alla psicologia — le costruisce davanti il muro più alto.",
      haFatto:["Introduce l'accezione <strong>dualistica</strong> dell'essere umano, dividendo <em>res cogitans</em> e <em>res extensa</em>.","Elabora una prima teorizzazione del <strong>sistema nervoso</strong>: i nervi come tubi percorsi da un'energia raccolta dall'ambiente e convogliata al cervello.","Colloca il punto di contatto fra le due sostanze nella <strong>ghiandola pineale</strong>, attraverso cui l'energia fluirebbe nella sostanza pensante dando luogo ai fenomeni psichici."],
      teorie:[{ nome:"Dualismo", enunciato:"I fenomeni psichici sono propri dell'anima e per costruzione <strong>non studiabili</strong> con metodo naturalistico. Il cervello è corpo, e da solo non dice nulla della vita psichica." }],
      esperimenti:[],
      nota:"<strong>[N.d.R.]</strong> Nella registrazione della lezione la ghiandola pineale è collocata «nella parte occipitale» e in un punto si dice che il cervello è collegato alla <em>res extensa</em>. Sono imprecisioni del parlato: l'epifisi è una struttura epitalamica, mediana e profonda, e il collegamento è con la <em>res cogitans</em>." },
    { nome:"Franz Joseph Gall", anni:"1758-1828", ruolo:"Medico", luogo:"Area germanica",
      chiE:"Lavora nel secolo in cui la psicologia nascerà. Il suo metodo è privo di valore, ma l'ipotesi di fondo — che funzioni psichiche distinte risiedano in aree cerebrali distinte — è quella giusta.",
      haFatto:["Fonda la <strong>frenologia</strong>, teoria della personalità basata sull'esame delle protuberanze craniche.","Introduce, sia pure in forma errata, l'idea di <strong>localizzazione cerebrale</strong> delle funzioni psichiche."],
      teorie:[{ nome:"Frenologia", enunciato:"Dalla conformazione del cranio si legge il carattere. Ripresa in criminologia da <strong>Cesare Lombroso</strong>, con la teoria del «delinquente nato»." }],
      esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"Nessuna di queste concezioni produce conoscenza valida. Il loro merito è indiretto: <strong>pongono i problemi</strong> che la psicologia scientifica dovrà risolvere.",
    limite:"Approccio razionalista-filosofico: affermazioni sulla mente <strong>senza alcuna verifica empirica</strong>. Quasi tutto ciò che affermano è sbagliato.",
    esito:"Lasciano due eredità di segno opposto, ed è la coppia da memorizzare come tale." },
  precorre:[
    { nome:"Le neuroscienze", come:"attraverso il lascito <strong>da recuperare</strong> di Gall: la localizzazione cerebrale delle funzioni psichiche" },
    { nome:"L'unità mente-cervello", come:"attraverso il lascito <strong>da superare</strong> di Cartesio: la separazione fra mente e corpo" }
  ],
  formule:[
    "Da Cartesio: la separazione mente/corpo — un lascito da superare. Da Gall: l'idea di localizzazione cerebrale delle funzioni psichiche — un lascito da recuperare."
  ],
  errori:[
    { no:"Collocare il cervello nella <em>res cogitans</em>", si:"Il cervello sta nella <strong>res extensa</strong>: è il dettaglio che dà senso a tutto il passaggio" },
    { no:"Raccontarle come aneddoti storici", si:"Si studiano per il <strong>problema che pongono</strong>, non per ciò che hanno scoperto" },
    { no:"Dimenticare Lombroso", si:"La frenologia ebbe conseguenze concrete: fu ripresa in criminologia" }
  ]
},

/* ---------- F2.2 — IL CONTESTO ---------- */
{
  id:"S202", tipo:"scuola", nome:"Il contesto della svolta: positivismo e psicofisica",
  identificazione:{ anno:"XIX secolo", luogo:"Francia (positivismo), Germania (psicofisica)", lezione:"L01", capitolo:"C04",
    unaRiga:"Due precondizioni della nascita del 1879: una culturale che dà il permesso, una tecnica che fornisce la prova." },
  nasceDa:{ problema:"La psicologia non può diventare scienza finché manca un clima che lo esiga e una dimostrazione che sia possibile misurare un fenomeno psichico.",
    formula:"Il <strong>positivismo</strong> dice che si deve fare. La <strong>psicofisica</strong> dimostra che si può. Servono entrambi." },
  radici:[
    { nome:"Positivismo", tipo:"filosofia", tesi:"Alle scienze naturali è attribuito il ruolo privilegiato di <strong>unica fonte attendibile di conoscenza</strong>." }
  ],
  precursori:[],
  oggetto:{ formula:"<strong>Psicofisica</strong>: lo studio di come le <strong>sensazioni percepite a livello psicologico dipendano dalle caratteristiche fisiche degli stimoli ambientali</strong>.",
    glossa:"La mossa decisiva: non si pretende di misurare direttamente il contenuto della coscienza, si misura <strong>come varia</strong> al variare di qualcosa che si sa misurare. È il primo caso in cui un fenomeno psichico entra in un esperimento controllato." },
  metodo:{ formula:"Metodo sperimentale applicato alla relazione stimolo fisico → sensazione.",
    glossa:"È già a tutti gli effetti uno studio sperimentale di fenomeni psichici: per questo la psicofisica è il <strong>precursore diretto</strong> della psicologia scientifica.", vincoli:[] },
  teorie:[
    { nome:"Legge di Weber-Fechner", enunciato:"Traduzione matematica del rapporto fra mondo fisico e mondo psichico.",
      glossa:"Weber aveva osservato che la <strong>differenza minima percepibile</strong> non è una quantità fissa ma una proporzione costante dello stimolo di partenza; Fechner ne trae la formulazione logaritmica. <em>La formula non è richiesta: il dato d'esame è che Fechner traduce matematicamente il rapporto fisico-psichico.</em>" },
    { nome:"Teoria dell'inferenza inconscia", enunciato:"La percezione è un <strong>processo costruttivo</strong>: viene influenzata e corretta dall'<strong>esperienza pregressa</strong>, tramite un processo cognitivo <strong>inconsapevole</strong> al soggetto.",
      glossa:"Contraddice il senso comune: percepire non è registrare passivamente ciò che c'è, è <strong>costruire un'ipotesi</strong> su ciò che c'è, usando ciò che si è imparato prima, senza accorgersene." }
  ],
  esponenti:[
    { nome:"Auguste Comte", anni:"1798-1857", ruolo:"Filosofo", luogo:"Francia",
      chiE:"Il riferimento per il clima intellettuale dell'Ottocento. Non è uno psicologo e non ha mai fatto un esperimento psicologico: il suo contributo è di <strong>clima</strong>, non di contenuto.",
      haFatto:["Attribuisce alle scienze naturali il ruolo di <strong>unica fonte attendibile di conoscenza</strong>.","Stabilisce che qualsiasi disciplina, per produrre conoscenza, debba dotarsi di una <strong>base scientifica</strong>."],
      teorie:[{ nome:"Positivismo", enunciato:"Non basta più il discorso ben argomentato: serve il metodo delle scienze della natura. È il panorama più favorevole perché la psicologia si stacchi dalla filosofia." }],
      esperimenti:[] },
    { nome:"Gustav Theodor Fechner", anni:"1801-1887", ruolo:"Psicofisiologo, fondatore della psicofisica", luogo:"Germania",
      chiE:"La figura chiave della precondizione tecnica. La sua affermazione fondativa è radicale nel contesto di una mente considerata quasi divina.",
      haFatto:["Afferma che la <strong>sensazione è oggettiva, materiale e misurabile</strong>: almeno una parte della vita psichica esce dalla sfera trascendentale ed entra nella natura.","Traduce in termini matematici il rapporto fra mondo esterno e mondo psichico nella <strong>legge di Weber-Fechner</strong>."],
      teorie:[{ nome:"Misurabilità della sensazione", enunciato:"La sensazione è oggettiva, materiale e misurabile." }],
      esperimenti:[] },
    { nome:"Hermann von Helmholtz", anni:"1821-1894", ruolo:"Fisiologo e fisico", luogo:"Germania",
      chiE:"Studia la fisiologia sensoriale, in particolare la funzione visiva e uditiva. Il suo contributo teorico è uno dei fili rossi del corso.",
      haFatto:["Studia il funzionamento della fisiologia delle sensazioni <strong>visive e uditive</strong>.","Formula la <strong>teoria dell'inferenza inconscia</strong>."],
      teorie:[{ nome:"Inferenza inconscia", enunciato:"La percezione è un processo costruttivo, corretto dall'esperienza pregressa tramite un processo cognitivo inconsapevole." }],
      esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"Fornisce alla psicologia nascente <strong>il permesso epistemologico</strong> (positivismo) e <strong>la prova che lo psichico è misurabile</strong> (psicofisica).",
    limite:"Il positivismo da solo resta un'affermazione di principio; la psicofisica misura le sensazioni, non ancora i processi mentali complessi.",
    esito:"Wundt porterà l'impianto psicofisico dentro la psicologia, fondando il laboratorio di Lipsia." },
  precorre:[
    { nome:"Wundt e la nascita del 1879", come:"la psicofisica ne è il <strong>precursore diretto</strong>; l'obiettivo wundtiano di cogliere la variazione dell'esperienza al variare dello stimolo ne è la trasposizione" },
    { nome:"Gestalt", come:"radicalizza l'inferenza inconscia: la percezione non solo costruisce, ma lo fa secondo <strong>leggi innate</strong> anziché per esperienza pregressa" },
    { nome:"Cognitivismo", come:"riprende la costruzione come <strong>elaborazione dell'informazione</strong>" }
  ],
  formule:[
    "La sensazione è oggettiva, materiale e misurabile.",
    "La percezione è un processo costruttivo, influenzato e corretto dall'esperienza pregressa tramite un processo cognitivo inconsapevole."
  ],
  errori:[
    { no:"Presentare Comte come precursore della psicologia", si:"È il precursore delle <strong>condizioni</strong> in cui la psicologia diventa pensabile: è un filosofo, non ha mai fatto un esperimento psicologico" },
    { no:"Confondere l'inferenza inconscia con l'inconscio di Freud", si:"Qui a guidare la costruzione è l'<strong>esperienza pregressa</strong>, non una pulsione rimossa" },
    { no:"Attribuire alla Gestalt l'inferenza inconscia", si:"La Gestalt la radicalizza sostituendo l'esperienza pregressa con <strong>leggi innate</strong>" }
  ]
}

]});

/* ---------- F2.3 — WUNDT ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S203", tipo:"scuola", nome:"La nascita della psicologia scientifica",
  identificazione:{ anno:"1879", luogo:"Lipsia, Germania", lezione:"L01", capitolo:"C05",
    unaRiga:"Wundt fonda il primo laboratorio di Psicologia Fisiologica: non nasce l'interesse per la mente, nasce l'istituzione che la studia col metodo delle scienze naturali." },
  nasceDa:{ problema:"La mente è studiata da due millenni con metodo razionalista. Manca una disciplina autonoma che la studi con verifica empirica.",
    formula:"L'esigenza è <strong>fondativa</strong>: dare alla psicologia un metodo sperimentale, sottraendola alla speculazione filosofica." },
  radici:[
    { nome:"Positivismo (Comte)", tipo:"clima", tesi:"Ogni disciplina, per produrre conoscenza, deve avere base scientifica." },
    { nome:"Psicofisica (Fechner)", tipo:"metodo", tesi:"La sensazione è oggettiva, materiale e misurabile: un fenomeno psichico può entrare in un esperimento controllato." }
  ],
  precursori:[
    { nome:"Comte", provenienza:"Filosofia positivista", apporto:"Il permesso epistemologico: le scienze naturali come unica fonte attendibile di conoscenza" },
    { nome:"Fechner", provenienza:"Psicofisica", apporto:"La prova che lo psichico è misurabile; la legge di Weber-Fechner" },
    { nome:"von Helmholtz", provenienza:"Fisiologia sensoriale", apporto:"Il modello di un processo psichico non consapevole: l'inferenza inconscia" }
  ],
  oggetto:{ formula:"L'<strong>esperienza diretta e immediata</strong> — il contenuto della coscienza che il soggetto ha della propria attività mentale consapevole — <strong>scomposta nei suoi elementi irriducibili</strong>, gli «atomi della mente».",
    glossa:"Tre elementi da non perdere. «<em>Diretta e immediata</em>»: non l'esperienza ricordata né interpretata, quella che sta accadendo. «<em>Attività mentale consapevole</em>»: Wundt studia la coscienza, e ciò che non è consapevole resta fuori. «<em>Scomposta negli elementi irriducibili</em>»: è il cuore del programma e il punto su cui tutte le scuole successive attaccheranno.<br><strong>Obiettivo operativo</strong>: cogliere la variazione dell'esperienza cosciente al variare dello stimolo fisico — è l'impianto della psicofisica portato dentro la psicologia." },
  metodo:{ formula:"<strong>Introspezione</strong> («guardare dentro»): descrizione soggettiva della propria esperienza personale in seguito all'esposizione a uno stimolo, più la <strong>misura dei tempi di reazione</strong>.",
    glossa:"Detta così sarebbe il contrario di un metodo scientifico. Wundt la circonda di quattro vincoli che dovrebbero renderla controllata.",
    vincoli:[
      "<strong>Il soggetto è lo sperimentatore stesso, addestrato.</strong> Wundt reclutava gli studenti dei propri corsi e li addestrava a descrivere scrupolosamente e in modo coerente l'esperienza diretta.",
      "<strong>Criteri elementistici e congruenti con le proprietà fisiche dello stimolo.</strong> Davanti a un colore non basta nominarlo: vanno descritte brillantezza, intensità, tonalità. Le categorie del resoconto devono corrispondere alle dimensioni fisiche manipolate.",
      "<strong>Esperienza immediata, non la sua interpretazione.</strong> Dire «c'è scritta una parola» è già interpretazione: si è attribuita allo stimolo la categoria «parola». Bisogna fermarsi allo stadio precedente — segni, forme, tonalità.",
      "<strong>Misura dei tempi di reazione.</strong> È il vincolo che introduce una misura oggettiva in un metodo altrimenti interamente soggettivo."
    ] },
  teorie:[
    { nome:"Analogia con la chimica", enunciato:"Come la chimica studia la materia <strong>scomponendola in atomi</strong>, così la psicologia deve studiare la coscienza <strong>scomponendola in elementi semplici</strong>.",
      glossa:"L'analogia porta un'ambizione di metodo e un vizio: dà per dimostrato ciò che è da dimostrare, cioè che la coscienza <em>abbia</em> elementi e che scomponendola non la si distrugga. È la presupposizione che James contesterà e che la Gestalt rovescerà." },
    { nome:"Regola dei tempi di reazione", enunciato:"Più il tempo di reazione è <strong>lungo</strong>, più è probabile che il soggetto stia <strong>interpretando</strong> lo stimolo anziché riferire il contenuto irriducibile della coscienza.",
      glossa:"Introduce una misura fisica come indicatore di un processo psichico — non si misura il pensiero, si misura il tempo — ed è lo schema logico di tutta la cronometria mentale successiva. Ma è anche un correttivo che ammette implicitamente l'inaffidabilità del dato principale." }
  ],
  esponenti:[
    { nome:"Wilhelm Wundt", anni:"1832-1920", ruolo:"Fondatore", luogo:"Lipsia",
      chiE:"Fonda la psicologia come pratica sperimentale istituzionalizzata. La sua teoria elementistica sarà abbandonata in una generazione; l'istituzione resta.",
      haFatto:["Fonda nel <strong>1879</strong> a <strong>Lipsia</strong> il primo <strong>laboratorio di Psicologia Fisiologica</strong>. Il nome dichiara il programma: studiare i contenuti psichici con gli strumenti e i criteri di una scienza naturale.","Definisce l'oggetto della psicologia come esperienza diretta e immediata scomposta negli elementi irriducibili.","Sistematizza il <strong>metodo introspettivo</strong> con quattro vincoli.","Introduce la misura dei <strong>tempi di reazione</strong> come controllo di qualità del dato introspettivo.","Forma la generazione successiva: <strong>Titchener, James, Külpe</strong> passano tutti da Lipsia — le scuole che lo combatteranno nascono da persone che hanno lavorato con lui."],
      teorie:[{ nome:"Elementismo", enunciato:"La coscienza è scomponibile in elementi irriducibili, gli «atomi della mente»." }],
      esperimenti:[] }
  ],
  esperimenti:[
    { nome:"Il paradigma dei tempi di reazione", disegno:["Si presenta uno stimolo fisico controllato.","Si registra l'intervallo fra presentazione dello stimolo ed emissione della risposta verbale.","Si raccoglie contestualmente il resoconto introspettivo, vincolato ai criteri elementistici."],
      risultato:"Tempi lunghi si associano a resoconti interpretativi, tempi brevi a resoconti elementari.",
      significato:"Consente di stimare quanto un resoconto sia contaminato da interpretazione. È il primo uso di una misura fisica come indicatore di un'operazione mentale." }
  ],
  validita:{
    merito:"Fonda la <strong>psicologia come pratica sperimentale istituzionalizzata</strong>: il laboratorio, il tirocinio, la figura dello psicologo sperimentale. È il passaggio dall'esperimento psicologico alla psicologia sperimentale.",
    limite:"Il punto debole è il <strong>metodo</strong>. Il correttivo dei tempi di reazione non risolve il problema di fondo: il dato principale resta un resoconto verbale soggettivo.",
    esito:"La psicologia elementistica sarà abbandonata in una generazione, ma l'istituzione e il criterio del metodo restano." },
  precorre:[
    { nome:"Strutturalismo", come:"ne è la <strong>fonte diretta</strong>: Titchener porta la psicologia wundtiana in America" },
    { nome:"Gestalt", come:"ne è la <strong>reazione</strong>: sbaglia a scomporre" },
    { nome:"Comportamentismo", come:"ne è la <strong>reazione</strong>: sbaglia a studiare l'inosservabile" }
  ],
  formule:[
    "L'esperienza diretta e immediata, scomposta negli elementi irriducibili.",
    "Più lungo è il tempo di reazione, più è probabile che il soggetto stia interpretando anziché riferire il contenuto irriducibile."
  ],
  errori:[
    { no:"«1879, Wundt»", si:"Servono <strong>tre dati</strong>: chi, dove, quando — e il nome del laboratorio, «Psicologia Fisiologica», che dichiara il programma" },
    { no:"Enunciare l'oggetto senza «scomposta negli elementi irriducibili»", si:"È tutta la scuola: senza quella clausola non si capisce contro che cosa reagiranno Gestalt e funzionalismo" },
    { no:"«I tempi di reazione misuravano la velocità del pensiero»", si:"Servivano a <strong>stimare la contaminazione da interpretazione</strong> del resoconto introspettivo" },
    { no:"Elencare meno di quattro vincoli del metodo", si:"Sono quattro e vanno saputi come elenco" }
  ]
});

/* ---------- F2.4 — STRUTTURALISMO ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S204", tipo:"scuola", nome:"Lo strutturalismo",
  identificazione:{ anno:"1892", luogo:"Cornell University, Stati Uniti", lezione:"L01", capitolo:"C06",
    unaRiga:"Titchener porta in America la psicologia wundtiana, le dà un nome e la sistematizza — e nel farlo ne rivela il difetto." },
  nasceDa:{ problema:"La psicologia wundtiana esiste come pratica di laboratorio ma non ha un nome, confini definiti né un lessico standard.",
    formula:"L'esigenza è di <strong>sistematizzazione</strong>: dare identità a una ricerca già in corso." },
  radici:[
    { nome:"Wundt", tipo:"scuola", tesi:"L'esperienza diretta e immediata va scomposta negli elementi irriducibili." }
  ],
  precursori:[
    { nome:"Wundt", provenienza:"Lipsia", apporto:"Titchener ne è l'allievo diretto; porta la psicologia wundtiana negli Stati Uniti" }
  ],
  oggetto:{ formula:"<strong>Percezioni, emozioni (o sentimenti) e idee</strong>, analizzate attraverso i rispettivi <strong>elementi più semplici</strong>.",
    glossa:"È il programma wundtiano ma con un <strong>catalogo</strong>: Wundt parlava dell'esperienza diretta in generale, Titchener nomina le classi di contenuti su cui si lavora. Il nome della scuola viene da qui: l'oggetto è la <strong>struttura</strong> della mente e della coscienza." },
  metodo:{ formula:"<strong>Introspezione ancora più sistematizzata</strong>: Titchener elabora un <strong>vocabolario</strong> che il soggetto è tenuto a usare quando viene esposto agli stimoli.",
    glossa:"Il resoconto non è libero ma vincolato a un repertorio di termini prestabiliti, così da renderlo confrontabile fra soggetti e fra prove. <strong>[slide]</strong> Con questo apparato furono individuate <strong>44.000 unità sensoriali</strong> diverse.<br>Nel disegno sperimentale <strong>il soggetto coincide con lo sperimentatore</strong>: chi osserva è chi è osservato — ed è il bersaglio della futura critica comportamentista.",
    vincoli:[
      "Il resoconto deve usare i termini del vocabolario prestabilito.",
      "L'osservatore è addestrato e coincide con lo sperimentatore.",
      "Le 44.000 unità sensoriali non sono un successo classificatorio: un sistema che per descrivere l'esperienza ha bisogno di decine di migliaia di categorie elementari sta segnalando che le sue «unità irriducibili» non sono unità."
    ] },
  teorie:[
    { nome:"Distinzione mente / coscienza", enunciato:"<strong>Mente</strong>: la somma di <em>tutti</em> i processi mentali e i contenuti che si svolgono <strong>durante la vita</strong> di un individuo. <strong>Coscienza</strong>: la somma dei processi che si verificano <strong>nel qui e ora</strong> (<em>hic et nunc</em>), che la psicologia sperimentale deve descrivere nei contenuti elementari.",
      glossa:"La differenza sta interamente nel <strong>tempo</strong>: la mente è la biografia, la coscienza è l'istante. Conseguenza operativa: l'oggetto effettivo del lavoro sperimentale è la <em>coscienza</em>, perché solo dell'istante presente si può chiedere un resoconto. È l'asimmetria che James userà come arma." }
  ],
  esponenti:[
    { nome:"Edward Bradford Titchener", anni:"1867-1927", ruolo:"Caposcuola", luogo:"Cornell University",
      chiE:"Allievo di Wundt a Lipsia, si trasferisce alla Cornell nel 1892. Il suo gesto ha una doppia natura, geografica e teorica.",
      haFatto:["<strong>Geografica</strong>: trasporta in America la scuola di pensiero wundtiana. È il primo trasferimento dell'asse della disciplina dalla Germania agli Stati Uniti — movimento che si ripeterà con la Gestalt negli anni Trenta, ma per ragioni opposte (là sarà una fuga).","<strong>Teorica</strong>: dà un <strong>nome</strong> alla scuola e la <strong>sistematizza</strong> dal punto di vista scientifico. È lo stesso gesto che compirà la Scuola di Chicago con il manifesto funzionalista, e poi Neisser nel 1967.","Elabora il <strong>vocabolario</strong> obbligatorio del resoconto introspettivo.","Distingue <strong>mente</strong> e <strong>coscienza</strong> sul criterio del tempo."],
      teorie:[{ nome:"Strutturalismo", enunciato:"L'oggetto della psicologia è la struttura della coscienza, colta nei suoi elementi irriducibili." }],
      esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"Aver posto la <strong>questione del metodo</strong> come condizione perché la psicologia diventi una scienza. Prima di Titchener si discuteva di <em>che cosa</em> studiare; dopo di lui è chiaro che la partita si gioca su <em>come</em> lo si studia. <strong>Il merito non viene cancellato dal fallimento del metodo proposto: la domanda giusta resta giusta anche quando la risposta è sbagliata.</strong>",
    limite:"Il metodo <strong>non è valido</strong>, per due critiche distinte:<br>· <strong>Retrospezione</strong> — fra la percezione dello stimolo e la sua verbalizzazione passa del tempo: ciò che viene riferito non è l'esperienza immediata ma quella appena trascorsa, recuperata dalla memoria. È una critica <em>temporale</em> e demolisce la qualifica «immediata» che stava nella definizione dell'oggetto.<br>· <strong>Incoerenza dei resoconti</strong> — soggetti perfettamente addestrati fornivano descrizioni incoerenti degli stessi stimoli fisici. È una critica di <em>attendibilità</em> e colpisce il requisito minimo di qualunque misura: se la stessa causa non produce lo stesso dato, il dato non misura nulla.",
    esito:"Con la <strong>morte di Titchener (1927)</strong> lo strutturalismo <strong>decade</strong>: era una scuola senza successione, tenuta insieme dalla persona che l'aveva sistematizzata." },
  precorre:[
    { nome:"Funzionalismo", come:"nasce per <strong>reazione</strong>, ma su una critica all'<strong>oggetto</strong> e non al metodo: andare oltre la struttura, considerare la mente nell'ambiente e per le sue funzioni" },
    { nome:"Gestalt e comportamentismo", come:"nascono per reazione all'impianto wundtiano-strutturalista, da direzioni opposte" }
  ],
  formule:[
    "L'introspezione è in realtà una retrospezione.",
    "Lo strutturalismo ha posto la domanda giusta — quella del metodo — e ha dato la risposta sbagliata. Ma è la domanda a restare."
  ],
  errori:[
    { no:"Rispondere raccontando Wundt", si:"Le tre cose <strong>di Titchener</strong> sono: il catalogo dei contenuti, la coppia mente/coscienza, il vocabolario con le 44.000 unità" },
    { no:"Fondere le due critiche in una", si:"<strong>Retrospezione</strong> = problema di tempo. <strong>Incoerenza</strong> = problema di attendibilità. Chi ne dice una sola ha risposto a metà" },
    { no:"Presentare l'esigenza del funzionalismo come critica al metodo", si:"È una critica all'<strong>oggetto</strong>: la struttura non basta, serve la funzione nell'ambiente" }
  ]
});

/* ---------- F2.5 — FUNZIONALISMO ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S205", tipo:"scuola", nome:"Il funzionalismo",
  identificazione:{ anno:"1896", luogo:"Scuola di Chicago, Stati Uniti", lezione:"L01", capitolo:"C07",
    unaRiga:"Non nasce da una scoperta ma da un cambio di domanda: non «com'è fatta» la mente, ma «a che cosa serve» — e con la domanda entra l'ambiente." },
  nasceDa:{ problema:"Gli strutturalisti indagano i <strong>contenuti</strong> della mente, cioè come la mente è fatta. Ma una struttura descritta in isolamento non dice nulla dell'uso che se ne fa.",
    formula:"L'esigenza è andare <strong>oltre la struttura</strong> e considerare la mente <strong>all'interno dell'ambiente in cui l'individuo vive</strong>, quindi non per i contenuti ma per le <strong>funzioni</strong>. Sono due mosse in una: la mente entra in un ambiente, e la domanda passa da «com'è fatta» a «a che cosa serve»." },
  radici:[
    { nome:"Evoluzionismo darwiniano", tipo:"biologia", tesi:"Le caratteristiche utili alla sopravvivenza hanno più probabilità di essere trasmesse: sopravvive chi meglio si adatta all'ambiente." }
  ],
  precursori:[
    { nome:"Charles Darwin", provenienza:"Biologia evoluzionistica", apporto:"Selezione naturale e <strong>adattamento all'ambiente</strong>: il concetto-chiave che passa al funzionalismo" },
    { nome:"William James", provenienza:"Filosofia e psicologia, Harvard", apporto:"Lo <em>stream of consciousness</em> e la conclusione che è più utile studiare come la mente funziona" },
    { nome:"Strutturalismo", provenienza:"Cornell", apporto:"Vi si oppone: è l'esigenza insoddisfatta che genera la nuova scuola" }
  ],
  oggetto:{ formula:"Le <strong>attività mentali</strong> e la loro <strong>utilizzazione nella guida del comportamento</strong>: i comportamenti nella loro <strong>globalità</strong>, in relazione all'<strong>adattamento ambientale</strong>.",
    glossa:"Due elementi da non perdere. «<em>Nella guida del comportamento</em>»: i processi mentali non sono studiati per sé ma per l'uso che ne fa il comportamento — è il ponte verso il comportamentismo. «<em>Nella loro globalità</em>»: il rifiuto dell'elementismo è esplicito già nella formulazione dell'oggetto." },
  metodo:{ formula:"<strong>Eclettico</strong> ma sperimentale: sperimentazione di laboratorio, osservazione semplice, osservazione controllata.",
    glossa:"L'eclettismo non è vaghezza. Se l'oggetto è la <em>funzione</em>, cioè un rapporto fra organismo e ambiente, il metodo deve poter seguire quel rapporto dove si dà: un rapporto adattivo si osserva anche fuori dal laboratorio, e irrigidire il metodo significherebbe perdere l'oggetto. <strong>È il primo caso nel corso in cui il metodo è subordinato all'oggetto</strong> — in Wundt era il metodo a definire la scuola.",
    vincoli:[] },
  teorie:[
    { nome:"Selezione naturale (Darwin)", enunciato:"Le caratteristiche <strong>più utili alla sopravvivenza</strong> e alla riproduzione degli individui di una stessa specie hanno <strong>maggiori probabilità delle altre di essere trasmesse alle generazioni successive</strong>.",
      glossa:"Esempio della lezione: il collo lungo della giraffa. <strong>[N.d.R.]</strong> nella forma «la giraffa allunga il collo per arrivare alle foglie» l'esempio è <em>lamarckiano</em>: in Darwin la variazione è preesistente e casuale, e l'ambiente non la produce, la <strong>seleziona</strong>." },
    { nome:"Stream of consciousness (James)", enunciato:"La coscienza non è una serie di elementi distinti ma un <strong>flusso dinamico</strong>, un fiume che scorre: nessun momento di coscienza, una volta trascorso, si ripropone identico.",
      glossa:"La catena logica in quattro passi: <strong>1.</strong> la coscienza è dinamica → <strong>2.</strong> nessun momento è replicabile → <strong>3.</strong> studiarne i contenuti è privo di senso, perché nell'istante successivo non esistono più → <strong>4.</strong> dunque è più utile studiare <em>come la mente funziona</em> che <em>come è fatta</em>. Il punto 4 è la conclusione, ed è la frase che vale il voto." },
    { nome:"Connessionismo (Thorndike)", enunciato:"I processi psichici sono costituiti da <strong>connessioni, innate o acquisite, fra una situazione e una risposta</strong>.",
      glossa:"È la traduzione decisiva: ciò che nel funzionalismo era un <em>processo adattivo</em> diventa un <em>legame associativo</em>. È già, nella sostanza, lo schema S-R del comportamentismo, formulato nel lessico funzionalista." },
    { nome:"Legge dell'effetto (Thorndike)", enunciato:"Un comportamento seguito da un <strong>feedback positivo</strong> dell'ambiente si <strong>rinforza</strong> e diventa più probabile in futuro; un comportamento seguito da un <strong>feedback negativo</strong> tende a <strong>estinguersi</strong>.",
      glossa:"Sposta la spiegazione del comportamento <strong>dalle cause alle conseguenze</strong>: ciò che determina se un comportamento si ripeterà non è ciò che lo ha provocato, ma ciò che gli è seguito. È il rovesciamento che Skinner porterà alle estreme conseguenze." }
  ],
  esponenti:[
    { nome:"Charles Darwin", anni:"1809-1882", ruolo:"Precursore", luogo:"Inghilterra",
      chiE:"Non è uno psicologo, ma la sua teoria fornisce al funzionalismo l'intera impalcatura concettuale.",
      haFatto:["Formula la <strong>teoria dell'evoluzione</strong> per mezzo della <strong>selezione naturale</strong>.","Fornisce alla psicologia il concetto di <strong>adattamento all'ambiente</strong>: se vale per gli organi, vale anche per la mente."],
      teorie:[{ nome:"Selezione naturale", enunciato:"Sopravvivono soltanto gli individui che meglio si adattano all'ambiente." }],
      esperimenti:[] },
    { nome:"William James", anni:"1842-1910", ruolo:"Precursore principale", luogo:"Harvard (incarico 1890)",
      chiE:"Alcuni lo considerano il fondatore; è più corretto considerarlo un <strong>precursore</strong>, perché i caposcuola veri e propri sono quelli di Chicago. Ha un'esperienza di lavoro con Wundt.",
      haFatto:["Condivide con Wundt l'importanza di studiare l'esperienza immediata, ma <strong>dissente sulla possibilità di scomporla</strong>: farlo significa <strong>snaturare la mente</strong>.","Definisce la coscienza come <strong>stream of consciousness</strong>.","Definisce la mente come <strong>effetto massimo dell'adattamento</strong> finalizzato all'<strong>autoconservazione</strong>: la struttura più evoluta di cui l'uomo dispone, quella che gli consente di adattarsi meglio all'ambiente.","<strong>Rifiuta l'introspezione</strong> come metodo elettivo."],
      teorie:[{ nome:"Stream of consciousness", enunciato:"È più utile studiare come la mente funziona che come è fatta." }],
      esperimenti:[] },
    { nome:"John Dewey", anni:"1859-1952", ruolo:"Caposcuola", luogo:"Scuola di Chicago",
      chiE:"Primo dei tre che emettono il manifesto funzionalista.",
      haFatto:["Con Angell e Carr emette il <strong>manifesto funzionalista</strong> (1896), dando nome e sistematizzazione alla scuola — lo stesso gesto compiuto da Titchener per lo strutturalismo."],
      teorie:[], esperimenti:[] },
    { nome:"James Rowland Angell", anni:"1869-1949", ruolo:"Caposcuola", luogo:"Scuola di Chicago",
      chiE:"Secondo dei tre caposcuola.",
      haFatto:["Concorre alla stesura del manifesto funzionalista e alla definizione dell'oggetto: le attività mentali nella guida del comportamento."],
      teorie:[], esperimenti:[] },
    { nome:"Harvey Carr", anni:"1873-1954", ruolo:"Caposcuola", luogo:"Scuola di Chicago",
      chiE:"Terzo dei tre caposcuola.",
      haFatto:["Concorre alla stesura del manifesto funzionalista e alla sistematizzazione del metodo eclettico."],
      teorie:[], esperimenti:[] },
    { nome:"Edward Lee Thorndike", anni:"1874-1949", ruolo:"Funzionalista <em>sui generis</em> · figura di frontiera", luogo:"Columbia University",
      chiE:"Fra le decine di funzionalisti la lezione lo isola deliberatamente — <strong>non</strong> perché sia stato caposcuola o esponente di spicco (non lo è stato), ma perché interpreta in modo <strong>originale</strong> i concetti del funzionalismo e diventa <strong>precursore diretto del comportamentismo</strong>.",
      haFatto:["Si definisce <strong>connessionista</strong>: riduce le funzioni mentali a connessioni situazione-risposta.","Formula la <strong>legge dell'effetto</strong>, che la lezione chiede esplicitamente di tenere a mente perché è il ponte verso la scuola successiva.","Sposta la spiegazione del comportamento dalle cause alle <strong>conseguenze</strong>."],
      teorie:[
        { nome:"Connessionismo", enunciato:"I processi psichici sono connessioni, innate o acquisite, fra una situazione e una risposta." },
        { nome:"Legge dell'effetto", enunciato:"Feedback positivo → il comportamento si rinforza. Feedback negativo → tende a estinguersi." }
      ],
      esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"Solida. Introduce nella psicologia l'<strong>ambiente</strong> — che finirà nella definizione moderna della disciplina — e subordina per la prima volta il metodo all'oggetto.",
    limite:"Non ha un metodo proprio riconoscibile, e proprio per questo si dissolve più che tramontare: le sue acquisizioni passano al comportamentismo.",
    esito:"Apre al comportamentismo attraverso Thorndike; lascia «nel suo rapporto con l'ambiente» nella definizione della disciplina." },
  precorre:[
    { nome:"Comportamentismo", come:"tramite <strong>Thorndike</strong>: connessionismo e legge dell'effetto" },
    { nome:"La definizione moderna", come:"vi lascia l'espressione «nel suo rapporto con l'ambiente» e il plurale «processi mentali»" }
  ],
  formule:[
    "È più utile studiare come la mente funziona che come è fatta.",
    "Le caratteristiche più utili alla sopravvivenza hanno maggiori probabilità di essere trasmesse alle generazioni successive.",
    "I processi psichici sono connessioni, innate o acquisite, fra una situazione e una risposta."
  ],
  errori:[
    { no:"Presentare James come caposcuola", si:"È un <strong>precursore</strong>: i caposcuola sono Dewey, Angell e Carr" },
    { no:"Fermarsi alla metafora del fiume", si:"La conclusione è il passo 4: <strong>è più utile studiare come la mente funziona che come è fatta</strong>" },
    { no:"«Metodo eclettico» senza motivarlo", si:"Se l'oggetto è un rapporto, il metodo deve poterlo seguire dove si dà" },
    { no:"Non spiegare perché Thorndike viene isolato", si:"Senza quella ragione l'elenco dei nomi è inerte: è il <strong>ponte</strong> verso il comportamentismo" }
  ]
});

/* ---------- F2.6 — RIFLESSOLOGIA ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S206", tipo:"scuola", nome:"La scuola riflessologica",
  identificazione:{ anno:"fine '800 → 1917", luogo:"Russia", lezione:"L01", capitolo:"C08",
    unaRiga:"Prima delle due scuole russe. È «collaterale» in senso geografico e istituzionale: fuori dall'asse Germania-America, ma pienamente accademica e pienamente sperimentale." },
  nasceDa:{ problema:"Come studiare i processi psichici con gli strumenti della fisiologia, senza postulare entità mentali non osservabili.",
    formula:"L'esigenza è <strong>riduzionista</strong>: ricondurre tutto ciò che chiamiamo vita mentale a meccanismi fisiologici semplici e misurabili." },
  radici:[
    { nome:"Fisiologia sperimentale russa", tipo:"disciplina", tesi:"I processi psichici sono riconducibili a riflessi, cioè a processi fisiologici elementari." }
  ],
  precursori:[
    { nome:"Ivan Sečenov", provenienza:"Fisiologia", apporto:"Autore de «I riflessi del cervello»: i processi psichici sono riconducibili a riflessi cerebrali" }
  ],
  oggetto:{ formula:"I <strong>riflessi</strong>. I processi psichici sono <strong>riducibili a riflessi</strong>, cioè a processi puramente fisiologici ed elementari.",
    glossa:"<strong>Che cos'è un riflesso</strong>: un meccanismo di connessione fra due o più neuroni — uno in input e uno in output — che riceve uno stimolo e produce una risposta. Caratteristica distintiva: l'<strong>automaticità</strong>, cioè avviene e non è controllabile volontariamente (esempio: il riflesso patellare).<br><strong>Due tipi</strong>: i riflessi <strong>spinali</strong> hanno sede nel midollo spinale e non prevedono consapevolezza; i riflessi <strong>cerebrali</strong> prevedono stazioni del circuito nel cervello e mediano comportamenti leggermente più complessi, ma sempre semplici. La distinzione è ciò che consente di estendere il modello a comportamenti meno elementari." },
  metodo:{ formula:"<strong>Sperimentale rigoroso, su animali</strong>: misura di secrezioni salivari e gastriche in condizioni controllate.",
    glossa:"È il punto su cui si sbaglia più spesso: Pavlov non è meno scientifico dei tedeschi. Lavora in un laboratorio di fisiologia e vince il <strong>Nobel nel 1904</strong>.",
    vincoli:[] },
  teorie:[
    { nome:"Teoria dei riflessi condizionati (1902)", enunciato:"I <strong>riflessi condizionati</strong> — quelli che si attivano anche di fronte a stimoli che in natura non li provocano — costituiscono una <strong>forma elementare di apprendimento</strong>, fondata sull'<strong>associazione fra due stimoli</strong>.",
      glossa:"Tre elementi nella formula, e servono tutti e tre: è <strong>apprendimento</strong>, è <strong>elementare</strong>, il meccanismo è l'<strong>associazione fra due stimoli</strong>. Estesa poi all'uomo con i <strong>riflessi condizionati verbali</strong>." }
  ],
  esponenti:[
    { nome:"Ivan Petrovič Pavlov", anni:"1849-1936", ruolo:"Massimo esponente · Nobel 1904", luogo:"Russia",
      chiE:"Fisiologo, non psicologo. È uno dei due <strong>precursori diretti del comportamentismo</strong>. Il Nobel è per gli studi sulla <strong>digestione</strong>: la scoperta che interessa la psicologia arriva come sottoprodotto di una ricerca su tutt'altro.",
      haFatto:["Studia le <strong>secrezioni salivari e gastriche</strong> di cani affamati esposti al cibo.","Osserva che gli animali salivano anche alla <strong>sola vista dell'inserviente senza cibo</strong>, e trasforma l'osservazione in oggetto di studio sistematico.","Formula la <strong>teoria dei riflessi condizionati</strong> (1902).","Estende gli esperimenti dall'animale all'uomo con i <strong>riflessi condizionati verbali</strong>."],
      teorie:[{ nome:"Condizionamento classico", enunciato:"Si associano <strong>due stimoli</strong>; i comportamenti coinvolti sono <strong>passivi</strong>, cioè riflessi automatici e inconsapevoli. Da distinguere dal condizionamento operante di Skinner." }],
      esperimenti:[],
      nota:"È un <strong>precursore</strong> e non un comportamentista: resta un fisiologo, parla di riflessi e circuiti nervosi, non costruisce una teoria psicologica generale. Il comportamentismo prende il suo paradigma sperimentale e gliene dà un uso che lui non aveva previsto." }
  ],
  esperimenti:[
    { nome:"Il riflesso condizionato della salivazione", disegno:["Cani deprivati di cibo, in condizioni di misura controllata delle secrezioni salivari.","Presentazione ripetuta del cibo, che provoca naturalmente la salivazione.","Presenza costante dell'inserviente che porta il cibo: l'associazione cibo-inserviente si ripete molte volte.","Presentazione del solo inserviente, senza cibo."],
      risultato:"Gli animali salivano alla <strong>sola vista dell'inserviente</strong>: il riflesso si attiva davanti a uno stimolo che <strong>in natura non lo provoca</strong>.",
      significato:"L'associazione ripetuta fra due stimoli produce una <strong>forma elementare di apprendimento</strong>. È il paradigma sperimentale che il comportamentismo erediterà per intero, e su cui Watson costruirà il condizionamento della paura nel piccolo Albert." }
  ],
  validita:{
    merito:"Acquisizioni <strong>tuttora valide</strong> sull'apprendimento. Fornisce al comportamentismo il suo paradigma sperimentale principale.",
    limite:"Riduzionismo: i processi psichici complessi non si lasciano ricondurre a riflessi. È esattamente l'obiezione che muoverà Vygotskij dopo il 1917.",
    esito:"Confluisce nel comportamentismo come precursore; viene superata in Russia dalla scuola storico-culturale." },
  precorre:[
    { nome:"Comportamentismo", come:"<strong>precursore diretto</strong>, insieme a Thorndike. Minimo comune denominatore: entrambi studiano l'<strong>apprendimento</strong> e sperimentano <strong>sugli animali</strong> → la psicologia comparata diventa metodo elettivo" }
  ],
  formule:[
    "I riflessi condizionati costituiscono una forma elementare di apprendimento fondata sull'associazione fra due stimoli."
  ],
  errori:[
    { no:"«Le scuole russe erano isolate dalle idee occidentali»", si:"Sono <strong>collaterali</strong> in senso <strong>geografico e istituzionale</strong>: fuori dall'asse Germania-America. Nulla di più" },
    { no:"«Pavlov non era scientifico»", si:"È <strong>pienamente sperimentale</strong>: Nobel 1904" },
    { no:"Attribuire il Nobel ai riflessi condizionati", si:"Il Nobel è per la <strong>digestione</strong>" },
    { no:"Enunciare la teoria perdendo un elemento", si:"Servono tutti e tre: <strong>apprendimento</strong>, <strong>elementare</strong>, <strong>associazione fra due stimoli</strong>" }
  ]
});

/* ---------- F2.7 — STORICO-CULTURALE ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S207", tipo:"scuola", nome:"La scuola storico-culturale",
  identificazione:{ anno:"1917 → anni '50", luogo:"Russia", lezione:"L01", capitolo:"C08",
    unaRiga:"Seconda scuola russa, dopo lo spartiacque della rivoluzione. Sposta l'attenzione dai processi semplici alle funzioni complesse e alla dimensione sociale." },
  nasceDa:{ problema:"La rivoluzione bolscevica del 1917 cambia il quadro culturale e i vincoli entro cui si fa scienza. La riflessologia, che studia comportamenti semplici, non risponde più alle esigenze della nuova società.",
    formula:"L'esigenza è duplice, in parte teorica e in parte imposta dal regime: <strong>adattare la scienza psicologica ai principi della nuova società russa</strong> — marxismo e materialismo — e studiare le <strong>funzioni complesse</strong> anziché i riflessi." },
  radici:[
    { nome:"Marxismo e materialismo", tipo:"filosofia politica", tesi:"La coscienza è determinata dalle condizioni materiali e sociali dell'esistenza." }
  ],
  precursori:[
    { nome:"La rivoluzione del 1917", provenienza:"Contesto storico-politico", apporto:"Impone il quadro entro cui la nuova psicologia deve costituirsi" }
  ],
  oggetto:{ formula:"Le <strong>funzioni complesse</strong> della mente e la <strong>dimensione sociale</strong> dell'essere umano, in particolare il <strong>linguaggio</strong>.",
    glossa:"Lo spostamento va formulato come tale: <em>dai</em> processi semplici — contenuti di coscienza, associazioni elementari come i riflessi condizionati — <em>alle</em> funzioni complesse, che si sviluppano a seconda della società in cui l'individuo vive." },
  metodo:{ formula:"Osservativo e teorico, non sperimentale in senso stretto.",
    glossa:"È il punto più debole della scuola sul piano metodologico, e la ragione per cui viene ricordata soprattutto per le sue tesi.",
    vincoli:[] },
  teorie:[
    { nome:"Sviluppo psichico e sviluppo socio-economico", enunciato:"Lo sviluppo della psiche è <strong>connesso agli stadi dello sviluppo socio-economico</strong>: più una società è culturalmente ricca, prestigiosa dal punto di vista economico e quindi stimolante, più l'essere umano sviluppa <strong>funzioni mentali complesse</strong>, che ne ricalcano l'<em>habitus</em>.",
      glossa:"È la tesi che dà il nome alla scuola: la dimensione è <strong>storica</strong> perché riguarda gli stadi storici dello sviluppo socio-economico." },
    { nome:"Primato del linguaggio", enunciato:"Il <strong>linguaggio</strong> è l'<strong>espressione principale della vita psichica umana</strong> ed è <strong>alla base dei processi di coscienza</strong>.",
      glossa:"Non è un veicolo neutro del pensiero: lo <strong>struttura</strong>. È l'elemento che collega Vygotskij al cognitivismo." }
  ],
  esponenti:[
    { nome:"Lev Semënovič Vygotskij", anni:"1896-1934", ruolo:"Massimo esponente", luogo:"Russia",
      chiE:"Uno dei tre <strong>precursori del cognitivismo</strong>. La sua importanza va motivata con <strong>due ragioni</strong>, e darne una sola dimezza la risposta.",
      haFatto:["Sposta l'attenzione dai processi semplici alla <strong>dimensione sociale</strong> e alle <strong>funzioni complesse</strong> della mente.","Critica lo studio dei comportamenti semplici come i riflessi condizionati — critica in parte convinta, in parte obbligata dal regime.","Formula la tesi degli <strong>stadi dello sviluppo socio-economico</strong>.","Attribuisce al <strong>linguaggio</strong> il ruolo di base dei processi di coscienza."],
      teorie:[
        { nome:"Le due ragioni della sua importanza", enunciato:"<strong>1.</strong> Mostra come il <strong>pensiero scientifico stesso possa risentire della società</strong> in cui si sviluppa — ragione epistemologica. <strong>2.</strong> È <strong>precursore del cognitivismo</strong>, l'ultima scuola di pensiero veramente a sé stante — ragione storica." }
      ],
      esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"È il caso più chiaro del corso di come i fondamenti epistemologici di una scuola possano dipendere dal <strong>contesto sociale</strong> in cui nasce. E anticipa la mediazione sociale e linguistica dei processi cognitivi.",
    limite:"Impianto metodologico debole; la produzione di Vygotskij è interrotta dalla morte precoce (1934) e a lungo osteggiata.",
    esito:"Confluisce nel cognitivismo come uno dei tre precursori." },
  precorre:[
    { nome:"Cognitivismo", come:"<strong>precursore</strong>, insieme a Tolman e Hebb: la mediazione sociale e linguistica dei processi mentali" }
  ],
  formule:[
    "Lo sviluppo della psiche è connesso agli stadi dello sviluppo socio-economico.",
    "Il linguaggio è l'espressione principale della vita psichica umana ed è alla base dei processi di coscienza."
  ],
  errori:[
    { no:"«Scuola socio-culturale»", si:"Si chiama <strong>storico</strong>-culturale: la tesi riguarda gli stadi <em>storici</em> dello sviluppo socio-economico" },
    { no:"Confonderla con la psicologia socioculturale contemporanea", si:"Quella è un approccio della <strong>L03</strong> che affianca le neuroscienze: epoca, luogo e impianto sono diversi" },
    { no:"Dare una sola delle due ragioni", si:"Servono <strong>entrambe</strong>: epistemologica e storica" }
  ]
});

/* ---------- F2.8 — PSICOLOGIA DINAMICA ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S208", tipo:"scuola", nome:"La psicologia dinamica (psicoanalisi)",
  identificazione:{ anno:"fine '800 — inizio '900", luogo:"Austria (Vienna); tappa decisiva a Parigi", lezione:"L01", capitolo:"C09",
    unaRiga:"L'unica scuola del corso che non nasce in ambiente accademico: è «collaterale» in senso epistemologico, non geografico." },
  nasceDa:{ problema:"In Austria i pazienti con disturbi somatici privi di base organica erano trascurati, perché non c'era una causa organica da curare. Nessuna teoria rendeva conto di sintomi eterogenei — fisici e psichici insieme — senza lesione.",
    formula:"Nasce dalla <strong>sistemazione teorica di esperienze cliniche</strong>: il trattamento con tecniche ipnotiche di pazienti affetti da <strong>nevrosi isterica</strong>." },
  radici:[
    { nome:"Pratica clinica", tipo:"origine", tesi:"La conoscenza deriva dall'osservazione del caso singolo, non dall'esperimento controllato." },
    { nome:"Metodo razionalista", tipo:"metodo", tesi:"Si costruiscono teorie coerenti a partire da osservazioni cliniche, per via deduttiva, senza verifica empirica." }
  ],
  precursori:[
    { nome:"Jean-Martin Charcot", provenienza:"Neurologia, Parigi", apporto:"L'<strong>ipnosi</strong>: sotto ipnosi riemergono contenuti inconsapevoli e il sintomo sparisce. Da qui l'intuizione dell'inconscio" },
    { nome:"Josef Breuer", provenienza:"Medicina, Vienna", apporto:"La collaborazione clinica da cui nasce il metodo psicoanalitico" }
  ],
  oggetto:{ formula:"Le <strong>istanze psichiche</strong> e le loro <strong>relazioni dinamiche</strong>.",
    glossa:"Il termine «<strong>dinamica</strong>» fa riferimento a una <strong>relazione mobile fra le parti funzionali della mente</strong>: inconscio, preconscio e conscio non sono compartimenti stagni, interagiscono. I contenuti si spostano fra i livelli, vengono respinti, premono per emergere — ed è questo movimento a dare il nome alla scuola." },
  metodo:{ formula:"<strong>Metodo psicoanalitico</strong>, abbandonata l'ipnosi: quattro vie d'accesso all'inconscio.",
    glossa:"Ciò che accomuna le quattro vie: si accede all'inconscio <strong>solo indirettamente</strong>, attraverso ciò che sfugge al controllo del soggetto. È coerente con la definizione dell'oggetto — ed è anche il motivo per cui il metodo non è verificabile, perché l'interpretazione non ha criterio esterno di controllo.",
    vincoli:[
      "<strong>Libere associazioni</strong>: associazioni apparentemente illogiche che rivelerebbero materiale inconscio.",
      "<strong>Interpretazione dei sogni</strong>: il sogno ha un contenuto <em>latente</em> che va reso <em>manifesto</em>.",
      "<strong>Atti mancati e lapsus</strong>.",
      "<strong>Sintomi</strong>."
    ] },
  teorie:[
    { nome:"I due postulati", enunciato:"<strong>1.</strong> Un'<strong>unità di funzionamento mente-corpo</strong>. <strong>2.</strong> Una <strong>pluralità di livelli di funzione mentale</strong>: inconscio, preconscio, conscio.",
      glossa:"Il primo postulato serve a spiegare come un conflitto psichico possa produrre un sintomo corporeo. Il secondo articola la mente su più piani. <strong>[slide]</strong> In una fase successiva si affianca la seconda topica: <strong>Es, Io, Super-Io</strong>. <em>Da non confondere con i due <strong>assunti fondamentali</strong>, che sono i risultati per cui la teoria viene ricordata.</em>" },
    { nome:"Il conflitto", enunciato:"Il sintomo va indagato a livello <strong>inconscio</strong>, dove risiedono <strong>pulsioni</strong> inaccessibili alla coscienza perché inaccettabili. Il conflitto si genera fra <strong>principio di piacere</strong> — il bisogno di soddisfare il piacere interno — e <strong>principio di realtà</strong> — il necessario confronto con il mondo reale che spesso lo impedisce.",
      glossa:"La prassi terapeutica ne discende direttamente: risoluzione del conflitto portando alla luce i contenuti inconsci." },
    { nome:"Primo assunto fondamentale", enunciato:"<strong>Continuità fra normalità e patologia mentale</strong>: gli stessi processi spiegano il lapsus quotidiano e il sintomo clinico. Non una frattura ma un <em>continuum</em>.",
      glossa:"La conseguenza è enorme: se normalità e patologia sono un continuum, una teoria costruita sui pazienti dice qualcosa su tutti. È così che una teoria clinica diventa una <strong>teoria generale della personalità</strong>." },
    { nome:"Secondo assunto fondamentale", enunciato:"<strong>Ruolo centrale dell'inconscio</strong> — entità <strong>non osservabile direttamente</strong> — nel <strong>modulare l'attività conscia</strong>.",
      glossa:"Non è un magazzino inerte di ricordi dimenticati: è una forza che agisce continuamente su ciò di cui siamo consapevoli." }
  ],
  esponenti:[
    { nome:"Sigmund Freud", anni:"1856-1939", ruolo:"Caposcuola, fondatore e di fatto unico esponente", luogo:"Vienna",
      chiE:"Medico austriaco. Il suo percorso biografico spiega la teoria: non è aneddotico.",
      haFatto:["Si reca a <strong>Parigi</strong> perché in Austria i pazienti con disturbi senza base organica erano trascurati.","Incontra <strong>Charcot</strong>, che li trattava con l'<strong>ipnosi</strong>: riportando alla consapevolezza contenuti inconsapevoli, il sintomo spariva. Da qui l'intuizione decisiva — <strong>l'inconscio non è postulato per ragioni filosofiche, è inferito da un fatto clinico</strong>.","Torna in Austria, collabora con <strong>Breuer</strong> ed elabora il <strong>metodo psicoanalitico</strong>, abbandonando l'ipnosi.","Formula i due postulati, la teoria del conflitto e i due assunti fondamentali."],
      teorie:[
        { nome:"Metodo psicoanalitico", enunciato:"Libere associazioni, interpretazione dei sogni, atti mancati e lapsus, sintomi." },
        { nome:"Continuità normalità/patologia", enunciato:"Il lapsus è la cartina di tornasole di un conflitto fra pulsione inconscia e principio di realtà." }
      ],
      esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"Ha portato alla creazione di <strong>nuovi metodi di trattamento e cura</strong> dei disturbi psichici, con risvolti applicativi importanti in clinica; ha parlato <strong>per la prima volta di disturbi psichici</strong> come oggetto di una teoria; ha dato lo spunto per una teoria della personalità <strong>non soltanto patologica ma anche normale</strong>; ha influenzato fortemente tutta la psicologia successiva.",
    limite:"<strong>Fondazione epistemologica povera, quasi nulla.</strong> Tre conseguenze: non usa metodologia sperimentale, perché la conoscenza viene dalla clinica e non dal laboratorio; procede per <strong>speculazione logica</strong>; la conoscenza prodotta <strong>non è verificabile empiricamente</strong>. Rispetto al criterio oggetto-metodo-validità, la psicoanalisi ha un metodo che la riporta <em>prima</em> del 1879.",
    esito:"Il corso non la include nonostante l'anomalia: la include <strong>segnalando</strong> l'anomalia. Dopo la morte di Freud le si prendono le distanze proprio per l'eterodossia dell'approccio." },
  precorre:[
    { nome:"Psicologia clinica e psicoterapie", come:"attraverso i metodi di trattamento" },
    { nome:"Psicologia umanistica (L03)", come:"per <strong>opposizione</strong>: Maslow e Rogers rovesciano lo sguardo dalla patologia alle potenzialità positive — ma camminano sul ponte della continuità normalità/patologia costruito da Freud" }
  ],
  formule:[
    "Una relazione mobile fra le parti funzionali della mente.",
    "Il conflitto fra principio di piacere e principio di realtà."
  ],
  errori:[
    { no:"«È collaterale come le scuole russe»", si:"Le russe lo sono in senso <strong>geografico</strong>, la psicoanalisi in senso <strong>epistemologico</strong>. Usare lo stesso criterio è l'errore tipico" },
    { no:"Confondere i due postulati con i due assunti", si:"I <strong>postulati</strong> sono i punti di partenza (unità mente-corpo, pluralità dei livelli); gli <strong>assunti</strong> sono i risultati (continuità normalità/patologia, ruolo centrale dell'inconscio)" },
    { no:"Dire il limite senza il merito, o viceversa", si:"Riconoscere il difetto epistemologico e affermare l'importanza storica <strong>non è una contraddizione</strong>: è la valutazione corretta" }
  ],
  contrasto:"Il <strong>comportamentismo</strong> nasce negli stessi anni ed esclude l'inosservabile <em>perché</em> inosservabile. Freud fa l'opposto: colloca al centro della spiegazione un'entità che per definizione non è osservabile. Sono le due risposte opposte allo stesso problema — che cosa fare di ciò che non si vede."
});

/* ---------- F2.9 — GESTALT ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S209", tipo:"scuola", nome:"La psicologia della Gestalt",
  identificazione:{ anno:"1912", luogo:"Germania, poi Stati Uniti per il nazismo", lezione:"L02", capitolo:"C10",
    unaRiga:"Prima delle due reazioni a Wundt: gli rimprovera di <strong>scomporre</strong>. Motto: il tutto è più della somma delle parti." },
  nasceDa:{ problema:"Wundt scompone la coscienza in elementi irriducibili. Ma l'atto conoscitivo è <strong>unitario</strong>, e ridurlo a elementi lo distrugge.",
    formula:"L'esigenza è rifiutare l'<strong>elementismo</strong> — non il metodo sperimentale, che la Gestalt userà anzi con grande rigore." },
  radici:[
    { nome:"Immanuel Kant — innatismo", tipo:"filosofia", tesi:"<strong>Sintesi a priori</strong>: l'atto della conoscenza è un'attività <strong>unitaria e unificante</strong>, in cui la <strong>materia</strong> fornita dall'ambiente attraverso i sensi viene organizzata attraverso <strong>forme proprie della mente</strong>. Quelle forme sono le <strong>idee a priori</strong>: schemi e regole <strong>innate</strong>, possedute alla nascita da ogni individuo della specie perché <strong>geneticamente predeterminate</strong>." },
    { nome:"Franz Brentano — psicologia dell'atto", tipo:"psicologia", tesi:"L'oggetto della psicologia è l'<strong>atto</strong>, cioè un'azione compiuta nell'ambiente; ma l'atto <strong>ha senso solo in riferimento a un oggetto</strong>. L'aspetto specifico dei fenomeni psichici è l'<strong>intenzionalità</strong>: il ruolo che il soggetto assume nel compiere l'atto." }
  ],
  precursori:[
    { nome:"Kant", provenienza:"Filosofia critica", apporto:"L'ambiente fornisce la <strong>materia</strong>, la mente fornisce la <strong>forma</strong>: da qui l'innatismo gestaltico" },
    { nome:"Brentano", provenienza:"Scuola di Graz", apporto:"La distinzione <strong>fenomeno / oggetto fisico</strong>, che rende possibile il metodo della Gestalt" },
    { nome:"Christian von Ehrenfels", provenienza:"Scuola di Graz", apporto:"Il concetto di <strong>qualità gestaltica</strong> (<em>Gestaltqualität</em>, 1890) e l'esempio della melodia trasposta" },
    { nome:"Wundt", provenienza:"Lipsia", apporto:"Vi si oppone: è il bersaglio" }
  ],
  oggetto:{ formula:"L'<strong>atto unitario della percezione</strong> e le <strong>leggi innate</strong> che ne governano l'organizzazione.",
    glossa:"<strong>Fenomeno vs oggetto fisico</strong> (da Brentano): il <em>fenomeno</em> è l'oggetto <strong>per come lo percepisco</strong> ed esiste <em>dentro</em> il mio atto; l'<em>oggetto fisico</em> è quello della realtà, indipendente da me. La distinzione è decisiva perché rende possibile un esperimento rigoroso: si manipola l'<strong>oggetto fisico</strong>, misurabile in unità fisiche, e si registra il <strong>fenomeno</strong>, raccolto dal resoconto." },
  metodo:{ formula:"<strong>Metodo fenomenologico sperimentale</strong>: studiare il <strong>fenomeno percepito dai soggetti</strong> in relazione al <strong>variare degli stimoli fisici</strong> del mondo esterno.",
    glossa:"Il motivo teorico del rifiuto dell'introspezione lega il metodo alla tesi: l'atto conoscitivo <strong>unifica e sintetizza</strong>, e il suo esito va oltre le singole parti — scomporlo significa distruggere proprio ciò che si voleva studiare. <strong>La Gestalt non abbandona il metodo sperimentale: lo rafforza.</strong> Ciò che manipola è misurato con precisione; ciò che rifiuta è la scomposizione del <em>resoconto</em>, non il controllo dello <em>stimolo</em>.",
    vincoli:[
      "<strong>Prima differenza dall'introspezione — che cosa si chiede al soggetto</strong>: l'introspezione gli chiede di <em>scomporre</em> i contenuti di coscienza negli elementi più semplici; il metodo fenomenologico gli chiede di riferire il fenomeno <em>così com'è, senza scomporlo</em>.",
      "<strong>Seconda differenza — chi osserva</strong>: nell'introspezione l'osservatore <em>coincide</em> con lo sperimentatore; nel metodo fenomenologico ci sono resoconti di <em>soggetti</em> più un <em>rigoroso controllo sperimentale</em> del variare delle caratteristiche fisiche dello stimolo."
    ] },
  teorie:[
    { nome:"Leggi innate dell'organizzazione percettiva", enunciato:"L'organizzazione percettiva è regolata da <strong>leggi innate</strong>, con tre caratteristiche: <strong>indipendenti dall'esperienza</strong>, <strong>geneticamente determinate</strong>, <strong>specie-specifiche</strong>.",
      glossa:"«Specie-specifiche» significa uguali per tutti gli appartenenti alla specie: un italiano e una persona che vive nella foresta amazzonica organizzano il campo percettivo secondo le stesse leggi." },
    { nome:"Qualità gestaltica", enunciato:"La caratteristica della percezione che <strong>rimane invariata al variare degli elementi che la compongono</strong>. Garantisce l'<strong>invarianza percettiva</strong>.",
      glossa:"Esempio canonico: una melodia trasposta in un'altra tonalità resta riconoscibile benché <em>nessuna</em> nota sia più la stessa. Ciò che si conserva non sta nelle parti ma nella loro <strong>relazione</strong>." },
    { nome:"Gestalten", enunciato:"Totalità percettive organizzate <strong>dalle parti all'intero e non viceversa</strong>." },
    { nome:"Illusioni", enunciato:"<strong>Errori percettivi, di memoria o di giudizio</strong> in cui l'<strong>esperienza soggettiva differisce dalla realtà oggettiva</strong>.",
      glossa:"Sono lo stimolo elettivo dei gestaltisti perché rendono <strong>visibile l'atto di sintesi</strong>: quando percezione e realtà coincidono si può credere che la percezione sia registrazione passiva; quando divergono, l'attività costruttiva diventa osservabile nei suoi effetti. L'illusione non è un errore da correggere, è il <strong>caso sperimentale privilegiato</strong>." },
    { nome:"Insight", enunciato:"Frutto di un'<strong>improvvisa e unitaria illuminazione</strong> che <strong>ristruttura gli elementi del campo fenomenico</strong>, riorganizzandoli in una struttura globale diversa, corrispondente alla soluzione del problema.",
      glossa:"Tre elementi: <strong>improvvisa</strong>, <strong>unitaria</strong>, <strong>ristrutturazione del campo</strong>. <strong>Non procede per prove ed errori</strong>: nel condizionamento pavloviano si apprende un'<em>associazione</em> senza ristrutturazione cognitiva; nell'insight c'è <em>ristrutturazione</em>." },
    { nome:"Teoria di campo (Lewin)", enunciato:"Il comportamento si spiega <strong>in relazione alla situazione in cui si verifica</strong> — non nel passato della persona ma <strong>nel qui e ora</strong> — esaminando le <strong>interrelazioni fra persona e ambiente</strong>.",
      glossa:"Il <strong>campo di vita</strong> è un <strong>campo di forze</strong> rappresentato da <strong>vettori</strong> a valenza positiva o negativa: situazioni attuali, oggetti materiali e immateriali, ambiente sociale. La persona mantiene un <strong>equilibrio</strong>; quando si genera uno <strong>squilibrio</strong>, agisce per ripristinarlo." }
  ],
  esponenti:[
    { nome:"Max Wertheimer", anni:"1880-1943", ruolo:"Caposcuola", luogo:"Francoforte",
      chiE:"Fonda il movimento e ne conduce l'esperimento fondativo.",
      haFatto:["Studia le <strong>illusioni</strong> come stimolo elettivo per rendere visibile l'atto di sintesi.","Conduce a Francoforte l'esperimento del <strong>fenomeno phi</strong>."],
      teorie:[{ nome:"Movimento stroboscopico", enunciato:"Il movimento percepito fra due luci alternate non è nello stimolo: è prodotto dall'atto percettivo. È il «più» del motto." }],
      esperimenti:[] },
    { nome:"Wolfgang Köhler", anni:"1887-1967", ruolo:"Allievo", luogo:"Germania, poi Tenerife e USA",
      chiE:"Allievo di Wertheimer. Conduce gli esperimenti sui primati che definiscono l'apprendimento per insight.",
      haFatto:["Conduce esperimenti su <strong>scimpanzé</strong> con banane appese e strumenti familiari.","Definisce l'<strong>apprendimento per insight</strong>.","Imposta i propri esperimenti <em>contro</em> i risultati di Thorndike sui gatti nelle gabbie-problema, dove l'apprendimento appariva graduale."],
      teorie:[{ nome:"Insight", enunciato:"Illuminazione improvvisa e unitaria che ristruttura il campo fenomenico. La curva di apprendimento non è graduale, è a gradino." }],
      esperimenti:[] },
    { nome:"Kurt Koffka", anni:"1886-1941", ruolo:"Allievo", luogo:"Germania, poi USA",
      chiE:"L'altro allievo di Wertheimer, insieme a Köhler.",
      haFatto:["Contribuisce alla sistematizzazione teorica della scuola e alla sua diffusione negli Stati Uniti."],
      teorie:[], esperimenti:[] },
    { nome:"Kurt Lewin", anni:"1890-1947", ruolo:"Figura di frontiera", luogo:"Germania, poi USA (nazismo)",
      chiE:"Appartiene alla Gestalt ma applica i suoi temi a un campo che i gestaltisti non avevano mai studiato: la <strong>psicologia sociale</strong>.",
      haFatto:["Prende in prestito concetti dalla <strong>topologia</strong>, branca della matematica.","Formula la <strong>teoria di campo</strong>.","Estende il principio gestaltico alle <strong>interazioni fra individui</strong>: anche queste appartengono a un campo di forze."],
      teorie:[{ nome:"Campo di vita", enunciato:"Campo di forze vettoriali a valenza positiva o negativa; equilibrio e squilibrio ne governano il comportamento." }],
      esperimenti:[],
      nota:"Non cambia paradigma: applica il principio gestaltico a un oggetto nuovo. Come il percetto si spiega per la <strong>configurazione globale</strong> e non per gli elementi, così il comportamento si spiega per il <strong>campo</strong> e non per la storia individuale." }
  ],
  esperimenti:[
    { nome:"Il fenomeno phi (Wertheimer, Francoforte)", disegno:["Soggetto in <strong>camera oscurata</strong>.","Su uno schermo, <strong>due fessure</strong> in cui una luce si accende e si spegne <strong>alternativamente</strong>.","<strong>Variabile manipolata</strong>: l'<strong>intervallo temporale</strong> fra le due accensioni."],
      risultato:"Con intervallo <strong>molto breve</strong> il soggetto percepisce <strong>un unico stimolo luminoso in movimento</strong>, non due luci separate. Con intervallo <strong>più lungo</strong> il fenomeno non si verifica: si vedono due luci distinte.",
      significato:"È un'<strong>illusione di movimento</strong>, poi detta <strong>movimento stroboscopico</strong>. Fisicamente non c'è alcun movimento: ci sono due luci ferme che si accendono a turno. Il movimento è <strong>prodotto dall'atto percettivo</strong> — è esattamente il «più» del motto: il tutto (il movimento) non è nella somma delle parti (due lampi). Applicazione: i cartoni animati e il cinema. È l'<strong>esempio-tipo del metodo</strong>: al soggetto si chiede l'esperienza unitaria, allo sperimentatore compete il controllo rigoroso dello stimolo." },
    { nome:"L'insight negli scimpanzé (Köhler)", disegno:["Stanza con <strong>banane appese al soffitto</strong>, fuori portata.","Strumenti <strong>familiari</strong> all'animale: casse, funi, bastoni.","Osservazione del comportamento spontaneo."],
      risultato:"Dopo una fase di stallo, <strong>di punto in bianco</strong> l'animale usa gli oggetti con una <strong>funzionalità diversa da quella originaria</strong>: impila le casse, ci sale sopra, raggiunge la banana.",
      significato:"La cassa non cambia; cambia il suo <strong>posto nella configurazione</strong>, da oggetto su cui sedersi a gradino. È la ristrutturazione del campo fenomenico, e <strong>non</strong> un apprendimento per prove ed errori." },
    { nome:"Le figure ambigue (esempi della lezione)", disegno:["<strong>«La nuora e la suocera»</strong>: immagine ambigua presente sul libro di testo.","<strong>Il volto composto di natura morta</strong>: opera conservata in un museo di Washington."],
      risultato:"Nella prima si vedono alternativamente una giovane donna di profilo e una donna anziana, ed è <strong>impossibile vederle contemporaneamente</strong>. Nella seconda si vede prima il volto, poi i dettagli (uva, rami, fiori); <strong>ribaltando l'immagine il volto scompare</strong>.",
      significato:"Gli stessi elementi fisici — una riga, una curva — <strong>assumono valenza diversa a seconda del percetto sotto attenzione</strong>: la riga che è il mento della giovane è il naso dell'anziana. L'atto percettivo <strong>sintetizza modificando</strong> i singoli elementi, non si limita a sommarli." }
  ],
  validita:{
    merito:"Dimostra sperimentalmente che la percezione è <strong>organizzazione attiva</strong> e non registrazione. Le sue leggi restano <strong>acquisite alla psicologia della percezione</strong>, dove sono tuttora insegnate.",
    limite:"Come scuola non produce un programma di ricerca esteso oltre la percezione; l'emigrazione forzata degli anni Trenta ne disperde il nucleo.",
    esito:"<strong>Si esaurisce</strong> come scuola, ma le leggi restano. Lewin ne porta i principi nella psicologia sociale." },
  precorre:[
    { nome:"Psicologia della percezione", come:"le leggi dell'organizzazione percettiva restano il nucleo dell'insegnamento contemporaneo (L16-L17)" },
    { nome:"Psicologia sociale", come:"attraverso <strong>Lewin</strong> e la teoria di campo" },
    { nome:"Psicologia dell'apprendimento", come:"attraverso la contrapposizione <strong>insight / prove ed errori</strong> (L18)" }
  ],
  formule:[
    "Il tutto è più della somma delle parti.",
    "La materia fornita dai sensi è organizzata attraverso forme proprie della mente.",
    "La caratteristica della percezione che rimane invariata al variare degli elementi che la compongono.",
    "Un'improvvisa e unitaria illuminazione che ristruttura gli elementi del campo fenomenico."
  ],
  errori:[
    { no:"«La Gestalt abbandona il metodo sperimentale»", si:"Lo <strong>rafforza</strong>: rifiuta la scomposizione del resoconto, non il controllo dello stimolo" },
    { no:"Enunciare la differenza con l'introspezione su una sola dimensione", si:"Sono <strong>due</strong>: che cosa si chiede al soggetto, e chi osserva" },
    { no:"Descrivere il fenomeno phi senza la variabile manipolata", si:"La variabile è l'<strong>intervallo temporale</strong> fra le due accensioni" },
    { no:"«L'insight procede per prove ed errori»", si:"<strong>No</strong>: è ristrutturazione improvvisa e unitaria del campo fenomenico" }
  ]
});

/* ---------- F2.10 — COMPORTAMENTISMO ---------- */
PGE.schede.fascicoli[1].schede.push({
  id:"S210", tipo:"scuola", nome:"Il comportamentismo",
  identificazione:{ anno:"1913 → anni '50", luogo:"Stati Uniti", lezione:"L02", capitolo:"C11",
    unaRiga:"Seconda reazione a Wundt, opposta alla Gestalt: gli rimprovera di <strong>studiare</strong> l'interiorità. Attraverso tre fasi produce per via interna il proprio superamento." },
  nasceDa:{ problema:"I <strong>contenuti interni della coscienza</strong> sono impossibili da osservare direttamente e da misurare obiettivamente. Perciò tutti i tentativi precedenti di applicare il metodo scientifico ai fenomeni psicologici erano stati <strong>nulli</strong>.",
    formula:"Non si dice che Wundt scomponesse male: si dice che studiava un oggetto <strong>non studiabile</strong>. La conseguenza è radicale — non si corregge il metodo, <strong>si cambia l'oggetto</strong>." },
  radici:[
    { nome:"John Locke — empirismo", tipo:"filosofia", tesi:"Alla nascita la mente è una <strong><em>tabula rasa</em></strong>, una lavagna bianca su cui l'esperienza scrive: tutto ciò che è nella mente è frutto dell'esperienza, <strong>nulla è innato</strong>. È l'<strong>opposto esatto</strong> dell'innatismo kantiano che fonda la Gestalt." }
  ],
  precursori:[
    { nome:"Edward Thorndike", provenienza:"Funzionalismo americano", apporto:"<strong>Legge dell'effetto</strong>: più un comportamento produce un effetto positivo, più ha probabilità di essere replicato" },
    { nome:"Ivan Pavlov", provenienza:"Riflessologia russa", apporto:"<strong>Condizionamento classico</strong>: l'esposizione ad associazioni fra stimoli produce apprendimento; si condizionano riflessi automatici e inconsapevoli" },
    { nome:"— minimo comune denominatore", provenienza:"", apporto:"<strong>1.</strong> Entrambi ricercano nell'ambito dell'<strong>apprendimento</strong>, tema cardine dei comportamentisti. <strong>2.</strong> Entrambi sperimentano <strong>sugli animali</strong> → la <strong>psicologia comparata</strong> diventa metodo elettivo. Vengono da tradizioni diverse e non si sono influenzati: che convergano è ciò che rende il comportamentismo possibile" }
  ],
  oggetto:{ formula:"Il <strong>comportamento manifesto</strong>, in termini di <strong>associazioni stimolo-risposta</strong>. È una psicologia <strong>integralmente obiettiva</strong>.",
    glossa:"<strong>Schema S-R</strong>: lo <em>stimolo</em> è il mondo fisico esterno, l'input al comportamento; la <em>risposta</em> è il comportamento osservabile messo in atto dal soggetto. Si misurano <strong>solo input e output</strong>: ciò che sta in mezzo non si indaga.<br><strong>La <em>black box</em></strong>: l'organismo è una scatola nera in cui non è possibile entrare. Non si nega che dentro accada qualcosa — si nega che sia <strong>oggetto di scienza</strong>." },
  metodo:{ formula:"<strong>Sperimentale rigoroso</strong>, in <strong>laboratorio</strong> e <strong>sugli animali</strong>, perché sugli animali è possibile ogni manipolazione.",
    glossa:"<strong>Critica all'introspezione</strong>: non è scientifica perché <strong>l'osservatore coincide con l'osservato</strong>, e questo immette soggettività nel disegno sperimentale. È una critica diversa dalle due che avevano già demolito lo strutturalismo dall'interno — retrospezione e incoerenza: questa colpisce il <strong>disegno sperimentale</strong>.",
    vincoli:[] },
  teorie:[
    { nome:"Le tre posizioni epistemologiche di Watson", enunciato:"<strong>Molecolarismo</strong>: scompone il comportamento manifesto in <strong>semplici associazioni S-R</strong> — l'analogo degli «atomi della mente» di Wundt, applicato al comportamento. <strong>Perifericalismo</strong>: le cause del comportamento si indagano al più nell'attività di <strong>muscoli e nervi periferici</strong>, senza postulare l'intervento del <strong>sistema nervoso centrale</strong>. <strong>Ambientalismo</strong>: l'<strong>input ambientale</strong> ha rilevanza decisiva nella messa in atto del comportamento.",
      glossa:"Due osservazioni. Il <strong>molecolarismo è un paradosso</strong>: Watson rimprovera a Wundt l'<em>oggetto</em>, non il metodo di analisi, e riproduce sul comportamento la stessa mossa elementistica — da questo punto di vista è <em>meno</em> lontano da Wundt di quanto lo sia la Gestalt. Il <strong>perifericalismo è la posizione che invecchia peggio</strong>, ed è esattamente quella che Hebb rovescerà." },
    { nome:"Le tre fasi", enunciato:"<strong>Comportamentismo classico</strong> (1913 →, Watson): S-R rigido, nessuna variabile interna. <strong>Neocomportamentismo</strong> (Hull, Tolman; a parte Skinner): si postula una <strong>variabile interveniente</strong>, l'organismo → <strong>S-O-R</strong>. <strong>Cenocomportamentismo</strong> (anni '50, Hebb): le variabili interne diventano <strong>attività del SNC</strong> → nasce l'<strong>unità mente-cervello</strong>.",
      glossa:"L'evoluzione delle tre fasi corrisponde a un'<strong>evoluzione epistemologica</strong>: riaffiora progressivamente l'attenzione alla componente interiore non osservabile. In una riga: «il comportamentismo comincia vietando di guardare dentro la scatola nera e finisce descrivendo che cosa c'è dentro — prima una variabile interveniente, poi una rappresentazione, poi un circuito neuronale. Il cognitivismo non lo sconfigge dall'esterno: ne è l'esito»." },
    { nome:"La catena della pulsione (Hull)", enunciato:"<strong>Condizione di bisogno</strong> (l'organismo richiede glucosio) → <strong>tensione</strong> → <strong>spinta a ripristinare l'equilibrio</strong> → <strong>comportamento</strong> (mangiare).",
      glossa:"Il comportamentista classico avrebbe visto solo il cibo (S) e l'atto del mangiare (R). Hull dice che fra i due c'è la <strong>pulsione</strong>, ed è ciò che lo spiega: senza di essa non si capirebbe come mai lo <em>stesso</em> stimolo produca risposte diverse in momenti diversi." },
    { nome:"Apprendimento latente e mappe cognitive (Tolman)", enunciato:"<strong>Apprendimento latente</strong>: si apprende anche senza che l'apprendimento si manifesti subito in una risposta. <strong>Mappe cognitive</strong>: memorie organizzate in base alle <strong>relazioni spaziali</strong> dell'ambiente.",
      glossa:"Sono le due condizioni minime perché una psicologia della rappresentazione diventi pensabile: compare una <strong>rappresentazione interna strutturata</strong> — non una tensione generica come in Hull, ma un modello dell'ambiente — e cade il legame necessario fra apprendimento e prestazione." },
    { nome:"Condizionamento operante (Skinner)", enunciato:"Il comportamento è <strong>forgiato dalle conseguenze che esso stesso produce sull'ambiente</strong>. Si chiama «operante» perché il soggetto <strong>opera attivamente</strong> nell'ambiente.",
      glossa:"<strong>Classico vs operante</strong> — <em>Pavlov</em>: comportamenti <strong>passivi</strong> (riflessi automatici, inconsapevoli); si associano <strong>due stimoli</strong>. <em>Skinner</em>: comportamenti <strong>attivi</strong>; si associano un <strong>comportamento</strong> e la sua <strong>conseguenza</strong>.<br><strong>Rinforzo</strong>: la <strong>conseguenza del comportamento sull'ambiente</strong>; determina se il comportamento avrà maggiori o minori probabilità di essere ripetuto.<br><strong>[N.d.R.]</strong> Nel sistema tecnico di Skinner il <strong>rinforzo aumenta sempre</strong> la risposta (positivo = si aggiunge un gradito; negativo = si toglie uno sgradito); ciò che la <strong>riduce</strong> è la <strong>punizione</strong>." },
    { nome:"Legge di Hebb e assemblee cellulari", enunciato:"<strong>Legge di Hebb</strong>: se <strong>due neuroni</strong> scaricano insieme si <strong>potenziano reciprocamente</strong> e tenderanno ad attivarsi insieme anche in seguito. <strong>Assemblee cellulari</strong>: <strong>configurazioni ampie</strong>, circuiti diffusi nel cervello, che una volta stabilite si rafforzano e stanno <strong>alla base dell'apprendimento</strong>.",
      glossa:"La differenza di <strong>scala</strong> va tenuta ferma: la legge riguarda due singoli neuroni, le assemblee riguardano configurazioni ampie. La legge di Hebb è alla base delle teorie moderne della <strong>plasticità sinaptica</strong>." }
  ],
  esponenti:[
    { nome:"John Broadus Watson", anni:"1878-1958", ruolo:"Caposcuola · fase classica (1913)", luogo:"Stati Uniti",
      chiE:"Fonda il comportamentismo. L'oggetto di studio <strong>non può essere psichico</strong>: dev'essere ciò che è osservabile.",
      haFatto:["Definisce il comportamentismo come <strong>psicologia integralmente obiettiva</strong>.","Formula le <strong>tre posizioni epistemologiche</strong>: molecolarismo, perifericalismo, ambientalismo.","Individua <strong>tre argomenti</strong> di studio: <strong>apprendimento</strong> (in primo luogo), <strong>emozioni</strong>, <strong>pensiero</strong>.","Conduce l'esperimento del <strong>piccolo Albert</strong>, con Rosalie Rayner.","Sostiene la <strong>tesi radicale dell'ambientalismo</strong>: dati una dozzina di bambini sani e un ambiente organizzato a modo suo, potrebbe formare uno qualunque di loro a diventare qualsiasi tipo di specialista — o un criminale — a prescindere da talenti, inclinazioni e origini."],
      teorie:[
        { nome:"Molecolarismo", enunciato:"Scomposizione del comportamento manifesto in semplici associazioni S-R." },
        { nome:"Perifericalismo", enunciato:"Le cause si indagano al più in muscoli e nervi periferici: non si postula il SNC." },
        { nome:"Ambientalismo", enunciato:"Gli esseri umani sono il prodotto delle loro esperienze di apprendimento." }
      ],
      esperimenti:[] },
    { nome:"Clark Hull", anni:"1884-1952", ruolo:"Caposcuola · neocomportamentismo", luogo:"Stati Uniti",
      chiE:"Mette in discussione il divieto di occuparsi di ciò che sta fra stimolo e risposta: la scatola nera non viene aperta, ma si ammette che contenga qualcosa che fa differenza.",
      haFatto:["Postula la <strong>variabile interveniente</strong>: lo schema S-R diventa <strong>S-O-R</strong>.","Introduce le <strong>pulsioni</strong> come variabili riferite a processi interni."],
      teorie:[{ nome:"Pulsione", enunciato:"Bisogno → tensione → spinta a ripristinare l'equilibrio → comportamento." }],
      esperimenti:[] },
    { nome:"Edward Chace Tolman", anni:"1886-1959", ruolo:"Neocomportamentista · figura di frontiera", luogo:"Stati Uniti",
      chiE:"La lezione lo definisce «estremamente utile per lo sviluppo del cognitivismo». È uno dei <strong>tre precursori del cognitivismo</strong>.",
      haFatto:["Sostiene l'esistenza di <strong>rappresentazioni mentali interne</strong> fra S e R.","Introduce l'<strong>apprendimento latente</strong>.","Introduce le <strong>mappe cognitive</strong>: memorie organizzate in base alle relazioni spaziali dell'ambiente.","Descrive una forma di <strong>apprendimento cognitivo</strong>, non più semplice come quello degli altri comportamentisti."],
      teorie:[
        { nome:"Apprendimento latente", enunciato:"Si può sapere senza mostrarlo: cade il legame necessario fra apprendimento e prestazione." },
        { nome:"Mappe cognitive", enunciato:"Rappresentazione interna strutturata dell'ambiente, non una tensione generica." }
      ],
      esperimenti:[] },
    { nome:"Burrhus Frederic Skinner", anni:"1904-1990", ruolo:"La voce fuori dal coro", luogo:"Stati Uniti",
      chiE:"<strong>Cronologicamente</strong> sta dentro il neocomportamentismo. <strong>Teoricamente</strong> vi si oppone: <strong>ritorna all'ortodossia watsoniana e la estremizza</strong>. Rispetto alle acquisizioni neocomportamentiste, la sua linea di ricerca <strong>fa un passo indietro</strong>.",
      haFatto:["Afferma che <strong>nessun resoconto di ciò che accade dentro il corpo, per quanto esauriente, potrà mai spiegare il comportamento</strong> — non «non esiste», ma «non spiega».","Formula il <strong>condizionamento operante</strong>.","Costruisce la <strong>Skinner Box</strong>.","Definisce il <strong>rinforzo</strong> in modo puramente <strong>funzionale</strong>, per i suoi effetti osservabili sulla frequenza della risposta — a differenza del lessico <em>mentalistico</em> di Thorndike, che parlava di stati soddisfacenti.","Sviluppa <strong>tre applicazioni</strong>: addestramento animale; <strong>macchine per l'apprendimento</strong> (scomporre un problema complesso in problemi semplici, dove la risoluzione di ciascuno è essa stessa un rinforzo positivo, procedendo per difficoltà crescente); <strong>terapia comportamentale</strong> delle fobie, per decondizionamento.","Sostiene <strong>due derive</strong> che gli valgono critiche internazionali: il <strong>libero arbitrio è un'illusione</strong>, e l'ideazione di una <strong>società utopistica</strong> in cui il comportamento è controllato dall'accorta applicazione di programmi di rinforzo."],
      teorie:[{ nome:"Condizionamento operante", enunciato:"Si associano comportamento e conseguenza; il soggetto opera attivamente sull'ambiente." }],
      esperimenti:[],
      nota:"<strong>Legge dell'effetto vs condizionamento operante</strong>, su tre dimensioni. <em>Statuto</em>: una <strong>legge</strong> contro un <strong>sistema teorico completo</strong>. <em>Unità di analisi</em>: <strong>connessione S-R</strong> contro <strong>relazione risposta-conseguenza</strong>. <em>Lessico</em>: <strong>mentalistico</strong> contro <strong>funzionale</strong>." },
    { nome:"Donald Olding Hebb", anni:"1904-1985", ruolo:"Figura decisiva · cenocomportamentismo", luogo:"Canada",
      chiE:"Dagli <strong>anni Cinquanta</strong>. La fase è detta anche <strong>comportamentismo cognitivista</strong>, perché i fondamenti epistemologici sono ormai molto diversi da quelli classici.",
      haFatto:["Introduce per la prima volta nella spiegazione del comportamento un <strong>modello psicofisiologico</strong>, identificando le variabili interne come <strong>attività del sistema nervoso centrale</strong>.","<strong>Per la prima volta si parla di unità mente-cervello</strong>, che nella psicologia contemporanea sarà il principale oggetto di studio.","Formula la <strong>legge di Hebb</strong>.","Amplia la legge nella <strong>teoria delle assemblee cellulari</strong>."],
      teorie:[
        { nome:"Legge di Hebb", enunciato:"Due neuroni che scaricano insieme si potenziano reciprocamente." },
        { nome:"Assemblee cellulari", enunciato:"Configurazioni globali di attivazione che, una volta stabilite, si rafforzano; stanno alla base dell'apprendimento." }
      ],
      esperimenti:[],
      nota:"<strong>Il cerchio che si chiude</strong>: nella L01 l'unità mente-cervello era il passaggio mancante che impediva l'emancipazione dalla medicina. Qui arriva — e arriva <strong>dall'interno della scuola che aveva teorizzato il perifericalismo</strong>, cioè la negazione del ruolo del SNC. È la prova più netta che l'evoluzione del comportamentismo è epistemologica, non un semplice avvicendamento di autori." }
  ],
  esperimenti:[
    { nome:"Il piccolo Albert (Watson e Rayner, 1920)", disegno:["Il bambino gioca <strong>volentieri</strong> con dei ratti bianchi da laboratorio: nessuna paura iniziale.","Watson produce <strong>rumori molto forti</strong> mentre il bambino gioca con l'animale; il rumore provoca naturalmente paura.","<strong>Associazione ripetuta</strong> rumore-animale."],
      risultato:"Il bambino impara ad <strong>avere paura dell'animale</strong>, anche in assenza del rumore.",
      significato:"È <strong>condizionamento classico pavloviano applicato all'uomo</strong>: lo stimolo neutro (il ratto), associato ripetutamente allo stimolo che provoca naturalmente la risposta (il rumore), finisce per provocarla da solo. Lo stesso schema dell'inserviente di Pavlov, con la paura al posto della salivazione. <strong>Significato teorico</strong>: anche un'<strong>emozione</strong> — non solo un riflesso fisiologico — può essere condizionata, e quindi <strong>appresa</strong>. Le emozioni entrano nel dominio dell'apprendimento.<br><strong>[N.d.R.]</strong> Nella registrazione si afferma che Albert fosse il figlio di Watson. Non è così: era un bambino di circa <strong>11 mesi non imparentato</strong> con lo sperimentatore, e l'esperimento fu condotto da <strong>Watson e Rosalie Rayner nel 1920</strong>." },
    { nome:"La Skinner Box", disegno:["Gabbia con un animale <strong>deprivato di cibo</strong>, quindi motivato.","All'interno più leve, di cui <strong>una sola</strong> collegata a un dispenser di cibo.","L'animale esplora e preme le leve a caso."],
      risultato:"Casualmente trova la leva giusta e riceve cibo — <strong>rinforzo positivo</strong>. Col tempo <strong>smette di premere a caso</strong> e preme direttamente quella leva.",
      significato:"Dimostra che il comportamento è <strong>forgiato dalle sue conseguenze</strong>: non serve un legame preesistente fra stimolo e risposta, basta che una conseguenza selezioni una risposta fra quelle emesse. È la legge dell'effetto trasformata in sistema teorico." }
  ],
  validita:{
    merito:"Impone alla psicologia lo standard dell'<strong>obiettività</strong> del dato e il metodo sperimentale rigoroso. Produce un corpo enorme di conoscenze sull'<strong>apprendimento</strong>, tuttora valide, e applicazioni cliniche ed educative.",
    limite:"Il <strong>perifericalismo</strong> — negare persino il ruolo del SNC — rende il comportamentismo classico insostenibile. E il divieto sull'interiorità si rivela troppo costoso: lo schema S-R rigido non spiega perché lo stesso stimolo produca risposte diverse.",
    esito:"<strong>Sfocia nel cognitivismo</strong>. Non viene sconfitto dall'esterno: produce per via interna il proprio superamento attraverso le tre fasi." },
  precorre:[
    { nome:"Cognitivismo", come:"ne è la <strong>filiazione diretta</strong> attraverso il cenocomportamentismo — evoluzione, non reazione" },
    { nome:"Neuroscienze", come:"attraverso <strong>Hebb</strong>: il modello psicofisiologico e la plasticità neuronale" },
    { nome:"Terapia comportamentale", come:"attraverso <strong>Skinner</strong>: il decondizionamento delle fobie" }
  ],
  formule:[
    "Una psicologia integralmente obiettiva, che analizza unicamente i comportamenti manifesti.",
    "L'introspezione non è scientifica perché l'osservatore coincide con l'osservato.",
    "Il rinforzo è la conseguenza del comportamento sull'ambiente e determina se avrà maggiori o minori probabilità di essere ripetuto.",
    "Se due neuroni scaricano insieme, si potenziano reciprocamente.",
    "Per la prima volta si parla di unità mente-cervello."
  ],
  errori:[
    { no:"Attribuire alla Gestalt la critica del comportamentismo", si:"La Gestalt rimprovera a Wundt di <strong>scomporre</strong>; il comportamentismo di <strong>studiare</strong> l'interiorità" },
    { no:"«Skinner appartiene al neocomportamentismo»", si:"<strong>Cronologicamente sì, teoricamente no</strong>: torna all'ortodossia watsoniana e la estremizza" },
    { no:"«Rinforzo negativo = punizione»", si:"Il <strong>rinforzo aumenta sempre</strong> la risposta; ciò che la riduce è la <strong>punizione</strong>" },
    { no:"Confondere legge di Hebb e assemblee cellulari", si:"La legge riguarda <strong>due neuroni</strong>, le assemblee <strong>configurazioni ampie</strong>" },
    { no:"«Skinner nega l'esistenza di pensieri e sentimenti»", si:"Afferma che <strong>non spiegano</strong> il comportamento, non che non esistano" }
  ]
});

/* =========================================================
   FASCICOLO 3 — LA PSICOLOGIA CONTEMPORANEA
   ========================================================= */
PGE.schede.fascicoli.push({
  id: "F3",
  n: "III",
  titolo: "La psicologia contemporanea",
  sottotitolo: "Dal cognitivismo alle neuroscienze e alle discipline collaterali",
  lezione: "Lezione 3",
  intro: "Stesso schema del Fascicolo II. Con un'avvertenza: dalla terza scheda in poi <strong>non si descrivono più scuole</strong> — non esiste una scuola che si chiama «mente embodied», non c'è un fondatore dell'approccio biopsicosociale, e le neuroscienze non sono una corrente di pensiero ma un insieme di metodi. Si descrive l'<strong>assetto attuale della disciplina</strong>, e dirlo esplicitamente all'esame è il segno che si è capita la differenza fra la storia delle scuole e il presente della ricerca.",
  schede: [

/* ---------- F3.1 — COGNITIVISMO ---------- */
{
  id:"S301", tipo:"scuola", nome:"Il cognitivismo",
  identificazione:{ anno:"1967 (contributi decisivi negli anni '50)", luogo:"Stati Uniti", lezione:"L03", capitolo:"C13",
    unaRiga:"L'unica scuola del corso che <strong>non nasce contro qualcuno</strong>: è la filiazione del cenocomportamentismo, per evoluzione naturale." },
  nasceDa:{ problema:"Il comportamentismo si è progressivamente ammorbidito: con Hull compare la variabile interveniente, con Tolman le rappresentazioni interne, con Hebb l'attività del SNC. Quando l'attenzione è ormai tutta rivolta ai processi interni, il divieto sull'interiorità è di fatto già caduto.",
    formula:"Non c'è contrapposizione netta nei principi epistemologici: c'è <strong>evoluzione naturale</strong>. Non serve una rivoluzione — serve un nome nuovo." },
  radici:[
    { nome:"Cenocomportamentismo (Hebb)", tipo:"scuola", tesi:"Le variabili interne sono attività del sistema nervoso centrale: l'interiorità è già dentro la spiegazione." },
    { nome:"Informatica, cibernetica, intelligenza artificiale", tipo:"tecnologia", tesi:"Una macchina può <strong>elaborare informazioni</strong>, cioè svolgere il lavoro che si riteneva proprio della mente e del cervello umani." }
  ],
  precursori:[
    { nome:"Jean Piaget", provenienza:"Psicologia evolutiva, Svizzera", apporto:"Gli errori percettivi e cognitivi nei bambini: i processi mentali <strong>si sviluppano con l'età</strong>, diventando via via più sofisticati" },
    { nome:"Noam Chomsky", provenienza:"Psicolinguistica, USA", apporto:"Contro Skinner: gli esseri umani sono <strong>biologicamente preprogrammati</strong> per apprendere il linguaggio, grazie a <strong>regole mentali</strong>" },
    { nome:"Frederic Bartlett", provenienza:"Psicologia della memoria", apporto:"<strong>Schemi cognitivi</strong> nella memoria autobiografica: la memoria è un processo <strong>costruttivo</strong>, non passivo" },
    { nome:"Donald Broadbent", provenienza:"Psicologia dell'attenzione", apporto:"<strong>Teoria del filtro attentivo</strong>: un «collo di bottiglia» seleziona rigidamente l'informazione in entrata" },
    { nome:"Vygotskij · Tolman · Hebb", provenienza:"Storico-culturale · neo · cenocomportamentismo", apporto:"I <strong>tre precursori</strong>: mediazione sociale e linguistica, rappresentazioni interne, substrato neurale. La loro eterogeneità è il punto — il cognitivismo nasce da una convergenza, non dalla vittoria di una scuola" }
  ],
  oggetto:{ formula:"I <strong>processi cognitivi</strong>: tutti i processi interni alla mente che portano all'emissione di un comportamento. È una <strong>psicologia totalmente mentalistica</strong>.",
    glossa:"Il paradosso vale la pena misurarlo: la scuola da cui il cognitivismo discende era nata dichiarando che l'interiorità <em>non è oggetto di scienza</em>; cinquant'anni dopo la sua erede diretta studia <strong>soltanto</strong> l'interiorità. Non per una sconfitta: per <strong>esaurimento interno del divieto</strong>.<br>Nella fase della scienza cognitiva l'oggetto si precisa come <strong>architettura funzionale</strong>: la <strong>struttura astratta</strong> che permette la realizzazione delle funzioni intellettive, <strong>prescindendo dalla sua base materiale</strong>." },
  metodo:{ formula:"<strong>Metodo simulativo</strong>, fondato sull'<strong>analogia mente-computer</strong>.",
    glossa:"<strong>Il pregio</strong>: dal punto di vista puramente metodologico è <strong>ineccepibile</strong>, perché fornisce un <strong>controllo assoluto di tutte le variabili</strong> — sono controllate da una macchina.<br><strong>Il salto epistemologico</strong>: i comportamentisti si erano rifiutati di analizzare concetti astratti come i processi cognitivi perché <em>non verificabili</em>. Con il computer diventa possibile <strong>verificare empiricamente qualcosa di astratto</strong>. Il divieto comportamentista non è stato confutato: è diventato <strong>tecnicamente superfluo</strong>.",
    vincoli:[
      "<strong>1.</strong> Il ricercatore formula un'<strong>ipotesi di funzionamento</strong> di una funzione cognitiva (per esempio come l'attenzione si relaziona con percezione e memoria).",
      "<strong>2.</strong> Ne costruisce un <strong>modello di funzionamento</strong>, tipicamente un diagramma di flusso.",
      "<strong>3.</strong> <strong>Implementa il modello nel computer.</strong>",
      "<strong>4.</strong> Se la simulazione produce i risultati attesi, l'ipotesi è <strong>validata</strong>; altrimenti no."
    ] },
  teorie:[
    { nome:"Metafora mente-computer", enunciato:"La mente viene assimilata a un <strong>elaboratore di informazioni</strong>. Il computer ha un hardware e vari software che mediano le funzioni; le componenti cognitive vengono disposte in un <strong>diagramma di flusso</strong> — processamenti sensoriali, percezione, attenzione, selezione delle risposte, memoria a breve e a lungo termine.",
      glossa:"L'informatica fornisce alla psicologia non solo un modello ma anche una <strong>terminologia tecnica</strong> che gli psicologi cominciano a usare." },
    { nome:"Lo span (Miller)", enunciato:"Il <strong>numero di elementi</strong> che possono essere contenuti <strong>contemporaneamente</strong> nella <strong>memoria a breve termine</strong>, cioè il magazzino che consente di manipolare l'informazione in modo <strong>consapevole</strong>.",
      glossa:"Fu una scoperta rivoluzionaria per il periodo: pone un limite <em>quantitativo</em> a una funzione mentale." },
    { nome:"Problem solving (Newell e Simon)", enunciato:"Si postula uno <strong>spazio problematico</strong> in cui si trovano vari elementi che il soggetto usa per arrivare a delle soluzioni; e le soluzioni, <strong>come nel computer</strong>, sono suscettibili di modifiche per avvicinarsi al risultato desiderato." },
    { nome:"Unità TOTE (Miller, Galanter, Pribram)", enunciato:"<strong>T</strong>est → <strong>O</strong>perate → <strong>T</strong>est → <strong>E</strong>xit. Il comportamento pianificato viene <strong>testato</strong> (funziona per la finalità?), si apportano le <strong>modifiche</strong>, si <strong>ritesta</strong>; se si è soddisfatti si <strong>esce</strong> mettendolo in atto, altrimenti si torna a <em>Operate</em>.",
      glossa:"È uno schema a <strong>feedback retroattivo</strong> modellato sul computer. <strong>Che cosa sostituisce</strong>: prende il posto della <strong>connessione S-R</strong> come unità di analisi. Al posto di un legame fisso c'è un <strong>ciclo con retroazione</strong>: il comportamento non è <em>emesso</em>, è <strong>progettato, verificato e corretto</strong>." },
    { nome:"Critica ecologica (Neisser)", enunciato:"La ricerca psicologica <strong>si è allontanata dalla realtà</strong>: non analizza i processi cognitivi come avvengono nella <strong>vita quotidiana</strong>, ma li riduce all'ambito <strong>artificiale del laboratorio</strong>. Proposta: l'<strong>approccio ecologico</strong>, che recuperi la <strong>funzione adattativa</strong> dei processi psichici e la loro modificazione grazie all'interazione con l'ambiente.",
      glossa:"La simmetria è istruttiva: il metodo simulativo è ineccepibile <em>quanto a controllo delle variabili</em>, ed è proprio per questo che perde la realtà — è così controllato da misurare qualcosa che fuori dal laboratorio non esiste. La terna oggetto-metodo-validità funziona anche qui, e stavolta è la <strong>validità ecologica</strong> a cedere. E «funzione adattativa» e «interazione con l'ambiente» sono le parole del <strong>funzionalismo</strong>: settant'anni dopo, la stessa esigenza rientra dalla porta principale." }
  ],
  esponenti:[
    { nome:"Jean Piaget", anni:"1896-1980", ruolo:"Precursore · psicologia evolutiva", luogo:"Svizzera",
      chiE:"Apre un filone di studi sugli errori percettivi e cognitivi nei bambini piccoli, e ne ricava che i processi mentali si sviluppano con l'età.",
      haFatto:["Conduce esperimenti sulla <strong>costanza percettiva</strong> nei bambini.","Deduce che la <strong>costanza della quantità</strong> è un'abilità acquisita <strong>più tardi</strong> nel tempo — e così molte altre."],
      teorie:[{ nome:"Sviluppo dei processi mentali", enunciato:"I processi mentali dei bambini si sviluppano con l'età, diventando via via più sofisticati." }],
      esperimenti:[],
      nota:"Il legame con il cognitivismo: il bambino non ha <em>meno esperienza</em> dell'adulto, ha <strong>strutture cognitive diverse</strong>. Se le stesse informazioni sensoriali producono risposte diverse a età diverse, allora fra stimolo e risposta c'è qualcosa che cambia nel tempo — ed è precisamente ciò che il comportamentismo aveva vietato di studiare." },
    { nome:"Noam Chomsky", anni:"1928", ruolo:"Precursore · figura di frontiera", luogo:"Stati Uniti",
      chiE:"Psicolinguista americano. Accende un forte dibattito con <strong>Skinner</strong> sull'acquisizione del linguaggio.",
      haFatto:["Contro la tesi di Skinner — il linguaggio come frutto del <strong>condizionamento ambientale</strong>, acquisito per esposizione ai suoni della lingua madre — sostiene che gli esseri umani hanno una <strong>predisposizione innata</strong>.","Afferma che i bambini arrivano a parlare grazie a <strong>regole mentali</strong>, possedute anche dagli adulti, che consentono di comprendere e produrre linguaggio.","Presenta la propria teoria del linguaggio al <strong>simposio del 1956</strong>."],
      teorie:[{ nome:"Predisposizione innata al linguaggio", enunciato:"<strong>Argomento decisivo</strong>: i bambini, appena cominciano a parlare, producono <strong>frasi e parole a cui non sono mai stati esposti</strong>. Un condizionamento può riprodurre solo ciò che è stato presentato; la produzione di forme nuove richiede regole generative interne." }],
      esperimenti:[],
      nota:"Chomsky contro Skinner è <strong>innatismo contro empirismo</strong>: la stessa opposizione Kant/Locke che separava Gestalt e comportamentismo, riemersa a mezzo secolo di distanza su un oggetto nuovo." },
    { nome:"Frederic Bartlett", anni:"1886-1969", ruolo:"Precursore · memoria", luogo:"Regno Unito",
      chiE:"Studia la memoria autobiografica con il vocabolario dell'elaborazione dell'informazione.",
      haFatto:["Sostiene che possediamo <strong>schemi cognitivi</strong> con cui apprendiamo nuovi elementi, che si incastrano con quelli già acquisiti.","Ne ricava che la memoria è un percorso <strong>costruttivo</strong>, e non passivo come ritenevano i comportamentisti."],
      teorie:[{ nome:"Schemi cognitivi", enunciato:"La memoria non registra: costruisce, incastrando il nuovo nel già acquisito." }],
      esperimenti:[],
      nota:"«Costruttivo e non passivo» è la stessa cosa che <strong>von Helmholtz</strong> diceva della percezione nel 1860 con l'<strong>inferenza inconscia</strong>. Il filo della costruzione attraversa tutto il corso: Helmholtz → Gestalt → Bartlett → cognitivismo.<br><strong>[N.d.R.]</strong> la registrazione rende il nome come «Bastlet»: la grafia corretta è <strong>Bartlett</strong>." },
    { nome:"Donald Broadbent", anni:"1926-1993", ruolo:"Precursore · attenzione", luogo:"Regno Unito",
      chiE:"Inaugura con i suoi allievi un filone di studi sull'attenzione con l'approccio dell'elaborazione dell'informazione.",
      haFatto:["Formula la <strong>teoria del filtro attentivo</strong>."],
      teorie:[{ nome:"Filtro attentivo", enunciato:"Nel processo di elaborazione c'è un <strong>filtro</strong>, un <strong>collo di bottiglia</strong>, in cui l'informazione in entrata subisce una <strong>selezione molto rigida</strong>, così che venga elaborata solo una piccola parte del totale." }],
      esperimenti:[],
      nota:"<strong>[N.d.R.]</strong> la registrazione rende il nome come «Bradbent» o «Broadband»: la grafia corretta è <strong>Broadbent</strong>." },
    { nome:"George Miller", anni:"1920-2012", ruolo:"Esponente", luogo:"Stati Uniti",
      chiE:"Compare due volte nella storia della scuola: al simposio del 1956 e come coautore del TOTE.",
      haFatto:["Studia la <strong>memoria a breve termine</strong> e identifica lo <strong>span</strong>.","Con <strong>Galanter</strong> e <strong>Pribram</strong> mette a punto l'<strong>unità TOTE</strong>."],
      teorie:[{ nome:"Span di memoria", enunciato:"Contemporaneamente nel magazzino a breve termine ci stanno solo pochi elementi, e soltanto quelli possono essere elaborati." }],
      esperimenti:[] },
    { nome:"Allen Newell e Herbert Simon", anni:"1927-1992 · 1916-2001", ruolo:"Esponenti", luogo:"Stati Uniti",
      chiE:"Si occupano per la prima volta di <strong>problem solving</strong>, cioè della capacità della mente umana di risolvere problemi.",
      haFatto:["Postulano l'esistenza di uno <strong>spazio problematico</strong>.","Studiano i fenomeni psichici utilizzando il modo in cui il computer elabora le informazioni."],
      teorie:[{ nome:"Spazio problematico", enunciato:"Le soluzioni sono suscettibili di modifiche successive per avvicinarsi al risultato desiderato." }],
      esperimenti:[] },
    { nome:"Ulric Neisser", anni:"1928-2012", ruolo:"Autore del manifesto · e suo primo critico", luogo:"Stati Uniti",
      chiE:"L'unica figura del corso che <strong>critica la scuola di cui aveva scritto il manifesto</strong>.",
      haFatto:["Sintetizza le scoperte di intelligenza artificiale, linguistica e psicologia evolutiva nel volume <strong><em>Cognitive Psychology</em> (1967)</strong>, considerato ufficialmente il <strong>manifesto</strong> della psicologia cognitivista.","Formula poi la <strong>critica ecologica</strong> all'approccio <strong>Human Information Processing</strong>, e si fa promotore dell'<strong>approccio ecologico</strong>."],
      teorie:[{ nome:"Approccio ecologico", enunciato:"Introdurre nel cognitivismo la funzione adattativa dei processi psichici e la loro modificazione grazie all'interazione con l'ambiente." }],
      esperimenti:[],
      nota:"<strong>Il manifesto è un collage.</strong> Neisser «non fece altro che un'opera di collage» di cose già in essere: la nascita del 1967 è una <strong>ratifica</strong>, non un inizio. Per la <strong>terza volta</strong> nel corso una scuola nasce quando qualcuno le dà un nome — dopo Titchener e dopo il manifesto funzionalista." }
  ],
  esperimenti:[
    { nome:"L'esperimento della creta (Piaget)", disegno:["Bambini di <strong>tre anni</strong>.","Due mucchietti di creta, uno più grande e uno più piccolo.","Si chiede al bambino di <strong>renderli uguali</strong>: lui sposta creta dall'uno all'altro e li pareggia — <em>fin qui il compito riesce</em>.","Piaget divide la creta di uno dei due mucchietti in <strong>tante piccole palline</strong>.","Si chiede quale porzione sia ora maggiore."],
      risultato:"Il bambino risponde: <strong>quella con più palline</strong>. Non è in grado di capire che la quantità è rimasta la stessa nonostante la divisione.",
      significato:"La <strong>costanza della quantità</strong> è un'abilità percettiva acquisita <strong>più tardi</strong> nel tempo. Per il cognitivismo: se le stesse informazioni sensoriali producono risposte diverse a età diverse, fra stimolo e risposta c'è qualcosa che cambia — ed è ciò che il comportamentismo vietava di studiare." },
    { nome:"Il simposio sulla teoria dell'informazione (1956)", disegno:["Partecipano matematici, fisici <strong>e psicologi</strong>.","Tre interventi restano nella storia."],
      risultato:"<strong>Miller</strong> presenta lo <strong>span</strong> della memoria a breve termine. <strong>Newell e Simon</strong> presentano il <strong>problem solving</strong> e lo spazio problematico. <strong>Chomsky</strong> presenta la <strong>teoria del linguaggio</strong>.",
      significato:"Nel simposio si vede la mossa che fonda la scuola: tre oggetti diversissimi — <strong>memoria, ragionamento, linguaggio</strong> — trattati con <strong>lo stesso vocabolario</strong>, quello dell'elaborazione dell'informazione. Non è la scoperta di un fatto: è l'<strong>adozione di un linguaggio comune</strong>. Le scuole nascono quasi sempre così." }
  ],
  validita:{
    merito:"Rende <strong>empiricamente verificabile</strong> ciò che era considerato inaccessibile: per la prima volta si possono testare modelli di funzionamento di processi astratti. Metodologicamente <strong>ineccepibile</strong> quanto a controllo delle variabili.",
    limite:"<strong>Scarsa validità ecologica</strong>: la ricerca si allontana dalla vita quotidiana e indaga i processi cognitivi solo in laboratorio. La critica viene dall'interno, da Neisser stesso.",
    esito:"<strong>Non tramonta.</strong> È tuttora in essere: si è soltanto <strong>allargato</strong>, ha preso un respiro diverso — la mente embodied e l'approccio biopsicosociale." },
  precorre:[
    { nome:"Scienza cognitiva", come:"modularismo e connessionismo ne sono i due filoni" },
    { nome:"Mente embodied", come:"non lo supera: lo <strong>allarga</strong>, rimettendo la mente dentro un corpo e dentro un ambiente" },
    { nome:"Neuroscienze cognitive", come:"attraverso l'approccio biopsicosociale" }
  ],
  formule:[
    "Una psicologia totalmente mentalistica.",
    "Gli esseri umani sono biologicamente preprogrammati per apprendere il linguaggio.",
    "L'architettura funzionale: la struttura astratta che permette le funzioni intellettive, prescindendo dalla sua base materiale.",
    "La ricerca psicologica si è allontanata dalla realtà."
  ],
  errori:[
    { no:"«Il cognitivismo nasce come reazione al comportamentismo»", si:"È la <strong>filiazione</strong> del cenocomportamentismo: <strong>evoluzione naturale</strong>, non reazione. È l'unica scuola che non nasce contro qualcuno" },
    { no:"«Neisser ha fondato il cognitivismo»", si:"Ne ha scritto il <strong>manifesto</strong>, che è «un'opera di collage» — ed è poi <strong>lui stesso</strong> a criticarlo" },
    { no:"«Il metodo simulativo era metodologicamente debole»", si:"Era <strong>ineccepibile</strong>: il limite è di <strong>validità ecologica</strong>, non di controllo" },
    { no:"«Le neuroscienze hanno superato il cognitivismo»", si:"Il cognitivismo è <strong>tuttora in essere</strong>: si è <strong>allargato</strong>" }
  ]
}

]});

/* ---------- F3.2 — SCIENZA COGNITIVA ---------- */
PGE.schede.fascicoli[2].schede.push({
  id:"S302", tipo:"scuola", nome:"La scienza cognitiva: modularismo e connessionismo",
  identificazione:{ anno:"anni '70-'80", luogo:"Stati Uniti", lezione:"L03", capitolo:"C13",
    unaRiga:"Il cognitivismo si dà uno statuto epistemologico proprio, e si divide in due filoni: uno resta astratto, l'altro riporta il cervello dentro il modello." },
  nasceDa:{ problema:"Dopo la critica ecologica il cognitivismo ha bisogno di ridefinirsi. Viene fondata una rivista dedicata, <em>Cognitive Science</em>, e per la prima volta si esamina dal punto di vista <strong>epistemologico</strong> la natura della nuova scienza.",
    formula:"Lo scopo: <strong>stabilire come le conoscenze sono codificate dalla mente</strong>." },
  radici:[
    { nome:"Cognitivismo", tipo:"scuola", tesi:"I processi cognitivi sono l'oggetto proprio della psicologia." },
    { nome:"Teoria dei sistemi dinamici complessi", tipo:"fisica e matematica", tesi:"Un sistema con molte unità interconnesse esibisce comportamenti globali non riducibili alle singole unità — modello per il cervello (solo per il connessionismo)." }
  ],
  precursori:[
    { nome:"Neisser", provenienza:"Cognitivismo", apporto:"La critica ecologica che impone la ridefinizione" },
    { nome:"Hebb", provenienza:"Cenocomportamentismo", apporto:"Il modello neurale che il connessionismo riprenderà — dopo che la prima fase lo aveva messo fra parentesi" }
  ],
  oggetto:{ formula:"L'<strong>architettura funzionale</strong>: la <strong>struttura astratta</strong> che permette la realizzazione delle funzioni intellettive, <strong>prescindendo dalla sua base materiale</strong>.",
    glossa:"<strong>Il paradosso da notare</strong>: il cognitivismo nasce dal cenocomportamentismo, cioè dalla fase in cui <strong>Hebb</strong> aveva finalmente portato il sistema nervoso centrale dentro la spiegazione psicologica. E la prima mossa della scienza cognitiva è <strong>rimuoverlo di nuovo</strong>, per studiare la funzione allo stato puro. Il connessionismo sarà il movimento che lo rimette dentro." },
  metodo:{ formula:"Modellizzazione formale dell'architettura mentale, con verifica per simulazione.",
    glossa:"Entrambi i filoni costruiscono modelli astratti; differiscono per il <strong>riferimento o meno alla struttura del cervello</strong>.",
    vincoli:[] },
  teorie:[
    { nome:"Modularismo (Fodor)", enunciato:"L'attività della mente consiste nell'<strong>elaborazione di rappresentazioni interne</strong>: per operare in un ambiente, la mente deve <strong>rappresentarlo internamente</strong>. Tre stadi: <strong>1. trasduttori</strong>, che convertono gli stimoli ambientali (visivi, tattili, chimici) in rappresentazioni interne manipolabili; <strong>2. moduli</strong>, cioè i sistemi di input — «capsule» di informazione che lavorano in modo <strong>automatico e parallelo</strong>; <strong>3. sistemi centrali</strong>, che ricevono gli output dei moduli e li <strong>integrano</strong>.",
      glossa:"L'elaborazione procede <strong>prima in serie</strong> attraverso le capsule, <strong>poi viene integrata</strong> dalle strutture centrali. Resta un modello <strong>puramente astratto</strong>: non fa riferimento al cervello." },
    { nome:"Connessionismo (scienza cognitiva)", enunciato:"L'architettura mentale è concepita come una <strong>rete di unità di elaborazione omogenee</strong>. Le unità ricalcano la funzionalità dei <strong>neuroni</strong>, che comunicano in modo <strong>divergente</strong> (da un neurone verso molti altri) e <strong>convergente</strong> (raccogliendo informazione da molti altri). Tre tipi di unità: <strong>input</strong>, che recepiscono le informazioni in ingresso; <strong>nascoste</strong>, che mediano il flusso; <strong>output</strong>, responsabili dell'emissione del comportamento.",
      glossa:"È il <strong>primo tentativo</strong>, dentro la scienza cognitiva, di considerare la <strong>base materiale</strong> delle funzioni cognitive: continua a fare ipotesi astratte, ma <strong>facendo riferimento alla struttura e al funzionamento del cervello</strong>. La docente precisa che è una teoria «estremamente complicata» e che <strong>non va studiata nel dettaglio</strong>: basta riconoscerne la mossa — <strong>riportare il cervello dentro il modello</strong>." }
  ],
  esponenti:[
    { nome:"Jerry Fodor", anni:"1935-2017", ruolo:"Fondatore del modularismo", luogo:"Stati Uniti",
      chiE:"Introduce il modularismo, il filone più importante della scienza cognitiva nella sua fase astratta.",
      haFatto:["Postula l'esistenza di <strong>trasduttori</strong> che convertono gli stimoli in rappresentazioni interne.","Definisce i <strong>moduli</strong> come capsule di input che lavorano in modo automatico e parallelo.","Postula i <strong>sistemi centrali</strong> che ricevono gli output dei moduli e li integrano."],
      teorie:[{ nome:"Modularismo", enunciato:"L'attività della mente è elaborazione di rappresentazioni interne, incapsulate in moduli e poi integrate." }],
      esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"Dà al cognitivismo uno <strong>statuto epistemologico</strong> esplicito, e con il connessionismo riapre la strada al substrato biologico.",
    limite:"Il modularismo resta <strong>puramente astratto</strong> — la scienza cognitiva di quegli anni «era cervellotica», esasperando l'astrattismo dei concetti. Il connessionismo è di complessità elevatissima.",
    esito:"Entrambi i filoni confluiscono nel passaggio alla <strong>mente embodied</strong>, dove l'astrattismo viene definitivamente corretto." },
  precorre:[
    { nome:"Mente embodied", come:"il connessionismo apre la strada, riportando la base materiale dentro il modello" },
    { nome:"Reti neurali artificiali", come:"il connessionismo ne è l'antenato concettuale" }
  ],
  formule:[
    "L'architettura funzionale: la struttura astratta che permette le funzioni intellettive, prescindendo dalla sua base materiale.",
    "Una rete di unità di elaborazione omogenee."
  ],
  errori:[
    { no:"«Il connessionismo è quello di Thorndike»", si:"Sono <strong>due cose diverse</strong>: Thorndike (L01) parla di connessioni <strong>situazione-risposta</strong>; la scienza cognitiva (L03) di <strong>reti di unità di elaborazione</strong>. Stessa parola, due paradigmi" },
    { no:"Confondere i moduli di Fodor con i moduli della psicologia evoluzionistica", si:"In Fodor sono <strong>capsule di elaborazione dell'input</strong>, definite per il loro funzionamento; nella psicologia evoluzionistica sono <strong>competenze specializzate</strong>, definite per la loro <strong>origine adattativa</strong>" },
    { no:"Attribuire al modularismo l'attenzione al substrato", si:"È il <strong>connessionismo</strong> a riportare il cervello nel modello; il modularismo resta astratto" }
  ]
});

/* ---------- F3.3 — MENTE EMBODIED ---------- */
PGE.schede.fascicoli[2].schede.push({
  id:"S303", tipo:"scuola", nome:"La mente embodied e l'approccio biopsicosociale",
  identificazione:{ anno:"dagli anni '60 a oggi", luogo:"—", lezione:"L03", capitolo:"C14",
    unaRiga:"Non è una scuola e non ha un fondatore: è l'assetto attuale della disciplina. Il cognitivismo non viene superato — si <strong>allarga</strong>." },
  nasceDa:{ problema:"La scienza cognitiva studiava l'architettura funzionale <em>prescindendo dalla base materiale</em>. Ma non si può prescindere dal fatto che i processi cognitivi si svolgano in una <strong>mente</strong> basata sul funzionamento di un <strong>cervello</strong>, che è un <strong>organo</strong>, che fa parte di un <strong>corpo</strong> — e che subisce quindi influenze non puramente cerebrali.",
    formula:"L'esigenza — già emergente <strong>negli anni Sessanta</strong> — è uno <strong>studio integrato della complessità mente-cervello</strong>, che indaghi sia le architetture cognitive sia quelle cerebrali necessarie all'uomo per interagire con la realtà esterna." },
  radici:[
    { nome:"Approccio ecologico (Neisser)", tipo:"metodo", tesi:"Le competenze cognitive non sono studiabili in isolamento ma solo in interazione con l'ambiente." },
    { nome:"Darwin", tipo:"biologia", tesi:"La mente è frutto dell'adattamento: la selezione naturale ha sviluppato competenze adattate alle richieste ambientali." }
  ],
  precursori:[
    { nome:"Cognitivismo", provenienza:"1967", apporto:"Non viene superato: si allarga. Resta l'elaborazione cognitiva come una delle tre prospettive" },
    { nome:"Neisser", provenienza:"Approccio ecologico", apporto:"Il secondo corollario è una sua formulazione diretta" }
  ],
  oggetto:{ formula:"La <strong>mente incarnata</strong> (<em>embodied</em>): la mente in quanto integrata in un cervello, in un corpo e in un ambiente fisico e sociale.",
    glossa:"<strong>La catena che giustifica l'aggettivo</strong>, da dire per intero: <strong>mente → cervello → organo → corpo</strong>. Ogni anello aggiunge un livello di determinazione che la scienza cognitiva della prima fase aveva deliberatamente messo fra parentesi." },
  metodo:{ formula:"<strong>Approccio biopsicosociale</strong>: la questione psicologica è indagata attraverso <strong>tre prospettive</strong>.",
    glossa:"Le tre prospettive non sono tre discipline messe accanto: sono <strong>tre eredità dell'excursus</strong> finalmente tenute insieme — la biologica viene da Darwin e da Hebb, la psicologica dal cognitivismo e dalla tradizione clinica, la socioculturale da Vygotskij e dalla psicologia sociale di Lewin.",
    vincoli:[
      "<strong>Prospettiva biologica</strong> — selezione naturale di <strong>tratti adattivi</strong>; <strong>predisposizioni genetiche</strong> di alcuni tratti cognitivi; <strong>meccanismi cerebrali</strong>, cioè il substrato biologico che media determinate funzioni; <strong>influenze ormonali</strong>, perché il cervello è integrato in un corpo e non va studiato a sé stante.",
      "<strong>Prospettiva psicologica</strong> — <strong>paure apprese</strong> e <strong>aspettative</strong>; il substrato <strong>emotivo</strong> oltre che cognitivo; l'<strong>elaborazione cognitiva</strong> vera e propria e l'<strong>interpretazione percettiva</strong>, cioè ciò che i cognitivisti studiavano.",
      "<strong>Prospettiva socioculturale</strong> — presenza degli <strong>altri</strong> e dei <strong>pari</strong>; aspettative <strong>sociali, culturali, familiari</strong>; influenze dei <strong>gruppi sociali</strong>; <strong>modelli persuasivi</strong> che arrivano dall'ambiente."
    ] },
  teorie:[
    { nome:"Primo corollario", enunciato:"<strong>La mente ha un corpo</strong>: è integrata, incarnata in una struttura cerebrale." },
    { nome:"Secondo corollario", enunciato:"Le <strong>competenze cognitive non si studiano isolate</strong>: come diceva Neisser, non sono descrivibili in modo isolato e a sé stante, ma <strong>soltanto in azione e in interazione</strong> con un ambiente circostante, fisico o sociale." },
    { nome:"Terzo corollario", enunciato:"<strong>La mente è relazionale</strong>: non può essere studiata soltanto come una <strong>macchina di pensiero</strong>, ma come qualcosa in relazione con il complesso sistema che circonda il cervello — corpo, ambiente fisico, ambiente sociale.",
      glossa:"<strong>Conseguenza operativa</strong>: oggi lo studio basato <em>soltanto</em> sull'intelligenza artificiale non ha più molto senso per spiegare i processi cognitivi. Va <strong>integrato</strong> con altri punti di vista." }
  ],
  esponenti:[],
  esperimenti:[],
  validita:{
    merito:"È l'assetto che consente di tenere insieme livelli di analisi che l'excursus aveva prodotto separatamente. Corregge l'astrattismo della scienza cognitiva senza rinunciare ai suoi strumenti.",
    limite:"Non è una teoria unificata ma un <strong>quadro di integrazione</strong>: non fornisce di per sé né un metodo unico né predizioni.",
    esito:"È l'assetto <strong>attuale</strong> della disciplina, e si realizza operativamente nelle neuroscienze comportamentali." },
  precorre:[
    { nome:"Neuroscienze comportamentali", come:"ne sono la <strong>prospettiva biologica realizzata</strong>" },
    { nome:"Discipline collaterali", come:"coprono le prospettive psicologica e socioculturale" }
  ],
  formule:[
    "La mente ha un corpo; le competenze cognitive sono descrivibili solo in azione e in interazione; la mente è relazionale."
  ],
  errori:[
    { no:"«Le neuroscienze hanno superato il cognitivismo»", si:"Il cognitivismo è <strong>tuttora in essere</strong>: si è <strong>allargato</strong>" },
    { no:"Elencare i tre corollari senza la catena che li giustifica", si:"<strong>Mente → cervello → organo → corpo</strong>: è l'argomento, non un preambolo" },
    { no:"Confondere le tre prospettive con le tre espansioni delle neuroscienze", si:"<strong>Biologica, psicologica, socioculturale</strong> ≠ <strong>cognitive, affettive, relazionali</strong>" }
  ],
  contrasto:"<strong>Il cerchio che si chiude sulla definizione.</strong> Nel Fascicolo I la definizione attuale diceva: studio scientifico del comportamento e dei processi mentali <strong>dell'essere vivente nel suo rapporto con l'ambiente</strong>, mentre lo <strong>esperisce</strong>, vi <strong>agisce</strong> e lo <strong>rappresenta</strong>. I tre corollari della mente embodied sono quella definizione riletta dall'altro capo di centoquarant'anni: il corpo che esperisce, l'azione nell'ambiente, la rappresentazione relazionale."
});

/* ---------- F3.4 — NEUROSCIENZE ---------- */
PGE.schede.fascicoli[2].schede.push({
  id:"S304", tipo:"scuola", nome:"Le neuroscienze comportamentali",
  identificazione:{ anno:"oggi (precursori dagli anni '30)", luogo:"—", lezione:"L03", capitolo:"C14",
    unaRiga:"L'approccio <strong>dominante</strong> nella psicologia attuale. Non una corrente di pensiero ma un insieme di metodi, reso possibile da una rivoluzione tecnologica." },
  nasceDa:{ problema:"Il problema del rapporto mente-cervello era stato posto già alla nascita della psicologia scientifica, ma <strong>non decollò</strong> — e per una ragione <strong>tecnica</strong>, non teorica: <strong>non c'erano gli strumenti tecnologici adatti</strong>.",
    formula:"L'esigenza è realizzare la <strong>prospettiva biologica</strong> dell'approccio biopsicosociale: analizzare <strong>direttamente il rapporto mente-cervello alla base del comportamento</strong>." },
  radici:[
    { nome:"Approccio biopsicosociale", tipo:"quadro", tesi:"La questione psicologica va indagata anche dal lato biologico: meccanismi cerebrali, predisposizioni genetiche, influenze ormonali." }
  ],
  precursori:[
    { nome:"Karl Lashley", provenienza:"Psicologia comparata", apporto:"Labirinti nei ratti e <strong>asportazione chirurgica</strong>: cerca la zona che media l'apprendimento spaziale e <strong>non la trova</strong>" },
    { nome:"Donald Hebb", provenienza:"Cenocomportamentismo", apporto:"La connessione fra neuroni si rafforza <strong>in funzione dell'esperienza</strong>: i primi rudimentali concetti di <strong>plasticità neuronale</strong>" }
  ],
  oggetto:{ formula:"I <strong>processi cerebrali</strong> e le <strong>altre funzioni fisiologiche che sono all'origine del comportamento</strong>. Dette anche <strong>psicologia fisiologica</strong> o <strong>psicofisiologia</strong>.",
    glossa:"<strong>Estensione dell'oggetto</strong>: coprono tutta la scala del comportamento — da quelli <strong>semplici</strong> (esperienze sensoriali, bisogni di base: fame, sete, comportamenti riproduttivi) a quelli <strong>complessi</strong>, mediati dalle funzioni cognitive superiori (intelligenza, ragionamento, linguaggio)." },
  metodo:{ formula:"Reso possibile dalla <strong>rivoluzione tecnologica</strong>, su quattro fronti.",
    glossa:"<strong>Il salto decisivo</strong> sta nella neuroimmagine funzionale: i soggetti sperimentali <strong>svolgono compiti cognitivi</strong> — di memoria, di attenzione — e <strong>allo stesso tempo</strong> se ne analizza l'attività cerebrale e le circuitazioni. Si studia dunque il legame fra processi cognitivi superiori e attività cerebrale <strong>in vivo, nell'uomo, mentre esegue compiti</strong>.<br>Il confronto con Lashley chiarisce la portata: dove prima si doveva <strong>distruggere</strong> tessuto in un animale per inferire una funzione, ora si <strong>osserva</strong> la funzione mentre accade, in una persona sveglia, senza toccarla.",
    vincoli:[
      "<strong>Microscopia avanzata</strong>, messa a punto con teorie fisiche e matematiche: consente di studiare non solo l'assetto neuronale <strong>macroscopico</strong>, cioè le cellule che interagiscono, ma anche i <strong>processi molecolari</strong> che avvengono all'interno delle <strong>sinapsi</strong>, lo strumento con cui i neuroni comunicano.",
      "<strong>Registrazione dell'attività elettrica</strong>: apparecchi che rispondono alle <strong>onde cerebrali</strong>, per studiare l'attività elettrica <strong>macroscopica e microscopica</strong> — anche ciò che non è visibile a occhio nudo.",
      "<strong>Neuroimmagine strutturale</strong>: studia <strong>in vivo</strong> — nell'uomo vivo, senza operare animali né analizzare reperti autoptici — la <strong>struttura</strong> del cervello. Esempi: <strong>TAC</strong>, <strong>risonanza magnetica</strong>.",
      "<strong>Neuroimmagine funzionale</strong>: studia la <strong>funzione</strong> oltre alla struttura. Esempi: <strong>PET</strong>, <strong>risonanza magnetica funzionale</strong>."
    ] },
  teorie:[
    { nome:"Le tre espansioni", enunciato:"Le neuroscienze comportamentali sono il <strong>contenitore più ampio</strong> e oggi comprendono: <strong>neuroscienze cognitive</strong> (i processi cerebrali in relazione alle <strong>funzioni superiori</strong>, quelle che ci permettono di adattarci meglio all'ambiente); <strong>neuroscienze affettive</strong> (in relazione a tutto ciò che è <strong>emotivo</strong>); <strong>neuroscienze relazionali</strong> (in relazione ai <strong>processi relazionali</strong> con le altre persone).",
      glossa:"La direzione dell'espansione non è casuale: <strong>cognitive → affettive → relazionali</strong> ricalca le tre prospettive del biopsicosociale viste dal lato biologico — il pensiero, l'emozione, il legame sociale." },
    { nome:"Plasticità neuronale (Hebb)", enunciato:"Se dei neuroni comunicano in modo connesso, la <strong>connessione fra loro si rafforza in funzione dell'esperienza</strong>.",
      glossa:"Sono i primi, rudimentali concetti di plasticità, formulati ancora in modo molto acerbo perché mancavano gli strumenti." }
  ],
  esponenti:[
    { nome:"Karl Lashley", anni:"1890-1958", ruolo:"Precursore", luogo:"Stati Uniti",
      chiE:"Studia l'apprendimento nei ratti con l'approccio comparato della psicologia animale. Il suo <strong>fallimento</strong> è istruttivo quanto un successo.",
      haFatto:["Fa percorrere <strong>labirinti</strong> ai ratti per vedere come apprendono la strada.","Per collegare la funzione mentale — l'<strong>apprendimento spaziale</strong> — alle strutture cerebrali, procede per <strong>asportazione chirurgica</strong> di parti del cervello.","<strong>Non riesce a identificare una zona precisa</strong> che medi la funzione: osserva che più asportava parti ampie, più la funzione era compromessa; meno asportava, più era preservata — ma non giunse a conclusioni vere e proprie."],
      teorie:[],
      esperimenti:[],
      nota:"<strong>I due limiti del metodo</strong>: è <strong>molto invasivo</strong> (rimozione chirurgica in animali) e <strong>non utilizzabile nell'uomo</strong>.<br><strong>Perché il fallimento è istruttivo</strong>: cercava <em>la</em> zona, e trovava invece che conta la <em>quantità</em> di tessuto rimosso. È la prima evidenza contro una localizzazione rigida in stile Gall e a favore di un funzionamento <strong>distribuito</strong> — cioè esattamente ciò che Hebb formalizzerà con le <strong>assemblee cellulari</strong>. Il risultato negativo di Lashley e la teoria positiva di Hebb sono lo stesso fatto, visto da due lati." },
    { nome:"Donald Hebb", anni:"1904-1985", ruolo:"Precursore", luogo:"Canada",
      chiE:"Già incontrato nel cenocomportamentismo. Fornisce alle neuroscienze il concetto che ne diventerà il fondamento.",
      haFatto:["Formula i primi concetti di <strong>plasticità neuronale</strong>: la connessione fra neuroni si rafforza in funzione dell'esperienza.","Introduce nella spiegazione del comportamento un <strong>modello psicofisiologico</strong>, identificando le variabili interne come attività del SNC."],
      teorie:[{ nome:"Unità mente-cervello", enunciato:"Per la prima volta si parla di unità mente-cervello, che nella psicologia contemporanea sarà il principale oggetto di studio." }],
      esperimenti:[] }
  ],
  esperimenti:[
    { nome:"Labirinti e asportazione chirurgica (Lashley)", disegno:["Ratti percorrono ripetutamente un <strong>labirinto</strong> fino ad apprenderne il tracciato.","<strong>Asportazione chirurgica</strong> di zone specifiche del cervello.","Nuova prova nel labirinto, per verificare se l'apprendimento risulti inibito."],
      risultato:"<strong>Nessuna zona precisa</strong> risulta responsabile della funzione. L'unica regolarità è quantitativa: più tessuto viene asportato, più la funzione è compromessa.",
      significato:"Evidenza contro la localizzazione rigida e a favore di un funzionamento <strong>distribuito</strong>. Anticipa, in negativo, la teoria delle <strong>assemblee cellulari</strong>." },
    { nome:"Il paradigma della neuroimmagine funzionale", disegno:["Il soggetto è vigile, dentro l'apparecchio (PET o risonanza magnetica funzionale).","Esegue un <strong>compito cognitivo</strong> controllato: memoria, attenzione, ragionamento, linguaggio.","<strong>Contemporaneamente</strong> se ne registra l'attività cerebrale e le circuitazioni."],
      risultato:"Si osserva quali aree e quali circuiti si attivano <strong>mentre</strong> la funzione cognitiva viene esercitata.",
      significato:"È il salto rispetto a Lashley: si studia il legame fra <strong>processi cognitivi superiori e attività cerebrale direttamente nell'uomo</strong>, in vivo, senza invasività. Ha dato molte più risposte ai quesiti psicologici, ma ha anche posto <strong>tantissime nuove domande</strong>: «una scienza in fermento»." }
  ],
  validita:{
    merito:"È l'<strong>approccio dominante</strong> nella psicologia attuale. Realizza l'accesso diretto al rapporto mente-cervello, che era il nodo irrisolto dell'intero excursus.",
    limite:"Copre la sola <strong>prospettiva biologica</strong>: da sola non risolve le domande che riguardano le prospettive psicologica e socioculturale — per questo viene affiancata dalle discipline collaterali.",
    esito:"In piena espansione, su tre rami: cognitive, affettive, relazionali." },
  precorre:[
    { nome:"Neuroscienze cognitive, affettive, relazionali", come:"le tre espansioni interne" }
  ],
  formule:[
    "I processi cerebrali e le altre funzioni fisiologiche all'origine del comportamento.",
    "Per la prima volta si parla di unità mente-cervello."
  ],
  errori:[
    { no:"«La TAC studia la funzione cerebrale»", si:"TAC e risonanza magnetica sono <strong>strutturali</strong>; la funzione si studia con <strong>PET</strong> e <strong>risonanza magnetica funzionale</strong>" },
    { no:"Raccontare Lashley come un successo", si:"<strong>Non trovò</strong> la zona precisa. E il metodo aveva due limiti: <strong>invasivo</strong> e <strong>non usabile nell'uomo</strong>" },
    { no:"Confondere le tre espansioni con le tre prospettive", si:"<strong>Cognitive, affettive, relazionali</strong> sono espansioni delle neuroscienze; <strong>biologica, psicologica, socioculturale</strong> sono le prospettive del biopsicosociale" }
  ],
  contrasto:"<strong>Il filo rosso più lungo del corso si chiude qui.</strong> L'unità mente-cervello è stata: <strong>negata</strong> da Cartesio (il cervello è <em>res extensa</em>) → <strong>abbozzata</strong> da Gall (frenologia) → <strong>mancante</strong> nell'emancipazione dalla medicina → <strong>rifiutata</strong> dal perifericalismo di Watson → <strong>postulata</strong> da Hebb → <strong>principale oggetto di studio</strong> delle neuroscienze."
});

/* ---------- F3.5 — DISCIPLINE COLLATERALI ---------- */
PGE.schede.fascicoli[2].schede.push({
  id:"S305", tipo:"scuola", nome:"Le discipline collaterali",
  identificazione:{ anno:"oggi", luogo:"—", lezione:"L03", capitolo:"C15",
    unaRiga:"Quattro discipline che affiancano le neuroscienze, perché oggi la psicologia <strong>non è settoriale</strong>: si definisce integrando anziché restringendo." },
  nasceDa:{ problema:"Le neuroscienze coprono la prospettiva <strong>biologica</strong>. Restano le altre due, e restano domande che la sola misura dell'attività cerebrale non risolve.",
    formula:"Oggi la psicologia <strong>utilizza tantissime altre discipline</strong> per rispondere ai propri quesiti. È il rovesciamento della strategia di Wundt, che nel 1879 si definiva <strong>restringendo</strong>: un oggetto solo, un metodo solo, un laboratorio solo." },
  radici:[
    { nome:"Approccio biopsicosociale", tipo:"quadro", tesi:"Tre prospettive — biologica, psicologica, socioculturale — che agiscono insieme sullo stesso fenomeno." },
    { nome:"Darwin", tipo:"biologia", tesi:"La selezione naturale preserva le caratteristiche, anche <strong>mentali</strong>, che consentono di rispondere meglio alle esigenze ambientali (per la psicologia evoluzionistica)." }
  ],
  precursori:[],
  oggetto:{ formula:"Quattro oggetti distinti, uno per disciplina.",
    glossa:"<strong>Attenzione al termine.</strong> Qui «collaterale» ha un senso <strong>diverso</strong> da quello della L01: là indicava scuole fuori dall'<em>asse geografico-accademico</em> (le russe) o fuori dall'accademia (la psicoanalisi); qui indica discipline che <strong>affiancano</strong> l'approccio dominante, dentro la stessa psicologia. Stessa parola, tre sensi nel corso: geografico, epistemologico, complementare." },
  metodo:{ formula:"Ciascuna disciplina ha il proprio. Il più caratteristico è lo <strong>studio sui gemelli</strong>.",
    glossa:"<strong>Perché il disegno funziona</strong>: l'elemento decisivo è la clausola «<strong>anche se allevati in ambienti diversi</strong>». Se due persone con patrimonio genetico quasi identico si somigliano pur essendo cresciute altrove, l'ambiente non può spiegare la somiglianza; e il confronto con gli eterozigoti — che condividono l'ambiente ma meno geni — isola il contributo genetico. È un esperimento che la natura ha già svolto: il ricercatore deve solo saperlo leggere.",
    vincoli:[
      "<strong>Gemelli omozigoti</strong>: condividono la <strong>maggior parte</strong> del patrimonio genetico; mostrano <strong>similarità</strong> in alcuni tratti comportamentali e funzioni cognitive <strong>anche se allevati in ambienti diversi</strong>.",
      "<strong>Gemelli eterozigoti</strong>: ne condividono <strong>meno</strong>; alcune di quelle similarità <strong>non si osservano</strong>.",
      "<strong>Conclusione</strong>: la similarità nonostante l'ambiente diverso fa dedurre una <strong>base biologica</strong> di alcune funzioni."
    ] },
  teorie:[
    { nome:"Genetica del comportamento", enunciato:"Studia <strong>come le tendenze comportamentali siano influenzate da fattori genetici</strong>. Domande tipiche: come tratti quali <strong>aggressività</strong>, <strong>timidezza</strong> o la <strong>predisposizione a sviluppare patologie mentali</strong> possano essere mediati da influenze genetiche.",
      glossa:"Contribuisce a rispondere all'<strong>annoso dibattito natura/cultura</strong> — che è la terza comparsa della stessa opposizione: <strong>Kant/Locke</strong> per Gestalt e comportamentismo, <strong>Chomsky/Skinner</strong> sul linguaggio, e ora <strong>natura/cultura</strong>. Qui, per la prima volta, si presenta con gli strumenti per essere decisa." },
    { nome:"Epigenetica", enunciato:"Analizza i <strong>cambiamenti che intervengono nel genotipo</strong> — cambiamenti genetici veri e propri — che il <strong>sistema nervoso sviluppa in seguito all'interazione con l'ambiente</strong>.",
      glossa:"<strong>Perché dirime il dibattito</strong>: innatismo ed empirismo si erano sempre fronteggiati come <em>alternative</em> — o è innato, o viene dall'esperienza. L'epigenetica mostra che la domanda era <strong>mal posta</strong>: l'ambiente <strong>modifica il genotipo stesso</strong>. Non c'è un patrimonio genetico fisso da un lato e un'esperienza che vi si sovrappone dall'altro; c'è un sistema in cui i due termini si determinano a vicenda." },
    { nome:"Psicologia evoluzionistica", enunciato:"La <strong>mente umana è un insieme di moduli specializzati</strong> atti a risolvere i problemi che i nostri antenati hanno affrontato <strong>per milioni di anni</strong>.",
      glossa:"<strong>Conseguenza</strong>: la nostra mente è specializzata a <strong>fare bene alcune cose e non altre</strong>. Esistono specie animali molto meno evolute che sono più brave di noi in certi compiti — perché a loro servono di più; le funzioni che a noi non servivano, <strong>evolutivamente le abbiamo perse</strong>.<br><strong>Il rovesciamento</strong>: «meno evoluto» non significa «capace di meno». L'evoluzione non produce una scala di perfezione ma un insieme di <strong>adattamenti a problemi diversi</strong>: la mente umana non è la migliore possibile, è quella che ha risolto i problemi dei nostri antenati — e per questo può essere goffa davanti a problemi nuovi." },
    { nome:"Psicologia umanistica", enunciato:"Approccio alla comprensione della natura umana che attribuisce importanza alle <strong>potenzialità positive della persona</strong>. Al centro stanno le <strong>aspirazioni più elevate</strong>: per funzionare al meglio, le persone devono essere collocate in un <strong>ambiente stimolante e positivo</strong>.",
      glossa:"<strong>Il rovesciamento rispetto a Freud</strong>: la psicodinamica indagava la <em>patologia</em>, ciò che non funziona; qui si mira al <em>positivo</em> e al funzionamento ottimale. Esito contemporaneo: la <strong>psicologia della salute</strong> — <strong>promozione del benessere</strong>, non solo correzione di ciò che non va.<br><em>Nota di equità storica: era stato Freud a stabilire la continuità fra normalità e patologia, ed è proprio quella continuità a rendere sensato studiare il funzionamento ottimale con gli stessi strumenti del disturbo.</em>" },
    { nome:"Psicologia socioculturale", enunciato:"Esamina <strong>in che modo l'ambiente sociale e l'apprendimento culturale influenzino il comportamento, la cognizione e le emozioni</strong>. Si articola in <strong>psicologia sociale</strong> (l'uomo in interazione con i gruppi sociali), <strong>psicologia culturale</strong> (l'influenza della cultura, su cui l'enfasi si sposta in un secondo momento) e <strong>psicologia interculturale</strong> (come la cultura viene trasmessa; affinità e differenze fra persone di culture diverse).",
      glossa:"<strong>Che cos'è la cultura</strong>: l'insieme di <strong>valori, credenze, comportamenti e tradizioni</strong> durevoli nel tempo, condivisi da gruppi sociali e <strong>trasmessi da una generazione all'altra</strong>.<br><strong>Il punto teorico</strong>: la cultura <strong>non ha base biologica né genetica</strong> — eppure <strong>viene trasmessa ugualmente</strong>. Esiste un canale di trasmissione fra generazioni che non passa dai geni, produce effetti stabili sul comportamento, e che il modello biologico da solo non può descrivere." }
  ],
  esponenti:[
    { nome:"Abraham Maslow", anni:"1908-1970", ruolo:"Capofila della psicologia umanistica", luogo:"Stati Uniti",
      chiE:"Con Rogers mette al centro delle proprie teorie le aspirazioni più elevate delle persone.",
      haFatto:["Fonda, con Rogers, il movimento della psicologia umanistica.","Sostiene che per funzionare al meglio le persone debbano essere collocate in un ambiente stimolante e positivo."],
      teorie:[], esperimenti:[] },
    { nome:"Carl Rogers", anni:"1902-1987", ruolo:"Capofila · psicologo clinico", luogo:"Stati Uniti",
      chiE:"Anche psicologo clinico: porta l'impostazione umanistica dentro la pratica terapeutica.",
      haFatto:["Con Maslow è capofila del movimento umanistico.","Contribuisce a spostare la clinica dall'indagine della patologia alla promozione del funzionamento ottimale."],
      teorie:[], esperimenti:[] }
  ],
  esperimenti:[
    { nome:"Lo studio sui gemelli", disegno:["Si confrontano coppie di <strong>gemelli omozigoti</strong> (patrimonio genetico quasi identico) e di <strong>eterozigoti</strong> (patrimonio condiviso minore).","Si considerano in particolare le coppie <strong>allevate in ambienti diversi</strong>.","Si misurano tratti comportamentali e funzioni cognitive."],
      risultato:"Gli omozigoti mostrano <strong>similarità anche se cresciuti separatamente</strong>; negli eterozigoti alcune di quelle similarità <strong>non si osservano</strong>.",
      significato:"Se l'ambiente è diverso e la somiglianza resta, l'ambiente non può spiegarla: si deduce una <strong>base biologica</strong> di alcune funzioni. È il metodo elettivo con cui la genetica del comportamento interviene nel dibattito natura/cultura." },
    { nome:"Le regole di esibizione delle emozioni", disegno:["Si confrontano l'<strong>espressione</strong> delle emozioni di base e le <strong>regole sociali</strong> che ne governano la manifestazione.","Il confronto è fatto <strong>fra culture diverse</strong>."],
      risultato:"Le <strong>emozioni di base</strong> sono <strong>biologicamente determinate</strong> e la loro espressione è condivisa da tutti gli individui della specie <strong>indipendentemente dalla cultura</strong>; ma alcune <strong>regole di esibizione</strong> sono <strong>cultura-specifiche</strong> e cambiano a seconda della cultura di esposizione.",
      significato:"È l'immagine più chiara di che cosa voglia dire «approccio biopsicosociale» in pratica: mostra i <strong>due livelli contemporaneamente e sullo stesso oggetto</strong> — il substrato è biologico, la regola di esibizione è culturale. Non tre spiegazioni alternative fra cui scegliere, ma <strong>tre livelli che agiscono insieme</strong>." }
  ],
  validita:{
    merito:"Coprono le domande che la sola prospettiva biologica non risolve, e forniscono al dibattito <strong>natura/cultura</strong> — con l'epigenetica — lo strumento per essere finalmente deciso.",
    limite:"Sono discipline eterogenee, con metodi e statuti diversi: non costituiscono un programma unitario.",
    esito:"Affiancano stabilmente le neuroscienze nell'assetto contemporaneo della disciplina." },
  precorre:[
    { nome:"Psicologia della salute", come:"esito contemporaneo della <strong>psicologia umanistica</strong>" },
    { nome:"Psicologia delle emozioni", come:"l'esempio delle regole di esibizione tornerà nella lezione dedicata" }
  ],
  formule:[
    "La mente umana è un insieme di moduli specializzati atti a risolvere i problemi che i nostri antenati hanno affrontato per milioni di anni.",
    "Valori, credenze, comportamenti e tradizioni durevoli nel tempo, condivisi da gruppi sociali e trasmessi da una generazione all'altra."
  ],
  errori:[
    { no:"«I gemelli eterozigoti condividono tutto il patrimonio genetico»", si:"Sono gli <strong>omozigoti</strong> a condividerne la maggior parte" },
    { no:"Dimenticare «anche se allevati in ambienti diversi»", si:"Senza quella clausola lo studio sui gemelli <strong>non dimostra nulla</strong>" },
    { no:"Presentare l'epigenetica come una terza posizione", si:"Non è una terza posizione nel dibattito: è ciò che lo <strong>dirime</strong>, mostrando che la domanda era mal posta" },
    { no:"«La psicologia socioculturale è la scuola di Vygotskij»", si:"Quella è la <strong>storico-culturale</strong> (Russia, dopo il 1917); questa è un approccio <strong>contemporaneo</strong> che affianca le neuroscienze" }
  ]
});
