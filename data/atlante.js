/* ATLANTE 3D — neurone, encefalo, sistema nervoso periferico.

   Un solo file per tre cose, così non si disallineano mai:

   1. il CONTENUTO delle schede, preso dalle trascrizioni L08, L09, L10;
   2. la GEOMETRIA procedurale di neurone e SNP, in forma dichiarativa,
      interpretata da assets/atlante3d.js;
   3. i NOMI DEI MESH, che sono anche i nomi degli oggetti in Blender
      (blender/atlante.py legge questo stesso file per costruire la scena).

   SCHEMA FISSO. Ogni parte ha sempre gli stessi campi, nello stesso ordine.
   I campi vuoti restano con un trattino: la forma non cambia mai.

     id       chiave interna, mai mostrata
     nome     come si chiama all'esame
     mesh     prefisso del nome dell'oggetto in Blender / nel .glb.
              Le strutture pari escono come <mesh>_L e <mesh>_R
     alias    altre risposte accettate nella modalità test
     tinta    chiave di PGE.atlante.tinte
     esplodi  direzione di allontanamento nella vista esplosa
     geo      geometria procedurale (assente se la parte viene dal .glb)
     scheda   { dove, com, fa, con, rompe, esame, fonte }
              dove   — dove sta
              com    — com'è fatto
              fa     — che cosa fa
              con    — con chi parla
              rompe  — se si rompe
              esame  — la trappola, o la frase da dire
              fonte  — { lez, cap, arg }

   LINGUAGGIO DELLA GEOMETRIA (campo geo)

     { t:"sfera",    r, scala?, pos, seg? }
     { t:"capsula",  r, h, pos, rot? }
     { t:"cilindro", r1, r2, h, pos, rot? }
     { t:"cono",     r, h, pos, rot? }
     { t:"toro",     r, tubo, arco?, pos, rot? }
     { t:"tubo",     punti:[[x,y,z]…], r, seg? }        curva di Catmull-Rom
     { t:"albero",   origine, dir, lung, r, livelli, rami, apertura, seme }
     { t:"ripeti",   n, passo, da?, geo }
     { t:"gruppo",   figli:[…] }

   Rotazioni in gradi. Unità: nel neurone 1 = circa 2 micrometri.          */

var PGE = window.PGE = window.PGE || {};

PGE.atlante = {

/* ---------------------------------------------------------------
   TINTE — una sola tavolozza per i due temi. Lo sfondo e le luci
   cambiano con il tema, i tessuti no: un talamo viola resta viola.
   --------------------------------------------------------------- */
tinte: {
  membrana:"#79AEC4", citosol:"#E4C9A6", soma:"#D9B48F", nucleo:"#8E6FB0",
  dna:"#6B4F94", mitocondrio:"#C2705F", reticolo:"#6E9A8C", ribosoma:"#3F5C70",
  golgi:"#C99A4E", citoscheletro:"#98A2AE", dendrite:"#D4AC86", spina:"#B98A5F",
  cono:"#CE8F5C", assone:"#D4AC86", mielina:"#EFE5D1", ranvier:"#B5714F",
  terminale:"#D4AC86", bottone:"#C2705F", vescicola:"#7EA05F",

  frontale:"#C2705F", parietale:"#C99A4E", temporale:"#6E9A8C",
  occipitale:"#6A7FA8", insula:"#9B7BA8", callosa:"#EDE6D6", bianca:"#E8DFD0",
  cervelletto:"#B08A6B", tronco:"#A8926F", talamo:"#8D7BB0",
  ipotalamo:"#B06A8F", ipofisi:"#D9A0B8", ippocampo:"#5F8FA8",
  amigdala:"#B05F5F", caudato:"#7EA05F", putamen:"#93B06B", pallido:"#63864C",
  ventricolo:"#2EB0C4", midollo:"#D6C9A8", nervocranico:"#E2D08A",

  aMotoria:"#C9342A", aSomato:"#1F6FA8", aVisiva:"#2E7D5B", aUditiva:"#B5651D",
  aBroca:"#8E1F5C", aWernicke:"#5B3FA0", aPto:"#C2185B", aPrefrontale:"#E07A3C",

  sagoma:"#8FA3B5", nervo:"#D8C98F", dorsale:"#6A7FA8", ventrale:"#C2705F",
  ganglio:"#8D7BB0", simpatico:"#C2705F", parasimpatico:"#6E9A8C",
  enterico:"#C99A4E", bersaglio:"#B08A6B", sensoriale:"#6A7FA8",
  interneurone:"#8D7BB0", motoneurone:"#C2705F"
},

/* etichette dei sei blocchi della scheda, nell'ordine in cui vanno letti */
blocchi: [
  ["dove",  "Dove sta"],
  ["com",   "Com'è fatto"],
  ["fa",    "Che cosa fa"],
  ["con",   "Con chi parla"],
  ["rompe", "Se si rompe"],
  ["esame", "All'esame"]
],

sezioni: []
};

/* =========================================================
   1 — IL NEURONE                                    (L08)
   Unità: 1 ≈ 2 micrometri. Il soma ha diametro 20 µm,
   quindi raggio 1 nel modello. Dendriti a sinistra,
   assone a destra: è l'ordine in cui la lezione li espone.
   ========================================================= */
PGE.atlante.sezioni.push({
id:"neurone", titolo:"Il neurone", occhiello:"Lezione 8 — Gli elementi-base del comportamento",
sommario:"Tutti i neuroni, di qualunque tipologia, hanno una <strong>struttura prototipica</strong>: una membrana, un corpo cellulare, un albero dendritico e un assone. Stacca i pezzi e ognuno spiega un pezzo di fisiologia — è il modo in cui la lezione è costruita.",
fonte:{ lez:"L08", cap:"C20", arg:"D21" },
modello:null,                       /* geometria procedurale, niente .glb */
scala:1, raggioEsplosione:2.4,
camera:{ pos:[6.4,5.0,13.6], mira:[3.4,0,0], min:3, max:46 },
percorso:[
  { id:"proto", lez:"L08", titolo:"La struttura prototipica",
    testo:"Tutti i neuroni, di qualunque tipo, hanno la stessa ossatura: una <strong>membrana</strong>, un <strong>corpo cellulare</strong>, un <strong>albero dendritico</strong> e un <strong>assone</strong>. Il resto sono variazioni su questo schema.",
    accendi:["neu.membrana","neu.soma","neu.dendriti","neu.assone"], sfuma:0.35, esplodi:0.15 },
  { id:"membrana", lez:"L08", titolo:"La membrana",
    testo:"La membrana è il confine. Tiene separati interno ed esterno e, con i suoi canali, decide che cosa entra e che cosa esce: è lì che nasce il segnale.",
    accendi:["neu.membrana"], sfuma:0.2, inquadra:"neu.membrana" },
  { id:"soma", lez:"L08", titolo:"Il corpo cellulare",
    testo:"Nel soma stanno il <strong>nucleo</strong> e il macchinario che fabbrica proteine: reticolo, ribosomi, Golgi, mitocondri. Senza questo non c'è né struttura né segnale.",
    accendi:["neu.soma","neu.nucleo","neu.reticolo","neu.ribosomi","neu.golgi","neu.mitocondri"], sfuma:0.22, esplodi:0.55 },
  { id:"dendriti", lez:"L08", titolo:"L'albero dendritico",
    testo:"I dendriti ricevono. Le <strong>spine</strong> sono i punti di contatto: è lì che arrivano le sinapsi degli altri neuroni.",
    accendi:["neu.dendriti","neu.spine"], sfuma:0.2, inquadra:"neu.dendriti" },
  { id:"assone", lez:"L08", titolo:"L'assone",
    testo:"L'assone porta il segnale lontano. Nasce dal <strong>cono di emergenza</strong>, si riveste di <strong>mielina</strong> interrotta dai <strong>nodi di Ranvier</strong>, e finisce nei terminali.",
    accendi:["neu.cono","neu.assone","neu.mielina","neu.ranvier","neu.terminali"], sfuma:0.18, esplodi:0.35 },
  { id:"sinapsi", lez:"L08", titolo:"La sinapsi",
    testo:"Nel bottone le <strong>vescicole</strong> liberano il neurotrasmettitore. È il punto in cui un neurone parla con il successivo: il segnale elettrico diventa chimico, e poi di nuovo elettrico.",
    accendi:["neu.bottoni","neu.vescicole"], sfuma:0.15, inquadra:"neu.bottoni", esplodi:0.7 }
],

parti:[

{ id:"neu.membrana", nome:"Membrana cellulare", mesh:"Neu_Membrana",
  alias:["membrana plasmatica","membrana"], tinta:"membrana", opacita:0.20,
  esplodi:[0,1.15,0],
  geo:{ t:"sfera", r:1.07, seg:72 },
  scheda:{
    dove:"Riveste l'intero neurone: soma, dendriti, cono di emergenza, assone, terminali. Non finisce mai.",
    com:"Come in tutte le cellule del corpo — ma <strong>cambia composizione a seconda della zona</strong>. Nei dendriti porta i <em>recettori</em>; nel cono di emergenza e nell'assone i <em>canali voltaggio-dipendenti</em>; nel bottone i siti dove le vescicole si fondono. Sotto di sé ricopre il <strong>citoscheletro</strong>, «le ossa del neurone».",
    fa:"Isola l'ambiente <strong>intracellulare</strong> da quello <strong>extracellulare</strong>. È il filtro semipermeabile su cui poggia tutta la fisiologia: senza quella separazione non esiste potenziale di membrana, quindi non esiste potenziale d'azione.",
    con:"Con i canali e le pompe ioniche che la attraversano, e con il citoscheletro che sostiene.",
    rompe:"—",
    esame:"La docente la introduce con «come tutte le cellule del nostro corpo», ma il punto è l'opposto: qui la membrana <strong>fa</strong> la funzione. Che sia diversa zona per zona è la ragione per cui nei dendriti non si genera il potenziale d'azione e nell'assone sì.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.citoscheletro", nome:"Citoscheletro", mesh:"Neu_Citoscheletro",
  alias:["microtubuli","neurofilamenti","microfilamenti"], tinta:"citoscheletro",
  esplodi:[0,-1.0,0.35],
  geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.022, punti:[[-0.9,0.25,0.1],[-0.2,0.55,0.3],[0.5,0.3,-0.1],[1.0,0.05,-0.2]] },
    { t:"tubo", r:0.022, punti:[[-0.85,-0.3,-0.25],[-0.1,-0.6,0.05],[0.6,-0.35,0.25],[0.98,-0.1,0.15]] },
    { t:"tubo", r:0.018, punti:[[-0.55,0.1,-0.75],[0.05,0.3,-0.4],[0.7,0.1,-0.55]] },
    { t:"tubo", r:0.018, punti:[[-0.5,-0.15,0.75],[0.1,-0.35,0.45],[0.75,-0.05,0.55]] } ] },
  scheda:{
    dove:"Dentro il neurone, sotto la membrana, per tutta la sua estensione.",
    com:"Tre tipi di filamenti: <strong>microtubuli</strong>, <strong>microfilamenti</strong> e <strong>neurofilamenti</strong>.",
    fa:"È la struttura fisica del neurone — la lezione lo chiama «le ossa». Su questi filamenti <strong>viaggiano le proteine</strong> necessarie al funzionamento della cellula.",
    con:"Sostiene la membrana e fa da binario al trasporto verso i dendriti e verso il terminale assonico.",
    rompe:"—",
    esame:"Basta nominarlo con i tre filamenti e dire a che serve: la lezione dichiara esplicitamente di non entrare nello specifico.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.soma", nome:"Corpo cellulare", mesh:"Neu_Soma",
  alias:["soma","pirenoforo","corpo","citoplasma"], tinta:"soma", opacita:0.42,
  esplodi:[0,0,0],
  geo:{ t:"sfera", r:1.0, seg:72 },
  scheda:{
    dove:"La parte centrale del neurone. Da un lato ne escono i dendriti, dal lato opposto l'assone.",
    com:"Forma più o meno <strong>tondeggiante</strong>, diametro circa <strong>20 micrometri</strong> — a occhio nudo non si vede, con un microscopio ottico sì. Al centro il <strong>nucleo</strong>; intorno il <strong>citoplasma</strong>, che contiene il <strong>citosol</strong>, un liquido ricco di <strong>potassio</strong> in cui galleggiano gli organelli.",
    fa:"Necessario al <strong>metabolismo</strong> e alla <strong>sopravvivenza</strong> della cellula. <strong>Sintetizza tutte le proteine</strong> che servono alla struttura e alla funzione del neurone. Produce anche i <strong>neurotrasmettitori</strong>.",
    con:"Riceve dai dendriti i potenziali graduati già sommati e li passa al cono di emergenza.",
    rompe:"—",
    esame:"Tre nomi per la stessa cosa: <strong>corpo cellulare</strong>, <strong>soma</strong>, <strong>pirenoforo</strong>. E una precisazione che vale un punto: il soma del neurone è <em>simile a quello di tutte le altre cellule organiche</em> — la peculiarità neuronale sta nei dendriti e nell'assone, non qui.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.nucleo", nome:"Nucleo", mesh:"Neu_Nucleo",
  alias:["nucleo cellulare"], tinta:"nucleo", opacita:0.55,
  esplodi:[0,0.9,-0.9],
  geo:{ t:"sfera", r:0.44, seg:48 },
  scheda:{
    dove:"Al centro del corpo cellulare, e galleggia nel citoplasma.",
    com:"Una <strong>sfera bucherellata</strong>: i forellini servono a far uscire le istruzioni. Contiene il <strong>DNA</strong>.",
    fa:"Custodisce l'informazione genetica e ne governa l'uscita. Dentro il nucleo avviene la <strong>trascrizione</strong>: la sequenza di acidi nucleici del gene viene trascritta in <strong>RNA</strong>, che esce attraverso i pori come <strong>RNA messaggero</strong>.",
    con:"Con il citoplasma, dove avviene la <strong>traduzione</strong> — l'RNA diventa sequenza di amminoacidi, cioè proteine — sui ribosomi del reticolo endoplasmatico rugoso.",
    rompe:"—",
    esame:"La catena va detta per intero e nell'ordine giusto: <strong>DNA → trascrizione (nel nucleo) → RNA messaggero → esce dai pori → traduzione (nel citoplasma) → amminoacidi → proteine</strong>. Trascrizione dentro, traduzione fuori.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.dna", nome:"DNA", mesh:"Neu_DNA",
  alias:["acido desossiribonucleico","doppia elica","geni"], tinta:"dna",
  esplodi:[0,1.5,-1.5],
  geo:{ t:"gruppo", figli:[
    { t:"elica", r:0.17, h:0.62, giri:2.4, tubo:0.022, fase:0 },
    { t:"elica", r:0.17, h:0.62, giri:2.4, tubo:0.022, fase:180 },
    { t:"ripeti", n:11, da:[0,-0.30,0], passo:[0,0.061,0],
      geo:{ t:"cilindro", r1:0.011, r2:0.011, h:0.34, rot:[0,0,90], elica:{ r:0.17, giri:2.4, h:0.62 } } } ] },
  scheda:{
    dove:"Dentro il nucleo.",
    com:"Una <strong>doppia elica</strong> di acido desossiribonucleico. Se si stendesse misurerebbe <strong>un paio di metri</strong>: è proprio la conformazione a doppia elica che gli permette di stare in un nucleo piccolissimo.",
    fa:"Contiene l'informazione genetica che regola l'espressione delle cellule di tutto il corpo.",
    con:"Con i ribosomi, attraverso l'RNA messaggero.",
    rompe:"—",
    esame:"La domanda tranello: <em>se il DNA è identico in tutte le cellule, cosa rende diverso un neurone da una cellula del fegato?</em> Risposta: cambiano i <strong>segmenti attivati</strong>, cioè i singoli <strong>geni</strong>. Non cambia il DNA.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.reticolo", nome:"Reticolo endoplasmatico", mesh:"Neu_Reticolo",
  alias:["reticolo endoplasmatico rugoso","reticolo rugoso","reticolo liscio","reticolo"],
  tinta:"reticolo", esplodi:[-0.5,0.75,0.95],
  geo:{ t:"gruppo", figli:[
    { t:"toro", r:0.63, tubo:0.045, arco:250, rot:[12,0,0], pos:[0,0.06,0] },
    { t:"toro", r:0.70, tubo:0.045, arco:220, rot:[-14,40,0], pos:[0,-0.05,0] },
    { t:"toro", r:0.58, tubo:0.040, arco:200, rot:[70,20,0], pos:[0.05,0,0] } ] },
  scheda:{
    dove:"Nel citosol, attorno al nucleo.",
    com:"Esiste in due forme. Il <strong>rugoso</strong> ha i ribosomi attaccati — la lezione li descrive «come un filo nella stoffa». Il <strong>liscio</strong> ne è privo.",
    fa:"Sul rugoso avviene l'assemblaggio delle molecole proteiche <strong>destinate a restare nel corpo cellulare</strong>, utili al funzionamento dello stesso. Il liscio svolge funzioni molteplici, sempre di supporto alla sintesi proteica.",
    con:"Riceve l'RNA messaggero dal nucleo; passa all'apparato del Golgi le proteine che devono uscire.",
    rompe:"—",
    esame:"La coppia da tenere insieme: nel <strong>reticolo</strong> si assembla ciò che <strong>rimane dentro</strong>, nel <strong>Golgi</strong> si seleziona ciò che deve <strong>uscire</strong>. È la distinzione su cui si gioca la domanda sugli organelli.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.ribosomi", nome:"Ribosomi", mesh:"Neu_Ribosomi",
  alias:["ribosoma"], tinta:"ribosoma", esplodi:[-0.9,0.95,1.2],
  geo:{ t:"sparsi", n:34, seme:7, guscio:[0.56,0.74], geo:{ t:"sfera", r:0.033, seg:12 } },
  scheda:{
    dove:"Attaccati al reticolo endoplasmatico rugoso — è ciò che lo rende «rugoso» — e liberi nel citosol.",
    com:"Strutture minute, descritte in lezione come <strong>catene che si incastrano nel reticolo</strong>.",
    fa:"Sono le strutture in cui avviene la <strong>traduzione dell'RNA</strong>: le sequenze di acidi nucleici diventano sequenze di <strong>amminoacidi</strong>, cioè proteine.",
    con:"Con l'RNA messaggero in arrivo dal nucleo, e con il reticolo su cui si ancorano.",
    rompe:"—",
    esame:"Sono il luogo della <strong>traduzione</strong>, non della trascrizione. Chi confonde i due verbi perde il punto.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.golgi", nome:"Apparato del Golgi", mesh:"Neu_Golgi",
  alias:["golgi","apparato di golgi"], tinta:"golgi", esplodi:[0.2,0.9,1.15],
  geo:{ t:"gruppo", figli:[
    { t:"toro", r:0.26, tubo:0.028, arco:150, rot:[80,0,-20], pos:[0.35,-0.42,0.30] },
    { t:"toro", r:0.30, tubo:0.028, arco:150, rot:[80,0,-20], pos:[0.35,-0.50,0.30] },
    { t:"toro", r:0.33, tubo:0.028, arco:150, rot:[80,0,-20], pos:[0.35,-0.58,0.30] },
    { t:"toro", r:0.35, tubo:0.028, arco:150, rot:[80,0,-20], pos:[0.35,-0.66,0.30] } ] },
  scheda:{
    dove:"Nel citosol, di regola in posizione periferica rispetto al nucleo.",
    com:"Una pila di sacchi appiattiti e incurvati.",
    fa:"Entra in gioco <strong>dopo</strong> la sintesi proteica: lì dentro viene fatta una <strong>selezione delle proteine destinate a uscire</strong> dal corpo cellulare.",
    con:"Riceve dal reticolo endoplasmatico; smista verso il resto del neurone, terminali assonici compresi.",
    rompe:"—",
    esame:"Va sempre detto in contrapposizione al reticolo: reticolo = <em>restano dentro</em>, Golgi = <em>devono uscire</em>.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.mitocondri", nome:"Mitocondri", mesh:"Neu_Mitocondri",
  alias:["mitocondrio"], tinta:"mitocondrio", esplodi:[0.35,-0.85,1.1],
  geo:{ t:"sparsi", n:7, seme:23, guscio:[0.50,0.80],
        geo:{ t:"capsula", r:0.065, h:0.20 }, ruotaACaso:true },
  scheda:{
    dove:"Galleggiano nel citosol del corpo cellulare.",
    com:"Strutture <strong>a forma di cetriolo</strong> — la similitudine è della lezione.",
    fa:"Al loro interno avviene il <strong>ciclo di Krebs</strong>, che produce <strong>ATP</strong> (adenosina trifosfato): la sorgente energetica della cellula. <em>Senza mitocondri la cellula non avrebbe energia.</em>",
    con:"Alimentano tutto il resto, a cominciare dalle pompe ioniche, che consumano energia per mantenere il potenziale di riposo.",
    rompe:"—",
    esame:"Tre parole e basta: cetriolo, ciclo di Krebs, ATP. È la domanda più corta del blocco organelli.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.dendriti", nome:"Albero dendritico", mesh:"Neu_Dendriti",
  alias:["dendriti","dendrite","rami dendritici","albero dendritico"], tinta:"dendrite",
  esplodi:[-1.5,0.25,0],
  geo:{ t:"albero", origine:[-0.85,0,0], dir:[-1,0.12,0], lung:1.5, r:0.105,
        livelli:4, rami:3, apertura:42, seme:11, decadi:0.62 },
  scheda:{
    dove:"Dipartono dal soma, dal lato opposto all'assone.",
    com:"Processi della cellula che escono dal soma <strong>come i rami di un albero</strong> — «dendrite» viene dal greco <em>dendros</em>, albero. L'insieme è l'<strong>albero dendritico</strong>, da cui si diramano i <strong>rami dendritici</strong>. Varietà amplissima di forme e grandezze: la tipologia dendritica serve infatti a classificare i neuroni.",
    fa:"Sono le <strong>antenne del neurone</strong>: <strong>raccolgono il messaggio del neurone precedente</strong> e lo inviano al corpo cellulare e poi al resto del neurone. La loro membrana porta i <strong>recettori</strong>, ed è quello che li rende antenne.",
    con:"Ricevono i bottoni sinaptici di <strong>migliaia</strong> di neuroni presinaptici, anche molto lontani. Verso l'interno, mandano al soma e poi al cono di emergenza.",
    rompe:"—",
    esame:"Qui si genera il <strong>potenziale graduato</strong>, non il potenziale d'azione: la membrana dendritica <strong>non ha i canali voltaggio-dipendenti</strong> nella misura in cui ce li ha l'assone. I potenziali graduati si propagano <strong>passivamente</strong> fino al soma, dove vengono <strong>integrati e sommati</strong>.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.spine", nome:"Spine dendritiche", mesh:"Neu_Spine",
  alias:["spina dendritica","spine"], tinta:"spina", esplodi:[-1.7,0.9,0.4],
  geo:{ t:"albero", origine:[-0.85,0,0], dir:[-1,0.12,0], lung:1.5, r:0.105,
        livelli:4, rami:3, apertura:42, seme:11, decadi:0.62,
        soloSpine:true, spina:{ r:0.035, passo:0.14 } },
  scheda:{
    dove:"Sui rami dendritici, non in tutti i neuroni ma nella maggior parte.",
    com:"<strong>Protuberanze</strong> caratteristiche della membrana dendritica.",
    fa:"<strong>Aumentano la superficie</strong> del dendrite che può ricevere input: un neurone con tante spine riceve più input di un neurone che ne ha di meno.",
    con:"Ospitano le sinapsi in arrivo dai bottoni presinaptici.",
    rompe:"—",
    esame:"È il ponte con la L13. Le spine sono una struttura <strong>dinamica</strong>: rendono conto della capacità dei neuroni di compensare i danni — non per rigenerazione cellulare, ma per <strong>neuroplasticità</strong>, cambiando forma e stabilendo circuiti nuovi, fino al <strong>recupero vicario</strong> delle funzioni perse. Sulla loro presenza si distinguono <strong>neuroni spinosi</strong> e <strong>non spinosi</strong>.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.cono", nome:"Cono di emergenza", mesh:"Neu_Cono",
  alias:["cono d'emergenza","monticolo assonico"], tinta:"cono", esplodi:[1.0,0.85,0],
  geo:{ t:"cono", r:0.30, h:0.50, pos:[1.05,0,0], rot:[0,0,-90] },
  scheda:{
    dove:"Il pezzo attaccato al corpo cellulare, all'inizio dell'assone.",
    com:"<strong>Triangolare</strong>. È una struttura di membrana plasmatica <strong>diversa da quella del soma</strong>.",
    fa:"È il punto in cui si <strong>genera il messaggio nervoso</strong> che poi parte lungo l'assone.",
    con:"Riceve dal soma la somma dei potenziali graduati, eccitatori e inibitori, arrivati dai dendriti; se la somma basta, innesca il potenziale d'azione.",
    rompe:"—",
    esame:"È la risposta alla domanda «<em>dove si genera il potenziale d'azione?</em>». Non nei dendriti, non nel soma: nel cono di emergenza, perché lì la membrana è diversa.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.assone", nome:"Assone", mesh:"Neu_Assone",
  alias:["neurite","cilindrasse"], tinta:"assone", esplodi:[1.2,-1.0,0],
  geo:{ t:"cilindro", r1:0.115, r2:0.115, h:7.4, pos:[5.0,0,0], rot:[0,0,-90] },
  scheda:{
    dove:"All'estremità del soma <strong>opposta</strong> ai dendriti.",
    com:"Fuoriesce dal soma come un <strong>tubicino molto sottile</strong> e a volte molto lungo: può raggiungere <strong>un metro</strong>. Prima il cono di emergenza, poi il filamento, poi le diramazioni.",
    fa:"È la zona dove si innesca il <strong>messaggio elettrico</strong> sotto forma di impulsi, e la struttura che lo trasporta verso gli altri neuroni o direttamente verso apparati effettori — <strong>muscoli</strong> o <strong>ghiandole</strong>.",
    con:"A monte il cono di emergenza; a valle i terminali assonici e i bottoni sinaptici, quindi i dendriti dei neuroni <strong>post-sinaptici</strong>.",
    rompe:"—",
    esame:"Due sinonimi da avere pronti: <strong>neurite</strong> e <strong>cilindrasse</strong>. E la domanda sulla velocità: dipende dal <strong>diametro</strong> — «come un filo elettrico, più il diametro è spesso, più il messaggio è veloce» — e dalla <strong>guaina mielinica</strong>.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.mielina", nome:"Guaina mielinica", mesh:"Neu_Mielina",
  alias:["mielina","guaina"], tinta:"mielina", esplodi:[1.0,1.3,0],
  geo:{ t:"ripeti", n:6, da:[2.05,0,0], passo:[1.18,0,0],
        geo:{ t:"capsula", r:0.235, h:0.74, rot:[0,0,90] } },
  scheda:{
    dove:"Attorno al filamento dell'assone — <strong>non</strong> sul soma, <strong>non</strong> sui dendriti.",
    com:"Una struttura <strong>a forma di salsicciotto</strong> attorno al filamento assonale: una membrana protettiva fatta di <strong>grasso e proteine</strong>, «un po' come la gomma ricopre i fili elettrici». <strong>Non è continua</strong>: è interrotta dai nodi di Ranvier.",
    fa:"<strong>Velocizza l'impulso nervoso.</strong> Funziona da isolante e permette al messaggio elettrico di <strong>saltare</strong> da un nodo all'altro, abbreviando le distanze da percorrere: è la <strong>conduzione saltatoria</strong>.",
    con:"Nel sistema nervoso centrale è prodotta dagli <strong>oligodendrociti</strong>, cellule della macroglia che rivestono gli assoni.",
    rompe:"—",
    esame:"È anche la spiegazione della <strong>sostanza bianca</strong>: dove c'è bianco ci sono <strong>fibre</strong> mielinizzate, dove c'è grigio ci sono i <strong>somi</strong>. Vale per il midollo spinale come per il corpo calloso.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.ranvier", nome:"Nodi di Ranvier", mesh:"Neu_Ranvier",
  alias:["nodo di ranvier","ranvier"], tinta:"ranvier", esplodi:[1.0,-1.35,0],
  geo:{ t:"ripeti", n:5, da:[2.64,0,0], passo:[1.18,0,0],
        geo:{ t:"toro", r:0.135, tubo:0.055, rot:[0,90,0] } },
  scheda:{
    dove:"Lungo l'assone, negli spazi tra un segmento di guaina mielinica e il successivo.",
    com:"Le <strong>interruzioni</strong> della guaina: tratti di assone scoperto, ricchi di canali voltaggio-dipendenti.",
    fa:"Sono i punti da cui il potenziale d'azione <strong>riparte</strong>. È per questo che la conduzione si dice <strong>saltatoria</strong>: l'impulso salta da un nodo all'altro anziché percorrere tutta la membrana.",
    con:"Con i segmenti di guaina che li separano, e con il cono di emergenza da cui il primo impulso è partito.",
    rompe:"—",
    esame:"Sono la risposta alla domanda «<em>a che serve che la guaina sia interrotta?</em>»: se fosse continua non ci sarebbe nulla da cui ripartire. L'interruzione non è un difetto, è il meccanismo.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.terminali", nome:"Terminali assonici", mesh:"Neu_Terminali",
  alias:["terminale assonico","terminali","diramazioni assoniche"], tinta:"terminale",
  esplodi:[1.6,0.3,0],
  geo:{ t:"albero", origine:[8.72,0,0], dir:[1,0,0], lung:0.70, r:0.075,
        livelli:3, rami:3, apertura:46, seme:5, decadi:0.66 },
  scheda:{
    dove:"Alla fine dell'assone. L'assone è un filo unico fino a un certo punto, poi si dirama.",
    com:"Possono essere <strong>centinaia, anche migliaia</strong>. Alla fine di ogni diramazione c'è un <strong>bottone sinaptico</strong>.",
    fa:"Portano il messaggio in arrivo fino al punto di contatto. La diramazione consente a <strong>un singolo neurone di trasmettere a migliaia di neuroni successivi</strong>.",
    con:"Prendono contatto con i dendriti dei neuroni <strong>post-sinaptici</strong>.",
    rompe:"—",
    esame:"La frase da tenere: lo stesso neurone è <strong>presinaptico</strong> rispetto a quello che segue e <strong>post-sinaptico</strong> rispetto a quello che precede. Non è una proprietà della cellula, è una posizione nella catena.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.bottoni", nome:"Bottoni sinaptici", mesh:"Neu_Bottoni",
  alias:["bottone sinaptico","bottoni","terminale presinaptico"], tinta:"bottone",
  esplodi:[1.9,-0.4,0],
  geo:{ t:"albero", origine:[8.72,0,0], dir:[1,0,0], lung:0.70, r:0.075,
        livelli:3, rami:3, apertura:46, seme:5, decadi:0.66,
        soloPunte:true, punta:{ r:0.105 } },
  scheda:{
    dove:"All'estremità di ogni diramazione dei terminali assonici.",
    com:"Rigonfiamenti. Sulla loro membrana si posizionano le <strong>vescicole sinaptiche</strong>.",
    fa:"Sono il lato <strong>presinaptico</strong> della sinapsi. Quando arriva la scarica di potenziale d'azione, le vescicole <strong>si fondono con la membrana</strong> del bottone e lasciano fluire fuori le molecole di neurotrasmettitore.",
    con:"Affacciati sui dendriti del neurone post-sinaptico, separati da uno <strong>spazio extracellulare vuoto</strong>.",
    rompe:"—",
    esame:"La sinapsi avviene <strong>tra i bottoni sinaptici e i dendriti</strong> del neurone successivo: è la definizione, va detta così. E qui il messaggio <strong>elettrico diventa chimico</strong> per poi ridiventare elettrico — è il motivo per cui si dice linguaggio <em>elettrochimico</em>.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } },

{ id:"neu.vescicole", nome:"Vescicole sinaptiche", mesh:"Neu_Vescicole",
  alias:["vescicola sinaptica","vescicole","neurotrasmettitori"], tinta:"vescicola",
  esplodi:[2.1,0.9,0.5],
  geo:{ t:"sparsi", n:16, seme:31, guscio:[0.0,0.055], centro:[9.42,0,0],
        geo:{ t:"sfera", r:0.020, seg:10 } },
  scheda:{
    dove:"Dentro i bottoni sinaptici, addossate alla membrana presinaptica.",
    com:"<strong>Palline di membrana plasmatica</strong> che contengono le molecole neurotrasmettitoriali.",
    fa:"Trasportano i <strong>neurotrasmettitori</strong>, prodotti nel soma e racchiusi qui appena prodotti. All'arrivo dell'impulso si <strong>fondono</strong> con la membrana del bottone e liberano il contenuto nello spazio sinaptico.",
    con:"Il neurotrasmettitore viene captato dai <strong>recettori</strong> sulla membrana dendritica del neurone post-sinaptico — recettori <strong>specifici</strong>: il dendrite si attiva soltanto se gli arriva la molecola giusta.",
    rompe:"—",
    esame:"I due più rappresentati sono il <strong>glutammato</strong> (eccitatorio) e il <strong>GABA</strong> (inibitorio), <em>trasversali</em> a tutti i sistemi; acetilcolina, dopamina e serotonina sono più specifici. Il segnale si spegne in due modi: <strong>degradazione enzimatica</strong> o <strong><em>reuptake</em></strong>, la ricaptazione — ed è lì che agiscono molti farmaci.",
    fonte:{ lez:"L08", cap:"C20", arg:"D21" } } }

]});

/* =========================================================
   2 — L'ENCEFALO                              (L09, L10)
   Geometria da modelli/encefalo.glb, costruito da
   blender/atlante.py. Assi del modello caricato:
   +x destra, +y dorsale, +z rostrale (il cervello guarda
   verso chi osserva). Le strutture pari escono come
   <mesh>_L e <mesh>_R.
   ========================================================= */
PGE.atlante.sezioni.push({
id:"encefalo", titolo:"L'encefalo", occhiello:"Lezioni 9 e 10 — Il sistema nervoso centrale",
sommario:"L'organizzazione è <strong>gerarchica e caudo-rostrale</strong>: le strutture più basse sono le più arcaiche e reggono quelle più recenti. Si sale dal midollo spinale al tronco, poi cervelletto e diencefalo, infine gli emisferi. Stacca i pezzi dall'alto verso il basso e l'ordine dell'esame viene da sé.",
fonte:{ lez:"L09", cap:"C22", arg:"D22" },
modello:"modelli/encefalo.glb?v=18",
scala:1, raggioEsplosione:1.45,
camera:{ pos:[6.80,0.02,0.35], mira:[0.12,-0.25,0.00], min:0.4, max:40 },
  viste:{
    laterale:  { pos:[6.80,0.02,0.35], mira:[0.12,-0.25,0.00] },
    sinistra:  { pos:[-6.40,0.08,0.40], mira:[-0.05,-0.05,0.02] },
    dorsale:   { pos:[0.10,5.40,0.20], mira:[0,0.02,0] },
    ventrale:  { pos:[0.10,-5.10,0.35], mira:[0,-0.08,0] },
    mediale:   { pos:[-4.90,0.12,0.10], mira:[0.18,0.08,0.00] },
    frontale:  { pos:[0.12,0.14,4.70], mira:[0,0.02,0.04] }
  },
gruppi:[
  ["lobi",     "I lobi cerebrali"],
  ["aree",     "Le aree funzionali"],
  ["sotto",    "Sottocorticali e sistema limbico"],
  ["primitivo","Il cervello primitivo"],
  ["liquor",   "Ventricoli e liquor"]
],
percorso:[
  { id:"gerarchia", lez:"L09", titolo:"La gerarchia",
    testo:"Il principio del modulo: <strong>a una gerarchia anatomica corrisponde una gerarchia funzionale</strong>. Si sale dal basso. Le strutture più caudali sono le più arcaiche e reggono la sopravvivenza; sopra poggiano strutture più recenti. Il paradosso da citare: un danno al tronco uccide, un danno alla corteccia frontale no.",
    vista:"laterale", aspetto:"studio", esplodi:0, taglio:null, sfuma:1 },
  { id:"meningi", lez:"L09", titolo:"Le tre meningi",
    testo:"Dall'esterno: <strong>dura madre</strong> (come il cuoio, a contatto con l'osso), <strong>aracnoide</strong> (tela di ragno), <strong>pia madre</strong> (sottile, a contatto col tessuto). Fra dura e aracnoide i vasi: se si rompono, ematoma subdurale. Fra aracnoide e pia, il liquor.",
    accendi:["enc.meningi"], meningi:true, vista:"laterale", aspetto:"studio", sfuma:0.28, esplodi:0, taglio:null },
  { id:"liquor", lez:"L09", titolo:"Il liquor e i ventricoli",
    testo:"Il cervello <strong>galleggia</strong> nel liquor. Quattro ventricoli: due <strong>laterali</strong>, il <strong>terzo</strong> (mediale), il <strong>quarto</strong> (a livello del cervelletto). Prodotto dai plessi corioidei, scende, esce nello spazio subaracnoideo, viene riassorbito. Se il ricircolo si blocca: idrocefalo.",
    accendi:["enc.ventricoli","enc.ventricolo.terzo","enc.ventricolo.quarto"],
    vista:"mediale", taglio:"sagittale", k:0.5, aspetto:"studio", sfuma:0.16, esplodi:0 },
  { id:"midollo", lez:"L09", titolo:"Il midollo spinale",
    testo:"La struttura più arcaica: alla nascita è già formata e nell'adulto finisce alle vertebre lombari. In sezione, la <strong>farfalla grigia</strong>. Corno dorsale = ingresso sensitivo; corno ventrale = uscita motoria. Sotto, la <strong>cauda equina</strong>: solo assoni, ed è lì l'epidurale. Bianco = fibre, grigio = somi.",
    accendi:["enc.midollo"], vista:"laterale", inquadra:"enc.midollo", taglio:null, aspetto:"didattico", sfuma:0.2, esplodi:0.15 },
  { id:"tronco", lez:"L09", titolo:"Il tronco dell'encefalo",
    testo:"Tre pezzi, dal basso: <strong>bulbo</strong>, <strong>ponte</strong>, <strong>mesencefalo</strong>. Regolano pressione, respiro e sonno, e da qui escono i <strong>nervi cranici</strong>. Dentro, la <strong>formazione reticolare</strong>: un circuito diffuso, non un nucleo. Regola vigilanza, sonno-veglia, tono. Un danno qui fa morire.",
    accendi:["enc.tronco.bulbo","enc.tronco.ponte","enc.tronco.mesencefalo","enc.reticolare","enc.nervi.cranici"],
    vista:"laterale", stringi:true, taglio:null, aspetto:"didattico", sfuma:0.08, esplodi:0.22 },
  { id:"cervelletto", lez:"L09", titolo:"Il cervelletto",
    testo:"Sta <strong>dorsalmente al ponte</strong>. Pur essendo arcaico ha più neuroni di ogni altra parte, disposti in un circuito che si ripete. Funzione: <strong>coordinazione</strong>, tono, equilibrio. L'alcol lo inibisce: da lì l'atassia, il cammino a base allargata.",
    accendi:["enc.cervelletto"], vista:"laterale", inquadra:"enc.cervelletto", taglio:null, aspetto:"didattico", sfuma:0.22, esplodi:0.2 },
  { id:"diencefalo", lez:"L09", titolo:"Il diencefalo",
    testo:"Circonda il terzo ventricolo. Il <strong>talamo</strong>, più dorsale, è la stazione in cui fanno tappa <strong>tutte le vie sensoriali</strong> prima della corteccia. L'<strong>ipotalamo</strong>, più ventrale, tiene l'omeostasi e comanda l'<strong>ipofisi</strong>.",
    accendi:["enc.dienc.talamo","enc.dienc.ipotalamo","enc.ipofisi","enc.ventricolo.terzo"],
    vista:"mediale", stringi:true, taglio:"sagittale", k:0.48, aspetto:"didattico", sfuma:0.14, esplodi:0.15 },
  { id:"termini", lez:"L10", titolo:"Paleoencefalo, mesencefalo, prosencefalo",
    testo:"La terza terminologia, quella che la docente vuole. <strong>Paleoencefalo</strong>: cervelletto + ponte + bulbo. <strong>Mesencefalo</strong>: il mesencefalo. <strong>Prosencefalo</strong>: diencefalo + telencefalo, la parte più rostrale, quella delle funzioni mentali superiori. Il midollo sta fuori da questi tre nomi.",
    accendi:["enc.cervelletto","enc.tronco.ponte","enc.tronco.bulbo","enc.tronco.mesencefalo","enc.dienc.talamo","enc.dienc.ipotalamo"],
    vista:"laterale", stringi:true, taglio:null, aspetto:"didattico", sfuma:0.22, esplodi:0.32 },
  { id:"gangli", lez:"L10", titolo:"I gangli della base",
    testo:"Gangli vuol dire nuclei, sotto la corteccia, sotto la porzione anteriore dei ventricoli laterali: <strong>caudato</strong>, <strong>putamen</strong>, <strong>globo pallido</strong>. Selezionano e avviano il movimento volontario. Il circuito: corteccia → gangli → tronco, e attraverso il talamo di nuovo alle aree motorie. Il cervelletto coordina; i gangli avviano.",
    accendi:["enc.gangli.caudato","enc.gangli.putamen","enc.gangli.pallido"],
    vista:"mediale", stringi:true, taglio:"sagittale", k:0.55, aspetto:"didattico", sfuma:0.12, esplodi:0.12 },
  { id:"limbico", lez:"L10", titolo:"Il sistema limbico",
    testo:"Nella parte mesiale degli emisferi. Regola ciò che soddisfa bisogni motivazionali ed emotivi, e contiene il circuito del <em>reward</em>. L'<strong>ippocampo</strong> (il cavalluccio) sta sul pavimento del corno temporale e memorizza a lungo termine. L'<strong>amigdala</strong> (la mandorla) sta più rostrale e dà il significato emotivo. L'<strong>insula</strong> è il lobo più arcaico, sepolto in Silvio.",
    accendi:["enc.limbico.ippocampo","enc.limbico.amigdala","enc.lobo.insula"],
    vista:"laterale", stringi:true, taglio:null, aspetto:"didattico", sfuma:0.18, esplodi:0.35 },
  { id:"circonvoluzioni", lez:"L10", titolo:"Perché è tutta piegata",
    testo:"La corteccia è circonvoluta per far stare molto tessuto in poco cranio: stesa, sarebbe un foglio di giornale. <strong>Solchi</strong> e scissure sono le parti concave, i <strong>giri</strong> le convesse. I mammiferi più semplici hanno cervelli quasi lisci.",
    vista:"laterale", taglio:null, aspetto:"studio", sfuma:1, esplodi:0, aree:false },
  { id:"scissure", lez:"L10", titolo:"Le quattro scissure",
    testo:"Servono a orientarsi. La <strong>longitudinale</strong> separa i due emisferi. La <strong>centrale</strong>, o di Rolando, separa davanti e dietro. La <strong>laterale</strong>, o di Silvio, separa sopra e sotto. La <strong>parieto-occipitale</strong> separa parietale e occipitale. I colori qui sono i quattro lobi che quelle scissure delimitano.",
    accendi:["enc.lobo.frontale","enc.lobo.parietale","enc.lobo.temporale","enc.lobo.occipitale"],
    vista:"laterale", taglio:null, aspetto:"didattico", sfuma:0.35, esplodi:0.12 },
  { id:"lobi", lez:"L10", titolo:"I cinque lobi",
    testo:"Prendono il nome dalle ossa. <strong>Frontale</strong>: motori e funzioni superiori, il più evoluto. <strong>Parietale</strong>: tatto, propriocezione, dolore, temperatura. <strong>Temporale</strong>: udito, equilibrio, linguaggio, dietro l'orecchio. <strong>Occipitale</strong>: vista. <strong>Insula</strong>: dentro Silvio, motivazione ed emozione.",
    accendi:["enc.lobo.frontale","enc.lobo.parietale","enc.lobo.temporale","enc.lobo.occipitale","enc.lobo.insula"],
    vista:"laterale", taglio:null, aspetto:"didattico", sfuma:0.4, esplodi:0.28 },
  { id:"primarie", lez:"L10", titolo:"Le aree primarie",
    testo:"Prima tappa, elementare. Motoria: nel frontale, subito davanti a Rolando. Sensitiva: nel parietale, subito dietro. Visiva: occipitale. Uditiva: temporale. Gustativa dentro la sensitiva; olfattiva nell'insula, che è archicorteccia. Più la funzione è semplice, più i neuroni sono specializzati.",
    accendi:["enc.area.motoria","enc.area.somato","enc.area.visiva","enc.area.uditiva"],
    aree:true, vista:"laterale", taglio:null, aspetto:"didattico", sfuma:0.4, esplodi:0 },
  { id:"linguaggio", lez:"L10", titolo:"Broca e Wernicke",
    testo:"Stanno a <strong>sinistra</strong> nella grande maggioranza delle persone, per questo le guardiamo da quel lato. <strong>Broca</strong>, nel frontale: produzione, area motoria del linguaggio. Se si lesiona, si comprende e non si parla. <strong>Wernicke</strong>, nel temporale: comprensione, area sensoriale. Se si lesiona, si parla e non si comprende.",
    accendi:["enc.area.broca","enc.area.wernicke"],
    aree:true, vista:"sinistra", taglio:null, aspetto:"didattico", sfuma:0.28, esplodi:0.15 },
  { id:"associative", lez:"L10", titolo:"Le aree associative",
    testo:"Sono tre quarti della corteccia e integrano informazioni di natura diversa. <strong>Parieto-temporo-occipitale</strong>: la penna vista, toccata e nominata diventa lo stesso oggetto. <strong>Prefrontale</strong>: pianificazione, astrazione, ragionamento. <strong>Limbica</strong>: la connotazione emotiva. In ingresso si va da primaria ad associativa; in uscita, il contrario.",
    accendi:["enc.area.pto","enc.area.prefrontale","enc.area.limbica"],
    aree:true, vista:"laterale", taglio:null, aspetto:"didattico", sfuma:0.32, esplodi:0.22 },
  { id:"calloso", lez:"L10", titolo:"Il corpo calloso e lo split brain",
    testo:"I due emisferi agiscono insieme perché li legano le commissure; la più grande è il <strong>corpo calloso</strong>, fibre mielinizzate, quindi bianche. Se lo si recide, lo split brain: una spazzola nell'emicampo sinistro arriva a destra, la mano sinistra la prende, la voce non sa dirlo. Il linguaggio è a sinistra.",
    accendi:["enc.corpocalloso"],
    vista:"mediale", taglio:"sagittale", k:0.5, aspetto:"studio", sfuma:0.2, esplodi:0 },
  { id:"trappola", lez:"L10", titolo:"La trappola della lateralizzazione",
    testo:"A metà lezione l'attribuzione esce <strong>invertita</strong>. Vale il riepilogo: emisfero <strong>sinistro</strong> = linguaggio, logica, analisi, in sequenza; emisfero <strong>destro</strong> = spazio, musica, immaginazione, in blocco. Tre conferme: Broca e Wernicke sono a sinistra, lo split brain funziona solo così, e le slide dicono così.",
    accendi:["enc.area.broca","enc.area.wernicke","enc.corpocalloso"],
    aree:true, vista:"sinistra", taglio:null, aspetto:"didattico", sfuma:0.25, esplodi:0.12 }
],

parti:[

/* ---------- I LOBI ---------- */
{ id:"enc.lobo.frontale", nome:"Lobo frontale", mesh:"Enc_Lobo_Frontale", pari:true,
  gruppo:"lobi", alias:["frontale","neoencefalo","telencefalo","prosencefalo","scissura di rolando","scissura centrale","solchi","giri"], tinta:"frontale", esplodi:[0.40,0.80,1.35],
  scheda:{
    dove:"Sotto la fronte, <strong>anteriore alla scissura di Rolando</strong>. Prende il nome dall'osso cranico che gli sta sopra — vale per tutti i lobi.",
    com:"Superficie circonvoluta: parti concave (<strong>solchi</strong> e <strong>scissure</strong>) e parti convesse (<strong>giri</strong>).",
    fa:"È la parte <strong>filogeneticamente più evoluta</strong> che abbiamo: tutte le competenze più complesse dell'uomo sono mediate soprattutto da strutture che stanno qui. Contiene la <strong>corteccia motoria primaria</strong>, l'<strong>area di Broca</strong> e l'<strong>area associativa prefrontale</strong>.",
    con:"Manda i comandi ai motoneuroni del midollo spinale; riceve dai gangli della base <em>via talamo</em> gli input per l'avvio dei movimenti volontari.",
    rompe:"Lesioni frontali danno l'<strong>afasia di Broca</strong>: deficit della <strong>produzione</strong> linguistica — il paziente comprende benissimo, ma non riesce a fare discorsi di senso compiuto.",
    esame:"Il lobo frontale è <em>anteriore</em> alla scissura di Rolando, il parietale <em>posteriore</em>. Su quella scissura si affacciano le due aree primarie: motoria davanti, sensitiva dietro.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.lobo.parietale", nome:"Lobo parietale", mesh:"Enc_Lobo_Parietale", pari:true,
  gruppo:"lobi", alias:["parietale","scissura parieto-occipitale"], tinta:"parietale", esplodi:[0.40,1.15,-0.50],
  scheda:{
    dove:"<strong>Posteriore alla scissura di Rolando</strong>, sotto la parete del cranio.",
    com:"Come gli altri lobi: giri, solchi, scissure. Confina in avanti con il frontale, in basso con il temporale, indietro con l'occipitale lungo la <strong>scissura parieto-occipitale</strong>.",
    fa:"Responsabile soprattutto dell'elaborazione delle funzioni sensoriali <strong>tattili, propriocettive, dolorifiche e termiche</strong>. Contiene la <strong>corteccia sensitiva primaria</strong>.",
    con:"Riceve dalle vie ascendenti, che <strong>decussano</strong>: gli input arrivano dalla parte <strong>controlaterale</strong> del corpo. Partecipa all'<strong>area parieto-temporo-occipitale</strong>.",
    rompe:"—",
    esame:"Il dolore e la temperatura arrivano qui, non nel temporale. E dentro la corteccia sensitiva primaria sta anche la <strong>corteccia gustativa primaria</strong>.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.lobo.temporale", nome:"Lobo temporale", mesh:"Enc_Lobo_Temporale", pari:true,
  gruppo:"lobi", alias:["temporale","scissura di silvio","scissura laterale"], tinta:"temporale", esplodi:[1.45,-0.70,0.35],
  scheda:{
    dove:"<strong>Caudalmente alla scissura di Silvio</strong>. L'osso temporale sta sotto l'orecchio: il lobo temporale è proprio dietro l'orecchio.",
    com:"Nel suo corno temporale, sul pavimento del ventricolo laterale, alloggia l'<strong>ippocampo</strong>.",
    fa:"Media soprattutto l'elaborazione sensoriale <strong>uditiva</strong> e <strong>vestibolare</strong>, e contiene centri molto importanti per l'<strong>elaborazione linguistica</strong>. Qui sta l'<strong>area uditiva primaria</strong> e, nella regione parieto-temporale, l'<strong>area di Wernicke</strong>.",
    con:"Con l'ippocampo e l'amigdala che gli stanno dentro; con le aree uditive da cui riceve; con l'area parieto-temporo-occipitale.",
    rompe:"Un danno nel lobo temporale dà l'<strong>afasia di Wernicke</strong>: il paziente <strong>parla bene ma non comprende</strong> ciò che gli viene detto. È l'afasia <em>opposta</em> a quella di Broca.",
    esame:"La coppia Broca / Wernicke va detta sempre in parallelo: frontale = <strong>produzione</strong> (area motoria del linguaggio), temporale = <strong>comprensione</strong> (area sensoriale del linguaggio, non a caso vicina alle aree uditive).",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.lobo.occipitale", nome:"Lobo occipitale", mesh:"Enc_Lobo_Occipitale", pari:true,
  gruppo:"lobi", alias:["occipitale"], tinta:"occipitale", esplodi:[0.40,0.40,-1.50],
  scheda:{
    dove:"<strong>Caudalmente alla scissura parieto-occipitale</strong>, proprio dietro l'occipite.",
    com:"Il più piccolo dei quattro lobi maggiori.",
    fa:"Contiene strutture e circuiti che mediano prevalentemente l'informazione sensoriale di tipo <strong>visivo</strong>. Vi sta l'<strong>area visiva primaria</strong>.",
    con:"Riceve le vie visive; proietta in avanti verso le aree visive di ordine superiore e verso l'area parieto-temporo-occipitale.",
    rompe:"—",
    esame:"La scissura parieto-occipitale è la quarta delle fenditure principali ed è posta <strong>dorsalmente</strong>: le altre tre sono la longitudinale (separa i due emisferi, si vede da sopra), la centrale o di Rolando e la laterale o di Silvio.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.lobo.insula", nome:"Lobo dell'insula", mesh:"Enc_Lobo_Insula", pari:true,
  gruppo:"lobi", alias:["insula","lobo insulare","archicorteccia","corteccia olfattiva"], tinta:"insula", esplodi:[1.70,-0.15,0.20],
  scheda:{
    dove:"Sepolto in profondità nella scissura di Silvio. Si vede <strong>dividendo in due il cervello</strong>, resezionando il corpo calloso e guardando l'emisfero dall'interno.",
    com:"È il <strong>quinto lobo</strong>, isolato da alcuni studiosi in aggiunta ai quattro classici.",
    fa:"È la parte <strong>filogeneticamente più arcaica</strong> della corteccia cerebrale, ed è implicata — insieme alle altre strutture del sistema limbico — nella regolazione del comportamento <strong>motivazionale ed emotivo</strong>. Ospita la <strong>corteccia olfattiva primaria</strong> (archicorteccia).",
    con:"Con il sistema limbico.",
    rompe:"—",
    esame:"È l'unico lobo che non prende il nome da un osso cranico e l'unico che non si vede da fuori. Se la domanda è «quanti sono i lobi», la risposta giusta è <em>quattro, più un quinto isolato da alcuni studiosi: l'insula</em>.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

/* ---------- LE AREE FUNZIONALI ---------- */
{ id:"enc.area.motoria", nome:"Corteccia motoria primaria", mesh:"Enc_Area_Motoria", pari:true,
  gruppo:"aree", alias:["area motoria primaria","area motoria","corteccia motoria","omuncolo motorio"],
  tinta:"aMotoria", esplodi:[0.3,1.0,0.35],
  scheda:{
    dove:"<strong>Anteriore</strong> alla scissura di Rolando, quindi nel lobo frontale, sul giro precentrale.",
    com:"Area primaria, prima e ultima tappa corticale a seconda della direzione. Nella sua colonna corticale è più rappresentato lo <strong>strato V</strong>, quello delle cellule piramidali che manda efferenze fuori dalla corteccia.",
    fa:"È la <strong>zona di <em>output</em></strong> della corteccia cerebrale: da qui escono i comandi per i <strong>motoneuroni del midollo spinale</strong> che bersagliano i muscoli volontari.",
    con:"Riceve dalle aree di ordine superiore — in uscita la direzione è <strong>invertita</strong>: associativa → terziaria → secondaria → primaria. Riceve anche dai gangli della base attraverso il talamo.",
    rompe:"—",
    esame:"Anche questa via è <strong>crociata</strong>: l'emisfero sinistro comanda la parte destra del corpo. Ha il suo <strong>omuncolo motorio</strong>, ma con un criterio diverso da quello sensoriale: la quantità di corteccia dipende dalla <strong>complessità dei movimenti</strong>, non dal volume del distretto — il dito ha più corteccia della gamba.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.somato", nome:"Corteccia sensitiva primaria", mesh:"Enc_Area_Somato", pari:true,
  gruppo:"aree", alias:["area somatosensoriale primaria","corteccia somatosensoriale","area sensitiva primaria","somatosensoriale","omuncolo"],
  tinta:"aSomato", esplodi:[0.3,1.0,-0.2],
  scheda:{
    dove:"Subito <strong>posteriore</strong> alla scissura di Rolando, nel lobo parietale, sul giro postcentrale.",
    com:"Nella sua colonna corticale è più rappresentato lo <strong>strato IV</strong>, quello dei granuli, che riceve le afferenze.",
    fa:"È il <strong>primo stadio corticale</strong> raggiunto dall'afferenza che viene dai centri più caudali: raccoglie l'afferenza <strong>tattile, dolorifica, termica e propriocettiva</strong>. Al suo interno sta anche la corteccia gustativa primaria.",
    con:"Riceve dal talamo, che è la tappa obbligata di tutte le vie sensoriali; proietta alle aree secondarie e terziarie.",
    rompe:"—",
    esame:"Due caratteristiche da dire insieme. <strong>Le vie sono crociate</strong>: la maggior parte delle vie ascendenti <strong>decussa</strong>, quindi la parte sinistra del corpo finisce nell'emisfero destro. E <strong>la quantità di corteccia è proporzionale alla sensibilità</strong>, non al volume: da qui l'<strong>omuncolo</strong> sensoriale di <strong>Penfield</strong>, con una bocca enorme e un tronco piccolissimo.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.visiva", nome:"Area visiva primaria", mesh:"Enc_Area_Visiva", pari:true,
  gruppo:"aree", alias:["corteccia visiva primaria","area visiva","corteccia visiva"],
  tinta:"aVisiva", esplodi:[0.2,0.2,-1.25],
  scheda:{
    dove:"Nel <strong>lobo occipitale</strong>.",
    com:"Area primaria: risponde a stimoli elementari, con neuroni molto <strong>specializzati</strong> per caratteristiche molto specifiche.",
    fa:"Prima tappa corticale dell'informazione <strong>visiva</strong>.",
    con:"Riceve dal talamo; proietta alle aree visive di ordine superiore, che fanno una <strong>sintesi</strong> di quanto elaborato nella primaria, e all'area parieto-temporo-occipitale.",
    rompe:"—",
    esame:"Il criterio generale delle aree: <em>più semplice è la funzione, più i neuroni sono specializzati; più complessa è la funzione, più la specializzazione è flessibile</em> e le popolazioni rispondono a caratteristiche ampie degli stimoli.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.uditiva", nome:"Area uditiva primaria", mesh:"Enc_Area_Uditiva", pari:true,
  gruppo:"aree", alias:["corteccia uditiva primaria","area uditiva"],
  tinta:"aUditiva", esplodi:[1.15,-0.2,0.3],
  scheda:{
    dove:"Nel <strong>lobo temporale</strong>.",
    com:"Area primaria.",
    fa:"Prima tappa corticale dell'informazione <strong>uditiva</strong>.",
    con:"Riceve le afferenze uditive, che fanno tappa nel tronco dell'encefalo e nel talamo. È <strong>vicina all'area di Wernicke</strong>, e non per caso.",
    rompe:"—",
    esame:"La vicinanza spiega la funzione: l'area di Wernicke è definita <strong>area sensoriale del linguaggio</strong> proprio perché sta accanto alle aree uditive — comprendere il linguaggio vuol dire prima di tutto sentirlo.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.broca", nome:"Area di Broca", mesh:"Enc_Area_Broca",
  gruppo:"aree", alias:["broca","area motoria del linguaggio"], tinta:"aBroca",
  esplodi:[-1.15,0.1,0.7],
  scheda:{
    dove:"Nel <strong>lobo frontale</strong>, nell'emisfero <strong>sinistro</strong> nella grande maggioranza delle persone.",
    com:"Area associativa.",
    fa:"È coinvolta nella <strong>produzione</strong> linguistica: per questo è definita <strong>area motoria del linguaggio</strong>.",
    con:"Con l'area di Wernicke, e con le aree motorie che eseguono l'articolazione.",
    rompe:"<strong>Afasia di Broca</strong>: il paziente <strong>comprende benissimo</strong> ciò che ascolta e gli dà un senso, ma <strong>non riesce a fare discorsi di senso compiuto</strong>. È così che l'area è stata identificata.",
    esame:"Broca e Wernicke sono la prova che l'emisfero <strong>sinistro</strong> media le abilità verbali e linguistiche. Se in sede d'esame vi viene il dubbio sulla lateralizzazione, ripartite da qui.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.wernicke", nome:"Area di Wernicke", mesh:"Enc_Area_Wernicke",
  gruppo:"aree", alias:["wernicke","area sensoriale del linguaggio"], tinta:"aWernicke",
  esplodi:[-1.25,-0.15,-0.35],
  scheda:{
    dove:"Nel <strong>lobo temporale</strong>, regione parieto-temporale, emisfero <strong>sinistro</strong>. Vicina alle aree uditive.",
    com:"Area associativa.",
    fa:"È coinvolta nella <strong>comprensione</strong> del linguaggio: capire ciò che gli altri dicono e ciò che leggiamo. Per questo è definita <strong>area sensoriale del linguaggio</strong>.",
    con:"Con l'area di Broca e con l'area uditiva primaria che le sta accanto.",
    rompe:"<strong>Afasia di Wernicke</strong>: il paziente <strong>riesce a parlare bene ma non comprende</strong> ciò che gli viene detto.",
    esame:"Le due afasie si chiedono in coppia e si sbagliano invertendole. Mnemonica dalla lezione: il danno sta dove sta l'area, e l'area fa ciò che il nome dice — <em>motoria</em> del linguaggio produce, <em>sensoriale</em> del linguaggio comprende.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.pto", nome:"Area parieto-temporo-occipitale", mesh:"Enc_Area_PTO", pari:true,
  gruppo:"aree", alias:["area parieto temporo occipitale","pto","area associativa multimodale"],
  tinta:"aPto", esplodi:[1.0,0.35,-0.8],
  scheda:{
    dove:"A cavallo tra i lobi <strong>parietale, temporale e occipitale</strong>.",
    com:"Area associativa. Le aree associative sono <strong>tre quarti</strong> di tutta la corteccia cerebrale.",
    fa:"Fa la <strong>sintesi di tutte le modalità sensoriali</strong>. L'esempio della lezione: se vedo una penna so che è una penna, se la tocco so che è una penna, se sento la parola «penna» mi riferisco sempre allo stesso prototipo di oggetto. Questa <strong>unità di elaborazione</strong> è dovuta all'attività di quest'area.",
    con:"Integra gli output delle aree visive, uditive e somatosensoriali di ordine superiore.",
    rompe:"—",
    esame:"Le aree associative <strong>non</strong> sono specifiche per una modalità sensoriale né per i comandi motori: sono aree di sintesi, e sono i <strong>pilastri delle funzioni cognitive superiori</strong>.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.prefrontale", nome:"Area associativa prefrontale", mesh:"Enc_Area_Prefrontale", pari:true,
  gruppo:"aree", alias:["corteccia prefrontale","prefrontale","area prefrontale","funzioni esecutive"],
  tinta:"aPrefrontale", esplodi:[0.35,0.4,1.35],
  scheda:{
    dove:"Nella porzione più rostrale del <strong>lobo frontale</strong> — «la parte sotto la fronte».",
    com:"Area associativa. È la struttura filogeneticamente più recente dell'intero sistema nervoso centrale.",
    fa:"È la sede delle <strong>funzioni esecutive</strong>: <strong>pianificazione strategica mentale</strong> delle azioni e orientamento <strong>adattivo</strong> del comportamento. Pianificazione, immaginazione, astrazione, ragionamento.",
    con:"Riceve da tutte le aree associative e proietta verso le aree motorie di ordine superiore.",
    rompe:"Un danno qui produce <strong>deficit cognitivi</strong>, ma il soggetto <strong>continua a vivere normalmente</strong> dal punto di vista organico — al contrario di un danno al tronco, che fa morire, o al midollo, che fa paralizzare.",
    esame:"È la struttura che risponde alla domanda «che cosa distingue l'uomo»: non solo <strong>adattarsi</strong> all'ambiente rispondendo a esso, ma <strong>manipolare</strong> l'ambiente per renderlo confacente ai propri bisogni.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.area.limbica", nome:"Area associativa limbica", mesh:"Enc_Area_Limbica", pari:true,
  gruppo:"aree", alias:["area limbica","associativa limbica"], tinta:"amigdala",
  esplodi:[0.9,-0.2,0.2],
  scheda:{
    dove:"Vicino all'<strong>insula</strong> e alle strutture del <strong>sistema limbico</strong>.",
    com:"Area associativa, non primaria.",
    fa:"Conferisce una <strong>connotazione emotiva</strong> agli stimoli sensoriali.",
    con:"Con ippocampo, amigdala e corteccia.",
    rompe:"—",
    esame:"Le tre associative da saper nominare: <strong>PTO</strong>, <strong>prefrontale</strong>, <strong>limbica</strong>.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

/* ---------- SOTTOCORTICALI E LIMBICO ---------- */
{ id:"enc.corpocalloso", nome:"Corpo calloso", mesh:"Enc_CorpoCalloso",
  gruppo:"sotto", alias:["commissura","commessure","corpo calloso","scissura longitudinale","split brain"], tinta:"callosa",
  esplodi:[0,1.05,0],
  scheda:{
    dove:"Sulla linea mediana, fra i due emisferi, che sono per il resto <strong>giustapposti</strong>.",
    com:"Un fascio di <strong>fibre nervose</strong>, cioè di <strong>assoni</strong>. Si vede <strong>bianco</strong> perché è fatto di guaina mielinica. Gli assoni che uniscono i due emisferi si chiamano <strong>commissure</strong>: il corpo calloso è la più grossa.",
    fa:"È l'<strong>unico collegamento</strong> fra i due emisferi. «Se tagliassimo queste fibre, i due emisferi si separerebbero naturalmente.»",
    con:"Con entrambi gli emisferi: trasferisce da uno all'altro l'informazione elaborata.",
    rompe:"Resecato nei pazienti <strong><em>split brain</em></strong>, per il trattamento dell'<strong>epilessia</strong>: separando i due emisferi le manifestazioni sintomatiche diminuivano di intensità.",
    esame:"È il motivo per cui si parla di <strong>visione mediale</strong> e non di sezione: il cervello <strong>non va tagliato</strong>, sono due metà già separate, tenute insieme solo da questo fascio. La lezione lo chiama «un fascetto molto sottile» — è sottile rispetto al volume degli emisferi, ma è la più grande commissura del cervello umano, circa 200 milioni di assoni.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.bianca", nome:"Sostanza bianca", mesh:"Enc_SostanzaBianca", pari:true,
  gruppo:"sotto", alias:["bianca","mielina","centrum semiovale"], tinta:"bianca",
  esplodi:[0.45,0.15,0.15],
  scheda:{
    dove:"<strong>Sotto la corteccia</strong>, dentro ogni emisfero. È il riempimento dell'encefalo: la corteccia è un guscio, questa è la massa che sta sotto.",
    com:"Fasci di <strong>assoni mielinizzati</strong>. Si vede chiara (da qui «bianca») per la mielina. Il corpo calloso è lo stesso tessuto, sulla linea mediana.",
    fa:"Connette le aree corticali fra loro e con i nuclei profondi, il tronco e il midollo. Senza di essa la corteccia è una mappa senza strade.",
    con:"Con la corteccia che la riveste, con i <strong>gangli della base</strong>, il <strong>talamo</strong> e, attraverso il corpo calloso, con l'emisfero opposto.",
    rompe:"Le malattie demielinizzanti (la più nota è la <strong>sclerosi multipla</strong>) rallentano o bloccano la conduzione: i sintomi dipendono da quali fasci sono colpiti.",
    esame:"In sezione la si distingue dalla corteccia perché è <strong>interna e più chiara</strong>. I ventricoli stanno in una cavità scavata qui dentro, non «in mezzo alla corteccia».",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.gangli.caudato", nome:"Nucleo caudato", mesh:"Enc_Gangli_Caudato", pari:true,
  gruppo:"sotto", alias:["caudato"], tinta:"caudato", esplodi:[0.6,0.5,0.55],
  scheda:{
    dove:"<strong>Sotto la corteccia</strong> — è un nucleo <strong>sottocorticale</strong> — nel prosencefalo, al di sotto della <strong>porzione anteriore dei ventricoli laterali</strong>.",
    com:"Uno dei tre nuclei che compongono i <strong>gangli della base</strong>, insieme a putamen e globo pallido. «Gangli» qui significa <strong>nuclei</strong>.",
    fa:"Importantissimo per il <strong>movimento</strong>. Il movimento parte dalla corteccia, ma la <strong>regolazione fine</strong> è data dal cervelletto e da questi nuclei: in particolare intervengono nella <strong>selezione e nell'avvio dei movimenti volontari</strong>.",
    con:"Riceve <strong>afferenze da tutte le regioni della corteccia</strong>; manda <strong>efferenze al tronco dell'encefalo</strong> — ponte, bulbo e mesencefalo — e poi, <strong>attraverso il talamo</strong>, alle aree motorie della corteccia frontale.",
    rompe:"—",
    esame:"I tre nomi vanno in fila: <strong>caudato, putamen, globo pallido</strong>. E il circuito va chiuso: corteccia → gangli → tronco e talamo → corteccia frontale motoria.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.gangli.putamen", nome:"Putamen", mesh:"Enc_Gangli_Putamen", pari:true,
  gruppo:"sotto", alias:["putamen"], tinta:"putamen", esplodi:[1.15,0.1,0.15],
  scheda:{
    dove:"Sottocorticale, lateralmente al globo pallido, nel prosencefalo.",
    com:"Il secondo dei tre nuclei dei <strong>gangli della base</strong>.",
    fa:"Con il caudato e il globo pallido concorre alla <strong>regolazione fine del movimento</strong> e all'<strong>avvio dei movimenti volontari</strong>.",
    con:"Afferenze da tutta la corteccia; efferenze al tronco encefalico e, via talamo, alle aree motorie frontali.",
    rompe:"—",
    esame:"Non è una struttura del sistema limbico: i gangli della base e il limbico sono <em>due</em> gruppi distinti di strutture, entrambi contenuti negli emisferi cerebrali insieme alla corteccia.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.gangli.pallido", nome:"Globo pallido", mesh:"Enc_Gangli_Pallido", pari:true,
  gruppo:"sotto", alias:["pallido","globus pallidus"], tinta:"pallido", esplodi:[0.85,0.05,-0.1],
  scheda:{
    dove:"Sottocorticale, medialmente al putamen.",
    com:"Il terzo dei tre nuclei dei <strong>gangli della base</strong>.",
    fa:"Concorre alla <strong>selezione e all'avvio dei movimenti volontari</strong> e alla loro regolazione fine.",
    con:"È la principale via di uscita dei gangli verso il <strong>tronco dell'encefalo</strong> e verso il <strong>talamo</strong>.",
    rompe:"—",
    esame:"Se la domanda è «chi regola finemente il movimento», la risposta completa cita <strong>due</strong> attori: il <strong>cervelletto</strong> e i <strong>gangli della base</strong>. Citarne uno solo è una risposta a metà.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.limbico.ippocampo", nome:"Ippocampo", mesh:"Enc_Limbico_Ippocampo", pari:true,
  gruppo:"sotto", alias:["ippocampo","sistema limbico","cavalluccio marino"], tinta:"ippocampo", esplodi:[1.05,-0.6,0.1],
  scheda:{
    dove:"Nella parte <strong>mesiale</strong> (sinonimo di mediale) degli emisferi, dentro il lobo temporale. Forma il <strong>pavimento del corno temporale del ventricolo laterale</strong>. <strong>Ce ne sono due</strong>, uno per emisfero.",
    com:"Si chiama così perché ha la forma di un <strong>cavalluccio marino</strong>. Insieme ad alcune regioni corticali dell'<strong>archicorteccia</strong> — la corteccia filogeneticamente più antica — forma quel pavimento.",
    fa:"Media il <strong>comportamento emotivo</strong> e l'esperienza soggettiva delle emozioni, e ha un ruolo <strong>fondamentale nella memorizzazione a lungo termine</strong>.",
    con:"Fa parte del <strong>sistema limbico</strong>; riceve proiezioni dall'amigdala.",
    rompe:"—",
    esame:"Due funzioni, non una: emozione <em>e</em> memoria a lungo termine. Chi cita solo la memoria dimezza la risposta.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.limbico.amigdala", nome:"Amigdala", mesh:"Enc_Limbico_Amigdala", pari:true,
  gruppo:"sotto", alias:["amigdala"], tinta:"amigdala", esplodi:[1.0,-0.5,0.8],
  scheda:{
    dove:"Posta <strong>rostralmente rispetto all'ippocampo</strong>, nella parte mesiale degli emisferi.",
    com:"Si chiama così perché ha la forma di una <strong>piccola mandorla</strong>.",
    fa:"Coinvolta <strong>primariamente nelle emozioni</strong>: analizza il <strong>significato emozionale e motivazionale</strong> degli stimoli sensoriali e coordina le azioni che ne scaturiscono.",
    con:"Riceve afferenze <strong>direttamente dai principali sistemi sensoriali</strong> e proietta alla <strong>neocorteccia</strong> — quindi fuori dal sistema limbico — ma anche ai <strong>gangli della base</strong>, all'<strong>ippocampo</strong> e a diverse aree subcorticali.",
    rompe:"—",
    esame:"È l'esempio che la docente usa per la formula «<strong>tutto è connesso con tutto</strong>»: c'è un'azione specifica di ogni struttura, specialmente se arcaica, ma sempre in connessione con tutto il resto. Notare il «<strong>direttamente</strong>»: l'amigdala riceve dai sistemi sensoriali senza passare per la corteccia.",
    fonte:{ lez:"L10", cap:"C23", arg:"D23" } } },

{ id:"enc.dienc.talamo", nome:"Talamo", mesh:"Enc_Dienc_Talamo", pari:true,
  gruppo:"sotto", alias:["talamo"], tinta:"talamo", esplodi:[0.65,0.95,-0.35],
  scheda:{
    dove:"La parte <strong>più dorsale del diencefalo</strong>, «quella che sta più verso la nuca». Il diencefalo circonda il <strong>terzo ventricolo</strong>.",
    com:"Insieme all'ipotalamo costituisce il <strong>diencefalo</strong>, l'ultima macrostruttura del cervello primitivo. Fa parte del <strong>prosencefalo</strong>.",
    fa:"È <strong>essenziale per tutte le informazioni sensoriali</strong>: tutte le vie nervose afferenti che vengono dagli organi di senso <strong>fanno tappa nel talamo</strong> per essere ritrasmesse verso il cervello. È la sua funzione più importante.",
    con:"Con tutti gli organi di senso a monte e con tutta la corteccia a valle. È anche la stazione attraverso cui i gangli della base raggiungono le aree motorie frontali.",
    rompe:"—",
    esame:"La formula è «<strong>tappa obbligata delle vie sensoriali</strong>». Va detta con l'eccezione sottintesa dalla lezione: il talamo serve <em>tutte</em> le afferenze sensoriali dirette alla corteccia.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.dienc.ipotalamo", nome:"Ipotalamo", mesh:"Enc_Dienc_Ipotalamo",
  gruppo:"sotto", alias:["ipotalamo"], tinta:"ipotalamo", esplodi:[0.3,-0.85,0.35],
  scheda:{
    dove:"La parte <strong>più ventrale del diencefalo</strong>, sotto il talamo.",
    com:"Con il talamo forma il <strong>diencefalo</strong>.",
    fa:"Funzione importantissima nel <strong>mantenimento dell'omeostasi</strong> e nella comunicazione con il <strong>sistema nervoso vegetativo</strong>. È la sede della <strong>motivazione</strong> e di parte della <strong>regolazione emotiva</strong>.",
    con:"Comunica con la <strong>ghiandola pituitaria</strong> o <strong>ipofisi</strong>, di cui regola in gran parte la secrezione ormonale. Fa parte funzionalmente del <strong>sistema limbico</strong>.",
    rompe:"—",
    esame:"È il ponte fra sistema nervoso e sistema endocrino, e fra anatomia e psicologia: <em>la motivazione — la spinta all'azione che porta a soddisfare dei bisogni — ha sede nell'ipotalamo</em>.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.ipofisi", nome:"Ipofisi", mesh:"Enc_Ipofisi",
  gruppo:"sotto", alias:["ghiandola pituitaria","pituitaria"], tinta:"ipofisi",
  esplodi:[0.2,-1.3,0.5],
  scheda:{
    dove:"Sotto l'ipotalamo, appesa a un peduncolo. <strong>Sta dentro il cervello</strong>.",
    com:"Una <strong>vera e propria ghiandola</strong>, che fa parte del <strong>sistema endocrino</strong> pur stando nel cervello.",
    fa:"Regola l'attività ormonale di tante funzioni — l'esempio della lezione è la <strong>prolattina</strong>, l'ormone responsabile dell'allattamento.",
    con:"La secrezione dei suoi ormoni è regolata <strong>in gran parte dall'ipotalamo</strong>.",
    rompe:"—",
    esame:"Serve a introdurre il sistema endocrino: gli <strong>ormoni</strong> sono messaggeri chimici come i neurotrasmettitori, ma viaggiano nel <strong>flusso sanguigno</strong>, quindi sono molto più <strong>lenti</strong> e producono effetti <strong>più a lungo termine</strong>.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

/* ---------- IL CERVELLO PRIMITIVO ---------- */
{ id:"enc.cervelletto", nome:"Cervelletto", mesh:"Enc_Cervelletto",
  gruppo:"primitivo", alias:["cervelletto"], tinta:"cervelletto", esplodi:[0,-0.45,-1.65],
  scheda:{
    dove:"<strong>Dorsalmente rispetto al ponte.</strong> Fa parte del <strong>paleoencefalo</strong>, insieme al romboencefalo (ponte e bulbo).",
    com:"Contiene il <strong>più alto numero di neuroni</strong> di tutte le altre suddivisioni cerebrali, nonostante sia una struttura arcaica. I neuroni sono disposti in modo così preciso e regolare da <strong>replicare lo stesso circuito elementare</strong> ovunque.",
    fa:"Il ruolo principale è la <strong>coordinazione motoria</strong>. Agisce anche nel controllo del <strong>tono muscolare</strong> e nel <strong>mantenimento dell'equilibrio</strong>.",
    con:"Le sue regioni ricevono proiezioni da parti diverse del <strong>cervello</strong> e del <strong>midollo spinale</strong> e svolgono su di esse le <strong>stesse identiche operazioni</strong>, dirette però a zone diverse.",
    rompe:"L'<strong>abuso di alcol</strong> agisce proprio inibendo il cervelletto: da qui l'<strong>atassia</strong>, il cammino a base allargata per cercare di mantenere un equilibrio che viene meno, e i movimenti scoordinati.",
    esame:"Il paradosso da citare: struttura arcaica, eppure con più neuroni di qualunque altra. E la spiegazione: quei neuroni ripetono sempre lo stesso circuito, cambia solo la destinazione.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.tronco.mesencefalo", nome:"Mesencefalo", mesh:"Enc_Tronco_Mesencefalo",
  gruppo:"primitivo", alias:["mesencefalo","tronco encefalico","tronco dell'encefalo","paleoencefalo","cervello primitivo"], tinta:"tronco", esplodi:[-0.95,-0.15,0.35],
  scheda:{
    dove:"La più <strong>rostrale</strong> delle tre strutture del tronco dell'encefalo, sopra il ponte.",
    com:"È anche il punto in cui l'asse longitudinale del sistema nervoso ha subito la <strong>deflessione</strong>.",
    fa:"Con bulbo e ponte partecipa alla regolazione della <strong>pressione arteriosa</strong>, della <strong>respirazione</strong> e del <strong>sonno</strong>. È la terza delle strutture necessarie alle <strong>funzioni vitali</strong>.",
    con:"Con il sistema nervoso periferico autonomo, a cui dà comandi per mantenere l'omeostasi.",
    rompe:"Un danno nelle strutture del tronco è un danno <strong>che fa morire</strong>.",
    esame:"La <strong>deflessione</strong> è il motivo per cui i termini anatomici <strong>cambiano</strong> a seconda che la struttura stia sopra o sotto di essa. È avvenuta con l'assunzione della <strong>stazione eretta</strong>: gli occhi hanno dovuto piegarsi in avanti, «altrimenti avremmo visto il soffitto».",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.tronco.ponte", nome:"Ponte", mesh:"Enc_Tronco_Ponte",
  gruppo:"primitivo", alias:["ponte"], tinta:"tronco", esplodi:[-1.05,-0.35,0.3],
  scheda:{
    dove:"La struttura intermedia del tronco dell'encefalo, fra bulbo e mesencefalo. Il <strong>cervelletto</strong> gli sta dorsalmente.",
    com:"Con il bulbo forma il <strong>romboencefalo</strong>; romboencefalo e cervelletto formano il <strong>paleoencefalo</strong>, detto anche <strong>cervello primitivo</strong> o <strong>nucleo centrale</strong>.",
    fa:"Regolazione di <strong>pressione arteriosa, respirazione e sonno</strong>; tappa di ritrasmissione delle afferenze <strong>gustative, uditive</strong> e di quelle che regolano il <strong>senso dell'equilibrio</strong>.",
    con:"Dal tronco fuoriescono i <strong>nervi cranici</strong>, che fanno per collo, testa e faccia quello che i nervi spinali fanno per il resto del corpo.",
    rompe:"Danno al tronco = morte; danno al midollo = paralisi. La lezione insiste sul paradosso: i danni alle strutture arcaiche sono <strong>molto più gravi</strong> dei danni alla corteccia frontale, dove si riportano deficit cognitivi ma si continua a vivere.",
    esame:"Le tre strutture del tronco vanno dette <strong>dalla più caudale alla più rostrale</strong>: <strong>bulbo, ponte, mesencefalo</strong>. In quest'ordine.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.tronco.bulbo", nome:"Bulbo", mesh:"Enc_Tronco_Bulbo",
  gruppo:"primitivo", alias:["midollo allungato","bulbo rachidiano"], tinta:"tronco",
  esplodi:[-1.0,-0.6,0.2],
  scheda:{
    dove:"La più <strong>caudale</strong> delle tre strutture del tronco, subito sopra il midollo spinale.",
    com:"Detto anche <strong>midollo allungato</strong>. Con il ponte forma il <strong>romboencefalo</strong>.",
    fa:"Funzioni vitali basilari: pressione arteriosa, respirazione, sonno. Al suo interno, come nel resto del tronco, si estende la <strong>formazione reticolare</strong>.",
    con:"È la cerniera fra midollo spinale ed encefalo.",
    rompe:"Danno = morte.",
    esame:"La <strong>formazione reticolare</strong> va nominata qui: un circuito neuronale <strong>diffuso</strong> che attraversa le strutture del tronco, riceve una sintesi delle informazioni che arrivano a midollo e tronco, e regola <strong>vigilanza, ritmo sonno-veglia, attenzione, tono muscolare, movimento e riflessi vitali</strong>.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.midollo", nome:"Midollo spinale", mesh:"Enc_Midollo",
  gruppo:"primitivo", alias:["midollo","cauda equina","corno dorsale","corno ventrale","radici dorsali","radici ventrali","epidurale"], tinta:"midollo", esplodi:[0,-1.70,0],
  scheda:{
    dove:"Dentro la <strong>spina dorsale</strong>. È la struttura <strong>in assoluto più arcaica</strong> del sistema nervoso centrale, filogeneticamente e ontogeneticamente, e la più <strong>caudale</strong>.",
    com:"<strong>Organizzazione segmentale</strong>: ogni segmento corrisponde a un <strong>paio</strong> di nervi spinali, uno per lato. In sezione si vede una <strong>farfalla grigia</strong> (o <strong>H grigio</strong>) con un <strong>corno dorsale</strong> e un <strong>corno ventrale</strong>.",
    fa:"Riceve le <strong>informazioni sensitive</strong> da cute, muscoli, articolazioni e tronco, e contiene i <strong>motoneuroni</strong> che mediano l'efferenza. È la <strong>prima tappa</strong> delle afferenze verso i centri, l'<strong>ultima tappa</strong> dei comandi motori verso i muscoli e la <strong>sede di alcuni riflessi</strong> semplici.",
    con:"Radici <strong>dorsali</strong> = afferenti, radici <strong>ventrali</strong> = efferenti; quando si appaiano formano i <strong>nervi spinali</strong>.",
    rompe:"Un danno al midollo può provocare <strong>paralisi</strong>: tutto ciò che garantisce la stazione eretta e il controllo dei muscoli passa da qui.",
    esame:"Alla nascita è lungo quanto la colonna; poi le ossa crescono e lui no, quindi nell'adulto finisce alle <strong>ultime vertebre lombari</strong>. Sotto restano solo assoni: è la <strong>cauda equina</strong>, dove si fa l'<strong>anestesia epidurale</strong> proprio perché non c'è sostanza grigia.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

/* ---------- VENTRICOLI E LIQUOR ---------- */
{ id:"enc.ventricoli", nome:"Ventricoli laterali", mesh:"Enc_Ventricoli", pari:true,
  gruppo:"liquor", alias:["ventricoli","ventricoli laterali","liquor","liquido cerebrospinale","plessi corioidei","villi aracnoidei","spazio subaracnoideo","idrocefalo"],
  tinta:"ventricolo", opacita:0.58, esplodi:[0.85,0.85,0.2],
  scheda:{
    dove:"Cavità <strong>dentro</strong> il cervello. Sono <strong>quattro</strong>: due <strong>ventricoli laterali</strong>, un <strong>terzo ventricolo</strong> mediale e più ventrale, un <strong>quarto ventricolo</strong> ancora più ventrale.",
    com:"La lezione lo paragona a un <strong>acquedotto</strong>: cavità collegate da canali, in cui scorre il <strong>liquor</strong>.",
    fa:"Produce il <strong>liquido cerebrospinale</strong>, tramite i <strong>plessi corioidei</strong> presenti nei ventricoli laterali. Il liquor ha <strong>tre funzioni</strong>: ridurre il <strong>peso</strong> dell'encefalo (che pesa fra uno e due chili e <em>galleggia</em>), <strong>proteggere</strong> dagli urti contro le ossa, <strong>controllare le modificazioni chimiche</strong> dell'ambiente interno.",
    con:"Il liquor va dai laterali al terzo, poi al quarto, scende nel midollo spinale, gira nello <strong>spazio subaracnoideo</strong> e viene riassorbito nei <strong>villi aracnoidei</strong>, dentro l'aracnoide. Ricambio continuo.",
    rompe:"<strong>Idrocefalo</strong>: un'<strong>ostruzione</strong> nel ricircolo del liquor, che continua a essere prodotto e non riassorbito. I ventricoli si allargano. Nei bambini dà la testa molto grande; negli adulti, dove le ossa sono rigide, dà disfunzioni comportamentali per <strong>compressione</strong>.",
    esame:"Le tre <strong>meningi</strong> vanno sapute in ordine dall'esterno: <strong>dura madre</strong> (spessa, consistenza di cuoio, a contatto con l'osso), <strong>aracnoide</strong> (consistenza di tela di ragno, ricca di vasi), <strong>pia madre</strong> (sottilissima, elastica, a contatto diretto con il tessuto nervoso). Fra aracnoide e pia madre lo <strong>spazio subaracnoideo</strong>, pieno di liquor. Rottura dei vasi fra dura e aracnoide = <strong>ematoma subdurale</strong>.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.ventricolo.terzo", nome:"Terzo ventricolo", mesh:"Enc_Ventricolo_Terzo",
  gruppo:"liquor", alias:["III ventricolo","3° ventricolo","ventricolo mediale"],
  tinta:"ventricolo", opacita:0.62, esplodi:[0,0.4,0.15],
  scheda:{
    dove:"Sulla <strong>linea mediana</strong>, fra i due talami. Il diencefalo lo circonda.",
    com:"Una fessura verticale, non un paio: è <strong>impari</strong>.",
    fa:"Il liquor arriva qui dai laterali e scende verso il quarto attraverso l'<strong>acquedotto di Silvio</strong>.",
    con:"Con i ventricoli laterali a monte e con il quarto a valle.",
    rompe:"Un'ostruzione dell'acquedotto è una causa classica di <strong>idrocefalo</strong>.",
    esame:"I quattro si contano così: <strong>due laterali, il terzo, il quarto</strong>. Il terzo sta nel diencefalo, il quarto sta dietro al ponte.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.ventricolo.quarto", nome:"Quarto ventricolo", mesh:"Enc_Ventricolo_Quarto",
  gruppo:"liquor", alias:["IV ventricolo","4° ventricolo","acquedotto"],
  tinta:"ventricolo", opacita:0.62, esplodi:[0,-0.4,-0.6],
  scheda:{
    dove:"<strong>Dietro al ponte</strong>, sul pavimento del romboencefalo. Da qui il liquor scende nel <strong>canale centrale del midollo</strong>.",
    com:"Collegato al terzo dall'<strong>acquedotto</strong>.",
    fa:"Ultima cavità encefalica del circuito del liquor prima dello spazio subaracnoideo e del midollo.",
    con:"Terzo ventricolo a monte; spazio subaracnoideo e canale midollare a valle.",
    rompe:"Anche qui un blocco del deflusso allarga le cavità a monte.",
    esame:"L'ordine del liquor è una scala: laterali → terzo → acquedotto → quarto → midollo / subaracnoideo → villi aracnoidei.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.nervi.cranici", nome:"Nervi cranici", mesh:"Enc_Nervi_Cranici", pari:true,
  gruppo:"primitivo", alias:["nervi encefalici","II","V","X","ottico","trigemino","vago"],
  tinta:"nervocranico", esplodi:[1.2,-0.2,-0.4],
  scheda:{
    dove:"Escono dal <strong>tronco dell'encefalo</strong> e vanno a collo, testa e faccia — quello che i nervi spinali fanno per il resto del corpo.",
    com:"Dodici paia. Qui si vedono i più didattici: <strong>ottico (II)</strong>, <strong>oculomotore (III)</strong>, <strong>trigemino (V)</strong>, <strong>facciale (VII)</strong>, <strong>vago (X)</strong>.",
    fa:"Sensibilità e motilità di testa e visceri, e alcune vie sensoriali speciali (vista, udito).",
    con:"Con i nuclei del tronco; il vago scende nel torace e nell'addome e appartiene anche al parasimpatico.",
    rompe:"—",
    esame:"I nervi cranici <em>non</em> sono sistema nervoso centrale: appena escono dal tronco sono <strong>periferico</strong>, perché non hanno più protezione ossea encefalica.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.reticolare", nome:"Formazione reticolare", mesh:"Enc_Reticolare",
  gruppo:"primitivo", alias:["reticolare","vigilanza","sonno veglia"], tinta:"tronco",
  esplodi:[-0.7,-0.2,0.2],
  scheda:{
    dove:"Dentro il <strong>tronco dell'encefalo</strong>, dal mesencefalo al bulbo.",
    com:"Un circuito <strong>diffuso</strong>, non un nucleo compatto.",
    fa:"Regola <strong>vigilanza</strong>, <strong>sonno-veglia</strong>, attenzione, tono muscolare e riflessi vitali.",
    con:"Riceve una sintesi di ciò che arriva al midollo e al tronco.",
    rompe:"Un danno qui è un danno che fa <strong>morire</strong>.",
    esame:"Non è una struttura a sé come il ponte: è <strong>dentro</strong> le tre del tronco.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"enc.meningi", nome:"Meningi", mesh:"Enc_Meningi",
  gruppo:"liquor", alias:["dura madre","aracnoide","pia madre","meningi"],
  tinta:"callosa", opacita:0.10, esplodi:[0,0,0],
  scheda:{
    dove:"Attorno a tutto il sistema nervoso centrale, fra osso e tessuto.",
    com:"Tre fogli, dall'esterno: <strong>dura madre</strong>, <strong>aracnoide</strong>, <strong>pia madre</strong>.",
    fa:"Proteggono; fra aracnoide e pia sta lo <strong>spazio subaracnoideo</strong>, pieno di liquor.",
    con:"Con il liquor e con l'osso.",
    rompe:"Rottura dei vasi fra dura e aracnoide: <strong>ematoma subdurale</strong>.",
    esame:"L'ordine va detto <strong>dall'esterno</strong>: dura, aracnoide, pia.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } }

]});

/* =========================================================
   3 — IL SISTEMA NERVOSO PERIFERICO                 (L09)
   Schema tridimensionale, non anatomia realistica: una
   sagoma trasparente, il midollo, i nervi, e le due colonne
   antagoniste con i distretti che governano.
   Il corpo guarda verso +z: dorsale = -z, ventrale = +z.
   ========================================================= */
PGE.atlante.sezioni.push({
id:"snp", titolo:"Il sistema nervoso periferico", occhiello:"Lezione 9 — Struttura e organizzazione generale",
sommario:"Il criterio che separa periferico e centrale è <strong>puramente anatomico</strong>: la presenza di una <strong>protezione ossea</strong>. Il periferico è tutto ciò che non è protetto da ossa, e si divide in <strong>somatico</strong> e <strong>autonomo</strong>. Senza di esso il centrale, da solo, non servirebbe a nulla.",
fonte:{ lez:"L09", cap:"C22", arg:"D22" },
modello:null,
scala:1, raggioEsplosione:2.2,
camera:{ pos:[4.6,3.2,9.4], mira:[0,1.5,0], min:3, max:34 },
gruppi:[
  ["cerniera","La cerniera con il centrale"],
  ["somatico","Il sistema somatico"],
  ["autonomo","Il sistema autonomo"]
],
percorso:[
  { id:"osso", lez:"L09", titolo:"Il criterio è l'osso",
    testo:"Centrale e periferico si dividono con un criterio <strong>solo anatomico</strong>: c'è una protezione ossea, o no. Il periferico è tutto ciò che non è protetto da ossa. Senza di lui il centrale, da solo, non servirebbe a nulla.",
    vista:"laterale", sfuma:1, esplodi:0 },
  { id:"cerniera", lez:"L09", titolo:"Dove il periferico si stacca",
    testo:"Il midollo è ancora centrale. Da ogni segmento esce un paio di nervi: radice <strong>dorsale</strong> in ingresso, con il ganglio sensitivo, radice <strong>ventrale</strong> in uscita. Insieme fanno il nervo spinale. L'arco riflesso chiude il giro senza passare dalla coscienza.",
    accendi:["snp.midollo","snp.radici","snp.ganglio","snp.arco"], sfuma:0.25, esplodi:0.35 },
  { id:"somatico", lez:"L09", titolo:"Il sistema somatico",
    testo:"È il sistema di relazione: i <strong>nervi spinali</strong> e i <strong>nervi cranici</strong> che portano sensibilità e comando ai muscoli scheletrici. Volontario, per quello che riguarda il movimento.",
    accendi:["snp.nervispinali","snp.nervicranici"], sfuma:0.2, esplodi:0.4 },
  { id:"autonomo", lez:"L09", titolo:"Simpatico e parasimpatico",
    testo:"L'autonomo non si comanda. <strong>Simpatico</strong>: mobilita, fight or flight, colonna toraco-lombare. <strong>Parasimpatico</strong>: recupera, rest and digest, dal tronco e dal sacrale. Sono antagonisti sugli stessi distretti. L'<strong>enterico</strong> è il plesso dell'intestino, abbastanza autonomo da meritare un nome suo.",
    accendi:["snp.simpatico","snp.parasimpatico","snp.enterico","snp.bersagli"], sfuma:0.18, esplodi:0.55 }
],

parti:[

{ id:"snp.sagoma", nome:"Sagoma del corpo", mesh:"Snp_Sagoma", selezionabile:false,
  tinta:"sagoma", opacita:0.07, esplodi:[0,0,0],
  geo:{ t:"gruppo", figli:[
    { t:"sfera", r:0.62, pos:[0,4.32,0], scala:[0.86,1,0.92] },
    { t:"cilindro", r1:0.24, r2:0.28, h:0.45, pos:[0,3.62,0] },
    { t:"capsula", r:0.78, h:1.5, pos:[0,2.30,0], scala:[1,1,0.62] },
    { t:"capsula", r:0.62, h:0.9, pos:[0,0.90,0], scala:[1,1,0.66] },
    { t:"tubo", r:0.20, punti:[[0.72,2.85,0],[1.18,2.10,0.1],[1.36,1.15,0.12],[1.30,0.42,0.16]] },
    { t:"tubo", r:0.20, punti:[[-0.72,2.85,0],[-1.18,2.10,0.1],[-1.36,1.15,0.12],[-1.30,0.42,0.16]] },
    { t:"tubo", r:0.26, punti:[[0.34,0.45,0],[0.42,-0.7,0.02],[0.40,-1.9,0.04],[0.38,-2.9,0.18]] },
    { t:"tubo", r:0.26, punti:[[-0.34,0.45,0],[-0.42,-0.7,0.02],[-0.40,-1.9,0.04],[-0.38,-2.9,0.18]] } ] },
  scheda:{
    dove:"—", com:"—", fa:"—", con:"—", rompe:"—",
    esame:"—", fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

/* ---------- LA CERNIERA ---------- */
{ id:"snp.midollo", nome:"Midollo spinale", mesh:"Snp_Midollo", gruppo:"cerniera",
  alias:["midollo","farfalla grigia","h grigio"], tinta:"midollo", esplodi:[0,0.3,-1.1],
  geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.108, punti:[[0,3.62,-0.12],[0,2.60,-0.16],[0,1.60,-0.18],[0,0.60,-0.16],[0,-0.35,-0.10],[0,-1.15,-0.04],[0,-2.05,0.04]] },
    { t:"tubo", r:0.032, punti:[[0.05,-0.32,-0.10],[0.08,-1.05,-0.02],[0.07,-1.85,0.06],[0.06,-2.45,0.12]] },
    { t:"tubo", r:0.032, punti:[[-0.05,-0.32,-0.10],[-0.08,-1.05,-0.02],[-0.07,-1.85,0.06],[-0.06,-2.45,0.12]] },
    { t:"tubo", r:0.026, punti:[[0.00,-0.35,-0.10],[0.00,-1.10,-0.02],[0.00,-1.90,0.06],[0.00,-2.55,0.14]] } ] },
  scheda:{
    dove:"Dentro la colonna vertebrale: è <strong>sistema nervoso centrale</strong>, perché protetto da ossa. Ma è la struttura da cui tutto il periferico si stacca.",
    com:"<strong>Organizzazione segmentale</strong>: ogni segmento corrisponde a un <strong>paio di nervi spinali</strong>, bilaterali. In sezione orizzontale si vede la <strong>farfalla grigia</strong> o <strong>H grigio</strong>, con <strong>corno dorsale</strong> (posteriore) e <strong>corno ventrale</strong> (anteriore). I segmenti prendono il nome dalle vertebre, e così i nervi.",
    fa:"Prima tappa delle afferenze verso i centri, ultima tappa dei comandi motori verso i muscoli, sede di alcuni <strong>riflessi semplici</strong>.",
    con:"Nella parte <strong>dorsale</strong> arrivano gli assoni del <strong>neurone sensitivo primario</strong> e ci sono gli <strong>interneuroni sensitivi</strong>; nella parte <strong>ventrale</strong> stanno i <strong>somi dei motoneuroni</strong>, da cui partono le radici ventrali.",
    rompe:"<strong>Paralisi.</strong> In fondo, dove il midollo è finito ma gli assoni continuano a scendere, sta la <strong>cauda equina</strong>: lì si fa l'<strong>anestesia epidurale</strong>, perché non c'è sostanza grigia, ci sono soltanto assoni.",
    esame:"La regola del colore, che vale in tutto il sistema nervoso: dove c'è sostanza <strong>bianca</strong> ci sono <strong>fibre</strong> mielinizzate, dove c'è sostanza <strong>grigia</strong> ci sono i <strong>somi</strong>. La farfalla è grigia perché lì stanno i corpi cellulari.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"snp.radici", nome:"Radici dorsali e ventrali", mesh:"Snp_Radici", gruppo:"cerniera",
  alias:["radice dorsale","radice ventrale","radici"], tinta:"dorsale", esplodi:[0.6,0.9,-0.7],
  geo:{ t:"specchia", asse:"x", geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.034, tinta:"dorsale",  punti:[[0.07,1.68,-0.18],[0.34,1.76,-0.42],[0.62,1.74,-0.44],[0.86,1.66,-0.24]] },
    { t:"tubo", r:0.034, tinta:"ventrale", punti:[[0.07,1.50,-0.14],[0.34,1.44,0.06],[0.62,1.48,0.06],[0.86,1.58,-0.18]] } ] } },
  scheda:{
    dove:"Escono dai due corni del midollo: le dorsali dal <strong>corno dorsale</strong> (posteriore, verso la schiena), le ventrali dal <strong>corno ventrale</strong> (anteriore, verso la pancia).",
    com:"Fasci di assoni. Sono <strong>bilaterali</strong>: una coppia per lato, a ogni segmento.",
    fa:"Le <strong>radici dorsali</strong> portano informazione <strong>afferente</strong>: dalla cute, dai muscoli e dai visceri verso il centro. È informazione in ingresso, di tipo sensitivo. Le <strong>radici ventrali</strong> portano l'informazione <strong>fuori</strong> dal midollo, verso i muscoli e le altre strutture.",
    con:"Quando le due componenti si <strong>appaiano</strong>, si formano i <strong>nervi spinali</strong>.",
    rompe:"—",
    esame:"È la domanda più secca del blocco, e si sbaglia invertendo: <strong>dorsale = dentro (sensitiva), ventrale = fuori (motoria)</strong>. Il nervo spinale nasce dall'unione delle due, e per questo ha sempre entrambe le componenti.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"snp.ganglio", nome:"Ganglio della radice dorsale", mesh:"Snp_Ganglio", gruppo:"cerniera",
  alias:["ganglio spinale","ganglio","neurone pseudounipolare","pseudounipolare"],
  tinta:"ganglio", esplodi:[0.9,1.0,-0.9],
  geo:{ t:"specchia", asse:"x", geo:{ t:"gruppo", figli:[
    { t:"sfera", r:0.082, pos:[0.60,1.755,-0.44] },
    { t:"tubo", r:0.022, punti:[[0.60,1.755,-0.44],[0.75,1.86,-0.60],[0.72,1.94,-0.78]] } ] } },
  scheda:{
    dove:"Sulla radice dorsale, <strong>leggermente fuori dal midollo spinale</strong> ma dentro la colonna vertebrale.",
    com:"Contiene i <strong>somi</strong> dei <strong>neuroni pseudounipolari</strong>, i tipici neuroni sensoriali. Dal corpo cellulare non partono dendriti, ma <strong>un processo che si biforca</strong>: una parte va verso la periferia, verso la pelle, e una verso i centri nervosi.",
    fa:"Ospita il primo neurone della via sensitiva. I recettori stanno alla fine delle diramazioni periferiche dell'assone e captano l'informazione dall'esterno.",
    con:"Fa sinapsi nel corno dorsale con gli <strong>interneuroni sensitivi</strong>, che portano l'informazione verso i centri più rostrali.",
    rompe:"—",
    esame:"La frase che qualifica la risposta: nel neurone pseudounipolare <strong>non ci sono dendriti</strong> che raccolgono l'informazione — sono già diramazioni dell'assone a farlo — e <strong>il soma sta all'esterno del sistema nervoso centrale</strong>. È l'unico caso in cui la struttura prototipica del neurone non regge.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"snp.arco", nome:"Arco riflesso", mesh:"Snp_Arco", gruppo:"cerniera",
  alias:["riflesso","riflesso di ritrazione","neuroni sensoriali","interneuroni","motoneuroni","neurone motorio"],
  tinta:"interneurone", esplodi:[1.35,0.35,0.55],
  geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.028, tinta:"sensoriale", punti:[[1.30,0.46,0.20],[1.15,0.95,-0.10],[0.95,1.45,-0.40],[0.62,1.74,-0.44]] },
    { t:"tubo", r:0.024, tinta:"sensoriale", punti:[[0.62,1.74,-0.44],[0.40,1.72,-0.32],[0.14,1.66,-0.20]] },
    { t:"sfera", r:0.048, tinta:"interneurone", pos:[0.05,1.62,-0.16] },
    { t:"tubo", r:0.020, tinta:"interneurone", punti:[[0.05,1.62,-0.16],[0.04,1.56,-0.15],[0.04,1.50,-0.14]] },
    { t:"sfera", r:0.056, tinta:"motoneurone", pos:[0.05,1.46,-0.13] },
    { t:"tubo", r:0.028, tinta:"motoneurone", punti:[[0.05,1.46,-0.13],[0.45,1.46,0.06],[0.95,1.10,0.14],[1.26,0.56,0.22]] },
    { t:"sfera", r:0.075, tinta:"bersaglio", pos:[1.31,0.44,0.20], scala:[1,1.5,0.8] } ] },
  scheda:{
    dove:"Tutto dentro il midollo spinale, più i due capi in periferia: il recettore nella cute, il muscolo alla fine.",
    com:"<strong>Tre neuroni</strong>, che sono le tre categorie dell'intero sistema nervoso. <strong>Sensoriale</strong> (pseudounipolare): media l'<em>input</em>, l'afferenza. <strong>Interneurone</strong>: sta dentro il sistema nervoso e <strong>non ha contatto con la periferia</strong>, media l'elaborazione intermedia. <strong>Motoneurone</strong>: media l'<em>output</em>, e il suo assone termina su una <strong>fibra muscolare</strong>.",
    fa:"L'esempio della lezione: ci scottiamo. L'informazione dolorifica arriva velocissima nelle radici dorsali dal neurone sensitivo primario, che fa sinapsi con un <strong>interneurone</strong>, il quale manda immediatamente il comando al <strong>motoneurone</strong> che governa i muscoli della mano. Si produce il riflesso di ritrazione.",
    con:"È il circuito minimo: input afferente → elaborazione intermedia → output efferente. Gli stessi tre livelli su cui è organizzato tutto il sistema nervoso.",
    rompe:"—",
    esame:"La frase che chiude la risposta: <strong>non c'è mediazione della consapevolezza, è tutto mediato a livello midollare</strong>. Il riflesso <em>non passa dal cervello</em>. È la dimostrazione che il midollo è sede di elaborazione, non solo di transito.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

/* ---------- IL SISTEMA SOMATICO ---------- */
{ id:"snp.nervispinali", nome:"Nervi spinali", mesh:"Snp_NerviSpinali", gruppo:"somatico",
  alias:["nervo spinale","nervi"], tinta:"nervo", esplodi:[1.2,-0.2,0.35],
  geo:{ t:"specchia", asse:"x", geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.026, punti:[[0.08,3.30,-0.14],[0.45,3.22,-0.06],[0.80,3.02,0.02]] },
    { t:"tubo", r:0.030, punti:[[0.08,2.94,-0.15],[0.52,2.90,-0.02],[0.95,2.76,0.04],[1.20,2.30,0.10]] },
    { t:"tubo", r:0.030, punti:[[0.08,2.58,-0.16],[0.56,2.52,0.00],[1.05,2.20,0.08],[1.32,1.55,0.14]] },
    { t:"tubo", r:0.026, punti:[[0.08,2.22,-0.17],[0.58,2.14,0.02],[1.12,1.62,0.10],[1.32,0.85,0.16]] },
    { t:"tubo", r:0.024, punti:[[0.08,1.86,-0.18],[0.55,1.78,0.06],[0.92,1.42,0.22]] },
    { t:"tubo", r:0.024, punti:[[0.08,1.24,-0.18],[0.52,1.14,0.10],[0.80,0.80,0.26]] },
    { t:"tubo", r:0.024, punti:[[0.08,0.86,-0.17],[0.48,0.74,0.12],[0.66,0.46,0.28]] },
    { t:"tubo", r:0.030, punti:[[0.06,0.30,-0.14],[0.34,-0.10,0.02],[0.44,-1.00,0.06],[0.42,-1.95,0.10]] },
    { t:"tubo", r:0.026, punti:[[0.05,0.02,-0.12],[0.30,-0.50,0.04],[0.42,-1.60,0.08],[0.40,-2.75,0.20]] } ] } },
  scheda:{
    dove:"Partono dal <strong>midollo spinale</strong> e innervano tutto il corpo <strong>dal collo in giù</strong>. Non sono protetti da ossa: per questo sono <strong>periferico</strong>.",
    com:"Nascono dall'appaiarsi di una <strong>radice dorsale</strong> e di una <strong>radice ventrale</strong>, quindi hanno sempre una <strong>componente sensitiva afferente</strong> e una <strong>componente motoria efferente</strong>. Possono essere <strong>lunghi anche più di un metro</strong>: partono dal midollo e arrivano alla punta dei piedi.",
    fa:"Innervano la <strong>cute</strong>, le <strong>giunture</strong> e i <strong>muscoli</strong>. Con i nervi cranici formano il sistema di nervi che media il <strong>movimento volontario</strong>.",
    con:"Con il midollo spinale a monte, con cute e muscolatura volontaria a valle.",
    rompe:"—",
    esame:"Il sistema <strong>somatico</strong> è chiamato da alcuni <strong>sistema di relazione</strong>, perché permette all'individuo di <strong>percepire e rispondere</strong> al proprio ambiente, quindi di interagirci. È l'espressione da usare per distinguerlo dall'autonomo.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"snp.nervicranici", nome:"Nervi cranici", mesh:"Snp_NerviCranici", gruppo:"somatico",
  alias:["nervo cranico"], tinta:"nervo", esplodi:[0.8,1.25,0.6],
  geo:{ t:"specchia", asse:"x", geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.022, punti:[[0.06,3.72,-0.12],[0.22,4.05,0.10],[0.30,4.30,0.42]] },
    { t:"tubo", r:0.022, punti:[[0.06,3.72,-0.12],[0.30,4.00,-0.05],[0.48,4.22,0.16]] },
    { t:"tubo", r:0.020, punti:[[0.06,3.70,-0.12],[0.26,3.88,0.05],[0.36,3.82,0.34]] },
    { t:"tubo", r:0.020, punti:[[0.05,3.66,-0.13],[0.34,3.70,-0.22],[0.52,3.86,-0.30]] } ] } },
  scheda:{
    dove:"Fuoriescono dal <strong>tronco dell'encefalo</strong> — non dal midollo spinale.",
    com:"<strong>Simili ai nervi spinali</strong>: anche loro innervano cute, giunture e muscoli, e hanno componente sensitiva e componente motoria.",
    fa:"Controllano la percezione e il movimento del <strong>collo e della testa</strong> — e della faccia — mentre i nervi spinali si occupano di tutto il resto del corpo.",
    con:"Con il tronco encefalico a monte; con i distretti rostrali a valle.",
    rompe:"—",
    esame:"Esemplificano la <strong>regola della localizzazione</strong>: a una localizzazione anatomica nelle strutture nervose corrisponde una localizzazione anatomica nel resto del corpo. Strutture più rostrali servono distretti più rostrali.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

/* ---------- IL SISTEMA AUTONOMO ---------- */
{ id:"snp.simpatico", nome:"Sistema simpatico", mesh:"Snp_Simpatico", gruppo:"autonomo",
  alias:["simpatico","ortosimpatico"], tinta:"simpatico", esplodi:[1.45,0.15,0.2],
  geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.028, punti:[[0.34,3.05,-0.30],[0.38,2.45,-0.32],[0.38,1.70,-0.32],[0.36,0.95,-0.30],[0.32,0.25,-0.26]] },
    { t:"ripeti", n:8, da:[0.37,2.90,-0.31], passo:[-0.006,-0.375,0.006],
      geo:{ t:"sfera", r:0.055, scala:[0.9,1.25,0.9] } },
    { t:"tubo", r:0.018, punti:[[0.37,2.90,-0.31],[0.34,3.60,0.05],[0.30,4.24,0.44]] },
    { t:"tubo", r:0.018, punti:[[0.37,2.53,-0.31],[0.30,2.45,0.05],[0.22,2.32,0.26]] },
    { t:"tubo", r:0.018, punti:[[0.37,2.15,-0.31],[0.12,2.10,0.02],[-0.14,2.02,0.28]] },
    { t:"tubo", r:0.018, punti:[[0.36,1.40,-0.31],[0.28,1.05,-0.02],[0.16,0.68,0.26]] },
    { t:"tubo", r:0.016, punti:[[0.36,1.78,-0.31],[0.70,1.70,-0.05],[1.12,1.35,0.10]] } ] },
  scheda:{
    dove:"I suoi neuroni stanno in zone <strong>un po' all'esterno del midollo spinale</strong>, ma sempre vicino a esso, <strong>all'interno della colonna vertebrale</strong>.",
    com:"Una delle <strong>tre sottosezioni</strong> del sistema autonomo, insieme al parasimpatico e all'enterico.",
    fa:"È il sistema <strong>attivante</strong>: <strong>prepara il corpo a una reazione</strong>. Dilata le pupille (<strong>midriasi</strong>), dilata i bronchi, accelera il cuore, <strong>inibisce</strong> l'attività intestinale, restringe i vasi sanguigni. È attivo quando proviamo stati emotivi forti, quando percepiamo un pericolo e dobbiamo essere pronti a reagire.",
    con:"Con il parasimpatico, in rapporto di <strong>reciprocità</strong>. Con il tronco encefalico, che gli dà i comandi per mantenere l'omeostasi.",
    rompe:"—",
    esame:"La lista delle cinque azioni va detta come un blocco, perché sono tutte la stessa cosa: <em>lo stato di attivazione corporea</em>. E va sempre accoppiata all'azione opposta del parasimpatico, altrimenti manca il concetto di reciprocità.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"snp.parasimpatico", nome:"Sistema parasimpatico", mesh:"Snp_Parasimpatico", gruppo:"autonomo",
  alias:["parasimpatico"], tinta:"parasimpatico", esplodi:[-1.45,0.15,0.2],
  geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.028, punti:[[-0.34,3.05,-0.30],[-0.38,2.45,-0.32],[-0.38,1.70,-0.32],[-0.36,0.95,-0.30],[-0.32,0.25,-0.26]] },
    { t:"ripeti", n:8, da:[-0.37,2.90,-0.31], passo:[0.006,-0.375,0.006],
      geo:{ t:"sfera", r:0.055, scala:[0.9,1.25,0.9] } },
    { t:"tubo", r:0.018, punti:[[-0.37,2.90,-0.31],[-0.34,3.60,0.05],[-0.30,4.24,0.44]] },
    { t:"tubo", r:0.018, punti:[[-0.37,2.53,-0.31],[-0.30,2.45,0.05],[-0.22,2.32,0.26]] },
    { t:"tubo", r:0.018, punti:[[-0.37,2.15,-0.31],[-0.12,2.10,0.02],[0.14,2.02,0.28]] },
    { t:"tubo", r:0.018, punti:[[-0.36,1.40,-0.31],[-0.28,1.05,-0.02],[-0.16,0.68,0.26]] },
    { t:"tubo", r:0.016, punti:[[-0.36,1.78,-0.31],[-0.70,1.70,-0.05],[-1.12,1.35,0.10]] } ] },
  scheda:{
    dove:"Come il simpatico: neuroni disposti vicino al midollo spinale, dentro la colonna vertebrale.",
    com:"La seconda delle tre sottosezioni del sistema autonomo.",
    fa:"Agisce all'<strong>esatto opposto</strong> del simpatico: ha funzione di <strong>rilassamento</strong> dell'organismo. Restringe la pupilla (<strong>miosi</strong>), contrae i bronchi, rallenta il battito, stimola l'attività digerente, dilata i vasi. Rallentando questi processi mantiene uno stato di equilibrio: è molto importante per garantire l'<strong>omeostasi</strong>, lo stato di equilibrio che l'organismo ha <strong>a riposo</strong>.",
    con:"Con il simpatico, in <strong>reciprocità</strong>.",
    rompe:"—",
    esame:"La <strong>reciprocità</strong> è il concetto, e va enunciato per intero: se uno è attivo l'altro deve diminuire la sua attività, e viceversa. <strong>Sono sincronizzati: non possono essere attivi tutti e due, non possono essere spenti tutti e due</strong>; il grado di attività di uno dipende dall'altro.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"snp.enterico", nome:"Sistema enterico", mesh:"Snp_Enterico", gruppo:"autonomo",
  alias:["enterico","plesso di auerbach","plesso di meissner","plessi"], tinta:"enterico",
  esplodi:[0.25,-0.9,1.35],
  geo:{ t:"gruppo", figli:[
    { t:"tubo", r:0.035, punti:[[0.00,2.35,0.18],[0.02,1.95,0.20],[0.00,1.60,0.22]] },
    { t:"tubo", r:0.048, punti:[[0.00,1.58,0.22],[0.30,1.32,0.26],[0.10,1.05,0.30],[-0.34,0.92,0.26],[-0.30,0.62,0.28],[0.18,0.52,0.30],[0.42,0.72,0.26],[0.30,0.98,0.22]] },
    { t:"sparsi", n:22, seme:13, guscio:[0.0,0.42], centro:[0.02,0.92,0.27],
      geo:{ t:"sfera", r:0.022, seg:10 } } ] },
  scheda:{
    dove:"Dentro il <strong>rivestimento interno dell'apparato digerente</strong>: esofago, stomaco, intestino.",
    com:"Due popolazioni neuronali: il <strong>plesso di Auerbach</strong> e il <strong>plesso di Meissner</strong>.",
    fa:"Secondo la lezione, regolano la <strong>secrezione delle sostanze chimiche</strong> ed eliminano i metaboliti che non servono più. Il sistema enterico <strong>coadiuva</strong> simpatico e parasimpatico.",
    con:"Con le altre due sottosezioni dell'autonomo.",
    rompe:"—",
    esame:"Nella suddivisione anatomica tradizionale il <strong>plesso mienterico di Auerbach</strong> regola soprattutto la <strong>motilità</strong> della muscolatura liscia, mentre il <strong>plesso sottomucoso di Meissner</strong> regola la <strong>secrezione</strong> e il flusso ematico locale. La lezione attribuisce a entrambi la sola funzione secretoria: se in sede d'esame si segue la lezione, meglio saperlo.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } },

{ id:"snp.bersagli", nome:"I distretti neurovegetativi", mesh:"Snp_Bersagli", gruppo:"autonomo",
  alias:["distretti","funzioni neurovegetative","organi bersaglio","bersagli"],
  tinta:"bersaglio", esplodi:[0,0.1,1.5],
  geo:{ t:"gruppo", figli:[
    { t:"sfera", r:0.075, pos:[0.30,4.28,0.46], scala:[1,0.8,0.7] },
    { t:"sfera", r:0.075, pos:[-0.30,4.28,0.46], scala:[1,0.8,0.7] },
    { t:"tubo", r:0.038, punti:[[0,2.70,0.20],[0,2.42,0.22],[0,2.30,0.24]] },
    { t:"tubo", r:0.030, punti:[[0,2.30,0.24],[0.20,2.16,0.22],[0.30,1.94,0.20]] },
    { t:"tubo", r:0.030, punti:[[0,2.30,0.24],[-0.20,2.16,0.22],[-0.30,1.94,0.20]] },
    { t:"sfera", r:0.155, pos:[-0.14,2.06,0.30], scala:[1,1.15,0.85] },
    { t:"sfera", r:0.26, pos:[0.02,0.78,0.28], scala:[1.15,0.9,0.65] },
    { t:"tubo", r:0.022, punti:[[0.80,2.70,0.12],[1.15,2.05,0.16],[1.32,1.20,0.18]] },
    { t:"tubo", r:0.022, punti:[[-0.80,2.70,0.12],[-1.15,2.05,0.16],[-1.32,1.20,0.18]] } ] },
  scheda:{
    dove:"In tutto il corpo: occhi, apparato respiratorio, muscolo cardiaco, apparato digerente, vasi sanguigni.",
    com:"Sono i cinque distretti su cui simpatico e parasimpatico agiscono in direzioni opposte. La lezione li presenta in tabella.",
    fa:"<strong>Occhi</strong>: midriasi (dilatazione della pupilla) e miosi (restringimento). <strong>Apparato respiratorio</strong>: dilatazione o contrazione dei bronchi. <strong>Muscolo cardiaco</strong>: accelerazione o rallentamento del battito. <strong>Apparato digerente</strong>: stimolazione o inibizione dell'attività. <strong>Vasi sanguigni</strong>: dilatazione o restringimento.",
    con:"Ognuno dei due sistemi media <strong>una direzione</strong> di questa attività.",
    rompe:"—",
    esame:"Il sistema autonomo <strong>non è sotto il controllo della coscienza</strong>: governa le <strong>funzioni involontarie</strong> — respirare, digerire, il flusso del sangue. Ma è coinvolto anche in molti aspetti <strong>motivazionali, emotivi e di risposta allo stress</strong>: quando siamo felici o ansiosi questi sistemi si attivano. Per questo la sua funzione si collega a comportamenti che sembrano più evoluti.",
    fonte:{ lez:"L09", cap:"C22", arg:"D22" } } }

]});
