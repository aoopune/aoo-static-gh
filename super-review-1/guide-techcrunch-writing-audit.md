# Guide family — TechCrunch writing-pattern audit

## Front matter

**Scope:** 8 pages — `guide.html`, `guide-documents.html`, `tax-benefits.html`, `concessions.html`, `home-loan-insurance.html`, `credit-life-insurance.html`, `property-home-insurance.html`, `home-loan-complaints.html`.

**Method:** Titles → Title patterns 1–14 only; Bodies → Body patterns 1–11 only (`docs/TECHCRUNCH_WRITING_PATTERN.md`). Contract checked for heroes, chapters, card pairs, and flip-back panels.

**Kind correction:** Card role beats class name. Live HTML **inverts** `guide-share-when` / `guide-share-then` between overview (`then`=label, `when`=explanation) and concessions/complaints/insurance (`when`=label, `then`=explanation). Audit treats **short label → Title**, **explanation → Body**. Flip control labels (except Close) → Title #6.

**Verdict:** Follows | Partial | Miss | N/A (UI chrome).

**N/A:** Contents, TOC nouns, segment tabs, Close, form labels, Show estimate, bare —, fee ₹ chips, answer chips, diagram labels, RBI blockquote.

**Right column:** Follows → `Keep`. N/A → `Keep as UI chrome`. Partial/Miss → paste-ready rewrite of that string (never identical to Left; no meta notes).

### Summary stats by page

| Page | Title Follows | Title Partial | Title Miss | Title N/A | Body Follows | Body Partial | Body Miss | Body N/A |
|------|--------------:|--------------:|-----------:|----------:|-------------:|-------------:|----------:|---------:|
| `guide.html` | 31 | 15 | 0 | 25 | 68 | 8 | 0 | 38 |
| `guide-documents.html` | 4 | 1 | 0 | 15 | 100 | 1 | 0 | 2 |
| `tax-benefits.html` | 12 | 10 | 0 | 11 | 27 | 2 | 0 | 19 |
| `concessions.html` | 23 | 5 | 0 | 10 | 29 | 1 | 0 | 0 |
| `home-loan-insurance.html` | 8 | 5 | 0 | 4 | 13 | 1 | 0 | 2 |
| `credit-life-insurance.html` | 22 | 3 | 0 | 19 | 30 | 1 | 0 | 5 |
| `property-home-insurance.html` | 12 | 5 | 0 | 18 | 24 | 1 | 0 | 0 |
| `home-loan-complaints.html` | 51 | 2 | 0 | 19 | 75 | 1 | 0 | 1 |
| **ALL** | 163 | 46 | 0 | 121 | 366 | 16 | 0 | 67 |

**Surfaces:** share-when rows = 93; share-then rows = 120; card labels as Title = 102; card explanations as Body = 111; flip-related = 114.

### Overall verdict

With Kind fixed by **label vs explanation role**, card pairs largely **Follow** (Title #1 + Body #2/#8/#10). Remaining Partial work is heroes, bare flip-back titles (“Estimate” → Title #9), and flip/control utility phrasing (Title #6). Chapter question H2s and fee/complaint inventories Follow. Fine print Follows Body #6. Titles 163/46/0/121; Bodies 366/16/0/67.

---

## `guide.html` — Overview

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | The essentials, before you choose a lender. | Title #4 Promise | Partial | How a home loan really costs you — before you pick a bank |
| 2 | Body | hero lede | Know what a home loan really costs before any bank offer looks good. | Body #1 Lede | Partial | Loan amount, EMI, rate type, tenure, fees, and project approval decide what you pay — not the first offer on a bank site. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | Loan amount | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | EMI | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | Tenure | — | N/A | Keep as UI chrome |
| 7 | Title | contents item | Rates | — | N/A | Keep as UI chrome |
| 8 | Title | contents item | Loan facility | — | N/A | Keep as UI chrome |
| 9 | Title | contents item | Charges | — | N/A | Keep as UI chrome |
| 10 | Title | contents item | Bank-approved project | — | N/A | Keep as UI chrome |
| 11 | Title | #loan-amount / guide-tile-title | How much can you borrow? | Title #3 Question | Follows | Keep |
| 12 | Body | #loan-amount / guide-tile-copy | Depends on Property value and income, whichever is lower. | Body #1 Lede | Partial | Banks cap you by property value and by income — you get the lower of the two. |
| 13 | Title | #loan-amount / segment tab | Property value | — | N/A | Keep as UI chrome |
| 14 | Title | #loan-amount / segment tab | Income | — | N/A | Keep as UI chrome |
| 15 | Title | #loan-amount / guide-limit-title | 1. Property value | Title #1 Straight news | Partial | Property value sets the first loan ceiling |
| 16 | Body | #loan-amount / guide-limit-copy | The bank can lend only up to certain percentages of the Agreement Value given below. | Body #1 Lede | Follows | Keep |
| 17 | Body | #loan-amount / list item | Up to ₹30 lakh: up to 90%. | Body #2 Scale/numbers | Follows | Keep |
| 18 | Body | #loan-amount / list item | From ₹30 lakh to ₹75 lakh: up to 80%. | Body #2 Scale/numbers | Follows | Keep |
| 19 | Body | #loan-amount / list item | Above ₹75 lakh: up to 75%. | Body #2 Scale/numbers | Follows | Keep |
| 20 | Body | #loan-amount / guide-glance | These are RBI’s highest limits. What a bank actually offers can be less or more than a simple estimate, based on your profile and their rules. | Body #3 So what | Follows | Keep |
| 21 | Title | #loan-amount / guide-limit-title | 2. Income | Title #1 Straight news | Partial | Income sets how large an EMI you can carry |
| 22 | Body | #loan-amount / guide-limit-copy | The bank can lend only up to what your monthly EMI capacity supports, worked out as below. | Body #1 Lede | Follows | Keep |
| 23 | Body | #loan-amount / list item | Start with monthly take-home. | Body #2 Scale/numbers | Follows | Keep |
| 24 | Body | #loan-amount / list item | Minus EMIs and a share of card limits — what’s left is your EMI capacity. | Body #8 Step-by-step | Follows | Keep |
| 25 | Body | #loan-amount / list item | From that EMI, rate, and tenure, the bank sets the loan amount. | Body #8 Step-by-step | Follows | Keep |
| 26 | Body | #loan-amount / guide-glance | All EMIs are usually limited to about 55–70% of take-home. | Body #3 So what | Follows | Keep |
| 27 | Body | #loan-amount / guide-tip | Tip An earning co-applicant can help to increase the loan amount. | Body #3 So what | Partial | An earning co-applicant can raise how much the bank will lend. |
| 28 | Title | #loan-amount / flip control label | Estimate your range | Title #6 Direct instruction | Partial | Estimate how much you can borrow |
| 29 | Title | #loan-amount / guide-tile-title [flip-back] | Estimate | Title #9 How-to | Partial | How to estimate your loan range |
| 30 | Body | #loan-amount / guide-calc-lead [flip-back] | Indicative only. | Body #1 Lede | Partial | Figures here are indicative only — the sanctioned rate and fees decide the final number. |
| 31 | Body | #loan-amount / form label [flip-back] | Property agreement value (₹) | — | N/A | Keep as UI chrome |
| 32 | Body | #loan-amount / form label [flip-back] | Monthly take-home income (₹) | — | N/A | Keep as UI chrome |
| 33 | Body | #loan-amount / form label [flip-back] | Existing EMIs per month (₹) | — | N/A | Keep as UI chrome |
| 34 | Body | #loan-amount / form label [flip-back] | Total credit card limits (₹) | — | N/A | Keep as UI chrome |
| 35 | Body | #loan-amount / form label [flip-back] | Total EMI capacity of income (%) — FOIR 50% 55% 60% 65% 70% | — | N/A | Keep as UI chrome |
| 36 | Body | #loan-amount / form label [flip-back] | Interest rate (%) | — | N/A | Keep as UI chrome |
| 37 | Body | #loan-amount / form label [flip-back] | Tenure (years) | — | N/A | Keep as UI chrome |
| 38 | Body | #loan-amount / CTA [flip-back] | Show estimate | — | N/A | Keep as UI chrome |
| 39 | Body | #loan-amount / guide-calc-result-kicker [flip-back] | Indicative amount | — | N/A | Keep as UI chrome |
| 40 | Body | #loan-amount / guide-calc-result-num [flip-back] | — | — | N/A | Keep as UI chrome |
| 41 | Body | #loan-amount / list item [flip-back] | By Agreement Value: — | — | N/A | Keep as UI chrome |
| 42 | Body | #loan-amount / list item [flip-back] | By income: — | — | N/A | Keep as UI chrome |
| 43 | Body | #loan-amount / guide-glance [flip-back] | Final eligibility depends on your profile. | Body #3 So what | Follows | Keep |
| 44 | Body | #loan-amount / flip control label [flip-back] | Close | — | N/A | Keep as UI chrome |
| 45 | Title | #emi / guide-tile-title | How do you repay the loan? | Title #3 Question | Follows | Keep |
| 46 | Body | #emi / guide-tile-copy | Through an Equated Monthly Instalment (EMI) — which includes both the principal and the interest together. | Body #1 Lede | Follows | Keep |
| 47 | Title | #emi / segment tab | How EMI works | — | N/A | Keep as UI chrome |
| 48 | Title | #emi / segment tab | When it starts | — | N/A | Keep as UI chrome |
| 49 | Body | #emi / list item | Early years: you’re mostly paying interest. | Body #2 Scale/numbers | Follows | Keep |
| 50 | Body | #emi / list item | Later years: you’re mostly paying off the loan. | Body #2 Scale/numbers | Follows | Keep |
| 51 | Body | #emi / list item | If the rate stays the same, the EMI stays the same. If the rate changes, the EMI or the years may change. | Body #2 Scale/numbers | Follows | Keep |
| 52 | Body | #emi / guide-limit-copy | Depends on if the property is ready to move in or under construction. | Body #1 Lede | Follows | Keep |
| 53 | Title | #emi / segment tab | Ready home | — | N/A | Keep as UI chrome |
| 54 | Title | #emi / segment tab | Under construction | — | N/A | Keep as UI chrome |
| 55 | Body | #emi / list item | Full EMI about one month after first disbursement. | Body #2 Scale/numbers | Follows | Keep |
| 56 | Body | #emi / list item | Interest-only (pre-EMI) on what’s disbursed, then full EMI around possession. | Body #8 Step-by-step | Follows | Keep |
| 57 | Body | #emi / guide-tip | Tip Some lenders let you pay more than interest during construction — ask if that option exists. | Body #3 So what | Partial | Some lenders let you pay more than interest during construction — ask if that option exists. |
| 58 | Title | #emi / flip control label | Estimate your EMI | Title #6 Direct instruction | Partial | Estimate your monthly EMI |
| 59 | Title | #emi / guide-tile-title [flip-back] | Estimate | Title #9 How-to | Partial | How to estimate your EMI |
| 60 | Body | #emi / guide-calc-lead [flip-back] | Indicative only. | Body #1 Lede | Partial | Figures here are indicative only — the sanctioned rate and fees decide the final number. |
| 61 | Body | #emi / form label [flip-back] | Loan amount (₹) | — | N/A | Keep as UI chrome |
| 62 | Body | #emi / form label [flip-back] | Interest rate (%) | — | N/A | Keep as UI chrome |
| 63 | Body | #emi / form label [flip-back] | Tenure (years) | — | N/A | Keep as UI chrome |
| 64 | Body | #emi / CTA [flip-back] | Show estimate | — | N/A | Keep as UI chrome |
| 65 | Body | #emi / guide-calc-result-kicker [flip-back] | Indicative EMI | — | N/A | Keep as UI chrome |
| 66 | Body | #emi / guide-calc-result-num [flip-back] | — | — | N/A | Keep as UI chrome |
| 67 | Body | #emi / list item [flip-back] | Total payable: — | — | N/A | Keep as UI chrome |
| 68 | Body | #emi / list item [flip-back] | Total interest payment: — | — | N/A | Keep as UI chrome |
| 69 | Body | #emi / guide-glance [flip-back] | Final EMI depends on the sanctioned rate, fees in the loan, and reset rules. | Body #3 So what | Follows | Keep |
| 70 | Body | #emi / flip control label [flip-back] | Close | — | N/A | Keep as UI chrome |
| 71 | Title | #tenure / guide-tile-title | Up to what period can you repay? | Title #3 Question | Follows | Keep |
| 72 | Body | #tenure / guide-tile-copy | Up to 30 years. Age and bank rules often shorten that period. A longer period lowers the EMI and raises the total interest. | Body #2 Scale/numbers | Follows | Keep |
| 73 | Title | #tenure / flip control label | Estimate your tenure | Title #6 Direct instruction | Partial | Estimate a tenure that fits your EMI |
| 74 | Title | #rates / guide-tile-title | What are the types of interest rates? | Title #3 Question | Follows | Keep |
| 75 | Body | #rates / guide-tile-copy | Floating rates, which change over time, and fixed rates, which stay the same for a few years. | Body #1 Lede | Follows | Keep |
| 76 | Title | #rates / segment tab | Floating Preferred | — | N/A | Keep as UI chrome |
| 77 | Title | #rates / segment tab | Fixed / hybrid | — | N/A | Keep as UI chrome |
| 78 | Body | #rates / guide-limit-copy | Moves with the benchmark over the loan tenure. | Body #1 Lede | Follows | Keep |
| 79 | Body | #rates / list item | External benchmark (often the repo rate) + the bank’s spread | Body #8 Step-by-step | Follows | Keep |
| 80 | Body | #rates / list item | Repo rate resets at least once every 3 months | Body #2 Scale/numbers | Follows | Keep |
| 81 | Body | #rates / list item | When the rate goes up, your lender asks how you want to take the extra cost. You can pay a lump sum, raise EMI, extend tenure, or mix these. | Body #8 Step-by-step | Follows | Keep |
| 82 | Body | #rates / list item | Prepayment / foreclosure charges: none on floating home loans under RBI rules | Body #8 Step-by-step | Follows | Keep |
| 83 | Body | #rates / guide-limit-copy | Fixed for a set period, then the rate resets. | Body #1 Lede | Follows | Keep |
| 84 | Body | #rates / list item | External benchmark (often the repo rate) + the bank’s spread + a fixed rate premium | Body #8 Step-by-step | Follows | Keep |
| 85 | Body | #rates / list item | Usually fixed for 3 or 5 years, as per the lender | Body #2 Scale/numbers | Follows | Keep |
| 86 | Body | #rates / list item | Usually about 1% to 2% higher than floating during the fixed period | Body #2 Scale/numbers | Follows | Keep |
| 87 | Body | #rates / list item | Prepayment / foreclosure charges: 2% to 4% | Body #2 Scale/numbers | Follows | Keep |
| 88 | Title | #rates / flip control label | Choices that stay after you take the loan | Title #6 Direct instruction | Partial | See rate choices that stay after sanction |
| 89 | Title | #rates / guide-tile-title [flip-back] | After you take the loan | Title #4 Promise | Partial | What still matters after you pick a rate type |
| 90 | Body | #rates / guide-calc-lead [flip-back] | These still matter later, so weigh them while you choose the rate type. | Body #1 Lede | Follows | Keep |
| 91 | Body | #rates / paragraph [flip-back] | You can switch between fixed and floating rates as per the bank’s policy, at the applicable cost. | Body #3 So what | Follows | Keep |
| 92 | Body | #rates / paragraph [flip-back] | You can switch between benchmark rates as per the bank’s policy, at the applicable cost. | Body #3 So what | Follows | Keep |
| 93 | Body | #rates / paragraph [flip-back] | If your credit score improves, you can ask to lower your rate as per the bank’s policy, at the applicable cost. | Body #3 So what | Follows | Keep |
| 94 | Body | #rates / paragraph [flip-back] | When the repo rate changes, a floating rate must reset within 3 months. Your bank’s reset date sets the exact wait. | Body #3 So what | Follows | Keep |
| 95 | Body | #rates / paragraph [flip-back] | A newly sanctioned loan can take about 90 days for the first change. | Body #3 So what | Follows | Keep |
| 96 | Body | #rates / flip control label [flip-back] | Close | — | N/A | Keep as UI chrome |
| 97 | Title | #loan-structure / guide-tile-title | What are the types of loan structures? | Title #3 Question | Follows | Keep |
| 98 | Body | #loan-structure / guide-tile-copy | A regular term loan or an overdraft (where spare cash reduces interest). | Body #1 Lede | Follows | Keep |
| 99 | Title | #loan-structure / segment tab | Term loan Regular | — | N/A | Keep as UI chrome |
| 100 | Title | #loan-structure / segment tab | Overdraft | — | N/A | Keep as UI chrome |
| 101 | Body | #loan-structure / guide-limit-copy | This is the normal home loan. You pay a fixed EMI every month, and interest is charged on the unpaid loan balance. Money in your savings account does not change that. | Body #1 Lede | Follows | Keep |
| 102 | Body | #loan-structure / list item | To cut interest early, you have to prepay | Body #8 Step-by-step | Follows | Keep |
| 103 | Body | #loan-structure / list item | Fits if you will not keep large surplus parked for months | Body #2 Scale/numbers | Follows | Keep |
| 104 | Body | #loan-structure / guide-limit-copy | This home loan is linked to an account. When spare cash sits in that account, interest is charged on a lower balance. You can still withdraw that money when you need it. | Body #1 Lede | Follows | Keep |
| 105 | Body | #loan-structure / list item | Rate is usually 0.15% to 1% higher than the same bank’s term loan | Body #2 Scale/numbers | Follows | Keep |
| 106 | Body | #loan-structure / list item | You benefit only if parked surplus saves more interest than the higher rate costs | Body #8 Step-by-step | Follows | Keep |
| 107 | Title | #loan-structure / flip control label | What still matters once the structure is set | Title #6 Direct instruction | Partial | See what still matters once the structure is set |
| 108 | Title | #loan-structure / guide-tile-title [flip-back] | Once the structure is set | Title #4 Promise | Partial | What still matters once the loan structure is set |
| 109 | Body | #loan-structure / guide-calc-lead [flip-back] | These rules matter when you choose. | Body #1 Lede | Follows | Keep |
| 110 | Body | #loan-structure / paragraph [flip-back] | You can switch between term loan and overdraft later as per the bank’s policy, at the applicable cost. | Body #3 So what | Follows | Keep |
| 111 | Body | #loan-structure / paragraph [flip-back] | On overdraft, withdrawing parked money follows the bank’s limit and rules. | Body #3 So what | Follows | Keep |
| 112 | Body | #loan-structure / paragraph [flip-back] | On overdraft, the usable limit may fall over the years (dropline), as per the lender. | Body #3 So what | Follows | Keep |
| 113 | Body | #loan-structure / flip control label [flip-back] | Close | — | N/A | Keep as UI chrome |
| 114 | Title | #charges / guide-tile-title | What are the charges to get the loan? | Title #3 Question | Follows | Keep |
| 115 | Body | #charges / guide-tile-copy | Bank fees, property checks, and government charges. | Body #1 Lede | Partial | Expect three buckets: lender fees, property checks, and government registration charges. |
| 116 | Title | #charges / segment tab | Bank fees | — | N/A | Keep as UI chrome |
| 117 | Title | #charges / segment tab | Other fees | — | N/A | Keep as UI chrome |
| 118 | Title | #charges / guide-limit-title | Bank fees | Title #1 Straight news | Follows | Keep |
| 119 | Body | #charges / guide-limit-copy | What the lender charges to open and run your case. | Body #1 Lede | Follows | Keep |
| 120 | Title | #charges / list/card title (guide-share-then) | Processing fee | Title #1 Straight news | Follows | Keep |
| 121 | Body | #charges / list/card body (guide-share-when) | Part may be taken upfront as a login fee; the rest at final sanction. | Body #10 FAQ known/unknown | Follows | Keep |
| 122 | Title | #charges / list/card title (guide-share-then) | Others | Title #1 Straight news | Follows | Keep |
| 123 | Body | #charges / list/card body (guide-share-when) | Account handling fees or any other as per lender. | Body #10 FAQ known/unknown | Follows | Keep |
| 124 | Title | #charges / guide-limit-title | Other fees | Title #1 Straight news | Follows | Keep |
| 125 | Body | #charges / guide-limit-copy | Fees for checks and for registering the loan and security. | Body #1 Lede | Follows | Keep |
| 126 | Title | #charges / list/card title (guide-share-then) | Legal and technical fees | Title #1 Straight news | Follows | Keep |
| 127 | Body | #charges / list/card body (guide-share-when) | Fee to check legal papers and the property. | Body #10 FAQ known/unknown | Follows | Keep |
| 128 | Title | #charges / list/card title (guide-share-then) | Title search report fees | Title #1 Straight news | Follows | Keep |
| 129 | Title | #charges / list/card body (guide-share-when) | Fee to check the property title. | Title #1 Straight news | Follows | Keep |
| 130 | Title | #charges / list/card title (guide-share-then) | Valuation fees | Title #1 Straight news | Follows | Keep |
| 131 | Title | #charges / list/card body (guide-share-when) | Fee to value the property. | Title #1 Straight news | Follows | Keep |
| 132 | Title | #charges / list/card title (guide-share-then) | Government charges | Title #1 Straight news | Follows | Keep |
| 133 | Body | #charges / list/card body (guide-share-when) | Government fees to register the loan security. | Body #8 Step-by-step | Follows | Keep |
| 134 | Title | #charges / flip control label | Fee breakdown | Title #6 Direct instruction | Partial | Open the usual fee breakdown |
| 135 | Title | #charges / guide-tile-title [flip-back] | Fee breakdown | Title #9 How-to | Partial | How home loan fees usually break down |
| 136 | Body | #charges / guide-calc-lead [flip-back] | Usual one-time costs at sanction and disbursement. Banks may use different names or bundle them. | Body #1 Lede | Partial | Usual one-time costs at sanction and disbursement — banks may rename or bundle them. |
| 137 | Title | #charges / fee block heading [flip-back] | Lender | — | N/A | Keep as UI chrome |
| 138 | Title | #charges / fee row name [flip-back] | Processing fee | Title #1 Straight news | Follows | Keep |
| 139 | Body | #charges / inline note (guide-limit-note) [flip-back] | Non-refundable | Body #2 Scale/numbers | Follows | Keep |
| 140 | Body | #charges / fee row value [flip-back] | Up to 2%–3%* | — | N/A | Keep as UI chrome |
| 141 | Title | #charges / fee row name [flip-back] | Login fee | Title #1 Straight news | Follows | Keep |
| 142 | Body | #charges / fee row value [flip-back] | ₹5,000* | — | N/A | Keep as UI chrome |
| 143 | Body | #charges / fee row detail [flip-back] | Included in the processing fee. Taken upfront to log in your application. | Body #2 Scale/numbers | Follows | Keep |
| 144 | Title | #charges / fee row name [flip-back] | Others | Title #1 Straight news | Follows | Keep |
| 145 | Body | #charges / fee row value [flip-back] | As per lender* | — | N/A | Keep as UI chrome |
| 146 | Title | #charges / fee block heading [flip-back] | Property checks | — | N/A | Keep as UI chrome |
| 147 | Title | #charges / fee row name [flip-back] | Legal and technical | Title #1 Straight news | Follows | Keep |
| 148 | Body | #charges / fee row value [flip-back] | ₹4,500* | — | N/A | Keep as UI chrome |
| 149 | Title | #charges / fee row name [flip-back] | Title search report | Title #1 Straight news | Follows | Keep |
| 150 | Body | #charges / fee row value [flip-back] | ₹4,500* | — | N/A | Keep as UI chrome |
| 151 | Title | #charges / fee row name [flip-back] | Valuation | Title #1 Straight news | Follows | Keep |
| 152 | Body | #charges / fee row value [flip-back] | ₹4,500* | — | N/A | Keep as UI chrome |
| 153 | Title | #charges / fee block heading [flip-back] | Government# | — | N/A | Keep as UI chrome |
| 154 | Title | #charges / fee row name [flip-back] | Stamp when you pledge the house (MODT) | Title #1 Straight news | Follows | Keep |
| 155 | Body | #charges / fee row value [flip-back] | 0.3% of loan amount# | — | N/A | Keep as UI chrome |
| 156 | Body | #charges / fee row detail [flip-back] | Stamp duty when you give property papers to the bank as security. | Body #2 Scale/numbers | Follows | Keep |
| 157 | Title | #charges / fee row name [flip-back] | Register the loan agreement (NOI registration) | Title #1 Straight news | Follows | Keep |
| 158 | Body | #charges / fee row value [flip-back] | 0.5%, max ₹15,000# | — | N/A | Keep as UI chrome |
| 159 | Body | #charges / fee row detail [flip-back] | Fee to register the loan agreement with the government. | Body #2 Scale/numbers | Follows | Keep |
| 160 | Title | #charges / fee row name [flip-back] | File that registration (NOI filing) | Title #1 Straight news | Follows | Keep |
| 161 | Body | #charges / fee row value [flip-back] | ₹1,000 + ₹300# | — | N/A | Keep as UI chrome |
| 162 | Body | #charges / fee row detail [flip-back] | Filing fee. ₹300 extra if done in person. | Body #2 Scale/numbers | Follows | Keep |
| 163 | Title | #charges / fee row name [flip-back] | Small stamp on that filing (NOI stamp duty) | Title #1 Straight news | Follows | Keep |
| 164 | Body | #charges / fee row value [flip-back] | ₹100# | — | N/A | Keep as UI chrome |
| 165 | Body | #charges / fee row detail [flip-back] | Often due only if the pledge stamp (MODT) is already paid. | Body #2 Scale/numbers | Follows | Keep |
| 166 | Title | #charges / fee row name [flip-back] | Stamp, franking and notary | Title #1 Straight news | Follows | Keep |
| 167 | Body | #charges / fee row value [flip-back] | ₹6,000* | — | N/A | Keep as UI chrome |
| 168 | Body | #charges / fee row detail [flip-back] | Stamp paper, franking, and notary for loan and security papers. | Body #2 Scale/numbers | Follows | Keep |
| 169 | Title | #charges / fee row name [flip-back] | Central property charge record (CERSAI) | Title #1 Straight news | Follows | Keep |
| 170 | Body | #charges / fee row detail [flip-back] | Helps stop the same property from being used for more than one loan. | Body #2 Scale/numbers | Follows | Keep |
| 171 | Title | #charges / fee row name [flip-back] | Up to ₹5 lakh loan | Title #1 Straight news | Follows | Keep |
| 172 | Body | #charges / fee row value [flip-back] | ₹50* | — | N/A | Keep as UI chrome |
| 173 | Title | #charges / fee row name [flip-back] | Above ₹5 lakh loan | Title #1 Straight news | Follows | Keep |
| 174 | Body | #charges / fee row value [flip-back] | ₹100* | — | N/A | Keep as UI chrome |
| 175 | Body | #charges / guide-glance [flip-back] | * Excluding GST. # Only in Maharashtra. Differs from state to state as per state laws. Figures above are typical industry averages. Exact fees may differ by lender and as per your profile. | Body #3 So what | Follows | Keep |
| 176 | Body | #charges / flip control label [flip-back] | Close | — | N/A | Keep as UI chrome |
| 177 | Title | #project-bank-approval / guide-tile-title | Is your project bank-approved? | Title #3 Question | Follows | Keep |
| 178 | Body | #project-bank-approval / guide-tile-copy | Before the loan is released, the bank must clear the property. Lenders call this Approved Project Finance (APF). | Body #1 Lede | Follows | Keep |
| 179 | Body | #project-bank-approval / guide-tile-copy | It depends on how you buy. | Body #1 Lede | Follows | Keep |
| 180 | Title | #project-bank-approval / segment tab | New / under-construction | — | N/A | Keep as UI chrome |
| 181 | Title | #project-bank-approval / segment tab | Resale | — | N/A | Keep as UI chrome |
| 182 | Body | #project-bank-approval / guide-limit-copy | If a bank has already approved the project, phase, tower or wing, your home loan may move faster and reduce repeated legal, technical and search-report charges. | Body #1 Lede | Follows | Keep |
| 183 | Body | #project-bank-approval / guide-limit-copy | The individual property is usually checked instead of the whole project. This may take additional time and include legal, technical and search-report charges. | Body #1 Lede | Follows | Keep |
| 184 | Title | #project-bank-approval / flip control label | Find banks for your project | Title #6 Direct instruction | Partial | Find which banks already approve your project |
| 185 | Body | guide-fine | This guide is for education and comparison. Figures and summaries here are indicative. Final rates, charges, eligibility, insurance, and approval depend on your profile, the property, and the lender. Your sanction letter, loan agreement, and policy papers prevail. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #4 Partial → lede Partial |
| Chapters #loan-amount–#project | #3 Question → ledes + lists Follow |
| Card pairs (fees) | Short then/when label → Title #1; explanation → Body #2/#8 (**role**, not class name — overview HTML swaps classes vs concessions) |
| Flip Estimate / EMI / fees | Control Title #6; back title Title #9; calc lead Body #1 |
| Fine | Body #6 Follows |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → How a home loan really costs you — before you pick a bank
2. **Flip-back** “Estimate” (#loan-amount) → How to estimate your loan range
3. **Flip-back** “Estimate” (#emi) → How to estimate your EMI
4. **Flip** Fee breakdown → Open the usual fee breakdown / How home loan fees usually break down
5. **Card** Processing fee (Title) + Part may be taken… (Body) — Keep after Kind-by-role

---

## `guide-documents.html` — Documents

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | Prepare once. Apply everywhere. | Title #9 How-to | Partial | How to prepare one document file for every home loan bank |
| 2 | Body | hero lede | Know your file is ready so the application does not stall for papers. | Body #1 Lede | Partial | KYC, income, property, and a short other pack — ready before login so the application does not stall. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | KYC | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | Income | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | Property | — | N/A | Keep as UI chrome |
| 7 | Title | contents item | Other | — | N/A | Keep as UI chrome |
| 8 | Title | #kyc / guide-tile-title | What proves who you are? | Title #3 Question | Follows | Keep |
| 9 | Body | #kyc / guide-tile-copy | KYC — proof of identity and address for the applicant and co-applicant(s). | Body #1 Lede | Follows | Keep |
| 10 | Title | #kyc / segment tab | Mandatory | — | N/A | Keep as UI chrome |
| 11 | Title | #kyc / segment tab | Any one of these | — | N/A | Keep as UI chrome |
| 12 | Body | #kyc / guide-doc-sub | Mandatory | — | N/A | Keep as UI chrome |
| 13 | Body | #kyc / guide-doc-name | PAN Card | Body #9 Entry-by-entry | Follows | Keep |
| 14 | Body | #kyc / guide-doc-note | Or Form 60, if the PAN Card is not available. | Body #8 Step-by-step | Follows | Keep |
| 15 | Body | #kyc / guide-doc-sub | Any one of these | — | N/A | Keep as UI chrome |
| 16 | Body | #kyc / guide-doc-name | Passport | Body #9 Entry-by-entry | Follows | Keep |
| 17 | Body | #kyc / guide-doc-note | Validity of which has not expired. | Body #8 Step-by-step | Follows | Keep |
| 18 | Body | #kyc / guide-doc-name | Driving Licence | Body #9 Entry-by-entry | Follows | Keep |
| 19 | Body | #kyc / guide-doc-note | Which has not expired. | Body #8 Step-by-step | Follows | Keep |
| 20 | Body | #kyc / guide-doc-name | Election / Voters Identification Card | Body #9 Entry-by-entry | Follows | Keep |
| 21 | Body | #kyc / guide-doc-note | Issued by the Election Commission of India. | Body #8 Step-by-step | Follows | Keep |
| 22 | Body | #kyc / guide-doc-name | NREGA Job Card | Body #9 Entry-by-entry | Follows | Keep |
| 23 | Body | #kyc / guide-doc-note | Issued by NREGA and duly signed by the officer of the State Government. | Body #8 Step-by-step | Follows | Keep |
| 24 | Body | #kyc / guide-doc-name | National Population Register Letter | Body #9 Entry-by-entry | Follows | Keep |
| 25 | Body | #kyc / guide-doc-note | Containing details of name and address. | Body #8 Step-by-step | Follows | Keep |
| 26 | Body | #kyc / guide-doc-name | Proof of Possession of Aadhaar Number | Body #9 Entry-by-entry | Follows | Keep |
| 27 | Body | #kyc / guide-doc-note | To be obtained voluntarily. | Body #8 Step-by-step | Follows | Keep |
| 28 | Body | #kyc / guide-callout | If your name changed, the same ID still works with a marriage certificate or a Gazette for that change. | Body #3 So what | Follows | Keep |
| 29 | Title | #income / guide-tile-title | What proves your income? | Title #3 Question | Follows | Keep |
| 30 | Body | #income / guide-tile-copy | Income documents for the applicant and co-applicant(s). | Body #1 Lede | Follows | Keep |
| 31 | Title | #income / segment tab | Salaried | — | N/A | Keep as UI chrome |
| 32 | Title | #income / segment tab | Self-employed | — | N/A | Keep as UI chrome |
| 33 | Body | #income / guide-doc-name | Salary Slips | Body #9 Entry-by-entry | Follows | Keep |
| 34 | Body | #income / guide-doc-note | Last 3 months. | Body #8 Step-by-step | Follows | Keep |
| 35 | Body | #income / guide-doc-name | Bank Statements | Body #9 Entry-by-entry | Follows | Keep |
| 36 | Body | #income / guide-doc-note | Last 6 months, showing salary credits. | Body #8 Step-by-step | Follows | Keep |
| 37 | Body | #income / guide-doc-name | Form-16 and IT Returns | Body #9 Entry-by-entry | Follows | Keep |
| 38 | Body | #income / guide-doc-note | Latest Form-16 and IT returns. | Body #8 Step-by-step | Follows | Keep |
| 39 | Body | #income / guide-doc-name | Employment Contract / Appointment Letter | Body #9 Entry-by-entry | Follows | Keep |
| 40 | Body | #income / guide-doc-note | If current employment is less than one year old. | Body #8 Step-by-step | Follows | Keep |
| 41 | Title | #income / segment tab | Proprietor | — | N/A | Keep as UI chrome |
| 42 | Title | #income / segment tab | Partnership | — | N/A | Keep as UI chrome |
| 43 | Title | #income / segment tab | Company | — | N/A | Keep as UI chrome |
| 44 | Body | #income / guide-doc-name | Income Tax Returns with Computation | Body #9 Entry-by-entry | Follows | Keep |
| 45 | Body | #income / guide-doc-note | For at least the last 2 assessment years (individual and business entity), attested by a Chartered Accountant. | Body #8 Step-by-step | Follows | Keep |
| 46 | Body | #income / guide-doc-name | Balance Sheet and Profit & Loss Account | Body #9 Entry-by-entry | Follows | Keep |
| 47 | Body | #income / guide-doc-note | At least last 2 years, with annexures / schedules (individual and business entity), attested by a Chartered Accountant. | Body #8 Step-by-step | Follows | Keep |
| 48 | Body | #income / guide-doc-name | Bank Account Statements | Body #9 Entry-by-entry | Follows | Keep |
| 49 | Body | #income / guide-doc-note | Last 12 months’ current account statements of the business entity and savings account statements of the individual. | Body #8 Step-by-step | Follows | Keep |
| 50 | Body | #income / guide-doc-name | Business Profile | Body #9 Entry-by-entry | Follows | Keep |
| 51 | Body | #income / guide-doc-note | Business profile of the applicant. | Body #8 Step-by-step | Follows | Keep |
| 52 | Body | #income / guide-doc-name | Form 26AS | Body #9 Entry-by-entry | Follows | Keep |
| 53 | Body | #income / guide-doc-note | Latest Form 26AS. | Body #8 Step-by-step | Follows | Keep |
| 54 | Body | #income / guide-doc-name | Details of Ongoing Loans | Body #9 Entry-by-entry | Follows | Keep |
| 55 | Body | #income / guide-doc-note | Of the individual and the business entity, including outstanding amount, instalments, security, purpose and balance loan term. | Body #8 Step-by-step | Follows | Keep |
| 56 | Body | #income / guide-doc-name | Income Tax Returns with Computation | Body #9 Entry-by-entry | Follows | Keep |
| 57 | Body | #income / guide-doc-note | For at least the last 2 assessment years (individual and business entity), attested by a Chartered Accountant. | Body #8 Step-by-step | Follows | Keep |
| 58 | Body | #income / guide-doc-name | Balance Sheet and Profit & Loss Account | Body #9 Entry-by-entry | Follows | Keep |
| 59 | Body | #income / guide-doc-note | At least last 2 years, with annexures / schedules (individual and business entity), attested by a Chartered Accountant. | Body #8 Step-by-step | Follows | Keep |
| 60 | Body | #income / guide-doc-name | Bank Account Statements | Body #9 Entry-by-entry | Follows | Keep |
| 61 | Body | #income / guide-doc-note | Last 12 months’ current account statements of the business entity and savings account statements of the individual. | Body #8 Step-by-step | Follows | Keep |
| 62 | Body | #income / guide-doc-name | Business Profile | Body #9 Entry-by-entry | Follows | Keep |
| 63 | Body | #income / guide-doc-note | Business profile of the applicant. | Body #8 Step-by-step | Follows | Keep |
| 64 | Body | #income / guide-doc-name | Form 26AS | Body #9 Entry-by-entry | Follows | Keep |
| 65 | Body | #income / guide-doc-note | Latest Form 26AS. | Body #8 Step-by-step | Follows | Keep |
| 66 | Body | #income / guide-doc-name | Partnership Deed | Body #9 Entry-by-entry | Follows | Keep |
| 67 | Body | #income / guide-doc-note | Of the partnership firm. | Body #8 Step-by-step | Follows | Keep |
| 68 | Body | #income / guide-doc-name | Details of Ongoing Loans | Body #9 Entry-by-entry | Follows | Keep |
| 69 | Body | #income / guide-doc-note | Of the individual and the business entity, including outstanding amount, instalments, security, purpose and balance loan term. | Body #8 Step-by-step | Follows | Keep |
| 70 | Body | #income / guide-doc-name | Income Tax Returns with Computation | Body #9 Entry-by-entry | Follows | Keep |
| 71 | Body | #income / guide-doc-note | For at least the last 2 assessment years (individual and business entity), attested by a Chartered Accountant. | Body #8 Step-by-step | Follows | Keep |
| 72 | Body | #income / guide-doc-name | Balance Sheet and Profit & Loss Account | Body #9 Entry-by-entry | Follows | Keep |
| 73 | Body | #income / guide-doc-note | At least last 2 years, with annexures / schedules (individual and business entity), attested by a Chartered Accountant. | Body #8 Step-by-step | Follows | Keep |
| 74 | Body | #income / guide-doc-name | Bank Account Statements | Body #9 Entry-by-entry | Follows | Keep |
| 75 | Body | #income / guide-doc-note | Last 12 months’ current account statements of the business entity and savings account statements of the individual. | Body #8 Step-by-step | Follows | Keep |
| 76 | Body | #income / guide-doc-name | Business Profile | Body #9 Entry-by-entry | Follows | Keep |
| 77 | Body | #income / guide-doc-note | Business profile of the applicant. | Body #8 Step-by-step | Follows | Keep |
| 78 | Body | #income / guide-doc-name | Form 26AS | Body #9 Entry-by-entry | Follows | Keep |
| 79 | Body | #income / guide-doc-note | Latest Form 26AS. | Body #8 Step-by-step | Follows | Keep |
| 80 | Body | #income / guide-doc-name | Memorandum and Articles of Association | Body #9 Entry-by-entry | Follows | Keep |
| 81 | Body | #income / guide-doc-note | Of the company. | Body #8 Step-by-step | Follows | Keep |
| 82 | Body | #income / guide-doc-name | List of Directors and Shareholders | Body #9 Entry-by-entry | Follows | Keep |
| 83 | Body | #income / guide-doc-note | With individual shareholding, certified by a CA / CS. | Body #8 Step-by-step | Follows | Keep |
| 84 | Body | #income / guide-doc-name | Details of Ongoing Loans | Body #9 Entry-by-entry | Follows | Keep |
| 85 | Body | #income / guide-doc-note | Of the individual and the business entity, including outstanding amount, instalments, security, purpose and balance loan term. | Body #8 Step-by-step | Follows | Keep |
| 86 | Body | #income / guide-callout | Keep about 6 months between each year’s ITR filing. Filing several years together just before applying can look like income made for the loan. | Body #3 So what | Follows | Keep |
| 87 | Title | #property / guide-tile-title | What property papers do you need? | Title #3 Question | Follows | Keep |
| 88 | Body | #property / guide-tile-copy | The property documents for the home you are buying. | Body #1 Lede | Follows | Keep |
| 89 | Title | #property / segment tab | New Home | — | N/A | Keep as UI chrome |
| 90 | Title | #property / segment tab | Resale Home | — | N/A | Keep as UI chrome |
| 91 | Title | #property / segment tab | Build on N.A. plot | — | N/A | Keep as UI chrome |
| 92 | Body | #property / guide-doc-name | Allotment Letter / Buyer Agreement | Body #9 Entry-by-entry | Follows | Keep |
| 93 | Body | #property / guide-doc-note | Copy of the allotment letter / buyer agreement. | Body #8 Step-by-step | Follows | Keep |
| 94 | Body | #property / guide-doc-name | Payment Receipts | Body #9 Entry-by-entry | Follows | Keep |
| 95 | Body | #property / guide-doc-note | Receipt(s) of payment(s) made to the developer. | Body #8 Step-by-step | Follows | Keep |
| 96 | Body | #property / guide-doc-name | Occupancy Certificate | Body #9 Entry-by-entry | Follows | Keep |
| 97 | Body | #property / guide-doc-note | If the property is ready to move in. | Body #8 Step-by-step | Follows | Keep |
| 98 | Body | #property / guide-doc-name | Cost Sheet | Body #9 Entry-by-entry | Follows | Keep |
| 99 | Body | #property / guide-doc-note | Showing your total property acquisition cost. | Body #8 Step-by-step | Follows | Keep |
| 100 | Body | #property / guide-doc-name | Title Deeds | Body #9 Entry-by-entry | Follows | Keep |
| 101 | Body | #property / guide-doc-note | Including previous chain of the property documents. | Body #8 Step-by-step | Follows | Keep |
| 102 | Body | #property / guide-doc-name | Payment Receipts | Body #9 Entry-by-entry | Follows | Keep |
| 103 | Body | #property / guide-doc-note | Receipt(s) of initial payment(s) made to the seller. | Body #8 Step-by-step | Follows | Keep |
| 104 | Body | #property / guide-doc-name | Agreement to Sell | Body #9 Entry-by-entry | Follows | Keep |
| 105 | Body | #property / guide-doc-note | Copy of the agreement to sell (if already executed). | Body #8 Step-by-step | Follows | Keep |
| 106 | Body | #property / guide-doc-name | Title Deeds of the Plot | Body #9 Entry-by-entry | Follows | Keep |
| 107 | Body | #property / guide-doc-name | Proof of No Encumbrances | Body #9 Entry-by-entry | Follows | Keep |
| 108 | Body | #property / guide-doc-note | On the property. | Body #8 Step-by-step | Follows | Keep |
| 109 | Body | #property / guide-doc-name | Approved Plans | Body #9 Entry-by-entry | Follows | Keep |
| 110 | Body | #property / guide-doc-note | Copy of the plans, approved by the local authorities. | Body #8 Step-by-step | Follows | Keep |
| 111 | Body | #property / guide-doc-name | Construction Estimate | Body #9 Entry-by-entry | Follows | Keep |
| 112 | Body | #property / guide-doc-note | By an architect / civil engineer. | Body #8 Step-by-step | Follows | Keep |
| 113 | Title | #other / guide-tile-title | What else might they ask for? | Title #3 Question | Follows | Keep |
| 114 | Body | #other / guide-tile-copy | Other documents usually filed with the application. | Body #1 Lede | Follows | Keep |
| 115 | Body | #other / guide-doc-name | Own Contribution Proof | Body #9 Entry-by-entry | Follows | Keep |
| 116 | Body | #other / guide-doc-note | Receipts for amounts already paid, plus any valid document showing funds for the unpaid share. | Body #8 Step-by-step | Follows | Keep |
| 117 | Body | #other / guide-doc-name | Ongoing Loan Bank Statements | Body #9 Entry-by-entry | Follows | Keep |
| 118 | Body | #other / guide-doc-note | Last 6 months’ bank statements showing repayment of any ongoing loans. | Body #8 Step-by-step | Follows | Keep |
| 119 | Body | #other / guide-doc-name | Passport Size Photograph | Body #9 Entry-by-entry | Follows | Keep |
| 120 | Body | #other / guide-doc-note | Of all the applicants / co-applicants, to be affixed on the application form and signed across. | Body #8 Step-by-step | Follows | Keep |
| 121 | Body | #other / guide-doc-name | Processing Fee Cheque | Body #9 Entry-by-entry | Follows | Keep |
| 122 | Body | #other / guide-doc-note | Cheque for processing fee favouring the lender. | Body #8 Step-by-step | Follows | Keep |
| 123 | Body | guide-fine | Above is an indicative list only. Additional documents may be required based upon your profile as per lenders’ policy. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #9 Partial → pack lede |
| #kyc–#other | #3 → doc inventory Body #9/#8 |
| No when/then cards | name + note pairs |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → How to prepare one document file for every home loan bank
2. Hero lede → KYC, income, property, and a short other pack…
3. Keep chapter #3 questions
4. Doc inventory name+note — Keep
5. Fine — Keep Body #6

---

## `tax-benefits.html` — Tax benefits

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | Your home loan EMI has tax benefits. | Title #4 Promise | Partial | How home loan EMI interest and principal cut your tax |
| 2 | Body | hero lede | Know how much of this loan can still reduce your tax this year. | Body #1 Lede | Partial | Interest under Section 22 and principal under Schedule XV can reduce tax — but only under rules that change with regime and who lives in the home. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | Interest payment | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | Principal repayment | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | Under construction | — | N/A | Keep as UI chrome |
| 7 | Title | contents item | Joint loan | — | N/A | Keep as UI chrome |
| 8 | Title | contents item | How to claim | — | N/A | Keep as UI chrome |
| 9 | Title | contents item | Other | — | N/A | Keep as UI chrome |
| 10 | Title | #interest / guide-tile-title | Can you claim the interest on tax return? | Title #3 Question | Follows | Keep |
| 11 | Body | #interest / guide-tile-copy | Yes, your limit depends on who lives in the home and on the tax regime. Section 22 ITA 2025 | Body #2 Scale/numbers | Follows | Keep |
| 12 | Title | #interest / segment tab | You live in it | — | N/A | Keep as UI chrome |
| 13 | Title | #interest / segment tab | You rent it out | — | N/A | Keep as UI chrome |
| 14 | Body | #interest / guide-answer-label | Old tax regime | — | N/A | Keep as UI chrome |
| 15 | Body | #interest / guide-answer-prefix | Up to | — | N/A | Keep as UI chrome |
| 16 | Body | #interest / guide-answer-num | ₹2 lakh | — | N/A | Keep as UI chrome |
| 17 | Body | #interest / guide-answer-unit | a year | — | N/A | Keep as UI chrome |
| 18 | Body | #interest / guide-answer-label | New tax regime | — | N/A | Keep as UI chrome |
| 19 | Body | #interest / guide-answer-num | Cannot be claimed | — | N/A | Keep as UI chrome |
| 20 | Body | #interest / guide-doc-sub | What changes this limit | — | N/A | Keep as UI chrome |
| 21 | Title | #interest / list/card body (guide-share-when) | ₹2 lakh limit | Title #1 Straight news | Follows | Keep |
| 22 | Body | #interest / list/card title (guide-share-then) | Needs a loan to buy or build, and the home ready within 5 years. If either is missing, only ₹30,000 a year. | Body #2 Scale/numbers | Follows | Keep |
| 23 | Title | #interest / list/card body (guide-share-when) | Loan taken for repair, renewal or reconstruction | Title #1 Straight news | Follows | Keep |
| 24 | Title | #interest / list/card title (guide-share-then) | Only ₹30,000 a year. | Title #1 Straight news | Follows | Keep |
| 25 | Body | #interest / guide-answer-label | Old tax regime | — | N/A | Keep as UI chrome |
| 26 | Body | #interest / guide-answer-num | No fixed upper cap | — | N/A | Keep as UI chrome |
| 27 | Body | #interest / guide-answer-label | New tax regime | — | N/A | Keep as UI chrome |
| 28 | Body | #interest / guide-answer-num | Can be claimed against rental income | Body #1 Lede | Follows | Keep |
| 29 | Body | #interest / guide-glance | The 5-year ready rule does not apply when you rent it out. | Body #3 So what | Follows | Keep |
| 30 | Body | #interest / guide-glance | Up to two homes can be treated as self-occupied. | Body #3 So what | Follows | Keep |
| 31 | Title | #principal / guide-tile-title | Can you claim the principal on tax return? | Title #3 Question | Follows | Keep |
| 32 | Body | #principal / guide-tile-copy | Yes, only under the old tax regime. Schedule XV ITA 2025 | Body #2 Scale/numbers | Follows | Keep |
| 33 | Body | #principal / guide-answer-prefix | Up to | — | N/A | Keep as UI chrome |
| 34 | Body | #principal / guide-answer-num | ₹1.5 lakh | — | N/A | Keep as UI chrome |
| 35 | Body | #principal / guide-answer-unit | a year under the old tax regime | — | N/A | Keep as UI chrome |
| 36 | Title | #principal / list/card body (guide-share-when) | Shared with | Title #1 Straight news | Follows | Keep |
| 37 | Body | #principal / list/card title (guide-share-then) | EPF, life insurance, and other eligible items. | Body #8 Step-by-step | Follows | Keep |
| 38 | Title | #principal / list/card body (guide-share-when) | When it starts | Title #1 Straight news | Follows | Keep |
| 39 | Body | #principal / list/card title (guide-share-then) | After construction is complete and you have possession. | Body #10 FAQ known/unknown | Follows | Keep |
| 40 | Body | #principal / guide-callout | Sale within 5 years Earlier principal repayment claims are added back to income. Interest payment under Section 22 is not reversed the same way. | Body #3 So what | Partial | If you sell within 5 years, earlier principal claims are added back to income; Section 22 interest is not reversed the same way. |
| 41 | Title | #under-construction / guide-tile-title | What if the home is under construction? | Title #3 Question | Follows | Keep |
| 42 | Body | #under-construction / guide-tile-copy | Claim the interest starting from the year you get the keys. | Body #1 Lede | Follows | Keep |
| 43 | Title | #under-construction / list/card body (guide-share-when) | When you get possession | Title #1 Straight news | Follows | Keep |
| 44 | Body | #under-construction / list/card title (guide-share-then) | Claim that earlier interest in 5 equal yearly parts. | Body #2 Scale/numbers | Follows | Keep |
| 45 | Title | #under-construction / list/card body (guide-share-when) | Interest after possession | Title #1 Straight news | Follows | Keep |
| 46 | Title | #under-construction / list/card title (guide-share-then) | Claim each year as usual. | Title #1 Straight news | Follows | Keep |
| 47 | Body | #under-construction / guide-doc-sub | About the ₹2 lakh interest limit | — | N/A | Keep as UI chrome |
| 48 | Title | #under-construction / segment tab | You live there | — | N/A | Keep as UI chrome |
| 49 | Title | #under-construction / segment tab | You rent it out | — | N/A | Keep as UI chrome |
| 50 | Body | #under-construction / guide-limit-copy | Under the old tax regime, pre-possession and after-possession interest together stay inside the ₹2 lakh limit. | Body #2 Scale/numbers | Follows | Keep |
| 51 | Body | #under-construction / guide-limit-copy | The ₹2 lakh limit does not apply when you rent it out. | Body #2 Scale/numbers | Follows | Keep |
| 52 | Title | #joint-loan / guide-tile-title | Can both co-owners claim tax benefits? | Title #3 Question | Follows | Keep |
| 53 | Body | #joint-loan / guide-tile-copy | Yes, when both names are on the property papers and the loan, and each pays their share of the EMI. Each can claim within their ownership share and what they actually paid. | Body #1 Lede | Follows | Keep |
| 54 | Title | #how-to-claim / guide-tile-title | How do you claim it? | Title #9 How-to | Partial | How to claim interest and principal on your return |
| 55 | Body | #how-to-claim / guide-tile-copy | Interest and principal go in different sections of your tax return. | Body #1 Lede | Follows | Keep |
| 56 | Body | #how-to-claim / guide-teach-from | Interest payment | — | N/A | Keep as UI chrome |
| 57 | Body | #how-to-claim / guide-teach-to | Claimed under Income from house property | — | N/A | Keep as UI chrome |
| 58 | Body | #how-to-claim / guide-teach-from | Principal repayment | — | N/A | Keep as UI chrome |
| 59 | Body | #how-to-claim / guide-teach-to | Claimed as a deduction from total income | — | N/A | Keep as UI chrome |
| 60 | Body | #how-to-claim / guide-callout | If salaried, share the interest and principal figures with your employer for TDS. | Body #3 So what | Follows | Keep |
| 61 | Body | #how-to-claim / guide-doc-sub | Documents you need | — | N/A | Keep as UI chrome |
| 62 | Body | #how-to-claim / guide-doc-name | Interest certificate | Body #9 Entry-by-entry | Follows | Keep |
| 63 | Body | #how-to-claim / guide-doc-note | From the lender for the year. Shows interest payment and principal repayment split. | Body #8 Step-by-step | Follows | Keep |
| 64 | Body | #how-to-claim / guide-doc-name | Possession proof | Body #9 Entry-by-entry | Follows | Keep |
| 65 | Body | #how-to-claim / guide-doc-note | Needed when principal repayment and pre-possession interest payment start. | Body #8 Step-by-step | Follows | Keep |
| 66 | Title | #how-to-claim / flip control label | See tax claims calculator | Title #6 Direct instruction | Partial | Open the tax claims calculator |
| 67 | Title | #other / guide-tile-title | Anything else on tax? | Title #3 Question | Partial | What else can you claim with a home loan? |
| 68 | Body | #other / guide-tile-copy | There are a few extra benefits beyond the main interest and principal deductions. | Body #1 Lede | Follows | Keep |
| 69 | Title | #other / FAQ summary | Stamp duty and registration (property purchase only) | Title #3 Question | Partial | What about stamp duty and registration (property purchase only)? |
| 70 | Body | #other / guide-share-then | Claimed in the year you pay them, within the same ₹1.5 lakh principal repayment basket. Not loan costs. | Body #2 Scale/numbers | Follows | Keep |
| 71 | Title | #other / FAQ summary | Home loan protection insurance | Title #3 Question | Partial | What about home loan protection insurance? |
| 72 | Body | #other / guide-share-then | Premium can sit in the same ₹1.5 lakh basket if you pay it yourself — not if the lender adds it to your EMI. | Body #2 Scale/numbers | Follows | Keep |
| 73 | Title | #other / FAQ summary | House property loss (old tax regime) | Title #3 Question | Partial | What about house property loss (old tax regime)? |
| 74 | Body | #other / guide-share-then | If interest creates a loss, only up to ₹2 lakh can be set off against other income like salary in that year. The rest can be carried forward. | Body #2 Scale/numbers | Follows | Keep |
| 75 | Title | #other / FAQ summary | House property loss (new tax regime) | Title #3 Question | Partial | What about house property loss (new tax regime)? |
| 76 | Body | #other / guide-share-then | Interest on a rented home can still reduce rental income. A loss from this usually cannot cut other income like salary. | Body #10 FAQ known/unknown | Follows | Keep |
| 77 | Title | #other / FAQ summary | Loan for a plot only (no house yet) | Title #3 Question | Partial | What about loan for a plot only (no house yet)? |
| 78 | Body | #other / guide-share-then | You usually claim principal repayment on tax only after a house is built on that plot and you have possession. | Body #10 FAQ known/unknown | Follows | Keep |
| 79 | Title | #other / FAQ summary | Older first-home extras (only if your loan year matches) | Title #3 Question | Partial | What about older first-home extras (only if your loan year matches)? |
| 80 | Body | #other / guide-share-then | Under the old tax regime only, and only if this was your first home, older rules allowed extra interest for loans sanctioned in fixed windows. Section 130 covered sanctions from 1 April 2016 to 31 March 2017 (up to ₹50,000 extra; loan up to ₹35 lakh; house up to ₹50 lakh). Section 131 covered sanctions from 1 April 2019 to 31 March 2022 (up to ₹1.5 lakh extra; stamp value up to ₹45 lakh). This sits over and above the Section 22 interest limit. You cannot claim both. Not for loans sanctioned after 31 March 2022. | Body #2 Scale/numbers | Follows | Keep |
| 81 | Body | guide-fine | For general understanding only. Home loan tax rules depend on your facts, the tax regime you choose, and current law. Confirm claims with a qualified tax professional before you file. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #4 Partial → Section 22/XV lede |
| Chapters | #3 / #9 → scale + FAQ then bodies |
| Card labels/explanations | Title #1 + Body #2/#10 |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → How home loan EMI interest and principal cut your tax
2. **Card** ₹2 lakh / ₹30,000 interest rules — Keep Body #2
3. #how-to-claim → How to claim interest and principal on your return
4. **Control** See tax claims calculator → Open the tax claims calculator
5. #other → What else can you claim with a home loan?

---

## `concessions.html` — Concessions

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | You may already pay less. | Title #4 Promise | Partial | How banks and PMAY can cut your home loan cost |
| 2 | Body | hero lede | Know if you can still pay less before you accept an offer. | Body #1 Lede | Partial | Rate discounts, PMAY interest subsidy, and fee waivers can lower what you pay — check them before you accept a sanction. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | Rate discounts | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | PMAY subsidy | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | Fees | — | N/A | Keep as UI chrome |
| 7 | Title | #bank-rates / guide-tile-title | What can lower your home loan rate? | Title #3 Question | Follows | Keep |
| 8 | Body | #bank-rates / guide-tile-copy | Some banks offer a discount on their listed rate when you meet their eligibility rules. | Body #1 Lede | Follows | Keep |
| 9 | Title | #bank-rates / list/card body (guide-share-when) | Woman as primary applicant | Title #1 Straight news | Follows | Keep |
| 10 | Body | #bank-rates / list/card title (guide-share-then) | Often 0.05% to 0.10% lower. She is usually the sole owner or the first name on the property papers. | Body #2 Scale/numbers | Follows | Keep |
| 11 | Title | #bank-rates / list/card body (guide-share-when) | Salary with the same bank | Title #1 Straight news | Follows | Keep |
| 12 | Body | #bank-rates / list/card title (guide-share-then) | Your salary account with that bank can mean a lower rate. | Body #10 FAQ known/unknown | Follows | Keep |
| 13 | Title | #bank-rates / list/card body (guide-share-when) | Existing savings or loan customer | Title #1 Straight news | Follows | Keep |
| 14 | Body | #bank-rates / list/card title (guide-share-then) | Long-standing customers sometimes get a small cut at sanction. | Body #10 FAQ known/unknown | Follows | Keep |
| 15 | Title | #bank-rates / list/card body (guide-share-when) | Green home | Title #1 Straight news | Follows | Keep |
| 16 | Body | #bank-rates / list/card title (guide-share-then) | Often 0.05% to 0.10% lower when the project is rated by IGBC, GRIHA, LEED, or another approved Indian agency. | Body #2 Scale/numbers | Follows | Keep |
| 17 | Body | #bank-rates / guide-glance | Your final rate is what the bank writes at sanction, not only the listed rate. | Body #3 So what | Follows | Keep |
| 18 | Title | #pmay / guide-tile-title | Who can get a PMAY subsidy? | Title #3 Question | Follows | Keep |
| 19 | Body | #pmay / guide-tile-copy | If your household income is up to ₹3, ₹6, or ₹9 lakh a year, this is your first home, your loan is up to ₹25 lakh, and the house is up to ₹35 lakh. PMAY-U 2.0 ISS | Body #2 Scale/numbers | Follows | Keep |
| 20 | Title | #pmay / segment tab | PMAY-U 2.0 ISS | — | N/A | Keep as UI chrome |
| 21 | Title | #pmay / segment tab | PMAY CLSS (closed) | — | N/A | Keep as UI chrome |
| 22 | Title | #pmay / segment tab | Who qualifies | — | N/A | Keep as UI chrome |
| 23 | Title | #pmay / segment tab | How you get it | — | N/A | Keep as UI chrome |
| 24 | Title | #pmay / list/card body (guide-share-when) | Income | Title #1 Straight news | Follows | Keep |
| 25 | Body | #pmay / list/card title (guide-share-then) | Household income up to ₹3 lakh (EWS), ₹6 lakh (LIG), or ₹9 lakh (MIG) a year. | Body #2 Scale/numbers | Follows | Keep |
| 26 | Title | #pmay / list/card body (guide-share-when) | First home | Title #1 Straight news | Follows | Keep |
| 27 | Body | #pmay / list/card title (guide-share-then) | You and your family should not already own a finished house anywhere in India. No housing-scheme benefit in the last 20 years. The house is usually in a woman’s name, or joint with her. | Body #2 Scale/numbers | Follows | Keep |
| 28 | Title | #pmay / list/card body (guide-share-when) | Loan and house | Title #1 Straight news | Follows | Keep |
| 29 | Body | #pmay / list/card title (guide-share-then) | Purchase, repurchase, or construction. Loan up to ₹25 lakh. House value up to ₹35 lakh. Carpet area up to 120 sqm. | Body #2 Scale/numbers | Follows | Keep |
| 30 | Title | #pmay / list/card body (guide-share-when) | Loan tenure | Title #1 Straight news | Follows | Keep |
| 31 | Body | #pmay / list/card title (guide-share-then) | Longer than 5 years. The 4% is worked out for up to 12 years. | Body #2 Scale/numbers | Follows | Keep |
| 32 | Title | #pmay / list/card body (guide-share-when) | Bank’s numbers | Title #1 Straight news | Follows | Keep |
| 33 | Body | #pmay / list/card title (guide-share-then) | Income and house value as the bank assesses them must stay within the caps. | Body #10 FAQ known/unknown | Follows | Keep |
| 34 | Title | #pmay / list/card body (guide-share-when) | Subsidy | Title #1 Straight news | Follows | Keep |
| 35 | Body | #pmay / list/card title (guide-share-then) | 4% a year on the first ₹8 lakh of the loan. Max about ₹1.80 lakh. Only for loans sanctioned and disbursed on or after 1 Sep 2024. | Body #2 Scale/numbers | Follows | Keep |
| 36 | Title | #pmay / list/card body (guide-share-when) | One house, one subsidy | Title #1 Straight news | Follows | Keep |
| 37 | Body | #pmay / list/card title (guide-share-then) | If a previous owner already got ISS on that house, you usually cannot. | Body #10 FAQ known/unknown | Follows | Keep |
| 38 | Title | #pmay / list/card body (guide-share-when) | Register on the PMAY portal | Title #1 Straight news | Follows | Keep |
| 39 | Body | #pmay / list/card title (guide-share-then) | Put in your demand on the Unified Web Portal. Then it goes to your bank or housing finance company. | Body #10 FAQ known/unknown | Follows | Keep |
| 40 | Title | #pmay / list/card body (guide-share-when) | On your loan account | Title #1 Straight news | Follows | Keep |
| 41 | Body | #pmay / list/card title (guide-share-then) | Subsidy comes in 5 yearly credits on the loan. It cuts principal. You do not get cash in hand. | Body #2 Scale/numbers | Follows | Keep |
| 42 | Title | #pmay / list/card body (guide-share-when) | What you give the bank | Title #1 Straight news | Follows | Keep |
| 43 | Body | #pmay / list/card title (guide-share-then) | Aadhaar and income proof for the claim. Loan must stay active, and more than half the principal must still be outstanding when each credit lands. | Body #10 FAQ known/unknown | Follows | Keep |
| 44 | Title | #pmay / segment tab | Who it was for | — | N/A | Keep as UI chrome |
| 45 | Title | #pmay / segment tab | How it worked | — | N/A | Keep as UI chrome |
| 46 | Title | #pmay / list/card body (guide-share-when) | Income bands | Title #1 Straight news | Follows | Keep |
| 47 | Body | #pmay / list/card title (guide-share-then) | EWS, LIG, MIG-I, MIG-II. Each band had its own income and loan caps. | Body #10 FAQ known/unknown | Follows | Keep |
| 48 | Title | #pmay / list/card body (guide-share-when) | First home | Title #1 Straight news | Follows | Keep |
| 49 | Body | #pmay / list/card title (guide-share-then) | No finished house already in the family’s name. Woman owner or co-owner in many cases. | Body #10 FAQ known/unknown | Follows | Keep |
| 50 | Title | #pmay / list/card body (guide-share-when) | Subsidy | Title #1 Straight news | Follows | Keep |
| 51 | Body | #pmay / list/card title (guide-share-then) | Interest cut on a capped loan amount by category (about 6.5% / 4% / 3% on up to about ₹6 lakh / ₹9 lakh / ₹12 lakh). Not always on your full sanction. | Body #2 Scale/numbers | Follows | Keep |
| 52 | Title | #pmay / list/card body (guide-share-when) | Through the bank | Title #1 Straight news | Follows | Keep |
| 53 | Body | #pmay / list/card title (guide-share-then) | At sanction, the bank checked eligibility and filed the claim with the nodal agency. You did not file a separate PMAY form for that scheme. | Body #10 FAQ known/unknown | Follows | Keep |
| 54 | Title | #pmay / list/card body (guide-share-when) | On your loan account | Title #1 Straight news | Follows | Keep |
| 55 | Body | #pmay / list/card title (guide-share-then) | It lowered EMI or outstanding balance. Not cash in hand. | Body #10 FAQ known/unknown | Follows | Keep |
| 56 | Title | #pmay / list/card body (guide-share-when) | Closed for new loans | Title #1 Straight news | Follows | Keep |
| 57 | Body | #pmay / list/card title (guide-share-then) | MIG closed 31 Mar 2021. EWS and LIG closed 31 Mar 2022. Use this tab only if you already claimed CLSS, or your old claim was in that window. | Body #2 Scale/numbers | Follows | Keep |
| 58 | Title | #fees / guide-tile-title | Can fees be waived? | Title #3 Question | Follows | Keep |
| 59 | Body | #fees / guide-tile-copy | Yes, banks sometimes waive charges for a limited time. | Body #1 Lede | Follows | Keep |
| 60 | Title | #fees / FAQ summary | During a festival or campaign | Title #3 Question | Partial | What about during a festival or campaign? |
| 61 | Body | #fees / guide-share-then | Processing fee may be zero or discounted. GST may or may not be included in the waiver. | Body #10 FAQ known/unknown | Follows | Keep |
| 62 | Title | #fees / FAQ summary | Salary with the same bank | Title #3 Question | Partial | What about salary with the same bank? |
| 63 | Body | #fees / guide-share-then | Processing fee may be waived when your salary is credited with that bank. | Body #10 FAQ known/unknown | Follows | Keep |
| 64 | Title | #fees / FAQ summary | Offer with free legal or valuation | Title #3 Question | Partial | What about offer with free legal or valuation? |
| 65 | Body | #fees / guide-share-then | Those fees may be waived. Others still charge them separately. | Body #10 FAQ known/unknown | Follows | Keep |
| 66 | Title | #fees / FAQ summary | Moving your loan to another bank | Title #3 Question | Partial | What about moving your loan to another bank? |
| 67 | Body | #fees / guide-share-then | Takeover fees on the old loan plus fresh charges on the new one can cancel a small waiver. | Body #10 FAQ known/unknown | Follows | Keep |
| 68 | Body | guide-fine | For general understanding only. Concession rules depend on your income, property, and the lender’s current policy. Confirm PMAY on the official site and with your lender before you count on a subsidy. Banks and government schemes change over time. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #4 Partial → rate/PMAY/fees lede |
| #bank-rates / #pmay / #fees | #3 → when=label Title #1, then=Body #2/#10 |
| PMAY caps | Body #2 — facts locked |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → How banks and PMAY can cut your home loan cost
2. **Card when** Woman as primary applicant — Keep Title #1
3. **Card then** Often 0.05% to 0.10% lower… — Keep Body #2
4. **Card then** PMAY 4% / ₹8 lakh / ₹1.80 lakh — Keep Body #2
5. Hero lede → Rate discounts, PMAY subsidy, and fee waivers…

---

## `home-loan-insurance.html` — Home loan insurance

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | Two covers often sit with the home loan. | Title #1 Straight news | Partial | Home loans usually need property cover; loan cover is often optional |
| 2 | Body | hero lede | Know what each is for before the cost joins the loan. | Body #1 Lede | Partial | Property cover protects the house that secures the loan; loan cover pays toward the outstanding balance if the named borrower dies — check both before premium joins the loan. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | Two covers | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | Must you buy it? | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | Before you buy | — | N/A | Keep as UI chrome |
| 7 | Title | #cover-types / guide-tile-title | If the house is damaged? | Title #3 Question | Partial | What does property cover pay for? |
| 8 | Body | #cover-types / guide-tile-copy | Property cover pays to repair or rebuild after listed damage. | Body #1 Lede | Follows | Keep |
| 9 | Body | #cover-types / guide-tile-note | Lenders ask so fire or flood does not wipe out the house that secures the loan. | Body #1 Lede | Follows | Keep |
| 10 | Title | #cover-types / flip control label | See property cover | Title #6 Direct instruction | Partial | Read the property cover guide |
| 11 | Title | #cover-types / guide-tile-title | If the borrower dies? | Title #3 Question | Partial | What does loan cover pay for? |
| 12 | Body | #cover-types / guide-tile-copy | Loan cover pays toward the outstanding home loan. | Body #1 Lede | Follows | Keep |
| 13 | Body | #cover-types / guide-tile-note | Lenders ask so the outstanding loan can still be paid if the borrower named on the cover dies. | Body #1 Lede | Follows | Keep |
| 14 | Title | #cover-types / flip control label | See loan cover | Title #6 Direct instruction | Partial | Read the loan cover guide |
| 15 | Title | #must-buy / guide-tile-title | Must you buy insurance? | Title #3 Question | Follows | Keep |
| 16 | Body | #must-buy / guide-tile-copy | Property cover is often required. Loan cover is usually optional. | Body #1 Lede | Follows | Keep |
| 17 | Title | #must-buy / list/card body (guide-share-when) | Property cover | Title #1 Straight news | Follows | Keep |
| 18 | Body | #must-buy / list/card title (guide-share-then) | Often written into the loan agreement while the loan runs. | Body #10 FAQ known/unknown | Follows | Keep |
| 19 | Title | #must-buy / list/card body (guide-share-when) | Loan cover | Title #1 Straight news | Follows | Keep |
| 20 | Body | #must-buy / list/card title (guide-share-then) | Usually optional. An existing term plan can often be used instead. | Body #10 FAQ known/unknown | Follows | Keep |
| 21 | Body | #must-buy / guide-glance | For both, you can usually choose the insurer. Not only the bank's partner. | Body #3 So what | Follows | Keep |
| 22 | Title | #must-buy / FAQ summary | As per RBI, insurance is voluntary. Banks cannot force their insurer or tie it to the loan. | Title #3 Question | Follows | Keep |
| 23 | Body | #must-buy / figcaption | Official wording from RBI Master Directions | — | N/A | Keep as UI chrome |
| 24 | Body | #must-buy / blockquote | 61. Corporate agency of insurance companies … by banks shall be subject to the following additional conditions: (5) … shall not follow any restrictive practices … opt for products of a specific insurance company or link sale of such products to any banking product. … purchase … is purely voluntary and is not linked to availment of any other facility from the bank … | — | N/A | Keep as UI chrome |
| 25 | Title | #key-points / guide-tile-title | What to check before you buy? | Title #3 Question | Follows | Keep |
| 26 | Body | #key-points / guide-tile-copy | Check the premium added to the loan, the refund policy if you leave early, and term plan vs. loan cover. | Body #1 Lede | Follows | Keep |
| 27 | Title | #key-points / list/card body (guide-share-when) | Premium inside the loan | Title #1 Straight news | Follows | Keep |
| 28 | Body | #key-points / list/card title (guide-share-then) | If the premium sits in the loan, you pay interest on it too. Pay it separately and you avoid that interest. | Body #10 FAQ known/unknown | Follows | Keep |
| 29 | Title | #key-points / list/card body (guide-share-when) | Early close or transfer | Title #1 Straight news | Follows | Keep |
| 30 | Body | #key-points / list/card title (guide-share-then) | Cover often stops with the loan, and you may get only some of the premium back, or nothing. | Body #10 FAQ known/unknown | Follows | Keep |
| 31 | Title | #key-points / list/card body (guide-share-when) | Term plan instead of loan cover | Title #1 Straight news | Follows | Keep |
| 32 | Body | #key-points / list/card title (guide-share-then) | Often cheaper than bank loan cover for the same job. See loan cover to compare. | Body #10 FAQ known/unknown | Follows | Keep |
| 33 | Body | guide-fine | Education only. Your Certificate of Insurance or Policy Schedule wins. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #1 Partial → split covers |
| Property/loan cards | #3 Partial + See… Title #6 |
| #must-buy / #key-points | when/then cards + RBI quote N/A |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → Home loans usually need property cover; loan cover is often optional
2. **Card** If the house is damaged? → What does property cover pay for?
3. **Card** If the borrower dies? → What does loan cover pay for?
4. **Control** See property cover → Read the property cover guide
5. **Card then** Premium inside the loan — Keep Body #10

---

## `credit-life-insurance.html` — Loan cover

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | See what loan cover pays for. | Title #4 Promise | Partial | How loan cover pays the outstanding home loan if you die |
| 2 | Body | hero lede | Know the outstanding loan can still be paid if the borrower named on the cover dies. | Body #1 Lede | Partial | The outstanding loan can still be paid if the borrower named on the cover dies. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | Coverage | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | Cover setup | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | Premium | — | N/A | Keep as UI chrome |
| 7 | Title | contents item | Claim | — | N/A | Keep as UI chrome |
| 8 | Title | contents item | Compare | — | N/A | Keep as UI chrome |
| 9 | Title | #coverage / guide-tile-title | What does it pay for? | Title #3 Question | Follows | Keep |
| 10 | Body | #coverage / guide-tile-copy | The outstanding home loan if the borrower dies. | Body #1 Lede | Follows | Keep |
| 11 | Title | #coverage / segment tab | Covered or not | — | N/A | Keep as UI chrome |
| 12 | Title | #coverage / segment tab | Use your term cover | — | N/A | Keep as UI chrome |
| 13 | Title | #coverage / guide-limit-title | Often covered | Title #1 Straight news | Follows | Keep |
| 14 | Body | #coverage / guide-compare-body | Death of the borrower named on the cover. Serious illness, permanent disability, or accidental death when those events are named on your policy papers. | Body #3 So what | Follows | Keep |
| 15 | Title | #coverage / guide-limit-title | Usually not covered | Title #1 Straight news | Follows | Keep |
| 16 | Body | #coverage / guide-compare-body | Anything not named on your policy papers. Illness before the waiting period ends. Claims in the first year often pay less than the full amount. | Body #3 So what | Follows | Keep |
| 17 | Body | #coverage / guide-share-then | Already have term insurance? The bank may accept assignment of that cover to the loan instead of new loan cover. | Body #10 FAQ known/unknown | Follows | Keep |
| 18 | Title | #setup / guide-tile-title | How is the cover set up? | Title #9 How-to | Partial | How the cover is set up on your certificate |
| 19 | Body | #setup / guide-tile-copy | The written details are found on your Certificate of Insurance. | Body #1 Lede | Follows | Keep |
| 20 | Title | #setup / segment tab | What to check | — | N/A | Keep as UI chrome |
| 21 | Title | #setup / segment tab | Cover goes down? | — | N/A | Keep as UI chrome |
| 22 | Title | #setup / list/card body (guide-share-when) | When cover starts | Title #1 Straight news | Follows | Keep |
| 23 | Body | #setup / list/card title (guide-share-then) | Usually when the loan is disbursed and the insurer has received payment. | Body #10 FAQ known/unknown | Follows | Keep |
| 24 | Title | #setup / list/card body (guide-share-when) | The loan | Title #1 Straight news | Follows | Keep |
| 25 | Body | #setup / list/card title (guide-share-then) | The home loan named on that certificate must match the loan account. A mismatch means no cover. | Body #10 FAQ known/unknown | Follows | Keep |
| 26 | Title | #setup / list/card body (guide-share-when) | How long cover runs | Title #1 Straight news | Follows | Keep |
| 27 | Body | #setup / list/card title (guide-share-then) | Should match the loan term. A few plans renew every year instead. That is not the same as cover matched to the full loan. | Body #2 Scale/numbers | Follows | Keep |
| 28 | Body | #setup / guide-share-then | Reducing goes down as the loan is repaid. Level stays the same, and costs more. While the house is being built, cover often stays flat until EMIs begin. | Body #10 FAQ known/unknown | Follows | Keep |
| 29 | Title | #pay / guide-tile-title | How big is the premium? | Title #3 Question | Follows | Keep |
| 30 | Body | #pay / guide-tile-copy | It is usually higher than property cover. | Body #1 Lede | Follows | Keep |
| 31 | Title | #pay / segment tab | When you pay | — | N/A | Keep as UI chrome |
| 32 | Title | #pay / segment tab | In the loan | — | N/A | Keep as UI chrome |
| 33 | Title | #pay / segment tab | Your own policy | — | N/A | Keep as UI chrome |
| 34 | Title | #pay / segment tab | Can I cancel? | — | N/A | Keep as UI chrome |
| 35 | Title | #pay / segment tab | Taxes | — | N/A | Keep as UI chrome |
| 36 | Body | #pay / guide-share-then | Most often once at the start, paid outside the loan. Some plans take yearly or monthly payments instead. | Body #2 Scale/numbers | Follows | Keep |
| 37 | Body | #pay / guide-share-then | The premium is added to the loan principal and repaid through instalments. Interest applies on that premium for the remaining tenure, so the same cover can cost more this way. Needs clear consent. Buying stays voluntary. | Body #10 FAQ known/unknown | Follows | Keep |
| 38 | Body | #pay / guide-share-then | Premium is paid to the insurer directly. The bank may ask to be named on the policy. That is assignment. It is not the same as bank-bundled loan cover. | Body #10 FAQ known/unknown | Follows | Keep |
| 39 | Body | #pay / guide-share-then | Many life policies allow a short cancel period after issue. Confirm the days, the refund path, and where the money returns if the premium sat inside the loan. | Body #2 Scale/numbers | Follows | Keep |
| 40 | Title | #pay / guide-limit-title | Tax | Title #1 Straight news | Follows | Keep |
| 41 | Body | #pay / guide-compare-body | Life cover premiums may qualify under Section 80C in the old tax regime, within the overall limit. When the premium is borrowed and repaid through instalments, that path often does not qualify. Keep the receipt. | Body #3 So what | Follows | Keep |
| 42 | Title | #pay / guide-limit-title | GST | Title #1 Straight news | Follows | Keep |
| 43 | Body | #pay / guide-compare-body | Individual life cover premiums are currently exempt from GST. Confirm what shows on your premium receipt. | Body #3 So what | Follows | Keep |
| 44 | Title | #claim / guide-tile-title | How does a claim work? | Title #9 How-to | Partial | How a loan-cover claim works |
| 45 | Body | #claim / guide-tile-copy | The payout clears or reduces the loan. | Body #1 Lede | Follows | Keep |
| 46 | Title | #claim / segment tab | Who gets paid | — | N/A | Keep as UI chrome |
| 47 | Title | #claim / segment tab | How much | — | N/A | Keep as UI chrome |
| 48 | Title | #claim / segment tab | How to claim | — | N/A | Keep as UI chrome |
| 49 | Title | #claim / segment tab | If you close the loan | — | N/A | Keep as UI chrome |
| 50 | Body | #claim / guide-teach-from | Insurer payout | — | N/A | Keep as UI chrome |
| 51 | Body | #claim / guide-teach-from | Bank first | — | N/A | Keep as UI chrome |
| 52 | Body | #claim / guide-teach-note | Up to the outstanding loan | — | N/A | Keep as UI chrome |
| 53 | Body | #claim / guide-teach-from | Nominee | — | N/A | Keep as UI chrome |
| 54 | Body | #claim / guide-teach-note | Leftover only if the Certificate allows it | — | N/A | Keep as UI chrome |
| 55 | Body | #claim / figcaption | Unlike a term plan, the family is not first in line. | Body #3 So what | Follows | Keep |
| 56 | Body | #claim / guide-share-then | Many plans pay the amount written on the certificate, not today's exact loan balance. Some plans track the live loan balance only if that certificate says so. | Body #2 Scale/numbers | Follows | Keep |
| 57 | Body | #claim / guide-share-then | The nominee or the bank submits the papers. If approved, the loan is reduced or cleared. | Body #10 FAQ known/unknown | Follows | Keep |
| 58 | Body | #claim / guide-share-then | If you close the loan early or move it to another bank, cover does not always end. This cover often cannot come with you, and you may get only some of the premium back — some plans return nothing. Any refund follows the surrender terms on your certificate. Ask for the refund and cover status in writing. | Body #10 FAQ known/unknown | Follows | Keep |
| 59 | Title | #compare / guide-tile-title | Term plan or loan cover? | Title #3 Question | Follows | Keep |
| 60 | Body | #compare / guide-tile-copy | These are two ways to clear the loan upon death. | Body #1 Lede | Follows | Keep |
| 61 | Title | #compare / guide-limit-title | Term plan | Title #1 Straight news | Follows | Keep |
| 62 | Title | #compare / list/card body (guide-share-when) | Cost | Title #1 Straight news | Follows | Keep |
| 63 | Body | #compare / list/card title (guide-share-then) | Usually less per rupee of cover. Paid outside the loan. | Body #10 FAQ known/unknown | Follows | Keep |
| 64 | Title | #compare / list/card body (guide-share-when) | Cover | Title #1 Straight news | Follows | Keep |
| 65 | Title | #compare / list/card title (guide-share-then) | Stays level. Can outlast the loan. | Title #1 Straight news | Follows | Keep |
| 66 | Title | #compare / list/card body (guide-share-when) | Early repay or switch | Title #1 Straight news | Follows | Keep |
| 67 | Title | #compare / list/card title (guide-share-then) | Stays with you. | Title #1 Straight news | Follows | Keep |
| 68 | Title | #compare / list/card body (guide-share-when) | Who gets paid | Title #1 Straight news | Follows | Keep |
| 69 | Body | #compare / list/card title (guide-share-then) | Your nominee. They can clear the loan and keep the rest. | Body #10 FAQ known/unknown | Follows | Keep |
| 70 | Title | #compare / guide-limit-title | Loan cover | Title #1 Straight news | Follows | Keep |
| 71 | Title | #compare / list/card body (guide-share-when) | Cost | Title #1 Straight news | Follows | Keep |
| 72 | Body | #compare / list/card title (guide-share-then) | Often a single premium. Costs more when it sits inside the loan. | Body #10 FAQ known/unknown | Follows | Keep |
| 73 | Title | #compare / list/card body (guide-share-when) | Cover | Title #1 Straight news | Follows | Keep |
| 74 | Body | #compare / list/card title (guide-share-then) | Usually reduces as the loan is repaid. | Body #8 Step-by-step | Follows | Keep |
| 75 | Title | #compare / list/card body (guide-share-when) | Early repay or switch | Title #1 Straight news | Follows | Keep |
| 76 | Body | #compare / list/card title (guide-share-then) | Often cannot move. May return only part of the premium. | Body #10 FAQ known/unknown | Follows | Keep |
| 77 | Title | #compare / list/card body (guide-share-when) | Who gets paid | Title #1 Straight news | Follows | Keep |
| 78 | Body | #compare / list/card title (guide-share-then) | The bank first, up to the outstanding loan. | Body #10 FAQ known/unknown | Follows | Keep |
| 79 | Body | #compare / guide-glance | If age or health makes a term plan hard to get, loan cover can be easier to buy, and can be paid through the loan. | Body #3 So what | Follows | Keep |
| 80 | Body | guide-fine | Education only. Your Certificate of Insurance wins if anything here differs. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #4 Partial → lede Follows |
| #coverage–#compare | #3/#9 → card pairs Follow |
| Compare rows | Title #1 + Body #10 |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → How loan cover pays the outstanding home loan if you die
2. **Card** When cover starts / Usually when the loan is disbursed… — Keep
3. #setup → How the cover is set up on your certificate
4. #claim → How a loan-cover claim works
5. Term vs loan cover compare — Keep

---

## `property-home-insurance.html` — Property cover

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | See what property cover pays for. | Title #4 Promise | Partial | How property cover pays to repair the house that secures your loan |
| 2 | Body | hero lede | Know the house that secures the loan can still be repaired after listed damage. | Body #1 Lede | Partial | The house that secures the loan can still be repaired after listed damage. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | Coverage | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | Cover setup | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | Premium | — | N/A | Keep as UI chrome |
| 7 | Title | contents item | Claim | — | N/A | Keep as UI chrome |
| 8 | Title | #coverage / guide-tile-title | What does it pay for? | Title #3 Question | Follows | Keep |
| 9 | Body | #coverage / guide-tile-copy | Repair or rebuilding after covered damage. | Body #1 Lede | Follows | Keep |
| 10 | Title | #coverage / segment tab | When to insure | — | N/A | Keep as UI chrome |
| 11 | Title | #coverage / segment tab | What is insured | — | N/A | Keep as UI chrome |
| 12 | Title | #coverage / segment tab | Covered or not | — | N/A | Keep as UI chrome |
| 13 | Body | #coverage / guide-share-then | Take cover at possession of a finished house. Until handover, risk for the unfinished house usually sits with the seller or builder. | Body #10 FAQ known/unknown | Follows | Keep |
| 14 | Title | #coverage / guide-limit-title | Building | Title #1 Straight news | Follows | Keep |
| 15 | Body | #coverage / guide-compare-body | Building is the structure. Land is not insured. | Body #3 So what | Follows | Keep |
| 16 | Title | #coverage / guide-limit-title | Contents | — | N/A | Keep as UI chrome |
| 17 | Body | #coverage / guide-compare-body | Contents are the things inside, and only if you add contents cover. | Body #3 So what | Follows | Keep |
| 18 | Title | #coverage / guide-limit-title | Often covered | Title #1 Straight news | Follows | Keep |
| 19 | Body | #coverage / guide-compare-body | Fire, lightning, earthquake, storm, flood, and other events listed on the policy. Theft or burglary can vary by policy. | Body #3 So what | Follows | Keep |
| 20 | Title | #coverage / guide-limit-title | Usually not covered | Title #1 Straight news | Follows | Keep |
| 21 | Body | #coverage / guide-compare-body | Intentional damage, war, nuclear risks, and losses the policy does not cover. A drop in market value is usually not covered. | Body #3 So what | Follows | Keep |
| 22 | Title | #setup / guide-tile-title | How is the cover set up? | Title #9 How-to | Partial | How to check your property Policy Schedule |
| 23 | Body | #setup / guide-tile-copy | The written details are found on your Policy Schedule. | Body #1 Lede | Follows | Keep |
| 24 | Title | #setup / segment tab | What to check | — | N/A | Keep as UI chrome |
| 25 | Title | #setup / segment tab | Rebuild or loan-only | — | N/A | Keep as UI chrome |
| 26 | Title | #setup / list/card body (guide-share-when) | House address | Title #1 Straight news | Follows | Keep |
| 27 | Body | #setup / list/card title (guide-share-then) | The address on the policy must match the house. | Body #10 FAQ known/unknown | Follows | Keep |
| 28 | Title | #setup / list/card body (guide-share-when) | Cover amount | Title #1 Straight news | Follows | Keep |
| 29 | Body | #setup / list/card title (guide-share-then) | Check the cover amount before you sign. It should match rebuild cost of the structure, not market price of flat plus land. Too low and the lender may reject the policy, and a claim can be scaled down by the same shortfall. Insuring for less than rebuild cost is under-insurance. | Body #10 FAQ known/unknown | Follows | Keep |
| 30 | Title | #setup / list/card body (guide-share-when) | Cover period | Title #1 Straight news | Follows | Keep |
| 31 | Body | #setup / list/card title (guide-share-then) | Many home policies last about 10 years. Longer brand packages exist. They help only if amount, perils, and lender naming still match your agreement. If your loan is longer, renew on time and keep the bank named on each renewal. | Body #2 Scale/numbers | Follows | Keep |
| 32 | Title | #setup / list/card body (guide-share-when) | Rebuild or loan-only | Title #1 Straight news | Follows | Keep |
| 33 | Body | #setup / list/card title (guide-share-then) | Some policies pay to rebuild the home. Others only clear what you still owe the bank. Outstanding-loan packages and full rebuild policies are different products. Ask which one you are buying. | Body #10 FAQ known/unknown | Follows | Keep |
| 34 | Title | #pay / guide-tile-title | How big is the premium? | Title #3 Question | Follows | Keep |
| 35 | Body | #pay / guide-tile-copy | It is usually smaller than loan cover. | Body #1 Lede | Follows | Keep |
| 36 | Title | #pay / segment tab | When you pay | — | N/A | Keep as UI chrome |
| 37 | Title | #pay / segment tab | In the loan | — | N/A | Keep as UI chrome |
| 38 | Title | #pay / segment tab | Missed renewal | — | N/A | Keep as UI chrome |
| 39 | Title | #pay / segment tab | GST | — | N/A | Keep as UI chrome |
| 40 | Body | #pay / guide-share-then | Most policies renew yearly — you pay the insurer and keep the receipt. Some packs cover several years in one premium, often about 10. If your home loan runs longer, plan the next renewal before cover ends. | Body #2 Scale/numbers | Follows | Keep |
| 41 | Body | #pay / guide-share-then | Less common than for loan cover, but some offers still club a property premium into the loan. If that happens, you pay interest on that premium too. | Body #10 FAQ known/unknown | Follows | Keep |
| 42 | Body | #pay / guide-share-then | A lapsed policy leaves the house uninsured. The bank may also flag the loan if the agreement required continuous cover with the lender named. | Body #10 FAQ known/unknown | Follows | Keep |
| 43 | Body | #pay / guide-share-then | Property cover is general insurance and currently carries 18% GST. It shows on your premium receipt. | Body #2 Scale/numbers | Follows | Keep |
| 44 | Title | #claim / guide-tile-title | What happens after damage? | Title #3 Question | Partial | What happens after covered damage? |
| 45 | Body | #claim / guide-tile-copy | Follow the claim steps. | Body #1 Lede | Follows | Keep |
| 46 | Title | #claim / segment tab | Claim steps | — | N/A | Keep as UI chrome |
| 47 | Title | #claim / segment tab | How payout works | — | N/A | Keep as UI chrome |
| 48 | Title | #claim / segment tab | If the bank is named | — | N/A | Keep as UI chrome |
| 49 | Title | #claim / list/card body (guide-share-when) | First steps | Title #1 Straight news | Follows | Keep |
| 50 | Body | #claim / list/card title (guide-share-then) | Make the property safe. Tell the insurer soon — many policies want notice within about 30 days. Keep damaged items for survey unless you must move them for safety. | Body #2 Scale/numbers | Follows | Keep |
| 51 | Title | #claim / list/card body (guide-share-when) | What to keep | Title #1 Straight news | Follows | Keep |
| 52 | Body | #claim / list/card title (guide-share-then) | Policy number, photos, and any police or fire report if they apply. Do not discard debris or start non-urgent repairs before the survey unless the insurer agrees. | Body #10 FAQ known/unknown | Follows | Keep |
| 53 | Title | #claim / FAQ summary | How payout works | Title #3 Question | Follows | Keep |
| 54 | Body | #claim / guide-share-then | Partial damage usually pays repair cost. Total loss pays up to the cover amount on your schedule. Rebuild policies aim to restore the home; loan-only packages may pay the bank up to what you still owe. | Body #10 FAQ known/unknown | Follows | Keep |
| 55 | Title | #claim / FAQ summary | If the bank is named | Title #3 Question | Partial | What about if the bank is named? |
| 56 | Body | #claim / guide-share-then | The bank is usually on the building policy as loss payee or under an Agreed Bank Clause. How money flows depends on your policy and that clause — especially on a total loss. On partial damage, many rebuild policies reimburse repair cost to you, but the bank may still need to be told and may need to approve release of funds. | Body #10 FAQ known/unknown | Follows | Keep |
| 57 | Title | #claim / FAQ summary | Building vs contents | Title #3 Question | Partial | What about building vs contents? |
| 58 | Body | #claim / guide-share-then | Contents claims are often separate from the building. Contents payout may go to you even when the bank is named on the building cover. | Body #10 FAQ known/unknown | Follows | Keep |
| 59 | Body | #claim / guide-glance | On total loss, the bank is usually named on the building payout. Contents can still pay out separately. | Body #3 So what | Follows | Keep |
| 60 | Body | guide-fine | Education only. Your Policy Schedule wins if anything here differs. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #4 Partial → lede Follows |
| #setup / #claim | #9/#3 → under-insurance & claim steps Keep |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → How property cover pays to repair the house that secures your loan
2. **Card then** Cover amount / under-insurance — Keep Body #2
3. #setup → How to check your property Policy Schedule
4. **Card then** First steps after damage — Keep Body #8
5. #claim → What happens after covered damage?

---

## `home-loan-complaints.html` — If something goes wrong

| # | Kind | Where | Left — what we have | TC pattern | Fit | Right — suggestion |
|--:|------|-------|---------------------|------------|-----|-------------------|
| 1 | Title | guide-hero-title | Your home loan issue has a fair path. | Title #9 How-to | Partial | How to escalate a stuck home loan complaint — bank, then RBI or NHB |
| 2 | Body | hero lede | If a lender issue stays stuck, you are not without a next step. | Body #1 Lede | Partial | Write to the lender first, wait about 30 days, then file with RBI (banks) or NHB (housing finance) if it stays unresolved. |
| 3 | Title | contents title | Contents | — | N/A | Keep as UI chrome |
| 4 | Title | contents item | The path | — | N/A | Keep as UI chrome |
| 5 | Title | contents item | Start with the lender | — | N/A | Keep as UI chrome |
| 6 | Title | contents item | What to write | — | N/A | Keep as UI chrome |
| 7 | Title | contents item | Then the regulator | — | N/A | Keep as UI chrome |
| 8 | Title | contents item | What this path is not | — | N/A | Keep as UI chrome |
| 9 | Title | contents item | Where to file | — | N/A | Keep as UI chrome |
| 10 | Title | #path / guide-tile-title | What is the complaint path? | Title #3 Question | Follows | Keep |
| 11 | Body | #path / guide-tile-copy | Write to your lender first. Wait about 30 days. Then approach the RBI or NHB only if it stays unresolved. | Body #2 Scale/numbers | Follows | Keep |
| 12 | Title | #path / list/card body (guide-share-when) | Talk to the lender | Title #1 Straight news | Follows | Keep |
| 13 | Body | #path / list/card title (guide-share-then) | Many issues get fixed with the bank or housing finance company. | Body #10 FAQ known/unknown | Follows | Keep |
| 14 | Title | #path / list/card body (guide-share-when) | Put the same problem in writing | Title #1 Straight news | Follows | Keep |
| 15 | Body | #path / list/card title (guide-share-then) | Get it on record with a ticket or acknowledgment. | Body #10 FAQ known/unknown | Follows | Keep |
| 16 | Title | #path / list/card body (guide-share-when) | Wait for a final reply | Title #1 Straight news | Follows | Keep |
| 17 | Body | #path / list/card title (guide-share-then) | About 30 days for a final reply. | Body #2 Scale/numbers | Follows | Keep |
| 18 | Title | #path / list/card body (guide-share-when) | Approach the regulator | Title #1 Straight news | Follows | Keep |
| 19 | Body | #path / list/card title (guide-share-then) | Bank → Reserve Bank of India (RBI). Housing finance company → National Housing Bank (NHB). | Body #10 FAQ known/unknown | Follows | Keep |
| 20 | Title | #talk / guide-tile-title | Where do you start? | Title #3 Question | Follows | Keep |
| 21 | Body | #talk / guide-tile-copy | Talk to the loan team first. Get it on record. Write an email if it still does not move. | Body #1 Lede | Follows | Keep |
| 22 | Title | #talk / list/card body (guide-share-when) | Talk first | Title #1 Straight news | Follows | Keep |
| 23 | Body | #talk / list/card title (guide-share-then) | Call or visit the loan team. Ask them to check the problem and tell you what they will do next. | Body #10 FAQ known/unknown | Follows | Keep |
| 24 | Title | #talk / list/card body (guide-share-when) | Ask for a ticket number | Title #1 Straight news | Follows | Keep |
| 25 | Body | #talk / list/card title (guide-share-then) | Note the date and what they said. | Body #8 Step-by-step | Follows | Keep |
| 26 | Title | #talk / list/card body (guide-share-when) | If they fix it | Title #1 Straight news | Follows | Keep |
| 27 | Body | #talk / list/card title (guide-share-then) | Ask for written confirmation. You may not need the next steps. | Body #10 FAQ known/unknown | Follows | Keep |
| 28 | Title | #talk / list/card body (guide-share-when) | Then put it in writing | Title #1 Straight news | Follows | Keep |
| 29 | Body | #talk / list/card title (guide-share-then) | No ticket, only vague promises, or the same problem again. Write the same facts down next. | Body #10 FAQ known/unknown | Follows | Keep |
| 30 | Title | #talk / flip control label | Who to escalate to inside the lender | Title #6 Direct instruction | Partial | See who to escalate to inside the lender |
| 31 | Title | #talk / guide-tile-title [flip-back] | Who to escalate to inside the lender | Title #3 Question | Follows | Keep |
| 32 | Body | #talk / guide-calc-lead [flip-back] | Go up this list on the lender’s site when the first contact does not resolve it. | Body #1 Lede | Follows | Keep |
| 33 | Title | #talk / h3 [flip-back] | Bank | Title #1 Straight news | Follows | Keep |
| 34 | Body | #talk / guide-doc-name [flip-back] | Branch or customer care | Body #9 Entry-by-entry | Follows | Keep |
| 35 | Body | #talk / guide-doc-note [flip-back] | Where your written complaint usually starts. | Body #8 Step-by-step | Follows | Keep |
| 36 | Body | #talk / guide-doc-name [flip-back] | Nodal officer | Body #9 Entry-by-entry | Follows | Keep |
| 37 | Body | #talk / guide-doc-note [flip-back] | Next if nothing moves. Listed by zone, circle, or network. | Body #8 Step-by-step | Follows | Keep |
| 38 | Body | #talk / guide-doc-name [flip-back] | Principal Nodal Officer | Body #9 Entry-by-entry | Follows | Keep |
| 39 | Body | #talk / guide-doc-note [flip-back] | The bank’s top grievance officer. | Body #8 Step-by-step | Follows | Keep |
| 40 | Body | #talk / guide-doc-name [flip-back] | Internal Ombudsman | Body #9 Entry-by-entry | Follows | Keep |
| 41 | Body | #talk / guide-doc-note [flip-back] | Reviews rejected or partly fixed cases. You do not file here first. | Body #8 Step-by-step | Follows | Keep |
| 42 | Title | #talk / h3 [flip-back] | Housing finance | Title #1 Straight news | Follows | Keep |
| 43 | Body | #talk / guide-doc-name [flip-back] | Branch or customer care | Body #9 Entry-by-entry | Follows | Keep |
| 44 | Body | #talk / guide-doc-note [flip-back] | Where your written complaint usually starts. | Body #8 Step-by-step | Follows | Keep |
| 45 | Body | #talk / guide-doc-name [flip-back] | Nodal or regional officer | Body #9 Entry-by-entry | Follows | Keep |
| 46 | Body | #talk / guide-doc-note [flip-back] | Next if nothing moves. Listed by region on their site. | Body #8 Step-by-step | Follows | Keep |
| 47 | Body | #talk / guide-doc-name [flip-back] | Grievance Redressal Officer | Body #9 Entry-by-entry | Follows | Keep |
| 48 | Body | #talk / guide-doc-note [flip-back] | The HFC’s top complaint officer — sometimes head of CRM. | Body #8 Step-by-step | Follows | Keep |
| 49 | Body | #talk / flip control label [flip-back] | Close | — | N/A | Keep as UI chrome |
| 50 | Title | #write / guide-tile-title | What must a complaint include? | Title #3 Question | Follows | Keep |
| 51 | Body | #write / guide-tile-copy | Your name, loan number, what happened, and what you want fixed. | Body #1 Lede | Follows | Keep |
| 52 | Title | #write / segment tab | In the letter | — | N/A | Keep as UI chrome |
| 53 | Title | #write / segment tab | Papers to keep | — | N/A | Keep as UI chrome |
| 54 | Title | #write / list/card body (guide-share-when) | Who you are | Title #1 Straight news | Follows | Keep |
| 55 | Body | #write / list/card title (guide-share-then) | Your full name, mobile, email, and address. | Body #8 Step-by-step | Follows | Keep |
| 56 | Title | #write / list/card body (guide-share-when) | Your loan | Title #1 Straight news | Follows | Keep |
| 57 | Title | #write / list/card title (guide-share-then) | Loan account number and branch. | Title #1 Straight news | Follows | Keep |
| 58 | Title | #write / list/card body (guide-share-when) | What happened | Title #1 Straight news | Follows | Keep |
| 59 | Body | #write / list/card title (guide-share-then) | The facts with dates. Any money involved. | Body #8 Step-by-step | Follows | Keep |
| 60 | Title | #write / list/card body (guide-share-when) | What you want fixed | Title #1 Straight news | Follows | Keep |
| 61 | Body | #write / list/card title (guide-share-then) | Refund, correction, papers back, written confirmation, or compensation you can prove. | Body #10 FAQ known/unknown | Follows | Keep |
| 62 | Body | #write / guide-callout | Send it by email, app, website form, or a letter they acknowledge. | Body #3 So what | Follows | Keep |
| 63 | Title | #write / list/card body (guide-share-when) | Loan papers | Title #1 Straight news | Follows | Keep |
| 64 | Title | #write / list/card title (guide-share-then) | Sanction letter and Key Fact Statement. | Title #1 Straight news | Follows | Keep |
| 65 | Title | #write / list/card body (guide-share-when) | Your complaint trail | Title #1 Straight news | Follows | Keep |
| 66 | Body | #write / list/card title (guide-share-then) | The written complaint and the acknowledgment or ticket. | Body #10 FAQ known/unknown | Follows | Keep |
| 67 | Title | #write / list/card body (guide-share-when) | Their reply, or silence | Title #1 Straight news | Follows | Keep |
| 68 | Body | #write / list/card title (guide-share-then) | The final reply, or proof that 30 days passed with no answer. | Body #2 Scale/numbers | Follows | Keep |
| 69 | Title | #write / list/card body (guide-share-when) | Evidence pack | Title #1 Straight news | Follows | Keep |
| 70 | Title | #write / list/card title (guide-share-then) | Statements, charge receipts, emails, SMS. | Title #1 Straight news | Follows | Keep |
| 71 | Title | #write / list/card body (guide-share-when) | If papers are delayed after closure | Title #1 Straight news | Follows | Keep |
| 72 | Body | #write / list/card title (guide-share-then) | Keep the loan-closed letter and proof you paid in full. Property papers should come back within 30 days. If the lender is late, RBI allows ₹5,000 a day. If papers are lost, the lender replaces them at its cost. | Body #2 Scale/numbers | Follows | Keep |
| 73 | Title | #write / list/card body (guide-share-when) | If someone files for you | Title #1 Straight news | Follows | Keep |
| 74 | Body | #write / list/card title (guide-share-then) | You need an authorisation letter. An advocate can file with the Ombudsman only if that advocate is the person who was wronged. | Body #10 FAQ known/unknown | Follows | Keep |
| 75 | Title | #stuck / guide-tile-title | When do you go to the regulator? | Title #3 Question | Follows | Keep |
| 76 | Body | #stuck / guide-tile-copy | After the lender's process: the RBI for banks, or the NHB for housing finance. | Body #1 Lede | Follows | Keep |
| 77 | Title | #stuck / segment tab | Time limits | — | N/A | Keep as UI chrome |
| 78 | Title | #stuck / segment tab | Filing with RBI | — | N/A | Keep as UI chrome |
| 79 | Title | #stuck / segment tab | Money limits | — | N/A | Keep as UI chrome |
| 80 | Title | #stuck / segment tab | Filing with NHB | — | N/A | Keep as UI chrome |
| 81 | Title | #stuck / list/card body (guide-share-when) | When you may file with RBI | Title #1 Straight news | Follows | Keep |
| 82 | Body | #stuck / list/card title (guide-share-then) | After about 30 days with no final reply. Or sooner, if the bank already gave a final reply and the issue is still not fixed. | Body #2 Scale/numbers | Follows | Keep |
| 83 | Title | #stuck / list/card body (guide-share-when) | Deadline to file | Title #1 Straight news | Follows | Keep |
| 84 | Body | #stuck / list/card title (guide-share-then) | Within 90 days of the bank’s last reply, or of the day the 30-day wait ended if there was no reply. Use whichever date is later. | Body #2 Scale/numbers | Follows | Keep |
| 85 | Title | #stuck / list/card body (guide-share-when) | Before you file | Title #1 Straight news | Follows | Keep |
| 86 | Body | #stuck / list/card title (guide-share-then) | Incomplete, anonymous, or suggestion-only complaints are rejected. So is a request beyond what the Ombudsman can grant. | Body #10 FAQ known/unknown | Follows | Keep |
| 87 | Title | #stuck / list/card body (guide-share-when) | Online | Title #1 Straight news | Follows | Keep |
| 88 | Body | #stuck / list/card title (guide-share-then) | File through RBI CMS. Keep the complaint number. | Body #10 FAQ known/unknown | Follows | Keep |
| 89 | Title | #stuck / list/card body (guide-share-when) | Email or post | Title #1 Straight news | Follows | Keep |
| 90 | Body | #stuck / list/card title (guide-share-then) | Send the complaint to CRPC by email or by post. | Body #10 FAQ known/unknown | Follows | Keep |
| 91 | Title | #stuck / list/card body (guide-share-when) | Helpline | Title #1 Straight news | Follows | Keep |
| 92 | Body | #stuck / list/card title (guide-share-then) | Explains the process. Does not register the complaint. | Body #10 FAQ known/unknown | Follows | Keep |
| 93 | Title | #stuck / list/card body (guide-share-when) | Size of the dispute | Title #1 Straight news | Follows | Keep |
| 94 | Body | #stuck / list/card title (guide-share-then) | No upper limit on the home loan dispute amount. | Body #10 FAQ known/unknown | Follows | Keep |
| 95 | Title | #stuck / list/card body (guide-share-when) | Consequential loss | Title #1 Straight news | Follows | Keep |
| 96 | Body | #stuck / list/card title (guide-share-then) | Proven consequential loss capped at ₹30 lakh. | Body #2 Scale/numbers | Follows | Keep |
| 97 | Title | #stuck / list/card body (guide-share-when) | Time, expense, harassment | Title #1 Straight news | Follows | Keep |
| 98 | Title | #stuck / list/card title (guide-share-then) | Additional compensation capped at ₹3 lakh. | Title #1 Straight news | Follows | Keep |
| 99 | Title | #stuck / list/card body (guide-share-when) | If you receive an Award | Title #1 Straight news | Follows | Keep |
| 100 | Body | #stuck / list/card title (guide-share-then) | Accept it in writing to the bank within 30 days, or it lapses. | Body #2 Scale/numbers | Follows | Keep |
| 101 | Title | #stuck / list/card body (guide-share-when) | Bank after an Award | Title #1 Straight news | Follows | Keep |
| 102 | Body | #stuck / list/card title (guide-share-then) | 30 days to comply, or to appeal where the scheme allows. | Body #2 Scale/numbers | Follows | Keep |
| 103 | Title | #stuck / list/card body (guide-share-when) | Your appeal | Title #1 Straight news | Follows | Keep |
| 104 | Body | #stuck / list/card title (guide-share-then) | Certain Awards or rejections may go to the RBI Appellate Authority within 30 days, usually through CMS or the appellate email. Not every closure is appealable. Read the decision letter carefully. | Body #2 Scale/numbers | Follows | Keep |
| 105 | Title | #stuck / list/card body (guide-share-when) | File with NHB | Title #1 Straight news | Follows | Keep |
| 106 | Body | #stuck / list/card title (guide-share-then) | File through NHB GRIDS, or use the complaint cell form on nhb.org.in. | Body #10 FAQ known/unknown | Follows | Keep |
| 107 | Title | #stuck / list/card body (guide-share-when) | Appeal at NHB | Title #1 Straight news | Follows | Keep |
| 108 | Body | #stuck / list/card title (guide-share-then) | You may appeal to NHB’s Chief Grievance Redressal Officer within 30 days of the status intimation, as NHB states. | Body #2 Scale/numbers | Follows | Keep |
| 109 | Title | #limits / guide-tile-title | What is outside this path? | Title #3 Question | Follows | Keep |
| 110 | Body | #limits / guide-tile-copy | Some issues need a different route than Bank → RBI or NHB. | Body #1 Lede | Follows | Keep |
| 111 | Title | #limits / segment tab | Not a complaint | — | N/A | Keep as UI chrome |
| 112 | Title | #limits / segment tab | Go elsewhere | — | N/A | Keep as UI chrome |
| 113 | Title | #limits / segment tab | Courts | — | N/A | Keep as UI chrome |
| 114 | Title | #limits / list/card body (guide-share-when) | The bank refused the loan | Title #1 Straight news | Follows | Keep |
| 115 | Body | #limits / list/card title (guide-share-then) | This path will not force them to sanction it. | Body #10 FAQ known/unknown | Follows | Keep |
| 116 | Title | #limits / list/card body (guide-share-when) | You only want a better rate | Title #1 Straight news | Follows | Keep |
| 117 | Body | #limits / list/card title (guide-share-then) | That is not a service complaint by itself. Compare and negotiate with lenders. | Body #10 FAQ known/unknown | Follows | Keep |
| 118 | Title | #limits / list/card body (guide-share-when) | Wrong credit report | Title #1 Straight news | Follows | Keep |
| 119 | Body | #limits / list/card title (guide-share-then) | Start with the credit bureau and the bank that sent the data. Then RBI CMS if you still need help. | Body #10 FAQ known/unknown | Follows | Keep |
| 120 | Title | #limits / list/card body (guide-share-when) | Loan-linked insurance feels mis-sold | Title #1 Straight news | Follows | Keep |
| 121 | Body | #limits / list/card title (guide-share-then) | Policy side → insurer and IRDAI. Lender’s service around the sale → still write to the lender. | Body #10 FAQ known/unknown | Follows | Keep |
| 122 | Title | #limits / list/card body (guide-share-when) | Fraud, bribery, or criminal harassment | Title #1 Straight news | Follows | Keep |
| 123 | Body | #limits / list/card title (guide-share-then) | Go to the police for the crime. Use bank vigilance for staff bribery. You can still raise the loan service side with the lender. | Body #10 FAQ known/unknown | Follows | Keep |
| 124 | Body | #limits / list/card body (guide-share-when) | The same matter is already in court or a tribunal | Body #10 FAQ known/unknown | Follows | Keep |
| 125 | Body | #limits / list/card title (guide-share-then) | An Ombudsman filing on the same matter usually closes. Pick one main track. | Body #10 FAQ known/unknown | Follows | Keep |
| 126 | Title | #limits / list/card body (guide-share-when) | Consumer Commission, civil court, or Lok Adalat | Title #1 Straight news | Follows | Keep |
| 127 | Body | #limits / list/card title (guide-share-then) | Separate legal tracks. National Consumer Helpline and CPGRAMS can run beside this path. | Body #10 FAQ known/unknown | Follows | Keep |
| 128 | Title | #contacts / guide-tile-title | Where do you file? | Title #3 Question | Follows | Keep |
| 129 | Body | #contacts / guide-tile-copy | File via RBI CMS for banks, or NHB GRIDS for housing finance. Related helplines are below. | Body #1 Lede | Follows | Keep |
| 130 | Title | #contacts / segment tab | RBI | — | N/A | Keep as UI chrome |
| 131 | Title | #contacts / segment tab | NHB | — | N/A | Keep as UI chrome |
| 132 | Title | #contacts / segment tab | Other help | — | N/A | Keep as UI chrome |
| 133 | Body | #contacts / guide-doc-name | RBI CMS | Body #9 Entry-by-entry | Follows | Keep |
| 134 | Body | #contacts / guide-doc-note | cms.rbi.org.in | Body #8 Step-by-step | Follows | Keep |
| 135 | Body | #contacts / guide-doc-name | RBI contact centre | Body #9 Entry-by-entry | Follows | Keep |
| 136 | Body | #contacts / guide-doc-note | 14448 | Body #8 Step-by-step | Follows | Keep |
| 137 | Body | #contacts / guide-doc-name | CRPC email | Body #9 Entry-by-entry | Follows | Keep |
| 138 | Body | #contacts / guide-doc-note | crpc@rbi.org.in | Body #8 Step-by-step | Follows | Keep |
| 139 | Body | #contacts / guide-doc-name | CRPC post | Body #9 Entry-by-entry | Follows | Keep |
| 140 | Body | #contacts / guide-doc-note | Centralised Receipt and Processing Centre, Reserve Bank of India, Central Vista, Sector 17, Chandigarh 160017. | Body #8 Step-by-step | Follows | Keep |
| 141 | Body | #contacts / guide-doc-name | RBI appeal email | Body #9 Entry-by-entry | Follows | Keep |
| 142 | Body | #contacts / guide-doc-note | aaos@rbi.org.in | Body #8 Step-by-step | Follows | Keep |
| 143 | Body | #contacts / guide-doc-name | NHB GRIDS | Body #9 Entry-by-entry | Follows | Keep |
| 144 | Body | #contacts / guide-doc-note | grids.nhbonline.org.in | Body #8 Step-by-step | Follows | Keep |
| 145 | Body | #contacts / guide-doc-name | National Consumer Helpline | Body #9 Entry-by-entry | Follows | Keep |
| 146 | Body | #contacts / guide-doc-note | 1915 · consumerhelpline.gov.in | Body #8 Step-by-step | Follows | Keep |
| 147 | Body | #contacts / guide-doc-name | CPGRAMS | Body #9 Entry-by-entry | Follows | Keep |
| 148 | Body | #contacts / guide-doc-note | pgportal.gov.in | Body #8 Step-by-step | Follows | Keep |
| 149 | Body | guide-fine | This page is education only, not legal advice. We do not file Ombudsman or NHB complaints for you. Timelines and compensation caps follow the Reserve Bank Integrated Ombudsman Scheme, 2026 (RB-IOS), in force from 1 July 2026, plus related RBI directions. Portals and circulars can change. Recheck official sources before you file. | Body #6 Close | Follows | Keep |

### Title↔Body contract notes

| Pair | Title → body |
|------|-------------|
| Hero | #9 Partial → 30-day path lede |
| #path–#contacts | #3 → card steps |
| #talk flip-back | Escalate Title #3 + name/note Body #8 |
| RB-IOS caps | Body #2 Keep |

### Top priority rewrites (includes flip-side / card items)

1. Hero title → How to escalate a stuck home loan complaint — bank, then RBI or NHB
2. **Flip-back** Who to escalate… + Branch/Nodal rows — Keep
3. **Card then** 30/90-day and ₹30 lakh / ₹3 lakh — Keep Body #2
4. **Card when** Approach the regulator — Keep Title #1
5. Hero lede → Write to the lender first, wait about 30 days…

---

## Completeness check

Units audited: **779/779**

Skipped: **none** (zero).

- share-when rows: 93; share-then rows: 120
- flip-related rows: 114
- Kind swaps vs inventory: 178

### Grand totals

- **Title** — Follows 163, Partial 46, Miss 0, N/A 121
- **Body** — Follows 366, Partial 16, Miss 0, N/A 67
- **Combined** — Follows 529, Partial 62, Miss 0, N/A 188
