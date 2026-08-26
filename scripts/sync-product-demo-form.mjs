#!/usr/bin/env node
/**
 * Inject partials/_product-demo-form.html into both product-demo frames
 * between SPD_INPUTS_FORM markers. One source of truth for the demo inputs card.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const formPath = path.join(root, "partials/_product-demo-form.html");
const frames = [
  "pages/_product-demo-frame.html",
  "pages/_product-demo-frame-mobile.html",
];

const START = "<!-- SPD_INPUTS_FORM_START -->";
const END = "<!-- SPD_INPUTS_FORM_END -->";
const checkOnly = process.argv.includes("--check");

const form = fs.readFileSync(formPath, "utf8").replace(/\r\n/g, "\n").trimEnd() + "\n";
let failed = false;

for (const rel of frames) {
  const file = path.join(root, rel);
  let html = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const i0 = html.indexOf(START);
  const i1 = html.indexOf(END);
  if (i0 < 0 || i1 < 0 || i1 < i0) {
    console.error("Missing markers in", rel);
    process.exit(1);
  }
  const next =
    html.slice(0, i0 + START.length) +
    "\n" +
    form +
    html.slice(i1);
  if (checkOnly) {
    if (next !== html) {
      console.error("Out of sync:", rel);
      failed = true;
    } else {
      console.log("OK", rel);
    }
  } else {
    fs.writeFileSync(file, next);
    console.log("Synced", rel);
  }
}

if (failed) process.exit(1);
