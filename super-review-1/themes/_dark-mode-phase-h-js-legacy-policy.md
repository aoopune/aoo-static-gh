# Dark / Light / Default — Phase H JS inject matrix + legacy policy (PREP-09 + PREP-13)

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Job:** Prove redesigned v1 is free of post-paint white injectors; lock education / `style.css` / prototypes as light islands. **No live theme boot. No dark CSS. No footer pill. No PWA dark splash ship.**

---

### 0. Executive status

**Phase H complete.**

| Stream | Result |
|---|---|
| H1 Script × page matrix | Built — three dangerous injectors + search for other `createElement('style')` light chrome |
| H2 v1 proof (24 paths) | **0 contaminated** — no load of the three injectors on any path in `data/redesigned-pages.json` |
| H3 Redesigned Apply paint path | Confirmed CSS-only (`shroffin-apply.css` + `home-loan-apply.js` — no style sheet inject) |
| H4 Legacy / education policy | Locked — leave light; do not delete; do not theme in v1 |
| H5 Regression lock | `npm run check:theme-js-injectors` (+ wired into `lint:responsive`) |

**No v1 code fix required** — contamination was not found. Prefer policy + proof over rewriting `SCOPE_CSS` (honored).

---

### 1. Inputs honored

| Input | Honored how |
|---|---|
| Founder visuals (locked) | No cool-blue canvas; no full dark hex invent; v1 = 24 redesigned; education out |
| Phase A | Home follows theme; education / legacy out of v1 |
| Phase B | Injectors already classified `out_of_v1`; teal `#0d9488` ≠ shell blue — not “harmonized” |
| Phase C | Boot stub stays inert; `check:theme-boot` green |
| Phase E / F / G | Not reopened; Apply CSS ownership stands; Explore plate / wordmark / PWA plan untouched |
| Token discipline | No dark twins; no live-resolving boot; no education delete |

---

### 2. Dangerous injectors (what they paint)

| Script | Inject mechanism | Hard light / legacy chrome |
|---|---|---|
| `js/aoo-loan-table-standalone.js` | `SCOPE_CSS` → `document.createElement('style')` | Full light private token block; `#ffffff !important` table cells |
| `js/apply-flow.js` | `ensureApplyFlowStyles()` | `--aoo-surface: #ffffff`; accent teal `#0d9488` / `#0f766e` |
| `js/apply-button-iframe.js` | `ensureApplyFlowStyles()` (iframe float chrome) | `#0d9488` apply pill; `#e2e8f0` / `#334155` download pill |

**Why they matter under dark-first:** they paint **after** first paint → white / teal flash on any page that loads them while `html[data-theme="dark"]` is resolved.

**Teal law:** `#0d9488` is education/legacy accent — **not** shell blue `#0071e3`. Do not retarget redesigned Apply to this teal.

---

### 3. H1 — Script × page matrix

| Script | Loads on (paths) | In redesigned 24? | Risk under dark-first | v1 action |
|---|---|---|---|---|
| `js/aoo-loan-table-standalone.js` | `table-embed.html` (dynamic `TABLE_SCRIPT_URL`); reached via `education-loan.html` iframe `src="table-embed.html"` | **No** | High white `SCOPE_CSS` flash if themed chrome wraps embed | **Leave light island**; do not load on v1; do not rewrite SCOPE_CSS in H |
| `js/apply-flow.js` | `education-loan.html` (`<script defer src="js/apply-flow.js?v=18">`) | **No** | Modal/toast white + teal after paint | **Leave light island** |
| `js/apply-button-iframe.js` | `table-embed.html` (dynamic `APPLY_BUTTON_SCRIPT_URL`) | **No** | Floating teal/slate chrome after paint | **Leave light island** |
| `js/home-loan-apply.js` | `pages/apply.html` (redesigned) | **Yes** (Apply only) | **None from inject sheet** — no `createElement('style')` / no SCOPE_CSS | **Keep** — paints via CSS tokens in `css/shroffin-apply.css` |
| Other `js/**` `createElement('style')` + large light hex | **Only the three above** (repo scan 2026-08-21) | N/A | N/A | No additional v1 injectors found |

#### Legacy `css/style.css` stack (not injectors; still out of v1)

These load `css/style.css` and stay **light islands** (PREP-13). None are in the redesigned 24:

| Path | Notes |
|---|---|
| `education-loan.html` | Education product home; iframe → `table-embed.html`; loads `apply-flow.js` |
| `table-embed.html` | Embed host for table + apply-button injectors |
| `pages/compare.html` | Legacy education compare |
| `pages/results.html` | Legacy education results |
| `pages/faq.html` | Legacy |
| `pages/schemes.html` | Legacy |
| `pages/quick-overview.html` | Legacy |
| `pages/document-checklist.html` | Legacy |
| `pages/questions.html` | Legacy |
| `pages/pro-tips.html` | Legacy |
| `pages/government-schemes.html` | Legacy |
| `404.html` | Utility error page on `style.css` — optional later dark map (PREP-13b); not blocking |

**Prototypes:** `pages/_*.html` — **23** files — **out of v1**; no theme boot required.

**Keep markers (unchanged):** `EDUCATION_LOAN_PRODUCT` / `LEGACY_EDUCATION_PAGES` in nav/home comments — do **not** delete education code.

---

### 4. H2 — Proof: all 24 redesigned paths clean

**Source of truth for v1 paths:** `data/redesigned-pages.json` (24 entries).

**Deterministic proof (ran 2026-08-21):**

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"

# HTML references outside review/golden
rg -n "aoo-loan-table-standalone|apply-flow\\.js|apply-button-iframe" \
  --glob "*.html" --glob "!super-review-1/**" --glob "!content/_golden/**"
# → education-loan.html (apply-flow.js)
# → table-embed.html (TABLE_SCRIPT_URL + APPLY_BUTTON_SCRIPT_URL)

# Per redesigned path
node -e '
const fs=require("fs");
const pages=JSON.parse(fs.readFileSync("data/redesigned-pages.json","utf8"));
const re=/aoo-loan-table-standalone|apply-flow\\.js|apply-button-iframe/g;
const bad=[];
for (const p of pages){
  const html=fs.readFileSync(p.path,"utf8");
  const m=[...html.matchAll(re)].map(x=>x[0]);
  if(m.length) bad.push({path:p.path,m});
}
console.log(JSON.stringify({total:pages.length,contaminated:bad.length,bad},null,2));
'
# → {"total":24,"contaminated":0,"bad":[]}

# Pipeline must not stitch injectors into v1
rg -n "aoo-loan-table-standalone|apply-flow\\.js|apply-button-iframe" \
  templates/ partials/ content/ scripts/ data/ || true
# → (none)

# Regression lock
npm run check:theme-js-injectors
npm run check:theme-boot
npm run check:nav
```

**24 paths verified clean:**

`index.html`, `pages/explore-banks.html`, `pages/apply.html`, `pages/calculators.html`, `pages/calculators/emi.html`, `pages/calculators/how-much-loan.html`, `pages/calculators/loan-amount.html`, `pages/calculators/prepayment.html`, `pages/calculators/balance-transfer.html`, `pages/calculators/tenure.html`, `pages/calculators/tax-savings.html`, `pages/project-approvals.html`, `pages/guide.html`, `pages/guide-documents.html`, `pages/tax-benefits.html`, `pages/concessions.html`, `pages/home-loan-insurance.html`, `pages/property-home-insurance.html`, `pages/credit-life-insurance.html`, `pages/home-loan-complaints.html`, `pages/about.html`, `privacy-policy.html`, `terms-of-use.html`, `sitemap.html`.

---

### 5. H3 — Redesigned Apply paints via CSS (not injectors)

| Layer | Path | Role |
|---|---|---|
| Shell CSS | `css/shroffin-shell.css` | Shared chrome tokens |
| Apply CSS | `css/shroffin-apply.css` | Apply surfaces / controls (Phase E / PREP-06 ownership) |
| Behavior JS | `js/home-loan-apply.js` | DOM/behavior only — **no** `createElement('style')` light sheet |
| Nav JS | `js/shroffin-nav.js` | Shell nav |

**Does not load:** `apply-flow.js`, `apply-button-iframe.js`, `aoo-loan-table-standalone.js`.

---

### 6. H4 — Legacy policy lock (PREP-13 confirmation)

**Policy sentence (locked):**

> For v1 themes, education loan surfaces, `css/style.css` consumers, `table-embed.html`, and `pages/_*.html` prototypes remain **light islands**. They are out of theme scope. Do **not** delete education code or remove `EDUCATION_LOAN_PRODUCT` / `LEGACY_EDUCATION_PAGES` keep markers. Do **not** mass-theme `css/style.css` or rewrite `SCOPE_CSS` until education re-enters product scope. Direct URL visits may show light chrome under a future dark-first shell — **accepted documented risk** (PREP-09b). Education stays hidden from redesigned primary nav per repo rules.

| Decision | Value |
|---|---|
| Theme education / legacy in v1? | **No** |
| Delete education / table-embed / injectors? | **No** |
| Retarget SCOPE_CSS to `--shroffin-*` in Phase H? | **No** (last resort; not needed — v1 does not load them) |
| If injector appears on a v1 path later? | Fail `check:theme-js-injectors`; prefer **remove load** from v1; rewrite SCOPE_CSS only if load is required |

---

### 7. What Phase H did **not** ship

- Live theme boot / customer `data-theme`
- Shell or Explore dark CSS value sets
- Footer appearance icon pill
- Live `site.webmanifest` dark splash (Phase G plan → Phase I)
- Education / `style.css` dark rewrite
- Bank logo recolor / Phase F–G reopen
- Invented cool-blue canvas or full dark hex tables

---

### 8. Gate impact

| PREP | Status after Phase H |
|---|---|
| **PREP-09** | **DONE** — matrix + 24-path clear + Apply CSS proof + check script |
| **PREP-13** | **CONFIRMED** — leave light; keep markers; risk accepted |
| **PREP-09b** | Documented defer_with_risk (education white islands if URL-hit under future dark chrome) |
| Next | **Phase I** gate (PREP-17) — only then activate boot + footer pill + ship manifest/`theme-color` |

---

### 9. Verify commands (copy-paste)

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run check:theme-js-injectors
npm run check:theme-boot
npm run check:nav
```

**Expected:** all exit 0; injectors message reports 24 redesigned paths clear; theme-boot + nav synchronized across 24 pages.

Machine record: `_dark-mode-phase-h-js-legacy-policy-ledger.json`
