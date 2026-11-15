import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('dist');
const base = '/KTBFX/';
const htmlPath = path.join(out, 'index.html');
if (!fs.existsSync(htmlPath)) throw new Error('Expo web export did not create dist/index.html');

const iconSource = path.resolve('assets/icon.png');
if (!fs.existsSync(iconSource)) throw new Error('KTBFX app icon was not found');
fs.copyFileSync(iconSource, path.join(out, 'icon.png'));

const manifest = {
  id: base,
  name: 'KTBFX — Kettlebell Training Experience',
  short_name: 'KTBFX',
  description: 'Aplicación de entrenamiento y registro de sesiones con kettlebell.',
  start_url: base,
  scope: base,
  display: 'standalone',
  orientation: 'portrait',
  background_color: '#10110f',
  theme_color: '#10110f',
  icons: [{ src: base + 'icon.png', sizes: '1024x1024', type: 'image/png', purpose: 'any' }]
};
fs.writeFileSync(path.join(out, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2));

function filesIn(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.posix.join(prefix, entry.name);
    return entry.isDirectory() ? filesIn(path.join(dir, entry.name), relative) : [relative];
  });
}
const precache = filesIn(out)
  .filter((file) => file !== 'sw.js')
  .map((file) => base + file.replaceAll('\\', '/'));
precache.unshift(base);
const sw = `const CACHE = 'ktbfx-web-v1';
const BASE = '${base}';
const PRECACHE = ${JSON.stringify(precache)};
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(BASE, copy));
      return response;
    }).catch(() => caches.match(BASE)));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    if (response.ok) caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
    return response;
  })));
});
`;
fs.writeFileSync(path.join(out, 'sw.js'), sw);

let html = fs.readFileSync(htmlPath, 'utf8');
const headTags = `
    <link rel="manifest" href="${base}manifest.webmanifest">
    <link rel="apple-touch-icon" href="${base}icon.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="KTBFX">
`;
html = html.replace('</head>', headTags + '\n  </head>');
const registration = `
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/KTBFX/sw.js', { scope: '/KTBFX/' }).catch((error) => {
        console.error('No se pudo activar el modo sin conexión de KTBFX:', error);
      });
    });
  }
</script>
`;
html = html.replace('</body>', registration + '\n</body>');
fs.writeFileSync(htmlPath, html);
console.log('PWA files prepared for GitHub Pages at ' + base);
