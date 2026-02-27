# Deploy to GitHub: stage, commit, push. GitHub Pages will publish from main.
# Run from repo root (aoo-static-gh). Same content as http://localhost:8765 goes live on the domain.
# Usage: .\scripts\deploy.ps1 [commit message]
#    or: npm run deploy [-- "your message"]

param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$CommitMessage
)

$ErrorActionPreference = "Stop"
$repoRoot = if ($PSScriptRoot) { Join-Path $PSScriptRoot ".." } else { Get-Location }
Set-Location $repoRoot

# Default commit message if none provided
$msg = if ($CommitMessage -and $CommitMessage.Count -gt 0) {
  $CommitMessage -join " "
} else {
  "Deploy: update site"
}

Write-Host "Repo: $repoRoot" -ForegroundColor Cyan
Write-Host "Commit message: $msg" -ForegroundColor Cyan

# Stage all changes
Write-Host "`nStaging all changes..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) { throw "git add failed" }

$status = git status --porcelain
if (-not $status) {
  Write-Host "No changes to commit. Working tree clean." -ForegroundColor Green
  exit 0
}

# Commit
Write-Host "Committing..." -ForegroundColor Yellow
git commit -m $msg
if ($LASTEXITCODE -ne 0) { throw "git commit failed" }

# Push (deploys to GitHub; Pages will update the domain)
Write-Host "Pushing to origin main..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) { throw "git push failed" }

Write-Host "`nDone. Pushed to GitHub; Pages will update the site (e.g. https://applyonlyonce.com)." -ForegroundColor Green
