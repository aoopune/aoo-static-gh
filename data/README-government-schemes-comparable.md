# Government Schemes – Comparable Data

## File

**`government-schemes-comparable.csv`** – One row per particular, four columns:

| Column A | Column B | Column C | Column D |
|----------|----------|----------|----------|
| **Particulars** | **CGFSSD** | **CSIS** | **CGFEL** |

- **CGFSSD** = Credit Guarantee Fund Scheme for Skill Development  
- **CSIS** = Pradhan Mantri Uchchatar Shiksha Protsahan Yojana: Central Sector Interest Subsidy Scheme  
- **CGFEL** = Credit Guarantee Fund Scheme for Education Loans  

Empty cells mean that particular does not apply to that scheme. All information from the three schemes is preserved; nothing is deleted.

## Use in Google Sheets

1. Open your **Government Schemes** sheet (e.g. [Loan data – Government Schemes](https://docs.google.com/spreadsheets/d/16iG3dFTjRqOPWlzXXNwoo8b_rQoxlfCHHJHZ7MNJ6K8/edit?gid=1848571573#gid=1848571573)).
2. **File → Import → Upload** (or **File → Import** and choose the CSV).
3. Select **Replace spreadsheet** or **Replace current sheet** (or **Insert new sheet(s)**).
4. Set separator to **Comma**; leave encoding as UTF-8 if offered.
5. **Freeze**: View → Freeze → 1 row, 1 column so the header and Particulars stay visible when scrolling.
6. **Wrap text**: Format → Text wrapping → Wrap so long text is readable.

Result: one static column of particulars and three scheme columns side by side for easy comparison.

## Use on the website

If your site fetches from a sheet that has this layout (first column header = **Particulars**, next three columns = the three schemes), the Government Schemes page will show a **comparison table** instead of cards (see `js/government-schemes.js`).
