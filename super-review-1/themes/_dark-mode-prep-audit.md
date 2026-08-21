# Dark mode — pre-implementation foundation audit

**Date verified:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Scope:** Prep only. No dark palette, no toggle UI, no theme boot shipped to pages.  
**Mode:** Agent / CTO engineering audit (read + prescribe).

---

### 0. Executive verdict

**Historical note (2026-08-21 original audit):** At first write, customer-facing themes were blocked. Phases A→H + founder visual inputs have since cleared must-before-build prep.

**Current gate:** See `_dark-mode-prebuild-foundation-audit.md` for the hostile live re-audit and **GO / NO-GO** for the main theme build. Do not treat this §0 alone as the ship gate.

**Original blocking summary (kept for history):** The live site was light-only: named shell tokens light-locked; Explore/editorial/Apply each painted private light surfaces; JS injectors; light-only nav wordmark; white PWA splash; no early-boot injection. Jumping to dark CSS then would have shipped FOUC, white islands, wrong logos, washed ranks, and chrome drift.

**Top blockers then (now addressed by phase briefs):** (1) preference vs resolved + early boot → Phase C; (2) shell role freeze → Phase B; (3) Explore `--hlc-*` → Phase F; (4) editorial/stack retarget → Phase E; (5) home island policy → Phase A follow-theme (Phase D void); (6) logo + PWA plan → Phase G; (7) JS injectors → Phase H.

---

### 1. Mode model (locked wording)

| Mode label (UI later) | Stored preference | Resolved look on `<html>` |
|---|---|---|
| **Dark** | `dark` | always `data-theme="dark"` |
| **Light** | `light` | always `data-theme="light"` |
| **Default** | `system` | follow OS `prefers-color-scheme` → resolve to `dark` or `light` |
| **First visit, no saved preference** | *(unset)* | resolve to **`dark`** (product default). This is **not** the same as Default/system. |

Do not rename these in prep docs or later UI copy without an explicit product decision. Default = system follow. First visit = dark until the user chooses.

---

### 2. Architecture spine (non-negotiable)

1. **Preference stored separately** — recommend `localStorage` key `shroffin-color-preference` with values `dark` \| `light` \| `system`. Optional mirror attribute later: `data-color-preference` only if needed for CSS that must know “user chose system”; paint must not key off preference for surfaces.
2. **Resolved look on `<html>`** — `data-theme="dark"` \| `data-theme="light"` drives CSS only. Same token **names**, two value **sets**.
3. **No filter invert**, no per-page one-off dark sheets as the architecture, no copying `super-review-1/*/viewer.css` media queries as product architecture.
4. **Early inline boot in `<head>` before paint** — mandatory under dark-first. FOUC of light under dark default is a ship blocker.
5. **Home bands follow theme** — Phase A voids fixed-dark islands; do **not** mark `data-theme-island="fixed-dark"` on home story / phone / product-demo.
6. **Prefer tokens** over hardcoded light hex / light rgba / light `color-mix(... #fff)`.
7. **Chrome sync is the single injection path** — boot script + logo swap strategy must live in layouts / partials / build pipeline, not hand-edited across ~88 HTML files.

---

### 3. Current state facts (re-verified 2026-08-21)

Commands run from repo root. Counts are matches, not unique colors.

#### 3.1 Hex / rgba / color-mix inventory

| Metric | Count | Notes |
|---|---:|---|
| Hex in `css/` | **677** | Matches prior baseline |
| HTML hex excl. `_golden` / `super-review-1` / `node_modules` | **503** | Dominated by `pages/_*.html` prototypes + home layouts |
| Hex in `js/` | **76** | Almost all in education/apply injectors (see below) |
| `rgba(0,0,0…)` in `css/` | **102** | Light-paper hairlines |
| `rgba(255,255,255…)` in `css/` | **48** (sum of per-file) | Light washes / on-dark copy |
| `color-mix(` in `css/` | **12** | Shell surface/footer + Explore header + editorial + legacy |
| `var(--token, #lighthex)` in `css/` | **369** | Fallback proves light lock-in |

#### 3.2 Top hex files in `css/`

| File | Hex matches |
|---|---:|
| `css/shroffin-explore-banks.css` | 272 |
| `css/shroffin-editorial.css` | 92 |
| `css/shroffin-apply.css` | 89 |
| `css/shroffin-shell.css` | 63 |
| `css/shroffin-calculators.css` | 31 |
| `css/style.css` | 30 |
| `css/shroffin-product-demo.css` | 26 |
| `css/shroffin-home-calm-phone.css` | 21 |
| `css/shroffin-utility-pages.css` | 16 |
| `css/shroffin-guide.css` | 14 |
| `css/shroffin-about.css` | 9 |
| `css/project-approvals.css` | 9 |
| `css/shroffin-home.css` | 4 |
| `css/shroffin-home-level-field.css` | 1 |

#### 3.3 JS hex (non-map)

| File | Hex | Role |
|---|---:|---|
| `js/aoo-loan-table-standalone.js` | 56 | `SCOPE_CSS` light token block + `!important` whites |
| `js/apply-flow.js` | 12 | Modal/toast light tokens + teal accent |
| `js/apply-button-iframe.js` | 7 | Floating buttons `#0d9488` / `#e2e8f0` |
| `js/home-loan-apply.js` | 1 | Minor |
| Bundles (`home-loan-compare.bundle.js`, etc.) | (included in 76 total) | Mostly non-UI / escaped strings; Explore paint is CSS-owned |

#### 3.4 Stylesheet adoption

| Linked stylesheet | HTML files (excl. super-review / node_modules) |
|---|---:|
| `shroffin-shell.css` | **88** |
| `css/style.css` (legacy education stack) | **11** |

`style.css` linkers (verified): `education-loan.html`, `404.html`, `pages/government-schemes.html`, `pages/quick-overview.html`, `pages/faq.html`, `pages/schemes.html`, `pages/document-checklist.html`, `pages/questions.html`, `pages/pro-tips.html`, `pages/results.html`, `pages/compare.html`.

#### 3.5 Logos under `images/logos/`

Present:

- `logo-h-light-clear-781x173.png` — **nav wordmark (light)** (source partial `partials/global-nav.html`)
- `logo-h-dark-clear-781x173.png` — **nav wordmark (dark bar)** — **Phase G landed** (from founder `logo-h-on-black`; dual-img CSS swap; light default until `data-theme`)
- `logo-mark-white-clear-2048x2048.png` — **exists, unused** on live redesigned pages
- `logo-mark-blue-clear-300x300.png`, `logo-mark-on-white-512x512.png`, `logo.png`
- Favicons / android chrome / app-icon-ios assets — **keep current** (Phase G)

See `_dark-mode-phase-g-assets.md` for swap + PWA/`theme-color` ship plan.

#### 3.6 PWA / browser chrome

`site.webmanifest`:

```json
"theme_color": "#1074de",
"background_color": "#ffffff",
"display": "browser"
```

- **No** customer-facing page `<meta name="theme-color">` outside review tooling (search empty on live HTML).
- **No** customer-facing `data-theme` / theme boot / `color-scheme` CSS outside `super-review-1`.
- **No** `prefers-color-scheme` product theme outside review tooling.

#### 3.7 Redesigned page list (`data/redesigned-pages.json`) — 24 paths

1. `index.html`  
2. `pages/explore-banks.html`  
3. `pages/apply.html`  
4. `pages/calculators.html`  
5–11. `pages/calculators/{emi,how-much-loan,loan-amount,prepayment,balance-transfer,tenure,tax-savings}.html`  
12. `pages/project-approvals.html`  
13–20. Guide set: `guide`, `guide-documents`, `tax-benefits`, `concessions`, `home-loan-insurance`, `property-home-insurance`, `credit-life-insurance`, `home-loan-complaints`  
21. `pages/about.html`  
22–24. `privacy-policy.html`, `terms-of-use.html`, `sitemap.html`

#### 3.8 Layout sources (`templates/layouts/`) — 27 files

`home.html`, `explore-banks.html`, `apply.html`, `apply-contact.html`, `about.html`, `calculators.html` + 7 calculator tool layouts, `project-approvals.html`, 8 guide layouts, `legal-privacy.html`, `legal-terms.html`, `sitemap.html`.

#### 3.9 Chrome / build pipeline (verified)

| Piece | Path / command |
|---|---|
| Chrome fill lib | `scripts/lib/site-chrome.js` — fills `SHROFFIN_NAV` / `FOOTER` / `GUIDE_LOCALNAV` from `partials/` |
| Nav sync | `npm run build:nav` → `scripts/sync-site-nav.js` |
| Footer sync | `npm run build:footer` → `scripts/sync-site-footer.js` |
| Content stitch | `npm run build:content` → `scripts/build-content.js` |
| Layout chrome fill | `npm run build:layout-chrome` → `scripts/lib/fill-layout-chrome.js` |
| Full site | `npm run build:site` (legal → contacts → compare → content → sitemap → nav → footer → guide-localnav) |
| Nav partial (logo) | `partials/global-nav.html` — `logo-h-light-clear-781x173.png` |
| Golden mirrors | `content/_golden/*` — check targets, not edit sources for theme |

Layouts already inject an early `<script>document.documentElement.classList.add('js');</script>` in `<head>` (see `templates/layouts/about.html`). Theme boot must sit **alongside / before** CSS links in that same early slot — via layout template + rebuild, not 88 hand edits.

#### 3.10 Shell token freeze (current light values — inventory only)

From `css/shroffin-shell.css` `:root`:

| Role | Today | Light-locked? | Dark twin later? |
|---|---|---|---|
| `--shroffin-ink` | `#1d1d1f` | yes | yes |
| `--shroffin-muted` | `#6e6e73` | yes | yes |
| `--shroffin-blue` / btn-primary (+ hover/active/shadows) | `#0071e3` family | yes (may keep similar) | yes (shadows especially) |
| `--shroffin-link` (+ active/visited/external) | `#3f62c8` family | yes | yes |
| `--shroffin-surface` | `#fcfcfd` then `color-mix(... #ffffff)` | **silent dark-fail** | yes — mix base must not be white |
| `--shroffin-footer` | `#f5f7f9` then `color-mix(... #f4f6f8)` | **silent dark-fail** | yes |
| `--shroffin-rule` | `rgba(0,0,0,0.16)` | black alpha on light paper | yes — white/ink alpha on dark |
| `--shroffin-focus` | `#0071e3` | mostly OK | verify on dark |
| `--shroffin-gn-frost` / `gn-bg` / fallback / open | `#f5f7f9` / rgba(245,247,249,…) | yes | yes |
| `--shroffin-gn-veil` | `rgba(29,29,31,0.28)` | OK-ish on light | retune for dark |
| `--shroffin-gn-border` | `rgba(0,0,0,0.05)` | black alpha | yes |
| `--shroffin-field-line` (+ focus/invalid/valid) | black alphas + green/red | yes | yes |
| `--shroffin-field-placeholder` | `rgba(110,110,115,0.5)` | yes | yes |

**Missing shell roles pages invent privately (need freeze decision — promote or keep stack-local):**

- Wash / hairline: `--mag-hair`, `--mag-paper-note`, `--calc-line`, `--hlc-wash`, `--hlc-surface`
- Rank / status: `--hlc-rank-helpful-*`, `--hlc-rank-costly-*`, `--hlc-rank-grace-*`
- On-dark ink (home story): `#f5f5f7` / `rgba(255,255,255,0.55)` hardcoded in layout `<style>`
- Guide card: `--guide-card-surface: #f7f7f7`
- About/home soft inks: `--about-ink-soft`, `--stance-ink-soft`, `--mag-ink-soft`, `--mag-ghost`

#### 3.11 Page token stacks — classification

| File | Classification | Notes |
|---|---|---|
| `shroffin-shell.css` | **1→ needs dark map on same names** | Owner of site chrome; light-locked today |
| `shroffin-editorial.css` | **2 + 3** | `--mag-paper` / accent alias shell; **ink/muted/ghost/hair/paper-note hard light**; `color-mix(... #fff)` in places; guide card `#f7f7f7` |
| `shroffin-explore-banks.css` | **3 (own dark map)** | Second system `--hlc-*`; page-bg aliases shell (will flip if shell flips) but wash/surface/rank/row colors will not |
| `shroffin-apply.css` | **2 + hard paints** | Page bg aliases shell; **89 hex**, many `#1d1d1f` / `#fff` direct paints |
| `shroffin-calculators.css` | **1 partial + 2** | ink/muted alias shell; `--calc-paper` white wash, `--calc-hub-surface: #f5f5f7`, black-alpha lines |
| `shroffin-guide.css` | **2** | Localnav `rgba(245,247,249,0.82)` + black-alpha border — bypass shell gn tokens |
| `shroffin-about.css` | **1 partial + 2** | paper aliases; note/ghost/ink-soft hard light |
| `shroffin-utility-pages.css` | **1** (mostly) | Uses shell with light fallbacks; will flip if shell flips **if** fallbacks removed |
| `shroffin-home.css` | **1 partial + 2** | stance aliases surface; soft ink + black hairline local |
| `shroffin-home-calm-phone.css` | **island** | `#0a0a0a` fixed dark chrome |
| `shroffin-home-level-field.css` | **island** | `#0a0a0a` |
| `shroffin-product-demo.css` | **mixed** | Section uses surface; home band `#f5f7f9`; phone chrome dark hex elsewhere |
| `project-approvals.css` | **1 partial + 2** | Same pattern as calculators |
| `style.css` | **4 out of v1** | Legacy education; leave light, document white islands |

**Legend:** 1 = will flip if shell flips · 2 = needs alias retarget · 3 = needs own dark map · 4 = out of v1 with risk.

#### 3.12 Always-dark islands (inventory)

| Island | Location | Paint today | Policy needed |
|---|---|---|---|
| `.home-story-dark` | `templates/layouts/home.html` inline `<style>`, mirrored `index.html`; body in `content/pages/home.body.html` | bg `#1a1a1a`, text `#f5f5f7` | **Recommend: fixed dark in both themes** (intentional product band) |
| `.home-feature-card` / `.home-feature-visual` | same | `#0a0a0a` | fixed dark (child of story) |
| `.home-feature-visual.home-calm-phone` | `css/shroffin-home-calm-phone.css` | `#0a0a0a` | fixed dark device stage |
| Level-field visual | `css/shroffin-home-level-field.css` | `#0a0a0a` | fixed dark |
| Product-demo phone chrome | `css/shroffin-product-demo.css` + mocks | `#0a0a0a` / `#1a1a1a` family | fixed dark device chrome |
| Prototypes `pages/_home-*.html` | 23 `_*.html` files | various | **out of v1** |

Fail closed: every live island must have a written rule before theme build (see PREP-08).

#### 3.13 Explore bank marks

`.hlc-bank-logo` — size/`object-fit` only; **no pad/plate**. Bank PNGs are RGBA (often dark ink on transparent). On dark table surfaces they will vanish or muddy. Prep requires a **light plate / pad role** (stack-local `--hlc-logo-plate` or shell `--shroffin-logo-plate`) before dark map values.

---

### 4. Prep workstreams

Each item is foundation work only — not theme implementation.

---

#### PREP-01 — Contract & naming lock

- **What is wrong / incomplete today:** No preference key, no resolved attribute, no documented first-visit vs system distinction in code.
- **Why it breaks dark mode if skipped:** Implementers invent conflicting names; FOUC boot and CSS selectors diverge; Default conflated with first-visit dark.
- **Exact files / symbols:** New contract doc section (this file); later consumers: layout `<head>`, `css/shroffin-shell.css`, optional small `js/shroffin-theme.js` (not written in this job).
- **Prep action:** Lock names:  
  - Storage: `localStorage['shroffin-color-preference']` ∈ `{dark,light,system}`  
  - Resolved: `html[data-theme="dark"|"light"]`  
  - Optional: `html[data-color-preference]` only if required  
  - First visit unset → resolve dark; do not write `system` unless user chooses Default  
  - CSS `color-scheme: dark|light` on `html` matching resolved  
  - Dynamic `theme-color` meta synced to resolved surface (not logo blue alone)
- **Done when:** Contract written in this audit + ledger PREP-01 checked; any future PR referencing other key names is rejected.
- **Depends on:** —  
- **v1 scope:** must-before-build

---

#### PREP-02 — Shell role freeze (+ gaps)

- **What is wrong:** Shell roles are light-locked; surface/footer `color-mix` toward `#ffffff` / `#f4f6f8`; black-alpha rules; pages invent wash/rank/on-dark privately.
- **Why skipped breaks:** Flipping only ink leaves white canvases; `color-mix` toward white keeps panels light under `data-theme=dark`.
- **Exact files / symbols:** `css/shroffin-shell.css` `:root` roles listed in §3.10; gaps: wash, hair, rank (or formally assign to Explore), on-dark-ink, logo-plate.
- **Prep action:** Freeze the role list pages need. Decide promote-to-shell vs stack-local for: wash, hairline, note-paper, rank-*, logo-plate, on-dark-ink. Document that dark values come later as second sets on same names. Redesign surface/footer mix formula to use a **neutral mix base token** (name only now), not raw `#fff`.
- **Done when:** Written freeze table in audit/ledger; no new private color roles added on redesigned pages without freeze update; surface/footer mix formula decision recorded.
- **Depends on:** PREP-01  
- **v1 scope:** must-before-build

---

#### PREP-03 — Stop-the-bleeding rule for new hard light paints

- **What is wrong:** 677 CSS hex + 369 light `var(..., #hex)` fallbacks; new work still hardcodes light.
- **Why skipped breaks:** Theme build chases a moving target; dual paint systems appear.
- **Exact files / symbols:** All `css/shroffin-*.css`, redesigned HTML, `js/*` injects.
- **Prep action:** Engineering rule (repo rule or CONTRIBUTING note — create when applying prep, not in this audit): new UI chrome must use shell or stack tokens; no new `#fff` / `#1d1d1f` / `rgba(0,0,0,…)` hairlines / `color-mix(...#fff)` / `var(--x, #light)` on redesigned surfaces. Prototypes `pages/_*.html` exempt if marked out of v1.
- **Done when:** Rule file exists and PR checklist references it; spot-check: no new light hardcodes on redesigned paths after rule date.
- **Depends on:** PREP-02  
- **v1 scope:** must-before-build

---

#### PREP-04 — Editorial `--mag-*` retarget

- **What is wrong:** `--mag-ink`, `--mag-ink-soft`, `--mag-muted`, `--mag-ghost`, `--mag-hair*`, `--mag-paper-note`, `--mag-accent-button`, `--guide-card-surface` are hard light; paper aliases shell with light fallbacks; `color-mix(... #fff)` in editorial.
- **Why skipped breaks:** Guide/magazine pages stay white/ink-dark under dark theme while shell nav flips → half-themed pages.
- **Exact files / symbols:** `css/shroffin-editorial.css` `:root` lines 13–29, `--guide-card-surface` ~1447, color-mix ~3192+.
- **Prep action:** Retarget aliases to shell roles where roles exist; introduce stack tokens for note/ghost/hair that will receive dark twins; remove light hex fallbacks on redesigned path (or replace with shell-only `var(--shroffin-*)`). Do **not** invent dark hex yet.
- **Done when:** `--mag-ink/muted` resolve through shell names; inventory of remaining hard light roles listed for dark-map phase; `rg 'var\\(--mag-ink, #1d1d1f\\)' css/shroffin-editorial.css` → 0.
- **Depends on:** PREP-02  
- **v1 scope:** must-before-build

---

#### PREP-05 — Explore `--hlc-*` ownership + dark-map plan (no values)

- **What is wrong:** Explore is a **second token system** (272 hex). Light washes (`--hlc-wash/surface`), row colors, section lines, rank greens/reds/ambers are all light-paper. Only `--hlc-page-bg` / some nav aliases shell.
- **Why skipped breaks:** Dark shell + light Explore table = broken product; rank chips fail contrast; white sticky headers flash.
- **Exact files / symbols:** `css/shroffin-explore-banks.css` `.explore-banks-page` token block (lines 3–55+); rank rules ~4844–4869; `.hlc-bank-logo` ~5108.
- **Prep action:** Document ownership: Explore keeps `--hlc-*` names; dark map later is second value set under `html[data-theme=dark] .explore-banks-page`. List every color role that needs a twin (wash, surface, surface-strong, row-*, line-*, rank-*, header-bg mix, intel-line, text-tertiary). Require contrast gate (PREP-15) before values. Plan logo plate (PREP-11).
- **Done when:** Role list frozen in ledger; no “lots of hex → just invert” plan; ownership note states Explore does not collapse into shell-only.
- **Depends on:** PREP-02  
- **v1 scope:** must-before-build

---

#### PREP-06 — Apply CSS hard paint cleanup plan

- **What is wrong:** `shroffin-apply.css` has 89 hex; ~23× `#1d1d1f`, ~6× `#fff/#ffffff`; page uses shell for canvas but components paint directly.
- **Why skipped breaks:** Apply once looks light under dark default; forms/receipts white.
- **Exact files / symbols:** `css/shroffin-apply.css`, `pages/apply.html` / `templates/layouts/apply.html`.
- **Prep action:** Map each hard paint to shell or apply-local token; remove light fallbacks; leave dark values for theme phase. Prefer shell ink/surface/rule/field.
- **Done when:** Written map of remaining non-token paints ≤ agreed threshold (target: zero direct page chrome hex outside token definitions); `rg -c '#[0-9a-fA-F]{3,8}' css/shroffin-apply.css` trending down vs 89 after cleanup PR (cleanup is prep, still no dark set).
- **Depends on:** PREP-02, PREP-03  
- **v1 scope:** must-before-build

---

#### PREP-07 — Calculators / guide / about / utility / APF alias cleanup

- **What is wrong:**  
  - Calculators: `--calc-paper` white wash, `--calc-hub-surface: #f5f5f7`, black-alpha lines  
  - Guide: localnav frosted rgba not using `--shroffin-gn-*`  
  - About: hard note/ghost/ink-soft  
  - Utility: light fallbacks  
  - APF: same as calculators pattern
- **Why skipped breaks:** Tools/guide/legal stay light islands.
- **Exact files / symbols:** `css/shroffin-calculators.css`, `css/shroffin-guide.css`, `css/shroffin-about.css`, `css/shroffin-utility-pages.css`, `css/project-approvals.css`, `css/shroffin-home.css` (stance soft ink).
- **Prep action:** Retarget to shell tokens; replace localnav frost with gn tokens; tokenise hub/note surfaces for later dark twins.
- **Done when:** Each file’s `:root`/page block either aliases shell or declares named roles for dark-map; guide localnav uses `--shroffin-gn-*`.
- **Depends on:** PREP-02, PREP-04  
- **v1 scope:** must-before-build

---

#### PREP-08 — Home + phone + product-demo island policy

- **Original audit recommendation (superseded):** Fixed-dark islands with `data-theme-island="fixed-dark"` on home story / phone / demo chrome.
- **Phase A founder lock (authoritative):** Home story band, phone/device chrome, and product-demo **follow theme** — do **not** apply `data-theme-island="fixed-dark"`. Phase D island work is **VOID**.
- **Why the override matters:** Under Light, storytelling bands must go light with the rest of the site; keeping them always-dark would violate the product lock.
- **Exact files / symbols:** `templates/layouts/home.html` / `index.html` reserved `--home-story-bg`, `--home-story-ink`, `--home-device-stage` (today’s dark hex until theme twins); `css/shroffin-home-calm-phone.css`; `css/shroffin-home-level-field.css`; `css/shroffin-product-demo.css`; `css/shroffin-home.css`.
- **Prep action (locked):**  
  1. Policy = **theme-follow** for home story / phone / product-demo (Phase A).  
  2. **No** `data-theme-island="fixed-dark"` markers on those surfaces.  
  3. Tokenise current paints as reserved `--home-story-*` / `--home-device-stage` (Phase B/E) — light/dark value sets at theme build.  
  4. `.spd-section--home` aliases `--shroffin-footer` (Phase E).
- **Done when:** Phase A policy locked; reserved home tokens present; zero `data-theme-island` on redesigned home; stop-bleed rule forbids fixed-dark islands.
- **Depends on:** PREP-01  
- **v1 scope:** must-before-build  
- **Status (2026-08-21 Phase A + B/E):** **DONE (CHANGED FROM AUDIT)** — follow-theme policy; reserved tokens landed; no fixed-dark markers in live tree. See `_dark-mode-phase-a-product-brief.md`.

---

#### PREP-09 — JS injected styles theme contract

- **What is wrong:**  
  - `js/aoo-loan-table-standalone.js` — `SCOPE_CSS` full light design system + `#ffffff !important` cells  
  - `js/apply-flow.js` — `--aoo-surface: #ffffff`, teal `#0d9488` (legacy accent ≠ shell blue)  
  - `js/apply-button-iframe.js` — teal/slate floating buttons  
  These inject **after** paint → white flash under dark default.
- **Why skipped breaks:** Education/legacy apply surfaces and any embed that loads them flash white; permanent dual paint.
- **Exact files / symbols:** above three; consumers `education-loan.html`, `table-embed.html`, compare/results pages.
- **Prep action:** For v1 redesigned site: confirm whether these scripts load on redesigned paths (mostly legacy). Policy:  
  - **Redesigned home-loan Apply** uses CSS files, not these injectors — verify no load on `pages/apply.html`.  
  - **Legacy education** out of v1: document as known white islands OR retarget SCOPE_CSS tokens to `var(--shroffin-*)` with light fallbacks removed when education enters theme scope.  
  - Any injector that can appear under dark-first redesigned chrome must use theme-aware tokens before theme ship.
- **Done when:** Matrix of script × page (loads? v1?) in ledger; redesigned 24 paths confirmed free of SCOPE_CSS white inject; legacy policy recorded.
- **Depends on:** PREP-01, PREP-13  
- **v1 scope:** must-before-build (for redesigned paths); defer_with_risk for education injectors if left light
- **Status (2026-08-21 Phase H):** **DONE** — matrix + Apply CSS paint proof in `_dark-mode-phase-h-js-legacy-policy.md`; 24/24 redesigned paths clear; `npm run check:theme-js-injectors`; education injectors deferred as light islands (PREP-09b).

---

#### PREP-10 — Logo / PWA / theme-color / color-scheme asset plan

- **What is wrong:** Only light horizontal wordmark in nav; white mark unused; no dark-bar wordmark asset; PWA `background_color: #ffffff`; no page `theme-color` meta; android/chrome icons are full-color on transparent — may be OK on dark, splash is not.
- **Why skipped breaks:** Dark nav shows dark-blue/black wordmark invisible; iOS/Android splash white flash; browser chrome mismatch.
- **Exact files / symbols:** `partials/global-nav.html`; `images/logos/*`; `site.webmanifest`; layout `<head>` favicon links.
- **Prep action (commission checklist — create assets before theme build):**  
  1. Commission **`logo-h-dark-clear-*`** (horizontal wordmark for dark frost bars) — missing today.  
  2. Confirm when to use `logo-mark-white-clear-*` (on dark islands / marketing).  
  3. Decide favicon/app icon suitability on dark OS chrome (may keep current).  
  4. Plan `theme-color` / `color-scheme` sync from resolved theme (values later).  
  5. Plan PWA `background_color` dual or dark-first splash (product default dark).  
  6. Logo swap strategy: single partial + boot/CSS `html[data-theme]` source switch — **not** 51 hand edits.
- **Done when:** Asset brief signed (filenames + usage); `logo-h-dark-*` delivered into `images/logos/`; manifest/theme-color plan written; partial owns wordmark `src` or `srcset`/CSS swap hook.
- **Depends on:** PREP-01, PREP-12  
- **v1 scope:** must-before-build  
- **Status (2026-08-21 Phase G):** **DONE** — `images/logos/logo-h-dark-clear-781x173.png` landed; dual-img CSS swap in `partials/global-nav.html` + `css/shroffin-shell.css`; PWA ship values `#121212` / light meta `#fcfcfd` documented in `_dark-mode-phase-g-assets.md`; live manifest unchanged until Phase I; favicons keep current.
---

#### PREP-11 — Bank logo on-dark treatment plan

- **What is wrong:** `.hlc-bank-logo` has no plate; many bank marks are dark-on-transparent.
- **Why skipped breaks:** Unreadable bank column on dark Explore.
- **Exact files / symbols:** `css/shroffin-explore-banks.css` `.hlc-bank-logo`; `images/banks/*`.
- **Prep action:** Require `--hlc-logo-plate` (or shell plate) in Explore token freeze; define light pad behind marks on dark theme (values later); optional 1px hairline. Do not recolor bank assets.
- **Done when:** Plate role named in PREP-05 freeze; CSS hook location identified (class on `.hlc-bank-name` or logo wrapper).
- **Depends on:** PREP-05  
- **v1 scope:** must-before-build

---

#### PREP-12 — Early boot injection via layouts / chrome sync (single source of truth)

- **What is wrong:** 88 shell-linked HTML files + 27 layouts; chrome sync only covers nav/footer/localnav markers — **not** `<head>` boot. Hand-editing all HTML would drift permanently.
- **Why skipped breaks:** FOUC; some pages dark, some light; golden checks fail randomly.
- **Exact files / symbols:** `templates/layouts/*`; `scripts/build-content.js`; `scripts/lib/site-chrome.js`; `partials/global-nav.html`; `data/content-pages.json`; `data/redesigned-pages.json`; live outputs.
- **Prep action:**  
  1. Add a **head partial** or layout slot (e.g. `<!-- SHROFFIN_THEME_BOOT_START -->` …) **or** embed boot once in every layout template’s `<head>` before CSS.  
  2. Prefer: one snippet file `partials/theme-boot.html` + stitch in `build-content` / layout templates.  
  3. Boot algorithm (spec only): read preference → if unset resolve dark → if system use `matchMedia('(prefers-color-scheme: dark)')` → set `data-theme` + `color-scheme` before first paint.  
  4. Logo swap hooks owned by `partials/global-nav.html`.  
  5. Rebuild: `npm run build:content -- --write && npm run build:nav && npm run build:footer` (and bless golden when ready).  
  6. **Do not** implement boot in this audit job — only lock the injection point.
- **Done when:** Written injection owner (exact file + build step); proof that editing once updates all 24 redesigned outputs after build; check script plan listed.
- **Depends on:** PREP-01  
- **v1 scope:** must-before-build

---

#### PREP-13 — Legacy `style.css` / education / prototypes policy

- **What is wrong:** 11 pages on `style.css`; education product hidden from nav but live in tree; 23 `pages/_*.html` prototypes with lots of hex.
- **Why skipped breaks:** Unknown white islands if linked; scope creep into rewriting education.
- **Exact files / symbols:** list in §3.4; `education-loan.html`; `table-embed.html`; `pages/_*.html`; `css/style.css`.
- **Prep action:** **v1 = leave legacy light**; document as known white islands if user navigates via URL; do not delete education code; prototypes **out of v1** (no theme boot required). Optional later: minimal dark map for 404 only.
- **Done when:** Policy sentence in audit + ledger; education keep-markers unchanged (`EDUCATION_LOAN_PRODUCT` / `LEGACY_EDUCATION_PAGES`).
- **Depends on:** —  
- **v1 scope:** out-of-scope-legacy (with documented risk)
- **Status (2026-08-21 Phase H):** **CONFIRMED** — leave light; 11 `style.css` consumers + `table-embed.html` + 23 `pages/_*.html` out of v1; keep markers unchanged; risk accepted in `_dark-mode-phase-h-js-legacy-policy.md`.

---

#### PREP-14 — rgba / color-mix / fallback inventory remediation plan

- **What is wrong:** 102 black-alpha, ~48 white-alpha, 12 color-mix (several toward white), 369 light fallbacks.
- **Why skipped breaks:** Hairlines disappear or become chalk; surfaces stay light via mix; fallbacks re-light pages if tokens missing.
- **Exact files / symbols:** hottest black-alpha: product-demo 14, apply 13, style 12, editorial 12, calm-phone 11, utility 10; white-alpha: editorial 16, calm-phone 11; shell surface/footer mix.
- **Prep action:** Remediation classes: (A) replace with token roles, (B) island-exempt, (C) defer legacy. Remove light fallbacks on redesigned CSS after shell always loads. Fix shell mix bases to tokenized neutrals before dark values.
- **Done when:** Checklist of A/B/C for each hot file; redesigned CSS fallback count trending to 0 for color tokens.
- **Depends on:** PREP-02, PREP-03  
- **v1 scope:** must-before-build (redesigned); defer legacy

---

#### PREP-15 — Contrast / a11y gates for rank colors

- **What is wrong:** Rank helpful/costly/grace use light-paper greens/reds/ambers (`#e6f4ea`, `#fce8e6`, `#fef7e0` + dark inks). Dark surfaces need different pairs.
- **Why skipped breaks:** Unreadable chips; WCAG fails; “looks themed” but unusable.
- **Exact files / symbols:** `--hlc-rank-*` in `css/shroffin-explore-banks.css`.
- **Prep action:** Require dark-map PR to pass readable contrast for text-on-chip and chip-on-surface (document target: WCAG AA for text ≥4.5:1). No final hex in this audit — gate only.
- **Done when:** Gate listed in verify matrix (PREP-17); Explore dark-map cannot merge without contrast note.
- **Depends on:** PREP-05  
- **v1 scope:** must-before-build (gate); values later

---

#### PREP-16 — Toggle placement product decision

- **What is wrong:** No decided home for the control; chrome sync constrains nav/footer structure.
- **Why skipped breaks:** Late UI bolted on breaks nav markers / flyout density; mobile touch targets.
- **Exact files / symbols:** `partials/global-nav.html`, `partials/site-footer.html`, `scripts/lib/site-chrome.js`, `css/shroffin-shell.css` globalnav.
- **Prep action (decision only):** Recommend **footer utility row** or **nav overflow / account-less settings** — not hero. Constraints: must survive `build:nav` / `build:footer`; ≥44px touch; no education links; label Dark / Light / Default per §1. Do not implement.
- **Done when:** Founder/product picks one placement; recorded in ledger notes.
- **Depends on:** PREP-01, PREP-12  
- **v1 scope:** must-before-build (decision); UI later

---

#### PREP-17 — Verify matrix for post-feature (list now)

Tests that must exist when theme is built (prep remembers them):

1. First visit, empty storage → `data-theme=dark`, no light FOUC (filmstrip / screenshot before CSS settle).  
2. Preference `light` → always light across reload.  
3. Preference `system` + OS dark/light → matches OS; change OS updates on next load (and live if listener added).  
4. All 24 redesigned URLs: no white full-page canvas under dark.  
5. Nav wordmark visible on dark and light frost.  
6. Home `.home-story-dark` stays dark under light theme.  
7. Explore rank chips contrast AA; bank logos readable (plate).  
8. Apply / calculators / guide / about / legal: no unstyled white panels.  
9. `theme-color` / `color-scheme` match resolved.  
10. PWA splash acceptable under dark-first.  
11. Legacy education pages: documented behavior (light OK).  
12. `npm run check:content` / `check:nav` / `check:footer` pass after injection.  
13. Reduced motion unchanged; theme swap does not require snappy animation (calm motion rule).

- **Done when:** This list lives in ledger; theme PR template links it.  
- **Depends on:** all must-before-build  
- **v1 scope:** must-before-build (as checklist ownership)

---

### 5. Ordered “fix first” sequence

No theme values or toggle UI in these phases.

1. **Phase A — Contract** — PREP-01 naming; PREP-16 placement decision (can parallel).  
2. **Phase B — Shell freeze** — PREP-02 role list + mix-base decision; PREP-03 stop-bleed rule.  
3. **Phase C — Pipeline slot** — PREP-12 injection owner locked (snippet file path + build step); still no boot body required until theme PR, but slot/partial empty marker OK.  
4. **Phase D — Islands** — **VOID** (Phase A): home follows theme; PREP-08 = follow-theme policy + reserved `--home-*` tokens, **not** fixed-dark markers.  
5. **Phase E — Stack retarget (light still)** — PREP-04 editorial; PREP-07 calc/guide/about/utility/APF; PREP-06 apply hard paints → tokens; PREP-14 fallbacks/rgba/mix on redesigned CSS.  
6. **Phase F — Explore ownership** — PREP-05 freeze + PREP-11 logo plate role + PREP-15 contrast gate text.  
7. **Phase G — Assets** — PREP-10 dark wordmark + PWA/theme-color plan — **done** (`_dark-mode-phase-g-assets.md`).  
8. **Phase H — JS / legacy policy** — PREP-09 matrix; PREP-13 leave education light — **done** (`_dark-mode-phase-h-js-legacy-policy.md`).  
9. **Phase I — Gate** — PREP-17 checklist all must-before-build checked → only then theme implementation PR allowed (activate boot + footer pill + ship manifest/`theme-color`).

---

### 6. Explicit non-goals for the later theme build

- Do **not** use CSS `filter: invert()` / hue-rotate on `body` or media.  
- Do **not** copy `super-review-1` viewer `prefers-color-scheme` as product architecture.  
- Do **not** hand-edit all 88 HTML files for boot or logos.  
- Do **not** invent a second parallel token vocabulary (`--dark-ink` alongside `--shroffin-ink`).  
- Do **not** delete or “clean up” education loan code.  
- Do **not** theme `pages/_*.html` prototypes in v1.  
- Do **not** ship dark values before prep gate (§7).  
- Do **not** treat `var(--x, #fcfcfd)` as theme-ready.  
- Do **not** conflate Default/system with first-visit dark.

---

### 7. Gate: ready-to-build checklist

Theme implementation is **forbidden** until every **must-before-build** item is checked:

- [x] PREP-01 Contract & naming locked  
- [x] PREP-02 Shell role freeze + mix-base decision  
- [x] PREP-03 Stop-bleed rule in force  
- [x] PREP-04 Editorial `--mag-*` retargeted / remaining roles listed  
- [x] PREP-05 Explore `--hlc-*` ownership + dark-map role list  
- [x] PREP-06 Apply hard paints mapped to tokens  
- [x] PREP-07 Calculators / guide / about / utility / APF aliases cleaned  
- [x] PREP-08 Home / phone / demo **follow-theme** policy (Phase A; Phase D void — **no** fixed-dark markers; reserved `--home-*` tokens)  
- [x] PREP-09 JS inject matrix; redesigned paths clear of white SCOPE_CSS  
- [x] PREP-10 Dark wordmark asset landed + PWA/theme-color plan  
- [x] PREP-11 Bank logo plate role named  
- [x] PREP-12 Single boot/logo injection owner via layouts/chrome  
- [x] PREP-14 Redesigned rgba/color-mix/fallback remediation done or ticketed with owners  
- [x] PREP-15 Contrast gate text accepted for rank colors  
- [x] PREP-16 Toggle placement decided  
- [ ] PREP-17 Verify matrix adopted in theme PR template  

Defer / out-of-scope (do not block, but must stay documented):

- [x] PREP-13 Legacy `style.css` / education left light (risk accepted)  
- [x] Prototypes `pages/_*.html` out of v1  

**Phase G note (2026-08-21):** PREP-10 complete — see `_dark-mode-phase-g-assets.md`. Live `site.webmanifest` still white until Phase I.

**Phase H note (2026-08-21):** PREP-09 + PREP-13 complete — see `_dark-mode-phase-h-js-legacy-policy.md`. All 24 redesigned paths free of `aoo-loan-table-standalone` / `apply-flow.js` / `apply-button-iframe`; regression via `npm run check:theme-js-injectors`. Education / `style.css` / `table-embed` / `pages/_*.html` remain documented light islands.
---

### Appendix A — Recommended resolved boot algorithm (spec only; do not ship here)

```
pref = localStorage.getItem('shroffin-color-preference')  // dark|light|system|null
if (pref === 'light') resolved = 'light'
else if (pref === 'dark') resolved = 'dark'
else if (pref === 'system')
  resolved = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
else
  resolved = 'dark'  // first visit product default
html.setAttribute('data-theme', resolved)
html.style.colorScheme = resolved  // or CSS color-scheme via attribute selector
```

### Appendix B — Machine ledger

See `_dark-mode-prep-audit-ledger.json` in this folder.
