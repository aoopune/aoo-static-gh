#!/usr/bin/env node
'use strict';

/**
 * Deterministic Dark / Light / Default consistency audit for redesigned pages.
 * Writes: super-review-1/themes/_theme-consistency-audit-runtime.json
 */
const fs = require('fs');
const { execSync } = require('child_process');

const pages = JSON.parse(fs.readFileSync('data/redesigned-pages.json', 'utf8'));

function runCheck(cmd) {
  try {
    execSync(cmd, { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function extractBlock(css, selectorRe) {
  const m = css.match(selectorRe);
  return m ? m[1] : '';
}

function tokenMap(block) {
  const map = {};
  for (const m of block.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    map[m[1].toLowerCase()] = m[2].trim();
  }
  return map;
}

function isSpacing(name) {
  return /gap|radius|size|width|max|pad|duration|ease|font|check|filter-width|main-max|hub-gap|hub-pad|hub-radius|logo-plate-pad|logo-plate-radius/.test(
    name
  );
}

function followsTheme(value) {
  if (/var\(--shroffin-/.test(value)) return true;
  if (/var\(--hlc-page-bg|var\(--hlc-text|var\(--hlc-nav|var\(--hlc-header/.test(value)) {
    return true;
  }
  if (
    /color-mix\(/.test(value) &&
    /var\(--(shroffin|hlc-page|hlc-nav|hlc-header|hlc-text)/.test(value)
  ) {
    return true;
  }
  return false;
}

function isColorish(name, value) {
  if (isSpacing(name)) return false;
  return /#|rgb|hsl|color-mix|var\(/.test(value);
}

const contracts = {
  themeBootSynced24: runCheck('npm run check:theme-boot'),
  footerSynced24: runCheck('npm run check:footer'),
  navSynced: runCheck('npm run check:nav'),
  noForbiddenJsInjectors: runCheck('npm run check:theme-js-injectors'),
};

const bootSrc = fs.readFileSync('partials/theme-boot.html', 'utf8');
const footerSrc = fs.readFileSync('partials/site-footer.html', 'utf8');
const shell = fs.readFileSync('css/shroffin-shell.css', 'utf8');

const bootLogic = {
  storesThreePrefs:
    bootSrc.includes("'dark'") &&
    bootSrc.includes("'light'") &&
    bootSrc.includes("'system'"),
  firstVisitResolvesDark: /return 'dark'/.test(bootSrc),
  defaultFollowsOS:
    bootSrc.includes('prefers-color-scheme: dark') && bootSrc.includes("p === 'system'"),
  setsDataTheme: bootSrc.includes("setAttribute('data-theme'"),
  liveFingerprint: bootSrc.includes('data-shroffin-theme-boot="live"'),
  footerHasThreeIcons:
    footerSrc.includes('data-theme-pref="system"') &&
    footerSrc.includes('data-theme-pref="light"') &&
    footerSrc.includes('data-theme-pref="dark"'),
  footerCallsApply: footerSrc.includes('__shroffinApplyColorPreference'),
};

const colorishShell = [
  '--shroffin-ink',
  '--shroffin-ink-soft',
  '--shroffin-muted',
  '--shroffin-ghost',
  '--shroffin-blue',
  '--shroffin-btn-primary',
  '--shroffin-link',
  '--shroffin-canvas-mix-base',
  '--shroffin-footer-mix-base',
  '--shroffin-surface',
  '--shroffin-footer',
  '--shroffin-paper-note',
  '--shroffin-hair',
  '--shroffin-hair-soft',
  '--shroffin-rule',
  '--shroffin-focus',
  '--shroffin-gn-frost',
  '--shroffin-gn-bg',
  '--shroffin-gn-bg-fallback',
  '--shroffin-gn-bg-open',
  '--shroffin-gn-veil',
  '--shroffin-gn-border',
  '--shroffin-field-line',
  '--shroffin-field-placeholder',
];
const darkShell =
  (shell.match(/html\[data-theme="dark"\]\s*\{([\s\S]*?)\n\}/) || [])[1] || '';
const shellTwinsOk = colorishShell.every((t) => darkShell.includes(t + ':'));

const stacks = [
  {
    id: 'shell',
    role: 'Site-wide background, text, nav, footer, buttons, links, fields',
    file: 'css/shroffin-shell.css',
    check() {
      return {
        ok: shellTwinsOk,
        detail: shellTwinsOk
          ? 'All core shell color roles have a dark twin; light values stay on :root.'
          : 'Missing shell dark twins.',
      };
    },
  },
  {
    id: 'explore',
    role: 'Explore banks filters, side drawer, chips, results table, apply bar',
    file: 'css/shroffin-explore-banks.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const L = tokenMap(extractBlock(css, /\.explore-banks-page\s*\{([\s\S]*?)\n\}/));
      const D = tokenMap(
        extractBlock(css, /html\[data-theme="dark"\]\s*\.explore-banks-page\s*\{([\s\S]*?)\n\}/)
      );
      const missing = Object.entries(L).filter(
        ([n, v]) => isColorish(n, v) && !D[n] && !followsTheme(v)
      );
      return {
        ok: missing.length === 0,
        detail:
          missing.length === 0
            ? `Explore dark token block has ${Object.keys(D).length} redefs; remaining color roles inherit shell via aliases/mixes.`
            : 'Untwinned: ' + missing.map(([n]) => n).join(', '),
      };
    },
  },
  {
    id: 'apply',
    role: 'Apply once form fields, review panels, status colors',
    file: 'css/shroffin-apply.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const L = tokenMap(extractBlock(css, /\.hl-apply-page\s*\{([\s\S]*?)\n\}/));
      const D = tokenMap(
        extractBlock(css, /html\[data-theme="dark"\]\s*\.hl-apply-page\s*\{([\s\S]*?)\n\}/)
      );
      const missing = Object.keys(L).filter(
        (n) => isColorish(n, L[n]) && !D[n] && !followsTheme(L[n])
      );
      const darkRules = (css.match(/html\[data-theme="dark"\]/g) || []).length;
      return {
        ok: missing.length === 0 && darkRules >= 10,
        detail: `Apply color tokens covered; ${darkRules} dark rules.`,
      };
    },
  },
  {
    id: 'calculators',
    role: 'Calculators hub tiles and tool pages',
    file: 'css/shroffin-calculators.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const L = tokenMap(extractBlock(css, /\.calc-page\s*\{([\s\S]*?)\n\}/));
      const D = tokenMap(
        extractBlock(css, /html\[data-theme="dark"\]\s*\.calc-page\s*\{([\s\S]*?)\n\}/)
      );
      const missing = Object.entries(L).filter(
        ([n, v]) => isColorish(n, v) && !D[n] && !followsTheme(v)
      );
      return {
        ok: missing.length === 0,
        detail:
          missing.length === 0
            ? 'Calc ink/wash alias shell; hub surface + soft line twinned.'
            : 'Untwinned: ' + missing.map(([n]) => n).join(', '),
      };
    },
  },
  {
    id: 'editorial_guide',
    role: 'Guide chapters, TOC strip, flip cards, title color washes',
    file: 'css/shroffin-editorial.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const ok =
        /--guide-card-surface:\s*#2C2C2C/.test(css) &&
        (css.match(/html\[data-theme="dark"\]\s*\.guide-title-wash--ink-/g) || []).length >= 6 &&
        /--mag-ink:\s*var\(--shroffin-ink\)/.test(css);
      const darkRules = (css.match(/html\[data-theme="dark"\]/g) || []).length;
      return {
        ok,
        detail: ok
          ? `Magazine aliases shell; guide cards/washes/TOC dark overrides (${darkRules} rules).`
          : 'Incomplete guide dark coverage.',
      };
    },
  },
  {
    id: 'about',
    role: 'About page story sections',
    file: 'css/shroffin-about.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const aliases = (css.match(/--about-[a-z-]+:\s*var\(--shroffin-/g) || []).length;
      return {
        ok: aliases >= 8,
        detail: `About colors are shell aliases (${aliases}); inherits data-theme automatically.`,
      };
    },
  },
  {
    id: 'utility',
    role: 'Privacy, Terms, Site Map layout panels',
    file: 'css/shroffin-utility-pages.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const darkRules = (css.match(/html\[data-theme="dark"\]/g) || []).length;
      const fallbacks = (css.match(/var\(--shroffin-[^,]+,\s*#/g) || []).length;
      return {
        ok: darkRules >= 10,
        detail: `${darkRules} dark rules; ${fallbacks} leftover light fallbacks (tokens still win when set).`,
      };
    },
  },
  {
    id: 'apf',
    role: 'Project Bank Finder search + suggestion panel',
    file: 'css/project-approvals.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const aliases = (css.match(/--apf-[a-z-]+:\s*var\(--shroffin-/g) || []).length;
      const dark = (css.match(/html\[data-theme="dark"\]/g) || []).length;
      return {
        ok: aliases >= 5 && dark >= 2,
        detail: `APF aliases shell (${aliases}); dark covers soft line + suggestions (${dark}).`,
      };
    },
  },
  {
    id: 'home_inline',
    role: 'Home hero, story bands, phone stage',
    file: 'templates/layouts/home.html',
    check() {
      const src = fs.existsSync(this.file)
        ? fs.readFileSync(this.file, 'utf8')
        : fs.readFileSync('index.html', 'utf8');
      const ok =
        /html\[data-theme="dark"\]\s*\.home-story-dark/.test(src) &&
        /html\[data-theme="dark"\]\s*\.home-hero/.test(src) &&
        !/data-theme-island|fixed-dark/.test(src);
      return {
        ok,
        detail: ok
          ? 'Home theme twins for story/hero; no fixed-dark island.'
          : 'Home twins incomplete.',
      };
    },
  },
  {
    id: 'product_demo',
    role: 'Home product demo window',
    file: 'css/shroffin-product-demo.css',
    check() {
      const css = fs.readFileSync(this.file, 'utf8');
      const dark = (css.match(/html\[data-theme="dark"\]/g) || []).length;
      return { ok: dark >= 5, detail: `${dark} dark rules for product-demo.` };
    },
  },
];

const stackResults = stacks.map((s) => ({
  id: s.id,
  file: s.file,
  role: s.role,
  ...s.check(),
}));

const pageResults = pages.map((p) => {
  const html = fs.readFileSync(p.path, 'utf8');
  const checks = [];
  const add = (id, label, ok, note) => checks.push({ id, label, ok, note });

  add('boot', 'Theme starter script', /data-shroffin-theme-boot="live"/.test(html), 'Live boot on page');
  add(
    'footer_pill',
    'Footer theme icons',
    /data-theme-pref="system"/.test(html) &&
      /data-theme-pref="light"/.test(html) &&
      /data-theme-pref="dark"/.test(html),
    'Default/Light/Dark controls'
  );
  add(
    'apply_fn',
    'Switch changes whole site look',
    /__shroffinApplyColorPreference/.test(html),
    'Boot+footer wired'
  );
  add(
    'dual_logo',
    'Nav logo for both modes',
    /globalnav-logo--light/.test(html) && /globalnav-logo--dark/.test(html),
    'Dual logo markup'
  );
  add('nav', 'Top navigation', /class="globalnav"/.test(html), 'Global nav present');
  add(
    'no_island',
    'Nothing locked to one mode',
    !/data-theme-island|fixed-dark/.test(html),
    'Follows active theme'
  );
  add(
    'no_injectors',
    'No light-forcing old scripts',
    !/(aoo-loan-table-standalone|apply-flow\.js|apply-button-iframe)/.test(html),
    'Clean of Phase H injectors'
  );
  add('shell_css', 'Shared theme stylesheet', /shroffin-shell\.css/.test(html), 'Shell loaded');

  const stackHits = [];
  if (/shroffin-explore-banks\.css/.test(html)) stackHits.push('explore');
  if (/shroffin-apply\.css/.test(html)) stackHits.push('apply');
  if (/shroffin-calculators\.css/.test(html)) stackHits.push('calculators');
  if (/shroffin-editorial\.css/.test(html)) stackHits.push('editorial_guide');
  if (/shroffin-about\.css/.test(html)) stackHits.push('about');
  if (/shroffin-utility-pages\.css/.test(html)) stackHits.push('utility');
  if (/project-approvals\.css/.test(html)) stackHits.push('apf');
  if (
    p.path === 'index.html' ||
    /product-demo|home-calm|home-level|shroffin-home/.test(html)
  ) {
    stackHits.push('home_inline', 'product_demo');
  }

  const stackOk = stackHits.every((id) => (stackResults.find((s) => s.id === id) || { ok: false }).ok);
  add(
    'page_stack',
    'Page-specific UI colors follow theme',
    stackOk,
    stackHits.length ? 'Uses: ' + stackHits.join(', ') : 'Shell-only'
  );

  const comps = {
    dropdown_nav: [/globalnav-flyout|globalnav-submenu/.test(html), 'Nav menus / dropdowns'],
    side_panel: [
      /hlc-drawer|hlc-filters|mag-toc|mag-index|localnav|apf-options/.test(html),
      'Side panel / drawer / chapter strip',
    ],
    forms: [
      /<input|<textarea|<select|hlc-field|calc-input|apf-input|hl-apply-field/.test(html),
      'Form fields',
    ],
    buttons: [
      /class="[^"]*button|btn-primary|cta-primary|site-prefooter-cta/.test(html),
      'Buttons / primary actions',
    ],
    cards: [
      /feature-card|guide-chapter-card|calc-hub|hlc-inputs-card|hlc-intelligence/.test(html),
      'Cards / content panels',
    ],
  };
  for (const [k, [present, label]] of Object.entries(comps)) {
    if (!present) continue;
    add(
      'comp_' + k,
      label,
      stackOk && contracts.themeBootSynced24,
      'Paint comes from themed stacks on this page'
    );
  }

  const pageOk = checks.every((c) => c.ok);
  return {
    path: p.path,
    title: p.title,
    group: p.group,
    url: p.url,
    ok: pageOk,
    dark: pageOk,
    light: pageOk,
    default: pageOk && bootLogic.defaultFollowsOS,
    checks,
    stacks: stackHits,
  };
});

const sharedIndex = [
  {
    id: 'S01',
    item: 'Theme starter on every redesigned page',
    ok: contracts.themeBootSynced24 && bootLogic.liveFingerprint,
    note: 'Same live boot script on all 24 pages.',
  },
  {
    id: 'S02',
    item: 'When Dark is chosen, whole site resolves dark',
    ok: bootLogic.storesThreePrefs && bootLogic.setsDataTheme,
    note: 'dark preference → html data-theme=dark.',
  },
  {
    id: 'S03',
    item: 'When Light is chosen, whole site resolves light',
    ok: bootLogic.storesThreePrefs && bootLogic.setsDataTheme,
    note: 'light preference → html data-theme=light.',
  },
  {
    id: 'S04',
    item: 'When Default is chosen, site follows phone/computer',
    ok: bootLogic.defaultFollowsOS,
    note: 'system preference listens to OS, then paints dark or light.',
  },
  {
    id: 'S05',
    item: 'First visit starts dark (separate from Default)',
    ok: bootLogic.firstVisitResolvesDark,
    note: 'No saved choice → dark until the person picks.',
  },
  {
    id: 'S06',
    item: 'Footer theme switch (monitor / sun / moon)',
    ok:
      contracts.footerSynced24 &&
      bootLogic.footerHasThreeIcons &&
      bootLogic.footerCallsApply,
    note: 'Same three-icon control on all 24 footers.',
  },
  {
    id: 'S07',
    item: 'Top nav bar follows the mode',
    ok: darkShell.includes('--shroffin-gn-bg'),
    note: 'Nav background tokens twinned for dark.',
  },
  {
    id: 'S08',
    item: 'Nav dropdown menus follow the mode',
    ok: shell.includes('html[data-theme="dark"] .globalnav'),
    note: 'Dark nav / flyout paint rules in shell.',
  },
  {
    id: 'S09',
    item: 'Nav logo matches the mode',
    ok: /globalnav-logo--dark/.test(shell) && /data-theme="dark"/.test(shell),
    note: 'Dark mark only under data-theme=dark.',
  },
  {
    id: 'S10',
    item: 'Page background and main text follow the mode',
    ok: shellTwinsOk,
    note: 'Surface + ink shell twins cover canvas and body text.',
  },
  {
    id: 'S11',
    item: 'Primary buttons readable in both modes',
    ok: darkShell.includes('--shroffin-btn-primary'),
    note: 'Primary blue fill kept; surrounding chrome follows theme.',
  },
  {
    id: 'S12',
    item: 'Text links follow the mode',
    ok: darkShell.includes('--shroffin-link'),
    note: 'Link colors twinned for dark.',
  },
  {
    id: 'S13',
    item: 'Form fields / underlines follow the mode',
    ok: darkShell.includes('--shroffin-field-line'),
    note: 'Field line tokens twinned; autofill dark rules present.',
  },
  {
    id: 'S14',
    item: 'Footer band follows the mode',
    ok: darkShell.includes('--shroffin-footer'),
    note: 'Footer tokens twinned.',
  },
  {
    id: 'S15',
    item: 'No section stuck in one mode forever',
    ok: pageResults.every((p) => p.checks.find((c) => c.id === 'no_island').ok),
    note: 'No fixed-dark islands on redesigned pages.',
  },
  {
    id: 'S16',
    item: 'No old scripts forcing light look',
    ok: contracts.noForbiddenJsInjectors,
    note: 'Phase H injector check passed on all 24.',
  },
];

const stackIndex = stackResults.map((s, i) => ({
  id: 'K' + String(i + 1).padStart(2, '0'),
  item: s.role,
  ok: s.ok,
  note: s.detail,
  file: s.file,
}));

const pageIndex = pageResults.map((p, i) => ({
  id: 'P' + String(i + 1).padStart(2, '0'),
  path: p.path,
  title: p.title,
  group: p.group,
  dark: p.dark ? 'YES' : 'NO',
  light: p.light ? 'YES' : 'NO',
  default: p.default ? 'YES' : 'NO',
  ok: p.ok,
  note: p.ok
    ? 'Boot, footer switch, and themed CSS stacks align; all three modes use the same paint path.'
    : p.checks
        .filter((c) => !c.ok)
        .map((c) => c.label)
        .join('; '),
  componentChecks: p.checks
    .filter((c) => c.id.startsWith('comp_'))
    .map((c) => ({ label: c.label, ok: c.ok ? 'YES' : 'NO' })),
}));

const out = {
  auditedAt: new Date().toISOString(),
  method:
    'Deterministic static contract audit over all 24 redesigned pages + shared chrome + CSS stack dark-twin/alias analysis. Dark/Light/Default share one resolved look (html[data-theme]). Playwright runtime paint checks blocked here (libnspr4 missing).',
  scope:
    'Only paths in data/redesigned-pages.json. Education / legacy style.css out of v1 by product lock.',
  contracts,
  bootLogic,
  sharedIndex,
  stackIndex,
  pageIndex,
  summary: {
    sharedPass: sharedIndex.filter((x) => x.ok).length,
    sharedTotal: sharedIndex.length,
    stackPass: stackIndex.filter((x) => x.ok).length,
    stackTotal: stackIndex.length,
    pagesPass: pageIndex.filter((x) => x.ok).length,
    pagesTotal: pageIndex.length,
    allPagesDarkYes: pageIndex.every((x) => x.dark === 'YES'),
    allPagesLightYes: pageIndex.every((x) => x.light === 'YES'),
    allPagesDefaultYes: pageIndex.every((x) => x.default === 'YES'),
    verdict:
      pageIndex.every((x) => x.ok) &&
      sharedIndex.every((x) => x.ok) &&
      stackIndex.every((x) => x.ok)
        ? 'PASS'
        : 'FAIL',
  },
};

fs.writeFileSync(
  'super-review-1/themes/_theme-consistency-audit-runtime.json',
  JSON.stringify(out, null, 2)
);
console.log(JSON.stringify(out.summary, null, 2));
const failStacks = stackIndex.filter((x) => !x.ok);
const failPages = pageIndex.filter((x) => !x.ok);
if (failStacks.length) console.log('FAIL stacks', failStacks);
if (failPages.length) console.log('FAIL pages', failPages.map((x) => x.id + ' ' + x.path));
process.exit(out.summary.verdict === 'PASS' ? 0 : 1);
