#!/usr/bin/env node
/**
 * Full site-words coverage audit: body + layout HTML vs .words.md slots.
 * Flags customer-facing strings that are still hardcoded (not {{SW:…}}).
 *
 * Usage: node scripts/audit-site-words-coverage.js
 *        node scripts/audit-site-words-coverage.js --json
 */
const fs = require('fs');
const path = require('path');
const {
  SITE_WORDS,
  PAGE_FILES,
  CHROME_FILE,
  listRequiredPageKeys,
  loadPage,
  loadChrome,
  slotsToMap,
  wordsPath,
  CONTENT_ID_TO_WORDS
} = require('./lib/site-words');

const root = path.resolve(__dirname, '..');
const asJson = process.argv.includes('--json');

const contentPages = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'content-pages.json'), 'utf8')
);

/** Attrs that usually hold customer-facing copy */
const TEXT_ATTRS = [
  'placeholder',
  'aria-label',
  'title',
  'alt',
  'data-face',
  'data-label',
  'data-empty',
  'data-placeholder'
];

const SKIP_TAG = /^(script|style|svg|path|meta|link|noscript)$/i;

function entryForPageKey(pageKey) {
  if (pageKey === 'legal-privacy-policy') {
    return contentPages.find(function (e) {
      return e.output === 'privacy-policy.html';
    });
  }
  if (pageKey === 'legal-terms-of-use') {
    return contentPages.find(function (e) {
      return e.output === 'terms-of-use.html';
    });
  }
  for (let i = 0; i < contentPages.length; i++) {
    const e = contentPages[i];
    if (CONTENT_ID_TO_WORDS[e.id] === pageKey) return e;
    if (e.id === 'legal') continue;
  }
  /* reverse: apply/contact */
  const pairs = Object.keys(CONTENT_ID_TO_WORDS);
  for (let i = 0; i < pairs.length; i++) {
    if (CONTENT_ID_TO_WORDS[pairs[i]] === pageKey) {
      return contentPages.find(function (e) {
        return e.id === pairs[i];
      });
    }
  }
  return null;
}

function isMarkerOnly(s) {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  if (!t) return true;
  /* Pure {{SW:id}} or concatenation of markers / trivial separators */
  const stripped = t
    .replace(/\{\{SW:[a-zA-Z0-9_.-]+\}\}/g, '')
    .replace(/\{\{[A-Z0-9_]+\}\}/g, '') /* CONTACT_ / BODY chrome */
    .replace(/[|·•\-–,./:()%\d\s₹]/g, '')
    .trim();
  return stripped.length === 0;
}

function looksLikeCodeOrPath(s) {
  const t = String(s).trim();
  if (!t) return true;
  if (/^https?:\/\//i.test(t)) return true;
  if (/^\/[a-z0-9_\-./]+$/i.test(t) && t.indexOf(' ') === -1) return true;
  if (/^#[a-z0-9_-]+$/i.test(t)) return true;
  if (/^(true|false|null|undefined)$/i.test(t)) return true;
  if (/^[\d.,\s+\-×x%]+$/i.test(t)) return true; /* pure numbers */
  if (/^[a-z0-9_-]+\.(html|js|css|json|svg|png|webp)$/i.test(t)) return true;
  if (/^(flex|grid|none|block|inline|hidden|visible)$/i.test(t)) return true;
  if (t.length <= 1) return true;
  return false;
}

function normalizeSnippet(s) {
  return String(s || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120);
}

function pushFinding(list, item) {
  const key = item.kind + '|' + item.where + '|' + item.text;
  if (list._seen && list._seen[key]) return;
  if (!list._seen) list._seen = Object.create(null);
  list._seen[key] = true;
  list.push(item);
}

/**
 * Walk HTML for text nodes + text-ish attributes.
 * Very small HTML walker (no full DOM) — good enough for masters.
 */
function scanHtml(html, sourceLabel, findings) {
  if (!html) return;

  /* Attributes */
  TEXT_ATTRS.forEach(function (attr) {
    const re = new RegExp(
      '\\b' + attr + '\\s*=\\s*("([^"]*)"|\'([^\']*)\')',
      'gi'
    );
    let m;
    while ((m = re.exec(html))) {
      const raw = m[2] != null ? m[2] : m[3];
      const text = normalizeSnippet(raw);
      if (!text || looksLikeCodeOrPath(text)) continue;
      if (isMarkerOnly(text)) {
        pushFinding(findings.covered, {
          kind: 'attr:' + attr,
          where: sourceLabel,
          text: text
        });
      } else {
        pushFinding(findings.hardcoded, {
          kind: 'attr:' + attr,
          where: sourceLabel,
          text: text,
          hidden_hint: /aria-label|data-face/i.test(attr)
            ? 'often hidden / dropdown / assistive'
            : ''
        });
      }
    }
  });

  /* option / button / label / legend / th / td / summary / h1-h6 / p / span / a / li / figcaption */
  const pairRe =
    /<(option|button|label|legend|th|td|summary|h[1-6]|p|span|a|li|figcaption|em|strong|small|div)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  let pm;
  while ((pm = pairRe.exec(html))) {
    const tag = pm[1].toLowerCase();
    const attrs = pm[2] || '';
    let inner = pm[3] || '';
    /* Strip nested tags for text extract */
    const plain = normalizeSnippet(inner.replace(/<[^>]+>/g, ' '));
    if (!plain || looksLikeCodeOrPath(plain)) continue;
    /* Skip if this is only whitespace-ish after removing markers check */
    const hidden =
      /\bhidden\b/i.test(attrs) ||
      /aria-hidden\s*=\s*["']true["']/i.test(attrs) ||
      /class\s*=\s*["'][^"']*\b(visually-hidden|sr-only|hlc-face|data-face)\b/i.test(
        attrs
      );

    if (isMarkerOnly(plain)) {
      pushFinding(findings.covered, {
        kind: 'tag:' + tag,
        where: sourceLabel,
        text: plain
      });
    } else if (!SKIP_TAG.test(tag)) {
      /* div/span often structural — only flag if short-ish copy-like */
      if ((tag === 'div' || tag === 'span') && plain.length > 80) {
        /* long structural dumps — still flag if no SW at all */
        if (!/\{\{SW:/.test(inner) && /[A-Za-z]{3,}/.test(plain)) {
          pushFinding(findings.hardcoded, {
            kind: 'tag:' + tag,
            where: sourceLabel,
            text: plain,
            hidden_hint: hidden ? 'may be hidden / collapsed UI' : 'long block'
          });
        }
      } else if (/[A-Za-z\u0900-\u097F]{2,}/.test(plain)) {
        pushFinding(findings.hardcoded, {
          kind: 'tag:' + tag,
          where: sourceLabel,
          text: plain,
          hidden_hint: hidden ? 'may be hidden / collapsed UI' : ''
        });
      }
    }
  }

  /* Unresolved leftover: visible text that still has no SW in a line of body —
     catch data-face content in custom elements already covered via attrs. */
}

function slotStats(doc) {
  const map = slotsToMap(doc);
  const ids = Object.keys(map);
  return {
    total: ids.length,
    visible: (doc.slots || []).length,
    assistive: (doc.slots_assistive || []).length,
    gated: (doc.slots_gated || []).length,
    ids: ids
  };
}

function auditPage(pageKey) {
  const rel = PAGE_FILES[pageKey];
  const entry = entryForPageKey(pageKey);
  const doc = loadPage(pageKey);
  const stats = slotStats(doc);
  const findings = { covered: [], hardcoded: [], _seen: Object.create(null) };

  const sources = [];
  if (entry) {
    if (entry.body) sources.push({ label: entry.body, abs: path.join(root, entry.body) });
    if (entry.layout) {
      sources.push({ label: entry.layout, abs: path.join(root, entry.layout) });
    }
  }

  sources.forEach(function (s) {
    if (!fs.existsSync(s.abs)) {
      findings.hardcoded.push({
        kind: 'missing-file',
        where: s.label,
        text: '(file missing)'
      });
      return;
    }
    scanHtml(fs.readFileSync(s.abs, 'utf8'), s.label, findings);
  });

  delete findings._seen;

  /* Unused slots: in words but never referenced as {{SW:id}} in sources */
  const joined = sources
    .map(function (s) {
      return fs.existsSync(s.abs) ? fs.readFileSync(s.abs, 'utf8') : '';
    })
    .join('\n');
  const unused = stats.ids.filter(function (id) {
    return joined.indexOf('{{SW:' + id + '}}') === -1;
  });

  /* Markers in HTML with no slot */
  const markerRe = /\{\{SW:([a-zA-Z0-9_.-]+)\}\}/g;
  const missingSlots = [];
  let mm;
  const seenM = Object.create(null);
  while ((mm = markerRe.exec(joined))) {
    if (seenM[mm[1]]) continue;
    seenM[mm[1]] = true;
    if (!stats.ids.includes(mm[1])) missingSlots.push(mm[1]);
  }

  return {
    pageKey: pageKey,
    wordsFile: rel,
    folder: rel.split('/').slice(0, 3).join('/'),
    live: entry ? entry.output : '(no content-pages entry)',
    body: entry ? entry.body : null,
    layout: entry ? entry.layout : null,
    slots: stats,
    hardcoded: findings.hardcoded,
    coveredCount: findings.covered.length,
    unusedSlots: unused,
    missingSlots: missingSlots
  };
}

function auditChrome() {
  const doc = loadChrome();
  const stats = slotStats(doc);
  const findings = { covered: [], hardcoded: [], _seen: Object.create(null) };
  const files = [
    'partials/global-nav.html',
    'partials/site-footer.html',
    'partials/guide-localnav.html',
    'scripts/lib/site-chrome.js'
  ];
  files.forEach(function (rel) {
    const abs = path.join(root, rel);
    if (!fs.existsSync(abs)) return;
    scanHtml(fs.readFileSync(abs, 'utf8'), rel, findings);
  });
  delete findings._seen;

  const joined = files
    .map(function (rel) {
      const abs = path.join(root, rel);
      return fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : '';
    })
    .join('\n');
  const unused = stats.ids.filter(function (id) {
    return joined.indexOf('{{SW:' + id + '}}') === -1;
  });
  const markerRe = /\{\{SW:([a-zA-Z0-9_.-]+)\}\}/g;
  const missingSlots = [];
  let mm;
  const seenM = Object.create(null);
  while ((mm = markerRe.exec(joined))) {
    if (seenM[mm[1]]) continue;
    seenM[mm[1]] = true;
    if (!stats.ids.includes(mm[1])) missingSlots.push(mm[1]);
  }

  return {
    pageKey: 'chrome',
    wordsFile: CHROME_FILE,
    folder: 'common',
    live: 'partials + site-chrome',
    slots: stats,
    hardcoded: findings.hardcoded,
    coveredCount: findings.covered.length,
    unusedSlots: unused,
    missingSlots: missingSlots
  };
}

/** Known JS packs that still own Explore / Apply UI strings outside site-words */
function auditJsPacks() {
  const packs = [
    {
      file: 'src/home-loan-compare.js',
      note: 'Explore Banks runtime — dropdowns, empty states, table chrome, errors'
    },
    {
      file: 'js/apply-flow.js',
      note: 'Legacy apply modal / payment success (often not redesigned path)'
    },
    {
      file: 'src/apf-project-search.js',
      note: 'Project Bank Finder runtime strings'
    }
  ];
  return packs
    .filter(function (p) {
      return fs.existsSync(path.join(root, p.file));
    })
    .map(function (p) {
      const src = fs.readFileSync(path.join(root, p.file), 'utf8');
      /* Rough count of quoted UI-looking strings */
      const re = /["']([A-Za-z][^"']{2,80})["']/g;
      const samples = [];
      const seen = Object.create(null);
      let m;
      while ((m = re.exec(src))) {
        const t = m[1].trim();
        if (seen[t]) continue;
        if (!/[a-z ]{3,}/i.test(t)) continue;
        if (/^(use strict|object|string|number|function|window|document)/i.test(t))
          continue;
        if (/^[A-Z_]+$/.test(t)) continue;
        seen[t] = true;
        if (samples.length < 25) samples.push(t);
      }
      return {
        file: p.file,
        note: p.note,
        sampleUiStrings: samples,
        approxQuotedStrings: Object.keys(seen).length
      };
    });
}

const reports = [];
reports.push(auditChrome());
listRequiredPageKeys().forEach(function (key) {
  reports.push(auditPage(key));
});
const jsPacks = auditJsPacks();

if (asJson) {
  console.log(JSON.stringify({ pages: reports, jsPacks: jsPacks }, null, 2));
  process.exit(0);
}

/* Human report grouped by folder */
const byFolder = Object.create(null);
reports.forEach(function (r) {
  const folder = r.folder || 'other';
  if (!byFolder[folder]) byFolder[folder] = [];
  byFolder[folder].push(r);
});

let totalHard = 0;
let pagesClean = 0;
let pagesGaps = 0;

console.log('# Site-words coverage audit\n');
console.log(
  'Compares each page’s body/layout HTML to site-words. Hardcoded = text still in HTML without {{SW:…}}.\n'
);

Object.keys(byFolder)
  .sort()
  .forEach(function (folder) {
    console.log('\n## ' + folder + '\n');
    byFolder[folder].forEach(function (r) {
      const hard = r.hardcoded.length;
      totalHard += hard;
      const status =
        hard === 0 && r.missingSlots.length === 0 ? 'COVERED' : 'GAPS';
      if (status === 'COVERED') pagesClean++;
      else pagesGaps++;

      console.log(
        '### ' +
          r.pageKey +
          ' — **' +
          status +
          '** (' +
          r.wordsFile +
          ')'
      );
      console.log(
        '- Live: `' +
          r.live +
          '` · slots: ' +
          r.slots.total +
          ' (visible ' +
          r.slots.visible +
          ', assistive ' +
          r.slots.assistive +
          ')'
      );
      if (r.missingSlots.length) {
        console.log(
          '- Markers with **no slot**: ' + r.missingSlots.join(', ')
        );
      }
      if (r.unusedSlots.length) {
        console.log(
          '- Slots not referenced in HTML (' +
            r.unusedSlots.length +
            '): ' +
            r.unusedSlots.slice(0, 8).join(', ') +
            (r.unusedSlots.length > 8 ? '…' : '')
        );
      }
      if (hard) {
        console.log('- **Hardcoded strings (' + hard + '):**');
        r.hardcoded.slice(0, 40).forEach(function (h) {
          const hint = h.hidden_hint ? ' [' + h.hidden_hint + ']' : '';
          console.log(
            '  - `' +
              h.kind +
              '` @ ' +
              h.where +
              hint +
              ': “' +
              h.text.replace(/"/g, "'") +
              '”'
          );
        });
        if (hard > 40) console.log('  - … +' + (hard - 40) + ' more');
      } else {
        console.log('- No hardcoded customer text found in body/layout HTML.');
      }
      console.log('');
    });
  });

console.log('\n## JS packs still outside site-words (not in page HTML)\n');
jsPacks.forEach(function (p) {
  console.log('### `' + p.file + '`');
  console.log('- ' + p.note);
  console.log('- ~' + p.approxQuotedStrings + ' quoted string literals (rough)');
  console.log('- Samples: ' + p.sampleUiStrings.slice(0, 12).map(function (s) {
    return '“' + s + '”';
  }).join('; '));
  console.log('');
});

console.log('\n## Summary\n');
console.log(
  '- Pages/chrome audited: ' +
    reports.length +
    ' · fully clean HTML: ' +
    pagesClean +
    ' · with HTML gaps: ' +
    pagesGaps
);
console.log('- Total hardcoded HTML findings: ' + totalHard);
console.log(
  '- Explore / Tools JS packs still hold runtime UI copy outside site-words (see above).'
);
