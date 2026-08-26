#!/usr/bin/env node
/**
 * Fill remaining site-words gaps in page bodies (and optionally chrome partials).
 * Merges new slots into existing .words.md — does not wipe prior inventory.
 *
 * Usage:
 *   node scripts/site-words-fill-body-gaps.js --all
 *   node scripts/site-words-fill-body-gaps.js explore-banks home
 *   node scripts/site-words-fill-body-gaps.js --chrome
 */
const fs = require('fs');
const path = require('path');
const {
  PAGE_FILES,
  CHROME_FILE,
  listRequiredPageKeys,
  loadPage,
  loadChrome,
  writeSiteWordsDoc,
  slotsToMap,
  pageKeyForContentEntry,
  normalizeSlotText
} = require('./lib/site-words');

const root = path.resolve(__dirname, '..');
const contentPages = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'content-pages.json'), 'utf8')
);

const SKIP_EXACT = new Set([
  '0',
  '1',
  '2',
  '₹',
  '+',
  '—',
  '–',
  '...',
  '…',
  '9:41',
  '‹',
  '›'
]);

function entryForKey(pageKey) {
  for (let i = 0; i < contentPages.length; i++) {
    if (pageKeyForContentEntry(contentPages[i]) === pageKey) {
      return contentPages[i];
    }
  }
  return null;
}

function slugId(text, i) {
  const base = String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 48);
  return 't.' + (base || 's') + '.' + i;
}

function usableText(raw) {
  if (raw == null) return null;
  if (/\{\{SW:/.test(raw)) return null;
  if (/\{\{[A-Z0-9_]+\}\}/.test(raw)) return null;
  const compact = raw.replace(/\s+/g, ' ').trim();
  if (!compact) return null;
  if (SKIP_EXACT.has(compact)) return null;
  /* Pure numbers / money / percents — data, not marketing copy */
  if (/^[\d₹,\.\s%+\-–—x×÷=]+$/i.test(compact)) return null;
  if (!/[A-Za-z\u0900-\u097F]/.test(compact)) return null;
  /* Very short codes */
  if (compact.length < 2) return null;
  if (/^[a-z0-9_-]+$/i.test(compact) && compact.length < 3 && !/^[A-Za-z]{2,}$/.test(compact)) {
    return null;
  }
  return raw;
}

function nextId(existingIds, text, n) {
  let i = n;
  let id;
  do {
    id = slugId(text.replace(/\s+/g, ' ').trim(), i++);
  } while (existingIds[id]);
  existingIds[id] = true;
  return { id: id, next: i };
}

function fillHtml(html, doc) {
  const map = slotsToMap(doc);
  const existingIds = Object.create(null);
  Object.keys(map).forEach(function (id) {
    existingIds[id] = true;
  });
  let n = Object.keys(existingIds).length;
  let added = 0;
  const textToId = Object.create(null);

  function take(text, where) {
    const key = text;
    if (textToId[key]) return textToId[key];
    /* Reuse existing slot with same exact text when possible */
    const ids = Object.keys(map);
    for (let i = 0; i < ids.length; i++) {
      if (normalizeSlotText(map[ids[i]].text) === normalizeSlotText(text)) {
        textToId[key] = ids[i];
        return ids[i];
      }
    }
    const got = nextId(existingIds, text, n);
    n = got.next;
    const slot = {
      id: got.id,
      where: where,
      heading: where,
      text: text
    };
    doc.slots.push(slot);
    map[got.id] = slot;
    textToId[key] = got.id;
    added++;
    return got.id;
  }

  /* Attributes */
  html = html.replace(
    /\b(aria-label|placeholder|title|alt|data-face|data-label)=(["'])([^"']*?)\2/gi,
    function (full, attr, q, val) {
      const text = usableText(val);
      if (!text) return full;
      const id = take(text, attr);
      return attr + '=' + q + '{{SW:' + id + '}}' + q;
    }
  );

  /* Text nodes between tags (handles split headlines / mixed markup) */
  html = html.replace(/>([^<]+)</g, function (full, text) {
    if (/\{\{/.test(text)) return full;
    const u = usableText(text);
    if (!u) return full;
    /* Keep pure whitespace-only from being taken — usableText already trims check */
    if (!/[A-Za-z\u0900-\u097F]/.test(text)) return full;
    const id = take(u, 'text');
    return '>{{SW:' + id + '}}<';
  });

  return { html: html, added: added };
}

function fillPage(pageKey) {
  const entry = entryForKey(pageKey);
  if (!entry || !entry.body) {
    console.error('Skip ' + pageKey + ' (no body)');
    return;
  }
  const doc = loadPage(pageKey);
  if (!Array.isArray(doc.slots)) doc.slots = [];
  if (!Array.isArray(doc.slots_assistive)) doc.slots_assistive = [];
  const bodyPath = path.join(root, entry.body);
  let html = fs.readFileSync(bodyPath, 'utf8');
  const before = html;
  const result = fillHtml(html, doc);
  if (result.html === before) {
    console.log(pageKey + ': no new body gaps');
    return;
  }
  fs.writeFileSync(bodyPath, result.html);
  writeSiteWordsDoc(doc, PAGE_FILES[pageKey]);
  console.log(pageKey + ': added ' + result.added + ' slots → ' + PAGE_FILES[pageKey]);
}

function fillChrome() {
  const doc = loadChrome();
  if (!Array.isArray(doc.slots)) doc.slots = [];
  const files = [
    'partials/global-nav.html',
    'partials/site-footer.html',
    'partials/guide-localnav.html'
  ];
  let total = 0;
  files.forEach(function (rel) {
    const abs = path.join(root, rel);
    if (!fs.existsSync(abs)) return;
    let html = fs.readFileSync(abs, 'utf8');
    const before = html;
    const result = fillHtml(html, doc);
    if (result.html !== before) {
      fs.writeFileSync(abs, result.html);
      total += result.added;
      console.log('chrome file ' + rel + ': +' + result.added);
    } else {
      console.log('chrome file ' + rel + ': no new gaps');
    }
  });
  writeSiteWordsDoc(doc, CHROME_FILE);
  console.log('chrome total new slots this run (cumulative in doc): see words file');
}

const args = process.argv.slice(2);
if (!args.length) {
  console.error(
    'Usage: node scripts/site-words-fill-body-gaps.js --all | --chrome | <pageKey…>'
  );
  process.exit(1);
}

if (args.includes('--chrome')) {
  fillChrome();
}

if (args.includes('--all')) {
  listRequiredPageKeys().forEach(fillPage);
} else {
  args.forEach(function (a) {
    if (a === '--chrome') return;
    fillPage(a);
  });
}
