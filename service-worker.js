const CACHE_NAME = 'soul-guidance-v2-offline-audio';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/theme.css',
    '/shrine.css',
    '/soul_guide.css',
    '/saint_parallax.css',
    '/script.js',
    '/manifest.json',
    '/assets/audio/chant.mp3'
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version if found
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Activate Event (Cleanup)
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
