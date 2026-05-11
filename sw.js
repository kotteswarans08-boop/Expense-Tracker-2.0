const CACHE_NAME = 'etracker-v1';
const ASSETS = [
  './ETracker.html',
  './manifest.json',
  './icon.png'
];

// This part saves your app to the phone/computer memory
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// This part makes it work without internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
