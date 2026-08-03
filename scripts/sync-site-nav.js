const fs = require('fs');
const path = require('path');
const { applyNav } = require('./lib/site-chrome');

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
  if (
    !source.includes('<!-- SHROFFIN_NAV_START -->') &&
    !/<div class="globalnav-veil"/.test(source)
  ) {
    throw new Error('Canonical nav target not found in: ' + entry.path);
  }

  const next = applyNav(source, entry.path);
  if (next !== source) {
    changed.push(entry.path);
    if (!checkOnly) fs.writeFileSync(absolutePath, next);
  }
});

if (checkOnly && changed.length) {
  console.error(
    'Nav sync check failed. Run npm run build:nav for:\n- ' +
      changed.join('\n- ')
  );
  process.exit(1);
}

if (checkOnly) {
  console.log('Canonical nav is synchronized across ' + pages.length + ' pages.');
} else {
  console.log(
    changed.length
      ? 'Synchronized nav across ' + changed.length + ' pages.'
      : 'Canonical nav was already synchronized.'
  );
}
