const CACHE_NAME = 'etracker-v3'; // Increased to v3 to force a fresh update
const ASSETS = [
  '/Expense-Tracker-2.0/',
  '/Expense-Tracker-2.0/ETracker.html',
  '/Expense-Tracker-2.0/manifest.json',
  '/Expense-Tracker-2.0/expense_app_icon_512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
