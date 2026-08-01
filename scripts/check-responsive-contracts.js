const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pageRegistry = require(path.join(root, 'data', 'redesigned-pages.json'));
const globalNav = require(path.join(root, 'data', 'global-nav.json'));
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

function extractVisibleH1(activeSource) {
  const match = activeSource.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) return '';
  return match[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractPrimaryNavLabels(activeSource) {
  const listMatch = activeSource.match(
    /<ul class="globalnav-list">([\s\S]*?)<\/ul>/
  );
  if (!listMatch) return [];
  return Array.from(
    listMatch[1].matchAll(
      /<(?:a|button)\b[^>]*class="[^"]*(?:globalnav-link|globalnav-flyout-trigger)[^"]*"[^>]*>([\s\S]*?)<\/(?:a|button)>/g
    )
  )
    .map(function (match) {
      return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    })
    .filter(function (label) {
      return label && label !== 'Shroffin';
    });
}

for (const entry of pageRegistry) {
  const file = entry.path;
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  const activeSource = source.replace(/<!--[\s\S]*?-->/g, '');

  if (!entry.heading) {
    fail(file, 'registry entry missing heading');
  } else {
    const h1 = extractVisibleH1(activeSource);
    if (!h1) {
      fail(file, 'missing visible h1');
    } else if (!h1.toLowerCase().includes(String(entry.heading).toLowerCase())) {
      fail(
        file,
        'h1 "' + h1 + '" does not include registry heading "' + entry.heading + '"'
      );
    }
  }

  const navLabels = extractPrimaryNavLabels(activeSource);
  if (JSON.stringify(navLabels) !== JSON.stringify(globalNav.primaryLabels)) {
    fail(
      file,
      'global nav labels must be ' +
        globalNav.primaryLabels.join(' → ') +
        ' (found ' +
        (navLabels.join(' → ') || 'none') +
        ')'
    );
  }
  globalNav.flyoutIds.forEach(function (id) {
    if (!activeSource.includes('id="' + id + '"')) {
      fail(file, 'missing flyout #' + id);
    }
  });

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
  if (!/<aside class="site-help-strip"[^>]+aria-label="Get help"/.test(activeSource)) {
    fail(file, 'missing pre-footer help strip');
  }
  if (!/Need some help\?/.test(activeSource)) {
    fail(file, 'help strip must include Need some help?');
  }
  if (
    !/class="site-help-strip-phone"[^>]+href="tel:\+919112334367"/.test(activeSource) &&
    !/href="tel:\+919112334367"[^>]*class="site-help-strip-phone"/.test(activeSource)
  ) {
    fail(file, 'help strip must include the support phone link');
  }
  if ((source.match(/SHROFFIN_FOOTER_START/g) || []).length !== 1) {
    fail(file, 'missing canonical footer start marker');
  }
  if ((source.match(/SHROFFIN_FOOTER_END/g) || []).length !== 1) {
    fail(file, 'missing canonical footer end marker');
  }
  if ((source.match(/SHROFFIN_NAV_START/g) || []).length !== 1) {
    fail(file, 'missing canonical nav start marker');
  }
  if ((source.match(/SHROFFIN_NAV_END/g) || []).length !== 1) {
    fail(file, 'missing canonical nav end marker');
  }
  if (!/href="\/pages\/guide\.html"/.test(activeSource)) {
    fail(file, 'global nav must use root-absolute Guide links');
  }
  if (!/>Tools</.test(activeSource) || /Utilities/.test(activeSource)) {
    fail(file, 'global nav Tools label must match the shared partial');
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
  if (!legalList || (legalList[0].match(/<li>/g) || []).length !== 8) {
    fail(file, 'bottom legal list must contain Privacy Policy, Terms of Use, Site Map, and five official resources');
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
if (
  (shellCss.match(
    /\.site-help-strip\s*\{[\s\S]*?border-block-start:\s*1px solid var\(--shroffin-rule\)/g
  ) || []).length !== 1
) {
  fail('css/shroffin-shell.css', 'help strip must have a top hairline');
}
if (
  (shellCss.match(
    /\.site-help-strip\s*\{[\s\S]*?border-block-end:\s*1px solid var\(--shroffin-rule\)/g
  ) || []).length !== 1
) {
  fail('css/shroffin-shell.css', 'help strip must have a bottom hairline');
}
if (!/\.site-help-strip\s*\{[\s\S]*?margin-block-end:\s*clamp\(/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'help strip must sit in the air above the footer');
}
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
if (!/\.site-footer-legal-links li:not\(:last-child\)::after\s*\{[\s\S]*?background:\s*var\(--shroffin-rule\)/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'wide legal strip must use trailing Apple-style dividers');
}
if (!/@container footer-legal \(min-width:/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'legal strip must use progressive container queries');
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
globalNav.compactRootLabels.forEach(function (label) {
  const compactPattern = new RegExp(
    'buildCompactRootItem\\("' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"'
  );
  const aboutPattern = label === 'About' && /appendCompactLink\([\s\S]*?"About"/;
  if (!compactPattern.test(navJs) && !(aboutPattern && aboutPattern.test(navJs))) {
    fail(
      'js/shroffin-nav.js',
      'compact menu must include root item "' + label + '"'
    );
  }
});

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
