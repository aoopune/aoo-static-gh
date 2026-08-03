const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const etcLegal = path.resolve(root, '..', 'etc', 'docs', 'legal');
const destDir = path.join(root, 'content', 'legal');
const files = ['privacy-policy.md', 'terms-of-use.md'];

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const missingEtc = !fs.existsSync(etcLegal);
if (missingEtc) {
  for (const file of files) {
    const dest = path.join(destDir, file);
    const body = path.join(destDir, file.replace(/\.md$/, '.body.html'));
    if (!fs.existsSync(dest) && !fs.existsSync(body)) {
      console.error(
        'Missing content/legal artifacts and etc legal path not found: ' + file
      );
      process.exit(1);
    }
  }
  console.log('etc legal path absent; using committed content/legal artifacts.');
  process.exit(0);
}

const changed = [];
for (const file of files) {
  const src = path.join(etcLegal, file);
  const dest = path.join(destDir, file);
  if (!fs.existsSync(src)) throw new Error('Missing: ' + src);
  const next = fs.readFileSync(src, 'utf8');
  const prev = fs.existsSync(dest) ? fs.readFileSync(dest, 'utf8') : null;
  if (prev !== next) {
    changed.push(file);
    if (!checkOnly) fs.writeFileSync(dest, next);
  }
}

if (checkOnly && changed.length) {
  console.error(
    'Legal content out of sync with etc. Run npm run sync:legal-content:\n- ' +
      changed.join('\n- ')
  );
  process.exit(1);
}

console.log(
  checkOnly
    ? 'Legal content matches etc (' + files.length + ' files).'
    : changed.length
      ? 'Synced legal content: ' + changed.join(', ')
      : 'Legal content already synced.'
);
