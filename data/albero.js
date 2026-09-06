/* ALBERO DI STUDIO — ripasso per scrittura attiva.

   Ogni macro-argomento è scomposto in sotto-argomenti, fino a foglie che
   pongono una DOMANDA. La risposta non è scritta qui: la scrive lo studente
   nella casella, poi la esporta per la correzione. Il voto (1-100) e la nota
   della correzione tornano in `voti` e restano visibili sull'albero, così si
   vede a colpo d'occhio dove ristudiare.

   Due tipi di nodo:
     { id, titolo, figli:[...] }                   ramo
     { id, titolo, domanda, fonte:{cap,scheda,arg} } foglia
     { id, titolo, daScheda:"S203" }               ramo generato a runtime
                                                    dai blocchi della scheda

   `deve` è la traccia degli elementi attesi usata per la correzione.
   Non viene mostrata sul sito.

   `voti` — scritto da Claude dopo ogni correzione, chiave = id della foglia:
     "S203:oggetto": { p:72, d:"2026-09-06", n:"che cosa mancava",
                       storico:[ { d:"2026-09-04", p:45 } ] }                */
var PGE = window.PGE = window.PGE || {};

PGE.albero = {
  intro: "Ogni argomento è scomposto fino alle domande di base. La risposta la scrivi tu, a memoria, come la diresti all'orale; poi la esporti e la passi in chat per la correzione. Il voto da 1 a 100 torna qui e resta sull'albero: quello che è sotto soglia si ristudia e si riscrive.",

  rami: [

    /* ===================== 1. LA DEFINIZIONE ===================== */
    { id:"def", titolo:"La definizione di psicologia", occhiello:"Dall'etimologia alla definizione attuale, e perché è arrivata tardi",
      figli:[
        { id:"def:etim", titolo:"L'etimologia",
          domanda:"Da dove viene la parola «psicologia» e che cosa significa alla lettera? Perché va liquidata in una frase?",
          deve:["psyché = anima","lógos = discorso","«discorso sull'anima» = scienza della mente","l'oggetto originario (l'anima) non si lascia misurare: da qui il problema"],
          fonte:{cap:"C01",scheda:"S101",arg:"D01"} },

        { id:"def:gen", titolo:"La definizione generale",
          domanda:"Enuncia la definizione generale di psicologia e spiega perché il docente la dichiara volutamente vaga.",
          deve:["studio scientifico della mente e del comportamento","è generale, non si usa all'esame","non dice il rapporto con l'ambiente né chi è il soggetto"],
          fonte:{cap:"C01",scheda:"S101",arg:"D01"} },

        { id:"def:termini", titolo:"I due termini: mente e comportamento",
          figli:[
            { id:"def:termini:mente", titolo:"La mente",
              domanda:"Che cos'è la mente, dove si colloca, come vi si accede e che cosa produce?",
              deve:["esperienza interiore personale: percezioni, pensieri, ricordi, sentimenti","all'interno del soggetto","accesso solo soggettivo: nessuno vede il pensiero di un altro","produce un flusso di coscienza: ciò di cui siamo consapevoli nel qui e ora"],
              fonte:{cap:"C01",scheda:"S101",arg:"D01"} },
            { id:"def:termini:comp", titolo:"Il comportamento",
              domanda:"Che cos'è il comportamento, dove si colloca, come vi si accede? Perché la definizione dice «e degli animali non umani»?",
              deve:["le azioni degli esseri umani e degli animali non umani nell'ambiente","all'esterno, nell'ambiente","direttamente osservabile da chiunque","mai dire «dell'uomo»: la psicologia comparata è metodo elettivo (Pavlov, Thorndike, Köhler, Watson, Skinner)"],
              fonte:{cap:"C01",scheda:"S101",arg:"D01"} }
          ] },

        { id:"def:att", titolo:"La definizione attuale",
          figli:[
            { id:"def:att:testo", titolo:"Il testo alla lettera",
              domanda:"Enuncia la definizione attuale e completa, parola per parola.",
              deve:["studio scientifico del comportamento e dei processi mentali","dell'essere vivente","nel suo rapporto con l'ambiente","mentre lo esperisce, vi agisce e lo rappresenta"],
              fonte:{cap:"C01",scheda:"S101",arg:"D01"} },
            { id:"def:att:elem", titolo:"Gli elementi, uno per uno",
              figli:[
                { id:"def:att:elem:sci", titolo:"«Studio scientifico»",
                  domanda:"Che cosa porta con sé la parola «scientifico» nella definizione?",
                  deve:["richiama il metodo sperimentale e la verifica empirica","porta con sé l'intero criterio di scientificità"],
                  fonte:{cap:"C01",scheda:"S101",arg:"D01"} },
                { id:"def:att:elem:proc", titolo:"«Comportamento e processi mentali»",
                  domanda:"Perché la definizione dice «processi mentali» e non «mente»? Di quale scuola è l'eredità?",
                  deve:["non la mente come una cosa ma processi: un insieme di operazioni","eredità del funzionalismo"],
                  fonte:{cap:"C01",scheda:"S101",arg:"D01"} },
                { id:"def:att:elem:viv", titolo:"«Dell'essere vivente»",
                  domanda:"Perché «essere vivente» e non «uomo»? Che cosa rientra così nella definizione?",
                  deve:["rientrano gli animali non umani","con essi la psicologia comparata, metodo elettivo della disciplina"],
                  fonte:{cap:"C01",scheda:"S101",arg:"D01"} },
                { id:"def:att:elem:amb", titolo:"«Nel suo rapporto con l'ambiente»",
                  domanda:"Perché è l'elemento decisivo, assente nella definizione generale?",
                  deve:["comportamento e processi mentali non si studiano in isolamento ma in relazione all'ambiente","è ciò che manca alla definizione generale"],
                  fonte:{cap:"C01",scheda:"S101",arg:"D01"} },
                { id:"def:att:elem:verbi", titolo:"I tre verbi",
                  domanda:"Quali sono i tre verbi della definizione, a quale faccia del rapporto corrispondono e a quali scuole rimandano?",
                  deve:["esperisce: ricettivo — psicofisica, Gestalt","agisce: attivo — funzionalismo, comportamentismo","rappresenta: interno — Vygotskij, Tolman, cognitivismo"],
                  fonte:{cap:"C01",scheda:"S101",arg:"D01"} }
              ] }
          ] },

        { id:"def:sci", titolo:"Che cosa la rende scientifica",
          domanda:"Che cosa rende «scientifico» lo studio della mente: l'oggetto o il metodo? Qual è la data della svolta?",
          deve:["non l'oggetto ma il metodo","metodo sperimentale con verifica empirica, contro la speculazione da assiomi indimostrabili","1879"],
          fonte:{cap:"C01",scheda:"S101",arg:"D01"} },

        { id:"def:rit", titolo:"Il ritardo",
          figli:[
            { id:"def:rit:dato", titolo:"Il dato di fatto",
              domanda:"Quando nascono fisica, chimica, biologia e psicologia scientifica? Quanti anni di psicologia filosofica contro quanti di psicologia scientifica?",
              deve:["fisica moderna nel Seicento","chimica nel Settecento","biologia nell'Ottocento","psicologia scientifica nel 1879","oltre due millenni contro poco più di 140 anni"],
              fonte:{cap:"C02",scheda:"S102",arg:"D01"} },
            { id:"def:rit:metodi", titolo:"Metodo razionalista e metodo sperimentale",
              domanda:"Che cosa distingue il metodo razionalista dal metodo sperimentale?",
              deve:["razionalista: speculazione logica, da premesse — spesso assiomi indimostrabili — a conclusioni deduttive, nessuna verifica empirica","sperimentale: osservazione controllata, manipolazione, misura, verifica empirica tangibile, sul modello delle scienze naturali"],
              fonte:{cap:"C02",scheda:"S102",arg:"D01"} },
            { id:"def:rit:cause", titolo:"Le tre cause",
              figli:[
                { id:"def:rit:cause:1", titolo:"Prima causa: definire l'oggetto",
                  domanda:"Qual è la prima causa del ritardo e che tipo di ostacolo è?",
                  deve:["difficoltà di definire l'oggetto: che cosa significa studiare scientificamente un pensiero","ostacolo tecnico: «non so come misurarlo»","un metodo scientifico richiede un oggetto isolabile, manipolabile, misurabile"],
                  fonte:{cap:"C02",scheda:"S102",arg:"D01"} },
                { id:"def:rit:cause:2", titolo:"Seconda causa: l'uomo come oggetto",
                  domanda:"Qual è la seconda causa del ritardo e che tipo di ostacolo è?",
                  deve:["difficoltà di considerare l'uomo un oggetto di studio scientifico","ostacolo antropologico: «non mi è lecito trattarlo così»","le scienze naturali trattano l'oggetto in modo deterministico; applicarlo all'uomo urta una lunga tradizione"],
                  fonte:{cap:"C02",scheda:"S102",arg:"D01"} },
                { id:"def:rit:cause:3", titolo:"Terza causa: la mente trascendentale",
                  domanda:"Qual è la terza causa del ritardo, la più profonda, e che tipo di ostacolo è?",
                  deve:["concezione trascendentale della mente: considerata quasi divina per oltre due millenni","ostacolo metafisico: «non ha senso trattarlo così»","non è un problema di strumenti ma di categoria"],
                  fonte:{cap:"C02",scheda:"S102",arg:"D01"} }
              ] },
            { id:"def:rit:posit", titolo:"Perché il positivismo non basta",
              domanda:"Il ritardo si spiega di solito con il positivismo: perché è una spiegazione vera ma insufficiente, e che cosa la completa?",
              deve:["il positivismo attribuisce alle scienze naturali il ruolo di unica fonte attendibile di conoscenza","è un'affermazione di principio: dice che la psicologia dovrebbe essere scienza, non dice come","serve la dimostrazione concreta che un fenomeno psichico possa essere misurato: la psicofisica"],
              fonte:{cap:"C02",scheda:"S102",arg:"D01"} }
          ] },

        { id:"def:eman", titolo:"La doppia emancipazione",
          figli:[
            { id:"def:eman:fil", titolo:"Dalla filosofia",
              domanda:"Enuncia la formula dell'emancipazione dalla filosofia: da che cosa a che cosa? Che cosa cambia?",
              deve:["dallo studio della mente sul piano filosofico","allo studio della relazione mente-corpo sul piano naturalistico","cambiano insieme l'oggetto (la relazione con qualcosa di materiale) e il piano (naturalistico, non speculativo)"],
              fonte:{cap:"C02",scheda:"S102",arg:"D01"} },
            { id:"def:eman:med", titolo:"Dalla medicina",
              domanda:"Enuncia la formula dell'emancipazione dalla medicina. Che cosa mancava, se il cervello era già studiato scientificamente?",
              deve:["dallo studio del cervello sul piano meramente fisiologico","all'unità cervello-mente e alle sue interazioni con l'ambiente","mancava il ponte concettuale: ammettere che la mente possa essere determinata dal funzionamento del cervello"],
              fonte:{cap:"C02",scheda:"S102",arg:"D01"} },
            { id:"def:eman:conv", titolo:"Dove convergono",
              domanda:"Le due traiettorie corrono parallele o convergono? Dove si incontrano, e che cosa c'entrano i tre verbi?",
              deve:["convergono: la filosofia porta la mente sul piano naturalistico, la medicina porta il cervello a farsi carico della mente","si incontrano nella definizione attuale: l'unità mente-cervello in relazione con l'ambiente","quel rapporto ha tre facce, per questo la definizione ha tre verbi"],
              fonte:{cap:"C01",scheda:"S101",arg:"D01"} }
          ] }
      ] },

    /* ===================== 2. L'EXCURSUS STORICO ===================== */
    { id:"exc", titolo:"L'excursus storico", occhiello:"Per ogni scuola: perché nasce, radici, precursori, oggetto, metodo, teorie, esponenti, esperimenti, validità",
      figli:[
        { id:"exc:pre",    titolo:"La fase pre-scientifica",                         daScheda:"S201" },
        { id:"exc:ctx",    titolo:"Il contesto della svolta: positivismo e psicofisica", daScheda:"S202" },
        { id:"exc:wundt",  titolo:"La nascita della psicologia scientifica",         daScheda:"S203" },
        { id:"exc:strutt", titolo:"Lo strutturalismo",                               daScheda:"S204" },
        { id:"exc:funz",   titolo:"Il funzionalismo",                                daScheda:"S205" },
        { id:"exc:rifl",   titolo:"La scuola riflessologica",                        daScheda:"S206" },
        { id:"exc:stor",   titolo:"La scuola storico-culturale",                     daScheda:"S207" },
        { id:"exc:din",    titolo:"La psicologia dinamica",                          daScheda:"S208" },
        { id:"exc:gest",   titolo:"La psicologia della Gestalt",                     daScheda:"S209" },
        { id:"exc:comp",   titolo:"Il comportamentismo",                             daScheda:"S210" }
      ] },

    /* ===================== 3. IL PRESENTE ===================== */
    { id:"pres", titolo:"La psicologia contemporanea", occhiello:"Dal cognitivismo alle discipline collaterali",
      figli:[
        { id:"pres:cogn",  titolo:"Il cognitivismo",                                 daScheda:"S301" },
        { id:"pres:sci",   titolo:"La scienza cognitiva: modularismo e connessionismo", daScheda:"S302" },
        { id:"pres:emb",   titolo:"La mente embodied e l'approccio biopsicosociale", daScheda:"S303" },
        { id:"pres:neuro", titolo:"Le neuroscienze comportamentali",                 daScheda:"S304" },
        { id:"pres:coll",  titolo:"Le discipline collaterali",                       daScheda:"S305" }
      ] },

    /* ===================== 4. LA METODOLOGIA ===================== */
    { id:"met", titolo:"La metodologia della ricerca", occhiello:"Dal metodo scientifico alla pubblicazione",
      figli:[
        { id:"met:metodo",  titolo:"Il metodo scientifico",                            daScheda:"S401" },
        { id:"met:proc",    titolo:"Il processo di ricerca",                           daScheda:"S402" },
        { id:"met:var",     titolo:"Le variabili e la revisione della letteratura",    daScheda:"S403" },
        { id:"met:descr",   titolo:"I metodi descrittivi",                             daScheda:"S404" },
        { id:"met:corr",    titolo:"Il metodo correlazionale",                         daScheda:"S405" },
        { id:"met:sper",    titolo:"Il metodo sperimentale",                           daScheda:"S406" },
        { id:"met:pubbl",   titolo:"La pubblicazione scientifica",                     daScheda:"S407" }
      ] },

    /* ===================== 5. LE BASI BIOLOGICHE ===================== */
    { id:"bio", titolo:"Le basi biologiche del comportamento", occhiello:"Dal neurone alla plasticità",
      figli:[
        { id:"bio:neur",   titolo:"Il neurone: la struttura",                         daScheda:"S501" },
        { id:"bio:elet",   titolo:"L'attività elettrica e la sinapsi",                daScheda:"S502" },
        { id:"bio:sn",     titolo:"L'architettura del sistema nervoso",               daScheda:"S503" },
        { id:"bio:prim",   titolo:"Il cervello primitivo",                            daScheda:"S504" },
        { id:"bio:cort",   titolo:"La corteccia cerebrale",                           daScheda:"S505" },
        { id:"bio:met",    titolo:"I metodi di indagine del cervello",                daScheda:"S506" },
        { id:"bio:gen",    titolo:"Evoluzione, geni ed ereditarietà",                 daScheda:"S507" },
        { id:"bio:plast",  titolo:"Epigenetica e plasticità cerebrale",               daScheda:"S508" }
      ] }
  ],

  /* i voti della correzione, chiave = id della foglia */
  voti: {}
};
