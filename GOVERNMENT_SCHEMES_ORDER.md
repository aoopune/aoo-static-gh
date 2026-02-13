# Government Schemes – Display order and sticky layout

**Sheet**: [ApplyOnlyOnce - Loan Data → Government_Schemes](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit?gid=985055800#gid=985055800)

On the website, the table is shown **transposed**: **schemes on the top row**, **particulars on the first column**.

---

## How to sort: what comes first and last

| What you want to change | What to do in the sheet |
|-------------------------|--------------------------|
| **First row (particular)** on the site | Put that column **first** in the sheet (Column A). |
| **Last row (particular)** on the site | Put that column **last** in the sheet (rightmost column). |
| **First column (scheme)** on the site | Put that scheme’s **row at the top** (first data row, e.g. row 2). |
| **Last column (scheme)** on the site | Put that scheme’s **row at the bottom** (last data row). |

- **Particulars (rows):** Order = column order in the sheet, or use the **Sort order** row (see below).
- **Schemes (columns):** Order = row order in the sheet. Row 2 → 1st column, Row 3 → 2nd column, … so move **rows** up or down to change which scheme is first or last.

### Sort order row (particulars)

To control the order of **rows (particulars)** without moving columns, add a **Sort order** row:

1. Add a **data row** (same as a scheme row) where the **first column** (e.g. “Scheme name”) contains exactly: **`Sort order`** (case-insensitive).
2. In that row, put numbers **1, 2, 3, … 17** (one per column) in the cells: put **1** in the column you want to show **first** on the site, **2** in the next, and so on up to **17** (or however many particulars you have).
3. That row is **not** shown as a scheme column; the site uses it only to sort the particulars. All other rows are scheme data as before.

Example: To show “Purpose” first and “Scheme name” last, put `1` in the Purpose column and `17` (or the highest number) in the Scheme name column in the Sort order row. Any column without a number (or with a non-numeric value) is ordered after the numbered ones.

---

## 1. Schemes = top row

Schemes appear in **column order** (left to right). The first data row in the sheet becomes the **1st column**, the next row the **2nd column**, and so on.

| Order | Column on site | Row in sheet | Scheme (example) |
|-------|------------------|----------------|-------------------|
| 1     | 2nd (after Particulars) | 2 (or first data row) | Credit Guarantee Fund Scheme for Skill Development (CGFSSD) |
| 2     | 3rd | 3 | Pradhan Mantri Uchchatar Shiksha Protsahan Yojana: Central Sector Interest Subsidy Scheme (CSIS) |
| 3     | 4th | 4 | Credit Guarantee Fund Scheme for Education Loans (CGFEL) |
| 4     | 5th | 5 | Pradhan Mantri Vidyalaxmi (PM-Vidyalaxmi) Scheme |

**To change the order:** Move entire rows up or down in the sheet. The website will show schemes in the same order (left to right in the top row).

---

## 2. Particulars = first column

Particulars (row labels) appear **top to bottom** in the first column, in the order of columns in the sheet (A, B, C, …).

Typical order (your sheet may have these or similar headers):

| Order | Row on site | Column in sheet | Particular (example) |
|-------|-------------|------------------|------------------------|
| 1  | 2 | A | Scheme name |
| 2  | 3 | B | Scheme official website link |
| 3  | 4 | C | Purpose |
| 4  | 5 | D | Sponsored by |
| … | … | … | … |

**To change the order:** Add, remove, or reorder columns in the sheet. Column visibility can also be controlled via the **Config** sheet (`gov_schemes.column.COLNAME.visible`).

---

## 3. Sticky first row and first column

### In Google Sheets

So that the **header row** and **first column** stay visible when you scroll:

1. Open the **Government_Schemes** sheet.
2. **View → Freeze → 1 row** (freezes the header row).
3. **View → Freeze → 1 column** (freezes the first column, e.g. Scheme name).

### On the website

The table is rendered with:

- **Top row** = “Particulars” + scheme names (one per column). This row is **sticky** when you scroll down.
- **First column** = “Particulars” (header) + each particular name. This column is **sticky** when you scroll right.

So users always see which scheme (column) and which particular (row) they are looking at.

---

## 4. Seeing all rows (e.g. all 17 particulars)

On the website, the table can show many rows. If not all fit on screen:

- **Scroll vertically** inside the table (the table area has its own scroll).
- The **first row** (Particulars + scheme names) stays **sticky** at the top while you scroll down, so you always see the headers.
- Table height is set so most screens can show many rows at once; on smaller screens, scroll to see the rest.

---

## 5. Summary

| What | On the website |
|------|-----------------|
| **Schemes** | Top row (one scheme per column after “Particulars”). |
| **Particulars** | First column (one particular per row). |
| **Sticky row** | Top row (Particulars + scheme names). |
| **Sticky column** | First column (Particulars + particular names). |
| **Sort rows** | Reorder **columns** in the sheet (A = first row, last column = last row). |
| **Sort columns** | Reorder **rows** in the sheet (top row = first scheme, bottom row = last scheme). |
