/* Genera standalone.html: una copia del sito in un unico file,
   con CSS, script e contenuti incorporati. Funziona anche da file://.
   Uso:  node build.js                                                */
const fs = require('fs'), path = require('path');

const leggi = p => fs.readFileSync(p, 'utf8');
let html = leggi('index.html');

/* --- 1. CSS in linea --- */
html = html.replace(
  '<link rel="stylesheet" href="assets/style.css">',
  '<style>\n' + leggi('assets/style.css') + '\n</style>'
);

/* --- 2. contenuti Markdown e mappe --- */
const contenuti = {};
fs.readdirSync('contenuti').filter(f => f.endsWith('.md'))
  .forEach(f => contenuti[f.replace(/\.md$/, '')] = leggi(path.join('contenuti', f)));
fs.readdirSync('contenuti/mappe').filter(f => f.endsWith('.mmd'))
  .forEach(f => contenuti['mappe/' + f.replace(/\.mmd$/, '')] = leggi(path.join('contenuti/mappe', f)));
fs.readdirSync('contenuti/manuale').filter(f => f.endsWith('.md'))
  .forEach(f => contenuti['manuale/' + f.replace(/\.md$/, '')] = leggi(path.join('contenuti/manuale', f)));
fs.readdirSync('contenuti/argomenti').filter(f => f.endsWith('.md'))
  .forEach(f => contenuti['argomenti/' + f.replace(/\.md$/, '')] = leggi(path.join('contenuti/argomenti', f)));

const bloccoContenuti =
  '<script>\nvar PGE = window.PGE = window.PGE || {};\nPGE.contenuti = ' +
  JSON.stringify(contenuti) + ';\n</script>';

/* --- 3. script locali in linea, nell'ordine in cui compaiono --- */
const locali = [...html.matchAll(/<script src="((?:data|assets)\/[^"]+)"><\/script>/g)];
locali.forEach(([tag, src], i) => {
  const corpo = '<script>\n' + leggi(src) + '\n</script>';
  /* i contenuti vanno inseriti prima del primo script locale */
  html = html.replace(tag, (i === 0 ? bloccoContenuti + '\n' : '') + corpo);
});

fs.writeFileSync('standalone.html', html);

const kb = n => (n / 1024).toFixed(0) + ' KB';
console.log('standalone.html generato — ' + kb(Buffer.byteLength(html)));
console.log('  script incorporati : ' + locali.length);
console.log('  contenuti          : ' + Object.keys(contenuti).length + ' file');
console.log('  capitoli manuale   : ' + Object.keys(contenuti).filter(k => k.startsWith('manuale/')).length);
console.log('  argomenti          : ' + Object.keys(contenuti).filter(k => k.startsWith('argomenti/')).length);
