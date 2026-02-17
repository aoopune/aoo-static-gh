# -*- coding: utf-8 -*-
"""
Find universities that appear under different names (same institution, different strings)
so we can standardize them to one name.
"""
import csv
import os
import re
from collections import defaultdict

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(SCRIPT_DIR, "institutes-abroad-one-row-per-lender-university.csv")


def normalize_for_grouping(name):
    """Normalize name to find potential duplicates: strip parens, lowercase, collapse spaces."""
    if not name or not isinstance(name, str):
        return ""
    s = name.strip()
    # Remove parentheticals: "X (Y)" -> "X", "X (including Y)" -> "X", "X (formerly Y)" -> "X"
    s = re.sub(r"\s*\([^)]*\)\s*$", "", s)
    s = re.sub(r"\s*\([^)]*\)", "", s)  # any (..) in middle too
    # Hyphen to comma for "University of X - Y"
    if " - " in s and s.startswith("University of "):
        idx = s.find(" - ")
        after = s[idx + 3 :].strip()
        if after and not after.lower().startswith("university"):
            s = s[:idx] + ", " + after
    s = re.sub(r"\s+", " ", s).strip().lower()
    return s


def main():
    if not os.path.exists(CSV_PATH):
        print("File not found:", CSV_PATH)
        return
    rows = []
    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            rows.append(row)
    header = rows[0]
    try:
        ui = header.index("University")
        ci = header.index("Country / Main Campus") if "Country / Main Campus" in header else 2
    except (ValueError, IndexError):
        ui, ci = 1, 2
    # (normalized_name, country) -> set of raw University strings
    by_key = defaultdict(set)
    for row in rows[1:]:
        if len(row) <= max(ui, ci):
            continue
        uni = str(row[ui]).strip()
        country = str(row[ci]).strip()
        if not uni:
            continue
        key = (normalize_for_grouping(uni), country)
        by_key[key].add(uni)
    # Report groups with more than one distinct name
    variants = []
    for (norm, country), names in sorted(by_key.items()):
        if len(names) > 1:
            variants.append((country, sorted(names)))
    print("=== Same university, different names (by normalized name + country) ===\n")
    for country, names in sorted(variants, key=lambda x: (x[0], x[1][0])):
        print("Country:", country)
        for n in names:
            print("  -", n)
        print()
    print("Total variant groups:", len(variants))
    # Write variant groups to file for review
    out_path = os.path.join(SCRIPT_DIR, "variant_groups_found.txt")
    with open(out_path, "w", encoding="utf-8") as out:
        out.write("=== Same university, different names ===\n\n")
        for country, names in sorted(variants, key=lambda x: (x[0], x[1][0])):
            out.write("Country: " + country + "\n")
            for n in names:
                out.write("  - " + n + "\n")
            out.write("\n")
        out.write("Total variant groups: " + str(len(variants)) + "\n")
    print("Variant groups written to", out_path)
    # Also: find raw names that still contain "(...)" or " - " (University of X - Y) - might be unstandardized
    print("\n=== Names still containing parentheticals or ' - ' (count) ===\n")
    with_parens = set()
    with_hyphen = set()
    for row in rows[1:]:
        if len(row) <= ui:
            continue
        uni = str(row[ui]).strip()
        if not uni:
            continue
        if " (" in uni and ")" in uni:
            with_parens.add(uni)
        if " - " in uni and "University of " in uni:
            with_hyphen.add(uni)
    print("With parentheticals:", len(with_parens))
    print("With ' - ' (University of X - Y):", len(with_hyphen))
    with open(os.path.join(SCRIPT_DIR, "names_with_parens.txt"), "w", encoding="utf-8") as f:
        for u in sorted(with_parens):
            f.write(u + "\n")
    print("Names with (..) written to names_with_parens.txt")


if __name__ == "__main__":
    main()
