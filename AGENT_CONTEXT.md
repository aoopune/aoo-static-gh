# Context for agents (keep this in mind on every change)

Use this when you start a new conversation or when the user says "we should be on the same line" or "as I mentioned earlier". It captures standing instructions so the agent doesn’t need to be told again (except for the specific change requested).

---

## 1. Tests

- **Keep tests running and intact.** After any code change, run the test suite so nothing is broken.
- **Unit tests:** `node tests/run-unit.js`
- **UI tests:** `npm run test:ui` (uses Playwright; server can start via `node scripts/serve.js` on Windows if needed).
- If a test fails, fix the code or adjust the test only if the requirement has intentionally changed; don’t disable or remove tests without good reason.

---

## 2. Commit and push

- **Every time code is changed,** at the end tell the user exactly how to commit and push, for example:
  ```bash
  git add .
  git commit -m "Short description of the change"
  git push origin main
  ```
- Prefer a concrete commit message that describes the change.

---

## 3. Preview before commit

- The user prefers to **see changes locally first**, then commit and push.
- **Local preview:** Run `npm run serve` in the project folder, then open **http://localhost:8765** (and the specific page, e.g. `/pages/pro-tips.html`). Refresh after edits.
- Don’t assume the user has already committed; remind them they can preview first, then commit/push when satisfied.

---

## 4. Data source (Google Sheet)

- Most content comes from a **Google Sheet** (ApplyOnlyOnce - Loan Data).  
  Spreadsheet ID: `1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g`.
- **Config** and other sheet structures are documented in **CONFIG_REFERENCE.md**, **DATA_SHEET_GUIDE.md**, **SCHEMA_MANIFEST.md**, and page-specific files (e.g. **PRO_TIPS_SHEET_STEPS.md**, **ABOUT_SHEET_STEPS.md**, **QUICK_OVERVIEW_SHEET_STEPS.md**).
- When adding or changing a feature that uses sheet data, say **what to change in the sheet** (which tab, columns, row 1 headers, and example rows) and update the relevant steps doc if needed.

---

## 5. Audit trail

- Record notable changes in **AUDIT_TRAIL.md** (e.g. new feature, layout change, new sheet structure) so there’s a history of what was done and why.

---

## 6. Existing code and behaviour

- **Don’t change existing behaviour** unless the user explicitly asks for it. Only implement what they asked for; leave the rest as-is so the site keeps working the same way elsewhere.

---

## Summary (copy-paste for the user)

You can paste this to the agent at the start of a new task:

- Keep **tests running and intact** (run unit + UI tests after changes).
- Tell me **how to commit and push** after any code change.
- I preview at **http://localhost:8765** with `npm run serve` before committing.
- Data comes from the **Google Sheet**; tell me what to change in the sheet and update the relevant steps doc.
- Keep an **audit trail** in AUDIT_TRAIL.md for notable changes.
- Don’t change existing behaviour except for what I’m asking for.
