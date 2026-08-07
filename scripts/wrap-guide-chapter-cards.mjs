#!/usr/bin/env node
/**
 * One-shot: wrap guide chapter bodies in .guide-chapter-card.
 * Title + subtitle (rule/muted lead) stay outside; optional docs notes stay outside;
 * insurance hero notes go inside; skip tax #joint-loan; fix property #coverage order.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("content/guide");
const CARD_OPEN = '<div class="guide-chapter-card">';
const CARD_CLOSE = "</div>";

const FILES = [
  "overview.body.html",
  "documents.body.html",
  "tax-benefits.body.html",
  "concessions.body.html",
  "complaints.body.html",
  "home-loan-insurance.body.html",
  "property-home-insurance.body.html",
  "credit-life-insurance.body.html",
];

function findMatchingClose(html, openIdx, openTag, closeTag) {
  let i = openIdx;
  let depth = 0;
  const openRe = new RegExp(`<${openTag}(\\s|>)`, "g");
  const closeRe = new RegExp(`</${closeTag}>`, "g");
  while (i < html.length) {
    openRe.lastIndex = i;
    closeRe.lastIndex = i;
    const o = openRe.exec(html);
    const c = closeRe.exec(html);
    if (!c) throw new Error(`No closing </${closeTag}> from ${openIdx}`);
    if (o && o.index < c.index) {
      depth += 1;
      i = o.index + o[0].length;
      continue;
    }
    depth -= 1;
    i = c.index + c[0].length;
    if (depth === 0) return { closeStart: c.index, closeEnd: i };
  }
  throw new Error(`Unbalanced <${openTag}>`);
}

function sliceElement(html, startIdx) {
  const tagMatch = html.slice(startIdx).match(/^<([a-zA-Z0-9-]+)\b/);
  if (!tagMatch) throw new Error(`No tag at ${startIdx}`);
  const tag = tagMatch[1];
  const { closeStart, closeEnd } = findMatchingClose(html, startIdx, tag, tag);
  return { start: startIdx, end: closeEnd, openEnd: html.indexOf(">", startIdx) + 1, closeStart };
}

function nextSignificantChildStart(html, from, containerCloseStart) {
  let i = from;
  while (i < containerCloseStart) {
    if (/\s/.test(html[i])) {
      i += 1;
      continue;
    }
    if (html.startsWith("<!--", i)) {
      const end = html.indexOf("-->", i);
      i = end < 0 ? containerCloseStart : end + 3;
      continue;
    }
    if (html[i] === "<") return i;
    // text node — treat as content start
    return i;
  }
  return -1;
}

function elementClassList(openTagHtml) {
  const m = openTagHtml.match(/\bclass="([^"]*)"/);
  return m ? m[1].split(/\s+/).filter(Boolean) : [];
}

function isOutsideLead(openTagHtml) {
  const classes = elementClassList(openTagHtml);
  if (classes.includes("guide-tile-title")) return "title";
  if (classes.includes("guide-tile-mark")) return "mark";
  if (classes.includes("guide-tile-copy") && (classes.includes("guide-tile-copy--rule") || classes.includes("guide-tile-copy--muted") || classes.includes("guide-calc-lead"))) {
    return "lead";
  }
  // muted lead often: class="guide-tile-copy guide-tile-copy--muted guide-calc-lead"
  if (classes.includes("guide-tile-copy") && classes.includes("guide-calc-lead")) return "lead";
  if (classes.includes("guide-tile-copy") && classes.includes("guide-tile-copy--muted")) return "lead";
  if (classes.includes("guide-tile-copy") && classes.includes("guide-tile-copy--rule")) return "lead";
  return null;
}

function wrapContainerChildren(html, containerStart, opts) {
  const { keepNotesOutside = false, skipIfNoBody = false } = opts;
  const container = sliceElement(html, containerStart);
  const openEnd = container.openEnd;
  const closeStart = container.closeStart;

  // Already wrapped?
  const innerProbe = html.slice(openEnd, closeStart);
  if (innerProbe.includes('class="guide-chapter-card"') || innerProbe.includes("class='guide-chapter-card'")) {
    return { html, delta: 0, wrapped: false, skipped: "already" };
  }

  let cursor = openEnd;
  const outsideEnds = [];

  // Consume leading marks, title, lead (rule/muted), optional note
  let sawLead = false;
  while (true) {
    const childStart = nextSignificantChildStart(html, cursor, closeStart);
    if (childStart < 0) break;
    if (html[childStart] !== "<") break;
    const child = sliceElement(html, childStart);
    const openTag = html.slice(child.start, child.openEnd);
    const kind = isOutsideLead(openTag);
    const classes = elementClassList(openTag);

    if (kind === "mark" || kind === "title") {
      outsideEnds.push(child.end);
      cursor = child.end;
      continue;
    }
    if (kind === "lead") {
      sawLead = true;
      outsideEnds.push(child.end);
      cursor = child.end;
      continue;
    }
    if (keepNotesOutside && classes.includes("guide-tile-note") && sawLead) {
      outsideEnds.push(child.end);
      cursor = child.end;
      continue;
    }
    break;
  }

  if (!sawLead) {
    return { html, delta: 0, wrapped: false, skipped: "no-lead" };
  }

  const bodyStart = nextSignificantChildStart(html, cursor, closeStart);
  if (bodyStart < 0) {
    if (skipIfNoBody) return { html, delta: 0, wrapped: false, skipped: "empty" };
    return { html, delta: 0, wrapped: false, skipped: "empty" };
  }

  // Body = from bodyStart through just before container close, trim trailing whitespace into close
  let bodyEnd = closeStart;
  const beforeClose = html.slice(bodyStart, closeStart);
  const trimTrail = beforeClose.match(/\s*$/);
  if (trimTrail) bodyEnd = closeStart - trimTrail[0].length;

  if (bodyStart >= bodyEnd) {
    return { html, delta: 0, wrapped: false, skipped: "empty" };
  }

  const indentMatch = html.slice(Math.max(0, bodyStart - 40), bodyStart).match(/\n([ \t]*)$/);
  const indent = indentMatch ? indentMatch[1] : "          ";
  const body = html.slice(bodyStart, bodyEnd);
  const wrapped =
    `${CARD_OPEN}\n` +
    body.replace(/^\n/, "") +
    `\n${indent}${CARD_CLOSE}`;

  const newHtml = html.slice(0, bodyStart) + wrapped + html.slice(bodyEnd);
  return { html: newHtml, delta: wrapped.length - (bodyEnd - bodyStart), wrapped: true, skipped: null };
}

function findAll(html, re) {
  const out = [];
  let m;
  const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
  while ((m = r.exec(html))) out.push(m.index);
  return out;
}

function fixPropertyCoverageOrder(html) {
  // Only in property-home-insurance: title, callout, rule → title, rule, callout(+rest later via wrap)
  const marker = 'id="coverage"';
  const secIdx = html.indexOf(marker);
  if (secIdx < 0) return html;
  const magIdx = html.indexOf('<div class="mag-content">', secIdx);
  if (magIdx < 0) return html;
  const mag = sliceElement(html, magIdx);
  const inner = html.slice(mag.openEnd, mag.closeStart);

  const calloutRe = /<p class="guide-callout guide-callout--tight">[\s\S]*?<\/p>\s*/;
  const ruleRe = /<p class="guide-tile-copy guide-tile-copy--rule">[\s\S]*?<\/p>\s*/;
  const titleRe = /<h2 class="guide-tile-title">[\s\S]*?<\/h2>\s*/;

  const t = inner.match(titleRe);
  const c = inner.match(calloutRe);
  const r = inner.match(ruleRe);
  if (!t || !c || !r) return html;
  if (inner.indexOf(c[0]) > inner.indexOf(r[0])) return html; // already ordered

  let rest = inner;
  rest = rest.replace(t[0], "");
  rest = rest.replace(c[0], "");
  rest = rest.replace(r[0], "");
  const rebuilt = t[0] + r[0] + c[0] + rest;
  return html.slice(0, mag.openEnd) + rebuilt + html.slice(mag.closeStart);
}

function processFile(fileName) {
  const filePath = path.join(ROOT, fileName);
  let html = fs.readFileSync(filePath, "utf8");
  if (html.includes("guide-chapter-card")) {
    console.log(`SKIP (already wrapped): ${fileName}`);
    return { fileName, count: (html.match(/guide-chapter-card/g) || []).length };
  }

  if (fileName === "property-home-insurance.body.html") {
    html = fixPropertyCoverageOrder(html);
  }

  let wraps = 0;

  // 1) Every guide-tile article (stage, flip faces, heroes)
  // Process from end to start so indexes stay valid
  const articleStarts = findAll(
    html,
    /<article\b[^>]*\bclass="[^"]*\bguide-tile\b[^"]*"[^>]*>/g
  );

  for (let i = articleStarts.length - 1; i >= 0; i -= 1) {
    const start = articleStarts[i];
    const openEnd = html.indexOf(">", start) + 1;
    const openTag = html.slice(start, openEnd);
    const classes = elementClassList(openTag);
    const isHero = classes.includes("guide-tile--hero");

    // Overview flip backs nest title/lead inside .guide-calc-main — wrap there.
    let wrapAt = start;
    const article = sliceElement(html, start);
    const firstChild = nextSignificantChildStart(html, article.openEnd, article.closeStart);
    if (firstChild >= 0 && html[firstChild] === "<") {
      const child = sliceElement(html, firstChild);
      const childOpen = html.slice(child.start, child.openEnd);
      const childClasses = elementClassList(childOpen);
      if (childClasses.includes("guide-calc-main")) {
        wrapAt = child.start;
      }
    }

    const res = wrapContainerChildren(html, wrapAt, {
      keepNotesOutside: false,
    });
    if (res.wrapped) {
      wraps += 1;
      html = res.html;
    } else if (isHero && res.skipped === "no-lead") {
      throw new Error(`Hero missing lead in ${fileName} at ${start}`);
    }
  }

  // 2) Bare mag-content chapters: those whose first meaningful child is h2.guide-tile-title
  //    and that are NOT only a wrapper around guide-flip / mag-pair (those handled via articles)
  const magStarts = findAll(html, /<div class="mag-content">/g);
  for (let i = magStarts.length - 1; i >= 0; i -= 1) {
    const start = magStarts[i];
    const mag = sliceElement(html, start);
    const inner = html.slice(mag.openEnd, mag.closeStart);
    const trimmed = inner.trimStart();

    // Skip flip / pair shells (cards live on inner articles)
    if (trimmed.startsWith('<div class="guide-flip"') || trimmed.startsWith('<div class="mag-pair"')) {
      continue;
    }
    // Skip if already has a card (e.g. single stage article already wrapped)
    if (inner.includes("guide-chapter-card")) continue;

    // Skip tax joint-loan: detect section id
    const before = html.slice(Math.max(0, start - 200), start);
    if (/id="joint-loan"/.test(before)) continue;

    // Must start with title (optionally after whitespace)
    if (!/^<h2\b[^>]*\bguide-tile-title\b/.test(trimmed)) continue;

    const keepNotesOutside = fileName === "documents.body.html";
    const res = wrapContainerChildren(html, start, { keepNotesOutside, skipIfNoBody: true });
    if (res.wrapped) {
      wraps += 1;
      html = res.html;
    }
  }

  fs.writeFileSync(filePath, html);
  const total = (html.match(/guide-chapter-card/g) || []).length;
  console.log(`OK ${fileName}: +${wraps} wraps, total markers=${total}`);
  return { fileName, count: total, wraps };
}

let grand = 0;
for (const f of FILES) {
  const r = processFile(f);
  grand += r.count;
}
console.log(`TOTAL guide-chapter-card markers: ${grand}`);
if (grand !== 44) {
  console.error(`EXPECTED 44 cards, got ${grand}`);
  process.exit(1);
}
