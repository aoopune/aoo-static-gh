# Explore Banks — Tooltip research briefs

**Audience:** UX writers (not final tooltip copy)  
**Product:** Shroffin Explore Banks home-loan compare (`pages/explore-banks.html`)  
**Scope:** India retail home loans only  
**Researched:** 2026-08-24  
**Method:** Primary sources (RBI, CIBIL/TransUnion consumer pages, major bank FAQs/MITC) first; secondary only as leads then verified. Practice marked separately from regulation.  
**Repeat this research:** `.cursor/skills/shroffin-explore-tooltips/research.md` (same method as this file was built).

---

## How to use this file

1. Every bullet under **UX writer ammo** is decision-useful only — turn into ≤2-sentence tooltips later; do not paste as-is if it sounds like a lecture.
2. Do **not** invent ₹income → ₹loan/EMI/savings maths. Do **not** coach the UI. Do **not** invent homework gates banks do not impose. Do **not** imply sanction/rate/savings are assured.
3. Label **estimate / filter** vs **bank verifies later** when the tool input is not the sanction decision.
4. Current live tooltips that quote “₹X income → ₹Y more loan” style maths should be rewritten from these briefs (they violate product research rules).

### Shroffin tool behaviour (product facts — not bank law)

| Topic | What the compare engine actually does |
| --- | --- |
| Primary **CIBIL score** field | Filters offers by CIBIL band using the score entered. |
| Co-applicant CIBIL | Each co-applicant card can include its own `cibilScore`. Matching uses the **weakest** of primary + co-applicant scores that were entered (`weakestCibilScore` in `src/home-loan-compare.js`). There is **no** combined household score. |
| Co-applicant income | Income is clubbed only when occupation earns **and** relationship is in the clubs list: Spouse, Father, Mother, Son, Daughter, Brother, Sister. **Someone else** can be on the form but income does **not** raise eligibility in the tool (`clubs: false`). Max **5** co-applicants. |
| Card load % | User-selectable % of total card limits treated as monthly obligation — **tool estimate**, not an RBI formula. |
| FOIR % | User-selectable EMI-to-income filter for the compare estimate — **not** a universal RBI number. |
| All amounts / rates / fees in the table | Indicative match against published JSON; **not** a sanction letter or KFS. |

---

## Cross-cutting primary anchors

| Topic | Anchor |
| --- | --- |
| Repayment capacity / illustrative 55–60% | [RBI Housing Loans FAQ](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=77) — “Typically a bank assumes that about 55-60 % of your monthly disposable / surplus income is available for repayment of loan…” (illustrative, not a mandate) |
| LTV slabs (individual housing) | [RBI DBR.BP.BC.No.72/08.12.015/2016-17, 7 Jun 2017](https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=10995&Mode=0) — up to ₹30L LTV up to 90%; ₹30–75L up to 80%; above ₹75L up to 75% |
| Stamp/registration out of LTV | [RBI Housing Finance Master Circular practice](https://www.rbi.org.in/Scripts/BS_ViewMasterCirculars.aspx?Id=12282&Mode=0) — exclude stamp/registration/docs from cost (exception: dwelling cost ≤ ₹10 lakh) |
| No foreclosure on floating (individuals, non-business) | [RBI 5 Jun 2012](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=7258&Mode=0); [2 Aug 2019 clarification](https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=11646&Mode=0) (banks); NBFC twin circular Id=11647; [Pre-payment Charges Directions, 2025](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12878&Mode=0) (from **1 Jan 2026** for sanction/renewal) |
| Penal charges (not penal interest) | [Fair Lending — Penal Charges, 18 Aug 2023](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12527&Mode=0); [timeline → Apr 2024](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12585&Mode=0); [RBI FAQs Id=162](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=162) |
| Floating EMI reset communication | [RBI 18 Aug 2023 / updates](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12529&Mode=0) |
| External benchmark floating | [RBI 4 Sep 2019](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11677) |
| KFS disclosure | [RBI KFS for Loans & Advances, 15 Apr 2024](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12663&Mode=0) |
| Self-check CIBIL | [CIBIL free score page](https://www.cibil.com/freecibilscore) — “Checking your own CIBIL score doesn't impact it”; [CIBIL blog](https://www.cibil.com/blog/what-is-cibil-score) — soft self-enquiry has no effect; hard lender pull can |
| Bank practice examples | [SBI Home Loan FAQ](https://homeloans.sbi.bank.in/faq) (EMI/NMI, age to 70, women 0.05%, Pre-EMI, docs for co-applicant); [SBI Privilege](https://homeloans.sbi.bank.in/products/view/privilege-home-loan); [ICICI Home Overdraft FAQs](https://www.icici.bank.in/personal-banking/loans/home-loan/home-overdraft/home-overdraft-faqs); [HDFC documents & charges](https://homeloans.hdfc.bank.in/checklist/documents-charges) |

---

# Part A — Form & filter tips

### Net monthly income

- **Core meaning:** Take-home / surplus monthly income used to judge EMI capacity — not CTC or “package.”
- **How Indian lenders typically use it:** Base for FOIR / EMI–NMI sizing and for clubbing accepted co-applicant income. Salaried: often net after statutory deductions. Self-employed: usually from ITRs / audited figures, not claimed cash drawings. RBI FAQ ties eligibility to disposable/surplus income, spouse income, assets, liabilities, stability.
- **Related facts & metadata:** SBI FAQ: NMI = take-home after taxes and payroll deductions; EMI/NMI can range ~20–70% by income slab. Typical docs: salary slips, Form 16/ITR, bank statements (counts vary by lender). Variable pay/bonus often partly counted — **practice varies**. Bank later reconciles credits to slips/ITR.
- **Exceptions / gotchas:** Gross vs net confusion; undeclared cash income ignored; probation / recent job change can shrink recognition; rent income only if documented.
- **Common myths or low-value lines to avoid:** “Banks take CTC.” “Any UPI credit counts.” Guaranteed multipliers (“60× salary”).
- **Confidence:** High (RBI framing + SBI FAQ). Medium on exact % of variables counted.  
  **Sources:** [RBI Housing FAQ](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=77); [SBI FAQ](https://homeloans.sbi.bank.in/faq).
- **UX writer ammo:**
  - Use take-home capacity the bank can prove from slips/ITR/statements — not CTC.
  - This field sizes a **plausible** loan in the compare tool; it is not a sanction.
  - Co-applicant income may be clubbed only if they are accepted on the loan (and often on title).
  - Self-employed: tax returns matter more than claimed monthly cash.
  - Higher documented income can raise how much EMI lenders allow; it does not skip LTV or bureau checks.
  - Bank will re-verify against salary credits / ITR later.
  - Mismatches between declared income and bank credits hurt the file.

---

### Property value as per agreement

- **Core meaning:** Price in the sale agreement / allotment — the deal price on paper.
- **How Indian lenders typically use it:** One input to Loan-to-Value (LTV). Financeable value is commonly the **lower of** agreement value and bank technical valuation. RBI caps LTV by loan size; stamp duty, registration, and documentation charges are generally **excluded** from property cost for LTV (exception: dwelling cost ≤ ₹10 lakh).
- **Related facts & metadata:** Buyer usually funds margin + stamp/reg from own sources. Under-construction: staged disbursement. Resale/old stock: valuation gaps more common. Compare tool uses stated agreement value as a **filter estimate**.
- **Exceptions / gotchas:** High agreement + low valuation → lower loan / higher cash. Undervaluation for stamp creates legal risk. Circle rate vs agreement differs by state.
- **Common myths or low-value lines to avoid:** “Loan = X% of whatever I agree.” “Stamp and registration are always financed.”
- **Confidence:** High on RBI LTV + stamp exclusion; High on “lower of” as industry practice.  
  **Sources:** [RBI LTV rationalisation 2017](https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=10995&Mode=0); [RBI Master Circular Housing Finance — stamp out of LTV](https://www.rbi.org.in/Scripts/BS_ViewMasterCirculars.aspx?Id=12282&Mode=0).
- **UX writer ammo:**
  - Agreement price is not automatically the bank’s value.
  - Loan is capped by LTV on the lower of deal price and bank valuation.
  - Stamp duty and registration are usually **extra cash**, not inside the LTV base.
  - A valuation gap means you bring more down payment.
  - The tool uses your stated deal price; a valuer comes later.
  - RBI sets **maximum** LTV slabs; lenders may lend less.
  - Under-construction money often releases in stages, not all at once.

---

### Existing EMIs

- **Core meaning:** Monthly instalments already committed on loans (home, auto, personal, education, etc.).
- **How Indian lenders typically use it:** Subtracted from FOIR capacity before sizing the new home EMI. Verified via credit bureau + loan account statements.
- **Related facts & metadata:** Joint loans appear on each co-borrower’s bureau. Closed loans may lag on the report. Gold loans / BNPL / card EMIs may be treated differently by lender — **varies**. Guarantor obligations: sometimes counted, sometimes not.
- **Exceptions / gotchas:** Informal family loans absent from bureau still squeeze real cash flow. “I will close it next month” does not free FOIR until closed and reported.
- **Common myths or low-value lines to avoid:** “Only home-loan EMI matters.” “Paying early each month means it doesn’t count.”
- **Confidence:** High conceptually; Medium on edge products.  
  **Sources:** [RBI Housing FAQ — liabilities/repayment](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=77); [SBI FAQ — prior loan statements](https://homeloans.sbi.bank.in/faq).
- **UX writer ammo:**
  - Existing EMIs reduce how much new home EMI lenders will allow.
  - Lenders see active loans on the bureau even if you forget one.
  - Closing small EMIs **before** apply can free eligibility — timing matters.
  - This field is an estimate; bank matches bureau + statements.
  - Joint loans show on every co-borrower’s file.
  - Do not omit EMIs you only “plan” to close.
  - High existing debt can also worsen risk grade / pricing at some lenders.

---

### Credit card limits

- **Core meaning:** Aggregate sanctioned credit-card limits. Many lenders convert cards into a **notional monthly obligation** for FOIR even if you pay in full.
- **How Indian lenders typically use it:** Common underwriting habit: a **% of limit** and/or outstanding / minimum due — **method is lender policy**, not an RBI formula. High utilisation also hurts the bureau score separately from FOIR.
- **Related facts & metadata:** Shroffin lets the user pick a **card-load %** for the estimate. Unused high limits can still shrink eligibility under “% of limit” policies. Corporate / add-on / secured cards may be treated differently.
- **Exceptions / gotchas:** Paying full each month ≠ zero FOIR load at many banks. Temporary limit cuts before apply are a real-world tactic — not a guaranteed outcome.
- **Common myths or low-value lines to avoid:** “RBI says always 5% of limit.” “Zero dues means zero obligation.”
- **Confidence:** High that cards often enter FOIR; **Medium** on any specific % (widespread practice, not statute).  
  **Sources:** Industry underwriting practice (secondary); no RBI circular prescribing a fixed card %. Tool note: user-selected load % in Explore Banks.
- **UX writer ammo:**
  - Card limits can shrink home-loan EMI capacity even with zero dues.
  - Each bank invents its own card-obligation formula — not one India-wide law.
  - Utilisation still matters for CIBIL separately from FOIR.
  - The tool’s % is an **estimate**; bureau + statements decide later.
  - Large unused limits are not always “free” in credit policy.
  - Closing or cutting limits can free FOIR capacity but may shorten credit history.
  - Never imply Shroffin’s % is an official RBI rule.

---

### EMI limit / FOIR

- **Core meaning:** Cap on total fixed monthly obligations (existing + proposed EMI) as a share of income — Fixed Obligation to Income Ratio / EMI–NMI style limits.
- **How Indian lenders typically use it:** **Board credit policy.** RBI does **not** mandate a FOIR %. RBI FAQ: banks typically treat about **55–60% of disposable/surplus** income as available for repayment — **illustrative**. Some banks use gross income instead. SBI FAQ: EMI/NMI ~20–70% by income slab. Public practice often ~40–60%+, sometimes higher for strong profiles — **varies by lender and income band**.
- **Related facts & metadata:** Eligible loan ≈ min(income/FOIR path, LTV path). RBI also wants headroom on floating loans for possible rate hikes (reset/EMI framework). Co-applicants and govt/salary profiles can change the FOIR a given bank applies — **practice, not guarantee**.
- **Exceptions / gotchas:** Same % feels looser at high income; self-employed often tighter; PSU vs private vs HFC/NBFC appetite differs.
- **Common myths or low-value lines to avoid:** “RBI FOIR is 50%.” Presenting one bank’s FOIR as universal. Guaranteeing a better FOIR for govt employees.
- **Confidence:** High that FOIR is lender-set; High on RBI’s “typically 55–60%” language as FAQ illustration.  
  **Sources:** [RBI Housing FAQ](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=77); [SBI FAQ EMI/NMI](https://homeloans.sbi.bank.in/faq); [RBI EMI reset circular](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12529&Mode=0).
- **UX writer ammo:**
  - FOIR is the bank’s “how much EMI is safe,” not a government number.
  - Existing EMIs and card obligations reduce what lenders allow for the new home EMI.
  - Longer tenure lowers EMI and can raise loan amount within FOIR.
  - Passing FOIR still needs LTV, title, and bureau clearance.
  - In this tool, FOIR is a **comparison estimate** you can change.
  - Floating rate rises can stress FOIR later — leave buffer.
  - Some profiles get more flexible FOIR at some lenders — never guaranteed.

---

### Loan tenure

- **Core meaning:** Years over which the loan is scheduled to be repaid; shapes EMI and total interest.
- **How Indian lenders typically use it:** Capped by product max (often up to ~30 years) **and** age at maturity. SBI general FAQ: repayment up to age **70** (Privilege / special schemes may allow higher — verify live product). Joint loans: often limited by the **older** applicant. Longer tenure → lower EMI → more FOIR headroom, more lifetime interest.
- **Related facts & metadata:** On floating loans, tenure can elongate if EMI is held when rates rise (RBI reset options). Under-construction: Pre-EMI interest phase before full EMI (SBI FAQ). Plot / some products may have shorter max tenures.
- **Exceptions / gotchas:** “30 years” is a marketing max, not a right. Pensioners / near-retirement get shorter residual tenure.
- **Common myths or low-value lines to avoid:** “Longer tenure always saves money.” “Tenure never changes on floating.”
- **Confidence:** High on age-at-maturity logic; Medium on any universal max years.  
  **Sources:** [SBI FAQ age/tenure](https://homeloans.sbi.bank.in/faq); [RBI floating EMI reset](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12529&Mode=0).
- **UX writer ammo:**
  - Banks care when the loan **ends**, not only how old you are today.
  - Longer tenure lowers EMI but usually raises lifetime interest.
  - With a co-applicant, the older age often shortens shared tenure.
  - Floating resets may stretch tenure if EMI is held fixed.
  - Tool tenure assumes you still clear age and product rules.
  - Under-construction may mean Pre-EMI interest before full EMI.
  - Max tenure is a cash-flow choice, not a free upgrade.

---

### Age

- **Core meaning:** Applicant age at start and implied age when the loan must end.
- **How Indian lenders typically use it:** Minimum often 18+; maximum age at maturity commonly ~70–75 depending on scheme (SBI general: repay by 70; Privilege markets higher maturity — verify). Affects max tenure and sometimes FOIR conservatism near retirement.
- **Related facts & metadata:** Co-applicant age can dominate tenure math. Pension / defence / special schemes differ. NRI rules differ.
- **Exceptions / gotchas:** Entry age vs residual service for govt staff; “high income” does not erase maturity caps.
- **Common myths or low-value lines to avoid:** “Any age if income is high.” Ignoring co-applicant age.
- **Confidence:** High for SBI examples; Medium as universal ceilings.  
  **Sources:** [SBI FAQ](https://homeloans.sbi.bank.in/faq); [SBI Privilege](https://homeloans.sbi.bank.in/products/view/privilege-home-loan).
- **UX writer ammo:**
  - Maturity age often caps tenure more than “max years” ads.
  - Near retirement, tenure (and sometimes amount) shrinks.
  - Joint files often follow the older person’s ceiling.
  - Special schemes may allow higher maturity ages — check the product.
  - Age never replaces income or credit checks.
  - Enter ages for everyone who would be on the loan.
  - Filter age helps surface tenure-compatible products only.

---

### CIBIL score

- **Core meaning:** TransUnion CIBIL’s 300–900 summary of credit history. Lenders also read the **full report** (DPD, defaults, settlements, enquiries, utilisation).
- **How Indian lenders typically use it:** Score as filter + pricing input; **each** applicant/co-applicant’s bureau is pulled and assessed. There is **no** official combined household CIBIL. Weak co-applicant can block or worsen a file. Public banks often prefer stronger scores; some HFCs/NBFCs show more mid-score flexibility — **varies**. Score alone does not clear recent serious delinquencies.
- **Related facts & metadata:**
  - **Self-check (soft):** CIBIL: checking your own score does **not** impact / won’t lower it; one free full report per calendar year under RBI consumer entitlement framing on CIBIL’s free-score page.
  - **Hard enquiry:** Lender pull on a formal application can weigh on score; multiple applications in a short window can hurt.
  - **Improvement (non-hack):** on-time payments, lower card utilisation, fewer unnecessary applications, dispute genuine errors — takes time.
  - **Shroffin:** Main field is primary; co-applicant cards can add scores; engine matches on the **weakest** entered score. Not a substitute for full multi-bureau underwriting.
- **Exceptions / gotchas:** Thin file / NTC scored differently; Experian/CRIF/Equifax may differ from CIBIL; recent misses report quickly.
- **Common myths or low-value lines to avoid:** “750 guarantees approval.” “Self-check ruins score.” “Combined family CIBIL.” Instant score-hack framing.
- **Confidence:** High on self-check; High on per-person bureau use; High that score ≠ full story.  
  **Sources:** [CIBIL freecibilscore](https://www.cibil.com/freecibilscore); [CIBIL what is score](https://www.cibil.com/blog/what-is-cibil-score); [myscore login](https://myscore.cibil.com/CreditView/login.page) (“won’t lower it”); SBI rate/CIBIL band practice on public rate pages.
- **UX writer ammo:**
  - Score is a summary; delays/defaults on the report can outweigh a “good” number.
  - Every co-borrower’s report is checked — not one household score.
  - Shroffin’s CIBIL box filters products; with co-applicants, the tool uses the **weakest** score entered.
  - Checking your **own** CIBIL usually does not lower the score.
  - Formal lender application checks (hard pulls) can; shopping many loans quickly may hurt.
  - Improve by paying on time, using less of card limits, fixing report errors — patiently.
  - Public vs private vs HFC appetite for mid scores differs; no universal cutoff.

---

### Occupation

- **Core meaning:** How income is earned and proven — salaried vs self-employed / professional / pensioner.
- **How Indian lenders typically use it:** Routes document list and income recognition. Salaried: slips, Form 16, salary credits. Non-salaried: typically multi-year ITR, P&L, business proof (SBI FAQ lists co-applicant/guarantor proofs similarly). Self-employed often more conservative recognition; sometimes rate premium — **varies**. Employer type (govt / listed / MNC) can affect FOIR generosity — practice.
- **Related facts & metadata:** GST returns increasingly used. Cash-heavy thin ITR files struggle. Job switch mid-process can reopen assessment.
- **Exceptions / gotchas:** Newly self-employed; salary + business mix; gig income; partnership vs proprietorship.
- **Common myths or low-value lines to avoid:** “Self-employed cannot get home loans.” “Inflate ITR later with no consequence.”
- **Confidence:** High on document lists from major banks.  
  **Sources:** [SBI FAQ income proofs](https://homeloans.sbi.bank.in/faq).
- **UX writer ammo:**
  - Occupation decides which papers prove income.
  - Self-employed eligibility follows tax returns more than claimed monthly draw.
  - Salaried files are usually simpler; not always cheaper rates.
  - Employer type can change FOIR treatment at some lenders.
  - Filter occupation routes you to products that accept that profile.
  - Bank matches credits to slips/ITR — mismatches hurt.
  - Switching jobs mid-process can reopen income assessment.

---

### Purpose

- **Core meaning:** End-use of the loan — ready purchase, construction, plot, repair/extension, balance transfer, etc.
- **How Indian lenders typically use it:** Different products, docs, LTV comfort, and disbursement rules. Plot finance typically expects construction within a bank-set period. Construction: sanctioned plans + stage disbursement. BT: fresh credit + property check at the new lender. Second home / investment use may face tighter policy (RBI FAQ discusses purposes).
- **Related facts & metadata:** Pre-EMI during construction common. Floating individual exit generally without foreclosure penalty (RBI) — still expect BT fees/valuation costs at the new bank. Agricultural land / pure land banking often refused.
- **Exceptions / gotchas:** “Any plot gets full home-loan LTV” is false. Builder NOC / RERA / APF lists matter for under-construction.
- **Common myths or low-value lines to avoid:** BT always saves money without revaluation costs. Purpose is only a label.
- **Confidence:** High.  
  **Sources:** [RBI Housing FAQ](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=77); [RBI Master Circulars — housing / UCB housing](https://www.rbi.org.in/Scripts/BS_ViewMasterCirculars.aspx?Id=12826&Mode=0); SBI product FAQs.
- **UX writer ammo:**
  - Purpose picks product rules, not only the label.
  - Plot loans usually expect you to build within a bank deadline.
  - Construction money is released as building progresses.
  - Balance transfer is a fresh credit + property check at the new bank.
  - Repair/extension may have lower limits than full purchase.
  - Filter purpose hides products that do not fund that end-use.
  - Second home / investment use can face tighter policy.

---

### Co-applicant

- **Core meaning:** Additional person on the **loan** who shares repayment liability (often also on title). Distinct from guarantor and from mere co-owner.
- **How Indian lenders typically use it:** May club income (if earning and relationship accepted), pull **each** person’s bureau, KYC, and income docs. Liability is typically **joint and several** — bank can pursue any co-borrower for the full outstanding. Commonly accepted: spouse, parents, children; siblings at many lenders; **friends / unrelated persons usually refused** for home loans (lender policy). Many lenders prefer/require income-contributing co-applicants to be **co-owners**; all co-owners are often required on the loan.
- **Related facts & metadata — people consequences:**
  - **Bureau:** Missed EMI damages **all** co-borrowers’ scores and future FOIR.
  - **Docs:** Same income proofs as applicants (SBI lists co-applicant/guarantor proofs).
  - **Tax:** Interest (Sec 24(b)) / principal (80C under old regime) generally need **co-owner + co-borrower + actual repayment share**. Co-borrower without ownership typically cannot claim principal; interest practice also hinges on ownership — confirm with tax adviser. New tax regime limits self-occupied benefits.
  - **Insurance / death:** Optional credit-life (e.g. SBI Life products) may cover full outstanding or proportionate share for co-borrowers — product option, not automatic forgiveness. Property insurance is separate and often mandatory.
  - **Shroffin:** Income clubs only for close-family relationship values; “Someone else” does not raise eligibility in the tool. Max 5. Weakest CIBIL among entered scores is used for matching.
- **Exceptions / gotchas:** Guarantor vs co-borrower (some banks allow spouse as guarantor with limited clubbing — policy-specific). Unmarried partners often declined. NRI + resident mixes have extra rules.
- **Common myths or low-value lines to avoid:** “Friend as co-applicant is fine.” “Co-applicant only helps income, no risk.” “Name on loan = automatic tax benefit.” “Insurance always clears the whole loan for survivors.” Invented gates like “only add if income is clean.”
- **Confidence:** High on liability/docs; High on friends usually refused (practice); High on tax needing ownership for principal; Medium on exact insurance claim options (product-specific).  
  **Sources:** [SBI FAQ](https://homeloans.sbi.bank.in/faq); lender co-applicant explainers (Tata Capital, Kotak — secondary, aligned); Income Tax practice on joint owners (ClearTax / CA explainers — verify with Act/adviser); SBI Life optional cover materials.
- **UX writer ammo:**
  - Co-applicant means shared legal duty to repay the **whole** loan — not a character reference.
  - Spouse / parent–child are common; friends are usually not accepted.
  - Bank checks every co-borrower’s CIBIL and income papers.
  - Income clubbing often needs them on the property title too.
  - Tax deductions usually need both ownership and borrower status (and regime rules).
  - Life cover for co-borrowers depends on the policy option — full vs share.
  - Default by one can hurt every co-borrower’s credit and future loans.

---

### Borrower (govt / PSU / pension)

- **Core meaning:** Employment category that may unlock **named schemes** or fee/rate concessions — not a separate credit score.
- **How Indian lenders typically use it:** Dedicated products (e.g. SBI Privilege for Central/State govt, PSB/PSU, pensionable service): marketed features can include preferential rates, **zero processing fee** (legal/valuation/CIBIL often still payable), check-off, women concession, longer maturity. Defence/Shaurya-type schemes exist. HDFC and others run time-bound govt-employee offers — terms change.
- **Related facts & metadata:** Still subject to CIBIL, FOIR, LTV, property. Check-off (salary deduction) can improve risk view. Pension assessed under scheme rules; sometimes needs younger earning co-applicant — **varies**.
- **Exceptions / gotchas:** Contractual / outsourced “govt project” staff may not qualify; PSU lists differ; family pensioner caps.
- **Common myths or low-value lines to avoid:** “Govt job = automatic lowest rate forever.” Waiving credit/property checks.
- **Confidence:** High for SBI Privilege primary page as an example; Medium that every bank matches it.  
  **Sources:** [SBI Privilege](https://homeloans.sbi.bank.in/products/view/privilege-home-loan).
- **UX writer ammo:**
  - Govt/PSU/pension tags point to special schemes — mainly fees and sometimes rate/check-off.
  - You still need income, credit, and property clearance.
  - “Zero processing fee” often excludes lawyer, valuer, CERSAI, insurance.
  - Salary check-off can unlock extra concession where offered.
  - Pension income follows scheme rules — not the same as salary.
  - Filter helps surface lenders with staff/govt programmes.
  - Sanction letter beats marketing banners.

---

### Concessions

- **Core meaning:** Small **pricing or fee** benefits for meeting lender conditions (woman borrower, green housing, salary relationship, etc.).
- **How Indian lenders typically use it:** **Not standardised across India.** Example: SBI FAQ — **0.05% p.a.** if woman is main applicant/co-applicant. Green schemes need recognised certification (IGBC/GRIHA/LEED — lender-specific). Salary-account / relationship pricing alters spread. Woman concession may also need her as primary owner (“Her Ghar”-style rules) — **varies**.
- **Related facts & metadata:** State stamp-duty concessions for women are **state fiscal rules**, separate from bank ROI cuts. Concessions may not stack; promotions are time-bound.
- **Exceptions / gotchas:** Floor rates can cancel advertised bps. Green needs valid certification, not “eco features.”
- **Common myths or low-value lines to avoid:** Large guaranteed savings from 5 bps without tenure context. Implying every bank offers the same woman/green cut.
- **Confidence:** High on SBI woman 5 bps; Medium on green bps magnitudes; High that practice varies.  
  **Sources:** [SBI FAQ women](https://homeloans.sbi.bank.in/faq); NHB–green housing MoU coverage (historical secondary).
- **UX writer ammo:**
  - Concessions are lender extras on rate or fees — rules differ by bank.
  - Woman rate cuts often need her as primary borrower (and often owner).
  - Green cuts need recognised building certification.
  - Salary-account benefits are relationship pricing, not a right.
  - Small bps matter over long tenures but do not fix eligibility.
  - State stamp-duty benefits ≠ bank interest concession.
  - Filter concessions only where the product publishes them.

---

### Bank type

- **Core meaning:** Regulatory/business category of the lender — public bank, private bank, HFC, NBFC, small finance bank — a **filter hint**, not a quality ranking.
- **How Indian lenders typically use it (tendencies, not law):** PSU banks: often competitive repo/EBLR pricing; process can be slower; preference for cleaner salaried files — varies. Private banks: faster digital journeys; risk-based pricing. HFCs: housing specialists; often more flexible on some profiles; rates/fees may be higher. NBFCs: more flexible underwriting for non-standard income — usually costlier. SFBs: thinner menus; local appetite.
- **Related facts & metadata:** Same RBI LTV / floating prepayment / KFS expectations increasingly apply across regulated entities. OD home-loan variants more common at large banks than everywhere.
- **Exceptions / gotchas:** Large HFCs can be as strict as banks on prime metro salaried. “NBFC always approves” is false.
- **Common myths or low-value lines to avoid:** “PSU always cheapest.” “HFC/NBFC ignores CIBIL.”
- **Confidence:** Medium–High as market characterisation; cite as tendency.  
  **Sources:** RBI frameworks above; market practice.
- **UX writer ammo:**
  - Lender type hints at rate vs flexibility trade-offs — not a moral ranking.
  - Same LTV and many borrower-protection rules cover banks and HFCs.
  - Clean high-score salaried files often price best at large banks.
  - Non-standard income may find more doors at some HFCs/NBFCs — usually at a cost.
  - Speed and paperwork differ as much as headline rate.
  - Filter by type to match appetite, then compare actual product terms.
  - Compare APR, fees, and conditions — not the logo category alone.

---

### Rate (floating vs fixed) — filter

- **Core meaning:** Whether interest moves with a benchmark or stays fixed (fully or for a period).
- **How Indian lenders typically use it:** Most new retail home loans are **floating**, often external-benchmark linked at banks since Oct 2019. Pure lifelong fixed is uncommon; hybrids (“fixed for N years then float”) exist. Floating individual non-business loans: **no** foreclosure/prepayment charges under RBI instructions (restated in 2025 Directions from Jan 2026). Fixed may allow foreclosure charges per MITC. Reset: RBI requires communication and borrower options (EMI up, tenor up, or mix); fixed-switch availability is **policy-dependent** after later amendments.
- **Related facts & metadata:** Switch floating↔fixed can attract disclosed conversion fees. Compare “from” rates are not personal quotes.
- **Exceptions / gotchas:** Marketing “fixed” that resets after 2–3 years. EMI held while tenor elongates silently (now constrained by communication rules).
- **Common myths or low-value lines to avoid:** “Floating always cheaper forever.” “Fixed never changes” when product is hybrid. “RBI sets your rate.”
- **Confidence:** High.  
  **Sources:** [EBLR circular](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11677); [EMI reset](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12529&Mode=0); [Foreclosure 2019](https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=11646&Mode=0); [Pre-payment Directions 2025](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12878&Mode=0).
- **UX writer ammo:**
  - Floating moves when the benchmark moves — EMI or tenure can change.
  - Pure lifelong fixed is uncommon; many “fixed” offers are time-boxed.
  - Floating individual home loans generally allow prepayment without penalty.
  - Fixed may cost more up front and may restrict cheap exit — read MITC/KFS.
  - Borrowers get reset communication and choices under RBI rules.
  - Filter rate type changes which products appear — not your day-one quote.
  - Final rate lives in sanction / KFS, not the filter label.

---

### Facility (term vs overdraft)

- **Core meaning:** **Term loan:** classic amortising home loan with EMI schedule. **Overdraft (OD) home loan:** limit structured like OD; interest on utilised/net balance; surplus parking possible.
- **How Indian lenders typically use it:** Term is default. OD variants (SBI MaxGain, ICICI Home Overdraft, peers’ “saver” products) usually price at a **premium** over term. Not every lender offers OD housing.
- **Related facts & metadata:** Tax follows interest actually charged — OD path differs. Discipline required: parking helps only if funds stay. Minimum loan sizes often apply (product-specific).
- **Exceptions / gotchas:** Confusing primary MaxGain-style OD with top-up OD or MSME property OD.
- **Common myths or low-value lines to avoid:** “OD always saves vs term” without surplus behaviour and rate premium.
- **Confidence:** High for product mechanics at major banks; Medium for catalogue completeness.  
  **Sources:** [ICICI Home OD FAQs](https://www.icici.bank.in/personal-banking/loans/home-loan/home-overdraft/home-overdraft-faqs); SBI MaxGain rate sheets / FAQ mentions.
- **UX writer ammo:**
  - Term loan = scheduled EMIs on reducing principal.
  - OD facility = home loan with surplus parking that can cut interest on net use.
  - OD usually costs a higher headline rate than the same bank’s term loan.
  - Savings appear only if you actually park surplus often.
  - Not all lenders offer OD home loans.
  - Filter facility separates classic EMI products from OD-style ones.
  - Choose on cash-flow habit, not on the product name alone.

---

### Overdraft

- **Core meaning:** Housing finance as an overdraft: park surplus in the OD account; interest charged on **net utilised / book balance** (often daily); withdraw surplus later (unlike hard prepayment).
- **How Indian lenders typically use it:** Flagship example **SBI MaxGain**; peers market similar structures (availability changes — verify live). Interest on net outstanding after surplus; liquidity retained. Still full mortgage underwrite (FOIR, LTV, title).
- **Related facts & metadata:** Optional credit life still separate. Tax certificates reflect interest charged. Poor fit if no surplus or if treated as revolving consumer credit. ICICI: interest on daily utilised amount; no classic fixed EMI in some OD structures — product designs differ (dropline vs EMI hybrid).
- **Exceptions / gotchas:** FD “super saver” OD is **not** a home loan. Announced products may not ship — confirm catalogue.
- **Common myths or low-value lines to avoid:** Guaranteed lifetime interest savings. Equating any property OD with MaxGain.
- **Confidence:** High for SBI/ICICI mechanics; Medium for other banks’ current menus.  
  **Sources:** [ICICI Home OD FAQs](https://www.icici.bank.in/personal-banking/loans/home-loan/home-overdraft/home-overdraft-faqs); SBI MaxGain materials.
- **UX writer ammo:**
  - MaxGain-style OD lets idle money reduce the balance that earns interest.
  - You can usually withdraw parked surplus — unlike a normal prepayment.
  - Expect a slightly higher rate than that bank’s plain term home loan.
  - Works best if income is lumpy or savings sit idle anyway.
  - It is still a full home-loan underwrite — not a soft loan.
  - Top-up OD products are different from a MaxGain primary home loan.
  - Filter “overdraft” only against lenders that sell this structure today.

---

# Part B — Table column tips

### Rate

- **Core meaning:** Annualised interest rate shown for the product row — often a headline / “from” / illustrative rate.
- **How Indian lenders typically use it:** Pricing = benchmark (for floating) + spread by credit, LTV, product, relationship. Not set by RBI as a customer rate.
- **Related facts & metadata:** Rate ≠ APR (fees raise effective cost). KFS discloses APR and charges. Cards go stale; floating resets with benchmark.
- **Exceptions / gotchas:** Same bank, different rates by profile. Legacy MCLR books exist for older loans.
- **Common myths or low-value lines to avoid:** “Lowest published rate is yours.” “RBI sets your home loan rate.”
- **Confidence:** High (framework); Medium (any specific published %).  
  **Sources:** EBLR circular; KFS circular; bank rate pages.
- **UX writer ammo:**
  - Headline rate is a starting signal, not a personal quote.
  - Floating moves with benchmark + lender spread.
  - Compare all-in cost / APR in KFS when available, not rate alone.
  - Same bank can quote different rates by profile and product.
  - Rate cards change; treat page rates as time-stamped.
  - Fixed vs floating is a product choice, not a free upgrade.
  - Final rate lives in sanction / KFS, not the compare cell.

---

### Loan amount

- **Core meaning:** Principal the lender may disburse — capped by eligibility and LTV.
- **How Indian lenders typically use it:** Lower of income path and LTV path; staged for under-construction.
- **Related facts & metadata:** Stamp/reg usually outside loan. Co-applicant can raise income path, not erase LTV. Compare amount is illustrative.
- **Exceptions / gotchas:** Valuation cuts amount vs agreement. BT/top-up rules differ.
- **Common myths or low-value lines to avoid:** “Bank funds 100% including stamp.” “Calculator = sanction.”
- **Confidence:** High.  
  **Sources:** RBI LTV + stamp rules; Housing FAQ.
- **UX writer ammo:**
  - Loan size is limited by income capacity and LTV, not wish-list price.
  - Stamp/registration usually extra cash (small-value exception aside).
  - Under-construction money often releases in stages.
  - Co-applicant can raise eligibility; it does not remove LTV.
  - Valuation can cut the loan vs agreement value.
  - Online max figures are illustrative filters.
  - Only sanction confirms the amount you can take.

---

### Tenure (yrs)

- **Core meaning:** Scheduled repayment period shown for that row / assumption.
- **How Indian lenders typically use it:** Within product max and age-at-maturity; floating resets can change remaining tenor.
- **Related facts & metadata:** Longer tenure → lower EMI, more interest. Compare often fixes tenure for apples-to-apples EMI.
- **Exceptions / gotchas:** Age caps; rate hikes push tenor toward limits.
- **Common myths or low-value lines to avoid:** “30 years is a right.” “Tenure never changes on floating.”
- **Confidence:** High.  
  **Sources:** EMI reset circular; lender MITC.
- **UX writer ammo:**
  - Tenure is schedule length, not a guarantee of unchanged EMI.
  - Floating resets may trade EMI vs years.
  - Age-at-maturity often caps how long you can stretch.
  - Longer tenure = lower EMI, usually more total interest.
  - Prepayment can shorten tenure if you keep EMI.
  - Compare tools often fix a default tenure for fair EMI comparison.
  - Sanction + schedule is the real tenure clock.

---

### EMI

- **Core meaning:** Equated Monthly Instalment — interest + principal under the amortisation schedule at the contracted rate.
- **How Indian lenders typically use it:** Solved from principal, rate, tenure. Floating: EMI and/or tenure may adjust on reset. Pre-EMI during construction differs from full EMI.
- **Related facts & metadata:** Compare EMI is a calculator output from tool inputs — not a bank quote. KFS includes schedule.
- **Exceptions / gotchas:** OD / flexi products change payment shape. Bounce fees do not redefine EMI.
- **Common myths or low-value lines to avoid:** “EMI never changes on floating.” “Lower EMI means cheaper loan.”
- **Confidence:** High.  
  **Sources:** EMI reset circular; KFS; SBI EMI FAQ.
- **UX writer ammo:**
  - EMI is the monthly bill, not total cost.
  - It is solved from amount + rate + tenure.
  - Floating loans can move EMI, tenure, or both after resets.
  - Compare EMI assumes the tool’s inputs — change inputs, change EMI.
  - Construction-stage interest may differ from full EMI.
  - Affordability uses EMI vs income, not rate alone.
  - Final EMI is on the repayment schedule, not the table cell.

---

### Processing fees

- **Core meaning:** One-time lender fee for processing/appraising the application (names vary: processing / login / admin).
- **How Indian lenders typically use it:** Often % of loan with min/max; frequently **non-refundable** if declined or withdrawn; GST often extra. Waivers common in promotions. RBI does not set a uniform %. Must be disclosed (KFS/sanction/tariff).
- **Related facts & metadata:** Separate from legal/valuation. “Zero processing” govt schemes often still leave other costs.
- **Exceptions / gotchas:** Partial collect upfront, balance at disbursement — bank-specific.
- **Common myths or low-value lines to avoid:** “Processing fee is illegal.” “Zero processing = free loan.”
- **Confidence:** High (nature/disclosure); Medium (any specific %).  
  **Sources:** KFS circular; Axis/ICICI/HDFC charges pages; SBI Privilege zero-processing marketing (with exclusions).
- **UX writer ammo:**
  - One-time application/appraisal cost, not interest.
  - Often a % with floors/caps; GST may sit on top.
  - Frequently non-refundable if you drop or are declined.
  - Separate from property legal/valuation costs.
  - Published “up to” is a ceiling, not your negotiated fee.
  - Must appear in KFS / sanction to be chargeable as an RE fee.
  - Waivers are promotions — check what still remains payable.

---

### Property check charges

- **Core meaning:** Costs of the lender’s due diligence — legal title scrutiny, technical assessment, valuation (sometimes itemised).
- **How Indian lenders typically use it:** Empaneled advocates/valuers; borrower pays **actuals** or schedule (HDFC: external opinion often payable on actuals, sometimes direct to professional). For the **bank’s** risk decision.
- **Related facts & metadata:** Compare averages are estimates. Customer’s own prior lawyer/valuer report usually **does not replace** bank empaneled check (**strong practice**; not found as a single RBI circular). CERSAI is separate registry fee.
- **Exceptions / gotchas:** Resale/self-construction often costlier. Multiple valuations possible.
- **Common myths or low-value lines to avoid:** “I already have a title opinion, so optional.” “This is a government fee.”
- **Confidence:** High (purpose + actuals practice); Medium (any ₹).  
  **Sources:** [HDFC documents & charges](https://homeloans.hdfc.bank.in/checklist/documents-charges); bank MITCs; KFS disclosure.
- **UX writer ammo:**
  - Pays for the bank’s title and value checks — not a government stamp.
  - Legal, title search, and valuation may be itemised separately.
  - Often billed at actuals to empaneled professionals.
  - Your own prior report usually does not replace the bank’s check.
  - Cost scales with property complexity and location.
  - Compare totals may be illustrative averages.
  - Confirm whether fee goes to bank or direct to advocate/valuer.

---

### Govt. charges

- **Core meaning:** Statutory costs — chiefly **stamp duty**, **registration**, related state levies (MOD/MOE where applicable). **Not** a bank service fee.
- **How Indian lenders typically use it:** Customer-borne to state/registration authorities; listed as statutory. Compare tools estimate by state + value. RBI LTV generally excludes these from housing cost (≤ ₹10 lakh exception).
- **Related facts & metadata:** Rates are largely a **state** matter; gender/metro concessions vary. CERSAI is small vs stamp — don’t conflate.
- **Exceptions / gotchas:** Sale deed stamp ≠ always same as mortgage stamp. First-home state schemes vary — do not invent.
- **Common myths or low-value lines to avoid:** “Bank charges stamp duty.” “Same % everywhere in India.” “Loan includes stamp automatically.”
- **Confidence:** High (state subject + not bank fee); Medium (any tool ₹ estimate).  
  **Sources:** RBI stamp-out-of-LTV rules; Constitution Seventh Schedule competence; HDFC statutory charges wording; RBI Housing FAQ reminder to budget stamp/registration.
- **UX writer ammo:**
  - These are state taxes/fees for the deed/mortgage — not bank profit.
  - Vary by state and deal type; no single India rate.
  - Usually cash outside the loan (LTV rules reinforce this).
  - Sale deed stamp ≠ always the same as mortgage costs.
  - Compare “govt charges” are location estimates.
  - Confirm on state stamp/registration guidance for that property.
  - CERSAI is a small registry item — don’t conflate with stamp duty.

---

### Prepayment fees

- **Core meaning:** Charges (if any) for paying early in part or full (foreclosure / part-prepayment).
- **How Indian lenders typically use it:** **Floating + individual + non-business:** **no** foreclosure/prepayment penalty (RBI 2012/2014/2019; restated in 2025 Directions for loans from 1 Jan 2026). **Fixed:** lenders commonly **may** levy per MITC. Dual/special rate: 2025 Directions look at whether the loan is on floating **at the time of** prepayment.
- **Related facts & metadata:** Applies with or without co-obligants (2019 clarification). Disclosure required. Admin fees sometimes confused with “prepayment penalty.”
- **Exceptions / gotchas:** Business-purpose loans can differ. Fixed “own funds only” conditions appear on some products — check docs.
- **Common myths or low-value lines to avoid:** “All home loans have 2–4% foreclosure.” “Floating still has lock-in penalties.”
- **Confidence:** High.  
  **Sources:** RBI foreclosure circulars 2012/2019; NBFC twin; Pre-payment Charges Directions 2025; Axis/ICICI public floating-vs-fixed statements.
- **UX writer ammo:**
  - Floating + individual + non-business: regulator says no prepayment charge.
  - Fixed: charges may still apply — read MITC/KFS.
  - Part-pay and full foreclosure are both “prepayment” in RBI framing.
  - Dual-rate: look at whether you’re floating on that day.
  - 2025 Directions apply to loans sanctioned/renewed from 1 Jan 2026.
  - Undisclosed prepayment fees should not be levied.
  - Compare “NIL” must be tied to floating, not all products.

---

### Rate change charges

- **Core meaning:** Fees for **borrower-initiated** switch of rate type/scheme (floating↔fixed, or to another floating slab) — distinct from automatic benchmark reset.
- **How Indian lenders typically use it:** Conversion / ROI switch fees (flat or % of outstanding) per tariff. Automatic EBLR transmission is usually **not** a conversion fee.
- **Related facts & metadata:** RBI EMI-reset circular: disclose switch/incidental charges. Fixed-option at reset is **policy-dependent** (wording softened in later amendments — do not claim a universal free fixed switch). Switch count may be capped.
- **Exceptions / gotchas:** Conflating reset with refinance or conversion.
- **Common myths or low-value lines to avoid:** “Every floating borrower can force a free switch to fixed.” “Repo cut needs a paid conversion.”
- **Confidence:** High (disclosure duty); Medium (whether fixed option is obligatory).  
  **Sources:** [EMI reset circular](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12529&Mode=0); bank tariff examples (Axis etc.).
- **UX writer ammo:**
  - Automatic floating reset ≠ a conversion product switch.
  - Floating↔fixed switches can carry a listed fee.
  - Fees must be in sanction / tariff; ask before switching.
  - Fixed-rate option at reset depends on lender policy.
  - Moving to a “lower floating scheme” may also cost admin fees.
  - Allowed switches can be capped.
  - Compare cells need the trigger named (switch vs plain reset).

---

### Overdue charges

- **Core meaning:** Extra charges when material terms are breached — most commonly delayed EMI — framed as **penal charges**, not an add-on “penal interest” glued into ROI.
- **How Indian lenders typically use it:** Board-approved schedules (% on overdue amount for overdue period, or tables). Must be reasonable, disclosed in agreement/MITC/KFS/website; communicated on levy. Individuals for non-business purposes must not be charged **higher** than non-individuals for similar breaches.
- **Related facts & metadata:** RBI (Aug 2023 / effective Apr 2024): treat as penal charges; **no capitalisation** (no interest-on-penal-charges); not meant as revenue tool. Normal interest compounding on unpaid EMI under contract continues — different from capitalising the penal charge itself.
- **Exceptions / gotchas:** Credit cards carved out of this circular. Bounce fees may be scheduled separately.
- **Common myths or low-value lines to avoid:** “Banks can still add 2% penal interest into your ROI.” Claiming a universal RBI max %.
- **Confidence:** High.  
  **Sources:** [Penal charges circular](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12527&Mode=0); [extension](https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12585&Mode=0); [RBI FAQs Id=162](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=162).
- **UX writer ammo:**
  - Overdue cost is a penal charge, not a higher loan ROI.
  - It should not itself bear further interest (no capitalisation).
  - Aimed at credit discipline, not as a profit lever (RBI intent).
  - Must be disclosed in agreement / KFS / website tariff.
  - Individuals for home use can’t be charged more harshly than similar non-individual breaches.
  - Exact quantum is lender policy, within reasonableness.
  - Separate this from cheque/NACH bounce fees where listed apart.

---

### EMI bounce charges

- **Core meaning:** Fee when the repayment instrument/mandate fails (cheque return, NACH/SI/ECS failure) — typically a **per-instance** service charge, separate from ongoing overdue/penal charges.
- **How Indian lenders typically use it:** Flat ₹ + GST per bounce in home-loan or general schedule of charges. May stack with overdue penal charges if EMI stays unpaid. Amounts differ widely by bank and channel.
- **Related facts & metadata:** No RBI-fixed “home loan bounce = ₹X.” Reasonableness/transparency under fair practices. Technical returns where customer not at fault may be treated differently (reflected in some bank schedules). Bounce ≠ automatic NPA by itself (classification follows overdue-days rules — don’t overclaim).
- **Exceptions / gotchas:** Multiple retries → multiple fees. Cheque vs auto-debit may use different tariff lines.
- **Common myths or low-value lines to avoid:** “RBI fixed bounce at ₹500.” Equating bounce fee with the whole overdue framework.
- **Confidence:** Medium (structure); Low–Medium (any specific ₹ without live MITC).  
  **Sources:** Axis/HDFC/SBI service-charge schedules; penal framework for stacking context.
- **UX writer ammo:**
  - Charged when the payment instruction fails, per attempt/instance.
  - Usually a flat fee + tax, not a % of loan.
  - Can apply together with overdue penal charges if EMI stays unpaid.
  - Technical fails where customer isn’t at fault may be treated differently.
  - Cheque vs auto-debit may use different tariff lines.
  - Numbers are bank-schedule specific and change.
  - Stopping the bounce means fixing mandate/balance — fee is a symptom cost.

---

## Writer hygiene checklist

| Do | Don’t |
| --- | --- |
| Separate **regulation** vs **common practice** vs **this bank’s MITC** | Present one bank’s habit as India-wide law |
| Mark compare figures as **estimates / filters** | Imply sanction, rate, or savings are assured |
| Cover co-borrower credit / docs / future borrowing / insurance when the field touches people | Invent gates (“only add co-applicant if…”) |
| Prefer RBI / CIBIL / Income Tax / bank primary pages | Paste aggregator “₹X salary → ₹Y loan” maths |
| Note floating vs fixed for prepayment and exit | Say “all home loans have foreclosure charges” |
| Note stamp/registration are **state**, not bank fees | Call stamp duty a processing fee |

---

## Known gaps / Low confidence callouts (do not overclaim)

1. **Exact card-limit % in FOIR** — widespread practice, **not** an RBI formula; Shroffin’s % is a user estimate.
2. **Friends as co-applicant** — strongly refused in market practice; not a single pan-India RBI prohibition text found in this pass.
3. **Customer’s own valuation rejected** — strong bank practice; not located as a standalone RBI circular.
4. **Bounce fee rupee amounts** — always open live MITC; never hardcode a universal ₹.
5. **Income Tax joint-loan splits** — ownership + repayment share rules are well-established in practice; regime (old vs new) and facts matter — writers should not give personal tax advice.
6. **CIBIL.com fetches** — Cloudflare blocked automated fetches during this research; consumer pages cited from search snippets + known official URLs — writers should spot-check live CIBIL pages before publish.

---

*End of research briefs. Feed UX writing; do not ship this file as customer-facing copy.*
