/**
 * Site-words: load / validate / apply {{SW:slot.id}} markers.
 *
 * Human format (preferred): site-words pages and chrome as ".words.md" files.
 *   ---
 *   id: home
 *   ...
 *   ---
 *   # Home
 *   ## Hero button {#hero.cta}
 *   Explore banks
 *
 * Legacy YAML still loads if the .words.md file is missing.
 */
const fs = require('fs');
const path = require('path');
const { parse: parseYaml } = require('yaml');

const root = path.resolve(__dirname, '../..');
const SITE_WORDS = path.join(root, 'site-words');

/** Logical page key → preferred relative path (.words.md). */
const PAGE_FILES = {
  home: 'pages/home/home.words.md',
  'explore-banks': 'pages/explore/explore.words.md',
  apply: 'pages/explore/review.words.md',
  'apply-contact': 'pages/explore/apply.words.md',
  about: 'pages/about/about.words.md',
  'project-approvals': 'pages/tools/project-finder/project-finder.words.md',
  calculators: 'pages/tools/calculators/hub.words.md',
  'calculators-emi': 'pages/tools/calculators/emi.words.md',
  'calculators-how-much-loan': 'pages/tools/calculators/how-much-loan.words.md',
  'calculators-loan-amount': 'pages/tools/calculators/loan-amount.words.md',
  'calculators-prepayment': 'pages/tools/calculators/prepayment.words.md',
  'calculators-balance-transfer': 'pages/tools/calculators/balance-transfer.words.md',
  'calculators-tenure': 'pages/tools/calculators/tenure.words.md',
  'calculators-tax-savings': 'pages/tools/calculators/tax-savings.words.md',
  'guide-overview': 'pages/guide/overview.words.md',
  'guide-documents': 'pages/guide/documents.words.md',
  'guide-tax-benefits': 'pages/guide/tax-benefits.words.md',
  'guide-concessions': 'pages/guide/concessions.words.md',
  'guide-home-loan-insurance': 'pages/guide/home-loan-insurance.words.md',
  'guide-property-home-insurance': 'pages/guide/property-home-insurance.words.md',
  'guide-credit-life-insurance': 'pages/guide/credit-life-insurance.words.md',
  'guide-complaints': 'pages/guide/complaints.words.md',
  'legal-privacy-policy': 'pages/company/privacy-policy.words.md',
  'legal-terms-of-use': 'pages/company/terms-of-use.words.md',
  sitemap: 'pages/company/sitemap.words.md'
};

const CHROME_FILE = 'common/chrome.words.md';

const CONTENT_ID_TO_WORDS = {
  home: 'home',
  'explore-banks': 'explore-banks',
  apply: 'apply',
  'apply/contact': 'apply-contact',
  about: 'about',
  'project-approvals': 'project-approvals',
  calculators: 'calculators',
  'calculators/emi': 'calculators-emi',
  'calculators/how-much-loan': 'calculators-how-much-loan',
  'calculators/loan-amount': 'calculators-loan-amount',
  'calculators/prepayment': 'calculators-prepayment',
  'calculators/balance-transfer': 'calculators-balance-transfer',
  'calculators/tenure': 'calculators-tenure',
  'calculators/tax-savings': 'calculators-tax-savings',
  'guide/overview': 'guide-overview',
  'guide/documents': 'guide-documents',
  'guide/tax-benefits': 'guide-tax-benefits',
  'guide/concessions': 'guide-concessions',
  'guide/home-loan-insurance': 'guide-home-loan-insurance',
  'guide/property-home-insurance': 'guide-property-home-insurance',
  'guide/credit-life-insurance': 'guide-credit-life-insurance',
  'guide/complaints': 'guide-complaints',
  sitemap: 'sitemap'
};

function wordsPath(rel) {
  return path.join(SITE_WORDS, rel);
}

function assistiveWordsPath(mdRel) {
  return mdRel.replace(/\.words\.md$/, '.assistive.words.md');
}

function legacyYamlPath(mdRel) {
  return mdRel.replace(/\.words\.md$/, '.yaml');
}

/**
 * Spoken-only / non-marketing labels — founder does not edit these day to day.
 * Kept for the website; stored in sibling *.assistive.words.md files.
 */
function isAssistiveHeading(heading) {
  const h = String(heading || '')
    .replace(/^\[assistive\]\s*/i, '')
    .replace(/^\[gated\]\s*/i, '')
    .trim()
    .toLowerCase();
  return h.startsWith('screen reader') || h.startsWith('frame title');
}

function partitionDocSlots(doc) {
  const visible = [];
  const assistive = [];
  const gated = [];
  function take(list, forceAssistive) {
    (list || []).forEach(function (slot) {
      if (!slot) return;
      const heading = slot.heading || slot.where || '';
      if (forceAssistive || isAssistiveHeading(heading) || slot.audience === 'assistive') {
        const copy = Object.assign({}, slot);
        copy.audience = 'assistive';
        assistive.push(copy);
        return;
      }
      if (list === doc.slots_gated) {
        gated.push(slot);
        return;
      }
      visible.push(slot);
    });
  }
  take(doc.slots, false);
  take(doc.slots_assistive, true);
  take(doc.slots_gated, false);
  doc.slots = visible;
  doc.slots_assistive = assistive;
  doc.slots_gated = gated;
  return doc;
}

/**
 * Parse human .words.md → internal doc { page, _meta, _coverage, seo, slots, slots_gated }.
 */
function parseWordsMarkdown(source) {
  const normalized = source.replace(/\r\n/g, '\n');
  let body = normalized;
  let fm = {};
  if (normalized.startsWith('---\n')) {
    const end = normalized.indexOf('\n---\n', 4);
    if (end === -1) {
      throw new Error('words.md: missing closing frontmatter ---');
    }
    fm = parseYaml(normalized.slice(4, end)) || {};
    body = normalized.slice(end + 5);
  }

  const slots = [];
  const slots_gated = [];
  const slots_assistive = [];
  const headingRe = /^##\s+(.+?)\s*\{#([a-zA-Z0-9_.-]+)\}\s*$/gm;
  const matches = [];
  let m;
  while ((m = headingRe.exec(body))) {
    matches.push({
      index: m.index,
      end: m.index + m[0].length,
      heading: m[1].trim(),
      id: m[2],
      full: m[0]
    });
  }

  const forceAssistiveFile = fm.audience === 'assistive';

  for (let i = 0; i < matches.length; i++) {
    const cur = matches[i];
    const start = cur.end;
    const stop = i + 1 < matches.length ? matches[i + 1].index : body.length;
    let text = body.slice(start, stop);
    text = normalizeSlotText(text);
    const gated = /^\[gated\]\s*/i.test(cur.heading);
    let heading = cur.heading
      .replace(/^\[gated\]\s*/i, '')
      .replace(/^\[assistive\]\s*/i, '');
    const slot = {
      id: cur.id,
      where: heading,
      heading: heading,
      text: text
    };
    if (gated) {
      slots_gated.push(slot);
    } else if (forceAssistiveFile || isAssistiveHeading(heading)) {
      slot.audience = 'assistive';
      slots_assistive.push(slot);
    } else {
      slots.push(slot);
    }
  }

  const pageId = fm.id || fm.page_id;
  if (!pageId) {
    throw new Error('words.md frontmatter missing id');
  }

  return {
    page: {
      id: pageId,
      title_for_humans: fm.title_for_humans || pageId,
      live_path: fm.live_path || '',
      live_url: fm.live_url || '',
      body_master_today: fm.body_master_today || '',
      layout_today: fm.layout_today || ''
    },
    _meta: {
      audience: fm.audience || 'customer',
      edit_rule:
        fm.edit_rule ||
        'Edit the plain text under each ## heading. Do not change {#ids}.',
      human_howto:
        fm.human_howto ||
        'Change the words under a heading → save → commit → push/deploy.',
      notes_for_ai: fm.notes_for_ai || ''
    },
    _coverage: {
      status: fm.coverage_status || 'complete',
      inventoried_at: fm.inventoried_at || '',
      sources_scanned: fm.sources_scanned || [],
      checklist: fm.checklist || {},
      omitted_by_policy: fm.omitted_by_policy || []
    },
    seo: {
      document_title: (fm.seo && fm.seo.document_title) || fm.document_title || '',
      meta_description:
        (fm.seo && fm.seo.meta_description) || fm.meta_description || ''
    },
    slots: slots,
    slots_gated: slots_gated,
    slots_assistive: slots_assistive
  };
}

function loadWordsFile(absMd, absYamlFallback) {
  if (fs.existsSync(absMd)) {
    try {
      return parseWordsMarkdown(fs.readFileSync(absMd, 'utf8'));
    } catch (err) {
      const rel = path.relative(root, absMd);
      throw new Error(rel + ': ' + (err && err.message ? err.message : String(err)));
    }
  }
  if (absYamlFallback && fs.existsSync(absYamlFallback)) {
    return parseYaml(fs.readFileSync(absYamlFallback, 'utf8'));
  }
  throw new Error('Missing site-words file: ' + absMd);
}

function normalizeSlotText(text) {
  if (text == null) return '';
  if (typeof text !== 'string') return String(text);
  /* Drop TOC jump anchors that sit between sections (never part of live copy) */
  text = text
    .replace(/\r\n/g, '\n')
    .replace(/<a\s+id="[^"]*"\s*><\/a>/gi, '');
  /* Edges only — keep intentional mid-string newlines for multi-line copy */
  return text.replace(/^\s+/, '').replace(/\s+$/, '');
}

/**
 * In-file TOC: clickable list → same-file anchors (ids match {#slot.id}).
 */
function emitJumpIndex(lines, slots, gatedSlots) {
  const all = [];
  (slots || []).forEach(function (slot) {
    all.push({ slot: slot, gated: false });
  });
  (gatedSlots || []).forEach(function (slot) {
    all.push({ slot: slot, gated: true });
  });
  if (!all.length) return;

  lines.push('## Jump to');
  lines.push('');
  all.forEach(function (entry) {
    const heading = entry.slot.heading || entry.slot.where || entry.slot.id;
    const label = (entry.gated ? '[gated] ' : '') + heading;
    /* Escape brackets in label for markdown links */
    const safeLabel = String(label).replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    lines.push('- [' + safeLabel + '](#' + entry.slot.id + ')');
  });
  lines.push('');
}

function slotsToMap(doc) {
  const map = Object.create(null);
  const lists = [];
  if (Array.isArray(doc.slots)) lists.push(doc.slots);
  if (Array.isArray(doc.slots_assistive)) lists.push(doc.slots_assistive);
  if (Array.isArray(doc.slots_gated)) lists.push(doc.slots_gated);
  lists.forEach(function (list) {
    list.forEach(function (slot) {
      if (!slot || !slot.id) {
        throw new Error('Slot missing id in ' + (doc.page && doc.page.id));
      }
      if (map[slot.id]) {
        throw new Error(
          'Duplicate slot id: ' + slot.id + ' in ' + (doc.page && doc.page.id)
        );
      }
      map[slot.id] = slot;
    });
  });
  return map;
}

function mergeAssistiveFile(doc, pageRel) {
  const assistRel = assistiveWordsPath(pageRel);
  const abs = wordsPath(assistRel);
  if (!fs.existsSync(abs)) {
    return partitionDocSlots(doc);
  }
  const assistDoc = parseWordsMarkdown(fs.readFileSync(abs, 'utf8'));
  doc.slots_assistive = (doc.slots_assistive || []).concat(
    assistDoc.slots_assistive || [],
    assistDoc.slots || []
  );
  return partitionDocSlots(doc);
}

function loadChrome() {
  const doc = loadWordsFile(
    wordsPath(CHROME_FILE),
    wordsPath('common/chrome.yaml')
  );
  return mergeAssistiveFile(doc, CHROME_FILE);
}

function loadPage(pageKey) {
  const rel = PAGE_FILES[pageKey];
  if (!rel) throw new Error('Unknown site-words page key: ' + pageKey);
  const doc = loadWordsFile(wordsPath(rel), wordsPath(legacyYamlPath(rel)));
  return mergeAssistiveFile(doc, rel);
}

function pageKeyForContentEntry(entry) {
  if (entry.id === 'legal') {
    if (entry.output === 'privacy-policy.html') return 'legal-privacy-policy';
    if (entry.output === 'terms-of-use.html') return 'legal-terms-of-use';
  }
  return CONTENT_ID_TO_WORDS[entry.id] || null;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderSlotText(slot, opts) {
  opts = opts || {};
  let text = normalizeSlotText(slot.text);
  if (slot.type === 'template' && opts.templateVars) {
    Object.keys(opts.templateVars).forEach(function (k) {
      text = text.split('{' + k + '}').join(opts.templateVars[k]);
    });
  }
  if (opts.multilineAsBr) {
    return text.split('\n').map(escapeHtml).join('<br>');
  }
  if (opts.escape === false) return text;
  let out = escapeHtml(text);
  const highlights = Array.isArray(slot.highlight) ? slot.highlight : [];
  if (opts.applyHighlightEm && highlights.length) {
    highlights.forEach(function (h) {
      const esc = escapeHtml(h);
      const emClass = opts.highlightClass || '';
      const open = emClass ? '<em class="' + emClass + '">' : '<em>';
      out = out.replace(esc, open + esc + '</em>');
    });
  }
  return out;
}

const MARKER_RE = /\{\{SW:([a-zA-Z0-9_.-]+)\}\}/g;

function applyMarkers(html, slotsById, opts) {
  opts = opts || {};
  return html.replace(MARKER_RE, function (_m, id) {
    const slot = slotsById[id];
    if (!slot) {
      throw new Error('Unknown site-words marker {{SW:' + id + '}}');
    }
    return renderSlotText(slot, opts);
  });
}

function applyDocToHtml(html, doc, opts) {
  return applyMarkers(html, slotsToMap(doc), opts);
}

function listRequiredPageKeys() {
  return Object.keys(PAGE_FILES);
}

function validateDoc(doc, fileLabel) {
  const errors = [];
  if (!doc || !doc.page || !doc.page.id) {
    errors.push(fileLabel + ': missing page.id');
    return errors;
  }
  if (!doc._coverage || !doc._coverage.status) {
    errors.push(fileLabel + ': missing _coverage.status');
  }
  if (!Array.isArray(doc.slots)) {
    errors.push(fileLabel + ': slots must be a list');
    return errors;
  }
  const seen = Object.create(null);
  function checkList(list, label) {
    list.forEach(function (slot, i) {
      if (!slot.id) errors.push(fileLabel + ': ' + label + '[' + i + '] missing id');
      if (!(slot.where || slot.heading)) {
        errors.push(
          fileLabel + ': ' + label + '[' + i + '] (' + slot.id + ') missing heading/where'
        );
      }
      if (slot.text == null && slot.type !== 'list') {
        errors.push(
          fileLabel + ': ' + label + '[' + i + '] (' + slot.id + ') missing text'
        );
      }
      if (slot.id && seen[slot.id]) {
        errors.push(fileLabel + ': duplicate id ' + slot.id);
      }
      if (slot.id) seen[slot.id] = true;
    });
  }
  checkList(doc.slots, 'slots');
  if (Array.isArray(doc.slots_assistive)) {
    checkList(doc.slots_assistive, 'slots_assistive');
  }
  if (Array.isArray(doc.slots_gated)) checkList(doc.slots_gated, 'slots_gated');
  return errors;
}

/**
 * Serialize internal doc → human .words.md (visible) or assistive sibling.
 * opts.mode: 'human' (default) | 'assistive'
 */
function serializeWordsMarkdown(doc, opts) {
  opts = opts || {};
  const mode = opts.mode || 'human';
  partitionDocSlots(doc);

  const p = doc.page || {};
  const cov = doc._coverage || {};
  const meta = doc._meta || {};
  const seo = doc.seo || {};

  const omitted = (cov.omitted_by_policy || [])
    .map(function (o) {
      return String(o)
        .replace(/chrome\.yaml/g, 'chrome.words.md')
        .replace(/chrome\.words\.md/g, 'chrome.words.md');
    })
    .filter(function (o) {
      return o.indexOf('assistive') === -1;
    });
  if (mode === 'human') {
    omitted.push(
      'Screen-reader / frame-title spoken names → sibling *.assistive.words.md (do not edit for marketing)'
    );
  }

  const lines = [];
  lines.push('---');
  lines.push('id: ' + (p.id || 'unknown'));
  if (mode === 'assistive') {
    lines.push('audience: assistive');
    lines.push(
      'title_for_humans: ' +
        JSON.stringify((p.title_for_humans || p.id) + ' — spoken names')
    );
  } else {
    lines.push('title_for_humans: ' + JSON.stringify(p.title_for_humans || p.id));
  }
  lines.push('live_path: ' + JSON.stringify(p.live_path || ''));
  lines.push('live_url: ' + JSON.stringify(p.live_url || ''));
  if (p.body_master_today) {
    lines.push('body_master_today: ' + JSON.stringify(p.body_master_today));
  }
  if (p.layout_today) {
    lines.push('layout_today: ' + JSON.stringify(p.layout_today));
  }
  lines.push('coverage_status: ' + (cov.status || 'complete'));
  if (cov.inventoried_at) {
    lines.push('inventoried_at: ' + JSON.stringify(cov.inventoried_at));
  }
  if (mode === 'assistive') {
    lines.push(
      'human_howto: "Leave this file alone unless fixing accessibility spoken names. Marketing edits go in the main .words.md file."'
    );
  } else {
    lines.push(
      'human_howto: "Edit only visible wording under each ## heading. Leave {#ids} alone. Ignore *.assistive.words.md files."'
    );
  }
  if (omitted.length) {
    lines.push('omitted_by_policy:');
    omitted.forEach(function (o) {
      lines.push('  - ' + JSON.stringify(o));
    });
  }
  if (mode === 'human' && seo.document_title) {
    lines.push('seo:');
    lines.push('  document_title: ' + JSON.stringify(seo.document_title || ''));
    lines.push(
      '  meta_description: ' + JSON.stringify(seo.meta_description || '')
    );
  }
  lines.push('---');
  lines.push('');

  if (mode === 'assistive') {
    lines.push('# ' + (p.title_for_humans || p.id) + ' — spoken names');
    lines.push('');
    lines.push(
      '**Do not use this file for marketing edits.** These lines are spoken by assistive tech, not the main on-screen copy. Edit the main `.words.md` file instead.'
    );
    lines.push('');
    emitJumpIndex(lines, doc.slots_assistive, []);
    emitSlotBlocks(lines, doc.slots_assistive, false);
    return lines.join('\n').replace(/\n+$/, '\n');
  }

  lines.push('# ' + (p.title_for_humans || p.id));
  lines.push('');
  lines.push(
    'Edit the **visible text under each heading**. Leave the `{#…}` code alone.'
  );
  lines.push('');
  lines.push(
    'You only need this file for wording people **see**. Spoken/screen-reader names live in a separate file you can ignore.'
  );
  lines.push('');
  lines.push('Use **Jump to** below to open any line in this file.');
  lines.push('');

  emitJumpIndex(lines, doc.slots, doc.slots_gated);
  emitSlotBlocks(lines, doc.slots, false);
  if (doc.slots_gated && doc.slots_gated.length) {
    lines.push('---');
    lines.push('');
    lines.push('# Hidden / gated copy (not on the live page yet)');
    lines.push('');
    emitSlotBlocks(lines, doc.slots_gated, true);
  }

  return lines.join('\n').replace(/\n+$/, '\n');
}

function emitSlotBlocks(lines, list, gated) {
  (list || []).forEach(function (slot) {
    const heading = slot.heading || slot.where || slot.id;
    const prefix = gated ? '[gated] ' : '';
    lines.push('<a id="' + slot.id + '"></a>');
    lines.push('');
    lines.push('## ' + prefix + heading + ' {#' + slot.id + '}');
    lines.push(normalizeSlotText(slot.text));
    lines.push('');
  });
}

/** Write human .words.md + sibling .assistive.words.md from one doc. */
function writeSiteWordsDoc(doc, pageRel) {
  partitionDocSlots(doc);
  const humanPath = wordsPath(pageRel);
  const assistRel = assistiveWordsPath(pageRel);
  const assistPath = wordsPath(assistRel);
  fs.mkdirSync(path.dirname(humanPath), { recursive: true });
  fs.writeFileSync(humanPath, serializeWordsMarkdown(doc, { mode: 'human' }));
  if (doc.slots_assistive && doc.slots_assistive.length) {
    fs.writeFileSync(
      assistPath,
      serializeWordsMarkdown(doc, { mode: 'assistive' })
    );
  } else if (fs.existsSync(assistPath)) {
    fs.unlinkSync(assistPath);
  }
}

module.exports = {
  SITE_WORDS,
  PAGE_FILES,
  CHROME_FILE,
  CONTENT_ID_TO_WORDS,
  loadChrome,
  loadPage,
  pageKeyForContentEntry,
  slotsToMap,
  applyMarkers,
  applyDocToHtml,
  renderSlotText,
  listRequiredPageKeys,
  validateDoc,
  normalizeSlotText,
  wordsPath,
  MARKER_RE,
  parseWordsMarkdown,
  serializeWordsMarkdown,
  writeSiteWordsDoc,
  loadWordsFile,
  legacyYamlPath,
  assistiveWordsPath,
  isAssistiveHeading,
  partitionDocSlots,
  emitJumpIndex
};
