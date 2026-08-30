/* Banca domande e archivio prove.
   I risultati vengono aggiunti qui dopo ogni correzione. */
var PGE = window.PGE = window.PGE || {};

PGE.domande = [
  { id:"D01", arg:"Definizione", lezione:"L01", peso:"alto",
    testo:"La psicologia nasce come scienza autonoma nel 1879, quindi con notevole ritardo rispetto a chimica, fisica e scienze naturali. Illustri le ragioni di questo ritardo e spieghi da quali discipline la psicologia ha dovuto emanciparsi, precisando quale passaggio concettuale ha reso possibile l'autonomia da ciascuna di esse. Concluda enunciando la definizione attuale dell'oggetto della psicologia.",
    attesi:["Le tre cause del ritardo","L'emancipazione dalla filosofia: relazione mente-corpo sul piano naturalistico","L'emancipazione dalla medicina: unità cervello-mente e interazioni con l'ambiente","Il ruolo della psicofisica come ponte empirico","Wundt, Lipsia, 1879","La definizione completa: essere vivente, tre verbi","La convergenza delle due traiettorie"] },
  { id:"D02", arg:"Strutturalismo", lezione:"L01", peso:"alto",
    testo:"Analizzi la scuola strutturalista sotto il profilo dei suoi fondamenti epistemologici — oggetto di studio, metodo e validità. Spieghi in particolare perché il metodo introspettivo è stato considerato non valido, e per quale ragione, nonostante ciò, allo strutturalismo viene riconosciuto un merito storico decisivo. Chiarisca infine quale esigenza teorica porta al superamento di questa scuola e in che modo la posizione di William James anticipa tale passaggio.",
    attesi:["Titchener, Cornell, 1892: porta Wundt in America","Oggetto: struttura della coscienza; percezioni, emozioni, idee","Le due definizioni: mente vs coscienza","Metodo: introspezione sistematizzata, 44.000 unità","Le DUE critiche distinte: retrospezione (temporale) e incoerenza (attendibilità)","Merito: la questione del metodo","James: stream of consciousness fino alla conclusione «come funziona, non com'è fatta»"] },
  { id:"D03", arg:"Scuole collaterali", lezione:"L01", peso:"alto",
    testo:"Il docente presenta le scuole russe e la psicologia dinamica come due realtà «collaterali» rispetto all'excursus accademico Europa-America. Spieghi in che senso lo siano, e chiarisca perché la psicoanalisi rappresenti un caso epistemologicamente anomalo rispetto a tutte le altre scuole trattate. Indichi poi quali acquisizioni di queste due realtà si rivelano determinanti per lo sviluppo successivo della psicologia, motivando la risposta.",
    attesi:["Collaterale in DUE sensi diversi: geografico (russe) ed epistemologico (psicoanalisi)","Pavlov è pienamente sperimentale, non isolato dalle idee occidentali","La formula dei riflessi condizionati come forma elementare di apprendimento","Vygotskij: funzioni complesse, linguaggio, e le due ragioni della sua importanza","Freud: nuovi metodi di trattamento; teoria della personalità non solo patologica","Il collegamento a comportamentismo e cognitivismo"] },
  { id:"D04", arg:"Funzionalismo", lezione:"L01", peso:"medio",
    testo:"Illustri la scuola funzionalista: l'esigenza teorica da cui nasce, i suoi precursori, l'oggetto di studio, il metodo e i suoi principali esponenti. Spieghi infine per quale ragione Thorndike, pur essendo un funzionalista, viene ricordato soprattutto in relazione a una scuola successiva.",
    attesi:["L'esigenza: la mente nel suo ambiente e per le sue funzioni","Darwin: selezione naturale e adattamento","James come precursore","Scuola di Chicago: Dewey, Angell, Carr; il manifesto funzionalista","Metodo eclettico","Thorndike connessionista e la legge dell'effetto","Thorndike come precursore del comportamentismo insieme a Pavlov"] },
  { id:"D05", arg:"Gestalt", lezione:"L02", peso:"alto",
    testo:"Esponga i fondamenti epistemologici della psicologia della Gestalt, chiarendo le sue radici filosofiche e in che cosa il metodo fenomenologico sperimentale si distingua dall'introspezione wundtiana. Illustri poi, attraverso almeno un esperimento, che cosa i gestaltisti intendano affermando che il tutto è più della somma delle parti.",
    attesi:["Kant: sintesi a priori e idee a priori (innatismo)","Brentano: psicologia dell'atto, intenzionalità, fenomeno vs oggetto fisico","Oggetto: l'atto unitario della percezione; leggi innate specie-specifiche","Il metodo fenomenologico NON scompone; controllo rigoroso dello stimolo","Wertheimer, fenomeno phi, movimento stroboscopico","Eventualmente Köhler e l'insight, o gli esempi delle figure ambigue"] },
  { id:"D06", arg:"Comportamentismo", lezione:"L02", peso:"alto",
    testo:"Illustri il comportamentismo: la ragione per cui nasce, la sua radice filosofica, l'oggetto di studio e il metodo. Descriva poi l'evoluzione interna della corrente nelle sue tre fasi, spiegando perché tale evoluzione conduce al cognitivismo.",
    attesi:["Reazione allo strutturalismo: i contenuti interni non sono osservabili né misurabili","Locke, empirismo, tabula rasa (opposto all'innatismo gestaltico)","Precursori: Thorndike e Pavlov; minimo comune denominatore apprendimento + psicologia comparata","Oggetto: comportamento manifesto, S-R; la black box","Le tre fasi: classico (Watson), neo (Hull, Tolman), ceno (Hebb)","Le tre posizioni di Watson: molecolarismo, perifericalismo, ambientalismo","Hebb: unità mente-cervello, legge di Hebb, assemblee cellulari"] },
  { id:"D07", arg:"Comportamentismo", lezione:"L02", peso:"medio",
    testo:"Chiarisca la differenza fra la legge dell'effetto di Thorndike e il condizionamento operante di Skinner, precisando la collocazione di Skinner all'interno dell'evoluzione del comportamentismo.",
    attesi:["Legge vs sistema teorico completo","Unità di analisi: connessione S-R vs relazione risposta-conseguenza","Thorndike usa un linguaggio mentalistico (soddisfazione); Skinner definisce il rinforzo funzionalmente","La Skinner Box e il rinforzo come conseguenza sull'ambiente","Skinner è cronologicamente nel neocomportamentismo ma teoricamente torna a Watson","Distinzione fra condizionamento classico (passivo) e operante (attivo)"] },
  { id:"D08", arg:"Excursus", lezione:"L01-L02", peso:"alto",
    testo:"Ricostruisca il percorso che dalla nascita della psicologia scientifica conduce al cognitivismo, spiegando per ciascuna scuola quale esigenza teorica ne determini la nascita in rapporto a quella precedente.",
    attesi:["Wundt 1879 e il metodo sperimentale","Strutturalismo: sistematizzazione e crisi del metodo","Funzionalismo: dalle strutture alle funzioni","Gestalt e comportamentismo come DUE reazioni opposte a Wundt","Le tre fasi del comportamentismo","I tre precursori del cognitivismo: Vygotskij, Tolman, Hebb"] },
  { id:"D09", arg:"Pre-scientifica", lezione:"L01", peso:"basso",
    testo:"Illustri le principali concezioni della mente precedenti alla nascita della psicologia scientifica, spiegando per ciascuna perché non possa essere considerata scientifica e quale lascito concettuale abbia comunque trasmesso alla disciplina.",
    attesi:["Trapanazione, Ippocrate e i quattro temperamenti","Cartesio: res cogitans / res extensa, ghiandola pineale","Gall: frenologia e prima idea di localizzazione; ripresa da Lombroso","Il criterio comune: approccio razionalista, nessuna verifica empirica","I due lasciti: il dualismo da superare, la localizzazione da recuperare"] },
  { id:"D10", arg:"Definizione", lezione:"L01", peso:"medio",
    testo:"Che cos'è la psicologia? Fornisca una definizione completa dell'oggetto della disciplina, giustificando ciascun elemento della formulazione.",
    attesi:["Etimologia","Definizione generale e i due termini contrapposti","Il riconoscimento della vaghezza della definizione generale","Il metodo come criterio di scientificità","La definizione attuale con i tre verbi","La convergenza delle due emancipazioni"] }
];

/* Archivio prove. Ogni voce viene aggiunta dopo la correzione. */
PGE.risultati = [
  {
    data: "2026-08-28",
    modalita: "simulazione",
    titolo: "Simulazione orale — Lezione 1",
    domande: [
      { id:"D01", arg:"Definizione", voto:9, max:10, nota:"Terzo tentativo. Le tre cause del ritardo tutte presenti, psicofisica recuperata, definizione corretta con «essere vivente». Resta storta la formula sull'emancipazione dalla filosofia: perde il secondo termine (relazione mente-corpo). Manca la chiusura sulla convergenza." },
      { id:"D02", arg:"Strutturalismo", voto:7, max:10, nota:"Ricostruzione storica corretta, merito storico ben formulato. Ma risponde quasi tutto su Wundt: manca l'oggetto proprio di Titchener e la coppia mente/coscienza. Confonde la critica temporale (retrospezione) con quella sull'interpretazione. James trattato di corsa, senza la conclusione." },
      { id:"D03", arg:"Scuole collaterali", voto:6, max:10, nota:"Anomalia epistemologica della psicoanalisi colta bene. Ma criterio sbagliato per le scuole russe (non «isolate dalle idee» ma fuori dall'asse geografico-accademico). Parte finale per etichette: «Pavlov viene ancora studiato», «Freud ha influenzato la psicologia». Errore ricorrente: «socio-culturale» per «storico-culturale»." }
    ],
    totale: 22, max: 30,
    commento: "Conosce la lezione; non ci sono lacune di contenuto vere e proprie. Manca la precisione delle formule tecniche e l'abitudine a motivare invece di elencare. Il pattern peggiora dalla prima alla terza domanda: quando si chiede «perché», la risposta dice «che». Con la prima risposta nella versione originale (non ritentata) il totale sarebbe stato 19/30.",
    nota: "Prima risposta valutata al terzo tentativo: 6,5 → 8,5 → 9. La differenza non era conoscenza ma precisione lessicale sotto pressione."
  }
];
