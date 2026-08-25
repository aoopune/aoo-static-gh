# Completeness audit — Figma pre-transfer conflict inventory

Auditor: independent completeness pass (this file).  
First-agent claims (not treated as truth until re-proven): `_figma-pre-transfer-conflict-audit.md`, `_figma-pre-transfer-conflict-audit-ledger.json`, extract JSON files, `tests/figma-migration-pretransfer-automated.spec.js`, `tests/apf.spec.js`.

Date: 2026-08-24 (independent re-check; CEO carve-outs applied only after source proof).

---

## 0. Verdict for the CEO

**COMPLETE** — for *this* conflict-audit work, nothing material is still unknown before you start shifting UI/UX into Figma capture. The first audit names the pages, child views, interactions, themes, and capture recipes needed for v1. Building the Figma files themselves is later work; it is not leftover audit work.

What is still remaining on the audit itself: **only live click leftovers that already have named frames** (UNVERIFIED-ALLOWED). Exact leftover clicks are listed in section 7. They do not block starting capture from the bible.

What was claimed complete and **is** now independently evidenced (including the eight items you asked this auditor to **except** from remaining work — each re-proven in source + first-audit instance inventory / bible):

1. Overview in-page estimate widgets `#borrow-calc-form` / `#emi-calc-form` — in first audit + live on `pages/guide.html`.
2. How-much-loan `coApplicant` Yes/No + `#co-applicant-fields` — in first audit + live on `pages/calculators/how-much-loan.html`.
3. Interiors of the six Home iframes (product-demo = Explore clone with filters/drawer) — census + `Home-Demo-*` stills in bible; live button counts 121 / 128.
4. APF 735px 3-column fields and Guide **733px** editorial collapse — in T05 + bible; live CSS confirmed.
5. ↗ exceptions (footer/nav WhatsApp vs help-strip; About LinkedIn icon) — T12 table + bible ticks; live patterns match.
6. Sitemap live href lists (Guide **13** including anchors + insurance children) — listed in first audit; live Guide group = 13 hrefs.
7. Guide inner layouts (`.guide-doc-row`, compare strips, flows, etc.) — per-page module table; Documents’ 10 panel ids all live.
8. APF “never clicked” contradiction — first audit cites `tests/apf.spec.js` 8/8; only `#apf-more` stays click-unproven.

Final CEO line: **COMPLETE**.

---

## 1. Evidence of the check itself

### What I opened

| Item | Path |
|---|---|
| First report | `super-review-1/figma-migration/_figma-pre-transfer-conflict-audit.md` |
| First ledger | `super-review-1/figma-migration/_figma-pre-transfer-conflict-audit-ledger.json` |
| Extract v2 | `super-review-1/figma-migration/_figma-pre-transfer-conflict-audit-extract-v2.json` (25 pages) |
| Extract v1 | `super-review-1/figma-migration/_figma-pre-transfer-conflict-audit-extract.json` (do not trust Home `rel` alone — use v2) |
| File-existence extract | `super-review-1/figma-migration/_audit-extract.json` |
| Independent census | `super-review-1/figma-migration/_completeness-census.py` → `_completeness-census-raw.json` |
| Figma Playwright | `tests/figma-migration-pretransfer-automated.spec.js` (19 tests) |
| APF Playwright | `tests/apf.spec.js` (8 tests) |
| Required URLs | `data/redesigned-pages.json` (24) + `pages/apply-contact.html` |
| Skip lists | `scripts/lib/site-chrome.js` |
| Live HTML | all 25 shipped files + six Home embed `_*.html` files |

I did not sample 2 Guide pages. I checked all 8 (table below).

### How I counted

- Parsed each of the 25 HTML files (HTML comments stripped for live education-loan hrefs).
- Compared master table + instance inventory + capture bible + ledger to live source.
- Re-counted hex / `var(..., #hex)` / `rgba(0,0,0)` / `:hover` in the 13 redesigned CSS files.
- Listed bank / hero / logo / demo assets on disk vs `src/bank-logos.js`.
- Re-ran Playwright on this pass (see contradiction resolution).

### Playwright contradiction — resolved

The brief’s example (“markdown says Playwright **failed**; ledger says VERIFIED”) is **not** present in today’s first-audit files. Both claim 19/19 on the Figma spec **plus** 8/8 on APF. On-disk specs match: **19** Figma tests + **8** APF tests = **27**.

This auditor’s runs:

| Spec | Result (this pass) |
|---|---|
| First parallel batch (4 workers) | **26 passed, 1 failed** — Replay briefly stuck on `paused` |
| Replay alone (`:443`) | **passed** (~2.2s) — flake |
| Final re-run: both specs, `--project=chromium-responsive`, 2 workers | **27 passed** (~37.9s) |

**Resolution:** Claim **19/19 + 8/8** matches this auditor’s final clean run. Product-demo interiors remain SOURCE-VERIFIED with named `Home-Demo-*` frames. APF listbox/loading/results VERIFIED via `apf.spec.js`; `#apf-more` stays UNVERIFIED-ALLOWED (not in the 8 APF tests).

Earlier completeness gap (“APF never clicked”): **RESOLVED** in the current first audit (cites `apf.spec.js`). CEO carve-out: do not treat the old claim as an open contradiction.

### What the 19 Figma-spec tests do **not** cover

| Covered | Not covered (recipes exist → UNVERIFIED-ALLOWED) |
|---|---|
| Nav Guide flyout | Tools + Support flyouts; compact/hamburger |
| Guide flip / localnav / intel / tabs (Overview) | Other Guide pages’ clicks; Overview calc submit |
| Explore tooltip / drawer / table states | Column tabs click; phone filter drawer click |
| Apply show-more / continue / contact verify | Consent-only edge without seed |
| EMI amort + recompute | Other 6 tools’ computed stills as clicks |
| Home `.is-in` (at least one) | Moments 2–6 as separate click proofs |
| Product demo Pause + Replay chrome | Interior stills are SOURCE-VERIFIED, not click-proven (chrome clicks VERIFIED on clean 27/27) |
| — | Footer theme pill; disclaimer `<details>`; hover as click |
| APF (via `apf.spec.js`) | `#apf-more` only |

### All 8 Guide pages checked (not a sample)

Live flips = elements with class token `guide-flip` (not `guide-flip-link`). Back-face ids (`borrow-calc`, `rate-ask`, …) are faces, not extra flips.

| URL | Live flips | Tabs | `<details>` | Off-site `guide-section-link` (page body census) | First report named? |
|---|---:|---:|---:|---:|---|
| `/pages/guide.html` | 5 (`borrow` `emi` `rate` `structure` `charges`) | 14 | 1 | 8 | Yes + in-page calcs + `.guide-limits` |
| `/pages/guide-documents.html` | 0 | 10 | 1 | 7 | Yes + 10 `.guide-doc-row` panel ids |
| `/pages/tax-benefits.html` | 0 | 4 | 7 | 11 | Yes + answer-stage / flow / teach |
| `/pages/concessions.html` | 0 | 6 | 5 | 8 | Yes + `.guide-flow` |
| `/pages/home-loan-insurance.html` | 0 | 0 | 2 | 8 | Yes + `.mag-pair` + child URLs |
| `/pages/property-home-insurance.html` | 0 | 12 | 4 | 7 | Yes + compare-strip / flow |
| `/pages/credit-life-insurance.html` | 0 | 13 | 1 | 8 | Yes + compare / teach / limits |
| `/pages/home-loan-complaints.html` | 1 (`talk-flip`) | 12 | 1 | 11 | Yes + flow / climb / share-list |

Flip count **6 site-wide** matches first report. Six Guide pages have **zero** `.guide-flip` cards.

### CEO carve-outs (this pass)

You instructed this auditor **not** to leave the eight items in section 0 as remaining audit blockers. Independently: the updated first audit already closed them with instance lists + bible ticks, and live HTML/CSS/JS match. Status below treats them as **CHECKED-EVIDENCED** (not remaining).

---

## 2. Page-by-page completeness table (all 25)

Independent counts = live shipped HTML (this pass census). Status uses the required enum.

| URL | First-report status | Independent counts | Gaps | Status enum |
|---|---|---|---|---|
| `/` | 6 moments + 6 embed interiors + ~30 bank PNGs | main `home-content`; iframes **6**; demo desktop **121** btn / **17** inp + 1 select; mobile **128** btn; 6 home moments | None material; demo interiors SOURCE-VERIFIED | CHECKED-EVIDENCED |
| `/pages/explore-banks.html` | Filters, tabs, drawer, dock, intel Plus+More, 17 tooltips | btn 42; inp 18; 10 `data-product-filter`; 17 tooltips; 3 column tabs | Representative tooltip (named subset) | CHECKED-EVIDENCED |
| `/pages/apply.html` | Review + show-more + continue | `#hl-continue-application` `#hl-apply-details-toggle` | — | CHECKED-EVIDENCED |
| `/pages/apply-contact.html` | name/phone/email/consent/verify/submit | inp 4 | — | CHECKED-EVIDENCED |
| `/pages/calculators.html` | 7 hub tiles | 7 `.calc-hub-card` | — | CHECKED-EVIDENCED |
| `/pages/calculators/emi.html` | 3 fields + sliders + amort | inp 6; amort `#calc-amort-panel` EMI-only | — | CHECKED-EVIDENCED |
| `/pages/calculators/how-much-loan.html` | fields + coApplicant + hidden panel | inp 14 + select; radios + `#co-applicant-fields[hidden]` | — | CHECKED-EVIDENCED |
| `/pages/calculators/loan-amount.html` | emi/rate/years | inp 6 | — | CHECKED-EVIDENCED |
| `/pages/calculators/prepayment.html` | 6 named fields | inp 11 | — | CHECKED-EVIDENCED |
| `/pages/calculators/balance-transfer.html` | 5 named fields | inp 9 | — | CHECKED-EVIDENCED |
| `/pages/calculators/tenure.html` | principal/rate/emi | inp 6 | — | CHECKED-EVIDENCED |
| `/pages/calculators/tax-savings.html` | 20 inputs / radio groups | inp 20 | — | CHECKED-EVIDENCED |
| `/pages/project-approvals.html` | 3 listboxes + loading + results + show-more + 735 3-col; `apf.spec.js` cited | 3 listboxes; `#apf-more`; `@media (min-width: 735px)` `.apf-fields` | `#apf-more` click only | CHECKED-EVIDENCED |
| `/pages/guide.html` | 7 chapters, 5 flips, in-page calcs, inner limits | flips 5; forms `#borrow-calc-form` `#emi-calc-form` | — | CHECKED-EVIDENCED |
| `/pages/guide-documents.html` | 4 chapters, 10 tab panel ids + doc rows | all 10 panel ids live | — | CHECKED-EVIDENCED |
| `/pages/tax-benefits.html` | 6 chapters + inner modules | matches | — | CHECKED-EVIDENCED |
| `/pages/concessions.html` | 3 chapters + `.guide-flow` | matches | — | CHECKED-EVIDENCED |
| `/pages/home-loan-insurance.html` | 0 flips; `.mag-pair`; child URLs | matches | — | CHECKED-EVIDENCED |
| `/pages/property-home-insurance.html` | chapters + compare/flow | matches | — | CHECKED-EVIDENCED |
| `/pages/credit-life-insurance.html` | chapters + compare/teach/limits | matches | — | CHECKED-EVIDENCED |
| `/pages/home-loan-complaints.html` | talk-flip + inner modules | flip 1 | — | CHECKED-EVIDENCED |
| `/pages/about.html` | hero + team (Yash LinkedIn icon; Parth); roots gated | `body.about-page`; main class empty (by design); founder band live; headings Match extract | — | CHECKED-EVIDENCED |
| `/privacy-policy.html` | 16 section ids + toc | 16 `<section id>` live | bible: one body + text spec OK | CHECKED-EVIDENCED |
| `/terms-of-use.html` | 25 section ids | 25 `<section id>` live | same | CHECKED-EVIDENCED |
| `/sitemap.html` | 6 groups + Guide **13** hrefs listed | Guide group 13 hrefs match live list | — | CHECKED-EVIDENCED |

All 25 files exist on disk. Ledger `scope_pages` = 25 = redesigned 24 + apply-contact. Master table has a row for every URL.

---

## 3. Missed inventory (the important list)

**No open MISSED items** that still block this audit after gap closure + CEO carve-outs.

| Prior miss (now closed / excepted) | Evidence in first audit | Independent proof |
|---|---|---|
| Overview `#borrow-calc-form` / `#emi-calc-form` | Instance inventory + bible `Guide-BorrowCalc-*` / `Guide-EmiCalc-*` | Forms live in `pages/guide.html` (on flip backs) |
| How-much co-applicant hide | Calculator fields table + bible `CoApplicant-No` / `Yes-FieldsOpen` | `input[name=coApplicant]`; `#co-applicant-fields` |
| Six Home iframe interiors | Instance table with button/input counts + `Home-Demo-*` | Demo 121/128 buttons; filters/drawer ids present |
| APF 735 / Guide 733 | T05 + bible ticks | `project-approvals.css` min-width 735; `shroffin-editorial.css` max-width 733 |
| ↗ exceptions | T12 table + `WhatsApp-*` / About LinkedIn bible ticks | Footer WhatsApp plain; help-strip ↗; About `.about-founder-linkedin` |
| Sitemap hrefs | Instance inventory Guide (13) | Live Guide group = 13 hrefs including `#emi` etc. |
| Guide inner modules / doc rows | Per-page module table + Documents panel ids | All 10 panel ids exist |
| APF click contradiction | Cites `apf.spec.js` 8/8; Show more UNVERIFIED-ALLOWED | This pass: 8/8; `#apf-more` absent from spec |

CHECKED-THIN that is **acceptable** (named as subset / pattern):

- Hover: 4 stack frames vs **243** CSS `:hover` rules (bible says subset).
- Explore tooltips: one representative of 17.
- Privacy/Terms: one body section + id list for the rest.

---

## 4. Contradiction log

| ID | Claim A | Claim B | Resolution |
|---|---|---|---|
| C1 | Brief example: md Playwright failed | Ledger VERIFIED | **NOT PRESENT** today — both say 19/19 |
| C1b | Ledger / md: Figma 19/19 | First parallel run: Replay failed once | **FLAKE** — isolated retry + final **27/27** passed; claim stands |
| C2 | Older md: APF never clicked | `tests/apf.spec.js` | **RESOLVED** in current first audit (cites 8/8). Only `#apf-more` remains unclicked |
| C3 | Ledger `unverified: []` | Leftover clicks | **Consistent** via `unverified_allowed` / UNVERIFIED-ALLOWED |
| C4 | Conflict IDs in md | Ledger `conflict_ids` | **Match** — 62 / 62; none only-in-one |
| C5 | Extract v1 Home `rel` | Extract v2 paths | v1 weaker; inventory matches v2/live (25/25 button/input counts align) |
| C6 | Education `href` in HTML source | Live after comment-strip | **Not a live link** — 0 edu hrefs on nav/footer/home/sitemap after strip; sitemap/nav keep commented LEGACY blocks |
| C7 | Palette-lock `#121212` | Live Dark `#161616` | First audit correctly: Figma must follow **live** `#161616` (theme-boot + shell; this pass: boot/shell have `#161616`, not `#121212`) |

Scope URLs: ledger 25 = redesigned-pages 24 + apply-contact. **Match.**

---

## 5. T01–T16 coverage score

| Type | Score | Notes |
|---|---|---|
| T01 stack/MCP | complete | Demo, flips, explore, apply, calc math, APF, Overview in-page calcs named |
| T02 tokens/hex | complete | Independent recount: **344** hex / **131** unique / **27** var fallbacks / **102** `rgba(0,0,0)` — matches first report |
| T03 naming | complete | `--hlc-*` `--calc-*` `--apply-*` vs shell |
| T04 theme | complete | First visit dark; logo swap; pill; live `#161616` vs lock `#121212` |
| T05 breakpoints | complete | 833/834, 1440, 900h, 735/1069 prefooter+calc hub, **APF 735 3-col**, **Guide 733** |
| T06 layout | complete | Sticky localnav, apply fixed CTA, explore drawer |
| T07 chrome | complete | Skip lists match `site-chrome.js` (8 no-prefooter; About-only no help strip) |
| T08 states | complete for inventory | Hover named (subset). Clicks: VERIFIED where spec exists; leftovers UNVERIFIED-ALLOWED with recipes |
| T09 motion | complete (pattern) | Duration tokens; home `.is-in`; guide scrub; demo stills |
| T10 data | complete (pattern) | Explore JSON, calc math, apply storage, APF — still-frame + behavior spec |
| T11 assets | complete | Banks **33** png = `BANK_LOGO_FILES` (dir also has `normalize-report.json`); heroes 16; logos 20; `media/demos` 7; fonts on disk not gitignored |
| T12 copy/a11y | complete for exceptions | WhatsApp/LinkedIn variants table; no same-site ↗ on 25 pages (live) |
| T13 build | complete | Sync/check scripts named |
| T14 education | complete | Comment-only; not in footer/sitemap/home live hrefs; out of v1 Figma |
| T15 capture gaps | complete enough | Bible includes prior gap frames; residual = unclicked named frames |
| T16 round-trip | complete (policy) | No new hex / keep token names |

---

## 6. Capture-bible gap list

Compared to exhaustive “every hover × every page × every legal paragraph”:

| Item | Status |
|---|---|
| Overview borrow/EMI calc empty+computed | **In bible** |
| How-much co-applicant No/Yes | **In bible** |
| Home demo interiors Typing/Searching/Results/Filters/Drawer (desktop+phone) | **In bible** |
| APF 735 3-col; Guide-733 | **In bible** |
| WhatsApp three looks + About LinkedIn icon | **In bible** |
| Sitemap six groups with live hrefs | **In bible** |
| Documents 10 tab panels with doc rows | **In bible** |
| Guide inner modules “include in chapter” | **In bible** |
| APF three listboxes | **In bible** |
| Explore Intel Plus + More | **In bible** |
| Hover 243 → 4 frames | Documented **subset** — not a miss |
| Tooltip 17 → 1 representative | Documented — not a miss |
| Privacy/Terms remaining sections as text spec | Acceptable with ids inventoried |
| Dark × Light × 375/834/1440 per stack | Bible requires per stack — not every paragraph |

**No bible omission remains that blocks audit completeness** after the closures above.

---

## 7. Remaining work to close THIS audit (tickable)

**Remaining documentation tasks: 0.**

Only **UNVERIFIED-ALLOWED** live clicks (recipes already named — do not block Figma capture start):

1. [ ] Nav **Tools** flyout open/close  
2. [ ] Nav **Support** flyout open/close  
3. [ ] Compact nav root open + Guide/Tools drill  
4. [ ] Footer theme pill (system / light / dark)  
5. [ ] Footer disclaimer `<details>` open  
6. [ ] Explore column tabs click (Overview / Charges / Other charges)  
7. [ ] Explore phone filter drawer open + apply dock  
8. [ ] Guide flips other than `#borrow-flip` (5 remaining)  
9. [ ] Guide intel dialog on a second Guide page  
10. [ ] Overview in-page calc submit → computed (optional click; SOURCE-VERIFIED markup)  
11. [ ] How-much co-applicant Yes panel open (optional click)  
12. [ ] Computed stills on 6 non-EMI calculator tools (optional click)  
13. [ ] Home moments 2–6 as individual `.is-in` proofs (at least one already VERIFIED)  
14. [ ] APF `#apf-more` Show more  
15. [ ] APF developer/area listbox open (same widget as Project; Project VERIFIED)

After those clicks (or if you accept SOURCE-VERIFIED + recipes): **nothing left on this audit.**

---

## 8. What is NOT remaining

Do **not** rebuild the conflict audit. Already proven:

- All 25 required URLs exist; apply-contact is in scope.
- About is real body (hero + Meet the team), not footer-only; Our roots gated.
- Privacy 16 / Terms 25 section ids; Sitemap Guide 13 hrefs.
- Six live flips only; six Guide pages have zero `.guide-flip` cards.
- Seven calculator tools have different fields; amort EMI-only.
- Prefooter / help-strip skip lists match `site-chrome.js`.
- Education loan out of v1; no live redesigned chrome href (comment-only in nav/sitemap).
- Dark canvas visitors see `#161616`.
- Hex / hover / asset counts (344 / 243 / 33 banks / 16 heroes / 7 demos / 20 logos).
- Playwright Figma **19/19** and APF **8/8** (this auditor’s final clean **27/27**).
- Token namespaces, 834 breakpoint, logo swap, Explore empty vs outside-filters (no “ineligible” label).
- The eight CEO-excepted / gap-closed items in section 0.

Next step for the business: **start Figma capture from the closed bible** — not another inventory pass.
