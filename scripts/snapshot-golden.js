const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const goldenDir = path.join(root, 'content', '_golden');
const files = process.argv.slice(2).filter(function (a) {
  return !a.startsWith('-');
});

if (!files.length) {
  console.error('Usage: node scripts/snapshot-golden.js <file> [file...]');
  process.exit(1);
}
if (!fs.existsSync(goldenDir)) fs.mkdirSync(goldenDir, { recursive: true });

files.forEach(function (rel) {
  const src = path.join(root, rel);
  if (!fs.existsSync(src)) throw new Error('Missing page: ' + rel);
  const dest = path.join(goldenDir, rel.replace(/[\\/]/g, '__') + '.html');
  fs.writeFileSync(dest, fs.readFileSync(src, 'utf8'));
  console.log('Wrote golden: ' + path.relative(root, dest));
});
