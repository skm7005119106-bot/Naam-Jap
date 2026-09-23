/* Naam Jap service worker — versioned shell cache with network-first navigation. */
const VERSION = 'naam-jap-v3-1-0';
const SHELL = `${VERSION}-shell`;
const ASSETS = [
  './', './index.html', './style.css?v=3.1.0', './app.js?v=3.1.0', './manifest.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(SHELL).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== SHELL).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req, {cache:'no-store'}).then(response => {
      if (response.ok) { const copy=response.clone(); caches.open(SHELL).then(c=>c.put('./index.html',copy)); }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
    if (response.ok && ['style','script','image','manifest'].includes(req.destination)) { const copy=response.clone(); caches.open(SHELL).then(c=>c.put(req,copy)); }
    return response;
  })));
});
self.addEventListener('message', event => { if (event.data === 'SKIP_WAITING') self.skipWaiting(); });
