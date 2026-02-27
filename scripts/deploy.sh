#!/usr/bin/env bash
# Deploy to GitHub: stage, commit, push. GitHub Pages will publish from main.
# Run from repo root (aoo-static-gh). Same content as http://localhost:8765 goes live on the domain.
# Usage: ./scripts/deploy.sh [commit message]

set -e
cd "$(dirname "$0")/.."
MSG="${*:-Deploy: update site}"

echo "Repo: $(pwd)"
echo "Commit message: $MSG"

echo ""
echo "Staging all changes..."
git add .

if [ -z "$(git status --porcelain)" ]; then
  echo "No changes to commit. Working tree clean."
  exit 0
fi

echo "Committing..."
git commit -m "$MSG"

echo "Pushing to origin main..."
git push origin main

echo ""
echo "Done. Pushed to GitHub; Pages will update the site (e.g. https://applyonlyonce.com)."
