const fs = require('fs');
const path = require('path');
const { applyThemeBoot } = require('./lib/site-chrome');

const root = path.resolve(__dirname, '..');
const pagesPath = path.join(root, 'data', 'redesigned-pages.json');
const checkOnly = process.argv.includes('--check');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

const changed = [];

pages.forEach(function (entry) {
  const absolutePath = path.join(root, entry.path);
  if (!fs.existsSync(absolutePath)) {
    throw new Error('Registered redesigned page is missing: ' + entry.path);
  }

  const source = fs.readFileSync(absolutePath, 'utf8');
  if (!source.includes('<!-- SHROFFIN_THEME_BOOT_START -->')) {
    throw new Error('Canonical theme-boot markers not found in: ' + entry.path);
  }

  const next = applyThemeBoot(source);
  if (next !== source) {
    changed.push(entry.path);
    if (!checkOnly) fs.writeFileSync(absolutePath, next);
  }
});

if (checkOnly && changed.length) {
  console.error(
    'Theme-boot sync check failed. Run npm run build:theme-boot for:\n- ' +
      changed.join('\n- ')
  );
  process.exit(1);
}

if (checkOnly) {
  console.log(
    'Canonical theme-boot is synchronized across ' + pages.length + ' pages.'
  );
} else {
  console.log(
    changed.length
      ? 'Synchronized theme-boot across ' + changed.length + ' pages.'
      : 'Canonical theme-boot was already synchronized.'
  );
}
