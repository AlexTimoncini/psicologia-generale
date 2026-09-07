/* Service worker — generato da build.js a partire da sw.template.js.
   Precache di tutto il sito (tranne i PDF, messi in cache alla prima apertura),
   cache-first sui file locali, rete con riserva in cache per i font. */
const VERSIONE = '4e2e985a4d';
const CACHE = 'pge-' + VERSIONE;
const PRECACHE = [
 "index.html",
 "manifest.webmanifest",
 "assets/albero.js",
 "assets/app.js",
 "assets/esame.js",
 "assets/pills.js",
 "assets/studio.js",
 "assets/style.css",
 "data/albero.js",
 "data/argomenti.js",
 "data/corso.js",
 "data/esame.js",
 "data/esami.js",
 "data/flashcard.js",
 "data/manuale.js",
 "data/nomi.js",
 "data/quiz.js",
 "data/schede.js",
 "contenuti/L01_appunti.md",
 "contenuti/L01_trascrizione.md",
 "contenuti/L02_appunti.md",
 "contenuti/L02_trascrizione.md",
 "contenuti/L03_appunti.md",
 "contenuti/L03_trascrizione.md",
 "contenuti/L04_appunti.md",
 "contenuti/L04_trascrizione.md",
 "contenuti/L05_appunti.md",
 "contenuti/L05_trascrizione.md",
 "contenuti/L06_appunti.md",
 "contenuti/L06_trascrizione.md",
 "contenuti/L07_appunti.md",
 "contenuti/L07_trascrizione.md",
 "contenuti/L08_appunti.md",
 "contenuti/L08_trascrizione.md",
 "contenuti/L09_appunti.md",
 "contenuti/L09_trascrizione.md",
 "contenuti/L10_appunti.md",
 "contenuti/L10_trascrizione.md",
 "contenuti/L11_appunti.md",
 "contenuti/L11_trascrizione.md",
 "contenuti/L12_appunti.md",
 "contenuti/L12_trascrizione.md",
 "contenuti/L13_appunti.md",
 "contenuti/L13_trascrizione.md",
 "contenuti/argomenti/D01.md",
 "contenuti/argomenti/D02.md",
 "contenuti/argomenti/D03.md",
 "contenuti/argomenti/D04.md",
 "contenuti/argomenti/D05.md",
 "contenuti/argomenti/D06.md",
 "contenuti/argomenti/D07.md",
 "contenuti/argomenti/D08.md",
 "contenuti/argomenti/D09.md",
 "contenuti/argomenti/D10.md",
 "contenuti/argomenti/D11.md",
 "contenuti/argomenti/D12.md",
 "contenuti/argomenti/D13.md",
 "contenuti/argomenti/D14.md",
 "contenuti/argomenti/D15.md",
 "contenuti/argomenti/D16.md",
 "contenuti/argomenti/D17.md",
 "contenuti/argomenti/D18.md",
 "contenuti/argomenti/D19.md",
 "contenuti/argomenti/D20.md",
 "contenuti/argomenti/D21.md",
 "contenuti/argomenti/D22.md",
 "contenuti/argomenti/D23.md",
 "contenuti/argomenti/D24.md",
 "contenuti/argomenti/D25.md",
 "contenuti/argomenti/D26.md",
 "contenuti/argomenti/D27.md",
 "contenuti/argomenti/D28.md",
 "contenuti/manuale/A1.md",
 "contenuti/manuale/A2.md",
 "contenuti/manuale/C01.md",
 "contenuti/manuale/C02.md",
 "contenuti/manuale/C03.md",
 "contenuti/manuale/C04.md",
 "contenuti/manuale/C05.md",
 "contenuti/manuale/C06.md",
 "contenuti/manuale/C07.md",
 "contenuti/manuale/C08.md",
 "contenuti/manuale/C09.md",
 "contenuti/manuale/C10.md",
 "contenuti/manuale/C11.md",
 "contenuti/manuale/C12.md",
 "contenuti/manuale/C13.md",
 "contenuti/manuale/C14.md",
 "contenuti/manuale/C15.md",
 "contenuti/manuale/C16.md",
 "contenuti/manuale/C17.md",
 "contenuti/manuale/C18.md",
 "contenuti/manuale/C19.md",
 "contenuti/manuale/C20.md",
 "contenuti/manuale/C21.md",
 "contenuti/manuale/C22.md",
 "contenuti/manuale/C23.md",
 "contenuti/manuale/C24.md",
 "contenuti/manuale/C25.md",
 "contenuti/manuale/C26.md",
 "contenuti/manuale/C27.md",
 "contenuti/manuale/C28.md",
 "contenuti/manuale/C29.md",
 "contenuti/mappe/L01.mmd",
 "contenuti/mappe/L02.mmd",
 "contenuti/mappe/L03.mmd",
 "contenuti/mappe/L04.mmd",
 "contenuti/mappe/L05.mmd",
 "contenuti/mappe/L06.mmd",
 "contenuti/mappe/L07.mmd",
 "contenuti/mappe/L08.mmd",
 "contenuti/mappe/L09.mmd",
 "contenuti/mappe/L10.mmd",
 "contenuti/mappe/L11.mmd",
 "contenuti/mappe/L12.mmd",
 "contenuti/mappe/L13.mmd",
 "contenuti/schema_integrato.md",
 "icone/apple-touch-icon.png",
 "icone/icona-192.png",
 "icone/icona-512.png",
 "icone/icona.svg"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE.map(f => new Request(f, { cache: 'reload' })))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'attiva') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const locale = u.origin === location.origin;
  if (r.mode === 'navigate') {
    e.respondWith(caches.match('index.html').then(c => c || fetch(r)));
    return;
  }
  if (locale) {
    /* cache-first; i PDF e ciò che manca vengono presi dalla rete e salvati */
    e.respondWith(caches.match(r).then(c => c || fetch(r).then(risp => {
      if (risp.ok) caches.open(CACHE).then(k => k.put(r, risp.clone()));
      return risp;
    })));
    return;
  }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) {
    e.respondWith(caches.open(CACHE + '-font').then(async k => {
      const c = await k.match(r);
      const rete = fetch(r).then(risp => { if (risp.ok) k.put(r, risp.clone()); return risp; }).catch(() => c);
      return c || rete;
    }));
  }
});
