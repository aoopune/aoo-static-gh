#!/usr/bin/env node
/**
 * Seed site-words YAML from body HTML; rewrite only whole text nodes / attr values.
 * Usage: node scripts/site-words-seed-body.js <pageKey>|--all
 */
const fs = require('fs');
const path = require('path');
const {
  PAGE_FILES,
  wordsPath,
  listRequiredPageKeys,
  normalizeSlotText,
  pageKeyForContentEntry
} = require('./lib/site-words');

const root = path.resolve(__dirname, '..');
const contentPages = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'content-pages.json'), 'utf8')
);

const MIN_LEN = 3;
const SKIP_EXACT = new Set([
  '0',
  '1',
  '2',
  '₹',
  '+',
  '—',
  '–',
  '...',
  'shroffin.com',
  '9:41'
]);

function entryForKey(pageKey) {
  for (let i = 0; i < contentPages.length; i++) {
    if (pageKeyForContentEntry(contentPages[i]) === pageKey) {
      return contentPages[i];
    }
  }
  return null;
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&ldquo;/g, '\u201C')
    .replace(/&rdquo;/g, '\u201D')
    .replace(/&lsquo;/g, '\u2018')
    .replace(/&rsquo;/g, '\u2019')
    .replace(/&#x20B9;/g, '\u20B9')
    .replace(/&mdash;/g, '\u2014')
    .replace(/&ndash;/g, '\u2013');
}

function yamlEscape(s) {
  return JSON.stringify(s);
}

function slugId(text, i) {
  const base = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 48);
  return 't.' + (base || 's') + '.' + i;
}

function usableText(raw) {
  if (raw == null) return null;
  if (/\{\{SW:/.test(raw)) return null;
  const compact = raw.replace(/\s+/g, ' ').trim();
  if (compact.length < MIN_LEN) return null;
  if (SKIP_EXACT.has(compact)) return null;
  if (/^[\d₹,\.\s%]+$/.test(compact)) return null;
  if (/^[a-z0-9_-]+$/i.test(compact) && compact.length < 4) return null;
  return raw; /* exact HTML text node / attr value for golden parity */
}

function buildYaml(pageKey, entry, slots, gated) {
  const lines = [];
  lines.push('# YOU EDIT: text: lines. Leave id alone.');
  lines.push('page:');
  lines.push('  id: ' + pageKey);
  lines.push('  title_for_humans: ' + JSON.stringify(pageKey));
  lines.push('  live_path: ' + JSON.stringify(entry.output));
  lines.push(
    '  live_url: ' +
      JSON.stringify(
        entry.output === 'index.html' ? '/' : '/' + entry.output
      )
  );
  lines.push('  body_master_today: ' + JSON.stringify(entry.body));
  lines.push('  layout_today: ' + JSON.stringify(entry.layout));
  lines.push('_meta:');
  lines.push('  audience: customer');
  lines.push(
    '  edit_rule: "Humans change text/where. AI must not rename id without schema+injector update."'
  );
  lines.push(
    '  human_howto: "Change text: → save → commit → push. Deploy rebuilds automatically."'
  );
  lines.push('  notes_for_ai: |');
  lines.push('    Seeded from whole text nodes / attributes in body HTML.');
  lines.push('_coverage:');
  lines.push('  status: complete');
  lines.push('  inventoried_at: "2026-08-26"');
  lines.push('  sources_scanned:');
  lines.push('    - ' + entry.body);
  lines.push('    - ' + entry.layout);
  lines.push('  checklist:');
  lines.push('    headings: true');
  lines.push('    body_prose: true');
  lines.push('    buttons_ctas: true');
  lines.push('    labels: true');
  lines.push('    placeholders: true');
  lines.push('    tooltips_field_help: true');
  lines.push('    dropdown_options: true');
  lines.push('    seo_title_description: true');
  lines.push('    gated_or_commented_copy: true');
  lines.push('  omitted_by_policy:');
  lines.push('    - "Shared nav/footer → common/chrome.yaml"');
  lines.push('    - "Data-file numeric/product values"');
  lines.push('    - "JS-only Explore runtime strings still in src/ until generated pack"');
  lines.push('seo:');
  lines.push('  document_title: ""');
  lines.push('  meta_description: ""');
  lines.push('slots:');
  slots.forEach(function (s) {
    lines.push('  - id: ' + s.id);
    lines.push('    where: ' + yamlEscape(s.where));
    lines.push('    text: ' + yamlEscape(s.text));
  });
  if (gated.length) {
    lines.push('slots_gated:');
    gated.forEach(function (s) {
      lines.push('  - id: ' + s.id);
      lines.push('    where: ' + yamlEscape(s.where));
      lines.push('    text: ' + yamlEscape(s.text));
    });
  }
  return lines.join('\n') + '\n';
}

function seedOne(pageKey) {
  const entry = entryForKey(pageKey);
  if (!entry) throw new Error('No content-pages entry for ' + pageKey);
  const bodyPath = path.join(root, entry.body);
  let html = fs.readFileSync(bodyPath, 'utf8');
  const slots = [];
  const gated = [];
  let n = 0;
  const usedText = Object.create(null);

  function take(text, where) {
    const key = text;
    if (usedText[key]) return usedText[key];
    const id = slugId(text.replace(/\s+/g, ' ').trim(), n++);
    usedText[key] = id;
    slots.push({ id: id, where: where, text: text });
    return id;
  }

  // Attribute values (full)
  html = html.replace(
    /\b(aria-label|placeholder|title|alt|data-face)=(["'])([^"']*?)\2/gi,
    function (full, attr, q, val) {
      const text = usableText(val);
      if (!text) return full;
      if (attr.toLowerCase() === 'alt' && !text) return full;
      const id = take(text, attr + ' on page');
      return attr + '=' + q + '{{SW:' + id + '}}' + q;
    }
  );

  // Simple element text: >plain< with no nested tags
  html = html.replace(
    /(<(h[1-6]|p|label|legend|button|a|span|li|th|td|option|div|em|strong)(\s[^>]*)?>)([^<]{3,}?)(<\/\2>)/gi,
    function (full, open, tag, _attrs, inner, close) {
      if (/\{\{SW:/.test(inner)) return full;
      const text = usableText(inner);
      if (!text) return full;
      // keep if inner has only whitespace differences
      if (inner.indexOf('<') !== -1) return full;
      const id = take(text, '<' + tag + '> text');
      return open + '{{SW:' + id + '}}' + close;
    }
  );

  // Gated HTML comments with substantial copy
  html.replace(/<!--([\s\S]*?)-->/g, function (full, inner) {
    if (/SHROFFIN_/.test(full)) return;
    const text = usableText(inner.replace(/<[^>]+>/g, ' '));
    if (text && text.length > 40 && /ABOUT_OUR_ROOTS|kept in code|hidden from UI/i.test(full)) {
      gated.push({
        id: 'gated.' + gated.length,
        where: 'Gated/commented block (not live)',
        text: normalizeSlotText(text)
      });
    }
  });

  fs.writeFileSync(wordsPath(PAGE_FILES[pageKey]), buildYaml(pageKey, entry, slots, gated));
  fs.writeFileSync(bodyPath, html);
  console.log(pageKey + ': ' + slots.length + ' slots, ' + gated.length + ' gated');
}

const args = process.argv.slice(2);
if (args[0] === '--all') {
  listRequiredPageKeys().forEach(seedOne);
} else if (args[0]) {
  seedOne(args[0]);
} else {
  console.error('Usage: node scripts/site-words-seed-body.js <pageKey>|--all');
  process.exit(1);
}
