const cacheName = 'cache-v1'
const precacheResources = [
    './',
    './index.html',
    './capa.png',
]

self.addEventListener('install', (event) => {
    console.log('Service worker install event!')
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)))
})

self.addEventListener('activate', (event) => {
    console.log('Service worker activate event!')
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    )
})