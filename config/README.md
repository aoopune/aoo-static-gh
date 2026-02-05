# Config CSV

This folder contains the generated `config.csv` file used to populate the Config Google Sheet.

## Workflow

1. **Generate** the config CSV:
   ```bash
   node scripts/generate-config.js
   ```

2. **Paste** the contents of `config/config.csv` into your Config sheet in Google Sheets.
   - Open: https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/
   - Go to the **Config** sheet tab
   - Ensure columns: `key` | `value`
   - Paste the CSV content (replace or append rows)

3. **Edit** visibility in the sheet:
   - Set `value` = `false` for any `*.column.COLNAME.visible` key to hide that column
   - The website fetches the Config sheet and applies these settings dynamically

4. **No redeploy** needed – the site reads config from the sheet at runtime.

## What the script generates

- General settings: `cache_minutes`, `contact_phone`, `contact_email`, etc.
- Per-column visibility for **Compare (India)**: `compare.india.column.COLNAME.visible`
- Per-column visibility for **Compare (Abroad)**: `compare.abroad.column.COLNAME.visible`
- Per-column visibility for **QHEI table**: `qhei.column.COLNAME.visible`
- Per-column visibility for **Government Schemes**: `gov_schemes.column.COLNAME.visible`
- Results columns: `results.visible_columns`

See `CONFIG_REFERENCE.md` in the project root for full documentation.
