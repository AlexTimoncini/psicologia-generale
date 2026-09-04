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

/* =========================================================
   FASCICOLO 4 — LA METODOLOGIA DELLA RICERCA
   ========================================================= */
PGE.schede.fascicoli.push({
  id: "F4",
  n: "IV",
  titolo: "La metodologia della ricerca",
  sottotitolo: "Il metodo scientifico, il processo di ricerca, i metodi e la pubblicazione",
  lezione: "Lezioni 4-7",
  schede: [

/* ---------- F4.1 ---------- */
{
  id:"S401", tipo:"scuola", nome:"Il metodo scientifico",
  identificazione:{ anno:"—", luogo:"—", lezione:"L04", capitolo:"C16",
    unaRiga:"Che cosa distingue la psicologia dalla psicologia ingenua: non l'oggetto, ma quattro assunti — e il quarto esiste per rendere praticabili gli altri tre su un oggetto astratto." },
  nasceDa:{ problema:"Il senso comune produce spiegazioni <strong>coerenti</strong> dei comportamenti, ma non ha modo di accorgersi quando sono sbagliate. E l'oggetto della psicologia — la mente — <strong>non è né osservabile né quantificabile</strong>.",
    formula:"Il metodo scientifico serve a <strong>salvaguardare la psicologia dalla psicologia ingenua</strong>: la coerenza non è verità." },
  radici:[
    { nome:"Le tre fonti di errore del senso comune", tipo:"evidenza empirica", tesi:"<strong>Giudizio retrospettivo</strong>: bravi a spiegare l'accaduto, non a prevedere. <strong>Eccessiva fiducia in sé</strong>: ci crediamo migliori di quanto siamo (esperimento di Goranson). <strong>Schemi ricorrenti</strong>: individuiamo nessi causali anche in eventi casuali." },
    { nome:"La critica all'oggettività dalle scienze esatte", tipo:"epistemologia", tesi:"<strong>Einstein</strong>: le osservazioni sono sempre relative a un osservatore. <strong>Heisenberg</strong>: la misura di due variabili coniugate ha un'<strong>incertezza ineliminabile</strong>. Più i fenomeni non direttamente osservabili — atomi, buchi neri." }
  ],
  precursori:[
    { nome:"Wundt e il 1879", provenienza:"Excursus storico", apporto:"L'adozione di un metodo paragonabile a quello delle scienze esatte; poi affinato dall'evoluzione tecnologica" }
  ],
  oggetto:{ formula:"Gli stessi fenomeni di cui si occupa il senso comune — comportamento e processi mentali — ma <strong>spiegati in modo più esatto</strong>, con un processo guidato da <strong>principi oggettivi</strong>.",
    glossa:"Pur possedendo lo <strong>status di scienza</strong>, il campo della psicologia è molto diverso da quello delle scienze esatte: da qui il <strong>ritardo</strong> storico e le <strong>riserve</strong> che ancora l'accompagnano.<br><strong>Il riavvicinamento non dipende da un progresso della psicologia</strong>: dipende dal fatto che le scienze esatte hanno ammorbidito la propria immagine di sé. Tanto che <strong>gli assunti della psicologia sono del tutto uguali a quelli delle altre scienze</strong>." },
  metodo:{ formula:"<strong>Quattro assunti</strong>, che valgono per la psicologia come per ogni altra scienza.",
    glossa:"Solo <strong>personale formato</strong> può usarli: non è un atteggiamento mentale, è una competenza tecnica.",
    vincoli:[
      "<strong>1. Determinismo</strong> — assunto <em>epistemologico di base</em>: gli effetti <strong>non sono dovuti al caso</strong> ma sempre riconducibili a una <strong>causa</strong>. Ogni risposta è l'esito di una <strong>catena causale</strong>. Da regole circoscritte si sale a <strong>leggi generali</strong>.",
      "<strong>2. Empirismo</strong> — non ci si basa su <strong>logica e coerenza</strong> di un modello, ma su <strong>verifica empirica, concreta e materiale</strong>. <em>Clausola che si dimentica</em>: l'ipotesi <strong>non è precostituita</strong>, origina da osservazioni empiriche o da teorie già dimostrate empiricamente.",
      "<strong>3. Invarianza</strong> — <strong>a parità di tutte le condizioni</strong> la combinazione degli stessi fattori produce <strong>sempre lo stesso evento</strong>. È ciò che consente <strong>induzioni prospettiche e previsioni</strong>.",
      "<strong>4. Operazionalizzazione</strong> — <em>il più importante per la scienza psicologica</em>: ogni concetto va <strong>tradotto in un formato replicabile e misurabile</strong>. Comprende la <strong>definizione operativa</strong> e gli <strong>step operativi</strong> per osservarlo."
    ] },
  teorie:[
    { nome:"Le due proprietà della definizione operativa", enunciato:"Dev'essere <strong>valida</strong> — misura solo ciò che dichiara di misurare — e <strong>univoca</strong> — si riferisce a <strong>processi unici e non plurimi</strong>.",
      glossa:"<strong>Il controesempio</strong>: misurare il <em>pensiero riflessivo</em> contando il tempo con gli <strong>occhi chiusi</strong> non è valido, perché gli occhi chiusi possono indicare che il soggetto <strong>sta dormendo</strong>. La misura esprimerebbe un processo plurimo." },
    { nome:"L'approssimazione al vero", enunciato:"Una definizione <strong>totalmente valida è virtualmente impossibile</strong>: è <strong>matematicamente impossibile escludere</strong> che una misura colga anche altri fattori. Ogni definizione operativa è quindi un'<strong>approssimazione al vero</strong> e <strong>non indica mai una verità assoluta</strong>.",
      glossa:"Non è un'ammissione di debolezza: è la <strong>condizione strutturale</strong> della disciplina, e giustifica la forma <strong>circolare</strong> del processo di ricerca. Se ogni misura è approssimata, nessun ciclo può chiudere definitivamente una questione." },
    { nome:"Validità, fidabilità, sensibilità", enunciato:"<strong>Validità</strong> → riguarda la <strong>definizione operativa</strong>: la misura in cui un evento concreto definisce quella proprietà. <strong>Fidabilità</strong> → riguarda lo <strong>strumento</strong>: produce lo stesso risultato ogni volta. <strong>Sensibilità</strong> → riguarda lo <strong>strumento</strong>: rileva anche piccolissime quantità.",
      glossa:"Attribuire la proprietà all'oggetto sbagliato è un errore d'esame frequente." }
  ],
  esponenti:[
    { nome:"Goranson", anni:"—", ruolo:"Ricercatore", luogo:"—",
      chiE:"Autore dell'esperimento che documenta l'<strong>eccessiva fiducia in sé</strong> come fonte di errore del senso comune.",
      haFatto:["Somministra tre <strong>anagrammi con la soluzione accanto</strong> e chiede quanto tempo si sarebbe impiegato a risolverli: i soggetti rispondono <strong>una decina di secondi</strong>.","Somministra poi un anagramma <strong>senza</strong> soluzione — la parola <em>Jackie</em>: una persona media impiega <strong>circa tre minuti</strong>."],
      teorie:[{ nome:"Eccessiva fiducia in sé", enunciato:"Avere la soluzione sotto gli occhi rende il problema <strong>retrospettivamente facile</strong> e porta a sopravvalutare la propria capacità di giudizio." }],
      esperimenti:[] },
    { nome:"Albert Einstein", anni:"1879-1955", ruolo:"Fisico · critica all'oggettività", luogo:"—",
      chiE:"Con la teoria della relatività contribuisce a riaprire il dibattito sul ruolo dell'osservatore nella ricerca scientifica.",
      haFatto:["Afferma che le osservazioni <strong>non possono essere assolute</strong> ma sono sempre <strong>relative al punto di vista di un osservatore</strong>."],
      teorie:[], esperimenti:[] },
    { nome:"Werner Heisenberg", anni:"1901-1976", ruolo:"Fisico · critica all'oggettività", luogo:"—",
      chiE:"Introduce un limite di principio alla misurazione, non un limite tecnico.",
      haFatto:["Sostiene che la misura simultanea di <strong>due variabili coniugate</strong> non può essere compiuta senza un'<strong>incertezza ineliminabile</strong>."],
      teorie:[], esperimenti:[] }
  ],
  esperimenti:[],
  validita:{
    merito:"Fornisce alla psicologia gli <strong>stessi assunti</strong> delle altre scienze e la separa dal sapere di senso comune, che pur avendo valore pragmatico produce errori sistematici.",
    limite:"L'oggetto resta <strong>non direttamente osservabile né quantificabile</strong>, e ogni operazionalizzazione è un'<strong>approssimazione</strong>. Il metodo può essere usato solo da <strong>personale formato</strong>.",
    esito:"Da questi quattro assunti discende l'intera architettura del processo di ricerca e dei metodi." },
  precorre:[
    { nome:"Il processo di ricerca", come:"la sua forma <strong>circolare</strong> discende dall'approssimazione al vero" },
    { nome:"Le variabili", come:"sono l'esito operativo dell'<strong>operazionalizzazione</strong>" },
    { nome:"Il metodo sperimentale", come:"è l'<strong>unico</strong> che rispetta tutti e quattro gli assunti" }
  ],
  formule:[
    "Gli effetti non sono dovuti al caso ma sempre riconducibili a una causa.",
    "Tradurre ogni concetto contenuto in una teoria in un formato replicabile e misurabile.",
    "Ogni definizione operativa si presenta come un'approssimazione al vero."
  ],
  errori:[
    { no:"«Il metodo scientifico sostituisce il senso comune»", si:"Lo <strong>salvaguarda da</strong>: la psicologia ingenua resta una <strong>forma imprescindibile di sapere</strong>, con valore pragmatico" },
    { no:"«L'empirismo dice solo che bisogna verificare»", si:"Dice anche che <strong>l'ipotesi non è precostituita</strong>: deve <em>originare</em> da osservazioni empiriche" },
    { no:"«Fidabilità e validità sono sinonimi»", si:"La <strong>validità</strong> riguarda la <strong>definizione operativa</strong>; <strong>fidabilità e sensibilità</strong> riguardano lo <strong>strumento</strong>" },
    { no:"«Una buona operazionalizzazione dà una misura vera»", si:"Ogni definizione operativa è un'<strong>approssimazione al vero</strong>: la validità totale è <strong>virtualmente impossibile</strong>" }
  ]
},

/* ---------- F4.2 ---------- */
{
  id:"S402", tipo:"scuola", nome:"Il processo di ricerca",
  identificazione:{ anno:"—", luogo:"—", lezione:"L04", capitolo:"C17",
    unaRiga:"Quattro fasi disposte in cerchio: la quarta riporta alla prima, ma a un livello più profondo. Identico per la ricerca di base e per quella applicata." },
  nasceDa:{ problema:"Se ogni misura è un'<strong>approssimazione al vero</strong>, nessun ciclo di ricerca può chiudere definitivamente una questione.",
    formula:"Il processo di ricerca è un <strong>percorso circolare</strong>: quando finisce si ritorna alla tappa iniziale — ma <strong>a un livello più profondo</strong> di quello di partenza." },
  radici:[
    { nome:"I quattro assunti", tipo:"metodo", tesi:"Determinismo, empirismo, invarianza, operazionalizzazione governano ogni fase del processo." },
    { nome:"Il falsificazionismo di Popper", tipo:"epistemologia", tesi:"È scientifica ogni teoria <strong>confutabile</strong>: il compito dello scienziato non è accumulare conferme ma <strong>falsificare</strong>." }
  ],
  precursori:[
    { nome:"Karl Popper", provenienza:"Filosofia della scienza", apporto:"«Tutti i processi di ricerca cominciano dai <strong>problemi</strong>»; il criterio di <strong>falsificabilità</strong>" }
  ],
  oggetto:{ formula:"Le <strong>quattro fasi</strong>: <strong>1.</strong> identificazione del problema · <strong>2.</strong> formulazione di una spiegazione teorica · <strong>3.</strong> dimostrazione tramite ricerca empirica · <strong>4.</strong> comunicazione dei risultati.",
    glossa:"<strong>Ricerca di base</strong> (problema teorico, costituisce i fondamenti conoscitivi) e <strong>ricerca applicata</strong> (problema pratico, cerca una soluzione concreta) differiscono per il <strong>problema di partenza</strong>, ma <strong>il processo è totalmente identico</strong>. La distinzione riguarda la motivazione, non lo statuto epistemologico." },
  metodo:{ formula:"Ogni fase ha regole precise; la sequenza è vincolante e la chiusura riapre il ciclo.",
    glossa:"È qui che gli assunti diventano procedura: l'operazionalizzazione entra nella fase 3, l'invarianza nella fase 4 come requisito di replicabilità.",
    vincoli:[
      "<strong>Fase 1 — Il problema</strong> è una <strong>contraddizione fra affermazioni</strong> contenute in una teoria o in determinati fatti. Genera un'<strong>idea anticipatoria</strong>. Dev'essere <strong>rilevante e non banale</strong>. Fonte principale: <strong>le teorie e le ricerche esistenti</strong>, per via <strong>euristica</strong> (una teoria attira studi) o <strong>sistematica</strong> (una teoria fa affermazioni direttamente verificabili).",
      "<strong>Fase 2 — La teoria</strong> è un <strong>insieme organizzato di frasi</strong> che spiegano un fenomeno; l'<strong>ipotesi</strong> è una <strong>predizione testabile</strong> in forma <strong>se-allora</strong>. Una teoria non si testa direttamente: si testano le ipotesi che se ne derivano.",
      "<strong>Fase 3 — Si opera</strong>: si operazionalizza l'ipotesi, si sceglie lo strumento di misura, si progetta il disegno, si raccolgono e si analizzano i dati, si interpretano i risultati.",
      "<strong>Fase 4 — Si comunica</strong>: convegni, <strong>articoli su riviste</strong> (la via più ortodossa), libri. Requisito comune: consentire la <strong>replica</strong>."
    ] },
  teorie:[
    { nome:"La falsificabilità", enunciato:"<strong>Ogni ipotesi deve poter essere falsificata per essere scientifica.</strong> Nessun numero di conferme rende vera un'affermazione: è vera <strong>finché non si dimostra che è falsa</strong>.",
      glossa:"<strong>L'argomento dei cigni</strong>: un solo cigno nero abbatte «tutti i cigni sono bianchi»; nessuna quantità di cigni bianchi la dimostra. Conseguenza operativa: il disegno prevede <strong>ipotesi alternativa</strong> e <strong>ipotesi nulla</strong>." },
    { nome:"Le cinque caratteristiche del ricercatore", enunciato:"<strong>Curioso</strong> · <strong>creativo</strong> (collega fattori apparentemente sconnessi) · <strong>intuitivo</strong> · <strong>aperto mentalmente</strong> · <strong>scettico</strong>." },
    { nome:"Le tre caratteristiche difficili dell'oggetto", enunciato:"<strong>Complessità</strong> — i fenomeni sono <strong>multideterminati</strong>. <strong>Variabilità</strong> — sia <strong>interindividuale</strong> sia <strong>entro lo stesso individuo</strong>. <strong>Reattività</strong>.",
      glossa:"È per questo che le strategie di ricerca in psicologia sono fra le più sofisticate, e che serve una <strong>tassonomia</strong> su tre dimensioni: <strong>metodo</strong> (sperimentale &gt; correlazionale &gt; descrittivi), <strong>tecnica di raccolta</strong> (oggettiva / soggettiva), <strong>ambiente</strong> (laboratorio / campo)." },
    { nome:"Statistica descrittiva e inferenziale", enunciato:"La <strong>descrittiva</strong> non consente inferenze: descrive l'andamento dei dati. L'<strong>inferenziale</strong> consente <strong>generalizzazioni</strong> dal campione ristretto alla popolazione." },
    { nome:"L'etica della ricerca", enunciato:"Standard fissati a livello <strong>governativo</strong> e dalle <strong>associazioni internazionali</strong>, condivisi in tutto il mondo. I <strong>comitati etici</strong> esaminano le proposte; uno studio eticamente discutibile va <strong>modificato e ripassato al vaglio</strong>.",
      glossa:"<strong>Il consenso informato</strong> — documento consegnato <em>prima</em> dell'adesione — contiene <strong>cinque</strong> elementi: scopo e procedure <em>(laddove comunicabile)</em> · potenziali benefici · potenziali rischi · <strong>diritto di rifiuto o ritiro in qualsiasi momento</strong> · tutela dei dati sensibili.<br>La clausola «laddove comunicabile» ammette che in certi disegni rivelare lo scopo <strong>distruggerebbe il dato</strong>: l'etica è un <strong>bilanciamento</strong>, non un elenco di divieti." }
  ],
  esponenti:[
    { nome:"Karl Raimund Popper", anni:"1902-1994", ruolo:"Filosofo della scienza", luogo:"Austria, poi Regno Unito",
      chiE:"Fornisce alla metodologia della ricerca due contributi: la definizione del <strong>problema</strong> come punto di partenza e il criterio di <strong>falsificabilità</strong>.",
      haFatto:["Afferma che <strong>tutti i processi di ricerca cominciano dai problemi</strong>, intesi come contraddizioni fra affermazioni.","Formula il criterio di <strong>falsificabilità</strong>: è scientifica ogni teoria confutabile.","Rovescia il compito dello scienziato: non accumulare conferme ma <strong>falsificare le teorie esistenti</strong>, perché individuare l'errore avvicina alla verità.","<strong>Critica la psicoanalisi</strong>: dal punto di vista logico «non fa una piega», ma non consente alcuna falsificazione — e quindi non è scientifica."],
      teorie:[{ nome:"Falsificazionismo", enunciato:"Teorie incerte, vaghe o troppo astratte non sono concretamente verificabili, quindi non falsificabili, quindi non scientifiche." }],
      esperimenti:[],
      nota:"La sua critica alla psicoanalisi è la stessa anomalia della <strong>L01</strong> vista da un altro angolo. Là il difetto era l'origine extra-accademica e l'assenza di verifica empirica; qui è <strong>logico</strong>: una teoria che spiega qualunque esito non è confermata da nessun esito." }
  ],
  esperimenti:[],
  validita:{
    merito:"Fornisce una procedura <strong>identica per ogni tipo di ricerca</strong> e un criterio di demarcazione — la falsificabilità — che consente di distinguere ciò che è scientifico da ciò che non lo è.",
    limite:"È un processo che <strong>non conclude mai</strong>: la ricerca è una continua approssimazione al vero e nessuna teoria potrà mai essere certa.",
    esito:"La fase 4 riporta alla fase 1: il rapporto fra teoria e ricerca è <strong>continuo e ricorsivo</strong>." },
  precorre:[
    { nome:"I metodi di ricerca", come:"la fase 3 si articola nella tassonomia dei metodi (Schede 3-7)" },
    { nome:"La pubblicazione scientifica", come:"la fase 4 è trattata per intero nella Scheda 8" }
  ],
  formule:[
    "Tutti i processi di ricerca cominciano dai problemi.",
    "È scientifica ogni teoria confutabile.",
    "Processo circolare di approssimazione al vero."
  ],
  errori:[
    { no:"«La ricerca applicata ha un metodo più semplice»", si:"Il <strong>processo è totalmente identico</strong>: cambia il problema di partenza, non lo statuto epistemologico" },
    { no:"«Una teoria confermata molte volte è vera»", si:"<strong>Nessun numero di conferme</strong> la rende vera: è vera <strong>finché non si dimostra falsa</strong>" },
    { no:"Confondere teoria e ipotesi", si:"La <strong>teoria spiega</strong>; l'<strong>ipotesi predice</strong> ed è <strong>testabile</strong>. Una teoria non si testa direttamente" },
    { no:"«Il consenso informato dichiara sempre lo scopo»", si:"«<strong>Laddove questo si possa comunicare</strong>»: in certi disegni rivelarlo distruggerebbe il dato" }
  ]
}

]});

/* ---------- F4.3 — VARIABILI E REVISIONE ---------- */
PGE.schede.fascicoli[3].schede.push({
  id:"S403", tipo:"scuola", nome:"Le variabili e la revisione della letteratura",
  identificazione:{ anno:"—", luogo:"—", lezione:"L05", capitolo:"C18",
    unaRiga:"I mattoncini del disegno: quattro scale di misura in gerarchia cumulativa, e tre livelli di revisione della letteratura in insiemi concentrici." },
  nasceDa:{ problema:"L'operazionalizzazione produce entità misurabili, ma non tutte si misurano allo stesso modo: da come sono fatti i livelli di una variabile dipende che cosa se ne può dire.",
    formula:"Dalla <strong>scala di misura</strong> dipende la <strong>scelta dei test statistici</strong>: sbagliarla produce <strong>risultati non interpretabili</strong> e invalida lo studio." },
  radici:[
    { nome:"Operazionalizzazione", tipo:"assunto", tesi:"Ogni concetto teorico va tradotto in formato replicabile e misurabile: le proprietà così definite sono le <strong>variabili</strong>." }
  ],
  precursori:[],
  oggetto:{ formula:"La <strong>variabile</strong>: un'entità che <strong>varia</strong>. Virtualmente <strong>tutto ciò che può variare</strong> — quantitativamente o anche solo come <strong>presente/assente</strong> — può essere definito variabile.",
    glossa:"La lista degli esempi mescola deliberatamente il banale e l'astratto — genere, altezza, colore dei capelli, ma anche attenzione, memoria, empatia — perché è il punto: <strong>l'operazionalizzazione mette sullo stesso piano operativo cose di natura molto diversa</strong>." },
  metodo:{ formula:"Classificare la variabile con l'<strong>albero decisionale</strong>: tre domande, quattro esiti.",
    glossa:"Il principio che rende memorizzabili le quattro scale: <strong>ogni categoria più complessa contiene le informazioni delle precedenti e ne aggiunge una</strong>. È una gerarchia <strong>cumulativa</strong>, non quattro casi indipendenti.",
    vincoli:[
      "<strong>I livelli sono ordinabili?</strong> Se <strong>no</strong> → scala <strong>NOMINALE</strong> (categoriale): solo <strong>diversità</strong>; categorie discrete; solo etichette, mai numeri né ordine. <em>Genere, colore degli occhi, squadra tifata, religione.</em>",
      "Se <strong>sì</strong> → <strong>gli intervalli fra i livelli sono equivalenti?</strong> Se <strong>no</strong> → scala <strong>ORDINALE</strong>: diversità <strong>+ ordine</strong>; valori ordinali, mai numerici; i livelli sono <strong>ranghi</strong>. <em>Classe sociale, titolo di studio, giorni della settimana.</em>",
      "Se <strong>sì</strong> → <strong>lo zero indica assenza della quantità misurata?</strong> Se <strong>no</strong> → scala a <strong>INTERVALLI EQUIVALENTI</strong>: numerica, ma con <strong>zero arbitrario</strong>. <em>Celsius, Fahrenheit, QI, scale di atteggiamento.</em>",
      "Se <strong>sì</strong> → scala a <strong>RAPPORTI EQUIVALENTI</strong>: <strong>zero naturale</strong>; il rapporto <strong>non dipende dall'unità di misura</strong>. <em>Peso, altezza, età, numero di figli, numero di errori, tempo di latenza, Kelvin.</em>"
    ] },
  teorie:[
    { nome:"Zero arbitrario e zero naturale", enunciato:"Nella scala <strong>Celsius</strong> lo zero è la temperatura di congelamento dell'acqua, non l'assenza di temperatura: è <strong>arbitrario</strong>. Nella scala <strong>Kelvin</strong> lo zero è l'<strong>assenza di movimento fra le molecole</strong>: è <strong>naturale</strong>.",
      glossa:"<strong>La prova pratica</strong>: 20 °C non è «il doppio caldo» di 10 °C — convertendo in Fahrenheit il rapporto sparisce. Un rapporto che dipende dall'unità non è un rapporto reale." },
    { nome:"Qualitative e quantitative", enunciato:"<strong>Nominale + ordinale</strong> = variabili <strong>qualitative</strong>: producono <strong>frequenze</strong> (quanti individui in ciascun livello). <strong>Intervalli + rapporti</strong> = variabili <strong>quantitative</strong> o <strong>metriche</strong>: producono un <strong>punteggio</strong> che informa sull'<strong>intensità</strong>." },
    { nome:"Variabile indipendente e dipendente", enunciato:"<strong>Indipendente (x)</strong>: gli stimoli o eventi comportamentali che si presuppone siano la <strong>causa</strong> di cambiamenti. <strong>Dipendente (y)</strong>: gli eventi che <strong>risentono dell'effetto</strong> della VI, cioè gli <strong>effetti</strong>.",
      glossa:"Supporre una connessione fra variabili costituisce già l'<strong>ipotesi sperimentale</strong>. Esempio: livello di caffeina nel sangue (VI) → numero di battiti cardiaci (VD)." },
    { nome:"VI manipolabili e non manipolabili", enunciato:"<strong>Manipolabili</strong>: se ne possono controllare e modificare i livelli — caffeina, dose di un farmaco, intensità della luce. <strong>Non manipolabili</strong>: esistono in natura e il ricercatore non può agirvi — QI, appartenenza religiosa, età, affiliazione politica.",
      glossa:"È qui che la distinzione produce le sue conseguenze: se la VI <strong>non è manipolabile</strong> non si ha un vero esperimento ma un <strong>quasi esperimento</strong> (Scheda 7)." },
    { nome:"I tre livelli di revisione della letteratura", enunciato:"<strong>Narrativa</strong>: sintesi di un certo numero di articoli; domande <strong>ampie e generiche</strong>; conoscenza <strong>basilare</strong>. <strong>Sistematica</strong>: vero progetto di ricerca su <strong>aspetti specifici</strong>, con <strong>pochi quesiti ben definiti</strong>. <strong>Meta-analisi</strong>: revisione sistematica <strong>+ tecniche statistiche</strong>.",
      glossa:"Da immaginare come <strong>insiemi concentrici</strong>: più si stringe, più si è precisi.<br><strong>Il limite della narrativa</strong>: la selezione delle fonti risponde a <strong>criteri soggettivi</strong> — esempio, i capitoli di un manuale.<br><strong>Che cosa rende sistematica la sistematica</strong>: criteri <strong>rigorosi e stabiliti a priori</strong> in uno <strong>specifico protocollo</strong>, che minimizzano le distorsioni e la rendono <strong>replicabile</strong> da altri. Si riconosce la forma dell'<strong>invarianza</strong>.<br><strong>Quando la meta-analisi non si fa</strong>: con <strong>eterogeneità dei risultati molto ampia</strong> sarebbe fuorviante. Non serve a <em>decidere</em> fra risultati discordanti, serve a <strong>quantificare</strong> un effetto su cui c'è già convergenza." }
  ],
  esponenti:[],
  esperimenti:[],
  validita:{
    merito:"Fornisce lo strumento di classificazione senza il quale nessun dato è analizzabile correttamente, e distingue tre gradi di rigore nella revisione della letteratura.",
    limite:"La classificazione è un prerequisito, non un metodo: da sola non produce conoscenza.",
    esito:"Le variabili entrano in tutti i metodi successivi; la revisione della letteratura è propedeutica a ogni disegno — e nel metodo sperimentale diventa una <strong>condizione di validità</strong>, perché serve a individuare le variabili di confusione." },
  precorre:[
    { nome:"I metodi descrittivi", come:"il campionamento e la codifica presuppongono la classificazione delle variabili" },
    { nome:"Il metodo correlazionale", come:"richiede variabili <strong>quantitative</strong> per il calcolo del coefficiente" },
    { nome:"Il metodo sperimentale", come:"VI, VD e variabili di confusione ne sono l'ossatura" }
  ],
  formule:[
    "Virtualmente tutto ciò che può variare può essere definito variabile.",
    "Criteri rigorosi e stabiliti a priori in uno specifico protocollo."
  ],
  errori:[
    { no:"«La scala Celsius ha uno zero naturale»", si:"È <strong>arbitrario</strong>: lo zero naturale ce l'ha la scala <strong>Kelvin</strong>" },
    { no:"«Le variabili ordinali si possono numerare»", si:"Ammettono solo <strong>ranghi</strong>: non si può dire nulla sull'<strong>intervallo</strong> né sul <strong>rapporto</strong>" },
    { no:"«Sbagliare la scala è un dettaglio»", si:"Determina la <strong>scelta dei test statistici</strong>: produce risultati <strong>non interpretabili</strong> e invalida lo studio" },
    { no:"«La meta-analisi risolve i risultati discordanti»", si:"Con troppa <strong>eterogeneità</strong> è <strong>fuorviante</strong>: quantifica un effetto su cui c'è già convergenza" }
  ]
});

/* ---------- F4.4 — METODI DESCRITTIVI ---------- */
PGE.schede.fascicoli[3].schede.push({
  id:"S404", tipo:"scuola", nome:"I metodi descrittivi",
  identificazione:{ anno:"—", luogo:"—", lezione:"L05", capitolo:"C19",
    unaRiga:"Il primo gradino della scala del controllo: studio dei casi, metodo osservativo, inchiesta. Descrivono e non spiegano — ma senza descrizione non si sa che cosa si sta alterando." },
  nasceDa:{ problema:"Prima di analizzare i nessi causali di un comportamento bisogna sapere <strong>com'è fatto</strong>, e in particolare come funziona nel suo <strong>ambiente naturale</strong> — altrimenti non si saprebbe che cosa si sta alterando trasportandolo in laboratorio.",
    formula:"La <strong>descrizione è il punto di partenza di qualsiasi scienza</strong>." },
  radici:[
    { nome:"La tassonomia per livelli di costrizione", tipo:"metodo", tesi:"I metodi si ordinano per quanto lo sperimentatore può controllare: <strong>descrittivi &lt; correlazionale &lt; sperimentale</strong>. Questi occupano il primo gradino." }
  ],
  precursori:[],
  oggetto:{ formula:"<strong>In che modo si comportano gli uomini o altri animali</strong>, particolarmente <strong>nel loro ambiente naturale</strong>.",
    glossa:"Possono servire a <strong>verificare ipotesi</strong> quando le variabili non consentono metodi più raffinati, oppure a fornire <strong>indicazioni su possibili rapporti causali</strong> da testare in seguito." },
  metodo:{ formula:"Tre metodi distinti: <strong>studio dei casi</strong>, <strong>metodo osservativo</strong>, <strong>inchiesta</strong>.",
    glossa:"Nessuno dei tre consente di stabilire <strong>nessi causali</strong>: al massimo di ipotizzarli.",
    vincoli:[
      "<strong>Studio dei casi</strong> — analisi approfondita di un <strong>individuo</strong> (caso singolo), di un gruppo o di un evento. <em>Non è elettivo per la psicologia generale</em>, che mira a leggi valide per tutti. Dati raccolti con osservazione, interviste, test, rilevazioni fisiologiche, esecuzione di compiti.",
      "<strong>Metodo osservativo</strong> — osservare, registrare, descrivere, trascrivere e <strong>codificare</strong> il comportamento. Il verbo che conta è l'ultimo: è ciò che separa l'osservazione scientifica dal guardare.",
      "<strong>Inchiesta</strong> (sondaggio, <em>survey</em>) — chiede ai soggetti di <strong>riferire</strong> sui propri comportamenti, atteggiamenti o opinioni, con <strong>interviste</strong> (domande aperte) o <strong>questionari</strong> (domande chiuse). Si sceglie spesso per <strong>necessità</strong>: fenomeni ampi o eticamente non studiabili in laboratorio."
    ] },
  teorie:[
    { nome:"Il paradosso dello studio dei casi", enunciato:"Ha il <strong>minimo potere probatorio</strong> e il <strong>massimo potere confutatorio</strong>: <strong>basta un caso</strong> per falsificare una legge generale, mentre nessun numero di casi la dimostra.",
      glossa:"È la <strong>falsificazione di Popper</strong> applicata al metodo più debole di tutti. Se un caso singolo falsifica una teoria, altri ricercatori dovranno verificarlo con disegni appropriati." },
    { nome:"Le tre coppie del metodo osservativo", enunciato:"<strong>Ambiente</strong>: controllata (laboratorio) / naturalistica (ecologica). <strong>Tempo</strong>: diretta (in sincrono) / indiretta (registrazioni). <strong>Codifica</strong>: qualitativa (si descrive) / sistematica (categorie e regole prestabilite).",
      glossa:"Le tre coppie sono <strong>indipendenti</strong> e si combinano: un'osservazione può essere naturalistica, indiretta e sistematica." },
    { nome:"I due problemi dell'osservazione", enunciato:"<strong>1. L'interferenza dell'osservatore</strong>: la presenza del ricercatore altera il comportamento, perché è un elemento estraneo — e il problema <strong>non si risolve</strong> passando all'indiretta, perché i soggetti consapevoli della telecamera possono esserne influenzati. <strong>2. La soggettività del ricercatore</strong> nell'interpretare ciò che osserva.",
      glossa:"<strong>La soluzione al secondo</strong>: la <strong>sistematizzazione</strong> — schemi di <strong>categorie comportamentali prefissate</strong> e <strong>regole di corrispondenza</strong> descritte in <strong>manuali di codifica</strong>.<br>È la stessa mossa del <strong>vocabolario di Titchener</strong> (L01), ma applicata a un comportamento <strong>osservabile da terzi</strong> anziché a un contenuto di coscienza accessibile a uno solo — ed è ciò che la rende praticabile dove quella falliva." },
    { nome:"L'esposizione preventiva allo sperimentatore", enunciato:"Lo sperimentatore resta a lungo nel contesto naturalistico; si instaura un processo di <strong>abituazione</strong> e i membri della popolazione lo considerano <strong>parte del contesto</strong>. Neutralizza l'effetto dell'osservatore.",
      glossa:"È la tecnica dell'<strong>osservazione diretta partecipante</strong> di Jane Goodall." },
    { nome:"Popolazione, campione, campionamento", enunciato:"<strong>Popolazione</strong>: <strong>tutti</strong> gli individui rispetto ai quali si è interessati. <strong>Campione</strong>: un <strong>sottoinsieme</strong>. <strong>Campionamento casuale</strong>: ogni membro ha <strong>le stesse probabilità</strong> di essere scelto. <strong>Stratificato</strong>: si suddivide in sottogruppi (genere, etnia) e poi si campiona casualmente.",
      glossa:"<strong>La regola</strong>: <strong>meglio un campione piccolo ma rappresentativo che grande e non rappresentativo</strong>. La numerosità aiuta la validità statistica, ma la <strong>rappresentatività conta di più</strong>.<br><strong>Gli exit poll</strong> sono l'illustrazione della regola: campioni enormi e inutili, perché chi esce dal seggio in un certo orario non rappresenta l'elettorato." },
    { nome:"Gli altri due problemi dell'inchiesta", enunciato:"<strong>La formulazione delle domande</strong>: anche sottili cambiamenti di parole producono effetti diversi — si approva più volentieri un «<strong>aumento del gettito fiscale</strong>» che un «<strong>aumento delle tasse</strong>». <strong>I partecipanti</strong>: possono essere <strong>riluttanti</strong> su domande personali o risentire della <strong>desiderabilità sociale</strong>." }
  ],
  esponenti:[
    { nome:"Jane Goodall", anni:"1934-2025", ruolo:"Etologa · osservazione diretta partecipante", luogo:"Africa",
      chiE:"Entra a far parte del contesto in cui il comportamento viene agito, invece di osservarlo dall'esterno.",
      haFatto:["Conduce <strong>osservazioni dirette partecipanti</strong> sugli scimpanzé africani.","Applica l'<strong>esposizione preventiva allo sperimentatore</strong> per neutralizzare l'effetto dell'osservatore.","Scopre che gli scimpanzé sono in grado di <strong>realizzare e utilizzare strumenti finalizzati a uno scopo</strong> — ritenuto fino ad allora appannaggio della specie umana."],
      teorie:[], esperimenti:[],
      nota:"<strong>Un confronto che vale la pena fare.</strong> Nella L02 <strong>Köhler</strong> studiava gli scimpanzé in laboratorio, con banane appese e casse, per dimostrare l'<strong>insight</strong>. Goodall li studia nel loro ambiente, senza manipolare nulla, e trova comportamenti strumentali complessi. Stessa specie, stesso tema, <strong>metodi opposti</strong> — e i due risultati si sostengono a vicenda." },
    { nome:"Phineas Gage", anni:"1823-1860", ruolo:"Caso singolo", luogo:"Stati Uniti",
      chiE:"Il caso da cui parte molta conoscenza neuropsicologica: una sbarra di ferro gli attraversò il cranio da parte a parte, e a posteriori si ricostruì che le lesioni riportate potevano provocare i comportamenti sintomatici osservati.",
      haFatto:["È l'esempio della lezione per lo <strong>studio di caso singolo</strong> in neuropsicologia."],
      teorie:[], esperimenti:[],
      nota:"<strong>[N.d.R.]</strong> Nella registrazione la lesione è descritta come «resezione del corpo calloso». In realtà la sbarra attraversò il <strong>lobo frontale sinistro</strong>, e il caso è ricordato per le alterazioni di personalità e condotta conseguenti a danno <strong>prefrontale</strong>. La sostanza del ragionamento non cambia." }
  ],
  esperimenti:[
    { nome:"Lo specchio unidirezionale", disegno:["Una stanza di laboratorio che riproduce un ambiente domestico.","Lo sperimentatore osserva attraverso uno specchio che dall'altra parte appare opaco."],
      risultato:"Si osservano comportamenti in un ambiente controllato senza che i soggetti vedano l'osservatore.",
      significato:"Esempio di osservazione <strong>controllata</strong> e <strong>indiretta</strong>. Usato prevalentemente per bambini e <strong>diadi madre-bambino</strong>." },
    { nome:"EAR — Electronically Activated Recorder", disegno:["Un registratore digitale che si attiva elettronicamente.","Cattura <strong>registrazioni campionate nel tempo</strong> durante la vita quotidiana del soggetto."],
      risultato:"Si ottiene un campione temporale del comportamento reale, analizzabile a posteriori.",
      significato:"Esempio di osservazione <strong>indiretta</strong> che si avvale di strumentazione tecnologica. Inizialmente usato su studenti universitari." }
  ],
  validita:{
    merito:"Consentono di studiare <strong>fenomeni rari</strong> e <strong>comportamenti spontanei</strong>, di raccogliere informazioni da soggetti che non parlano né eseguono compiti a richiesta (bambini piccoli, animali), e di seguire l'<strong>evoluzione nel tempo</strong>. L'inchiesta raccoglie molte informazioni su popolazioni ampie.",
    limite:"<strong>Nessuno fornisce nessi causali.</strong> Lo studio dei casi non è generalizzabile e con casi atipici è fuorviante; l'osservazione non permette di controllare tutti i fattori né di replicare a richiesta; l'inchiesta si basa su <strong>resoconti personali</strong> ed è esposta a campioni non rappresentativi e domande mal poste.",
    esito:"Forniscono la base descrittiva su cui i metodi quantitativi lavorano; l'inchiesta, se codificata su scale numeriche, apre direttamente al metodo correlazionale." },
  precorre:[
    { nome:"Metodo correlazionale", come:"quando i dati dell'inchiesta vengono <strong>codificati su scale numeriche</strong> si possono calcolare correlazioni" },
    { nome:"Metodo sperimentale", come:"la descrizione fornisce le <strong>ipotesi</strong> da testare e la conoscenza del comportamento naturale" }
  ],
  formule:[
    "Meglio un campione piccolo ma rappresentativo che grande e non rappresentativo.",
    "Osservare, registrare, descrivere, trascrivere e codificare il comportamento."
  ],
  errori:[
    { no:"«Lo studio dei casi non serve alla psicologia generale»", si:"Non è <strong>elettivo</strong>, ma ha il <strong>massimo potere confutatorio</strong>: basta un caso per falsificare una legge" },
    { no:"«L'osservazione indiretta elimina l'interferenza dell'osservatore»", si:"<strong>No</strong>: i soggetti consapevoli della telecamera possono comunque esserne influenzati" },
    { no:"«Un campione grande è per definizione migliore»", si:"Gli <strong>exit poll</strong> hanno campioni enormi e sbagliano lo stesso: conta la <strong>rappresentatività</strong>" },
    { no:"«Le domande di un questionario sono neutre»", si:"«Aumento del <strong>gettito fiscale</strong>» e «aumento delle <strong>tasse</strong>» ottengono approvazioni diverse" }
  ]
});

/* ---------- F4.5 — CORRELAZIONALE ---------- */
PGE.schede.fascicoli[3].schede.push({
  id:"S405", tipo:"scuola", nome:"Il metodo correlazionale",
  identificazione:{ anno:"—", luogo:"—", lezione:"L06", capitolo:"C20",
    unaRiga:"Un passo oltre i descrittivi: misura quantitativamente l'associazione fra variabili. Consente previsioni, non spiegazioni." },
  nasceDa:{ problema:"I metodi descrittivi permettono di <strong>intravedere</strong> relazioni fra eventi, ma non di stabilire se ci siano davvero, né quanto siano forti.",
    formula:"L'esigenza è <strong>misurare</strong> l'associazione, non solo osservarla — perché solo sapendo che due eventi sono associati si può <strong>prevedere</strong> l'uno conoscendo l'altro." },
  radici:[
    { nome:"I metodi descrittivi", tipo:"metodo", tesi:"Come la ricerca descrittiva, il correlazionale si limita a <strong>osservare e rilevare</strong>: il ricercatore non apporta modifiche alle variabili." }
  ],
  precursori:[
    { nome:"L'inchiesta", provenienza:"Metodi descrittivi (L05)", apporto:"Quando la mole di dati raccolta viene <strong>codificata su scale numeriche</strong>, si aprono le statistiche quantitative e quindi le correlazioni" }
  ],
  oggetto:{ formula:"La <strong>relazione, l'associazione fra variabili</strong>, valutata in modo <strong>specifico e appropriato</strong> attraverso la misura quantitativa.",
    glossa:"Le variabili studiabili sono le più disparate, comprese quelle <strong>non manipolabili</strong>: età, scolarità, ambiente fisico e sociale, ore dedicate ad attività, stati emotivi, risultati conseguiti, tratti di personalità, stili motivazionali, misure di intelligenza." },
  metodo:{ formula:"Si seleziona un campione → si misurano le variabili <strong>x</strong> e <strong>y</strong> → si eseguono <strong>calcoli statistici</strong> per verificare se esiste realmente una relazione.",
    glossa:"⚠️ Il ricercatore <strong>non esercita alcun tipo di controllo sulla situazione</strong>, ed è precisamente questo il motivo per cui non è il metodo scientifico per eccellenza.",
    vincoli:[] },
  teorie:[
    { nome:"Le due ragioni per cui la correlazione non è causalità", enunciato:"<strong>1. Bidirezionalità del nesso</strong> — osservando due variabili contemporaneamente non si può stabilire quale causi quale. <strong>2. Terza variabile</strong> — a spiegare la relazione può intervenire una variabile <strong>non osservata</strong>.",
      glossa:"<strong>Esempio</strong>: fra la scelta di programmi TV <strong>aggressivi</strong> e l'<strong>aggressività dello spettatore</strong>, guardare quei programmi può aumentare l'aggressività, <em>ma anche</em> l'aggressività può portare a sceglierli; oppure un <strong>livello di energia insolitamente alto</strong> può spiegare entrambe.<br><strong>Secondo esempio</strong>: fra <strong>tempo passato all'aperto</strong> e <strong>sensazione di benessere</strong> vale lo stesso, e un <strong>tratto di personalità</strong> non indagato può spiegare entrambi." },
    { nome:"Il coefficiente di correlazione (r)", enunciato:"Misura statistica che dice <strong>quanto strettamente due cose variano insieme</strong> — e quindi con quanta precisione l'una sia <strong>predittiva</strong> dell'altra. Fornisce <strong>due</strong> informazioni: il <strong>segno</strong> dà la <strong>direzione</strong>, il <strong>valore</strong> dà la <strong>forza</strong>.",
      glossa:"<strong>Positiva (+)</strong>: valori alti con valori alti — crescita <strong>direttamente proporzionale</strong>. <strong>Negativa (−)</strong>: valori alti con valori bassi — crescita <strong>indirettamente proporzionale</strong>.<br><strong>Forza</strong>: da <strong>perfetta</strong> (massima) all'<strong>assenza di correlazione</strong>, con coefficiente prossimo a <strong>zero</strong>." },
    { nome:"I grafici di dispersione", enunciato:"Rappresentano visivamente <strong>direzione e forza</strong> graficando i singoli punteggi; la <strong>retta interpolante</strong> ne mostra l'andamento.",
      glossa:"Nei tre esempi della lezione la <strong>y</strong> è sempre il <strong>voto conseguito a un esame</strong>. Con x = <strong>ore di studio settimanali</strong>: correlazione <strong>positiva</strong>, retta verso l'alto. Con x = <strong>numero di mele consumate</strong>: punti a caso, <strong>nessuna correlazione</strong>, nessuna retta possibile. Con x = <strong>ore davanti alla TV</strong>: correlazione <strong>negativa</strong>, retta di direzione opposta." }
  ],
  esponenti:[],
  esperimenti:[
    { nome:"I quattro esempi di correlazione della lezione", disegno:["Si selezionano campioni e si misurano coppie di variabili su scale numeriche.","Si calcola il coefficiente di correlazione e se ne legge segno e valore."],
      risultato:"<strong>Positive</strong>: quanti più contenuti sessuali gli adolescenti vedono in TV, tanto più frequenti i loro rapporti sessuali; quanto più a lungo i bambini sono allattati al seno, tanto maggiori i successi scolastici.<br><strong>Negative</strong>: quanto maggiore l'uso di dispositivi elettronici, tanto minore la soddisfazione per la propria vita; in famiglie povere, quanto maggiore l'incremento del reddito, tanto minori i sintomi psichiatrici dei bambini.",
      significato:"Sull'allattamento la lezione insiste: sarebbe <strong>fuorviante</strong> inferire che l'allattamento produca i successi scolastici, perché molte altre variabili non controllate possono influire su entrambi. È l'esempio-tipo della <strong>terza variabile</strong>." }
  ],
  validita:{
    merito:"Consente <strong>generalizzazioni</strong> dal campione alla popolazione, in <strong>ambiente naturale</strong>; genera <strong>idee</strong> da approfondire in laboratorio; permette di studiare un <strong>alto numero di variabili</strong>, comprese quelle inaccessibili per motivi <strong>pratici o etici</strong>; e permette <strong>predizioni</strong>.",
    limite:"<strong>Non fornisce alcuna relazione causale</strong>, per la bidirezionalità del nesso e la possibile terza variabile.",
    esito:"È il gradino intermedio: apre al metodo sperimentale, che è costruito proprio per rispondere alle sue due mancanze." },
  precorre:[
    { nome:"Il metodo sperimentale", come:"la <strong>manipolazione</strong> risponde alla bidirezionalità, il <strong>controllo</strong> risponde alla terza variabile" }
  ],
  formule:[
    "La crescita di una variabile è direttamente proporzionale alla crescita dell'altra.",
    "Bidirezionalità del nesso e intervento di una terza variabile."
  ],
  errori:[
    { no:"«Se due variabili correlano, una causa l'altra»", si:"<strong>No</strong>, per <strong>due</strong> ragioni: la <strong>bidirezionalità</strong> e la possibile <strong>terza variabile</strong>" },
    { no:"«Un coefficiente negativo indica una correlazione debole»", si:"Il <strong>segno</strong> dà la <strong>direzione</strong>, il <strong>valore</strong> dà la <strong>forza</strong>: sono due informazioni distinte" },
    { no:"«Il correlazionale è un metodo descrittivo»", si:"È un <strong>passo oltre</strong>: aggiunge la <strong>misura quantitativa</strong>. Ma come i descrittivi non manipola né controlla" }
  ]
});

/* ---------- F4.6 — SPERIMENTALE ---------- */
PGE.schede.fascicoli[3].schede.push({
  id:"S406", tipo:"scuola", nome:"Il metodo sperimentale",
  identificazione:{ anno:"—", luogo:"Laboratorio", lezione:"L06", capitolo:"C20",
    unaRiga:"Il metodo scientifico per eccellenza: l'unico che rispetta tutti e quattro gli assunti, e l'unico che stabilisce nessi causa-effetto." },
  nasceDa:{ problema:"Il metodo correlazionale non stabilisce nessi causali per due ragioni precise: la <strong>bidirezionalità</strong> del nesso e la possibile <strong>terza variabile</strong>.",
    formula:"Il metodo sperimentale è costruito <strong>come risposta a quelle due obiezioni</strong>: la <strong>manipolazione</strong> elimina la bidirezionalità, il <strong>controllo delle altre variabili</strong> elimina la terza variabile." },
  radici:[
    { nome:"I quattro assunti del metodo scientifico", tipo:"metodo", tesi:"È l'<strong>unico</strong> metodo che li rispetta tutti: <strong>determinismo</strong> (stabilisce relazioni causali), <strong>empirismo</strong> (dimostra praticamente le ipotesi), <strong>invarianza</strong>, <strong>operazionalizzazione</strong> (rende misurabili variabili astratte)." },
    { nome:"Il metodo ipotetico-deduttivo", tipo:"logica", tesi:"Da ipotesi teoriche formulate <strong>a priori</strong> si costruisce un assetto sperimentale per verificarle." }
  ],
  precursori:[
    { nome:"Metodo correlazionale", provenienza:"L06", apporto:"Ne definisce per contrasto i due limiti da superare" },
    { nome:"Metodi descrittivi", provenienza:"L05", apporto:"Forniscono la conoscenza del comportamento naturale e le ipotesi da testare" },
    { nome:"Revisione della letteratura", provenienza:"L05", apporto:"È ciò che consente di <strong>conoscere</strong> le variabili di confusione — e quindi di controllarle: da preliminare bibliografico diventa <strong>condizione di validità</strong>" }
  ],
  oggetto:{ formula:"I <strong>rapporti causa-effetto</strong> fra variabili, stabiliti attraverso <strong>esperimenti</strong> volti a verificare ipotesi formulate a priori.",
    glossa:"Ciò che si verifica sul campione può essere <strong>generalizzato all'intera popolazione</strong> di riferimento tramite la statistica inferenziale.<br><strong>Manipolazione sperimentale</strong>: il cambiamento che lo sperimentatore induce sulla variabile.<br>⚠️ La lezione avverte che <strong>la terminologia sarà valutata in sede d'esame</strong>: qui i termini vanno usati con precisione, non parafrasati." },
  metodo:{ formula:"<strong>Disegno sperimentale</strong>: definizione delle variabili → scelta del campione → costituzione dei gruppi → manipolazione e misura → verifica inferenziale delle ipotesi.",
    glossa:"Si svolge generalmente in <strong>laboratorio</strong>, ambiente dedicato, controllato e <strong>pertanto artificiale</strong>, dove si creano di proposito le condizioni migliori per studiare la relazione x→y.",
    vincoli:[
      "<strong>Le tre variabili</strong> — <strong>indipendente x</strong>: manipolata, ritenuta la <strong>causa</strong>, ha <strong>livelli</strong> che sono le condizioni. <strong>Dipendente y</strong>: <strong>misurata</strong>, ritenuta l'<strong>effetto</strong>, dev'essere <strong>quantitativa</strong>. <strong>Di confusione z</strong>: tutto ciò che può interferire, e che dev'essere <strong>conosciuta</strong> per poter essere controllata.",
      "<strong>Il campione</strong> — dev'essere <strong>rappresentativo</strong> della popolazione su cui si formulano le ipotesi, e i soggetti vanno scelti in modo <strong>casuale</strong>: ogni soggetto ha <strong>la stessa probabilità</strong> di essere scelto. ⚠️ <strong>Scelta casuale ≠ scelta a caso</strong>: la prima è controllata e bilanciata, la seconda è prendere i primi che capitano.",
      "<strong>I gruppi</strong> — uno o più <strong>gruppi sperimentali</strong>, in cui la variabile manipolata è <strong>presente</strong>, e un <strong>gruppo di controllo</strong>, in cui è <strong>assente</strong>. L'assegnazione dev'essere <strong>casuale e randomizzata</strong>.",
      "<strong>Le due ipotesi</strong> — l'<strong>alternativa</strong> (x e y <em>sono</em> legate da un nesso causale: è l'ipotesi sperimentale) e la <strong>nulla</strong> (non lo sono). Lo scopo è confermare che le variazioni di y siano dovute a x <strong>e non al caso</strong>."
    ] },
  teorie:[
    { nome:"I due disegni sperimentali", enunciato:"<strong>Tra i soggetti</strong>: soggetti <strong>diversi</strong> assegnati a gruppi diversi, ciascuno riceve <strong>una sola</strong> condizione. <strong>Entro i soggetti</strong>: i soggetti formano <strong>un unico gruppo</strong> sottoposto a <strong>tutte</strong> le condizioni.",
      glossa:"<strong>Tra</strong> — vantaggio: minimizza i problemi legati allo <strong>strumento di misura</strong>, perché il test si fa una volta sola; svantaggio: richiede un <strong>campione ampio</strong>. Esempio: disegno <strong>trasversale</strong>.<br><strong>Entro</strong> — vantaggio: <strong>numerosità maggiore</strong> nelle misurazioni; svantaggio: <strong>sensibilizzazione</strong> e <strong>abituazione</strong> agli strumenti. Esempio: disegno <strong>longitudinale</strong>." },
    { nome:"Le due validità", enunciato:"<strong>Validità interna</strong>: quanto si è sicuri che la relazione causale indagata <strong>sia veramente quella</strong>. In laboratorio è <strong>massima</strong>. <strong>Validità ecologica</strong>: quanto le generalizzazioni valgono in ambiente <strong>naturale</strong>. In laboratorio è <strong>bassa</strong>.",
      glossa:"È il <strong>vero limite</strong> della ricerca sperimentale in psicologia, perché i fenomeni riprodotti in laboratorio <strong>non sono mai proprio uguali</strong> a quelli naturali.<br>Non è un limite nuovo: è la stessa critica che <strong>Neisser</strong> muoveva al cognitivismo (L03). Le due validità sono in <strong>trade-off</strong>." },
    { nome:"Il quasi esperimento", enunciato:"Quando la variabile indipendente <strong>non è manipolabile</strong> non si ha un vero esperimento ma un <strong>quasi esperimento</strong>, perché manca il <strong>controllo assoluto</strong>.",
      glossa:"Esempio: per indagare una <strong>differenza di genere</strong> si è costretti ad avere due gruppi — maschi e femmine — la cui divisione è <strong>data a priori</strong>. È la conseguenza diretta della distinzione fra VI manipolabili e non manipolabili." },
    { nome:"I due tipi di errore", enunciato:"<strong>Errore di primo tipo (α)</strong>: dichiarare <strong>falsa</strong> l'ipotesi nulla quando in realtà è <strong>vera</strong> — dire che ciò che si osserva non è dovuto al caso quando invece lo è. <strong>Errore di secondo tipo (β)</strong>: dichiarare <strong>vera</strong> l'ipotesi nulla quando in realtà è <strong>falsa</strong>.",
      glossa:"<strong>β diminuisce con l'aumentare di α, e viceversa</strong>: i due errori sono complementari e <strong>non si possono minimizzare entrambi</strong>. Bisogna decidere quale si è disposti a commettere più spesso — ed è una decisione, non un calcolo.<br>La <strong>statistica inferenziale</strong> (per esempio l'<strong>analisi della varianza</strong>) stabilisce se le differenze siano <strong>significative</strong> — generalizzabili — o <strong>dovute al caso</strong>. L'inferenza resta comunque <strong>probabilistica</strong>." }
  ],
  esponenti:[],
  esperimenti:[
    { nome:"Rumore e apprendimento (uomo)", disegno:["<strong>Ipotesi</strong>: il rumore ha un'influenza negativa sull'apprendimento negli studenti universitari.","<strong>VI</strong>: quantità di rumore — stanza <strong>senza</strong> (controllo) e <strong>con</strong> rumore (sperimentale).","<strong>VD</strong>: numero di errori a un test a risposta multipla.","<strong>Confusione</strong>: temperatura e illuminazione costanti; la <strong>disposizione del ricercatore</strong> nell'interagire con i soggetti."],
      risultato:"Il confronto statistico fra i due gruppi permette di generalizzare le eventuali differenze alla popolazione.",
      significato:"La VI va <strong>operazionalizzata</strong> in modo che un altro sperimentatore, <strong>anche a dieci anni di distanza e molto lontano geograficamente</strong>, possa rifare l'esperimento <strong>tale e quale</strong>." },
    { nome:"Propranololo e stress (scimmie)", disegno:["<strong>Ipotesi</strong>: il propranololo previene patologie cardiache in scimmie stressate.","<strong>VI</strong>: il farmaco — assenza (controllo) e somministrazione (sperimentale). <strong>Entrambe</strong> le condizioni prevedono esposizione a stress: dieta ipercalorica, ingresso di estranei.","<strong>VD</strong>: parametri indicatori di patologia cardiaca, per esempio la frequenza cardiaca.","<strong>Confusione</strong>: condizioni stressanti bilanciate; illuminazione, temperatura, atteggiamento dello sperimentatore costanti."],
      risultato:"Se le scimmie trattate risultano più resistenti alla patologia cardiaca, le statistiche inferenziali dicono se il risultato è estensibile alla popolazione.",
      significato:"Gli animali consentono di studiare in laboratorio fenomeni <strong>eticamente impossibili</strong> sull'uomo. E il campionamento è più semplice: gli <strong>allevamenti da laboratorio</strong> forniscono animali controllati per malattie e variabilità individuale, quindi il campione è <strong>verosimilmente molto rappresentativo</strong>." },
    { nome:"Arricchimento ambientale e neuroplasticità (ratti)", disegno:["<strong>Ipotesi</strong>: le stimolazioni ambientali precoci migliorano lo sviluppo cerebrale e cognitivo.","<strong>VI</strong>: esposizione alle stimolazioni, operazionalizzata con un <strong>modello di arricchimento ambientale</strong> — allevamento in condizioni <strong>standard</strong> o <strong>arricchite</strong> dopo lo svezzamento.","<strong>VD</strong>: indicatori di <strong>sinaptogenesi</strong> e <strong>dendritogenesi</strong>; numero di risposte corrette a test cognitivi."],
      risultato:"La condizione standard produce performance cognitive e indici morfologici e neuronali <strong>più bassi</strong> rispetto alla condizione arricchita.",
      significato:"È il filone di ricerca della docente, e mostra il disegno sperimentale applicato a variabili dipendenti sia <strong>comportamentali</strong> sia <strong>morfologiche</strong>." }
  ],
  validita:{
    merito:"<strong>Stabilisce rapporti causa-effetto</strong>; ha <strong>alta validità interna</strong>; consente di approfondire e definire le relazioni osservate con i metodi correlazionali e descrittivi.",
    limite:"<strong>Bassa validità ecologica</strong>. Non sempre è possibile <strong>operazionalizzare e misurare</strong> tutte le variabili (→ quasi esperimenti); non sempre si può <strong>assegnare a caso</strong> i soggetti o <strong>manipolare</strong> la VI; non sempre si possono <strong>individuare tutte</strong> le variabili di confusione; e motivazioni <strong>etiche e pratiche</strong> possono rendere l'esperimento impossibile.",
    esito:"Resta il metodo di riferimento, ma la sua applicabilità è condizionata: per questo la psicologia usa anche tutti gli altri." },
  precorre:[
    { nome:"La ricerca originale", come:"è la tipologia di articolo che riporta esperimenti o quasi esperimenti (Scheda 8)" }
  ],
  formule:[
    "Il cambiamento che lo sperimentatore induce sulla variabile.",
    "Le variazioni di y sono dovute alla modificazione di x e non al caso.",
    "Dichiarare falsa l'ipotesi nulla quando in realtà è vera."
  ],
  errori:[
    { no:"«Scelta casuale = prendere i soggetti a caso»", si:"La <strong>scelta casuale è controllata</strong>: bilancia il genere, esclude patologie, mantiene le caratteristiche tipiche della popolazione" },
    { no:"«Il laboratorio garantisce la validità dell'esperimento»", si:"Garantisce la <strong>validità interna</strong>; la <strong>ecologica</strong> resta <strong>bassa</strong> — è il vero limite" },
    { no:"«Se manipolo una variabile ho un esperimento»", si:"Se la VI <strong>non è manipolabile</strong> si ha un <strong>quasi esperimento</strong>: manca il controllo assoluto" },
    { no:"«Basta ridurre α per rendere lo studio più sicuro»", si:"<strong>β aumenta quando α diminuisce</strong>: i due errori sono complementari e non si minimizzano entrambi" }
  ]
});

/* ---------- F4.7 — PUBBLICAZIONE ---------- */
PGE.schede.fascicoli[3].schede.push({
  id:"S407", tipo:"scuola", nome:"La pubblicazione scientifica",
  identificazione:{ anno:"—", luogo:"—", lezione:"L07", capitolo:"C21",
    unaRiga:"La quarta fase del processo di ricerca: come la conoscenza entra nel circuito internazionale, e che cosa la rende scientifica prima ancora di entrarci." },
  nasceDa:{ problema:"Un risultato che resta nel laboratorio che lo ha prodotto non accresce la conoscenza. Ma se chiunque potesse pubblicare qualsiasi cosa, la letteratura non varrebbe nulla.",
    formula:"La pubblicazione scientifica è la <strong>principale e ufficiale forma di divulgazione</strong> della conoscenza; ciò che la rende scientifica è la <strong>revisione tra pari</strong>, che valuta il contenuto <strong>ex ante</strong>." },
  radici:[
    { nome:"L'assunto di invarianza", tipo:"metodo", tesi:"Il requisito di descrivere metodi e procedure in modo da <strong>consentire la replica</strong> è l'invarianza trasformata in norma editoriale." },
    { nome:"Il falsificazionismo", tipo:"epistemologia", tesi:"La <strong>doppia valutazione</strong> ex ante (peer review) ed ex post (citazioni, commenti, confutazioni) è la forma istituzionale della falsificabilità: nessuna pubblicazione è definitivamente vera." }
  ],
  precursori:[
    { nome:"Fase 4 del processo di ricerca", provenienza:"L04", apporto:"La comunicazione dei risultati è la fase che chiude il cerchio e ne apre un altro" }
  ],
  oggetto:{ formula:"I <strong>risultati</strong>, la <strong>metodologia</strong> e le <strong>conclusioni</strong> di una ricerca, messi a disposizione della <strong>comunità scientifica internazionale</strong>.",
    glossa:"Circola in formato cartaceo ma <strong>soprattutto digitale</strong>, tramite <strong>riviste</strong> di gruppi editoriali specializzati e riconosciuti. La <strong>lingua è l'inglese</strong>, lingua ufficiale della comunità internazionale dalla metà del XX secolo.<br>🔑 <strong>La distinzione strutturale</strong>: nelle pubblicazioni <strong>non</strong> scientifiche la valutazione critica avviene <strong>ex post</strong>, dopo la pubblicazione; in quelle scientifiche <strong>ex ante</strong>." },
  metodo:{ formula:"<strong>La revisione tra pari</strong> (<em>peer review</em>): manoscritto → editore → 2-4 revisori esterni anonimi → rifiuto, accettazione o revisioni.",
    glossa:"Sembra complicato, ma è ciò che <strong>garantisce la qualità</strong>: altrimenti ognuno potrebbe pubblicare qualsiasi cosa.",
    vincoli:[
      "<strong>L'editore</strong> valuta l'<strong>adeguatezza formale</strong> (ogni rivista ha un <em>vademecum</em> per l'autore: formattazione, figure, caratteri), la presenza dei <strong>documenti</strong>, le <strong>parti grafiche</strong> e i <strong>permessi etici</strong>. ⚠️ <strong>Non fa l'analisi scientifica</strong>, e può rifiutare un lavoro <strong>valido</strong> se la rivista è satura.",
      "<strong>I revisori</strong> sono <strong>ricercatori come gli autori</strong>, in genere <strong>due o quattro</strong>. Il lavoro <strong>non è retribuito</strong> ma è un <strong>onore</strong>, perché significa essere riconosciuti esperti del settore.",
      "<strong>Il documento di revisione</strong> ha tre parti: <strong>riassunto e commento generale</strong> (originalità, contributo, importanza, <strong>validità metodologica</strong>); <strong>criticità importanti</strong> — si valuta soprattutto la sezione <strong>metodologica</strong>: le informazioni bastano a <strong>replicare</strong> lo studio? c'è un <strong>bias metodologico</strong>?; <strong>problematiche minori</strong> — stile, suggerimenti bibliografici.",
      "<strong>L'etica</strong>: ogni progetto su soggetti umani o animali deve rispettare principi etici. In Italia il <strong>codice etico dell'AIP</strong>; garanti sono i <strong>comitati etici</strong>, che valutano il progetto <strong>prima</strong> dell'esecuzione."
    ] },
  teorie:[
    { nome:"Le tipologie di pubblicazione", enunciato:"<strong>Atti di congresso</strong> — presentazione <strong>orale</strong> (simposi, talk) o <strong>poster</strong>; <strong>non</strong> vera peer review, ma controllo di un <strong>comitato scientifico</strong> sugli abstract. <strong>Articolo scientifico</strong> (<em>paper</em>) — la forma principale, in <strong>cinque tipologie</strong>: ricerca originale, revisione della letteratura, case report, trial clinico, commento.",
      glossa:"Le cinque tipologie <strong>ricalcano i metodi di ricerca</strong>: ricerca originale = sperimentale; revisione = revisione della letteratura; case report = studio dei casi. La forma editoriale rispecchia la tassonomia metodologica." },
    { nome:"La struttura dell'articolo", enunciato:"Sempre la stessa, a prescindere dalla casa editrice: <strong>titolo · autori · affiliazioni · parole chiave · abstract · introduzione · metodi · risultati · discussione e conclusioni · bibliografia · materiale supplementare</strong>.",
      glossa:"<strong>Titolo</strong>: la parte <strong>più letta in assoluto</strong>; specifico, non vago; a volte con <em>running title</em>. <strong>Parole chiave</strong>: servono all'<strong>indicizzazione</strong>. <strong>Abstract</strong>: la parte <strong>più letta dopo il titolo</strong>, libera su PubMed; contiene background → metodi → risultati → conclusioni; è in base a esso che si decide se leggere l'articolo. <strong>Introduzione</strong>: contestualizza e si chiude con l'<strong>esplicitazione del razionale</strong>. <strong>Metodi</strong>: dettagli <strong>sufficienti a ripetere lo studio</strong>; sottosezioni soggetti, strumenti, procedura, analisi statistica." },
    { nome:"Le tre posizioni d'autore", enunciato:"<strong>Primo autore</strong>: responsabile del <strong>disegno sperimentale</strong>. <strong>Ultimo autore</strong>: il <strong>supervisore</strong> del gruppo, o chi mette i fondi. <strong>Corresponding author</strong>: tiene i rapporti con l'editore — in genere il primo o l'ultimo.",
      glossa:"Per essere autore servono contributi sostanziali nell'<strong>ideazione e realizzazione</strong>, nell'<strong>acquisizione o interpretazione</strong> dei dati; aver partecipato alla <strong>stesura o revisione</strong>; aver dato la propria <strong>approvazione</strong> prima dell'invio." },
    { nome:"Risultati e discussione — la differenza di stile", enunciato:"Nei <strong>risultati</strong> lo stile è <strong>descrittivo</strong>: si descrive e <strong>non</strong> si spiega. Nella <strong>discussione</strong> è <strong>argomentativo</strong>: si spiega alla luce delle evidenze già presenti in letteratura.",
      glossa:"Nei risultati vanno riportati gli indici <strong>inferenziali</strong> (analisi della varianza, correlazione) <strong>e</strong> quelli <strong>descrittivi</strong> (<strong>media</strong> e <strong>deviazione standard</strong>). La deviazione standard tiene conto della <strong>variabilità</strong> interna al gruppo: più è bassa, meno variabilità. Gli <strong>asterischi</strong> sui grafici indicano la <strong>significatività</strong>: dove mancano, le differenze <strong>non sono estendibili alla popolazione</strong>.<br>La discussione segue <strong>sei mosse</strong>: riassumere · problemi metodologici · confronto con lavori precedenti · implicazioni · ricerche future · conclusione succinta." },
    { nome:"La bibliografia", enunciato:"Elenco delle pubblicazioni <strong>citate</strong>. Nel testo: <strong>primo autore <em>et al.</em>, anno</strong>, oppure <strong>numeri fra parentesi</strong>. L'elenco finale è in <strong>ordine alfabetico</strong> o di <strong>comparizione</strong>.",
      glossa:"I due stili citati sono l'<strong>APA</strong> — prettamente psicologico — e il <strong>Vancouver</strong>. <strong>Cambia la formattazione, non l'informazione</strong>: in entrambi servono autori (cognome e iniziali), anno, titolo, rivista, volume, pagine." },
    { nome:"Impact factor e accesso", enunciato:"<strong>Impact factor</strong>: indice <strong>dinamico</strong> che misura il prestigio di una <strong>rivista</strong> in base alle citazioni ottenute dai lavori dei <strong>due anni precedenti</strong>. Per il singolo ricercatore l'equivalente è l'<strong>indice H</strong>.<br><strong>Accesso chiuso</strong>: paga <strong>l'utente</strong> che legge. <strong>Accesso aperto</strong>: paga <strong>il ricercatore</strong> che pubblica, e l'articolo diventa gratuitamente fruibile — quindi più <strong>visibile</strong>.",
      glossa:"🔑 <strong>La doppia valutazione</strong>: ogni lavoro subisce una valutazione <strong>ex ante</strong> (peer review) e una <strong>ex post</strong>, quantitativa (numero di citazioni)." },
    { nome:"Le banche dati", enunciato:"<strong>PubMed</strong>: <strong>gratuita</strong>, contiene tutta la ricerca <strong>biomedica e psicologica</strong>, appartiene al <strong>National Institute of Health</strong> ed è aggiornata <strong>settimanalmente</strong>; contiene <strong>solo lavori scientifici</strong>. <strong>Google Scholar</strong>: gratuito, ma contiene anche <strong>letteratura grigia</strong> non sottoposta a peer review.",
      glossa:"PubMed non contiene i lavori per intero, ma <strong>riferimenti, titoli e abstract</strong>: serve a fare uno <strong>screening</strong> e a capire se un lavoro meriti di essere letto. Ogni voce ha un <strong>link al sito della rivista</strong> per il full text. Si cerca per <strong>parole chiave</strong>, <strong>autore</strong> o <strong>rivista</strong>, con <strong>filtri</strong> per periodo, reperibilità o tipo di articolo." }
  ],
  esponenti:[],
  esperimenti:[],
  validita:{
    merito:"Garantisce un <strong>controllo qualitativo preventivo</strong> e rende la conoscenza <strong>accessibile e verificabile</strong> da chiunque nella comunità internazionale. La struttura fissa dell'articolo consente di <strong>valutare, replicare e confutare</strong>.",
    limite:"Il processo è lento e in parte arbitrario: un lavoro può essere rifiutato <strong>pur essendo valido</strong>; la revisione è <strong>non retribuita</strong> e dipende dalla disponibilità dei ricercatori; l'<strong>accesso chiuso</strong> limita la fruibilità.",
    esito:"Chiude il ciclo e ne apre un altro: la pubblicazione consente di identificare le <strong>questioni rimaste irrisolte</strong>, che diventano i problemi da cui parte la ricerca successiva." },
  precorre:[
    { nome:"Un nuovo ciclo di ricerca", come:"le questioni irrisolte identificate dopo la pubblicazione sono i <strong>problemi</strong> della fase 1" }
  ],
  formule:[
    "Dettagli sufficienti a ripetere lo studio.",
    "Valutazione ex ante, non ex post."
  ],
  errori:[
    { no:"«Gli atti di congresso passano la peer review»", si:"<strong>Non</strong> una vera peer review: c'è un controllo del <strong>comitato scientifico</strong> sugli abstract" },
    { no:"«Un articolo rifiutato è scientificamente debole»", si:"Può essere rifiutato <strong>pur essendo valido</strong> se la rivista è satura: l'editor <strong>non fa l'analisi scientifica</strong>" },
    { no:"Confondere lo stile dei risultati con quello della discussione", si:"Nei <strong>risultati</strong> si <strong>descrive</strong>; nella <strong>discussione</strong> si <strong>argomenta</strong>. È l'errore più comune anche nelle tesi" },
    { no:"«PubMed e Google Scholar sono equivalenti»", si:"PubMed contiene <strong>solo lavori scientifici</strong>; Google Scholar anche <strong>letteratura grigia</strong> non revisionata" },
    { no:"«L'impact factor misura la qualità di un articolo»", si:"Misura il prestigio della <strong>rivista</strong>; per il singolo ricercatore l'indice è l'<strong>indice H</strong>" }
  ]
});

/* =========================================================
   FASCICOLO 5 — LE BASI BIOLOGICHE DEL COMPORTAMENTO
   ========================================================= */
PGE.schede.fascicoli.push({
  id: "F5",
  n: "V",
  titolo: "Le basi biologiche del comportamento",
  sottotitolo: "Dal neurone alla plasticità: il substrato materiale della mente",
  lezione: "Lezioni 8-13",
  schede: [

/* ---------- F5.1 ---------- */
{
  id:"S501", tipo:"scuola", nome:"Il neurone: la struttura",
  identificazione:{ anno:"—", luogo:"—", lezione:"L08", capitolo:"C22",
    unaRiga:"La cellula che non si rigenera ma si riorganizza, e che da sola non fa niente: ogni elemento della sua anatomia esiste per una funzione precisa." },
  nasceDa:{ problema:"La <strong>rivoluzione neuroscientifica</strong> ha reso possibile studiare l'<strong>unità mente-cervello</strong> e non più la mente separata dal cervello. Ma studiare quell'unità richiede di sapere <strong>grazie a che cosa</strong> la mente funziona.",
    formula:"Si parte dal <strong>costituente base</strong> perché il modulo procede per <strong>scale crescenti</strong>: cellula → sistema → corteccia → metodi → origine e cambiamento." },
  radici:[
    { nome:"Le due tipologie cellulari del SN", tipo:"criterio anatomico", tesi:"Il funzionamento del sistema nervoso dipende da <strong>cellule gliali</strong> e <strong>neuroni</strong>. Le gliali sono <strong>10 volte più numerose</strong>." },
    { nome:"La struttura prototipica", tipo:"principio", tesi:"A prescindere dalla tipologia, <strong>tutti</strong> i neuroni hanno le stesse caratteristiche strutturali che ne permettono il funzionamento: <strong>membrana plasmatica</strong>, <strong>citoscheletro</strong>, e le tre parti." }
  ],
  precursori:[
    { nome:"Le cellule gliali", provenienza:"Macroglia e microglia", apporto:"Non sono accessorie: sono la <strong>maggior parte</strong> del tessuto. <strong>Astrociti</strong> = funzione strutturale; <strong>oligodendrociti</strong> = producono la <strong>guaina mielinica</strong>" }
  ],
  oggetto:{ formula:"Il neurone è l'<strong>unità base</strong> del sistema nervoso: elabora e trasmette l'informazione che regola il comportamento attraverso messaggi di tipo <strong>elettrochimico</strong>.",
    glossa:"<strong>Le due funzioni della glia</strong>: <em>strutturale</em> — impalcatura che tiene i neuroni <em>in situ</em>; <em>metabolica</em> — a sua volta duplice: <strong>fornisce sostanze trofiche</strong> ed <strong>elimina detriti</strong> e sostanze tossiche." },
  metodo:{ formula:"Tre parti, ciascuna con una funzione: <strong>corpo cellulare</strong> (sintetizza) → <strong>dendriti</strong> (captano) → <strong>assone</strong> (genera e trasmette).",
    glossa:"La <strong>membrana plasmatica</strong> non è un involucro: <strong>cambia composizione</strong> a seconda della zona, ed è la protagonista della fisiologia (scheda S502).",
    vincoli:[
      "<strong>Corpo cellulare</strong> (soma, pirenoforo) — ~20 μm. Contiene il <strong>nucleo</strong> con il <strong>DNA</strong>; nel <strong>citosol</strong> galleggiano gli organelli.",
      "<strong>La catena della sintesi</strong>: DNA nel <strong>nucleo</strong> → <strong>trascrizione</strong> in RNA → l'<strong>RNA messaggero</strong> esce dai pori → nel <strong>citoplasma</strong> avviene la <strong>traduzione</strong> → amminoacidi → proteine. <em>Trascrizione dentro, traduzione fuori.</em>",
      "<strong>Dendriti</strong> — le <strong>antenne</strong>: <strong>captano</strong> dal neurone precedente. Portano <strong>recettori</strong> e <strong>spine dendritiche</strong>, che aumentano la superficie ricettiva.",
      "<strong>Assone</strong> — <strong>cono di emergenza</strong> (qui si <strong>genera</strong> il messaggio), filamento, <strong>terminali assonici</strong> → <strong>bottoni sinaptici</strong>. Fino a <strong>1 metro</strong>.",
      "<strong>La velocità dipende da due fattori</strong>: il <strong>diametro</strong> dell'assone e la <strong>guaina mielinica</strong>, interrotta dai <strong>nodi di Ranvier</strong> → <strong>conduzione saltatoria</strong>."
    ] },
  teorie:[
    { nome:"Le quattro caratteristiche distintive del neurone", enunciato:"<strong>1.</strong> Eccitabili e trasmettono informazione. <strong>2.</strong> Migliaia di miliardi. <strong>3.</strong> Comunicano anche a distanze molto lunghe. <strong>4.</strong> <strong>Non si rigenerano</strong>, ma <strong>possono modificare alcune loro caratteristiche nel corso della vita</strong>.",
      glossa:"La <strong>seconda metà del punto 4 non è una concessione retorica</strong>: è l'intero programma della plasticità (scheda S508) compresso in una riga. Il modulo si apre e si chiude sulla stessa affermazione." },
    { nome:"La conseguenza clinica della non-rigenerazione", enunciato:"Un neurone morto <strong>non viene sostituito</strong>: se si fa un buco nel cervello, quel buco non viene ricoperto da altri neuroni.",
      glossa:"È per questo che nelle <strong>malattie neurodegenerative</strong> — dove la morte neuronale è progressiva — <strong>non c'è cura</strong>. Ma il cervello <strong>recupera comunque</strong> i danni: non per rigenerazione, per <strong>riorganizzazione</strong> — è il <strong>recupero vicario</strong>." },
    { nome:"Le tre classificazioni delle tipologie neuronali", enunciato:"Per <strong>processi</strong>: bipolare, unipolare, multipolare. Per <strong>forma dei dendriti</strong>: stellate, piramidali (dendriti apicali e basali). Per <strong>spine</strong>: spinosi e non spinosi.",
      glossa:"Non restano astratte: lo <strong>pseudounipolare</strong> è il tipico neurone <strong>sensoriale</strong> (S503); le <strong>piramidali</strong> sono i neuroni di <strong>proiezione</strong> della corteccia e le <strong>stellate</strong> i suoi interneuroni eccitatori (S505)." }
  ],
  esponenti:[],
  esperimenti:[],
  validita:{
    merito:"Definisce l'unità funzionale su cui poggia tutto il resto del modulo, e stabilisce il <strong>principio del gruppo</strong>: la complessità non è nel singolo elemento ma nell'organizzazione.",
    limite:"È dichiaratamente una <strong>schematizzazione molto semplificata</strong>: ogni meccanismo nominato sarà approfondito in esami curriculari successivi.",
    esito:"Fornisce il vocabolario anatomico che rende leggibile la fisiologia (S502) e, più avanti, l'organizzazione microscopica della corteccia (S505)." },
  precorre:[
    { nome:"L'attività elettrica (S502)", come:"la <strong>membrana</strong>, il <strong>cono di emergenza</strong> e la <strong>mielina</strong> qui descritti sono i tre elementi che spiegano la fisiologia" },
    { nome:"La plasticità (S508)", come:"le <strong>spine dendritiche</strong> qui introdotte diventeranno un <strong>parametro di misura</strong> della neuroplasticità" }
  ],
  formule:[
    "«I neuroni non si rigenerano, ma possono modificare alcune loro caratteristiche.»",
    "«Un neurone da solo non fa niente»: funzionano soltanto in gruppi.",
    "Presinaptico e post-sinaptico sono posizioni relative, non etichette fisse."
  ],
  errori:[
    { no:"«Le cellule gliali sostengono i neuroni»", si:"Le funzioni sono <strong>due</strong>, e la seconda (metabolica) è a sua volta <strong>duplice</strong>: nutrire ed eliminare" },
    { no:"Dire trascrizione e traduzione senza dire dove", si:"<strong>Trascrizione nel nucleo</strong>, <strong>traduzione nel citoplasma</strong>: è lì che si perde il punto" },
    { no:"Confondere reticolo rugoso e apparato del Golgi", si:"<strong>Reticolo rugoso</strong> = proteine che <strong>restano</strong>; <strong>Golgi</strong> = proteine che <strong>escono</strong>" },
    { no:"«Il potenziale si genera nel soma»", si:"Si genera nel <strong>cono di emergenza</strong>, dove la membrana ha composizione diversa" },
    { no:"Fermarsi a «non si rigenerano»", si:"La frase ha una <strong>seconda metà</strong>, ed è quella che apre alla neuroplasticità" }
  ]
},

/* ---------- F5.2 ---------- */
{
  id:"S502", tipo:"scuola", nome:"L'attività elettrica e la sinapsi",
  identificazione:{ anno:"—", luogo:"—", lezione:"L08", capitolo:"C23",
    unaRiga:"Un dispositivo digitale nell'ampiezza e analogico nella frequenza, il cui messaggio diventa chimico esattamente una volta: nel salto fra due cellule." },
  nasceDa:{ problema:"La struttura del neurone (S501) non spiega da sola <strong>come</strong> l'informazione viaggi. Serve una fisiologia, e serve capire perché il segnale si chiami <strong>elettrochimico</strong> e non solo elettrico.",
    formula:"Il segnale elettrico <strong>diventa chimico</strong> per poi <strong>ridiventare elettrico</strong>: esattamente <strong>una volta per sinapsi</strong>." },
  radici:[
    { nome:"La membrana come filtro semipermeabile", tipo:"biofisica", tesi:"Il <strong>doppio strato fosfolipidico</strong> — teste <strong>idrofile</strong> verso i due ambienti acquosi, code <strong>idrofobe</strong> a contatto — <strong>sarebbe impermeabile</strong>. Non lo è perché contiene proteine che formano <strong>passaggi</strong>." },
    { nome:"Il gradiente elettrochimico", tipo:"principio fisico", tesi:"Ha <strong>due componenti</strong>: il <strong>gradiente chimico</strong> (dagli ioni più concentrati ai meno concentrati) e la <strong>forza elettrica</strong> (i <strong>cationi</strong> verso il negativo, gli <strong>anioni</strong> verso il positivo)." }
  ],
  precursori:[
    { nome:"La struttura del neurone (S501)", provenienza:"Lezione 8, prima parte", apporto:"Fornisce i tre luoghi della fisiologia: <strong>dendriti</strong> (dove si sommano i graduati), <strong>cono di emergenza</strong> (dove nasce il potenziale d'azione), <strong>bottoni sinaptici</strong> (dove diventa chimico)" }
  ],
  oggetto:{ formula:"L'<strong>attività elettrica</strong> del neurone: tre fasi — <strong>riposo</strong>, <strong>potenziale d'azione</strong>, <strong>ritorno al riposo</strong> — e il passaggio del messaggio da un neurone all'altro.",
    glossa:"<strong>Il potenziale di membrana a riposo</strong> è la differenza di potenziale fra ambiente <strong>intra-</strong> ed <strong>extracellulare</strong>. Fuori prevalgono <strong>Na⁺</strong> e <strong>Cl⁻</strong>; dentro <strong>K⁺</strong> e grossi <strong>anioni proteici</strong>. Il neurone è <strong>polarizzato</strong>, con l'interno negativo." },
  metodo:{ formula:"<strong>Canali</strong> e <strong>pompe</strong>: due meccanismi di passaggio con logica opposta.",
    glossa:"<strong>Canale</strong> = passaggio, <strong>segue</strong> il gradiente, gratis. <strong>Pompa</strong> = trasporto attivo, <strong>contro</strong> il gradiente, costa <strong>ATP</strong>.",
    vincoli:[
      "<strong>Canali passivi</strong> — sempre <strong>aperti</strong>; lasciano passare gli ioni secondo il gradiente elettrochimico.",
      "<strong>Canali voltaggio-dipendenti</strong> — normalmente <strong>chiusi</strong>; si aprono quando il <strong>potenziale</strong> cambia. Sono sull'<strong>assone</strong>.",
      "<strong>Canali ligando-dipendenti</strong> — si aprono quando una <strong>molecola chimica si lega</strong>. Sono sui <strong>dendriti</strong>.",
      "<strong>Pompa sodio-potassio</strong> — capta <strong>3 Na⁺</strong> interni, consuma <strong>1 ATP</strong>, li <strong>espelle</strong>, e fa entrare <strong>2 K⁺</strong>. <em>Tre fuori, due dentro</em>: contribuisce anche direttamente alla negatività interna."
    ] },
  teorie:[
    { nome:"La legge del tutto o nulla", enunciato:"Raggiunta la <strong>soglia</strong>, si scatena un potenziale d'azione <strong>identico a tutti gli altri</strong>. <strong>O c'è o non c'è</strong>; e se c'è, si propaga <strong>necessariamente per tutto l'assone</strong>.",
      glossa:"<strong>La domanda che segue sempre</strong>: se è sempre uguale, come si codifica l'<strong>intensità</strong>? <strong>Con la FREQUENZA, non con l'ampiezza.</strong> Pressione leggera → scariche meno frequenti; pressione intensa → più frequenti." },
    { nome:"Il periodo refrattario e l'unidirezionalità", enunciato:"Durante l'<strong>iperpolarizzazione</strong> quella porzione di assone <strong>non è eccitabile</strong>, perché i canali voltaggio-dipendenti per il Na⁺ sono in <strong>refrattarietà</strong>.",
      glossa:"<strong>A che serve un meccanismo che sembra uno spreco</strong>: garantisce che il potenziale si propaghi <strong>solo in una direzione</strong>. La porzione appena attivata è refrattaria, quindi la depolarizzazione <strong>non può tornare indietro</strong>." },
    { nome:"I potenziali graduati e l'integrazione", enunciato:"Nei <strong>dendriti</strong> non si generano potenziali d'azione, perché manca la densità di canali voltaggio-dipendenti. Si generano <strong>potenziali graduati</strong>, che si propagano <strong>passivamente</strong> e si <strong>sommano</strong>.",
      glossa:"È qui che il neurone <strong>calcola</strong>; è nell'assone che <strong>decide</strong>. Il bilancio fra potenziali eccitatori e inibitori determina se il potenziale d'azione <strong>avvenga o non avvenga</strong>." }
  ],
  esponenti:[],
  esperimenti:[],
  validita:{
    merito:"Spiega con un meccanismo <strong>elementare</strong> — flussi ionici attraverso una membrana selettiva — una funzione complessa, e fornisce il modello di come l'informazione sia <strong>codificata</strong> nel sistema nervoso.",
    limite:"Tratta soltanto le <strong>sinapsi chimiche</strong>: quelle <strong>elettriche</strong> esistono ma non sono affrontate in questa sede.",
    esito:"La coppia <strong>glutammato/GABA</strong> qui introdotta ritorna con un ruolo <strong>architettonico</strong> nella corteccia (S505): eccitatorio = porta fuori, inibitorio = modula dentro." },
  precorre:[
    { nome:"L'organizzazione corticale (S505)", come:"i <strong>neuroni piramidali</strong> sono glutammatergici, gli <strong>interneuroni</strong> principali GABAergici" },
    { nome:"L'elettrofisiologia come metodo (S506)", come:"microelettrodi, <strong>EEG</strong> e <strong>potenziali evocati</strong> registrano proprio l'attività qui descritta" }
  ],
  formule:[
    "«Tre fuori, due dentro» — la pompa sodio-potassio.",
    "«O c'è o non c'è»: l'intensità è frequenza, non ampiezza.",
    "I cinque passaggi: sintesi · vescicole · rilascio · legame · disattivazione."
  ],
  errori:[
    { no:"«Entra sodio ed esce potassio», senza altro", si:"Vanno detti <strong>quali canali</strong> si aprono in quale fase: voltaggio-dipendenti per il <strong>Na⁺</strong> nella depolarizzazione, per il <strong>K⁺</strong> nella ripolarizzazione" },
    { no:"Saltare l'iperpolarizzazione", si:"Senza di essa non si può spiegare il <strong>periodo refrattario</strong>, e quindi l'<strong>unidirezionalità</strong>" },
    { no:"Enunciare il tutto o nulla e fermarsi", si:"Segue sempre la domanda sull'<strong>intensità</strong>: la risposta è la <strong>frequenza</strong>" },
    { no:"«Nei dendriti si genera il potenziale d'azione»", si:"Nei dendriti si generano <strong>potenziali graduati</strong>, che si propagano <strong>passivamente</strong>" },
    { no:"Elencare quattro passaggi della sinapsi", si:"Sono <strong>cinque</strong>: il quinto è la <strong>disattivazione</strong> (reuptake o degradazione enzimatica) — ed è quello su cui agiscono molti farmaci" },
    { no:"Confondere neurotrasmettitore e neuromodulatore", si:"Il <strong>neurotrasmettitore porta</strong> il messaggio; il <strong>neuromodulatore</strong> cambia quanto il ricevente è <strong>sensibile</strong> a quel messaggio (es. <strong>endorfine</strong>)" }
  ]
},

/* ---------- F5.3 ---------- */
{
  id:"S503", tipo:"scuola", nome:"L'architettura del sistema nervoso",
  identificazione:{ anno:"—", luogo:"—", lezione:"L09", capitolo:"C24",
    unaRiga:"Un criterio anatomico — la protezione ossea — divide tutto; e la terminologia non è decorazione, è il modo in cui si dice dove sta una cosa." },
  nasceDa:{ problema:"La scheda S501 si chiude su un'affermazione: <strong>un neurone da solo non fa niente</strong>. Dare senso ai neuroni significa parlare delle <strong>strutture che li contengono</strong>.",
    formula:"Il sistema nervoso è il <strong>centro del controllo del corpo</strong>: una rete di neuroni che veicola l'informazione elettrochimica in tutto il corpo." },
  radici:[
    { nome:"I tre livelli di elaborazione", tipo:"principio funzionale", tesi:"<strong>Afferente</strong> (input) → <strong>elaborazione intermedia</strong> → <strong>efferente</strong> (output). A ciascuno corrisponde una categoria: <strong>neuroni sensoriali</strong>, <strong>interneuroni</strong>, <strong>motoneuroni</strong>." },
    { nome:"Il criterio anatomico «geografico»", tipo:"criterio di classificazione", tesi:"Ciò che separa <strong>SNP</strong> e <strong>SNC</strong> è <strong>una sola cosa</strong>: la presenza o assenza di una <strong>protezione ossea</strong>. Non è un criterio funzionale." }
  ],
  precursori:[
    { nome:"Il neurone pseudounipolare", provenienza:"Scheda S501, tipologie", apporto:"È il tipico neurone <strong>sensoriale</strong>: nessun dendrite, un <strong>processo che si biforca</strong>, con <strong>recettori</strong> in periferia. Il suo <strong>soma sta FUORI</strong> dal SNC — dettaglio che ritorna parlando di sostanza grigia (S504)" }
  ],
  oggetto:{ formula:"L'organizzazione del <strong>sistema nervoso periferico</strong> (somatico e autonomo), la <strong>terminologia anatomica</strong> del sistema nervoso centrale, e le sue <strong>protezioni</strong>.",
    glossa:"<strong>SNP</strong> = strutture <strong>prive</strong> di protezione ossea, divise in <strong>somatico</strong> e <strong>autonomo</strong>. <strong>SNC</strong> = strutture lungo l'asse mediano <strong>protette dalle ossa</strong>: <strong>midollo spinale</strong> ed <strong>encefalo</strong>." },
  metodo:{ formula:"La <strong>terminologia</strong> è il contenuto: la docente lo dice esplicitamente.",
    glossa:"L'asse è <strong>caudo-rostrale</strong>, e vale <strong>due volte</strong>: <strong>ontogeneticamente</strong> (lo sviluppo individuale va dal caudale al rostrale) e <strong>filogeneticamente</strong> (il caudale è il più arcaico).",
    vincoli:[
      "<strong>La deflessione</strong> — con la <strong>stazione eretta</strong> l'asse si è <strong>piegato</strong> a livello del <strong>mesencefalo</strong>, perché gli occhi dovevano guardare avanti. Conseguenza: i termini anatomici <strong>cambiano</strong> sopra e sotto quel punto.",
      "<strong>I tre assi</strong> — antero-posteriore (ventro-dorsale), rostro-caudale, medio-laterale.",
      "<strong>Rispetto alla linea mediana</strong> — <strong>mediale</strong>/prossimale (vicino), <strong>laterale</strong>/distale (lontano), <strong>ipsilaterale</strong> (stesso lato), <strong>controlaterale</strong> (lato opposto).",
      "<strong>Visioni vs sezioni</strong> — la <strong>visione</strong> guarda senza tagliare (dorsale, ventrale, laterale, <strong>mediale</strong>); la <strong>sezione</strong> taglia, secondo i piani <strong>frontale</strong>/coronale, <strong>orizzontale</strong>, <strong>sagittale</strong>."
    ] },
  teorie:[
    { nome:"La reciprocità di simpatico e parasimpatico", enunciato:"Se uno è attivo, l'altro <strong>deve</strong> diminuire. <strong>Non possono essere attivi entrambi né spenti entrambi</strong>: il grado di attività di uno dipende dall'altro.",
      glossa:"<strong>Simpatico = attivante</strong>: midriasi, broncodilatazione, tachicardia, inibizione intestinale, vasocostrizione — <strong>prepara il corpo alla reazione</strong>. <strong>Parasimpatico = rilassante</strong>, garantisce l'<strong>omeostasi</strong>. <em>Il modo per non sbagliare: pensa a te stesso spaventato.</em>" },
    { nome:"Il liquor e le sue tre funzioni", enunciato:"Prodotto dai <strong>plessi corioidei</strong> nei ventricoli laterali, riassorbito dai <strong>villi aracnoidei</strong>, in <strong>ricircolo continuo</strong> attraverso i quattro ventricoli e lo spazio subaracnoideo.",
      glossa:"<strong>1.</strong> <strong>Ridurre il peso</strong> dell'encefalo (1-2 kg). <strong>2.</strong> <strong>Proteggere</strong> dagli urti. <strong>3.</strong> <strong>Controllare le modificazioni chimiche</strong> dell'ambiente interno. Un'<strong>ostruzione</strong> produce <strong>idrocefalo</strong>: nei bambini testa grande, negli adulti <strong>disfunzioni comportamentali</strong> da compressione." },
    { nome:"La visione mediale non è una sezione", enunciato:"Il SNC è <strong>bilateralmente simmetrico</strong>: due metà <strong>giustapposte</strong>, unite dal <strong>corpo calloso</strong>. Resezionando quelle fibre gli emisferi <strong>si separano da soli</strong>.",
      glossa:"<strong>[N.d.R.]</strong> La lezione descrive il corpo calloso come «un fascetto molto sottile». È la <strong>più grande commissura</strong> del cervello umano (~200 milioni di assoni): sottile <em>in rapporto al volume degli emisferi</em>, non in assoluto." }
  ],
  esponenti:[],
  esperimenti:[],
  validita:{
    merito:"Fornisce il <strong>vocabolario</strong> senza cui le schede successive sono illeggibili, e stabilisce che la divisione fondamentale del sistema nervoso è <strong>anatomica</strong>, non funzionale.",
    limite:"Il sistema nervoso periferico è trattato per <strong>conoscenze basilari</strong>: l'attenzione del corso si concentra sul centrale, che media le funzioni mentali.",
    esito:"La <strong>gerarchia caudo-rostrale</strong> qui introdotta è il principio che ordina le strutture nella scheda successiva." },
  precorre:[
    { nome:"Il cervello primitivo (S504)", come:"l'<strong>asse caudo-rostrale</strong> diventa il principio della <strong>gerarchia anatomica e funzionale</strong>" },
    { nome:"La corteccia (S505)", come:"i termini <strong>controlaterale</strong>, <strong>mediale</strong> e <strong>visione mediale</strong> sono presupposti da lateralizzazione e vie crociate" }
  ],
  formule:[
    "Il criterio SNP/SNC è uno solo: la protezione ossea.",
    "L'asse caudo-rostrale vale due volte: ontogenesi e filogenesi.",
    "Visione ≠ sezione: la mediale non taglia nulla."
  ],
  errori:[
    { no:"«Il criterio SNP/SNC è funzionale»", si:"È <strong>anatomico</strong> e «geografico»: la <strong>protezione ossea</strong>" },
    { no:"Elencare due componenti del sistema autonomo", si:"Sono <strong>tre</strong>: simpatico, parasimpatico ed <strong>enterico</strong> (plesso di <strong>Auerbach</strong> e di <strong>Meissner</strong>)" },
    { no:"Invertire simpatico e parasimpatico su un distretto", si:"Il <strong>simpatico attiva</strong>: pupilla dilatata, cuore accelerato, intestino inibito, vasi ristretti" },
    { no:"«La deflessione è avvenuta per l'evoluzione del cervello»", si:"È avvenuta per la <strong>stazione eretta</strong>: gli occhi dovevano guardare avanti" },
    { no:"Chiamare «sezione» la visione mediale", si:"Gli emisferi sono <strong>giustapposti</strong>: non si taglia, si separa il corpo calloso" }
  ]
},

/* ---------- F5.4 ---------- */
{
  id:"S504", tipo:"scuola", nome:"Il cervello primitivo",
  identificazione:{ anno:"—", luogo:"—", lezione:"L09", capitolo:"C25",
    unaRiga:"Sotto ciò che serve a vivere, sopra ciò che serve a pensare — e proprio per questo un danno alle strutture arcaiche è più grave di uno alla corteccia frontale." },
  nasceDa:{ problema:"L'encefalo non è un pezzo unico. Serve un <strong>principio</strong> che ordini le sue strutture, altrimenti restano un elenco di nomi.",
    formula:"<strong>A una gerarchia anatomica corrisponde una gerarchia funzionale.</strong>" },
  radici:[
    { nome:"L'organizzazione gerarchica", tipo:"principio", tesi:"Le strutture <strong>più caudali</strong> sono le più <strong>arcaiche</strong> (filo- e ontogeneticamente) e costituiscono le <strong>fondamenta</strong> su cui poggiano le più recenti. Le arcaiche mediano funzioni <strong>di sopravvivenza</strong>; le recenti, funzioni <strong>complesse</strong>." },
    { nome:"Il paradosso della gravità dei danni", tipo:"corollario", tesi:"Proprio perché mediano funzioni basilari, un danno alle strutture <strong>arcaiche è più grave</strong>: il tronco <strong>uccide</strong>, il midollo <strong>paralizza</strong>; un danno alla corteccia frontale produce <strong>deficit cognitivi</strong> ma consente di vivere normalmente dal punto di vista organico." }
  ],
  precursori:[
    { nome:"L'asse caudo-rostrale (S503)", provenienza:"Terminologia anatomica", apporto:"Fornisce la <strong>direzione</strong> lungo cui leggere la gerarchia: caudale = arcaico = vitale" }
  ],
  oggetto:{ formula:"Il <strong>cervello primitivo</strong> (o nucleo centrale): <strong>midollo spinale</strong>, <strong>tronco dell'encefalo</strong>, <strong>cervelletto</strong>, <strong>diencefalo</strong>. Si contrappone al <strong>neoencefalo</strong>.",
    glossa:"Più i sistemi <strong>endocrino</strong> e <strong>immunitario</strong>, che pur essendo distinti dal SN <strong>interagiscono fortemente</strong> con esso — tanto che i tre insieme sono detti <em>body-mind</em>." },
  metodo:{ formula:"Le strutture si leggono <strong>dal basso verso l'alto</strong>, e per ciascuna si dice che cosa media.",
    glossa:"<strong>La regola cromatica</strong>: <strong>sostanza bianca = fibre</strong> (assoni mielinizzati); <strong>sostanza grigia = somi</strong> (corpi cellulari).",
    vincoli:[
      "<strong>Midollo spinale</strong> — il <strong>più arcaico</strong>; <strong>già formato alla nascita</strong>, non cresce: nell'adulto finisce alle <strong>vertebre lombari</strong>. Organizzazione <strong>segmentale</strong>: un <strong>paio</strong> di nervi per segmento.",
      "<strong>Corno dorsale</strong> → <strong>radice dorsale</strong> → afferenze <strong>sensitive</strong>. <strong>Corno ventrale</strong> → <strong>radice ventrale</strong> → efferenze <strong>motorie</strong>. L'<strong>appaiamento</strong> forma il <strong>nervo spinale</strong>.",
      "<strong>Cauda equina</strong> — solo assoni, <strong>niente sostanza grigia</strong>: per questo è la sede dell'<strong>anestesia epidurale</strong>.",
      "<strong>Tronco dell'encefalo</strong> — <strong>bulbo · ponte · mesencefalo</strong>. Pressione, respirazione, sonno; afferenze gustative, uditive, dell'equilibrio. Da qui escono i <strong>nervi cranici</strong>.",
      "<strong>Cervelletto</strong> — dorsale al ponte; <strong>coordinazione motoria</strong>, tono muscolare, equilibrio.",
      "<strong>Diencefalo</strong> — <strong>talamo</strong> (dorsale) e <strong>ipotalamo</strong> (ventrale), attorno al <strong>terzo ventricolo</strong>."
    ] },
  teorie:[
    { nome:"Il circuito del riflesso", enunciato:"recettore → <strong>neurone sensitivo primario</strong> → <strong>radice dorsale</strong> → <strong>interneurone</strong> → <strong>motoneurone</strong> → <strong>radice ventrale</strong> → muscolo.",
      glossa:"<strong>Senza alcuna mediazione della consapevolezza</strong>: è tutto mediato a livello midollare. Ecco perché la mano si ritrae <strong>prima</strong> che ce ne accorgiamo." },
    { nome:"Il paradosso del cervelletto", enunciato:"Pur essendo così arcaico, contiene il <strong>più alto numero di neuroni</strong> di tutte le altre suddivisioni cerebrali, disposti in modo da <strong>replicare lo stesso circuito elementare</strong>.",
      glossa:"Regioni diverse ricevono proiezioni diverse ma <strong>svolgono le stesse operazioni</strong>, dirette a zone diverse. È un'<strong>architettura modulare</strong>, come la colonna corticale (S505). <em>L'alcol lo inibisce</em> → <strong>atassia</strong>." },
    { nome:"La formazione reticolare", enunciato:"Circuito neuronale <strong>diffuso</strong> nel tronco, che riceve una <strong>sintesi</strong> delle informazioni in arrivo.",
      glossa:"Regola <strong>vigilanza</strong>, <strong>ritmo sonno-veglia</strong>, <strong>attenzione</strong>, <strong>tono muscolare</strong>, <strong>movimento</strong>, <strong>riflessi vitali</strong>. È il ponte diretto verso il modulo su coscienza e attenzione." },
    { nome:"Talamo e ipotalamo", enunciato:"<strong>Talamo</strong>: <strong>tutte</strong> le vie sensoriali afferenti <strong>fanno tappa</strong> qui prima di raggiungere il cervello. <strong>Ipotalamo</strong>: omeostasi, sistema autonomo, <strong>regolazione ormonale</strong>.",
      glossa:"L'ipotalamo comunica con l'<strong>ipofisi</strong> (ghiandola pituitaria): una vera ghiandola endocrina che però <strong>sta dentro il cervello</strong>. È il punto in cui sistema nervoso e sistema endocrino si toccano fisicamente." }
  ],
  esponenti:[],
  esperimenti:[],
  validita:{
    merito:"Il principio gerarchico rende <strong>deducibile</strong> ciò che altrimenti sarebbe da memorizzare: data la posizione di una struttura, se ne può prevedere il tipo di funzione.",
    limite:"È dichiaratamente una <strong>carrellata</strong>: ogni struttura, per quanto «semplice», è in realtà molto complessa e sarà approfondita altrove.",
    esito:"Prepara il contrasto con la corteccia (S505): là si vedrà una struttura che <strong>non serve a sopravvivere</strong> ma media tutto ciò che è cosciente." },
  precorre:[
    { nome:"La corteccia (S505)", come:"il contrasto <strong>vitale/cognitivo</strong> è ciò che rende comprensibile il caso degli individui nati <strong>senza corteccia</strong>" },
    { nome:"L'ippocampo e l'amigdala (S505)", come:"il <strong>sistema limbico</strong> ha origine motivazionale nell'<strong>ipotalamo</strong> qui descritto" }
  ],
  formule:[
    "A una gerarchia anatomica corrisponde una gerarchia funzionale.",
    "Bianca = fibre; grigia = somi.",
    "Un danno arcaico è più grave di un danno corticale."
  ],
  errori:[
    { no:"Elencare le strutture senza il principio che le ordina", si:"Il <strong>principio gerarchico</strong> è ciò che rende la lista un ragionamento" },
    { no:"Invertire corno dorsale e ventrale", si:"<strong>Dorsale</strong> = sensitivo, in ingresso. <strong>Ventrale</strong> = motorio, in uscita" },
    { no:"Invertire sostanza bianca e grigia", si:"La <strong>mielina</strong> è bianca: dove è bianco ci sono <strong>fibre</strong>" },
    { no:"«Il cervelletto è poco importante perché arcaico»", si:"Ha il <strong>maggior numero di neuroni</strong> di tutte le suddivisioni cerebrali" },
    { no:"Elencare due funzioni del liquor", si:"Sono <strong>tre</strong>: alleggerire, proteggere, <strong>regolare la chimica interna</strong>" },
    { no:"«L'idrocefalo dà sempre la testa grande»", si:"Nei <strong>bambini</strong> sì; negli <strong>adulti</strong>, con ossa rigide, dà <strong>disfunzioni comportamentali</strong>" }
  ]
},

/* ---------- F5.5 ---------- */
{
  id:"S505", tipo:"scuola", nome:"La corteccia cerebrale",
  identificazione:{ anno:"—", luogo:"—", lezione:"L10", capitolo:"C26",
    unaRiga:"Un foglio piegato in cui la posizione è funzione, la quantità di spazio è importanza, e la stessa colonna di un millimetro fa tutto — cambiando solo lo spessore dei suoi sei strati." },
  nasceDa:{ problema:"Il cervello primitivo (S504) spiega la sopravvivenza, non il pensiero. Serve la struttura che media le <strong>funzioni mentali superiori</strong>.",
    formula:"La corteccia è <strong>lo stadio finale dell'evoluzione</strong>: un sottile strato di tessuto nervoso in cui l'uomo non solo si <strong>adatta</strong> all'ambiente, ma lo <strong>manipola</strong>." },
  radici:[
    { nome:"La terza terminologia", tipo:"lessico anatomico", tesi:"<strong>Paleoencefalo</strong> = cervelletto + <strong>romboencefalo</strong> (ponte e bulbo). <strong>Mesencefalo</strong>. <strong>Prosencefalo</strong> = diencefalo + <strong>telencefalo</strong> (gli emisferi). Il <strong>midollo</strong> sta <strong>fuori</strong> da questa terminologia." },
    { nome:"L'aspetto circonvoluto come espediente evolutivo", tipo:"morfologia", tesi:"Un grosso quantitativo di tessuto compresso in un volume cranico piccolo. <strong>Stesa, la corteccia sarebbe un grosso foglio di giornale rettangolare.</strong> I mammiferi più semplici hanno cervelli quasi <strong>lisci</strong>." }
  ],
  precursori:[
    { nome:"I gangli della base", provenienza:"Nuclei sottocorticali", apporto:"<strong>Caudato · putamen · globo pallido</strong>, sotto la porzione <strong>anteriore</strong> dei ventricoli laterali. Regolano <strong>selezione e avvio</strong> dei movimenti volontari — <em>non</em> la coordinazione, che è del cervelletto" },
    { nome:"Il sistema limbico", provenienza:"Parte mesiale degli emisferi", apporto:"Bisogni <strong>motivazionali</strong> ed <strong>emotivi</strong> (origine nell'<strong>ipotalamo</strong>); ospita il <strong>circuito del reward</strong> → studiato per l'<strong>addiction</strong>. <strong>Ippocampo</strong> = memoria a lungo termine; <strong>amigdala</strong> = significato emozionale degli stimoli" }
  ],
  oggetto:{ formula:"<strong>Tre funzioni</strong>: stazione <strong>finale</strong> dell'input (processi sensoriali e percettivi), stazione <strong>iniziale</strong> dell'output (motori e comportamentali), e sede delle <strong>funzioni mentali superiori</strong>.",
    glossa:"<strong>Le funzioni mentali superiori non sono esclusive dell'uomo</strong>: intese come <strong>funzioni esecutive</strong> le hanno anche primati e roditori. La differenza è che l'uomo <strong>manipola</strong> l'ambiente, non solo vi si adatta." },
  metodo:{ formula:"Anatomia (<strong>scissure e lobi</strong>) e funzione (<strong>aree</strong>) si leggono insieme: la <strong>posizione</strong> predice la funzione.",
    glossa:"<strong>Brodmann</strong>, anatomico tedesco, inizio Novecento: suddivisione su base <strong>cito-architettonica</strong>. Più <strong>semplice</strong> la funzione, più <strong>specializzati</strong> i neuroni; più <strong>complessa</strong>, più <strong>flessibile</strong> la specializzazione.",
    vincoli:[
      "<strong>Quattro scissure</strong> — <strong>longitudinale</strong> (i due emisferi), <strong>di Rolando</strong> (ant./post.), <strong>di Silvio</strong> (sup./inf.), <strong>parieto-occipitale</strong>.",
      "<strong>Cinque lobi</strong> — <strong>frontale</strong> (motorio + superiori, il più evoluto), <strong>parietale</strong> (tattile, propriocettivo, dolorifico, termico), <strong>temporale</strong> (uditivo, vestibolare, linguaggio), <strong>occipitale</strong> (visivo), <strong>insula</strong> (il più arcaico: motivazione ed emozione).",
      "<strong>Quattro classi di aree</strong> — <strong>primarie</strong>, <strong>secondarie</strong>, <strong>terziarie</strong>, <strong>associative</strong>: queste ultime sono <strong>tre quarti</strong> di tutta la corteccia.",
      "<strong>La direzione si inverte</strong> — in ingresso primaria → secondaria → terziaria → associativa; in uscita <strong>associativa → terziaria → secondaria → primaria</strong>."
    ] },
  teorie:[
    { nome:"Le due regole dell'elaborazione", enunciato:"<strong>1. Le vie sono crociate</strong>: le vie ascendenti <strong>decussano</strong> — ciò che viene da sinistra finisce nell'emisfero destro, e viceversa; vale anche in uscita. <strong>2. L'omuncolo</strong>: la quantità di corteccia è proporzionale a una grandezza, ma <strong>il criterio cambia</strong>.",
      glossa:"<strong>Omuncolo sensoriale</strong> → criterio: la <strong>sensibilità</strong> della regione (densità di recettori). <strong>Omuncolo motorio</strong> → criterio: la <strong>ricchezza e complessità dei movimenti</strong>, <strong>non il volume</strong>. Il <strong>dito</strong> ha più corteccia della <strong>gamba</strong>. Ricavato dal neurochirurgo <strong>Penfield</strong>." },
    { nome:"La corteccia non è necessaria alla sopravvivenza", enunciato:"Esistono individui <strong>nati senza corteccia cerebrale</strong>: dormono e vegliano, reagiscono alla fame, hanno riflessi, muovono occhi e muscoli facciali, percepiscono sapori e odori, piangono, sorridono, emettono suoni indistinti.",
      glossa:"Tutto ciò è <strong>non cosciente e non volontario</strong>, e basta a far sopravvivere un individuo. È la prova più netta della gerarchia enunciata in S504." },
    { nome:"La colonna corticale", enunciato:"Un cilindretto di corteccia <strong>spesso un millimetro</strong>, definito dalle connessioni fra i neuroni dei <strong>sei strati</strong>. È l'<strong>unità elementare di elaborazione</strong>.",
      glossa:"<strong>La regola che rende leggibili gli strati</strong>: gli <strong>esterni</strong> fanno parlare la corteccia <strong>con altre aree corticali</strong>; gli <strong>interni</strong> con <strong>strutture fuori</strong> dalla corteccia. Da cui: motoria primaria → strato <strong>V</strong>; sensitiva primaria → strato <strong>IV</strong>; associative → <strong>strati superiori</strong>. <em>Si deduce, non si memorizza.</em>" },
    { nome:"La lateralizzazione emisferica", enunciato:"<strong>Emisfero SINISTRO</strong>: verbale e linguistico, logico-matematico, analitico, <strong>sequenziale</strong>. <strong>Emisfero DESTRO</strong>: creativo, immaginativo, musicale, <strong>spaziale</strong>, globale, <em>insight</em>.",
      glossa:"<strong>[N.d.R.] — punto critico.</strong> A metà lezione la docente enuncia l'attribuzione <strong>invertita</strong>, e la corregge nel <strong>riepilogo</strong>. <strong>Vale il riepilogo</strong>: <strong>Broca</strong> e <strong>Wernicke</strong> sono a <strong>sinistra</strong>, e l'esperimento <em>split brain</em> funziona <strong>solo</strong> con questa attribuzione." }
  ],
  esponenti:[
    { nome:"Brodmann", anni:"inizio XX sec.", ruolo:"Anatomico", luogo:"Germania",
      chiE:"Suddivise la corteccia in aree sulla base delle caratteristiche <strong>cito-architettoniche</strong>.",
      haFatto:["Le <strong>aree di Brodmann</strong>, ciascuna corrispondente a una funzione più o meno complessa"],
      teorie:[{ nome:"La regola di specializzazione", enunciato:"Più <strong>semplice</strong> la funzione mediata da un'area, più i suoi neuroni sono <strong>specializzati</strong> e rispondono a caratteristiche molto specifiche; più <strong>complessa</strong> la funzione, più <strong>flessibile</strong> la specializzazione." }] },
    { nome:"Penfield", anni:"XX sec.", ruolo:"Neurochirurgo", luogo:"Canada",
      chiE:"Da cui deriva la rappresentazione schematica del corpo in corteccia.",
      haFatto:["L'<strong>omuncolo</strong> sensoriale e motorio"],
      teorie:[{ nome:"Il principio dell'omuncolo", enunciato:"La quantità di corteccia dedicata a una regione è <strong>proporzionale</strong> — alla <strong>sensibilità</strong> nell'omuncolo sensoriale, alla <strong>complessità dei movimenti</strong> (non al volume) in quello motorio." }] },
    { nome:"Broca e Wernicke", anni:"XIX sec.", ruolo:"Pionieri dello studio delle lesioni", luogo:"Francia · Germania",
      chiE:"Identificarono le due aree del linguaggio studiando pazienti con <strong>afasie opposte</strong>.",
      haFatto:["<strong>Area di Broca</strong> — lobo <strong>frontale</strong>, <strong>produzione</strong>, area <em>motoria</em> del linguaggio","<strong>Area di Wernicke</strong> — lobo <strong>temporale</strong>, <strong>comprensione</strong>, area <em>sensoriale</em> del linguaggio"],
      teorie:[{ nome:"Due funzioni che collaborano", enunciato:"Produzione e comprensione sono funzioni <strong>diverse</strong>, mediate da aree <strong>distinte</strong>, che <strong>collaborano</strong> nella capacità linguistica: lo dimostrano le due afasie <strong>opposte</strong>." }] }
  ],
  esperimenti:[
    { nome:"L'esperimento sui pazienti split brain",
      disegno:[
        "<strong>Chi sono</strong>: pazienti a cui è stato <strong>resezionato il corpo calloso</strong> (<strong>commissurotomia</strong>) per il trattamento dell'<strong>epilessia</strong>; i due emisferi lavorano ciascuno per conto proprio.",
        "<strong>1.</strong> Si proietta una <strong>spazzola</strong> nell'<strong>emicampo visivo SINISTRO</strong> → l'informazione arriva all'emisfero <strong>DESTRO</strong>.",
        "<strong>2.</strong> Si chiede <em>«che cosa hai visto?»</em> → <strong>non sa rispondere</strong>: il linguaggio è a sinistra e il corpo calloso reciso impedisce il trasferimento.",
        "<strong>3.</strong> Si chiede di <strong>prendere l'oggetto con la mano SINISTRA</strong> (controllata dall'emisfero destro) da dietro uno schermo → <strong>ci riesce</strong>."
      ],
      risultato:"L'emisfero destro <strong>ha riconosciuto</strong> l'oggetto ma <strong>non può dirlo</strong>.",
      significato:"È la dimostrazione più pulita della <strong>lateralizzazione</strong>: elaborazione <strong>spaziale</strong> a destra, <strong>linguistica</strong> a sinistra. Ed è la ragione per cui l'attribuzione degli emisferi <strong>non può essere invertita</strong>." }
  ],
  validita:{
    merito:"Mostra che la corteccia è un'<strong>architettura modulare</strong>: uno stesso circuito di un millimetro, replicato ovunque, che cambia funzione soltanto variando lo <strong>spessore relativo</strong> dei suoi sei strati.",
    limite:"La docente lo dice esplicitamente: <strong>non siamo ancora riusciti a capirne tutti i misteri</strong>. E le tre quarti della corteccia sono aree <strong>associative</strong>, cioè quelle meno mappabili in modo semplice.",
    esito:"Pone la domanda a cui risponde la scheda successiva: <strong>come si è arrivati a sapere tutto questo?</strong>" },
  precorre:[
    { nome:"I metodi di indagine (S506)", come:"le <strong>afasie di Broca e Wernicke</strong> e i pazienti <strong>split brain</strong> sono i casi con cui si studieranno lesioni e dissociazioni" },
    { nome:"La plasticità (S508)", come:"la <strong>rappresentazione corticale</strong> della mano nei musicisti è la stessa mappa qui descritta, modificata dall'esperienza" }
  ],
  formule:[
    "Stesa, la corteccia sarebbe un foglio di giornale.",
    "Sensoriale = sensibilità; motorio = complessità del movimento, non volume.",
    "Strati esterni parlano con la corteccia, interni con il fuori."
  ],
  errori:[
    { no:"Invertire l'attribuzione degli emisferi", si:"<strong>Sinistro</strong> = verbale, logico-matematico, analitico. <strong>Destro</strong> = creativo, spaziale, musicale. <em>È l'errore più costoso del modulo</em>" },
    { no:"Usare lo stesso criterio per i due omuncoli", si:"<strong>Sensoriale</strong> = sensibilità; <strong>motorio</strong> = complessità dei movimenti, <strong>non il volume</strong>" },
    { no:"«Le funzioni mentali superiori sono esclusive dell'uomo»", si:"Le hanno anche <strong>primati e roditori</strong>: la differenza è che l'uomo <strong>manipola</strong> l'ambiente" },
    { no:"«I gangli della base coordinano il movimento»", si:"Fanno <strong>selezione e avvio</strong>; la <strong>coordinazione</strong> è del cervelletto" },
    { no:"Confondere Broca e Wernicke", si:"<strong>Broca</strong> = frontale, <strong>produzione</strong>. <strong>Wernicke</strong> = temporale, <strong>comprensione</strong>" },
    { no:"Dire che tutti gli interneuroni corticali sono inibitori", si:"Le <strong>cellule stellate</strong> (granulari) sono interneuroni <strong>ECCITATORI</strong>: è l'eccezione da citare" }
  ]
},

/* ---------- F5.6 ---------- */
{
  id:"S506", tipo:"scuola", nome:"I metodi di indagine del cervello",
  identificazione:{ anno:"—", luogo:"—", lezione:"L11", capitolo:"C27",
    unaRiga:"Ogni metodo compra una cosa e ne paga un'altra: la lesione dà causalità ma non la sceglie, l'EEG dà il tempo ma non lo spazio, la fMRI legge il sangue e non i neuroni — e la TMS, stimolando, spegne." },
  nasceDa:{ problema:"Come siamo arrivati all'attuale stato di conoscenza della struttura e delle funzioni del cervello? E perché la ricerca recente ha accelerato tanto rispetto al passato?",
    formula:"Conoscere i metodi non serve a elencarli: serve a <strong>leggere la letteratura scientifica</strong> — capire perché è stato usato quell'impianto, che cosa consente e quali sono i suoi limiti." },
  radici:[
    { nome:"Il presupposto dello studio delle lesioni", tipo:"principio metodologico", tesi:"Per comprendere il funzionamento <strong>fisiologico</strong> di un processo è molto più utile capire <strong>quando quel processo non funziona</strong>. La branca è la <strong>neuropsicologia cognitiva</strong>." },
    { nome:"La simmetria fra lesione e stimolazione", tipo:"struttura del campo", tesi:"Le categorie <strong>1</strong> e <strong>4</strong> sono <strong>opposte</strong>: la lesione <strong>disattiva</strong>, la stimolazione <strong>attiva</strong>. <strong>Tranne la TMS</strong>, che stimolando ottiene l'effetto di <strong>disattivare</strong>." }
  ],
  precursori:[
    { nome:"Broca e Wernicke", provenienza:"Scheda S505", apporto:"I <strong>pionieri</strong> del metodo delle lesioni: due sedi diverse, due deficit <strong>opposti</strong>, due funzioni che collaborano" }
  ],
  oggetto:{ formula:"<strong>Quattro categorie</strong>: studio delle <strong>lesioni</strong>, registrazione dell'<strong>attività elettrica</strong>, <strong>neuroimmagini</strong>, <strong>stimolazione</strong>.",
    glossa:"L'obiettivo storico era osservare il cervello <strong>in vivo</strong>, <em>mentre</em> il soggetto esegue un comportamento. Prima tutto era <strong>dedotto</strong> e messo in correlazione: mancava la <strong>simultaneità</strong>; e l'anatomia si vedeva solo <strong>post mortem</strong>." },
  metodo:{ formula:"Per ciascun metodo si dice <strong>che cosa consente</strong> e <strong>che cosa no</strong>.",
    glossa:"<strong>Le due condizioni</strong> dell'inferenza da lesione spontanea: <strong>1.</strong> comportamento <strong>inusuale</strong> (normalità <strong>statistica</strong>); <strong>2.</strong> <strong>evidenza neurologica chiara</strong>. La prima da sola dà una stranezza senza sede; la seconda una sede senza conseguenze.",
    vincoli:[
      "<strong>Lesioni spontanee</strong> — ictus, tumori, neurodegenerative, infettive. Strumento: i <strong>test neuropsicologici</strong>. <em>Limite</em>: non si sceglie dove né quando.",
      "<strong>Lesioni terapeutiche</strong> — tumori ed <strong>epilessia</strong> (attività <strong>parossistica</strong> con <strong>capacità propagatoria</strong> da una regione <em>trigger</em>). Due tecniche: <strong>asportazione</strong> del trigger o <strong>commissurotomia</strong>.",
      "<strong>Lesioni artificiali</strong> — <strong>apparato stereotassico</strong> con coordinate e atlante; tecniche: asportazione, ablazione, aspirazione, elettrolitica, <strong>tossica selettiva</strong>. Valutazione con <strong>labirinti</strong>; <strong>analisi post-mortem</strong> anche per verificare la lesione.",
      "<strong>Le quattro regole etiche</strong> — <strong>comitato etico</strong> preventivo; <strong>anestesia</strong> sempre; <strong>analgesia post-operatoria</strong>; deve essere l'<strong>unico metodo disponibile</strong>, altrimenti il ricercatore è <strong>obbligato</strong> all'alternativa."
    ] },
  teorie:[
    { nome:"La dissociazione funzionale", enunciato:"Nello <strong>stesso paziente</strong>, con un determinato danno, <strong>una funzione è preservata e l'altra è compromessa</strong>.",
      glossa:"Non è un aneddoto clinico: è il principio con cui si analizza la <strong>multicomponenzialità</strong> dei processi cognitivi. «La memoria» non è una cosa sola, ma un processo fatto di componenti <strong>discrete e separabili</strong>." },
    { nome:"Singola vs doppia: il bias e la sua soluzione", enunciato:"La <strong>singola</strong> (un paziente, due compiti) non esclude che i due compiti abbiano <strong>difficoltà diversa</strong>. La <strong>doppia</strong> (due pazienti, stesse prove, dissociazioni <strong>opposte</strong>) lo esclude.",
      glossa:"<strong>Perché funziona</strong>: entrambi riescono bene in <strong>uno</strong> dei due compiti, ma <strong>non lo stesso</strong>. Se la differenza fosse di difficoltà, produrrebbe lo <strong>stesso</strong> effetto in entrambi. <em>La doppia non aggiunge un dato: elimina un'ipotesi rivale — come il gruppo di controllo nel metodo sperimentale.</em>" },
    { nome:"Il principio comune all'imaging funzionale", enunciato:"Le aree attivate richiedono <strong>più energia</strong> → l'energia è fornita da un <strong>maggiore afflusso di sangue</strong> → <strong>le tecniche rilevano il flusso ematico</strong>.",
      glossa:"<strong>La conseguenza da esplicitare</strong>: l'imaging funzionale <strong>non misura direttamente l'attività neuronale</strong>, ma un suo <strong>correlato metabolico</strong>." },
    { nome:"La lesione virtuale della TMS", enunciato:"Un <strong>manipolo a otto</strong> percorso da corrente elevata genera un <strong>campo magnetico focalizzato</strong> che <strong>perturba</strong> il <em>pattern</em> circuitale di una popolazione, compromettendone la funzione.",
      glossa:"<strong>Il paradosso</strong>: è una tecnica di <strong>stimolazione</strong> usata per ottenere l'effetto di una <strong>lesione</strong>. È l'unico modo per <strong>scegliere</strong> dove studiare una disattivazione — impossibile con le lesioni spontanee." }
  ],
  esponenti:[
    { nome:"Phineas Gage", anni:"1848", ruolo:"Caso clinico", luogo:"Vermont, USA",
      chiE:"Un'esplosione gli sparò una <strong>sbarra di ferro</strong> attraverso il cranio, passando per i <strong>lobi frontali</strong>. <strong>[N.d.R.]</strong> Era <strong>caposquadra in un cantiere ferroviario</strong>, non minatore; la sbarra entrò <strong>sotto lo zigomo sinistro</strong> e uscì dalla <strong>sommità del cranio</strong>.",
      haFatto:["Diede avvio alle ricerche sulla <strong>fisiologia dei lobi frontali</strong>"],
      teorie:[
        { nome:"La corteccia non è essenziale alla sopravvivenza", enunciato:"Gage <strong>sopravvisse</strong> e visse per anni: la corteccia e in generale la parte <strong>rostrale</strong> del SNC non sono necessarie a vivere." },
        { nome:"Non solo aree, ma connessioni", enunciato:"La lesione distrusse <strong>aree</strong> ma anche <strong>fasci assonali</strong> che le collegavano ad aree <strong>sottocorticali</strong>." },
        { nome:"I tre deficit dei lobi frontali", enunciato:"<strong>Regolazione emotiva</strong>, <strong>progettazione dell'azione</strong>, <strong>presa di decisione</strong> — nessuno dei quali interferiva con la sopravvivenza." }
      ] },
    { nome:"Il paziente H.M.", anni:"XX sec.", ruolo:"Caso clinico", luogo:"—",
      chiE:"Asportazione delle <strong>regioni mediali dei lobi temporali</strong> per il trattamento dell'epilessia.",
      haFatto:["Stabilì che quelle regioni sono implicate nei <strong>processi di memoria</strong>","Rivelò le <strong>dissociazioni funzionali</strong>"],
      teorie:[{ nome:"La dissociazione di H.M.", enunciato:"<strong>Non</strong> riusciva più a memorizzare <strong>stimoli nuovi</strong> dopo l'operazione, <strong>ma rievocava</strong> senza problemi le cose accadute in passato: una funzione compromessa, l'altra preservata." }] },
    { nome:"Hubel e Wiesel", anni:"XX sec.", ruolo:"Elettrofisiologia", luogo:"—",
      chiE:"Studi classici con <strong>microelettrodi</strong> sui neuroni della <strong>corteccia occipitale</strong> dei gatti.",
      haFatto:["Registrazione dell'attività di <strong>singoli neuroni</strong> mentre l'animale osservava stimoli visivi"],
      teorie:[{ nome:"La risoluzione a singolo neurone", enunciato:"Con i <strong>microelettrodi</strong> e un adeguato sistema di <strong>amplificazione</strong> è possibile misurare le minime variazioni elettriche nei <strong>singoli potenziali d'azione</strong>." }] }
  ],
  esperimenti:[
    { nome:"La dissociazione doppia fra Broca e Wernicke",
      disegno:[
        "Due pazienti (o gruppi) sottoposti alle <strong>stesse due prove</strong>: un compito di <strong>produzione</strong> e uno di <strong>comprensione</strong>.",
        "<strong>Paziente di Broca</strong>: produzione <strong>deficitaria</strong>, comprensione <strong>normale</strong>.",
        "<strong>Paziente di Wernicke</strong>: produzione <strong>normale</strong>, comprensione <strong>deficitaria</strong>."
      ],
      risultato:"Ciascuno riesce bene in <strong>uno</strong> dei due compiti, ma <strong>non lo stesso</strong>.",
      significato:"<strong>Esclude</strong> la spiegazione della differenza di difficoltà, ed è la prova più significativa dell'esistenza di <strong>due sistemi anatomici separati</strong> e <strong>due moduli cognitivi</strong> compromettibili singolarmente." },
    { nome:"La connettività funzionale a riposo e il default mode network",
      disegno:[
        "Evoluzione della <strong>fMRI</strong>: si misura l'attività cerebrale <strong>quando il soggetto NON è impegnato in compiti</strong>.",
        "Le regioni con attività <strong>altamente correlata</strong> sono ritenute <strong>altamente connesse</strong>."
      ],
      risultato:"Scoperta del <strong>circuito della modalità di default</strong>: un circuito delle zone <strong>prefrontali</strong> che si attiva <strong>in assenza di compito</strong>, responsabile di immaginazione, programmazione, ragionamento — e, a livello patologico, della <strong>ruminazione</strong>.",
      significato:"Nessuna tecnica basata su «dai un compito e guarda cosa si accende» avrebbe potuto trovarlo: serviva una tecnica capace di guardare <strong>l'assenza di compito</strong>. Il metodo non ha misurato meglio: ha reso <strong>pensabile</strong> un oggetto nuovo." }
  ],
  validita:{
    merito:"Costruisce un criterio di <strong>lettura critica</strong>: per ogni tecnica, che cosa consente, che cosa costa, e quale ipotesi alternativa lascia aperta.",
    limite:"È una <strong>carrellata</strong>: non una disamina di tutte le tecniche esistenti, ma un raggruppamento per categorie.",
    esito:"Fornisce gli strumenti con cui saranno studiati genetica comportamentale (S507) e plasticità (S508): <strong>lesioni artificiali</strong>, <strong>labirinti</strong>, <strong>neuroimaging</strong>." },
  precorre:[
    { nome:"La genetica sperimentale (S507)", come:"le <strong>regole etiche</strong> e i <strong>compiti comportamentali</strong> nei roditori valgono identici" },
    { nome:"Lo studio della plasticità (S508)", come:"i <strong>cinque livelli</strong> di analisi della neuroplasticità usano proprio queste tecniche" }
  ],
  formule:[
    "Per capire come funziona, guarda quando non funziona.",
    "La doppia dissociazione non aggiunge un dato: elimina un'ipotesi.",
    "L'imaging funzionale legge il sangue, non i neuroni."
  ],
  errori:[
    { no:"Elencare le tecniche senza dirne limiti", si:"La domanda chiede <strong>potenzialità e limiti</strong>: l'elenco da solo non risponde" },
    { no:"«La doppia dissociazione conferma la singola»", si:"La doppia <strong>esclude un'ipotesi alternativa</strong> — quella della difficoltà diversa dei compiti" },
    { no:"«La TAC visualizza su tre assi»", si:"La TAC è <strong>solo assiale</strong>; i <strong>tre assi</strong> sono della <strong>risonanza</strong>" },
    { no:"«PET e fMRI misurano allo stesso modo»", si:"La PET usa una <strong>sostanza radioattiva</strong>; la fMRI l'<strong>ossigenazione dell'emoglobina</strong>, senza radioattività e più rapidamente" },
    { no:"«La TMS è una tecnica di lesione»", si:"È di <strong>stimolazione</strong>: produce una lesione <strong>virtuale</strong>, non invasiva, su soggetti <strong>sani</strong>" },
    { no:"«Gage lavorava in miniera»", si:"<strong>[N.d.R.]</strong> Cantiere <strong>ferroviario</strong>; ma il dato d'esame — lobi frontali, sopravvivenza, tre deficit — resta identico" }
  ]
},

/* ---------- F5.7 ---------- */
{
  id:"S507", tipo:"scuola", nome:"Evoluzione, geni ed ereditarietà",
  identificazione:{ anno:"XIX sec. (Darwin, Mendel)", luogo:"Galápagos · Brno", lezione:"L12", capitolo:"C28",
    unaRiga:"L'evoluzione non cambia gli individui ma la frequenza dei loro caratteri; e l'ereditabilità è una proprietà delle popolazioni, mai delle persone." },
  nasceDa:{ problema:"Il dilemma <strong>natura o cultura</strong>: che cosa rende unica una persona? Il sistema nervoso è materia organica, quindi determinato da fattori <strong>biologici</strong>; ma non funzionerebbe fuori da un'<strong>interazione continua</strong> con l'ambiente.",
    formula:"Le due componenti, in <strong>interazione circolare</strong>, rendono ogni individuo <strong>unico</strong>. Questa scheda copre la <strong>natura</strong>; la S508 copre l'<strong>interazione</strong>." },
  radici:[
    { nome:"La teoria dell'evoluzione", tipo:"biologia evoluzionistica", tesi:"<strong>Filogenesi</strong> = storia evolutiva della specie. <strong>Evoluzione</strong> = cambiamento progressivo nella <strong>frequenza</strong> con cui certe caratteristiche si manifestano <strong>in una popolazione</strong>. <em>È una definizione statistica, non individuale.</em>" },
    { nome:"La selezione naturale", tipo:"meccanismo", tesi:"L'<strong>adattamento all'ambiente</strong> permette ad alcuni membri di <strong>riprodursi con maggiore successo</strong>: le caratteristiche vantaggiose diventano <strong>più comuni</strong>, le altre <strong>meno frequenti</strong> fino a estinguersi. Presuppone <strong>variabilità genetica</strong>." }
  ],
  precursori:[
    { nome:"I fringuelli delle Galápagos", provenienza:"Osservazione sul campo", apporto:"Un <strong>antenato comune</strong>, isole con <strong>risorse diverse</strong> (insetti, cactus, bacche e semi) → <strong>forme di becco diverse</strong>, perché su ciascuna isola sopravvivevano gli individui adatti a <strong>quell'</strong>ambiente" },
    { nome:"La genetica di Mendel", provenienza:"Esperimenti sulla pianta di pisello", apporto:"Da una generazione all'altra si trasmettono <strong>fattori organici</strong>, alcuni <strong>visibili</strong>, altri <strong>latenti</strong>, che si rendono visibili nelle <strong>generazioni successive</strong>" }
  ],
  oggetto:{ formula:"<strong>GENOTIPO + AMBIENTE = FENOTIPO.</strong> Il <strong>genotipo</strong> è il corredo genetico presente <strong>dal concepimento</strong>; il <strong>fenotipo</strong> l'insieme dei <strong>caratteri manifesti</strong>.",
    glossa:"<strong>La scala del materiale genetico</strong>: base azotata → <strong>nucleotide</strong> (fosfato + desossiribosio + base) → <strong>codone</strong> (3 nucleotidi = 1 amminoacido) → <strong>gene</strong> (= 1 proteina) → <strong>cromosoma</strong> → <strong>cariotipo</strong> (<strong>23 coppie</strong>: 22 autosomi + 1 sessuale). Le basi sono <strong>quattro</strong>: adenina, timina, citosina, guanina." },
  metodo:{ formula:"La <strong>genetica del comportamento</strong> studia come ereditarietà e ambiente influenzano le <strong>caratteristiche psicologiche</strong>, sulla base della <strong>concordanza</strong>.",
    glossa:"<strong>Concordanza</strong> = la <strong>compresenza</strong> di una caratteristica in persone diverse. Se è <strong>più elevata</strong> in persone con stretti legami familiari, il contributo maggiore è della <strong>genetica</strong> — specialmente se hanno vissuto in <strong>ambienti diversi</strong>.",
    vincoli:[
      "<strong>Studi di famiglia</strong> — confrontano membri della stessa famiglia, che condividono il patrimonio genetico a <strong>gradi diversi</strong>.",
      "<strong>Studi sulle adozioni</strong> — <strong>separano</strong> geni e ambiente: genitori <strong>biologici</strong> = geni senza ambiente; <strong>adottivi</strong> = ambiente senza geni. Se l'adottato è più simile ai <strong>biologici</strong>, prevalgono i fattori genetici. <em>Contributi importanti sulla schizofrenia.</em>",
      "<strong>Studi sui gemelli</strong> — <strong>omozigoti</strong>: un solo zigote che si divide, patrimonio <strong>identico</strong>. <strong>Eterozigoti</strong>: due fecondazioni, come <strong>fratelli normali</strong>. Se gli omozigoti sono <strong>più simili</strong>, c'è una componente genetica.",
      "<strong>I gemelli separati alla nascita</strong> — servono a <strong>escludere</strong> che la maggiore somiglianza degli omozigoti dipenda da un <strong>ambiente più simile</strong>. <em>Stesso movimento logico della dissociazione doppia (S506).</em>"
    ] },
  teorie:[
    { nome:"Le tre forme di adattamento della nostra specie", enunciato:"<strong>1. Bipedismo</strong> → <strong>deflessione</strong> del SNC; arti liberi → <strong>utensili</strong> e <strong>azione sull'ambiente</strong>; nuovi ambienti e risorse. <strong>2. Encefalizzazione</strong> → l'<em>Homo sapiens</em> ha un cervello <strong>triplicato</strong> rispetto all'<em>erectus</em>. <strong>3. Comparsa del linguaggio</strong> → inizio dell'<strong>evoluzione culturale</strong>.",
      glossa:"<strong>La domanda-trabocchetto</strong>: un cervello grande significa più intelligenza? <strong>No.</strong> L'<strong>uomo di Neanderthal</strong> aveva un cervello di <strong>dimensioni simili</strong> al sapiens, ma <strong>si è estinto</strong>. Forse la differenza fu proprio il <strong>linguaggio</strong>." },
    { nome:"Dominante, recessivo, poligenico", enunciato:"Il carattere <strong>dominante</strong> si manifesta <strong>sia</strong> in <strong>omozigosi</strong> (BB) <strong>sia</strong> in <strong>eterozigosi</strong> (Bb). Il <strong>recessivo</strong> <strong>soltanto in omozigosi</strong> (bb).",
      glossa:"È questo che spiega l'osservazione di Mendel sui caratteri <strong>latenti</strong>. Ma la <strong>maggior parte</strong> dei caratteri è <strong>poligenica</strong>: il <strong>colore degli occhi</strong> è l'esempio da citare, perché la semplificazione «chiari recessivi/scuri dominanti» è <strong>riduttiva</strong>." },
    { nome:"Il coefficiente di ereditabilità", enunciato:"Stima statistica (<strong>da 0 a 1</strong>) della misura in cui la <strong>varianza</strong> di una caratteristica fenotipica <strong>in un gruppo</strong> è attribuibile a <strong>differenze genetiche</strong>.",
      glossa:"<strong>L'errore concettuale da non fare</strong>: dice quanta parte della <strong>variabilità FRA individui in una popolazione</strong> è genetica. <strong>NON</strong> dice quanta parte di quella caratteristica, in un <strong>singolo individuo</strong>, sia «dovuta ai geni». <em>Esempio: gli atteggiamenti verso la religione hanno ereditabilità ≈ 0.</em>" }
  ],
  esponenti:[
    { nome:"Charles Darwin", anni:"XIX sec.", ruolo:"Padre della teoria evolutiva", luogo:"Galápagos",
      chiE:"Elaborò la teoria dell'evoluzione dopo una serie di viaggi e osservazioni metodologicamente rigorose.",
      haFatto:["La teoria dell'<strong>evoluzione</strong> e il meccanismo della <strong>selezione naturale</strong>"],
      teorie:[
        { nome:"L'evoluzione come fatto statistico", enunciato:"Il cambiamento riguarda la <strong>frequenza</strong> con cui i caratteri si manifestano in una <strong>popolazione</strong>, <strong>non</strong> gli individui. È una definizione di popolazione, non individuale." },
        { nome:"I fringuelli delle Galápagos", enunciato:"Un <strong>antenato comune</strong>; isole con <strong>risorse diverse</strong> — insetti, cactus, bacche e semi — e quindi <strong>forme di becco diverse</strong>, perché su ciascuna isola sopravvivevano gli individui adatti a <strong>quell'</strong>ambiente." }
      ] },
    { nome:"Gregor Mendel", anni:"metà XIX sec.", ruolo:"Fondatore della genetica", luogo:"Monastero, Europa centrale",
      chiE:"Monaco botanico; esperimenti metodologicamente molto ordinati sulla <strong>pianta di pisello coltivata</strong>.",
      haFatto:["Diede origine alla <strong>genetica</strong>","Da lui deriva la distinzione <strong>genotipo/fenotipo</strong>, formulata dai genetisti all'inizio del XX secolo"],
      teorie:[{ nome:"I fattori visibili e latenti", enunciato:"Da una generazione all'altra si trasmettono <strong>fattori organici</strong>: alcuni <strong>immediatamente visibili</strong>, altri <strong>latenti</strong>, che riemergono nelle <strong>generazioni successive</strong>. Sono i caratteri <strong>recessivi</strong> portati in eterozigosi." }] },
    { nome:"Tryon", anni:"1940", ruolo:"Genetica sperimentale", luogo:"—",
      chiE:"Esperimento di <strong>selezione artificiale</strong> sull'abilità di apprendere.",
      haFatto:["Dimostrò che un tratto <strong>comportamentale</strong> viene <strong>trasmesso alla progenie</strong>"],
      teorie:[
        { nome:"Il principio della selezione artificiale", enunciato:"Agisce con lo <strong>stesso meccanismo</strong> della selezione naturale, ma i caratteri fenotipici incrociati sono <strong>decisi dall'uomo</strong>." },
        { nome:"L'esperimento del 1940, in quattro passaggi", enunciato:"Ratti in un labirinto apprendono <strong>per prove ed errori</strong> → alcuni con <strong>più errori</strong>, altri con <strong>meno</strong> → Tryon <strong>isola i due estremi</strong> e li incrocia <strong>fra loro</strong> → nelle generazioni successive emergono differenze nelle abilità di apprendimento <strong>che all'inizio non si vedevano</strong>." }
      ] }
  ],
  esperimenti:[
    { nome:"Lo Human Genome Project",
      disegno:[
        "Grande progetto di <strong>mappatura del DNA umano</strong> del <strong>NIH</strong> americano, <strong>avviato nel 1990</strong>.",
        "Reso possibile dall'interazione di più discipline e da tecnologie di <strong>ingegneria genetica</strong> capaci di «srotolare» il DNA."
      ],
      risultato:"Dal <strong>2003</strong> è disponibile la mappatura: circa <strong>25 000 geni</strong>, <strong>molti meno</strong> di quanti previsti. Uguaglianza fra <strong>etnie umane</strong> = <strong>99,9%</strong>; uguaglianza con il <strong>topo</strong> = <strong>99%</strong>; circa l'<strong>80%</strong> dei geni umani e murini si attiva <strong>in qualche punto del cervello</strong>.",
      significato:"Due conseguenze. Le <strong>differenze genetiche interindividuali sono irrisorie</strong>. E il 99% col topo è <strong>la</strong> giustificazione dell'uso dei roditori negli studi sulle funzioni cerebrali umane (S506, S508)." },
    { nome:"Gli animali transgenici",
      disegno:[
        "Si modificano segmenti di DNA <strong>in vitro</strong> e si producono cellule con <strong>DNA modificato</strong>.",
        "Due procedure: <strong>knock-out</strong> — <strong>inattiva</strong> geni; <strong>knock-in</strong> — <strong>inserisce</strong> nuovi geni.",
        "Si iniettano in una <strong>femmina di roditore</strong>, che avrà corredo <strong>ibrido</strong>; nelle generazioni successive si <strong>selezionano</strong> gli animali che esprimono il gene modificato in <strong>omozigosi</strong>."
      ],
      risultato:"Gli effetti si studiano <strong>nella progenie</strong> che presenta la mutazione oggetto dello studio.",
      significato:"Consente di determinare l'influenza di <strong>geni specifici</strong> su caratteristiche psicologiche e comportamentali." }
  ],
  validita:{
    merito:"Fornisce il vocabolario e i metodi per porre in modo <strong>misurabile</strong> una domanda che altrimenti resterebbe filosofica: quanto conta la genetica in una caratteristica psicologica.",
    limite:"Il <strong>coefficiente di ereditabilità</strong> è facilissimo da interpretare male, e la sua interpretazione errata è all'origine di gran parte della cattiva divulgazione su genetica e intelligenza.",
    esito:"Lascia aperta la domanda decisiva: <strong>come</strong> genotipo e ambiente interagiscono concretamente. È l'oggetto della scheda S508." },
  precorre:[
    { nome:"Epigenetica e plasticità (S508)", come:"il <strong>«+»</strong> della formula <em>genotipo + ambiente</em> riceve lì un <strong>meccanismo</strong>" },
    { nome:"Il range di reazione (S508)", come:"mostrerà <strong>perché</strong> l'ereditabilità non determina il destino di nessun individuo" }
  ],
  formule:[
    "GENOTIPO + AMBIENTE = FENOTIPO.",
    "L'evoluzione cambia le frequenze, non gli individui.",
    "L'ereditabilità è una proprietà delle popolazioni, mai delle persone."
  ],
  errori:[
    { no:"«L'evoluzione è il cambiamento degli individui»", si:"È il cambiamento della <strong>frequenza</strong> di una caratteristica <strong>in una popolazione</strong>" },
    { no:"Raccontare la giraffa in modo lamarckiano", si:"Sopravvivevano gli individui che <strong>GIÀ avevano</strong> il collo più lungo: la variazione <strong>preesiste</strong> e l'ambiente <strong>seleziona</strong>. <strong>[N.d.R.]</strong> Le giraffe hanno <strong>sette</strong> vertebre cervicali come tutti i mammiferi: sono le vertebre a essersi <strong>allungate</strong>" },
    { no:"«Un cervello più grande è più intelligente»", si:"Il <strong>Neanderthal</strong> aveva un cervello simile al sapiens e <strong>si è estinto</strong>" },
    { no:"«Il fenotipo è determinato dal genotipo»", si:"Dal genotipo <strong>e</strong> dalla sua <strong>interazione con l'ambiente</strong>" },
    { no:"«Il carattere recessivo si manifesta in eterozigosi»", si:"<strong>Soltanto in omozigosi</strong>: serve che <strong>entrambi</strong> gli alleli lo esprimano" },
    { no:"Leggere l'ereditabilità come proprietà della persona", si:"Riguarda la <strong>variabilità FRA individui</strong> in una popolazione" }
  ]
},

/* ---------- F5.8 ---------- */
{
  id:"S508", tipo:"scuola", nome:"Epigenetica e plasticità cerebrale",
  identificazione:{ anno:"—", luogo:"—", lezione:"L13", capitolo:"C29",
    unaRiga:"I geni fissano il campo, l'ambiente decide dove ci si ferma dentro il campo, e il temperamento — che è genetico — decide quale campo si finisce per abitare." },
  nasceDa:{ problema:"La formula <strong>genotipo + ambiente = fenotipo</strong> (S507) non dice <strong>come</strong> funzioni quel «+». E soprattutto non dice che <strong>non funziona in una sola direzione</strong>.",
    formula:"<strong>Due direzioni.</strong> <strong>A</strong>: l'ambiente influenza l'espressione dei geni (<strong>range di reazione</strong>). <strong>B</strong>: i geni influenzano <strong>come si vive l'ambiente</strong> (<strong>influenza evocativa</strong>)." },
  radici:[
    { nome:"Il range di reazione", tipo:"genetica del comportamento", tesi:"<strong>Intervallo di possibilità</strong> — fra un <strong>limite superiore</strong> e uno <strong>inferiore</strong> — consentite dal codice genetico. <strong>I geni fissano il range; l'ambiente decide dove, dentro quel range, la persona si colloca.</strong>" },
    { nome:"L'influenza evocativa", tipo:"psicologia dello sviluppo", tesi:"Un bambino <strong>introverso</strong> <strong>evoca</strong> negli altri una modalità di interazione <strong>complementare</strong> alla sua chiusura; uno <strong>estroverso</strong> evoca <strong>più interazione</strong>. Il temperamento <strong>modula la modalità in cui si vive l'ambiente</strong>." }
  ],
  precursori:[
    { nome:"Cajal", provenienza:"Istologia del sistema nervoso", apporto:"Scoprì che l'<strong>apprendimento</strong> richiede la <strong>formazione di nuove connessioni</strong> tra neuroni" },
    { nome:"Sherrington", provenienza:"Neurofisiologia", apporto:"Diede a quelle nuove connessioni il nome di <strong>sinapsi</strong>" }
  ],
  oggetto:{ formula:"La <strong>plasticità cerebrale</strong>: la <strong>capacità esclusiva del cervello di modificarsi continuamente</strong>, dalla <strong>gestazione</strong> alla <strong>morte</strong>, in un continuo processo di adattamento.",
    glossa:"<strong>L'epigenetica</strong> studia le <strong>influenze ambientali</strong> che determinano l'<strong>espressione</strong> o la <strong>non-espressione</strong> di un gene — e il <strong>grado</strong> di quell'espressione — <strong>senza alterare la struttura del gene</strong>. È un'area in espansione degli ultimi vent'anni circa." },
  metodo:{ formula:"La plasticità si studia a <strong>cinque livelli</strong>, con <strong>psicologia comparata</strong> e <strong>neuroimaging</strong>.",
    glossa:"<strong>La regola generale</strong>: tutti i meccanismi neuroplastici sono <strong>fortemente potenziati da un ambiente stimolante</strong> e <strong>fortemente depotenziati da un ambiente deprivato</strong>.",
    vincoli:[
      "<strong>1. Epigenetico</strong> — metilazione del DNA, rimodellamento della cromatina, RNA non codificanti.",
      "<strong>2. Molecolare</strong> — le <strong>neurotrofine</strong>: <strong>BDNF</strong> e <strong>NGF</strong> (scoperto da <strong>Rita Levi-Montalcini</strong>, <strong>premio Nobel</strong>).",
      "<strong>3. Morfologico</strong> — <strong>estensione dei dendriti</strong>, <strong>numero di spine dendritiche</strong>, <strong>neurogenesi</strong> (specialmente <strong>ippocampale</strong>).",
      "<strong>4. Funzionale</strong> — elettrofisiologia: attivazione di strutture e <em>network</em>.",
      "<strong>5. Comportamentale</strong> — performance in apprendimento, memoria, funzioni superiori."
    ] },
  teorie:[
    { nome:"Mutazione genetica vs modificazione epigenetica", enunciato:"La <strong>mutazione</strong> <strong>cambia la sequenza</strong> del gene ed è <strong>irreversibile</strong>. La <strong>modificazione epigenetica</strong> <strong>non cambia la sequenza</strong> ed è <strong>reversibile</strong>. <strong>Entrambe sono ereditarie.</strong>",
      glossa:"<strong>La distinzione in una riga</strong>: la mutazione <strong>riscrive il codice</strong>; l'epigenetica <strong>cambia quali righe di codice vengono eseguite</strong>, lasciando il codice intatto. La differenza non sta nell'ereditarietà: sta nella <strong>reversibilità</strong>." },
    { nome:"I due segni epigenetici", enunciato:"<strong>Metilazione del DNA</strong> — addizione di un <strong>gruppo metilico</strong> sulla sequenza di basi: <strong>DISATTIVA</strong>. <strong>Modificazione degli istoni</strong> — modificazioni chimiche alle proteine che <strong>impacchettano</strong> il DNA: può <strong>ATTIVARE O DISATTIVARE</strong>.",
      glossa:"<strong>La differenza da non perdere</strong>: la metilazione <strong>disattiva soltanto</strong>; la modificazione istonica può fare <strong>entrambe</strong> le cose." },
    { nome:"I periodi critici", enunciato:"Nella primissima fase postnatale le reti sinaptiche sono <strong>estremamente sensibili</strong> agli stimoli. Le informazioni genetiche <strong>esigono un determinato tipo di stimolazione ambientale per potersi esprimere</strong>.",
      glossa:"<strong>L'esempio del linguaggio</strong>: se il bambino <strong>non viene esposto</strong> a quei suoni, <strong>non apprenderà mai a parlare</strong>. È l'esempio che chiarisce meglio che cosa significhi «interazione»: la funzione è <strong>nel genoma</strong>, ma <strong>senza l'ambiente non si accende</strong>." },
    { nome:"Il costrutto della riserva", enunciato:"Capacità di sviluppare <strong>risorse che riducono il rischio di compromissioni cognitive</strong>. Chi ha grande riserva <strong>sostiene più danno</strong> prima della soglia dei deficit clinici.",
      glossa:"<strong>Riserva CEREBRALE</strong> — strutturale, <strong>passiva</strong>: volume, densità neuronale, connettività. Misura <strong>quanto danno si sostiene</strong>. <strong>Riserva COGNITIVA</strong> — funzionale, <strong>attiva</strong>: efficienza dei circuiti aumentata dall'<strong>uso ripetuto</strong>. Misura <strong>quanto bene si compensa</strong>. <em>La prima è il presupposto, la seconda è il suo uso.</em>" }
  ],
  esponenti:[
    { nome:"Rosenzweig", anni:"XX sec.", ruolo:"Ideatore del modello", luogo:"—",
      chiE:"Definì l'<strong>arricchimento ambientale</strong> come <strong>combinazione di una complessa stimolazione inanimata e sociale</strong>.",
      haFatto:["Il <strong>modello animale dell'arricchimento ambientale</strong>, tuttora paradigma di riferimento"],
      teorie:[
        { nome:"La sinergia dei fattori", enunciato:"L'aumento di neuroplasticità prodotto dalla stimolazione <strong>complessa</strong> <strong>non è paragonabile</strong> a quello indotto da <strong>un fattore per volta</strong>: l'effetto è <strong>sinergico</strong>, non additivo — e per questo non sarebbe stato prevedibile studiando i fattori separatamente." },
        { nome:"Le quattro variabili manipolate", enunciato:"<strong>Esercizio fisico</strong> (gabbie grandi e <strong>ruote</strong>) · <strong>attività cognitiva</strong> (<strong>nuovi giochi</strong> ogni giorno) · <strong>attività esplorativa</strong> (<strong>cibo e acqua</strong> spostati di continuo) · <strong>interazioni sociali</strong> (<strong>gruppi molto ampi</strong>)." }
      ] },
    { nome:"Rita Levi-Montalcini", anni:"XX sec.", ruolo:"Neurobiologa", luogo:"Italia",
      chiE:"Scoprì l'<strong>NGF</strong>, il <strong>fattore di crescita nervoso</strong>.",
      haFatto:["Per questa scoperta ha vinto il <strong>premio Nobel</strong>"],
      teorie:[{ nome:"Il ruolo delle neurotrofine", enunciato:"Modulano <strong>proliferazione</strong>, <strong>maturazione</strong>, <strong>mantenimento</strong> e <strong>sopravvivenza</strong> dei neuroni. In un ambiente appropriato <strong>supportano</strong> la plasticità; in presenza di fattori ambientali negativi <strong>calano in quantità</strong>, riducendo le capacità neuroplastiche." }] }
  ],
  esperimenti:[
    { nome:"L'arricchimento ambientale in condizioni patologiche",
      disegno:[
        "Modello animale di <strong>demenza di Alzheimer</strong>: si fanno degenerare i <strong>neuroni colinergici del prosencefalo basale</strong>.",
        "Gruppi <strong>lesionati</strong> e <strong>non lesionati</strong>, ciascuno in <strong>arricchimento</strong> o in <strong>condizioni standard</strong>."
      ],
      risultato:"Sul piano <strong>comportamentale</strong>, i soggetti <strong>arricchiti mitigavano i deficit</strong> in svariati compiti cognitivi — <strong>a parità di danno neurologico identico</strong>. Sul piano <strong>funzionale</strong>, l'arricchimento <strong>tamponava</strong> l'effetto della lesione sull'assetto neuronale.",
      significato:"Da qui il costrutto della <strong>riserva</strong>. Confermato anche sull'uomo: a <strong>parità di danno</strong>, chi era vissuto in ambienti <strong>più stimolanti</strong> mostrava deficit cognitivi <strong>minori</strong>." },
    { nome:"La trasmissione transgenerazionale",
      disegno:[
        "Ratte madri: un gruppo in <strong>arricchimento ambientale</strong>, uno in <strong>condizioni standard</strong>.",
        "Nelle madri si misurano i comportamenti <strong>diretti ai piccoli</strong> (leccarli, ripulirli, toccarli) e quelli <strong>non diretti</strong> (mangiare, esplorare).",
        "Nei piccoli si valutano parametri <strong>anatomici</strong> e <strong>comportamentali</strong>."
      ],
      risultato:"Nelle madri arricchite i comportamenti <strong>diretti ai piccoli</strong> erano <strong>aumentati</strong>. Nei piccoli: <strong>elevata neurogenesi ippocampale</strong>, <strong>elevati livelli di neurotrofine</strong>, <strong>sviluppo motorio e spaziale più veloce</strong>, <strong>abilità mnesiche e spaziali più performanti</strong>.",
      significato:"<strong>Il dettaglio decisivo</strong>: quei livelli erano <strong>BASALI</strong> — già presenti <strong>alla nascita</strong>, <strong>prima</strong> dell'interazione con un ambiente postnatale. Non sono quindi solo effetto dell'accudimento: c'è una componente <strong>ereditata</strong>. I meccanismi epigenetici <strong>si ereditano</strong> pur restando <strong>reversibili</strong>." }
  ],
  validita:{
    merito:"Trasforma l'affermazione generica «geni e ambiente interagiscono» in un <strong>meccanismo</strong> con nomi, misure e reversibilità — e mostra che l'interazione ha <strong>due direzioni</strong>, non una.",
    limite:"Gran parte delle evidenze causali viene da <strong>modelli animali</strong>: sull'uomo il costrutto di riserva è ricostruito da <strong>correlazioni</strong> fra stile di vita e deficit a parità di danno.",
    esito:"Chiude il modulo tornando all'affermazione con cui si era aperto (S501): i neuroni <strong>non si rigenerano, ma possono modificare alcune loro caratteristiche nel corso della vita</strong>." },
  precorre:[
    { nome:"Apprendimento e memoria", come:"la <strong>plasticità sinaptica</strong> è il substrato dei processi che saranno studiati nel modulo successivo" },
    { nome:"L'intero modulo (S501)", come:"la <strong>seconda metà</strong> della quarta caratteristica del neurone trova qui il suo sviluppo completo" }
  ],
  formule:[
    "I geni fissano il range, l'ambiente decide dove ci si colloca.",
    "La mutazione riscrive il codice; l'epigenetica cambia quali righe si eseguono.",
    "Potenziata da un ambiente stimolante, depotenziata da uno deprivato.",
    "Riserva cerebrale = quanto danno; riserva cognitiva = quanto bene lo compensi."
  ],
  errori:[
    { no:"Enunciare una sola direzione dell'interazione", si:"Sono <strong>due</strong>: l'ambiente sui geni (<strong>range di reazione</strong>) e i geni sull'ambiente (<strong>influenza evocativa</strong>)" },
    { no:"«L'epigenetica cambia i geni»", si:"<strong>Non altera la sequenza</strong>: modula quali geni si <strong>esprimono</strong>" },
    { no:"«La modificazione epigenetica non è ereditaria»", si:"<strong>Lo è</strong>. Ciò che la distingue dalla mutazione è la <strong>reversibilità</strong>" },
    { no:"Attribuire alla metilazione anche l'attivazione", si:"La metilazione <strong>disattiva soltanto</strong>; è la <strong>modificazione istonica</strong> che può fare entrambe" },
    { no:"Confondere riserva cerebrale e cognitiva", si:"<strong>Cerebrale</strong> = strutturale <strong>passiva</strong>; <strong>cognitiva</strong> = funzionale <strong>attiva</strong>" },
    { no:"Raccontare lo studio transgenerazionale senza «basale»", si:"È il dettaglio che lo rende <strong>conclusivo</strong>: i livelli erano già presenti <strong>alla nascita</strong>" },
    { no:"«I neuroni non si rigenerano mai»", si:"Non c'è <strong>riparazione per rigenerazione</strong>, ma la <strong>neurogenesi</strong> esiste — ippocampale, <strong>anche in età adulta</strong>" }
  ]
}

  ]
});
