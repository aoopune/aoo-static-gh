# Record Explore Banks demo using Windows Node + Chrome + Playwright.
# Called from WSL or PowerShell.
$ErrorActionPreference = "Stop"
$temp = Join-Path $env:TEMP "shroffin-demo-record"
$out = Join-Path $temp "out"
New-Item -ItemType Directory -Force -Path $temp | Out-Null
New-Item -ItemType Directory -Force -Path $out | Out-Null

Set-Location $temp
if (-not (Test-Path "node_modules\playwright")) {
  npm init -y | Out-Null
  npm install playwright@1.61.1
}

$env:DEMO_OUT_DIR = $out
$env:DEMO_BASE_URL = "http://127.0.0.1:8767"

$scriptSrc = $args[0]
if (-not $scriptSrc) { throw "Pass path to _record-explore-banks-demo-win.cjs" }
Copy-Item -Force $scriptSrc (Join-Path $temp "record.cjs")

Write-Host "Recording..."
node (Join-Path $temp "record.cjs")
Write-Host "Done. Output in $out"
Get-ChildItem $out
