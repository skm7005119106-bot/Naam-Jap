const CACHE = 'naam-jap-v30-pwa';
const ASSETS = ['./','./index.html','./style.css?v=30','./app.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-512-maskable.png'];

self.addEventListener('install', e =>
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(url =>
        // Cache each file independently: if one request ever fails, it no
        // longer breaks the entire install (which used to leave the whole
        // app uncached and non-installable).
        fetch(url).then(res => res.ok && c.put(url, res)).catch(() => {})
      )))
      .then(() => self.skipWaiting())
  )
);

self.addEventListener('activate', e =>
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  )
);

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  const isHTML = req.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname === '/';
  const isCSS = url.pathname.endsWith('/style.css');

  // HTML and CSS are network-first so an old cached stylesheet can never
  // remain visible until the user manually refreshes. Offline fallback still
  // uses the last known cached copy.
  if (isHTML || isCSS) {
    e.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(r =>
      r || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
