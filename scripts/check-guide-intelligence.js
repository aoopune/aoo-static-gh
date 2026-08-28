'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ledgerPath = path.join(
  root,
  'super-review-1/guide-intelligence-drafts/_guide-intelligence-founder-choices-ledger.json'
);
const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));

const PAGE_FILES = {
  'property-cover': 'content/guide/property-home-insurance.body.html',
  'loan-cover': 'content/guide/credit-life-insurance.body.html'
};

function sectionIdsInHtml(html) {
  const ids = [];
  const re =
    /<section\b[^>]*\bguide-moment\b[^>]*\bid="([^"]+)"[^>]*>|<section\b[^>]*\bid="([^"]+)"[^>]*\bguide-moment\b[^>]*>/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    ids.push(match[1] || match[2]);
  }
  return ids;
}

let failed = false;

for (const row of ledger.choices) {
  const bodyPath = path.join(root, row.body_path);
  if (!fs.existsSync(bodyPath)) {
    console.error('Missing body file: ' + row.body_path);
    failed = true;
    continue;
  }
  const html = fs.readFileSync(bodyPath, 'utf8');
  const idRe = new RegExp('\\bid="' + row.section_id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"');
  if (!idRe.test(html)) {
    console.error('Missing #' + row.section_id + ' in ' + row.body_path);
    failed = true;
  }
}

for (const [pageKey, relPath] of Object.entries(PAGE_FILES)) {
  const abs = path.join(root, relPath);
  const html = fs.readFileSync(abs, 'utf8');
  const ids = sectionIdsInHtml(html);
  const expected = new Set(
    ledger.choices.filter(function (c) {
      return c.page_key === pageKey;
    }).map(function (c) {
      return c.section_id;
    })
  );
  for (const id of ids) {
    if (!expected.has(id)) {
      console.error('Section #' + id + ' in ' + relPath + ' has no ledger entry');
      failed = true;
    }
  }
  for (const id of expected) {
    if (ids.indexOf(id) === -1) {
      console.error('Ledger #' + id + ' on ' + pageKey + ' not found in ' + relPath);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log('Guide intelligence ledger ↔ HTML parity OK');
