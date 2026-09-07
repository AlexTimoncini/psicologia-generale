/* Service worker — generato da build.js a partire da sw.template.js.
   Precache di tutto il sito (tranne i PDF, messi in cache alla prima apertura),
   cache-first sui file locali, rete con riserva in cache per i font. */
const VERSIONE = '__VERSIONE__';
const CACHE = 'pge-' + VERSIONE;
const PRECACHE = __PRECACHE__;

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
