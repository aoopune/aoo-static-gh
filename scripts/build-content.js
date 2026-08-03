const fs = require('fs');
const path = require('path');
const { normalizeHtml } = require('./lib/normalize-html');
const { applySiteChrome } = require('./lib/site-chrome');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const write = args.includes('--write');
const onlyArg = args.find(function (a) {
  return a.startsWith('--only=');
});
const only = onlyArg ? onlyArg.slice('--only='.length) : null;

const pages = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'content-pages.json'), 'utf8')
);

function mainOnly(s) {
  const m = s.match(/<main\b[\s\S]*?<\/main>/i);
  return m ? normalizeHtml(m[0]) : normalizeHtml(s);
}

function goldenPath(outRel) {
  return path.join(root, 'content', '_golden', outRel.replace(/[\\/]/g, '__') + '.html');
}

function stitch(layoutRel, bodyRel, outRel) {
  const layout = fs.readFileSync(path.join(root, layoutRel), 'utf8');
  const body = fs.readFileSync(path.join(root, bodyRel), 'utf8');
  if (!layout.includes('{{BODY_HTML}}')) {
    throw new Error(layoutRel + ' missing {{BODY_HTML}}');
  }
  /* Layouts keep empty chrome markers on purpose. Fill them here — never
     write a page that only has the markers. */
  return applySiteChrome(layout.replace('{{BODY_HTML}}', body), outRel);
}

function compareOrWrite(outRel, html) {
  const abs = path.join(root, outRel);
  const golden = goldenPath(outRel);
  if (!fs.existsSync(golden)) {
    console.error(
      'Missing golden for ' + outRel + '. Run: npm run snapshot:golden -- ' + outRel
    );
    process.exit(1);
  }
  if (mainOnly(html) !== mainOnly(fs.readFileSync(golden, 'utf8'))) {
    console.error('Golden mismatch (main): ' + outRel);
    process.exit(1);
  }
  console.log('Golden OK: ' + outRel);
  if (write && !checkOnly) {
    fs.writeFileSync(abs, html);
    console.log('Wrote ' + outRel);
  }
}

const selected = pages.filter(function (entry) {
  if (!only) return true;
  if (only === 'legal') return entry.id === 'legal';
  if (only === 'guide') return entry.id.indexOf('guide/') === 0;
  return entry.id === only || entry.output === only;
});

if (!selected.length) {
  console.error('No content pages matched --only=' + only);
  process.exit(1);
}

selected.forEach(function (entry) {
  if (!fs.existsSync(path.join(root, entry.layout))) {
    console.error('Missing layout: ' + entry.layout);
    process.exit(1);
  }
  if (!fs.existsSync(path.join(root, entry.body))) {
    console.error('Missing body: ' + entry.body);
    process.exit(1);
  }
  compareOrWrite(entry.output, stitch(entry.layout, entry.body, entry.output));
});

if (checkOnly) console.log('check:content passed (' + selected.length + ' pages).');
