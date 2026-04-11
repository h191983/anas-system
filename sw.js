const CACHE_NAME = "anas-system-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.webmanifest"
];

// تثبيت
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// تشغيل
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
