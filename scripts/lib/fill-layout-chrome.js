/**
 * Fill empty SHROFFIN_NAV / FOOTER / THEME_BOOT markers inside layout
 * templates so a naive layout+body stitch can never ship pages without chrome.
 */
const fs = require('fs');
const path = require('path');
const { applySiteChrome } = require('./site-chrome');

const root = path.resolve(__dirname, '../..');
const pages = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'content-pages.json'), 'utf8')
);

let filled = 0;
pages.forEach(function (entry) {
  const layoutAbs = path.join(root, entry.layout);
  if (!fs.existsSync(layoutAbs)) return;
  const source = fs.readFileSync(layoutAbs, 'utf8');
  if (
    !source.includes('<!-- SHROFFIN_NAV_START -->') &&
    !source.includes('<!-- SHROFFIN_FOOTER_START -->') &&
    !source.includes('<!-- SHROFFIN_THEME_BOOT_START -->')
  ) {
    return;
  }
  const next = applySiteChrome(source, entry.output);
  if (next !== source) {
    fs.writeFileSync(layoutAbs, next);
    filled += 1;
    console.log('Filled chrome in ' + entry.layout);
  }
});

console.log(
  filled
    ? 'Filled chrome in ' + filled + ' layouts.'
    : 'All content layouts already had chrome.'
);
