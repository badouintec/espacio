// Service Worker para III Coloquio Espacio y Sostenibilidad 2025
// Optimizado para Cloudflare Pages - Cache First Strategy

const CACHE_NAME = 'coloquio-espacio-v2.1.0';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  
  // CSS Critical
  '/assets/css/bootstrap.min.css',
  '/assets/css/main.css',
  '/assets/css/responsive.css',
  
  // CSS Non-Critical
  '/assets/css/animate.css',
  '/assets/css/nivo-lightbox.css',
  '/assets/css/slicknav.css',
  '/assets/fonts/line-icons.css',
  
  // JavaScript
  '/assets/js/jquery-min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/main.js',
  '/assets/js/wow.js',
  
  // Imágenes críticas
  '/assets/img/logoblanco.png',
  '/assets/img/favicon.png',
  '/assets/img/slider/slide1.jpg',
  '/assets/img/slider/slide2.jpg',
  '/assets/img/slider/slide3.jpg',
  
  // Fonts
  '/assets/fonts/LineIcons.woff',
  '/assets/fonts/LineIcons.ttf'
];

// Install Event - Precache critical resources
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Precaching critical resources');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Installation failed:', error);
      })
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch Event - Cache First Strategy with Network Fallback
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip POST requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          console.log('[SW] Cache hit:', event.request.url);
          return cachedResponse;
        }

        console.log('[SW] Cache miss, fetching:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response before caching
            const responseToCache = response.clone();
            
            // Cache images and assets for future use
            if (event.request.url.includes('/assets/') || 
                event.request.url.includes('/img/')) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(error => {
            console.error('[SW] Fetch failed:', error);
            
            // Return offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            throw error;
          });
      })
  );
});

// Background Sync for form submissions (future enhancement)
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('[SW] Background sync triggered');
    // Future: Handle offline form submissions
  }
});

// Push notifications (future enhancement)
self.addEventListener('push', event => {
  if (event.data) {
    const notificationData = event.data.json();
    console.log('[SW] Push notification received:', notificationData);
    
    const options = {
      body: notificationData.body,
      icon: '/assets/img/favicon.png',
      badge: '/assets/img/favicon.png',
      vibrate: [200, 100, 200],
      data: {
        url: notificationData.url || '/'
      },
      actions: [
        {
          action: 'view',
          title: 'Ver evento'
        },
        {
          action: 'close',
          title: 'Cerrar'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(notificationData.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification clicked:', event.notification.data);
  
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});