const crypto = require('crypto');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
process.chdir(root);

const SKIP_DIRS = new Set([
  '.git',
  'node_modules',
  'playwright-report',
  'test-results',
  'prototypes'
]);

function shouldInclude(rel) {
  if (/\.(html|xml)$/.test(rel)) return true;
  if (rel.startsWith('content/legal/')) return true;
  if (rel.startsWith('content/guide/')) return true;
  if (rel.startsWith('content/pages/')) return true;
  if (rel.startsWith('templates/')) return true;
  if (rel.includes('sitemap')) return true;
  return false;
}

function walk(dir, acc) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (ent) {
    if (SKIP_DIRS.has(ent.name)) return;
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(abs, acc);
      return;
    }
    const rel = path.relative(root, abs).replace(/\\/g, '/');
    if (shouldInclude(rel)) acc.push(rel);
  });
}

function listSiteFiles() {
  const files = [];
  walk(root, files);
  files.sort();
  return files;
}

function fileDigest(rel) {
  return crypto
    .createHash('sha256')
    .update(fs.readFileSync(path.join(root, rel)))
    .digest('hex');
}

function snapshot() {
  const files = listSiteFiles();
  const digests = {};
  files.forEach(function (rel) {
    digests[rel] = fileDigest(rel);
  });
  const hash = crypto.createHash('sha256');
  files.forEach(function (rel) {
    hash.update(rel);
    hash.update('\0');
    hash.update(digests[rel]);
    hash.update('\0');
  });
  return { digest: hash.digest('hex'), files: files, digests: digests };
}

const before = snapshot();
execSync('npm run build:site', { stdio: 'inherit' });
const after = snapshot();

if (before.digest === after.digest) {
  console.log(
    'Built HTML matches sources (' + after.files.length + ' tracked site files).'
  );
  process.exit(0);
}

const changed = [];
const beforeSet = new Set(before.files);
const afterSet = new Set(after.files);

after.files.forEach(function (rel) {
  if (!beforeSet.has(rel)) {
    changed.push('A ' + rel);
    return;
  }
  if (before.digests[rel] !== after.digests[rel]) {
    changed.push('M ' + rel);
  }
});

before.files.forEach(function (rel) {
  if (!afterSet.has(rel)) changed.push('D ' + rel);
});

console.error(
  'Site HTML/XML does not match build:site output.\n' +
    'Run npm run build:site locally, commit the result, and push again.\n' +
    changed.join('\n')
);
process.exit(1);
