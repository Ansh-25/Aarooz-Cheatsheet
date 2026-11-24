const scope = self.registration.scope;
const cachePrefix = `aruz:${scope}:`;
const cacheName = `${cachePrefix}v1`;
const home = new URL('./', scope).href;
const index = new URL('./index.html', scope).href;
const assets = [
  './manifest.webmanifest',
  './favicon.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
].map(path => new URL(path, scope).href);

self.addEventListener('install', event => {
  const files = [index, ...assets].map(url => new Request(url, { cache: 'reload' }));
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(cachePrefix) && key !== cacheName)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const page = url.origin + url.pathname;
  if (request.mode === 'navigate' && (page === home || page === index)) {
    event.respondWith(fetch(request).catch(async () => {
      const cache = await caches.open(cacheName);
      return (await cache.match(index)) || Response.error();
    }));
  } else if (assets.includes(url.href)) {
    event.respondWith((async () => {
      const cache = await caches.open(cacheName);
      return (await cache.match(request)) || fetch(request);
    })());
  }
});
