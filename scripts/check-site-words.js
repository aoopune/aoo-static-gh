#!/usr/bin/env node
/**
 * Fail if site-words inventory is incomplete or .words.md is invalid.
 */
const fs = require('fs');
const path = require('path');
const {
  SITE_WORDS,
  PAGE_FILES,
  listRequiredPageKeys,
  loadChrome,
  loadPage,
  validateDoc,
  wordsPath
} = require('./lib/site-words');

const errors = [];

if (!fs.existsSync(path.join(SITE_WORDS, 'INDEX.md'))) {
  errors.push('Missing site-words/INDEX.md');
}
if (!fs.existsSync(path.join(SITE_WORDS, '_schema.md'))) {
  errors.push('Missing site-words/_schema.md');
}

try {
  const chrome = loadChrome();
  validateDoc(chrome, 'common/chrome.words.md').forEach(function (e) {
    errors.push(e);
  });
  if (chrome._coverage && chrome._coverage.status !== 'complete') {
    errors.push('common/chrome.words.md: _coverage.status must be complete');
  }
} catch (e) {
  errors.push(String(e.message || e));
}

listRequiredPageKeys().forEach(function (key) {
  const rel = PAGE_FILES[key];
  try {
    const doc = loadPage(key);
    validateDoc(doc, rel).forEach(function (e) {
      errors.push(e);
    });
    if (!doc._coverage || doc._coverage.status !== 'complete') {
      errors.push(rel + ': _coverage.status must be complete (got ' +
        ((doc._coverage && doc._coverage.status) || 'missing') + ')');
    }
  } catch (e) {
    errors.push(rel + ': ' + (e.message || e));
  }
});

if (errors.length) {
  console.error('check:site-words failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}

console.log(
  'check:site-words passed (' +
    listRequiredPageKeys().length +
    ' pages + chrome).'
);
