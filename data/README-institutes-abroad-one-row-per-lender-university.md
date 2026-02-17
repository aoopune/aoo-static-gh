# Institutes Abroad – One Row per (Lender, University)

## Purpose

This file is the **database for the main table**: one row per lender per university, with **combined courses** in a single cell. When a user selects a university, the table shows which banks give loans and which courses they cover.

## File

- **institutes-abroad-one-row-per-lender-university.csv** – One row per (Lender name, University, Country). Courses column = all courses for that lender+university combined (e.g. "Management; STEM").

## How it was built

1. **Standardized names** – Same university has one name everywhere:
   - Virginia Tech: "Virginia Polytechnic Institute (Virginia Tech)", "Virginia Tech", "Virginia Polytechnic Institute" → **Virginia Polytechnic Institute and State University**
   - City, London: "City, University of London (including Bayes Business School)", "City St Georges, University of London", "City University London" → **City, University of London**
   - "(including ...)" and "(formerly ...)" parentheticals stripped so one canonical name.
2. **Merged duplicate rows** – When the same bank listed the same university multiple times (e.g. Bank of Baroda, Virginia Tech: Management, STEM, STEM), merged into **one row** with Courses = "Management; STEM".

## Regenerating

1. Have the latest **institutes-abroad-standardized-prodigy-courses.csv** (or run `standardize_institutes_abroad.py` on the raw source, then add Prodigy courses if needed).
2. Run: `py data\merge_and_standardize_institutes.py`
3. Output is written to **institutes-abroad-one-row-per-lender-university.csv**.

Use this CSV as the data source for the main comparison table.
