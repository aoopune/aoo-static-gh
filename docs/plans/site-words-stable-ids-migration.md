# Site-words stable labels + IDs — full migration plan

**Status:** build-ready recipe (planning only — do not run apply until map is reviewed and frozen).  
**Repo:** `aoo-static-gh`  
**Working directory for every command:**

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
```

**Problem (root):** `##` headings and `{#ids}` were auto-derived from live sentences (`t.idle_money_saves_interest_about_0_15_1_higher_th.123`). When body copy changes, Jump-to and IDs stay stuck on yesterday’s wording.

**Goal:** Every slot uses a stable role + place + short hint. Body = editable live copy. `##` + `{#id}` = durable UI map.

---

## Disk baseline (re-counted 2026-08-27)

| Metric | Count |
|---|---|
| `*.words.md` files | **52** |
| Slots (`## … {#id}`) | **2228** |
| Main (non-assistive, non-runtime) | **2031** |
| Assistive | **129** |
| Runtime | **68** |
| Unique slot ids | **2145** (44 ids appear in >1 file — guide TOC / legal / sitemap overlap) |
| Already stable (non-`t.*`: `nav.*`, `footer.*`, runtime `rel.*`/`col.*`/…) | **132** |
| Sentence-derived `t.*` (all have numeric suffix) | **2096** |
| Chrome junk (build-script / theme JS sucked into words) | **14** |
| `{{SW:…}}` marker occurrences | **2333** |
| Unique marker ids | **2048** |
| Markers with no words slot | **0** |
| Words slots with no marker and no JS key | **40** (mostly runtime/chrome applied via JS/`site-chrome.js`, plus junk + `t.get_help.93`) |
| HTML files containing markers | **28** (25 `content/**` + 3 `partials/**`; **0** under `templates/layouts/**`) |
| JS runtime key call sites | `src/home-loan-compare.js`, `src/apf-project-search.js`, `js/home-loan-apply.js` |

**Expected post-migration slot count:** **2214** (= 2228 − 14 junk deletes). Any other delta must be explained line-by-line in the apply report.

**Worst samples (ground truth for naming):**

| File | Today | Target shape |
|---|---|---|
| `explore.words.md` | `## Text — Idle money saves interest… {#t.idle_money_saves_interest_about_0_15_1_higher_th.123}` | `## Helper — OD vs term loan {#explore.helper.od_vs_term}` |
| `documents.words.md` | `## Text — Last 6 months’ bank statements… {#t.last_6_months_bank_statements_…}` | `## Text — Salaried — bank statements {#guide.documents.text.salaried_bank_statements}` |
| `privacy-policy.words.md` | `## Text — We do not sell your personal data… {#t.we_do_not_sell_your_personal_data_…}` | `## Text — What we do not do — no sale {#legal.privacy.text.no_sale}` |
| `chrome.words.md` | `## text {#t.function_var_key_shroffin_color_preference…}` (JS body) | **Delete slot**; restore real `<script>` in footer partial |

---

## Architecture locks (do not reopen)

1. Source of truth remains `site-words/**/*.words.md`.
2. HTML keeps `{{SW:id}}`; apply via `scripts/lib/site-words.js`.
3. No parallel naming system; no dual-id period left behind after apply.
4. Education / legacy nav stays commented in `partials/global-nav.html` — rename markers inside comments; do not delete education code; do not surface education in redesigned UI.
5. Theme / motion / responsive / customer wording **values** unchanged except where junk JS must leave site-words (structure fix, not copy rewrite).
6. Contacts values → `data/site-contacts.json`; bank numbers → data JSON.
7. `src/generated/*` and `js/apply-success-copy.generated.js` are outputs — edit runtime `.words.md` + JS keys, then rebuild packs.

---

## A. Full inventory method

### A1. Slot inventory (id + file + heading + body preview)

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
node scripts/site-words-inventory.js --out data/site-words-inventory.json
node scripts/site-words-inventory.js --csv --out data/site-words-inventory.csv
```

**Expected:** `slot_count: 2228`, `file_count: 52`, `by_kind.main ≈ 2031`, `assistive ≈ 129`, `runtime ≈ 68`.

### A2. Marker inventory

```bash
node scripts/site-words-inventory.js --markers --out data/site-words-markers.json
```

**Expected:** `marker_occurrences: 2333`, `unique_ids: 2048`, files = the 28 listed in §D.

### A3. Orphans

```bash
node scripts/site-words-inventory.js --orphans --out data/site-words-orphans.json
```

**Expected today:**

- `markers_missing_words`: `[]`
- `js_missing_words`: `[]`
- `words_unused`: ~40 ids (runtime/chrome helpers + junk + `t.get_help.93`)

### A4. Sentence-derived detector (pre/post gate)

```bash
node scripts/check-site-words-stable-ids.js --report data/site-words-unstable-ids.json
```

Fails if any non-allowlisted id matches:

- `^t\.` **or**
- numeric suffix `\.\d{2,}$` **or**
- body-slug heuristic (≥5 snake tokens in last segment) **or**
- junk patterns (`function_`, `class_`, `rendernav`, `renderfooter`, …)

### A5. One-shot recount (sanity)

```bash
python3 - <<'PY'
import re
from pathlib import Path
h=re.compile(r'^##\s+(.+?)\s*\{#([a-zA-Z0-9_.-]+)\}\s*$', re.M)
sw=re.compile(r'\{\{SW:([a-zA-Z0-9_.-]+)\}\}')
slots=sum(len(h.findall(p.read_text())) for p in Path('site-words').rglob('*.words.md'))
marks=0
for base in ['content','partials','templates']:
  b=Path(base)
  if not b.exists(): continue
  for f in b.rglob('*.html'):
    marks += len(sw.findall(f.read_text(encoding='utf-8', errors='ignore')))
print('slots', slots, 'markers', marks)
PY
```

---

## B. Locked naming spec

### B1. Human `##` label

```text
{Role} — {Location}[ — {short hint}]
```

- Role first (controlled vocabulary).
- Location = product place (Hero, Filters — income, Results table, OD vs term, Prefooter, § Who we are, …) — **not** the live sentence.
- Optional short durable hint when needed for disambiguation.
- Jump-to label = this same `##` text (rebuild via `serializeWordsMarkdown`).

### B2. Role vocabulary (finite)

| Role token (id) | Human label | Use for |
|---|---|---|
| `title` | Title | Page H1 / main title |
| `lead` | Lead | Supporting lead under title |
| `heading` | Heading | H2/H3 section titles |
| `text` | Text | Body prose / spans that are not helpers |
| `list_item` | List item | `<li>` copy |
| `table` | Table | Table cell / header cell prose |
| `button` | Button | `<button>` / primary actions |
| `link` | Link | `<a>` labels (same-site) |
| `nav` | Nav | Nav / flyout / localnav items |
| `field_label` | Field label | Visible field labels |
| `placeholder` | Placeholder | Input placeholders |
| `helper` | Helper | Field help / option notes / tips |
| `note` | Note | Secondary notes / legal footnotes |
| `error` | Error | Error messages |
| `empty` | Empty | Empty states |
| `status` | Status | Status / progress strings |
| `column` | Column | Table column headers |
| `option` | Option | Dropdown / radio / select options |
| `badge` | Badge | Small status badges |
| `modal_title` | Modal title | Dialog titles |
| `modal_body` | Modal body | Dialog body fragments |
| `recap` | Recap | Review/summary lines |
| `sr` | Screen reader | `aria-label` / visually-hidden spoken names |
| `frame_title` | Frame title | `document.title` / frame titles |
| `alt` | Alt | Image alt |
| `landmark` | Landmark | `aria-label` on landmarks |

### B3. Machine id grammar

```text
{area}.{role}.{place_hint}
```

Rules:

- lowercase; `.` separators; `snake_case` tokens
- **never** embed the full marketing sentence
- **never** use opaque numeric suffixes (`.123`) — use `_primary` / `_secondary` / `_mobile` / `_line1` when needed
- unique within the **merged** page doc (main + assistive + gated for that page key)
- globally unique **preferred**; where the same chrome string is shared, keep one chrome id

### B4. Area prefixes

| Area prefix | Words file(s) |
|---|---|
| *(none — keep existing)* `nav.*` `footer.*` `localnav.*` `prefooter.*` `help_strip.*` | `common/chrome.words.md` already-stable ids |
| `chrome.` | New renames of chrome `t.*` only (`chrome.alt.logo`, `chrome.footer.disclaimer_summary`, …) |
| `home.` | `pages/home/home*.words.md` |
| `explore.` | `pages/explore/explore.words.md` + assistive |
| `explore.` (runtime keep short role keys **prefixed**) | `explore.runtime.words.md` → e.g. `explore.rel.spouse` |
| `review.` | `pages/explore/review*.words.md` |
| `apply.` | `pages/explore/apply*.words.md` |
| `apply.success.` | `apply-success.runtime.words.md` |
| `about.` | `pages/about/*` |
| `guide.overview.` … `guide.complaints.` | each guide page |
| `calc.hub.` `calc.emi.` `calc.how_much_loan.` `calc.loan_amount.` `calc.prepayment.` `calc.balance_transfer.` `calc.tenure.` `calc.tax_savings.` | calculators |
| `apf.` | project-finder main + runtime |
| `legal.privacy.` `legal.terms.` | company legal |
| `sitemap.` | sitemap |

### B5. Freeze decision — already-stable ids

**Keep without rename** (allowlist in check script):

- All chrome ids matching `^(nav|footer|localnav|prefooter|help_strip)\.`
- Runtime keys **after** optional prefix step (see §B6)

**Must rename:** every `t.*` id.

**Must delete:** 14 chrome junk ids (list in §I / §E Phase 0).

### B6. Runtime key policy (locked)

Runtime keys are already role-based (`rel.spouse`, `col.rate`, `btn.find`, `title`). For one grammar everywhere:

| Today | After |
|---|---|
| `rel.spouse` | `explore.rel.spouse` |
| `col.rate` | `explore.col.rate` |
| `btn.find` | `apf.btn.find` |
| `title` (apply success) | `apply.success.title` |
| `body.docs_before` | `apply.success.body.docs_before` |
| … | same pattern: prefix + keep rest |

Update `ui("…")` / `swApply("…")` in the three JS sources in the same apply pass. Rebuild packs. No dual keys.

### B7. Examples (locked shapes)

**Chrome nav (unchanged):**

```markdown
## Top bar — Guide {#nav.guide}
Guide
```

**Chrome footer rename:**

```markdown
## Footer — Disclaimer summary {#chrome.footer.disclaimer_summary}
Shroffin is not a bank, a Non-Banking Financial Company…
```

**Explore body:**

```markdown
## Helper — OD vs term loan {#explore.helper.od_vs_term}
Idle funds save interest, but costs 0.15–1% above term loans.
```

**Explore assistive:**

```markdown
## Screen reader — Filters — applicant mode {#explore.sr.applicant_mode}
Applicant mode
```

**Explore runtime:**

```markdown
## Option — Co-applicant — Spouse {#explore.rel.spouse}
Spouse
```

**Guide:**

```markdown
## Heading — Documents — hero {#guide.documents.heading.hero}
Know your file is ready so the application does not stall for papers.
```

**Legal:**

```markdown
## Text — Scope — India only {#legal.privacy.text.scope_india_only}
India only
```

**Calculator:**

```markdown
## Field label — Inputs — loan amount {#calc.emi.field_label.loan_amount}
Loan amount
```

**Apply success:**

```markdown
## Modal title — Success {#apply.success.title}
Application received
```

### B8. Honesty / disambiguation

If two slots share role+place, disambiguate in **both** label and id (`_line1` / `_line2`, `_primary` / `_secondary`, section slug). Do **not** invent uniqueness from old copy snippets.

---

## C. Migration map format

**Path:** `data/site-words-rename-map.json` (committed after freeze).

```json
{
  "version": 1,
  "generated_at": "2026-08-27",
  "baseline_slot_count": 2228,
  "expected_slot_count_after": 2214,
  "entries": [
    {
      "old_id": "t.idle_money_saves_interest_about_0_15_1_higher_th.123",
      "new_id": "explore.helper.od_vs_term",
      "new_heading": "Helper — OD vs term loan",
      "action": "rename",
      "words_files": [
        "site-words/pages/explore/explore.words.md"
      ],
      "marker_files": [
        "content/pages/explore-banks.body.html"
      ],
      "js_files": [],
      "body_preview": "Idle money saves interest. About 0.15–1% higher than term loan",
      "confidence": "high",
      "notes": ""
    },
    {
      "old_id": "t.function_var_key_shroffin_color_preference_var_r.92",
      "new_id": null,
      "new_heading": null,
      "action": "delete_restore_script",
      "words_files": ["site-words/common/chrome.words.md"],
      "marker_files": ["partials/site-footer.html"],
      "js_files": [],
      "body_preview": "(function () { var KEY = 'shroffin-color-preference'; …",
      "confidence": "high",
      "notes": "Restore literal script into partials/site-footer.html; remove {{SW:…}}"
    },
    {
      "old_id": "rel.spouse",
      "new_id": "explore.rel.spouse",
      "new_heading": "Option — Co-applicant — Spouse",
      "action": "rename",
      "words_files": ["site-words/pages/explore/explore.runtime.words.md"],
      "marker_files": [],
      "js_files": ["src/home-loan-compare.js"],
      "body_preview": "Spouse",
      "confidence": "high",
      "notes": "runtime prefix"
    }
  ],
  "allowlist_keep": [
    "nav.guide",
    "footer.privacy",
    "prefooter.cta",
    "help_strip.chat"
  ]
}
```

**Invariants enforced by apply script:**

1. Every old id appears **exactly once** as a source (`action` ∈ `rename|delete|delete_restore_script|keep`).
2. Every `new_id` is unique across all rename targets (or explicitly namespaced).
3. `keep` entries only for allowlisted already-stable ids (optional explicit list).
4. Main + assistive: if the same `old_id` exists in both, **one** map entry lists **both** `words_files`.
5. Deterministic: same inventory + same propose seed → same draft map.

**CSV companion** (founder review): `data/site-words-rename-map.csv`  
columns: `old_id,new_id,new_heading,action,words_files,marker_files,js_files,confidence,notes`

---

## D. Exact files to touch

### D1. All 52 words files (rewrite headings/ids/Jump-to/anchors)

```
site-words/common/chrome.words.md
site-words/pages/about/about.assistive.words.md
site-words/pages/about/about.words.md
site-words/pages/company/privacy-policy.assistive.words.md
site-words/pages/company/privacy-policy.words.md
site-words/pages/company/sitemap.words.md
site-words/pages/company/terms-of-use.assistive.words.md
site-words/pages/company/terms-of-use.words.md
site-words/pages/explore/apply-success.runtime.words.md
site-words/pages/explore/apply.assistive.words.md
site-words/pages/explore/apply.words.md
site-words/pages/explore/explore.assistive.words.md
site-words/pages/explore/explore.runtime.words.md
site-words/pages/explore/explore.words.md
site-words/pages/explore/review.assistive.words.md
site-words/pages/explore/review.words.md
site-words/pages/guide/complaints.assistive.words.md
site-words/pages/guide/complaints.words.md
site-words/pages/guide/concessions.assistive.words.md
site-words/pages/guide/concessions.words.md
site-words/pages/guide/credit-life-insurance.assistive.words.md
site-words/pages/guide/credit-life-insurance.words.md
site-words/pages/guide/documents.assistive.words.md
site-words/pages/guide/documents.words.md
site-words/pages/guide/home-loan-insurance.assistive.words.md
site-words/pages/guide/home-loan-insurance.words.md
site-words/pages/guide/overview.assistive.words.md
site-words/pages/guide/overview.words.md
site-words/pages/guide/property-home-insurance.assistive.words.md
site-words/pages/guide/property-home-insurance.words.md
site-words/pages/guide/tax-benefits.assistive.words.md
site-words/pages/guide/tax-benefits.words.md
site-words/pages/home/home.assistive.words.md
site-words/pages/home/home.words.md
site-words/pages/tools/calculators/balance-transfer.assistive.words.md
site-words/pages/tools/calculators/balance-transfer.words.md
site-words/pages/tools/calculators/emi.assistive.words.md
site-words/pages/tools/calculators/emi.words.md
site-words/pages/tools/calculators/how-much-loan.assistive.words.md
site-words/pages/tools/calculators/how-much-loan.words.md
site-words/pages/tools/calculators/hub.assistive.words.md
site-words/pages/tools/calculators/hub.words.md
site-words/pages/tools/calculators/loan-amount.assistive.words.md
site-words/pages/tools/calculators/loan-amount.words.md
site-words/pages/tools/calculators/prepayment.assistive.words.md
site-words/pages/tools/calculators/prepayment.words.md
site-words/pages/tools/calculators/tax-savings.assistive.words.md
site-words/pages/tools/calculators/tax-savings.words.md
site-words/pages/tools/calculators/tenure.assistive.words.md
site-words/pages/tools/calculators/tenure.words.md
site-words/pages/tools/project-finder/project-finder.runtime.words.md
site-words/pages/tools/project-finder/project-finder.words.md
```

### D2. HTML / partials with `{{SW:}}` (28)

```
content/guide/complaints.body.html
content/guide/concessions.body.html
content/guide/credit-life-insurance.body.html
content/guide/documents.body.html
content/guide/home-loan-insurance.body.html
content/guide/overview.body.html
content/guide/property-home-insurance.body.html
content/guide/tax-benefits.body.html
content/legal/privacy-policy.body.html
content/legal/terms-of-use.body.html
content/pages/about.body.html
content/pages/apply-contact.body.html
content/pages/apply.body.html
content/pages/calculators-balance-transfer.body.html
content/pages/calculators-emi.body.html
content/pages/calculators-how-much-loan.body.html
content/pages/calculators-loan-amount.body.html
content/pages/calculators-prepayment.body.html
content/pages/calculators-tax-savings.body.html
content/pages/calculators-tenure.body.html
content/pages/calculators.body.html
content/pages/explore-banks.body.html
content/pages/home.body.html
content/pages/project-approvals.body.html
content/pages/sitemap.body.html
partials/global-nav.html
partials/guide-localnav.html
partials/site-footer.html
```

`templates/layouts/**`: **no** `{{SW:}}` today — verify stays zero after migration.

### D3. JS sources (keys)

```
src/home-loan-compare.js
src/apf-project-search.js
js/home-loan-apply.js
```

### D4. Regenerated outputs (do not hand-edit)

```
src/generated/explore-ui-copy.js
src/generated/apf-ui-copy.js
js/apply-success-copy.generated.js
js/home-loan-compare.bundle.js
js/apf-project-search.bundle.js
```

Plus every stitched page under `pages/`, `index.html`, `privacy-policy.html`, `terms-of-use.html`, `sitemap.html`, and `content/_golden/**` after bless.

### D5. New scripts / data / docs

```
scripts/site-words-inventory.js
scripts/site-words-propose-rename-map.js
scripts/site-words-apply-rename-map.js
scripts/check-site-words-stable-ids.js
data/site-words-inventory.json
data/site-words-markers.json
data/site-words-orphans.json
data/site-words-rename-map.json
data/site-words-rename-map.csv
data/site-words-apply-report.json
site-words/_schema.md                    (edit)
site-words/INDEX.md                      (edit — note stable ids)
docs/HOW_TO_EDIT_SITE_WORDS.md           (edit)
docs/CONTENT_SOURCE_OF_TRUTH.md          (edit — one line on stable ids)
package.json                             (add check script wiring)
```

### D6. Optional lib touch

`scripts/lib/site-words.js` — **no grammar change required** for apply to work. Optional: export `SITE_WORDS_ID_RE` shared with check script (snippet in §F).

---

## E. Exact commands (in order)

### Phase 0 — Quarantine chrome junk + restore theme script

Junk ids to **delete** from `chrome.words.md` (bodies are build/theme code, not copy):

```
t.function_var_key_shroffin_color_preference_var_r.92
t.explore_banks_prefooter_title.94
t.explore_banks_prefooter_lead.95
t.join_n_function_rendersitehelpstrip_filerel_if_s.96
t.theme_boot_slot_from_partials_theme_boot_html_ph.97
t.rendernav_filerel_t.98
t.function_applyfooter_html_filerel_return_replace.99
t.renderfooter_filerel_t.100
t.function_applyguidelocalnav_html_filerel_if_guid.101
t.renderguidelocalnav_filerel_t.102
t.function_applythemeboot_html_return_replacemarke.103
t.renderthemeboot_null_function_assertchrome_html_.104
t.class_globalnav_test_html_throw_new_error_refusi.105
t.class_site_footer_test_html_throw_new_error_refu.106
```

Also delete unused `t.get_help.93` (orphan; landmark already `help_strip.landmark`).

**Footer fix:** replace

```html
<script>{{SW:t.function_var_key_shroffin_color_preference_var_r.92}}</script>
```

with the literal theme-toggle IIFE currently stored as that slot’s body (extract once during Phase 0 apply; ~1161 chars). Keep behavior identical (`localStorage['shroffin-color-preference']`, buttons `[data-theme-pref]`).

Real chrome `t.*` that **rename** (not delete) — 30 ids including logo alt, legacy education nav labels inside comments, theme aria-labels, disclaimer block, official resources links, copyright.

```bash
# Phase 0 can be a dedicated first apply of a map subset, or part of full apply.
# Prefer one apply with mixed actions after map freeze.
```

### Phase 1 — Inventory

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
node scripts/site-words-inventory.js --out data/site-words-inventory.json
node scripts/site-words-inventory.js --csv --out data/site-words-inventory.csv
node scripts/site-words-inventory.js --markers --out data/site-words-markers.json
node scripts/site-words-inventory.js --orphans --out data/site-words-orphans.json
node scripts/check-site-words-stable-ids.js --report data/site-words-unstable-ids.json || true
```

### Phase 2 — Propose map (deterministic draft)

```bash
node scripts/site-words-propose-rename-map.js \
  --inventory data/site-words-inventory.json \
  --markers data/site-words-markers.json \
  --out data/site-words-rename-map.json \
  --csv data/site-words-rename-map.csv
```

### Phase 3 — Human review (required before apply)

1. Open `data/site-words-rename-map.csv`.
2. Filter `confidence!=high` and all `legal.*` / long guide prose.
3. Edit `new_id` / `new_heading` only; do not invent second systems.
4. Re-validate:

```bash
node scripts/site-words-apply-rename-map.js --map data/site-words-rename-map.json --validate-only
```

### Phase 4 — Apply (atomic)

```bash
# Optional safety branch / commit before this step (user-driven).
node scripts/site-words-apply-rename-map.js \
  --map data/site-words-rename-map.json \
  --write \
  --report data/site-words-apply-report.json
```

Apply rewrites: words (main+assistive+runtime) via parse→mutate→`writeSiteWordsDoc` / serialize; all `{{SW:old}}`→`{{SW:new}}`; JS string keys; footer script restore; deletes junk slots.

### Phase 5 — Rebuild + checks

```bash
npm run build:site-words-runtime
npm run build:compare
npm run build:apf
npm run build:nav
npm run build:footer
npm run build:guide-localnav
npm run build:content -- --write
# After intentional main changes, bless goldens page-by-page or batch with care:
# npm run bless:content -- --only=…   (requires --only; do not whole-site bless by accident)

npm run check:site-words
node scripts/check-site-words-stable-ids.js
node scripts/site-words-inventory.js --orphans --out data/site-words-orphans-after.json
npm run check:nav
npm run check:footer
npm run check:guide-localnav
npm run check:content
npm run check:legal-content
npm run lint:responsive
```

### Phase 6 — Founder verify loop

```bash
npm run words
# open http://localhost:8765/
# spot-check matrix in §G8
```

### Phase 7 — Docs

Update `_schema.md`, `HOW_TO_EDIT_SITE_WORDS.md`, `INDEX.md`, `CONTENT_SOURCE_OF_TRUTH.md` per §H.

Wire package.json:

```json
"check:site-words-stable-ids": "node scripts/check-site-words-stable-ids.js"
```

Add to `lint:responsive` **after** migration is green (not before, or lint fails on baseline).

---

## F. Paste-ready code

### F1. `scripts/site-words-inventory.js` (full)

```js
#!/usr/bin/env node
/**
 * Inventory site-words slots, {{SW:}} markers, and orphans.
 * Usage:
 *   node scripts/site-words-inventory.js --out data/site-words-inventory.json
 *   node scripts/site-words-inventory.js --csv --out data/site-words-inventory.csv
 *   node scripts/site-words-inventory.js --markers --out data/site-words-markers.json
 *   node scripts/site-words-inventory.js --orphans --out data/site-words-orphans.json
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const SITE_WORDS = path.join(root, 'site-words');
const args = process.argv.slice(2);
const outArg = args.find((a) => a.startsWith('--out='));
const outPath = outArg ? outArg.slice(6) : null;
const asCsv = args.includes('--csv');
const markersOnly = args.includes('--markers');
const orphansOnly = args.includes('--orphans');

const HEADING_RE = /^##\s+(.+?)\s*\{#([a-zA-Z0-9_.-]+)\}\s*$/gm;
const SW_RE = /\{\{SW:([a-zA-Z0-9_.-]+)\}\}/g;
const JS_KEY_RE = /(?:ui|swApply|uiHtml)\(\s*["']([a-zA-Z0-9_.-]+)["']/g;

function kindOf(rel) {
  if (/\.runtime\.words\.md$/i.test(rel)) return 'runtime';
  if (/\.assistive\.words\.md$/i.test(rel)) return 'assistive';
  return 'main';
}

function walkWords() {
  const slots = [];
  function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((ent) => {
      const abs = path.join(dir, ent.name);
      if (ent.isDirectory()) return walk(abs);
      if (!/\.words\.md$/i.test(ent.name)) return;
      const rel = path.relative(root, abs).replace(/\\/g, '/');
      const text = fs.readFileSync(abs, 'utf8');
      const matches = [];
      let m;
      HEADING_RE.lastIndex = 0;
      while ((m = HEADING_RE.exec(text))) {
        matches.push({ index: m.index, end: m.index + m[0].length, heading: m[1].trim(), id: m[2] });
      }
      matches.forEach((cur, i) => {
        const stop = i + 1 < matches.length ? matches[i + 1].index : text.length;
        let body = text.slice(cur.end, stop).replace(/<a\s+id="[^"]*"\s*><\/a>/gi, '').trim();
        const preview = body.split(/\n/)[0].slice(0, 120);
        slots.push({
          id: cur.id,
          heading: cur.heading,
          body_preview: preview,
          file: rel,
          kind: kindOf(rel)
        });
      });
    });
  }
  walk(SITE_WORDS);
  return slots;
}

function walkMarkers() {
  const hits = [];
  ['content', 'partials', 'templates'].forEach((base) => {
    const dir = path.join(root, base);
    if (!fs.existsSync(dir)) return;
    function walk(d) {
      fs.readdirSync(d, { withFileTypes: true }).forEach((ent) => {
        const abs = path.join(d, ent.name);
        if (ent.isDirectory()) return walk(abs);
        if (!/\.html?$/i.test(ent.name)) return;
        const rel = path.relative(root, abs).replace(/\\/g, '/');
        const text = fs.readFileSync(abs, 'utf8');
        let m;
        SW_RE.lastIndex = 0;
        while ((m = SW_RE.exec(text))) {
          hits.push({ id: m[1], file: rel, index: m.index });
        }
      });
    }
    walk(dir);
  });
  return hits;
}

function walkJsKeys() {
  const files = [
    'src/home-loan-compare.js',
    'src/apf-project-search.js',
    'js/home-loan-apply.js'
  ];
  const keys = [];
  files.forEach((rel) => {
    const abs = path.join(root, rel);
    if (!fs.existsSync(abs)) return;
    const text = fs.readFileSync(abs, 'utf8');
    let m;
    JS_KEY_RE.lastIndex = 0;
    while ((m = JS_KEY_RE.exec(text))) {
      keys.push({ id: m[1], file: rel });
    }
  });
  return keys;
}

function writeOut(obj) {
  const json = JSON.stringify(obj, null, 2) + '\n';
  if (outPath) {
    fs.mkdirSync(path.dirname(path.resolve(root, outPath)), { recursive: true });
    fs.writeFileSync(path.resolve(root, outPath), json);
    console.log('Wrote ' + outPath);
  } else {
    process.stdout.write(json);
  }
}

function toCsv(slots) {
  const esc = (s) => '"' + String(s == null ? '' : s).replace(/"/g, '""') + '"';
  const lines = ['id,heading,body_preview,file,kind'];
  slots.forEach((s) => {
    lines.push([s.id, s.heading, s.body_preview, s.file, s.kind].map(esc).join(','));
  });
  return lines.join('\n') + '\n';
}

const slots = walkWords();
const markers = walkMarkers();
const jsKeys = walkJsKeys();

if (asCsv) {
  const csv = toCsv(slots);
  if (outPath) {
    fs.writeFileSync(path.resolve(root, outPath), csv);
    console.log('Wrote ' + outPath);
  } else process.stdout.write(csv);
  process.exit(0);
}

if (markersOnly) {
  const byId = {};
  markers.forEach((h) => {
    if (!byId[h.id]) byId[h.id] = [];
    if (!byId[h.id].includes(h.file)) byId[h.id].push(h.file);
  });
  writeOut({
    marker_occurrences: markers.length,
    unique_ids: Object.keys(byId).length,
    by_id: byId,
    hits: markers
  });
  process.exit(0);
}

if (orphansOnly) {
  const slotIds = new Set(slots.map((s) => s.id));
  const markerIds = new Set(markers.map((m) => m.id));
  const jsIds = new Set(jsKeys.map((k) => k.id));
  writeOut({
    markers_missing_words: [...markerIds].filter((id) => !slotIds.has(id)).sort(),
    js_missing_words: [...jsIds].filter((id) => !slotIds.has(id)).sort(),
    words_unused: [...slotIds]
      .filter((id) => !markerIds.has(id) && !jsIds.has(id))
      .sort()
  });
  process.exit(0);
}

const byKind = { main: 0, assistive: 0, runtime: 0 };
slots.forEach((s) => {
  byKind[s.kind] = (byKind[s.kind] || 0) + 1;
});
writeOut({
  slot_count: slots.length,
  file_count: new Set(slots.map((s) => s.file)).size,
  unique_ids: new Set(slots.map((s) => s.id)).size,
  by_kind: byKind,
  slots
});
```

### F2. `scripts/check-site-words-stable-ids.js` (full)

```js
#!/usr/bin/env node
/**
 * Fail if site-words still contain sentence-derived / junk ids.
 * Usage:
 *   node scripts/check-site-words-stable-ids.js
 *   node scripts/check-site-words-stable-ids.js --report data/site-words-unstable-ids.json
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const SITE_WORDS = path.join(root, 'site-words');
const args = process.argv.slice(2);
const reportArg = args.find((a) => a.startsWith('--report='));
const reportPath = reportArg ? reportArg.slice(9) : null;

const HEADING_RE = /^##\s+(.+?)\s*\{#([a-zA-Z0-9_.-]+)\}\s*$/gm;

/** Already-stable chrome prefixes (pre-migration allowlist). */
const KEEP_PREFIX =
  /^(nav|footer|localnav|prefooter|help_strip)\./;

const JUNK_RE =
  /(function_|class_|renderthemeboot|rendernav|renderfooter|renderguide|join_n|theme_boot_slot|explore_banks_prefooter)/;

/** After migration, all ids must match this (or KEEP_PREFIX during transition — remove KEEP-only once done). */
const STABLE_RE =
  /^(?:(?:nav|footer|localnav|prefooter|help_strip)|(?:chrome|home|explore|review|apply|about|apf|sitemap|guide\.[a-z0-9_]+|calc\.[a-z0-9_]+|legal\.(?:privacy|terms)|apply\.success)(?:\.[a-z][a-z0-9_]*)+)$/;

function isUnstable(id) {
  if (JUNK_RE.test(id)) return { bad: true, reason: 'junk' };
  if (/^t\./.test(id)) return { bad: true, reason: 't_prefix' };
  if (/\.\d{2,}$/.test(id)) return { bad: true, reason: 'numeric_suffix' };
  const last = id.split('.').pop() || '';
  if (last.split('_').filter(Boolean).length >= 5) {
    return { bad: true, reason: 'long_slug' };
  }
  if (KEEP_PREFIX.test(id)) return { bad: false };
  /* Runtime mid-migration may still be unprefixed; after apply require STABLE_RE */
  if (!STABLE_RE.test(id) && !/^(rel|occ|col|ui|btn|status|note|charge|facility|purpose|body|help|noun|title|lead|empty|link|phone|ref_label|contact_window)(\.|$)/.test(id)) {
    return { bad: true, reason: 'grammar' };
  }
  return { bad: false };
}

const bad = [];
function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((ent) => {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) return walk(abs);
    if (!/\.words\.md$/i.test(ent.name)) return;
    const rel = path.relative(root, abs).replace(/\\/g, '/');
    const text = fs.readFileSync(abs, 'utf8');
    let m;
    HEADING_RE.lastIndex = 0;
    while ((m = HEADING_RE.exec(text))) {
      const id = m[2];
      const r = isUnstable(id);
      if (r.bad) bad.push({ id, heading: m[1].trim(), file: rel, reason: r.reason });
    }
  });
}
walk(SITE_WORDS);

if (reportPath) {
  fs.mkdirSync(path.dirname(path.resolve(root, reportPath)), { recursive: true });
  fs.writeFileSync(
    path.resolve(root, reportPath),
    JSON.stringify({ count: bad.length, items: bad }, null, 2) + '\n'
  );
  console.log('Wrote ' + reportPath + ' (' + bad.length + ')');
}

if (bad.length) {
  console.error(
    'check-site-words-stable-ids failed: ' +
      bad.length +
      ' unstable ids\n- ' +
      bad
        .slice(0, 40)
        .map((b) => b.id + ' (' + b.reason + ') @ ' + b.file)
        .join('\n- ') +
      (bad.length > 40 ? '\n- …' : '')
  );
  process.exit(1);
}
console.log('check-site-words-stable-ids passed');
```

**Post-migration tightening:** after apply is green, delete the mid-migration runtime unprefixed branch in `isUnstable` so only `KEEP_PREFIX` + `STABLE_RE` remain.

### F3. `scripts/site-words-propose-rename-map.js` (full)

```js
#!/usr/bin/env node
/**
 * Deterministic draft rename map from inventory + HTML marker context.
 * Usage:
 *   node scripts/site-words-propose-rename-map.js \
 *     --inventory data/site-words-inventory.json \
 *     --markers data/site-words-markers.json \
 *     --out data/site-words-rename-map.json \
 *     --csv data/site-words-rename-map.csv
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
function arg(name, fallback) {
  const hit = args.find((a) => a.startsWith('--' + name + '='));
  return hit ? hit.slice(name.length + 3) : fallback;
}
const inventoryPath = path.resolve(root, arg('inventory', 'data/site-words-inventory.json'));
const markersPath = path.resolve(root, arg('markers', 'data/site-words-markers.json'));
const outPath = path.resolve(root, arg('out', 'data/site-words-rename-map.json'));
const csvPath = path.resolve(root, arg('csv', 'data/site-words-rename-map.csv'));

const KEEP_RE = /^(nav|footer|localnav|prefooter|help_strip)\./;
const JUNK_RE =
  /(function_|class_|renderthemeboot|rendernav|renderfooter|renderguide|join_n|theme_boot_slot|explore_banks_prefooter)|^t\.get_help\.93$/;

const AREA_FROM_FILE = [
  [/\/chrome\.words\.md$/, 'chrome'],
  [/\/home\/home/, 'home'],
  [/\/explore\/explore\.runtime/, 'explore'],
  [/\/explore\/explore/, 'explore'],
  [/\/explore\/review/, 'review'],
  [/\/explore\/apply-success/, 'apply.success'],
  [/\/explore\/apply/, 'apply'],
  [/\/about\/about/, 'about'],
  [/\/guide\/overview/, 'guide.overview'],
  [/\/guide\/documents/, 'guide.documents'],
  [/\/guide\/tax-benefits/, 'guide.tax_benefits'],
  [/\/guide\/concessions/, 'guide.concessions'],
  [/\/guide\/home-loan-insurance/, 'guide.home_loan_insurance'],
  [/\/guide\/property-home-insurance/, 'guide.property_home_insurance'],
  [/\/guide\/credit-life-insurance/, 'guide.credit_life_insurance'],
  [/\/guide\/complaints/, 'guide.complaints'],
  [/\/calculators\/hub/, 'calc.hub'],
  [/\/calculators\/emi/, 'calc.emi'],
  [/\/calculators\/how-much-loan/, 'calc.how_much_loan'],
  [/\/calculators\/loan-amount/, 'calc.loan_amount'],
  [/\/calculators\/prepayment/, 'calc.prepayment'],
  [/\/calculators\/balance-transfer/, 'calc.balance_transfer'],
  [/\/calculators\/tenure/, 'calc.tenure'],
  [/\/calculators\/tax-savings/, 'calc.tax_savings'],
  [/\/project-finder\/project-finder\.runtime/, 'apf'],
  [/\/project-finder\/project-finder/, 'apf'],
  [/\/privacy-policy/, 'legal.privacy'],
  [/\/terms-of-use/, 'legal.terms'],
  [/\/sitemap/, 'sitemap']
];

const ROLE_FROM_HEADING = [
  [/^screen reader/i, 'sr', 'Screen reader'],
  [/^frame title/i, 'frame_title', 'Frame title'],
  [/^main title/i, 'title', 'Title'],
  [/^heading/i, 'heading', 'Heading'],
  [/^subheading/i, 'heading', 'Heading'],
  [/^field label/i, 'field_label', 'Field label'],
  [/^placeholder/i, 'placeholder', 'Placeholder'],
  [/^dropdown face|^option/i, 'option', 'Option'],
  [/^button/i, 'button', 'Button'],
  [/^link/i, 'link', 'Link'],
  [/^column/i, 'column', 'Column'],
  [/^status/i, 'status', 'Status'],
  [/^empty/i, 'empty', 'Empty'],
  [/^note/i, 'note', 'Note'],
  [/^helper|^about /i, 'helper', 'Helper'],
  [/^list item/i, 'list_item', 'List item'],
  [/^table/i, 'table', 'Table'],
  [/^alt/i, 'alt', 'Alt'],
  [/^aria-label/i, 'sr', 'Screen reader'],
  [/^ui /i, 'button', 'Button'],
  [/^top bar|^guide flyout|^tools flyout|^support flyout|^guide (side|local)|^footer|^help strip|^bottom cta/i, 'nav', 'Nav']
];

const PLACE_FROM_HTML = [
  [/hlc-form-row--mode|applicant_mode/, 'filters_applicant'],
  [/loan_purpose|hlc-form-row--purpose/, 'filters_purpose'],
  [/occupation/, 'filters_occupation'],
  [/foir|emi.limit/i, 'filters_foir'],
  [/loan.amount|loan_amount/i, 'filters_loan_amount'],
  [/property.value|property_value/i, 'filters_property_value'],
  [/overdraft|od.vs|facility/i, 'od_vs_term'],
  [/rate.type|floating|fixed/i, 'rate_type'],
  [/hlc-panel--inputs|loan.details/i, 'filters'],
  [/hlc-results|bank.options/i, 'results'],
  [/insights/i, 'insights'],
  [/prefooter/i, 'prefooter'],
  [/site-footer-disclaimer|disclaimer/i, 'disclaimer'],
  [/site-footer-theme|theme-pref|color.theme/i, 'theme'],
  [/official.resources|legal-nav/i, 'official_resources'],
  [/home-hero|hero/i, 'hero'],
  [/co-?applicant/i, 'coapplicant']
];

function areaFor(file) {
  for (let i = 0; i < AREA_FROM_FILE.length; i++) {
    if (AREA_FROM_FILE[i][0].test(file)) return AREA_FROM_FILE[i][1];
  }
  return 'page';
}

function roleFromHeading(heading) {
  for (let i = 0; i < ROLE_FROM_HEADING.length; i++) {
    if (ROLE_FROM_HEADING[i][0].test(heading)) {
      return { role: ROLE_FROM_HEADING[i][1], roleLabel: ROLE_FROM_HEADING[i][2] };
    }
  }
  if (/hlc-field-help|helper/i.test(heading)) return { role: 'helper', roleLabel: 'Helper' };
  return { role: 'text', roleLabel: 'Text' };
}

function slugHint(oldId, heading, body) {
  let core = oldId.replace(/^t\./, '').replace(/\.\d+$/, '');
  const parts = core.split('_').filter(Boolean);
  /* Prefer short structural tokens already in id when short */
  if (parts.length && parts.length <= 4 && !/^(we|the|a|an|of|to|and|or|for|in|on|is|are)$/.test(parts[0])) {
    return parts.slice(0, 4).join('_').slice(0, 48);
  }
  /* Else derive from heading after em-dash if short */
  const after = heading.includes('—') ? heading.split('—').slice(1).join('—').trim() : '';
  if (after && after.length <= 40 && !/[.!?]$/.test(after)) {
    return after
      .toLowerCase()
      .replace(/&[a-z]+;/g, '')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 40);
  }
  /* Last resort: first 3 content words of body */
  const words = String(body || '')
    .toLowerCase()
    .replace(/&[a-z]+;/g, ' ')
    .replace(/[^a-z0-9\s]+/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !/^(the|a|an|of|to|and|or|for|in|on|is|are|we|you|your|this|that)$/.test(w));
  return (words.slice(0, 3).join('_') || 'slot').slice(0, 40);
}

function placeFromContext(markerFiles, oldId) {
  const blob = (markerFiles || []).join(' ') + ' ' + oldId;
  for (let i = 0; i < PLACE_FROM_HTML.length; i++) {
    if (PLACE_FROM_HTML[i][0].test(blob)) return PLACE_FROM_HTML[i][1];
  }
  return null;
}

function humanLabel(roleLabel, place, hint) {
  const bits = [roleLabel];
  if (place) bits.push(place.replace(/_/g, ' '));
  if (hint && hint.replace(/_/g, ' ') !== (place || '').replace(/_/g, ' ')) {
    const h = hint.replace(/_/g, ' ');
    if (h.length <= 36) bits.push(h);
  }
  return bits.join(' — ');
}

const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const markersDoc = JSON.parse(fs.readFileSync(markersPath, 'utf8'));
const byIdMarkers = markersDoc.by_id || {};

/* Group slots by id across files */
const byId = {};
inventory.slots.forEach((s) => {
  if (!byId[s.id]) byId[s.id] = [];
  byId[s.id].push(s);
});

const usedNew = Object.create(null);
const entries = [];
const sortedIds = Object.keys(byId).sort();

sortedIds.forEach((oldId) => {
  const group = byId[oldId];
  const wordsFiles = [...new Set(group.map((g) => g.file))];
  const heading = group[0].heading;
  const body = group[0].body_preview;
  const markerFiles = byIdMarkers[oldId] || [];
  const jsFiles = [];
  /* JS attachment filled below for known runtime */
  if (KEEP_RE.test(oldId)) {
    entries.push({
      old_id: oldId,
      new_id: oldId,
      new_heading: heading,
      action: 'keep',
      words_files: wordsFiles,
      marker_files: markerFiles,
      js_files: [],
      body_preview: body,
      confidence: 'high',
      notes: 'allowlisted chrome/stable'
    });
    return;
  }
  if (JUNK_RE.test(oldId)) {
    const action =
      oldId === 't.function_var_key_shroffin_color_preference_var_r.92'
        ? 'delete_restore_script'
        : 'delete';
    entries.push({
      old_id: oldId,
      new_id: null,
      new_heading: null,
      action,
      words_files: wordsFiles,
      marker_files: markerFiles,
      js_files: [],
      body_preview: body,
      confidence: 'high',
      notes: action === 'delete_restore_script' ? 'footer theme script' : 'chrome extraction junk'
    });
    return;
  }

  const area = areaFor(wordsFiles[0]);
  const { role, roleLabel } = roleFromHeading(heading);
  /* Runtime already-short keys: prefix only */
  let newId;
  let confidence = 'medium';
  let notes = '';
  if (!/^t\./.test(oldId) && oldId.indexOf('.') !== -1) {
    newId = area + '.' + oldId;
    confidence = 'high';
    notes = 'runtime/short prefix';
    if (/explore\.runtime|home-loan-compare/.test(wordsFiles.join(' '))) {
      jsFiles.push('src/home-loan-compare.js');
    }
    if (/project-finder\.runtime|apf-project/.test(wordsFiles.join(' '))) {
      jsFiles.push('src/apf-project-search.js');
    }
    if (/apply-success|home-loan-apply/.test(wordsFiles.join(' '))) {
      jsFiles.push('js/home-loan-apply.js');
    }
  } else {
    const place = placeFromContext(markerFiles, oldId);
    const hint = slugHint(oldId, heading, body);
    const placeHint = place ? place + (hint && hint !== place ? '_' + hint.split('_').slice(0, 2).join('_') : '') : hint;
    newId = area + '.' + role + '.' + placeHint.replace(/_+/g, '_').replace(/^_|_$/g, '');
    if (role === 'helper' || place) confidence = 'high';
    if (area.startsWith('legal.') || area.startsWith('guide.')) {
      confidence = 'low';
      notes = 'needs human section naming';
    }
  }

  /* Ensure uniqueness */
  let finalId = newId;
  let n = 2;
  while (usedNew[finalId]) {
    finalId = newId + '_' + n;
    n += 1;
    notes = (notes ? notes + '; ' : '') + 'auto-disambiguated';
  }
  usedNew[finalId] = true;

  const placeForLabel = placeFromContext(markerFiles, oldId) || '';
  const hintForLabel = slugHint(oldId, heading, body);
  entries.push({
    old_id: oldId,
    new_id: finalId,
    new_heading: humanLabel(roleLabel, placeForLabel, hintForLabel),
    action: 'rename',
    words_files: wordsFiles,
    marker_files: markerFiles,
    js_files: [...new Set(jsFiles)],
    body_preview: body,
    confidence,
    notes
  });
});

const map = {
  version: 1,
  generated_at: new Date().toISOString().slice(0, 10),
  baseline_slot_count: inventory.slot_count,
  expected_slot_count_after: inventory.slot_count - entries.filter((e) => e.action.startsWith('delete')).length,
  entries,
  allowlist_keep: entries.filter((e) => e.action === 'keep').map((e) => e.old_id)
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(map, null, 2) + '\n');

const esc = (s) => '"' + String(s == null ? '' : s).replace(/"/g, '""') + '"';
const lines = [
  'old_id,new_id,new_heading,action,words_files,marker_files,js_files,confidence,notes'
];
entries.forEach((e) => {
  lines.push(
    [
      e.old_id,
      e.new_id,
      e.new_heading,
      e.action,
      (e.words_files || []).join('|'),
      (e.marker_files || []).join('|'),
      (e.js_files || []).join('|'),
      e.confidence,
      e.notes
    ]
      .map(esc)
      .join(',')
  );
});
fs.writeFileSync(csvPath, lines.join('\n') + '\n');
console.log(
  'Wrote ' +
    path.relative(root, outPath) +
    ' and CSV (' +
    entries.length +
    ' entries, expected slots after ' +
    map.expected_slot_count_after +
    ')'
);
```

### F4. `scripts/site-words-apply-rename-map.js` (full)

```js
#!/usr/bin/env node
/**
 * Apply site-words rename map: words + markers + JS keys + footer script restore.
 * Usage:
 *   node scripts/site-words-apply-rename-map.js --map data/site-words-rename-map.json --validate-only
 *   node scripts/site-words-apply-rename-map.js --map data/site-words-rename-map.json --write --report data/site-words-apply-report.json
 */
'use strict';
const fs = require('fs');
const path = require('path');
const {
  parseWordsMarkdown,
  serializeWordsMarkdown,
  writeSiteWordsDoc,
  wordsPath,
  CHROME_FILE,
  PAGE_FILES,
  assistiveWordsPath
} = require('./lib/site-words');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
function arg(name) {
  const hit = args.find((a) => a.startsWith('--' + name + '='));
  return hit ? hit.slice(name.length + 3) : null;
}
const mapPath = path.resolve(root, arg('map') || 'data/site-words-rename-map.json');
const reportPath = arg('report') ? path.resolve(root, arg('report')) : null;
const validateOnly = args.includes('--validate-only');
const write = args.includes('--write');

const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const entries = map.entries || [];
const errors = [];

const oldIds = entries.map((e) => e.old_id);
if (new Set(oldIds).size !== oldIds.length) errors.push('duplicate old_id in map');
const newIds = entries.filter((e) => e.new_id).map((e) => e.new_id);
if (new Set(newIds).size !== newIds.length) errors.push('duplicate new_id in map');

entries.forEach((e, i) => {
  if (!e.old_id) errors.push('entry[' + i + '] missing old_id');
  if (!['rename', 'keep', 'delete', 'delete_restore_script'].includes(e.action)) {
    errors.push(e.old_id + ': bad action');
  }
  if (e.action === 'rename' && (!e.new_id || !e.new_heading)) {
    errors.push(e.old_id + ': rename needs new_id + new_heading');
  }
});

if (errors.length) {
  console.error('Map invalid:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('Map OK (' + entries.length + ' entries)');
if (validateOnly) process.exit(0);
if (!write) {
  console.log('Pass --write to apply');
  process.exit(0);
}

const rename = Object.create(null);
const deletes = new Set();
let themeScript = null;
entries.forEach((e) => {
  if (e.action === 'rename') rename[e.old_id] = e;
  if (e.action === 'keep') rename[e.old_id] = e; /* identity */
  if (e.action === 'delete' || e.action === 'delete_restore_script') deletes.add(e.old_id);
});

function mapId(id) {
  if (deletes.has(id)) return null;
  if (rename[id]) return rename[id].new_id;
  return id;
}

function rewriteWordsFile(absRel) {
  const abs = path.join(root, absRel);
  if (!fs.existsSync(abs)) return { file: absRel, skipped: true };
  const raw = fs.readFileSync(abs, 'utf8');
  const doc = parseWordsMarkdown(raw);
  const lists = ['slots', 'slots_assistive', 'slots_gated'];
  let changed = 0;
  let removed = 0;
  lists.forEach((key) => {
    const next = [];
    (doc[key] || []).forEach((slot) => {
      if (deletes.has(slot.id)) {
        if (
          slot.id === 't.function_var_key_shroffin_color_preference_var_r.92' &&
          !themeScript
        ) {
          themeScript = String(slot.text || '').trim();
        }
        removed += 1;
        return;
      }
      const entry = rename[slot.id];
      if (entry && entry.action === 'rename') {
        slot.id = entry.new_id;
        slot.heading = entry.new_heading;
        slot.where = entry.new_heading;
        changed += 1;
      }
      next.push(slot);
    });
    doc[key] = next;
  });
  /* Detect assistive vs human by path */
  const mode = /\.assistive\.words\.md$/i.test(absRel)
    ? 'assistive'
    : /\.runtime\.words\.md$/i.test(absRel)
      ? 'human'
      : 'human';
  const out = serializeWordsMarkdown(doc, {
    mode: mode === 'assistive' ? 'assistive' : 'human'
  });
  fs.writeFileSync(abs, out);
  return { file: absRel, changed, removed };
}

/* Rewrite every words file path that appears in the map + all known PAGE_FILES/chrome */
const wordsSet = new Set();
entries.forEach((e) => (e.words_files || []).forEach((f) => wordsSet.add(f)));
wordsSet.add('site-words/' + CHROME_FILE);
Object.keys(PAGE_FILES).forEach((k) => {
  wordsSet.add('site-words/' + PAGE_FILES[k]);
  const a = 'site-words/' + assistiveWordsPath(PAGE_FILES[k]);
  wordsSet.add(a);
});
[
  'site-words/pages/explore/explore.runtime.words.md',
  'site-words/pages/tools/project-finder/project-finder.runtime.words.md',
  'site-words/pages/explore/apply-success.runtime.words.md'
].forEach((f) => wordsSet.add(f));

const wordsReport = [];
[...wordsSet].sort().forEach((rel) => {
  if (!fs.existsSync(path.join(root, rel))) return;
  wordsReport.push(rewriteWordsFile(rel));
});

/* Markers */
const markerFiles = new Set();
entries.forEach((e) => (e.marker_files || []).forEach((f) => markerFiles.add(f)));
['content', 'partials', 'templates'].forEach((base) => {
  const dir = path.join(root, base);
  if (!fs.existsSync(dir)) return;
  function walk(d) {
    fs.readdirSync(d, { withFileTypes: true }).forEach((ent) => {
      const abs = path.join(d, ent.name);
      if (ent.isDirectory()) return walk(abs);
      if (/\.html?$/i.test(ent.name)) markerFiles.add(path.relative(root, abs).replace(/\\/g, '/'));
    });
  }
  walk(dir);
});

const markerReport = [];
[...markerFiles].sort().forEach((rel) => {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) return;
  let text = fs.readFileSync(abs, 'utf8');
  let n = 0;
  text = text.replace(/\{\{SW:([a-zA-Z0-9_.-]+)\}\}/g, (m, id) => {
    if (deletes.has(id)) {
      if (id === 't.function_var_key_shroffin_color_preference_var_r.92') {
        n += 1;
        return 'THEME_SCRIPT_PLACEHOLDER';
      }
      throw new Error(rel + ' still references deleted id {{SW:' + id + '}}');
    }
    const next = mapId(id);
    if (next !== id) n += 1;
    return '{{SW:' + next + '}}';
  });
  if (text.includes('THEME_SCRIPT_PLACEHOLDER')) {
    if (!themeScript) {
      throw new Error('Missing theme script body for footer restore');
    }
    text = text.replace(
      /<script>THEME_SCRIPT_PLACEHOLDER<\/script>/,
      '<script>\n' + themeScript + '\n</script>'
    );
  }
  if (n) {
    fs.writeFileSync(abs, text);
    markerReport.push({ file: rel, replacements: n });
  }
});

/* JS keys */
const jsFiles = [
  'src/home-loan-compare.js',
  'src/apf-project-search.js',
  'js/home-loan-apply.js'
];
const jsReport = [];
jsFiles.forEach((rel) => {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) return;
  let text = fs.readFileSync(abs, 'utf8');
  let n = 0;
  text = text.replace(
    /(\b(?:ui|swApply|uiHtml)\(\s*)(["'])([a-zA-Z0-9_.-]+)\2/g,
    (m, pre, q, id) => {
      const next = mapId(id);
      if (next == null) throw new Error(rel + ' references deleted key ' + id);
      if (next !== id) n += 1;
      return pre + q + next + q;
    }
  );
  if (n) {
    fs.writeFileSync(abs, text);
    jsReport.push({ file: rel, replacements: n });
  }
});

const report = {
  words: wordsReport,
  markers: markerReport,
  js: jsReport,
  deleted: [...deletes],
  expected_slot_count_after: map.expected_slot_count_after
};
if (reportPath) {
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  console.log('Wrote ' + path.relative(root, reportPath));
}
console.log('Apply complete');
```

### F5. Optional `scripts/lib/site-words.js` export (snippet)

No behavior change required. Optional addition at `module.exports`:

```js
  /** Shared id pattern for stable-id checks (post-migration). */
  SITE_WORDS_STABLE_ID_RE:
    /^(?:(?:nav|footer|localnav|prefooter|help_strip)|(?:chrome|home|explore|review|apply|about|apf|sitemap|guide\.[a-z0-9_]+|calc\.[a-z0-9_]+|legal\.(?:privacy|terms)|apply\.success)(?:\.[a-z][a-z0-9_]*)+)$/
```

### F6. Footer theme script restore (shape)

In `partials/site-footer.html`, after apply:

```html
<script>
(function () {
  var KEY = 'shroffin-color-preference';
  var root = document.querySelector('.site-footer-theme');
  if (!root) return;
  /* … identical body extracted from deleted chrome slot … */
})();
</script>
```

Do **not** leave theme JS in site-words.

---

## G. Completeness gates (must pass)

| # | Gate | Command / proof |
|---|---|---|
| 1 | No sentence-derived / junk ids remain (except explicit allowlist) | `node scripts/check-site-words-stable-ids.js` → exit 0; unstable report empty |
| 2 | Every `{{SW:id}}` resolves | `npm run build:content -- --write` + `npm run build:nav` + `build:footer` + `build:guide-localnav` with no “Unknown site-words marker” |
| 3 | Every words slot referenced **or** intentional unused listed | `node scripts/site-words-inventory.js --orphans` → `words_unused` only allowlisted (prefer empty; runtime keys must appear in JS) |
| 4 | Main/assistive pairs synced | For each rename, both files updated; orphan assistive id count = 0 vs main map |
| 5 | Runtime packs match JS | `npm run build:site-words-runtime && npm run build:compare && npm run build:apf`; spot-check generated JSON keys = `ui()`/`swApply()` ids |
| 6 | Slot count | Before 2228; after **2214** (±0). Any other delta explained in `data/site-words-apply-report.json` |
| 7 | Golden / content stitch does not drop copy | `npm run check:content`; bless only with `--only=` after visual confirm; main text equality aside from id renames in markers (resolved text unchanged) |
| 8 | Spot-check matrix | With `npm run words` → localhost: Home, Explore (OD helper + filters), Review, Apply contact + success modal, one Guide (Documents), one Calculator (EMI), Project Finder, Privacy sample, chrome nav/footer/theme toggle |

**Assistive sync check (explicit):**

```bash
node -e "
const map=require('./data/site-words-rename-map.json');
const bad=[];
map.entries.filter(e=>e.action==='rename').forEach(e=>{
  const files=e.words_files||[];
  const mains=files.filter(f=>!f.includes('.assistive.')&&!f.includes('.runtime.'));
  mains.forEach(m=>{
    const a=m.replace(/\\.words\\.md$/,'.assistive.words.md');
    const fs=require('fs');
    if(fs.existsSync(a) && fs.readFileSync(a,'utf8').includes(e.old_id))
      bad.push(e.old_id+' still in '+a);
  });
});
if(bad.length){console.error(bad.join('\\n')); process.exit(1);}
console.log('assistive old_id sweep clean');
"
```

---

## H. Founder experience after migration

### Everyday edit (unchanged loop, clearer labels)

1. `npm run words` → http://localhost:8765/
2. Open page via `site-words/INDEX.md`
3. **Jump to** shows role + place (`Helper — OD vs term loan`), not yesterday’s sentence
4. Edit **only the body** under `##`
5. **Never** rename `{#id}` or `##` for a copy tweak
6. Save → preview refreshes

### Doc edits (paste targets)

**`site-words/_schema.md`** — replace the id warning with:

```markdown
- `{#…}` = **stable machine id** (role + place). Do not rename when changing wording.
- `## Role — Place` = Jump-to label. Do not rewrite it to match the new sentence.
- Body under the heading = the only everyday edit.
```

**`docs/HOW_TO_EDIT_SITE_WORDS.md`** — add under Everyday wording:

```markdown
Jump-to names describe **where the line sits in the product** (button, helper, field).
They stay the same when you rewrite the sentence underneath.
```

**`site-words/INDEX.md`** — one line under Rules:

```markdown
Ids and Jump-to labels are a stable map of the UI — edit body text only.
```

**`docs/CONTENT_SOURCE_OF_TRUTH.md`** — extend the site-words row note:

```markdown
Slot ids are stable (`page.role.place`). Do not derive ids from live sentences.
```

---

## I. Risks & honesty (residual after recipe)

1. **Legal + long Guide prose (~800+ slots)** — propose script marks `confidence: low`. Founder/UX must approve section-based hints before apply. Listed explicitly as the human-judgment queue: all `legal.privacy.*`, `legal.terms.*`, and guide `text`/`list_item`/`table` rows in the CSV where `confidence=low`.
2. **Chrome junk deletion** changes footer from `{{SW:theme-js}}` to literal `<script>` — required architecture fix; verify theme toggle on light/dark/default after `build:footer`.
3. **Runtime key renames** touch Explore/APF/Apply bundles — must rebuild compare+apf; miss one `ui("old")` → fallback English, not crash. Gate: generated pack key set ≡ JS key set.
4. **Cross-file duplicate old ids** (guide TOC `t.overview.6` on many pages) become **page-prefixed unique** ids — correct; markers updated per body file. Do not try to share one id across page docs (build applies page doc only).
5. **Legacy education nav** markers inside HTML comments still renamed — keep commented; do not unhide.
6. **Golden bless** — resolved customer strings must be byte-identical; only markers/ids change. If bless diffs show wording changes, stop and investigate.
7. **Propose-map collisions** auto-append `_2` — review those rows so disambiguators stay meaningful.
8. **No half-migrate:** do not ship Explore-only. Phases 1–6 are one release train; gates cover all 52 files.

### Explicit human-judgment slot classes (not “details later”)

| Class | Approx size | What human decides |
|---|---|---|
| Legal privacy section prose | ~169 main | Section slug per policy heading (`who_we_are`, `retention`, …) |
| Legal terms section prose | ~279 main | Same for terms outline |
| Guide overview body | ~186 | Section anchors (`loan_amount`, `eligibility`, …) |
| Other guide long pages | ~700 combined | Per-H2 section + list item hints |
| Home split hero spans | ~38 | Confirm hero/story/device role+place (many tiny spans) |

All other Explore filters/helpers, calculators, chrome footer labels, runtime prefixes: mechanical `confidence: high` after spot-check of 20 random rows.

---

## Definition of done

- [ ] Inventory scripts land; baseline counts match § baseline
- [ ] Rename map frozen (`data/site-words-rename-map.json`); low-confidence rows reviewed
- [ ] Apply report shows expected slot count **2214**
- [ ] All gates in §G pass
- [ ] Docs in §H updated
- [ ] `npm run words` Jump-to shows role-based labels on Home + Explore + Privacy sample
- [ ] No temporary dual-id layer remains

---

## Out of scope

- Rewriting customer sentences
- Education-loan product UI re-enable
- Theme token / motion / responsive work
- Moving contacts or bank numeric data into site-words
