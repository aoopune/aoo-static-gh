const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const navTemplatePath = path.join(root, 'partials', 'global-nav.html');
const pagesPath = path.join(root, 'data', 'redesigned-pages.json');
const checkOnly = process.argv.includes('--check');

const navTemplate = fs.readFileSync(navTemplatePath, 'utf8').trim();
const redesignedPages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));
const pages = redesignedPages;
const startMarker = '<!-- SHROFFIN_NAV_START -->';
const endMarker = '<!-- SHROFFIN_NAV_END -->';

const GUIDE_PAGES = new Set([
  'pages/guide.html',
  'pages/guide-documents.html',
  'pages/tax-benefits.html',
  'pages/concessions.html',
  'pages/home-loan-insurance.html',
  'pages/property-home-insurance.html',
  'pages/credit-life-insurance.html',
  'pages/home-loan-complaints.html'
]);

const INSURANCE_PAGES = new Set([
  'pages/home-loan-insurance.html',
  'pages/property-home-insurance.html',
  'pages/credit-life-insurance.html'
]);

function currentAttr(active) {
  return active ? ' aria-current="page"' : '';
}

function renderNav(file) {
  const slots = {
    GUIDE_CURRENT: GUIDE_PAGES.has(file),
    GUIDE_OVERVIEW_CURRENT: file === 'pages/guide.html',
    GUIDE_DOCUMENTS_CURRENT: file === 'pages/guide-documents.html',
    GUIDE_TAX_CURRENT: file === 'pages/tax-benefits.html',
    GUIDE_CONCESSIONS_CURRENT: file === 'pages/concessions.html',
    GUIDE_INSURANCE_CURRENT: INSURANCE_PAGES.has(file),
    GUIDE_COMPLAINTS_CURRENT: file === 'pages/home-loan-complaints.html',
    ABOUT_CURRENT: file === 'pages/about.html',
    TOOLS_CALCULATORS_CURRENT: file === 'pages/calculators.html',
    TOOLS_PROJECT_CURRENT: file === 'pages/project-approvals.html'
  };

  let html = navTemplate;
  Object.keys(slots).forEach(function (key) {
    html = html.replaceAll('{{' + key + '}}', currentAttr(slots[key]));
  });

  return html
    .split('\n')
    .map(function (line) {
      return line ? '  ' + line : '';
    })
    .join('\n');
}

function navPattern(source) {
  if (source.includes(startMarker) && source.includes(endMarker)) {
    return /[ \t]*<!-- SHROFFIN_NAV_START -->[\s\S]*?<!-- SHROFFIN_NAV_END -->/;
  }
  // First sync: veil + globalnav block (before markers exist).
  return /[ \t]*<div class="globalnav-veil"[\s\S]*?<\/nav>/;
}

const changed = [];

pages.forEach(function (entry) {
  const absolutePath = path.join(root, entry.path);
  if (!fs.existsSync(absolutePath)) {
    throw new Error('Registered redesigned page is missing: ' + entry.path);
  }

  const source = fs.readFileSync(absolutePath, 'utf8');
  const pattern = navPattern(source);
  if (!pattern.test(source)) {
    throw new Error('Canonical nav target not found in: ' + entry.path);
  }

  const next = source.replace(pattern, renderNav(entry.path));
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
