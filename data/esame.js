/* Domande d'esame ricorrenti — Psicologia Generale (SFO_PGE)
   Le domande «trovate» sono quelle che circolano nelle raccolte degli studenti
   Unimarconi (Skuola.net, prof. Petrucci, Scienze della formazione 2021-22;
   Docsity, prof. De Bartolo, L-24). Le «attese» sono ricavate per analogia
   sul programma attuale, dove le raccolte non arrivano.
   Le risposte sono modelli da 30 e lode: complete, in ordine, senza divagare.
   Il testo è Markdown, reso con md(). */
var PGE = window.PGE = window.PGE || {};

PGE.esame = {
  intro: "Allo scritto tre domande aperte in 90 minuti; all'orale un colloquio di venti. Il criterio dichiarato dal docente: sintesi e pertinenza sono merito, la prolissità è penalizzata. Qui ci sono le domande che ricorrono negli appelli degli anni passati e, per ognuna, la risposta che vale il massimo: un tema intero in una pagina scarsa, tutti i punti principali, nessuno approfondito a scapito degli altri.",
  fonti: [
    ["Skuola.net — Domande Psicologia generale, prof. Petrucci, Unimarconi (2021-22, rev. 07/2026)", "https://www.skuola.net/universita/appunti/domande-psicologia-generale-1"],
    ["Docsity — Domande e risposte complete Psicologia Generale Unimarconi, prof. De Bartolo (L-24)", "https://www.docsity.com/it/docs/domande-e-risposte-complete-psicologia-generale-unimarconi/12505976/"],
    ["Infopoint Unimarconi — scheda Psicologia Generale: scritto 90', orale 20'", "https://unimarconirieti.it/insegnamenti/psicologia-generale/"]
  ],
  moduli: [
    { id: "M1", titolo: "Modulo 1 — Fondamenti e metodologia", domande: [

{ id: "E01", trovata: true, titolo: "Definizione di psicologia, ambiti applicativi e nascita della psicologia scientifica",
  domanda: "Dai la definizione di psicologia, indica i suoi ambiti applicativi e spiega come e quando nasce la psicologia scientifica.",
  risposta: `**Definizione.** Il termine viene dal greco *psyché* (anima) e *lógos* (discorso): alla lettera «discorso sull'anima», cioè scienza della mente. Oggi la psicologia è definita come *lo studio scientifico del comportamento e dei processi mentali dell'essere vivente nel suo rapporto con l'ambiente, mentre lo esperisce, vi agisce e lo rappresenta*. Ogni parola conta: **scientifico** richiama il metodo sperimentale e la verifica empirica; **comportamento** sono le azioni, osservabili dall'esterno; **processi mentali** (non «mente»: un insieme di operazioni, non una cosa da descrivere) sono l'esperienza interiore, accessibile solo al soggetto; **essere vivente** include gli animali non umani, e con essi la psicologia comparata, metodo elettivo della disciplina; **rapporto con l'ambiente** è l'elemento decisivo: comportamento e processi mentali non si studiano in isolamento.

**Il ritardo.** L'interesse per la mente è antichissimo, ma per oltre due millenni resta filosofico: la mente non è osservabile né misurabile, e l'anima era ritenuta oggetto non studiabile (Cartesio: i fenomeni psichici appartengono alla *res cogitans*, non al cervello). Precursori non scientifici sono Ippocrate (i quattro temperamenti) e Gall (la frenologia: prima idea di localizzazione, ma senza fondamento).

**La nascita.** La svolta arriva nell'Ottocento in un contesto favorevole: il positivismo di Comte (le scienze naturali unica fonte attendibile di conoscenza) e la psicofisica di Fechner e von Helmholtz, che già studiava le sensazioni con il metodo sperimentale. Nel **1879 Wundt** fonda a **Lipsia** il primo laboratorio di psicologia: è la data di nascita della psicologia scientifica, autonoma dalla filosofia e dalla fisiologia, con un oggetto (l'esperienza immediata scomposta nei suoi elementi) e un metodo (l'introspezione controllata in laboratorio).

**Ambiti applicativi.** Dalla ricerca di base derivano gli ambiti applicati: clinico, dello sviluppo, del lavoro, giuridico, scolastico, dello sport, sociale. *(La lezione non li elenca: se richiesti, bastano due righe.)*` },

{ id: "E02", trovata: true, titolo: "Le principali correnti teoriche delle origini",
  domanda: "Esponi le principali correnti teoriche della psicologia alle origini: precursori, Wundt, strutturalismo, funzionalismo.",
  risposta: `**I precursori.** La psicologia scientifica nasce dentro il positivismo (Comte) e la **psicofisica**: Fechner definisce la sensazione oggettiva, materiale e misurabile e con la legge di Weber-Fechner traduce in termini matematici il rapporto fra mondo fisico e mondo psichico; von Helmholtz studia la fisiologia sensoriale e formula l'*inferenza inconscia*: la percezione è un processo costruttivo, influenzato dall'esperienza pregressa. Darwin, con la selezione naturale e l'adattamento, fornirà il concetto fondamentale del funzionalismo.

**Wundt (Lipsia, 1879).** Oggetto: l'esperienza diretta e immediata, scomposta negli elementi irriducibili, gli «atomi della mente», per analogia con la chimica. Metodo: l'**introspezione**, con studenti addestrati a descrivere l'esperienza secondo criteri elementistici (per un colore: brillantezza, intensità) senza interpretarla; i tempi di reazione controllano che non ci sia interpretazione.

**Lo strutturalismo (Titchener, Cornell, 1892).** Allievo di Wundt, porta la scuola in America, le dà un nome e la sistematizza: la mente è la somma dei processi della vita, la coscienza quelli del qui e ora; oggetto è la struttura della coscienza nei suoi elementi; metodo l'introspezione con un vocabolario obbligato, in cui il soggetto sperimentale è lo sperimentatore stesso. Merito: pone la questione del metodo. Limite: il metodo non è valido, l'introspezione è in realtà *retrospezione* e soggetti addestrati davano descrizioni incoerenti dello stesso stimolo. Decade con la morte di Titchener.

**Il funzionalismo (Chicago, 1896).** Nasce dall'esigenza di andare oltre la struttura: non *che cosa* c'è nella mente ma *a che cosa serve* e come funziona nell'ambiente. Precursori Darwin e William James: la coscienza è un flusso (*stream of consciousness*), nessun momento è replicabile, quindi è inutile studiarne i contenuti; la mente è il massimo effetto dell'adattamento. Caposcuola Dewey, Angell e Carr: oggetto le attività mentali nella guida del comportamento, metodo eclettico, dal laboratorio all'osservazione. Thorndike, funzionalista *sui generis*, con la legge dell'effetto prepara il comportamentismo.` },

{ id: "E03", trovata: true, titolo: "Le principali correnti della psicologia moderna",
  domanda: "Esponi le principali correnti della psicologia del Novecento: Gestalt, comportamentismo, psicologia dinamica, cognitivismo, neuroscienze.",
  risposta: `**La Gestalt** (Germania, 1912: Wertheimer, Köhler, Koffka). Contro l'elementismo di Wundt: il tutto è diverso dalla somma delle parti. Il fenomeno *phi* (movimento apparente) dimostra che la percezione non si riduce agli stimoli; le leggi dell'organizzazione percettiva (vicinanza, somiglianza, chiusura, buona forma) e l'*insight* di Köhler negli scimpanzé mostrano una mente che organizza. Metodo fenomenologico.

**Il comportamentismo** (Watson, 1913). Oggetto solo il comportamento osservabile: la mente è una scatola nera, si studiano stimolo e risposta. Radici nei riflessi condizionati di Pavlov e nella legge dell'effetto di Thorndike; Watson con il piccolo Albert mostra l'apprendimento delle emozioni; Skinner, con il condizionamento operante e il rinforzo, porta la scuola alla forma radicale. Metodo sperimentale rigoroso, spesso sull'animale.

**La psicologia dinamica** (Freud). Nasce dalla clinica, dall'isteria: i fenomeni psichici sono l'effetto di forze inconsce in conflitto; la mente ha una topica (conscio, preconscio, inconscio; Es, Io, Super-Io) e l'inconscio si legge nei sogni, negli atti mancati, nelle associazioni libere. Metodo clinico, non sperimentale: la psicoanalisi non è falsificabile.

**Il cognitivismo** (anni Cinquanta-Sessanta). Filiazione, non reazione, del comportamentismo: torna a studiare i processi mentali con il metodo sperimentale, grazie all'informatica (la mente come elaboratore di informazioni), a Piaget, a Chomsky contro Skinner, a Bartlett e Broadbent. Tappe: il simposio sulla teoria dell'informazione (Miller, Newell e Simon, Chomsky), l'unità TOTE, il manifesto di Neisser (1967). Prima fase lo *Human Information Processing* con il metodo simulativo; poi la critica ecologica di Neisser, il modularismo di Fodor e il connessionismo.

**Oggi.** La mente *embodied* (ha un corpo, agisce nell'ambiente, è relazionale), l'approccio biopsicosociale e le **neuroscienze comportamentali**, che studiano direttamente il rapporto mente-cervello grazie alle neuroimmagini strutturali (TAC, RM) e funzionali (PET, fMRI); accanto, genetica del comportamento, epigenetica, psicologia evoluzionistica, umanistica e socioculturale.` },

{ id: "E04", trovata: true, titolo: "Comportamentismo e cognitivismo: definizioni e differenze",
  domanda: "Definisci comportamentismo e cognitivismo e spiega in che cosa differiscono.",
  risposta: `**Il comportamentismo** nasce nel 1913 con il manifesto di Watson, in reazione all'introspezione di Wundt e Titchener. Assunto: la psicologia è scienza solo se studia ciò che è osservabile, cioè il **comportamento**; la mente è una scatola nera di cui non ci si occupa. Unità di analisi la coppia stimolo-risposta; il comportamento è appreso per condizionamento (classico di Pavlov, operante di Skinner con il rinforzo). Metodo sperimentale, ambiente controllato, largo uso dell'animale, dato che le leggi dell'apprendimento sono le stesse in tutte le specie. Esito: la psicologia diventa scienza dell'apprendimento, ma senza mente.

**Il cognitivismo** nasce fra gli anni Cinquanta e Sessanta e non è una reazione ma una *filiazione* del comportamentismo: ne conserva il metodo sperimentale e ne abbandona il divieto. Grazie all'informatica la mente è concepita come un **elaboratore di informazioni**: fra stimolo e risposta c'è l'elaborazione, e i processi interni (attenzione, memoria, linguaggio, pensiero) si possono studiare inferendoli da prestazioni misurabili e simulandoli al computer (*Human Information Processing*). Contributi decisivi: Chomsky contro Skinner sul linguaggio (innato, non condizionato), Miller sullo span di memoria, l'unità TOTE con il feedback, il manifesto di Neisser del 1967.

**Le differenze.** (1) *Oggetto*: il comportamento osservabile contro i processi mentali interni. (2) *Modello dell'uomo*: organismo passivo modellato dall'ambiente contro sistema attivo che elabora, pianifica, rappresenta. (3) *Stimolo-risposta*: legame diretto contro mediazione dell'elaborazione (e retroazione: il TOTE, non l'arco riflesso). (4) *Linguaggio*: appreso per rinforzo contro predisposizione innata. (5) *Che cosa resta in comune*: il metodo sperimentale e il rigore, e per questo il cognitivismo è una psicologia mentalistica ma scientifica.

**Il seguito.** La critica ecologica di Neisser (troppo laboratorio, poca vita reale), la scienza cognitiva, il connessionismo e poi la mente *embodied* correggono l'analogia mente-computer senza tornare al comportamentismo.` },

{ id: "E05", trovata: true, titolo: "Lo strutturalismo",
  domanda: "Esponi lo strutturalismo: origini, oggetto, metodo, merito e limite.",
  risposta: `**Origini.** Lo strutturalismo è la scuola wundtiana portata in America da **Titchener**, allievo di Wundt, alla Cornell University nel **1892**: è lui a darle un nome e a sistematizzarla. Sta dentro la nascita della psicologia scientifica: Wundt aveva fondato a Lipsia nel 1879 il primo laboratorio per studiare i contenuti psichici con il metodo sperimentale.

**Oggetto.** La struttura della mente e della coscienza nei suoi **elementi irriducibili**. Per Titchener la mente è la somma dei processi che avvengono nella vita di una persona, la coscienza quelli del qui e ora; percezioni, emozioni e idee vengono scomposte come la chimica scompone la materia in atomi («gli atomi della mente»), studiando come l'esperienza cosciente varia al variare dello stimolo fisico.

**Metodo.** L'**introspezione**, «guardare dentro»: la descrizione della propria esperienza immediata da parte di soggetti addestrati, che devono attenersi a un vocabolario stabilito e descrivere gli elementi (brillantezza, intensità, durata) senza interpretare: dire «una mela» invece che descrivere colore e forma è già interpretazione. I tempi di reazione servono da controllo. Il soggetto sperimentale è lo sperimentatore stesso.

**Merito.** Introduce la questione del metodo: per la prima volta la mente è studiata in laboratorio, con condizioni controllate e replicabili, e la psicologia si stacca dalla filosofia.

**Limite.** Il metodo non è valido. L'introspezione è in realtà una *retrospezione*: nel momento in cui la si descrive, l'esperienza immediata è già passata e già elaborata. Soggetti addestrati nello stesso laboratorio davano descrizioni incoerenti dello stesso stimolo, e laboratori diversi non concordavano. Per questo la scuola dura poco e decade con la morte di Titchener, criticata da due lati: dal funzionalismo (non la struttura ma la funzione) e dal comportamentismo (non la coscienza ma il comportamento osservabile).` },

{ id: "E06", trovata: true, titolo: "I metodi di ricerca: ricerca qualitativa e quantitativa, validità e attendibilità",
  domanda: "Distingui ricerca qualitativa e quantitativa in psicologia, illustra i principali metodi di ricerca e spiega che cosa rendono valido e attendibile uno strumento di misura.",
  risposta: `**Premessa.** La psicologia è scienza perché usa il metodo scientifico, fondato su quattro assunti: determinismo, empirismo, invarianza e **operazionalizzazione**, il più importante per noi: ogni concetto (memoria, attenzione, ansia) va tradotto in una definizione operativa misurabile, che è sempre un'approssimazione al vero.

**Qualitativa e quantitativa.** La ricerca *qualitativa* descrive: raccoglie dati non numerici o categoriali (osservazioni, interviste, resoconti) su pochi soggetti, per capire in profondità e generare ipotesi; usa variabili su scala nominale e ordinale. La ricerca *quantitativa* misura: dati numerici su scale a intervalli e a rapporti, campioni ampi, statistica descrittiva e inferenziale, per verificare ipotesi e generalizzare. Non sono alternative ma livelli di costrizione crescenti.

**I metodi.** (1) *Descrittivi*: studio dei casi (Phineas Gage; fenomeni rari, non generalizzabile), osservazione naturalistica o controllata (comportamenti spontanei, problema dell'interferenza dell'osservatore, quindi osservazione sistematica), inchiesta con interviste e questionari (campione rappresentativo, casuale o stratificato; desiderabilità sociale). (2) *Correlazionale*: misura quanto due variabili variano insieme con il coefficiente *r* (segno e forza); permette previsioni ma non nessi causali, per la bidirezionalità e la terza variabile. (3) *Sperimentale*: l'unico che stabilisce cause, perché manipola la variabile indipendente, misura la dipendente e controlla le variabili di confusione, con gruppi sperimentali e di controllo assegnati a caso; alta validità interna, bassa validità ecologica.

**Validità e attendibilità.** Uno strumento è **valido** se misura davvero ciò che dichiara di misurare (la definizione operativa deve essere valida e univoca: gli occhi chiusi sono pensiero o sonno?); è **attendibile** (fidabile) se dà lo stesso risultato ripetendo la misura nelle stesse condizioni; è **sensibile** se coglie variazioni piccole. La replicabilità è il controllo ultimo: descrivere metodi e procedura così che un altro ricercatore possa ripetere e ottenere lo stesso risultato.` },

{ id: "E07", trovata: false, titolo: "Il metodo sperimentale",
  domanda: "Descrivi il metodo sperimentale: assunti, variabili, disegno, validità e verifica delle ipotesi.",
  risposta: `**Perché è il metodo per eccellenza.** È l'unico che rispetta i quattro assunti del metodo scientifico e l'unico che stabilisce **nessi causali**: procede in modo ipotetico-deduttivo (ipotesi a priori, forma se-allora, falsificabile), **manipola** la causa presunta e **controlla** tutte le altre variabili. Così supera i due limiti della correlazione: la bidirezionalità (è lo sperimentatore a decidere che cosa viene prima) e la terza variabile (tenuta costante o bilanciata).

**Le variabili.** La variabile *indipendente* è quella manipolata, con più livelli che definiscono le condizioni (ore al computer: 0, 1, 3, 6); la *dipendente* è quella misurata, l'effetto (errori a un test di attenzione); le variabili di *confusione* (ora del giorno, rumore, farmaci) vanno conosciute e neutralizzate.

**Soggetti e gruppi.** Un campione rappresentativo della popolazione, scelto in modo casuale (ogni membro ha la stessa probabilità: casuale non vuol dire a caso), diviso in gruppi sperimentali e gruppo di controllo con assegnazione casuale. Due disegni: *tra i soggetti* (gruppi diversi per condizione, più pulito, serve un campione ampio; lo studio trasversale) ed *entro i soggetti* (lo stesso gruppo in tutte le condizioni, con i problemi di abituazione e sensibilizzazione; lo studio longitudinale).

**Validità.** Il laboratorio, ambiente controllato e artificiale, massimizza la validità *interna*; il prezzo è la validità *ecologica*: i fenomeni in laboratorio non sono mai uguali a quelli naturali. Quando la variabile indipendente non è manipolabile (genere, età) si ha un quasi-esperimento.

**La verifica.** Si contrappongono ipotesi nulla (nessun effetto) e alternativa; la statistica inferenziale (analisi della varianza) dice se le differenze fra i gruppi sono significative o dovute al caso. Due errori possibili: di primo tipo, rifiutare l'ipotesi nulla quando è vera; di secondo tipo, accettarla quando è falsa. Il risultato va poi comunicato con una descrizione che consenta la replica, sottoposto a revisione tra pari, e la ricerca è regolata dai comitati etici e dal consenso informato.` }
    ] },

    { id: "M2", titolo: "Modulo 2 — Le basi biologiche del comportamento", domande: [

{ id: "E08", trovata: false, titolo: "Il neurone e la trasmissione del segnale",
  domanda: "Descrivi la struttura del neurone e spiega come avviene la trasmissione del segnale nervoso: potenziale d'azione e sinapsi.",
  risposta: `**Le cellule.** Il sistema nervoso ha due tipi di cellule: le **gliali**, dieci volte più numerose, con funzione strutturale (impalcatura) e metabolica (nutrimento, rimozione dei detriti), e i **neuroni**, cellule eccitabili che trasmettono informazione con un messaggio elettrochimico, comunicano a lunga distanza e non si rigenerano ma si modificano.

**La struttura.** Il *corpo cellulare* (soma) contiene il nucleo con il DNA e gli organuli che sintetizzano le proteine (trascrizione nel nucleo, traduzione nel citoplasma). I *dendriti* sono le antenne: ricevono il messaggio dal neurone precedente tramite i recettori, e le spine dendritiche ne aumentano la superficie. L'*assone*, fino a un metro, genera e trasporta il messaggio dal cono di emergenza ai bottoni sinaptici; la velocità dipende dal diametro e dalla guaina mielinica, interrotta dai nodi di Ranvier, che fa saltare il segnale (conduzione saltatoria). I neuroni funzionano soltanto in circuiti.

**Il potenziale d'azione.** A riposo la membrana è polarizzata, negativa all'interno: fuori sodio e cloro, dentro potassio e anioni proteici, con canali ionici selettivi e la pompa sodio-potassio che mantiene il gradiente. Uno stimolo che raggiunge la soglia apre i canali voltaggio-dipendenti: entra sodio (depolarizzazione), poi esce potassio (ripolarizzazione), con una breve iperpolarizzazione. Vale la legge del **tutto o nulla**: l'intensità dello stimolo si codifica nella frequenza, non nell'ampiezza; il periodo refrattario rende la propagazione unidirezionale.

**La sinapsi.** Ai bottoni il segnale elettrico diventa chimico: le vescicole liberano il **neurotrasmettitore** nello spazio sinaptico, che si lega ai recettori specifici del dendrite successivo. Se entra sodio la sinapsi è eccitatoria, se entra cloro è inibitoria; i potenziali graduati si sommano e il neurone decide se scaricare. Il trasmettitore è poi disattivato da enzimi o ricaptato (*reuptake*, bersaglio di molti farmaci). Glutammato e GABA sono i trasmettitori eccitatorio e inibitorio generali; acetilcolina, dopamina e serotonina sono più specifici; i neuromodulatori, come le endorfine, ne regolano la sensibilità.` },

{ id: "E09", trovata: false, titolo: "L'organizzazione del sistema nervoso",
  domanda: "Descrivi l'organizzazione del sistema nervoso: centrale e periferico, somatico e autonomo, e le strutture del cervello primitivo.",
  risposta: `**Tre livelli.** Il sistema nervoso è il centro di controllo del corpo e lavora su tre livelli: afferente (input dai neuroni sensoriali), elaborazione (interneuroni) ed efferente (output dei motoneuroni ai muscoli).

**Centrale e periferico.** Il criterio è anatomico: il sistema nervoso **centrale** (encefalo e midollo spinale) è protetto dalle ossa, avvolto dalle tre meningi (dura madre, aracnoide, pia madre) e immerso nel liquor, che lo alleggerisce, lo protegge e ne controlla la chimica. Il **periferico** comprende il sistema *somatico* o di relazione (nervi spinali e cranici, con componente sensitiva e motoria: percepire e rispondere) e il sistema *autonomo*, fuori dal controllo della coscienza, che regola ghiandole, cuore e vasi: il **simpatico** attiva (pupille dilatate, cuore accelerato, digestione inibita: prepara alla reazione), il **parasimpatico** riporta all'omeostasi; i due sono reciproci, ed è la base fisiologica delle emozioni e dello stress.

**L'organizzazione gerarchica.** Lungo l'asse caudo-rostrale le strutture più caudali sono le più arcaiche e presiedono alla sopravvivenza; le più rostrali sono le più recenti e reggono le funzioni complesse. Un danno alle prime è più grave di uno alla corteccia.

**Il cervello primitivo.** Il *midollo spinale*, segmentale, con le radici dorsali sensitive e ventrali motorie: prima tappa sensoriale, ultima tappa motoria, sede dei riflessi. Il *tronco dell'encefalo* (bulbo, ponte, mesencefalo): respirazione, pressione, sonno, nervi cranici, e la formazione reticolare che regola vigilanza e ciclo sonno-veglia. Il *cervelletto*: coordinazione, tono muscolare, equilibrio (l'alcol lo inibisce). Il *diencefalo*: il talamo, tappa di tutte le vie sensoriali, e l'ipotalamo, che regola l'omeostasi, il sistema autonomo e, tramite l'ipofisi, il sistema endocrino. Sopra, i gangli della base (selezione e avvio dei movimenti), il sistema limbico (ippocampo per la memoria, amigdala per il significato emotivo) e la corteccia.` },

{ id: "E10", trovata: false, titolo: "La corteccia cerebrale",
  domanda: "Descrivi la corteccia cerebrale: organizzazione anatomica, aree funzionali, lateralizzazione.",
  risposta: `**Che cos'è.** La corteccia è lo strato più esterno degli emisferi, circonvoluto per contenere molto tessuto in poco spazio (disteso, un foglio di giornale). È la stazione finale dell'input sensoriale, iniziale dell'output motorio e sede delle funzioni mentali superiori; non è necessaria alla sopravvivenza (chi nasce senza corteccia dorme, si nutre, ha riflessi, ma nulla di cosciente).

**Anatomia.** Solchi e giri; le grandi scissure (longitudinale, di Rolando, di Silvio, parieto-occipitale) delimitano i **lobi**: *frontale* (movimento, funzioni esecutive), *parietale* (sensibilità tattile e propriocettiva), *temporale* (udito, linguaggio, memoria), *occipitale* (visione), più l'insula. Brodmann ha diviso la corteccia in aree in base alla struttura cellulare, che corrisponde alla funzione. Sei strati, con i neuroni piramidali eccitatori di proiezione e gli interneuroni inibitori, organizzati in colonne.

**Aree funzionali.** Le aree *primarie* (motoria nel frontale, somatosensoriale nel parietale, visiva, uditiva) ricevono o emettono direttamente; la quantità di corteccia è proporzionale alla sensibilità o alla finezza del movimento della parte del corpo, come mostra l'**omuncolo** di Penfield; le vie sono crociate. Le aree *associative*, tre quarti della corteccia, integrano: Wernicke (comprensione) e Broca (produzione) per il linguaggio, con le due afasie; l'area parieto-temporo-occipitale per il riconoscimento; la corteccia prefrontale per pianificazione, decisione e regolazione emotiva (Phineas Gage).

**Lateralizzazione.** I due emisferi, uniti dal corpo calloso, lavorano insieme, ma alcune funzioni sono lateralizzate: a sinistra linguaggio, logica, elaborazione sequenziale; a destra spazio, musica, elaborazione globale. Lo dimostrano i pazienti *split brain*, con il corpo calloso reciso per l'epilessia: un oggetto mostrato nell'emicampo sinistro (emisfero destro) viene riconosciuto con la mano sinistra ma non può essere nominato.` },

{ id: "E11", trovata: false, titolo: "I metodi di indagine del cervello",
  domanda: "Esponi i metodi con cui si studia il rapporto mente-cervello: lesioni, registrazione dell'attività, neuroimmagine, stimolazione.",
  risposta: `**Il principio.** Per capire come funziona il cervello normale si guarda che cosa succede quando non funziona, e oggi anche mentre funziona, in vivo.

**Gli studi di lesione.** Le lesioni *spontanee* (ictus, tumori, traumi, malattie degenerative) hanno fondato la neuropsicologia: Broca e Wernicke hanno collegato le due afasie al frontale e al temporale sinistro; Phineas Gage ha mostrato il ruolo dei lobi frontali nella regolazione emotiva e nella decisione; il paziente H.M., con i lobi temporali mediali asportati per l'epilessia (lesione *terapeutica*), non memorizzava più nulla di nuovo pur ricordando il passato, separando la memoria a breve e a lungo termine. Il metodo cerca **dissociazioni**: una funzione compromessa e un'altra preservata; la *doppia dissociazione* (Broca e Wernicke speculari) prova che due sistemi sono indipendenti. Negli animali le lesioni *artificiali* si fanno con l'apparato stereotassico, sotto controllo dei comitati etici.

**La registrazione dell'attività elettrica.** I microelettrodi registrano i singoli neuroni (Hubel e Wiesel nella corteccia visiva del gatto); l'**EEG** registra dallo scalpo gli stati di coscienza, il sonno, l'epilessia; i potenziali evocati misurano la risposta a uno stimolo.

**La neuroimmagine.** *Strutturale*: la TAC (raggi X, densità dei tessuti) e la risonanza magnetica (campo magnetico sugli atomi di idrogeno, molto più risoluta), e la DTI per le vie di sostanza bianca. *Funzionale*: le aree attive consumano più energia e richiamano più sangue; la **PET** lo rileva con un tracciante radioattivo, la **fMRI** con la differenza fra emoglobina ossigenata e non, senza radiazioni, ed è oggi la più usata: mostra il cervello mentre svolge un compito, e a riposo il *default mode network*.

**La stimolazione.** Elettrica o chimica negli animali; nell'uomo la **TMS**, stimolazione magnetica transcranica: un campo magnetico focalizzato perturba temporaneamente un'area, una «lesione virtuale» reversibile su soggetti sani, che permette di verificare le ipotesi causali senza aspettare i pazienti.` },

{ id: "E12", trovata: false, titolo: "Geni, ambiente e plasticità cerebrale",
  domanda: "Spiega il rapporto fra geni e ambiente nel comportamento: ereditarietà, genetica del comportamento, epigenetica e plasticità.",
  risposta: `**Evoluzione ed ereditarietà.** Il comportamento ha una componente biologica e una ambientale in interazione circolare. La selezione naturale di Darwin spiega come i tratti adattivi, anche mentali, si diffondano; la genetica di Mendel distingue **genotipo** (il corredo dal concepimento) e **fenotipo** (ciò che si manifesta: genotipo più ambiente). I geni, tratti di DNA sui 23 cromosomi, codificano proteine; gli alleli dominanti si esprimono sempre, i recessivi solo in omozigosi; la maggior parte dei caratteri è poligenica.

**La genetica del comportamento.** Studia quanto ereditarietà e ambiente pesano sulle caratteristiche psicologiche con studi di famiglia, di adozione e soprattutto sui **gemelli**: gli omozigoti sono più concordanti degli eterozigoti, anche se separati alla nascita. Il coefficiente di ereditabilità (da 0 a 1) esprime la quota di varianza in un gruppo dovuta ai geni. Negli animali la selezione artificiale (i ratti di Tryon nel labirinto) e i transgenici knock-out e knock-in.

**Le due direzioni.** Geni e ambiente non operano mai da soli: il genotipo fissa un *range di reazione* (per il QI, un ambiente ricco o deprivato sposta il risultato dentro un intervallo), e i geni influenzano l'ambiente che si vive, per le reazioni che evocano negli altri e per gli ambienti che si scelgono.

**L'epigenetica.** L'ambiente regola l'*espressione* dei geni senza cambiarne la sequenza: metilazione del DNA, modificazione degli istoni, RNA non codificanti, segni reversibili ma ereditabili. Spiega perché gemelli identici sviluppano malattie diverse ed è il meccanismo della plasticità.

**La plasticità.** Il cervello si modifica per tutta la vita, a livello molecolare (neurotrofine come BDNF e NGF), morfologico (dendriti, spine, neurogenesi nell'ippocampo adulto), funzionale e comportamentale. È massima nei periodi critici dello sviluppo, ma persiste nell'adulto: i violinisti hanno più corteccia per la mano sinistra, l'esercizio aerobico migliora memoria e funzioni esecutive. Il modello dell'**arricchimento ambientale** di Rosenzweig (esercizio, gioco, esplorazione, socialità) produce più sinapsi e neurotrofine e mitiga i deficit nei modelli di Alzheimer; da qui il concetto di *riserva* cerebrale e cognitiva: uno stile di vita stimolante protegge, e non è mai troppo tardi.` }
    ] }
  ]
};
