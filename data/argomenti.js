/* Argomenti — le esposizioni orali, una per cartella.
   Il testo di ciascuna sta in contenuti/argomenti/<id>.md */
var PGE = window.PGE = window.PGE || {};

PGE.argomenti = {
  titolo: "Argomenti",
  sottotitolo: "Come si espone a voce",
  intro: "Ogni argomento del programma è qui scritto <strong>come si direbbe a voce</strong>: un'esposizione distesa, in registro parlato, dall'attacco alla chiusura. Non sono riassunti da memorizzare — sono discorsi da leggere finché la struttura non diventa tua. Le righe in corsivo fra parentesi quadre sono <em>indicazioni di regìa</em>: dicono che cosa marcare, che cosa aggiungere se hai tempo, dove si perde il voto. Si possono nascondere per leggere solo il discorso.",
  cartelle: [
    { id:"K1", nome:"Fondamenti", occhiello:"L'oggetto, il ritardo, la fase pre-scientifica e la fondazione" },
    { id:"K2", nome:"Le prime scuole", occhiello:"Strutturalismo e funzionalismo: la questione del metodo e il passaggio alla funzione" },
    { id:"K3", nome:"Le realtà collaterali", occhiello:"Fuori dall'asse Germania-America, e fuori dall'accademia" },
    { id:"K4", nome:"Le due reazioni a Wundt", occhiello:"Gestalt e comportamentismo, e l'evoluzione fino a Hebb" },
    { id:"K5", nome:"Il presente", occhiello:"Cognitivismo, mente embodied, neuroscienze e discipline collaterali" },
    { id:"K6", nome:"Le domande di sintesi", occhiello:"I confronti e la ricostruzione d'insieme: valgono di più e si sbaglia di più" }
  ],
  voci: [
    { id:"D01", cartella:"K1", titolo:"Che cos'è la psicologia",
      domanda:"«Che cos'è la psicologia?» · «Definisca l'oggetto della disciplina, giustificando ciascun elemento della formulazione.»",
      minuti:4, lezione:"L01", capitoli:["C01","C02"],
      perni:["etimologia","mente e comportamento","il metodo come criterio","la doppia emancipazione","i tre verbi","la convergenza"] },
    { id:"D02", cartella:"K1", titolo:"Prima della scienza",
      domanda:"«Illustri le principali concezioni della mente precedenti alla nascita della psicologia scientifica, e quale lascito abbiano trasmesso.»",
      minuti:3, lezione:"L01", capitoli:["C03"],
      perni:["perché le studiamo","trapanazione","Ippocrate","res cogitans / res extensa","frenologia","da superare / da recuperare"] },
    { id:"D03", cartella:"K1", titolo:"Il contesto della svolta e la nascita",
      domanda:"«Illustri il contesto in cui nasce la psicologia scientifica e i fondamenti epistemologici della scuola di Wundt.»",
      minuti:4, lezione:"L01", capitoli:["C04","C05"],
      perni:["permesso e prova","psicofisica","1879 Lipsia","atomi della mente","i quattro vincoli","tempi di reazione"] },

    { id:"D04", cartella:"K2", titolo:"Lo strutturalismo",
      domanda:"«Analizzi la scuola strutturalista sotto il profilo di oggetto, metodo e validità, e spieghi perché le venga riconosciuto un merito storico decisivo.»",
      minuti:4, lezione:"L01", capitoli:["C06"],
      perni:["il doppio gesto di Titchener","mente e coscienza","44.000 unità","le due critiche distinte","merito e limite"] },
    { id:"D05", cartella:"K2", titolo:"Il funzionalismo",
      domanda:"«Illustri la scuola funzionalista: l'esigenza da cui nasce, i precursori, oggetto e metodo, e perché Thorndike venga ricordato per una scuola successiva.»",
      minuti:4, lezione:"L01", capitoli:["C07"],
      perni:["il cambio di domanda","Darwin","la catena di James","manifesto funzionalista","metodo eclettico","legge dell'effetto"] },

    { id:"D06", cartella:"K3", titolo:"Le scuole russe",
      domanda:"«In che senso le scuole russe sono collaterali? Illustri la riflessologia e la scuola storico-culturale.»",
      minuti:4, lezione:"L01", capitoli:["C08"],
      perni:["collaterale = geografico","il riflesso","la scoperta di Pavlov","i tre elementi della formula","le due ragioni di Vygotskij"] },
    { id:"D07", cartella:"K3", titolo:"La psicologia dinamica",
      domanda:"«Chiarisca perché la psicoanalisi rappresenti un caso epistemologicamente anomalo, e ne illustri fondamenti, metodo e assunti.»",
      minuti:4, lezione:"L01", capitoli:["C09"],
      perni:["l'anomalia","i due postulati","perché «dinamica»","Charcot","il conflitto","i due assunti","il bilancio"] },

    { id:"D08", cartella:"K4", titolo:"La Gestalt",
      domanda:"«Esponga i fondamenti epistemologici della Gestalt, le radici filosofiche e in che cosa il metodo fenomenologico si distingua dall'introspezione.»",
      minuti:5, lezione:"L02", capitoli:["C10"],
      perni:["il tutto e le parti","Kant e Brentano","fenomeno / oggetto fisico","le due dimensioni del metodo","fenomeno phi","insight","teoria di campo"] },
    { id:"D09", cartella:"K4", titolo:"Il comportamentismo",
      domanda:"«Illustri il comportamentismo: la ragione per cui nasce, la radice filosofica, oggetto e metodo, e l'evoluzione nelle tre fasi.»",
      minuti:5, lezione:"L02", capitoli:["C11"],
      perni:["l'accusa opposta","black box","Locke","i due precursori","le tre posizioni di Watson","piccolo Albert","le tre fasi","Hebb"] },
    { id:"D10", cartella:"K4", titolo:"Skinner e il condizionamento operante",
      domanda:"«Chiarisca la differenza fra la legge dell'effetto e il condizionamento operante, precisando la collocazione di Skinner.»",
      minuti:3, lezione:"L02", capitoli:["C11"],
      perni:["cronologicamente sì, teoricamente no","classico vs operante","Skinner Box","il rinforzo","le tre applicazioni","le tre dimensioni della distinzione"] },

    { id:"D11", cartella:"K5", titolo:"Il cognitivismo",
      domanda:"«Illustri il cognitivismo: gli avvenimenti che ne promuovono lo sviluppo, i fondamenti epistemologici, il metodo e l'evoluzione.»",
      minuti:6, lezione:"L03", capitoli:["C13"],
      perni:["filiazione, non reazione","Piaget","Chomsky contro Skinner","il computer","simposio 1956","TOTE","Neisser","metodo simulativo","critica ecologica","modularismo e connessionismo"] },
    { id:"D12", cartella:"K5", titolo:"La psicologia contemporanea e le neuroscienze",
      domanda:"«Illustri l'attuale quesito psicologico e l'approccio con cui viene affrontato.» · «Che cosa sono le neuroscienze comportamentali?»",
      minuti:5, lezione:"L03", capitoli:["C14"],
      perni:["non più una scuola","la catena embodied","i tre corollari","le tre prospettive","Lashley","la rivoluzione tecnologica","le tre espansioni"] },
    { id:"D13", cartella:"K5", titolo:"Le discipline collaterali",
      domanda:"«Quali prospettive teoriche affiancano oggi le neuroscienze? Ne illustri oggetto, metodo e contributo.»",
      minuti:4, lezione:"L03", capitoli:["C15"],
      perni:["la psicologia non è settoriale","studio sui gemelli","epigenetica","moduli specializzati","Maslow e Rogers","la cultura","regole di esibizione"] },

    { id:"D14", cartella:"K6", titolo:"Le due reazioni a Wundt a confronto",
      domanda:"«Confronti la Gestalt e il comportamentismo, spiegando perché entrambi nascano contro Wundt da direzioni opposte.»",
      minuti:3, lezione:"L02", capitoli:["C12"],
      perni:["la formula in una frase","le sette dimensioni","Kant contro Locke","l'esito diverso"] },
    { id:"D15", cartella:"K6", titolo:"L'excursus completo",
      domanda:"«Ricostruisca il percorso dalla nascita della psicologia scientifica alla psicologia contemporanea, spiegando per ciascuna scuola quale esigenza ne determini la nascita.»",
      minuti:6, lezione:"L01-L03", capitoli:["C12"],
      perni:["dichiarare il criterio","la catena delle esigenze","i due sensi di collaterale","le tre fasi","filiazione","il filo mente-cervello","la definizione come sintesi"] }
  ]
};
