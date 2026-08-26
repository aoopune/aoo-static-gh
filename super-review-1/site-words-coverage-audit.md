# Site-words full coverage audit (strict leftover text)

Method: strip all `{{SW:…}}` markers from body HTML, then see what **English/Hindi words remain**.
Also check: dropdown `data-face` and `placeholder` attrs are 100% marked or not.

**Not in this HTML audit:** Explore Banks / Project Finder **JS runtime** strings (co-applicant dropdowns, table fees, empty states) — listed at end.

## about

### about — BODY GAPS (2 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/about.html`
  - `tag:p`: leftover “were India’s traditional indigenous bankers and money changers They mark a real turn in the country’s financial history ”
  - `tag:p`: leftover “Read more about Shroffs”

## common

### chrome — BODY GAPS (35 leftover strings)
  - `attr:aria-label`: leftover “Shroffin”
  - `attr:aria-label`: leftover “Color theme”
  - `attr:aria-label`: leftover “Default”
  - `attr:aria-label`: leftover “Light”
  - `attr:aria-label`: leftover “Dark”
  - `attr:aria-label`: leftover “Official resources”
  - `attr:aria-label`: leftover “Get help”
  - `attr:alt`: leftover “Shroffin”
  - `tag:li`: leftover “Compare”
  - `tag:li`: leftover “Overview”
  - `tag:li`: leftover “Schemes”
  - `tag:li`: leftover “FAQ”
  - `tag:li`: leftover “Documents”
  - `tag:li`: leftover “About”
  - `tag:li`: leftover “Education”
  - `tag:h2`: leftover “Disclaimer”
  - `tag:p`: leftover “Shroffin is not a bank a Non Banking Financial Company NBFC or a lender We do not approve sanction underwrite or disburs”
  - `tag:p`: leftover “Even so we try our best for you We show each lender s home loan clearly one next to the other”
  - `tag:summary`: leftover “Read the full disclaimer”
  - `tag:p`: leftover “We take each lender s terms and check them with that lender Then we put the home loans next to each other so you can com”
  - `tag:p`: leftover “The rates and rules we show can change The ones the lender gives you can be different That still depends on your credit ”
  - `tag:p`: leftover “Seeing a lender does not mean they will lend to you We cannot make a lender say yes or take back a no When they answer w”
  - `tag:p`: leftover “If you take the loan the agreement is with the lender not with us We do not become your lender Read the sanction letter ”
  - `tag:p`: leftover “Copyright © Shroffin All rights reserved”
  - `tag:li`: leftover “Reserve Bank of India opens official RBI page”
  - `tag:li`: leftover “National Housing Bank opens official NHB page”
  - `tag:li`: leftover “IRDAI opens official IRDAI page”
  - `tag:li`: leftover “National Consumer Helpline opens official National Consumer Helpline page”
  - `tag:li`: leftover “Income Tax Department opens official Income Tax Department page”
  - `tag:li`: leftover “Tax benefits”
  - … +5 more

## company

### legal-privacy-policy — BODY GAPS (6 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/privacy-policy.html`
  - `tag:td`: leftover “shroffin com”
  - `tag:p`: leftover “When you visit shroffin com hosting and security providers may process technical data such as IP address browser and dev”
  - `tag:p`: leftover “You may withdraw consent for consent based processing by emailing us see Withdrawal does not affect processing already c”
  - `tag:th`: leftover “Why”
  - `tag:p`: leftover “You can ask us what we hold about you see”
  - `tag:p`: leftover “Email with the subject line Privacy request and include enough detail for us to find your records We may need to verify ”

### legal-terms-of-use — BODY GAPS (18 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/terms-of-use.html`
  - `tag:p`: leftover “These Terms of Use are a legally binding agreement between you and Shroffin for your use of shroffin com and our compari”
  - `tag:td`: leftover “shroffin com”
  - `tag:p`: leftover “These Terms are written for users in India We do not intentionally offer the Services as a product for people outside In”
  - `tag:li`: leftover “continue using the Services after we post an update to these Terms see”
  - `tag:li`: leftover “charge you a fee for using our comparison or application assistance see ;”
  - `tag:p`: leftover “Public pages made for reading may be viewed and shared by ordinary personal linking Mass automated harvesting is not all”
  - `tag:p`: leftover “If you believe content on the Services infringes your intellectual property rights contact us at the grievance details i”
  - `tag:p`: leftover “If you send ideas or suggestions about improving Shroffin Feedback you agree we may use Feedback without obligation to p”
  - `tag:p`: leftover “Our explains how we collect use share and protect personal data in India It forms part of your agreement with us by refe”
  - `tag:p`: leftover “By asking us for application assistance you also agree that we may process and share data as needed for that assistance ”
  - `tag:li`: leftover “These Terms together with the Privacy Policy and any product specific notices you accept for a particular flow are the e”
  - `tag:li`: leftover “If any clause is held unenforceable the rest remains in effect and the invalid clause will be modified to the minimum ex”
  - `tag:li`: leftover “If we do not enforce a right once we may still enforce it later”
  - `tag:li`: leftover “You may not assign these Terms without our consent We may assign them to a successor entity for example after transfer o”
  - `tag:li`: leftover “We are not liable for delay or failure caused by events beyond reasonable control including natural disasters war epidem”
  - `tag:li`: leftover “These Terms are in English If we publish a translation the English version controls unless Indian law requires otherwise”
  - `tag:li`: leftover “Nothing in these Terms creates a partnership joint venture employment or agency relationship that makes us your attorney”
  - `tag:li`: leftover “We may give notices by posting on shroffin com or by email phone you provided You may give notices to”

### sitemap — BODY GAPS (2 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/sitemap.html`
  - `tag:li`: leftover “EMI”
  - `tag:li`: leftover “Message us”

## explore

### explore-banks — BODY GAPS (3 leftover strings) · data-face: **UNMARKED** · placeholders: **UNMARKED**
- Live page: `/pages/explore-banks.html`
  - `tag:label`: leftover “Age”
  - `tag:h2`: leftover “Co applicant details”
  - `tag:label`: leftover “Overdraft”

### apply — BODY COMPLETE (0 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/apply.html`
- No leftover customer words in body after markers (dropdown faces/placeholders included where present).

### apply-contact — BODY GAPS (2 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/apply-contact.html`
  - `tag:p`: leftover “Applying to”
  - `tag:label`: leftover “See and”

## guide

### guide-overview — BODY GAPS (21 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/guide.html`
  - `tag:h1`: leftover “The essentials before you choose a lender”
  - `tag:li`: leftover “EMI”
  - `tag:p`: leftover “Tip An earning co applicant can raise the loan amount”
  - `tag:button`: leftover “Estimate your loan amount”
  - `tag:li`: leftover “By Agreement Value —”
  - `tag:li`: leftover “By income —”
  - `tag:button`: leftover “Close”
  - `tag:p`: leftover “Tip Some lenders let you pay more than interest during construction Ask if that option exists”
  - `tag:button`: leftover “Estimate your EMI”
  - `tag:li`: leftover “Total payable —”
  - `tag:li`: leftover “Total interest payment —”
  - `tag:a`: leftover “Estimate your tenure”
  - `tag:button`: leftover “Floating”
  - `tag:li`: leftover “Under RBI guidelines banks cannot charge any penalty for prepaying or closing a floating rate home loan early”
  - `tag:button`: leftover “See rate options after sanction”
  - `tag:button`: leftover “Term loan”
  - `tag:button`: leftover “See rules after you choose a structure”
  - `tag:button`: leftover “Fee breakdown”
  - `tag:li`: leftover “Processing fee”
  - `tag:p`: leftover “* Excluding GST # Only in Maharashtra Differs from state to state as per state laws Figures above are typical industry a”
  - `tag:a`: leftover “Find banks that already approve your project”

### guide-documents — BODY GAPS (3 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/guide-documents.html`
  - `tag:h1`: leftover “Prepare once Apply everywhere”
  - `tag:li`: leftover “KYC”
  - `tag:p`: leftover “Filing several years together just before applying can look like income made for the loan”

### guide-tax-benefits — BODY GAPS (17 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/tax-benefits.html`
  - `tag:h1`: leftover “Your home loan EMI has tax benefits”
  - `tag:p`: leftover “Yes your limit depends on who lives in the home and on the tax regime Section ITA”
  - `tag:li`: leftover “If either is missing only a year”
  - `tag:p`: leftover “Yes only under the old tax regime Schedule XV ITA”
  - `tag:p`: leftover “Income from house property”
  - `tag:p`: leftover “a deduction from total income”
  - `tag:a`: leftover “See tax claims calculator”
  - `tag:summary`: leftover “Stamp duty and registration property purchase only”
  - `tag:p`: leftover “Not loan costs”
  - `tag:summary`: leftover “Home loan protection insurance”
  - `tag:summary`: leftover “House property loss old tax regime”
  - `tag:p`: leftover “The rest can be carried forward”
  - `tag:summary`: leftover “House property loss new tax regime”
  - `tag:p`: leftover “Interest on a rented home can still reduce rental income”
  - `tag:summary`: leftover “Loan for a plot only no house yet”
  - `tag:summary`: leftover “Older first home extras only if your loan year matches”
  - `tag:p`: leftover “Section covered sanctions from April to March up to extra; loan up to lakh; house up to lakh Section covered sanctions f”

### guide-concessions — BODY GAPS (22 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/concessions.html`
  - `tag:h1`: leftover “You may already pay less”
  - `tag:li`: leftover “She is usually the sole owner or the first name on the property papers”
  - `tag:p`: leftover “If your household income is up to or lakh a year this is your first home your loan is up to lakh and the house is up to ”
  - `tag:li`: leftover “No housing scheme benefit in the last years The house is usually in a woman’s name or joint with her”
  - `tag:li`: leftover “Loan up to lakh House value up to lakh Carpet area up to sqm”
  - `tag:li`: leftover “The is worked out for up to years”
  - `tag:li`: leftover “Only for loans sanctioned and disbursed on or after Sep”
  - `tag:li`: leftover “Then it goes to your bank or housing finance company”
  - `tag:li`: leftover “You do not get cash in hand”
  - `tag:li`: leftover “Loan must stay active and more than half the principal must still be outstanding when each credit lands”
  - `tag:li`: leftover “Each band had its own income and loan caps”
  - `tag:li`: leftover “Woman owner or co owner in many cases”
  - `tag:li`: leftover “Not always on your full sanction”
  - `tag:li`: leftover “You did not file a separate PMAY form for that scheme”
  - `tag:li`: leftover “Not cash in hand”
  - `tag:li`: leftover “Use this tab only if you already claimed CLSS or your old claim was in that window”
  - `tag:summary`: leftover “During a festival or campaign”
  - `tag:p`: leftover “GST may or may not be included in the waiver”
  - `tag:summary`: leftover “Salary with the same bank”
  - `tag:summary`: leftover “Offer with free legal or valuation”
  - `tag:p`: leftover “Others still charge them separately”
  - `tag:summary`: leftover “Moving your loan to another bank”

### guide-home-loan-insurance — BODY GAPS (10 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/home-loan-insurance.html`
  - `tag:h1`: leftover “Two covers often sit with the home loan”
  - `tag:a`: leftover “See property cover”
  - `tag:a`: leftover “See loan cover”
  - `tag:li`: leftover “Usually optional”
  - `tag:summary`: leftover “As per RBI insurance is voluntary Banks cannot force their insurer or tie it to the loan”
  - `tag:figcaption`: leftover “Official wording from RBI Master Directions”
  - `tag:p`: leftover “of insurance companies … by banks shall be subject to the following”
  - `tag:p`: leftover “… shall not follow any … opt for products of a or … purchase … is and is from the bank …”
  - `tag:li`: leftover “Pay it separately and you avoid that interest”
  - `tag:li`: leftover “to compare”

### guide-property-home-insurance — BODY GAPS (21 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/property-home-insurance.html`
  - `tag:h1`: leftover “See what property cover pays for”
  - `tag:p`: leftover “Until handover risk for the unfinished house usually sits with the seller or builder”
  - `tag:p`: leftover “Building is the structure”
  - `tag:p`: leftover “Theft or burglary can vary by policy”
  - `tag:p`: leftover “A drop in market value is usually not covered”
  - `tag:li`: leftover “Check the cover amount before you sign Too low and the lender may reject the policy and a claim can be scaled down by th”
  - `tag:li`: leftover “Many home policies last about years Longer brand packages exist They help only if amount perils and lender naming still ”
  - `tag:button`: leftover “GST”
  - `tag:p`: leftover “Some packs cover several years in one premium often about If your home loan runs longer plan the next renewal before cov”
  - `tag:p`: leftover “Less common than for loan cover but some offers still club a property premium into the loan”
  - `tag:p`: leftover “The bank may also flag the loan if the agreement required continuous cover with the lender named”
  - `tag:p`: leftover “It shows on your premium receipt”
  - `tag:li`: leftover “Make the property safe Keep damaged items for survey unless you must move them for safety”
  - `tag:li`: leftover “Policy number photos and any police or fire report if they apply”
  - `tag:summary`: leftover “How payout works”
  - `tag:p`: leftover “Partial damage usually pays repair cost Total loss pays up to the cover amount on your schedule”
  - `tag:summary`: leftover “If the bank is named”
  - `tag:p`: leftover “How money flows depends on your policy and that clause — especially on a total loss On partial damage many rebuild polic”
  - `tag:summary`: leftover “Building vs contents”
  - `tag:p`: leftover “Contents claims are often separate from the building”
  - `tag:p`: leftover “Contents can still pay out separately”

### guide-credit-life-insurance — BODY GAPS (24 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/credit-life-insurance.html`
  - `tag:h1`: leftover “See what loan cover pays for”
  - `tag:p`: leftover “Serious illness permanent disability or accidental death when those events are named on your policy papers”
  - `tag:p`: leftover “Illness before the waiting period ends Claims in the first year often pay less than the full amount”
  - `tag:p`: leftover “Already have term insurance?”
  - `tag:li`: leftover “A mismatch means no cover”
  - `tag:li`: leftover “A few plans renew every year instead That is not the same as cover matched to the full loan”
  - `tag:p`: leftover “While the house is being built cover often stays flat until EMIs begin”
  - `tag:p`: leftover “Some plans take yearly or monthly payments instead”
  - `tag:p`: leftover “The premium is added to the loan principal and repaid through instalments Needs clear consent Buying stays voluntary”
  - `tag:p`: leftover “Premium is paid to the insurer directly The bank may ask to be named on the policy That is assignment”
  - `tag:p`: leftover “Confirm the days the refund path and where the money returns if the premium sat inside the loan”
  - `tag:h3`: leftover “Tax”
  - `tag:p`: leftover “When the premium is borrowed and repaid through instalments that path often does not qualify Keep the receipt”
  - `tag:h3`: leftover “GST”
  - `tag:p`: leftover “Individual life cover premiums are currently exempt from GST Confirm what shows on your premium receipt”
  - `tag:figcaption`: leftover “Unlike a term plan the family is not first in line”
  - `tag:p`: leftover “Some plans track the live loan balance only if that certificate says so”
  - `tag:p`: leftover “The nominee or the bank submits the papers”
  - `tag:p`: leftover “This cover often cannot come with you and you may get only some of the premium back — some plans return nothing Any refu”
  - `tag:li`: leftover “Paid outside the loan”
  - `tag:li`: leftover “Can outlast the loan”
  - `tag:li`: leftover “They can clear the loan and keep the rest”
  - `tag:li`: leftover “Often a single premium”
  - `tag:li`: leftover “May return only part of the premium”

### guide-complaints — BODY GAPS (9 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/home-loan-complaints.html`
  - `tag:h1`: leftover “Your home loan issue has a fair path”
  - `tag:button`: leftover “Who to escalate to inside the lender”
  - `tag:button`: leftover “Close”
  - `tag:button`: leftover “RBI”
  - `tag:button`: leftover “NHB”
  - `tag:p`: leftover “cms rbi org in”
  - `tag:p`: leftover “grids nhbonline org in”
  - `tag:p`: leftover “consumerhelpline gov in”
  - `tag:p`: leftover “pgportal gov in”

## home

### home — BODY GAPS (7 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/`
  - `tag:h1`: leftover “A way to choose”
  - `tag:span`: leftover “shroffin com”
  - `tag:h2`: leftover “now”
  - `tag:p`: leftover “You can look through all of it surrendering your phone number or email”
  - `tag:h2`: leftover “from us”
  - `tag:span`: leftover “now”
  - `tag:h2`: leftover “Now”

## tools

### project-approvals — BODY GAPS (1 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/project-approvals.html`
  - `tag:h2`: leftover “Find banks for projects in”

### calculators — BODY GAPS (2 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators.html`
  - `tag:li`: leftover “Pay”
  - `tag:li`: leftover “Tax”

### calculators-emi — BODY GAPS (5 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators/emi.html`
  - `tag:button`: leftover “Amortisation schedule”
  - `tag:p`: leftover “EMI = P × r × r n ÷ r n −”
  - `tag:li`: leftover “P — loan amount”
  - `tag:li`: leftover “r — monthly rate = annual rate ÷ ÷”
  - `tag:li`: leftover “n — tenure in months = years ×”

### calculators-how-much-loan — BODY GAPS (4 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators/how-much-loan.html`
  - `tag:p`: leftover “FOIR is Fixed Obligation to Income Ratio About of credit card limits counts as a monthly load Same rules as”
  - `tag:label`: leftover “No”
  - `tag:label`: leftover “Yes”
  - `tag:li`: leftover “EMI”

### calculators-loan-amount — BODY GAPS (5 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators/loan-amount.html`
  - `tag:li`: leftover “P — estimated loan amount”
  - `tag:li`: leftover “E — Equated Monthly Instalment EMI you can pay”
  - `tag:li`: leftover “r — monthly rate = annual rate ÷ ÷”
  - `tag:li`: leftover “n — tenure in months = years ×”
  - `tag:li`: leftover “EMI”

### calculators-prepayment — BODY GAPS (3 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators/prepayment.html`
  - `tag:li`: leftover “— repay faster on the lower balance tenure shortens”
  - `tag:li`: leftover “— rebuild EMI on the lower balance for the same years”
  - `tag:li`: leftover “EMI”

### calculators-balance-transfer — BODY GAPS (1 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators/balance-transfer.html`
  - `tag:li`: leftover “EMI”

### calculators-tenure — BODY GAPS (5 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators/tenure.html`
  - `tag:li`: leftover “n — tenure in months”
  - `tag:li`: leftover “E — Equated Monthly Instalment EMI”
  - `tag:li`: leftover “P — loan amount”
  - `tag:li`: leftover “r — monthly rate = annual rate ÷ ÷”
  - `tag:li`: leftover “EMI”

### calculators-tax-savings — BODY GAPS (16 leftover strings) · data-face: all marked · placeholders: all marked
- Live page: `/pages/calculators/tax-savings.html`
  - `tag:label`: leftover “Old”
  - `tag:label`: leftover “New”
  - `tag:label`: leftover “Yes”
  - `tag:label`: leftover “No”
  - `tag:p`: leftover “If no the Section interest limit drops to a year See”
  - `tag:p`: leftover “Shares a lakh basket with EPF life insurance and other eligible items See”
  - `tag:p`: leftover “Rules follow the on this site”
  - `tag:li`: leftover “New tax regime slabs FY nil up to lakh; on lakh; on lakh; on lakh; on lakh; on lakh; above lakh Section A rebate up to w”
  - `tag:li`: leftover “Interest payment is modelled under Section Self occupied old tax regime allows up to lakh a year when the loan is to buy”
  - `tag:li`: leftover “Let out interest has no fixed upper cap under Section On the new tax regime let out interest can reduce house property i”
  - `tag:li`: leftover “Self occupied interest cannot be claimed on the new tax regime See”
  - `tag:li`: leftover “Principal repayment is modelled under Schedule XV on the old tax regime only up to lakh a year in a shared basket Same w”
  - `tag:li`: leftover “Year figures assume possession has already happened Pre possession interest claimed in equal parts is not modelled here ”
  - `tag:li`: leftover “Extra first time buyer interest under Section or Section is not added Those windows are narrow and closed for loans sanc”
  - `tag:li`: leftover “Your name must be on the property papers to claim Being on the loan alone is not enough See and”
  - `tag:li`: leftover “EMI”

## Hidden / runtime UI outside page words files

### Explore Banks (`src/home-loan-compare.js`)
Not covered by `pages/explore/explore.words.md`. Includes things like:
- Co-applicant relationship dropdown: Spouse, Father, Mother, Son, Daughter, Brother, Sister, Someone else
- Co-applicant occupation: Salaried, Self-employed, Pensioner, Not earning
- Table / charges section titles: Processing fees, Prepayment fees, EMI bounce charges, etc.
- Empty / error / loading messages built in JS

### Project Bank Finder (`src/apf-project-search.js`)
Not covered by project-finder words file. Includes: Find banks, empty states, error messages.

### Apply success / payment modals (`js/apply-flow.js`)
“Application submitted / payment successful” style copy lives in JS modal — no separate explore/submitted words file yet.

## Bottom line

- Page bodies with **no leftover words**: **1**
- Page bodies still with **leftover words**: **25**
- Explore **static** dropdown faces in HTML (`data-face`) are marked; **JS-built** dropdowns are not.
- Chrome footer disclaimer / education leftovers / theme aria still partly outside chrome words.
