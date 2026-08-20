Recommend-only. Solutions come only from `FUNDAMENTAL-SOLUTIONS-SUGGESTIONS-AND-IDEAS.md`.
Queue = still-open / looks_changed_still_open places from the fundamentals recheck.
Website files are untouched until a `CONFIRM APPLY…` reply.

## How matching was decided

1. Open queue from `_theme-fundamentals-recheck.md` / ledger (theme verdict `open`, place `still_open` or `looks_changed_still_open`).
2. Place inventory from `_theme-site-scan-ledger.json` used only as across-site context; current source + recheck decide truth.
3. Each open theme mapped by **object_kind + failure_kind** to 1–3 entries in the fundamental solutions file (by kind, not shared keywords alone).
4. Closed / `not_in_current_source` themes get **no** recommendations.
5. Theme-02: only heavy / overlapping / empty / not-plain freshness chrome — not mass legal rewrite.
6. Recipes grounded by reading current source under `aoo-static-gh`. New customer-facing copy drafts checked against `docs/brand/startup-core.md` then `docs/brand/sentence-formation-bible.md` (in `etc`).

## Counts

| Metric | Value |
|--------|------:|
| Open themes covered | 15 |
| Recommendations written | 20 |
| High confidence | 8 |
| Medium confidence | 11 |
| Low confidence | 1 |
| ask-first | 6 |
| include | 14 |
| no_matching_solution | 0 |

## By theme

### theme-01 — Hero headline and Explore banks button are not centered in the top block
No recommendations — recheck closed.

### theme-02 — Homepage sentences are too heavy, or they add nothing
Rec-01 (high, include) · Rec-02 (high, include) · Rec-03 (high, include)

### theme-03 — Zero block on scroll looks broken
No recommendations — recheck closed.

### theme-04 — “Zero commissions” mixes bank and customer, so the words are unclear
Rec-04 (medium, ask-first)

### theme-05 — Homepage story uses too many thin full-screen slides
No recommendations — recheck not_in_current_source.

### theme-06 — Built around you does not show the real product
No recommendations — recheck closed.

### theme-07 — Help strip sits off the footer, and the footer disclaimer washes its hands
Rec-05 (medium, ask-first) — help-strip place closed; only disclaimer remains.

### theme-08 — Explore banks filters are exclusive buttons and do not explain the choice
No recommendations — recheck closed.

### theme-09 — Concessions Learn more takes you off the filter, and the page has no Back
Rec-06 (high, include) · Rec-07 (medium, include)

### theme-10 — Loan-input helpers start with “Sets” and the property name is too complex
Rec-08 (high, include)

### theme-11 — CIBIL is one exact number, so the table can only show one rate
Rec-09 (low, ask-first)

### theme-12 — Explore banks lists today’s banks but does not give the hacks
Rec-10 (medium, include)

### theme-13 — Extra eligibility sits behind Adjust eligibility instead of as columns
Rec-11 (high, include) — Adjust control gone; co-applicant coaching remains.

### theme-14 — “See options” and “Explore banks” are the wrong names, and the button sits in the wrong place
Rec-12 (medium, ask-first) — button already Compare; page title remains.

### theme-15 — The loan form does not show which fields matter most
Rec-13 (medium, include)

### theme-16 — The page says banks, but the list is lenders
Rec-14 (medium, ask-first)

### theme-17 — Results tabs sit too far from the table, and Apply once is not on the checkboxes
Rec-15 (medium, include)

### theme-18 — Results need a clear edit/clear button, and there is no search for a named bank
Rec-16 (high, include) · Rec-17 (high, include) — Rec-17 follows ## 57 (do **not** add search).

### theme-19 — Scheme names live in More details, not in the product
Rec-18 (medium, ask-first)

### theme-20 — Charges and calculations do not explain themselves
Rec-19 (medium, include) · Rec-20 (medium, include)

---

## Recommendations

### Rec-01 — Best of all: one calm pace line

Theme: theme-02 — Homepage sentences are too heavy, or they add nothing  
Open places covered: R02-best-overlap  
Status now: still_open

Matched solutions:
- ## 2. Say the same story in shorter, simpler lines — cut overlapping clauses into fewer thoughts.
- ## 6. No fake urgency — people go at their own pace — replace stacked scare “no / not push” phrases with one plain pace promise.

What a person meets now: Heading “Best of all, we do not create any urgency” plus three body lines: No unnecessary calls / No sales pitch / No pushy notifications — same push denial said four ways.

Sound fix (from the matched solutions): Keep the “best of all” gift. One short pace line in the heading; one short body line. Drop the three overlapping “No …” stack.

Build recipe:
- Files: `content/pages/home.body.html` (served via `index.html` after content build)
- Code / copy to paste:

```html
            <h2 class="home-best-display home-moment" id="home-best-title">
              <span class="home-best-lead">Best of all,</span>
              <span class="home-best-aside">you go at your own pace.</span>
            </h2>
            <p class="home-best-body home-moment"><span class="home-best-body-line">We bring the full picture. No pressure to decide today.</span></p>
```

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "home-best-aside|home-best-body-line|urgency|sales pitch" content/pages/home.body.html index.html
```

- Expected after: Home Best of all block shows one pace claim and one support line; no three-line “No calls / pitch / notifications” stack.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-02 — Transparent: support that earns its place

Theme: theme-02 — Homepage sentences are too heavy, or they add nothing  
Open places covered: R02-transparent-empty  
Status now: still_open

Matched solutions:
- ## 3. Supporting lines must add value or the stretch can go — empty support under a strong heading must be rewritten or the stretch skipped.

What a person meets now: “Transparent, like never before.” Support: “You know before you choose.” — restates the heading without new fact.

Sound fix (from the matched solutions): Keep the Transparent beat. Replace the empty support with one concrete benefit line (what they see before choosing).

Build recipe:
- Files: `content/pages/home.body.html`
- Code / copy to paste (replace the clear body paragraph only):

```html
            <p class="home-clear-body home-moment"><span class="home-clear-body-lead">Rates, fees, and rules sit side by side before you pick.</span></p>
```

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "home-clear-body-lead|You know before you choose" content/pages/home.body.html index.html
```

- Expected after: Transparent support names what is transparent (rates/fees/rules side by side), not a tautology.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-03 — Freshness in trust English

Theme: theme-02 — Homepage sentences are too heavy, or they add nothing  
Open places covered: R02-freshness  
Status now: still_open

Matched solutions:
- ## 56. Say data freshness in clear trust language — replace awkward “data last checked” style with polished trust wording.

What a person meets now: Results freshness string built as `Last checked on` + date (`formatFreshnessLabel` in `src/home-loan-compare.js`).

Sound fix (from the matched solutions): Change the label to clear trust English such as “Updated …” (date still from the same ISO field).

Build recipe:
- Files: `src/home-loan-compare.js` (then bundle)
- Code / copy to paste:

```javascript
function formatFreshnessLabel(isoDate) {
  if (!isoDate) return "";
  const date = formatCheckedOnDate(isoDate);
  if (!date) return "";
  return "Updated " + date;
}
```

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
rg -n "Last checked on|Updated " src/home-loan-compare.js
npm run build:compare
rg -n "Updated |Last checked on" js/home-loan-compare.bundle.js | head
```

- Expected after: Explore banks freshness note reads “Updated &lt;date&gt;”, not “Last checked on …”.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-04 — Zero block: one fairness voice

Theme: theme-04 — “Zero commissions” mixes bank and customer, so the words are unclear  
Open places covered: R04-zero-mix  
Status now: looks_changed_still_open

Matched solutions:
- ## 5. One clear voice about fairness, without inviting how you earn — one unmixed customer-side fairness voice; avoid “zero” that sounds like a customer fee of zero, and avoid mixing bank-cut with not-pushing in one promise.

What a person meets now: “Zero bank commissions” + “Zero bias” + fair-view body. Bank-side cut and customer-side not-push still share one zero promise.

Sound fix (from the matched solutions): Single customer-facing fairness claim (no paid rankings / fair view). Drop dual Zero pair that mixes commission-cut with bias. Exact final words need founder sign-off (startup-core: no commission; avoid “scammy zero-commission billboard” tone).

Build recipe:
- Files: `content/pages/home.body.html`
- Code / copy to paste (proposed; founder may edit wording before apply):

```html
            <h2 class="home-zero-display" id="home-zero-title">
              <span class="home-zero-pair">
                <span class="home-zero-zero">Fair</span>
                <span class="home-zero-rest">view. No paid rankings.</span>
              </span>
            </h2>
            <p class="home-zero-body"><span class="home-zero-body-lead">We take no cut from lenders,</span><span class="home-zero-body-tail"> so no one is pushed ahead of another.</span></p>
```

Note: CSS currently expects paired `.home-zero-pair` beats; after apply, confirm zero-section CSS still reveals cleanly with one pair (or keep two pairs only if both stay on the same customer-side meaning).

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "home-zero-rest|Zero bias|bank commissions" content/pages/home.body.html index.html
```

- Expected after: One fairness story; a stranger cannot read the block as “I pay zero fees” mixed with “we don’t push banks.”

Confidence: medium  
Needs founder word choice: yes  
Apply default: ask-first

---

### Rec-05 — Footer limits that stand with the customer

Theme: theme-07 — Help strip sits off the footer, and the footer disclaimer washes its hands  
Open places covered: R07-disclaimer  
Status now: looks_changed_still_open

Matched solutions:
- ## 17. Keep the legal limits, but sound like you stand with the customer — keep “not the lender / do not approve”; say it as standing with the customer.
- ## 16. Important trust words should not live only in ignored bottom legal text — if a trust fact matters, also show it where people read (here: lead the block with stand-with-you + no-fee independence, not only hand-washing title).

What a person meets now: Title “Disclaimer” then legal limits first; “Even so, we try our best…” is second. Help strip flush is already closed.

Sound fix (from the matched solutions): Keep every legal limit. Retitle and reorder so the customer-side turn leads; limits follow. Align with startup-core standing disclaimer (limits + “Even so, we try our best…” + no customer fee / not paid to rank). Founder must approve legal title/order.

Build recipe:
- Files: `partials/site-footer.html` (sync to pages via footer build)
- Code / copy to paste (proposed structure):

```html
          <h2 class="site-footer-disclaimer-title" id="footer-disclaimer">How we work with you</h2>
          <div class="site-footer-disclaimer">
            <p class="site-footer-disclaimer-turn">We try our best for you. We show each lender's home loan clearly, one next to the other. We do not charge you a fee, and we are not paid by banks to rank or recommend lenders.</p>
            <p class="site-footer-disclaimer-summary">Shroffin is not a bank, a Non-Banking Financial Company (NBFC), or a lender. We do not approve, sanction, underwrite, or disburse loans. The lender decides your rate, your fees, and whether you are approved.</p>
            <details class="site-footer-disclaimer-more">
              <summary>Read the full limits</summary>
              <!-- keep existing full disclaimer paragraphs -->
```

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:footer
npm run check:footer
rg -n "footer-disclaimer|How we work|Disclaimer" partials/site-footer.html index.html pages/explore-banks.html | head
```

- Expected after: Footer legal block opens as standing-with-you; limits remain complete and accurate.

Confidence: medium  
Needs founder word choice: yes  
Apply default: ask-first

---

### Rec-06 — Concessions explained on the filter

Theme: theme-09 — Concessions Learn more takes you off the filter, and the page has no Back  
Open places covered: R09-learn-more  
Status now: still_open

Matched solutions:
- ## 22. Explain what each filter choice means where people decide — do not send people off-page to learn a filter; put trade-offs and examples on the choice itself.

What a person meets now: Shared concessions help plus `Learn more` → `concessions.html#bank-rates`. Options Women / Green / Insurance have no per-option notes.

Sound fix (from the matched solutions): Add a short note under each concession option (trade-off + example). Remove the off-filter `Learn more` link from the filter popover (guide page can stay in Guide nav).

Build recipe:
- Files: `content/pages/explore-banks.body.html`
- Code / copy to paste:

1. In `#hlc-help-concessions`, delete the `<a class="hlc-field-help-more" href="concessions.html#bank-rates">Learn more</a>` line; keep the short shared help text.
2. Replace the three concession labels with titled + note pattern (match Bank type options):

```html
                    <label class="hlc-filter-option">
                      <input type="checkbox" data-product-filter="womenApplicant" />
                      <span class="hlc-filter-option-label">
                        <span class="hlc-filter-option-title">Women applicant</span>
                        <span class="hlc-filter-option-note">Often 0.05–0.10% off when the woman is applicant or co-applicant.</span>
                      </span>
                    </label>
                    <label class="hlc-filter-option">
                      <input type="checkbox" data-product-filter="greenHome" />
                      <span class="hlc-filter-option-label">
                        <span class="hlc-filter-option-title">Green home</span>
                        <span class="hlc-filter-option-note">Small rate cut if the project meets the lender’s green rules.</span>
                      </span>
                    </label>
                    <label class="hlc-filter-option">
                      <input type="checkbox" data-product-filter="insurance" />
                      <span class="hlc-filter-option-label">
                        <span class="hlc-filter-option-title">Insurance</span>
                        <span class="hlc-filter-option-note">Rate cut can cost less than the premium added to the loan. You can’t be forced to buy their cover.</span>
                      </span>
                    </label>
```

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "concessions.html#bank-rates|hlc-filter-option-note|womenApplicant" content/pages/explore-banks.body.html pages/explore-banks.html
```

- Expected after: Concessions can be understood on Explore banks without leaving; no Learn more leave-path from that help popover.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-07 — Clear return from Concessions guide

Theme: theme-09 — Concessions Learn more takes you off the filter, and the page has no Back  
Open places covered: R09-no-back  
Status now: still_open

Matched solutions:
- ## 22. Explain what each filter choice means where people decide — completing the leave path: if someone still opens the guide, they need an obvious return to the decide surface.

What a person meets now: Concessions guide localnav CTA “Explore banks” only; no Back that returns to the filter/compare surface.

Sound fix (from the matched solutions): Keep Guide nav. Change the localnav CTA label/target clarity to “Back to compare” → `explore-banks.html` (same destination, return-named). Prefer editing `partials/guide-localnav.html` then sync (source of truth for injected localnav).

Build recipe:
- Files: `partials/guide-localnav.html` (sync updates `content/guide/*.body.html` and served guide pages)
- Code / copy to paste:

```html
      <a class="localnav-cta" href="explore-banks.html">Back to compare</a>
```

If founder wants Back only on Concessions (not all Guide pages), instead add a one-line return link in `content/guide/concessions.body.html` above the hero (outside the synced localnav markers) and leave other guides unchanged — ask before that narrower variant.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:guide-localnav
rg -n "Back to compare|Explore banks" partials/guide-localnav.html pages/concessions.html content/guide/concessions.body.html
```

- Expected after: From Concessions, a clearly named control returns to Explore banks / compare.

Confidence: medium  
Needs founder word choice: no  
Apply default: include

---

### Rec-08 — Why we ask + clearer property amount name

Theme: theme-10 — Loan-input helpers start with “Sets” and the property name is too complex  
Open places covered: R10-sets-row, R10-sets-emi, R10-property-label  
Status now: looks_changed_still_open

Matched solutions:
- ## 23. Helper text should say why a field matters, in everyday words — answer why you ask; do not lead with vague “Sets …”.
- ## 24. Name the field so people know which figure to type — short label for the sale-agreement amount, not a stacked qualifier phrase.

What a person meets now: Row-abouts still start with “Sets how much you can borrow” and “Sets loan amount and monthly EMI”. Label “Property value as per agreement”.

Sound fix (from the matched solutions): Rewrite row-abouts as why-we-ask lines. Shorten property label to the agreement figure name; put registrar-vs-valuation teaching in the existing help popover (already strong).

Build recipe:
- Files: `content/pages/explore-banks.body.html`
- Code / copy to paste:

```html
                  <div class="hlc-form-row-head"><p class="hlc-form-row-about">Why we ask: lenders size your loan from this income</p></div>
```

```html
                  <div class="hlc-form-row-head"><p class="hlc-form-row-about">Why we ask: tenure and EMI room shape the loan you see</p></div>
```

```html
                      <span class="hlc-field-label">Sale agreement amount<sup class="hlc-req" aria-hidden="true">*</sup>
```

(Remove `<span class="hlc-field-label-qualifier"> as per agreement</span>`; keep the help popover that already teaches agreement vs valuation.)

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "Sets how much|Sets loan|as per agreement|Sale agreement|Why we ask" content/pages/explore-banks.body.html pages/explore-banks.html
```

- Expected after: No “Sets …” row-abouts; property box names the agreement amount clearly.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-09 — CIBIL bands and both rates in the list

Theme: theme-11 — CIBIL is one exact number, so the table can only show one rate  
Open places covered: R11-cibil  
Status now: still_open

Matched solutions:
- ## 25. Let people work in score bands, not only one exact number — bands/ranges with progressive suggestions.
- ## 27. When a lender gives a score band, show both rates and both loans — one single rate hides which offer is lowest.
- ## 37. Keep the score as a free number people can type — do not force the field into a range-only picker.

What a person meets now: Required exact 3-digit CIBIL input (default 780). Help says exact number not required, but control and table still price one score.

Sound fix (from the matched solutions): Keep a free typed score (## 37) with band suggestions (## 25). When offer data has a score window, show both rates/amounts for that window in Overview (## 27). Large product change — founder must choose band UX and data readiness before apply.

Build recipe:
- Files: `content/pages/explore-banks.body.html`, `src/home-loan-compare.js` (and any offer-band fields already in data)
- Code / copy to paste (direction; implement only after founder confirms band model):

1. Under `#hlc-cibil`, keep free `input` typing; add a compact band chooser that fills the input (e.g. 700–749 / 750–779 / 780–799 / 800+), default middle band per ## 30 if also adopted later.
2. In Overview row render: if `row` exposes low/high rate (or score-band rates), show both rates (and both loan amounts when present) instead of a single `effectiveRoiPct` cell.
3. Do **not** replace typing with range-only UI.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
npm run build:compare
npm test
rg -n "hlc-cibil|score band|effectiveRoiPct" content/pages/explore-banks.body.html src/home-loan-compare.js | head
```

- Expected after: Person can work from a band; list can show more than one rate when the lender prices a window.

Confidence: low  
Needs founder word choice: yes  
Apply default: ask-first

---

### Rec-10 — First glance: filled form, tips, and list together

Theme: theme-12 — Explore banks lists today’s banks but does not give the hacks  
Open places covered: R12-intelligence  
Status now: looks_changed_still_open

Matched solutions:
- ## 40. Form, tips, and comparison should make sense in one glance — filled form, a few tip notes, and at least a couple of comparison rows together on first look.
- ## 19. Sensible defaults ready so people can act without typing first — already partly true (prefilled inputs); keep them visible with tips.
- ## 28. Clear tips that save money, standing on the customer’s side — change-to-save tips (engine already exists post-match).

What a person meets now: Intelligence panel exists but `hidden` until after match. First land is form only; tips+list appear after Compare.

Sound fix (from the matched solutions): On first land, show a small tip strip (2–3 presearch tips from the already-filled defaults) beside/above the form actions, and either auto-run compare once on load for the default profile **or** show a quiet “example results” preview so form + tips + a couple of rows share one glance. Keep tips out of muddy table rows (## 29 already closed for post-match engine). Prefer revealing `#hlc-intelligence` for default profile without waiting for a second click.

Build recipe:
- Files: `content/pages/explore-banks.body.html`, `src/hlc-intelligence.js`, `src/home-loan-compare.js`, `css/shroffin-explore-banks.css`
- Code / copy to paste (behavioral recipe):

1. On init, if inputs are valid defaults, call the existing match/tip path once so `#hlc-intelligence` is not `hidden` and at least two result rows render under the form.
2. Ensure tip copy names a change + savings (reuse `src/hlc-intelligence.js` headings).
3. Do not stuff tips into table cells.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:compare
npm run build:content -- --write
# Open pages/explore-banks.html in a browser: without clicking Compare, confirm tip strip + ≥2 rows visible with defaults.
rg -n "hlc-intelligence|hidden" content/pages/explore-banks.body.html src/home-loan-compare.js | head
```

- Expected after: First open already shows filled typical numbers, money-saving tips, and a short list together.

Confidence: medium  
Needs founder word choice: no  
Apply default: include

---

### Rec-11 — Co-applicant: who pays, not inflate the loan

Theme: theme-13 — Extra eligibility sits behind Adjust eligibility instead of as columns  
Open places covered: R13-coapplicant  
Status now: looks_changed_still_open

Matched solutions:
- ## 44. Do not coach people to game the form to inflate the loan — help honestly about who would actually pay; do not coach adding someone to inflate the amount.

What a person meets now: “Add a co-applicant with income to borrow more.” Fields still behind Add.

Sound fix (from the matched solutions): Rewrite the visible line to who-pays honesty. Keep Add control; stop “borrow more” coaching.

Build recipe:
- Files: `content/pages/explore-banks.body.html`
- Code / copy to paste:

```html
                            <p class="hlc-coapplicant-copy">Add a co-applicant only if they will help repay this loan.<span class="hlc-field-help-anchor"><button
```

(Keep the rest of the help popover; soft-edit popover first sentence if it still opens with “added to yours” as a tip to inflate — prefer: “Add them when their income and EMIs are real parts of how you will repay.”)

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "borrow more|coapplicant-copy|help repay" content/pages/explore-banks.body.html pages/explore-banks.html
```

- Expected after: Co-applicant line does not teach inflating the loan; it asks whether they will help repay.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-12 — Page name means compare

Theme: theme-14 — “See options” and “Explore banks” are the wrong names, and the button sits in the wrong place  
Open places covered: R14-title, R14-compare-btn  
Status now: still_open / looks_changed_still_open

Matched solutions:
- ## 46. Name the main action for comparing, not vague exploring — main button and page job should say compare.

What a person meets now: Primary button already “Compare”. Page title still “Explore banks.” Side placement of the old See options button is gone.

Sound fix (from the matched solutions): Rename page title (and document title) to compare language. Coordinate with Rec-14 (banks vs lenders) before shipping — founder picks “Compare banks.” vs “Compare lenders.”

Build recipe:
- Files: `content/pages/explore-banks.body.html`, `templates/layouts/explore-banks.html` (and any nav labels founder wants aligned)
- Code / copy to paste (default proposal if Rec-14 not yet decided — still say banks to match today’s brand one-liner; switch to lenders if Rec-14 ships first):

```html
        <h1 class="hlc-title"><span class="hlc-title-wash">Compare banks.</span></h1>
```

```html
  <title>Compare banks – Shroffin</title>
```

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "Explore banks|Compare banks" content/pages/explore-banks.body.html pages/explore-banks.html templates/layouts/explore-banks.html | head
```

- Expected after: Page job reads as compare, matching the Compare button.

Confidence: medium  
Needs founder word choice: yes  
Apply default: ask-first

---

### Rec-13 — Show which answers move the result most

Theme: theme-15 — The loan form does not show which fields matter most  
Open places covered: R15-importance  
Status now: looks_changed_still_open

Matched solutions:
- ## 45. Show how much each question matters — stars, meter, order, or color so filling teaches importance.
- ## 47. Arrange the help notes so they are easy to read — keep (i) marks readable while adding importance cues.

What a person meets now: Hero sizing + about-lines; no stars/meter/importance marks. Fields still feel equal.

Sound fix (from the matched solutions): Mark row importance by order + a simple visual (e.g. 3/2/1 dots or “Moves rate most” / “Moves loan size”) on row heads. Keep existing help anchors; do not cluster new marks on the (i) control.

Build recipe:
- Files: `content/pages/explore-banks.body.html`, `css/shroffin-explore-banks.css`
- Code / copy to paste:

Add to each `.hlc-form-row-head` an importance cue, e.g.:

```html
                  <div class="hlc-form-row-head">
                    <p class="hlc-form-row-about">Why we ask: lenders size your loan from this income</p>
                    <p class="hlc-form-row-weight" aria-label="Importance high">Moves the loan most</p>
                  </div>
```

Suggested weights: income/property = high; tenure/FOIR = high; CIBIL/age = high for rate; occupation/purpose = medium; co-applicant = situational. Style `.hlc-form-row-weight` as quiet meta text (not a card).

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
rg -n "hlc-form-row-weight|Moves the" content/pages/explore-banks.body.html pages/explore-banks.html css/shroffin-explore-banks.css
```

- Expected after: Filling the form teaches which answers move results most without a separate lecture.

Confidence: medium  
Needs founder word choice: no  
Apply default: include

---

### Rec-14 — One neutral word for the whole list

Theme: theme-16 — The page says banks, but the list is lenders  
Open places covered: R16-banks-chrome, R16-lenders-header  
Status now: still_open

Matched solutions:
- ## 48. Use a neutral word for all money sources, not only banks — use “lenders” for the whole set; keep “bank” only where it truly means a bank; watch real users before small wording swaps.

What a person meets now: Title/chrome “banks” / “Bank options” / “Bank type”; table head “Lenders”.

Sound fix (from the matched solutions): Pick one neutral word across chrome + column. Solution text prefers “lenders” and warns to watch users — founder must confirm before mass rename (also touches Rec-12 and Guide CTA).

Build recipe:
- Files: `content/pages/explore-banks.body.html`, `src/home-loan-compare.js`, `templates/layouts/explore-banks.html`, optionally `partials/guide-localnav.html` / home CTAs
- Code / copy to paste (if founder confirms lenders everywhere on this tool):

```html
        <h1 class="hlc-title"><span class="hlc-title-wash">Compare lenders.</span></h1>
```

```html
                <h2 class="visually-hidden" id="hlc-compare-heading">Lender options</h2>
```

```html
                      <span class="hlc-field-label-text">Lender type</span>
```

Keep table head `Lenders`. Where a note truly means a bank branch only, keep “bank”.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
npm run build:compare
rg -n "Explore banks|Bank options|Bank type|Lenders|Compare lenders" content/pages/explore-banks.body.html pages/explore-banks.html src/home-loan-compare.js | head -40
```

- Expected after: One screen does not call the same list both banks and lenders.

Confidence: medium  
Needs founder word choice: yes  
Apply default: ask-first

---

### Rec-15 — Tabs as the top of the list; Apply on the ticks

Theme: theme-17 — Results tabs sit too far from the table, and Apply once is not on the checkboxes  
Open places covered: R17-apply-bar, R17-tabs  
Status now: looks_changed_still_open

Matched solutions:
- ## 49. Related results pieces should sit close enough to feel like one — tabs and table as one piece, not a separate distant bar.
- ## 55. Put the apply action above the row selections — selection and apply as one move on the ticks.

What a person meets now: Apply once sits in results head over the lender column; tabs still on a tools bar above the table body — denser than before, still not the top of the list / next to row ticks.

Sound fix (from the matched solutions): Treat the first table header row as the home for Overview/Charges tabs (or flush tabs to the table edge with zero visual band). Move Apply once into the sticky bank header cell above the select-all / row checkboxes (already partially attempted in CSS) and mirror a compact Apply control in the mobile dock next to selection — not a distant orphan bar.

Build recipe:
- Files: `content/pages/explore-banks.body.html`, `css/shroffin-explore-banks.css`, `src/home-loan-compare.js` (if header HTML is JS-built)
- Code / copy to paste (layout recipe):

1. Reduce `.hlc-results-head` / `.hlc-results-actions` margin/padding so tabs sit flush on the table border (no empty band).
2. Render Apply once inside the sticky bank column header cell that owns select-all, not as a sibling tools chip floating away from ticks.
3. Keep `prefers-reduced-motion` and mobile dock behavior; do not break desktop title row outside the results table.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
npm run build:compare
# Visual: pages/explore-banks.html after Compare — tabs read as table top; Apply sits on checkbox column.
rg -n "hlc-apply-bar|hlc-results-actions|hlc-column-tabs" css/shroffin-explore-banks.css content/pages/explore-banks.body.html | head
```

- Expected after: Tabs feel like the top of the list; Apply and row ticks feel like one move.

Confidence: medium  
Needs founder word choice: no  
Apply default: include

---

### Rec-16 — Edit details and Start fresh on results

Theme: theme-18 — Results need a clear edit/clear button, and there is no search for a named bank  
Open places covered: R18-no-edit-clear  
Status now: still_open

Matched solutions:
- ## 51. Give an obvious control when switching between form and results — people can name how the form rose again.
- ## 53. Give people a clear start-fresh control on a filled form — wipe-and-start-fresh when the card is filled.

What a person meets now: Results head has Filters / Apply once; no Edit / Clear for the loan form after answers show.

Sound fix (from the matched solutions): Add two named controls on the results shell (or form card when results visible): “Edit details” (focus/scroll to `#hlc-inputs`, expand form) and “Start fresh” (reset inputs to defaults and clear results).

Build recipe:
- Files: `content/pages/explore-banks.body.html`, `src/home-loan-compare.js`, `css/shroffin-explore-banks.css`
- Code / copy to paste:

In `.hlc-results-head` (near tools):

```html
                <div class="hlc-results-form-controls">
                  <button type="button" class="hlc-edit-inputs" id="hlc-edit-inputs">Edit details</button>
                  <button type="button" class="hlc-clear-form" id="hlc-clear-form">Start fresh</button>
                </div>
```

Wire in `src/home-loan-compare.js`: `#hlc-edit-inputs` scrolls to / focuses the form; `#hlc-clear-form` resets fields to default profile values and hides results/intelligence until Compare again.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:content -- --write
npm run build:compare
rg -n "hlc-edit-inputs|hlc-clear-form|Edit details|Start fresh" content/pages/explore-banks.body.html src/home-loan-compare.js pages/explore-banks.html
```

- Expected after: After results show, person can clearly edit the form or wipe and start fresh.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-17 — No in-page bank search; keep default rate sort

Theme: theme-18 — Results need a clear edit/clear button, and there is no search for a named bank  
Open places covered: R18-no-search  
Status now: still_open

Matched solutions:
- ## 57. Sort well by default; do not add a search box that adds load — open sorted by rate low→high; do not add a name search; browser find is enough.

What a person meets now: No in-page named-bank search. Default sort key is already `effectiveRoiPct` (`DEFAULT_SORT_KEY`).

Sound fix (from the matched solutions): **Do not add** a bank search box. Confirm / keep default sort by rate ascending. Treat the old “missing search” complaint as closed by this solution, not by new UI chrome.

Build recipe:
- Files: `src/home-loan-compare.js` (verify only; change only if sort default drifted)
- Code / copy to paste: ensure this remains:

```javascript
const DEFAULT_SORT_KEY = "effectiveRoiPct";
```

and initial sort direction is lowest rate first. Add no `#hlc-bank-search` input.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
rg -n "DEFAULT_SORT_KEY|hlc-bank-search|bank search" src/home-loan-compare.js content/pages/explore-banks.body.html
# Expect DEFAULT_SORT_KEY = "effectiveRoiPct" and no bank-search control.
```

- Expected after: List opens sorted by rate; no extra search field; named-bank hunt uses browser find.

Confidence: high  
Needs founder word choice: no  
Apply default: include

---

### Rec-18 — Scheme identity in the comparison product

Theme: theme-19 — Scheme names live in More details, not in the product  
Open places covered: R19-scheme-drawer, R19-row-bank-only  
Status now: still_open

Matched solutions:
- ## 58. Put important offer facts in the product, not only buried detail — branch-ready scheme facts in the main product.
- ## 59. Extra-info cues must be guessable and say what is inside — plus-style cue; label more about the loan offer, not only the company.

What a person meets now: Scheme name only in More details drawer; row shows bank name as details control. (## 69 auto-pick/hide scheme conflicts with showing the name — do **not** apply ## 69 unless founder chooses hide-scheme instead of surface-scheme.)

Sound fix (from the matched solutions): Show scheme name under the bank name in the sticky column (or a Scheme column on Overview). Rename details control aria/label toward “More about this loan offer”. Keep drawer for deep fields.

Build recipe:
- Files: `src/home-loan-compare.js`, `css/shroffin-explore-banks.css`
- Code / copy to paste (in bank cell render ~`hlc-bank-name`):

```javascript
          '<button type="button" class="hlc-bank-name-text" data-detail="' +
          row.id +
          '" aria-label="More about this loan offer from ' +
          escapeHtml(row.bankName) +
          '">' +
          escapeHtml(row.bankName) +
          "</button>" +
          (row.scheme
            ? '<div class="hlc-bank-scheme">' + escapeHtml(row.scheme) + "</div>"
            : "")
```

Style `.hlc-bank-scheme` as secondary line under the name.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:compare
rg -n "hlc-bank-scheme|More about this loan|Scheme name" src/home-loan-compare.js
```

- Expected after: Scheme identity visible in the list without opening More details.

Confidence: medium  
Needs founder word choice: yes  
Apply default: ask-first

---

### Rec-19 — Note marks that look like notes; stand behind exact figures

Theme: theme-20 — Charges and calculations do not explain themselves  
Open places covered: R20-footnotes  
Status now: still_open

Matched solutions:
- ## 62. Footnote marks should look like notes, not links — star-style notes, not dash/link-like marks.
- ## 54. Stand behind exact numbers with a clear mark — mark exact rates/amounts the site stands behind.

What a person meets now: Charge footnotes use `*` / `†` / `^` sequence; marks still read like linkish footnote glyphs without a clear “we stand behind this figure” cue on exact amounts.

Sound fix (from the matched solutions): Prefer star notes for charge footnotes (e.g. `*`, `**`, `***` or a single ★ system with numbered note list). Add a compact stand-behind mark on exact rate/loan cells the product asserts (not on estimates).

Build recipe:
- Files: `src/home-loan-compare.js`, `css/shroffin-explore-banks.css`
- Code / copy to paste:

```javascript
const PROCESSING_FEE_MARKER = "*";
const PROPERTY_CHECK_MARKER = "**";
const GOVERNMENT_CHARGES_MARKER = "***";
```

Ensure note UI is `<sup class="hlc-note-mark">` (not underlined link styling). For Overview exact rate/loan cells the product asserts, append `<span class="hlc-stood-behind" title="We stand behind this figure">*</span>` (or star) consistently with the charges note list.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:compare
rg -n "PROCESSING_FEE_MARKER|PROPERTY_CHECK_MARKER|GOVERNMENT_CHARGES_MARKER|hlc-note-mark|hlc-stood-behind" src/home-loan-compare.js css/shroffin-explore-banks.css
```

- Expected after: Charge notes look like notes; exact stood-behind figures are marked.

Confidence: medium  
Needs founder word choice: no  
Apply default: include

---

### Rec-20 — Plain fee steps and missed-EMI rupees

Theme: theme-20 — Charges and calculations do not explain themselves  
Open places covered: R20-calc-drawer, R20-charges-note  
Status now: still_open

Matched solutions:
- ## 60. Name every number and show competing limits then the lower one — sequenced named steps in how-calculated walks.
- ## 63. Fee notes: what it is, that you cannot avoid it, and a short guide — processing-fee note structure.
- ## 67. Show the extra rupees for one missed payment, not only a yearly percent — rupee math after one missed EMI.

What a person meets now: Calculation drawers + shared `#hlc-charges-note` with legal/note patterns; missed-payment story still weak vs rupee math.

Sound fix (from the matched solutions): Rewrite processing-fee note lines to: (1) one-sentence definition, (2) mandatory even after approval, (3) short public-vs-private guide. In calc disclose HTML, name each percent/figure in order and show competing caps then the lower. For overdue/missed EMI, show extra rupees + bounce fee + days-to-notice when data exists (reuse encoded overdue fields already referenced in `src/home-loan-compare.js`).

Build recipe:
- Files: `src/home-loan-compare.js`, `content/pages/explore-banks.body.html` (`#hlc-charges-note` host stays)
- Code / copy to paste (content pattern for processing fee note builder / `PROCESSING_FEE_LOGIN_NOTE` and related strings):

```text
Processing fee: what the lender charges to process your application. It is mandatory and due even after approval. Public banks often charge less; private banks often charge more — compare the rupee column, not only the rate.
```

For missed EMI display helper: compute and show “After one missed EMI: about ₹X extra + ₹Y bounce; notice/collection risk in about N days” when inputs exist; do not lead with annual % alone.

- Commands to verify:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:compare
npm test
# Manual: Charges tab → open processing fee + overdue notes; confirm plain definition, mandatory line, and rupee miss math where data exists.
```

- Expected after: Fee/calc notes explain themselves in plain steps and rupees; shared note region carries clearer customer-side text.

Confidence: medium  
Needs founder word choice: no  
Apply default: include

---

## Confirm instructions

Website stays unchanged until you reply with one of these **exact** starts:

- `CONFIRM APPLY ALL` — apply every recommendation where `apply_default` is `include` **and** confidence is `high` or `medium`. Skips `ask-first` and `low` unless you name them.
- `CONFIRM APPLY theme-02` (or any open `theme-NN`) — apply only that theme’s recommendations (still respecting ask-first/low unless named).
- `CONFIRM APPLY Rec-01` (or comma-separated `Rec-…` ids) — apply only those ids.
- `STOP` — do nothing; reply `phase: stopped`.

To include an ask-first or low item in a batch, name it explicitly, e.g. `CONFIRM APPLY Rec-04, Rec-14` or `CONFIRM APPLY ALL and Rec-04`.

After Phase B, a later fundamentals recheck is how to confirm kinds are closed.
