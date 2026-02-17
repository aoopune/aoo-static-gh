# Comparison Table – Implementation Script (for your friend)

Use this document as the **single script/spec** to implement the comparison table. Give it to your friend so they (or Cursor) can build the feature without changing anything else unless needed. Data comes from your **Copy of Loan data** Google Sheet; no code edits are required from you until your friend implements this.

---

## 1. Data source

- **Spreadsheet**: [Copy of Loan data](https://docs.google.com/spreadsheets/d/13CA4HbW7jBDjcXG9wE9R9LpY73oC8CyjulZIrJOaCtc/edit?gid=598315832#gid=598315832)
- **Spreadsheet ID**: `13CA4HbW7jBDjcXG9wE9R9LpY73oC8CyjulZIrJOaCtc`
- **Sheets to use**:
  - **Numerical data India** – main rows for the comparison (Lender, Scheme name, Purpose, Gender, Loan amount range columns, Max Loan, Security, Security weightage, Level of Study, Interest rate, Processing fees, etc.). Each row = one product/segment (e.g. different loan amount bands or security types).
  - **Institutes data abroad** – Lender, University, Country / Main Campus, Criteria, Source, Courses. Used for Country and University filters and for university dropdown (filter by country; searchable).
  - **View details section** – non-comparable details per lender/attribute (to show in “View details” and at the end of the PDF).
  - **Columns to show on website** – defines which sheet columns map to table headers: e.g. Eligibility criteria (EC 1–EC 5), Loan features (LF 1–LF 5), Fees & Charges (FC 1–FC 2). Use this sheet to build the table columns and labels.

If the developer prefers local CSVs: export each sheet as CSV (same column names as in the sheet) and load them instead of fetching from the sheet. The rest of the logic stays the same.

- If not already present, data must include per lender: **official website URL** and **logo URL** (or path) for the Lender column link and logo.

---

## 2. UI layout (match the provided design)

- **Top section – 6 input questions** (left to right / wrapped as in the image):
  1. **Gender** – two buttons: Male, Female (optional; neither selected = no gender filter).
  2. **Security Type** – two buttons: Secured, Unsecured (optional).
  3. **Loan amount** – single numeric input (e.g. `9,99,999`; use for range matching).
  4. **Level of Education** – dropdown (e.g. Undergraduate, Postgraduate, etc.; options from data or fixed list).
  5. **Country** – dropdown; options from **Institutes data abroad** (distinct “Country / Main Campus”).
  6. **University** – dropdown with **search**: options filtered by selected Country; typing “vard” should show “Harvard University”, “insitute” should show “Massachusetts Institute of Technology”, etc. (substring match on standardized institute name; can use institutes-abroad-standardized CSV if available).
- **Main section** – comparison table (see below).
- **Actions**: “Download results” button (PDF), “Apply only once” button (opens email step).

---

## 3. How each of the 6 inputs affects the table

Apply filters in this order (and use prioritization where stated).

### 3.1 Gender

- If **Male** is selected: show rows where the data has “Male” (or equivalent) **first**, then rows where there is **no** gender criterion (e.g. “Equal” or blank).
- If **Female** is selected: same idea – female-specific rows first, then rows with no gender criterion.
- If neither is selected: no gender-based filtering or reordering.

*Data column to use*: e.g. “Gender” in Numerical data India (values like Male, Female, Equal, or empty).

### 3.2 Security Type

- **100% match only**:
  - If **Secured** is selected → show **only** rows where Security = Secured (e.g. “Yes” or “Secured”).
  - If **Unsecured** is selected → show **only** rows where Security = Unsecured (e.g. “No” or “Unsecured”).
- In the table, **show security coverage** (e.g. “Secuirty weightage” or “Security weightage” column) as a percentage where available (e.g. “≥100%”, “≥50%”).

*Data columns*: “Security” (or equivalent) and the column that has security coverage % (e.g. “Secuirty weightage”).

### 3.3 Loan amount

- Data has **ranges** (e.g. “Loan amount in lakhs” min and “Max Loan” max, or similar).
- User enters a single amount (e.g. 9,99,999).
- **Rule**: include a row if the user’s amount falls **inside** that row’s range (min ≤ user amount ≤ max).
- Example: “if loan up to 4 lakhs unsecured is only available; if 400001 then secured” – so the row shown (and its Security type) must match the range that contains the entered amount.
- Combine with Security Type filter: e.g. if user chose “Unsecured” and amount is 5 lakhs, only show rows that are Unsecured and whose range includes 5 lakhs.

*Data columns*: the two columns that define the loan amount range (min and max) in Numerical data India.

### 3.4 Level of Education

- If selected: show **only** rows where the bank gives loans for that level (e.g. “Level of Study” or “Course” matches Undergraduate, Postgraduate, etc.).
- No selection = no filter on level.

*Data column*: e.g. “Level of Study” or the column that describes course/level in Numerical data India.

### 3.5 Country

- If a country is selected:
  - **First** show banks that **support that country** (using Institutes data abroad: Lender + Country).
  - **Then** show banks that have **no country criteria** (e.g. “Data not available” or “gives to everyone”).
- If no country selected: no country-based reordering/filtering.

*Data*: Join Numerical data India (Lender) with Institutes data abroad (Lender, Country). A bank “supports” a country if it has at least one row for that country; “no criteria” if it has a generic row (e.g. “Top 3000”, “Data not available”) or no institute list.

### 3.6 University

- If a university is selected:
  - **First** show banks that **loan to that university** (from Institutes data abroad: Lender + University match).
  - **Then** show banks that **do not have a list** (give to everyone / no institute-wise criteria).
- **Country filter**: if Country is selected, the **University dropdown** must list only universities in that country (from Institutes data abroad: “Country / Main Campus” = selected country).
- **Search**: university dropdown must be **searchable**; any substring of the **display name** matches (e.g. “vard” → “Harvard University”, “insitute” → “Massachusetts Institute of Technology”). Use one canonical name per institute (e.g. from institutes-abroad-standardized CSV) for both display and search.

---

## 4. Table structure

- **Columns** (order can follow “Columns to show on website”):
  - **Lender** – bank/lender name **with logo in front**, **linked to the bank's official website** (with sort/filter/search – see below).
  - **Sector** – e.g. Public/Private (with sort/filter/search).
  - **Select** – checkbox per row (for “Apply only once”).
  - **Eligibility criteria** – group header with sub-columns **EC 1, EC 2, EC 3, EC 4, EC 5** (each with a small info icon for tooltip or “View details”).
  - **Loan features** – group header with **LF 1, LF 2, LF 3, LF 4, LF 5** (each with info icon).
  - **Fees & Charges** – group header with **FC 1, FC 2** (each with info icon).
- **Mapping**: Use the sheet “Columns to show on website” to map Numerical data India columns to EC1–EC5, LF1–LF5, FC1–FC2. If that sheet lists column names or codes, use them; otherwise define a sensible mapping (e.g. Processing fees → FC1, Interest rate → LF1) and document it.
- **Sort, filter & search** (one control per subheader, e.g. icon or “Sort, filter & search” button per column):
  - **Sort**: ascending/descending by that column (like Google Sheets / Excel).
  - **Filter**: e.g. multi-select of distinct values in that column, or “include only rows where this cell contains …”.
  - **Search**: text filter on that column (substring match).
  - Implement for **each** subheader (Lender, Sector, EC1–EC5, LF1–LF5, FC1–FC2) so users can narrow the table.
- **Info icons**: Every subheader has an info option. **Desktop**: hover to show tooltip; **phone**: click/tap to show popup. Use data-driven explanation text (see section 10.2). The text comes from “View details section” or Attribute_Info-style data if available).

---

## 5. Download results (PDF)

- **Button**: “Download results” (or “Download the results”).
- **Content of the PDF** (in order):
  1. **User’s selections**: list the 6 answers (Gender, Security Type, Loan amount, Level of Education, Country, University) so the user sees “what I selected”.
  2. **Comparison table**: same rows and columns as currently visible in the table (after filters/sort), so the report is clear: “this bank gives this much interest”, etc.
  3. **View details section (at the end)**: non-comparable but important details (from “View details section” sheet) – e.g. per-lender or per-attribute text so the user can “know more details about the bank” without cluttering the comparison.
- **Format**: clean, readable report (e.g. title, date, then selections, then table, then view details). No need for charts; focus on clarity.
- **Implementation note**: Use a client-side PDF library (e.g. jsPDF + autoTable, or similar) to generate the PDF from the current table data and stored answers, or send a minimal payload to a small server that returns a PDF; the script does not require a specific stack.

---

## 6. Apply only once (select banks + email)

- **Selection**: User checks one or more banks in the **Select** column. There is no “select all” requirement; per-row checkbox is enough (optional: add “Select all” in header).
- **Button**: “Apply only once”.
- **Flow**:
  1. User clicks “Apply only once”.
  2. If no bank is selected: show a message “Please select at least one bank.”
  3. If selected banks > 6, show a warning popup (e.g. "You have selected [N] banks. During application, CIBIL will be checked.") before or when opening the email step; user can dismiss and continue.
  4. If at least one bank is selected: show a step (modal or inline) to **enter email** (required).
  5. On submit:
    - **Backend**: Send to “us” (your system) at least: user email, list of selected lenders/schemes (e.g. lender name + scheme name + row identifier), and optionally the 6 filter answers. This can be a form POST to your endpoint, or a serverless function that stores to a database and/or sends you an email.
    - **Confirmation to user**: Show a clear success message and send a **confirmation email** to the user stating that they have requested to apply on their behalf to all the selected banks and that you will contact them (e.g. “We have received your request to apply to [list]. We will contact you at [email] for further actions.”).
- **Technical note**: “Data should automatically come to us” requires a **backend or third-party service** (e.g. Formspree, Google Apps Script, or your own API). The script does not assume a specific backend; the front end should send the selected banks + email in a structured way (e.g. JSON) to a configurable URL.

---

## 7. View details section (in UI and PDF)

- **Placement**: At the end of the table (or in a collapsible “View details” block) and at the end of the PDF.
- **Content**: From the “View details section” sheet – information that is **not comparable** (not in EC/LF/FC columns) but **required to know more** about each bank (e.g. eligibility nuances, contact, links).
- **Display**: Can be per-lender accordion or a single section with subsections per lender; in the PDF, same content in a “View details” section at the end.

---

## 8. Summary for the developer

| Item               | What to do                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data               | Fetch or load: Numerical data India, Institutes data abroad, View details section, Columns to show on website (from spreadsheet ID above or from CSVs). |
| 6 inputs           | Implement filters and prioritization as in section 3 (Gender, Security, Loan amount, Level, Country, University).                                       |
| Table              | Build columns from “Columns to show on website”; add Lender, Sector, Select, EC1–5, LF1–5, FC1–2; show security % where applicable.                     |
| Sort/filter/search | One control per subheader; behavior like Google Sheets/Excel.                                                                                           |
| PDF                | Button “Download results”; PDF = user’s 6 answers + current table + view details at end.                                                                |
| Apply only once    | Checkboxes in Select column; button opens email capture; submit sends selected banks + email to your backend; send confirmation email to user.          |
| View details       | Show non-comparable details (from View details section sheet) below table and in PDF.                                                                   |
| Table UX           | Input-change column/cell highlight; subheader info hover (desktop) and click (phone); lender = logo + link to official site; warning when >6 banks selected (CIBIL). |

---

## 9. Optional clarifications (if your friend asks)

- **Column names**: If the sheet uses “Secuirty weightage”, use that exact header when reading; normalize only for display (e.g. “Security weightage”).
- **Multiple rows per lender**: Numerical data India has multiple rows per lender (e.g. different amount bands). After filters, show all matching rows; the table is row-based, not one row per bank.
- **India vs Abroad**: This script is for the **India** numerical data and **abroad** institutes (for Country/University). If you later add “Numerical data Abroad”, the same logic can be reused with a tab or toggle.
- **Existing code**: The current repo has pages/compare.html, js/compare.js, and pages/questions.html with different questions. This script describes a **new** comparison flow (6 questions as in the image). Your friend can either replace that flow or add a new page (e.g. “Compare (See what fits)”); the script does not require deleting existing pages.

---

## 10. Table UX and lender display

### 10.1 Input-change highlighting in the table

- Whenever the user **changes any of the 6 inputs** (Gender, Security Type, Loan amount, Level of Education, Country, University), the table must reflect which filter drove the result:
  - **Column highlight**: Apply a visible **border** (or equivalent style) to the **entire column** that corresponds to that input (e.g. the column that shows the criterion the user just set). Map each input to the relevant table column(s): Gender to gender/criterion column; Security to Security / Security weightage column; Loan amount to column(s) showing amount range; Level of Education to Level of Study column; Country/University to any column that shows country/university-related info, if present.
  - **Cell highlight**: Within that column, highlight the **specific cell(s)** where the value reflects the user selection (i.e. the cell that changed or matched due to that filter). Use a distinct style (e.g. background or border) so the user sees exactly which cells were affected.
- Implementation: When an input value changes, (1) determine which column(s) correspond to that input, (2) add a column-highlighted state for that column, (3) for each row, determine which cell in that column is the matched value and add a cell-highlighted state. No specific tech required; CSS classes or inline styles are fine.

### 10.2 Info on subheaders (hover and click)

- **Every subheader** (Lender, Sector, EC 1 to EC 5, LF 1 to LF 5, FC 1 to FC 2) must have an **info option** (icon or control) that explains what that column means.
- **Desktop**: On **hover** over the info control, show a **small popup or tooltip** with the explanation text.
- **Phone / touch**: On **click or tap** on the info control, show the **same explanation** in a small popup or text box (e.g. modal, popover, or inline expandable). Do not rely on hover alone on touch devices.
- **Data**: The explanation text must come from **existing data** (e.g. "Columns to show on website" sheet has an Info column, or "View details section" / Attribute_Info-style data). Use that source to populate the text for each subheader. If a column has no info in the data, show a short fallback (e.g. column name).

### 10.3 Bank official website link

- The **lender/bank name** in the table (Lender column) must be a **clickable link** that goes to the **bank official website**.
- **Behavior**: Clicking the lender name opens the official website (preferably in a new tab, e.g. target="_blank" and rel="noopener").
- **Data**: The URL must come from data (e.g. a column in the main sheet such as "Official website", "URL", "Website", or a Banks/lookup sheet that has lender identifier and official URL). Ensure the data source includes each lender official website URL; the Lender cell must render as a link using that URL.

### 10.4 Lender logo

- The **lender name** in the Lender column must be displayed with the **bank logo in front of it** (e.g. image then text).
- **Data**: Logos can be provided as URLs or file paths per lender (e.g. from the same sheet as the website URL, or a column "Logo URL", or a convention like /assets/logos/lender_id.png). If a logo is missing for a lender, show only the name (no broken image). Data source must include a logo URL or path per lender; display the logo image before the lender name in the Lender column.

### 10.5 Warning when more than 6 banks are selected

- When the user has **selected more than 6 banks** (i.e. selected count greater than 6), show a **warning popup/modal**.
- **Trigger**: Show the warning when the selection count first exceeds 6 (e.g. on the 7th checkbox select), or when the user clicks "Apply only once" and selected count is greater than 6. Prefer showing it as soon as count is greater than 6 so the user is aware before proceeding.
- **Message**: Use wording along the lines of: "You have selected [N] banks. Please note: during application, CIBIL will be checked." (Replace [N] with the actual count.) Allow the user to **dismiss** the warning and continue (e.g. "OK" or "I understand"); do not block selection or "Apply only once" permanently, but the warning can be shown again when they click "Apply only once" if selected count still exceeds 6.

---

No code changes are made in this step; this is the script you can hand off for implementation.
