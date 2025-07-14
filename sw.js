const CACHE_NAME = 'airline-comms-v2';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './PilotDeclaringanEmergency.mp4',
  './Video.mp4'
];

// Install event - cache all resources including media
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, adding all files...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('All files cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Failed to cache files:', error);
      })
  );
});

// Fetch event - serve from cache when offline, including media files
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Serving from cache:', event.request.url);
          return response;
        }
        
        // For media files, try to fetch and cache
        if (event.request.url.includes('.mp4') || 
            event.request.url.includes('.mp3') || 
            event.request.url.includes('.wav') ||
            event.request.url.includes('.m4a')) {
          return fetch(event.request)
            .then(response => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseClone);
                  });
              }
              return response;
            })
            .catch(() => {
              console.log('Media file not available offline:', event.request.url);
              return new Response('Media not available offline', { status: 503 });
            });
        }
        
        // For other requests, try network first
        return fetch(event.request)
          .catch(() => {
            console.log('Network request failed, no cache available:', event.request.url);
            return new Response('Content not available offline', { status: 503 });
          });
      })
  );
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Handle background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
  }
});

// Handle push notifications (optional for future use)
self.addEventListener('push', event => {
  console.log('Push notification received');
});

