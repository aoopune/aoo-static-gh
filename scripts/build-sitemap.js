const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const write = process.argv.includes('--write');
const pages = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'redesigned-pages.json'), 'utf8')
);
const base = 'https://shroffin.com';

function renderXml(list) {
  const body = list
    .map(function (p) {
      return '  <url>\n    <loc>' + base + p.url + '</loc>\n  </url>';
    })
    .join('\n');
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    body +
    '\n</urlset>\n'
  );
}

const xml = renderXml(pages);
const xmlPath = path.join(root, 'sitemap.xml');

if (checkOnly) {
  const curXml = fs.readFileSync(xmlPath, 'utf8');
  const curLocs = Array.from(curXml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
    function (m) {
      return m[1];
    }
  );
  const expected = pages.map(function (p) {
    return base + p.url;
  });
  if (JSON.stringify(curLocs) !== JSON.stringify(expected)) {
    console.error('Sitemap XML out of date. Run: npm run build:sitemap -- --write');
    process.exit(1);
  }
  console.log('Sitemap XML OK (' + pages.length + ' URLs).');
} else if (write) {
  fs.writeFileSync(xmlPath, xml);
  console.log('Wrote sitemap.xml (' + pages.length + ' URLs).');
} else {
  console.log('Dry run OK. Pass --write to save sitemap.xml.');
}
