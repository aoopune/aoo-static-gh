# Explore Banks — Approved tooltip copy

**Status:** Locked writing finals (2026-08-24)  
**Product:** Shroffin Explore Banks home-loan compare  
**Facts source:** `_tooltip-research-briefs.md` (do not paste research as tips)  
**Craft source:** `.cursor/skills/shroffin-explore-tooltips/`  

When revising an existing tip, treat lines here as locked until the user re-approves a change.

---

## Form & filter tips

### Net monthly income
Take-home after tax is what lenders count, not CTC or claimed cash.
The bank later checks this against slips, tax returns, and salary credits.

**Learn more:** yes → `guide.html#loan-amount`

### Property value as per agreement
Lenders finance the lower of the agreement price and their own valuation.
Stamp duty and registration are usually extra cash, not inside the loan.

**Learn more:** yes → `guide.html#loan-amount-property`

### Total existing EMIs
Lenders subtract other loan instalments before they set your new home EMI.
A loan you plan to close later still counts until it is closed on the credit report.

**Learn more:** no

### Total credit card limits
Even a fully paid card can still reduce how much EMI you can take.
Banks often count a share of the limit as a monthly bill; rules vary.

**Learn more:** no

### EMI limit / FOIR
Share of take-home allowed for all fixed monthly repayments, including this loan.
Each bank sets its own share; there is no single India-wide rule.

**Learn more:** yes → `guide.html#loan-amount`

### Loan tenure
A longer schedule lowers the EMI but usually raises total interest.
On a floating loan, holding EMI when rates rise can stretch the years.

**Learn more:** yes → `guide.html#tenure`

### Age
Banks cap the loan so it ends by a set age, often around 70.
Joint loans often follow the older person’s age.

**Learn more:** yes → `guide.html#tenure`

### CIBIL score
Missed payments and defaults on the report can outweigh a high score.
Checking your own CIBIL usually does not lower it; a bank application can.

**Learn more:** no (no matching guide page yet)

### Occupation
Which papers prove income depends on how you earn.
Self-employed files follow tax returns more than cash you say you take out.

**Learn more:** yes → `guide-documents.html#income`

### Purpose
The end-use sets the product rules, papers, and how money is released.
Construction money is usually released as the building progresses.

**Learn more:** no (no matching guide page yet)

### Co-applicant
Duty is to repay the whole loan; a missed EMI hits every co-borrower’s credit.
Spouse and close family are commonly accepted; friends usually are not.

**Learn more:** yes → `tax-benefits.html#joint-loan`

### Borrower
Govt or pension schemes may cut fees or rate, not skip the usual checks.
“Zero processing” often still leaves legal, valuation, and registry costs.

**Learn more:** no

### Concessions
Small rate or fee extras differ by bank; they do not fix eligibility.
Woman cuts often need her as primary borrower, and usually as owner.

**Learn more:** yes → `concessions.html#bank-rates`

### Bank type
Lender category hints at rate versus flexibility, not a quality ranking.
Some HFCs or NBFCs accept unusual income more often, usually at a higher cost.

**Learn more:** no

### Rate (filter — floating / fixed)
Floating rates can rise or fall later, so the EMI or the years can change.
Lifelong fixed is uncommon; many “fixed” offers last only a few years.

**Learn more:** yes → `guide.html#rates`

### Facility
Term loans use a set EMI on reducing principal.
Overdraft home loans can cut interest if you park surplus, usually at a higher rate.

**Learn more:** yes → `guide.html#loan-structure`

### Overdraft
Idle money reduces the balance that earns interest; you can usually withdraw it later.
Expect a slightly higher rate than the same bank’s plain term loan.

**Learn more:** no (Facility already links to loan-structure)

---

## Table column tips

### Rate
Estimate from this bank’s published rates for your profile — not a locked quote.
Credit and property checks can still change it.

**Learn more:** no (Rate filter already covers rates; tip is about the cell only)

### Loan amount
Income and the bank’s cap on property price set the loan, not the asking price.
A lower bank valuation can cut it versus the agreement.

**Learn more:** no (form income/property already cover the deep dive)

### Tenure (yrs)
Years on a row can be shorter than you asked.
Banks cap tenure so the loan ends by a set age.

**Learn more:** no (form tenure/age already cover the deep dive)

### EMI
A lower EMI is not always a cheaper loan — extra years usually add interest.
On floating rates, a rate rise can raise this EMI or add years.

**Learn more:** yes → `guide.html#emi`

### Processing fees
Includes the login fee; figures exclude taxes.
Due after a basic eligibility check, whether the loan is later disbursed or not.

**Learn more:** yes → `guide.html#charges`

### Property check charges
Covers the bank’s title and value checks, not stamp duty or registration.
Your own earlier lawyer or valuer report usually does not replace theirs.

**Learn more:** yes → `guide.html#charges`

### Govt. charges
Stamp duty and registration go to the state for the deed and mortgage, not to the bank.
Cost differs by state and is usually paid in cash, outside the loan.

**Learn more:** yes → `guide.html#charges`

### Prepayment fees
Only fixed-rate home loans may still charge for paying early.

**Learn more:** no

### Rate change charges
Fee applies when you ask to switch floating to fixed, or the other way — not when the floating rate moves by itself.

**Learn more:** no

### Overdue charges
Late payment attracts a separate extra charge, not a higher rate on the whole loan.
That extra charge should not then earn further interest.

**Learn more:** no

### EMI bounce charges
Charged when your EMI debit or cheque does not go through — usually a flat fee each time, excluding taxes.
If that month’s EMI stays unpaid, overdue charges can apply as well.

**Learn more:** no

---

## Locked product decisions (do not reopen without the user)

1. **Moment first.** Write for where the user is (form field vs table cell) and what they need in that second — not a general lecture.
2. **Max 2 sentences**; about 12–15 words each unless extra words protect meaning.
3. **No ₹ / EMI / lakh maths** in tooltips.
4. **No UI coaching** (“this moves the rate column”, “click More”).
5. **No empty openers** (“This is…”, “These are…”).
6. **Taxes:** say “excluding taxes” / “figures exclude taxes” — not “GST sits on top”.
7. **Processing:** include login fee lightly; due after basic eligibility; charged whether disbursed or not.
8. **Prepayment tip:** one line only — fixed may still charge (floating/RBI detail lives in notes/guide, not this tip).
9. **Learn more** only where this ledger says yes; never dump unrelated fields to `#loan-amount`.
10. **CIBIL / Purpose Learn more** stay off until a real guide page exists.
11. Polish old live tips by rewriting from research + craft — never by lightly editing bad drafts.
12. **No capacity metaphors** in tips: “EMI room”, “share that room”, “room for”, “FOIR room”, “eat the same pie”, soft “headroom” for FOIR — use plain consequence language instead.
