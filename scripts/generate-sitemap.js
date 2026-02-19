/**
 * Automatic Sitemap Generator
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://airotics.io';

// Define your routes manually or scan the pages directory
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/agency',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/ourwork',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/services/ai',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/services/blockchain',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/services/marketing',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/services/web-and-app',
    changefreq: 'monthly',
    priority: 0.9,
  },
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map(
    (route) => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('')}

</urlset>`;

  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap.trim());
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
