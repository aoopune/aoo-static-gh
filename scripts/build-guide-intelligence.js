'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const ledgerPath = path.join(
  root,
  'super-review-1/guide-intelligence-drafts/_guide-intelligence-founder-choices-ledger.json'
);
const outPath = path.join(root, 'js/guide-intelligence.generated.js');

const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
const byPage = Object.create(null);

if (!Array.isArray(ledger.choices) || ledger.choices.length !== ledger.total_cards) {
  console.error(
    'Expected ' + ledger.total_cards + ' choices in ledger, got ' + (ledger.choices && ledger.choices.length)
  );
  process.exit(1);
}

for (const row of ledger.choices) {
  if (!row.page_key || !row.section_id || !Array.isArray(row.chosen_bullets)) {
    console.error('Invalid ledger row:', row.card_number);
    process.exit(1);
  }
  if (!byPage[row.page_key]) byPage[row.page_key] = Object.create(null);
  if (byPage[row.page_key][row.section_id]) {
    console.error('Duplicate section_id on page ' + row.page_key + ': ' + row.section_id);
    process.exit(1);
  }
  byPage[row.page_key][row.section_id] = {
    bullets: row.chosen_bullets,
    bulletsHtml: row.chosen_bullets_html || null
  };
}

const next =
  '/* Generated from super-review-1/guide-intelligence-drafts/_guide-intelligence-founder-choices-ledger.json — do not edit. */\n' +
  'window.ShroffinGuideIntelligence = ' +
  JSON.stringify(byPage, null, 2) +
  ';\n';

if (checkOnly) {
  if (!fs.existsSync(outPath) || fs.readFileSync(outPath, 'utf8') !== next) {
    console.error(
      'js/guide-intelligence.generated.js is out of date. Run: npm run build:guide-intelligence'
    );
    process.exit(1);
  }
  console.log('guide-intelligence.generated.js OK (' + ledger.choices.length + ' cards)');
  process.exit(0);
}

fs.writeFileSync(outPath, next);
console.log('Wrote js/guide-intelligence.generated.js (' + ledger.choices.length + ' cards)');
