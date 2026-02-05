# Config Sheet Reference

**Location**: Google Sheet named **Config** in the Apply Only Once spreadsheet.

**Spreadsheet**: `https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/`

**Structure**: Two columns – `key` and `value`. Add one row per config entry.

---

## How to Update Config (Workflow)

1. **Generate config CSV locally**:
   ```bash
   node scripts/generate-config.js
   ```
   This fetches column headers from each data sheet and writes `config/config.csv` with all per-column visibility keys.

2. **Paste into Config sheet**:
   - Open the spreadsheet.
   - Go to the **Config** sheet tab.
   - Ensure columns: `key` | `value` (row 1 = headers).
   - Copy the contents of `config/config.csv` and paste into the sheet (replace existing rows or append).

3. **Edit visibility**:
   - Set `compare.india.column.COLNAME.visible` = `false` to hide a column in Compare (India).
   - Set `compare.abroad.column.COLNAME.visible` = `false` to hide a column in Compare (Abroad).
   - Set `qhei.column.COLNAME.visible` = `false` to hide a column in the QHEI table.
   - Set `gov_schemes.column.COLNAME.visible` = `false` to hide a field in Government Schemes cards.

4. **Website**: The site fetches the Config sheet and applies these settings. No redeploy needed.

---

## All Config Keys (Implemented)

### General
| key | value | default | description |
|-----|-------|---------|-------------|
| cache_minutes | number | 5 | Minutes to cache sheet data in browser |
| contact_phone | string | +91 91123 34367 | Phone/WhatsApp in footer |
| contact_email | string | applyonlyonceindia@gmail.com | Email in footer |

### Compare table (Page 2)
| key | value | default | description |
|-----|-------|---------|-------------|
| compare.visible_columns | comma-separated column names | (all) | Whitelist. If set, only these columns are shown. |
| compare.india.column.COLNAME.visible | true \| false | true | Per-column visibility for India tab |
| compare.abroad.column.COLNAME.visible | true \| false | true | Per-column visibility for Abroad tab |
| default_compare_tab | india \| abroad | india | Default tab on Compare page |

### Results (Page 8 – See what fits)
| key | value | default | description |
|-----|-------|---------|-------------|
| results.visible_columns | comma-separated column names | (predefined) | Columns to show in each bank card |

### QHEI table (Page 5 – PM-Vidyalaxmi)
| key | value | default | description |
|-----|-------|---------|-------------|
| qhei.visible_columns | comma-separated column names | (all) | Whitelist. If set, only these columns are shown. |
| qhei.column.COLNAME.visible | true \| false | true | Per-column visibility for QHEI table |
| qhei.rows_per_page | number | (all) | Rows per page if pagination added |

### Government schemes (Page 6)
| key | value | default | description |
|-----|-------|---------|-------------|
| gov_schemes.column.COLNAME.visible | true \| false | true | Per-column visibility for scheme cards |
| gov_schemes.cards_per_row | number | 2 | Cards per row on desktop |

### FAQ (Page 4)
| key | value | default | description |
|-----|-------|---------|-------------|
| faq.expand_default | true \| false | true | All categories expanded by default |

### Document checklist (Page 7)
| key | value | default | description |
|-----|-------|---------|-------------|
| document_checklist.group_by | category \| subcategory | category | How to group items |

---

## Per-column visibility keys

The script `scripts/generate-config.js` generates keys for every column in the sheet. For example:

- `compare.india.column.bank_name State Bank of India State Bank of India.visible` = `true`
- `compare.abroad.column.bank_name State Bank of India Bank of India Union Bank of India Punjab National Bank Bank of Baroda Canara Bank.visible` = `true`
- `qhei.column.Institute Name.visible` = `true`
- `gov_schemes.column.Scheme name.visible` = `true`

Set `value` to `false` to hide that column. Leave `true` or remove the row to show it.
