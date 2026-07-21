const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pageRegistry = require(path.join(root, 'data', 'redesigned-pages.json'));
const pages = pageRegistry.map(function (entry) {
  return entry.path;
});
const guidePages = [
  'pages/guide.html',
  'pages/guide-documents.html',
  'pages/tax-benefits.html',
  'pages/concessions.html',
  'pages/home-loan-insurance.html',
  'pages/property-home-insurance.html',
  'pages/credit-life-insurance.html',
  'pages/home-loan-complaints.html'
];
const officialUrls = [
  'https://www.rbi.org.in/',
  'https://www.nhb.org.in/',
  'https://irdai.gov.in/',
  'https://consumerhelpline.gov.in/',
  'https://www.incometax.gov.in/iec/foportal/'
];
const requiredFooterText = [
  'Shroffin is not a bank, Non-Banking Financial Company (NBFC), or lender.',
  'Information on this website — including rates, fees, charges, eligibility criteria',
  'Displaying, listing, ranking, or describing a bank or loan product does not guarantee',
  'Any loan you take is governed by the agreement between you and the lender.',
  'Features, banks, products, and services shown on this website are subject to change.'
];
const legacyRoutes = [
  'education-loan.html',
  'compare.html',
  'quick-overview.html',
  'schemes.html',
  'faq.html',
  'document-checklist.html'
];

const failures = [];

function fail(file, message) {
  failures.push(file + ': ' + message);
}

for (const file of pages) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const activeSource = source.replace(/<!--[\s\S]*?-->/g, '');

  if (!/name="viewport"[^>]+viewport-fit=cover/.test(activeSource)) {
    fail(file, 'missing viewport-fit=cover');
  }
  if (!/document\.documentElement\.classList\.add\(['"]js['"]\)/.test(activeSource)) {
    fail(file, 'missing early progressive-enhancement marker');
  }
  if (!/shroffin-shell\.css/.test(activeSource)) {
    fail(file, 'missing shared shell stylesheet');
  }
  if (!/shroffin-nav\.js/.test(activeSource)) {
    fail(file, 'missing shared navigation controller');
  }
  if (!/<nav class="globalnav"[^>]+aria-label="Global"/.test(activeSource)) {
    fail(file, 'missing canonical global navigation');
  }
  if (!/<footer class="site-footer"[^>]+aria-label="Shroffin Footer"/.test(activeSource)) {
    fail(file, 'missing canonical footer landmark');
  }
  if ((source.match(/SHROFFIN_FOOTER_START/g) || []).length !== 1) {
    fail(file, 'missing canonical footer start marker');
  }
  if ((source.match(/SHROFFIN_FOOTER_END/g) || []).length !== 1) {
    fail(file, 'missing canonical footer end marker');
  }
  if ((activeSource.match(/class="site-footer-directory"/g) || []).length !== 1) {
    fail(file, 'footer must contain one link directory');
  }
  if ((activeSource.match(/class="site-footer-heading"/g) || []).length !== 5) {
    fail(file, 'footer must contain five named directory groups');
  }
  if ((activeSource.match(/class="site-footer-legal-links"/g) || []).length !== 1) {
    fail(file, 'legal and official links must share one bottom list');
  }
  if ((activeSource.match(/class="site-footer-bottom-row"/g) || []).length !== 1) {
    fail(file, 'copyright and legal links must share one bottom row');
  }
  var legalList = activeSource.match(/class="site-footer-legal-links"[\s\S]*?<\/ul>/);
  if (!legalList || (legalList[0].match(/<li>/g) || []).length !== 7) {
    fail(file, 'bottom legal list must contain Privacy Policy, Site Map, and five official resources');
  }
  if (activeSource.includes('Regulators and official resources')) {
    fail(file, 'footer must not show an official-resources heading');
  }
  if (/class="site-footer-rule"/.test(activeSource)) {
    fail(file, 'footer must not contain internal separator rules');
  }
  if ((activeSource.match(/class="site-footer-disclaimer"/g) || []).length !== 1) {
    fail(file, 'footer must contain one expanded disclaimer');
  }
  if (activeSource.includes('An Independent and transparent banking.')) {
    fail(file, 'footer must not show the removed brand tagline');
  }
  if (/class="site-footer-logo"/.test(activeSource)) {
    fail(file, 'footer must not show the brand logo');
  }
  const connectGroup = activeSource.match(
    /aria-labelledby="footer-connect-title"[\s\S]*?<\/nav>/
  );
  if (
    !connectGroup ||
    !/>Connect</.test(connectGroup[0]) ||
    !/<a class="guide-section-link" href="https:\/\/www\.linkedin\.com\/company\/shroffin" target="_blank" rel="noopener noreferrer">LinkedIn/.test(
      connectGroup[0]
    )
  ) {
    fail(file, 'Connect group must contain the LinkedIn link');
  }
  if (!activeSource.includes('href="/sitemap.html"')) {
    fail(file, 'missing bottom Site Map link');
  }
  const companyGroup = activeSource.match(
    /aria-labelledby="footer-company-title"[\s\S]*?<\/nav>/
  );
  if (!companyGroup || companyGroup[0].includes('Site Map')) {
    fail(file, 'Company group must not contain Site Map');
  }
  officialUrls.forEach(function (url) {
    const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const linkPattern = new RegExp(
      '<a class="guide-section-link" href="' +
        escaped +
        '" target="_blank" rel="noopener noreferrer">'
    );
    if (!linkPattern.test(activeSource)) {
      fail(file, 'missing safe official resource link: ' + url);
    }
  });
  requiredFooterText.forEach(function (text) {
    if (!activeSource.includes(text)) fail(file, 'missing footer text: ' + text);
  });

  const activeHrefs = Array.from(activeSource.matchAll(/href="([^"]+)"/g)).map(function (
    match
  ) {
    return match[1].split(/[?#]/)[0];
  });
  activeHrefs.forEach(function (href) {
    if (legacyRoutes.some(function (route) { return href.endsWith(route); })) {
      fail(file, 'exposes preserved education route: ' + href);
    }
  });
}

for (const file of guidePages) {
  const source = fs.readFileSync(path.join(root, file), 'utf8').replace(
    /<!--[\s\S]*?-->/g,
    ''
  );
  if (!/shroffin-guide\.css/.test(source)) fail(file, 'missing shared Guide styles');
  if (!/shroffin-guide\.js/.test(source)) fail(file, 'missing shared Guide controller');
  if (!/<nav class="[^"]*\blocalnav\b[^"]*"[^>]+aria-label="Guide"/.test(source)) {
    fail(file, 'missing Guide local navigation');
  }
  if ((source.match(/class="localnav-link"/g) || []).length !== 6) {
    fail(file, 'Guide local navigation must contain six destinations');
  }
}

const shellCss = fs.readFileSync(path.join(root, 'css', 'shroffin-shell.css'), 'utf8');
if ((shellCss.match(/\.site-footer\s*\{[\s\S]*?border-block-start:\s*1px/g) || []).length !== 1) {
  fail('css/shroffin-shell.css', 'footer must have exactly one top hairline');
}
if (/\.site-footer-rule\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'obsolete internal footer rule style remains');
}
if (!/\.site-footer-legal-links a\.guide-section-link \.guide-section-link-arrow\s*\{[\s\S]*?opacity:\s*0/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'official resource arrows must be hidden by default');
}
if (!/\.site-footer-list a\s*\{[\s\S]*?font-weight:\s*400/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer sublinks must use Apple footer weight');
}
if (!/\.site-footer-legal-links a\s*\{[\s\S]*?text-decoration:\s*none/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'bottom legal links must not be underlined by default');
}
if (!/\.site-footer-legal-links li:not\(:first-child\)::before\s*\{[\s\S]*?background:\s*var\(--shroffin-rule\)/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'bottom legal links must be separated by Apple-style dividers');
}
if (!/\.site-footer-accordion \.site-footer-panel\s*\{[\s\S]*?grid-template-rows:\s*0fr/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer must collapse into accordion panels on small screens');
}
if (!/\.site-footer-accordion \.site-footer-group\.is-open \.site-footer-panel\s*\{[\s\S]*?grid-template-rows:\s*1fr/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'open accordion panels must expand on small screens');
}

const navJs = fs.readFileSync(path.join(root, 'js', 'shroffin-nav.js'), 'utf8');
if (!/initFooterAccordion/.test(navJs)) {
  fail('js/shroffin-nav.js', 'footer accordion controller must be wired into the shared nav script');
}

const sitemapHtml = fs.readFileSync(path.join(root, 'sitemap.html'), 'utf8');
pageRegistry
  .filter(function (entry) {
    return entry.path !== 'sitemap.html';
  })
  .forEach(function (entry) {
    if (!sitemapHtml.includes('href="' + entry.url + '"')) {
      fail('sitemap.html', 'missing registered page: ' + entry.url);
    }
  });
legacyRoutes.forEach(function (route) {
  if (sitemapHtml.includes(route)) {
    fail('sitemap.html', 'exposes preserved education route: ' + route);
  }
});

const sitemapXml = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapLocations = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
  function (match) {
    return match[1];
  }
);
const expectedLocations = pageRegistry.map(function (entry) {
  return 'https://shroffin.com' + entry.url;
});
if (JSON.stringify(sitemapLocations) !== JSON.stringify(expectedLocations)) {
  fail('sitemap.xml', 'URLs must exactly match the redesigned page registry');
}
legacyRoutes.forEach(function (route) {
  if (sitemapXml.includes(route)) {
    fail('sitemap.xml', 'exposes preserved education route: ' + route);
  }
});

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://shroffin.com/sitemap.xml')) {
  fail('robots.txt', 'missing canonical sitemap declaration');
}

if (failures.length) {
  console.error('Responsive contract check failed:\n- ' + failures.join('\n- '));
  process.exit(1);
}

console.log('Responsive contracts verified across ' + pages.length + ' redesigned pages.');
