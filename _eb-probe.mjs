import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 1400 }, deviceScaleFactor: 2 });
await page.goto("http://localhost:8099/pages/explore-banks.html", { waitUntil: "load" });
await page.waitForTimeout(1500);
const out = await page.evaluate(() => {
  const r = (n) => Math.round(n * 10) / 10;
  const pick = (id) => document.getElementById(id).closest(".hlc-field");
  const report = {};
  for (const id of ["hlc-property-value", "hlc-card-limits", "hlc-monthly-income"]) {
    const field = pick(id);
    if (!field) continue;
    const row = field.querySelector(".hlc-field-label-row");
    const anchor = field.querySelector(".hlc-field-help-anchor");
    const btn = field.querySelector(".hlc-field-help");
    const mark = field.querySelector(".hlc-field-help-mark");
    const q = field.querySelector(".hlc-field-label-qualifier");
    const cs = (el) => {
      const s = getComputedStyle(el);
      return {
        display: s.display,
        w: r(el.getBoundingClientRect().width),
        h: r(el.getBoundingClientRect().height),
        pad: s.padding,
        margin: s.margin,
        minW: s.minWidth,
        minH: s.minHeight,
        ws: s.whiteSpace,
      };
    };
    const lines = [...row.querySelectorAll("*")].length;
    report[id] = {
      rowW: r(row.getBoundingClientRect().width),
      anchor: cs(anchor),
      button: cs(btn),
      mark: cs(mark),
      qualifier: q ? { ...cs(q), rects: [...q.getClientRects()].map((x) => `${r(x.x)}+${r(x.width)}@${r(x.y)}`) } : null,
      anchorRect: [...anchor.getClientRects()].map((x) => `${r(x.x)}+${r(x.width)}@${r(x.y)}`),
      nodes: lines,
    };
  }
  return report;
});
console.log(JSON.stringify(out, null, 2));
await browser.close();
