# Institutes Abroad – Standardized CSV

## Files

- **institutes-abroad-standardized-ascii.csv** – Primary output: typable, searchable institute names (use this for comparison table).
- **institutes-abroad-standardized.csv** – Same content; written when the ascii file is locked.

## How names are made searchable

1. **One name per institute** – Variants (e.g. "MIT", "Massachusetts Institute of Technology (MIT)") are mapped to one standard name so one selection shows all banks.
2. **Hyphen vs comma** – "University of California - Berkeley" (e.g. Mpower) and "University of California, Berkeley" (e.g. Bank of India) are unified to the comma form so a single search result shows every lender.
3. **ASCII only** – Diacritics removed (Sao Paulo, Catolica, Universitat, Ecole, Federale) so names are typable everywhere.
4. **No apostrophes** – Stored without apostrophes so both spellings find the same row:
   - University of **Hail** (search: "Hail" or "Ha'il")
   - **Kings** College London ("Kings" or "King's")
   - **Queens** University ("Queens" or "Queen's")
   - University of **Hawaii** ("Hawaii" or "Hawai'i")
   - **d'Azur** → **d Azur** (single letter before apostrophe keeps a space: "Cote d Azur").
5. **French "Universite" → "University"** – e.g. "University of Rennes 1", "University of Montreal"; "1" = campus 1.
6. **Italian "Universita'" → "University of"** – e.g. "University of Salerno", "Ca Foscari University of Venice".
7. **Roman numerals → digits** – e.g. Toulouse **3**, Carlos **3**, so "3" is clear.

## Regenerating

1. Put the latest export in: `Copy of Loan data - Institutes data abroad.csv`.
2. Run: `py data\standardize_institutes_abroad.py`
3. Output is written to `institutes-abroad-standardized-ascii.csv` (or `institutes-abroad-standardized.csv` if the ascii file is open).

No changes are made to: Lender name, Country, Criteria, Source, Courses.
