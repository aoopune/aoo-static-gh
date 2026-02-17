# -*- coding: utf-8 -*-
"""
Fetch Prodigy Finance school list from https://prodigyfinance.com/where-can-i-study/all-schools/
Parse HTML to get university -> fields of study (courses offered in: Business & Management, etc.)
Update Copy of Loan data - institutes-abroad-standardized.csv: set Courses for each Prodigy row.
"""
import csv
import os
import re
import time
import urllib.request
import urllib.error

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(SCRIPT_DIR, "Copy of Loan data - institutes-abroad-standardized.csv")
BASE_URL = "https://prodigyfinance.com/where-can-i-study/all-schools"

# Normalize name for matching CSV (same idea as standardized CSV: no apostrophe, typable, ASCII)
def normalize_for_match(name):
    if not name:
        return ""
    import unicodedata
    s = name.strip()
    # Remove apostrophe: King's -> Kings, Queen's -> Queens
    s = re.sub(r"'", "", s)
    # Diacritics -> ASCII for matching (e.g. Université -> Universite)
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = s.replace("\xdf", "ss")  # ß
    s = re.sub(r"\s+", " ", s)
    return s.strip().lower()


def fetch_page(page_num):
    if page_num <= 1:
        url = BASE_URL + "/"
    else:
        url = BASE_URL + "/" + str(page_num) + "/"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return r.read().decode("utf-8", errors="ignore")


def parse_school_cards(html):
    # Each card: link to school (text = university name), then "X course(s) offered in:", then Field divs
    # HTML: ...<a ...>University Name</a>...</p>...offered in:</p><div class="...Field...">Business &amp; Management</div>...
    # Split by "offered in" to find blocks; then look backward for last <a href="/...">...</a> (school link) and forward for Field divs
    results = []  # list of (university_name, list of field names)
    # Find all "course(s) offered in:" and get preceding university name and following fields
    pattern = re.compile(
        r'<a[^>]+href="(/[^"]+)"[^>]*>([^<]+)</a>'  # link text = university
        r'.*?'
        r'(\d+)\s*courses?\s+offered\s+in\s*:</p>\s*'
        r'(.*?)'
        r'(?:<div class="[^"]*Block[^"]*"[^>]*>|1 campus|</div>\s*</div>\s*</div>)',
        re.DOTALL
    )
    # Simpler: find all school card blocks by splitting on a consistent delimiter
    # From the HTML we have: <h4><a ...>Name</a></h4><p>College</p>... "offered in:" ... <div class="...Field...">X</div>
    parts = re.split(r'<h4[^>]*>', html)
    for part in parts[1:]:  # skip before first h4
        # First <a href="...">University Name</a>
        m = re.search(r'<a[^>]+href="[^"]*"[^>]*>([^<]+)</a>', part)
        if not m:
            continue
        uni_name = m.group(1).strip()
        uni_name = uni_name.replace("&amp;", "&")
        # Find "offered in:" (HTML has "course<!-- --> offered in:</p>" - no space before comment)
        offered = re.search(r'(\d+)\s*courses?\s*(?:<!--[^>]*-->\s*)?offered\s+in\s*:\s*</p>\s*', part, re.IGNORECASE)
        if not offered:
            continue
        # Get all styles__Field or Field-sc- divs in this block (field names)
        field_divs = re.findall(r'<div class="[^"]*Field[^"]*"[^>]*>([^<]+)</div>', part)
        fields = []
        for f in field_divs:
            f = f.strip().replace("&amp;", "&")
            if f and f not in ("United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Netherlands", "Ireland", "Spain", "Italy", "Switzerland", "Singapore", "China", "India", "United Arab Emirates", "New Zealand", "Sweden", "Belgium", "Austria", "Japan", "South Korea", "Brazil", "Mexico", "Argentina", "Israel", "South Africa", "Russia", "Poland", "Portugal", "Czech Republic", "Hungary", "Norway", "Denmark", "Finland", "Greece", "Turkey", "Taiwan", "Hong Kong", "Malaysia", "Thailand", "Philippines", "Indonesia", "Colombia", "Chile", "Peru"):
                fields.append(f)
        if not fields:
            # Maybe only one field and it's in a different structure
            m2 = re.search(r'offered\s+in\s*:</p>\s*<div[^>]*>([^<]+)</div>', part)
            if m2:
                fields = [m2.group(1).strip().replace("&amp;", "&")]
        results.append((uni_name, fields))
    return results


def main():
    # 1) Fetch all pages and build university -> set of fields
    uni_to_fields = {}  # normalized name -> set of field strings
    page = 1
    max_pages = 115  # 1139 schools, ~10 per page
    while page <= max_pages:
        print("Fetching page", page, "...")
        try:
            html = fetch_page(page)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                print("Page", page, "not found (404), stopping pagination.")
            else:
                print("Error fetching page", page, ":", e)
            break
        except Exception as e:
            print("Error fetching page", page, ":", e)
            break
        cards = parse_school_cards(html)
        if not cards:
            print("No cards on page", page, "stopping.")
            break
        for uni_name, fields in cards:
            key = normalize_for_match(uni_name)
            if key not in uni_to_fields:
                uni_to_fields[key] = set()
            for f in fields:
                if f:
                    uni_to_fields[key].add(f)
            # Alias: "The University of X" -> also under "University of X" for CSV matching
            if key.startswith("the "):
                alt = key[4:].strip()
                if alt:
                    if alt not in uni_to_fields:
                        uni_to_fields[alt] = set()
                    uni_to_fields[alt].update(uni_to_fields[key])
        print("  got", len(cards), "cards, total unis", len(uni_to_fields))
        page += 1
        time.sleep(0.5)
    # 2) Read CSV, update Prodigy rows
    rows = []
    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            rows.append(row)
    # Header may be row 0 or 2 (file has blank lines)
    header = None
    for r in rows:
        if r and len(r) > 1 and "Lender name" in str(r[0]):
            header = r
            break
    if not header:
        header = rows[2] if len(rows) > 2 else (rows[0] if rows else [])
    try:
        li = header.index("Lender name") if "Lender name" in header else 0
        ui = header.index("University") if "University" in header else 1
        ci = header.index("Courses") if "Courses" in header else 5
    except (ValueError, IndexError):
        li, ui, ci = 0, 1, 5
    updated = 0
    unmatched = []
    for i, row in enumerate(rows):
        if len(row) <= max(li, ui, ci):
            continue
        if str(row[li]).strip().lower() == "lender name":
            continue
        if row[li].strip() != "Prodigy":
            continue
        uni = row[ui].strip()
        key = normalize_for_match(uni)
        fields = uni_to_fields.get(key)
        if fields:
            courses_str = "; ".join(sorted(fields))
            row[ci] = courses_str
            updated += 1
        else:
            # Try without " (formerly X)" or similar
            base_uni = re.sub(r"\s*\([^)]*\)\s*$", "", uni).strip()
            key2 = normalize_for_match(base_uni)
            fields = uni_to_fields.get(key2)
            if fields:
                courses_str = "; ".join(sorted(fields))
                row[ci] = courses_str
                updated += 1
            else:
                unmatched.append(uni)
    # Write back (or to alternate file if main is locked)
    out_path = CSV_PATH
    try:
        with open(CSV_PATH, "w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f)
            writer.writerows(rows)
    except PermissionError:
        out_path = os.path.join(SCRIPT_DIR, "institutes-abroad-standardized-prodigy-courses.csv")
        with open(out_path, "w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f)
            writer.writerows(rows)
        print("Note: Could not write to main CSV (file may be open). Wrote to:", out_path)
    else:
        print("Wrote to:", CSV_PATH)
    print("Updated", updated, "Prodigy rows with courses.")
    if unmatched:
        print("Unmatched Prodigy universities (", len(unmatched), "):", ", ".join(unmatched[:15]), "..." if len(unmatched) > 15 else "")


if __name__ == "__main__":
    main()
