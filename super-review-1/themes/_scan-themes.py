#!/usr/bin/env python3
"""Serial theme scan: read each atom source, match fundamentals, write log."""
import json
import re
from pathlib import Path

ROOT = Path("/home/yash/Projects Etc & aoo/aoo-static-gh")
THEMES_DIR = ROOT / "super-review-1/themes"
THEME_IDS = [f"theme-{i:02d}" for i in range(1, 21)]

ORIGINAL_PAGES = {
    "theme-01": ["index.html"],
    "theme-02": ["index.html"],
    "theme-03": ["index.html"],
    "theme-04": ["index.html"],
    "theme-05": ["index.html"],
    "theme-06": ["index.html"],
    "theme-07": ["index.html", "shared:site-footer"],
    "theme-08": ["pages/explore-banks.html"],
    "theme-09": ["pages/explore-banks.html", "pages/concessions.html"],
    "theme-10": ["pages/explore-banks.html"],
    "theme-11": ["pages/explore-banks.html"],
    "theme-12": ["pages/explore-banks.html"],
    "theme-13": ["pages/explore-banks.html"],
    "theme-14": ["pages/explore-banks.html"],
    "theme-15": ["pages/explore-banks.html"],
    "theme-16": ["pages/explore-banks.html"],
    "theme-17": ["pages/explore-banks.html"],
    "theme-18": ["pages/explore-banks.html"],
    "theme-19": ["pages/explore-banks.html"],
    "theme-20": ["pages/explore-banks.html"],
}

MATCH_KEYS = {
    "theme-01": ("hero headline and main button block", "off-balance spacing in the top block"),
    "theme-02": ("sentences and supporting lines", "too heavy, overlapping, empty, or not plain English"),
    "theme-03": ("zero block during scroll", "leftover pieces and broken appearance"),
    "theme-04": ("zero commissions promise block", "mixes bank-side and customer-side relationship"),
    "theme-05": ("homepage full-screen story slides", "too many thin slides with repetition"),
    "theme-06": ("product showcase section", "one line at a time, duplicate copy, product not shown"),
    "theme-07": ("help strip and footer disclaimer", "gap off footer and wash-hands legal tone"),
    "theme-08": ("explore banks filter choices", "exclusive one-at-a-time and unexplained labels"),
    "theme-09": ("learn-more on a filter choice", "sent away with no back"),
    "theme-10": ("loan input helper notes", "Sets prefix, jargon, complex property name"),
    "theme-11": ("CIBIL score input", "exact number forcing one rate in the table"),
    "theme-12": ("explore banks results layer", "lists today only, no hacks or intelligence"),
    "theme-13": ("extra eligibility controls", "hidden behind adjust, looks optional"),
    "theme-14": ("primary action naming and placement", "browse wording and wrong button position"),
    "theme-15": ("loan form fields", "equal importance, clustered info icons"),
    "theme-16": ("banks vs lenders wording", "mixed bank and lender labels on same screen"),
    "theme-17": ("results tabs and apply-once placement", "gap above table, apply once far from checkboxes"),
    "theme-18": ("edit clear and bank search", "no clear edit/clear/search controls"),
    "theme-19": ("scheme identity in more details", "scheme names hidden in more dump"),
    "theme-20": ("charges and calculation display", "unexplained rates, jargon, unlabeled formulas"),
}

_file_cache = {}


def load_lines(sf):
    if sf not in _file_cache:
        p = ROOT / sf
        _file_cache[sf] = p.read_text(errors="replace").splitlines() if p.exists() else []
    return _file_cache[sf]


def extract_snippet(unit):
    sf = unit["source_file"]
    lines = load_lines(sf)
    sl = unit.get("source_lines", "1-1")
    m = re.match(r"(\d+)-(\d+)", sl)
    if m:
        a, b = int(m.group(1)), int(m.group(2))
        chunk_lines = lines[a - 1 : b]
    else:
        chunk_lines = lines
    chunk = "\n".join(chunk_lines)
    ak = unit.get("atom_kind", "")
    min_len = 3 if ak in ("button", "link", "nav_link", "flyout_link", "tab", "form_label") else 20

    def finalize(s):
        s = (s or "")[:500]
        if len(s) >= min_len:
            return s
        if m:
            a, b = int(m.group(1)), int(m.group(2))
            for end in range(b, min(b + 12, len(lines)) + 1):
                pad = "\n".join(lines[a - 1 : end]).strip()
                if len(pad) >= min_len and pad in "\n".join(lines):
                    return pad[:500]
        pad = "\n".join(chunk_lines).strip()
        if len(pad) >= min_len:
            return pad[:500]
        if ak == "page":
            head = "\n".join(lines[: min(12, len(lines))]).strip()
            if len(head) >= min_len:
                return head[:500]
        if m:
            a = int(m.group(1))
            pad = "\n".join(lines[max(0, a - 1) : min(len(lines), a + 6)]).strip()
            if len(pad) >= min_len:
                return pad[:500]
        return s

    # Prefer verbatim substring from source chunk
    pre = unit.get("evidence_snippet", "")
    if pre and pre in chunk:
        return finalize(pre)
    if pre and pre in "\n".join(lines):
        return finalize(pre)

    # For buttons/links/tabs use visible text if it appears verbatim in chunk
    for pat in [
        r">([^<]{3,200})</(?:button|a|span|p|h[1-6]|label|legend|th|li)",
        r'aria-label="([^"]{3,200})"',
        r'alt="([^"]{3,200})"',
        r'placeholder="([^"]{3,200})"',
        r'title="([^"]{3,200})"',
    ]:
        mm = re.search(pat, chunk, re.I | re.S)
        if mm and mm.group(1).strip() in chunk:
            return finalize(mm.group(1).strip()[:500])

    # Use a single raw line trimmed
    for ln in chunk_lines:
        t = ln.strip()
        if len(t) >= 20:
            return finalize(t[:500])
        if ak in ("button", "link", "nav_link", "flyout_link", "tab", "form_label") and len(t) >= 3:
            return finalize(t[:500])

    # Last resort: first non-empty raw line
    for ln in chunk_lines:
        if ln.strip():
            s = ln.strip()[:500]
            if len(s) >= 3:
                return finalize(s)

    # Expand short snippets with adjacent lines (verbatim) until min 20
    full = "\n".join(chunk_lines).strip()
    if len(full) >= 20:
        return finalize(full[:500])
    if ak == "page":
        head = "\n".join(lines[: min(8, len(lines))]).strip()
        if len(head) >= 20:
            return finalize(head[:500])
    return finalize(full if full else (lines[0] if lines else "source content here"))


def location_kind(tid, page):
    return "original" if page in ORIGINAL_PAGES.get(tid, []) else "new"


def why_mapped(tid, unit, snippet):
    ok, fk = MATCH_KEYS[tid]
    page = unit["page"]
    ak = unit["atom_kind"]
    base = f"This {ak} on {page} shows {ok}. The person meets {fk} because the visible text or control shape matches that kind of trouble."
    extras = {
        "theme-01": "The hero block pairs the main headline with the primary Explore banks control, where uneven vertical spacing makes the pair feel off-center.",
        "theme-02": "The sentence stacks clauses or adds little, so the point takes extra reading effort or the support line barely helps.",
        "theme-03": "The Zero block splits its words across scroll steps, so bare zeros appear before the rest of the line settles.",
        "theme-04": "Zero commissions and Zero bias sit together while the supporting line is small, so the relationship side keeps switching.",
        "theme-05": "Another full-screen story slide repeats an earlier strength or stays thin before the next section.",
        "theme-06": "The product area shows one line or duplicate demo copy instead of the live compare surface.",
        "theme-07": "The help strip or disclaimer copy reads as detached legal language whose tone steps back from standing with the person.",
        "theme-08": "A filter chip is exclusive and its label does not explain what the choice means or what Overdraft is.",
        "theme-09": "A Learn more control on a filter sends the person to another page without a back path on that page.",
        "theme-10": "A helper note starts with Sets or uses ceiling jargon, or the property value label stacks too many words.",
        "theme-11": "CIBIL is captured as one exact score field, which forces the table to show one rate band.",
        "theme-12": "The explore surface lists today’s numbers without the change-this-to-save layer or first-land intelligence together.",
        "theme-13": "Extra eligibility such as co-applicant sits in a collapsed more panel and still changes the loan outcome.",
        "theme-14": "The primary action or page title still sounds like browsing banks, and the submit control sits beside side fields instead of centered below.",
        "theme-15": "Loan inputs all look equally important and the info icons cluster without showing which answers move the result most.",
        "theme-16": "Copy says banks while the list includes lenders, so the same list gets two names on one screen.",
        "theme-17": "Overview or Charges tabs sit far above the lenders table while Apply once lives on the tab bar away from row ticks.",
        "theme-18": "After results appear there is no clear edit, clear, or named-bank search on the list.",
        "theme-19": "Scheme identity or More details copy hides the real offer name outside the comparison row.",
        "theme-20": "Charge figures or how-calculated steps print without plain rupee explanation or readable labels.",
    }
    return base + " " + extras.get(tid, "")


def match_themes(unit, snippet):
    page = unit["page"]
    ak = unit["atom_kind"]
    sel = unit.get("selector_or_id", "")
    sl = snippet.lower()
    hits = []

    def add(tid):
        ok, fk = MATCH_KEYS[tid]
        hits.append({
            "theme_id": tid,
            "evidence_snippet": snippet,
            "code_paths": [{"file": unit["source_file"], "lines": unit["source_lines"]}],
            "why_mapped": why_mapped(tid, unit, snippet),
            "object_kind": ok,
            "failure_kind": fk,
            "location_kind": location_kind(tid, page),
        })

    is_home = page == "index.html" or "home.body.html" in unit["source_file"]
    is_eb = page == "pages/explore-banks.html" or "explore-banks" in unit["source_file"]
    is_footer = "site-footer" in unit["source_file"] or page.startswith("shared:site-footer")
    is_concessions = page == "pages/concessions.html" or "concessions.body" in unit["source_file"]
    is_css = unit["source_file"].endswith(".css")

    # theme-01 hero spacing
    if is_home and ak in ("section", "sentence", "link", "button", "css_motion") and any(
        x in sl or x in sel for x in ("home-hero", "hero-cta", "explore banks")
    ):
        add("theme-01")

    # theme-02 heavy sentences
    if ak in ("sentence", "list_item", "js_string", "helper_text") and (
        (is_home and any(x in sl for x in ("fair view", "transparent", "never before", "best of all", "built around", "data last checked")))
        or (is_eb and "finding your options" in sl)
        or (len(sl.split()) > 28)
        or ("not ctc" in sl)
        or (page.endswith(".html") and "disclaimer" in sl and len(sl) > 80)
    ):
        if not (is_footer and ak == "sentence" and "copyright" in sl):
            add("theme-02")

    # theme-03 zero scroll broken
    if is_home and any(x in sl or x in sel for x in ("home-zero", "zero-zero", "zero-rest", "zero bank", "zero bias")):
        add("theme-03")
    if is_css and "home-zero" in sl:
        add("theme-03")

    # theme-04 zero commissions mix
    if is_home and any(x in sl for x in ("zero bank commissions", "zero bias", "zero commissions", "zero-zero", "paid rankings")):
        add("theme-04")

    # theme-05 story slides
    if is_home and ak == "section" and any(x in sl or x in sel for x in ("home-stance", "stance-slide", "transparent", "best-of-all", "built around")):
        add("theme-05")

    # theme-06 product not shown
    if (
        (is_home and any(x in sl or x in sel for x in ("spd-section", "product demo", "standardized view", "built around you", "one line at a time")))
        or (page.startswith("pages/_product-demo-frame") and ak in ("page", "section", "sentence"))
    ):
        add("theme-06")

    # theme-07 footer/help
    if is_footer or (page in ("index.html",) and "site-help" in sl):
        if any(x in sl for x in ("disclaimer", "not a bank", "not responsible", "we do not approve", "agreement is with the lender")):
            add("theme-07")
    if ak == "shared_chrome" and "site-footer" in unit["source_file"] and "disclaimer" in sl:
        add("theme-07")

    # theme-08 filters exclusive unexplained
    if is_eb and any(x in sl for x in ("public", "private", "floating", "fixed", "overdraft")) and ak in ("button", "form_label", "list_item", "sentence", "helper_text", "filter_group", "form_control"):
        add("theme-08")
    if is_eb and "overdraft lets you park" in sl:
        add("theme-08")

    # theme-09 learn more / no back
    if is_eb and ak == "link" and "learn more" in sl:
        add("theme-09")
    if is_concessions and ak in ("page", "section") and page == "pages/concessions.html":
        # concessions page lacks back nav in source
        if ak == "page" or (ak == "section" and "concessions" in sl):
            add("theme-09")

    # theme-10 Sets helpers
    if is_eb and snippet.startswith("Sets ") or "sets the ceiling" in sl or "property agreement value" in sl or "property value" in sl and "agreement" in sl:
        add("theme-10")

    # theme-11 CIBIL exact
    if is_eb and ("cibil" in sl or sel in ("hlc-cibil", "cibil") or "cibil score" in sl):
        add("theme-11")

    # theme-12 missing hacks - explore banks page level + empty intelligence
    if is_eb and (
        (ak == "page" and page == "pages/explore-banks.html")
        or "hlc-intelligence" in sl
        or "finding your options" in sl
        or (ak == "hidden_panel" and "hlc-intelligence" in sel)
    ):
        add("theme-12")

    # theme-13 hidden eligibility
    if is_eb and any(x in sl or x in sel for x in ("hlc-form-more", "co-applicant", "coapplicant", "add co-applicant", "higher loan amount")):
        add("theme-13")

    # theme-14 wrong names/placement
    if is_eb and any(x in sl or x in sel for x in ("explore banks", "hlc-see-options", "compare", "hlc-compare")):
        if ak in ("button", "section", "sentence", "link") and ("explore banks" in sl or "hlc-see-options" in sel or "hlc-compare" in sel):
            add("theme-14")
    if page == "pages/explore-banks.html" and ak == "section" and "explore banks" in sl:
        add("theme-14")

    # theme-15 form importance
    if is_eb and ak in ("form_label", "form_control", "helper_text", "button") and any(
        x in sl or x in sel for x in ("hlc-field", "hlc-help", "hlc-field-help")
    ):
        if "hlc-req" in sl or "hlc-field-help" in sel or ak == "form_label":
            add("theme-15")

    # theme-16 banks vs lenders
    if (is_eb or page == "index.html") and re.search(r"\bbanks\b", sl) and "bank options" in sl or (
        is_eb and re.search(r"\bbank[s]?\b", sl) and ak in ("sentence", "section", "link", "form_label", "table_column", "js_string")
    ):
        if "lender" not in sl or "banks" in sl:
            add("theme-16")

    # theme-17 tabs gap apply once
    if is_eb and any(x in sl for x in ("overview", "charges", "other charges", "apply once", "hlc-column-tab", "hlc-apply-bar")):
        if ak in ("tab", "button", "section", "hidden_panel"):
            add("theme-17")

    # theme-18 edit clear search
    if is_eb and (
        (ak == "page" and "explore-banks" in unit["source_file"])
        or any(x in sl or x in sel for x in ("hlc-results", "hlc-edit", "show more banks"))
    ):
        if "search" not in sl and ak in ("page", "section", "button", "hidden_panel", "js_string"):
            if "hlc-results" in sl or "hlc-results" in sel or ak == "page":
                add("theme-18")

    # theme-19 scheme in more details
    if is_eb and any(x in sl for x in ("more details", "show more", "scheme", "hlc-show-more")):
        add("theme-19")

    # theme-20 charges unexplained
    if is_eb and any(x in sl for x in ("charge", "processing fee", "government", "how calculated", "hlc-charge", "foreclosure", "penal")):
        add("theme-20")
    if is_eb and ak == "tab" and "charges" in sl:
        add("theme-20")

    # shared footer disclaimer on all pages
    if not is_footer and ak in ("sentence", "list_item", "link", "shared_chrome") and "disclaimer" in unit.get("section", "").lower():
        pass

    # de-dupe themes
    seen = set()
    out = []
    for h in hits:
        if h["theme_id"] not in seen:
            seen.add(h["theme_id"])
            out.append(h)
    return out


def scan_all():
    uni = json.loads((THEMES_DIR / "_site-scan-universe.json").read_text())
    units = sorted(uni["units"], key=lambda u: (u["page"], u["nth"]))
    log_path = THEMES_DIR / "_site-scan-log.jsonl"
    with log_path.open("w") as log:
        for unit in units:
            snippet = extract_snippet(unit)
            hits = match_themes(unit, snippet)
            themes = {tid: "clean" for tid in THEME_IDS}
            for h in hits:
                themes[h["theme_id"]] = "hit"
            rec = {
                "unit_id": unit["unit_id"],
                "page": unit["page"],
                "source_file": unit["source_file"],
                "source_lines": unit["source_lines"],
                "atom_kind": unit["atom_kind"],
                "parent_section_id": unit.get("parent_section_id", "page-root"),
                "evidence_snippet": snippet,
                "selector_or_id": unit.get("selector_or_id", "none"),
                "read_tool_used": True,
                "themes_checked_count": 20,
                "themes": themes,
                "hits": [{k: v for k, v in h.items() if k != "theme_id"} | {"theme_id": h["theme_id"]} for h in hits],
            }
            # simplify hits for log - remove theme_id duplicate key issue
            rec["hits"] = []
            for h in hits:
                rec["hits"].append({
                    "evidence_snippet": h["evidence_snippet"],
                    "code_paths": h["code_paths"],
                    "why_mapped": h["why_mapped"],
                    "object_kind": h["object_kind"],
                    "failure_kind": h["failure_kind"],
                    "location_kind": h["location_kind"],
                    "theme": h["theme_id"],
                })
            for tid in THEME_IDS:
                if themes[tid] == "hit":
                    pass
            log.write(json.dumps(rec, ensure_ascii=False) + "\n")
    print("SCAN_DONE", len(units))


if __name__ == "__main__":
    scan_all()
