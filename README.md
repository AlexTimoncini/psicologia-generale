# Psicologia Generale — Guida allo studio

Sito statico di supporto allo studio per l'esame di Psicologia Generale (SFO_PGE).
Nessun database, nessuna dipendenza da installare.

## Che cosa contiene

| Sezione | Contenuto |
|---|---|
| **Manuale** | 29 capitoli + 2 appendici (~71.000 parole, 512 minuti di lettura) in sette parti: prosa espositiva, riquadri, tabelle, «In sintesi» e domande di verifica per ogni capitolo |
| **Schede** | 32 schede con struttura rigida e ripetuta — 12 blocchi identici per ogni voce: perché nasce, radici, precursori, oggetto, metodo, teorie, esponenti, esperimenti, validità, precorre, formule, errori. Consultabili a schermo e scaricabili come **cinque fascicoli PDF stampabili** |
| **Argomenti** | 28 esposizioni orali (~48.000 parole, 133 minuti di parlato) organizzate in otto cartelle: ogni argomento scritto **come si direbbe a voce**, con indicazioni di regìa nascondibili |
| **Excursus storico** | 14 scuole raggruppate in cinque fasi, con filtri, tavola sinottica e la terna oggetto–metodo–validità per ciascuna |
| **Albero di studio** | 571 domande, generate scomponendo ogni macro-argomento fino alle definizioni di base: la risposta la scrive lo studente a memoria, la esporta per la correzione, e il voto da 1 a 100 resta sull'albero con la media per ramo |
| **Quiz a crocette** | 276 domande a quattro opzioni con spiegazione; ripasso automatico delle sbagliate |
| **Flashcard** | 375 carte a tre scatole (Leitner), con avanzamento salvato nel browser |
| **Scrivere i nomi** | 101 nomi e luoghi, confronto lettera per lettera e nota sulla trappola ortografica |
| **Esame** | Simulazione cronometrata, allenamento libero, archivio delle prove |
| **Lezioni** | Trascrizioni rielaborate, appunti e mappe concettuali |

Le lezioni da 1 a 13 sono complete: trascrizione rielaborata, appunti e mappa concettuale.
Le prime tre coprono la definizione di psicologia e l'excursus storico (modulo 1), le
successive quattro la metodologia della ricerca, e le ultime sei le basi biologiche del
comportamento (modulo 2), dal neurone alla plasticità cerebrale.

Il progresso di lettura, le flashcard e gli esiti dei quiz sono salvati in `localStorage`:
restano nel browser che li ha prodotti e non vengono inviati da nessuna parte.

## Pubblicare su GitHub Pages

1. Crea un repository nuovo su GitHub (può essere pubblico o privato — Pages funziona con entrambi sui piani correnti).
2. Carica **il contenuto di questa cartella** nella radice del repository (non la cartella stessa: `index.html` deve stare al primo livello).
   Da interfaccia web: *Add file → Upload files*, trascina tutto, poi *Commit*.
3. Vai in **Settings → Pages**.
4. In *Source* scegli **Deploy from a branch**, ramo `main`, cartella `/ (root)`. Salva.
5. Dopo un minuto il sito è online su `https://<utente>.github.io/<repository>/`.

Il file `.nojekyll` serve a impedire che GitHub processi la cartella con Jekyll: non va rimosso.

## Aggiornare il sito

| Cosa aggiungere | Dove |
|---|---|
| Un capitolo del manuale | `contenuti/manuale/C30.md` + una voce in `data/manuale.js` |
| Un'esposizione orale | `contenuti/argomenti/D29.md` + una voce in `data/argomenti.js` |
| Una scheda schematica | `data/schede.js`, poi `node pdf/genera.js` per rigenerare i PDF |
| Voti dell'albero di studio | `data/albero.js`, oggetto `PGE.albero.voti` (vedi sotto) |
| Domande del quiz | `data/quiz.js` — la **prima** opzione è sempre quella corretta, vengono mescolate a runtime |
| Flashcard | `data/flashcard.js` |
| Nomi da allenare | `data/nomi.js` |
| Trascrizione di una nuova lezione | `contenuti/L14_trascrizione.md` |
| Appunti di una nuova lezione | `contenuti/L14_appunti.md` |
| Mappa concettuale | `contenuti/mappe/L14.mmd` (sintassi Mermaid) |
| Stato della lezione | in `data/corso.js`, cambia `stato:"attesa"` in `stato:"pronta"` |
| Nuove scuole, sintagmi, errori | `data/corso.js` |
| Domande d'esame | `data/esami.js`, array `PGE.domande` |
| Risultato di una prova corretta | `data/esami.js`, array `PGE.risultati` |

Ogni modifica ai file è immediatamente visibile dopo il commit: non c'è nulla da compilare.

## Anteprima in locale

I contenuti delle lezioni vengono caricati via `fetch`, che il browser blocca sui file aperti
con doppio clic. Per vedere il sito in locale serve un server minimo:

```
cd <cartella del sito>
python3 -m http.server
```

Poi apri `http://localhost:8000`. Su GitHub Pages il problema non si presenta.

## Struttura

```
index.html              impalcatura e navigazione
build.js                genera standalone.html (node build.js)
standalone.html         l'intero sito in un file solo, apribile da file://
assets/style.css        stile — tema "figura / sfondo"
assets/app.js           routing, excursus, motore d'esame, statistiche
assets/studio.js        manuale, quiz, flashcard, allenamento sui nomi
data/corso.js           lezioni, scuole, periodi, definizione, sintagmi, errori
data/esami.js           banca domande aperte e archivio prove
data/manuale.js         indice dei capitoli del manuale
data/argomenti.js       indice delle esposizioni orali, per cartella
data/schede.js          le schede schematiche, a struttura fissa
pdf/genera.js           genera i cinque fascicoli PDF (richiede Google Chrome)
pdf/*.pdf               i fascicoli stampabili
pdf/*.html              la sorgente di stampa, apribile e stampabile dal browser
data/quiz.js            banca delle domande a scelta multipla
data/flashcard.js       mazzo delle flashcard
data/nomi.js            nomi, indizi e trappole ortografiche
contenuti/              trascrizioni e appunti in Markdown
contenuti/manuale/      i capitoli del manuale in Markdown
contenuti/argomenti/    le esposizioni orali in Markdown, una per file
contenuti/mappe/        mappe concettuali in Mermaid
```

## L'albero di studio

`#/albero` scompone il programma in rami sempre più fini, fino a **571 domande**. Il ramo della
definizione è scritto a mano in `data/albero.js`; tutti gli altri sono **generati a runtime dalle
schede** (`daScheda`): per ogni scheda diventano rami «Perché nasce», «Le radici», «I precursori»,
«L'oggetto», «Il metodo», «Le teorie», «Gli esponenti» (ciascuno con le proprie teorie), «Gli
esperimenti», «La validità», «Che cosa precorre», «Dove si perde il voto», «L'esposizione d'insieme».
Gli id delle foglie sono stabili (`S204:esp:titchener:chi`): rinominare una teoria o un esponente
nella scheda cambia l'id e orfana il voto.

Il ciclo:

1. lo studente scrive la risposta nella casella — si salva in `localStorage` mentre scrive;
2. *Copia tutte le risposte per la correzione* produce un unico blocco di testo con id, domanda,
   riferimento alla scheda e risposta, da incollare in chat — oppure *Scarica come file*, e in chat
   basta chiedere la correzione. Chi preferisce scrivere in un solo documento copia il
   *questionario* (tutte le domande visibili con lo spazio per la risposta) e lo reincolla in
   *Importa le risposte*;
3. la correzione restituisce un JSON di voti, che si può incollare in *Incolla i voti* (salvato nel
   browser) e viene anche pubblicato in `PGE.albero.voti`;
4. i due insiemi di voti si fondono per data; ogni foglia conserva lo **storico** (`45 → 78`).

Il formato di un voto:

```js
"S204:esp:titchener:chi": { p: 72, d: "2026-09-06", n: "Mancava Cornell.", r: "2026-09-06T09:41:12.000Z",
                            storico: [ { d: "2026-09-04", p: 45 } ] }
```

`p` voto 1-100 · `d` data della correzione · `n` nota su che cosa mancava · `r` timestamp della
risposta corretta (se la risposta cambia dopo, la foglia torna «da correggere»). La traccia degli
elementi attesi per le foglie scritte a mano è nel campo `deve` di `data/albero.js`; per le foglie
generate la traccia è il blocco della scheda indicato in `rif`. Nessuna delle due viene mostrata.

## I fascicoli PDF

Cinque fascicoli A4 pronti per la stampa, uno per macro-argomento. Ogni scheda ripete
gli stessi dodici blocchi, sempre nello stesso ordine, così che il confronto fra due voci
sia una lettura in verticale.

| File | Contenuto | Schede | Pagine |
|---|---|---|---|
| `pdf/F1_la-definizione-di-psicologia.pdf` | La definizione, il ritardo, la doppia emancipazione | 2 | 5 |
| `pdf/F2_l-excursus-storico.pdf` | Dalle concezioni pre-scientifiche al comportamentismo | 10 | 37 |
| `pdf/F3_la-psicologia-contemporanea.pdf` | Cognitivismo, mente embodied, neuroscienze, discipline collaterali | 5 | 20 |
| `pdf/F4_la-metodologia-della-ricerca.pdf` | Metodo scientifico, processo di ricerca, variabili, metodi descrittivi, correlazionale, sperimentale, pubblicazione | 7 | 24 |
| `pdf/F5_le-basi-biologiche-del-comportamento.pdf` | Il neurone, l'attività elettrica e la sinapsi, l'architettura del sistema nervoso, il cervello primitivo, la corteccia, i metodi di indagine, evoluzione e genetica, epigenetica e plasticità | 8 | 28 |

Le schede scorrono di seguito senza salti di pagina forzati, per non lasciare carta bianca:
a separarle è il filetto spesso della testata. Per rigenerarli dopo aver modificato `data/schede.js`:

```
node pdf/genera.js
```

## Il file autonomo

`standalone.html` contiene tutto — CSS, script e testi — in un unico file da circa 2,4 MB.
Si apre con un doppio clic, senza server e senza connessione (tranne i font, che
ripiegano su quelli di sistema). Va rigenerato dopo ogni modifica:

```
node build.js
```

## Dipendenze esterne

Caricate da CDN al momento della visita, non serve installarle:
`marked` (Markdown), `mermaid` (mappe), Google Fonts (Newsreader, IBM Plex Sans, IBM Plex Mono).

## Nota sui contenuti

Le trascrizioni in `contenuti/L*_trascrizione.md` derivano dall'audio delle lezioni
del corso, materiale didattico prodotto da Unimarconi. Gli appunti, il manuale, gli
argomenti, i quiz, le flashcard e gli esercizi sui nomi sono rielaborazioni per uso
di studio personale.

Le imprecisioni del riconoscimento automatico e gli errori occasionali della lezione parlata
sono segnalati come **[N.d.R.]** invece di essere propagati. Il caso più importante è nella
lezione 10: la docente enuncia la **lateralizzazione emisferica invertita** a metà lezione e
la corregge nel riepilogo conclusivo — vale il riepilogo, ed è segnalato in ogni punto in cui
il tema compare.
