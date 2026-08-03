/**
 * Capture Explore Banks product UI for learn-more story slots.
 * Uses Windows Chrome headless from WSL (Playwright Chromium lacks system libs here).
 *
 * Usage:
 *   node scripts/capture-learn-more-product.mjs
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "images", "product");
const chromeCandidates = [
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
  "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
];

const chrome = chromeCandidates.find((p) => fs.existsSync(p));
if (!chrome) {
  console.error("No Windows Chrome/Edge found.");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const CAPTURE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Product capture</title>
  <style>
    html, body { margin: 0; background: #f5f5f7; overflow: hidden; }
    iframe { border: 0; width: 1440px; height: 900px; display: block; }
  </style>
</head>
<body>
  <iframe id="f" src="/pages/explore-banks.html" title="product"></iframe>
  <script>
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode") || "compare";

    function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

    async function ready(doc) {
      const style = doc.createElement("style");
      style.textContent = \`
        .globalnav, .globalnav-wrapper, #globalnav, nav[aria-label="Global"],
        .shroffin-chat, [data-chat], .chat-launcher, .aoo-chat {
          display: none !important;
        }
        body { padding-top: 0 !important; }
        .explore-banks-main { padding-top: 28px !important; }
      \`;
      doc.documentElement.appendChild(style);
      await sleep(1200);
    }

    async function seeOptions(doc) {
      const btn = [...doc.querySelectorAll("button")].find((b) =>
        /see options/i.test(b.textContent || "")
      );
      if (btn) btn.click();
      for (let i = 0; i < 40; i++) {
        const shell = doc.getElementById("hlc-results-shell");
        if (shell && !shell.hasAttribute("hidden")) break;
        await sleep(250);
      }
      await sleep(900);
    }

    async function selectBanks(doc, n) {
      const rows = [...doc.querySelectorAll("tr.hlc-selectable-row")];
      for (const row of rows.slice(0, n)) {
        row.click();
        await sleep(120);
      }
      await sleep(400);
    }

    async function run() {
      const f = document.getElementById("f");
      await new Promise((r) => {
        if (f.contentDocument && f.contentDocument.readyState === "complete") r();
        else f.addEventListener("load", r, { once: true });
      });
      await sleep(800);
      const doc = f.contentDocument;
      if (!doc) {
        document.title = "FAIL-NO-DOC";
        return;
      }
      await ready(doc);

      if (mode === "details") {
        document.title = "READY-DETAILS";
        return;
      }

      await seeOptions(doc);

      if (mode === "compare") {
        document.title = "READY-COMPARE";
        return;
      }

      if (mode === "pick") {
        await selectBanks(doc, 3);
        document.title = "READY-PICK";
        return;
      }

      if (mode === "decide") {
        await selectBanks(doc, 4);
        document.title = "READY-DECIDE";
        return;
      }

      document.title = "READY";
    }

    run().catch((err) => {
      console.error(err);
      document.title = "FAIL";
    });
  </script>
</body>
</html>`;

function wslpathWin(posixPath) {
  // Prefer wslpath when available
  return execFileAsync("wslpath", ["-w", posixPath]).then((r) => r.stdout.trim());
}

function chromeShot(url, outFile, opts = {}) {
  return new Promise(async (resolve, reject) => {
    const winOut = await wslpathWin(outFile);
    const args = [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=2",
      `--window-size=${opts.width || 1440},${opts.height || 900}`,
      `--virtual-time-budget=${opts.budget || 12000}`,
      `--screenshot=${winOut}`,
      url,
    ];
    const child = spawn(chrome, args, { stdio: ["ignore", "pipe", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => {
      err += d.toString();
    });
    child.on("exit", (code) => {
      if (code === 0 || fs.existsSync(outFile)) resolve({ code, err });
      else reject(new Error(`chrome exit ${code}: ${err}`));
    });
  });
}

async function cropWithPython(src, dest, box) {
  const script = `
from PIL import Image
im = Image.open(${JSON.stringify(src)})
# account for deviceScaleFactor=2
scale = 2
box = tuple(int(v * scale) for v in ${JSON.stringify(box)})
# box = left, top, right, bottom
im.crop(box).save(${JSON.stringify(dest)})
print("cropped", ${JSON.stringify(dest)}, box)
`;
  const tmp = path.join(outDir, "_crop_tmp.py");
  fs.writeFileSync(tmp, script);
  try {
    await execFileAsync("python3", [tmp]);
  } finally {
    fs.unlinkSync(tmp);
  }
}

async function main() {
  // Serve capture HTML from a tiny sidecar on 8766, while product stays on 8765
  // Capture page must be same-origin as explore-banks for iframe DOM access.
  // So write into pages/ and hit 8765.
  const capturePath = path.join(root, "pages", "_product-capture.html");
  fs.writeFileSync(capturePath, CAPTURE_HTML);
  console.log("wrote", capturePath);

  const shots = [
    { mode: "details", file: "raw-details.png" },
    { mode: "compare", file: "raw-compare.png" },
    { mode: "pick", file: "raw-pick.png" },
    { mode: "decide", file: "raw-decide.png" },
  ];

  for (const shot of shots) {
    const out = path.join(outDir, shot.file);
    const url = `http://127.0.0.1:8765/pages/_product-capture.html?mode=${shot.mode}`;
    console.log("capturing", shot.mode, "...");
    await chromeShot(url, out, { budget: 16000 });
    console.log("saved", out, fs.statSync(out).size);
  }

  // Apply page direct
  const applyOut = path.join(outDir, "raw-apply.png");
  await chromeShot("http://127.0.0.1:8765/pages/apply.html", applyOut, {
    budget: 8000,
  });
  console.log("saved", applyOut, fs.statSync(applyOut).size);

  // Crops tuned for 1440x900 CSS px (×2 in file)
  // details card approx center
  try {
    await cropWithPython(path.join(outDir, "raw-details.png"), path.join(outDir, "story-compare.png"), [
      180, 70, 1260, 820,
    ]);
  } catch (e) {
    console.warn("PIL crop skipped:", e.message);
    // fall back: copy raw
    fs.copyFileSync(path.join(outDir, "raw-compare.png"), path.join(outDir, "story-compare.png"));
  }

  // Prefer compare/pick/decide crops from raw frames — results sit lower on page
  const map = [
    ["raw-compare.png", "story-compare.png", [40, 220, 1400, 880]],
    ["raw-pick.png", "story-pick.png", [40, 220, 1400, 880]],
    ["raw-decide.png", "story-decide.png", [40, 220, 1400, 880]],
    ["raw-details.png", "story-details.png", [220, 160, 1220, 720]],
    ["raw-apply.png", "story-apply.png", [80, 60, 1360, 860]],
  ];

  for (const [src, dest, box] of map) {
    try {
      await cropWithPython(path.join(outDir, src), path.join(outDir, dest), box);
    } catch (e) {
      console.warn("crop fail", dest, e.message);
      fs.copyFileSync(path.join(outDir, src), path.join(outDir, dest));
    }
  }

  console.log("done", fs.readdirSync(outDir).filter((f) => f.startsWith("story-")));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
