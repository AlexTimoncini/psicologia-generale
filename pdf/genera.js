/* Genera un fascicolo PDF stampabile per ogni macro-argomento.
   Uso:  node pdf/genera.js
   Richiede Google Chrome installato (viene invocato in modalità headless). */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

global.window = {};
require(path.resolve('data/schede.js'));
const { fascicoli } = global.window.PGE.schede;

const USCITA = 'pdf';
const CHROME = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
].find(p => fs.existsSync(p));

/* ---------------- STILE DI STAMPA ---------------- */
const STILE = `
@page { size: A4; margin: 16mm 15mm 15mm 15mm; }

:root {
  --inchiostro: #14181d;
  --grafite:    #55606c;
  --tenue:      #7d8792;
  --accento:    #12514d;
  --segnale:    #9c3722;
  --linea:      #c9cec6;
  --linea-fine: #e2e5df;
  --fondo:      #f5f6f2;
  --display: "Newsreader", Georgia, "Times New Roman", serif;
  --testo:   "IBM Plex Sans", -apple-system, "Helvetica Neue", Arial, sans-serif;
  --dati:    "IBM Plex Mono", "SF Mono", Menlo, monospace;
}

* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin:0; background:#fff; color-scheme: light; orphans: 3; widows: 3;
       font-family: var(--testo); font-size: 9.6pt; line-height: 1.52;
       color: var(--inchiostro); }
strong { font-weight: 600; }
em { font-style: italic; }

/* ---- copertina ---- */
.copertina { margin-bottom: 10mm; }
.cop-indice { break-after: avoid; }
.cop-alto { border-bottom: 2.5pt solid var(--accento); padding-bottom: 5mm; margin-bottom: 8mm; }
.cop-corso { font-family: var(--dati); font-size: 7.4pt; letter-spacing: .18em;
             text-transform: uppercase; color: var(--grafite); margin: 0 0 8mm; }
.cop-n { font-family: var(--display); font-size: 34pt; line-height:1; color: var(--accento); margin:0 0 2mm; }
.cop-titolo { font-family: var(--display); font-size: 27pt; line-height: 1.1; margin: 0 0 3mm; font-weight: 500; }
.cop-sottotitolo { font-family: var(--display); font-size: 13pt; font-style: italic;
                   color: var(--grafite); margin: 0; font-weight: 400; }
.cop-intro { font-size: 9.4pt; line-height: 1.62; color: var(--grafite); margin: 7mm 0 0; max-width: 145mm; }

.cop-indice { margin-top: 0; }
.cop-indice-tit { font-family: var(--dati); font-size: 7.2pt; letter-spacing: .16em;
                  text-transform: uppercase; color: var(--grafite); margin: 0 0 4mm;
                  border-bottom: .5pt solid var(--linea); padding-bottom: 2mm; }
.cop-voce { display: grid; grid-template-columns: 12mm 1fr auto; gap: 3mm;
            padding: 2.4mm 0; border-bottom: .5pt solid var(--linea-fine); align-items: baseline; }
.cop-voce-n { font-family: var(--dati); font-size: 9pt; color: var(--accento); }
.cop-voce-nome { font-family: var(--display); font-size: 11.5pt; }
.cop-voce-riga { display:block; font-family: var(--testo); font-size: 8.4pt; color: var(--grafite);
                 line-height:1.45; margin-top: .8mm; }
.cop-voce-meta { font-family: var(--dati); font-size: 7.4pt; color: var(--tenue); white-space: nowrap; }

.legenda { margin-top: 12mm; padding-top: 6mm; border-top: .5pt solid var(--linea); }
.legenda-tit { font-family: var(--dati); font-size: 7.2pt; letter-spacing: .16em;
               text-transform: uppercase; color: var(--grafite); margin: 0 0 3mm; }
.legenda-corpo { columns: 2; column-gap: 8mm; font-size: 8.2pt; line-height: 1.5; color: var(--grafite); }
.legenda-corpo p { margin: 0 0 1.6mm; break-inside: avoid; }
.legenda-corpo b { color: var(--inchiostro); font-family: var(--dati); font-size: 7.6pt; }

/* ---- scheda ---- */
/* Le schede scorrono di seguito: nessun salto di pagina forzato, così non
   restano pagine mezze bianche. A separarle è il filetto spesso della testata,
   che non può restare orfano in fondo alla pagina. */
.scheda { margin-top: 9mm; }
.scheda:first-of-type { margin-top: 0; }

.sk-testa { border-top: 2.5pt solid var(--accento); padding-top: 3mm; margin-bottom: 4mm;
            break-inside: avoid; break-after: avoid; }
.sk-occhiello { font-family: var(--dati); font-size: 7pt; letter-spacing: .16em;
                text-transform: uppercase; color: var(--grafite); margin: 0 0 1.5mm;
                display: flex; justify-content: space-between; }
.sk-nome { font-family: var(--display); font-size: 20pt; line-height: 1.12; margin: 0 0 2mm; font-weight: 500; }
.sk-unariga { font-size: 9.6pt; line-height: 1.5; color: var(--grafite); margin: 0 0 3mm; max-width: 155mm; }
.sk-coord { display: flex; flex-wrap: wrap; gap: 0 6mm; font-family: var(--dati); font-size: 7.6pt;
            color: var(--grafite); border-top: .5pt solid var(--linea-fine);
            border-bottom: .5pt solid var(--linea-fine); padding: 1.8mm 0; }
.sk-coord b { color: var(--accento); font-weight: 500; }

/* blocco: etichetta a sinistra, contenuto a destra.
   I blocchi scorrono liberamente fra le pagine: a non spezzarsi sono le unità
   atomiche (una voce, un esponente, un esperimento, un errore). Così non restano
   pagine mezze vuote per far stare un blocco intero. */
.blocco { padding: 3mm 0; border-bottom: .5pt solid var(--linea-fine); break-inside: auto; overflow: hidden; }
.bl-eti { float: left; width: 26mm; font-family: var(--dati); font-size: 7pt; letter-spacing: .1em;
          text-transform: uppercase; color: var(--accento); line-height: 1.4; padding-top: .6mm; }
.bl-eti span { display: block; color: var(--tenue); font-size: 6.4pt; letter-spacing: .06em; }
.bl-corpo { margin-left: 30mm; }
.bl-corpo > *:first-child { margin-top: 0; }
.bl-corpo > *:last-child { margin-bottom: 0; }
.bl-corpo p { margin: 0 0 2mm; }
.bl-vuoto { color: var(--tenue); font-family: var(--dati); font-size: 8pt; }

.formula { font-family: var(--display); font-size: 11pt; line-height: 1.45;
           border-left: 2pt solid var(--accento); padding: 1mm 0 1mm 4mm; margin: 0 0 2.5mm; }
.glossa { font-size: 8.8pt; line-height: 1.55; color: var(--grafite); margin: 0 0 2mm; }

ul.punti { margin: 0 0 2mm; padding-left: 4.5mm; }
ul.punti li { margin-bottom: 1.4mm; line-height: 1.5; }
ul.punti li::marker { color: var(--accento); }

.voce { break-inside: avoid; margin-bottom: 3mm; padding-bottom: 2.5mm;
        border-bottom: .4pt dotted var(--linea); }
.voce:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.voce-tit { font-family: var(--display); font-size: 11pt; font-weight: 500; margin: 0 0 1mm; }
.voce-meta { font-family: var(--dati); font-size: 7.2pt; color: var(--tenue); margin: 0 0 1.4mm; }
.voce-testo { margin: 0 0 1.5mm; line-height: 1.5; }

.esponente { break-inside: avoid; margin-bottom: 4mm; padding: 2.5mm 3mm;
             background: var(--fondo); border-left: 1.5pt solid var(--accento); }
.esp-testa { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0 3mm; margin-bottom: 1.2mm; }
.esp-nome { font-family: var(--display); font-size: 11.5pt; font-weight: 500; }
.esp-anni { font-family: var(--dati); font-size: 7.4pt; color: var(--tenue); }
.esp-ruolo { font-family: var(--dati); font-size: 7.2pt; color: var(--accento);
             text-transform: uppercase; letter-spacing: .06em; }
.esp-chie { font-size: 9pt; line-height: 1.5; margin: 0 0 1.8mm; }
.esp-sub { font-family: var(--dati); font-size: 6.6pt; letter-spacing: .12em; text-transform: uppercase;
           color: var(--grafite); margin: 2mm 0 1mm; }
.esp-nota { font-size: 8.4pt; line-height: 1.5; color: var(--grafite);
            border-top: .4pt solid var(--linea); padding-top: 1.5mm; margin-top: 2mm; }

.esperimento { break-inside: avoid; margin-bottom: 3.5mm; }
.exp-nome { font-family: var(--display); font-size: 11pt; font-weight: 500; margin: 0 0 1.2mm; }
.exp-riga { display: grid; grid-template-columns: 18mm 1fr; gap: 3mm; margin-bottom: 1.2mm; align-items: baseline; }
.exp-eti { font-family: var(--dati); font-size: 6.6pt; letter-spacing: .1em; text-transform: uppercase;
           color: var(--tenue); }
.exp-riga ol { margin: 0; padding-left: 4.5mm; }
.exp-riga ol li { margin-bottom: .8mm; }

.terna { display: grid; gap: 2mm; }
.terna-voce { display: grid; grid-template-columns: 16mm 1fr; gap: 3mm; align-items: baseline; }
.terna-eti { font-family: var(--dati); font-size: 6.8pt; letter-spacing: .1em; text-transform: uppercase;
             color: var(--accento); }

table.griglia { width: 100%; border-collapse: collapse; font-size: 8.6pt; margin: 0 0 2mm; }
table.griglia th { font-family: var(--dati); font-size: 6.8pt; letter-spacing: .1em;
                   text-transform: uppercase; color: var(--grafite); text-align: left;
                   border-bottom: .8pt solid var(--linea); padding: 1.5mm 2mm 1.5mm 0; vertical-align: bottom; }
table.griglia td { padding: 1.8mm 2mm 1.8mm 0; border-bottom: .4pt solid var(--linea-fine);
                   vertical-align: top; line-height: 1.45; }
table.griglia tr:last-child td { border-bottom: none; }

.errori { display: grid; gap: 1.8mm; }
.err { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; break-inside: avoid;
       padding-bottom: 1.8mm; border-bottom: .4pt dotted var(--linea); }
.err:last-child { border-bottom: none; }
.err-no  { color: var(--segnale); font-size: 8.8pt; line-height: 1.45; }
.err-si  { font-size: 8.8pt; line-height: 1.45; }
.err-no::before { content: "✗ "; font-family: var(--dati); }
.err-si::before { content: "✓ "; font-family: var(--dati); color: var(--accento); }

.contrasto { background: var(--fondo); border: .5pt solid var(--linea); padding: 3mm;
             font-size: 9pt; line-height: 1.55; margin-top: 3mm; break-inside: avoid; }
.chiuditura { margin-top: 4mm; padding-top: 3mm; border-top: 1.5pt solid var(--accento);
              font-size: 9pt; line-height: 1.6; color: var(--grafite); break-inside: avoid; }
`;

/* ---------------- UTILITÀ ---------------- */
const vuoto = "<p class='bl-vuoto'>—</p>";
const has = a => Array.isArray(a) && a.length;

function blocco(n, eti, sub, corpo) {
  return `<div class="blocco">
    <div class="bl-eti">${n}. ${eti}${sub ? `<span>${sub}</span>` : ''}</div>
    <div class="bl-corpo">${corpo || vuoto}</div>
  </div>`;
}

/* ---------------- SCHEDA DI TIPO "SCUOLA" ---------------- */
function rendiScuola(s, i) {
  const id = s.identificazione;
  const B = [];

  B.push(blocco(1, "Perché nasce", "l'esigenza teorica",
    `<p>${s.nasceDa.problema}</p><div class="formula">${s.nasceDa.formula}</div>`));

  B.push(blocco(2, "Radici", "filosofiche e teoriche",
    has(s.radici) ? s.radici.map(r => `<div class="voce">
      <p class="voce-tit">${r.nome}</p>
      <p class="voce-meta">${r.tipo}</p>
      <p class="voce-testo">${r.tesi}</p></div>`).join('') : null));

  B.push(blocco(3, "Precursori", "da chi eredita",
    has(s.precursori) ? `<table class="griglia">
      <tr><th style="width:32%">Chi</th><th style="width:22%">Da dove</th><th>Che cosa porta</th></tr>
      ${s.precursori.map(p => `<tr><td><strong>${p.nome}</strong></td><td>${p.provenienza || '—'}</td><td>${p.apporto}</td></tr>`).join('')}
    </table>` : null));

  B.push(blocco(4, "Oggetto di studio", "che cosa studia",
    `<div class="formula">${s.oggetto.formula}</div>${s.oggetto.glossa ? `<p class="glossa">${s.oggetto.glossa}</p>` : ''}`));

  B.push(blocco(5, "Metodo", "come lo studia",
    `<div class="formula">${s.metodo.formula}</div>
     ${s.metodo.glossa ? `<p class="glossa">${s.metodo.glossa}</p>` : ''}
     ${has(s.metodo.vincoli) ? `<ul class="punti">${s.metodo.vincoli.map(v => `<li>${v}</li>`).join('')}</ul>` : ''}`));

  B.push(blocco(6, "Teorie", "e concetti avanzati",
    has(s.teorie) ? s.teorie.map(t => `<div class="voce">
      <p class="voce-tit">${t.nome}</p>
      <p class="voce-testo">${t.enunciato}</p>
      ${t.glossa ? `<p class="glossa">${t.glossa}</p>` : ''}</div>`).join('') : null));

  B.push(blocco(7, "Esponenti", "chi è, cosa ha fatto",
    has(s.esponenti) ? s.esponenti.map(e => `<div class="esponente">
      <div class="esp-testa">
        <span class="esp-nome">${e.nome}</span>
        <span class="esp-anni">${e.anni}</span>
        <span class="esp-ruolo">${e.ruolo}</span>
      </div>
      ${e.luogo && e.luogo !== '—' ? `<p class="voce-meta">${e.luogo}</p>` : ''}
      <p class="esp-chie">${e.chiE}</p>
      ${has(e.haFatto) ? `<p class="esp-sub">Che cosa ha fatto</p><ul class="punti">${e.haFatto.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
      ${has(e.teorie) ? `<p class="esp-sub">Le sue teorie</p><ul class="punti">${e.teorie.map(t => `<li><strong>${t.nome}</strong> — ${t.enunciato}</li>`).join('')}</ul>` : ''}
      ${e.nota ? `<p class="esp-nota">${e.nota}</p>` : ''}
    </div>`).join('') : null));

  B.push(blocco(8, "Esperimenti", "disegno, esito, senso",
    has(s.esperimenti) ? s.esperimenti.map(x => `<div class="esperimento">
      <p class="exp-nome">${x.nome}</p>
      <div class="exp-riga"><span class="exp-eti">Disegno</span><ol>${x.disegno.map(d => `<li>${d}</li>`).join('')}</ol></div>
      <div class="exp-riga"><span class="exp-eti">Risultato</span><div>${x.risultato}</div></div>
      <div class="exp-riga"><span class="exp-eti">Significato</span><div>${x.significato}</div></div>
    </div>`).join('') : null));

  B.push(blocco(9, "Validità", "merito, limite, esito",
    `<div class="terna">
      <div class="terna-voce"><span class="terna-eti">Merito</span><div>${s.validita.merito}</div></div>
      <div class="terna-voce"><span class="terna-eti">Limite</span><div>${s.validita.limite}</div></div>
      <div class="terna-voce"><span class="terna-eti">Esito</span><div>${s.validita.esito}</div></div>
    </div>`));

  B.push(blocco(10, "Precorre", "verso che cosa apre",
    has(s.precorre) ? `<ul class="punti">${s.precorre.map(p => `<li><strong>${p.nome}</strong> — ${p.come}</li>`).join('')}</ul>` : null));

  B.push(blocco(11, "Formule", "alla lettera",
    has(s.formule) ? s.formule.map(f => `<div class="formula">${f}</div>`).join('') : null));

  B.push(blocco(12, "Errori", "da non fare",
    has(s.errori) ? `<div class="errori">${s.errori.map(e => `<div class="err">
      <div class="err-no">${e.no}</div><div class="err-si">${e.si}</div></div>`).join('')}</div>` : null));

  return `<section class="scheda">
    <div class="sk-testa">
      <p class="sk-occhiello"><span>Scheda ${i}</span><span>${s.id}</span></p>
      <h2 class="sk-nome">${s.nome}</h2>
      <p class="sk-unariga">${id.unaRiga}</p>
      <div class="sk-coord">
        <span><b>Anno</b> ${id.anno}</span>
        <span><b>Luogo</b> ${id.luogo}</span>
        <span><b>Lezione</b> ${id.lezione}</span>
        <span><b>Manuale</b> cap. ${id.capitolo}</span>
      </div>
    </div>
    ${B.join('')}
    ${s.contrasto ? `<div class="chiuditura">${s.contrasto}</div>` : ''}
  </section>`;
}

/* ---------------- SCHEDA DI TIPO "CONCETTO" ---------------- */
function rendiConcetto(s, i) {
  const id = s.identificazione;
  const B = [];

  B.push(blocco(1, "Definizioni", "le formulazioni",
    has(s.definizioni) ? s.definizioni.map(d => `<div class="voce">
      <p class="voce-tit">${d.termine}</p>
      <div class="formula">${d.testo}</div>
      ${d.glossa ? `<p class="glossa">${d.glossa}</p>` : ''}</div>`).join('') : null));

  B.push(blocco(2, s.articolazione ? s.articolazione.titolo.split(',')[0] : "Articolazione", "il confronto",
    s.articolazione ? `<table class="griglia">
      <tr>${s.articolazione.colonne.map(c => `<th>${c}</th>`).join('')}</tr>
      ${s.articolazione.righe.map(r => `<tr>${r.map((c, k) => `<td${k === 0 ? ' style="font-family:var(--dati);font-size:7.6pt;color:var(--grafite)"' : ''}>${c}</td>`).join('')}</tr>`).join('')}
    </table>` : null));

  B.push(blocco(3, "Scomposizione", "elemento per elemento",
    s.scomposizione ? `<p class="voce-meta">${s.scomposizione.titolo}</p>
      ${s.scomposizione.voci.map(v => `<div class="voce">
        <p class="voce-tit">${v.chiave}</p>
        <p class="voce-testo">${v.valore}</p></div>`).join('')}` : null));

  B.push(blocco(4, "Perché serve", "la chiusura che alza il voto",
    s.percheServe ? `<p>${s.percheServe}</p>` : null));

  B.push(blocco(5, "Formule", "alla lettera",
    has(s.formule) ? s.formule.map(f => `<div class="formula">${f}</div>`).join('') : null));

  B.push(blocco(6, "Errori", "da non fare",
    has(s.errori) ? `<div class="errori">${s.errori.map(e => `<div class="err">
      <div class="err-no">${e.no}</div><div class="err-si">${e.si}</div></div>`).join('')}</div>` : null));

  return `<section class="scheda">
    <div class="sk-testa">
      <p class="sk-occhiello"><span>Scheda ${i}</span><span>${s.id}</span></p>
      <h2 class="sk-nome">${s.nome}</h2>
      <p class="sk-unariga">${id.unaRiga}</p>
      <div class="sk-coord">
        <span><b>Lezione</b> ${id.lezione}</span>
        <span><b>Manuale</b> cap. ${id.capitolo}</span>
      </div>
    </div>
    ${B.join('')}
  </section>`;
}

/* ---------------- LEGENDA DELLO SCHEMA ---------------- */
const LEGENDA_SCUOLA = [
  ["1 Perché nasce", "l'esigenza teorica lasciata aperta dalla scuola precedente"],
  ["2 Radici", "le posizioni filosofiche o teoriche su cui poggia"],
  ["3 Precursori", "chi le ha passato che cosa, e da quale tradizione"],
  ["4 Oggetto", "che cosa studia, nella formulazione tecnica"],
  ["5 Metodo", "come lo studia, con i vincoli operativi"],
  ["6 Teorie", "gli enunciati che la scuola produce"],
  ["7 Esponenti", "chi è ciascuno, che cosa ha fatto, quali teorie"],
  ["8 Esperimenti", "disegno, risultato, significato"],
  ["9 Validità", "merito, limite, esito"],
  ["10 Precorre", "verso quali scuole successive apre"],
  ["11 Formule", "le frasi da riprodurre alla lettera"],
  ["12 Errori", "che cosa non dire, e che cosa dire al suo posto"]
];
const LEGENDA_CONCETTO = [
  ["1 Definizioni", "le formulazioni, dalla più povera alla più completa"],
  ["2 Articolazione", "il confronto fra i termini in gioco"],
  ["3 Scomposizione", "la formula elemento per elemento"],
  ["4 Perché serve", "la chiusura che alza il voto"],
  ["5 Formule", "le frasi da riprodurre alla lettera"],
  ["6 Errori", "che cosa non dire, e che cosa dire al suo posto"]
];

/* ---------------- DOCUMENTO ---------------- */
function documento(f) {
  return `<!doctype html><html lang="it"><head><meta charset="utf-8">
<title>${f.titolo} — Psicologia Generale</title>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>${STILE}</style></head><body>

<div class="copertina">
  <div class="cop-alto">
    <p class="cop-corso">Psicologia Generale · SFO_PGE · ${f.lezione}</p>
    <p class="cop-n">${f.n}</p>
    <h1 class="cop-titolo">${f.titolo}</h1>
    <p class="cop-sottotitolo">${f.sottotitolo}</p>
  </div>

  <div class="cop-indice">
    <p class="cop-indice-tit">Le ${f.schede.length} schede</p>
    ${f.schede.map((s, i) => `<div class="cop-voce">
      <span class="cop-voce-n">${String(i + 1).padStart(2, '0')}</span>
      <span><span class="cop-voce-nome">${s.nome}</span>
        <span class="cop-voce-riga">${s.identificazione.unaRiga.replace(/<[^>]+>/g, '')}</span></span>
      <span class="cop-voce-meta">${s.identificazione.anno !== '—' ? s.identificazione.anno + ' · ' : ''}${s.identificazione.lezione}</span>
    </div>`).join('')}
  </div>
</div>

${f.schede.map((s, i) => s.tipo === 'concetto' ? rendiConcetto(s, i + 1) : rendiScuola(s, i + 1)).join('')}

</body></html>`;
}

/* ---------------- GENERAZIONE ---------------- */
if (!CHROME) {
  console.error('Chrome non trovato: genero solo gli HTML.');
}

fascicoli.forEach(f => {
  const base = path.join(USCITA, `${f.id}_${f.titolo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`);
  const html = base + '.html';
  fs.writeFileSync(html, documento(f), 'utf8');

  if (CHROME) {
    execFileSync(CHROME, [
      '--headless=new', '--disable-gpu', '--no-sandbox',
      '--no-pdf-header-footer',
      '--virtual-time-budget=12000',
      `--print-to-pdf=${path.resolve(base + '.pdf')}`,
      'file://' + path.resolve(html)
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
    const kb = Math.round(fs.statSync(base + '.pdf').size / 1024);
    console.log(`✓ ${path.basename(base)}.pdf — ${f.schede.length} schede, ${kb} KB`);
  } else {
    console.log(`· ${path.basename(html)} (HTML)`);
  }
});
