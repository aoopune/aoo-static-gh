# Apply Only Once

Education loan comparison platform for applyonlyonce.com. Static site powered by public Google Sheets. Blue & white theme (SBI blue #00B5EF). Hosted on GitHub Pages.

## Repo

- **Local path**: `/home/parth/Projects/applyonlyonce`
- **GitHub Pages URL**: `https://<username>.github.io/applyonlyonce/`
- **Spreadsheet ID**: `1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g` (public, no API key)
- **Config**: The **Config** sheet in the same spreadsheet drives all preferences (cache, contact info, column visibility, etc.). See `CONFIG_REFERENCE.md`.

### Config workflow (column visibility)

1. Run `node scripts/generate-config.js` to generate `config/config.csv`.
2. Paste the CSV contents into the Config sheet in Google Sheets.
3. Edit `value` to `false` for any `*.column.COLNAME.visible` key to hide that column.
4. The website fetches the Config sheet and applies settings dynamically (no redeploy needed).

## Structure

- `index.html` – Landing (Page 1)
- `pages/` – compare, questions, faq, schemes, government-schemes, document-checklist, results, about, quick-overview
- `css/style.css` – Shared styles (SBI blue & white)
- `js/app.js` – Shared: header/footer, sheet fetch, config
- `js/*.js` – Page-specific logic
- `404.html` – Not found
- `tests/` – Unit, functional, UI (Playwright)
- `SCHEMA_MANIFEST.md` – Sheet schemas

## Run locally

```bash
npm start
# Serves on http://localhost:8765 (or set PORT=8080 to use 8080)
# Open http://localhost:8765
```

## Deploy to GitHub Pages

**Quick deploy** (stage, commit, push — same build as http://localhost:8765 goes live on the domain):

```bash
# From aoo-static-gh folder:
npm run deploy
# Or with a custom commit message:
npm run deploy -- "Your commit message"
```

Or run the script directly:
- **PowerShell**: `.\scripts\deploy.ps1` or `.\scripts\deploy.ps1 "Your message"`
- **Git Bash**: `./scripts/deploy.sh` or `./scripts/deploy.sh "Your message"`

One-time setup (if not done already):

1. Initialize git (if not done): `git init`
2. Add and commit: `git add . && git commit -m "Initial commit"`
3. Create GitHub repo (e.g. `aoo-static-gh` or `applyonlyonce`) and add remote: `git remote add origin https://github.com/YOUR_USERNAME/REPO.git && git branch -M main && git push -u origin main`
4. Settings → Pages → Source: Deploy from branch → Branch: main → Folder: / (root) → Save.
5. Site live at your Pages URL (e.g. https://applyonlyonce.com if CNAME is set).

## Tests

- **Unit**: `npm test` (run-unit.js)
- **UI (local)**: `npm run test:ui` — starts server on port 8765 if not running
- **UI (deployed)**: After deployment, run `BASE_URL=https://YOUR_USERNAME.github.io/applyonlyonce/ npm run test:ui` to verify the live site. Or set `BASE_URL` and run `npm run test:deployed`.
