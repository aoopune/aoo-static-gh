/**
 * Wrapper: records Explore Banks demo via Windows Chrome + Playwright.
 *
 * Usage (from WSL, with site served on :8767):
 *   python3 -m http.server 8767 &
 *   node scripts/record-explore-banks-demo.mjs
 *
 * Output: media/demos/explore-banks-demo.webm
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:util";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cjs = path.join(root, "scripts", "_record-explore-banks-demo-win.cjs");
const ps1 = path.join(root, "scripts", "record-explore-banks-demo-win.ps1");
const outDir = path.join(root, "media", "demos");
fs.mkdirSync(outDir, { recursive: true });

const winCjs = (await execFileAsync("wslpath", ["-w", cjs])).stdout.trim();
const winPs1 = (await execFileAsync("wslpath", ["-w", ps1])).stdout.trim();

// Prefer /mnt/c copy because UNC paths with spaces can break Copy-Item
const winUser = (
  await execFileAsync("cmd.exe", ["/c", "echo %USERNAME%"])
).stdout.trim().replace(/\r/g, "");
const tempCjs = `/mnt/c/Users/${winUser}/AppData/Local/Temp/shroffin-demo-record/record.cjs`;
fs.mkdirSync(path.dirname(tempCjs), { recursive: true });
fs.copyFileSync(cjs, tempCjs);

await new Promise((resolve, reject) => {
  const child = spawn(
    "powershell.exe",
    [
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-Command",
      `Set-Location (Join-Path $env:TEMP 'shroffin-demo-record'); if (-not (Test-Path 'node_modules\\playwright')) { npm init -y | Out-Null; npm install playwright@1.61.1 }; $env:DEMO_OUT_DIR = (Join-Path $env:TEMP 'shroffin-demo-record\\out'); $env:DEMO_BASE_URL = 'http://127.0.0.1:8767'; node record.cjs`,
    ],
    { stdio: "inherit" }
  );
  child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error("exit " + code))));
});

const src = `/mnt/c/Users/${winUser}/AppData/Local/Temp/shroffin-demo-record/out/explore-banks-demo.webm`;
const dest = path.join(outDir, "explore-banks-demo.webm");
fs.copyFileSync(src, dest);
console.log("Copied to", dest);
