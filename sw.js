let cacheName = 'pwa-basic'
let filesToCache = [
  '/',
  '/index.html',
  '/js/main.js',
  '/css/style.css',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})