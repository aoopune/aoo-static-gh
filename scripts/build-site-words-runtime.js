#!/usr/bin/env node
/**
 * Build JS copy packs from site-words *.runtime.words.md files.
 * Usage: node scripts/build-site-words-runtime.js
 */
const fs = require('fs');
const path = require('path');
const { parseWordsMarkdown, wordsPath, SITE_WORDS } = require('./lib/site-words');

const root = path.resolve(__dirname, '..');

const PACKS = [
  {
    source: 'pages/explore/explore.runtime.words.md',
    moduleOut: 'src/generated/explore-ui-copy.js',
    label: 'explore'
  },
  {
    source: 'pages/tools/project-finder/project-finder.runtime.words.md',
    moduleOut: 'src/generated/apf-ui-copy.js',
    label: 'apf'
  },
  {
    source: 'pages/explore/apply-success.runtime.words.md',
    windowOut: 'js/apply-success-copy.generated.js',
    windowName: '__SW_APPLY_SUCCESS__',
    label: 'apply-success'
  }
];

function slotsToObject(doc) {
  const out = Object.create(null);
  function add(list) {
    (list || []).forEach(function (slot) {
      if (!slot || !slot.id) return;
      out[slot.id] = String(slot.text == null ? '' : slot.text);
    });
  }
  add(doc.slots);
  add(doc.slots_assistive);
  add(doc.slots_gated);
  return out;
}

function writeModule(abs, obj, label) {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const body =
    '/* AUTO-GENERATED from site-words (' +
    label +
    ') — do not edit. Run: node scripts/build-site-words-runtime.js */\n' +
    '"use strict";\n' +
    'module.exports = ' +
    JSON.stringify(obj, null, 2) +
    ';\n';
  fs.writeFileSync(abs, body);
}

function writeWindow(abs, obj, globalName, label) {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const body =
    '/* AUTO-GENERATED from site-words (' +
    label +
    ') — do not edit. Run: node scripts/build-site-words-runtime.js */\n' +
    '(function (w) {\n' +
    '  "use strict";\n' +
    '  w.' +
    globalName +
    ' = ' +
    JSON.stringify(obj, null, 2) +
    ';\n' +
    '})(typeof window !== "undefined" ? window : globalThis);\n';
  fs.writeFileSync(abs, body);
}

PACKS.forEach(function (pack) {
  const absSrc = wordsPath(pack.source);
  if (!fs.existsSync(absSrc)) {
    console.error('Missing ' + pack.source);
    process.exit(1);
  }
  const doc = parseWordsMarkdown(fs.readFileSync(absSrc, 'utf8'));
  const obj = slotsToObject(doc);
  if (pack.moduleOut) {
    writeModule(path.join(root, pack.moduleOut), obj, pack.label);
    console.log('→ ' + pack.moduleOut + ' (' + Object.keys(obj).length + ' keys)');
  }
  if (pack.windowOut) {
    writeWindow(
      path.join(root, pack.windowOut),
      obj,
      pack.windowName,
      pack.label
    );
    console.log('→ ' + pack.windowOut + ' (' + Object.keys(obj).length + ' keys)');
  }
});

console.log('site-words runtime packs built.');
