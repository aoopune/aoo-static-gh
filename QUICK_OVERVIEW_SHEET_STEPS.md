# Quick overview – How to change the data (Google Sheets)

The Quick overview page at **http://localhost:8765/pages/quick-overview.html** (and on the live site) loads from the **Quick_Overview** or **Quick Overview** sheet in your spreadsheet.

**Spreadsheet**: [ApplyOnlyOnce - Loan Data](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit)

---

## Sheet structure (must match exactly)

| Column A   | Column B (optional) | Column C   | Column D   |
|-----------|---------------------|-----------|------------|
| **section** | **subtitle** | **content** | **sort_order** |
| (section title) | (italic sentence below the title) | (body text; use Alt+Enter for new line) | 1, 2, 3, … |

- **Row 1** = headers: `section` | `subtitle` (optional) | `content` | `sort_order`
- **Row 2 onward** = one row per section. Order is by `sort_order` (1, 2, 3, 4, 5).
- **subtitle** (optional): One italic sentence shown below the section title. Leave empty if not needed.
- **content**: Use **Alt+Enter** (Windows) or **Ctrl+Option+Enter** (Mac) for a new line. **Every line** in the cell is shown as its own paragraph on the website, so all content is visible.

---

## Steps to paste the new data

1. Open the spreadsheet and go to the **Quick_Overview** (or **Quick Overview**) tab.  
   If the tab doesn’t exist, create it and name it exactly **Quick_Overview** or **Quick Overview**.

2. **Row 1 – Headers**  
   Set row 1 to (column order can vary; names matter):
   - `section` | `subtitle` (optional) | `content` | `sort_order`  
   Example: A1: `section`, B1: `subtitle`, C1: `content`, D1: `sort_order`

3. **Rows 2–6 – Five sections**  
   For each section: section title, optional italic subtitle, content (use Alt+Enter for each new line so every line shows on the site), and sort_order (1–5).

---

## Section 1

- **A2 (section):**  
  `1. The Foundation: Who is on the Application?`

- **B2 (subtitle)** – optional italic sentence below the title, e.g.:  
  `Before looking at banks, you must satisfy these core identity and support rules.`

- **C2 (content):**  
  Paste this into the cell. Use **Alt+Enter** where you see a blank line (new paragraph).

  ```
  The Student: Open to any Indian, NRI, OCI, or PIO student (minimum age 16).

  The Mandatory Partner: You cannot apply alone. You must have a co-applicant (Parent, Sibling, Spouse, or blood relative).

  The Financial Backbone: Your primary co-applicant needs a strong, stable financial background.

  The Parent Rule: If your primary co-applicant is a sibling or spouse, a parent must still be added as a secondary co-applicant.

  The Course: Covers everything from School (1-12) to Pilot training, CA/CFA, Vocational skills, and Executive MBAs.
  ```

- **D2 (sort_order):** `1`

---

## Section 2

- **A3 (section):**  
  `2. Choosing Your Path: Secured vs. Unsecured`

- **B3 (subtitle)** – optional, e.g.:  
  `There are two main ways to borrow. One is significantly cheaper if you have assets.`

- **C3 (content):**  
  (Use Alt+Enter between paragraphs.)

  ```
  Secured (With Property or FD): By giving the bank security, you slash your interest rate by 1.5% to 2%. The owners of the security must be your co-applicants.

  Unsecured (No Property): Easier to get, but comes with a higher interest rate.

  The ₹7.5 Lakh Rule: Generally, if your loan is more than ₹7.50 Lakhs, banks will require collateral (Secured Path).

  The Entrance Fee: Almost all lenders charge a ~1% Processing Fee and other loan charges during the process.

  Proof of Admission: Usually required to start, but some lenders offer Pre-admission loans.
  ```

- **D3 (sort_order):** `2`

---

## Section 3

- **A4 (section):**  
  `3. The Money Flow: What You Pay vs. What They Pay`

- **B4 (subtitle)** – optional, e.g.:  
  `Banks rarely cover 100% of the cost. You need to know your share.`

- **C4 (content):**  
  (Use Alt+Enter between paragraphs.)

  ```
  What is Covered? The sanctioned amount includes tuition fees (paid to the college) and living expenses (paid to you).

  The Margin (Your 10-15% Share): Most banks require a "margin," meaning you must pay 10–15% of the total cost from your own funds.

  Scholarships: These are your secret weapon. Any scholarship or assistantship you receive counts toward your 10-15% margin.

  Insurance: It is not mandatory by law, but banks recommend it to protect against death or disability.
  ```

- **D4 (sort_order):** `3`

---

## Section 4

- **A5 (section):**  
  `4. The Repayment: The "Interest-on-Interest" Rule`

- **B5 (subtitle)** – optional, e.g.:  
  `This is the most critical part of the loan timeline for a layman to understand.`

- **C5 (content):**  
  (Use Alt+Enter between paragraphs.)

  ```
  The Moratorium (The Holiday): You don't have to pay during your studies. You start your EMIs 6 to 12 months after graduation.

  The Capitalization Trap: Even if you aren't paying, interest "grows" during college. If you don't pay it monthly, the bank adds it to your loan amount.

  Example: Your ₹20L loan becomes a ₹23L loan by the time you start your job.

  The Calculation: Most use "Compounding" after college. Note: Tata Capital is the exception—they use Simple Interest only.

  The Tenure: You have a maximum of 15 years to pay back the loan.
  ```

- **D5 (sort_order):** `4`

---

## Section 5

- **A6 (section):**  
  `5. The Strategy: Rates & Tax Benefits`

- **B6 (subtitle)** – optional, e.g.:  
  `How to save lakhs of rupees using the system.`

- **C6 (content):**  
  (Use Alt+Enter between paragraphs.)

  ```
  Floating Rates: These move with the RBI Repo Rate. If the Repo rate rises, your EMI rises.

  Fixed Rates: Stay the same forever but are usually 0.5% – 3% more expensive from day one.

  The Tax Gift (Section 80E): For 8 years, every rupee of interest you pay can be deducted from your taxable income. This is a massive government benefit that effectively lowers your loan cost.

  Flexibility: Most lenders allow you to "Transfer" your loan to a cheaper bank (Balance Transfer) or take a "Top-up" if you need more funds.
  ```

- **D6 (sort_order):** `5`

---

## After updating the sheet

1. Save the sheet (Ctrl+S or Cmd+S).
2. Ensure **Sharing** is **Anyone with the link** → **Viewer** so the site can load data.
3. On the website, refresh the Quick overview page. If you use cache, wait a few minutes or clear session storage and refresh.

No code deploy is needed for content-only changes; only the spreadsheet is updated.
