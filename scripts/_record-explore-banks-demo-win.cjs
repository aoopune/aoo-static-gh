/**
 * Record Explore Banks demo from Windows Node + Chrome.
 * Run via: scripts/record-explore-banks-demo-win.ps1
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const outDir = process.env.DEMO_OUT_DIR;
const baseUrl = process.env.DEMO_BASE_URL || "http://127.0.0.1:8767";
if (!outDir) {
  console.error("DEMO_OUT_DIR required");
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function clearAndType(page, selector, value) {
  const el = page.locator(selector);
  await el.scrollIntoViewIfNeeded();
  await el.click({ clickCount: 3 });
  await sleep(180);
  await el.press("Control+A");
  await el.press("Backspace");
  await sleep(120);
  await el.type(String(value), { delay: 70 });
  await sleep(400);
}

async function main() {
  const browser = await chromium.launch({
    channel: "chrome",
    headless: true,
    args: ["--disable-gpu", "--hide-scrollbars"],
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: outDir,
      size: { width: 1440, height: 900 },
    },
  });

  const page = await context.newPage();
  const url = `${baseUrl.replace(/\/$/, "")}/pages/explore-banks.html`;
  console.log("Opening", url);

  await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  await sleep(1200);

  await page.addStyleTag({
    content: `
      .globalnav, .globalnav-wrapper, #globalnav, nav[aria-label="Global"],
      .shroffin-chat, [data-chat], .chat-launcher, .aoo-chat,
      .site-help-strip, .site-footer {
        display: none !important;
      }
      body { padding-top: 0 !important; }
      .explore-banks-main { padding-top: 24px !important; }
    `,
  });
  await sleep(600);

  await page.locator("#hlc-inputs-heading").scrollIntoViewIfNeeded();
  await sleep(900);

  // Edit a couple of hero fields so viewers see typing
  await clearAndType(page, "#hlc-monthly-income", "1,25,000");
  await clearAndType(page, "#hlc-property-value", "75,00,000");
  await sleep(600);

  await page.locator("#hlc-see-options").scrollIntoViewIfNeeded();
  await sleep(400);
  await page.locator("#hlc-see-options").click();
  await page.locator("#hlc-results-shell:not([hidden])").waitFor({ timeout: 30000 });
  await sleep(1800);

  let rows = await page.locator("tr.hlc-selectable-row").count();
  console.log("Rows after see options:", rows);

  // Filters: Private banks (leaves plenty of rows)
  await page.locator("#hlc-filters-heading").scrollIntoViewIfNeeded();
  await sleep(500);
  await page.evaluate(() => {
    const btn = document.querySelector('.hlc-chip[data-bank-type="Private"]');
    if (btn) btn.click();
  });
  await sleep(1000);
  rows = await page.locator("tr.hlc-selectable-row").count();
  console.log("Rows after Private:", rows);

  // Second control change viewers can see — Charges column group
  await page.evaluate(() => {
    const tab = document.querySelector('.hlc-column-tab[data-group="charges"]');
    if (tab) tab.click();
  });
  await sleep(1100);
  await page.evaluate(() => {
    const tab = document.querySelector('.hlc-column-tab[data-group="essentials"]');
    if (tab) tab.click();
  });
  await sleep(800);

  // Select first 3 banks via the sticky bank cell (same as real user click path)
  await page.locator("#hlc-compare-heading").scrollIntoViewIfNeeded();
  await sleep(500);
  const selected = await page.evaluate(() => {
    const cells = [...document.querySelectorAll("tr.hlc-selectable-row td.hlc-sticky-col")];
    const n = Math.min(3, cells.length);
    for (let i = 0; i < n; i++) {
      cells[i].click();
    }
    return n;
  });
  console.log("Selected banks:", selected);
  await sleep(1200);

  // Apply once
  await page.evaluate(() => {
    const dock = document.getElementById("hlc-apply-dock-btn");
    const btn = document.getElementById("hlc-apply-btn");
    if (dock && !dock.disabled && dock.offsetParent !== null) dock.click();
    else if (btn && !btn.disabled) btn.click();
    else if (btn) btn.click();
  });
  await sleep(2500);

  const videoPath = await page.video().path();
  await page.close();
  await context.close();
  await browser.close();

  const finalPath = path.join(outDir, "explore-banks-demo.webm");
  if (videoPath && fs.existsSync(videoPath)) {
    if (fs.existsSync(finalPath)) fs.unlinkSync(finalPath);
    fs.renameSync(videoPath, finalPath);
    console.log("Saved", finalPath, fs.statSync(finalPath).size);
  } else {
    console.error("No video produced");
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
