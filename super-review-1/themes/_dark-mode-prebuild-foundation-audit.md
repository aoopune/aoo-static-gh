# Dark / Light / Default — Pre-build foundation audit (hostile)

**Date:** 2026-08-21  
**Repo:** `aoo-static-gh`  
**Auditor:** Cursor Agent (CTO pre-build gate)  
**Job:** Re-verify Phases A→H + founder visual inputs against **live source**. Fix prep defects only. **No main theme build.**

---

### 0. Executive verdict (first)

**GO** for the main theme build — live prep owners (boot inert + sync, shell freeze + stop-bleed, unify-light metrics, Explore second system + plate + PREP-15, dark wordmark + nav swap, JS injectors clear, education preserved, founder Material ladder) match phase claims after correcting stale PREP-08 / theme-boot comments that still said fixed-dark / logo-not-landed.

---

### 1. Founder locks reconfirmed

Loaded and obeyed: `_dark-mode-founder-visual-inputs.md` (+ ledger), `_dark-mode-phase-a-product-brief.md` (+ ledger).

| Lock | Live status |
|---|---|
| Modes Dark / Light / Default(`system`); first visit unset → **dark** (≠ Default) | Documented in Phase A/C + updated `partials/theme-boot.html` comments; **not** activated |
| Footer icon pill later (monitor / sun / moon); no Appearance title | `partials/site-footer.html` has **no** theme UI (correct — deferred) |
| Home bands **follow theme** — no `data-theme-island="fixed-dark"` | **0** markers in live tree (excl. review docs); reserved `--home-story-*` / `--home-device-stage` present |
| Material surface ladder `#121212` → `#1E1E1E` → `#2C2C2C` → `#383838` (not cool-blue canvas) | Locked in founder + Phase F/G docs; **no** cool-blue dark palette shipped in CSS |
| Light blue exact `#0071e3`; dark brighter twin TBD | Shell `--shroffin-blue: #0071e3`; dark twin not invented (correct) |
| Wordmark DST `images/logos/logo-h-dark-clear-781x173.png` from `logo-h-on-black` | Present; **byte-identical** to etc source PNG; nav dual-img hooked |
| Bank logos: light plate on dark; no recolor | `--hlc-logo-plate` + `.hlc-bank-logo` hook; light = transparent |
| PWA dark-first `#121212` at ship; live manifest may stay white | Plan in Phase G; live `background_color: #ffffff` (intentional) |
| Ranks: keep meaning colors + PREP-15 | Green/red/amber tokens intact; gate text in Phase F |
| v1 = 24 `data/redesigned-pages.json`; education out; do not delete | 24 paths; `education-loan.html` + markers preserved |

---

### 2. Phase scorecard

| Phase | Claimed | Verified | Status | Blockers | Fixes applied |
|---|---|---|---|---|---|
| **Founder visuals** | Locked Material ladder, blue rule, wordmark, plate, PWA, ranks | Docs + live logo/plate/manifest match | **PASS** | — | — |
| **A — Product** | Modes, first-visit dark, footer pill later, home follow-theme, 24-page v1 | Docs locked; footer clean; no fixed-dark; boot inert | **PASS** | — | Prep-audit PREP-08 text/ledger corrected (was still fixed-dark) |
| **B — Shell freeze** | Mix-base + promoted roles + stop-bleed rule | Tokens in `css/shroffin-shell.css`; `.cursor/rules/shroffin-theme-token-discipline.mdc` `alwaysApply` | **PASS** | — | — |
| **C — Boot** | Inert partial + 24-page sync + algorithm = Phase A | `data-shroffin-theme-boot="inert"`; `check:theme-boot` green; before CSS/js | **PASS** | — | Stale “logo not implemented” comment → Phase G landed + first-visit note; re-synced |
| **D — Islands** | Void per Phase A | No island work; no markers | **PASS (void)** | — | Prep-audit Phase D / PREP-08 aligned to void |
| **E — Unify light** | Hex/fallback reductions; no raw `#fff` mixes on E files | Re-measured: fallbacks **0**; hex counts match Phase E; `color-mix(...#fff)` **0** on redesigned stacks | **PASS** | — | — |
| **F — Explore** | Second system; plate; ranks; PREP-15; dark-map plan | `--hlc-*` spine; plate hook; ranks meaning colors; Material DRAFT; no cool-blue | **PASS** | — | — |
| **G — Assets** | Dark PNG + nav swap + PWA plan; live manifest white | File 781×173; byte-identical; CSS swap; `check:nav` green; manifest white | **PASS** | — | — |
| **H — JS / legacy** | 24 paths free of 3 injectors; education leave-light | `check:theme-js-injectors` green; education files present | **PASS** | — | — |
| **Discipline rule** | Stop new light debt / no invert / no `--dark-*` | Rule present; no `--dark-*` in redesigned CSS; invert only as forbid comment | **PASS** | — | — |

---

### 3. Evidence log

#### Commands (2026-08-21, repo root)

```text
npm run check:theme-boot
→ Canonical theme-boot is synchronized across 24 pages. (exit 0)

npm run check:nav
→ Canonical nav is synchronized across 24 pages. (exit 0)

npm run check:theme-js-injectors
→ Theme JS-injectors: 24 redesigned paths clear … (exit 0)

cmp -s images/logos/logo-h-dark-clear-781x173.png \
  "../etc/creatives/brand/images/logos/png/logo-h-on-black-781x173.png"
→ BYTE_IDENTICAL=yes

file images/logos/logo-h-dark-clear-781x173.png
→ PNG image data, 781 x 173, 8-bit/color RGBA

rg 'var(--[a-zA-Z0-9-]+,\s*#' css/shroffin-editorial.css … css/shroffin-home.css
→ 0 matches (Phase E claim holds)

rg -o '#[0-9a-fA-F]{3,8}\b' css/shroffin-explore-banks.css | wc -l
→ 28

rg 'var(--[a-zA-Z0-9-]+,\s*#' css/shroffin-explore-banks.css
→ 0

rg 'color-mix\([^)]*#fff' css/shroffin-*.css css/project-approvals.css
→ none

rg 'data-theme-island|fixed-dark' (excl. super-review-1 / node_modules)
→ none

rg '<html[^>]*data-theme' live HTML
→ none

site.webmanifest: theme_color #1074de; background_color #ffffff
```

#### Critical file citations

| Owner | Evidence |
|---|---|
| `partials/theme-boot.html` | Inert IIFE; `data-shroffin-theme-boot="inert"`; no localStorage read |
| `css/shroffin-shell.css` L29–40 | `--shroffin-canvas-mix-base`, footer-mix-base, ink-soft, ghost, paper-note, hair/hair-soft |
| `css/shroffin-shell.css` L698–708 | Dual logo CSS; dark mark `display:none` until `html[data-theme="dark"]` |
| `partials/global-nav.html` L9–24 | Light + dark `<img>`; education blocks commented with keep markers |
| `css/shroffin-explore-banks.css` L49–56, L91–94, L5151–5162 | Rank meaning colors; `--hlc-logo-plate*`; `.hlc-bank-logo` hook |
| `templates/layouts/home.html` / `index.html` | `--home-story-bg/ink`, `--home-device-stage` |
| `.cursor/rules/shroffin-theme-token-discipline.mdc` | Stop-bleed + Phase A/C/G/H locks |
| `scripts/lib/site-chrome.js` | `renderThemeBoot` / `applyThemeBoot` / `applySiteChrome` |
| Phase C algorithm | Matches Phase A first-visit → dark (spec only) |

#### Phase E hex re-measure (after claim)

| File | Hex | Fallbacks |
|---|---:|---:|
| editorial | 41 | 0 |
| apply | 10 | 0 |
| calculators | 2 | 0 |
| guide | 0 | 0 |
| about | 0 | 0 |
| utility | 2 | 0 |
| project-approvals | 0 | 0 |
| home | 0 | 0 |
| product-demo | 11 | 0 |
| explore | 28 | 0 |

---

### 4. Failures found + fixes applied

| ID | Severity | Before | After | Fix applied? |
|---|---|---|---|---|
| **DOC-PREP08** | major (doc vs product lock) | Prep audit PREP-08 body + ledger still prescribed `data-theme-island="fixed-dark"` and gate said “+ markers”, contradicting Phase A / live code | PREP-08 rewritten to follow-theme; Phase D marked VOID; ledger updated; architecture spine §2 point 5 corrected; §0 points to this audit | **yes** |
| **DOC-BOOT-LOGO** | minor | `partials/theme-boot.html` said logo swap “named only; not implemented in Phase C” after Phase G landed | Comments: Phase G landed + first-visit dark reminder; `npm run build:theme-boot` + `build:layout-chrome` | **yes** |

No live architectural prep FAIL (missing boot markers, missing dark wordmark, injector bleed, fixed-dark islands, live resolving boot, wrong Appearance UI, Explore plate missing, E/F metric regressions).

---

### 5. Remaining deferred (expected for main build)

These are **not** FAILs — they are the main-build scope:

1. **Live boot activation** — replace inert stub in `partials/theme-boot.html` with Phase C algorithm (sets `data-theme` + `color-scheme`)
2. **Dark value sets** — same token names under `html[data-theme="dark"]` for shell + stacks + Explore (Material ladder)
3. **Footer icon pill** — monitor / sun / moon in `partials/site-footer.html` only; no Appearance title
4. **Live PWA dark splash** — `site.webmanifest` → `#121212`; meta `theme-color` dark `#121212` / light `#fcfcfd`
5. **Exact brighter blue hex** + **rank dark hex pairs** with PREP-15 contrast proof
6. **PREP-17** verify matrix adopted in the theme PR template (checklist still open in prep audit — expected)

---

### 6. Main-build contract (GO — next agent must obey)

1. **Storage:** `localStorage['shroffin-color-preference']` ∈ `{dark, light, system}` only.  
2. **Resolved look:** `html[data-theme="dark"|"light"]` only — never paint off preference alone.  
3. **First visit:** preference unset → resolve **`dark`**. Do **not** write `system` until the user chooses Default.  
4. **Default:** preference `system` → `prefers-color-scheme` → resolve dark|light.  
5. **Surfaces:** Material charcoal ladder base `#121212`, raised `#1E1E1E` → `#2C2C2C` → `#383838`. **Not** cool-blue near-black; **not** pure `#000` UI canvas.  
6. **Light brand blue:** keep exact `#0071e3`. Dark blue = same family, **slightly brighter** twin (propose + contrast-check).  
7. **Architecture:** same token **names**, two value **sets**. No `filter: invert`. No `--dark-*` parallel vocabulary.  
8. **Boot:** edit **only** `partials/theme-boot.html`, then `npm run build:theme-boot` (+ `build:layout-chrome` / site build). Algorithm = Phase C §5.  
9. **Logo:** dual-img already hooked — do not reinvent; ensure dark mark under `data-theme="dark"`; light default without attribute already correct.  
10. **Explore:** remains `--hlc-*` second system. Enable **light** `--hlc-logo-plate` on dark; **never** recolor bank assets. Rank helpful/costly/grace keep green/red/amber meaning; attach **PREP-15** contrast proof (≥4.5:1 text) before merge.  
11. **Home:** story / phone / product-demo **follow theme** — do **not** add `data-theme-island="fixed-dark"`. Twin `--home-story-*` / `--home-device-stage`.  
12. **Footer control:** Cursor-style icon pill in `partials/site-footer.html` only — monitor=Default, sun=Light, moon=Dark; order Default→Light→Dark; no Appearance title; no helper; aria labels; ≥44px; `npm run build:footer`.  
13. **PWA:** ship with activation — manifest `background_color` / `theme_color` `#121212`; meta `theme-color` `#121212` (dark) / `#fcfcfd` (light).  
14. **Scope:** 24 paths in `data/redesigned-pages.json` only. Leave education / `css/style.css` / `table-embed` / `pages/_*.html` light. **Do not delete** education or keep markers.  
15. **JS injectors:** redesigned paths must stay free of `aoo-loan-table-standalone` / `apply-flow` / `apply-button-iframe` — prove with `npm run check:theme-js-injectors`.  
16. **Owners:** shell freeze / discipline rule remain binding; update Phase B freeze before inventing new chrome roles.  
17. **Verify matrix (minimum):** FOUC check under dark-first; all 24 pages themed; Explore ranks contrast; logos light+dark; `check:theme-boot` / `check:nav` / `check:theme-js-injectors`; no invert; education still present and hidden from primary nav.

---

### 7. If NO-GO

**N/A** — verdict is GO. No ordered blocker list for prep.

---

### 8. Plain-language summary for founder

**Ready to authorize the main theme build.**

What is solid: the product rules (dark / light / match-device; first visit starts dark; home follows the theme; Material grey ladder; bank logo plates; rank colors stay meaningful) are locked. The website already has the quiet “slot” for theme in every redesigned page head (turned off on purpose), the dark logo file and swap wiring, Explore’s separate color system with a plate hook, cleaned-up light colors so dark twins can plug in later, and proof that the dangerous white/teal script injectors do not run on the 24 redesigned pages. Education loan code is still in the repo and still hidden from the main nav.

What was wrong: an older prep checklist still told engineers to mark home sections as “always dark,” which contradicts your Phase A decision. A boot comment still said the dark logo was not hooked after Phase G had already done it. **Code was already correct**; the stale docs could have misled the next build.

What was fixed: those docs and the boot comment were corrected and re-synced. Checks for theme-boot, nav, and injectors still pass.

Is prep trustworthy enough to build? **Yes — with the main-build contract in §6 as the next agent’s hard rules.** Remaining work is the actual feature (turn boot on, paint dark values, footer icons, PWA splash), not more foundation prep.

Machine record: `_dark-mode-prebuild-foundation-audit-ledger.json`
