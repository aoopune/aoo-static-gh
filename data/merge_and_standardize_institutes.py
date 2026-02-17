# -*- coding: utf-8 -*-
"""
1. Standardize university names (Virginia Tech variants, City/Bayes, (including), (formerly)).
2. Merge duplicate (Lender, University) rows: one row per (Lender, University) with combined Courses.
Use this sheet as the database for the main table.
"""
import csv
import os
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# Default: use the prodigy-courses sheet; can override
INPUT_CSV = os.path.join(SCRIPT_DIR, "institutes-abroad-standardized-prodigy-courses.csv")
OUTPUT_CSV = os.path.join(SCRIPT_DIR, "institutes-abroad-one-row-per-lender-university.csv")

# Import normalization from standardize script
import standardize_institutes_abroad as std

COURSE_SEP = "; "


def normalize_row_university(university):
    """Apply full standardization chain to university name."""
    if not university or not str(university).strip():
        return university
    n = std.normalize_university(university)
    n = std.to_ascii_name(n)
    n = std.to_typable_searchable_name(n)
    return n.strip() if n else university


def combine_courses(course_strings):
    """Merge multiple course strings into one; dedupe and sort."""
    seen = set()
    parts = []
    for s in course_strings:
        if not s or not str(s).strip():
            continue
        # Split by ; or , and trim
        for part in re.split(r"[;,]", str(s)):
            p = part.strip()
            if p and p not in seen:
                seen.add(p)
                parts.append(p)
    return COURSE_SEP.join(sorted(parts)) if parts else ""


def main():
    if not os.path.exists(INPUT_CSV):
        print("Input not found:", INPUT_CSV)
        return
    rows = []
    with open(INPUT_CSV, "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            rows.append(row)
    if not rows:
        print("Empty file")
        return
    # Find header row (may have leading empty rows)
    header = None
    data_start = 0
    for i, row in enumerate(rows):
        if row and len(row) > 1 and "Lender name" in str(row[0]):
            header = row
            data_start = i + 1
            break
    if not header:
        header = rows[0]
        data_start = 1
    try:
        li = header.index("Lender name")
        ui = header.index("University")
        ci_idx = header.index("Courses")
        country_idx = header.index("Country / Main Campus") if "Country / Main Campus" in header else 2
        criteria_idx = header.index("Criteria") if "Criteria" in header else 3
        source_idx = header.index("Source") if "Source" in header else 4
    except (ValueError, IndexError):
        li, ui, country_idx, criteria_idx, source_idx, ci_idx = 0, 1, 2, 3, 4, 5
    # Normalize and group by (Lender, University, Country)
    groups = {}
    for i in range(data_start, len(rows)):
        row = rows[i]
        if len(row) <= max(li, ui, ci_idx, country_idx, criteria_idx, source_idx):
            continue
        lender = str(row[li]).strip()
        university = str(row[ui]).strip()
        country = str(row[country_idx]).strip() if len(row) > country_idx else ""
        if not lender or not university:
            continue
        university = normalize_row_university(university)
        country = std.normalize_country(country) if country else ""
        criteria = str(row[criteria_idx]).strip() if len(row) > criteria_idx else ""
        source = str(row[source_idx]).strip() if len(row) > source_idx else ""
        courses = str(row[ci_idx]).strip() if len(row) > ci_idx else ""
        key = (lender, university, country)
        if key not in groups:
            groups[key] = {"criteria": criteria, "source": source, "courses": []}
        groups[key]["courses"].append(courses)
    # Build output rows
    out_rows = [header]
    for (lender, university, country), data in sorted(groups.items()):
        combined_courses = combine_courses(data["courses"])
        out_rows.append([
            lender,
            university,
            country,
            data["criteria"],
            data["source"],
            combined_courses,
        ])
    with open(OUTPUT_CSV, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerows(out_rows)
    print("Wrote", OUTPUT_CSV)
    print("Rows: before", len(rows) - data_start, "after (unique Lender+University)", len(out_rows) - 1)


if __name__ == "__main__":
    main()
