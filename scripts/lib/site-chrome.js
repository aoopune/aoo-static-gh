/**
 * Single source for filling SHROFFIN_NAV / FOOTER / GUIDE_LOCALNAV markers.
 * Used by sync scripts and by build-content stitch so pages are never written
 * with empty chrome shells.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');

const contacts = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'site-contacts.json'), 'utf8')
);

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

const SKIP_EXPLORE_BANKS_PREFOOTER_CTA = new Set([
  'pages/explore-banks.html',
  'pages/apply.html',
  'privacy-policy.html',
  'terms-of-use.html',
  'sitemap.html'
]);

const EXPLORE_BANKS_PREFOOTER_LEAD =
  'Every home loan bank sits side by side.';

function currentAttr(active) {
  return active ? ' aria-current="page"' : '';
}

function renderExploreBanksPrefooterCta(fileRel) {
  if (SKIP_EXPLORE_BANKS_PREFOOTER_CTA.has(fileRel)) return '';
  return [
    '<div class="site-prefooter-cta">',
    '  <p class="site-prefooter-cta-lead">' +
      EXPLORE_BANKS_PREFOOTER_LEAD +
      '</p>',
    '  <a class="home-hero-cta home-hero-cta-primary" href="/pages/explore-banks.html">Explore banks</a>',
    '</div>'
  ].join('\n');
}

function applyContacts(html) {
  return html
    .replaceAll('{{CONTACT_EMAIL}}', contacts.email)
    .replaceAll('{{CONTACT_PHONE_DISPLAY}}', contacts.phoneDisplay)
    .replaceAll('{{CONTACT_PHONE_DISPLAY_SHORT}}', contacts.phoneDisplayShort)
    .replaceAll('{{CONTACT_PHONE_TEL}}', contacts.phoneTel)
    .replaceAll('{{CONTACT_WHATSAPP_URL}}', contacts.whatsappUrl);
}

function indentBlock(html, spaces) {
  const pad = ' '.repeat(spaces);
  return html
    .split('\n')
    .map(function (line) {
      return line ? pad + line : '';
    })
    .join('\n');
}

function renderNav(fileRel) {
  let html = fs
    .readFileSync(path.join(root, 'partials', 'global-nav.html'), 'utf8')
    .trim();
  const slots = {
    GUIDE_CURRENT: GUIDE_PAGES.has(fileRel),
    GUIDE_OVERVIEW_CURRENT: fileRel === 'pages/guide.html',
    GUIDE_DOCUMENTS_CURRENT: fileRel === 'pages/guide-documents.html',
    GUIDE_TAX_CURRENT: fileRel === 'pages/tax-benefits.html',
    GUIDE_CONCESSIONS_CURRENT: fileRel === 'pages/concessions.html',
    GUIDE_INSURANCE_CURRENT: INSURANCE_PAGES.has(fileRel),
    GUIDE_COMPLAINTS_CURRENT: fileRel === 'pages/home-loan-complaints.html',
    ABOUT_CURRENT: fileRel === 'pages/about.html',
    TOOLS_CALCULATORS_CURRENT: fileRel === 'pages/calculators.html',
    TOOLS_PROJECT_CURRENT: fileRel === 'pages/project-approvals.html'
  };
  Object.keys(slots).forEach(function (key) {
    html = html.replaceAll('{{' + key + '}}', currentAttr(slots[key]));
  });
  return indentBlock(applyContacts(html), 2);
}

function renderFooter(fileRel) {
  let html = fs
    .readFileSync(path.join(root, 'partials', 'site-footer.html'), 'utf8')
    .trim();
  html = html.replaceAll(
    '{{EXPLORE_BANKS_PREFOOTER_CTA}}',
    renderExploreBanksPrefooterCta(fileRel)
  );
  html = html
    .replaceAll(
      '{{PRIVACY_CURRENT}}',
      fileRel === 'privacy-policy.html' ? ' aria-current="page"' : ''
    )
    .replaceAll(
      '{{TERMS_CURRENT}}',
      fileRel === 'terms-of-use.html' ? ' aria-current="page"' : ''
    )
    .replaceAll(
      '{{SITEMAP_CURRENT}}',
      fileRel === 'sitemap.html' ? ' aria-current="page"' : ''
    );
  return indentBlock(applyContacts(html), 2);
}

function renderGuideLocalnav(fileRel) {
  let html = fs
    .readFileSync(path.join(root, 'partials', 'guide-localnav.html'), 'utf8')
    .trim();
  const slots = {
    OVERVIEW_CURRENT: fileRel === 'pages/guide.html',
    DOCUMENTS_CURRENT: fileRel === 'pages/guide-documents.html',
    TAX_CURRENT: fileRel === 'pages/tax-benefits.html',
    CONCESSIONS_CURRENT: fileRel === 'pages/concessions.html',
    INSURANCE_CURRENT: INSURANCE_PAGES.has(fileRel),
    COMPLAINTS_CURRENT: fileRel === 'pages/home-loan-complaints.html'
  };
  Object.keys(slots).forEach(function (key) {
    html = html.replaceAll('{{' + key + '}}', currentAttr(slots[key]));
  });
  return indentBlock(html, 4);
}

function replaceMarked(source, startMarker, endMarker, replacement, fallbackRe) {
  if (source.includes(startMarker) && source.includes(endMarker)) {
    const pattern = new RegExp(
      '[ \\t]*' +
        startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
        '[\\s\\S]*?' +
        endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    if (!pattern.test(source)) {
      throw new Error('Chrome markers present but not replaceable');
    }
    return source.replace(pattern, replacement);
  }
  if (fallbackRe && fallbackRe.test(source)) {
    return source.replace(fallbackRe, replacement);
  }
  return source;
}

function applyNav(html, fileRel) {
  return replaceMarked(
    html,
    '<!-- SHROFFIN_NAV_START -->',
    '<!-- SHROFFIN_NAV_END -->',
    renderNav(fileRel),
    /[ \t]*<div class="globalnav-veil"[\s\S]*?<\/nav>/
  );
}

function applyFooter(html, fileRel) {
  return replaceMarked(
    html,
    '<!-- SHROFFIN_FOOTER_START -->',
    '<!-- SHROFFIN_FOOTER_END -->',
    renderFooter(fileRel),
    /[ \t]*<footer class="site-footer"[\s\S]*?<\/footer>/
  );
}

function applyGuideLocalnav(html, fileRel) {
  if (!GUIDE_PAGES.has(fileRel)) return html;
  return replaceMarked(
    html,
    '<!-- SHROFFIN_GUIDE_LOCALNAV_START -->',
    '<!-- SHROFFIN_GUIDE_LOCALNAV_END -->',
    renderGuideLocalnav(fileRel),
    /[ \t]*<nav class="localnav"[\s\S]*?<\/nav>/
  );
}

function assertChrome(html, fileRel) {
  if (
    html.includes('<!-- SHROFFIN_NAV_START -->') &&
    !/class="globalnav"/.test(html)
  ) {
    throw new Error(
      'Refusing incomplete page ' + fileRel + ': nav markers without globalnav'
    );
  }
  if (
    html.includes('<!-- SHROFFIN_FOOTER_START -->') &&
    !/class="site-footer"/.test(html)
  ) {
    throw new Error(
      'Refusing incomplete page ' + fileRel + ': footer markers without site-footer'
    );
  }
}

/** Fill every chrome slot present in html for this page path. */
function applySiteChrome(html, fileRel) {
  var next = html;
  next = applyNav(next, fileRel);
  next = applyFooter(next, fileRel);
  next = applyGuideLocalnav(next, fileRel);
  assertChrome(next, fileRel);
  return next;
}

module.exports = {
  GUIDE_PAGES,
  SKIP_EXPLORE_BANKS_PREFOOTER_CTA,
  EXPLORE_BANKS_PREFOOTER_LEAD,
  applyNav,
  applyFooter,
  applyGuideLocalnav,
  applySiteChrome,
  assertChrome,
  renderNav,
  renderFooter,
  renderGuideLocalnav,
  renderExploreBanksPrefooterCta
};
