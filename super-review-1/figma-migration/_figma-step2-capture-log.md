# Figma Step 2 — Live Capture Log

**Date:** 2026-08-24 (continuation session)  
**Agent:** Figma Capture (Step 2 only)  
**Figma file:** [Shroffin — Live Capture (Step 2)](https://www.figma.com/design/YQx2aELyYEA914gWj0amDP)  
**fileKey:** `YQx2aELyYEA914gWj0amDP`

## Setup notes

- No Step 1 Design System file URL was found in the repo. This file already had `--shroffin-*` Light/Dark variables (14 tokens) from the earlier pass.
- Live `https://shroffin.com` DNS failed from this environment (`ENOTFOUND`). Captures used:
  - Site: `http://127.0.0.1:8765` (`npm start`)
  - Capture inject proxy: `http://127.0.0.1:8766` (injects Figma `capture.js`; no website source edits)
- Capture runner: `/tmp/figma-capture-one.cjs` + `/tmp/figma-batch-run.cjs` (Playwright → `captureForDesign` with `bindVariables=true`). `captureForDesign` often never returns; 55s timeout is expected after successful submit.
- Dark canvas verified `#161616` / `rgb(22, 22, 22)` on every pre-capture log. Light samples verified canvas `rgb(252, 252, 253)`.
- All frames labeled **RAW-CAPTURE**. Variables auto-bind where capture matched token names.
- Full Home `body` + product-demo iframes crash Chromium → Home captured as hero/moments without heavy iframes where needed.

## Completeness CEO confirmations

- [x] No education loan frames
- [x] No “ineligible” naming (Empty / Filled / Outside-filters naming used)
- [x] Dark canvas `#161616`
- [x] All 8 Guide pages captured as page bodies (Dark 834)
- [x] Home Zero-bias + Transparent full sections (Transparent recaptured as 819×773, not title-only)
- [x] Explore drawer + empty table; phone filter sheet recaptured as body + Sidebar/Dialog layers
- [ ] Hover/focus set (page 10 still empty; Hover-Primary-Button captureId stayed pending)
- [x] Light theme: **four samples only** (Home, Explore, Guide Overview, Calc Hub at 834) — no 25×Light copies
- [x] Phone 375 Dark defaults for the five required URLs
- [x] Amortisation EMI panel open/closed stills
- [ ] Apply contact field states (only Default body done)
- [x] Other 6 calculator tools Empty + ComputedSample Dark 834 bodies
- [ ] Product-demo Playing/Paused/Replay

## Scorecard 25/25 — Dark 834 page bodies

| # | URL | Frame | nodeId |
|---|---|---|---|
| 1 | `/` | Home-Hero-Initial-Dark-834 (plus moment sections) | `35:2` |
| 2 | `/pages/explore-banks.html` | Explore-Page-Default-Dark-834 | `36:2` |
| 3 | `/pages/apply.html` | Apply-Review-Continue-Enabled-Dark-834 | `45:2` |
| 4 | `/pages/apply-contact.html` | Apply-Contact-Default-Dark-834 | `81:2` |
| 5 | `/pages/calculators.html` | Calc-Hub-Dark-834 | `46:2` |
| 6 | `/pages/calculators/emi.html` | Calc-EMI-Empty-Dark-834 | `56:2` |
| 7 | `/pages/calculators/how-much-loan.html` | Calc-HowMuchLoan-Empty-Dark-834 | `84:2` |
| 8 | `/pages/calculators/loan-amount.html` | Calc-LoanAmount-Empty-Dark-834 | `85:2` |
| 9 | `/pages/calculators/prepayment.html` | Calc-Prepayment-Empty-Dark-834 | `86:2` |
| 10 | `/pages/calculators/balance-transfer.html` | Calc-BalanceTransfer-Empty-Dark-834 | `87:2` |
| 11 | `/pages/calculators/tenure.html` | Calc-Tenure-Empty-Dark-834 | `90:2` |
| 12 | `/pages/calculators/tax-savings.html` | Calc-TaxSavings-Empty-Dark-834 | `91:2` |
| 13 | `/pages/project-approvals.html` | APF-Empty-Dark-834 | `48:2` |
| 14 | `/pages/guide.html` | Guide-Overview-Dark-834 | `47:2` |
| 15 | `/pages/guide-documents.html` | Guide-Documents-Dark-834 | `61:2` |
| 16 | `/pages/tax-benefits.html` | Guide-TaxBenefits-Dark-834 | `63:2` |
| 17 | `/pages/concessions.html` | Guide-Concessions-Dark-834 | `64:2` |
| 18 | `/pages/home-loan-insurance.html` | Guide-HomeLoanInsurance-Dark-834 | `65:2` |
| 19 | `/pages/property-home-insurance.html` | Guide-PropertyHomeInsurance-Dark-834 | `66:2` |
| 20 | `/pages/credit-life-insurance.html` | Guide-CreditLifeInsurance-Dark-834 | `67:2` |
| 21 | `/pages/home-loan-complaints.html` | Guide-Complaints-Dark-834 | `68:2` |
| 22 | `/pages/about.html` | About-Hero-Team-Dark-834 | `49:2` |
| 23 | `/privacy-policy.html` | Privacy-Hero-Body-Dark-834 | `58:2` |
| 24 | `/terms-of-use.html` | Terms-Hero-Body-Dark-834 | `59:2` |
| 25 | `/sitemap.html` | Sitemap-Six-Groups-Dark-834 | `60:2` |

**25/25.** Each URL has a unique Dark 834 body (not chrome-only). Calculator tools also have ComputedSample frames (same default live values as Empty because the site auto-fills samples).

## Wave A — Broken recaptures

| Item | Status | nodeId | Notes |
|---|---|---|---|
| Nav-Flyout-Guide-Open-Dark-834 **panel** | RAW-CAPTURE | `74:2` | 819×385; old `22:2` bar-only renamed `…-BAR-ONLY-INCOMPLETE` |
| Nav-Flyout-Tools-Open-Dark-834 **panel** | RAW-CAPTURE | `75:2` | 819×234; old `23:2` bar-only |
| Nav-Flyout-Support-Open-Dark-834 **panel** | RAW-CAPTURE | `76:2` | 819×334; old `25:2` bar-only |
| Nav-Compact-Drill-Support-Tray-Dark-375 | RAW-CAPTURE | `82:2` | 360×764 — matches Tools tray quality |
| Home-Moment-Transparent-Dark-834 | RAW-CAPTURE | `77:2` | 819×773 full `section[aria-labelledby=home-clear-title]`; iframe hidden |
| Explore-Inputs-Default-Dark-834 recapture | RAW-CAPTURE | `79:2` | 527×458; labels still overlap live — left raw; old `29:2` tagged OVERLAP-OLD |

## Wave B — Missing page bodies + required 375 / Light samples

| Item | Status | nodeId |
|---|---|---|
| Apply-Contact-Default-Dark-834 | RAW-CAPTURE | `81:2` 819×1168 |
| Calc 6 remaining Empty Dark 834 | RAW-CAPTURE | `84:2` `85:2` `86:2` `87:2` `90:2` `91:2` |
| Home-Default-Dark-375 | RAW-CAPTURE | `94:2` 360×157 hero-only (no iframe; calm-phone full layout UNVERIFIED) |
| Explore-Page-Default-Dark-375 | RAW-CAPTURE | `96:2` 360×940 |
| Apply-Review-Default-Dark-375 | RAW-CAPTURE | `88:2` 360×900 |
| Calc-Hub-Dark-375 | RAW-CAPTURE | `92:2` 360×1728 |
| Guide-Overview-Dark-375 | RAW-CAPTURE | `97:2` 360×6367 |
| Home-Default-Light-834 | RAW-CAPTURE | `98:2` (Light sample 1) |
| Explore-Page-Default-Light-834 | RAW-CAPTURE | `99:2` (Light sample 2) |
| Guide-Overview-Light-834 | RAW-CAPTURE | `100:2` (Light sample 3) |
| Calc-Hub-Light-834 | RAW-CAPTURE | `93:2` (Light sample 4) |

## Wave C — Interaction states (progress)

Done this session:

- Calc-EMI-AmortisationPanel-Open-Dark-834 `101:2` 787×1659
- Calc-EMI-AmortisationPanel-Closed-Dark-834 `102:2` 787×67
- Calc ComputedSample Dark 834 for all 6 remaining tools (`104:2`–`107:2`, `110:2`, `111:2`)
- Explore-Table-Filled-Dark-834 `109:2` 819×1893 (age=35 + monthly-income + Compare)
- Explore-FilterDrawer-Open-Dark-375 `120:2` 360×3031 (body + Sidebar filter sheet + Dialog; Apply-once dock visible). Empty 0×0 attempt `118:2` flagged DO-NOT-USE
- Guide-Overview-BorrowFlip-Back-Dark-834 `112:2`
- Guide-Overview-EmiFlip-Back-Dark-834 `113:2`
- ThemePill-Light-Pressed `114:2` 94×36 (pill cluster only)

## UNVERIFIED leftovers (real blockers)

Do not treat these as captured. URL + error:

| Frame | URL | Error |
|---|---|---|
| Hover-Primary-Button (and all page-10 hovers) | `http://127.0.0.1:8766/pages/calculators.html` | captureId `ef5e0a3d-a947-45a5-b722-265bd1544a2b` stayed **pending** after 10+ Figma polls; Playwright pre-capture succeeded; page `10 Hover Focus` still has 0 children |
| Hover-Nav-Label, Hover-Footer-Link, Hover-Guide-Section-Link, Hover-Calc-Hub-Tile, Hover-Apply-Continue, Focus-Calc-Field, Focus-Explore-Input | various | Not submitted this session after hover poll stall |
| ThemePill-System-Pressed | `/` footer | Not captured this session |
| Explore-OutsideFilters, Tab-Overview/Charges/OtherCharges, Tooltip-Open, Intel-More, ApplyDock dedicated, Apply-Desktop, Hover-Row | explore-banks | Filled table exists; column tabs / tooltip / intel / dedicated dock not separately captured |
| Apply ShowMore Closed/Open, Continue-Disabled | apply.html | Review enabled 834/375 exist; extra states not captured |
| Apply-Contact Phone-Ok / Email-Mismatch / Verify-Disabled / Verified-Ready / Consent / Focus | apply-contact.html | Default body only |
| Guide remaining 3 Overview flips (rate/structure/charges), Complaints talk-flip, tab group, intel dialogs, localnav 375 | guide pages | Only borrow + emi flip backs captured |
| APF Autocomplete / Loading / ResultsEmpty / ResultsTable / ShowMore | project-approvals.html | Empty body only |
| Home-ProductDemo Playing/Paused/Replay × desktop/phone | `/` and `_product-demo-frame*.html` | Chromium crash risk; not submitted |
| Home-CalmPhone / Home-LevelField dedicated 375 | `/` | Hero 375 exists; calm-phone / level-field CSS layouts not isolated |
| Footer Light | `/` | Variables expected to switch; no Light footer artboard (by policy) |

## Skipped (out of scope)

- Education loan gated UI  
- `pages/_*.html` prototypes except live Home embeds (embed-dedicated stills still pending)  
- About “Our roots” gated HTML comment  
- Step 3 Code Connect / Step 4 Figma→code  
- Light copies of remaining 21 pages  

## Binding

- Local `--shroffin-*` Light/Dark present; `bindVariables=true` on submit.  
- No Step 1 component instances → all **RAW-CAPTURE**.  
- Messy Explore inputs left raw (no fake cleanup).  
- Four Light samples only.

## Session capture counts (Figma frames, named bodies)

| Page | Approx named captures |
|---|---:|
| 02 Chrome | ~19 (incl. 3 panel flyouts + Support tray + Light theme pill) |
| 03 Home | ~12 (incl. Transparent full + 375 + Light) |
| 04 Explore | ~10 (incl. 375, Light, Filled, Filter sheet) |
| 05 Apply | 3 (review 834, contact 834, review 375) |
| 06 Calculators | ~19 (hub 834/375/Light, EMI empty/computed/amort, 6 tools empty+computed) |
| 07 Guide | ~12 (8 bodies + Overview 375/Light + 2 flip backs) |
| 08 APF | 1 |
| 09 About/Legal/Sitemap | 4 |
| 10 Hover Focus | 0 |
| **Scorecard bodies** | **25/25 Dark 834 URLs** |
