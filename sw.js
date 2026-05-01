const CACHE_NAME = 'mission-control-v1';

// 1. Install phase: Instantly activate the service worker
self.addEventListener('install', event => {
    self.skipWaiting();
});

// 2. Activate phase: Claim control of the page immediately
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

// 3. Fetch phase: Required to pass the PWA installability test
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
