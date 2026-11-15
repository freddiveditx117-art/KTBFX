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

// SEO: metadata and crawlable discovery files for Google and other search engines.
const siteUrl = 'https://freddiveditx117-art.github.io/KTBFX/';
fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\\nAllow: /\\nSitemap: ' + siteUrl + 'sitemap.xml\\n');
fs.writeFileSync(path.join(out, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>' + siteUrl + '</loc><changefreq>weekly</changefreq><priority>1.0</priority></url></urlset>');

let html = fs.readFileSync(htmlPath, 'utf8');
const headTags = `
    <link rel="manifest" href="${base}manifest.webmanifest">
    <link rel="apple-touch-icon" href="${base}icon.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="KTBFX">
`;
const seoTags = `
    <title>KTBFX — Kettlebell Training Experience | Entrenamiento</title>
    <meta name="description" content="KTBFX: aplicación de entrenamiento con kettlebell. Explora 94 ejercicios, crea rutinas y registra tus sesiones desde la web o tu móvil.">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="https://freddiveditx117-art.github.io/KTBFX/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="KTBFX — Kettlebell Training Experience">
    <meta property="og:description" content="Entrena con kettlebell: 94 ejercicios, rutinas y seguimiento de sesiones.">
    <meta property="og:url" content="https://freddiveditx117-art.github.io/KTBFX/">
    <meta property="og:image" content="https://freddiveditx117-art.github.io/KTBFX/icon.png">
    <meta name="twitter:card" content="summary">
    <script type="application/ld+json">
      {"@context":"https://schema.org","@type":"WebApplication","name":"KTBFX","alternateName":"Kettlebell Training Experience","url":"https://freddiveditx117-art.github.io/KTBFX/","description":"Aplicación web de entrenamiento con kettlebell con biblioteca de ejercicios, rutinas y registro de sesiones.","applicationCategory":"HealthApplication","operatingSystem":"Web, Android, iOS"}
    </script>
`;
html = html.replace('</head>', headTags + seoTags + '\n  </head>');
const apkDownload = 'https://github.com/freddiveditx117-art/KTBFX/releases/download/ktbfx-achievements-v1.0.0/application-7068f176-dd6d-4adc-8198-96e509607bd1.apk';
const apkButton = `
<style>
  #ktbfx-apk-download {
    position: fixed; right: 14px; bottom: max(14px, env(safe-area-inset-bottom));
    z-index: 2147483000; display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 16px; border-radius: 999px; background: #b7f34a; color: #111;
    font: 700 14px/1.2 system-ui, sans-serif; text-decoration: none;
    box-shadow: 0 4px 18px rgba(0,0,0,.35); border: 1px solid rgba(0,0,0,.18);
  }
  #ktbfx-apk-download:focus-visible { outline: 3px solid white; outline-offset: 3px; }
</style>
<a id="ktbfx-apk-download" href="${apkDownload}" download="KTBFX.apk" aria-label="Descargar aplicación KTBFX para Android">⬇ Descargar APK</a>
`;
html = html.replace('</body>', apkButton + '\n' + '</body>');
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
