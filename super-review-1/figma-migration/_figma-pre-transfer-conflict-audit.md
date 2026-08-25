## Executive summary (plain language)

This audit inventories every user-facing page/component/interaction in the live static HTML site, and maps where Figma + Figma MCP will naturally diverge.

Why this matters: this repo is static HTML + CSS custom properties (`--shroffin-*`, `--hlc-*`, `--calc-*`, `--apply-*`) with JavaScript for drawers/tables/calculators/flows. Figma MCP will default to React + Tailwind and to “single default frame” captures. If we start building the Figma system without aligning to this repo’s real language, MCP output will repeatedly generate the wrong component structure, wrong tokens, and missing interaction states (tooltips, drawers, tabs, flips, validation).

What will break if you skip this audit:

- Interaction capture: hidden overlays (`hidden`, `aria-hidden`, `inert`) only appear after clicks. MCP default captures will miss them.
- Theme + tokens: the site uses Light/Dark values via `html[data-theme]` and separate token namespaces per stack (`--hlc-*`, `--calc-*`, `--apply-*`). If Figma uses only one token set or the wrong variable names, Light/Dark and rank/row colors drift.
- Responsive behavior: mobile-first breakpoint is 834px, plus extra bands (735px, 1069px) and short viewport handling (max-height 900px). Figma cannot store `clamp()` as a single fluid ladder.
- Data-driven UI: Explore and calculators compute live results from JSON/math libraries, and Apply uses sessionStorage + network flow. Figma must use “sample/still frames” + behavior specs.

### Coverage scorecard (fail-closed)

- Pages inspected: **25 / 25** — instance lists closed 2026-08-24, then completeness remaining tasks (Overview in-page calcs, How-much co-applicant hide, Home iframe interiors, 733/735 layouts, ↗ exceptions, sitemap hrefs, Guide inner modules, APF `apf.spec.js`) closed in this file.
- Components catalogued (major): Global nav (3 flyouts + compact drill), Footer (5 groups + theme pill + disclaimer), Prefooter CTA, Help strip, Guide localnav (6 items + Explore CTA), Guide flip/tabs/intel + Overview in-page calcs, Explore filters/table/drawer/column-tabs/phone dock, Apply review + contact, Calculators hub + 7 distinct tools (How-much co-applicant panel), APF 3 listboxes + results, Home 6 moments + 6 embed interiors, About hero+team, legal TOC+bodies, Sitemap 6 groups with live hrefs.
- Click proof: **19/19** Figma spec (`tests/figma-migration-pretransfer-automated.spec.js`) **plus** **8/8** APF spec (`tests/apf.spec.js`) on `chromium-responsive` (re-run 2026-08-24). Leftovers (Tools/Support flyouts, compact nav, theme pill, `#apf-more`, etc.) are **UNVERIFIED-ALLOWED** only because capture recipes exist.
- Source-inspected (CSS/HTML, not a click): token namespaces, hex debt totals, Dark canvas `#161616`, skip lists, education gated on nav/footer/sitemap/home/robots, ↗ exceptions.
- Themes: Light and Dark via `html[data-theme]`. First visit = Dark. Live Dark canvas is **`#161616`** (not palette-lock `#121212`).
- Viewports: phone (&lt;834px), tablet/desktop (834px+), wide (1440px+), short (`max-height: 900px`). Extra **735 / 1069** change prefooter type and calc hub pad. **Also:** APF fields become 3-column at **735px**; Guide padding / `.guide-calc-row` collapse at **733px** (editorial, not 735).

Previously unverified interactive states — now automated:
- Explore table: empty vs filled, sort (none→asc→desc on a non-default column), selected row, outside-filters after filter change.
- Apply review Continue enabled with seeded `shroffin_hl_apply_v1` packet (navigates to contact).
- Apply contact: phone ok, verify enable, Google mismatch message, verified + submit enabled (Firebase stubbed in Playwright).
- Calculator EMI: `#out-emi` recomputes when loan amount changes.
- Home product demo: choreography advances inside the iframe; chrome reaches Replay (`data-spd-state="ended"`).
- Project Bank Finder (`tests/apf.spec.js` 8/8): project listbox, loading, results, empty prompt, phone overflow, education not in nav.

Note: results table rows exist in the DOM while `#hlc-results-shell` stays `hidden` until Compare; Rate column defaults to `aria-sort="ascending"`.

---

## Master page inventory table (found in live-built HTML)

| URL | Layout main class | Shared chrome variants | Unique sections (major) | Images (top) | Interactions (counts) | Child views (iframe embeds) | Capture frames est |
|---|---|---|---|---|---|---|---|
| `/` | `home-content` | globalnav+footer+help_strip | home-hero<br>spd desktop + phone<br>6 home-moments: compare, browse, best-of-all, zero-bias, transparent, apply-once<br>calm-phone + level-field (**~30 bank logos** in HTML) | logos light+dark; 30 bank PNGs; product-demo 900/1200; logo-mark | buttons:7, inputs:0, selects:0, details:1, iframes:6 | interiors in Instance inventory (demo frames are Explore clones: 121/128 buttons) | ~28 |
| `/pages/explore-banks.html` | `explore-banks-main` | globalnav+footer+help_strip | hlc-hero<br>hlc-panel--inputs<br>hlc-intelligence (#hlc-intel-plus / #hlc-intel-more)<br>hlc-results-shell<br>hlc-column-tab Overview/Charges/Other charges<br>hlc-filters + mobile toggle/scrim/done<br>#hlc-apply-btn + #hlc-apply-dock-btn<br>hlc-drawer | logos | buttons:42, inputs:18, selects:4, details:1 |  | ~22 |
| `/pages/apply.html` | `hl-apply hl-apply--review` | globalnav+footer+help_strip | hl-apply--review<br>hl-apply-context<br>hl-apply-bag | logos | buttons:7, inputs:0, selects:0, details:1, iframes:0 |  | ~11 |
| `/pages/apply-contact.html` | `hl-apply hl-apply--contact` | globalnav+footer+help_strip | hl-apply--contact<br>hl-apply-contact-header<br>hl-apply-submit-notice | logos | buttons:7, inputs:4, selects:0, details:1, iframes:0 |  | ~13 |
| `/pages/calculators.html` | `calc-main` | globalnav+footer+prefooter+help_strip | calc-hero<br>calc-hub 7× `.calc-hub-card` (emi, tenure, loan-amount, how-much-loan, prepayment, balance-transfer, tax-savings) | logos | buttons:5, inputs:0, selects:0, details:1 |  | ~9 |
| `/pages/calculators/emi.html` | `calc-main` | globalnav+footer+prefooter+help_strip | calc-crumb, calc-hero, calc-controls, calc-readout, calc-amort, calc-assumptions, calc-guide-links, calc-related | logos | buttons:6, inputs:6, selects:0, details:1, iframes:0 |  | ~13 |
| `/pages/calculators/how-much-loan.html` | `calc-main` | globalnav+footer+prefooter+help_strip | same calc stack **plus** `coApplicant` Yes/No + `#co-applicant-fields[hidden]` | logos | buttons:5, inputs:14, selects:1, details:1, iframes:0 |  | ~13 |
| `/pages/calculators/loan-amount.html` | `calc-main` | globalnav+footer+prefooter+help_strip | calc-crumb, calc-hero, calc-controls, calc-readout, calc-assumptions, calc-guide-links, calc-related | logos | buttons:5, inputs:6, selects:0, details:1, iframes:0 |  | ~11 |
| `/pages/calculators/prepayment.html` | `calc-main` | globalnav+footer+prefooter+help_strip | same calc stack (no amort) | logos | buttons:5, inputs:11, selects:0, details:1, iframes:0 |  | ~11 |
| `/pages/calculators/balance-transfer.html` | `calc-main` | globalnav+footer+prefooter+help_strip | same calc stack (no amort) | logos | buttons:5, inputs:9, selects:0, details:1, iframes:0 |  | ~11 |
| `/pages/calculators/tenure.html` | `calc-main` | globalnav+footer+prefooter+help_strip | same calc stack (no amort) | logos | buttons:5, inputs:6, selects:0, details:1, iframes:0 |  | ~11 |
| `/pages/calculators/tax-savings.html` | `calc-main` | globalnav+footer+prefooter+help_strip | same calc stack (no amort); 20 inputs | logos | buttons:5, inputs:20, selects:0, details:1, iframes:0 |  | ~11 |
| `/pages/project-approvals.html` | `apf-main` | globalnav+footer+prefooter+help_strip | apf-hero<br>apf-search-panel (3 listboxes)<br>apf-result-section `#apf-more` | logos | buttons:7, inputs:3, selects:0, details:1, iframes:0 |  | ~14 |
| `/pages/guide.html` | `guide-content` | globalnav+footer+prefooter+help_strip+localnav | chapters: loan-amount, emi, tenure, rates, loan-structure, charges, project-bank-approval<br>flips: borrow, emi, rate, structure, charges<br>**in-page calcs** `#borrow-calc-form` `#emi-calc-form`<br>inner: `.guide-limits` | overview.png + 9x16 | buttons:31, inputs:9, selects:1, details:1 |  | ~24 |
| `/pages/guide-documents.html` | `guide-content mag` | same | chapters: kyc, income, property, other — **0 flips**, 10 tabs (see Instance inventory for `.guide-doc-row` panels) | documents.png + 9x16 | buttons:15, details:1 |  | ~14 |
| `/pages/tax-benefits.html` | `guide-content mag` | same | chapters: interest, principal, under-construction, joint-loan, how-to-claim, other — **0 flips**, 4 tabs, **7 details**<br>inner: `.guide-answer-stage` `.guide-flow` `.guide-teach` | tax-benefits.png + 9x16 | buttons:9, details:7 |  | ~14 |
| `/pages/concessions.html` | `guide-content mag` | same | chapters: bank-rates, pmay, fees — **0 flips**, 6 tabs, 5 details<br>inner: `.guide-flow` | concessions.png + 9x16 | buttons:11, details:5 |  | ~12 |
| `/pages/home-loan-insurance.html` | `guide-content mag` | same | chapters: cover-types, must-buy, key-points — **0 flips**; `.mag-pair`; child links to property-cover + loan-cover | insurance.png + 9x16 | buttons:5, details:2 | child URLs (not iframes): property-home-insurance, credit-life-insurance | ~10 |
| `/pages/property-home-insurance.html` | `guide-content mag` | same | chapters: coverage, setup, pay, claim — **0 flips**, 12 tabs<br>inner: `.guide-compare-strip` `.guide-flow` | property-cover.png + 9x16 | buttons:17, details:4 |  | ~12 |
| `/pages/credit-life-insurance.html` | `guide-content mag` | same | chapters: coverage, setup, pay, claim, compare — **0 flips**, 13 tabs<br>inner: `.guide-compare-strip` `.guide-teach` `.guide-limits` | loan-cover.png + 9x16 | buttons:18, details:1 |  | ~12 |
| `/pages/home-loan-complaints.html` | `guide-content mag` | same | chapters: path, talk, write, stuck, limits, contacts<br>flip: **talk-flip** only; 12 tabs<br>inner: `.guide-flow` `.guide-climb` `.guide-share-list` | grievance.png + 9x16 | buttons:19, details:1 |  | ~14 |
| `/pages/about.html` | `(none)` — `body.about-page` | globalnav+footer (**no** help strip, **no** prefooter) | about-hero (mission h1)<br>about-band--founder: Yash Jangid (LinkedIn **icon**), Parth Gujar<br>gated comment `ABOUT_OUR_ROOTS` not in live DOM | logos | buttons:5, details:1 |  | ~8 |
| `/privacy-policy.html` | `privacy-main` | globalnav+footer+help_strip | legal-hero + toc + **16** sections: who, scope, collect, why, consent, share, cross-border, cookies, retention, security, rights, grievance, children, do-not, changes, law | logos | buttons:5, details:1 |  | ~9 |
| `/terms-of-use.html` | `terms-main` | globalnav+footer+help_strip | legal-hero + toc + **25** sections: who, scope, eligibility, acceptance, nature, fees, account, application, communications, licence, acceptable-use, ip, content, third-party, privacy, disclaimers, liability, indemnity, changes, termination, grievance, law, general, contact, summary | logos | buttons:5, details:1 |  | ~9 |
| `/sitemap.html` | `sitemap-main` | globalnav+footer+help_strip | 6 groups (href lists in Instance inventory). Guide group has **13** links including `#` chapter jumps + insurance children. **No** education-loan row | logos | buttons:5, details:1 |  | ~8 |

---

## Instance inventory (closed 2026-08-24)

Chrome footer groups are omitted below; they repeat on every page.

### Home moments (`index.html` + `js/shroffin-home-stance.js`)

| Frame name | Labelled-by | Visual |
|---|---|---|
| `Home-Hero-Initial` | `#home-hero-title` | hero CTAs |
| `Home-Moment-Compare` | `#home-lead-title` | iframe `_home-lead-compare-frame.html` |
| `Home-Moment-Browse` | `#home-browse-title` | iframe `_home-browse-privacy-mock.html` |
| `Home-Moment-BestOfAll` | `#home-best-title` | `.home-calm-phone` (`data-home-calm-phone`) |
| `Home-Moment-ZeroBias` | `#home-zero-title` | `.home-level-field` (`data-home-level-field`) |
| `Home-Moment-Transparent` | `#home-clear-title` | iframe `_home-transparent-mock.html` |
| `Home-Moment-ApplyOnce` | `#home-apply-title` | iframe `_home-apply-once-mock.html` |
| `Home-ProductDemo-Desktop` / `Phone` | spd sections | `_product-demo-frame.html` / `_product-demo-frame-mobile.html` |

User-facing `_*.html` embeds = those six only. Other `pages/_*.html` are prototypes — **out of v1 Figma**.

#### Home iframe interiors (child views — capture these, not only Pause/Replay chrome)

| Embed | What the visitor sees inside | Capture stills |
|---|---|---|
| `_product-demo-frame.html` | Explore clone: **121** buttons, **17** inputs, 1 select, 45 imgs. Filters `#spd-filters-panel`, intel `#spd-intel-tips`, drawer `#spd-drawer-title`, choreography `data-spd-searching` / `data-spd-results`. Inputs `#spd-income` `#spd-property` `#spd-age` `#spd-cibil`. | `Home-Demo-Desktop-Typing` `Searching` `Results` `Filters` `Drawer-Open` (plus Pause/Replay chrome on the parent) |
| `_product-demo-frame-mobile.html` | Same IDs; **128** buttons (phone chrome). | Same stills with `Home-Demo-Phone-*` |
| `_home-lead-compare-frame.html` | Mini compare: 7 buttons, 18 imgs; ids `#win-slot` `#fit` `#demo`. | included in `Home-Moment-Compare` |
| `_home-browse-privacy-mock.html` | 4 buttons, 5 imgs; `#panel` `#mark` `#name` `#emi` `#rate`. | included in `Home-Moment-Browse` |
| `_home-transparent-mock.html` | `#toggle-all` reveals `#details-body`. | `Home-Moment-Transparent` closed + `#details-body` open |
| `_home-apply-once-mock.html` | 4 imgs; `#app`. | included in `Home-Moment-ApplyOnce` |

Zero-bias / level-field moments paint **~30** `images/banks/*.png` in `index.html` (same files as T11).

### Explore controls (`pages/explore-banks.html`)

- Number fields: `#hlc-monthly-income` `#hlc-property-value` `#hlc-existing-emis` `#hlc-card-limits` `#hlc-tenure` `#hlc-age` `#hlc-cibil` `#hlc-coapplicant`
- Selects: `#hlc-card-load-pct` `#hlc-foir` `#hlc-occupation` `#hlc-purpose`
- Filters `data-product-filter`: govtPsu, womenApplicant, greenHome, insurance, bankPublic, bankPrivate, rateFloating, fixedRate, facilityTermLoan, overdraft
- Table tabs: `button.hlc-column-tab` Overview / Charges / Other charges
- Phone: `#hlc-filters-toggle` `#hlc-filters-panel` `#hlc-filters-scrim` `#hlc-filters-done` `#hlc-apply-dock-btn`
- Desktop continue: `#hlc-apply-btn`
- Intel: `#hlc-intel-plus` `#hlc-intel-more` — capture **both** (bible must not drop Plus)
- Help tooltips: **17** `button.hlc-field-help` + **17** `role="tooltip"` (`#hlc-help-monthly-income` … `#hlc-help-overdraft`). One representative `Explore-Tooltip-Open` is enough; do not invent an 18th.
- Result states: **filled** / **empty** (`No banks matched these inputs`) / **outside-filters** (`.hlc-outside-filters-note`). There is **no** “ineligible” label in source.

### Calculator fields (not the same tool seven times)

Amort panel exists on **EMI only** (`#calc-amort-panel`).

| Tool | `data-calc` | Fields |
|---|---|---|
| EMI | `emi` | `#principal` `#rate` `#years` + 3 range sliders. Out: `#out-emi` `#out-interest` `#out-payable` `#out-months` |
| How much loan | `how-much-loan` | price, income, existingEmis, cardLimits, rate, years, select `#foir` + sliders. **Co-applicant:** `input[name=coApplicant]` No (default) / Yes. Yes reveals `#co-applicant-fields` (`#coIncome` `#coExistingEmis` `#coCardLimits`). Capture No (fields hidden) **and** Yes (fields open). |
| Loan from EMI | `loan-amount` | emi, rate, years + sliders |
| Prepayment | `prepayment` | principal, rate, years, lumpSum, extraEmi, fee |
| Balance transfer | `balance-transfer` | outstanding, oldRate, newRate, yearsLeft, fees |
| Tenure | `tenure` | principal, rate, emi |
| Tax savings | `tax-savings` | 6 text (principal, rate, years, taxableIncome, annualRent, usedBasket) + 3 sliders + 11 radios (regime, occupancy, purpose, ready, ageBand) = **20** input nodes |

Hub tiles: 7 `.calc-hub-card` on `/pages/calculators.html` matching those tools.

### Apply fields

- Review: `#hl-continue-application` (disabled until packet), `#hl-apply-details-toggle`, `#hl-apply-your-details-panel`, `#hl-apply-banks`
- Contact: `#hl-name` `#hl-phone` `#hl-phone-ok` `#hl-email` `#hl-verify-email` `#hl-verify-status` `#hl-email-mismatch` `#hl-consent` `#hl-submit-application`

### Guide reading mode

`body.guide-reading` is the **default layout class on all 8 Guide pages**, not a visitor toggle.

Intelligence dialog `#guide-intel-dialog` is JS-mounted on all 8 (`js/shroffin-guide-intelligence.js`). Trigger class is `guide-intel-trigger guide-flip-link` (not a flip card).

**Localnav items** (`partials/guide-localnav.html`): Guide title → Overview, Documents, Tax benefits, Concessions, Insurance, If something goes wrong + CTA Explore banks. Current page uses `aria-current="page"`. Mobile: `.localnav-toggle` (JS).

### Overview in-page calculators (`pages/guide.html` only)

These are **not** the `/pages/calculators/*` tools. Empty result is `—`; panel is `[hidden]` until submit.

| Widget | Form | Fields | Result |
|---|---|---|---|
| Borrow estimate | `#borrow-calc-form` `.guide-calc-submit` | price, income, emis, cards, select `foir`, rate, years | `#borrow-calc-result[hidden]` `#borrow-calc-total` |
| EMI estimate | `#emi-calc-form` `.guide-calc-submit` | amount, rate, years | `#emi-calc-result[hidden]` `#emi-calc-total` |

At `max-width: 733px`, `.guide-calc-row` becomes one column (`css/shroffin-editorial.css`).

### Guide inner layouts (included in the chapter still — do not crop to the heading)

| Page | Extra modules inside chapters |
|---|---|
| Overview | `.guide-limits` |
| Documents | `.guide-doc-row` lists. Tabs → panels: `#kyc-panel-mandatory` `#kyc-panel-any` `#income-panel-salaried` `#income-panel-self` `#entity-panel-proprietor` `#entity-panel-partnership` `#entity-panel-company` `#property-panel-new` `#property-panel-resale` `#property-panel-construction` (labels: Mandatory, Any one of these, Salaried, Self-employed, Proprietor, Partnership, Company, New Home, Resale Home, Build on N.A. plot) |
| Tax benefits | `.guide-answer-stage` `.guide-flow` `.guide-teach` |
| Concessions | `.guide-flow` |
| Insurance hub | `.mag-pair` |
| Property cover | `.guide-compare-strip` `.guide-flow` |
| Loan cover | `.guide-compare-strip` `.guide-teach` `.guide-limits` |
| Complaints | `.guide-flow` `.guide-climb` `.guide-share-list` |

### Sitemap live hrefs (`sitemap.html`) — **no** education-loan row

| Group | Hrefs |
|---|---|
| Shroffin | `/` |
| Guide (13) | `/pages/guide.html`, `#loan-amount` `#emi` `#tenure` `#rates` `#charges`, `guide-documents`, `tax-benefits`, `concessions`, `home-loan-insurance`, `property-home-insurance`, `credit-life-insurance`, `home-loan-complaints` |
| Tools | explore-banks, apply, calculators, project-approvals |
| Company | about, privacy-policy, terms-of-use (sitemap itself is not listed here) |
| Support | mailto, tel, WhatsApp **with** ↗ |
| Calculators | hub + 7 tools |

Sitemap Tools includes Explore + Apply; **footer Tools does not** (calculators + Project Bank Finder only).

### ↗ / off-site exceptions (T12)

Same destination can look different. Capture each as its own chrome variant.

| Surface | Pattern |
|---|---|
| Help strip WhatsApp | `guide-section-link` + ↗ (`scripts/lib/site-chrome.js`) |
| Sitemap Support WhatsApp | `guide-section-link` + ↗ |
| Footer Support WhatsApp | **plain** `<a>` + visually-hidden; **no** ↗ |
| Nav Support WhatsApp | `globalnav-submenu-link` + WhatsApp **icon**; **no** `guide-section-link` (site rule) |
| Footer Connect LinkedIn | `guide-section-link` + ↗ |
| About team LinkedIn (Yash Jangid) | `.about-founder-linkedin` **icon** + visually-hidden; **no** ↗. Parth Gujar has no LinkedIn control |
| Official footer (RBI, NHB, IRDAI, NCH, Income Tax) | `guide-section-link` + ↗ |

No same-site `guide-section-link` on the 25 redesigned pages.

### Chrome skip lists (`scripts/lib/site-chrome.js`) — SOURCE-VERIFIED vs live HTML

**No prefooter:** `index.html`, `pages/about.html`, `pages/explore-banks.html`, `pages/apply.html`, `pages/apply-contact.html`, `privacy-policy.html`, `terms-of-use.html`, `sitemap.html`.

**No help strip:** `pages/about.html` only.

**Nav flyouts:** Guide trigger is `<a id="nav-guide-trigger" href="/pages/guide.html">`. Tools and Support are `<button>`s. Guide menu does **not** list property-cover / loan-cover (those are children of Insurance). Compact menu: `.globalnav-compact-toggle`, `#globalnav-compact-tray`, `.globalnav-compact-back`, drill panels — built in `js/shroffin-nav.js`.

**Footer hrefs:** `/`, Guide (6), Tools (calculators, project-approvals), Company (about, privacy, terms, sitemap), Support (mailto/tel/WhatsApp), Connect (LinkedIn ↗), official ↗ RBI, NHB, IRDAI, NCH, Income Tax.

---

## Shared component catalog (repeat across pages)

### Global nav (`partials/global-nav.html` + `js/shroffin-nav.js`)
- Flyouts (desktop): `#nav-guide-flyout`, `#nav-tools-flyout`, `#nav-support-flyout` toggled by JS and controlled by `aria-expanded`.
- Compact/mobile menu: JS builds `globalnav-compact-*` panels.
- Veil + background lock: uses `window.ShroffinMenus.lock()` and `inert` for non-owned siblings.
- Logo light/dark swap: both logo images exist; visibility is keyed off `html[data-theme]`.

### Footer (`partials/site-footer.html` + theme-boot + inline footer JS)
- Directory groups + Disclaimer with `<details>`.
- Theme pill buttons: `data-theme-pref` = `system`, `light`, `dark`.
- Official off-site links use `guide-section-link` pattern with ↗ + visually-hidden purpose.

### Prefooter CTA + Help strip (built by `scripts/lib/site-chrome.js`)
- `section.site-prefooter-cta` is conditional per-page.
- `aside.site-help-strip` is conditional per-page (omitted on `pages/about.html`).

### Guide localnav (`partials/guide-localnav.html` + `js/shroffin-guide.js`)
- Sticky bar on desktop.
- Mobile: JS injects a “localnav-toggle” and controls open/close with a veil and spacer height logic.

### Guide flip, tabs, and intelligence dialog (`pages/guide*.html` + `js/shroffin-guide-intelligence.js`)
- Flip cards: `.guide-flip` with front/back faces.
- Segmented tabs: `role="tablist"` + `role="tab"` + panels with `hidden`.
- Intelligence: triggers are dynamically mounted by JS into grey card surfaces; dialog is created as `#guide-intel-dialog`.

### Explore banks UI (`pages/explore-banks.html` + `css/shroffin-explore-banks.css` + `src/home-loan-compare.js`)
- Inputs: `.hlc-field-help` tooltips (role=tooltip elements are in DOM with `hidden`).
- Results: dynamic table and rank badges.
- Drawer: `aside#hlc-drawer` role=dialog + backdrop.
- Intelligence panel: `.hlc-intelligence` + more/plus controls.

### Apply once flow (`pages/apply.html`, `pages/apply-contact.html` + `js/home-loan-apply.js`)
- Review: `.hl-apply--review` includes “Show more details” toggle.
- Contact: `.hl-apply--contact` includes phone/email inputs, email verification status, and consent checkbox.
- Mobile behavior: fixed/sticky action areas.

### Calculators (`pages/calculators/*.html` + `css/shroffin-calculators.css` + `js/shroffin-calculators.js`)
- Hub tiles: `pages/calculators.html`.
- 7 tools: each tool has input controls + readout area, plus optional amortisation panel using `inert`.

### APF Project Bank Finder (`pages/project-approvals.html` + `js/apf-project-search.bundle.js`)
- Autocomplete inputs with listbox dropdowns (`role="listbox" hidden`).
- Results table region + loading state + “Show more”.

---

## What you must capture as states for MCP → Figma round-trip

- Every default-hidden overlay/dialog/drawer: closed AND open.
- Every tab/panel/flip back face: selected AND unselected states.
- Every disabled/enabled state for CTAs (Apply continue + submit).
- Every tooltip/popover: closed AND open.
- Every responsive variant: phone vs 834px+ vs 1440px+, plus short-height.

---

## Conflict catalog (grouped by T01–T16)


### T01 STACK / MCP OUTPUT

1. **ID: `T01-home-product-demo-mcp` (Blocker)**
Visitor sees Home product demo playback (Play/Pause/Replay) with deterministic choreography.
- Website: Home embeds iframes with `data-spd-src="pages/_product-demo-frame*.html"` and a playback button `.spd-playback`; choreography in `js/shroffin-product-demo.js`.
- Figma: treat as still-frame sequence + motion steps, not an executable component.
- Before transfer: **Spec-only in Figma**.
- Capture: `/` desktop 1440 + phone 375; chrome `Home-ProductDemo-Desktop-Pause` / `Replay` and Phone twins. **Also** iframe interiors: Typing / Searching / Results / Filters / Drawer-Open (desktop + phone). Other embeds: see Instance inventory.
- VERIFIED (automation): play/pause icon + choreography beat + Replay chrome state. Interior stills: SOURCE-VERIFIED markup in `_product-demo-frame*.html`.

2. **ID: `T01-guide-flip-tabs-intel-mcp` (Blocker)**
Visitor sees Guide flips, segmented tabs, and an Insights dialog.
- Website: flip markup `.guide-flip*`, segmented tabs `role="tab"`, and Insights dialog created in `js/shroffin-guide-intelligence.js` (`#guide-intel-dialog`) + mounted triggers.
- Figma: need variants for front/back, tab selected vs unselected, dialog open.
- Before transfer: **Both** (Figma variants + Code Connect to classnames).
- Capture: `/pages/guide.html` (and other guide pages); frames `Guide-Flip-Front`, `Guide-Flip-Back`, `Guide-SegTab-Selected`, `Guide-Insights-Dialog`, plus Overview `Guide-BorrowCalc-Empty`/`Computed` and `Guide-EmiCalc-Empty`/`Computed`.
- VERIFIED (automation): flip, segmented tabs (mobile), intelligence dialog. In-page calcs: SOURCE-VERIFIED; click UNVERIFIED-ALLOWED.

3. **ID: `T01-explore-filter-table-mcp` (Blocker)**
Visitor sees Explore filters → table → drawer.
- Website: Explore namespace `hlc-*` and drawer dialog `#hlc-drawer`; logic in `src/home-loan-compare.js` + `src/hlc-intelligence.js`.
- Figma: table and drawer must be sample-state frames.
- Before transfer: **Figma-only still frames + spec-only computations**.
- Capture: `/pages/explore-banks.html` 375 + 834; frames `Explore-Inputs-Empty`, `Explore-Inputs-Filled`, `Explore-Drawer-Open`, `Explore-Intel-Plus`, `Explore-Intel-More`, `Explore-Tab-Charges`, `Explore-FilterDrawer-Open`, `Explore-ApplyDock`. One tooltip represents all 17.
- VERIFIED (automation): help tooltip, drawer, filled/empty/sort/select/outside-filters. Column tabs + phone drawer: SOURCE-VERIFIED markup; click UNVERIFIED-ALLOWED.

4. **ID: `T01-apply-flow-mcp` (Blocker)**
Visitor sees Apply step flow and validation.
- Website: `pages/apply.html` `.hl-apply--review` + `pages/apply-contact.html` `.hl-apply--contact`; validation/verify + storage in `js/home-loan-apply.js`.
- Figma: multi-screen flow + disabled/enabled variants.
- Before transfer: **Spec-only** for network/auth, still frames for UI.
- Capture: `/pages/apply.html` + `/pages/apply-contact.html` 375 + 834; frames `Apply-Review-ShowMore-Open`, `Apply-Contact-EmailMismatch`, `Apply-Contact-SubmitEnabled`.
- VERIFIED (automation): show-more, Continue enabled→contact, phone ok / verify / mismatch / submit enabled (Firebase stubbed).

5. **ID: `T01-calculators-live-math-mcp` (High)**
Visitor sees live calculation outputs for EMI, loan amount, etc.
- Website: calculators are bound by `js/shroffin-calculators.js` to forms (`form.calc-form data-calc="..."`) and outputs like `#out-emi`.
- Figma: still frames only (empty `—` vs computed sample).
- Before transfer: **Spec-only math**, sample UI frames.
- Capture: `/pages/calculators/emi.html` (repeat 7 tools); frames `Calc-EMI-Empty`, `Calc-EMI-Computed`, `Calc-EMI-AmortOpen`. How-much: add `Calc-HowMuch-CoApplicant-No` / `Yes-FieldsOpen`. Overview in-page calcs are T01-guide (not these URLs).
- VERIFIED (automation on EMI): amort panel toggle + numeric recompute when principal changes. Co-applicant panel: SOURCE-VERIFIED; click UNVERIFIED-ALLOWED.

6. **ID: `T01-project-approvals-apf-mcp` (High)**
Visitor sees autocomplete + loading + table results.
- Website: `pages/project-approvals.html` has **three** listboxes `#apf-project-options` `#apf-developer-options` `#apf-area-options` (`role="listbox"` hidden), loading `#apf-status` / `#apf-activity`, results `#apf-results`, show more `#apf-more`. At `min-width: 735px` `.apf-fields` is 3 columns (`css/project-approvals.css`); 375–734 is stacked.
- Figma: capture loading/empty/results/show-more + all three listboxes with sample rows. Also `APF-Fields-735-3col` (compact nav still on until 834).
- Before transfer: **Spec-only data**.
- Capture: `/pages/project-approvals.html` 375 + 735 + 834; frames `APF-Loading`, `APF-Listbox-Project` `APF-Listbox-Developer` `APF-Listbox-Area`, `APF-Results`, `APF-ShowMore`, `APF-Empty-NeedDetail`.
- VERIFIED (`tests/apf.spec.js` 8/8): project listbox after typing, loading ring, results rows, empty “Enter a project…”, phone no-overflow, education-loan not in nav. **UNVERIFIED-ALLOWED:** `#apf-more`; developer/area listbox open (same widget as Project).

### T02 TOKENS VS RAW VALUES

1. **ID: `T02-shell-light-fallbacks` (High)**
Visitor sees consistent canvas and footer washes.
- Website: shell sets `--shroffin-surface: #fcfcfd` and uses `color-mix` with `--shroffin-canvas-mix-base: #ffffff`.
- Figma: variables must store resolved values per mode and include a note for `color-mix` math.
- Before transfer: **Figma variable values per mode + notes**.
- Evidence: `css/shroffin-shell.css`.
- SOURCE-VERIFIED (CSS). Hex debt across redesigned CSS: **344** `#hex` occurrences, **131** unique, **27** `var(..., #hex)` fallbacks (22 in Explore), **102** `rgba(0,0,0,…)`. Per file occurrences: shell 92, editorial 65, explore 95, apply 18, calc 3, guide 3, about 0, utility 23, home 0, calm-phone 20, level-field 1, product-demo 23, project-approvals 1.

2. **ID: `T02-home-inline-hardcode` (High)**
Visitor sees Home story band colors.
- Website: Home has inline hardcoded values in `index.html` (e.g. `--home-story-bg: #F5F5F7; --home-story-ink: #1d1d1f;`) and inline `body { color: #1d1d1f; }`.
- Figma: map to reserved home roles (`--home-story-*`) as theme-dependent frames.
- Before transfer: **Both** (capture dark/light frames; optionally refactor later).
- SOURCE-VERIFIED (`index.html` inline).

3. **ID: `T02-explore-rank-colors` (High)**
Visitor sees meaningful rank badge colors.
- Website: Explore defines rank ink/background colors via raw hex in `css/shroffin-explore-banks.css` (`--hlc-rank-helpful-ink`, `--hlc-rank-costly-*`, `--hlc-rank-grace-*`).
- Figma: create variables for those values; do not substitute shell greens/reds.
- Before transfer: **Figma setup**.
- Evidence: `css/shroffin-explore-banks.css`.
- SOURCE-VERIFIED.

4. **ID: `T02-apply-local-tokens` (High)**
Visitor sees Apply status washes and error highlighting.
- Website: `css/shroffin-apply.css` sets apply-local vars with hardcoded hex (e.g. `--apply-error-wash: #fef7f7`, `--apply-status-ok-bright`).
- Figma: include validation/status variants for those tokens.
- Before transfer: **Figma setup**.
- Evidence: `css/shroffin-apply.css`.
- SOURCE-VERIFIED.

5. **ID: `T02-calculators-hub-surface` (Medium)**
Visitor sees calculator hub tile background.
- Website: `css/shroffin-calculators.css` sets `--calc-hub-surface: #f5f5f7`.
- Figma: map to resolved tile surface value.
- Before transfer: **Figma setup**.
- Evidence: `css/shroffin-calculators.css`.
- SOURCE-VERIFIED.

### T03 NAMING

1. **ID: `T03-explore-hlc-vs-shell` (High)**
Visitor sees Explore styling that matches shell typography but uses a second palette for meaning.
- Website: Explore is an independent variable namespace: `--hlc-*` in `css/shroffin-explore-banks.css`.
- Figma: maintain separate variable groups and do not merge into shell `--shroffin-*`.
- Before transfer: **Figma setup**.
- Evidence: `css/shroffin-explore-banks.css`.
- SOURCE-VERIFIED.

2. **ID: `T03-calc-apply` (Medium)**
Visitor sees calculators and Apply share shell structure but not shell colors.
- Website: calculators use `--calc-*` in `css/shroffin-calculators.css`, Apply uses `--apply-*` in `css/shroffin-apply.css`.
- Figma: variable groups per stack.
- SOURCE-VERIFIED.

### T04 THEME

1. **ID: `T04-theme-boot-first-visit-dark` (Blocker)**
Visitor sees first visit defaults to Dark (not system).
- Website: `partials/theme-boot.html` resolves `localStorage['shroffin-color-preference']`; unset → `dark` and sets `html[data-theme]`.
- Figma: include “first visit = dark” behavioral note.
- Before transfer: **Spec-only note** + capture both modes.
- Evidence: `partials/theme-boot.html`.
- SOURCE-VERIFIED.

2. **ID: `T04-logo-swap` (High)**
Visitor sees the header logo swap with theme.
- Website: `partials/global-nav.html` renders both logos and CSS toggles visibility based on `html[data-theme]`.
- Figma: variable-driven logo variant.
- SOURCE-VERIFIED.

3. **ID: `T04-theme-pill-controls` (Medium/High)**
Visitor sees theme pill in footer with Default/Light/Dark buttons.
- Website: `partials/site-footer.html` has buttons `data-theme-pref` and inline JS listens to `shroffin-theme-change` from theme boot.
- Figma: include theme pill pressed/unpressed variants.
- SOURCE-VERIFIED (markup). Click UNVERIFIED-ALLOWED.

4. **ID: `T04-live-161616-vs-lock-121212` (Blocker)**
Visitor in Dark sees canvas **`#161616`**, not the older palette-lock **`#121212`**.
- Website: `partials/theme-boot.html` FOUC + meta theme-color; `css/shroffin-shell.css` `html[data-theme="dark"] { --shroffin-surface: #161616; }`; `site.webmanifest` `theme_color` / `background_color` `#161616`.
- Docs: `super-review-1/themes/_dark-mode-palette-lock.md` still says `#121212`.
- Figma: Dark mode variables and PWA splash must match **live `#161616`**.
- SOURCE-VERIFIED.

### T05 BREAKPOINTS / FLUIDITY

1. **ID: `T05-breakpoints-833-834` (Blocker)**
Visitor sees layout/controls change at 834px.
- Website: CSS `@media (max-width: 833px)` and JS `matchMedia("(max-width: 833px)")`.
- Figma: separate frames for mobile vs desktop/tablet variants.
- Evidence: `css/shroffin-shell.css`, `js/shroffin-guide.js`, `js/shroffin-nav.js`.
- SOURCE-VERIFIED.

2. **ID: `T05-wide-1440` (High)**
Visitor sees typography/spacing scale at 1440px.
- Website: `css/shroffin-shell.css` `@media (min-width: 1440px)` updates `--shroffin-type-*` and `--shroffin-space-*`.
- Figma: discrete wide frames.
- SOURCE-VERIFIED.

3. **ID: `T05-extra-breakpoints-735-1069` (Medium)**
Visitor sees extra type/padding at 735px and 1069px — **and** two layouts the 834 split does not cover.
- Website:
  - `css/shroffin-shell.css` `.site-prefooter-cta` title/lead sizes jump at `min-width: 735px` and `1069px`.
  - `css/shroffin-calculators.css` only changes `--calc-hub-pad` (28px → 32px).
  - `css/shroffin-guide.css` has **zero** 735/1069 queries. Editorial `min-width: 1069px` on `.mag-section` stays one column.
  - **APF:** `css/project-approvals.css` `@media (min-width: 735px)` `.apf-fields { grid-template-columns: repeat(3, …) }`. `@media (max-width: 734px)` full-width submit.
  - **Guide 733 (not 735):** `css/shroffin-editorial.css` `@media (max-width: 733px)` tightens `.guide-hero` / `.mag-*` padding and sets `.guide-calc-row { grid-template-columns: 1fr }`.
- Figma: capture prefooter at 375 / 735 / 1069 if matching type; **APF-Fields-735-3col**; **Guide-733** once (or note nearest-band).
- SOURCE-VERIFIED.

4. **ID: `T05-short-viewport-900` (Medium)**
Visitor sees tighter vertical spacing when viewport height is short.
- Website: `css/shroffin-shell.css` `@media (max-height: 900px)` tightens vertical gaps.
- Figma: capture a “short viewport” frame set.
- SOURCE-VERIFIED.

### T06 LAYOUT MODEL

1. **ID: `T06-frosted-sticky-localnav` (High)**
Visitor sees Guide localnav sticky with frosted blur.
- Website: `css/shroffin-guide.css` `.localnav { position: sticky; ... backdrop-filter ... }`.
- Figma: blur + sticky overlay simulation needs special care.
- SOURCE-VERIFIED.

2. **ID: `T06-apply-fixed-mobile-cta` (Blocker)**
Visitor sees Apply actions pinned at the bottom on mobile.
- Website: `css/shroffin-apply.css` uses `position: sticky` under review and `position: fixed` for contact actions under `max-width: 833px`.
- Figma: fixed positioning variants.
- SOURCE-VERIFIED.

3. **ID: `T06-explore-drawer-dialog` (High)**
Visitor sees overlay drawer dialog.
- Website: `pages/explore-banks.html` contains `aside.hlc-drawer[role=dialog]` and `div.hlc-drawer-backdrop` hidden.
- Figma: overlay layout variants with backdrop.
- SOURCE-VERIFIED (markup). Open state VERIFIED by Playwright.

### T07 COMPONENT MODEL

1. **ID: `T07-chrome-partials-sync` (Medium/High)**
Visitor sees consistent navigation and footer.
- Website: chrome is the shared source of truth via partials filled by scripts (`scripts/sync-site-nav.js`, `scripts/sync-site-footer.js`, `scripts/sync-theme-boot.js`, `scripts/sync-guide-localnav.js`).
- Figma: model chrome as one reusable component with per-page “current” variants.
- SOURCE-VERIFIED.

2. **ID: `T07-prefooter-help-conditional` (High)**
Visitor sees prefooter CTA and help strip present/absent depending on page.
- Website: exact skip sets in `scripts/lib/site-chrome.js` (listed under Instance inventory). Live HTML matches.
- Figma: conditional variants per page.
- SOURCE-VERIFIED.

### T08 STATE / INTERACTION

Status key: **VERIFIED** = Figma spec 19/19 and/or `tests/apf.spec.js` 8/8. **SOURCE-VERIFIED** = live HTML/CSS/JS. **UNVERIFIED-ALLOWED** = state fully named for capture; click not in those specs.

1. **ID: `T08-globalnav-flyout` (Blocker)**
Visitor sees nav flyouts open/close with aria-expanded and veil.
- Website: `partials/global-nav.html` + `js/shroffin-nav.js`. Guide trigger is an `<a>`; Tools/Support are `<button>`s.
- Figma: flyout open/closed variants for all three.
- Capture: click `#nav-guide-trigger` / `#nav-tools-trigger` / `#nav-support-trigger`.
- VERIFIED (automation): `#nav-guide-flyout` only. Tools + Support: UNVERIFIED-ALLOWED.

2. **ID: `T08-compact-nav` (Blocker)**
Visitor on phone sees hamburger → tray → drill panels → back.
- Website: `js/shroffin-nav.js` injects `.globalnav-compact-toggle`, `#globalnav-compact-tray`, `.globalnav-compact-back`.
- Capture: 375, open menu, drill Guide and Tools.
- SOURCE-VERIFIED. Click UNVERIFIED-ALLOWED.

3. **ID: `T08-hover-focus` (High)**
Visitor sees hover and focus paints (not only click-open).
- Website: **243** `:hover` rules in redesigned CSS (shell 64, editorial 56, explore 56, apply 25, calc 18, others). Focus/invalid on Apply + calc fields.
- Figma: hover + focus variants for primary CTA, nav links, table rows, hub tiles, footer links.
- SOURCE-VERIFIED. Click not required if CSS is the recipe.

4. **ID: `T08-guide-localnav-toggle` (High)**
Visitor sees localnav collapses on mobile.
- Website: `partials/guide-localnav.html` + `js/shroffin-guide.js` injects `.localnav-toggle` and veil.
- Capture: mobile width 375, click `.localnav-toggle`.
- VERIFIED (automation, Overview only).

5. **ID: `T08-guide-flip-link` (Blocker)**
Visitor sees cards flip. Live flips (only): `#borrow-flip` `#emi-flip` `#rate-flip` `#structure-flip` `#charges-flip` on Overview; `#talk-flip` on Complaints. Six Guide pages have **zero** `.guide-flip`. Insurance hub uses `.guide-flip-link` as **navigation** to child pages, not a flip.
- VERIFIED (automation): `#borrow-flip` only. Other five flips: UNVERIFIED-ALLOWED.

6. **ID: `T08-guide-segmented-tabs` (Blocker)**
Visitor sees segmented tab panels swap and `hidden` toggles.
- Website: `role="tablist"` with `.guide-seg-btn` and `.guide-seg-panel[hidden]`. Counts per page in the master table.
- VERIFIED (automation): Overview `#borrow-flip` tabs on 375. Other pages: UNVERIFIED-ALLOWED.

7. **ID: `T08-guide-intel-dialog-open` (High)**
Visitor sees Insights dialog open.
- Website: `#guide-intel-dialog` mounted on all 8 Guide pages.
- VERIFIED (automation): Overview. Other pages: UNVERIFIED-ALLOWED.

8. **ID: `T08-explore-help-tooltip` (High)**
Visitor sees input help tooltips (hover).
- Website: `.hlc-field-help-popover[role=tooltip][hidden]`.
- VERIFIED (automation, hover).

9. **ID: `T08-explore-drawer-open` (Blocker)**
Visitor sees bank drawer open.
- Website: `aside#hlc-drawer[role=dialog]` + `#hlc-drawer-backdrop`.
- VERIFIED (automation).

10. **ID: `T08-explore-table-empty-vs-ineligible` (Blocker)**
Visitor sees **empty** (“No banks matched these inputs”), **filled**, or **outside-filters** (`.hlc-outside-filters-note`). There is no “ineligible” string in `src/home-loan-compare.js`.
- VERIFIED (automation): filled, empty, outside-filters, sort, selected row.

11. **ID: `T08-explore-column-tabs` (High)**
Visitor sees Overview / Charges / Other charges column groups.
- Website: `button.hlc-column-tab[role=tab]`.
- SOURCE-VERIFIED. Click UNVERIFIED-ALLOWED.

12. **ID: `T08-explore-filter-drawer-mobile` (Blocker)**
Visitor on phone opens Filters sheet and uses the bottom Apply once bar.
- Website: `#hlc-filters-toggle` `#hlc-filters-panel` `#hlc-filters-scrim` `#hlc-filters-done` `#hlc-apply-dock-btn`.
- SOURCE-VERIFIED. Click UNVERIFIED-ALLOWED.

13. **ID: `T08-apply-show-more` (High)**
Visitor sees “Show more details” expand panel.
- Website: `#hl-apply-details-toggle` / `#hl-apply-your-details-panel`.
- VERIFIED (automation).

14. **ID: `T08-apply-contact-validation` (Blocker)**
Visitor sees phone ok, email verify status, mismatch message, and disabled/enabled submit.
- Website: `#hl-phone-ok` `#hl-verify-status` `#hl-email-mismatch` `#hl-submit-application`.
- VERIFIED (automation, Firebase stubbed).

15. **ID: `T08-calc-amort-panel-toggle` (High)**
Visitor sees amortisation panel open/closed — **EMI tool only**.
- Website: `#calc-amort-panel[inert]`.
- VERIFIED (automation, EMI).
- Related (How-much, not amort): `input[name=coApplicant]` + `#co-applicant-fields[hidden]`. SOURCE-VERIFIED. Click UNVERIFIED-ALLOWED.

16. **ID: `T08-apf-autocomplete` (High)**
Visitor sees dropdown listbox of options while typing.
- Website: three listboxes `#apf-project-options` `#apf-developer-options` `#apf-area-options`; `#apf-status`; `#apf-activity`; `#apf-results`; `#apf-more`.
- VERIFIED (`tests/apf.spec.js`): `#apf-project-options` after typing, loading ring, results, empty prompt. UNVERIFIED-ALLOWED: `#apf-more`; developer/area listbox open.

17. **ID: `T08-home-moment-animated-settle` (Medium/High)**
Visitor sees Home story moments animate only when scrolling down and reset when scrolling up.
- Website: `js/shroffin-home-stance.js` toggles `.home-moment.is-in`. Six moments listed in Instance inventory.
- VERIFIED (automation): at least one `.is-in`. Other five stills: UNVERIFIED-ALLOWED.

### T09 MOTION

1. **ID: `T09-guide-scroll-scrub` (Blocker)**
Visitor sees scroll-linked scrub for Guide blocks.
- Website: `js/shroffin-scrub.js` updates `--guide-scrub` for `[data-guide-scrub="on"]`. Counts: Overview 2, Documents 0, Tax 5, Concessions 2, Insurance hub 2, Property 4, Loan cover 5, Complaints 3.
- Figma: still frames + documented scrub progression.
- SOURCE-VERIFIED.

2. **ID: `T09-home-scroll-settle` (High)**
Visitor sees soft settle animations when scrolling down.
- Website: `js/shroffin-home-stance.js` uses IntersectionObserver + `.is-in`. Duration tokens: `--shroffin-micro-duration: 0.5s`, `--shroffin-ui-duration: 0.85s`, `--shroffin-move-duration: 1s`, `--shroffin-reveal-duration: 1.45s`, `--shroffin-ease: cubic-bezier(0.22, 1, 0.36, 1)`.
- SOURCE-VERIFIED. One `.is-in` VERIFIED by Playwright.

3. **ID: `T09-product-demo-choreography` (Blocker)**
Visitor sees timed demo choreography.
- Website: `js/shroffin-product-demo.js`.
- VERIFIED (automation): playing beat + Replay chrome.

### T10 DATA-DRIVEN UI

1. **ID: `T10-explore-json-match` (Blocker)**
Visitor sees bank matches based on eligibility inputs.
- Website: Explore uses `home-loans-compare.json` and rules engine to compute table rows.
- Figma: sample-state only; label frames “sample JSON”.

2. **ID: `T10-calculators-live-math` (Blocker)**
Visitor sees computed numeric outputs.
- Website: calculators use `window.ShroffinLoanMath`.
- Figma: still frame “computed sample”.

3. **ID: `T10-apply-storage-network` (Blocker)**
Visitor sees email verification and submit flow.
- Website: `js/home-loan-apply.js` uses Firebase config + sessionStorage packet.
- Figma: behavior spec only.

4. **ID: `T10-apf-search-data` (High)**
Visitor sees APF matching results.
- Website: `js/apf-project-search.bundle.js` + datasets.
- Figma: sample rows.

### T11 ASSETS

1. **ID: `T11-fonts-and-logos` (Medium)**
Visitor sees correct typography and brand marks.
- Website: `@font-face` Google Sans Flex in `css/shroffin-shell.css`. Font files **present** (not gitignored) under `fonts/GoogleSansFlex/` and `fonts/RobotoMono/`. Logos: 20 files in `images/logos/` including `logo-h-light-clear-781x173.png` and `logo-h-dark-clear-781x173.png`.
- SOURCE-VERIFIED.

2. **ID: `T11-bank-logos` (Medium)**
Visitor sees bank marks.
- Website: **33** PNGs in `images/banks/` matching `src/bank-logos.js` (`BANK_LOGO_FILES`). Extra file `normalize-report.json` is not a logo. **Home** also paints ~30 of those PNGs in `index.html` (zero-bias / level-field), not only Explore.
- SOURCE-VERIFIED.

3. **ID: `T11-guide-heroes` (Low/Medium)**
Visitor sees guide hero images.
- Website: **16** files in `images/guide-heroes/` — 8 landscape + 8 `*-9x16.png` (overview, documents, tax-benefits, concessions, insurance, property-cover, loan-cover, grievance).
- SOURCE-VERIFIED.

4. **ID: `T11-product-demo-media` (Medium)**
Visitor sees product demo wallpapers and Safari chrome.
- Website: `media/demos/` has **7** files: `product-demo-desktop-900.jpg/.webp`, `product-demo-desktop-1200.webp`, `product-demo-desktop.jpg`, `explore-banks-demo.webm`, `preview-8s.png`, `preview-end.png`.
- SOURCE-VERIFIED.

### T12 COPY / A11Y

1. **ID: `T12-offsite-link-pattern` (High)**
Visitor sees off-site links with the official-page cue — **except** the variants in Instance inventory (footer WhatsApp no ↗; nav WhatsApp icon; About LinkedIn icon).
- Website: default `guide-section-link` + `guide-section-link-arrow` ↗ + `.visually-hidden`. Exceptions are listed under **↗ / off-site exceptions**.
- Figma: must preserve each variant; do not apply ↗ to footer WhatsApp or About icon.
- SOURCE-VERIFIED.

2. **ID: `T12-hidden-aria-inert-visibility` (High)**
Visitor/AT depends on aria states.
- Website: drawers `aria-hidden`, tooltips `hidden`, amortisation panels `inert`, Overview calc results `[hidden]`, `#co-applicant-fields[hidden]`.
- Figma: capture both visible and “closed but present” states.

### T13 BUILD / SOURCE OF TRUTH

1. **ID: `T13-partials-and-sync-scripts` (Medium)**
Visitor sees chrome built from partials and synced by scripts.
- Website: `package.json` scripts `build:nav`, `build:footer`, `build:theme-boot`, `build:guide-localnav`, `build:content`.
- Figma: treat repo partials/classes as mapping authority.

### T14 SCOPE BLEED

1. **ID: `T14-education-loan-block` (Blocker)**
Visitor does not see Education loan in redesigned v1.
- Website: commented `LEGACY_EDUCATION_PAGES` / `EDUCATION_LOAN_PRODUCT` in `partials/global-nav.html` (synced into pages). **No live href** in footer, sitemap groups, home CTAs, or `robots.txt`.
- Figma: exclude Education loan frames/CTAs.
- SOURCE-VERIFIED.

### T15 CAPTURE GAPS

1. **ID: `T15-overlay-and-drawer-missing` (Blocker)**
If MCP only captures default load, drawers/tooltips/dialogs/tabs/flips will be missing.

2. **ID: `T15-data-dependent-results-missing` (Blocker)**
Explore/calculators/APF results must be captured as sample computed states, or MCP output will show wrong values.

3. **ID: `T15-motion-stillframes` (High)**
Home and Guide motion progression must be captured as still frames + sequencing notes.

### T16 ROUND-TRIP

1. **ID: `T16-avoid-token-breaking-roundtrip` (Blocker)**
Any attempt to “implement from Figma” with new raw hex values or with Tailwind-like structure will cause drift and broken theme/breakpoint logic.
- Website: freeze rules forbid new `--dark-*` vocabularies and forbid new raw hex fallbacks on redesigned surfaces.
- Figma: enforce variable CODE syntax and class/component mapping to existing repo names.


## Must edit before Figma transfer (ordered)

1) **Figma setup: tokens first (variable names must match CSS)**
- Create Figma variable groups that mirror the repo’s CSS custom property namespaces:
  - Shell: `--shroffin-*` (Light/Dark modes).
  - Explore: `--hlc-*` (Light/Dark modes).
  - Calculators: `--calc-*` (Light/Dark modes).
  - Apply: `--apply-*` (Light/Dark modes), plus shared `--hlc-logo-plate*`.
- Add a short note in the token file: the repo uses `html[data-theme]` and “first visit defaults to dark,” not system/default-first. **Dark canvas live value is `#161616`** (not `#121212`).

2) **Figma setup: component variants (do not rely on “default closed”)**
- Build components with variants for:
  - Global nav flyouts (open/closed) and compact/mobile drill panels.
  - Footer theme pill (system/light/dark pressed/unpressed) and disclaimer `<details>` (open/closed).
  - Guide flip cards (front/back), segmented tabs (selected/unselected panels), and the Insights dialog (open/closed).
  - Explore: help tooltip, bank drawer, column tabs, phone filter drawer + apply dock, table empty/filled/outside-filters.
  - Hover + focus on primary CTA, nav, rows, hub tiles (243 CSS `:hover` rules).
  - Apply: Review show-more panel (open/closed) and Contact validation states (invalid/valid/submit disabled vs enabled).
  - Calculators: output `—` empty state vs computed sample, and amortisation panel (open/closed).
  - APF: autocomplete listbox (hidden/open), loading state, results table (empty/results), and “Show more”.

3) **Repo/MCP setup: make Code Connect target the real site language**
- When wiring Figma → repo, ensure your mapping uses the real class/variable names from this repo (e.g. `hlc-*`, `calc-*`, `apply-*`), not Tailwind-style patterns.
- Before exporting any Figma-to-repo changes, run these existing sanity checks so chrome/theme/token assumptions don’t drift:
  - `npm run check:nav`
  - `npm run check:footer`
  - `npm run check:theme-boot`
  - `npm run check:guide-localnav`

---

## Capture bible (tickable)

Theme: capture **Light + Dark** for each stack below. Viewports: **375**, **834**, **1440** for chrome + each stack (not every legal paragraph). Short viewport (`max-height: 900`) once on Home or Guide. Prefooter type at **735 / 1069** once if matching live type. **Also once:** `APF-Fields-735-3col`; `Guide-733` (editorial padding + `.guide-calc-row` 1-col).

Hover: one frame per stack (`Hover-PrimaryCta`, `Hover-NavLink`, `Hover-TableRow`, `Hover-HubTile`) — a documented **subset** of 243 CSS `:hover` rules, not 243 frames.

### Chrome
- [ ] `Nav-Flyout-Guide-Open` / Closed (VERIFIED click)
- [ ] `Nav-Flyout-Tools-Open` / `Nav-Flyout-Support-Open`
- [ ] `Nav-Compact-Root-Open` / `Nav-Compact-Drill-Guide` / `Nav-Compact-Drill-Tools`
- [ ] `Footer-ThemePill-System|Light|Dark-Pressed`
- [ ] `Footer-Disclaimer-Open`
- [ ] `Prefooter-CTA` present vs skipped (skip list in Instance inventory)
- [ ] `Help-Strip` present vs skipped (About skips)
- [ ] `WhatsApp-HelpStrip-Arrow` vs `WhatsApp-Footer-Plain` vs `Nav-WhatsApp-Icon`
- [ ] `Footer-LinkedIn-Arrow` vs `About-Team-LinkedIn-Icon`

### Home (`/`)
- [ ] `Home-Hero-Initial`
- [ ] `Home-Moment-Compare` (include `_home-lead-compare-frame.html` interior)
- [ ] `Home-Moment-Browse` (include `_home-browse-privacy-mock.html` interior)
- [ ] `Home-Moment-BestOfAll` (calm-phone)
- [ ] `Home-Moment-ZeroBias` (level-field; ~30 bank marks)
- [ ] `Home-Moment-Transparent` closed + `#details-body` open
- [ ] `Home-Moment-ApplyOnce` (include `_home-apply-once-mock.html`)
- [ ] `Home-ProductDemo-Desktop` Pause + Replay
- [ ] `Home-ProductDemo-Phone` Pause + Replay
- [ ] `Home-Demo-Desktop-Typing` / `Searching` / `Results` / `Filters` / `Drawer-Open`
- [ ] `Home-Demo-Phone-*` same five interiors

### Explore (`/pages/explore-banks.html`)
- [ ] `Explore-Inputs-Default` / `Explore-Inputs-Filled-Sample`
- [ ] `Explore-Tooltip-Open` (one of 17 popovers)
- [ ] `Explore-Drawer-Open`
- [ ] `Explore-Table-Empty` / `Explore-Table-Filled` / `Explore-OutsideFilters`
- [ ] `Explore-Tab-Overview` / `Explore-Tab-Charges` / `Explore-Tab-OtherCharges`
- [ ] `Explore-FilterDrawer-Open` (375) + `Explore-ApplyDock`
- [ ] `Explore-Intel-Plus` + `Explore-Intel-More`

### Apply
- [ ] `Apply-Review-ShowMore-Closed` / Open
- [ ] `Apply-Contact-Email-Verify-Disabled`
- [ ] `Apply-Contact-EmailMismatch`
- [ ] `Apply-Contact-Email-Verified-ReadyToSubmit`
- [ ] `Apply-Contact-Consent-Checked` / Unchecked

### Calculators
- [ ] Hub: 7 tiles
- [ ] EMI: Empty / Computed / AmortOpen (amort **only here**)
- [ ] How-much-loan: Empty / Computed + `CoApplicant-No` / `Yes-FieldsOpen`
- [ ] Loan-amount: Empty / Computed (emi, rate, years)
- [ ] Prepayment: Empty / Computed (principal, rate, years, lumpSum, extraEmi, fee)
- [ ] Balance-transfer: Empty / Computed (outstanding, oldRate, newRate, yearsLeft, fees)
- [ ] Tenure: Empty / Computed (principal, rate, emi)
- [ ] Tax-savings: Empty / Computed (6 text + radios regime/occupancy/purpose/ready/ageBand)

### Guide — flips (6 live only; do **not** invent flips on the other pages)
- [ ] Overview: `borrow-flip` `emi-flip` `rate-flip` `structure-flip` `charges-flip` — Front + Back each
- [ ] Complaints: `talk-flip` Front + Back
- [ ] `Guide-BorrowCalc-Empty` / `Computed`; `Guide-EmiCalc-Empty` / `Computed`
- [ ] Documents: each of the 10 tab panels with `.guide-doc-row` lists visible (ids in Instance inventory)
- [ ] Tax / Concessions / Insurance hub / Property / Loan cover / Complaints: chapter stills **including** inner modules listed in Instance inventory
- [ ] Heroes: landscape + 9x16 per page (16 files)
- [ ] `Guide-Intel-Dialog-Open` (Overview VERIFIED; one other page allowed)
- [ ] Localnav: 6 items + Explore CTA; mobile open (VERIFIED on Overview)

### About / legal / sitemap
- [ ] `About-Hero` + `About-Team` (Yash Jangid LinkedIn icon; Parth Gujar). Do **not** capture gated `ABOUT_OUR_ROOTS`.
- [ ] Privacy: hero + toc + one body section; remaining 15 as text spec (ids in master table)
- [ ] Terms: hero + toc + one body section; remaining 24 as text spec
- [ ] Sitemap: six groups with the live href lists (Guide 13 including anchors + insurance children)

### Project Approvals
- [ ] `APF-Loading` / `APF-Empty-NeedDetail` / `APF-ResultsTable`
- [ ] `APF-Listbox-Project` (VERIFIED click) / `APF-Listbox-Developer` / `APF-Listbox-Area`
- [ ] `APF-ShowMore` (named; click UNVERIFIED-ALLOWED)
- [ ] `APF-Fields-735-3col`

### Out of v1 Figma
- Education loan (comment-only in nav).
- Prototype `pages/_*.html` except the six Home embeds listed above.

---

## User-flow map

- Theme change: footer theme pill → `__shroffinApplyColorPreference()` → `html[data-theme]` flips tokens.
- Explore → Apply once: input eligibility + filters → table updates → select banks → continue to Apply review.
- Apply review → Contact: Continue enabled only after valid packet → Show more details expands a panel → Contact form verifies email + consent → submit.
- Calculators / Guide: use guide-to-calculator links as next-step specs. Overview **also** has live `#borrow-calc-form` / `#emi-calc-form` — capture as stills (empty `—` vs computed), not as executable math.
- Support: global nav Support flyout provides Email / Call / WhatsApp.

---

## What Figma cannot hold (behavior spec only)

- Live math + rules engine: Explore JSON match evaluation; calculators numeric computations.
- Network auth and Firestore: Apply email verification + submit network flow.
- Scroll-linked and timer-driven motion: Home moment settle logic and product demo choreography.
- Real table pagination/row counts derived from live datasets (use sample data only).

---

## Recommended Figma file structure (mapped to this repo)

- `00 Design System`: `--shroffin-*` token modes + base typography/spacing.
- `01 Chrome`: Global nav + Footer + Prefooter CTA + Help strip variants.
- `02 Explore`: `--hlc-*` variable group + filter/table/drawer components.
- `03 Apply`: `--apply-*` tokens + review/contact components + validation variants.
- `04 Calculators`: calculator hub + tool component pattern.
- `05 Guide`: localnav + flip/tabs/intelligence dialog components.
- `06 About & Legal`: TOC/table components.
- `07 Project Approvals`: APF autocomplete + results table.
- `08 Home`: Home moments + product demo still sequence.

---

## Risks remaining after this recipe

- If Figma variable names do not match the CSS custom property names, MCP Code Connect will drift.
- If only default frames are captured, all drawers/tooltips/dialogs/flips/tabs will be missing in MCP output.
- If `clamp()` is treated as one size, spacing/typography will mismatch at 375 vs 834 vs 1440.
- If Education loan is included in v1 Figma, it will reintroduce out-of-scope product UI.
- If Dark canvas is built as `#121212`, it will not match what visitors see (`#161616`).
