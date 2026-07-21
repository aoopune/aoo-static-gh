const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const footerTemplatePath = path.join(root, 'partials', 'site-footer.html');
const pagesPath = path.join(root, 'data', 'redesigned-pages.json');
const checkOnly = process.argv.includes('--check');

const footerTemplate = fs.readFileSync(footerTemplatePath, 'utf8').trim();
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));
const startMarker = '<!-- SHROFFIN_FOOTER_START -->';
const endMarker = '<!-- SHROFFIN_FOOTER_END -->';

function renderFooter(file) {
  const privacyCurrent =
    file === 'privacy-policy.html' ? ' aria-current="page"' : '';
  const sitemapCurrent = file === 'sitemap.html' ? ' aria-current="page"' : '';

  return footerTemplate
    .replaceAll('{{PRIVACY_CURRENT}}', privacyCurrent)
    .replaceAll('{{SITEMAP_CURRENT}}', sitemapCurrent)
    .split('\n')
    .map(function (line) {
      return line ? '  ' + line : '';
    })
    .join('\n');
}

function footerPattern(source) {
  if (source.includes(startMarker) && source.includes(endMarker)) {
    return /[ \t]*<!-- SHROFFIN_FOOTER_START -->[\s\S]*?<!-- SHROFFIN_FOOTER_END -->/;
  }
  return /[ \t]*<footer class="site-footer"[\s\S]*?<\/footer>/;
}

const changed = [];

pages.forEach(function (entry) {
  const absolutePath = path.join(root, entry.path);
  if (!fs.existsSync(absolutePath)) {
    throw new Error('Registered redesigned page is missing: ' + entry.path);
  }

  const source = fs.readFileSync(absolutePath, 'utf8');
  const pattern = footerPattern(source);
  if (!pattern.test(source)) {
    throw new Error('Canonical footer target not found in: ' + entry.path);
  }

  const next = source.replace(pattern, renderFooter(entry.path));
  if (next !== source) {
    changed.push(entry.path);
    if (!checkOnly) fs.writeFileSync(absolutePath, next);
  }
});

if (checkOnly && changed.length) {
  console.error(
    'Footer sync check failed. Run npm run build:footer for:\n- ' +
      changed.join('\n- ')
  );
  process.exit(1);
}

if (checkOnly) {
  console.log('Canonical footer is synchronized across ' + pages.length + ' pages.');
} else {
  console.log(
    changed.length
      ? 'Synchronized footer across ' + changed.length + ' pages.'
      : 'Canonical footer was already synchronized.'
  );
}
