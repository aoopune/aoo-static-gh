# Apply Only Once – Data Sheet Guide

**Spreadsheet**: [ApplyOnlyOnce - Loan Data](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit?gid=0#gid=0)  
**Spreadsheet ID**: `1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g`  
**Public CSV fetch**: `https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/gviz/tq?tqx=out:csv&sheet={SheetName}`

The website fetches data from this spreadsheet. No API key; sheets must be **published / viewable by anyone with the link** (or public).

---

## Sheets and Where to Add Data

| Sheet | Columns (structure) | Used for | Add new data |
|-------|---------------------|----------|---------------|
| **Config** | `key`, `value` | Site settings, cache, contact, column visibility | New row: column A = key, column B = value. For new columns in Compare/QHEI/Gov schemes, run `node scripts/generate-config.js` and paste `config/config.csv` into Config, then set visibility. |
| **Education_Loans_India** | 85 columns (bank_id, bank_name, Sector, Scheme_name, Purpose, …) | Compare page → “Indian education” tab | New row = new loan product. Keep column names exactly as existing; new columns need Config visibility key (see CONFIG_REFERENCE.md). |
| **Education_Loans_Abroad** | 83 columns | Compare page → “Abroad education” tab | Same as India: new row = new product; new column needs Config. |
| **Banks** | `bank_id`, `bank_name`, `page_link`, `sector` | Bank lookup (compare, results) | New row = new bank. `bank_id` must match references in Education_Loans_India / Education_Loans_Abroad. |
| **FAQ** | `category`, `title`, `question`, `answer` | FAQ page | New row = new FAQ item. |
| **Government_Schemes** | 35 columns | Government schemes page (cards) | New row = new scheme. Column visibility controlled by Config `gov_schemes.column.COLNAME.visible`. |
| **Document_Checklist** | `category`, `subcategory`, `item`, `mandatory` | Document checklist page | New row = new document item. Grouping by category/subcategory is configurable in Config. |
| **About_Us** | `section`, `heading`, `content` | About page | New row = new section block. |
| **Quick_Overview** | `section`, `subtitle` (optional), `content`, `sort_order` | Quick overview page | New row; use `sort_order` for order. `subtitle` = italic sentence below section title. Every line in `content` (Alt+Enter) shows as its own paragraph. |
| **PM_Vidyalaxmi** | `section`, `key`, `value`, `extra` | PM-Vidyalaxmi / Schemes page (scheme content) | New row for each key-value block. |
| **PM_Vidyalaxmi_QHEI** | 14 columns | PM-Vidyalaxmi page → QHEI institutes table | New row = new institute. Column visibility: Config `qhei.column.COLNAME.visible`. |
| **Attribute_Info** | `attribute_name`, `info_text` | Row metadata for compare table | New row to describe an attribute. |
| **Summary** | 16 columns | Summary / tips | New row as needed. |

---

## Config Sheet – Quick Reference

- **General**: `cache_minutes`, `contact_phone`, `contact_email`, `default_compare_tab` (india/abroad), `faq.expand_default`, `document_checklist.group_by`, `gov_schemes.cards_per_row`, `qhei.rows_per_page`, `results.initial_count`.
- **Column visibility**: Keys like `compare.india.column.COLNAME.visible`, `compare.abroad.column.COLNAME.visible`, `qhei.column.COLNAME.visible`, `gov_schemes.column.COLNAME.visible`. Set `value` to `false` to hide that column.
- **Adding a new column to Compare (India/Abroad)**: Add the column to the sheet first, then run `node scripts/generate-config.js`, paste `config/config.csv` into the Config sheet, then set the new key’s `value` to `true` or `false` as desired.

---

## Adding New Data – Summary

- **New bank / loan product (India)**: Add row to **Education_Loans_India**; add bank to **Banks** if new bank.
- **New bank / loan product (Abroad)**: Add row to **Education_Loans_Abroad**; add bank to **Banks** if new bank.
- **New FAQ**: Add row to **FAQ** (category, title, question, answer).
- **New government scheme**: Add row to **Government_Schemes**.
- **New document in checklist**: Add row to **Document_Checklist** (category, subcategory, item, mandatory).
- **New QHEI institute**: Add row to **PM_Vidyalaxmi_QHEI**.
- **Change contact / cache / default tab**: Edit **Config** (key/value).
- **Hide/show a column**: Edit **Config** (set the corresponding `*.column.COLNAME.visible` to `false` or `true`).

Changes to the spreadsheet are reflected on the site after cache expiry (see `cache_minutes` in Config); no redeploy needed for data-only changes.

---

## If a sheet’s data doesn’t appear on the site ("Data temporarily unavailable")

1. **Sharing**  
   The spreadsheet must be viewable by anyone with the link:  
   **Share** → **General access** → **Anyone with the link** → **Viewer**.  
   (Or **Public on the web** if you use that option.)

2. **Sheet tab name**  
   The website uses the **exact tab name** from the sheet.  
   - **Quick overview**: the tab must be named **Quick_Overview** (underscore) or **Quick Overview** (space). The code tries both.  
   - Other sheets: tab names must match exactly (e.g. **Config**, **Education_Loans_India**, **FAQ**).

3. **Columns**  
   First row = headers. For **Quick_Overview** use columns: **section**, **content**, **sort_order** (exact names).  
   Data starts from row 2.
