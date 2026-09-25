/* MAPPE CONCETTUALI — una per macro-argomento, da esplorare scendendo.

   Stessi macro-argomenti dell'albero di studio (data/albero.js), con gli
   stessi confini. Il contenuto viene dalle trascrizioni delle lezioni,
   lette per intero: ogni punto che la lezione espone ha il suo nodo.

   SCHEMA FISSO DEL NODO — stessi campi, sempre:

     t      titolo, come compare nella mappa
     d      descrizione, mostrata solo su richiesta (clic sul nodo, o
            l'interruttore «Descrizioni nella mappa»). HTML ammesso.
            Se manca e c'è `atl`, vale il campo «Che cosa fa» della
            scheda dell'atlante: un testo solo, mai due copie.
     f      lezione di riferimento. Se manca, si eredita dal genitore.
     es     1 = SUPERFLUO, in giallo: l'allestimento di un esperimento,
            un aneddoto, un esempio illustrativo. Serve a capire, non va
            imparato. Il concetto o la scoperta che l'esempio illustra
            restano un nodo normale. Si eredita dai discendenti.
     atl    (facoltativo) id della parte nell'atlante 3D
     figli  i sottonodi

   COLORI NELLA PAGINA
     verde   foglia: un elemento finale, da sapere
     giallo  es:1 — superfluo
     tinta   i rami intermedi hanno il colore del ramo di primo livello

   Gli id non si scrivono: si ricavano dal percorso dei titoli.        */

var PGE = window.PGE = window.PGE || {};

PGE.mappe = { macro: [] };

/* =========================================================
   1 — LA DEFINIZIONE DI PSICOLOGIA                    (L01)
   ========================================================= */
PGE.mappe.macro.push({
id:"def", titolo:"La definizione", occhiello:"Lezione 1",
radice:{ t:"La definizione di psicologia", f:"L01",
  d:"Che cosa studia la psicologia, che cosa la rende scientifica, perché lo è diventata così tardi, e da quali discipline si è dovuta staccare.",
  figli:[

  { t:"Perché serve una definizione tecnica",
    d:"La disciplina è così ampia che chiunque, per strada, ne darebbe una definizione diversa: ciascuna coglierebbe qualcosa di pertinente, nessuna sarebbe <strong>esaustiva</strong>. Serve la definizione tecnica ed esatta." },

  { t:"L'etimologia",
    d:"Dal greco <em>psiche</em> e <em>logos</em>: letteralmente <strong>«discorso sull'anima»</strong>, cioè «scienza della mente»." },

  { t:"La definizione generale",
    d:"<strong>Studio scientifico della mente e del comportamento.</strong> Un'accezione molto generale, che mette insieme un oggetto interno e uno esterno.",
    figli:[
    { t:"La mente",
      d:"L'<strong>esperienza soggettiva</strong> di ciò che viviamo: percezioni, pensieri, memorie, stati d'animo. Dà luogo a un <strong>flusso di coscienza</strong>, ciò di cui siamo consapevoli nel qui e ora." },
    { t:"Il comportamento",
      d:"Qualcosa di <strong>esterno</strong>, e quindi <strong>direttamente osservabile</strong>: le azioni che compiamo nell'ambiente che ci circonda." },
    { t:"Perché è troppo vaga",
      d:"Che cosa significa studiare il comportamento? Che cosa vuol dire studiare <strong>scientificamente un pensiero</strong> o uno stato d'animo? La difficoltà di definizione è già uno dei motivi del ritardo con cui la psicologia è diventata scienza." }
  ]},

  { t:"La definizione attuale",
    d:"«Lo studio scientifico del <strong>comportamento</strong> e della <strong>mente</strong> dell'<strong>essere vivente</strong> nel suo <strong>rapporto con l'ambiente</strong>: mentre lo vive, ne fa esperienza, compie delle azioni e se lo rappresenta internamente.» Va detta alla lettera.",
    figli:[
    { t:"«Studio scientifico»",
      d:"Richiama il <strong>metodo sperimentale</strong> e la <strong>verifica empirica</strong>: porta con sé l'intero criterio di scientificità." },
    { t:"«Comportamento e processi mentali»",
      d:"Non la mente come una cosa, ma <strong>processi</strong>: un insieme di operazioni, non un oggetto da descrivere." },
    { t:"«Dell'essere vivente»",
      d:"Rientrano gli <strong>animali non umani</strong>, e con essi la <strong>psicologia comparata</strong>, metodo elettivo della disciplina." },
    { t:"«Nel rapporto con l'ambiente»",
      d:"Comportamento e mente non si studiano in isolamento, ma in relazione all'ambiente: mentre lo si <strong>vive</strong>, se ne fa <strong>esperienza</strong>, vi si <strong>agisce</strong> e lo si <strong>rappresenta</strong> internamente." }
  ]},

  { t:"Che cosa la rende scientifica",
    d:"<strong>Non l'oggetto, ma il metodo</strong>: il metodo sperimentale, che prevede una <strong>verifica empirica</strong> della nuova conoscenza, contro la speculazione da assiomi indimostrabili. La data è il <strong>1879</strong>." },

  { t:"Il ritardo",
    d:"La psicologia nasce come scienza autonoma molto dopo chimica, fisica e scienze naturali. Per spiegarlo servono il confronto fra due metodi e tre cause.",
    figli:[
    { t:"Il dato di fatto",
      d:"<strong>1879, Wundt</strong>. Per più di <strong>due millenni</strong> tutto ciò che riguardava la mente è stato studiato dal punto di vista filosofico." },
    { t:"Due metodi a confronto",
      d:"Il ritardo si capisce come passaggio dall'uno all'altro.",
      figli:[
      { t:"Metodo razionalista",
        d:"<strong>Speculazione</strong>: un discorso logico che arriva a conclusioni logiche partendo da premesse che spesso sono <strong>assiomi indimostrabili</strong>. <strong>Nessuna verifica empirica</strong>." },
      { t:"Metodo sperimentale",
        d:"Una <strong>verifica tangibile, empirica</strong>, come nelle scienze naturali, in chimica, in fisica." }
    ]},
    { t:"Le tre cause",
      d:"Tre ostacoli distinti, e il terzo non è un problema di strumenti.",
      figli:[
      { t:"1 · Definire l'oggetto",
        d:"Che cosa significa studiare scientificamente un pensiero? Un metodo preso in prestito dalle scienze naturali richiede un oggetto <strong>isolabile, manipolabile, misurabile</strong>." },
      { t:"2 · L'uomo come oggetto",
        d:"La difficoltà di considerare l'uomo un <strong>oggetto di studio scientifico</strong>: le scienze naturali trattano l'oggetto in modo deterministico." },
      { t:"3 · La mente trascendentale",
        d:"In origine la mente era considerata <strong>quasi divina</strong>: non era possibile, né immaginabile, un approccio naturalistico a qualcosa di divino." }
    ]},
    { t:"Perché il positivismo non basta",
      d:"Il positivismo fa delle scienze naturali l'<strong>unica fonte attendibile</strong> di conoscenza, ma è un'affermazione di principio: dice che la psicologia <em>dovrebbe</em> essere scienza, non <em>come</em>. Serve la prova che un fenomeno psichico si possa misurare: la <strong>psicofisica</strong>." }
  ]},

  { t:"La doppia emancipazione",
    d:"Per diventare autonoma la psicologia si è dovuta emancipare da due discipline: la <strong>filosofia</strong> e la <strong>medicina</strong>.",
    figli:[
    { t:"Dalla filosofia",
      d:"Dallo studio della mente sul piano <strong>filosofico</strong> allo studio della <strong>relazione unitaria mente-corpo</strong> sul piano <strong>naturalistico</strong>.",
      figli:[
      { t:"L'approccio razionalistico",
        d:"Finché la mente era trascendentale, il suo studio non poteva che essere filosofico: conoscenza prodotta per speculazione, senza verifica." }
    ]},
    { t:"Dalla medicina",
      d:"Dalla medicina, in particolare dalla <strong>fisiologia</strong>: dallo studio del cervello sul piano solo fisiologico all'<strong>unità cervello-mente</strong> e alle sue interazioni con l'ambiente.",
      figli:[
      { t:"Il cervello come organo",
        d:"La mente, sostanza spirituale, non negava l'esistenza del cervello: ma lo si studiava <strong>solo in quanto organo</strong>, con l'approccio <strong>deterministico</strong> delle scienze naturali." },
      { t:"Il ponte mancante",
        d:"Difficile era concepire che la mente fosse <strong>determinata dal funzionamento del cervello</strong>. Lo rende possibile l'evoluzione scientifica e tecnologica: la psicologia studia allora l'unità mente-cervello, in relazione all'ambiente." }
    ]}
  ]}
]}});

/* =========================================================
   2 — L'EXCURSUS STORICO                        (L01, L02)
   ========================================================= */
PGE.mappe.macro.push({
id:"exc", titolo:"L'excursus storico", occhiello:"Lezioni 1 e 2",
radice:{ t:"L'excursus storico", f:"L01",
  d:"Il passaggio progressivo da una concezione non scientifica a una scientifica della psicologia: una selezione di scuole, in ambito accademico, fra Europa e America. Di ciascuna si chiedono i <strong>fondamenti epistemologici</strong>: <strong>oggetto, metodo, validità</strong>.",
  figli:[

  { t:"Lo schema dell'excursus",
    d:"Strutturalismo e funzionalismo nascono in reazione e in conseguenza dell'input di Wundt; da queste nascono Gestalt e comportamentismo; si arriva al <strong>cognitivismo</strong>, l'ultima scuola propriamente nata. Scuole russe e psicologia dinamica stanno fuori dallo schema, ma lo influenzano moltissimo." },

  /* ---------------- PRIMA ---------------- */
  { t:"Prima della psicologia scientifica",
    d:"L'interesse per le tematiche psicologiche c'è da sempre; manca il metodo scientifico.",
    figli:[
    { t:"I guaritori e la trapanazione",
      d:"Pietre grezze sfregate sulla scatola cranica di soggetti ritenuti <strong>posseduti</strong>, per far uscire gli spiriti. Spesso causava la morte." },
    { t:"Ippocrate e i quattro temperamenti",
      d:"Si interessa della <strong>personalità</strong> e individua quattro temperamenti, ma senza alcun fondamento scientifico: approccio razionalista e filosofico." },
    { t:"Cartesio",
      d:"Filosofo e matematico. Introduce un'accezione <strong>dualistica</strong> dell'uomo: una sostanza corporea e una spirituale.",
      figli:[
      { t:"Res cogitans e res extensa",
        d:"<strong>Res cogitans</strong>: lo spirito, la sostanza più simile all'anima, trascendentale. <strong>Res extensa</strong>: tutto il corpo, <strong>compreso il cervello</strong>." },
      { t:"Il sistema nervoso di Cartesio",
        d:"Una prima teorizzazione, rudimentale e sbagliata: i nervi come <strong>tubi</strong> in cui scorre un'energia che arriva al cervello." },
      { t:"La ghiandola pineale",
        d:"Nella parte posteriore del cervello, collega il cervello alla res cogitans. Il cervello <strong>non è responsabile delle funzioni psichiche</strong>: i fenomeni psichici sono dell'anima, quindi <strong>non si possono studiare</strong>." }
    ]},
    { t:"Franz Joseph Gall",
      d:"Medico, fonda una teoria della personalità che <strong>localizza le funzioni psichiche nel cervello</strong>.",
      figli:[
      { t:"La frenologia",
        d:"Le caratteristiche di personalità risiedono nel cervello e si leggono dalle <strong>protuberanze della scatola cranica</strong>." },
      { t:"Il primo abbozzo dell'unità mente-cervello",
        d:"Comincia a strutturarsi l'idea che mente e cervello siano legati, ma in modo non scientifico e molto rudimentale." },
      { t:"Lombroso e la criminologia", es:1,
        d:"La frenologia è servita a criminologi come Lombroso; una teoria comunque priva di fondamento scientifico." }
    ]}
  ]},

  /* ---------------- LA NASCITA ---------------- */
  { t:"La nascita della psicologia scientifica",
    d:"L'Ottocento è il secolo della <strong>rivoluzione scientifica</strong>. Il clima culturale lo dà il positivismo, la prova concreta la psicofisica.",
    figli:[
    { t:"Comte e il positivismo",
      d:"Filosofo: le scienze naturali sono l'<strong>unica fonte attendibile di conoscenza</strong>. Qualsiasi disciplina, per produrre conoscenza, deve avere base scientifica: il panorama più adatto perché la psicologia diventi autonoma." },
    { t:"La psicofisica",
      d:"Studia come le <strong>sensazioni</strong> dipendono dalle <strong>caratteristiche fisiche degli stimoli</strong>, con il metodo sperimentale. Lo studio scientifico dei processi mentali era già cominciato: è il <strong>precursore</strong> della psicologia scientifica.",
      figli:[
      { t:"Gustav Fechner",
        d:"Psicofisiologo. La sensazione è <strong>oggettiva, materiale e misurabile</strong>.",
        figli:[
        { t:"La legge di Weber-Fechner",
          d:"Traduce in termini <strong>matematici</strong> il rapporto fra mondo fisico e mondo psichico, cioè fra stimolo e sensazione percepita." }
      ]},
      { t:"Hermann von Helmholtz",
        d:"Studia la <strong>fisiologia sensoriale</strong>, in particolare visiva e uditiva.",
        figli:[
        { t:"La teoria dell'inferenza inconscia",
          d:"La percezione è un <strong>processo costruttivo</strong>: influenzata dall'esperienza pregressa tramite un processo cognitivo interno e <strong>inconsapevole</strong>." }
      ]}
    ]},
    { t:"Wilhelm Wundt, 1879",
      d:"L'artefice della rivoluzione: a <strong>Lipsia</strong>, Germania, nel <strong>1879</strong>, fonda il primo laboratorio di psicologia per studiare i contenuti psichici col <strong>metodo sperimentale</strong>.",
      figli:[
      { t:"L'oggetto: l'esperienza immediata",
        d:"L'<strong>esperienza diretta e immediata</strong>: il contenuto della coscienza in un dato momento, <strong>scomposto negli elementi irriducibili</strong>.",
        figli:[
        { t:"Gli atomi della mente",
          d:"Come la chimica scompone la materia in atomi, così Wundt scompone i contenuti di coscienza in elementi irriducibili: gli <strong>«atomi della mente»</strong>." },
        { t:"Al variare dello stimolo",
          d:"Vuole cogliere la <strong>variazione dell'esperienza cosciente</strong> al variare dello stimolo fisico a cui il soggetto è esposto." }
      ]},
      { t:"Il metodo introspettivo",
        d:"<strong>Introspezione</strong>, «guardare dentro»: la descrizione soggettiva della propria esperienza durante l'esposizione agli stimoli.",
        figli:[
        { t:"L'addestramento dei soggetti",
          d:"Studenti universitari addestrati a descrivere scrupolosamente le esperienze dirette secondo <strong>criteri elementistici</strong>, congruenti con le proprietà fisiche dello stimolo. Così si ottiene un controllo sperimentale sistematico." },
        { t:"L'esempio del colore", es:1,
          d:"Davanti a un colore non basta dirne il nome: se ne descrivono brillantezza, intensità e così via. Davanti a una slide non si dice «parole scritte», ma segni tondeggianti, angoli, neri più o meno intensi." },
        { t:"Esperienza, non interpretazione",
          d:"Il soggetto deve riferire l'esperienza immediata: dire «qui c'è una parola» è già <strong>interpretare</strong>." },
        { t:"I tempi di reazione",
          d:"Il tempo fra presentazione dello stimolo e risposta: <strong>più è lungo</strong>, più è probabile che il soggetto stia interpretando." }
      ]}
    ]}
  ]},

  /* ---------------- STRUTTURALISMO ---------------- */
  { t:"Lo strutturalismo, 1892",
    d:"La scuola wundtiana portata in America, nominata e sistematizzata. Muore per il metodo.",
    figli:[
    { t:"Edward Titchener",
      d:"Studia con Wundt, poi si trasferisce alla <strong>Cornell University</strong>, in America: vi porta la scuola wundtiana, le dà un nome e la sistematizza." },
    { t:"L'oggetto: la struttura",
      d:"La <strong>struttura della mente e della coscienza</strong> nei suoi elementi irriducibili: percezioni, emozioni, stati d'animo, idee, tutto scomposto." },
    { t:"Il metodo: l'introspezione sistematizzata",
      d:"Un <strong>vocabolario</strong> che il soggetto deve usare davanti agli stimoli. Il soggetto degli esperimenti è <strong>lo sperimentatore stesso</strong>." },
    { t:"Mente e coscienza",
      d:"La <strong>mente</strong> è la somma di tutti i processi mentali della vita di un individuo; la <strong>coscienza</strong> la somma di quelli del qui e ora, che la psicologia sperimentale deve descrivere nei contenuti elementari." },
    { t:"Il merito",
      d:"Aver introdotto la <strong>questione del metodo</strong> per far diventare la psicologia una scienza." },
    { t:"Il limite: il metodo",
      d:"Il punto debole è proprio il metodo, che si rivela non valido.",
      figli:[
      { t:"Introspezione = retrospezione",
        d:"Fra il vedere lo stimolo e il verbalizzarlo passa del tempo: l'<strong>immediatezza si perde</strong>." },
      { t:"Descrizioni incoerenti",
        d:"Anche soggetti perfettamente addestrati davano descrizioni <strong>incoerenti degli stessi stimoli</strong>." }
    ]},
    { t:"Il declino",
      d:"Con la <strong>morte di Titchener</strong> lo strutturalismo decade; ma da esso viene l'input per la scuola successiva." }
  ]},

  /* ---------------- FUNZIONALISMO ---------------- */
  { t:"Il funzionalismo, 1896",
    d:"I fenomeni mentali come <strong>funzioni</strong>, non più come contenuti. Nasce in America, in contrapposizione allo strutturalismo.",
    figli:[
    { t:"L'esigenza",
      d:"Andare <strong>oltre la struttura</strong>: considerare la mente nell'ambiente in cui l'individuo vive. La domanda diventa: <strong>a cosa servono</strong> i processi mentali e <strong>come funzionano</strong>?" },
    { t:"Charles Darwin",
      d:"Precursore, con la teoria dell'evoluzione.",
      figli:[
      { t:"La selezione naturale",
        d:"L'evoluzione biologica avviene per <strong>selezione naturale</strong>: le caratteristiche più utili alla sopravvivenza hanno più probabilità di essere trasmesse alle generazioni successive." },
      { t:"L'adattamento all'ambiente",
        d:"Sopravvivono gli individui che meglio si adattano: l'<strong>adattamento all'ambiente</strong> è il concetto fondamentale." },
      { t:"La giraffa", es:1,
        d:"Solo le giraffe con il collo lungo arrivavano alle foglie e sopravvivevano: il carattere si è tramandato fino a diventare di tutte." }
    ]},
    { t:"William James",
      d:"Filosofo e psicologo, precursore. Lavora con Wundt, ne è attratto, poi si accorge che studiare la struttura della mente vuol dire <strong>snaturarla</strong>.",
      figli:[
      { t:"Stream of consciousness",
        d:"La coscienza è un <strong>flusso dinamico</strong>, «un fiume che scorre», più che una serie di elementi distinti." },
      { t:"Nessun momento replicabile",
        d:"Se la coscienza scorre, nessun momento è ripetibile: domani, nella stessa condizione, sarò consapevole in modo diverso. È privo di senso studiarne i contenuti." },
      { t:"La mente come adattamento",
        d:"La mente è il <strong>massimo effetto dell'adattamento umano</strong>: più utile studiare come funziona che come è fatta." },
      { t:"Precursore, non caposcuola",
        d:"All'Università di <strong>Harvard</strong> contribuisce all'avvio della scuola; alcuni lo considerano caposcuola, ma è un precursore." }
    ]},
    { t:"La Scuola di Chicago",
      d:"<strong>Dewey, Angell e Carr</strong>, i caposcuola veri e propri.",
      figli:[
      { t:"Il manifesto funzionalista",
        d:"Danno il nome alla scuola e la sistematizzano, come Titchener aveva fatto con lo strutturalismo." },
      { t:"L'oggetto",
        d:"Le <strong>attività mentali</strong> e il loro uso nella <strong>guida del comportamento</strong>: i comportamenti nella loro globalità, in relazione all'adattamento." },
      { t:"Il metodo eclettico",
        d:"Scientifico ma non sempre lo stesso: dalla <strong>sperimentazione di laboratorio</strong> all'<strong>osservazione</strong> semplice e controllata." }
    ]},
    { t:"Edward Thorndike",
      d:"Columbia University. Funzionalista <em>sui generis</em>: non un caposcuola, ma il <strong>precursore del comportamentismo</strong>.",
      figli:[
      { t:"Il connessionismo di Thorndike",
        d:"I processi psichici sono <strong>connessioni</strong>, innate o acquisite, <strong>fra una situazione e una risposta</strong>." },
      { t:"La legge dell'effetto",
        d:"Un comportamento seguito da un <strong>feedback positivo</strong> si rinforza e diventa più probabile; uno seguito da un <strong>feedback negativo</strong> tende a estinguersi." }
    ]}
  ]},

  /* ---------------- SCUOLE RUSSE ---------------- */
  { t:"Le scuole russe",
    d:"Fuori dall'ambiente accademico tedesco e americano, dalla fine dell'Ottocento agli <strong>anni Cinquanta</strong> del Novecento. Due scuole, separate dalla rivoluzione bolscevica.",
    figli:[
    { t:"La scuola riflessologica",
      d:"I processi psichici sono riconducibili a <strong>riflessi</strong>.",
      figli:[
      { t:"I riflessi e l'automaticità",
        d:"Processi fisiologici semplici caratterizzati da <strong>automaticità</strong>: avvengono e basta, non si controllano. Sono connessioni fra neuroni, uno in <strong>input</strong> e uno in <strong>output</strong>." },
      { t:"Il riflesso patellare", es:1,
        d:"Il colpetto del martelletto sotto la rotula fa alzare la gamba: non si può controllare." },
      { t:"Riflessi spinali",
        d:"Hanno sede nel <strong>midollo spinale</strong> e non prevedono consapevolezza." },
      { t:"Riflessi cerebrali",
        d:"Hanno stazioni nel <strong>cervello</strong> e mediano comportamenti un po' più complessi, ma pur sempre semplici." },
      { t:"Ivan Pavlov",
        d:"Fisiologo, uno dei più grandi precursori del comportamentismo; un'acquisizione ancora valida nello studio dell'apprendimento.",
        figli:[
        { t:"Gli studi sulla digestione", es:1,
          d:"Studia le secrezioni salivari e gastriche dei cani, deprivati di cibo e quindi affamati: l'«acquolina in bocca» davanti al cibo." },
        { t:"La scoperta",
          d:"I cani salivavano anche vedendo l'<strong>inserviente senza cibo</strong>: il riflesso compariva davanti a uno stimolo che in natura non lo provoca." },
        { t:"La teoria dei riflessi condizionati",
          d:"Inizio Novecento. I <strong>riflessi condizionati</strong>, che avvengono anche davanti a stimoli non naturali, sono una <strong>forma elementare di apprendimento</strong>." },
        { t:"L'associazione fra due stimoli",
          d:"Con l'esposizione <strong>ripetuta</strong> all'associazione cibo-inserviente, il soggetto la memorizza e risponde al solo stimolo non naturale." }
      ]}
    ]},
    { t:"La rivoluzione bolscevica",
      d:"Fa crollare tutto ciò che c'era prima in Russia, anche sul piano culturale." },
    { t:"La scuola storico-culturale",
      d:"Adattare la psicologia ai principi della nuova società: <strong>marxismo</strong> e <strong>materialismo</strong>.",
      figli:[
      { t:"Lev Vygotskij",
        d:"Il maggiore esponente.",
        figli:[
        { t:"La dimensione sociale",
          d:"Sposta l'attenzione dai contenuti di coscienza e dalle associazioni semplici alla <strong>dimensione sociale</strong> dell'essere umano." },
        { t:"Le funzioni complesse",
          d:"Critica — un po' obbligato dal regime — lo studio dei comportamenti semplici come i riflessi condizionati: vanno studiate le <strong>funzioni complesse</strong>, che si sviluppano secondo la società." },
        { t:"Psiche e sviluppo socio-economico",
          d:"Lo sviluppo psichico è connesso agli <strong>stadi dello sviluppo socio-economico</strong>: più la società è ricca e stimolante, più si sviluppano funzioni complesse, che ne ricalcano l'<em>habitus</em>." },
        { t:"Il linguaggio",
          d:"L'<strong>espressione principale della vita psichica</strong> ed è alla base dei processi di coscienza." }
      ]},
      { t:"Perché ricordarla",
        d:"Mostra che il pensiero scientifico <strong>risente della società</strong> in cui nasce; e Vygotskij è un forte <strong>precursore del cognitivismo</strong>." }
    ]}
  ]},

  /* ---------------- PSICOLOGIA DINAMICA ---------------- */
  { t:"La psicologia dinamica",
    d:"La psicoanalisi di Freud. Fine Ottocento, inizio Novecento, in <strong>Austria</strong>. Da prendere con le pinze.",
    figli:[
    { t:"Non nasce in ambiente accademico",
      d:"Non all'università, non in laboratorio, senza metodologia sperimentale: la sua conoscenza deriva dalla <strong>pratica clinica</strong>, usa il metodo razionalista e non ha verifica empirica." },
    { t:"Perché la si studia",
      d:"Ha influenzato fortemente tutta la psicologia. Ha avuto <strong>risvolti applicativi</strong> importanti, ha parlato per la prima volta di <strong>disturbi psichici</strong>, e ne ha tratto una teoria della personalità anche fisiologica, non solo patologica." },
    { t:"I sintomi isterici",
      d:"Nasce dal trattamento dei sintomi isterici, <strong>fisici e psichici</strong>." },
    { t:"L'unità mente-corpo",
      d:"Per spiegare quei sintomi Freud postula un'<strong>unità di funzionamento mente-corpo</strong>." },
    { t:"I tre livelli",
      d:"Una <strong>pluralità di livelli di funzionamento mentale</strong>.",
      figli:[
      { t:"Inconscio", d:"Il livello <strong>inconsapevole</strong>: una grossa parte del funzionamento avviene sotto la soglia della consapevolezza." },
      { t:"Preconscio", d:"A metà fra inconscio e conscio." },
      { t:"Conscio", d:"Il livello <strong>consapevole</strong>." }
    ]},
    { t:"Il termine «dinamica»",
      d:"Indica una <strong>relazione mobile</strong> fra le parti della mente. Per questo psicoanalisi, psicologia dinamica e psicodinamica si usano come sinonimi." },
    { t:"Sigmund Freud",
      d:"Medico austriaco: caposcuola, fondatore e unico esponente.",
      figli:[
      { t:"Il viaggio a Parigi",
        d:"In Austria le persone con disturbi senza base organica erano lasciate a se stesse: Freud va a Parigi per lavorare con loro." },
      { t:"Charcot e l'ipnosi",
        d:"Charcot curava i disturbi a eziologia non organica con l'<strong>ipnosi</strong>: i contenuti inconsapevoli riemergono e il <strong>sintomo sparisce</strong>. Freud capisce che i sintomi possono dipendere da contenuti di cui il soggetto non è consapevole." },
      { t:"Breuer",
        d:"Tornato in Austria, Freud collabora con Breuer ed elabora la propria teoria." },
      { t:"Il metodo psicoanalitico",
        d:"Un metodo clinico che <strong>abbandona l'ipnosi</strong> per studiare l'inconscio.",
        figli:[
        { t:"Le libere associazioni",
          d:"Associazioni fra cose apparentemente illogiche, che rivelano i contenuti inconsci." },
        { t:"L'interpretazione dei sogni",
          d:"I sogni hanno un <strong>contenuto latente</strong> da rendere <strong>manifesto</strong>." },
        { t:"Atti mancati, lapsus, sintomi",
          d:"Anche questi dicono qualcosa sul funzionamento inconscio." }
      ]},
      { t:"Le pulsioni",
        d:"Nell'inconscio risiedono <strong>pulsioni</strong> inaccessibili alla coscienza perché <strong>inaccettabili</strong> per chi le prova." },
      { t:"Il conflitto",
        d:"Fra il contenuto che vuole emergere e ciò che lo reprime: fra <strong>principio di piacere</strong> e <strong>principio di realtà</strong>." },
      { t:"La terapia",
        d:"Risolvere il conflitto <strong>portando alla luce</strong> i contenuti inconsci." },
      { t:"I due assunti",
        d:"I due punti per cui la teoria viene ricordata.",
        figli:[
        { t:"Continuità normalità-patologia",
          d:"Lo stesso conflitto produce sintomi e fenomeni quotidiani come <strong>lapsus</strong> e <strong>atti mancati</strong>: fra normale e patologico c'è un <em>continuum</em>." },
        { t:"Il ruolo centrale dell'inconscio",
          d:"Il sintomo va indagato a livello inconscio." }
      ]},
      { t:"Il bilancio",
        d:"Fondazione epistemologica <strong>nulla o povera</strong>, nessun metodo scientifico, nessun controllo della conoscenza; ma grandissime <strong>acquisizioni cliniche</strong>." }
    ]}
  ]},

  /* ---------------- GESTALT ---------------- */
  { t:"La Gestalt", f:"L02",
    d:"Germania, in <strong>opposizione a Wundt</strong>. Motto: <strong>il tutto è più della somma delle parti</strong>.",
    figli:[
    { t:"Collocazione",
      d:"Nasce in Germania e ha una <strong>seconda fioritura negli Stati Uniti</strong>, dove molti ricercatori si spostano a causa del nazismo." },
    { t:"Le radici: la filosofia innatista",
      d:"Due precursori filosofici.",
      figli:[
      { t:"Immanuel Kant",
        d:"Filosofia critica, illuminismo tedesco.",
        figli:[
        { t:"La sintesi a priori",
          d:"L'atto della conoscenza è un'<strong>attività unitaria e unificante</strong>: la materia che arriva dai sensi è organizzata da <strong>forme proprie della mente</strong>." },
        { t:"Le idee a priori",
          d:"Quelle forme: schemi, <strong>regole innate</strong>, geneticamente predeterminate, che ogni individuo della specie possiede alla nascita." }
      ]},
      { t:"Franz Brentano",
        d:"Filosofo di derivazione kantiana, fonda una scuola a <strong>Graz</strong>, in Austria.",
        figli:[
        { t:"La psicologia dell'atto",
          d:"L'<strong>atto</strong>, un'azione che l'essere umano compie nell'ambiente, è il vero oggetto della psicologia." },
        { t:"L'atto si riferisce a un oggetto",
          d:"L'atto ha senso solo in funzione dell'oggetto a cui si riferisce." },
        { t:"Il pennarello", es:1,
          d:"Prendere un pennarello ha senso solo in funzione del pennarello: l'atto di prendere, in sé, non si considera." },
        { t:"L'intenzionalità",
          d:"L'aspetto specifico dei fenomeni psichici: il ruolo che il soggetto assume nel compiere un atto. Il dato sensoriale semplice conta solo in funzione dell'azione." },
        { t:"Fenomeno e oggetto fisico",
          d:"Se vedo qualcosa, il <strong>fenomeno</strong> è l'oggetto come lo percepisco, dentro il mio atto di vedere; l'<strong>oggetto fisico</strong> è quello della realtà." }
      ]}
    ]},
    { t:"Gli esponenti",
      d:"<strong>Max Wertheimer</strong>, il caposcuola, e i suoi allievi <strong>Köhler</strong> e <strong>Koffka</strong>." },
    { t:"L'oggetto",
      d:"L'<strong>atto unitario della percezione</strong> e lo studio delle <strong>regole responsabili</strong> di quest'atto conoscitivo." },
    { t:"Il metodo fenomenologico sperimentale",
      d:"Lo studio del <strong>fenomeno percepito</strong> dai soggetti al variare degli stimoli fisici del mondo esterno.",
      figli:[
      { t:"La critica all'introspezione",
        d:"L'atto conoscitivo <strong>unifica e sintetizza</strong>: non ha senso scomporlo negli elementi, come facevano Wundt e Titchener. Il fenomeno si studia così com'è." },
      { t:"Il rigoroso controllo",
        d:"Si chiedono resoconti ai soggetti, ma con un controllo rigoroso sia delle esperienze percettive, considerate unitarie, sia delle caratteristiche fisiche dell'oggetto." }
    ]},
    { t:"Le leggi innate",
      d:"L'<strong>organizzazione percettiva è regolata da leggi innate</strong>, come le idee a priori: indipendenti dall'esperienza, geneticamente determinate, <strong>specie-specifiche</strong>.",
      figli:[
      { t:"Italia e Amazzonia", es:1,
        d:"Le stesse regole valgono per chi vive in Italia e per chi vive nella foresta amazzonica." }
    ]},
    { t:"La qualità gestaltica",
      d:"La caratteristica della percezione che <strong>rimane invariata al variare degli elementi</strong> che la compongono: garantisce l'<strong>invarianza percettiva</strong>. Qui la registrazione ha una lacuna: il precursore citato era con ogni probabilità <strong>Christian von Ehrenfels</strong>." },
    { t:"Le Gestalten",
      d:"Totalità percettive organizzate <strong>dalle parti all'intero, e non viceversa</strong>.",
      figli:[
      { t:"La nuora e la suocera", es:1,
        d:"Un'immagine ambigua: si vede ora la giovane donna, ora l'anziana, mai insieme. Gli stessi segni assumono <strong>valenza diversa</strong> secondo il percetto sotto attenzione." },
      { t:"Il volto di natura morta", es:1,
        d:"Un'opera a Washington: un volto fatto di uva, rami e fiori. Ribaltata, il volto <strong>non si vede più</strong>." }
    ]},
    { t:"Wertheimer e le illusioni",
      d:"Boemo, lavora a <strong>Francoforte</strong>. Studia le illusioni.",
      figli:[
      { t:"Le illusioni",
        d:"<strong>Errori percettivi, di memoria o di giudizio</strong>, in cui l'esperienza soggettiva differisce dalla realtà oggettiva. Possono essere ottiche o di movimento." },
      { t:"Il fenomeno phi",
        d:"Con un intervallo <strong>molto breve</strong> fra due luci alternate si percepisce <strong>un unico stimolo luminoso in movimento</strong>; con un intervallo lungo, due luci. Un'illusione di movimento." },
      { t:"L'esperimento", es:1,
        d:"Camera oscurata, uno schermo con due fessure che si illuminano alternativamente; lo sperimentatore varia l'intervallo e il soggetto riferisce che cosa vede. È un esempio del metodo fenomenologico." },
      { t:"Il movimento stroboscopico",
        d:"Il nome dato poi al fenomeno phi." },
      { t:"I cartoni animati", es:1,
        d:"I vecchi cartoni animati erano immagini statiche proiettate molto velocemente: sfruttavano lo stesso errore percettivo." }
    ]},
    { t:"Köhler e l'insight",
      d:"<strong>Wolfgang Köhler</strong>, allievo di Wertheimer. La Gestalt esce dalla percezione ed entra nel <strong>pensiero e nella risoluzione dei problemi</strong>.",
      figli:[
      { t:"L'apprendimento per insight",
        d:"Non si procede per <strong>prove ed errori</strong>: un'<strong>improvvisa e unitaria illuminazione ristruttura gli elementi del campo fenomenico</strong> in una struttura globale nuova, che è la soluzione." },
      { t:"Contro l'associazione semplice",
        d:"Nel condizionamento di Pavlov si apprende un'associazione per esposizione ripetuta, senza ristrutturazione cognitiva. L'insight no." },
      { t:"Gli scimpanzé", es:1,
        d:"Primati in una stanza con banane appese al soffitto e casse, funi, bastoni. A un tratto usano gli oggetti con una <strong>funzione diversa</strong> da quella originaria: impilano le casse e ci salgono." }
    ]},
    { t:"Kurt Lewin",
      d:"Tedesco, emigrato negli Stati Uniti per il nazismo. Applica la Gestalt alla <strong>psicologia sociale</strong>: relazioni fra individui, conflitti.",
      figli:[
      { t:"La teoria di campo",
        d:"Con concetti presi dalla <strong>topologia</strong>, una branca della matematica: il comportamento si spiega in relazione alla situazione in cui avviene." },
      { t:"Il qui e ora",
        d:"I motivi del comportamento non vanno cercati nel <strong>passato</strong>, ma nel momento in cui si agisce, nelle interrelazioni fra persona e ambiente." },
      { t:"Il campo di forze",
        d:"Il <strong>campo di vita</strong> è un campo di forze, con vettori a valenza positiva e negativa: situazioni, oggetti, ambiente sociale. Se si crea uno <strong>squilibrio</strong>, la persona agisce per ripristinare l'<strong>equilibrio</strong>." },
      { t:"Il livello sociale",
        d:"Anche le <strong>interazioni fra individui</strong> sono un campo di forze." }
    ]}
  ]},

  /* ---------------- COMPORTAMENTISMO ---------------- */
  { t:"Il comportamentismo", f:"L02",
    d:"Stati Uniti, in <strong>opposizione a Wundt</strong>. Dura più a lungo della Gestalt, perché sfocia nel cognitivismo.",
    figli:[
    { t:"La nascita",
      d:"I contenuti interni su cui si concentrava lo strutturalismo sono <strong>impossibili da osservare direttamente</strong>, e quindi <strong>impossibili da misurare obiettivamente</strong>: tutti i tentativi scientifici precedenti erano nulli." },
    { t:"Una psicologia integralmente obiettiva",
      d:"Solo i <strong>comportamenti manifesti</strong>, semplificati in <strong>associazioni stimolo-risposta</strong>. Si misurano l'input e l'output, non ciò che sta in mezzo.",
      figli:[
      { t:"Stimolo", d:"Il mondo fisico esterno: tutto ciò che è input al comportamento." },
      { t:"Risposta", d:"Il comportamento vero e proprio, osservabile." }
    ]},
    { t:"Le radici: la filosofia empirista",
      d:"Opposta alla Gestalt, che è innatista.",
      figli:[
      { t:"John Locke",
        d:"Filosofo inglese. Alla nascita la mente è una <strong>tabula rasa</strong>, su cui l'esperienza scrive: <strong>non c'è niente di innato</strong>. Anche questo, un concetto speculativo." }
    ]},
    { t:"I precursori: Thorndike e Pavlov",
      d:"Due figure già incontrate.",
      figli:[
      { t:"Thorndike e la legge dell'effetto",
        d:"Più un comportamento produce un effetto positivo, più è probabile che si ripeta." },
      { t:"Pavlov e il condizionamento classico",
        d:"Associazioni fra stimoli condizionano riflessi che in natura sono automatici e inconsapevoli, come la salivazione." },
      { t:"Il minimo comune denominatore",
        d:"Entrambi studiano l'<strong>apprendimento</strong> e sperimentano in modo rigoroso <strong>sugli animali</strong>: la <strong>psicologia comparata</strong> diventa metodo elettivo." }
    ]},
    { t:"La black box",
      d:"L'organismo è una <strong>scatola nera</strong> in cui non si può entrare: i contenuti interni non si studiano oggettivamente.",
      figli:[
      { t:"La critica all'introspezione",
        d:"Non è scientifica perché <strong>l'osservatore coincide con l'osservato</strong>: entra la soggettività nel disegno sperimentale." },
      { t:"Input e output",
        d:"Si misura come variano i comportamenti al variare degli stimoli fisici." }
    ]},
    { t:"Le tre fasi",
      d:"Un'<strong>evoluzione interna</strong> in tre fasi consecutive — classico, neocomportamentismo, cenocomportamentismo — in cui riaffiora pian piano l'attenzione all'interno, fino al cognitivismo." },
    { t:"Fase 1 · Il comportamentismo classico",
      d:"<strong>John Watson</strong>, il caposcuola: l'oggetto non può essere psichico, deve essere <strong>osservabile</strong>. Una critica anche alla Gestalt.",
      figli:[
      { t:"Oggetto e metodo",
        d:"Il comportamento manifesto in termini S-R, con un <strong>metodo sperimentale rigoroso</strong>, solo in <strong>laboratorio</strong> e con gli <strong>animali</strong>, su cui si può manipolare tutto." },
      { t:"I tre argomenti",
        d:"L'<strong>apprendimento</strong>, argomento cardine; poi le <strong>emozioni</strong> e il <strong>pensiero</strong>." },
      { t:"Le tre posizioni epistemologiche",
        d:"Tre tratti caratteristici della psicologia di Watson.",
        figli:[
        { t:"Molecolarismo",
          d:"Come Wundt con gli atomi della mente, Watson scompone il comportamento in semplici associazioni S-R: una visione <strong>molecolare</strong>." },
        { t:"Perifericalismo",
          d:"Le cause del comportamento si cercano al massimo nei <strong>muscoli</strong> o nei <strong>nervi periferici</strong>, mai nel sistema nervoso centrale." },
        { t:"Ambientalismo",
          d:"L'<strong>ambiente</strong>, cioè l'input, ha la rilevanza maggiore nel produrre il comportamento." }
      ]},
      { t:"Il prodotto dell'apprendimento",
        d:"Gli esseri umani sono il <strong>prodotto delle loro esperienze di apprendimento</strong>: agendo sull'ambiente si plasma il comportamento, scavalcando talenti e inclinazioni." },
      { t:"La dozzina di bambini", es:1,
        d:"Il passo celebre: una dozzina di bambini sani e un ambiente organizzato a suo modo, e ne farebbe medico, artista, dirigente, mendicante o ladro, a prescindere da talenti e origini." },
      { t:"Il condizionamento della paura",
        d:"Watson dimostra sull'uomo ciò che aveva dimostrato sugli animali: la paura si può <strong>condizionare</strong>." },
      { t:"Il piccolo Albert", es:1,
        d:"Un rumore forte prodotto mentre il bambino giocava con dei topolini bianchi: per associazione, il bambino impara ad avere paura dell'animale. La lezione lo dice figlio di Watson: non lo era; l'esperimento è di Watson e Rosalie Rayner, 1920." }
    ]},
    { t:"Fase 2 · Il neocomportamentismo",
      d:"Si mette in discussione il divieto di occuparsi di ciò che sta <strong>in mezzo</strong> fra stimolo e risposta.",
      figli:[
      { t:"I processi interni",
        d:"Esistono <strong>processi interni all'organismo</strong>, non visibili nel comportamento manifesto ma necessari a spiegarlo." },
      { t:"La variabile interveniente",
        d:"Lo schema S-R diventa più elastico: fra i due c'è una <strong>variabile interveniente</strong>, l'organismo." },
      { t:"Clark Hull",
        d:"Americano, caposcuola della fase: vanno postulate variabili fra S e R, riferite a processi interni.",
        figli:[
        { t:"Le pulsioni",
          d:"In una <strong>situazione di bisogno</strong> si genera una <strong>tensione</strong> che spinge a ripristinare l'<strong>equilibrio</strong>: la pulsione spiega la risposta." },
        { t:"La fame e il glucosio", es:1,
          d:"Affamati, l'organismo chiede più glucosio: la tensione spinge a mangiare. Il comportamentista classico vedrebbe solo il cibo e l'atto di mangiare; Hull vede la pulsione in mezzo." }
      ]},
      { t:"Edward Tolman",
        d:"Americano, molto utile al successivo cognitivismo.",
        figli:[
        { t:"Le rappresentazioni mentali interne",
          d:"Fra stimolo e risposta ci sono <strong>rappresentazioni mentali interne</strong>: un'altra variabile interveniente." },
        { t:"L'apprendimento latente",
          d:"Responsabile della messa in atto dei comportamenti; un <strong>apprendimento cognitivo</strong>, non più semplice." },
        { t:"Le mappe cognitive",
          d:"Memorie organizzate in base alle <strong>relazioni spaziali</strong> dell'ambiente, su cui si basa l'apprendimento latente. Studiate sugli animali." }
      ]},
      { t:"Burrhus Skinner",
        d:"Harvard. La voce fuori dal coro: <strong>ritorna all'ortodossia watsoniana</strong> e la estremizza, un passo indietro rispetto all'evoluzione della corrente.",
        figli:[
        { t:"Nessun resoconto interno spiega il comportamento",
          d:"Non nega pensieri e sentimenti, ma nessun resoconto dell'interno, per quanto esauriente, spiegherà il comportamento. Conta <strong>come il comportamento è forgiato dalle sue conseguenze</strong> sull'ambiente." },
        { t:"Il condizionamento operante",
          d:"Pavlov studiava il condizionamento di <strong>comportamenti passivi</strong>, riflessi; il soggetto invece <strong>opera attivamente</strong> nell'ambiente, e lì va studiato l'apprendimento." },
        { t:"Il rinforzo",
          d:"La <strong>conseguenza del comportamento sull'ambiente</strong>: il comportamento è modellato da continui rinforzi ambientali, che ne cambiano la probabilità.",
          figli:[
          { t:"Rinforzo positivo",
            d:"Aumenta la probabilità che il comportamento venga messo in atto." },
          { t:"Rinforzo negativo e punizione",
            d:"La lezione usa «rinforzo negativo» per una conseguenza spiacevole, che fa imparare a non ripetere. Nel sistema tecnico di Skinner il rinforzo, positivo o negativo, <strong>aumenta</strong> sempre la probabilità; a ridurla è la <strong>punizione</strong>." }
        ]},
        { t:"La Skinner box", es:1,
          d:"Una gabbia con un animale affamato e più leve, una sola collegata a un dispenser di cibo. Preme a caso, trova quella giusta, e col tempo la preme sempre più direttamente." },
        { t:"Le applicazioni",
          d:"Gran parte della carriera la dedica ad applicare il rinforzo alla vita quotidiana.",
          figli:[
          { t:"Il condizionamento degli animali",
            d:"I programmi di addestramento, per esempio dei cani, si basano sul condizionamento operante." },
          { t:"Le macchine per l'apprendimento",
            d:"<strong>Scomporre il problema complesso in tanti problemi più semplici</strong>, di difficoltà crescente: ogni soluzione è un rinforzo." },
          { t:"La figlia di Skinner", es:1,
            d:"L'idea nasce nella classe elementare della figlia, demotivata davanti a un problema di matematica troppo complesso." },
          { t:"La terapia comportamentale",
            d:"Le <strong>fobie</strong> sono condizionamenti alla paura: come si condiziona, si <strong>decondiziona</strong>. Terapie di <strong>decondizionamento</strong> puramente comportamentali." }
        ]},
        { t:"Le derive",
          d:"Il <strong>libero arbitrio</strong> sarebbe un'<strong>illusione</strong>, perché ogni scelta è frutto di condizionamenti; arriva a ideare una <strong>società utopistica</strong> controllata da programmi di rinforzo. Nessuno lo segue, e piovono critiche." }
      ]}
    ]},
    { t:"Fase 3 · Il cenocomportamentismo",
      d:"Dagli <strong>anni Cinquanta</strong> alla nascita del cognitivismo. Detto anche <strong>comportamentismo cognitivista</strong>: l'attenzione va alle variabili interne, cognitive.",
      figli:[
      { t:"Donald Hebb",
        d:"Psicologo canadese, il maggiore rappresentante.",
        figli:[
        { t:"Il primo modello psicofisiologico",
          d:"Per la prima volta le variabili interne sono identificate come <strong>attività del sistema nervoso centrale</strong>." },
        { t:"L'unità mente-cervello",
          d:"Per la prima volta se ne parla: nella psicologia contemporanea sarà il <strong>principale oggetto di studio</strong>." },
        { t:"La legge di Hebb",
          d:"<strong>Due neuroni che scaricano insieme si potenziano reciprocamente</strong>, e tenderanno ad attivarsi insieme anche in seguito." },
        { t:"La teoria delle assemblee cellulari",
          d:"Un ampliamento della legge: circuiti diffusi di neuroni formano <strong>configurazioni globali di attivazione</strong> che si rafforzano. Sono <strong>alla base dell'apprendimento</strong>." }
      ]},
      { t:"Verso il cognitivismo",
        d:"Da qui la strada al cognitivismo è aperta." }
    ]}
  ]}
]}});

/* =========================================================
   3 — LA PSICOLOGIA CONTEMPORANEA                     (L03)
   ========================================================= */
PGE.mappe.macro.push({
id:"pres", titolo:"La psicologia contemporanea", occhiello:"Lezione 3",
radice:{ t:"La psicologia contemporanea", f:"L03",
  d:"Dal cognitivismo, l'ultima scuola, alla psicologia di oggi: la mente <strong>embodied</strong>, l'approccio <strong>biopsicosociale</strong>, le <strong>neuroscienze</strong> e le discipline che le affiancano.",
  figli:[

  /* ---------------- COGNITIVISMO ---------------- */
  { t:"Il cognitivismo",
    d:"L'ultima grande scuola di pensiero: una psicologia <strong>totalmente mentalistica</strong>.",
    figli:[
    { t:"Da dove veniamo",
      d:"Nelle tre fasi del comportamentismo la rigidità iniziale si è ammorbidita fino a dare attenzione a ciò che è interno alla mente e media il comportamento." },
    { t:"Una filiazione, non una reazione",
      d:"È la <strong>filiazione del cenocomportamentismo</strong> e <strong>non nasce come reazione</strong>: il comportamentismo reagiva a Wundt, il funzionalismo allo strutturalismo; qui c'è un'<strong>evoluzione naturale</strong>." },
    { t:"I contributi",
      d:"Studiosi e discipline diversi che attirano l'interesse della comunità scientifica.",
      figli:[
      { t:"Jean Piaget",
        d:"Psicologo svizzero, <strong>psicologia evolutiva</strong>.",
        figli:[
        { t:"Gli errori dei bambini",
          d:"Un filone di studi sugli <strong>errori percettivi e cognitivi nei bambini piccoli</strong>: mostrano come i processi mentali si sviluppano con l'età." },
        { t:"La costanza della quantità",
          d:"Un'abilità percettiva che si acquisisce <strong>più tardi</strong>; e come lei molte altre. Studiata negli esperimenti sulla <strong>costanza percettiva</strong>." },
        { t:"La creta", es:1,
          d:"Due mucchietti di creta resi uguali da un bambino di tre anni; uno viene diviso in tante palline, e il bambino dice che è maggiore quello con più palline." }
      ]},
      { t:"La psicolinguistica",
        d:"Il dibattito sull'acquisizione del linguaggio.",
        figli:[
        { t:"Skinner e il linguaggio",
          d:"Il linguaggio sarebbe frutto del <strong>condizionamento ambientale</strong>: l'esposizione ai suoni della lingua madre." },
        { t:"Noam Chomsky",
          d:"Psicolinguista americano, contro Skinner: una <strong>predisposizione innata</strong>, siamo <strong>biologicamente preprogrammati per apprendere il linguaggio</strong>." },
        { t:"Le regole mentali",
          d:"Bambini e adulti possiedono <strong>regole mentali</strong> che permettono di comprendere e produrre il linguaggio." },
        { t:"La prova",
          d:"Appena cominciano a parlare, i bambini producono <strong>frasi e parole mai udite</strong>." }
      ]},
      { t:"Informatica, cibernetica, intelligenza artificiale",
        d:"La psicologia riceve apporti da altre discipline.",
        figli:[
        { t:"Il computer",
          d:"Per la prima volta una macchina che <strong>elabora le informazioni</strong>, come la mente. L'informatica dà alla psicologia nuovi concetti e una terminologia tecnica." },
        { t:"Frederic Bartlett",
          d:"La <strong>memoria autobiografica</strong>: possediamo <strong>schemi cognitivi</strong> in cui i nuovi elementi si incastrano con quelli già acquisiti. La memoria è <strong>costruttiva</strong>, non passiva come per i comportamentisti." },
        { t:"Donald Broadbent",
          d:"L'<strong>attenzione</strong>: la <strong>teoria del filtro attentivo</strong>, un collo di bottiglia che seleziona rigidamente l'informazione in entrata, e ne lascia elaborare solo una piccola parte." },
        { t:"La metafora mente-computer",
          d:"Si comincia ad <strong>assimilare la mente al computer</strong>: un elaboratore di informazioni." }
      ]}
    ]},
    { t:"I due avvenimenti della nascita",
      d:"Oltre ai contributi sparsi, due eventi segnano la nascita.",
      figli:[
      { t:"Il simposio sulla teoria dell'informazione",
        d:"Matematici, fisici e psicologi. Tre interventi restano nella storia.",
        figli:[
        { t:"Miller e lo span",
          d:"Nella <strong>memoria a breve termine</strong>, il magazzino dove si manipola l'informazione in modo consapevole, lo <strong>span</strong> è il numero di elementi contenuti in uno stesso momento: pochi." },
        { t:"Newell e Simon",
          d:"Per la prima volta il <strong>problem solving</strong>: uno <strong>spazio problematico</strong> con elementi da usare per arrivare a soluzioni, modificabili come in un computer." },
        { t:"Chomsky",
          d:"Una relazione sulla sua teoria del linguaggio." }
      ]},
      { t:"L'unità TOTE",
        d:"<strong>Miller, Galanter e Pribram</strong>: una nuova <strong>unità di analisi cognitiva</strong> del piano del comportamento. L'azione diventa visibile dopo un'<strong>elaborazione cognitiva</strong> simile a quella di un computer.",
        figli:[
        { t:"Test", d:"Il comportamento pianificato viene <strong>testato</strong>: funziona per lo scopo?" },
        { t:"Operate", d:"Si apportano le <strong>modifiche</strong> necessarie." },
        { t:"Test", d:"Si <strong>ritesta</strong>: se non va, si ricomincia." },
        { t:"Exit", d:"Se il risultato soddisfa, il comportamento viene messo in atto." },
        { t:"Il feedback retroattivo",
          d:"Uno schema a <strong>feedback retroattivo</strong>, come i sistemi informatici." }
      ]}
    ]},
    { t:"Il manifesto: Neisser, 1967",
      d:"<strong>Ulric Neisser</strong> sintetizza le scoperte in <em>Cognitive Psychology</em>, considerato ufficialmente il <strong>manifesto della psicologia cognitivista</strong>. In realtà un <strong>collage</strong> di cose già in essere." },
    { t:"Lo Human Information Processing",
      d:"La prima fase, fondata sull'<strong>analogia mente-computer</strong>. Oggetto: i processi cognitivi interni che portano al comportamento.",
      figli:[
      { t:"Il diagramma di flusso",
        d:"Processamento sensoriale, percezione, attenzione, memoria a breve e lungo termine, selezione della risposta: disposti come l'elaborazione di un computer, con un hardware e dei software." },
      { t:"Il metodo simulativo",
        d:"Come si validano le ipotesi.",
        figli:[
        { t:"L'ipotesi di funzionamento",
          d:"Il ricercatore ipotizza come funziona un processo — per esempio come l'attenzione si lega a percezione e memoria." },
        { t:"Il modello nel computer",
          d:"Si costruisce un <strong>modello di funzionamento</strong> e lo si <strong>implementa nel computer</strong>." },
        { t:"La validazione",
          d:"Se il modello dà i risultati attesi, l'ipotesi è validata: la <strong>validazione empirica</strong> passa per il computer." }
      ]},
      { t:"Il pregio",
        d:"Metodologicamente <strong>ineccepibile</strong>: <strong>controllo assoluto di tutte le variabili</strong>, affidato a una macchina." }
    ]},
    { t:"La critica ecologica",
      d:"È <strong>lo stesso Neisser</strong> a criticare lo Human Information Processing.",
      figli:[
      { t:"Lontano dalla realtà",
        d:"La ricerca <strong>si è allontanata dalla realtà</strong>: studia i processi cognitivi solo nell'ambiente artificiale del laboratorio, non nella vita quotidiana." },
      { t:"L'approccio ecologico",
        d:"Introduce la <strong>funzione adattativa</strong> dei processi psichici e la loro <strong>modificazione grazie all'interazione con l'ambiente</strong>." }
    ]},
    { t:"La scienza cognitiva",
      d:"Nasce una rivista, <em>Cognitive Science</em>, e la nuova scienza viene esaminata sul piano epistemologico.",
      figli:[
      { t:"Lo scopo",
        d:"<strong>Stabilire come le conoscenze sono codificate dalla mente</strong>." },
      { t:"L'architettura funzionale",
        d:"La <strong>struttura astratta</strong> che realizza le funzioni intellettive, <strong>prescindendo dalla sua base materiale</strong>: il processo senza il cervello." },
      { t:"Il modularismo",
        d:"<strong>Jerry Fodor</strong>: l'attività della mente è l'<strong>elaborazione di rappresentazioni interne</strong> dell'ambiente.",
        figli:[
        { t:"I trasduttori",
          d:"Convertono gli stimoli — visivi, tattili, chimici — in rappresentazioni interne." },
        { t:"I moduli",
          d:"Le rappresentazioni sono <strong>sistemi di input</strong>: piccole <strong>capsule</strong> che lavorano in modo <strong>automatico e parallelo</strong>." },
        { t:"I sistemi centrali",
          d:"Ricevono gli output dei moduli e li <strong>integrano</strong>." },
        { t:"Verificare l'astratto",
          d:"Il computer permette per la prima volta di <strong>verificare empiricamente qualcosa di astratto</strong>, che i comportamentisti rifiutavano di studiare." }
      ]},
      { t:"Il connessionismo",
        d:"Il primo tentativo di considerare la <strong>base materiale</strong>: modelli di <strong>architettura mentale</strong> che fanno riferimento alla struttura e al funzionamento del cervello.",
        figli:[
        { t:"I sistemi dinamici complessi",
          d:"Prende strumenti dalla <strong>teoria fisico-matematica dei sistemi dinamici complessi</strong>: il cervello è uno di questi." },
        { t:"Le unità di elaborazione",
          d:"Una <strong>rete di unità di elaborazione omogenee</strong> che ricalcano i neuroni, in reti simili alle reti neurali." },
        { t:"Divergente e convergente",
          d:"Come i neuroni: un'unità propaga a molte altre (<strong>divergente</strong>) e raccoglie da molte altre (<strong>convergente</strong>)." },
        { t:"Input, nascoste, output",
          d:"<strong>Unità di input</strong> che ricevono, <strong>unità di output</strong> che emettono il comportamento, e fra le due <strong>unità nascoste</strong> che mediano il flusso." },
        { t:"Non è quello di Thorndike",
          d:"Da non confondere con il connessionismo di Thorndike, che riguardava connessioni situazione-risposta." }
      ]}
    ]}
  ]},

  /* ---------------- EMBODIED ---------------- */
  { t:"La mente embodied",
    d:"Il cognitivismo è <strong>tuttora in essere</strong>, solo allargato. <em>Embodied</em>: incarnata. I processi cognitivi si svolgono in un cervello, che è un <strong>organo</strong> di un <strong>corpo</strong>.",
    figli:[
    { t:"1 · La mente ha un corpo",
      d:"È integrata, <strong>incarnata in una struttura cerebrale</strong>." },
    { t:"2 · In azione e in interazione",
      d:"Le competenze cognitive <strong>non possono essere studiate in modo isolato</strong>: si descrivono solo <strong>in azione</strong> e <strong>in interazione</strong> con l'ambiente fisico o sociale." },
    { t:"3 · La mente relazionale",
      d:"Non una macchina di pensiero: una mente in relazione con <strong>corpo, ambiente fisico, ambiente sociale</strong>." },
    { t:"L'IA da sola non basta",
      d:"Lo studio dell'intelligenza artificiale, <strong>da solo</strong>, non spiega più i processi cognitivi: viene integrato." }
  ]},

  /* ---------------- BIOPSICOSOCIALE ---------------- */
  { t:"L'approccio biopsicosociale",
    d:"I tre corollari nascono, già dagli anni Sessanta, dal bisogno di uno <strong>studio più integrato della complessità mente-cervello</strong>: componente <strong>fisica</strong>, componente <strong>mentale</strong> e <strong>interazione con l'ambiente</strong>.",
    figli:[
    { t:"La prospettiva biologica",
      d:"Il substrato biologico della mente.",
      figli:[
      { t:"La selezione naturale di tratti adattivi",
        d:"La mente è frutto dell'adattamento: ha sviluppato competenze che rispondono alle richieste ambientali." },
      { t:"Le predisposizioni genetiche", d:"Di alcuni tratti cognitivi." },
      { t:"I meccanismi cerebrali", d:"Il substrato che media le funzioni." },
      { t:"Le influenze ormonali",
        d:"Il cervello è in un corpo: va studiato con tutto ciò che dal corpo lo influenza." }
    ]},
    { t:"La prospettiva psicologica",
      d:"<strong>Paure apprese</strong> e <strong>aspettative</strong>; il substrato <strong>emotivo</strong>; l'<strong>elaborazione cognitiva</strong> e l'interpretazione percettiva, cioè ciò che studiavano i cognitivisti." },
    { t:"Le influenze socioculturali",
      d:"La presenza degli altri e dei <strong>pari</strong>; le aspettative sociali, culturali, familiari; i <strong>gruppi</strong>; i <strong>modelli persuasivi</strong>." }
  ]},

  /* ---------------- NEUROSCIENZE ---------------- */
  { t:"Le neuroscienze comportamentali",
    d:"L'<strong>approccio neuroscientifico</strong>, oggi dominante. Dette anche <strong>psicologia fisiologica</strong> o <strong>psicofisiologia</strong>: i processi cerebrali e le altre <strong>funzioni fisiologiche all'origine del comportamento</strong>.",
    figli:[
    { t:"Tutti i comportamenti",
      d:"Dai più semplici — esperienze sensoriali, fame, sete, riproduzione — ai più complessi, mediati da intelligenza, ragionamento, linguaggio." },
    { t:"Il rapporto mente-cervello",
      d:"Analizzato <strong>direttamente</strong>, alla base del comportamento." },
    { t:"I precursori",
      d:"Il problema c'era dall'inizio, mancavano gli strumenti.",
      figli:[
      { t:"Karl Lashley",
        d:"Apprendimento nei ratti: li fa percorrere <strong>labirinti</strong> e poi ne <strong>asporta chirurgicamente</strong> zone del cervello.",
        figli:[
        { t:"Nessuna zona precisa",
          d:"<strong>Non riuscì a identificare una zona precisa</strong>: più l'asportazione era ampia, più la funzione era compromessa." },
        { t:"I limiti",
          d:"Molto <strong>invasivo</strong>, e <strong>non utilizzabile nell'uomo</strong>." }
      ]},
      { t:"Donald Hebb",
        d:"La connessione fra neuroni si rafforza <strong>in funzione dell'esperienza</strong>: i primi rudimenti di <strong>plasticità neuronale</strong>." }
    ]},
    { t:"La rivoluzione tecnologica",
      d:"Un progresso esponenziale.",
      figli:[
      { t:"La microscopia",
        d:"Tecniche avanzate che mostrano anche i <strong>processi molecolari</strong> dentro le <strong>sinapsi</strong>." },
      { t:"Mappe e onde cerebrali",
        d:"Tecniche per <strong>mappare il cervello</strong> e apparecchi che rispondono alle <strong>onde cerebrali</strong>: l'attività elettrica macro e micro." },
      { t:"L'uomo mentre esegue compiti",
        d:"Il rapporto mente-cervello si studia <strong>direttamente nell'uomo</strong>, mentre svolge compiti di attenzione, ragionamento, linguaggio." },
      { t:"La neuroimmagine strutturale",
        d:"La struttura del cervello <strong>in vivo</strong>, senza operare animali né reperti autoptici: <strong>TAC</strong>, <strong>risonanza magnetica</strong>." },
      { t:"La neuroimmagine funzionale",
        d:"La funzione, mentre il soggetto svolge un compito: <strong>PET</strong>, <strong>risonanza magnetica funzionale</strong>." },
      { t:"Più risposte, più domande",
        d:"Una scienza in fermento: ha dato molte risposte e posto tantissime altre domande." }
    ]},
    { t:"Le tre espansioni",
      d:"Le neuroscienze comportamentali sono un contenitore.",
      figli:[
      { t:"Neuroscienze cognitive", d:"Le <strong>funzioni superiori</strong>, proprie dell'uomo." },
      { t:"Neuroscienze affettive", d:"I processi cerebrali legati a ciò che è <strong>emotivo</strong>." },
      { t:"Neuroscienze relazionali", d:"I processi cerebrali legati alle <strong>relazioni con gli altri</strong>." }
    ]}
  ]},

  /* ---------------- COLLATERALI ---------------- */
  { t:"Le discipline collaterali",
    d:"Oggi la psicologia <strong>non è settoriale</strong>: usa molte discipline per rispondere ai propri quesiti.",
    figli:[
    { t:"La genetica del comportamento",
      d:"<strong>Come le tendenze comportamentali sono influenzate da fattori genetici</strong>: aggressività, timidezza, predisposizione ad alcune patologie mentali.",
      figli:[
      { t:"Lo studio sui gemelli",
        d:"Gli <strong>omozigoti</strong> mostrano somiglianze <strong>anche se allevati in ambienti diversi</strong>, e gli eterozigoti meno: se ne deduce una <strong>base biologica</strong>." },
      { t:"Natura e cultura",
        d:"Contribuisce al dibattito fra <strong>innatisti</strong> ed <strong>empiristi</strong>, già vivo quando la psicologia era filosofica." }
    ]},
    { t:"L'epigenetica",
      d:"I <strong>cambiamenti che intervengono nel genotipo</strong> in seguito all'<strong>interazione con l'ambiente</strong>. Dirime alcuni quesiti del dibattito natura/cultura." },
    { t:"La psicologia evoluzionistica",
      d:"Sulla selezione naturale: la <strong>mente umana è un insieme di moduli specializzati</strong> per risolvere i problemi che i nostri antenati hanno affrontato per milioni di anni.",
      figli:[
      { t:"Bravi in certe cose", es:1,
        d:"Specie meno evolute sono più brave di noi in alcune cose, perché a loro servono; le funzioni che non ci servivano le abbiamo perse." }
    ]},
    { t:"La psicologia umanistica",
      d:"Attribuisce importanza alle <strong>potenzialità positive della persona</strong>.",
      figli:[
      { t:"Maslow e Rogers",
        d:"I capofila: al centro le <strong>aspirazioni più elevate</strong> delle persone, che per funzionare al meglio vanno collocate in un <strong>ambiente stimolante</strong>." },
      { t:"Mira al positivo",
        d:"Non indaga solo la patologia, come la psicodinamica: è la base della <strong>psicologia della salute</strong>, la promozione del benessere." }
    ]},
    { t:"La psicologia socioculturale",
      d:"<strong>Come l'ambiente sociale e l'apprendimento culturale influenzano comportamento, cognizione ed emozioni</strong>.",
      figli:[
      { t:"La psicologia sociale",
        d:"L'uomo in interazione con i gruppi che costituiscono il suo ambiente sociale." },
      { t:"La psicologia culturale",
        d:"La <strong>cultura</strong>: <strong>valori, credenze, comportamenti e tradizioni</strong> durevoli, condivisi e trasmessi fra generazioni, <strong>senza base genetica</strong>." },
      { t:"La psicologia interculturale",
        d:"Come si trasmette la cultura; affinità e differenze fra persone di culture diverse." },
      { t:"L'esibizione delle emozioni", es:1,
        d:"Le emozioni di base sono <strong>biologicamente determinate</strong>, uguali per tutta la specie; alcune <strong>regole di esibizione</strong> sono <strong>cultura-specifiche</strong>." },
      { t:"Non è la storico-culturale",
        d:"Da non confondere con la scuola storico-culturale di Vygotskij." }
    ]}
  ]}
]}});

/* =========================================================
   4 — LA METODOLOGIA DELLA RICERCA               (L04–L07)
   ========================================================= */
PGE.mappe.macro.push({
id:"met", titolo:"La metodologia", occhiello:"Lezioni 4–7",
radice:{ t:"La metodologia della ricerca", f:"L04",
  d:"Un argomento <strong>trasversale</strong> a tutta la psicologia: il metodo scientifico e i suoi assunti, il processo di ricerca, l'etica, le variabili, i metodi dal descrittivo allo sperimentale, la pubblicazione.",
  figli:[

  /* ================= L04 ================= */
  { t:"Il metodo scientifico",
    d:"Lo <strong>spartiacque</strong> fra psicologia filosofica e scientifica: con Wundt, per la prima volta, un metodo paragonabile a quello delle <strong>scienze esatte</strong>, poi raffinato dalla tecnologia.",
    figli:[
    { t:"La psicologia ingenua",
      d:"La psicologia del <strong>senso comune</strong>, una <strong>forma imprescindibile di sapere</strong>: spieghiamo i comportamenti propri e altrui <strong>senza chiederci se la spiegazione sia esatta</strong>. Ha un grande <strong>valore pragmatico</strong>, ma sbaglia.",
      figli:[
      { t:"L'uomo altruista", es:1,
        d:"Un uomo aiuta qualcuno in difficoltà: «è altruista». Coerente, ma non sappiamo se fondato." },
      { t:"Le tre fonti di errore",
        d:"Mostrano che intuito e senso comune sono <strong>inaffidabili</strong> come metodi esplicativi.",
        figli:[
        { t:"Il giudizio retrospettivo",
          d:"Siamo bravi a spiegare ciò che è <strong>avvenuto in passato</strong>, molto meno a <strong>fare previsioni</strong>. Ma una spiegazione psicologica deve permettere di prevedere." },
        { t:"Il sonno e la vigilanza", es:1,
          d:"«Ho dormito di più e mi sento più vigile, quindi il sonno migliora l'attenzione»: forse giusto, ma è un giudizio retrospettivo." },
        { t:"L'eccessiva fiducia in noi stessi",
          d:"Ci crediamo molto più bravi di quanto siamo nel dare spiegazioni: <strong>sopravvalutiamo</strong> la nostra capacità di giudizio. Lo dimostra <strong>Goranson</strong>." },
        { t:"L'esperimento di Goranson", es:1,
          d:"Tre anagrammi con la soluzione accanto: «una decina di secondi». Un anagramma senza soluzione — <em>Jackie</em> — ne richiede circa tre minuti, lo stesso tempo che sarebbe servito per i primi tre." },
        { t:"La tendenza agli schemi ricorrenti",
          d:"Vediamo <strong>nessi causali</strong> anche in eventi che si verificano <strong>casualmente</strong>: il cervello attribuisce a una causa ciò che è dovuto al caso." }
      ]},
      { t:"Solo personale formato",
        d:"Il metodo scientifico salvaguarda da questi errori, ma lo usano solo ricercatori con le conoscenze tecniche." }
    ]},
    { t:"Guidato da principi oggettivi",
      d:"Ciò che distingue l'approccio scientifico da quello filosofico, fondato su una logica esplicativa." },
    { t:"Il caso difficile",
      d:"La mente <strong>non è direttamente né osservabile né quantificabile</strong>. La psicologia ha lo status di scienza, ma il suo campo è diverso da quello delle scienze esatte: da qui il <strong>ritardo</strong>, le <strong>riserve</strong> che ancora ci sono, e un elevato grado di <strong>soggettività e indeterminazione</strong>." },
    { t:"Il riavvicinamento",
      d:"Nell'ultimo secolo proprio dalle scienze naturali arriva una forte <strong>critica al concetto di oggettività</strong>.",
      figli:[
      { t:"Einstein",
        d:"Con la relatività, le osservazioni sono sempre <strong>relative al punto di vista di un osservatore</strong>." },
      { t:"Heisenberg",
        d:"La misura simultanea di due variabili coniugate comporta un'<strong>incertezza ineliminabile</strong>." },
      { t:"Atomi e buchi neri",
        d:"Molti fenomeni della fisica e dell'astronomia <strong>non sono osservabili</strong>, solo ipotizzabili dai loro effetti." },
      { t:"Gli stessi assunti",
        d:"Le discrepanze metodologiche si riducono: gli <strong>assunti scientifici della psicologia sono del tutto uguali</strong> a quelli delle altre scienze." }
    ]},
    { t:"I quattro assunti",
      d:"Le premesse epistemologiche del metodo scientifico.",
      figli:[
      { t:"Determinismo",
        d:"L'assunto di base: gli effetti <strong>non sono dovuti al caso</strong> ma a una <strong>causa</strong>, a una catena di rapporti causa-effetto. Da regole circoscritte si sale fino a <strong>leggi generali</strong>." },
      { t:"Empirismo",
        d:"Il fondamentale: non ci si basa su logica e coerenza di un modello, ma su una <strong>verifica empirica, concreta e materiale</strong>. Anche l'ipotesi non è precostituita: nasce da osservazioni o da teorie già dimostrate." },
      { t:"Invarianza",
        d:"<strong>A parità di condizioni</strong>, la combinazione degli stessi fattori dà <strong>sempre lo stesso evento</strong>. Permette <strong>induzioni prospettiche e previsioni</strong>." },
      { t:"Operazionalizzazione",
        d:"<strong>Il più importante per la psicologia</strong>: la definizione operativa dei concetti astratti, non osservabili, che le teorie contengono.",
        figli:[
        { t:"La definizione operativa",
          d:"Ogni concetto va tradotto in un <strong>formato replicabile e misurabile</strong>: una <strong>specificazione concreta</strong> del concetto, con gli step operativi per osservarlo o misurarlo." },
        { t:"Gli errori al test di memoria", es:1,
          d:"Per misurare la memoria a breve termine si contano gli errori a un test: una <strong>misura indiretta</strong>, cioè operativa." },
        { t:"Valida e univoca",
          d:"Deve riferirsi a <strong>processi unici e non plurimi</strong>, e misurare solo ciò che dice di misurare." },
        { t:"Gli occhi chiusi", es:1,
          d:"Misurare il pensiero riflessivo col tempo a occhi chiusi non è valido: il soggetto potrebbe dormire." },
        { t:"Un'approssimazione al vero",
          d:"Una definizione <strong>totalmente valida è virtualmente impossibile</strong>: ogni definizione operativa è un'approssimazione al vero, mai una verità assoluta." }
      ]}
    ]}
  ]},

  { t:"Il processo di ricerca", f:"L04",
    d:"Il metodo scientifico applicato: un percorso con regole precise.",
    figli:[
    { t:"Ricerca di base e applicata",
      d:"La <strong>ricerca di base</strong>, o pura, risolve problemi <strong>teorici</strong> e costruisce i fondamenti della disciplina. La <strong>ricerca applicata</strong> risolve problemi <strong>concreti</strong> che chiedono una soluzione pratica.",
      figli:[
      { t:"Il laboratorio e la clinica", es:1,
        d:"Studiare la neuroplasticità in laboratorio è ricerca di base; lo psicologo clinico che spiega una caratteristica di un paziente fa ricerca applicata." }
    ]},
    { t:"Un processo circolare",
      d:"In entrambi i casi il processo è <strong>identico</strong>, ed è <strong>circolare</strong>: finite le tappe si torna all'inizio, ma a un <strong>livello più profondo</strong>." },
    { t:"Le quattro fasi",
      d:"<strong>Identificazione</strong> del problema; <strong>spiegazione teorica</strong>; <strong>dimostrazione</strong> con una ricerca empirica; <strong>comunicazione</strong> dei risultati, che riporta all'inizio." },
    { t:"Fase 1 · Il problema",
      d:"Come diceva <strong>Karl Popper</strong>, tutti i processi di ricerca <strong>cominciano dai problemi</strong>.",
      figli:[
      { t:"Che cos'è un problema",
        d:"Una <strong>contraddizione fra affermazioni</strong> di una teoria o fra fatti. Genera nel ricercatore un'<strong>idea anticipatoria</strong> che la spieghi: il punto di partenza." },
      { t:"Rilevanti e non banali",
        d:"Bisogna scegliere problemi che portino davvero conoscenza e stimolino un filone di ricerca." },
      { t:"Le caratteristiche del ricercatore",
        d:"<strong>Curioso, creativo</strong> (collega fattori apparentemente sconnessi), <strong>intuitivo</strong>, con <strong>apertura mentale</strong>, <strong>scettico</strong>." },
      { t:"Le fonti dei problemi",
        d:"<strong>Interessi personali</strong>; <strong>fatti paradossali o fortuiti</strong>; <strong>tentativi di risolvere problemi pratici</strong>; e soprattutto <strong>teorie e risultati delle ricerche esistenti</strong>.",
        figli:[
        { t:"La modalità euristica",
          d:"Una teoria genera enorme interesse e attira molti studi." },
        { t:"L'asse intestino-cervello", es:1,
          d:"Un esempio attuale di filone euristico nelle neuroscienze." },
        { t:"La modalità sistematica",
          d:"Teorie o ricerche fanno <strong>affermazioni esplicite direttamente verificabili</strong>, già pronte per nuovi problemi." }
      ]}
    ]},
    { t:"Fase 2 · La spiegazione teorica",
      d:"Una teoria che spieghi il fenomeno, tradotta in ipotesi.",
      figli:[
      { t:"La teoria",
        d:"Un <strong>insieme organizzato di frasi</strong> che spiegano un fenomeno. Quasi sempre con un'<strong>ottica deterministica</strong>: gli eventi sono legati da nessi causa-effetto." },
      { t:"Teorie psicologiche e ingenue",
        d:"Le psicologiche sono <strong>più formali</strong>, <strong>più focalizzate</strong>, e fondate sull'<strong>attento studio della letteratura</strong>." },
      { t:"L'ipotesi",
        d:"Una <strong>predizione</strong> su un fenomeno, formulata in modo da <strong>poter essere testata</strong>.",
        figli:[
        { t:"La forma se-allora",
          d:"A partire da un <strong>antecedente</strong> si prevede un <strong>conseguente</strong>; la ricerca verifica il legame fra i due." }
      ]},
      { t:"Sonno e memoria", es:1,
        d:"Teoria: dormire molte ore migliora la memoria. Ipotesi: se il soggetto dorme le ore opportune, allora ha risultati migliori di memoria." },
      { t:"La falsificabilità",
        d:"Per essere verificata, un'ipotesi deve poter essere <strong>falsificata</strong>.",
        figli:[
        { t:"I cigni bianchi", es:1,
          d:"«Tutti i cigni sono bianchi»: nessun numero di cigni bianchi la rende vera in assoluto." },
        { t:"Vera finché non è falsa",
          d:"Un'affermazione può avere infinite conferme, ma è vera solo <strong>finché non si dimostra che è falsa</strong>." },
        { t:"Scientifica ogni teoria confutabile",
          d:"Per Popper è <strong>scientifica ogni teoria confutabile</strong>: solo lei permette previsioni precise smentibili dai dati. Teorie vaghe o astratte non si possono nemmeno falsificare." },
        { t:"Ipotesi alternativa e nulla",
          d:"Dal dover poter dire anche l'opposto nascono le due ipotesi proprie del metodo scientifico." },
        { t:"Il compito dello scienziato",
          d:"<strong>Falsificare le teorie esistenti</strong>: trovare l'errore avvicina alla verità, senza raggiungerla." },
        { t:"La critica alla psicoanalisi",
          d:"Logicamente perfetta, «non fa una piega», ma <strong>non ammette falsificazione</strong>: per Popper non è scientifica." }
      ]}
    ]},
    { t:"Fase 3 · La ricerca empirica",
      d:"Operazionalizzare, progettare, raccogliere, analizzare, interpretare.",
      figli:[
      { t:"Operazionalizzare l'ipotesi",
        d:"Le ipotesi concettuali diventano termini <strong>operativi, misurabili, osservabili</strong>: le ore di sonno in un numero, la memoria come prestazione a un test." },
      { t:"Definizione operativa e strumento",
        d:"La <strong>definizione operativa</strong> della proprietà, e uno <strong>strumento di misura</strong> — l'occhio umano, un computer, un test — che la rilevi." },
      { t:"Le variabili",
        d:"Le proprietà misurate: attributi che <strong>assumono valori che cambiano</strong>." },
      { t:"Validità, fidabilità, sensibilità",
        d:"Tre qualità della misura.",
        figli:[
        { t:"Validità",
          d:"Della <strong>definizione operativa</strong>: quanto un evento concreto definisce davvero quella proprietà." },
        { t:"Fidabilità",
          d:"Dello <strong>strumento</strong>: quanto dà lo stesso risultato ogni volta che misura la stessa cosa." },
        { t:"Sensibilità",
          d:"Dello <strong>strumento</strong>: quanto rileva anche piccolissime quantità della proprietà." }
      ]},
      { t:"La progettazione",
        d:"Scelte delicate che garantiscono la bontà della ricerca: l'<strong>oggetto</strong>, le <strong>condizioni</strong>, gli <strong>strumenti</strong>, i <strong>metodi</strong> di codifica e di analisi statistica, i <strong>soggetti</strong>, i <strong>problemi etici</strong>." },
      { t:"Perché è così sofisticata",
        d:"L'essere umano ha tre caratteristiche difficili da studiare.",
        figli:[
        { t:"Complessità", d:"Fenomeni <strong>multideterminati</strong>: molteplici spiegazioni per uno stesso fatto." },
        { t:"Variabilità", d:"<strong>Interindividuale</strong> e <strong>all'interno dello stesso individuo</strong>." },
        { t:"Reattività", d:"Il comportamento cambia quando si è studiati." }
      ]},
      { t:"La tassonomia",
        d:"Le strategie di ricerca si classificano su <strong>tre dimensioni</strong>.",
        figli:[
        { t:"Il metodo",
          d:"Secondo quanta scientificità garantisce: <strong>sperimentale</strong> (il metodo per eccellenza, controlla tutto), <strong>correlazionale</strong> (dice se due variabili variano insieme, non la causa), <strong>descrittivi</strong>." },
        { t:"La tecnica di raccolta",
          d:"<strong>Oggettiva</strong> — un test, l'output di un programma — o <strong>soggettiva</strong>, come i <em>self-report</em>." },
        { t:"L'ambiente",
          d:"<strong>Laboratorio</strong>, dove si controlla meglio, o <strong>campo</strong>, più naturalistico." }
      ]},
      { t:"L'analisi dei dati",
        d:"Serve l'<strong>analisi statistica</strong> per dire se le ipotesi sono vere o false.",
        figli:[
        { t:"Statistica descrittiva", d:"Descrive l'andamento delle variabili, <strong>senza inferenze</strong>." },
        { t:"Statistica inferenziale", d:"<strong>Generalizza</strong> da un campione ristretto alla popolazione." }
      ]},
      { t:"L'interpretazione",
        d:"I risultati rispondono alle ipotesi? Approfondiscono davvero il problema? Vanno inseriti in un <strong>contesto più ampio</strong>." }
    ]},
    { t:"Fase 4 · La comunicazione",
      d:"I risultati vanno messi a disposizione della <strong>comunità scientifica</strong>.",
      figli:[
      { t:"I convegni",
        d:"Nazionali e internazionali: presentazioni <strong>orali</strong> (interventi, simposi) o <strong>poster</strong>. Servono a discutere e a far nascere idee.",
        figli:[
        { t:"Neuroscience e FENS", es:1,
          d:"Per le neuroscienze, il congresso americano <em>Neuroscience</em> e l'europeo <em>FENS</em>." }
      ]},
      { t:"Gli articoli",
        d:"La modalità <strong>più ortodossa</strong>: riviste internazionali, disponibili a tutti i ricercatori, con garanzie di scientificità." },
      { t:"I libri", d:"Il terzo canale." },
      { t:"La replicabilità",
        d:"Il resoconto deve descrivere risultati e procedure in modo che la ricerca <strong>possa essere replicata</strong>: la replica è un <strong>metodo di controllo</strong>, per l'assunto dell'invarianza." },
      { t:"Regole condivise, dati pubblici",
        d:"Per pubblicare si seguono <strong>regole condivise</strong> e si mettono i dati <strong>a disposizione di tutti</strong>, perché altri possano controllare, criticare, replicare o confutare." },
      { t:"La peer review",
        d:"L'articolo inviato alla rivista è analizzato da <strong>colleghi</strong>: validità e affidabilità degli strumenti, correttezza del processo, impianto teorico. Solo se l'esito è positivo si pubblica." },
      { t:"Saper leggere un articolo",
        d:"L'articolo scientifico è l'<strong>unica fonte vera e ortodossa</strong> di conoscenza in psicologia: più dei libri, più di internet." }
    ]},
    { t:"La chiusura del cerchio",
      d:"Le <strong>questioni irrisolte</strong> di un lavoro pubblicato aprono nuovi problemi e nuovi cicli. Il rapporto fra teoria e ricerca è <strong>continuo, ricorsivo, circolare</strong>: una <strong>continua approssimazione al vero</strong>. Per Popper nessuna teoria, per quante conferme abbia, sarà mai certa." }
  ]},

  { t:"L'etica della ricerca", f:"L04",
    d:"La ricerca non è lasciata a se stessa: esistono standard che la tutelano, sull'uomo come sull'animale.",
    figli:[
    { t:"Gli standard etici",
      d:"Fissati a livello <strong>governativo</strong> e dalle <strong>associazioni</strong> nazionali e internazionali degli psicologi, condivisi in tutto il mondo." },
    { t:"I comitati etici",
      d:"Nelle istituzioni di ricerca esaminano i problemi etici delle proposte: uno studio <strong>eticamente discutibile</strong> va modificato e ripassato al vaglio.",
      figli:[
      { t:"Il comitato dell'Ateneo", es:1,
        d:"All'Unimarconi c'è un comitato etico di area psicologica." }
    ]},
    { t:"Il consenso informato",
      d:"Un'informativa consegnata <strong>prima</strong> che il soggetto accetti di partecipare.",
      figli:[
      { t:"Scopo e procedure", d:"Laddove si possano comunicare: non sempre è possibile." },
      { t:"Benefici potenziali", d:"Che cosa può guadagnare il soggetto." },
      { t:"Rischi potenziali", d:"A che cosa si espone." },
      { t:"Diritto di rifiuto o ritiro", d:"<strong>In qualsiasi momento</strong>." },
      { t:"Tutela dei dati sensibili", d:"Come vengono trattati i dati." }
    ]}
  ]},

  /* ================= L05 ================= */
  { t:"Le variabili", f:"L05",
    d:"I <strong>mattoncini</strong> dei disegni sperimentali. Operazionalizzare vuol dire rendere misurabile ciò che non lo è: il primo passo è la variabile.",
    figli:[
    { t:"Che cos'è una variabile",
      d:"I concetti astratti definiti come <strong>entità che variano</strong>: virtualmente tutto ciò che può variare, <strong>quantitativamente</strong> o anche solo come <strong>presente o assente</strong>.",
      figli:[
      { t:"Gli esempi", es:1,
        d:"Genere, età, altezza, istruzione, colore dei capelli, temperatura; ma anche attenzione, memoria, felicità, aggressività, empatia." }
    ]},
    { t:"Le quattro scale di misura",
      d:"La natura di una variabile si riconosce dalla scala, cioè dal <strong>rapporto fra i suoi livelli</strong>. Ogni scala più complessa contiene le informazioni delle più semplici.",
      figli:[
      { t:"Nominale o categoriale",
        d:"Livelli come <strong>categorie discrete</strong> che <strong>non si possono ordinare</strong>. Solo <strong>etichette, nomi, codici</strong>, mai valori numerici né ordinali: informa <strong>solo sulla diversità</strong>.",
        figli:[
        { t:"Esempi di scala nominale", es:1,
          d:"Il genere, il colore degli occhi, la squadra per cui si tifa, la religione." }
      ]},
      { t:"Ordinale",
        d:"Diversità più <strong>ordine</strong>: un livello viene prima dell'altro. <strong>Valori ordinali</strong> — primo, secondo — assimilabili a <strong>ranghi</strong>, mai numerici: non si sa nulla di intervalli o rapporti.",
        figli:[
        { t:"Esempi di scala ordinale", es:1,
          d:"La classe sociale, il titolo di studio (licenza media, diploma, laurea), i giorni della settimana." }
      ]},
      { t:"A intervalli equivalenti",
        d:"<strong>Numerica</strong>, quantitativa: i livelli possono essere <strong>numerati</strong>, e l'<strong>intervallo fra due livelli successivi è costante</strong>. Lo <strong>zero è arbitrario</strong>, non indica assenza di quantità.",
        figli:[
        { t:"Celsius e Fahrenheit", es:1,
          d:"Lo zero Celsius è il punto in cui l'acqua gela, non l'assenza di temperatura. Gli intervalli sono confrontabili dentro la stessa scala, ma <strong>le due scale non si comparano</strong>." },
        { t:"QI e atteggiamenti", es:1,
          d:"Le scale del quoziente intellettivo e degli atteggiamenti: intervalli equivalenti, nulla sui rapporti." }
      ]},
      { t:"A rapporti equivalenti",
        d:"La più informativa: in più i <strong>rapporti fra i livelli</strong>, perché lo <strong>zero è naturale</strong>, assoluto, indica <strong>assenza di quantità</strong>. Il rapporto fra due misure <strong>non dipende dall'unità di misura</strong>.",
        figli:[
        { t:"Esempi di scala a rapporti", es:1,
          d:"Le grandezze fisiche — peso, altezza — l'età, il numero di figli, il numero di errori a un test, il tempo di latenza, la temperatura Kelvin (zero = assenza di moto molecolare)." }
      ]}
    ]},
    { t:"Qualitative e quantitative",
      d:"Due famiglie, con analisi diverse.",
      figli:[
      { t:"Qualitative",
        d:"<strong>Nominali e ordinali</strong>: nulla sulla quantità. Permettono di classificare, codificare, e di ottenere <strong>frequenze</strong> — quanti eventi o individui per livello." },
      { t:"Quantitative o metriche",
        d:"<strong>A intervalli e a rapporti</strong>: producono un <strong>punteggio</strong> che informa sull'<strong>intensità</strong> del fenomeno." }
    ]},
    { t:"Perché la scala conta",
      d:"Dalla scala dipendono l'elaborazione e i <strong>test statistici</strong> utilizzabili: sbagliarla porta a test sbagliati e risultati <strong>non interpretabili</strong>." },
    { t:"Come riconoscerla",
      d:"I livelli sono ordinabili? No → <strong>nominale</strong>. Sì: gli intervalli sono equivalenti? No → <strong>ordinale</strong>. Sì: lo zero indica davvero assenza? No → <strong>intervalli</strong>; sì → <strong>rapporti</strong>." },
    { t:"Indipendente e dipendente",
      d:"Supporre una <strong>connessione fra variabili</strong> è spesso l'<strong>ipotesi sperimentale</strong> stessa.",
      figli:[
      { t:"Variabile indipendente",
        d:"Stimoli o eventi che si presuppone siano la <strong>causa</strong> di cambiamenti su altri eventi." },
      { t:"Variabile dipendente",
        d:"Gli eventi che risentono dell'indipendente: gli <strong>effetti</strong>." },
      { t:"Caffeina e battiti", es:1,
        d:"Livello di caffeina nel sangue (indipendente) e numero di battiti cardiaci (dipendente)." },
      { t:"Manipolabili e non manipolabili",
        d:"<strong>Manipolabili</strong>: se ne controllano i livelli — caffeina, farmaco, luce. <strong>Non manipolabili</strong>: esistono in natura — QI, religione, età, affiliazione politica. Il disegno dipende da questo." }
    ]}
  ]},

  { t:"Perché altri metodi", f:"L05",
    d:"L'obiettivo è stabilire <strong>nessi causali</strong>, e l'unico metodo che lo consente è lo sperimentale. Ma la scelta dipende dall'oggetto, dagli obiettivi, dall'ambiente, dall'etica.",
    figli:[
    { t:"I livelli di costrizione",
      d:"Da metodi a <strong>bassi livelli di costrizione</strong> — poco controllo — a metodi ad <strong>alti livelli</strong>. Il più alto in assoluto è lo sperimentale. Gli altri: i <strong>descrittivi</strong> e il <strong>correlazionale</strong>." }
  ]},

  { t:"La revisione della letteratura", f:"L05",
    d:"Quasi sempre <strong>propedeutica</strong> al metodo: lo <strong>strumento di elezione</strong> per studiare un argomento prima di formulare ipotesi. Oppure fine a sé stessa, per verificare un'ipotesi commentando lo <strong>stato dell'arte</strong>. Tre sistemi, a sistematicità crescente.",
    figli:[
    { t:"La revisione narrativa",
      d:"Una <strong>sintesi</strong> di articoli su un argomento: domande <strong>ampie e generiche</strong>, conoscenza <strong>basilare</strong>. Limite: la <strong>selezione soggettiva</strong> delle fonti, e una descrizione solo qualitativa.",
      figli:[
      { t:"I capitoli dei manuali", es:1,
        d:"I capitoli del manuale di psicologia generale sono revisioni narrative." }
    ]},
    { t:"La revisione sistematica",
      d:"Un <strong>vero progetto di ricerca</strong>: sintetizza e valuta criticamente <strong>tutti gli studi sperimentali</strong> su <strong>aspetti specifici</strong>, per <strong>pochi quesiti ben definiti</strong>.",
      figli:[
      { t:"Il protocollo",
        d:"Criteri <strong>rigorosi e stabiliti a priori</strong> in un protocollo: minimizzano le distorsioni e permettono ad altri di ottenere <strong>virtualmente gli stessi risultati</strong>." },
      { t:"Sintesi e discussione",
        d:"Una <strong>sintesi qualitativa</strong>, poi la discussione delle ragioni di <strong>concordanza o discordanza</strong> fra i risultati." }
    ]},
    { t:"La meta-analisi",
      d:"Una revisione sistematica con <strong>tecniche statistiche</strong> che combinano i dati di <strong>studi indipendenti</strong>: dà una <strong>stima numerica dell'effetto complessivo</strong>. Non si fa se i risultati sono troppo <strong>eterogenei</strong>." }
  ]},

  { t:"I metodi descrittivi", f:"L05",
    d:"La descrizione è il <strong>punto di partenza di qualsiasi scienza</strong>: prima di cercare le cause bisogna sapere com'è fatto un fenomeno, specie nel suo <strong>ambiente naturale</strong>. Mostra la diversità del comportamento, verifica ipotesi quando non c'è altro, suggerisce rapporti causali da testare.",
    figli:[
    { t:"Lo studio dei casi",
      d:"L'<strong>analisi approfondita</strong> di un individuo (<strong>caso singolo</strong>), di un gruppo o di un evento.",
      figli:[
      { t:"Non elettivo per la psicologia generale",
        d:"Che cerca <strong>leggi valide per tutti</strong>; ma un caso studiato nei minimi particolari può suggerire regole più ampie." },
      { t:"Le lesioni cerebrali",
        d:"Molta conoscenza neuropsicologica viene da casi singoli con lesioni." },
      { t:"Phineas Gage", es:1,
        d:"Una sbarra di ferro gli attraversa il cranio; i sintomi vengono ricondotti a posteriori alla lesione. La lezione parla di corpo calloso: in realtà la sbarra colpì il <strong>lobo frontale sinistro</strong>, e il caso è ricordato per il danno prefrontale." },
      { t:"La memoria prodigiosa", es:1,
        d:"Una persona con capacità mnestiche spiccate, studiata e caratterizzata da sola." },
      { t:"La raccolta dei dati",
        d:"<strong>Osservazione, interviste, test psicologici, rilevazioni fisiologiche, esecuzione di compiti</strong>." },
      { t:"I vantaggi",
        d:"Studiare da vicino <strong>fenomeni rari</strong>; <strong>mettere in discussione una teoria</strong> — se il caso la falsifica, altri dovranno verificarlo; essere <strong>fonte di nuove idee</strong>." },
      { t:"Gli svantaggi",
        d:"I risultati si possono <strong>solo descrivere</strong>, non generalizzare con la statistica; e un caso <strong>atipico</strong> può fuorviare." }
    ]},
    { t:"Il metodo osservativo",
      d:"<strong>Osservare, registrare, descrivere, trascrivere e codificare</strong> il comportamento e l'interazione sociale.",
      figli:[
      { t:"Controllata o naturalistica",
        d:"<strong>Controllata</strong>, in condizioni standardizzate come il laboratorio; <strong>naturalistica</strong>, in condizioni ecologiche." },
      { t:"I vantaggi",
        d:"I <strong>comportamenti spontanei</strong>; i soggetti <strong>che non sanno parlare</strong> o eseguire compiti — bambini piccoli, animali; l'<strong>evoluzione nel tempo</strong> di un processo." },
      { t:"Solo ipotesi causali",
        d:"<strong>Non identifica nessi causali</strong>, li fa solo ipotizzare: non si controllano tutti i fattori né si replica a richiesta un comportamento spontaneo." },
      { t:"Diretta o indiretta",
        d:"<strong>Diretta</strong>: sincrona, mentre il comportamento avviene. <strong>Indiretta</strong>: dopo, da audio e videoregistrazioni, che permettono di tornare indietro e non perdere pezzi." },
      { t:"L'interferenza dell'osservatore",
        d:"Il ricercatore è un elemento estraneo e può <strong>modificare il comportamento</strong>; anche una telecamera, se i soggetti la sanno presente." },
      { t:"La soggettività del ricercatore",
        d:"Criteri soggettivi intervengono sempre nell'<strong>interpretare</strong> ciò che si osserva." },
      { t:"Qualitativa o sistematica",
        d:"<strong>Qualitativa</strong>: il ricercatore descrive. <strong>Sistematica</strong>: schemi di <strong>categorie comportamentali prefissate</strong> e <strong>regole di corrispondenza</strong> in <strong>manuali di codifica</strong>; si assegnano codici, non ci si limita a descrivere." },
      { t:"L'esposizione preventiva allo sperimentatore",
        d:"Lo sperimentatore resta a lungo nel contesto naturale finché, per <strong>abituazione</strong>, viene considerato parte di esso: <strong>neutralizza l'effetto dell'osservatore</strong>." },
      { t:"Lo specchio unidirezionale", es:1,
        d:"Osservazione controllata e indiretta, in una stanza che riproduce una casa: bambini e diadi madre-bambino, osservati senza essere visti." },
      { t:"L'EAR", es:1,
        d:"<em>Electronically Activated Recorder</em>: registrazioni campionate nel tempo, usato prima sugli studenti universitari." },
      { t:"Jane Goodall", es:1,
        d:"Etologa, osservazioni dirette partecipanti: scoprì che gli scimpanzé costruiscono e usano <strong>strumenti</strong> per uno scopo, cosa ritenuta solo umana." },
      { t:"Dove si usa",
        d:"Soprattutto in <strong>psicologia evolutiva</strong> ed <strong>etologia</strong>." }
    ]},
    { t:"Il metodo dell'inchiesta",
      d:"L'inchiesta, sondaggio o <em>survey</em>: i soggetti <strong>riferiscono</strong> comportamenti, atteggiamenti, opinioni.",
      figli:[
      { t:"Interviste e questionari",
        d:"<strong>Interviste</strong>, anche con domande <strong>aperte</strong>; <strong>questionari</strong>, con domande <strong>chiuse</strong>." },
      { t:"Una necessità",
        d:"Fenomeni ampi o complessi, o eticamente difficili da portare in laboratorio: comportamento sessuale, uso di sostanze, frequenza delle emozioni." },
      { t:"Popolazione e campione",
        d:"<strong>Popolazione</strong>: tutti gli individui che interessano. <strong>Campione</strong>: un sottoinsieme estratto dalla popolazione." },
      { t:"Il campionamento",
        d:"Il problema principale: il campione deve essere <strong>rappresentativo</strong>, cioè riprodurre in piccolo la popolazione.",
        figli:[
        { t:"La vividezza", es:1,
          d:"Due studenti che raccontano con vividezza un'esperienza negativa con un docente pesano più di un sondaggio favorevole su molti." },
        { t:"Il campionamento casuale",
          d:"Ogni membro della popolazione ha <strong>le stesse probabilità</strong> di essere scelto." },
        { t:"Il campionamento stratificato",
          d:"Si divide la popolazione in <strong>sottogruppi</strong> — genere, etnia — e poi si campiona a caso." },
        { t:"Piccolo ma rappresentativo",
          d:"Meglio un campione piccolo e rappresentativo che grande e distorto: la <strong>rappresentatività conta più della numerosità</strong>." },
        { t:"I sondaggi politici", es:1,
          d:"Con un buon campionamento si prevede chi vincerà, o si capisce che il risultato è troppo in bilico per prevederlo." },
        { t:"Gli exit poll", es:1,
          d:"Sbagliano spesso: chi esce dal seggio in quel momento non è rappresentativo." }
      ]},
      { t:"La formulazione delle domande",
        d:"Sottili cambiamenti di parole producono effetti molto diversi.",
        figli:[
        { t:"Gettito fiscale e tasse", es:1,
          d:"Si approva di più l'«aumento del gettito fiscale» che l'«aumento delle tasse»." }
      ]},
      { t:"Riluttanza e desiderabilità sociale",
        d:"Si può essere <strong>riluttanti</strong> sulle domande personali, o dare risposte compiacenti per <strong>desiderabilità sociale</strong>." },
      { t:"Dove si usa",
        d:"Soprattutto in <strong>psicologia sociale</strong>: abitudini e opinioni di popolazioni molto ampie." },
      { t:"Verso il correlazionale",
        d:"Se i dati sono codificati su <strong>scale numeriche</strong>, a intervalli o a rapporti, si possono calcolare <strong>correlazioni</strong>." }
    ]}
  ]},

  /* ================= L06 ================= */
  { t:"Il metodo correlazionale", f:"L06",
    d:"<strong>Un passo in più</strong> rispetto ai descrittivi, ma non ancora conclusioni scientifiche.",
    figli:[
    { t:"Che cosa aggiunge",
      d:"I descrittivi fanno <strong>intravedere</strong> relazioni; il correlazionale le valuta: la <strong>misura quantitativa</strong> di variabili x e y su un campione, e calcoli statistici per stabilire il <strong>grado di relazione</strong>." },
    { t:"Nessun controllo",
      d:"Come i descrittivi, si limita a osservare: il ricercatore <strong>non modifica le variabili</strong> e <strong>non controlla la situazione</strong>. Per questo non è il metodo per eccellenza." },
    { t:"Le variabili indagabili",
      d:"Le più disparate, anche <strong>non manipolabili</strong> come età e scolarità, e anche <strong>qualitative</strong>: qualunque cosa si possa operazionalizzare." },
    { t:"Previsioni, non spiegazioni",
      d:"Spiegare vuol dire stabilire nessi causali, e qui non si può. Ma se due variabili sono strettamente associate, conoscendo l'una si <strong>prevede</strong> l'altra." },
    { t:"Perché non è causalità",
      d:"Per <strong>due ragioni</strong>.",
      figli:[
      { t:"La bidirezionalità",
        d:"Osservando le due cose insieme non si sa se x causa y o <strong>y causa x</strong>." },
      { t:"La TV aggressiva", es:1,
        d:"Guardare programmi aggressivi aumenta l'aggressività, o l'aggressività porta a sceglierli?" },
      { t:"La terza variabile",
        d:"Una <strong>terza variabile</strong>, non osservata, può spiegare <strong>entrambe</strong>." },
      { t:"Energia, aria aperta, benessere", es:1,
        d:"Un livello di energia insolitamente alto spiegherebbe sia l'aggressività sia la scelta dei programmi. Tempo all'aperto e benessere: forse li spiega un tratto di personalità." }
    ]},
    { t:"Il coefficiente di correlazione",
      d:"Indicato con <strong>r</strong>: quanto strettamente due cose <strong>variano insieme</strong>, cioè quanto l'una predice l'altra.",
      figli:[
      { t:"La direzione: il segno",
        d:"<strong>Positiva</strong> (segno più): i valori alti di una con i valori alti dell'altra, crescita <strong>direttamente proporzionale</strong>. <strong>Negativa</strong> (segno meno): alti con bassi, <strong>inversamente proporzionale</strong>." },
      { t:"Correlazioni positive", es:1,
        d:"Più contenuti sessuali visti in TV dagli adolescenti, più rapporti; più lungo l'allattamento al seno, più successi scolastici. Nessuna delle due prova una causa." },
      { t:"Correlazioni negative", es:1,
        d:"Più uso di dispositivi elettronici, meno soddisfazione per la propria vita; più reddito nelle famiglie povere, meno sintomi psichiatrici nei bambini." },
      { t:"La forza: il valore",
        d:"Da correlazioni <strong>perfette</strong>, massime, a via via più deboli, fino a <strong>prossime a zero</strong>." },
      { t:"I grafici di dispersione",
        d:"Rappresentano i singoli punteggi e mostrano <strong>direzione e forza</strong> dell'associazione." },
      { t:"Studio, mele, televisione", es:1,
        d:"Con il voto a un esame in ordinata: le ore di studio danno una correlazione positiva, le mele mangiate nessuna, le ore di TV una negativa." }
    ]},
    { t:"I vantaggi",
      d:"<strong>Generalizzazioni</strong> dal campione alla popolazione in ambiente <strong>naturale</strong>; <strong>generare idee</strong>; studiare <strong>molte variabili</strong>, anche quelle che per ragioni pratiche o etiche non si studierebbero altrimenti; <strong>predizioni</strong>." },
    { t:"Lo svantaggio",
      d:"<strong>Non fornisce alcuna relazione causale.</strong>" }
  ]},

  { t:"Il metodo sperimentale", f:"L06",
    d:"Il metodo cardine, che supera i limiti degli altri.",
    figli:[
    { t:"Il metodo per eccellenza",
      d:"<strong>L'unico</strong> che rispetta tutti gli assunti: <strong>determinismo</strong> (relazioni causali), <strong>empirismo</strong> (dimostrazione pratica), <strong>invarianza</strong>, <strong>operazionalizzazione</strong>." },
    { t:"Il metodo ipotetico-deduttivo",
      d:"<strong>Esperimenti</strong> per verificare ipotesi formulate <strong>a priori</strong>; ciò che si verifica sul campione si <strong>generalizza</strong> alla popolazione." },
    { t:"La manipolazione sperimentale",
      d:"Lo sperimentatore <strong>produce volontariamente un cambiamento</strong> nella variabile ritenuta causa: così elimina la <strong>bidirezionalità</strong>." },
    { t:"Il controllo",
      d:"E <strong>controlla tutte le altre variabili</strong> che potrebbero interferire: così elimina la <strong>terza variabile</strong>." },
    { t:"La terminologia conta",
      d:"L'uso di una <strong>terminologia appropriata</strong> sarà valutato all'esame." },
    { t:"Il disegno sperimentale",
      d:"Il progetto dell'esperimento, per verificare o falsificare le ipotesi formulate in termini di variabili." },
    { t:"Le variabili",
      d:"Tre ruoli.",
      figli:[
      { t:"Indipendente (x)",
        d:"<strong>Manipolata</strong>: è la <strong>causa</strong>. Ha dei <strong>livelli</strong>, che sono le <strong>condizioni</strong> dell'esperimento." },
      { t:"Dipendente (y)",
        d:"<strong>Misurata</strong>: è l'<strong>effetto</strong>, e deve essere <strong>quantitativa</strong>. A ogni variazione di x si attende un valore di y." },
      { t:"Di confusione (z)",
        d:"Tutto ciò che può influenzare il rapporto: vanno <strong>conosciute</strong> prima, studiando letteratura e situazione, e <strong>neutralizzate</strong>." },
      { t:"Il bilanciamento",
        d:"Se una variabile di confusione non si può tenere fissa, si <strong>bilanciano</strong> le condizioni rispetto a essa." },
      { t:"Computer e attenzione selettiva", es:1,
        d:"Ipotesi: più ore al computer, peggiore attenzione selettiva. VI: 0, 1, 3, 6 ore (quattro livelli). VD: errori a un test di attenzione." },
      { t:"Ora, rumore, farmaci", es:1,
        d:"Variabili di confusione: il momento della giornata (ritmo circadiano), il rumore di fondo, l'uso di farmaci come le benzodiazepine." }
    ]},
    { t:"I soggetti",
      d:"La scelta dei soggetti decide se l'esperimento è una verifica valida.",
      figli:[
      { t:"Il campione sperimentale",
        d:"Deve <strong>rappresentare la popolazione</strong> su cui si fanno le ipotesi, o la scelta stessa falsa il risultato." },
      { t:"La scelta casuale",
        d:"<strong>Ogni soggetto ha la stessa probabilità</strong> di essere scelto: una strategia ideale, che garantisce la rappresentatività." },
      { t:"Roma e Australia", es:1,
        d:"Facendo un esperimento a Roma, chi vive in Australia non ha davvero le stesse probabilità: conta il principio." },
      { t:"Non è la scelta a caso",
        d:"La scelta casuale <strong>non</strong> è prendere i primi che capitano: vuol dire mantenere le caratteristiche della popolazione, bilanciando per esempio maschi e femmine." },
      { t:"Gruppi sperimentali e di controllo",
        d:"I <strong>gruppi sperimentali</strong> ricevono la condizione manipolata; il <strong>gruppo di controllo</strong> no. Con una VI a quattro livelli: tre sperimentali e uno di controllo." },
      { t:"L'assegnazione randomizzata",
        d:"La procedura migliore per assegnare i soggetti ai gruppi: <strong>casuale e randomizzata</strong>." }
    ]},
    { t:"I due disegni",
      d:"Soggetti diversi per ogni condizione, o gli stessi in tutte.",
      figli:[
      { t:"Tra i soggetti",
        d:"A ogni condizione un gruppo diverso: <strong>soggetti diversi a una sola condizione</strong>. Più pulito sullo strumento di misura, perché ognuno fa il test una volta; ma serve un <strong>campione ampio</strong>. Esempio: il <strong>disegno trasversale</strong>." },
      { t:"Entro i soggetti",
        d:"<strong>Un unico gruppo sottoposto a tutte le condizioni</strong>: più misurazioni con meno soggetti, ma <strong>sensibilizzazione</strong> e <strong>abituazione</strong> agli strumenti. Esempio: il <strong>disegno longitudinale</strong>." },
      { t:"La scelta del disegno",
        d:"Dipende dalle ipotesi e da fattori pratici: entrambi hanno vantaggi e svantaggi da valutare prima." }
    ]},
    { t:"Il laboratorio",
      d:"Un ambiente <strong>dedicato, controllato e quindi artificiale</strong>.",
      figli:[
      { t:"La validità interna",
        d:"Massimizzata: più è alta, più si è sicuri che la relazione causale indagata <strong>sia davvero quella</strong>." },
      { t:"La validità ecologica",
        d:"<strong>Bassa</strong>: i fenomeni riprodotti in laboratorio non sono mai uguali a quelli naturali. È il <strong>vero limite</strong> del metodo." },
      { t:"Il quasi esperimento",
        d:"Quando la VI <strong>non si può manipolare</strong> non c'è controllo assoluto: i gruppi, come maschi e femmine per le differenze di genere, sono già fatti a priori." }
    ]},
    { t:"La verifica delle ipotesi",
      d:"Si formulano <strong>due ipotesi</strong> distinte.",
      figli:[
      { t:"Ipotesi alternativa",
        d:"La vera ipotesi sperimentale: x e y hanno un <strong>nesso causale</strong>." },
      { t:"Ipotesi nulla",
        d:"Complementare: x e y <strong>non</strong> hanno un nesso causale. Va verificato che le variazioni di y siano dovute a x e <strong>non al caso</strong>." },
      { t:"La statistica inferenziale",
        d:"Stabilisce <strong>quanto è vera un'inferenza</strong> e generalizza alla popolazione; una delle tecniche più usate è l'<strong>analisi della varianza</strong>." },
      { t:"Significative o no",
        d:"Le differenze fra i gruppi sono <strong>significative</strong> — generalizzabili — o <strong>non significative</strong>, dovute al caso." },
      { t:"Un'inferenza probabilistica",
        d:"La generalizzazione non è mai certa: per questo si fissa <strong>a priori una probabilità di errore</strong>." },
      { t:"Errore di I tipo (α)",
        d:"Dichiarare <strong>falsa l'ipotesi nulla quando è vera</strong>: dire che non è il caso, quando lo è." },
      { t:"Errore di II tipo (β)",
        d:"Dichiarare <strong>vera l'ipotesi nulla quando è falsa</strong>. β <strong>diminuisce se α aumenta</strong>, e viceversa." }
    ]},
    { t:"La logica, per leggere",
      d:"Conta che passi la <strong>logica</strong>: serve non solo a progettare, ma a <strong>capire ciò che si legge</strong> in letteratura." },
    { t:"I tre esempi", es:1,
      d:"Tre esperimenti per mostrare le variabili all'opera.",
      figli:[
      { t:"Rumore e apprendimento",
        d:"Studenti in una stanza senza rumore e una con rumore (VI, da operazionalizzare perché sia replicabile); VD: errori a un test a risposta multipla; confusione: temperatura, illuminazione, modo di fare del ricercatore." },
      { t:"Propranololo e stress",
        d:"Scimmie stressate (dieta ipercalorica, estranei nella stanza) con e senza farmaco; VD: frequenza cardiaca. Le scimmie vengono da allevamenti controllati, quindi il campione è rappresentativo." },
      { t:"Arricchimento e neuroplasticità",
        d:"Ratti allevati dallo svezzamento in condizioni standard o arricchite; VD: indici di sinaptogenesi e dendritogenesi, risposte corrette ai test. L'arricchito dà valori più alti." }
    ]},
    { t:"Il limite",
      d:"<strong>Poco ecologico</strong>, e <strong>non sempre applicabile</strong>." }
  ]},

  /* ================= L07 ================= */
  { t:"La pubblicazione scientifica", f:"L07",
    d:"La <strong>comunicazione dei risultati</strong>, ultima fase del processo.",
    figli:[
    { t:"Che cos'è",
      d:"Propria di tutte le discipline che usano il <strong>metodo scientifico</strong>. È la <strong>principale e ufficiale forma di divulgazione</strong> della conoscenza: libri e siti non hanno carattere di scientificità. Diffusa soprattutto in <strong>digitale</strong>, da riviste di gruppi editoriali specializzati." },
    { t:"Che cosa la rende scientifica",
      d:"La <strong>revisione tra pari</strong>, o <em>peer review</em>: valuta il contenuto e ne garantisce la validità <strong>prima</strong> che entri nel circuito internazionale." },
    { t:"Gli atti di congresso",
      d:"Ai <strong>congressi</strong> e <strong>meeting</strong> si condividono risultati e si stringono <strong>collaborazioni</strong>. Presentazioni <strong>orali</strong> (simposi, <em>talk</em>) o <strong>scritte</strong> (<strong>poster</strong>). <strong>Nessuna vera peer review</strong>: un <strong>comitato scientifico</strong> valuta gli <strong>abstract</strong>, che restano negli atti." },
    { t:"L'articolo scientifico",
      d:"Il <em>paper</em>, la forma principale: risultati, metodologia, conclusioni. In <strong>inglese</strong>, lingua ufficiale dalla metà del Novecento.",
      figli:[
      { t:"Ricerca originale", d:"Metodo sperimentale o quasi sperimentale: conferma o confuta teorie." },
      { t:"Revisione della letteratura", d:"Narrativa, sistematica o meta-analisi." },
      { t:"Case report", d:"L'analisi di un caso singolo." },
      { t:"Trial clinico", d:"Conseguente a una ricerca di base." },
      { t:"Commento", d:"Di altri scienziati su un articolo già pubblicato." }
    ]},
    { t:"La revisione tra pari",
      d:"Il processo che <strong>garantisce la qualità</strong>, altrimenti chiunque pubblicherebbe qualsiasi cosa.",
      figli:[
      { t:"Il flusso",
        d:"Manoscritto → <strong>rivista</strong> scelta dagli autori → prima valutazione dell'<strong>editore</strong> → <strong>revisori esterni anonimi</strong>, esperti dello stesso settore." },
      { t:"I tre esiti",
        d:"<strong>Rifiuto</strong>, <strong>accettazione</strong>, o richiesta di <strong>revisioni</strong>: se le risposte degli autori soddisfano si pubblica, altrimenti si rigetta." },
      { t:"Ex ante ed ex post",
        d:"Nelle pubblicazioni non scientifiche, come un libro, la valutazione arriva <strong>ex post</strong>; qui <strong>ex ante</strong>." },
      { t:"Gli editori",
        d:"Nelle riviste multidisciplinari un <strong>editor in chief</strong> e <strong>editor specializzati</strong>.",
        figli:[
        { t:"La valutazione formale",
          d:"L'adeguatezza alla rivista: il <em>vademecum</em> per l'autore (formattazione, figure, caratteri), i <strong>documenti</strong> richiesti, le parti grafiche." },
        { t:"Le decisioni dell'editore",
          d:"Accettare, rifiutare, o mandare ai <strong>revisori</strong>, che sono <strong>due o quattro</strong>." },
        { t:"Le politiche editoriali",
          d:"Un lavoro può essere rifiutato <strong>anche se valido</strong>, per troppi articoli in arrivo: l'editor non fa l'analisi scientifica. Gli autori lo mandano altrove." },
        { t:"Le problematiche etiche",
          d:"Controlla i <strong>permessi etici</strong>: in Italia il <strong>codice etico dell'AIP</strong>, Associazione Italiana di Psicologia; i <strong>comitati etici</strong> valutano i progetti <strong>prima</strong> degli esperimenti." }
      ]},
      { t:"I revisori",
        d:"Ricercatori come gli autori: tutti sono autori dei propri articoli e revisori di altri.",
        figli:[
        { t:"Non retribuiti, ma è un onore",
          d:"Un lavoro lungo e gratuito, ma riconosce il revisore come esperto e migliora la conoscenza." },
        { t:"Il documento di revisione",
          d:"Un <strong>riassunto</strong> e un <strong>commento generale</strong> (originalità, importanza, <strong>validità metodologica</strong>); le <strong>criticità importanti</strong>, soprattutto sui <strong>metodi</strong> — si può replicare? c'è un <strong>bias metodologico</strong>? —, che possono portare al rifiuto; le <strong>problematiche minori</strong>, di stile o di bibliografia." }
      ]}
    ]},
    { t:"La struttura dell'articolo",
      d:"<strong>Sempre la stessa</strong>, a prescindere dall'editore — ed è quella della tesi. Serve al lettore per <strong>valutare le osservazioni</strong>, <strong>ripetere l'esperimento</strong> e giudicare se le conclusioni sono <strong>giustificate dai dati</strong>.",
      figli:[
      { t:"Perché saperla",
        d:"Per <strong>leggere</strong> la letteratura e distinguere fonti scientifiche da non scientifiche: i <strong>manuali</strong> sono resoconti a scopo <strong>didattico</strong>, i <strong>libri</strong> hanno scopo <strong>divulgativo</strong>, le uniche fonti ufficiali sono gli <strong>articoli</strong>." },
      { t:"Il titolo",
        d:"La parte <strong>più letta in assoluto</strong>. Non per forza accattivante, ma <strong>specifico</strong>, mai vago. Alcune riviste chiedono un <em>running title</em>, più breve." },
      { t:"Gli autori",
        d:"Di solito molti: il lavoro è di un <strong>gruppo di ricerca</strong>. La <strong>posizione seriale</strong> dà prestigio. Per essere autore bisogna aver contribuito a ideazione, dati o interpretazione, alla stesura o revisione, e aver <strong>approvato</strong> l'invio.",
        figli:[
        { t:"Primo autore", d:"Responsabile del <strong>disegno sperimentale</strong>." },
        { t:"Ultimo autore", d:"Il <strong>supervisore</strong> del gruppo, o chi mette i <strong>fondi</strong>." },
        { t:"Corresponding author", d:"Tiene i <strong>rapporti con l'editore</strong>, fino alle bozze. Di solito il primo o l'ultimo." }
      ]},
      { t:"Le affiliazioni",
        d:"Dipartimento, struttura, indirizzo, nazione: ogni autore deve essere <strong>identificabile</strong>. Più l'<strong>email</strong>, per essere contattato." },
      { t:"Le parole chiave",
        d:"Le <em>keywords</em>: fondamentali per l'<strong>indicizzazione</strong>, cioè per essere trovati nelle ricerche." },
      { t:"L'abstract",
        d:"Il riassunto, la parte <strong>più letta dopo il titolo</strong>: è <strong>libero su PubMed</strong> e contiene <strong>background</strong>, <strong>metodi</strong>, <strong>risultati</strong>, <strong>conclusioni</strong>. Da lì si decide se leggere tutto." },
      { t:"L'introduzione",
        d:"Porta a capire il <strong>razionale</strong>: contestualizza il problema con una breve disamina della <strong>letteratura recente</strong>, citata <strong>in modo sapiente</strong>, e si chiude esplicitando il razionale — spesso il <strong>gap</strong> che la ricerca vuole riempire." },
      { t:"I metodi",
        d:"Consentono la <strong>replica</strong>: dettagli sufficienti per ripetere lo studio. Strumenti già noti con un <strong>rimando bibliografico</strong>, per <strong>economicità</strong>; strumenti nuovi o modificati in ogni dettaglio. Si indicano anche i <strong>software</strong> statistici.",
        figli:[
        { t:"Le sottosezioni",
          d:"<strong>Soggetti</strong> (con criteri di inclusione e approvazione etica), <strong>strumenti di misura</strong>, <strong>procedura sperimentale</strong>, <strong>analisi statistica</strong>." }
      ]},
      { t:"I risultati",
        d:"Si <strong>selezionano</strong> i più importanti e si presentano in modo <strong>chiaro e conciso</strong>. Stile <strong>descrittivo</strong>: qui non si spiegano. Organizzati <strong>sullo schema delle ipotesi</strong>.",
        figli:[
        { t:"Inferenziali e descrittive",
          d:"Vanno riportati entrambi gli indici: <strong>inferenziali</strong> (analisi della varianza, correlazione) e <strong>descrittivi</strong>, che sintetizzano i dati." },
        { t:"La media", d:"La somma dei punteggi diviso il numero dei soggetti." },
        { t:"La deviazione standard",
          d:"Quanta <strong>variabilità</strong> c'è nel gruppo: <strong>bassa</strong> = poca, <strong>alta</strong> = molta." },
        { t:"Grafici e tabelle",
          d:"Sintetici e di impatto — tabelle di medie e deviazioni standard, <strong>istogrammi</strong>; ognuno con una <strong>didascalia</strong>." },
        { t:"Gli asterischi",
          d:"Indicano la <strong>significatività</strong> dei confronti fra medie: dove mancano, le differenze non sono estendibili alla popolazione." }
      ]},
      { t:"La discussione",
        d:"Qui i risultati si <strong>discutono</strong>: stile <strong>argomentativo</strong>, alla luce della letteratura. Struttura tipica: <strong>riassumere</strong>; discutere i <strong>problemi metodologici</strong>; <strong>confrontare</strong> con lavori precedenti; <strong>implicazioni</strong>; <strong>ricerche future</strong>; <strong>conclusione</strong> succinta." },
      { t:"La bibliografia",
        d:"L'elenco delle pubblicazioni citate, per <strong>trovarle</strong> e <strong>approfondire</strong>. Nel testo come <strong>primo autore <em>et al.</em>, anno</strong>, o con <strong>numeri</strong>; elenco in ordine <strong>alfabetico</strong> o di <strong>comparizione</strong>.",
        figli:[
        { t:"APA e Vancouver",
          d:"<strong>APA</strong>, prettamente psicologico, e <strong>Vancouver</strong>: cambia la forma, non l'informazione — <strong>autori, anno, titolo, rivista, volume, pagine</strong>." }
      ]},
      { t:"Il materiale supplementare",
        d:"Appendici con gli strumenti di misura per intero, procedure o risultati più dettagliati, grafici aggiuntivi." },
      { t:"L'articolo d'esempio", es:1,
        d:"Esercizio fisico intenso e risorse attentive negli adolescenti: VI, VD e popolazione già nel titolo; analisi della varianza a due vie; gruppo di controllo che guarda un documentario." }
    ]},
    { t:"La scelta della rivista",
      d:"Va fatta prima, perché formattazione e richieste cambiano da rivista a rivista.",
      figli:[
      { t:"Multidisciplinari o specifiche",
        d:"Le riviste di editori accreditati possono ospitare molti settori o essere più specifiche." },
      { t:"Nature, Brain, Cell, Science", es:1,
        d:"Esempi di riviste multidisciplinari prestigiosissime." },
      { t:"L'impact factor",
        d:"Misura il <strong>prestigio</strong>: un indice <strong>dinamico</strong>, che dipende dalle <strong>citazioni</strong> ottenute dai lavori della rivista <strong>nei due anni precedenti</strong>." },
      { t:"L'indice H",
        d:"L'indice di impatto del <strong>ricercatore</strong>, dalle citazioni dei suoi lavori. Così ogni lavoro è valutato <strong>ex ante</strong> dalla peer review ed <strong>ex post</strong> dalle citazioni." },
      { t:"Accesso chiuso e aperto",
        d:"<strong>Chiuso</strong>: paga l'<strong>utente</strong> che legge, con abbonamento o per articolo. <strong>Aperto</strong>: paga il <strong>ricercatore</strong> che pubblica, e l'articolo è gratuito e più <strong>visibile</strong>. Gli abbonamenti li fanno gli atenei." }
    ]},
    { t:"Le banche dati bibliografiche",
      d:"Digitali, reperibili da tutto il mondo; per la psicologia molte sono <strong>a pagamento</strong>.",
      figli:[
      { t:"PubMed",
        d:"<strong>Gratuita</strong>, del <strong>National Institute of Health</strong> statunitense, aggiornata <strong>settimanalmente</strong>: ricerca biomedica e psicologica, <strong>esclusivamente lavori scientifici</strong>. Riferimenti, titoli e <strong>abstract</strong> — utili per uno <strong>screening</strong> della letteratura — con il <strong>link</strong> al full text sul sito della rivista." },
      { t:"Come si usa PubMed",
        d:"Una <strong>barra di ricerca</strong> per <strong>parole chiave</strong>, <strong>autore</strong> o <strong>rivista</strong>; risultati di solito dal più recente; <strong>filtri</strong> temporali, di reperibilità, per tipo di articolo." },
      { t:"Google Scholar",
        d:"Gratuito, ma contiene anche <strong>letteratura grigia</strong>, non sottoposta a peer review: tesi, contributi non revisionati." }
    ]}
  ]}
]}});

/* =========================================================
   5 — LE BASI BIOLOGICHE DEL COMPORTAMENTO       (L08–L13)
   I nodi con `atl` prendono la descrizione dalla scheda
   dell'atlante 3D e si aprono nel modello.
   ========================================================= */
PGE.mappe.macro.push({
id:"bio", titolo:"Le basi biologiche", occhiello:"Lezioni 8–13",
radice:{ t:"Le basi biologiche del comportamento", f:"L08",
  d:"La <strong>rivoluzione neuroscientifica</strong> ha fatto della psicologia lo studio dell'<strong>unità mente-cervello</strong>. Si parte dai costituenti base — le cellule — fino al sistema nervoso, ai metodi per studiarlo, al rapporto fra geni e ambiente.",
  figli:[

  /* ================= L08 · LA STRUTTURA ================= */
  { t:"La struttura neuronale",
    d:"Il funzionamento del sistema nervoso dipende dalle cellule che lo compongono, di <strong>due categorie</strong>: <strong>cellule gliali</strong> e <strong>neuroni</strong>, presenti sia nel centrale sia nel periferico.",
    figli:[
    { t:"Le cellule gliali",
      d:"O cellule della glia: <strong>circa dieci volte più numerose</strong> dei neuroni, che sono già migliaia di miliardi. Il supporto; i veri effettori sono i neuroni.",
      figli:[
      { t:"Il sostegno strutturale",
        d:"Un'<strong>impalcatura</strong> in cui si posizionano i neuroni: li tengono al loro posto." },
      { t:"La funzione metabolica",
        d:"<strong>Trofica</strong>: forniscono le sostanze che nutrono i neuroni e ne garantiscono la sopravvivenza. <strong>Di pulizia</strong>: eliminano detriti, sostanze tossiche, cellule morte, parti che non funzionano più." },
      { t:"Macroglia e microglia",
        d:"Le principali tipologie del centrale. Le più presenti appartengono alla <strong>macroglia</strong>.",
        figli:[
        { t:"Gli astrociti", d:"Della macroglia, i più numerosi: funzione <strong>strutturale</strong>." },
        { t:"Gli oligodendrociti", d:"Della macroglia: <strong>rivestono gli assoni</strong>, formando la guaina mielinica." }
      ]}
    ]},
    { t:"Il neurone",
      d:"La cellula <strong>funzionale</strong> del sistema nervoso.",
      figli:[
      { t:"Le quattro caratteristiche",
        d:"Ciò che lo distingue dalle altre cellule del corpo.",
        figli:[
        { t:"Eccitabile",
          d:"È <strong>eccitabile</strong> e <strong>trasmette un'informazione</strong>, con un messaggio <strong>elettrochimico</strong> che regola il comportamento." },
        { t:"Migliaia di miliardi", d:"Un numero che non riusciamo nemmeno a immaginare." },
        { t:"Comunica, anche a distanza",
          d:"Comunica con altri neuroni, a volte per <strong>distanze molto lunghe</strong>: dal cervello alla mano." },
        { t:"Non si rigenera",
          d:"Salvo rare eccezioni, un neurone perso non viene sostituito: per questo le <strong>malattie neurodegenerative</strong> non hanno cura. Ma il cervello recupera i danni per un'altra via: il neurone sa <strong>modificare la sua struttura</strong>, e quindi la sua funzione — la <strong>neuroplasticità</strong>." },
        { t:"Il taglio sulla mano", es:1,
          d:"Le cellule dell'epidermide si rinnovano e fanno la cicatrice; un buco nel cervello non viene ricoperto da altri neuroni." }
      ]},
      { t:"La struttura prototipica",
        d:"Qualunque sia la tipologia, tutti i neuroni hanno le stesse caratteristiche strutturali: una <strong>membrana</strong>, un <strong>corpo cellulare</strong>, un <strong>albero dendritico</strong>, un <strong>assone</strong>. La lezione avverte che è una schematizzazione molto semplificata." },
      { t:"Membrana cellulare", atl:"neu.membrana" },
      { t:"Citoscheletro", atl:"neu.citoscheletro" },
      { t:"Corpo cellulare", atl:"neu.soma",
        figli:[
        { t:"Nucleo", atl:"neu.nucleo",
          figli:[
          { t:"DNA", atl:"neu.dna",
            figli:[
            { t:"I geni",
              d:"Il DNA è lo stesso in tutte le cellule: cambiano i <strong>segmenti che vengono attivati</strong>, cioè i singoli <strong>geni</strong>, specifici per ogni tipo di cellula, con le istruzioni per assemblarla e farla funzionare." }
          ]},
          { t:"La trascrizione",
            d:"Dentro il nucleo le istruzioni dei geni — sequenze di acidi nucleici — vengono <strong>trascritte</strong> in segmenti di <strong>RNA</strong>." },
          { t:"L'RNA messaggero",
            d:"Esce dal nucleo attraverso i suoi <strong>forellini</strong> e porta le istruzioni nel citoplasma." }
        ]},
        { t:"Citoplasma e citosol",
          d:"Il nucleo galleggia nel <strong>citoplasma</strong>, che contiene il <strong>citosol</strong>, un liquido ricco di <strong>potassio</strong> in cui galleggiano gli organelli." },
        { t:"La sintesi delle proteine",
          d:"Avviene nel citoplasma, fuori dal nucleo: il corpo cellulare <strong>sintetizza tutte le proteine</strong> necessarie alla struttura e alla funzione del neurone." },
        { t:"Gli organelli",
          d:"I più importanti per il funzionamento del neurone.",
          figli:[
          { t:"Ribosomi", atl:"neu.ribosomi",
            figli:[
            { t:"La traduzione",
              d:"Le sequenze di acidi nucleici diventano sequenze di <strong>amminoacidi</strong>, che costituiscono le proteine. Trascrizione nel nucleo, traduzione nel citoplasma." }
          ]},
          { t:"Reticolo endoplasmatico", atl:"neu.reticolo" },
          { t:"Apparato del Golgi", atl:"neu.golgi" },
          { t:"Mitocondri", atl:"neu.mitocondri" }
        ]}
      ]},
      { t:"Albero dendritico", atl:"neu.dendriti",
        figli:[
        { t:"I recettori",
          d:"La membrana cambia composizione secondo la zona: nei dendriti porta le <strong>proteine recettoriali</strong>, che ricevono gli input e fanno dei dendriti le antenne della cellula." },
        { t:"Spine dendritiche", atl:"neu.spine" }
      ]},
      { t:"Assone", atl:"neu.assone",
        figli:[
        { t:"Cono di emergenza", atl:"neu.cono" },
        { t:"Guaina mielinica", atl:"neu.mielina" },
        { t:"Nodi di Ranvier", atl:"neu.ranvier" },
        { t:"La velocità di conduzione",
          d:"Dipende dal <strong>diametro</strong> dell'assone — più è spesso, più il messaggio è veloce, come in un filo elettrico — e dalla <strong>guaina mielinica</strong>." },
        { t:"La mano scottata", es:1,
          d:"Scottarsi e ritrarre il braccio: input, elaborazione e output in un tempo brevissimo, con molte tappe. I messaggi viaggiano velocissimi." },
        { t:"Terminali assonici", atl:"neu.terminali",
          figli:[
          { t:"Bottoni sinaptici", atl:"neu.bottoni",
            figli:[
            { t:"Vescicole sinaptiche", atl:"neu.vescicole" }
          ]}
        ]}
      ]},
      { t:"Le tipologie neuronali",
        d:"Tantissime, classificate per forma, funzione, sito di elaborazione.",
        figli:[
        { t:"Per i processi",
          d:"Considerando assone e dendriti.",
          figli:[
          { t:"Bipolare", d:"Il soma, un albero dendritico e un assone." },
          { t:"Unipolare", d:"Il soma e <strong>un solo processo</strong> che si dirama." },
          { t:"Multipolare", d:"Tanti processi, come il neurone prototipico." }
        ]},
        { t:"Per la forma dei dendriti",
          d:"Anche forma e grandezza dei dendriti classificano.",
          figli:[
          { t:"Cellule stellate", d:"Tutti i processi si diramano dal corpo cellulare." },
          { t:"Cellule piramidali", d:"Un albero dendritico <strong>apicale</strong> e uno <strong>basale</strong>." }
        ]},
        { t:"Per le spine",
          d:"<strong>Neuroni spinosi</strong> e <strong>non spinosi</strong>. Gli spinosi contano perché le spine sono dinamiche e rendono conto della capacità di compensare i danni per <strong>neuroplasticità</strong>, fino al <strong>recupero vicario</strong> di funzioni perse." }
      ]},
      { t:"Pre e post-sinaptico",
        d:"Lo stesso neurone è <strong>presinaptico</strong> rispetto a quello che segue e <strong>post-sinaptico</strong> rispetto a quello che precede." },
      { t:"Da solo non fa niente",
        d:"I neuroni funzionano <strong>soltanto in gruppi</strong>, formando <strong>circuiti</strong>: un meccanismo elementare che, insieme, rende conto di funzioni complicatissime." }
    ]}
  ]},

  /* ================= L08 · L'ATTIVITÀ ================= */
  { t:"L'attività elettrica del neurone",
    d:"La fisiologia del neurone. La forma di energia con cui i neuroni funzionano e comunicano è l'<strong>energia elettrica</strong>, con segnali <strong>elettrochimici</strong>; alcuni sono connessi direttamente con gli organi effettori, ghiandole e muscoli.",
    figli:[
    { t:"Le tre fasi",
      d:"Riposo, attività, ritorno al riposo.",
      figli:[
      { t:"1 · Il riposo",
        d:"Un <strong>potenziale elettrico di riposo</strong>, dovuto a una <strong>distribuzione asimmetrica di carica elettrica</strong> ai due lati della membrana." },
      { t:"2 · L'attività",
        d:"Stimolato, un flusso di ioni <strong>inverte repentinamente la carica</strong>: è l'impulso nervoso, il <strong>potenziale d'azione</strong>." },
      { t:"3 · Il ritorno al riposo",
        d:"Subito dopo, quella porzione di neurone <strong>ritorna allo stato di riposo</strong>: l'equilibrio ionico viene ripristinato." }
    ]},
    { t:"La membrana semipermeabile",
      d:"Un <strong>doppio strato fosfolipidico</strong>: ogni strato ha una <strong>coda idrofoba</strong> e una <strong>testa idrofila</strong>; le teste guardano gli ambienti acquosi interno ed esterno, le code si toccano. Di per sé impermeabile, è <strong>semipermeabile</strong> perché la attraversano proteine che fanno da canali." },
    { t:"I canali ionici",
      d:"I passaggi nella membrana, <strong>selettivi</strong> per alcune sostanze.",
      figli:[
      { t:"Il gradiente elettrochimico",
        d:"Gli ioni sono atomi carichi: <strong>cationi</strong> positivi e <strong>anioni</strong> negativi. Li muovono il <strong>gradiente chimico</strong> (dal più al meno concentrato, verso l'equilibrio) e la <strong>forza elettrica</strong> (i positivi verso il negativo e viceversa)." },
      { t:"Canali passivi",
        d:"<strong>Sempre aperti</strong>, come cancelli: lasciano passare certi ioni secondo il loro gradiente elettrochimico." },
      { t:"Canali ad accesso variabile",
        d:"I più importanti sono i <strong>voltaggio-dipendenti</strong>: di norma chiusi, si aprono quando il potenziale cambia in un certo modo e si richiudono quando torna com'era." }
    ]},
    { t:"Le pompe ioniche",
      d:"Spingono le sostanze <strong>contro</strong> il gradiente elettrochimico, e per farlo sfruttano <strong>energia cellulare</strong>. Un esempio è la pompa sodio-potassio." },
    { t:"Il potenziale di riposo",
      d:"La <strong>differenza di potenziale elettrico</strong> fra ambiente intracellulare ed extracellulare: a riposo il neurone ha un <strong>potenziale negativo</strong>, è <strong>polarizzato</strong>.",
      figli:[
      { t:"Fuori: sodio e cloro",
        d:"Nell'ambiente <strong>extracellulare</strong>, un liquido salino, prevalgono ioni positivi di <strong>sodio</strong> e ioni negativi di <strong>cloro</strong>." },
      { t:"Dentro: potassio e anioni proteici",
        d:"Nell'ambiente <strong>intracellulare</strong> prevalgono ioni positivi di <strong>potassio</strong> e grossissimi <strong>anioni proteici</strong> negativi, che sbilanciano la carica verso il negativo." },
      { t:"L'equilibrio del potassio",
        d:"Il potassio è il più libero di passare dai canali passivi: il potenziale di riposo è vicino al <strong>potenziale di equilibrio per il potassio</strong>." },
      { t:"La pompa sodio-potassio",
        d:"Quando entra troppo sodio, lo lega, idrolizza una molecola di <strong>ATP</strong> e butta fuori <strong>tre ioni sodio</strong>, riportando dentro <strong>due ioni potassio</strong>: rimette costantemente gli ioni al loro posto." }
    ]},
    { t:"Il potenziale d'azione",
      d:"Una <strong>repentina variazione del potenziale di membrana</strong>: l'impulso nervoso.",
      figli:[
      { t:"La soglia",
        d:"La depolarizzazione si innesca solo se lo stimolo raggiunge una <strong>soglia di attivazione</strong>; altrimenti il potenziale d'azione non si genera." },
      { t:"La depolarizzazione",
        d:"Raggiunta la soglia si aprono i canali voltaggio-dipendenti del <strong>sodio</strong>, che entra massicciamente: l'interno diventa positivo. La carica si <strong>inverte</strong>." },
      { t:"La ripolarizzazione",
        d:"Con l'interno positivo si aprono i canali del <strong>potassio</strong>, che esce: il potenziale torna verso il riposo." },
      { t:"L'iperpolarizzazione",
        d:"Prima di tornare a riposo il potenziale scende <strong>sotto</strong> il valore di riposo: in questa fase il neurone <strong>non può più ricevere stimoli</strong>." },
      { t:"La legge del tutto o nulla",
        d:"Superata la soglia, il potenziale d'azione è <strong>identico a tutti gli altri</strong>: sempre uguale a se stesso, non si modula, o c'è o non c'è; e se c'è si propaga per tutto l'assone." },
      { t:"L'intensità è frequenza",
        d:"Uno stimolo più intenso non dà un potenziale più grande: l'intensità si codifica nella <strong>frequenza</strong> delle scariche, non nell'<strong>ampiezza</strong>. Pressione leggera, scariche rare; pressione forte, scariche fitte." },
      { t:"Il periodo refrattario",
        d:"Durante l'iperpolarizzazione i canali del sodio sono in stato di <strong>refrattarietà</strong>: quel tratto di assone per un attimo non è eccitabile." },
      { t:"L'unidirezionalità",
        d:"Ogni tratto depolarizza il successivo; il precedente è refrattario, quindi la propagazione <strong>non può avvenire in senso contrario</strong>: sempre dal cono di emergenza ai bottoni terminali." }
    ]},
    { t:"I potenziali graduati",
      d:"Nei dendriti la membrana <strong>non contiene i canali voltaggio-dipendenti</strong> come l'assone: si generano <strong>potenziali graduati</strong>, che si propagano <strong>passivamente</strong> fino al soma e all'assone, dove i tanti messaggi vengono <strong>integrati e sommati</strong>." },
    { t:"La conduzione saltatoria",
      d:"Dove l'assone è isolato dalla guaina, il messaggio procede <strong>saltando</strong> da un nodo all'altro invece di percorrere tutto l'assone: la trasmissione è più veloce." }
  ]},

  /* ================= L08 · LA SINAPSI ================= */
  { t:"La sinapsi chimica",
    d:"Come il messaggio passa da un neurone all'altro: fra i <strong>bottoni sinaptici</strong> dei terminali e i <strong>dendriti</strong> del neurone post-sinaptico, nello <strong>spazio sinaptico</strong>. Le <strong>sinapsi chimiche</strong> sono le più diffuse; esistono anche quelle elettriche. Qui il messaggio <strong>elettrico diventa chimico</strong>, poi di nuovo elettrico.",
    figli:[
    { t:"I cinque passaggi",
      d:"Lo schema della trasmissione sinaptica.",
      figli:[
      { t:"1 · La sintesi", d:"Il neurotrasmettitore è prodotto nel <strong>soma</strong>." },
      { t:"2 · L'immagazzinamento", d:"Appena prodotto viene racchiuso nelle <strong>vescicole sinaptiche</strong>." },
      { t:"3 · Il rilascio", d:"All'arrivo del potenziale d'azione le vescicole si <strong>fondono</strong> con la membrana del bottone e liberano il neurotrasmettitore nello spazio sinaptico." },
      { t:"4 · Il legame ai recettori", d:"Il neurotrasmettitore viene captato dai <strong>recettori post-sinaptici</strong> sulla membrana del dendrite." },
      { t:"5 · La disattivazione", d:"Il neurotrasmettitore va rimosso, per <strong>inattivazione</strong> o per <strong>ricaptazione</strong>." }
    ]},
    { t:"I neurotrasmettitori",
      d:"Sostanze chimiche prodotte dal soma, che attraversano uno spazio extracellulare vuoto da una cellula all'altra.",
      figli:[
      { t:"Le barche sul fiume", es:1,
        d:"La lezione li paragona a barche che traghettano passeggeri attraverso un fiume." }
    ]},
    { t:"I recettori post-sinaptici",
      d:"Particolari canali ionici che si aprono solo a certe condizioni. Sono <strong>specifici</strong> per un certo neurotrasmettitore, secondo la popolazione neuronale: il dendrite si attiva <strong>soltanto se gli arriva la molecola giusta</strong>." },
    { t:"Sinapsi eccitatoria",
      d:"Il neurotrasmettitore <strong>eccitatorio</strong> apre canali <strong>ligando-dipendenti</strong> — che si aprono quando vi si lega una molecola — per il <strong>sodio</strong>: l'interno diventa più positivo, <strong>depolarizza</strong>. Senza canali voltaggio-dipendenti non c'è potenziale d'azione, ma un <strong>potenziale graduato eccitatorio</strong>, che può <strong>sommarsi</strong> ad altri e innescare l'impulso nell'assone." },
    { t:"Sinapsi inibitoria",
      d:"Il neurotrasmettitore <strong>inibitorio</strong> apre canali ligando-dipendenti per il <strong>cloro</strong>, un anione: l'interno diventa ancora più negativo, la cellula si <strong>iperpolarizza</strong>. È un <strong>potenziale graduato inibitorio</strong>." },
    { t:"L'integrazione",
      d:"I potenziali inibitori si integrano con quelli eccitatori: possono <strong>ostacolare</strong> o <strong>rallentare</strong> la genesi dell'impulso, la <strong>modulano</strong>. Nell'assone, alla fine, il potenziale d'azione avviene o non avviene." },
    { t:"La disattivazione",
      d:"Se il neurotrasmettitore restasse legato, i canali continuerebbero a far passare ioni: il meccanismo va <strong>stoppato</strong>.",
      figli:[
      { t:"La degradazione enzimatica", d:"Il neurotrasmettitore viene disattivato con meccanismi chimici, <strong>enzimatici</strong>." },
      { t:"Il reuptake",
        d:"La <strong>ricaptazione</strong>: trasportatori retrogradi riportano la molecola nel neurone presinaptico, per riutilizzarla. È alla base di molti <strong>farmaci</strong> per patologie psichiatriche e neurodegenerative." }
    ]},
    { t:"I neurotrasmettitori principali",
      d:"I più rappresentati sono due, <strong>trasversali</strong> a tutti i sistemi.",
      figli:[
      { t:"Il glutammato", d:"Il principale neurotrasmettitore <strong>eccitatorio</strong>." },
      { t:"Il GABA", d:"Il principale neurotrasmettitore <strong>inibitorio</strong>." },
      { t:"Acetilcolina, dopamina, serotonina", d:"Più <strong>specifici</strong> di alcuni sistemi." }
    ]},
    { t:"I neuromodulatori",
      d:"Molecole che, con legami chimici, modulano la <strong>sensibilità</strong> dei neuroni a certi neurotrasmettitori. Il più famoso: le <strong>endorfine</strong>." }
  ]},

  /* ================= L09 · L'ORGANIZZAZIONE ================= */
  { t:"L'organizzazione del sistema nervoso", f:"L09",
    d:"Un neurone, o due, da soli non servirebbero a nulla: il senso sta nelle <strong>strutture che contengono i neuroni</strong>. Il sistema nervoso è il <strong>centro del controllo del corpo</strong>: neuroni organizzati in grosse reti e circuiti, che influenzano anche il resto del corpo.",
    figli:[
    { t:"I tre livelli di elaborazione",
      d:"Un ingresso, un'elaborazione, un'uscita — una semplificazione di una cosa complessa.",
      figli:[
      { t:"Il livello afferente", d:"L'<strong>input</strong>: dall'esterno verso il centro di controllo." },
      { t:"L'elaborazione intermedia", d:"Fra ingresso e uscita: «tanta roba»." },
      { t:"Il livello efferente", d:"L'<strong>output</strong>: dal centro di controllo verso l'esterno." }
    ]},
    { t:"Le tre categorie di neuroni",
      d:"Una per livello.",
      figli:[
      { t:"I neuroni sensoriali",
        d:"Mediano l'afferenza. Il tipico è il <strong>pseudounipolare</strong>: dal soma non partono dendriti ma un processo che si <strong>biforca</strong>, verso la periferia e verso i centri; recettori alle diramazioni; <strong>soma fuori dal sistema nervoso centrale</strong>." },
      { t:"Gli interneuroni",
        d:"Tutti i neuroni dentro il sistema nervoso che <strong>non hanno contatto con la periferia</strong>: mediano l'elaborazione intermedia, a qualunque livello." },
      { t:"I motoneuroni",
        d:"Mediano l'efferenza: in contatto con la periferia, il loro assone termina su una <strong>fibra muscolare</strong> e dà il comando ai muscoli volontari." }
    ]},
    { t:"Il criterio anatomico",
      d:"Periferico e centrale si distinguono in modo <strong>puramente anatomico</strong>: la presenza di una <strong>protezione ossea</strong>. Il periferico non è protetto da ossa; il centrale sta dentro colonna vertebrale e scatola cranica." },
    { t:"Perché studiare anche il periferico",
      d:"L'attenzione andrà soprattutto al centrale, per le funzioni mentali; ma <strong>senza il periferico il centrale da solo non servirebbe a nulla</strong>." }
  ]},

  { t:"Il sistema nervoso periferico", f:"L09",
    d:"Strutture <strong>non protette da ossa</strong>, in due categorie fondamentali: <strong>somatico</strong> e <strong>autonomo</strong>.",
    figli:[
    { t:"Il sistema somatico",
      d:"Neuroni <strong>sensoriali</strong> (afferenza) e <strong>motori</strong> (efferenza) che ci permettono di <strong>percepire e rispondere</strong> all'ambiente. Media il <strong>movimento volontario</strong>. Detto anche <strong>sistema di relazione</strong>.",
      figli:[
      { t:"Nervi spinali", atl:"snp.nervispinali" },
      { t:"Nervi cranici", atl:"snp.nervicranici" },
      { t:"Due componenti",
        d:"Spinali o cranici, i nervi innervano <strong>cute, giunture e muscoli</strong> e hanno una <strong>componente sensitiva afferente</strong> e una <strong>motoria efferente</strong>. Possono essere lunghi più di un metro." }
    ]},
    { t:"Il sistema autonomo",
      d:"<strong>Non è sotto il controllo della coscienza</strong>: media funzioni che si svolgono <strong>senza consapevolezza</strong>. Ghiandole, cuore, vasi, organi: le <strong>funzioni involontarie</strong> — respirare, digerire, il flusso del sangue. Coinvolto anche in <strong>motivazione, emozioni e risposta allo stress</strong>.",
      figli:[
      { t:"Le tre sottosezioni",
        d:"<strong>Simpatico, parasimpatico, enterico</strong>. I neuroni di simpatico e parasimpatico stanno un po' fuori dal midollo, ma vicino, dentro la colonna." },
      { t:"Sistema simpatico", atl:"snp.simpatico" },
      { t:"Sistema parasimpatico", atl:"snp.parasimpatico" },
      { t:"La reciprocità",
        d:"Simpatico e parasimpatico agiscono <strong>reciprocamente</strong>: se uno è attivo l'altro diminuisce. Sono <strong>sincronizzati</strong>: non possono essere attivi tutti e due, né spenti tutti e due." },
      { t:"I distretti", atl:"snp.bersagli" },
      { t:"L'omeostasi",
        d:"Lo stato di <strong>equilibrio</strong> che l'organismo ha <strong>a riposo</strong>, garantito soprattutto dal parasimpatico." },
      { t:"Sistema enterico", atl:"snp.enterico" }
    ]}
  ]},

  { t:"Il sistema nervoso centrale", f:"L09",
    d:"Protetto da ossa: <strong>midollo spinale</strong> ed <strong>encefalo</strong>.",
    figli:[
    { t:"La terminologia",
      d:"Acquisire un <strong>lessico tecnico</strong> adeguato è una delle cose più importanti del corso: qui il lessico <strong>è</strong> il contenuto.",
      figli:[
      { t:"L'asse longitudinale",
        d:"Il centrale si sviluppa lungo un asse <strong>caudo-rostrale</strong>, dalla coda alla testa. Vale a livello <strong>ontogenetico</strong> (dall'embrione all'adulto, dal caudale al rostrale) e <strong>filogenetico</strong>: le strutture più caudali sono le più <strong>arcaiche</strong>." },
      { t:"La lucertola", es:1,
        d:"Un vertebrato semplice, senza stazione eretta: il suo sistema nervoso è <strong>lineare</strong>, dritto dal midollo al cervello." },
      { t:"La deflessione",
        d:"Con la <strong>stazione eretta</strong> l'asse si è <strong>piegato</strong> a livello del <strong>mesencefalo</strong>: occhi e parte frontale dovevano guardare avanti. Per questo i termini anatomici <strong>cambiano</strong> sopra e sotto la deflessione." },
      { t:"Il soffitto", es:1,
        d:"Senza deflessione avremmo gli occhi sopra la testa, e vedremmo il soffitto." },
      { t:"I tre assi",
        d:"<strong>Antero-posteriore</strong> o ventro-dorsale (ventrale verso la pancia, dorsale verso la schiena); <strong>rostro-caudale</strong>; <strong>medio-laterale</strong>, da un orecchio all'altro." },
      { t:"Le visioni",
        d:"Per la struttura <strong>superficiale</strong>: si guarda il cervello senza toccarlo.",
        figli:[
        { t:"Dorsale", d:"Dall'alto." },
        { t:"Ventrale", d:"Dal basso." },
        { t:"Laterale", d:"Di lato." },
        { t:"Mediale", d:"Dalla parte interna dell'emisfero." }
      ]},
      { t:"La simmetria bilaterale",
        d:"Il sistema nervoso è <strong>simmetrico bilateralmente</strong>: due metà praticamente identiche. Nel cervello sono unite solo dal <strong>corpo calloso</strong>: per la visione mediale <strong>non bisogna tagliare</strong>, basta resezionare quelle fibre." },
      { t:"Rispetto alla linea mediana",
        d:"<strong>Prossimale</strong> o <strong>mediale</strong>: vicino alla linea mediana. <strong>Distale</strong> o <strong>laterale</strong>: lontano. <strong>Ipsilaterale</strong>: dallo stesso lato. <strong>Controlaterale</strong>: dal lato opposto." },
      { t:"Le sezioni",
        d:"Per l'anatomia <strong>profonda</strong> si <strong>seziona</strong>, sui tre piani: <strong>frontale</strong> (o coronale), <strong>orizzontale</strong>, <strong>sagittale</strong> (o mediano)." }
    ]},
    { t:"Le protezioni",
      d:"Un sistema <strong>molto protetto</strong>: le ossa del cranio e la colonna, e in più meningi e liquor.",
      figli:[
      { t:"Le meningi", atl:"enc.meningi",
        d:"<strong>Tre membrane</strong> che rivestono il centrale e lo proteggono dagli urti contro le ossa.",
        figli:[
        { t:"Dura madre",
          d:"La più <strong>esterna</strong>, a contatto con l'osso; la più spessa. Consistenza di <strong>cuoio</strong>: forte, non elastica, rigida." },
        { t:"Aracnoide",
          d:"Sotto la dura, consistenza di <strong>tela di ragno</strong>, di norma a contatto con la dura. Ricca di vasi." },
        { t:"L'ematoma subdurale",
          d:"In un trauma cranico i vasi si rompono e fra dura e aracnoide si forma una sacca di sangue. Più è grande, più rischia di <strong>comprimere</strong> il cervello; si incide l'osso e si drena." },
        { t:"Pia madre",
          d:"La più <strong>interna</strong>: sottilissima, <strong>elastica</strong>, a <strong>contatto diretto</strong> con il tessuto nervoso." },
        { t:"Lo spazio subaracnoideo",
          d:"Fra aracnoide e pia madre: non è vuoto, è pieno di <strong>liquido cerebrospinale</strong>." }
      ]},
      { t:"Il liquor", atl:"enc.ventricoli",
        figli:[
        { t:"Il cervello galleggia",
          d:"Il cervello non tocca direttamente le ossa: <strong>galleggia</strong> nel liquor." },
        { t:"Il sistema ventricolare",
          d:"Dove il liquor si produce, simile a un <strong>acquedotto</strong>: <strong>quattro ventricoli</strong> — due <strong>laterali</strong>, il <strong>terzo</strong> mediale e più ventrale, il <strong>quarto</strong> ancora più ventrale — e i canali che li collegano." },
        { t:"Terzo ventricolo", atl:"enc.ventricolo.terzo" },
        { t:"Quarto ventricolo", atl:"enc.ventricolo.quarto" },
        { t:"Il circolo del liquor",
          d:"Prodotto di continuo dai <strong>plessi corioidei</strong> dei ventricoli laterali; passa nel terzo, nel quarto, scende nel midollo, gira nello spazio subaracnoideo e viene <strong>riassorbito</strong> dai <strong>villi aracnoidei</strong>. Ricambio continuo." },
        { t:"Le tre funzioni del liquor",
          d:"<strong>Ridurre il peso</strong> dell'encefalo (uno-due chili); <strong>proteggere</strong> dagli urti; <strong>controllare le modificazioni chimiche</strong> dell'ambiente interno — elimina metaboliti, porta nutrienti." },
        { t:"L'idrocefalo",
          d:"Un'<strong>ostruzione</strong> nel ricircolo: il liquor è prodotto e non riassorbito, i ventricoli si allargano. Nei bambini la testa cresce molto; negli adulti, con le ossa rigide, disfunzioni per <strong>compressione</strong>. Si interviene chirurgicamente." }
      ]}
    ]},
    { t:"L'organizzazione gerarchica",
      d:"Sopra il midollo: <strong>tronco encefalico</strong>, poi <strong>diencefalo</strong> e <strong>cervelletto</strong>, poi gli <strong>emisferi</strong>. Frutto dell'evoluzione lungo l'asse longitudinale.",
      figli:[
      { t:"Le fondamenta",
        d:"Le strutture più arcaiche, più caudali, sono le <strong>fondamenta</strong> su cui poggiano strutture via via più recenti." },
      { t:"Il significato funzionale",
        d:"In basso le funzioni <strong>basilari</strong>, comuni a tutti i vertebrati, per la sopravvivenza; in alto, nella parte più rostrale — sotto la fronte — le funzioni complesse proprie dell'uomo." },
      { t:"Cervello primitivo e neoencefalo",
        d:"Il <strong>cervello primitivo</strong> — midollo, tronco, cervelletto, diencefalo — si distingue dal <strong>neoencefalo</strong>, tutto ciò che sta sopra." }
    ]},
    { t:"Il midollo spinale", atl:"enc.midollo",
      figli:[
      { t:"Già formato alla nascita",
        d:"Alla nascita è lungo quanto la colonna e resta così: crescono le ossa, non lui. Nell'adulto finisce alle <strong>ultime vertebre lombari</strong>." },
      { t:"L'organizzazione segmentale",
        d:"Ogni segmento corrisponde a un <strong>paio di nervi spinali</strong>, bilaterali; segmenti e nervi prendono il nome dalle vertebre." },
      { t:"La cauda equina",
        d:"Dove il midollo è finito ma gli assoni continuano a scendere prima di uscire: niente sostanza grigia, solo assoni. Lì si fa l'<strong>anestesia epidurale</strong>." },
      { t:"La sezione del midollo",
        d:"In sezione orizzontale: <strong>corno dorsale</strong>, posteriore, e <strong>corno ventrale</strong>, anteriore." },
      { t:"Radici dorsali e ventrali", atl:"snp.radici" },
      { t:"Sostanza grigia e bianca",
        d:"La <strong>farfalla grigia</strong>, o H grigio, è grigia perché <strong>non ci sono fibre</strong> mielinizzate: ci sono i <strong>somi</strong>. Dove è <strong>bianca</strong> ci sono <strong>fibre</strong>." },
      { t:"Ganglio della radice dorsale", atl:"snp.ganglio" },
      { t:"Dorsale sensitivo, ventrale motorio",
        d:"Nel corno <strong>dorsale</strong> arrivano gli assoni del neurone sensitivo primario e ci sono gli <strong>interneuroni sensitivi</strong>; nel <strong>ventrale</strong> stanno i <strong>somi dei motoneuroni</strong>." },
      { t:"Perché è così importante",
        d:"Garantisce stazione eretta e controllo dei muscoli: un danno può dare <strong>paralisi</strong>. È la <strong>prima tappa</strong> delle informazioni sensoriali verso i centri, l'<strong>ultima tappa</strong> dei comandi motori verso i muscoli, e la <strong>sede di alcuni riflessi</strong>." },
      { t:"Arco riflesso", atl:"snp.arco" }
    ]},
    { t:"Il tronco dell'encefalo",
      d:"Tre strutture, dalla più caudale alla più rostrale: <strong>bulbo, ponte, mesencefalo</strong>.",
      figli:[
      { t:"Bulbo", atl:"enc.tronco.bulbo" },
      { t:"Ponte", atl:"enc.tronco.ponte" },
      { t:"Mesencefalo", atl:"enc.tronco.mesencefalo" },
      { t:"Le funzioni del tronco",
        d:"Neuroni che regolano <strong>pressione arteriosa, respirazione e sonno</strong>; tappa delle afferenze <strong>gustative, uditive</strong> e dell'<strong>equilibrio</strong>. Dialoga col sistema autonomo per l'omeostasi." },
      { t:"I nervi cranici",
        d:"Dal tronco escono i <strong>nervi cranici</strong>, che fanno per collo, testa e faccia ciò che i nervi spinali fanno per il resto del corpo." },
      { t:"La regola della localizzazione",
        d:"A una localizzazione anatomica nelle strutture nervose corrisponde una <strong>localizzazione anatomica</strong> nel resto del corpo." },
      { t:"La formazione reticolare", atl:"enc.reticolare",
        d:"Un circuito neuronale <strong>diffuso</strong> nel tronco, che riceve una sintesi delle informazioni che arrivano a midollo e tronco. Regola <strong>livello di vigilanza, ritmo sonno-veglia, attenzione, tono muscolare</strong>, movimento e riflessi vitali." },
      { t:"Morte e paralisi",
        d:"Un danno al tronco <strong>fa morire</strong>, uno al midollo <strong>paralizza</strong>. Paradossalmente sono più gravi dei danni alla corteccia frontale, che danno deficit cognitivi ma lasciano vivere." }
    ]},
    { t:"Cervelletto", atl:"enc.cervelletto" },
    { t:"Il diencefalo",
      d:"L'ultima macrostruttura del cervello primitivo, più rostrale, attorno al <strong>terzo ventricolo</strong>.",
      figli:[
      { t:"Talamo", atl:"enc.dienc.talamo" },
      { t:"Ipotalamo", atl:"enc.dienc.ipotalamo" },
      { t:"Ipofisi", atl:"enc.ipofisi" }
    ]}
  ]},

  { t:"Endocrino e immunitario", f:"L09",
    d:"Due sistemi <strong>distinti</strong> dal nervoso, che però lo <strong>influenzano molto</strong>: agiscono in modo <strong>concertato</strong>, e un danno in uno si ripercuote sugli altri.",
    figli:[
    { t:"Il sistema endocrino",
      d:"Molte <strong>ghiandole ormonali</strong> in tutto il corpo, che passano informazioni da un organo all'altro con gli <strong>ormoni</strong>: messaggeri chimici immessi direttamente nel <strong>flusso sanguigno</strong>.",
      figli:[
      { t:"I recettori degli ormoni",
        d:"Come i neuroni per i neurotrasmettitori, tutte le cellule — neuroni compresi — hanno <strong>recettori specifici per gli ormoni</strong>." },
      { t:"L'influenza reciproca",
        d:"I messaggi endocrini agiscono su cervello e processi mentali, e i processi mentali influenzano il sistema endocrino." },
      { t:"La ruminazione", es:1,
        d:"I pensieri negativi ricorrenti sono fonte di stress: stimolano la produzione degli ormoni dello stress. Un'attività mentale che agisce sul sistema endocrino." },
      { t:"La differenza di velocità",
        d:"Più <strong>lento</strong> del nervoso, perché gli ormoni viaggiano nel sangue; ma con effetti <strong>più a lungo termine</strong>, perché agiscono direttamente sugli organi." },
      { t:"Le principali ghiandole",
        d:"<strong>Ovaie</strong> e <strong>testicoli</strong> (sviluppo e differenze di genere, prima e dopo la nascita, anche sul cervello); l'<strong>ipofisi</strong>; la <strong>tiroide</strong> (metabolismo); le <strong>surrenali</strong>, sopra i reni." },
      { t:"La prolattina", es:1,
        d:"L'ormone dell'allattamento: la sua secrezione è regolata in gran parte dall'ipotalamo, via ipofisi." }
    ]},
    { t:"Il sistema immunitario",
      d:"Distingue le sostanze che <strong>appartengono</strong> al corpo, da difendere, da quelle <strong>estranee</strong>, da distruggere.",
      figli:[
      { t:"Antigeni e anticorpi",
        d:"Gli <strong>antigeni</strong>, sostanze estranee, inducono una <strong>risposta immunitaria</strong>: la produzione di <strong>anticorpi</strong> che li distruggono." },
      { t:"Il body-mind",
        d:"Nervoso, endocrino e immunitario <strong>interagiscono fortemente</strong>, tanto da essere chiamati insieme <em>body-mind</em>. Un sistema immunitario sano è alla base di un buon funzionamento cerebrale, e viceversa." }
    ]}
  ]},

  /* ================= L10 · EMISFERI E CORTECCIA ================= */
  { t:"Gli emisferi e la corteccia", f:"L10",
    d:"Il <strong>prosencefalo</strong>, la parte più rostrale: sede delle <strong>funzioni mentali superiori</strong>, che contraddistinguono la specie umana.",
    figli:[
    { t:"L'altra terminologia",
      d:"Termini alternativi per le stesse strutture.",
      figli:[
      { t:"Paleoencefalo",
        d:"<strong>Immediatamente sopra</strong> il midollo: <strong>cervelletto</strong> e <strong>romboencefalo</strong>, cioè ponte e bulbo. Detto <strong>cervello primitivo</strong> o <strong>nucleo centrale</strong>: la versione più arcaica dell'encefalo." },
      { t:"Mesencefalo",
        d:"Subito dopo: la terza delle strutture necessarie alle <strong>funzioni vitali</strong> — respiro, ritmo sonno-veglia, omeostasi." },
      { t:"Prosencefalo",
        d:"La parte più <strong>rostrale</strong>: <strong>diencefalo</strong> (talamo e ipotalamo) e <strong>telencefalo</strong>, cioè gli emisferi cerebrali." }
    ]},
    { t:"Gli emisferi cerebrali",
      d:"Danno al cervello la sua forma bombata. Contengono la <strong>corteccia cerebrale</strong>, la struttura filogeneticamente più nuova, ma anche i <strong>gangli della base</strong> e strutture del <strong>sistema limbico</strong>." },
    { t:"I gangli della base",
      d:"«Gangli» qui vuol dire <strong>nuclei</strong>: <strong>sottocorticali</strong>, nel prosencefalo, sotto la porzione anteriore dei ventricoli laterali.",
      figli:[
      { t:"Nucleo caudato", atl:"enc.gangli.caudato" },
      { t:"Putamen", atl:"enc.gangli.putamen" },
      { t:"Globo pallido", atl:"enc.gangli.pallido" },
      { t:"A che cosa servono",
        d:"Il movimento parte dalla corteccia, ma la <strong>regolazione fine</strong> la danno cervelletto e gangli: la <strong>selezione e l'avvio dei movimenti volontari</strong>." },
      { t:"Il circuito dei gangli",
        d:"<strong>Afferenze da tutte le regioni della corteccia</strong>; <strong>efferenze al tronco</strong> — ponte, bulbo, mesencefalo — e, <strong>attraverso il talamo</strong>, alle aree motorie della corteccia frontale." }
    ]},
    { t:"Il sistema limbico",
      d:"Strutture nella parte <strong>mesiale</strong> (mediale) degli emisferi: regolano i comportamenti per i <strong>bisogni motivazionali</strong> e quelli legati alle <strong>emozioni</strong>.",
      figli:[
      { t:"La motivazione e l'ipotalamo",
        d:"La motivazione — la spinta all'azione per soddisfare un bisogno — e parte della regolazione emotiva hanno sede nell'<strong>ipotalamo</strong>." },
      { t:"Il circuito del reward",
        d:"Il circuito della <strong>ricompensa</strong>, responsabile dell'<strong>esperienza soggettiva del piacere</strong>: implicato nei comportamenti di <strong><em>addiction</em></strong>, per questo molto studiato." },
      { t:"Ippocampo", atl:"enc.limbico.ippocampo" },
      { t:"Amigdala", atl:"enc.limbico.amigdala" },
      { t:"Tutto è connesso con tutto",
        d:"Ogni struttura, specie se arcaica, ha un'azione specifica, ma sempre in connessione con tutto il resto." }
    ]},
    { t:"La corteccia cerebrale",
      d:"Un universo: dopo anni di studi non se ne conoscono ancora tutti i misteri.",
      figli:[
      { t:"Dimensioni e circonvoluzioni",
        d:"Confrontando le specie colpiscono le <strong>dimensioni</strong> — quello umano è fra i più grandi — e l'<strong>increspatura</strong>: quasi lisci i mammiferi semplici, molto circonvoluti i primati." },
      { t:"Un espediente evolutivo",
        d:"L'<strong>aspetto circonvoluto</strong> serve a contenere molto tessuto in una scatola cranica di volume piccolo: la corteccia è ripiegata su se stessa." },
      { t:"Il foglio di giornale", es:1,
        d:"Stesa, senza pieghe, sarebbe simile a un grosso foglio di giornale rettangolare." },
      { t:"Le tre funzioni",
        d:"Che cos'è la corteccia.",
        figli:[
        { t:"Stazione finale dell'input",
          d:"Di tutti i processi <strong>sensoriali e percettivi</strong>: ciò che entra dall'ambiente." },
        { t:"Stazione iniziale dell'output",
          d:"Dei processi <strong>motori e comportamentali</strong>: ciò che da noi esce verso l'ambiente." },
        { t:"Le funzioni mentali superiori",
          d:"Intese come <strong>funzioni esecutive</strong>, per risolvere problemi. Ci sono anche nei primati e nei roditori, ma nell'uomo diventano altro: non solo <strong>adattarsi</strong> all'ambiente, ma <strong>manipolarlo</strong>." }
      ]},
      { t:"Non serve a sopravvivere",
        d:"Esistono individui <strong>nati senza corteccia</strong>. Nulla di ciò che fanno è cosciente o volontario, eppure possono vivere normalmente.",
        figli:[
        { t:"Dormono e vegliano", d:"Funzioni regolate a livello sottocorticale." },
        { t:"Reagiscono alla fame", d:"Un bisogno primario, motivazionale." },
        { t:"Reagiscono a rumori e luci", d:"A <strong>forti rumori</strong> e a <strong>stimoli visivi elementari</strong>: hanno dei riflessi." },
        { t:"Muovono occhi e volto", d:"Occhi, palpebre, muscoli facciali: movimenti involontari che <strong>bypassano la corteccia</strong>." },
        { t:"Percepiscono", d:"Vedono, sentono, percepiscono sapori e odori; rifiutano i cibi che non piacciono." },
        { t:"Si esprimono", d:"<strong>Suoni indistinti</strong>, pianto, sorriso; disappunto se hanno fame, piacere se sentono una canzoncina." },
        { t:"Muovono gli arti", d:"Possono compiere spontaneamente <strong>elementari movimenti degli arti</strong>." }
      ]},
      { t:"Solchi, giri, scissure",
        d:"Parti <strong>concave</strong>: <strong>solchi</strong> o <strong>scissure</strong>. Parti <strong>convesse</strong>: <strong>giri</strong>." },
      { t:"Le quattro scissure",
        d:"Le <strong>quattro fenditure principali</strong> per orientarsi.",
        figli:[
        { t:"Longitudinale", d:"Separa i <strong>due emisferi</strong>. Si vede dall'alto." },
        { t:"Centrale, di Rolando", d:"Separa una metà <strong>anteriore</strong> e una <strong>posteriore</strong> dell'emisfero." },
        { t:"Laterale, di Silvio", d:"Separa una metà <strong>superiore</strong> da una <strong>inferiore</strong>." },
        { t:"Parieto-occipitale", d:"Al confine fra parietale e occipitale, dorsale. Queste ultime tre si vedono di lato." }
      ]},
      { t:"I lobi cerebrali",
        d:"Porzioni macroscopiche isolate dalle scissure, con il nome delle <strong>ossa craniche</strong> che le ricoprono.",
        figli:[
        { t:"Lobo frontale", atl:"enc.lobo.frontale" },
        { t:"Lobo parietale", atl:"enc.lobo.parietale" },
        { t:"Lobo temporale", atl:"enc.lobo.temporale" },
        { t:"Lobo occipitale", atl:"enc.lobo.occipitale" },
        { t:"Lobo dell'insula", atl:"enc.lobo.insula" }
      ]},
      { t:"Le aree di Brodmann",
        d:"Anatomico tedesco, inizio Novecento: suddivide la corteccia su base <strong>cito-architettonica</strong>, cioè microscopica. Ogni area una funzione. Più la funzione è semplice, più i neuroni sono <strong>specializzati</strong>; più è complessa, più la specializzazione è <strong>flessibile</strong>." },
      { t:"Le aree primarie",
        d:"La prima tappa: rispondono a stimoli elementari. Due si affacciano sulla scissura di Rolando.",
        figli:[
        { t:"Corteccia motoria primaria", atl:"enc.area.motoria" },
        { t:"Corteccia sensitiva primaria", atl:"enc.area.somato" },
        { t:"Area visiva primaria", atl:"enc.area.visiva" },
        { t:"Area uditiva primaria", atl:"enc.area.uditiva" },
        { t:"Gustativa primaria", d:"Dentro la corteccia sensitiva primaria." },
        { t:"Olfattiva primaria", d:"Nell'<strong>insula</strong>, nell'archicorteccia." }
      ]},
      { t:"Secondarie e terziarie",
        d:"Cortecce di <strong>ordine superiore</strong> che fanno una <strong>sintesi</strong> di quanto elaborato nelle primarie, per i sensi e per il movimento." },
      { t:"La direzione invertita",
        d:"In ingresso: primaria → secondaria → terziaria → associativa. In uscita il contrario: associativa → terziaria → secondaria → primaria." },
      { t:"Le aree associative",
        d:"<strong>Tre quarti</strong> di tutta la corteccia. Non specifiche per un senso né per il movimento: aree di <strong>sintesi</strong>, per azioni finalizzate a uno scopo. I <strong>pilastri delle funzioni cognitive superiori</strong>.",
        figli:[
        { t:"Area di Broca", atl:"enc.area.broca" },
        { t:"Area di Wernicke", atl:"enc.area.wernicke" },
        { t:"Le due afasie",
          d:"Lesioni frontali: afasia di <strong>produzione</strong>, si capisce ma non si fanno discorsi di senso compiuto. Lesioni temporali: l'opposta, si parla bene ma non si comprende." },
        { t:"Parieto-temporo-occipitale", atl:"enc.area.pto" },
        { t:"La penna", es:1,
          d:"Vista, toccata o nominata, è sempre una penna: l'unità di elaborazione la dà l'area parieto-temporo-occipitale." },
        { t:"Associativa limbica", atl:"enc.area.limbica" },
        { t:"Associativa prefrontale", atl:"enc.area.prefrontale" }
      ]},
      { t:"Le vie crociate",
        d:"Gli input arrivano dalla parte <strong>controlaterale</strong>: la maggior parte delle vie ascendenti <strong>decussa</strong>, si incrocia. Anche i comandi motori sono crociati." },
      { t:"L'omuncolo",
        d:"Scoperto dal neurochirurgo <strong>Penfield</strong>: come appare il corpo nella sua rappresentazione corticale.",
        figli:[
        { t:"Sensoriale: la sensibilità",
          d:"Dove la sensibilità è alta — mani, bocca, lingua — ci sono più recettori e ognuno innerva meno pelle: le afferenze <strong>occupano più corteccia</strong>. Bocca e viso enormi, tronco piccolo." },
        { t:"Motorio: la complessità",
          d:"La corteccia dipende dalla <strong>ricchezza e complessità dei movimenti</strong>, non dal <strong>volume</strong> del distretto." },
        { t:"Il dito e la gamba", es:1,
          d:"La gamba è più lunga del dito, ma il dito, che fa movimenti complessi, ha più corteccia." }
      ]},
      { t:"L'organizzazione microscopica",
        d:"I <strong>microcircuiti neuronali</strong>: cose piccolissime e semplici che rendono conto di funzioni complesse.",
        figli:[
        { t:"I neuroni piramidali",
          d:"Grandi, <strong>di proiezione</strong>: portano l'informazione <strong>fuori</strong> dalla corteccia o in altre sue parti. <strong>Eccitatori</strong>, col <strong>glutammato</strong>. Soma a piramide, <strong>dendriti apicali</strong> e <strong>basali</strong> che raccolgono dagli interneuroni." },
        { t:"Gli interneuroni inibitori",
          d:"Per l'<strong>elaborazione interna</strong>; per lo più <strong>inibitori</strong>, col <strong>GABA</strong>: il compito è <strong>smorzare</strong> i piramidali. Cellule <strong>a canestro</strong> e <strong>a candelabro</strong>, dalla forma." },
        { t:"Le cellule stellate",
          d:"O <strong>granulari</strong>: interneuroni, ma <strong>eccitatori</strong>. Su di loro arrivano le <strong>afferenze</strong>, e da loro partono efferenze verso piramidali e interneuroni." }
      ]},
      { t:"I sei strati",
        d:"Dalla superficie, a contatto con la pia madre, al pavimento più ventrale. <strong>Ogni strato media una cosa diversa</strong>.",
        figli:[
        { t:"I · Molecolare", d:"Non ha corpi cellulari." },
        { t:"II · Granulare esterno", d:"Soprattutto <strong>cellule stellate</strong>." },
        { t:"III · Piramidale esterno", d:"Soprattutto neuroni <strong>piramidali</strong>." },
        { t:"IV · Granulare interno", d:"<strong>Cellule granulari</strong>." },
        { t:"V · Piramidale interno", d:"Neuroni <strong>piramidali</strong>." },
        { t:"VI · Multiforme", d:"Nessuna tipologia in particolare." },
        { t:"Esterni e interni",
          d:"Gli strati <strong>più esterni</strong> fanno parlare la corteccia <strong>con altre aree della corteccia</strong>; i <strong>più interni</strong> con <strong>strutture fuori dalla corteccia</strong>." }
      ]},
      { t:"La colonna corticale",
        d:"La corteccia funziona <strong>per moduli</strong>: un cilindretto spesso <strong>un millimetro</strong>, con neuroni dalle <strong>proprietà molto simili</strong>.",
        figli:[
        { t:"Nell'area motoria", d:"Prevale lo <strong>strato V</strong>: i piramidali che mandano efferenze fuori dalla corteccia." },
        { t:"Nella sensitiva", d:"Prevale lo <strong>strato IV</strong>: i granuli, che ricevono le afferenze." },
        { t:"Nelle associative", d:"Prevalgono gli <strong>strati superiori</strong>." }
      ]}
    ]},
    { t:"La lateralizzazione emisferica",
      d:"I due emisferi normalmente <strong>agiscono in concerto</strong>; ma alcune funzioni superiori sono <strong>lateralizzate</strong>, più presenti in uno dei due.",
      figli:[
      { t:"Corpo calloso", atl:"enc.corpocalloso" },
      { t:"Le commissure",
        d:"Gli assoni che uniscono i due emisferi; bianchi perché mielinizzati. La più grossa è il corpo calloso." },
      { t:"L'emisfero sinistro",
        d:"Abilità <strong>verbali e linguistiche</strong>, <strong>logico-matematiche</strong>, <strong>analitiche</strong>; elaborazione <strong>sequenziale</strong>." },
      { t:"L'emisfero destro",
        d:"Abilità <strong>creative</strong>, <strong>immaginative</strong>, <strong>musicali</strong>, elaborazione <strong>spaziale</strong>; approccio <strong>globale</strong>, meno sequenziale; gli <em>insight</em>." },
      { t:"Il punto critico",
        d:"A metà lezione la docente dice l'attribuzione <strong>invertita</strong>, e la corregge nel <strong>riepilogo conclusivo</strong>. Vale il riepilogo: linguaggio a sinistra, spazio a destra." },
      { t:"I pazienti split brain",
        d:"Pazienti con il <strong>corpo calloso resezionato</strong> per curare l'<strong>epilessia</strong>: separati gli emisferi, le crisi diminuivano. Studiati insieme a pazienti con danni a un emisfero." },
      { t:"L'esperimento della spazzola", es:1,
        d:"Una spazzola nell'<strong>emicampo visivo sinistro</strong> arriva all'emisfero destro. Chiesto che cosa ha visto, il paziente <strong>non sa rispondere</strong>; chiesto di prenderla con la mano sinistra da dietro uno schermo, <strong>la prende</strong>." },
      { t:"Che cosa dimostra",
        d:"L'emisfero <strong>destro</strong> è più implicato nell'elaborazione e nel riconoscimento <strong>spaziale</strong>; il <strong>sinistro</strong> nei compiti <strong>linguistici</strong>." }
    ]}
  ]},

  /* ================= L11 · I METODI ================= */
  { t:"Lo studio del cervello", f:"L11",
    d:"Un approfondimento metodologico. Serve a capire perché la conoscenza è cresciuta così in fretta, e a <strong>orientarsi nella letteratura</strong>: che cosa consente ogni metodo, e che cosa no. Metodi sull'uomo e sugli <strong>animali da laboratorio</strong>, fino all'analisi <strong>in vivo</strong> dell'unità mente-cervello.",
    figli:[
    { t:"Le quattro categorie",
      d:"<strong>Lesioni</strong>, <strong>attività elettrica</strong>, <strong>neuroimmagini</strong>, <strong>stimolazione</strong>." },
    { t:"Le tecniche di oggi",
      d:"Si identificano singoli neuroni che contengono certe sostanze; microscopi avanzati vedono gli <strong>ioni</strong> passare nei canali; tecniche genetiche <strong>disattivano</strong> o <strong>inseriscono geni</strong> negli animali." },
    { t:"Lo studio delle lesioni",
      d:"Metodi <strong>eterogenei</strong> per studiare la <strong>correlazione tra struttura e funzione</strong>, in umani e animali.",
      figli:[
      { t:"Il presupposto",
        d:"Per capire il funzionamento <strong>fisiologico</strong> di un processo è più utile capire <strong>quando non funziona</strong>. È la <strong>neuropsicologia cognitiva</strong>." },
      { t:"Le lesioni spontanee",
        d:"Danneggiare il cervello di una persona <strong>non è etico</strong>: nell'uomo si studiano le lesioni che avvengono spontaneamente.",
        figli:[
        { t:"I test neuropsicologici",
          d:"Misurano le funzioni cognitive di chi ha subito un danno: servono alla <strong>clinica</strong>, per la diagnosi, e alla <strong>ricerca</strong>." },
        { t:"Il ragionamento inferenziale",
          d:"Se il comportamento è <strong>inusuale</strong> — rispetto a una <strong>normalità statistica</strong> — e l'<strong>evidenza neurologica è chiara</strong>, la parte lesionata ha a che fare con quel comportamento." },
        { t:"Le cause",
          d:"Oltre ai danni accidentali: <strong>ictus</strong>, <strong>tumori</strong>, <strong>malattie neurodegenerative</strong>, <strong>malattie infettive</strong>." },
        { t:"Broca e Wernicke",
          d:"I pionieri. <strong>Paul Broca</strong>: un paziente che non produceva il linguaggio ma lo comprendeva, con un danno nel <strong>lobo frontale sinistro</strong>. <strong>Karl Wernicke</strong>: un deficit legato al <strong>lobo temporale superiore sinistro</strong>." },
        { t:"Phineas Gage",
          d:"Dà avvio alle ricerche sui <strong>lobi frontali</strong>. Una sbarra di ferro, in un'esplosione, gli attraversa il cranio passando per i lobi frontali; <strong>sopravvive</strong> e vive per anni — la parte rostrale non è essenziale alla sopravvivenza. Perde aree e <strong>connessioni</strong> con aree sottocorticali.",
          figli:[
          { t:"I tre deficit",
            d:"<strong>Regolazione emotiva</strong>, <strong>progettazione dell'azione</strong>, <strong>presa di decisione</strong>: nessuno interferisce con la sopravvivenza." },
          { t:"Il cantiere ferroviario", es:1,
            d:"Era caposquadra in un cantiere ferroviario (Vermont, 1848); la sbarra entrò sotto lo zigomo sinistro e uscì dalla sommità del cranio, danneggiando soprattutto il lobo frontale sinistro." }
        ]}
      ]},
      { t:"Le lesioni terapeutiche",
        d:"A volte le lesioni servono a curare: per i <strong>tumori</strong>, o per l'<strong>epilessia</strong>.",
        figli:[
        { t:"L'epilessia",
          d:"Un'attività elettrica <strong>parossistica anomala</strong>, con <strong>capacità propagatoria</strong>: da una regione <em>trigger</em> si estende ad altre, producendo assenze e crisi." },
        { t:"Le due tecniche chirurgiche",
          d:"Per le epilessie <strong>farmacoresistenti</strong>: l'<strong>asportazione delle regioni trigger</strong>, o la resezione del corpo calloso — la <strong>commissurotomia</strong>, che produce i pazienti <em>split brain</em>." },
        { t:"Il paziente H.M.",
          d:"Asportate le <strong>regioni mediali dei lobi temporali</strong>: quelle regioni sono implicate nella <strong>memoria</strong>. <strong>Non memorizzava stimoli nuovi</strong>, ma <strong>rievocava il passato</strong>." }
      ]},
      { t:"La dissociazione funzionale",
        d:"Nello <strong>stesso paziente</strong>, con un certo danno, <strong>una funzione è preservata e un'altra compromessa</strong>. Un principio metodologico per analizzare la <strong>multicomponenzialità</strong> dei processi: la memoria non è «la memoria».",
        figli:[
        { t:"La dissociazione singola",
          d:"Un paziente, o un gruppo, dà risultati <strong>diversi in due compiti</strong>: il paziente di Broca va male in produzione e bene in comprensione." },
        { t:"Il bias metodologico",
          d:"Non si può escludere che i due compiti abbiano <strong>difficoltà diversa</strong>: uno è andato bene perché più facile. La dissociazione singola non ne esce." },
        { t:"La dissociazione doppia",
          d:"<strong>Due pazienti</strong> alle <strong>stesse due prove</strong>, con dissociazioni <strong>opposte</strong>: Broca male in produzione e bene in comprensione, Wernicke il contrario. Esclude la difficoltà: ognuno fa bene uno dei due compiti, ma non lo stesso." },
        { t:"Che cosa prova",
          d:"È la prova più forte dell'esistenza di <strong>due sistemi anatomici separati</strong> e di <strong>due moduli cognitivi</strong>, compromettibili singolarmente." }
      ]},
      { t:"Le lesioni artificiali",
        d:"Nella <strong>psicologia animale</strong> lo sperimentatore induce lesioni dove serve, e ne studia gli effetti con <strong>compiti comportamentali</strong>.",
        figli:[
        { t:"Le regole etiche",
          d:"Un <strong>comitato etico</strong> valuta il protocollo per il <strong>minor grado di sofferenza</strong>; l'animale è sempre <strong>anestetizzato</strong> e trattato con <strong>analgesici</strong> anche dopo; il metodo va <strong>giustificato</strong> come l'unico possibile — se c'è un'altra via, il ricercatore è obbligato a seguirla." },
        { t:"L'apparato stereotassico",
          d:"Per raggiungere un punto preciso in cervelli piccolissimi: l'animale è fissato e si seguono <strong>coordinate anatomiche</strong> su un <strong>atlante anatomico</strong>, a partire da un punto di riferimento." },
        { t:"Le tecniche di lesione",
          d:"<strong>Asportazione</strong>; <strong>ablazione</strong>, per esempio col calore; <strong>aspirazione</strong>; lesioni <strong>elettrolitiche</strong>; lesioni <strong>tossiche</strong> o <strong>neurochimiche</strong>, che uccidono <strong>selettivamente</strong> una popolazione — per esempio quella di un certo neurotrasmettitore." },
        { t:"I test comportamentali",
          d:"Prestazioni ed <strong>errori</strong> in <strong>labirinti</strong>, anche <strong>acquatici</strong>, con l'animale motivato." },
        { t:"L'analisi post-mortem",
          d:"Per approfondire gli effetti sulle strutture correlate, e per <strong>verificare che la lesione sia corretta</strong>." }
      ]}
    ]},
    { t:"L'attività elettrica",
      d:"I neuroni comunicano soprattutto con l'energia elettrica: l'<strong>elettrofisiologia</strong>.",
      figli:[
      { t:"I microelettrodi",
        d:"Fili minuscoli con un sistema di amplificazione: registrano i <strong>singoli neuroni</strong>, le minime variazioni dei potenziali d'azione." },
      { t:"Hubel e Wiesel", es:1,
        d:"Lo studio classico: i neuroni della <strong>corteccia occipitale</strong> — visiva primaria e secondaria — di gatti che guardano degli stimoli." },
      { t:"L'elettroencefalogramma",
        d:"Con elettrodi <strong>più grandi</strong>, dischi sullo <strong>scalpo</strong> e un <strong>elettroencefalografo</strong>: l'attività delle <strong>popolazioni neuronali</strong>, onde abbastanza regolari. Certi tracciati corrispondono a <strong>stati di coscienza</strong>: le <strong>fasi del sonno</strong>, la veglia; e patologie come l'<strong>epilessia</strong>." },
      { t:"I potenziali evocati",
        d:"O evento-correlati: dentro l'EEG, la <strong>risposta elettrica</strong> a <strong>stimoli specifici</strong> — sensoriali, somatosensitivi, visivi, uditivi, anche <strong>cognitivi</strong>. Mostrano l'<strong>integrità delle vie sensoriali</strong> e le <strong>operazioni cognitive</strong>." }
    ]},
    { t:"Le neuroimmagini",
      d:"Il <em>brain imaging</em> realizza l'obiettivo di sempre: vedere il cervello <strong>in vivo</strong>, sano, mentre si comporta — prima si vedeva solo <strong>post mortem</strong> e tutto era dedotto, senza <strong>simultaneità</strong>.",
      figli:[
      { t:"Strutturale e funzionale",
        d:"L'imaging <strong>strutturale</strong> mostra le strutture; il <strong>funzionale</strong> l'<strong>attività</strong> mentre il soggetto svolge compiti." },
      { t:"La TAC",
        d:"Tomografia assiale computerizzata, o TC: l'evoluzione della <strong>radiografia</strong> bidimensionale. Uno <strong>scanner</strong> ruota attorno alla testa e raccoglie immagini a raggi X da <strong>più angolazioni</strong>, che il computer combina.",
        figli:[
        { t:"La densità",
          d:"Più denso = <strong>bianco</strong> (la teca cranica); densità intermedia = <strong>grigio</strong> (la corteccia); meno denso = <strong>nero</strong> (ventricoli e solchi)." },
        { t:"A che cosa serve",
          d:"A <strong>diagnosticare e localizzare lesioni</strong>, tumori e ictus, che appaiono scuri. Poco sensibile per alcune lesioni, come quelle vascolari." },
        { t:"I limiti",
          d:"<strong>Radiazioni ionizzanti</strong>, nocive a lungo andare; scansione solo <strong>assiale</strong>." }
      ]},
      { t:"La risonanza magnetica",
        d:"RM o MRI. Non raggi X: gli <strong>atomi di idrogeno</strong> in un <strong>campo magnetico</strong>. Chiuso il campo, gli atomi si <strong>riposizionano</strong> emettendo una differenza di potenziale che il computer registra: per questo «risonanza».",
        figli:[
        { t:"I vantaggi sulla TAC",
          d:"<strong>Molto più risoluta</strong>, dettagli un decimo di quelli della TAC; <strong>tutti e tre gli assi</strong>, assiale, longitudinale e coronale; <strong>niente radiazioni</strong>." },
        { t:"Rumore, poi silenzio", es:1,
          d:"Chi ha fatto una risonanza ricorda i rumori, poi il silenzio: è il momento in cui il campo si chiude." }
      ]},
      { t:"La DTI",
        d:"Risonanza con <strong>tensore di diffusione</strong>: mostra benissimo le <strong>connessioni</strong>, cioè la <strong>sostanza bianca</strong>. Serve a mappare il <strong>connettoma</strong>, nello <strong>Human Connectome Project</strong> del NIH." },
      { t:"Il principio dell'imaging funzionale",
        d:"Le aree attive richiedono <strong>più energia</strong>, fornita da un <strong>maggiore afflusso di sangue</strong>: tutte le tecniche funzionali rilevano quell'afflusso." },
      { t:"La PET",
        d:"Tomografia a emissione di positroni: una <strong>sostanza radioattiva innocua</strong> nel sangue, e <strong>sensori</strong> che ne rilevano la concentrazione mentre il soggetto legge o parla; i colori indicano più o meno radioattività." },
      { t:"La fMRI",
        d:"La risonanza magnetica funzionale, <strong>la più usata</strong> nella ricerca: la diversa risposta dell'<strong>emoglobina ossigenata</strong> e <strong>deossigenata</strong> agli impulsi magnetici. L'output è l'«accensione» di aree durante un compito.",
        figli:[
        { t:"I vantaggi sulla PET",
          d:"<strong>Nessuna sostanza radioattiva</strong>; cambiamenti rilevati su <strong>tempi più brevi</strong>, più simultanea, utile per processi rapidi." },
        { t:"Parole e pseudoparole", es:1,
          d:"Compiti tipici: ascoltare parole, leggerle, leggere pseudoparole." },
        { t:"Il resting state",
          d:"La <strong>connettività funzionale a riposo</strong>: l'attività anche senza compiti. Le regioni con attività <strong>altamente correlata</strong> sono considerate <strong>altamente connesse</strong>." },
        { t:"Il default mode network",
          d:"Scoperto col resting state: un circuito <strong>prefrontale</strong> che si attiva <strong>quando non facciamo nulla</strong>. Immaginazione, programmazione, ragionamento, pensiero; nel patologico, la <strong>ruminazione</strong>." }
      ]}
    ]},
    { t:"La stimolazione",
      d:"Si <strong>attivano artificialmente</strong> i neuroni per vederne l'effetto: non una disattivazione, come la lesione, ma un'attivazione.",
      figli:[
      { t:"Elettrica o chimica",
        d:"Impulsi elettrici o sostanze. Lievi scosse in regioni specifiche innescano potenziali d'azione e hanno un effetto di <strong>rinforzo</strong>, di ricompensa, sul comportamento animale." },
      { t:"La TMS",
        d:"Stimolazione magnetica transcranica: ottiene l'<strong>effetto contrario</strong>. Un <strong>manipolo a forma di otto</strong>, un filo avvolto con una corrente elevata, genera un <strong>campo magnetico focalizzato</strong>.",
        figli:[
        { t:"La lesione virtuale",
          d:"Non una lesione vera: il campo <strong>perturba</strong> i <em>pattern</em> elettrici di una popolazione neuronale, e quella funzione viene <strong>compromessa temporaneamente</strong>." },
        { t:"I vantaggi",
          d:"<strong>Versatile</strong>: si studia ex novo o si confermano dati <strong>senza aspettare casi clinici</strong>; su <strong>soggetti sani</strong>; senza effetti collaterali; <strong>non invasiva</strong>." }
      ]}
    ]}
  ]},

  /* ================= L12 · NATURA O CULTURA ================= */
  { t:"Natura o cultura", f:"L12",
    d:"Il grande dilemma delle neuroscienze. Il sistema nervoso agisce perché è <strong>materia organica</strong>, ma non agirebbe senza un'<strong>interazione continua</strong> con l'ambiente — sociale, cognitivo, fisico. Un <strong>doppio contributo</strong>, in <strong>interazione circolare</strong>, rende unico ogni individuo, a livello filogenetico e ontogenetico.",
    figli:[
    { t:"La filogenesi",
      d:"La <strong>storia evolutiva della specie</strong>: milioni di anni dietro ciò che ereditiamo.",
      figli:[
      { t:"Charles Darwin",
        d:"Il padre della teoria evolutiva, a metà dell'Ottocento, con studi metodologicamente rigorosi fatti in viaggio." },
      { t:"L'evoluzione",
        d:"Un <strong>cambiamento progressivo</strong>, molto lento, <strong>nella frequenza</strong> con cui certe caratteristiche si manifestano <strong>in una popolazione</strong>. Vale per le caratteristiche biologiche e per quelle psicologiche." },
      { t:"La selezione naturale",
        d:"L'<strong>adattamento</strong> all'ambiente permette ad alcuni di <strong>riprodursi con maggiore successo</strong>: i loro caratteri diventano più comuni, gli altri più rari, fino a estinguersi." },
      { t:"I fringuelli delle Galápagos", es:1,
        d:"Nelle isole vulcaniche un'enorme varietà di fringuelli, da un antenato comune: becchi grossi, sottili, morbidi, secondo che l'isola offrisse insetti, cactus, bacche o semi." },
      { t:"La variabilità genetica",
        d:"Il presupposto: devono esistere <strong>differenze</strong> nell'espressione dei caratteri. Possono venire anche da <strong>mutazioni casuali</strong>, utili in un ambiente e non in un altro." },
      { t:"L'adattamento",
        d:"L'affermarsi di caratteristiche fisiche o <strong>comportamentali</strong> che permettono di affrontare le <strong>sfide ambientali ricorrenti</strong>, accrescendo la capacità riproduttiva." },
      { t:"Darwin, non Lamarck",
        d:"Le giraffe: nella savana sopravvivevano meglio <strong>quelle che già avevano il collo più lungo</strong>, e il carattere si è trasmesso fino ad allungare le <strong>vertebre cervicali</strong> — che restano sette, come in tutti i mammiferi: si sono allungate, non moltiplicate. La versione di Lamarck — allungavano il collo e trasmettevano il carattere acquisito — è l'errore da non fare: in Darwin la variazione <strong>preesiste</strong> e l'ambiente <strong>seleziona</strong>." }
    ]},
    { t:"L'evoluzione del sistema nervoso",
      d:"Da un sistema <strong>elementare e rudimentale</strong> fino a quello umano.",
      figli:[
      { t:"Dagli unicellulari ai platelminti",
        d:"Alcuni <strong>unicellulari</strong> avevano già componenti sensoriali e motorie; nei <strong>platelminti</strong>, vermi con un abbozzo di testa, un abbozzo di sistema nervoso centrale gerarchico." },
      { t:"I vertebrati",
        d:"La grande distinzione è la <strong>colonna vertebrale</strong>. In tutti i vertebrati il centrale è <strong>gerarchico</strong>: livelli inferiori e midollo per funzioni semplici, livelli superiori per le complesse." },
      { t:"Estensioni successive",
        d:"Il cervello umano è una serie di <strong>estensioni successive</strong>. Il <strong>prosencefalo</strong> ha subito i cambiamenti che hanno permesso le funzioni mentali superiori." },
      { t:"Le tre forme di adattamento",
        d:"Da un progenitore comune, un primate, la selezione ha favorito tre adattamenti.",
        figli:[
        { t:"1 · Il bipedismo",
          d:"Dalle quattro zampe alla stazione eretta: da qui la <strong>deflessione</strong>. Si esplorano nuovi ambienti, si cerca cibo <strong>per terra</strong>, gli arti superiori si liberano per creare <strong>utensili</strong>: la prima <strong>azione sull'ambiente</strong>." },
        { t:"2 · L'encefalizzazione",
          d:"L'<strong>incremento della dimensione del cervello</strong>: quello dell'<em>Homo sapiens</em> è <strong>triplo</strong> di quello dell'<em>Homo erectus</em>." },
        { t:"Grande non vuol dire intelligente",
          d:"Dall'<em>erectus</em> due linee: il <em>sapiens</em> e il <strong>Neanderthal</strong>, con un cervello di dimensioni simili, che non sviluppò le funzioni superiori e si estinse." },
        { t:"3 · Il linguaggio",
          d:"Forse la vera differenza col Neanderthal: essenziale per le funzioni superiori. Da qui si parla di <strong>evoluzione culturale</strong>." },
        { t:"Mascella e cervello", es:1,
          d:"Negli schemi evolutivi colpiscono la mascella e la mandibola, e soprattutto il cervello più grosso e più circonvoluto del <em>sapiens</em>." }
      ]}
    ]},
    { t:"La genetica",
      d:"Studia la <strong>trasmissione dei caratteri biologici dai genitori ai figli</strong>: gli elementi su cui l'evoluzione ha agito.",
      figli:[
      { t:"Mendel",
        d:"Monaco botanico, metà Ottocento: esperimenti ordinatissimi sulla <strong>pianta di pisello</strong>. Da una generazione all'altra passano <strong>fattori organici</strong>, alcuni <strong>visibili</strong>, altri <strong>latenti</strong>, che ricompaiono dopo." },
      { t:"Genotipo e fenotipo",
        d:"Distinti all'inizio del Novecento.",
        figli:[
        { t:"Il genotipo", d:"Il <strong>corredo genetico</strong>, l'insieme dei geni nel DNA del nucleo: presente <strong>sin dal concepimento</strong>." },
        { t:"Il fenotipo", d:"I <strong>caratteri manifesti</strong>: determinato dal genotipo e dalla sua <strong>interazione con l'ambiente</strong>." },
        { t:"Genotipo + ambiente = fenotipo", d:"La formula da tenere." }
      ]},
      { t:"I geni",
        d:"Le <strong>unità biologiche dell'ereditarietà</strong>: un <strong>codice</strong> che ordina la sequenza di <strong>amminoacidi</strong> delle proteine. Segmenti di una doppia elica di DNA: <strong>ogni gene codifica una proteina specifica</strong>." },
      { t:"Il DNA",
        d:"Un <strong>polimero</strong> di monomeri detti <strong>nucleotidi</strong>.",
        figli:[
        { t:"Il nucleotide",
          d:"Tre componenti: un <strong>gruppo fosfato</strong>, uno <strong>zucchero</strong> — il <strong>desossiribosio</strong> — e una <strong>base azotata</strong>." },
        { t:"Le quattro basi", d:"<strong>Adenina, timina, citosina, guanina</strong>." },
        { t:"Il codone",
          d:"<strong>Tre nucleotidi</strong> che codificano <strong>un amminoacido</strong>. I codoni sono più degli amminoacidi: più codoni possono codificare lo stesso." },
        { t:"L'RNA intermediario",
          d:"La sintesi passa per la <strong>trascrizione</strong> a opera dell'<strong>RNA</strong>, acido ribonucleico." }
      ]},
      { t:"I cromosomi",
        d:"Pacchetti di materiale genetico con più geni; gli stessi in tutti i nuclei." },
      { t:"Il cariotipo umano",
        d:"<strong>23 coppie</strong> di cromosomi.",
        figli:[
        { t:"22 coppie di autosomi", d:"Con DNA <strong>corrispondente</strong>: una <strong>doppia copia</strong> di ogni gene." },
        { t:"1 coppia sessuale", d:"<strong>XX</strong> nelle femmine, <strong>XY</strong> nei maschi: geni non interamente corrispondenti." },
        { t:"Gameti e zigote",
          d:"Ovocita e spermatozoi nascono per <strong>meiosi</strong>, con corredo <strong>dimezzato</strong>, <strong>aploide</strong>; la <strong>fecondazione</strong> forma lo <strong>zigote</strong>, con un cromosoma di ogni coppia dalla madre e uno dal padre." }
      ]},
      { t:"Gli alleli",
        d:"Le <strong>due forme alternative</strong> di un gene negli autosomi, che danno caratteristiche diverse dello stesso tratto.",
        figli:[
        { t:"Dominante",
          d:"Si manifesta in <strong>omozigosi</strong> (BB) e in <strong>eterozigosi</strong> (Bb). Lettera maiuscola." },
        { t:"Recessivo",
          d:"Si manifesta <strong>solo in omozigosi</strong> (bb). È il fattore latente di Mendel." },
        { t:"Lobo dell'orecchio e capelli", es:1,
          d:"Il lobo staccato è dominante sul lobo attaccato; i capelli chiari recessivi rispetto agli scuri." }
      ]},
      { t:"I caratteri poligenici",
        d:"Per la <strong>maggior parte</strong> dei caratteri decide una <strong>combinazione di più geni</strong>: la <strong>trasmissione poligenica</strong>, che spiega la grande <strong>variabilità interindividuale</strong>." },
      { t:"Il colore degli occhi", es:1,
        d:"Si semplifica con «chiari recessivi, scuri dominanti», ma è poligenico: dagli incroci nascono tantissime sfumature." },
      { t:"Emofilia e fibrosi cistica", es:1,
        d:"Due fenotipi patologici recessivi. L'emofilia è <strong>legata all'X</strong>: si trasmette diversamente se il portatore è maschio o femmina. La fibrosi cistica è <strong>autosomica recessiva</strong>: si manifesta se entrambi i genitori sono portatori." },
      { t:"Lo Human Genome Project",
        d:"Del NIH, avviato nel <strong>1990</strong>; dal <strong>2003</strong> la mappatura completa: circa <strong>25 000 geni</strong>, molti meno del previsto. Possibile grazie all'<strong>ingegneria genetica</strong>; utile per le patologie genetiche anche rare.",
        figli:[
        { t:"Le etnie al 99,9%", d:"Le differenze genetiche fra etnie umane sono <strong>irrisorie</strong>." },
        { t:"L'uomo e il topo al 99%",
          d:"Genoma e cervello: per questo si usano i roditori. Circa l'<strong>80%</strong> dei geni si attiva in qualche punto del cervello." },
        { t:"L'atlante genetico del cervello", es:1, d:"Oggi consultabile online." }
      ]}
    ]},
    { t:"La genetica del comportamento",
      d:"Una branca della genetica e delle neuroscienze: <strong>come ereditarietà e fattori ambientali influenzano le caratteristiche psicologiche</strong>. Quanto contano i geni nell'<strong>aggressività</strong>, nell'<strong>intelligenza</strong>, nella <strong>personalità</strong>, nei <strong>disturbi psicologici</strong>?",
      figli:[
      { t:"La concordanza",
        d:"La <strong>compresenza di una caratteristica in persone diverse</strong>. Se è più alta fra stretti familiari — specie cresciuti in ambienti diversi — pesa soprattutto la genetica." },
      { t:"Gli studi di famiglia",
        d:"I membri di una famiglia condividono a vari livelli il patrimonio genetico." },
      { t:"Gli studi sulle adozioni",
        d:"Adottati nella primissima infanzia confrontati con i genitori <strong>biologici</strong> (stessi geni, non l'ambiente) e <strong>adottivi</strong> (stesso ambiente, non i geni). Se somigliano ai biologici, <strong>prevalgono i geni</strong>." },
      { t:"La schizofrenia", es:1, d:"Uno dei campi in cui gli studi sulle adozioni hanno dato contributi importanti." },
      { t:"Gli studi sui gemelli",
        d:"Confronto fra gemelli omozigoti ed eterozigoti.",
        figli:[
        { t:"Omozigoti", d:"Monozigoti: <strong>uno zigote che si divide</strong>, quindi lo <strong>stesso identico patrimonio</strong>, con gli stessi alleli." },
        { t:"Eterozigoti", d:"Dizigoti, biovulari: <strong>due fecondazioni</strong>, due zigoti; geneticamente come <strong>fratelli normali</strong>." },
        { t:"Come si legge",
          d:"Se gli omozigoti sono <strong>più simili</strong> fra loro degli eterozigoti, la caratteristica dipende probabilmente da un fattore genetico." },
        { t:"L'obiezione e la risposta",
          d:"Gli omozigoti potrebbero condividere anche un ambiente <strong>più simile</strong>. Si studiano allora gemelli <strong>separati nei primissimi mesi</strong> e allevati in ambienti diversi: l'ambiente condiviso è eliminato." }
      ]},
      { t:"Il coefficiente di ereditabilità",
        d:"Una stima statistica di quanto la <strong>varianza</strong> di una caratteristica, <strong>in un gruppo</strong>, sia attribuibile a <strong>differenze genetiche</strong>.",
        figli:[
        { t:"La distribuzione",
          d:"In una distribuzione <strong>normale</strong>, <strong>gaussiana</strong>, i più stanno attorno al <strong>valore medio</strong>; la variabilità importante è nelle <strong>code</strong>." },
        { t:"Da 0 a 1",
          d:"<strong>Vicino a 0</strong>: poca della variabilità è genetica. <strong>Vicino a 1</strong>: la maggior parte lo è." },
        { t:"La religione", es:1,
          d:"Gli atteggiamenti verso la religione hanno ereditabilità praticamente zero: tutto culturale." },
        { t:"Non riguarda il singolo",
          d:"Dice quanta parte della variabilità <strong>fra individui</strong> è genetica, <strong>non</strong> quanto di una caratteristica, <strong>in una persona</strong>, sia «dovuto ai geni»." }
      ]}
    ]},
    { t:"La genetica sperimentale",
      d:"Manipolare l'espressione genica per studiarne l'influenza su tratti psicologici e comportamentali.",
      figli:[
      { t:"La selezione artificiale",
        d:"Un <strong>accoppiamento selettivo</strong>: lo stesso meccanismo della selezione naturale, ma i caratteri li <strong>sceglie l'uomo</strong>." },
      { t:"L'esperimento di Tryon", es:1,
        d:"1940: ratti che apprendono un labirinto per prove ed errori, alcuni con più errori e alcuni con meno. Incrociati fra loro gli estremi, nelle generazioni emergono differenze di apprendimento che all'inizio non c'erano." },
      { t:"Gli animali transgenici",
        d:"Geneticamente modificati, con cellule dal <strong>DNA modificato</strong>.",
        figli:[
        { t:"Knock-out", d:"Si <strong>inattivano</strong> dei geni." },
        { t:"Knock-in", d:"Si <strong>inseriscono</strong> nuovi geni." },
        { t:"La procedura",
          d:"DNA modificato <em>in vitro</em>, iniettato in una femmina di roditore dal corredo <strong>ibrido</strong>; si selezionano nelle generazioni gli animali che esprimono il gene in <strong>omozigosi</strong>, e se ne studia il comportamento." }
      ]}
    ]}
  ]},

  /* ================= L13 · GENI E AMBIENTE ================= */
  { t:"Geni, ambiente e plasticità", f:"L13",
    d:"Componente biologica — il <strong>genoma</strong>, frutto dell'evoluzione — e <strong>mezzo ambientale</strong> non agiscono in modo indipendente. L'influenza va in <strong>due direzioni</strong>.",
    figli:[
    { t:"Le due direzioni",
      d:"L'ambiente influenza il fenotipo; e i geni influenzano come l'individuo <strong>sperimenterà</strong> l'ambiente e vi <strong>reagirà</strong>.",
      figli:[
      { t:"A · Il range di reazione",
        d:"Un <strong>intervallo di possibilità</strong>, fra un limite <strong>superiore</strong> e uno <strong>inferiore</strong>, consentito dal codice genetico per una caratteristica genetica. Spiega perché gemelli con lo stesso patrimonio possono avere QI diversi.",
        figli:[
        { t:"Chi decide dove",
          d:"L'<strong>esposizione a diversi ambienti</strong> e il <strong>tipo di interazione</strong> con essi decidono dove, dentro il range, ci si colloca." },
        { t:"Il grafico del QI", es:1,
          d:"Ambiente deprivato, medio, ricco in ascissa; QI in ordinata. B e H: stesso range, ambienti opposti. C ha un range più alto di I, ma I, in un ambiente stimolante, supera C. G, con range alto e ambiente ricco, non esprime le sue potenzialità." }
      ]},
      { t:"B · I geni sull'ambiente",
        d:"Fattori genetici condizionano il <strong>modo</strong> in cui si sfruttano le potenzialità ambientali, per <strong>tre vie</strong>: l'<strong>ambiente familiare</strong>, le <strong>risposte degli altri</strong>, la <strong>selezione di ambienti compatibili</strong>.",
        figli:[
        { t:"L'influenza evocativa",
          d:"Un tratto di personalità di origine genetica <strong>evoca</strong> negli altri una modalità di interazione <strong>complementare</strong>." },
        { t:"Introverso ed estroverso", es:1,
          d:"Il bambino chiuso non stimola accudimento e interazione; quello estroverso, o con più contatto fisico, ne evoca di più." },
        { t:"La selezione degli ambienti", es:1,
          d:"Un bambino vivace e iperattivo viene iscritto a molte attività, anche per tenerlo occupato, e riceve più stimolazioni di uno più riflessivo che resta a casa." }
      ]},
      { t:"Una sinergia multifattoriale",
        d:"Tutto questo spiega un'interazione <strong>multifattoriale</strong>, non additiva." }
    ]},
    { t:"L'epigenetica",
      d:"Una branca della genetica in rapidissima espansione, negli ultimi vent'anni: studia le <strong>influenze ambientali</strong> che determinano l'<strong>espressione</strong> o la <strong>non-espressione</strong> di un gene — e il suo <strong>grado</strong> — <strong>senza alterarne la struttura</strong>.",
      figli:[
      { t:"I due insiemi",
        d:"Dentro la regolazione <strong>genetica</strong>, le istruzioni del DNA; fuori la regolazione <strong>epigenetica</strong>, che modula l'attività dei geni secondo l'ambiente." },
      { t:"A quali domande risponde",
        d:"Perché <strong>due gemelli monozigoti</strong> sviluppano <strong>malattie diverse</strong>? Perché insorgono depressione, tumori, malattie neurodegenerative <strong>senza mutazioni</strong> che le giustifichino?" },
      { t:"La mutazione genetica",
        d:"Alla formazione dello zigote, per un errore di replicazione o un'aneuploidia: <strong>cambia una base azotata</strong>, cioè la sequenza. Perdita o alterazione della funzione; <strong>ereditaria</strong> e <strong>irreversibile</strong>." },
      { t:"La modificazione epigenetica",
        d:"<strong>A corredo</strong> del patrimonio genetico: <strong>non altera la sequenza</strong>, la base resta identica, ne modifica la <strong>struttura di regolazione</strong>. <strong>Ereditaria</strong> anch'essa, ma <strong>reversibile</strong>." },
      { t:"I segni epigenetici",
        d:"<strong>Modificazioni chimiche del DNA</strong> che attivano o disattivano i geni: attivato, la proteina si esprime; disattivato, non verrà mai codificata.",
        figli:[
        { t:"La metilazione del DNA", d:"Un <strong>gruppo metilico</strong> aggiunto alle basi: <strong>disattiva</strong> il gene." },
        { t:"La modificazione degli istoni",
          d:"Sulle <strong>proteine che impacchettano</strong> la doppia elica: <strong>attiva o disattiva</strong>, secondo la modificazione." },
        { t:"RNA non codificanti e cromatina", d:"Un terzo meccanismo: gli <strong>RNA non codificanti</strong>, con il <strong>rimodellamento della cromatina</strong>." }
      ]},
      { t:"Perché conta per la psicologia",
        d:"I meccanismi epigenetici sono al centro della <strong>neuroplasticità</strong>, per tutta la vita: <strong>neurosviluppo</strong>; plasticità sinaptica per <strong>apprendimento</strong> e <strong>memoria</strong>; <strong>rigenerazione dopo un trauma</strong>; <strong>invecchiamento</strong>; patologie come malattie degenerative, <strong>ictus, ischemie, tumori</strong>. Ogni danno al tessuto innesca meccanismi epigenetici, che dipendono dall'<strong>ambiente</strong>." }
    ]},
    { t:"La plasticità cerebrale",
      d:"La <strong>capacità esclusiva del cervello di modificarsi continuamente</strong>, dalla <strong>gestazione</strong> alla <strong>morte</strong>: un continuo <strong>processo di adattamento</strong>, in struttura e funzione.",
      figli:[
      { t:"I temi di ricerca",
        d:"Gli effetti delle <strong>esperienze molto precoci</strong>; come la plasticità <strong>potenzia le abilità</strong>; come contribuisce alla <strong>prevenzione e al recupero</strong> nelle malattie psicologiche e neurologiche." },
      { t:"Cajal e Sherrington",
        d:"<strong>Cajal</strong>: l'apprendimento richiede la <strong>formazione di nuove connessioni</strong>. <strong>Sherrington</strong> le chiamò <strong>sinapsi</strong>. Aumentano numero ed efficienza delle vie: il <strong>substrato</strong> delle attività cognitive." },
      { t:"State ascoltando una lezione", es:1,
        d:"Mentre si segue una lezione, il cervello sta già modificando i suoi circuiti." },
      { t:"Come si studia",
        d:"<strong>Psicologia comparata</strong>, con genetica e biologia molecolare, istologia, neurochimica, elettrofisiologia, studi del comportamento; e <strong>neuroimaging</strong> strutturale e funzionale." },
      { t:"I cinque livelli",
        d:"Dove si vedono gli effetti.",
        figli:[
        { t:"1 · Epigenetico", d:"Metilazione, rimodellamento della cromatina, RNA non codificanti." },
        { t:"2 · Molecolare", d:"Molecole come le <strong>neurotrofine</strong>." },
        { t:"3 · Morfologico",
          d:"L'<strong>estensione dei dendriti</strong> (più estesi, più plastici); il <strong>numero di spine</strong>; la <strong>neurogenesi</strong>, soprattutto nell'<strong>ippocampo</strong>." },
        { t:"4 · Funzionale", d:"Elettrofisiologico: l'attivazione di strutture e <em>network</em>." },
        { t:"5 · Comportamentale", d:"Il più visibile: le <strong>performance</strong> di apprendimento, memoria, funzioni superiori." }
      ]},
      { t:"La neurogenesi",
        d:"I neuroni <strong>non si rigenerano</strong>, ma cambiano circuitazione. Di recente si è scoperto che <strong>nuovi neuroni nascono</strong>, non solo da piccoli: <strong>anche in età adulta, fino all'età senile</strong>." }
    ]},
    { t:"La plasticità nell'arco di vita",
      d:"Presente già in utero, <strong>massima dopo la nascita</strong>, continua fino all'età senile.",
      figli:[
      { t:"La fase prenatale",
        d:"La <strong>programmazione fetale</strong>: formare i tessuti nervosi.",
        figli:[
        { t:"Canalizzata, ma epigenetica",
          d:"Modificazioni <strong>canalizzate</strong>, predisposte geneticamente; ma già epigenetiche, perché avvengono <strong>a patto che l'organismo materno apporti la stabilità necessaria</strong>: le <strong>condizioni intrauterine</strong> sono fondamentali." },
        { t:"La sindrome feto-alcolica",
          d:"<strong>Dosi elevate di alcol</strong> in gravidanza possono compromettere lo sviluppo del cervello con <strong>danni permanenti</strong>." },
        { t:"I fenomeni biologici",
          d:"<strong>Mitosi, proliferazione, migrazione, differenziazione</strong> — neurogenesi e gliogenesi dalle staminali — <strong>apoptosi</strong>, la perdita programmata dei neuroni non necessari, e <strong>riorganizzazione</strong>." },
        { t:"Alla nascita",
          d:"Il centrale ha <strong>quasi ultimato</strong> le componenti di base, ma è <strong>immaturo</strong>: le funzioni cognitive maturano dopo." }
      ]},
      { t:"La fase postnatale",
        d:"Reti sinaptiche e zone di corteccia <strong>estremamente sensibili agli stimoli sensoriali</strong>, soprattutto nei <strong>periodi critici</strong>.",
        figli:[
        { t:"I periodi critici",
          d:"Le informazioni genetiche <strong>esigono una stimolazione ambientale per potersi esprimere</strong>: qui entrano i meccanismi epigenetici. Vale per la <strong>lateralizzazione emisferica</strong> e per le <strong>colonne di dominanza oculare</strong>." },
        { t:"Il linguaggio", es:1,
          d:"L'esempio più eclatante: senza esposizione ai suoni il bambino non imparerà mai a parlare, anche se la funzione è geneticamente predeterminata." },
        { t:"I neonati prematuri", es:1,
          d:"Accarezzati e massaggiati regolarmente, hanno uno sviluppo neurologico più rapido ed efficace." }
      ]},
      { t:"I fattori neurotrofici",
        d:"Le <strong>neurotrofine</strong>: molecole che <strong>modulano la plasticità</strong>, dalla formazione del sistema nervoso alle modificazioni di tutta la vita.",
        figli:[
        { t:"BDNF e NGF",
          d:"I più studiati. L'<strong>NGF</strong>, fattore di crescita nervoso, fu scoperto da <strong>Rita Levi-Montalcini</strong>, premio Nobel." },
        { t:"A che cosa servono",
          d:"<strong>Proliferazione</strong> e <strong>maturazione</strong>, <strong>mantenimento</strong> e <strong>sopravvivenza</strong> dei neuroni." },
        { t:"E l'ambiente",
          d:"In un ambiente appropriato <strong>supportano</strong> la plasticità; con fattori negativi <strong>diminuiscono</strong>, e con loro la capacità plastica." }
      ]},
      { t:"La fase adulta",
        d:"La più sorprendente: si possono stimolare fenomeni plastici <strong>per tutta la vita</strong>.",
        figli:[
        { t:"Nuovi network",
          d:"L'esito: <strong>nuovi <em>network</em> neuronali</strong>, in <strong>aree specifiche</strong> per funzioni semplici o <strong>estesi</strong> per funzioni complesse." },
        { t:"Un cervello flessibile",
          d:"Capace di <strong>cambiare all'occorrenza</strong>: formare circuiti, modificarne, <strong>eliminare</strong> quelli non più funzionali." },
        { t:"L'arto fantasma", es:1,
          d:"Perso un arto, il cervello non sa che manca e continua a percepirlo; poi quei circuiti vengono eliminati e l'area è ricoperta da altre connessioni." }
      ]},
      { t:"La regola generale",
        d:"<strong>Tutti i meccanismi neuroplastici sono fortemente potenziati da un ambiente stimolante e fortemente depotenziati da un ambiente deprivato.</strong>" }
    ]},
    { t:"La stimolazione ambientale",
      d:"Come l'ambiente agisce sulla plasticità.",
      figli:[
      { t:"Gli studi sui musicisti", es:1,
        d:"Violinisti e violoncellisti: rappresentazione più estesa della mano sinistra nell'emisfero destro, tanto più quanto prima hanno cominciato; nei pianisti bilaterale. E l'esercizio musicale migliora tutte le prestazioni cognitive." },
      { t:"L'esercizio fisico", es:1,
        d:"Soprattutto <strong>aerobico</strong>: cambiamenti strutturali e miglioramenti delle abilità cognitive, mnesiche ed esecutive." },
      { t:"L'arricchimento ambientale",
        d:"Il modello animale di <strong>Rosenzweig</strong>: una <strong>combinazione di una complessa stimolazione inanimata e sociale</strong>, molto più ricca delle <strong>condizioni standard</strong> di laboratorio.",
        figli:[
        { t:"Le quattro variabili",
          d:"<strong>Esercizio fisico</strong> (gabbie grandi, ruote); <strong>attività cognitiva</strong> (giochi nuovi ogni giorno); <strong>attività esplorativa</strong> (cibo e acqua spostati); <strong>interazioni sociali</strong> (gruppi molto ampi)." },
        { t:"L'effetto sinergico",
          d:"La stimolazione complessa dà un aumento di plasticità <strong>non paragonabile</strong> a quello di <strong>un fattore per volta</strong>." },
        { t:"Che cosa aumenta",
          d:"<strong>Neurogenesi</strong>, <strong>numero di sinapsi</strong>, <strong>neurotrofine</strong>, rispetto allo standard e alla <strong>deprivazione</strong>. Morfologia: <strong>nodi dendritici</strong>, <strong>branche dendritiche</strong>, <strong>spine</strong>. Comportamento: <strong>performance cognitive</strong>." },
        { t:"In condizioni patologiche",
          d:"Un <strong>modello di Alzheimer</strong>: degenerati i <strong>neuroni colinergici del prosencefalo basale</strong>, gli animali arricchiti <strong>mitigano i deficit</strong> a parità di danno, e l'arricchimento <strong>tampona</strong> l'effetto della lesione." }
      ]},
      { t:"Gli altri fattori",
        d:"La <strong>dieta</strong> e gli antiossidanti sul <strong>microbioma intestinale</strong>, i <strong>farmaci</strong>, lo <strong>stato psicologico</strong>, lo <strong>stress</strong>, il <strong>fumo</strong>: agiscono <strong>sinergicamente</strong>." },
      { t:"Il cervello impara a reagire",
        d:"Non è mai troppo tardi per uno stile di vita ricco e stimolante." }
    ]},
    { t:"La riserva",
      d:"La capacità di <strong>sviluppare risorse che riducono il rischio di compromissioni cognitive</strong>: chi ne ha molta <strong>sostiene più danno</strong> prima della soglia dei deficit clinici. È la <strong>resilienza cerebrale</strong>.",
      figli:[
      { t:"Le evidenze sull'uomo",
        d:"A parità di danno neurologico, prestazioni diverse, spiegate dallo <strong>stile di vita</strong>: chi è vissuto in ambienti stimolanti ha deficit <strong>minori</strong>." },
      { t:"La riserva cerebrale",
        d:"<strong>Strutturale e passiva</strong>: il potenziale protettivo delle caratteristiche <strong>anatomiche</strong> — volume, densità neuronale, connettività. Passiva perché misura <strong>quanto danno si sostiene</strong> prima dei sintomi." },
      { t:"La riserva cognitiva",
        d:"<strong>Funzionale e attiva</strong>: l'<strong>efficienza dei circuiti</strong>, che cresce con l'<strong>uso ripetuto</strong> — processamento più efficace, più ritenzione, migliore soluzione dei problemi. Attiva perché il cervello affronta il danno in modo <strong>dinamico</strong>, con circuiti esistenti o nuovi." }
    ]},
    { t:"La trasmissione alle generazioni",
      d:"Gli effetti dell'arricchimento <strong>si trasmettono alle generazioni successive</strong>: i meccanismi epigenetici sono <strong>ereditabili anche se reversibili</strong>.",
      figli:[
      { t:"Le madri arricchite",
        d:"Aumentano i comportamenti <strong>diretti ai piccoli</strong> — leccarli, ripulirli, toccarli — rispetto a quelli non diretti." },
      { t:"I piccoli",
        d:"Più <strong>neurogenesi ippocampale</strong> e più <strong>neurotrofine</strong> già <strong>alla nascita</strong>, prima di ogni interazione; sviluppo motorio e spaziale <strong>più veloce</strong>, abilità mnesiche e spaziali migliori." },
      { t:"Le ratte madri", es:1,
        d:"Un gruppo in arricchimento e uno standard; si misurano i comportamenti diretti e non diretti ai piccoli — mangiare, esplorare — e i parametri dei piccoli." }
    ]}
  ]}
]}});
