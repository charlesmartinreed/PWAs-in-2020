const staticHBMPCoffee = "hbmp-coffee-co-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/script.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
];

/* 
install is a lifecycle event that runs when service worker is, you guessed it, installed - triggered as soon as service worker executes and only called once per service worker 
*/

self.addEventListener("install", (installEvent) => {
  // async
  installEvent.waitUntil(
    caches.open(staticHBMPCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// fetch the assets using the service worker
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    // respond with our array of assets
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
