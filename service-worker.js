const CACHE_NAME = 'soul-guidance-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/emergency-kit.html',
    '/styles.css',
    '/theme.css',
    '/script.js',
    '/prayer-book-script.js',
    '/prayer-library.js',
    '/prayer-scheduler.js',
    '/assets/images/favicon.svg',
    '/assets/audio/chant_loop.mp3', // Pre-cache existing
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all: app shell and content');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate Event (Cleanup old caches)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch Event (Network First for HTML, Cache First for Assets)
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests like Google Analytics
    if (!event.request.url.startsWith(self.location.origin) && !event.request.url.includes('cdnjs') && !event.request.url.includes('unpkg')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return cached response if found
            if (cachedResponse) {
                return cachedResponse;
            }

            // Otherwise fetch from network
            return fetch(event.request).then((response) => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // Clone the response
                const responseToCache = response.clone();

                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});
