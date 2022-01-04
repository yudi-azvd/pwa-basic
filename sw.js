let cacheName = 'pwa-basic'
// const isHostedOnGithub = window.location.href.indexOf('github')
// console.log('href', window.location.href);
let filesToCache = [
  '/pwa-basic/',
  '/pwa-basic/index.html',
  '/pwa-basic/js/main.js',
  '/pwa-basic/css/style.css',
]

// if (isHostedOnGithub) {
//   filesToCache = filesToCache.map(file => 'pwa-basic/' + file)
// }

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName)
    console.log('[Service Worker] caching content');
    await cache.addAll(filesToCache)
  })())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})