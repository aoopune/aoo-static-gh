#!/usr/bin/env node
/**
 * Convert legacy site-words YAML → human .words.md (keeps slot ids for markers).
 * Usage: node scripts/site-words-to-markdown.js
 */
const fs = require('fs');
const path = require('path');
const { parse: parseYaml } = require('yaml');
const {
  SITE_WORDS,
  PAGE_FILES,
  CHROME_FILE,
  listRequiredPageKeys,
  wordsPath,
  legacyYamlPath,
  serializeWordsMarkdown,
  normalizeSlotText
} = require('./lib/site-words');

function humanHeading(slot, index) {
  const whereRaw = String(slot.where || '').trim();
  const where = whereRaw.toLowerCase();
  let text = normalizeSlotText(slot.text).replace(/\s+/g, ' ').trim();
  if (text.length > 72) text = text.slice(0, 69) + '…';

  /* Already human labels (chrome / polished files) */
  if (
    whereRaw &&
    (whereRaw.includes('—') || whereRaw.includes(' - ')) &&
    !where.includes(' on page') &&
    !where.startsWith('<')
  ) {
    return whereRaw;
  }
  if (slot.heading && !String(slot.heading).includes(' on page')) {
    return slot.heading;
  }

  if (where.includes('aria-label')) {
    return text ? 'Screen reader — ' + text : 'Screen reader label';
  }
  if (where.includes('placeholder')) {
    return text ? 'Placeholder — ' + text : 'Input placeholder';
  }
  if (where.includes('data-face')) {
    return text ? 'Dropdown face — ' + text : 'Dropdown option';
  }
  if (where.includes('title on page') || where === 'title') {
    return text ? 'Frame title — ' + text : 'Title';
  }
  if (where.includes('<h1')) return text ? 'Main title — ' + text : 'Main title';
  if (where.includes('<h2')) return text ? 'Heading — ' + text : 'Heading';
  if (where.includes('<h3')) return text ? 'Subheading — ' + text : 'Subheading';
  if (where.includes('<label') || where.includes('legend')) {
    return text ? 'Field label — ' + text : 'Field label';
  }
  if (where.includes('<button')) {
    return text ? 'Button — ' + text : 'Button';
  }
  if (where.includes('<a')) {
    return text ? 'Link — ' + text : 'Link';
  }
  if (where.includes('<option')) {
    return text ? 'Option — ' + text : 'Option';
  }
  if (where.includes('<th') || where.includes('<td')) {
    return text ? 'Table — ' + text : 'Table cell';
  }
  if (where.includes('<li')) {
    return text ? 'List item — ' + text : 'List item';
  }
  if (
    where.includes('<p') ||
    where.includes('<span') ||
    where.includes('<div') ||
    where.includes('<em')
  ) {
    return text ? 'Text — ' + text : 'Text';
  }
  if (whereRaw && !where.includes(' on page')) return whereRaw;
  return text ? 'Text — ' + text : 'Text ' + (index + 1);
}

function convertDoc(doc) {
  const slots = (doc.slots || []).map(function (slot, i) {
    const clean = Object.assign({}, slot);
    delete clean._orig;
    clean.heading = humanHeading(slot, i);
    clean.where = clean.heading;
    clean.text = normalizeSlotText(slot.text);
    return clean;
  });
  const gated = (doc.slots_gated || []).map(function (slot, i) {
    const clean = Object.assign({}, slot);
    delete clean._orig;
    clean.heading = humanHeading(slot, i);
    clean.where = clean.heading;
    clean.text = normalizeSlotText(slot.text);
    return clean;
  });
  return Object.assign({}, doc, {
    page: Object.assign({}, doc.page, {
      title_for_humans:
        doc.page.title_for_humans && doc.page.title_for_humans !== doc.page.id
          ? doc.page.title_for_humans
          : prettyTitle(doc.page.id)
    }),
    slots: slots,
    slots_gated: gated
  });
}

function prettyTitle(id) {
  const map = {
    home: 'Home',
    'explore-banks': 'Explore banks',
    apply: 'Apply once',
    'apply-contact': 'Apply contact',
    about: 'About',
    'project-approvals': 'Project Bank Finder',
    calculators: 'Calculators',
    'calculators-emi': 'EMI calculator',
    'calculators-how-much-loan': 'Eligibility calculator',
    'calculators-loan-amount': 'Loan from EMI calculator',
    'calculators-prepayment': 'Prepayment calculator',
    'calculators-balance-transfer': 'Balance transfer calculator',
    'calculators-tenure': 'Tenure calculator',
    'calculators-tax-savings': 'Tax claims calculator',
    'guide-overview': 'Guide — Overview',
    'guide-documents': 'Guide — Documents',
    'guide-tax-benefits': 'Guide — Tax benefits',
    'guide-concessions': 'Guide — Concessions',
    'guide-home-loan-insurance': 'Guide — Insurance',
    'guide-property-home-insurance': 'Guide — Property cover',
    'guide-credit-life-insurance': 'Guide — Loan cover',
    'guide-complaints': 'Guide — If something goes wrong',
    'legal-privacy-policy': 'Privacy Policy',
    'legal-terms-of-use': 'Terms of Use',
    sitemap: 'Site Map',
    chrome: 'Nav & footer (every page)'
  };
  return map[id] || id;
}

function convertFile(yamlAbs, mdAbs) {
  const doc = convertDoc(parseYaml(fs.readFileSync(yamlAbs, 'utf8')));
  fs.mkdirSync(path.dirname(mdAbs), { recursive: true });
  fs.writeFileSync(mdAbs, serializeWordsMarkdown(doc));
  fs.unlinkSync(yamlAbs);
  console.log('→ ' + path.relative(SITE_WORDS, mdAbs));
}

/* Chrome */
const chromeYaml = wordsPath('common/chrome.yaml');
const chromeMd = wordsPath(CHROME_FILE);
if (fs.existsSync(chromeYaml)) {
  convertFile(chromeYaml, chromeMd);
} else if (!fs.existsSync(chromeMd)) {
  console.error('Missing chrome.yaml and chrome.words.md');
  process.exit(1);
}

listRequiredPageKeys().forEach(function (key) {
  const mdRel = PAGE_FILES[key];
  const yamlRel = legacyYamlPath(mdRel);
  const yamlAbs = wordsPath(yamlRel);
  const mdAbs = wordsPath(mdRel);
  if (fs.existsSync(yamlAbs)) {
    convertFile(yamlAbs, mdAbs);
  } else if (!fs.existsSync(mdAbs)) {
    console.error('Missing both yaml and md for ' + key);
    process.exit(1);
  }
});

console.log('Done. Humans edit .words.md files under site-words/.');
