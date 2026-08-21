const fs = require('fs');
const path = require('path');
const { applySiteChrome } = require('./lib/site-chrome');

const root = path.resolve(__dirname, '..');
const rel = process.argv[2];
const layoutOut = process.argv[3];
const bodyOut = process.argv[4];

if (!rel || !layoutOut || !bodyOut) {
  console.error(
    'Usage: node scripts/extract-page-shell.js <page.html> <layoutOut.html> <bodyOut.html>'
  );
  process.exit(1);
}

const html = fs.readFileSync(path.join(root, rel), 'utf8');
const mainMatch = html.match(/<main\b[\s\S]*?<\/main>/i);
if (!mainMatch) throw new Error('No <main> in ' + rel);

const main = mainMatch[0];
let layout =
  html.slice(0, mainMatch.index) +
  '{{BODY_HTML}}' +
  html.slice(mainMatch.index + main.length);

/*
 * Never leave empty SHROFFIN_NAV / FOOTER / THEME_BOOT shells in layouts.
 * Other tools stitch layout+body without a second chrome pass; empty
 * markers would ship pages with no main menu, footer, or theme-boot slot.
 */
layout = applySiteChrome(layout, rel.replace(/\\/g, '/'));

fs.mkdirSync(path.dirname(path.join(root, layoutOut)), { recursive: true });
fs.mkdirSync(path.dirname(path.join(root, bodyOut)), { recursive: true });
fs.writeFileSync(path.join(root, layoutOut), layout);
fs.writeFileSync(path.join(root, bodyOut), main);
console.log('Wrote', layoutOut, 'and', bodyOut);
