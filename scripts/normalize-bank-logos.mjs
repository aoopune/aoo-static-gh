#!/usr/bin/env node
/**
 * Replace bank logos with symbol/watermark-only marks (praveenpuglia/indian-banks)
 * and export uniform 128×128 PNGs for the compare table.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "images", "banks");
const ETC_OUT = path.resolve(
  ROOT,
  "../etc/creatives/brand/images/Banks logos"
);
const SIZE = 128;
const PAD = 12;
const FIT = SIZE - PAD * 2;
const PRAVEEN =
  "https://raw.githubusercontent.com/praveenpuglia/indian-banks/main/assets/logos";

/** [slug, ifsc, optional "png"] */
const BANKS = [
  ["axis-bank", "utib"],
  ["bandhan-bank", "bdbl"],
  ["bank-of-baroda", "barb"],
  ["bank-of-india", "bkid"],
  ["bank-of-maharashtra", "mahb"],
  ["canara-bank", "cnrb"],
  ["central-bank-of-india", "cbin", "png"],
  ["city-union-bank", "ciub"],
  ["csb-bank", "csbk"],
  ["dcb-bank", "dcbl"],
  ["dhanlaxmi-bank", "dlxb"],
  ["federal-bank", "fdrl"],
  ["hdfc-bank", "hdfc"],
  ["icici-bank", "icic"],
  ["idbi-bank", "ibkl"],
  ["idfc-first-bank", "idfb"],
  ["indian-bank", "idib"],
  ["indian-overseas-bank", "ioba"],
  ["indusind-bank", "indb"],
  ["jammu-kashmir-bank", "jaka"],
  ["karnataka-bank", "karb"],
  ["karur-vysya-bank", "kvbl"],
  ["kotak-mahindra-bank", "kkbk"],
  ["nainital-bank", "ntbl", "png"],
  ["punjab-national-bank", "punb"],
  ["punjab-sind-bank", "psib"],
  ["rbl-bank", "ratn"],
  ["south-indian-bank", "sibl"],
  ["state-bank-of-india", "sbin"],
  ["tamilnad-mercantile-bank", "tmbl"],
  ["uco-bank", "ucba"],
  ["union-bank-of-india", "ubin"],
  ["yes-bank", "yesb"],
];

async function fetchAsset(code, ext) {
  const url = `${PRAVEEN}/${code}/symbol.${ext}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "ShroffinLogoNormalize/1.0" },
  });
  if (!res.ok) throw new Error(`fetch failed ${url} ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function toSquarePng(raw) {
  const resized = await sharp(raw)
    .resize(FIT, FIT, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const meta = await sharp(resized).metadata();
  const w = meta.width || FIT;
  const h = meta.height || FIT;
  const top = Math.max(0, Math.floor((SIZE - h) / 2));
  const bottom = Math.max(0, SIZE - h - top);
  const left = Math.max(0, Math.floor((SIZE - w) / 2));
  const right = Math.max(0, SIZE - w - left);
  return sharp(resized)
    .extend({
      top,
      bottom,
      left,
      right,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

function removeOldFormats(dir, slug) {
  for (const old of fs.readdirSync(dir)) {
    if (old.startsWith(slug + ".") && old !== slug + ".png") {
      try {
        fs.unlinkSync(path.join(dir, old));
      } catch (_) {}
    }
  }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const report = [];

  for (const [slug, code, kind] of BANKS) {
    const ext = kind === "png" ? "png" : "svg";
    const raw = await fetchAsset(code, ext);
    const outPng = await toSquarePng(raw);
    fs.writeFileSync(path.join(OUT, `${slug}.png`), outPng);
    removeOldFormats(OUT, slug);
    report.push({ slug, source: `${PRAVEEN}/${code}/symbol.${ext}` });
    console.log(`OK ${slug}.png (${outPng.length}B)`);
  }

  if (fs.existsSync(ETC_OUT)) {
    for (const [slug] of BANKS) {
      fs.copyFileSync(path.join(OUT, `${slug}.png`), path.join(ETC_OUT, `${slug}.png`));
      removeOldFormats(ETC_OUT, slug);
    }
    const manifestPath = path.join(ETC_OUT, "manifest.json");
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      for (const bank of manifest.banks) {
        bank.file = `${bank.slug}.png`;
        bank.format = "png";
        bank.source = "praveenpuglia-symbol";
        bank.note = "128×128 watermark-only PNG normalized for compare table";
      }
      manifest.updated = "2026-08-14";
      manifest.description =
        "Home-loan compare bank logos — symbol/watermark only, 128×128 PNG";
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
    }
  }

  fs.writeFileSync(
    path.join(OUT, "normalize-report.json"),
    JSON.stringify(report, null, 2) + "\n"
  );
  console.log(`\nNormalized ${BANKS.length} logos → ${SIZE}×${SIZE} PNG`);
}

main().catch(function (err) {
  console.error(err);
  process.exit(1);
});
