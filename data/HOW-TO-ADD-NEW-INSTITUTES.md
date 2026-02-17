# How to Add New Institutes and Run the Same Process

## What you need to do

1. **Update the source CSV** with your new institutes (same columns as the rest).
2. **Tell me when it’s ready** so I can run the script and give you the updated standardized file.

---

## Option A (recommended): Replace the full source file

1. In your Google Sheet **“Institutes data abroad”**, add the new institutes (one row per lender–institute–country–criteria–source–courses).
2. **File → Download → Comma-separated values (.csv)**.
3. Save the file as:
   - **`Copy of Loan data - Institutes data abroad.csv`**
   - In folder: **`c:\Users\Yash Jangid\Desktop\dasds\aoo-static-gh\data`**
   - Overwrite the existing file if it’s already there.
4. Tell me: **“I’ve updated the source CSV with new institutes”** (or that you’ve replaced the file).

I will then:
- Run the same standardization process on the full file (old + new institutes).
- Standardize institute names (one name per institute, ASCII, typable/searchable).
- Normalize **country names** to match the rest of the file (e.g. USA → United States of America, UK → United Kingdom, Swiss Confederation → Switzerland, Türkiye → Turkiye).
- Output the updated **institutes-abroad-standardized-ascii.csv** (or **institutes-abroad-standardized.csv** if the ascii file is open).

---

## Option B: Only new rows in a separate file

If you prefer to send only the **new** institutes:

1. Create a CSV with **the same 6 columns** and **a header row**:
   - **Lender name**, **University**, **Country / Main Campus**, **Criteria**, **Source**, **Courses**
2. Put one row per new institute (you can have several rows for the same institute from different banks).
3. Either:
   - Save it in the `data` folder (e.g. **`new-institutes-abroad.csv`**) and tell me the file name, or  
   - Paste the contents here (with header + rows).

I will:
- Merge these rows into the existing source (or process them and append to the standardized file).
- Run the same process (standardize institute names + country names).
- Give you the updated full standardized CSV.

---

## Country names – how they are written

The script will align country names with the format already used in your file, for example:

- **United States of America** (not USA, US)
- **United Kingdom** (not UK)
- **Switzerland** (not Swiss Confederation)
- **Israel** (not State of Israel)
- **Turkiye** (ASCII; not Türkiye)
- **South Korea**, **Russian Federation**, **United Arab Emirates**, etc.

If you use a different spelling (e.g. USA, UK), the script will map it to the form above. If you add a country that isn’t in the map yet, tell me and I’ll add it.

---

## Summary

| Step | You | Me |
|------|-----|-----|
| 1 | Add new institutes to the sheet and export CSV, or create a CSV with only new rows. | — |
| 2 | Put the file in `data` (replace “Copy of Loan data - Institutes data abroad.csv” or add “new-institutes-abroad.csv”) and tell me. | — |
| 3 | — | Run the script; standardize institute + country names; output updated CSV. |

After that, you’ll have one final CSV with all institutes (including the new ones) standardized and country names consistent.
