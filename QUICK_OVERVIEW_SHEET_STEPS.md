# Quick Overview (Left Column) – How to Edit the Sheet

The **left column** on the [Quick overview](http://localhost:8765/pages/quick-overview.html) page is loaded from the **Quick_Overview** sheet. It shows a **flow** of sections (one leading to the next), each with a **headline**, **italic subheadline**, and **bullet points**.

---

## 1. Sheet and columns

- **Sheet name:** `Quick_Overview` (or `Quick Overview` with a space – the site tries both).
- **Row 1 = headers:** `section` | `subtitle` | `content` | `sort_order`

| Column       | Purpose |
|-------------|---------|
| **section** | Headline of the section (e.g. "Eligibility & Application Structure"). |
| **subtitle** | Subheadline in italics, usually in brackets (e.g. "(Who can apply and how the loan is structured legally)"). |
| **content** | All bullet points for that section. **Use Alt+Enter inside the cell** to start a new line – each line becomes one bullet on the site. |
| **sort_order** | Order of sections (1 = first, 2 = second, …). Optional; row order is used if empty. |

- **One row = one section.** Only rows with a non-empty **section** are shown.

---

## 2. The 5 sections (copy into your sheet)

Use **Row 1** as headers: `section` | `subtitle` | `content` | `sort_order`

Then add these **5 rows**. In the **content** column, put each bullet on its own line (in Google Sheets: type the first point, press **Alt+Enter**, type the next, and so on).

| section | subtitle | content (each line = one bullet; use Alt+Enter) | sort_order |
|--------|----------|--------------------------------------------------|------------|
| Eligibility & Application Structure | (Who can apply and how the loan is structured legally) | Any Indian, NRI, OCI, or PIO student (Min. age 16 except School education)<br>Loans available from School to Masters, Professional & technical to Skills & Vocational courses, Executive to Doctorate courses<br>You cannot apply alone. You must have a co-applicant (Parent, Sibling, Spouse, or blood relative of the family).<br>Your primary co-applicant needs a strong, stable & provable financial background.<br>CIBIL is necessary to check credit history - Banks (700+ CIBIL) offer lower rates but strict approvals; NBFCs (600+) are flexible but costlier.<br>Proof of Admission: Typically required; some lenders allow pre-admission sanction. | 1 |
| Loan Type & Entry Costs | (How you borrow and what it costs to start) | Secured (Property/FD): 1.5–2% lower interest; security owner must be co-applicant.<br>Unsecured: No collateral; higher interest.<br>₹7.5 Lakh Rule: Loans above ₹7.5L usually require collateral (banks).<br>Processing Fee: ~1% + applicable charges. | 2 |
| Funding Structure & Your Contribution | (How total cost is divided between you and the lender) | Loan is available for Tuition fees (paid to college) + living expenses (paid to you).<br>Margin: 10–15% of total cost must be funded by you. Some lenders don't require margin.<br>Scholarships: Count toward the 10–15% margin.<br>Insurance: Optional but recommended; ~1–2% of loan. Can be included in loan or paid upfront. | 3 |
| Repayment Mechanics & Interest Behaviour | (When repayment starts and how interest actually grows) | Moratorium: No payments during study; repayment starts 6–12 months after graduation.<br>Capitalization: Interest accrues during study. If unpaid, it's added to principal. Some NBFCs/private banks require servicing (simple or partial simple interest).<br>Interest Calculation: Simple interest during moratorium; compounding after. Tata Capital uses simple interest only.<br>Repayment Tenure: Up to 15 years. | 4 |
| Interest Rate Selection & Optimization Tools | (How to reduce cost and manage your loan strategically) | Floating Rate: (Mostly banks) Linked to RBI Repo Rate; EMI moves up/down with repo changes.<br>Repo Adjustment: If your bank doesn't reduce rates after a repo cut, you can complain to the RBI Ombudsman.<br>Fixed Rate: Constant throughout tenure; typically 0.5%–3% higher initially compared to floating.<br>Conversion Option: Switch floating ↔ fixed for a small fee (most lenders).<br>Section 80E: Interest paid is tax-deductible for 8 years (old tax regime only).<br>Flexibility: Balance transfer and top-up loans are usually allowed. | 5 |

**In Google Sheets:** For the **content** cell of each row, type the first bullet, press **Alt+Enter** (Windows) or **Option+Enter** (Mac) to add a new line, then type the next bullet. Repeat so all points are in the same cell, one per line.

---

## 3. How to change in the future

- **Edit text:** Change any cell (section, subtitle, or content). Save the sheet; the site updates after cache expiry (Config → `cache_minutes`).
- **Reorder sections:** Change **sort_order** (1, 2, 3, …). Smaller number = higher on the page.
- **Add a section:** Add a new row with section, subtitle, content (points separated by new lines), and sort_order.
- **Remove a section:** Delete the row or clear the **section** cell (rows with empty section are hidden).
- **Add/remove bullets:** In the **content** cell, add or delete lines (each line = one bullet).

No code changes are needed for data-only edits.
