// Service worker: lets the site (and the emulator itself) work offline after the first visit.
const APP_CACHE = "retro-arcade-app-v1";
const EMULATOR_CACHE = "retro-arcade-emulatorjs-4.2.3";

const APP_FILES = [
    "./",
    "index.html",
    "play.html",
    "css/style.css",
    "js/systems.js",
    "js/db.js",
    "js/library.js",
    "js/play.js",
    "manifest.webmanifest",
    "icons/icon-192.png",
    "icons/icon-512.png",
    "icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
    event.waitUntil(caches.open(APP_CACHE).then(cache => cache.addAll(APP_FILES)));
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(key => key !== APP_CACHE && key !== EMULATOR_CACHE).map(key => caches.delete(key))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const { request } = event;
    if (request.method !== "GET") return;
    const url = new URL(request.url);

    // EmulatorJS files are versioned and never change: cache-first.
    // Core binaries (*.data) are skipped because EmulatorJS already keeps them in IndexedDB.
    if (url.hostname === "cdn.emulatorjs.org" && url.pathname.startsWith("/4.2.3/") && !url.pathname.endsWith(".data")) {
        event.respondWith(
            caches.open(EMULATOR_CACHE).then(async cache => {
                const cached = await cache.match(request);
                if (cached) return cached;
                const response = await fetch(request);
                if (response.ok || response.type === "opaque") cache.put(request, response.clone());
                return response;
            })
        );
        return;
    }

    // Our own files: network-first so updates show up, falling back to the cache offline.
    if (url.origin === self.location.origin) {
        event.respondWith(
            fetch(request).then(response => {
                if (response.ok) {
                    const copy = response.clone();
                    caches.open(APP_CACHE).then(cache => cache.put(request, copy));
                }
                return response;
            }).catch(() => caches.match(request, { ignoreSearch: true }))
        );
    }
});
