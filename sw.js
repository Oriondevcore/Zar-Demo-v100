const CACHE_NAME = 'zar-hotel-v1';
const ASSETS = [
  './',
  './index.html',
  './dashboard.html',
  './hotel.jpeg',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
  // Exclude API calls (Google Apps Script) from caching so data is always fresh
  if (e.request.url.includes('script.google.com')) {
    return;
  }

  e.respondWith(
    caches.match(e.request)
      .then((response) => response || fetch(e.request))
  );
});
