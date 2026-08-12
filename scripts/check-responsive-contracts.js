const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pageRegistry = require(path.join(root, 'data', 'redesigned-pages.json'));
const globalNav = require(path.join(root, 'data', 'global-nav.json'));
const {
  SKIP_EXPLORE_BANKS_PREFOOTER_CTA,
  SKIP_SITE_HELP_STRIP,
  EXPLORE_BANKS_PREFOOTER_TITLE,
  EXPLORE_BANKS_PREFOOTER_LEAD
} = require(path.join(root, 'scripts', 'lib', 'site-chrome'));
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
  if (!/document\.documentElement\.classList\.add\(['"]js['"]/.test(activeSource)) {
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
  const hasHelpStrip = /<aside class="site-help-strip"[^>]+aria-label="Get help"/.test(
    activeSource
  );
  if (SKIP_SITE_HELP_STRIP.has(file)) {
    if (hasHelpStrip) {
      fail(file, 'pre-footer help strip must be omitted on this page');
    }
  } else {
    if (!hasHelpStrip) {
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
  }
  const hasPrefooterCta = /class="site-prefooter-cta"/.test(activeSource);
  if (SKIP_EXPLORE_BANKS_PREFOOTER_CTA.has(file)) {
    if (hasPrefooterCta) {
      fail(file, 'Explore banks prefooter CTA must be omitted on this page');
    }
  } else {
    if (!hasPrefooterCta) {
      fail(file, 'missing Explore banks prefooter CTA');
    }
    if (
      !new RegExp(
        'class="site-prefooter-cta-title"[^>]*>' +
          EXPLORE_BANKS_PREFOOTER_TITLE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).test(activeSource)
    ) {
      fail(
        file,
        'prefooter CTA must use title "' + EXPLORE_BANKS_PREFOOTER_TITLE + '"'
      );
    }
    if (
      !new RegExp(
        'class="site-prefooter-cta-lead">' +
          EXPLORE_BANKS_PREFOOTER_LEAD.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).test(activeSource)
    ) {
      fail(
        file,
        'prefooter CTA must use lead "' + EXPLORE_BANKS_PREFOOTER_LEAD + '"'
      );
    }
    if (
      !/class="site-prefooter-cta"[\s\S]*?href="\/pages\/explore-banks\.html"[\s\S]*?>Explore banks<\/a>[\s\S]*?class="site-help-strip"/.test(
        activeSource
      )
    ) {
      fail(
        file,
        'Explore banks prefooter CTA must sit immediately above the help strip'
      );
    }
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
  if (!/class="globalnav"/.test(source)) {
    fail(file, 'nav markers must contain the live globalnav (empty chrome shell)');
  }
  if (!/class="site-footer"/.test(source)) {
    fail(file, 'footer markers must contain the live site-footer (empty chrome shell)');
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
  if (/class="site-footer-legal-links"/.test(activeSource)) {
    fail(file, 'bottom must not contain a separate legal-links list (Privacy/Terms/Site Map live under Company)');
  }
  if ((activeSource.match(/class="site-footer-official-links"/g) || []).length !== 1) {
    fail(file, 'official resource links must sit on their own bottom list');
  }
  if ((activeSource.match(/class="site-footer-bottom-row"/g) || []).length !== 1) {
    fail(file, 'copyright and official links must share one bottom row');
  }
  var officialList = activeSource.match(/class="site-footer-official-links"[\s\S]*?<\/ul>/);
  if (!officialList || (officialList[0].match(/<li>/g) || []).length !== 5) {
    fail(file, 'official resource list must contain five regulator/government links');
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
  if (!/class="site-footer-meta"/.test(activeSource)) {
    fail(file, 'footer must keep disclaimer/legal clear of the logo column');
  }
  if (!/class="site-footer-meta-main"/.test(activeSource)) {
    fail(file, 'footer meta main rail missing');
  }
  if (
    !/<a class="site-footer-brand-link" href="\/" aria-label="Shroffin Home">/.test(
      activeSource
    )
  ) {
    fail(file, 'footer brand logo must link to the home page');
  }
  if (!/class="site-footer-logo"/.test(activeSource)) {
    fail(file, 'footer must show the brand logo');
  }
  if (!/src="\/images\/logos\/logo\.png"/.test(activeSource)) {
    fail(file, 'footer must use /images/logos/logo.png');
  }
  if (/class="site-footer-tagline"/.test(activeSource)) {
    fail(file, 'footer must not show a brand tagline');
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
  const companyGroup = activeSource.match(
    /aria-labelledby="footer-company-title"[\s\S]*?<\/nav>/
  );
  if (
    !companyGroup ||
    !companyGroup[0].includes('Privacy Policy') ||
    !companyGroup[0].includes('Terms of Use') ||
    !companyGroup[0].includes('Site Map') ||
    !companyGroup[0].includes('href="/sitemap.html"')
  ) {
    fail(file, 'Company group must contain Privacy Policy, Terms of Use, and Site Map');
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
if (!/\.site-prefooter-cta\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'missing .site-prefooter-cta styles');
}
if (!/\.site-prefooter-cta-inner\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'missing .site-prefooter-cta-inner styles');
}
if (!/\.site-prefooter-cta-title\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'missing .site-prefooter-cta-title styles');
}
if (!/\.site-prefooter-cta-lead\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'missing .site-prefooter-cta-lead styles');
}
if (!/\.site-prefooter-cta-action\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'missing .site-prefooter-cta-action styles');
}
if (!/\.site-prefooter-cta \+ \.site-help-strip\s*\{/.test(shellCss)) {
  fail(
    'css/shroffin-shell.css',
    'prefooter CTA must tighten help-strip top margin when present'
  );
}
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
if (
  !/\.site-help-strip \.guide-section-link,\s*\n\s*\.site-help-strip-phone\s*\{[\s\S]*?min-height:\s*var\(--shroffin-btn-touch\)/.test(
    shellCss
  )
) {
  fail(
    'css/shroffin-shell.css',
    'help strip Chat now / phone links must use --shroffin-btn-touch min-height'
  );
}
if (
  !/\.site-help-strip \.guide-section-link,\s*\n\s*\.site-help-strip-phone\s*\{[\s\S]*?min-width:\s*var\(--shroffin-btn-touch\)/.test(
    shellCss
  )
) {
  fail(
    'css/shroffin-shell.css',
    'help strip Chat now / phone links must use --shroffin-btn-touch min-width'
  );
}
if (!/\.site-footer-meta\s*\{[\s\S]*?grid-template-columns:\s*var\(--site-footer-brand-track\)/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer meta must share the logo/directory tracks');
}
if (!/\.site-footer-meta-main\s*\{[\s\S]*?grid-column:\s*2/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer disclaimer/legal must sit under the directory, not the logo');
}
if (!/\.site-footer-logo\s*\{[\s\S]*?aspect-ratio:\s*1/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer logo must use the square mark asset');
}
if (/\.site-footer-logo\s*\{[\s\S]*?filter:\s*brightness\(0\) invert\(1\)/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer logo.png must show as-is without invert');
}
if (!/\.site-footer-list li\s*\{[\s\S]*?margin-block-end:\s*0\.35rem/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer link list must keep readable vertical spacing');
}
if ((shellCss.match(/\.site-footer\s*\{[\s\S]*?border-block-start:\s*1px/g) || []).length !== 1) {
  fail('css/shroffin-shell.css', 'footer must have exactly one top hairline');
}
if (/\.site-footer-rule\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'obsolete internal footer rule style remains');
}
if (!/\.site-footer-official-links a\.guide-section-link \.guide-section-link-arrow\s*\{[\s\S]*?opacity:\s*0/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'official resource arrows must be hidden by default');
}
if (!/\.site-footer-list a\s*\{[\s\S]*?font-weight:\s*400/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'footer sublinks must use site footer weight');
}
if (!/\.site-footer-official-links a\s*\{[\s\S]*?text-decoration:\s*none/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'official resource links must not be underlined by default');
}
if (/\.site-footer-official-links li:not\(:last-child\)::after\s*\{/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'official resource strip must not use pipe dividers between links');
}
if (/\.site-footer-legal-links\s*[,{]/.test(shellCss)) {
  fail('css/shroffin-shell.css', 'obsolete bottom legal-links styles remain');
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

const editorialCss = fs.readFileSync(path.join(root, 'css', 'shroffin-editorial.css'), 'utf8');
if (!/--guide-index-strip-row:\s*var\(--shroffin-btn-touch/.test(editorialCss)) {
  fail(
    'css/shroffin-editorial.css',
    'phone chapter strip row must share --shroffin-btn-touch'
  );
}
if (
  !/--guide-index-on-photo:\s*var\(\s*--guide-chapter-strip-band/.test(editorialCss)
) {
  fail(
    'css/shroffin-editorial.css',
    'phone chapter strip pull must match sticky strip band height'
  );
}
if (/--guide-index-pull:/.test(editorialCss)) {
  fail(
    'css/shroffin-editorial.css',
    'phone chapter strip must not use extra --guide-index-pull beyond band height'
  );
}
if (
  !/--guide-first-section-peek:\s*calc\(\s*var\(--guide-open-pause\)\s*\+\s*\(\(var\(--shroffin-type-display\)\s*-\s*3px\)\s*\*\s*1\.1\)\s*\)/.test(
    editorialCss
  )
) {
  fail(
    'css/shroffin-editorial.css',
    'phone first look must reserve half first-section title from display question size + open-pause'
  );
}
if (
  !/--guide-hero-max:\s*calc\(\s*100dvh\s*-\s*var\(--guide-chrome-block\)\s*-\s*var\(--guide-first-section-peek\)\s*\)/.test(
    editorialCss
  )
) {
  fail(
    'css/shroffin-editorial.css',
    'phone hero max must leave room for first-section title peek'
  );
}
if (
  !/@media \(max-width: 833px\)[\s\S]*?\.guide-hero \+ \.mag-index\s*\{[\s\S]*?margin-block-start:\s*calc\(-1 \* var\(--guide-index-on-photo\)\)/.test(
    editorialCss
  )
) {
  fail(
    'css/shroffin-editorial.css',
    'phone chapter strip must pull onto the hero photo by exactly --guide-index-on-photo'
  );
}
if (
  (editorialCss.match(
    /margin-block-start:\s*calc\(-1 \* var\(--guide-index-on-photo\)\)/g
  ) || []).length !== 1
) {
  fail(
    'css/shroffin-editorial.css',
    'phone chapter strip photo pull must have exactly one owner'
  );
}
if (
  !/@media \(max-width: 833px\)[\s\S]*?body\.guide-reading \.mag-index-link\s*\{[\s\S]*?min-width:\s*var\(--guide-index-strip-row\)/.test(
    editorialCss
  )
) {
  fail(
    'css/shroffin-editorial.css',
    'phone chapter labels must enforce min-width touch floor'
  );
}
if (
  !/@media \(max-width: 1199px\)[\s\S]*?body\.guide-reading \.mag-index-link\s*\{[\s\S]*?min-width:\s*var\(--shroffin-btn-touch/.test(
    editorialCss
  )
) {
  fail(
    'css/shroffin-editorial.css',
    'horizontal chapter strip must enforce --shroffin-btn-touch min-width'
  );
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
const sitemapActive = sitemapHtml.replace(/<!--[\s\S]*?-->/g, '');
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
  if (sitemapActive.includes(route)) {
    fail('sitemap.html', 'exposes preserved education route: ' + route);
  }
});

const legacyAllow = new Set([
  'education-loan.html',
  'pages/compare.html',
  'pages/faq.html',
  'pages/schemes.html',
  'pages/quick-overview.html',
  'pages/document-checklist.html',
  'pages/government-schemes.html',
  'pages/pro-tips.html',
  'pages/questions.html',
  'pages/results.html',
  'table-embed.html',
  '404.html',
  'google5420f4c52d551b3e.html'
]);

pageRegistry.forEach(function (entry) {
  if (!fs.existsSync(path.join(root, entry.path))) {
    fail(entry.path, 'listed in redesigned-pages.json but file missing');
  }
});

function walkHtml(dir, acc) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (ent) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (
        ent.name === 'node_modules' ||
        ent.name === 'content' ||
        ent.name === 'prototypes' ||
        ent.name === 'templates' ||
        ent.name === '.git'
      ) {
        return;
      }
      walkHtml(p, acc);
    } else if (ent.name.endsWith('.html')) {
      acc.push(path.relative(root, p).replace(/\\/g, '/'));
    }
  });
}
const allHtml = [];
walkHtml(root, allHtml);
allHtml.forEach(function (rel) {
  if (legacyAllow.has(rel)) return;
  /* Draft / sample pages under pages/_… are local-only, not redesigned registry. */
  if (/\/_/.test(rel) || /^_/.test(path.basename(rel))) return;
  const src = fs.readFileSync(path.join(root, rel), 'utf8');
  if (!/shroffin-shell\.css/.test(src)) return;
  if (!pages.includes(rel)) {
    fail(rel, 'uses shroffin-shell.css but missing from redesigned-pages.json');
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
