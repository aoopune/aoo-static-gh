const fs = require('fs');
const path = require('path');
const { GUIDE_PAGES, applyGuideLocalnav } = require('./lib/site-chrome');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');

const changed = [];

GUIDE_PAGES.forEach(function (file) {
  const absolutePath = path.join(root, file);
  if (!fs.existsSync(absolutePath)) {
    throw new Error('Guide page is missing: ' + file);
  }

  const source = fs.readFileSync(absolutePath, 'utf8');
  if (
    !source.includes('<!-- SHROFFIN_GUIDE_LOCALNAV_START -->') &&
    !/<nav class="localnav"/.test(source)
  ) {
    throw new Error('Canonical Guide localnav target not found in: ' + file);
  }

  const next = applyGuideLocalnav(source, file);
  if (next !== source) {
    changed.push(file);
    if (!checkOnly) fs.writeFileSync(absolutePath, next);
  }
});

if (checkOnly && changed.length) {
  console.error(
    'Guide localnav sync check failed. Run npm run build:guide-localnav for:\n- ' +
      changed.join('\n- ')
  );
  process.exit(1);
}

if (checkOnly) {
  console.log(
    'Canonical Guide localnav is synchronized across ' + GUIDE_PAGES.size + ' pages.'
  );
} else {
  console.log(
    changed.length
      ? 'Synchronized Guide localnav across ' + changed.length + ' pages.'
      : 'Canonical Guide localnav was already synchronized.'
  );
}
