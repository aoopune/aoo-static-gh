# -*- coding: utf-8 -*-
"""
Fix only Bank of India rows with criteria "Top 3000 as per webometrics.org":
- Standardize University (same methods: map, ASCII, typable/searchable)
- Strip " / alternate name" from institute names before standardizing
- Fill Country from existing rows in file, or fallback map
"""
import csv
import os
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
TARGET_FILE = os.path.join(SCRIPT_DIR, "Copy of Loan data - institutes-abroad-standardized.csv")

# Import standardization from main script (same folder)
sys.path.insert(0, SCRIPT_DIR)
from standardize_institutes_abroad import (
    normalize_university,
    to_ascii_name,
    to_typable_searchable_name,
    normalize_country,
)


def strip_alternate_name(uni):
    """Remove ' / Chinese or other alternate name' so we standardize the main name."""
    if not uni or " / " not in uni:
        return (uni or "").strip()
    return uni.split(" / ")[0].strip()


def standardize_uni(raw):
    """Full chain: strip alternate, normalize, ASCII, typable."""
    raw = strip_alternate_name(raw)
    s = normalize_university(raw)
    s = to_ascii_name(s)
    s = to_typable_searchable_name(s)
    return s


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else TARGET_FILE
    if not os.path.isfile(path):
        print("File not found:", path)
        return

    rows = []
    with open(path, "r", encoding="utf-8", newline="") as f:
        reader = csv.reader(f)
        rows = list(reader)

    # Build university -> country from non-webometrics rows only (so we don't reuse wrong countries)
    uni_to_country = {}
    for row in rows:
        if len(row) < 4:
            continue
        if "webometrics" in (row[3] or "").lower():
            continue
        if row[2].strip():  # has country
            std = standardize_uni(row[1])
            if std and std not in uni_to_country:
                uni_to_country[std] = normalize_country(row[2])

    # Fallback: known institute -> country when not in file
    fallback_country = {
        "Tsinghua University": "China",
        "Peking University": "China",
        "Shanghai Jiao Tong University": "China",
        "Zhejiang University": "China",
        "Fudan University": "China",
        "University of Science and Technology of China": "China",
        "University of Tokyo": "Japan",
        "Seoul National University": "South Korea",
        "ETH Zurich": "Switzerland",
        "Ecole Polytechnique Federale de Lausanne": "Switzerland",
        "University of Zurich": "Switzerland",
        "Universidade de Sao Paulo (USP)": "Brazil",
        "University of Bologna": "Italy",
        "Sapienza University of Rome": "Italy",
        "University of Milan": "Italy",
        "University of Padua": "Italy",
        "University of Amsterdam": "Netherlands",
        "Utrecht University": "Netherlands",
        "University of Groningen": "Netherlands",
        "Delft University of Technology": "Netherlands",
        "Vrije Universiteit Amsterdam": "Netherlands",
        "University of Copenhagen": "Denmark",
        "Aarhus University": "Denmark",
        "University of Oslo": "Norway",
        "University of Helsinki": "Finland",
        "Lund University": "Sweden",
        "Uppsala University": "Sweden",
        "Karolinska Institutet": "Sweden",
        "Ghent University": "Belgium",
        "KU Leuven": "Belgium",
        "University of Barcelona": "Spain",
        "Heidelberg University": "Germany",
        "Technical University of Munich": "Germany",
        "Tel Aviv University": "Israel",
        "Catholic University of Leuven": "Belgium",
        "KU Leuven": "Belgium",
        "VU University of Amsterdam": "Netherlands",
        "University of Science & Technology of China": "China",
        "University of Milano": "Italy",
        "University of Milan": "Italy",
        "Eidgenossische Technische Hochschule ETH Zurich": "Switzerland",
    }

    fixed = 0
    for i, row in enumerate(rows):
        if len(row) < 4:
            continue
        lender, uni, country, criteria = row[0].strip(), row[1], row[2], row[3]
        if lender != "Bank of India":
            continue
        if "webometrics" not in (criteria or "").lower():
            continue
        # Standardize university
        std_uni = standardize_uni(uni)
        row[1] = std_uni
        # Set country: from lookup (same uni elsewhere in file), then fallback, then infer
        row[2] = uni_to_country.get(std_uni) or fallback_country.get(std_uni) or ""
        if not row[2] and std_uni:
                # Infer from name when not in lookup
                u = std_uni
                if "Hong Kong" in u:
                    row[2] = "China"
                elif "Singapore" in u or "Nanyang" in u:
                    row[2] = "Singapore"
                elif "Tokyo" in u or "Osaka" in u or "Kyoto" in u or "Tohoku" in u:
                    row[2] = "Japan"
                elif "Seoul" in u or "Korea" in u:
                    row[2] = "South Korea"
                elif any(x in u for x in ("Oxford", "Cambridge", "London", "Edinburgh", "Manchester", "Leeds", "Bristol", "Warwick", "Nottingham", "Sheffield", "Exeter", "Birmingham", "Glasgow", "Southampton", "Newcastle", "Liverpool", "Kings College", "Imperial College", "Queen Mary", "UCL")):
                    row[2] = "United Kingdom"
                elif any(x in u for x in ("Melbourne", "Sydney", "Queensland", "Monash", "Adelaide", "Western Australia", "New South Wales", "Australian National")):
                    row[2] = "Australia"
                elif any(x in u for x in ("Toronto", "British Columbia", "McGill", "Alberta", "Calgary", "Waterloo", "McMaster", "Montreal", "Queens University")):
                    row[2] = "Canada"
                elif any(x in u for x in ("ETH", "Zurich", "Lausanne", "Geneva", "Basel")):
                    row[2] = "Switzerland"
                elif any(x in u for x in ("Beijing", "Peking", "Tsinghua", "Shanghai", "Fudan", "Zhejiang", "Nanjing", "Wuhan")):
                    row[2] = "China"
                else:
                    row[2] = "United States of America"
        fixed += 1

    with open(path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        for row in rows:
            writer.writerow(row)
    print("Fixed", fixed, "webometrics rows in", path)


if __name__ == "__main__":
    main()
