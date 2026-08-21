# Guide family — rewrite choices (all pages)

**Rule:** Record choices only. Apply to live HTML **once**, after every page walk is done (or when you say apply for finished pages).

**Voice lock:** Plain British English. One thought. Light load. Lean subject + predicate. No AI sheen.  
**Skip:** Page heroes (title + lede) — per your ask.  
**Format each item:** Problem (one line) · Questions · 3 options · Recommended + why.

---

## Overview — `guide.html`

**Status: applied** (body source + blessed page/golden).

| # | Where | Left (current) | Choice | Chosen text | Status |
|--:|-------|----------------|--------|-------------|--------|
| 1 | `#loan-amount` / guide-tile-copy | Depends on Property value and income, whichever is lower. | **1** | The bank takes the lower of your property value and your income. | Chosen |
| — | `#loan-amount` / `1. Property value` | 1. Property value | **Keep** | Section label under Title #3 H2. | Not a failure |
| — | `#loan-amount` / `2. Income` | 2. Income | **Keep** | Same. | Not a failure |
| 2 | `#loan-amount` / guide-tip | Tip An earning co-applicant can help to increase the loan amount. | **1** | An earning co-applicant can raise the loan amount. | Chosen |
| 3 | `#loan-amount` / flip control | Estimate your range | **2** | Estimate your loan amount | Chosen |
| 4 | `#loan-amount` / flip-back title | Estimate | **3** | Estimate your loan amount | Chosen |
| 5 | `#loan-amount` / flip-back lead | Indicative only. | **1** | This figure is indicative only. | Chosen |
| 6 | `#emi` / guide-tip | Tip Some lenders… — ask if… | **1** | Some lenders let you pay more than interest during construction. Ask if that option exists. | Chosen |
| 7 | `#emi` / flip control | Estimate your EMI | **2** | Estimate your EMI | Chosen (keep) |
| 8 | `#emi` / flip-back title | Estimate | **1** | Estimate your EMI | Chosen |
| 9 | `#emi` / flip-back lead | Indicative only. | **1** | This figure is indicative only. | Chosen |
| 10 | `#tenure` / flip control | Estimate your tenure | **1** | Estimate your tenure | Chosen (keep) |
| 11 | `#rates` / flip control | Choices that stay after you take the loan | **1** | See rate options after sanction | Chosen |
| 12 | `#rates` / flip-back title | After you take the loan | **1** | Rate options after sanction | Chosen |
| 13 | `#loan-structure` / flip control | What still matters once the structure is set | **1** | See rules after you choose a structure | Chosen |
| 14 | `#loan-structure` / flip-back title | Once the structure is set | **1** | Rules after you choose a structure | Chosen |
| 15 | `#charges` / guide-tile-copy | Bank fees, property checks, and government charges. | **1** | You pay bank fees, property checks, and government charges. | Chosen |
| 16 | `#charges` / flip control | Fee breakdown | **2** | Fee breakdown | Chosen (keep) |
| 17 | `#charges` / flip-back title | Fee breakdown | **1** | Fee breakdown | Chosen (keep) |
| 18 | `#charges` / flip-back lead | Usual one-time costs… different names… | **1** | Usual one-time costs at sanction and disbursement. Banks may rename or bundle them. | Chosen |
| 19 | `#project-bank-approval` / flip control | Find banks for your project | **1** | Find banks that already approve your project | Chosen |

---

## Documents — `guide-documents.html`

**Status: complete** — Keep all non-hero copy (cards, lists, notes, fine print).

| # | Where | Choice | Chosen text | Status |
|--:|-------|--------|-------------|--------|
| D-all | All non-hero copy | **1** | Keep all | Chosen |

---

## Tax benefits — `tax-benefits.html`

**Status: complete (honest re-triage)** — The 10 “Partial” flags were mostly false (FAQ labels / already-good questions). **No real problem to walk.** Soft optional only: “Anything else on tax?” — skipped unless you ask to polish.

| # | Where | Choice | Chosen text | Status |
|--:|-------|--------|-------------|--------|
| T-all | 10 queued Partials (callout, how-to-claim, FAQ labels, calculator link) | **Not a failure** | Keep as is | Closed — no rewrite |

---

## Concessions — `concessions.html`

**Status: complete (honest re-triage)** — 4 FAQ topic labels under fees. Same as Overview “Property value” labels. **Not failures.**

| # | Where | Choice | Chosen text | Status |
|--:|-------|--------|-------------|--------|
| C-all | Fee FAQ summaries | **Not a failure** | Keep as is | Closed — no rewrite |

---

## Insurance hub — `home-loan-insurance.html`

**Status: applied** (body source + blessed page/golden). Flip links were fine (not changed).

| # | Where | Left (current) | Choice | Chosen text | Status |
|--:|-------|----------------|--------|-------------|--------|
| I1 | `#cover-types` property card title | If the house is damaged? | **1** | What does property cover pay for? | Chosen |
| I2 | `#cover-types` loan cover card title | If the borrower dies? | **1** | What does loan cover pay for? | Chosen |

**Status: complete.**

---

## Loan cover — `credit-life-insurance.html`

**Status: complete (honest re-triage)** — Setup/claim H2s already clear how-to questions. Keep.

| # | Where | Choice | Status |
|--:|-------|--------|--------|
| L-all | Setup + claim titles | Not a failure | Closed |

---

## Property cover — `property-home-insurance.html`

**Status: complete (honest re-triage)** — FAQ labels + setup title fine. Soft “What happens after damage?” skipped unless you ask.

| # | Where | Choice | Status |
|--:|-------|--------|--------|
| P-all | Setup, claim, FAQ labels | Not a failure | Closed |

---

## If something goes wrong — `home-loan-complaints.html`

**Status: complete (honest re-triage)** — Escalate flip control already clear. Keep.

| # | Where | Choice | Status |
|--:|-------|--------|--------|
| W-all | Escalate flip control | Not a failure | Closed |

---

## Walk queue (remaining — real problems only)

1. ~~Documents~~ ✅
2. ~~Tax~~ ✅ no real failures
3. ~~Concessions~~ ✅ no real failures
4. ~~Insurance hub — 2 card titles~~ ✅
5. ~~Loan cover~~ ✅
6. ~~Property cover~~ ✅
7. ~~Complaints~~ ✅

**Family walk: complete. Applied to live sources.**

### Apply method (architectural)

1. Edited source of truth: `content/guide/overview.body.html`, `content/guide/home-loan-insurance.body.html`
2. Stitched pages + golden via `npm run bless:content -- --only=…` (required by content pipeline)
3. Verified: `npm run build:content -- --check --only=…` → Golden OK

### All rewrites applied (Overview + Insurance)

**Overview (`guide.html`) — 15 changes** (see Overview table above)

**Insurance (`home-loan-insurance.html`) — 2 changes**
| Where | New text |
|-------|----------|
| Property card title | What does property cover pay for? |
| Loan cover card title | What does loan cover pay for? |

**Other pages:** Documents Keep all · Tax / Concessions / Loan cover / Property cover / Complaints — Not a failure (no rewrite)

**Apply status:** Done — 2026-08-22
