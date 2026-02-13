# Pro-Tips Before You Apply – Sheet structure

The Pro-Tips page loads from **Pro-Tips_Before_You_Apply** (or **Pro-Tips Before You Apply**).

**Spreadsheet**: [ApplyOnlyOnce - Loan Data](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit)

---

## 1. Sheet columns (Row 1 = headers)

| Column A            | Column B      | Column C   |
|---------------------|---------------|------------|
| **section_heading** | **block_type**| **content**|

- **section_heading** – Title for this section (e.g. "CIBIL / Credit score report", "Check your Cibil report first:"). Leave empty to stay in the previous section.
- **block_type** – One of: **heading** | **table_header** | **table_row** | **paragraph**
- **content** – Depends on block_type (see below).

---

## 2. Block types

### heading
- Use when you only want a section title (no table/paragraph on that row).
- **content** can be empty.
- **section_heading** = the title shown on the page.

### table_header
- Starts a new table. **content** = column headers separated by **pipe |**.
- Example: `Feature|Public & Private Sector Banks|NBFCs & Private Lenders`

### table_row
- One row of the table. **content** = cell values separated by **pipe |**.
- Example: `Strictness|Extremely Strict. Zero tolerance for negative remarks.|Flexible. They prioritize the overall profile over minor credit issues.`
- Use ** in a cell for **bold**. Use Alt+Enter in the cell for a line break (avoid typing | in the cell).

### paragraph
- A paragraph of text. **content** = the paragraph.
- **Links:** Type `[link text](url)`. Example: `[Click here](https://www.cibil.com/)` or `[CIBIL website](https://www.cibil.com/)`.
- **Bold:** Type `**word**` for **word**.

---

## 3. Example (like your layout)

| section_heading                | block_type   | content |
|--------------------------------|--------------|--------|
| CIBIL / Credit score report    | heading      |        |
|                                | table_header | Feature\|Public & Private Sector Banks\|NBFCs & Private Lenders |
|                                | table_row    | Strictness\|Extremely Strict. Zero tolerance for negative remarks.\|Flexible. They prioritize the overall profile over minor credit issues. |
|                                | table_row    | Adverse Remarks\|Instant Rejection for remarks like: Written Off, Settled...\|May accept past issues if the current financial standing is strong. |
| ... (more table_row rows)      |              |        |
| Check your Cibil report first: | paragraph    | Download your official CIBIL report for free. If it is 100% clean, apply to Banks; if there are any remarks, prioritize NBFCs. [Click here](https://www.cibil.com/) |
| Limit Applications:            | paragraph    | Don't apply to 7+ banks at once. Each "Hard Pull" request can drop your score by 3-4 points. Instead, select the 4-5 lenders that best match your profile from the 35+ available. |
| Protect Your Score:            | paragraph    | Too many simultaneous requests will crash your score, making you ineligible for any future loans. |
| Score vs History               | paragraph    | (your text or leave empty) |

**Important:** In the sheet, the **pipe |** is a real character. So in the **content** cell for table_header you type:  
`Feature|Public & Private Sector Banks|NBFCs & Private Lenders`  
(no spaces around | unless you want them in the cell).

---

## 4. Links

- Format: **`[link text](https://url)`**
- Examples:
  - `[Click here](https://www.cibil.com/)`
  - `[CIBIL](https://www.cibil.com/)`
- The link opens in a new tab. You choose the link text (e.g. "Click here" or any name).

---

## 5. Checklist

1. Tab name: **Pro-Tips_Before_You_Apply** or **Pro-Tips Before You Apply**.
2. Row 1: **section_heading** | **block_type** | **content** (case-insensitive).
3. Tables: use **table_header** once per table, then **table_row** for each row; separate cells with **|** in content.
4. Paragraphs: use **paragraph** and **section_heading** for the section title; put links as **`[text](url)`**.
5. Sharing: **Anyone with the link** → **Viewer**.

Save the sheet and refresh the Pro-Tips page to see changes.
