import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const OUT = "/tmp/official-headers";
fs.mkdirSync(OUT, { recursive: true });

const BANKS = [
  ["bank-of-maharashtra", "https://bankofmaharashtra.in/"],
  ["indian-overseas-bank", "https://www.iob.in/"],
  ["indian-bank", "https://www.indianbank.in/"],
  ["punjab-sind-bank", "https://punjabandsind.bank.in/"],
  ["tamilnad-mercantile-bank", "https://www.tmb.in/"],
  ["uco-bank", "https://www.ucobank.com/"],
  ["south-indian-bank", "https://www.southindianbank.com/"],
  ["karur-vysya-bank", "https://www.kvb.co.in/"],
  ["dhanlaxmi-bank", "https://www.dhanbank.com/"],
  ["nainital-bank", "https://www.nainitalbank.co.in/"],
  ["bank-of-india", "https://bankofindia.co.in/"],
  ["federal-bank", "https://www.federal.bank.in/"],
  ["bank-of-baroda", "https://www.bankofbaroda.in/"],
  ["punjab-national-bank", "https://pnb.bank.in/"],
  ["idbi-bank", "https://www.idbi.com/"],
  ["dcb-bank", "https://www.dcbbank.com/"],
  ["indusind-bank", "https://www.indusind.com/"],
  ["kotak-mahindra-bank", "https://www.kotak.com/en/home.html"],
  ["union-bank-of-india", "https://www.unionbankofindia.co.in/"],
  ["yes-bank", "https://www.yesbank.in/"],
  ["indian-overseas-bank-alt", "https://www.iob.bank.in/"],
  ["karnataka-bank", "https://karnatakabank.com/"],
  ["city-union-bank", "https://www.cityunionbank.com/"],
  ["central-bank-of-india", "https://www.centralbankofindia.co.in/"],
];

const LOGO_SEL = [
  'header img',
  'nav img',
  '.logo img',
  '#logo img',
  'a[class*="logo"] img',
  'img[alt*="logo" i]',
  'img[alt*="Logo"]',
  'img[src*="logo" i]',
  'header svg',
  '.navbar-brand img',
  '.site-logo img',
  '.brand img',
].join(",");

async function saveBuffer(file, buf) {
  fs.writeFileSync(file, buf);
}

async function capture(page, slug, url) {
  const result = { slug, url, status: "fail" };
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 35000 });
    await page.waitForTimeout(2500);
    const headerPath = path.join(OUT, `${slug}-header.png`);
    await page.screenshot({ path: headerPath, clip: { x: 0, y: 0, width: 900, height: 180 } });
    result.header = headerPath;

    const loc = page.locator(LOGO_SEL).first();
    if (await loc.count()) {
      const src = await loc.evaluate((el) => {
        if (el.tagName.toLowerCase() === "img") return el.currentSrc || el.src || "";
        return "";
      });
      if (src && src.startsWith("http")) result.logoSrc = src;
      try {
        await loc.screenshot({ path: path.join(OUT, `${slug}-logo.png`) });
        result.logoShot = `${slug}-logo.png`;
      } catch (_) {}
    }
    result.status = "ok";
    result.finalUrl = page.url();
  } catch (e) {
    result.error = String(e.message || e).slice(0, 180);
  }
  return result;
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  ignoreHTTPSErrors: true,
});
const page = await context.newPage();
const report = [];
for (const [slug, url] of BANKS) {
  console.log("==", slug, url);
  const r = await capture(page, slug, url);
  console.log(" ", r.status, r.finalUrl || r.error || "");
  report.push(r);
}
fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));
await browser.close();
console.log("done", report.filter((r) => r.status === "ok").length, "/", BANKS.length);
