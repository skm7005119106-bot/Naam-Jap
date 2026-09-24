const CACHE = 'naam-jap-v49-pwa';
const ASSETS = ['./','./index.html','./style.css?v=49','./app.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-512-maskable.png'];

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

self.addEventListener('fetch', e =>
  e.respondWith(
    caches.match(e.request).then(r =>
      r || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  )
);
