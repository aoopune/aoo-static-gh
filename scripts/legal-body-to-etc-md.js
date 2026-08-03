/**
 * One-shot: rewrite etc/docs/legal/*.md from live content/legal/*.body.html wording.
 * Does not change *.body.html or published legal HTML.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const etcLegal = path.resolve(root, '..', 'etc', 'docs', 'legal');
const bodyDir = path.join(root, 'content', 'legal');

const FRONT = {
  'privacy-policy.md': `---
title: Shroffin — Privacy Policy (India)
version: 1.0
effective_date: 2026-07-13
last_updated: 2026-07-13
jurisdiction: India
status: mirrors live site wording (shroffin.com/privacy-policy.html)
website: https://shroffin.com/privacy-policy.html
source_of_truth_note: |
  Prose matches the live page body in aoo-static-gh/content/legal/privacy-policy.body.html.
  Edit etc first only after a deliberate site update; then rebuild site legal HTML if that pipeline is enabled.
---
`,
  'terms-of-use.md': `---
title: Shroffin — Terms of Use (India)
version: 1.0
effective_date: 2026-08-01
last_updated: 2026-08-01
jurisdiction: India
status: mirrors live site wording (shroffin.com/terms-of-use.html)
website: https://shroffin.com/terms-of-use.html
related: docs/legal/privacy-policy.md
source_of_truth_note: |
  Prose matches the live page body in aoo-static-gh/content/legal/terms-of-use.body.html.
  Edit etc first only after a deliberate site update; then rebuild site legal HTML if that pipeline is enabled.
---
`,
};

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&middot;/g, '·')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCharCode(parseInt(n, 16))
    );
}

function inline(html) {
  let s = html;
  s = s.replace(/<br\s*\/?>/gi, '  \n');
  s = s.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const t = inline(text).replace(/\s+/g, ' ').trim();
    let h = href;
    if (h.startsWith('/')) h = 'https://shroffin.com' + h;
    return `[${t}](${h})`;
  });
  s = s.replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, (_, __, t) => `**${inline(t).trim()}**`);
  s = s.replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, (_, __, t) => `*${inline(t).trim()}*`);
  s = s.replace(/<[^>]+>/g, '');
  return decodeEntities(s).replace(/[ \t]+\n/g, '\n').trim();
}

function cellText(html) {
  return inline(html).replace(/\s+/g, ' ').trim();
}

function tableToMd(tableHtml) {
  const rows = [];
  const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let m;
  while ((m = trRe.exec(tableHtml))) {
    const cells = [];
    const cellRe = /<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi;
    let c;
    while ((c = cellRe.exec(m[1]))) {
      cells.push(cellText(c[2]));
    }
    if (cells.length) rows.push(cells);
  }
  if (!rows.length) return '';

  const hasThead = /<thead[\s>]/i.test(tableHtml);
  const colCount = Math.max(...rows.map((r) => r.length));
  const pad = (r) => {
    const out = r.slice();
    while (out.length < colCount) out.push('');
    return out;
  };

  let header;
  let body;
  if (hasThead) {
    header = pad(rows[0]);
    body = rows.slice(1).map(pad);
  } else if (colCount === 2 && rows.every((r) => r.length === 2)) {
    // Key/value tables → markdown with blank header row style used in etc docs
    header = ['', ''];
    body = rows.map(pad);
  } else {
    header = pad(rows[0]);
    body = rows.slice(1).map(pad);
  }

  const line = (cells) => '| ' + cells.join(' | ') + ' |';
  const sep = '| ' + header.map(() => '---').join(' | ') + ' |';
  return [line(header), sep, ...body.map(line)].join('\n');
}

function listToMd(listHtml, ordered) {
  const items = [];
  const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let m;
  let i = 1;
  while ((m = liRe.exec(listHtml))) {
    const text = inline(m[1]).replace(/\s+/g, ' ').trim();
    items.push(ordered ? `${i}. ${text}` : `- ${text}`);
    i += 1;
  }
  return items.join('\n');
}

function blockToMd(html) {
  let s = html;
  // Drop wrappers that are layout-only
  s = s.replace(/<\/?(main|header|section|nav|div)[^>]*>/gi, '\n');

  const parts = [];
  const tokenRe =
    /<(h[1-3])[^>]*>([\s\S]*?)<\/\1>|<p[^>]*class=["']legal-meta["'][^>]*>([\s\S]*?)<\/p>|<p[^>]*>([\s\S]*?)<\/p>|<table[\s\S]*?<\/table>|<ul[^>]*>([\s\S]*?)<\/ul>|<ol[^>]*>([\s\S]*?)<\/ol>/gi;

  let m;
  while ((m = tokenRe.exec(s))) {
    if (m[1]) {
      const level = Number(m[1].slice(1));
      const title = inline(m[2]).replace(/\s+/g, ' ').trim();
      parts.push(`${'#'.repeat(level)} ${title}`);
      parts.push('');
    } else if (m[3] != null) {
      const spans = [...m[3].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/gi)].map((x) =>
        inline(x[1]).replace(/\s+/g, ' ').trim()
      );
      if (spans[0]) parts.push(`**Effective date:** ${spans[0].replace(/^Effective\s+/i, '')}`);
      if (spans[1]) parts.push(`**Last updated:** ${spans[1].replace(/^Last updated\s+/i, '')}`);
      if (spans[2]) parts.push(`**Applies to:** ${spans[2]}`);
      parts.push('');
    } else if (m[4] != null) {
      const text = inline(m[4]);
      if (text) {
        parts.push(text);
        parts.push('');
      }
    } else if (m[0].startsWith('<table')) {
      parts.push(tableToMd(m[0]));
      parts.push('');
    } else if (m[5] != null) {
      parts.push(listToMd(m[5], false));
      parts.push('');
    } else if (m[6] != null) {
      // Skip TOC ordered lists that only link to anchors? Keep Contents as list.
      parts.push(listToMd(m[6], true));
      parts.push('');
    }
  }

  return parts
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n';
}

if (!fs.existsSync(etcLegal)) {
  console.error('etc legal path not found:', etcLegal);
  process.exit(1);
}

const map = [
  ['privacy-policy.body.html', 'privacy-policy.md'],
  ['terms-of-use.body.html', 'terms-of-use.md'],
];

for (const [bodyName, mdName] of map) {
  const body = fs.readFileSync(path.join(bodyDir, bodyName), 'utf8');
  const md = FRONT[mdName] + '\n' + blockToMd(body);
  const dest = path.join(etcLegal, mdName);
  fs.writeFileSync(dest, md);
  console.log('Wrote', dest, '(' + md.length + ' chars)');
}
