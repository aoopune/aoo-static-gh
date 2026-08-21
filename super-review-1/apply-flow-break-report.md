# Apply user-flow break report

Generated: 2026-08-21T15:22:10.818Z  
Base URL: http://127.0.0.1:8765  
Method: Base funnel + permutations + **each input / each filter / each table control** inventory

## Verdict (plain English)

**Did we try each input and each filter and the table?** Yes — for the finite list of controls on Explore (not every possible number typed into money fields).

This each-control pass: **47 PASS · 7 FAIL · 0 INFO** (54 probes).

### Inputs covered (one-by-one)
monthly income, property value, existing EMIs, card limits, card-load %, FOIR (every option 50–70), tenure, age, CIBIL, occupation, purpose, co-applicant toggle + fields → packet.

### Filters covered (one-by-one)
govtPsu, womenApplicant, greenHome, insurance, bankPublic, bankPrivate, rateFloating, fixedRate, facilityTermLoan, overdraft — each settable; each also checked for ghost selection after flip.

### Table covered
rows load, select, deselect, show more, select-all, sort headers, details drawer, paddles, Apply once handoff.

## Summary

| Status | Count |
|---|---:|
| FAIL | 28 |
| PASS | 89 |
| INFO | 1 |
| Each-control PASS | 47 |
| Each-control FAIL | 7 |

## Each-control FAILs

### 1. [Serious] Filter “govtPsu” flip after select — no ghost selection

`CTL-FL-GHOST-govtPsu` — {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 2. [Serious] Filter “bankPublic” flip after select — no ghost selection

`CTL-FL-GHOST-bankPublic` — {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 3. [Serious] Filter “bankPrivate” flip after select — no ghost selection

`CTL-FL-GHOST-bankPrivate` — {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 4. [Serious] Filter “rateFloating” flip after select — no ghost selection

`CTL-FL-GHOST-rateFloating` — {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 5. [Serious] Filter “fixedRate” flip after select — no ghost selection

`CTL-FL-GHOST-fixedRate` — {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 6. [Serious] Filter “facilityTermLoan” flip after select — no ghost selection

`CTL-FL-GHOST-facilityTermLoan` — {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 7. [Serious] Filter “overdraft” flip after select — no ghost selection

`CTL-FL-GHOST-overdraft` — {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

## All each-control probes

- **PASS** `CTL-INV-01` Live inventory of inputs / filters / table controls
- **PASS** `CTL-IN-monthlyIncome` Input “hlc-monthly-income” change survives rematch + Apply packet
- **PASS** `CTL-IN-propertyValue` Input “hlc-property-value” change survives rematch + Apply packet
- **PASS** `CTL-IN-existingEmis` Input “hlc-existing-emis” change survives rematch + Apply packet
- **PASS** `CTL-IN-cardLimits` Input “hlc-card-limits” change survives rematch + Apply packet
- **PASS** `CTL-IN-cardLoadPct` Input “hlc-card-load-pct” change survives rematch + Apply packet
- **PASS** `CTL-IN-foir` Input “hlc-foir” change survives rematch + Apply packet
- **PASS** `CTL-IN-tenure` Input “hlc-tenure” change survives rematch + Apply packet
- **PASS** `CTL-IN-age` Input “hlc-age” change survives rematch + Apply packet
- **PASS** `CTL-IN-cibil` Input “hlc-cibil” change survives rematch + Apply packet
- **PASS** `CTL-IN-occupation` Input “hlc-occupation” change survives rematch + Apply packet
- **PASS** `CTL-IN-purpose` Input “hlc-purpose” change survives rematch + Apply packet
- **PASS** `CTL-IN-foir-50` FOIR option 50% applies
- **PASS** `CTL-IN-foir-55` FOIR option 55% applies
- **PASS** `CTL-IN-foir-60` FOIR option 60% applies
- **PASS** `CTL-IN-foir-65` FOIR option 65% applies
- **PASS** `CTL-IN-foir-70` FOIR option 70% applies
- **PASS** `CTL-IN-cardLoad-0` Card load option 0% applies
- **PASS** `CTL-IN-cardLoad-5` Card load option 5% applies
- **PASS** `CTL-IN-cardLoad-10` Card load option 10% applies
- **PASS** `CTL-IN-co-toggle` Co-applicant toggle reveals co-applicant fields
- **PASS** `CTL-IN-co-include` Co-applicant include flag set after toggle+fill
- **PASS** `CTL-IN-co-packet` Co-applicant fields land in Apply packet
- **PASS** `CTL-FL-govtPsu` Filter “govtPsu” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-govtPsu` Filter “govtPsu” flip after select — no ghost selection
- **PASS** `CTL-FL-womenApplicant` Filter “womenApplicant” can be set without breaking the table
- **PASS** `CTL-FL-GHOST-womenApplicant` Filter “womenApplicant” flip after select — no ghost selection
- **PASS** `CTL-FL-greenHome` Filter “greenHome” can be set without breaking the table
- **PASS** `CTL-FL-GHOST-greenHome` Filter “greenHome” flip after select — no ghost selection
- **PASS** `CTL-FL-insurance` Filter “insurance” can be set without breaking the table
- **PASS** `CTL-FL-GHOST-insurance` Filter “insurance” flip after select — no ghost selection
- **PASS** `CTL-FL-bankPublic` Filter “bankPublic” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-bankPublic` Filter “bankPublic” flip after select — no ghost selection
- **PASS** `CTL-FL-bankPrivate` Filter “bankPrivate” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-bankPrivate` Filter “bankPrivate” flip after select — no ghost selection
- **PASS** `CTL-FL-rateFloating` Filter “rateFloating” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-rateFloating` Filter “rateFloating” flip after select — no ghost selection
- **PASS** `CTL-FL-fixedRate` Filter “fixedRate” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-fixedRate` Filter “fixedRate” flip after select — no ghost selection
- **PASS** `CTL-FL-facilityTermLoan` Filter “facilityTermLoan” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-facilityTermLoan` Filter “facilityTermLoan” flip after select — no ghost selection
- **PASS** `CTL-FL-overdraft` Filter “overdraft” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-overdraft` Filter “overdraft” flip after select — no ghost selection
- **PASS** `CTL-FL-clear` Clear filters restores a usable bank list
- **PASS** `CTL-TB-rows` Table shows bank rows after Compare
- **PASS** `CTL-TB-select-row` Clicking a bank row selects it and enables Apply
- **PASS** `CTL-TB-deselect-row` Clicking selected row deselects (or Apply locks)
- **PASS** `CTL-TB-show-more` Show more banks expands the table
- **PASS** `CTL-TB-select-all` Select-all header selects every visible bank
- **PASS** `CTL-TB-sort-headers` Table sort headers clickable (9 found)
- **PASS** `CTL-TB-drawer` Bank details drawer opens from table
- **PASS** `CTL-TB-paddles` Table column paddles exist (scroll assist)
- **PASS** `CTL-TB-apply-once` Apply once from table opens Apply with banks
- **PASS** `CTL-COV-01` Coverage statement — each input / filter / table family

## Full merged issues (all suites)

### 1. [Serious] Apply packet includes earlier public selection after Private filter

**Probe:** `APPLY-02` · Explore → Apply packet

Customer applies only to the last filtered set; earlier choice is silently dropped before Firebase.

**Test note:** Missing public. Banks: Axis Bank; selectedCount=2

### 2. [Serious] Apply button count matches banks that actually apply

**Probe:** `APPLY-03` · Explore Apply bar → packet

User trusts “Apply to N banks” but fewer banks go to Apply/Firebase.

**Test note:** ariaCount=2; draftIds=2; packetBanks=1

### 3. [Serious] Filter “bankPrivate” flip after select — no ghost selection

**Probe:** `CTL-FL-GHOST-bankPrivate` · Each filter / selection durability

Ghost selections lie about what Apply will send.

**Test note:** {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 4. [Serious] Filter “bankPublic” flip after select — no ghost selection

**Probe:** `CTL-FL-GHOST-bankPublic` · Each filter / selection durability

Ghost selections lie about what Apply will send.

**Test note:** {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 5. [Serious] Filter “facilityTermLoan” flip after select — no ghost selection

**Probe:** `CTL-FL-GHOST-facilityTermLoan` · Each filter / selection durability

Ghost selections lie about what Apply will send.

**Test note:** {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 6. [Serious] Filter “fixedRate” flip after select — no ghost selection

**Probe:** `CTL-FL-GHOST-fixedRate` · Each filter / selection durability

Ghost selections lie about what Apply will send.

**Test note:** {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 7. [Serious] Filter “govtPsu” flip after select — no ghost selection

**Probe:** `CTL-FL-GHOST-govtPsu` · Each filter / selection durability

Ghost selections lie about what Apply will send.

**Test note:** {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 8. [Serious] Filter “overdraft” flip after select — no ghost selection

**Probe:** `CTL-FL-GHOST-overdraft` · Each filter / selection durability

Ghost selections lie about what Apply will send.

**Test note:** {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 9. [Serious] Filter “rateFloating” flip after select — no ghost selection

**Probe:** `CTL-FL-GHOST-rateFloating` · Each filter / selection durability

Ghost selections lie about what Apply will send.

**Test note:** {"selectedVisible":0,"draftIds":1,"apply":"Apply once to 1 bank"}; ghost=true

### 10. [Serious] Term loan → Overdraft-only drops selection visibility

**Probe:** `PX-SEL-01` · Permutation / filter orphans

Filter flips that hide selected banks while keeping a count break Apply trust.

**Test note:** beforeSelected=["Bank of Maharashtra"]; afterSelected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"; ghost=true

### 11. [Serious] Women filter rematch after select

**Probe:** `PX-SEL-02` · Permutation / filter orphans

Filter flips that hide selected banks while keeping a count break Apply trust.

**Test note:** beforeSelected=["Bank of Maharashtra"]; afterSelected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"; ghost=true

### 12. [Serious] Green home filter rematch after select

**Probe:** `PX-SEL-03` · Permutation / filter orphans

Filter flips that hide selected banks while keeping a count break Apply trust.

**Test note:** beforeSelected=["Bank of Maharashtra"]; afterSelected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"; ghost=true

### 13. [Serious] Insurance filter rematch after select

**Probe:** `PX-SEL-04` · Permutation / filter orphans

Filter flips that hide selected banks while keeping a count break Apply trust.

**Test note:** beforeSelected=["Bank of Maharashtra"]; afterSelected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"; ghost=true

### 14. [Serious] Govt PSU filter rematch after select

**Probe:** `PX-SEL-05` · Permutation / filter orphans

Filter flips that hide selected banks while keeping a count break Apply trust.

**Test note:** beforeSelected=["Bank of Maharashtra"]; afterSelected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"; ghost=true

### 15. [Serious] Both bank types off then Private on (selection survival)

**Probe:** `PX-SEL-06` · Permutation / filter orphans

Filter flips that hide selected banks while keeping a count break Apply trust.

**Test note:** beforeSelected=["Bank of Maharashtra"]; afterSelected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"; ghost=true

### 16. [Serious] Selected bank stays visible after opposite bank-type filter

**Probe:** `SEL-01` · Explore / selection + filter

User thinks they still have that bank selected for compare/apply, but it disappears from the list.

**Test note:** Not visible. Visible selected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"

### 17. [Serious] Selected out-of-filter banks are pinned to the top

**Probe:** `SEL-02` · Explore / selection + filter

Cannot compare earlier pick vs new private banks side by side.

**Test note:** Top row selected=false; publicStillVisible=false

### 18. [Serious] Selected bank survives Floating → Fixed-only filter flip

**Probe:** `SEL-06` · Explore / rate filter + selection

Same class of break as Public/Private: rate filter silently drops selection from view/apply set.

**Test note:** beforeSelected=["Bank of Maharashtra"]; afterSelected=[]; draftIds=["OFF-1003"]; apply="Apply once to 1 bank"

### 19. [Important] Written bank records keep comparison fields (scheme/rate/facility)

**Probe:** `E2E-06` · Firestore bank payload richness

Ops calling the customer cannot see which offer was compared.

**Test note:** bank keys=[id, bankName, effectiveRoiPct, loanAmount, tenureLabel, emi]

### 20. [Important] Firestore bank payload strips comparison fields present in packet

**Probe:** `FB-01` · Apply packet → Firebase shape

Ops get a thin shortlist; cannot see which scheme/rate/facility the customer compared.

**Test note:** Saved fields: id,bankName,rate,loan,tenure,emi. Stripped-but-available: {"bankKey":true,"rateType":true,"facilityLabel":true,"scheme":true,"processingFee":true,"offer":true}

### 21. [Important] Co-applicant income visible on Apply review

**Probe:** `PX-CO-02` · Permutation / co-applicant review

User cannot confirm co-applicant numbers before submit.

**Test note:** incomeBlank=true; snippet="Co-applicant\nYes\nCo-applicant income\n—\nCo-applicant EMIs\n—\nCo-applicant card limits\n—"

### 22. [Important] +91 formatted phone accepted on contact

**Probe:** `PX-CT-01` · Permutation / phone formats

People often paste +91 numbers.

**Test note:** {"phoneOkVisible":false,"verifyDisabled":false}

### 23. [Important] Apply review shows Public/Private filter context

**Probe:** `REVIEW-02` · Apply review

User cannot confirm which bank-type scope they applied under.

**Test note:** filters=""; primary has no Public/Private

### 24. [Important] Apply bank details include scheme / rate type / facility

**Probe:** `REVIEW-03` · Apply review / bank details

Weak confirmation of which offer was selected for each bank.

**Test note:** Opened details: Existing EMIs ₹0 Credit card limits ₹0 Credit card monthly load 10% EMI limit / FOIR 55%

### 25. [Important] Apply review shows co-applicant income from Explore

**Probe:** `REVIEW-04` · Explore co-applicant → Apply review

User cannot verify co-applicant numbers before submit; ops may still have array in form.

**Test note:** Packet has coApplicants[1]; UI income line="—"

### 26. [Important] Apply review reflects multi rate-type filter honestly

**Probe:** `REVIEW-05` · Explore filters → Apply review

Review can misstate the rate-type scope the customer compared under.

**Test note:** bothOn=true; query.rateType=Floating; primary snippet="Rate type\nFloating\nFacility\nTerm loan\nTenure (yea"

### 27. [Lesser] Apply packet expires after 60 minutes (live)

**Probe:** `FB-03` · Apply session lifetime

Slow Google verify / tab left open can wipe the shortlist before submit.

**Test note:** url=http://127.0.0.1:8765/pages/explore-banks.html; packet=cleared; snippet="Guide\nTools\nSupport\nAbout\nExplore banks.\nLoan inputs\n\nSets how much you can borrow\n\nNet monthly income\n*\n₹\nProperty value\nas per agreement\n*"

### 28. [Lesser] Show-more expansion resets on filter rematch

**Probe:** `SEL-05` · Explore / show more + filter

List jumps back to first page; easy to lose place and mis-select.

**Test note:** expandedWas=33; afterFilterVisible=2; showMore={"exists":true,"hidden":true,"label":"Show 23 more banks"}

## All probes (merged)

- **PASS** `SETUP-01` Explore loads matched banks
- **PASS** `FILTER-01` Public / Private filters change the list
- **FAIL** `SEL-01` Selected bank stays visible after opposite bank-type filter
- **FAIL** `SEL-02` Selected out-of-filter banks are pinned to the top
- **PASS** `APPLY-01` Apply once navigates with a non-empty packet
- **FAIL** `APPLY-02` Apply packet includes earlier public selection after Private filter
- **FAIL** `APPLY-03` Apply button count matches banks that actually apply
- **PASS** `REVIEW-01` Apply review lists same banks as packet
- **FAIL** `REVIEW-02` Apply review shows Public/Private filter context
- **FAIL** `REVIEW-03` Apply bank details include scheme / rate type / facility
- **FAIL** `REVIEW-04` Apply review shows co-applicant income from Explore
- **FAIL** `FB-01` Firestore bank payload strips comparison fields present in packet
- **PASS** `SEL-03` Selection survives input rematch (same bank intent)
- **PASS** `SEL-04` Select-all after Show more selects the full expanded list
- **FAIL** `SEL-05` Show-more expansion resets on filter rematch
- **PASS** `APPLY-04` Apply with empty/missing packet recovers safely
- **FAIL** `REVIEW-05` Apply review reflects multi rate-type filter honestly
- **FAIL** `SEL-06` Selected bank survives Floating → Fixed-only filter flip
- **PASS** `INPUT-01` Filled input card Compare yields Apply packet with banks
- **PASS** `INPUT-02` Typed income / age / CIBIL / tenure survive into Apply packet
- **PASS** `INPUT-03` Occupation and purpose survive into Apply packet
- **PASS** `CONTACT-01` Continue is enabled when packet has banks
- **PASS** `CONTACT-02` Continue opens contact page with packet intact
- **PASS** `CONTACT-03` Empty contact form blocks Verify and Submit
- **PASS** `CONTACT-04` Invalid phone keeps Submit gated
- **PASS** `CONTACT-05` Valid fields enable Verify but Submit stays locked until Google
- **PASS** `CONTACT-06` Contact draft persists name / phone / email while typing
- **PASS** `E2E-00` QA Firebase mock installed on contact page
- **PASS** `E2E-01` Google email mismatch blocks verification / submit
- **PASS** `E2E-02` Matching Google verify unlocks Submit
- **PASS** `E2E-03` Submit shows Application received window with Reference ID
- **PASS** `E2E-04` Firestore write receives contact + banks + status=received
- **PASS** `E2E-05` Apply packet cleared after successful submit
- **FAIL** `E2E-06` Written bank records keep comparison fields (scheme/rate/facility)
- **PASS** `E2E-07` Written application keeps customer input numbers
- **FAIL** `FB-03` Apply packet expires after 60 minutes (live)
- **PASS** `CONTACT-07` Unchecked consent does not complete Application received
- **PASS** `REVIEW-06` Remove bank on Apply review updates packet count
- **INFO** `FB-02` Real Google OAuth popup not used — Auth/Firestore mocked for success-path proof
- **PASS** `PX-IN-01` (permutation) Input combo Salaried × Regular Home Loan → Application received
- **PASS** `PX-IN-02` (permutation) Input combo Self-Employed × Regular Home Loan → Application received
- **PASS** `PX-IN-03` (permutation) Input combo Salaried × Top-up Loan → Application received
- **PASS** `PX-IN-04` (permutation) Input combo Self-Employed × Top-up Loan → Application received
- **PASS** `PX-IN-05` (permutation) Low income band reaches Application received (or honest empty match)
- **PASS** `PX-IN-06` (permutation) High income band reaches Application received (or honest empty match)
- **PASS** `PX-IN-07` (permutation) Young applicant reaches Application received (or honest empty match)
- **PASS** `PX-IN-08` (permutation) Older applicant reaches Application received (or honest empty match)
- **PASS** `PX-IN-09` (permutation) Borderline CIBIL reaches Application received (or honest empty match)
- **FAIL** `PX-SEL-01` (permutation) Term loan → Overdraft-only drops selection visibility
- **FAIL** `PX-SEL-02` (permutation) Women filter rematch after select
- **FAIL** `PX-SEL-03` (permutation) Green home filter rematch after select
- **FAIL** `PX-SEL-04` (permutation) Insurance filter rematch after select
- **FAIL** `PX-SEL-05` (permutation) Govt PSU filter rematch after select
- **FAIL** `PX-SEL-06` (permutation) Both bank types off then Private on (selection survival)
- **PASS** `PX-MULTI-01` (permutation) Select 3 banks → Application received writes all 3
- **PASS** `PX-CO-01` (permutation) Co-applicant on → Application received
- **FAIL** `PX-CO-02` (permutation) Co-applicant income visible on Apply review
- **FAIL** `PX-CT-01` (permutation) +91 formatted phone accepted on contact
- **PASS** `PX-CT-02` (permutation) Invalid email keeps Verify and Submit locked
- **PASS** `PX-CT-03` (permutation) Contact draft restores after reload
- **PASS** `PX-CT-04` (permutation) Double-click Submit writes once
- **PASS** `PX-CT-05` (permutation) Removing last bank on review recovers safely
- **PASS** `PX-MOB-01` (permutation) Mobile (390×844) full funnel → Application received
- **PASS** `PX-NAV-01` (permutation) Back from Contact keeps Apply packet banks
- **PASS** `CTL-INV-01` (each-control) Live inventory of inputs / filters / table controls
- **PASS** `CTL-IN-monthlyIncome` (each-control) Input “hlc-monthly-income” change survives rematch + Apply packet
- **PASS** `CTL-IN-propertyValue` (each-control) Input “hlc-property-value” change survives rematch + Apply packet
- **PASS** `CTL-IN-existingEmis` (each-control) Input “hlc-existing-emis” change survives rematch + Apply packet
- **PASS** `CTL-IN-cardLimits` (each-control) Input “hlc-card-limits” change survives rematch + Apply packet
- **PASS** `CTL-IN-cardLoadPct` (each-control) Input “hlc-card-load-pct” change survives rematch + Apply packet
- **PASS** `CTL-IN-foir` (each-control) Input “hlc-foir” change survives rematch + Apply packet
- **PASS** `CTL-IN-tenure` (each-control) Input “hlc-tenure” change survives rematch + Apply packet
- **PASS** `CTL-IN-age` (each-control) Input “hlc-age” change survives rematch + Apply packet
- **PASS** `CTL-IN-cibil` (each-control) Input “hlc-cibil” change survives rematch + Apply packet
- **PASS** `CTL-IN-occupation` (each-control) Input “hlc-occupation” change survives rematch + Apply packet
- **PASS** `CTL-IN-purpose` (each-control) Input “hlc-purpose” change survives rematch + Apply packet
- **PASS** `CTL-IN-foir-50` (each-control) FOIR option 50% applies
- **PASS** `CTL-IN-foir-55` (each-control) FOIR option 55% applies
- **PASS** `CTL-IN-foir-60` (each-control) FOIR option 60% applies
- **PASS** `CTL-IN-foir-65` (each-control) FOIR option 65% applies
- **PASS** `CTL-IN-foir-70` (each-control) FOIR option 70% applies
- **PASS** `CTL-IN-cardLoad-0` (each-control) Card load option 0% applies
- **PASS** `CTL-IN-cardLoad-5` (each-control) Card load option 5% applies
- **PASS** `CTL-IN-cardLoad-10` (each-control) Card load option 10% applies
- **PASS** `CTL-IN-co-toggle` (each-control) Co-applicant toggle reveals co-applicant fields
- **PASS** `CTL-IN-co-include` (each-control) Co-applicant include flag set after toggle+fill
- **PASS** `CTL-IN-co-packet` (each-control) Co-applicant fields land in Apply packet
- **PASS** `CTL-FL-govtPsu` (each-control) Filter “govtPsu” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-govtPsu` (each-control) Filter “govtPsu” flip after select — no ghost selection
- **PASS** `CTL-FL-womenApplicant` (each-control) Filter “womenApplicant” can be set without breaking the table
- **PASS** `CTL-FL-GHOST-womenApplicant` (each-control) Filter “womenApplicant” flip after select — no ghost selection
- **PASS** `CTL-FL-greenHome` (each-control) Filter “greenHome” can be set without breaking the table
- **PASS** `CTL-FL-GHOST-greenHome` (each-control) Filter “greenHome” flip after select — no ghost selection
- **PASS** `CTL-FL-insurance` (each-control) Filter “insurance” can be set without breaking the table
- **PASS** `CTL-FL-GHOST-insurance` (each-control) Filter “insurance” flip after select — no ghost selection
- **PASS** `CTL-FL-bankPublic` (each-control) Filter “bankPublic” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-bankPublic` (each-control) Filter “bankPublic” flip after select — no ghost selection
- **PASS** `CTL-FL-bankPrivate` (each-control) Filter “bankPrivate” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-bankPrivate` (each-control) Filter “bankPrivate” flip after select — no ghost selection
- **PASS** `CTL-FL-rateFloating` (each-control) Filter “rateFloating” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-rateFloating` (each-control) Filter “rateFloating” flip after select — no ghost selection
- **PASS** `CTL-FL-fixedRate` (each-control) Filter “fixedRate” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-fixedRate` (each-control) Filter “fixedRate” flip after select — no ghost selection
- **PASS** `CTL-FL-facilityTermLoan` (each-control) Filter “facilityTermLoan” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-facilityTermLoan` (each-control) Filter “facilityTermLoan” flip after select — no ghost selection
- **PASS** `CTL-FL-overdraft` (each-control) Filter “overdraft” can be set without breaking the table
- **FAIL** `CTL-FL-GHOST-overdraft` (each-control) Filter “overdraft” flip after select — no ghost selection
- **PASS** `CTL-FL-clear` (each-control) Clear filters restores a usable bank list
- **PASS** `CTL-TB-rows` (each-control) Table shows bank rows after Compare
- **PASS** `CTL-TB-select-row` (each-control) Clicking a bank row selects it and enables Apply
- **PASS** `CTL-TB-deselect-row` (each-control) Clicking selected row deselects (or Apply locks)
- **PASS** `CTL-TB-show-more` (each-control) Show more banks expands the table
- **PASS** `CTL-TB-select-all` (each-control) Select-all header selects every visible bank
- **PASS** `CTL-TB-sort-headers` (each-control) Table sort headers clickable (9 found)
- **PASS** `CTL-TB-drawer` (each-control) Bank details drawer opens from table
- **PASS** `CTL-TB-paddles` (each-control) Table column paddles exist (scroll assist)
- **PASS** `CTL-TB-apply-once` (each-control) Apply once from table opens Apply with banks
- **PASS** `CTL-COV-01` (each-control) Coverage statement — each input / filter / table family

## How to re-run

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
export PLAYWRIGHT_BROWSERS_PATH="$HOME/.cache/ms-playwright"
LOCAL_LIBS="/tmp/pw-libs/root/usr/lib/x86_64-linux-gnu"
[[ -d "$LOCAL_LIBS" ]] && export LD_LIBRARY_PATH="${LOCAL_LIBS}${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-user-flow.mjs
BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-permutations.mjs
BASE_URL=http://127.0.0.1:8765 node scripts/audit-apply-each-control.mjs
```
