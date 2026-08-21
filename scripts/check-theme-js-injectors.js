#!/usr/bin/env node
/**
 * Phase H (PREP-09) — fail if any redesigned v1 page loads a known
 * post-paint light chrome injector. Legacy/education consumers are
 * allowed and listed for documentation only.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pagesPath = path.join(root, 'data', 'redesigned-pages.json');

/** Dangerous light-painting injectors (SCOPE_CSS / modal teal / floating teal). */
const FORBIDDEN_ON_V1 = [
  'aoo-loan-table-standalone',
  'apply-flow.js',
  'apply-button-iframe',
];

/** Known out-of-v1 load sites (policy: leave light islands). */
const LEGACY_EXPECTED = {
  'education-loan.html': ['apply-flow.js'],
  'table-embed.html': ['aoo-loan-table-standalone', 'apply-button-iframe'],
};

const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));
const redesignedSet = new Set(pages.map((p) => p.path));
const contaminated = [];

pages.forEach(function (entry) {
  const absolutePath = path.join(root, entry.path);
  if (!fs.existsSync(absolutePath)) {
    throw new Error('Registered redesigned page is missing: ' + entry.path);
  }
  const html = fs.readFileSync(absolutePath, 'utf8');
  const hits = FORBIDDEN_ON_V1.filter(function (needle) {
    return html.includes(needle);
  });
  if (hits.length) {
    contaminated.push({ path: entry.path, hits: hits });
  }
});

if (contaminated.length) {
  console.error(
    'Theme JS-injector check failed. Redesigned v1 pages must not load:\n  ' +
      FORBIDDEN_ON_V1.join(', ') +
      '\n\nContaminated:\n' +
      contaminated
        .map(function (c) {
          return '- ' + c.path + ' → ' + c.hits.join(', ');
        })
        .join('\n')
  );
  process.exit(1);
}

// Sanity: legacy expected consumers still present (do not delete education).
Object.keys(LEGACY_EXPECTED).forEach(function (rel) {
  const absolutePath = path.join(root, rel);
  if (!fs.existsSync(absolutePath)) {
    console.error(
      'Theme JS-injector check failed. Expected legacy file missing (do not delete education): ' +
        rel
    );
    process.exit(1);
  }
  if (redesignedSet.has(rel)) {
    console.error(
      'Theme JS-injector check failed. Legacy injector host is listed as redesigned: ' +
        rel
    );
    process.exit(1);
  }
  const html = fs.readFileSync(absolutePath, 'utf8');
  LEGACY_EXPECTED[rel].forEach(function (needle) {
    if (!html.includes(needle)) {
      console.error(
        'Theme JS-injector check warning→fail: expected legacy load of ' +
          needle +
          ' in ' +
          rel +
          ' is gone. Update Phase H ledger if intentional.'
      );
      process.exit(1);
    }
  });
});

console.log(
  'Theme JS-injectors: ' +
    pages.length +
    ' redesigned paths clear of SCOPE_CSS / apply-flow / apply-button-iframe; legacy education + table-embed remain light islands.'
);
