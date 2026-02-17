# Pro-Tips Before You Apply – Sheet structure

The Pro-Tips page loads from **Pro-Tips_Before_You_Apply** (or **Pro-Tips Before You Apply**).

**Spreadsheet**: [ApplyOnlyOnce - Loan Data](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit?gid=1057541533#gid=1057541533)

---

## 1. Structure on the page

- **Heading** (main section title, e.g. "Credit Intelligence (CIBIL & Application Strategy)")
- **Sub-heading** (optional intro under the heading, e.g. "What this section covers: Approval probability, rejection triggers, score protection.")
- Under that: one or more **sub-sections**, each with:
  - **Sub-heading** (e.g. "A. Banks vs NBFC Credit Rules")
  - **Content**: either a **table** or **bullet points**

---

## 2. Sheet columns (Row 1 = headers)

| A: section_heading | B: sub_heading | C: block_type | D: content |
|--------------------|-----------------|---------------|------------|
| Main section title | Sub-title or type | heading / sub / table_header / table_row / paragraph / bullet | Text or pipe-separated values |

- **section_heading** – Main section title. Only used when starting a new section (block_type = **heading**). Leave empty for rows that belong to the current section.
- **sub_heading** – For **sub** rows: the sub-section title (e.g. "A. Banks vs NBFC Credit Rules"). For **heading** rows you can put `heading` here if block_type is empty (legacy). Otherwise leave empty.
- **block_type** – One of: **heading** | **sub** | **table_header** | **table_row** | **paragraph** | **bullet**
- **content** – Depends on block_type (see below).

---

## 3. Block types

### heading
- Starts a new **section**.
- **section_heading** = main title (H2 on the page).
- **content** = optional intro paragraph under the heading (e.g. "What this section covers: ..."). Leave empty if you don’t need an intro.

### sub
- Starts a **sub-section** under the current section.
- **sub_heading** = sub-section title (e.g. "A. Banks vs NBFC Credit Rules") – shown as H3.
- **content** = empty. The next rows define the content (table or bullets).

### table_header
- Starts a **table**. **content** = column headers separated by **pipe |**.
- Example: `Feature|Public & Private Sector Banks|NBFCs & Private Lenders`

### table_row
- One **row** of the table. **content** = cell values separated by **pipe |**.
- Use ** in a cell for **bold**. Use Alt+Enter for a line break inside a cell.

### bullet
- One **bullet point**. **content** = the bullet text. Consecutive **bullet** rows become one list (ul).

### paragraph
- A **paragraph** of text. **content** = the paragraph.
- **Links:** `[link text](url)` e.g. `[Click here](https://www.cibil.com/)`
- **Bold:** `**word**` for **word**.

---

## 4. Example: Credit Intelligence section

This matches the structure you described (heading → intro → sub-sections with table or bullets).

| section_heading | sub_heading | block_type | content |
|-----------------|-------------|------------|--------|
| Credit Intelligence (CIBIL & Application Strategy) | heading | | What this section covers: Approval probability, rejection triggers, score protection. |
| | A. Banks vs NBFC Credit Rules | sub | |
| | | table_header | Feature \| Public & Private Sector Banks \| NBFCs & Private Lenders |
| | | table_row | Strictness \| Extremely Strict. Zero tolerance for negative remarks. \| Flexible. They prioritize the overall profile over minor credit issues. |
| | | table_row | Adverse Remarks \| Instant Rejection for remarks like: Written Off, Settled... \| May accept past issues if the current financial standing is strong. |
| | | table_row | ... (more rows) | |
| | B. Pre-Application Checklist | sub | |
| | | bullet | Download official CIBIL report (free) |
| | | bullet | 700+ clean → apply to banks |
| | | bullet | Any adverse remark → prioritize NBFCs |
| | C. Critical Rules | sub | |
| | | bullet | 750+ score ≠ guaranteed approval |
| | | bullet | Any adverse remark → rejection possible |
| | | bullet | Every co-applicant's CIBIL checked (banks strict) |
| | D. Application Strategy | sub | |
| | | bullet | Do NOT apply to 7+ lenders |
| | | bullet | Each hard pull drops score by ~3–4 points |
| | | bullet | Select 4–5 best-fit lenders from 35+ |
| | E. Score Protection Warning | sub | |
| | | bullet | Multiple simultaneous applications can crash score |
| | | bullet | May impact future loan eligibility |

**In Google Sheets:**  
- Row 1: put **section_heading**, **sub_heading**, **block_type**, **content** in A1, B1, C1, D1.  
- For the section row: A = main title, B = `heading`, C = empty (or `heading`), D = intro text if you want it.  
- For each sub-section: A = empty, B = "A. ..." / "B. ..." etc., C = `sub`, D = empty.  
- Then add table_header + table_row rows, or bullet rows, as in the table above.

---

## 5. Links and bold

- **Links:** `[link text](url)` e.g. `[Click here](https://www.cibil.com/)`
- **Bold:** `**word**` in content (works in paragraphs and bullets).

---

## 6. Checklist

1. Tab name: **Pro-Tips_Before_You_Apply** (or **Pro-Tips Before You Apply**).
2. Row 1: **section_heading** | **sub_heading** | **block_type** | **content** (column names case-insensitive).
3. New section: **section_heading** = title, **block_type** = **heading**, **content** = optional intro.
4. Sub-section: **sub_heading** = "A. ...", **block_type** = **sub**; then **table_header** + **table_row** or **bullet** rows.
5. Sharing: **Anyone with the link** → **Viewer**.

Save the sheet; the Pro-Tips page updates after cache refresh.
