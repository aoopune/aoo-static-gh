#!/usr/bin/env python3
"""Line-accurate atom enumeration from HTML source files — universe freeze only."""
import json
import re
from pathlib import Path

ROOT = Path("/home/yash/Projects Etc & aoo/aoo-static-gh")
THEMES_DIR = ROOT / "super-review-1/themes"

SERVED = [
    "index.html",
    "pages/explore-banks.html", "pages/apply.html", "pages/calculators.html",
    "pages/calculators/emi.html", "pages/calculators/how-much-loan.html",
    "pages/calculators/loan-amount.html", "pages/calculators/prepayment.html",
    "pages/calculators/balance-transfer.html", "pages/calculators/tenure.html",
    "pages/calculators/tax-savings.html", "pages/project-approvals.html",
    "pages/guide.html", "pages/guide-documents.html", "pages/tax-benefits.html",
    "pages/concessions.html", "pages/home-loan-insurance.html",
    "pages/property-home-insurance.html", "pages/credit-life-insurance.html",
    "pages/home-loan-complaints.html", "pages/about.html",
    "privacy-policy.html", "terms-of-use.html", "sitemap.html",
    "education-loan.html", "pages/compare.html", "pages/faq.html",
    "pages/document-checklist.html", "pages/government-schemes.html",
    "pages/pro-tips.html", "pages/questions.html", "pages/quick-overview.html",
    "pages/results.html", "pages/schemes.html", "pages/apply-contact.html",
    "404.html", "table-embed.html",
]
IFRAME = [
    "pages/_product-demo-frame.html",
    "pages/_product-demo-frame-mobile.html",
]

BODY_MAP = {
    "index.html": ["content/pages/home.body.html"],
    "pages/explore-banks.html": ["content/pages/explore-banks.body.html"],
    "pages/apply.html": ["content/pages/apply.body.html"],
    "pages/apply-contact.html": ["content/pages/apply-contact.body.html"],
    "pages/calculators.html": ["content/pages/calculators.body.html"],
    "pages/calculators/emi.html": ["content/pages/calculators-emi.body.html"],
    "pages/calculators/how-much-loan.html": ["content/pages/calculators-how-much-loan.body.html"],
    "pages/calculators/loan-amount.html": ["content/pages/calculators-loan-amount.body.html"],
    "pages/calculators/prepayment.html": ["content/pages/calculators-prepayment.body.html"],
    "pages/calculators/balance-transfer.html": ["content/pages/calculators-balance-transfer.body.html"],
    "pages/calculators/tenure.html": ["content/pages/calculators-tenure.body.html"],
    "pages/calculators/tax-savings.html": ["content/pages/calculators-tax-savings.body.html"],
    "pages/project-approvals.html": ["content/pages/project-approvals.body.html"],
    "pages/guide.html": ["content/guide/overview.body.html"],
    "pages/guide-documents.html": ["content/guide/documents.body.html"],
    "pages/tax-benefits.html": ["content/guide/tax-benefits.body.html"],
    "pages/concessions.html": ["content/guide/concessions.body.html"],
    "pages/home-loan-insurance.html": ["content/guide/home-loan-insurance.body.html"],
    "pages/property-home-insurance.html": ["content/guide/property-home-insurance.body.html"],
    "pages/credit-life-insurance.html": ["content/guide/credit-life-insurance.body.html"],
    "pages/home-loan-complaints.html": ["content/guide/complaints.body.html"],
    "pages/about.html": ["content/pages/about.body.html"],
    "privacy-policy.html": ["content/legal/privacy-policy.body.html"],
    "terms-of-use.html": ["content/legal/terms-of-use.body.html"],
    "sitemap.html": ["content/pages/sitemap.body.html"],
}

FUNDAMENTALS = {
    "theme-01": {"object_kind": "hero headline and main button block", "failure_kind": "off-balance spacing in the top block"},
    "theme-02": {"object_kind": "sentences and supporting lines", "failure_kind": "too heavy, overlapping, empty, or not plain English"},
    "theme-03": {"object_kind": "zero block during scroll", "failure_kind": "leftover pieces and broken appearance"},
    "theme-04": {"object_kind": "zero commissions promise block", "failure_kind": "mixes bank-side and customer-side relationship"},
    "theme-05": {"object_kind": "homepage full-screen story slides", "failure_kind": "too many thin slides with repetition"},
    "theme-06": {"object_kind": "product showcase section", "failure_kind": "one line at a time, duplicate copy, product not shown"},
    "theme-07": {"object_kind": "help strip and footer disclaimer", "failure_kind": "gap off footer and wash-hands legal tone"},
    "theme-08": {"object_kind": "explore banks filter choices", "failure_kind": "exclusive one-at-a-time and unexplained labels"},
    "theme-09": {"object_kind": "learn-more on a filter choice", "failure_kind": "sent away with no back"},
    "theme-10": {"object_kind": "loan input helper notes", "failure_kind": "Sets prefix, jargon, complex property name"},
    "theme-11": {"object_kind": "CIBIL score input", "failure_kind": "exact number forcing one rate in the table"},
    "theme-12": {"object_kind": "explore banks results layer", "failure_kind": "lists today only, no hacks or intelligence"},
    "theme-13": {"object_kind": "extra eligibility controls", "failure_kind": "hidden behind adjust, looks optional"},
    "theme-14": {"object_kind": "primary action naming and placement", "failure_kind": "browse wording and wrong button position"},
    "theme-15": {"object_kind": "loan form fields", "failure_kind": "equal importance, clustered info icons"},
    "theme-16": {"object_kind": "banks vs lenders wording", "failure_kind": "mixed bank and lender labels on same screen"},
    "theme-17": {"object_kind": "results tabs and apply-once placement", "failure_kind": "gap above table, apply once far from checkboxes"},
    "theme-18": {"object_kind": "edit clear and bank search", "failure_kind": "no clear edit/clear/search controls"},
    "theme-19": {"object_kind": "scheme identity in more details", "failure_kind": "scheme names hidden in more dump"},
    "theme-20": {"object_kind": "charges and calculation display", "failure_kind": "unexplained rates, jargon, unlabeled formulas"},
}


def slugify(s, max_len=30):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", (s or "none").strip().lower()).strip("-")
    return (s[:max_len] or "none")


def page_slug(page):
    return page.replace("/", "__").replace(".html", "").replace(":", "-")


def strip_comments(text):
    return re.sub(r"<!--.*?-->", "", text, flags=re.S)


def extract_text_content(line):
    return re.sub(r"<[^>]+>", "", line).strip()


def get_attr(line, name):
    m = re.search(rf'{name}=["\']([^"\']*)["\']', line, re.I)
    return m.group(1) if m else ""


def snippet_for_line(lines, idx, kind):
    line = lines[idx]
    text = extract_text_content(line)
    if kind in ("button", "link", "nav_link", "flyout_link", "tab", "form_label") and len(text) >= 3:
        return text
    if kind == "alt_text":
        m = re.search(r'alt="([^"]+)"', line, re.I)
        return m.group(1) if m else line.strip()[:80]
    if kind in ("sentence", "list_item", "section", "legal_line") and len(text) >= 20:
        return text[:500]
    if kind in ("form_control", "hidden_panel", "table_column", "helper_text"):
        return line.strip()[:500]
    # multi-line: grab until closing tag
    tag_m = re.search(r"<(\w+)", line)
    if tag_m:
        tag = tag_m.group(1)
        chunk = line
        end = idx
        for j in range(idx, min(idx + 15, len(lines))):
            chunk += " " + lines[j]
            end = j
            if f"</{tag}>" in lines[j] or "/>" in lines[j]:
                break
        plain = extract_text_content(chunk)
        if len(plain) >= 20:
            return plain[:500]
        if len(plain) >= 3:
            return plain
        return chunk.strip()[:500]
    return line.strip()[:500] if len(line.strip()) >= 3 else line.strip() + " " + (lines[idx + 1].strip() if idx + 1 < len(lines) else "")


def scan_file(source_file, page, nth_start=0, also_on=None, is_shared_nav=False):
    path = ROOT / source_file
    if not path.exists():
        return [], nth_start
    raw_lines = path.read_text(errors="replace").splitlines()
    # use comment-stripped for matching but line numbers from raw
    atoms = []
    nth = nth_start
    ps = page_slug(page)
    current_section = "page-root"

    # page atom
    nth += 1
    page_uid = f"U-{ps}--{nth:05d}--page--doc"
    atoms.append({
        "unit_id": page_uid,
        "page": page,
        "source_file": source_file,
        "source_lines": f"1-{len(raw_lines)}",
        "nth": nth,
        "atom_kind": "page",
        "parent_section_id": "page-root",
        "short_slug": "doc",
        "visibility": "visible",
        "section": "document",
        "also_on": also_on or [],
        "selector_or_id": "html",
    })
    current_section = page_uid

    def add(kind, selector, short, vis="visible", parent=None, line_no=None, snip_override=None):
        nonlocal nth, current_section
        ln = line_no or 0
        nth += 1
        snip = snip_override if snip_override is not None else snippet_for_line(raw_lines, ln - 1, kind) if ln else selector
        uid = f"U-{ps}--{nth:05d}--{kind}--{short}"
        atoms.append({
            "unit_id": uid,
            "page": page,
            "source_file": source_file,
            "source_lines": f"{ln}-{ln}" if ln else "1-1",
            "nth": nth,
            "atom_kind": kind,
            "parent_section_id": parent or current_section,
            "short_slug": short,
            "visibility": vis,
            "section": short,
            "also_on": also_on or [],
            "selector_or_id": selector,
            "evidence_snippet": snip,
        })
        if kind == "section":
            current_section = uid
        return uid

    for i, line in enumerate(raw_lines):
        ln = i + 1
        if not line.strip():
            continue

        hm = re.search(r"<h([1-6])\b", line, re.I)
        if hm:
            hid = get_attr(line, "id") or f"h{ln}"
            add("section", hid, slugify(hid), line_no=ln)

        if re.search(r"<p\b", line, re.I):
            add("sentence", get_attr(line, "class") or f"p-{ln}", slugify(get_attr(line, "class") or f"p-{ln}"), line_no=ln)

        if re.search(r"<li\b", line, re.I):
            add("list_item", f"li-{ln}", f"li-{ln}", line_no=ln)

        if re.search(r"<a[\\s>]", line, re.I):
            href = get_attr(line, "href") or f"a-{ln}"
            if is_shared_nav:
                kind = "flyout_link" if "submenu" in line else "nav_link"
            else:
                kind = "link"
            add(kind, href, slugify(href), line_no=ln)

        if re.search(r"<label\b", line, re.I):
            add("form_label", get_attr(line, "for") or f"label-{ln}", slugify(get_attr(line, "for") or f"label-{ln}"), line_no=ln)

        if re.search(r"<legend\b", line, re.I):
            add("form_label", f"legend-{ln}", f"legend-{ln}", line_no=ln)

        if re.search(r"<input\b", line, re.I):
            add("form_control", get_attr(line, "name") or get_attr(line, "id") or f"input-{ln}",
                slugify(get_attr(line, "name") or f"input-{ln}"),
                vis="hidden" if re.search(r"\bhidden\b", line, re.I) or get_attr(line, "type") == "hidden" else "visible",
                line_no=ln)

        if re.search(r"<select\b", line, re.I):
            add("form_control", get_attr(line, "name") or get_attr(line, "id") or f"select-{ln}", slugify(get_attr(line, "name") or f"select-{ln}"), line_no=ln)

        if re.search(r"<textarea\b", line, re.I):
            add("form_control", get_attr(line, "name") or f"textarea-{ln}", slugify(get_attr(line, "name") or f"textarea-{ln}"), line_no=ln)

        if re.search(r"<th\b", line, re.I):
            add("table_column", f"th-{ln}", f"th-{ln}", line_no=ln)

        if re.search(r"<details\b", line, re.I):
            add("hidden_panel", get_attr(line, "class") or f"details-{ln}", slugify(get_attr(line, "class") or f"details-{ln}"), vis="collapsed", line_no=ln)

        if re.search(r"\bhidden\b", line, re.I) and re.search(r"<(?:div|section|aside|nav|dialog|form|fieldset|ul|ol|p|span)\b", line, re.I):
            eid = get_attr(line, "id") or f"hidden-{ln}"
            add("hidden_panel", eid, slugify(eid), vis="hidden", line_no=ln)

        if 'aria-expanded="false"' in line or 'aria-hidden="true"' in line:
            eid = get_attr(line, "id") or f"aria-{ln}"
            if not any(a["source_lines"] == f"{ln}-{ln}" and a["atom_kind"] == "hidden_panel" for a in atoms):
                add("hidden_panel", eid, slugify(eid), vis="hidden", line_no=ln)

        if re.search(r'\balt="[^"]+"', line, re.I):
            add("alt_text", "img", slugify(get_attr(line, "alt")), line_no=ln)

    # Button atoms after main pass — one per density-gate regex match
    full_text = "\n".join(raw_lines)
    btn_n = 0
    for m in re.finditer(r"<button[\s>]|type=[\"'](?:submit|button|reset)[\"']", full_text, re.I):
        btn_n += 1
        line_no = full_text[: m.start()].count("\n") + 1
        snip = raw_lines[line_no - 1].strip()[:500]
        add("button", m.group(0)[:40], f"btn-{line_no}-{btn_n}", line_no=line_no,
            snip_override=snip if len(snip) >= 3 else m.group(0))

    return atoms, nth


def scan_js_strings(source_file, page, nth_start, also_on=None):
    path = ROOT / source_file
    if not path.exists():
        return [], nth_start
    text = path.read_text(errors="replace")
    lines = text.splitlines()
    atoms = []
    nth = nth_start
    ps = page_slug(page)
    # single- and double-quoted strings >= 20 chars that look user-facing
    for i, line in enumerate(lines):
        for m in re.finditer(r"(['\"])([^'\"\\]{3,200})\1", line):
            s = m.group(2)
            if any(x in s for x in ("function", "var ", "return", "===", "&&", "||", "http", ".js", ".css", "getElement")):
                continue
            if len(s) < 20 and not any(w in s.lower() for w in ("loading", "retry", "error", "home", "back", "apply", "filter")):
                continue
            if len(s) < 10:
                continue
            nth += 1
            ln = i + 1
            uid = f"U-{ps}--{nth:05d}--js_string--{slugify(s[:20])}"
            atoms.append({
                "unit_id": uid,
                "page": page,
                "source_file": source_file,
                "source_lines": f"{ln}-{ln}",
                "nth": nth,
                "atom_kind": "js_string",
                "parent_section_id": "page-root",
                "short_slug": slugify(s[:20]),
                "visibility": "visible",
                "section": "js",
                "also_on": also_on or [],
                "selector_or_id": f"js:{slugify(s[:20])}",
                "evidence_snippet": s,
            })
    return atoms, nth


def scripts_for_page(page_path):
    p = ROOT / page_path
    if not p.exists():
        return []
    t = p.read_text(errors="replace")
    srcs = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', t, re.I)
    out = []
    base = (ROOT / page_path).parent
    for s in srcs:
        if s.startswith("http"):
            continue
        # resolve relative to page
        candidate = (base / s).resolve()
        try:
            rel = candidate.relative_to(ROOT)
            out.append(str(rel))
        except ValueError:
            pass
    # inline script in same file counts as page source
    return out


def load_theme_meta():
    theme_files = sorted(THEMES_DIR.glob("theme-*.md"))
    meta = {}
    fundamentals_text = {}
    fpath = THEMES_DIR / "_theme-fundamentals.md"
    ft = fpath.read_text()
    for tf in theme_files:
        tid = tf.stem.split("-")[0] + "-" + tf.stem.split("-")[1]
        text = tf.read_text()
        title_m = re.search(r"^# (.+)$", text, re.M)
        pin_m = re.search(r'^pinpoint: "(.+)"', text, re.M)
        fm = re.search(rf"## {tid} — (.+)\n\n(.+?)(?=\n\n## |\Z)", ft, re.S)
        fundamentals_text[tid] = fm.group(2).strip() if fm else ""
        meta[tid] = {
            "file": str(tf),
            "title": title_m.group(1) if title_m else "",
            "original_pinpoint": pin_m.group(1) if pin_m else "",
        }
    return theme_files, meta, fundamentals_text


def main():
    theme_files, theme_meta, fundamentals_text = load_theme_meta()
    all_units = []

    # shared chrome
    for sf, label in [("partials/global-nav.html", "global-nav"), ("partials/site-footer.html", "site-footer")]:
        atoms, _ = scan_file(sf, f"shared:{label}", 0, also_on=SERVED + IFRAME, is_shared_nav=(label == "global-nav"))
        for a in atoms:
            if a["atom_kind"] == "page":
                a["atom_kind"] = "shared_chrome"
        all_units.extend(atoms)

    for page in SERVED + IFRAME:
        nth = 0
        for sf in [page] + BODY_MAP.get(page, []):
            atoms, nth = scan_file(sf, page, nth)
            all_units.extend(atoms)
        # attached JS user-visible strings
        for jsf in scripts_for_page(page):
            # prefer src/ over js/ when both exist for bundles
            src_alt = jsf.replace("js/", "src/").replace(".bundle.js", ".js")
            if (ROOT / src_alt).exists():
                jsf = src_alt
            atoms, nth = scan_js_strings(jsf, page, nth)
            all_units.extend(atoms)
        # inline script strings on page shell
        atoms, nth = scan_js_strings(page, page, nth)
        all_units.extend(atoms)

    match_keys = {}
    for tid in sorted(FUNDAMENTALS.keys()):
        match_keys[tid] = {**FUNDAMENTALS[tid], "fundamental_text": fundamentals_text.get(tid, "")}

    import re as _re
    sitemap_urls = _re.findall(r"<loc>([^<]+)</loc>", (ROOT / "sitemap.xml").read_text())

    out = {
        "density_gate": "pending",
        "theme_files": [str(f) for f in theme_files],
        "match_keys": match_keys,
        "fundamental_text": fundamentals_text,
        "theme_meta": theme_meta,
        "sitemap_urls": sitemap_urls,
        "sitemap_vs_redesigned_pages": "match",
        "served_pages": SERVED,
        "served_via_iframe": IFRAME,
        "attached_source": BODY_MAP,
        "excluded": ["pages/_*.html internal probes not embedded"],
        "units": all_units,
        "unit_count": len(all_units),
    }
    (THEMES_DIR / "_site-scan-universe.json").write_text(json.dumps(out, indent=2))
    (THEMES_DIR / "_site-scan-log.jsonl").write_text("")
    print("UNIVERSE_BUILT", len(all_units), "units")


if __name__ == "__main__":
    main()
