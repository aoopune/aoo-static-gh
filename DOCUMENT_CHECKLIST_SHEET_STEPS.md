# Document Checklist – How to Edit the Google Sheet

The **Standardised Document list** on the Document Checklist page is driven by the **Document_Checklist** sheet. You can add or change headings, sub-headings, and document items **without changing any code** by editing the sheet.

---

## Sheet structure

| Column        | Purpose | Required |
|---------------|--------|----------|
| **category**  | Main heading (e.g. "KYC Documents", "Academic & Work Experience Documents") | Yes |
| **subcategory** | Sub-heading under that category (e.g. "Identity Proof of Applicant & Co-applicant") | Yes (can leave empty for a single list) |
| **item**      | One document name per row (e.g. "Voter ID card", "Aadhaar Card / Aadhaar enrolment number*") | Yes for document rows |
| **mandatory** | Optional badge text (e.g. "*", "mandatory") – shown next to the item | No |
| **heading_note** | Optional note shown next to the main heading (e.g. "*mandatory") – use on **one row per category** (e.g. first row of that category) | No |

- **Order**: The order of **headings** and **sub-headings** on the page follows the **order of rows** in the sheet. First time a category appears = its position; first time a subcategory appears under that category = its position.
- **Empty category**: Rows with empty `category` are **skipped** (no "Other" section). Only rows with a non-empty category appear.
- **Empty item**: Rows with empty `item` are ignored for the list; use them only if you need to set `heading_note` for that category.

---

## Behaviour on the page

- Each **main heading** (category) is a **dropdown**: user clicks to expand and see content. **All sections start closed**; user opens only what they need.
- Under each heading, **sub-headings** (subcategories) are also **dropdowns**, and they too **start closed**.
- To add a new heading, sub-heading, or document: **add a new row** in the sheet with the right category/subcategory/item. No code change needed.

---

## Full list to paste into the sheet

Use the first row for headers: `category`, `subcategory`, `item`, `mandatory`, `heading_note`.

Then add rows as below. Order of rows = order on the page.

### 1. KYC Documents

| category | subcategory | item | mandatory | heading_note |
|----------|-------------|------|-----------|--------------|
| KYC Documents | Identity Proof of Applicant & Co-applicant: | Voter ID card | | *mandatory |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | Driving License | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | Aadhaar Card / Aadhaar enrolment number* | * | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | Passport (mandatory for overseas education) | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | PAN Card* | * | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | MNREGA Card or Job card (Mahatma Gandhi National Rural Employment Guarantee Act) | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | Letter issued by the National Population Register containing details of name and address. | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | 2 passport size photographs (recent)* | * | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | If NRI, Form 60, Passport and Employment / Residence / Student / Dependent etc. Visa Copies, duly attested by Foreign offices, Notary Public, Indian Embassy, officers of correspondent banks whose signatures are verifiable through an authorized(A/B category Forex handling branch) branch of the Bank | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | If OCI, Overseas Citizen of India card | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | If PIO, Person of Indian Origin card / PIO Declaration | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | If Minor, ID proof from above list of the person who will be the applicant. | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | Any other Government-issued ID | | |
| KYC Documents | Identity Proof of Applicant & Co-applicant: | Letter issued by National Population Register containing details of name, address | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Aadhaar Card | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Passport | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Voter ID card | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Current house lease / rental agreement | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Property or Municipal Tax Receipt | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Utility bills (Electricity / Telephone / Post-Paid Mobile Phone / Piped Gas / Water Bill) (not more than 3 months old) | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Ration card | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Updated bank passbook or statement containing the address | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | Social insurance statements and pensioner cards | | |
| KYC Documents | Address Proof of Applicant & Co-applicant: | If NRI, OCI, PIO, Letter issued by the Foreign Embassy or Mission in India, Work/Resident Permit, Social Security Card, Green Card etc. or Letter of allotment of accommodation from employer issued by State or Central Government departments, Statutory or Regulatory Bodies, Public Sector Undertakings, Scheduled Commercial Banks, Financial Institutions and listed Companies and leave and license agreements with such employers allotting official accommodation | | |
| KYC Documents | Domicile Proof (if required): | Permanent residence certificate | | |
| KYC Documents | Domicile Proof (if required): | Certificate issued by district magistrate | | |
| KYC Documents | Domicile Proof (if required): | Gazetted affidavit (may not apply to all banks) | | |

### 2. Academic & Work Experience Documents

| category | subcategory | item | mandatory | heading_note |
|----------|-------------|------|-----------|--------------|
| Academic & Work Experience Documents | Previous Academic Records: | 10th & 12th class mark sheets/certificate | | |
| Academic & Work Experience Documents | Previous Academic Records: | Graduation degree/mark sheet | | |
| Academic & Work Experience Documents | Previous Academic Records: | Diploma or certificate course certificates | | |
| Academic & Work Experience Documents | Previous Academic Records: | Entrance exam results (e.g., CAT, GRE, GMAT, TOEFL, IELTS, JEE, NEET, CET, etc) | | |
| Academic & Work Experience Documents | Previous Academic Records: | Past scholarships or awards (if required) | | |
| Academic & Work Experience Documents | Previous Academic Records: | Gap certificate (If required) (Affidavit on ₹XXX Non-judicial stamp paper from Notary or Lawyer or Last educational institution you attended or a legal court) | | |
| Academic & Work Experience Documents | Current Academic Documents: | Admission/offer letter from the institute (Conditional offer letters are accepted) | | |
| Academic & Work Experience Documents | Current Academic Documents: | Statement of course fees / Schedule of fees payment | | |
| Academic & Work Experience Documents | Overseas Education Specific (if available): | I-20 form (USA) / CAS letter (UK) | | |
| Academic & Work Experience Documents | Overseas Education Specific (if available): | Entry permit (country-dependent) | | |
| Academic & Work Experience Documents | Overseas Education Specific (if available): | Exchange visitor/student forms (if applicable) | | |
| Academic & Work Experience Documents | Work Experience Documents (if applicable): | Experience letters | | |
| Academic & Work Experience Documents | Work Experience Documents (if applicable): | Salary slips (Last 6 months) | | |
| Academic & Work Experience Documents | Work Experience Documents (if applicable): | Income Tax Returns (Last 3 years) | | |

### 3. Financial Documents of Co-applicant or Student (If required)

| category | subcategory | item | mandatory | heading_note |
|----------|-------------|------|-----------|--------------|
| Financial Documents of Co-applicant or Student (If required) | If Self-Employed / Business: | IT returns (Max. last 3 years) | | |
| Financial Documents of Co-applicant or Student (If required) | If Self-Employed / Business: | TDS certificates | | |
| Financial Documents of Co-applicant or Student (If required) | If Self-Employed / Business: | Audited P&L statements | | |
| Financial Documents of Co-applicant or Student (If required) | If Self-Employed / Business: | Proof of business turnover (GST/Sales Tax/MSME certificate) | | |
| Financial Documents of Co-applicant or Student (If required) | If Self-Employed / Business: | Proof of business (Certificate of incoporation, Partnership deed, MOA/AOA, etc) | | |
| Financial Documents of Co-applicant or Student (If required) | If Salaried / Pensioner: | Salary slips (Max. last 6 months) | | |
| Financial Documents of Co-applicant or Student (If required) | If Salaried / Pensioner: | Form 16 or IT Returns (Max. last 3 years) | | |
| Financial Documents of Co-applicant or Student (If required) | If Salaried / Pensioner: | Bank statements (Max. last 6 months) | | |
| Financial Documents of Co-applicant or Student (If required) | If Salaried / Pensioner: | Pension proof (for retired co-applicants) | | |
| Financial Documents of Co-applicant or Student (If required) | If Salaried / Pensioner: | Small home businesses may submit stock photos or receipts as proof. | | |
| Financial Documents of Co-applicant or Student (If required) | If Salaried / Pensioner: | Employment agreement (If joined recently) | | |
| Financial Documents of Co-applicant or Student (If required) | If Salaried / Pensioner: | Income certificate (If joined recently) | | |

### 4. Collateral Documents (for Secured Loans)

| category | subcategory | item | mandatory | heading_note |
|----------|-------------|------|-----------|--------------|
| Collateral Documents (for Secured Loans) | Immovable Properties: | Property valuation report* (As per bank norms) | * | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | Index II, Property title deed & registered sale agreement | | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | Allotment letter from municipal authority | | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | Chain deed / encumbrance certificate (Max. last 30 years) | | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | Latest property tax receipt or electricity bill | | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | Municipality-approved building plan or plot layout | | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | Completion/occupancy certificate (for constructed properties) | | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | LRS (land) / BRS (building) documents - Telangana | | |
| Collateral Documents (for Secured Loans) | Immovable Properties: | Khata extract & Khata certificate - Karnataka | | |
| Collateral Documents (for Secured Loans) | Liquid Securities: | Fixed Deposit (FD) proof | | |
| Collateral Documents (for Secured Loans) | Liquid Securities: | Insurance policy & surrender certificate | | |
| Collateral Documents (for Secured Loans) | Liquid Securities: | Gold: purchase proof & deposit confirmation | | |
| Collateral Documents (for Secured Loans) | Liquid Securities: | Government bonds certificate | | |
| Collateral Documents (for Secured Loans) | Liquid Securities: | Any other acceptable security ownership document | | |

### 5. Post-Sanction Documents (As specified by the bank)

| category | subcategory | item | mandatory | heading_note |
|----------|-------------|------|-----------|--------------|
| Post-Sanction Documents (As specified by the bank) | | Fee demand letter (annual/payment-wise) | | |
| Post-Sanction Documents (As specified by the bank) | | Receipts for academic fee payments | | |
| Post-Sanction Documents (As specified by the bank) | | Affidavit for additional academic needs (laptop, tours, equipment, etc.) | | |
| Post-Sanction Documents (As specified by the bank) | | Academic transcripts | | |
| Post-Sanction Documents (As specified by the bank) | | Outward remittance requests (for abroad) | | |
| Post-Sanction Documents (As specified by the bank) | | Education loan disbursement request form | | |
| Post-Sanction Documents (As specified by the bank) | | Receipts for margin money paid | | |
| Post-Sanction Documents (As specified by the bank) | | Form A2 signed (for overseas institutions) | | |

---

## How to edit in Google Sheets

1. Open the **Document_Checklist** sheet.
2. **Row 1**: Headers – `category`, `subcategory`, `item`, `mandatory`, `heading_note` (optional).
3. **From row 2**: One document per row. Keep the same category name for all rows under one main heading; use the same subcategory for all rows under one sub-heading.
4. **Order**: Add new headings or items in the position you want (insert rows). The page shows categories and subcategories in the order they **first appear** in the sheet.
5. **To add a new main heading**: Add a new category name and use it in new rows.
6. **To add a new sub-heading**: Use a new subcategory value under the same category.
7. **To add a new document**: Add a row with the same category and subcategory and the new item text. Use `mandatory` if you want a badge (e.g. "*" or "mandatory").
8. **Optional heading note**: Put text in `heading_note` on **one row per category** (e.g. the first row of that category) to show a note next to the main heading (e.g. "*mandatory").

No code changes are required when you add or reorder rows.
