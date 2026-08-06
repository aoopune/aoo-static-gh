const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://127.0.0.1:8767/pages/explore-banks.html", {
    waitUntil: "networkidle",
    timeout: 90000,
  });
  await page.locator("#hlc-see-options").click();
  await page.locator("#hlc-results-shell:not([hidden])").waitFor({ timeout: 30000 });
  await page.waitForTimeout(1500);
  const before = await page.locator("tr.hlc-selectable-row").count();
  const beforeSticky = await page.locator("tr.hlc-selectable-row td.hlc-sticky-col").count();
  await page.locator('.hlc-chip[data-product-filter="womenApplicant"]').click();
  await page.waitForTimeout(800);
  await page.locator('.hlc-chip[data-bank-type="Private"]').click();
  await page.waitForTimeout(1000);
  const after = await page.locator("tr.hlc-selectable-row").count();
  const afterSticky = await page.locator("tr.hlc-selectable-row td.hlc-sticky-col").count();
  const status = await page.locator("#hlc-status").innerText().catch(() => "");
  const matchMeta = await page.locator("#hlc-match-meta").innerText().catch(() => "");
  const bodySample = (await page.locator("#hlc-compare-body").innerHTML()).slice(0, 500);
  console.log(
    JSON.stringify({ before, beforeSticky, after, afterSticky, status, matchMeta, bodySample }, null, 2)
  );
  await page.screenshot({ path: "debug-after-filters.png", fullPage: true });
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
