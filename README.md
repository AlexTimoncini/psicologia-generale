# Psicologia Generale — Guida allo studio

Sito statico di supporto allo studio per l'esame di Psicologia Generale (SFO_PGE).
Nessun database, nessuna dipendenza da installare.

## Che cosa contiene

| Sezione | Contenuto |
|---|---|
| **Manuale** | 15 capitoli + 2 appendici (~34.000 parole) in forma di manuale: prosa espositiva, riquadri, tabelle, «In sintesi» e domande di verifica per ogni capitolo |
| **Schede** | 17 schede con struttura rigida e ripetuta — 12 blocchi identici per ogni scuola: perché nasce, radici, precursori, oggetto, metodo, teorie, esponenti, esperimenti, validità, precorre, formule, errori. Consultabili a schermo e scaricabili come **tre fascicoli PDF stampabili** |
| **Argomenti** | 15 esposizioni orali (~21.000 parole, 64 minuti di parlato) organizzate in sei cartelle: ogni argomento scritto **come si direbbe a voce**, con indicazioni di regìa nascondibili |
| **Excursus storico** | Le scuole raggruppate in quattro fasi, con filtri, tavola sinottica e la terna oggetto–metodo–validità per ciascuna |
| **Quiz a crocette** | 145 domande a quattro opzioni con spiegazione; ripasso automatico delle sbagliate |
| **Flashcard** | 189 carte a tre scatole (Leitner), con avanzamento salvato nel browser |
| **Scrivere i nomi** | 59 nomi e luoghi, confronto lettera per lettera e nota sulla trappola ortografica |
| **Esame** | Simulazione cronometrata, allenamento libero, archivio delle prove |
| **Lezioni** | Trascrizioni rielaborate, appunti e mappe concettuali |

Le lezioni 1, 2 e 3 sono complete: trascrizione rielaborata, appunti e mappa concettuale.

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
| Un capitolo del manuale | `contenuti/manuale/C16.md` + una voce in `data/manuale.js` |
| Un'esposizione orale | `contenuti/argomenti/D16.md` + una voce in `data/argomenti.js` |
| Una scheda schematica | `data/schede.js`, poi `node pdf/genera.js` per rigenerare i PDF |
| Domande del quiz | `data/quiz.js` — la **prima** opzione è sempre quella corretta, vengono mescolate a runtime |
| Flashcard | `data/flashcard.js` |
| Nomi da allenare | `data/nomi.js` |
| Trascrizione di una nuova lezione | `contenuti/L03_trascrizione.md` |
| Appunti di una nuova lezione | `contenuti/L03_appunti.md` |
| Mappa concettuale | `contenuti/mappe/L03.mmd` (sintassi Mermaid) |
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
pdf/genera.js           genera i tre fascicoli PDF (richiede Google Chrome)
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

## I fascicoli PDF

Tre fascicoli A4 pronti per la stampa, uno per macro-argomento:

| File | Contenuto | Pagine |
|---|---|---|
| `pdf/F1_la-definizione-di-psicologia.pdf` | La definizione, il ritardo, la doppia emancipazione | 5 |
| `pdf/F2_l-excursus-storico.pdf` | Dalle concezioni pre-scientifiche al comportamentismo | 37 |
| `pdf/F3_la-psicologia-contemporanea.pdf` | Cognitivismo, mente embodied, neuroscienze, discipline collaterali | 20 |

Le schede scorrono di seguito senza salti di pagina forzati, per non lasciare carta bianca:
a separarle è il filetto spesso della testata. Per rigenerarli dopo aver modificato `data/schede.js`:

```
node pdf/genera.js
```

## Il file autonomo

`standalone.html` contiene tutto — CSS, script e testi — in un unico file da circa 960 KB.
Si apre con un doppio clic, senza server e senza connessione (tranne i font, che
ripiegano su quelli di sistema). Va rigenerato dopo ogni modifica:

```
node build.js
```

## Dipendenze esterne

Caricate da CDN al momento della visita, non serve installarle:
`marked` (Markdown), `mermaid` (mappe), Google Fonts (Newsreader, IBM Plex Sans, IBM Plex Mono).

## Nota sui contenuti

Le trascrizioni in `contenuti/L0*_trascrizione.md` derivano dall'audio delle lezioni
del corso, materiale didattico prodotto da Unimarconi. Gli appunti, il manuale, gli
argomenti, i quiz, le flashcard e gli esercizi sui nomi sono rielaborazioni per uso
di studio personale.
