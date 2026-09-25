const CACHE = 'naam-jap-v40-final-pwa-standalone-1';
const ASSETS = ['./','./index.html?v=v40-final-pwa-standalone-1','./style.css?v=v40-final-pwa-standalone-1','./app.js?v=v40-final-pwa-standalone-1','./manifest.json?v=v40-final-pwa-standalone-1','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-512-maskable.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>fetch(u,{cache:'no-store'}).then(r=>r.ok&&c.put(u,r)).catch(()=>{})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res;}).catch(()=>caches.match('./index.html?v=v40-final-pwa-standalone-1')))));
