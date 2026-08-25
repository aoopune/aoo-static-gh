#!/usr/bin/env python3
"""Independent completeness census. Writes JSON to stdout. Do not treat as first-audit."""
from __future__ import annotations

import json
import os
import re
from collections import Counter, defaultdict
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path("/home/yash/Projects Etc & aoo/aoo-static-gh")
PAGES = [
    ("/", "index.html"),
    ("/pages/explore-banks.html", "pages/explore-banks.html"),
    ("/pages/apply.html", "pages/apply.html"),
    ("/pages/apply-contact.html", "pages/apply-contact.html"),
    ("/pages/calculators.html", "pages/calculators.html"),
    ("/pages/calculators/emi.html", "pages/calculators/emi.html"),
    ("/pages/calculators/how-much-loan.html", "pages/calculators/how-much-loan.html"),
    ("/pages/calculators/loan-amount.html", "pages/calculators/loan-amount.html"),
    ("/pages/calculators/prepayment.html", "pages/calculators/prepayment.html"),
    ("/pages/calculators/balance-transfer.html", "pages/calculators/balance-transfer.html"),
    ("/pages/calculators/tenure.html", "pages/calculators/tenure.html"),
    ("/pages/calculators/tax-savings.html", "pages/calculators/tax-savings.html"),
    ("/pages/project-approvals.html", "pages/project-approvals.html"),
    ("/pages/guide.html", "pages/guide.html"),
    ("/pages/guide-documents.html", "pages/guide-documents.html"),
    ("/pages/tax-benefits.html", "pages/tax-benefits.html"),
    ("/pages/concessions.html", "pages/concessions.html"),
    ("/pages/home-loan-insurance.html", "pages/home-loan-insurance.html"),
    ("/pages/property-home-insurance.html", "pages/property-home-insurance.html"),
    ("/pages/credit-life-insurance.html", "pages/credit-life-insurance.html"),
    ("/pages/home-loan-complaints.html", "pages/home-loan-complaints.html"),
    ("/pages/about.html", "pages/about.html"),
    ("/privacy-policy.html", "privacy-policy.html"),
    ("/terms-of-use.html", "terms-of-use.html"),
    ("/sitemap.html", "sitemap.html"),
]

VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
    "param", "source", "track", "wbr",
}
SKIP_TEXT_PARENTS = {"script", "style", "noscript", "template"}


def attrs_dict(attrs):
    return {k.lower(): (v or "") for k, v in attrs}


class CensusParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.headings = []
        self.heading_buf = None
        self.sections = []
        self.buttons = []
        self.button_buf = None
        self.links = []
        self.link_buf = None
        self.images = []
        self.inputs = []
        self.selects = []
        self.textareas = []
        self.details = []
        self.details_buf = None
        self.dialogs = []
        self.iframes = []
        self.hidden = []
        self.aria_hidden = []
        self.inert = []
        self.flips = []
        self.flip_links = []
        self.tablists = []
        self.tabs = []
        self.tab_panels = []
        self.guide_moments = []
        self.guide_section_links = []
        self.internal_guide_section_links = []
        self.visually_hidden = []
        self.home_moments = []
        self.home_embeds = []
        self.spd_frames = []
        self.main_class = None
        self.body_class = None
        self.picture_sources = []
        self.role_dialog = []
        self.role_listbox = []
        self.role_tooltip = []
        self.tables = []
        self.fieldsets = []
        self.labels = []
        self.calc_fields = []
        self.calc_outs = []
        self.data_calc = None
        self.reading_mode = []
        self.edu_mentions = []
        self.text_chunks = []
        self.skip_depth = 0
        self.comments_edu = []

    def handle_comment(self, data):
        if re.search(r"education|EDUCATION_LOAN|LEGACY_EDUCATION", data, re.I):
            self.comments_edu.append(data[:120].strip())

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        a = attrs_dict(attrs)
        cls = a.get("class", "")
        self.stack.append(tag)
        if tag in SKIP_TEXT_PARENTS:
            self.skip_depth += 1

        if tag == "body":
            self.body_class = cls
        if tag == "main" and self.main_class is None:
            self.main_class = cls

        if tag in ("section", "aside", "header", "footer", "nav", "article", "main"):
            self.sections.append({"tag": tag, "id": a.get("id") or None, "class": cls})

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.heading_buf = {"tag": tag, "id": a.get("id") or None, "class": cls, "text": ""}

        if tag == "button":
            self.button_buf = {
                "id": a.get("id") or None,
                "class": cls,
                "aria_label": a.get("aria-label") or None,
                "disabled": "disabled" in a,
                "aria_expanded": a.get("aria-expanded") or None,
                "text": "",
            }
        if tag == "a":
            self.link_buf = {
                "href": a.get("href", ""),
                "class": cls,
                "target": a.get("target") or None,
                "rel": a.get("rel") or None,
                "id": a.get("id") or None,
                "text": "",
            }
        if tag == "img":
            self.images.append({
                "src": a.get("src", ""),
                "alt": a.get("alt", ""),
                "class": cls,
                "srcset": a.get("srcset", ""),
            })
        if tag == "source":
            self.picture_sources.append({
                "srcset": a.get("srcset", ""),
                "media": a.get("media", ""),
                "type": a.get("type", ""),
            })
        if tag == "input":
            rec = {
                "type": a.get("type") or "text",
                "id": a.get("id") or None,
                "name": a.get("name") or None,
                "class": cls,
                "hidden": "hidden" in a or "hidden" in cls.split(),
            }
            self.inputs.append(rec)
            if a.get("id") or a.get("name"):
                self.calc_fields.append(a.get("id") or a.get("name"))
        if tag == "select":
            self.selects.append({"id": a.get("id") or None, "name": a.get("name") or None, "class": cls})
            if a.get("id"):
                self.calc_fields.append(a.get("id"))
        if tag == "textarea":
            self.textareas.append({"id": a.get("id") or None, "class": cls})
        if tag == "details":
            self.details.append({"class": cls, "open": "open" in a, "summary": ""})
            self.details_buf = self.details[-1]
        if tag == "dialog" or a.get("role") == "dialog":
            self.dialogs.append({"tag": tag, "id": a.get("id") or None, "class": cls, "role": a.get("role")})
        if a.get("role") == "dialog":
            self.role_dialog.append({"tag": tag, "id": a.get("id") or None, "class": cls})
        if a.get("role") == "listbox":
            self.role_listbox.append({"tag": tag, "id": a.get("id") or None, "hidden": "hidden" in a})
        if a.get("role") == "tooltip":
            self.role_tooltip.append({"tag": tag, "id": a.get("id") or None, "hidden": "hidden" in a})
        if tag == "iframe":
            self.iframes.append({"src": a.get("src", ""), "class": cls, "id": a.get("id") or None})
        if "hidden" in a or "hidden" in cls.split() or a.get("aria-hidden") == "true":
            self.hidden.append({"tag": tag, "id": a.get("id") or None, "class": cls[:80]})
        if a.get("aria-hidden") == "true":
            self.aria_hidden.append({"tag": tag, "id": a.get("id") or None})
        if "inert" in a:
            self.inert.append({"tag": tag, "id": a.get("id") or None, "class": cls})
        if "guide-flip" in cls.split() or tag == "article" and "guide-flip" in cls:
            if "guide-flip" in cls:
                self.flips.append({"id": a.get("id") or None, "class": cls})
        if "guide-flip-link" in cls.split() or a.get("data-flip"):
            if "guide-flip-link" in cls or a.get("data-flip"):
                self.flip_links.append({"id": a.get("id") or None, "data_flip": a.get("data-flip"), "class": cls})
        if a.get("role") == "tablist":
            self.tablists.append({"id": a.get("id") or None, "class": cls})
        if a.get("role") == "tab":
            self.tabs.append({"id": a.get("id") or None, "class": cls, "aria_controls": a.get("aria-controls")})
        if a.get("role") == "tabpanel" or "guide-seg-panel" in cls:
            self.tab_panels.append({
                "id": a.get("id") or None,
                "class": cls,
                "hidden": "hidden" in a,
            })
        if "guide-moment" in cls or "mag-section" in cls.split():
            self.guide_moments.append({"tag": tag, "id": a.get("id") or None, "class": cls})
        if "guide-section-link" in cls.split():
            rec = {"href": a.get("href", ""), "class": cls, "id": a.get("id") or None}
            self.guide_section_links.append(rec)
            href = a.get("href", "")
            if href.startswith("/") or href.startswith("pages/") or href.startswith("../") or "shroffin.com" in href:
                if not href.startswith("http") or "shroffin.com" in href:
                    if not any(x in href for x in ("wa.me", "whatsapp", "rbi.org", "nhb.org", "incometax", "irdai", "linkedin", "consumerhelpline")):
                        if href.startswith("/") or href.startswith(".") or href.endswith(".html") or "shroffin.com" in href:
                            if "wa.me" not in href:
                                self.internal_guide_section_links.append(rec)
        if "visually-hidden" in cls.split():
            self.visually_hidden.append({"tag": tag})
        if "home-moment" in cls:
            self.home_moments.append({
                "id": a.get("id") or None,
                "class": cls,
                "labelledby": a.get("aria-labelledby") or None,
            })
        if a.get("data-home-embed-src"):
            self.home_embeds.append(a.get("data-home-embed-src"))
        if a.get("data-spd-src"):
            self.spd_frames.append(a.get("data-spd-src"))
        if tag == "table":
            self.tables.append({"id": a.get("id") or None, "class": cls})
        if tag == "fieldset":
            self.fieldsets.append({"id": a.get("id") or None, "class": cls})
        if tag == "label":
            self.labels.append({"for": a.get("for") or None, "class": cls})
        if a.get("id", "").startswith("out-") or "calc-out" in cls:
            self.calc_outs.append({"id": a.get("id") or None, "class": cls})
        if tag == "form" and a.get("data-calc"):
            self.data_calc = a.get("data-calc")
        if "reading" in cls.lower() and "mode" in cls.lower():
            self.reading_mode.append(cls)
        if a.get("data-guide-scrub"):
            self.guide_moments.append({"tag": tag, "id": a.get("id") or None, "scrub": a.get("data-guide-scrub"), "class": cls})

        textish = " ".join([cls, a.get("href", ""), a.get("aria-label", ""), a.get("id", "")])
        if re.search(r"education[- ]?loan|edu-loan", textish, re.I):
            self.edu_mentions.append({"tag": tag, "id": a.get("id"), "class": cls, "href": a.get("href")})

        if tag not in VOID and tag not in SKIP_TEXT_PARENTS:
            pass

    def handle_endtag(self, tag):
        tag = tag.lower()
        if self.heading_buf and tag == self.heading_buf["tag"]:
            self.heading_buf["text"] = re.sub(r"\s+", " ", self.heading_buf["text"]).strip()
            self.headings.append(self.heading_buf)
            self.heading_buf = None
        if self.button_buf and tag == "button":
            self.button_buf["text"] = re.sub(r"\s+", " ", self.button_buf["text"]).strip()
            self.buttons.append(self.button_buf)
            self.button_buf = None
        if self.link_buf and tag == "a":
            self.link_buf["text"] = re.sub(r"\s+", " ", self.link_buf["text"]).strip()
            self.links.append(self.link_buf)
            if "guide-section-link" in (self.link_buf["class"] or "").split():
                href = self.link_buf["href"]
                # classify same-site ↗
                pass
            self.link_buf = None
        if tag in SKIP_TEXT_PARENTS and self.skip_depth:
            self.skip_depth -= 1
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
        elif tag in self.stack:
            # mismatched tags — pop until match
            while self.stack and self.stack[-1] != tag:
                self.stack.pop()
            if self.stack:
                self.stack.pop()

    def handle_data(self, data):
        if self.skip_depth:
            return
        t = data
        if self.heading_buf is not None:
            self.heading_buf["text"] += t
        if self.button_buf is not None:
            self.button_buf["text"] += t
        if self.link_buf is not None:
            self.link_buf["text"] += t
        if self.details_buf is not None and self.stack and self.stack[-1] == "summary":
            self.details_buf["summary"] += t
        stripped = t.strip()
        if stripped:
            self.text_chunks.append(stripped)


def parse_file(rel: str) -> CensusParser:
    html = (ROOT / rel).read_text(encoding="utf-8", errors="replace")
    p = CensusParser()
    p.feed(html)
    p.close()
    p.raw_len = len(html)
    p.edu_html = bool(re.search(r"education[- ]?loan|education-loan\.html|EDUCATION_LOAN_PRODUCT", html, re.I))
    p.edu_commented = bool(re.search(r"EDUCATION_LOAN_PRODUCT|LEGACY_EDUCATION_PAGES", html))
    p.guide_scrub_on = len(re.findall(r'data-guide-scrub="on"', html))
    p.calc_form = re.search(r'data-calc="([^"]+)"', html)
    p.calc_form = p.calc_form.group(1) if p.calc_form else None
    # extra home-moment titles via aria-labelledby ids
    p.home_moment_titles = []
    for m in p.home_moments:
        lab = m.get("labelledby")
        if lab:
            for h in p.headings:
                if h.get("id") == lab:
                    p.home_moment_titles.append(h["text"])
    return p


def is_offsite(href: str) -> bool:
    if not href:
        return False
    h = href.strip()
    if h.startswith("mailto:") or h.startswith("tel:"):
        return False
    if h.startswith("#") or h.startswith("/") or h.startswith(".") or h.endswith(".html"):
        if not h.startswith("http"):
            return False
    if "shroffin.com" in h and "wa.me" not in h:
        return False
    return h.startswith("http") or h.startswith("//")


def classify_gsl_same_site(links):
    bad = []
    for L in links:
        href = L.get("href") or ""
        cls = L.get("class") or ""
        if "guide-section-link" not in cls.split():
            continue
        if not is_offsite(href) and not href.startswith("http"):
            # same-site html paths
            if href.startswith("/") or href.endswith(".html") or href.startswith("pages/") or href.startswith("../"):
                if not any(x in href for x in ("wa.me", "whatsapp.com")):
                    bad.append(L)
    return bad


def list_files(dirpath, patterns):
    p = ROOT / dirpath
    if not p.exists():
        return []
    out = []
    for root, dirs, files in os.walk(p):
        for f in files:
            if any(f.lower().endswith(ext) for ext in patterns):
                out.append(str(Path(root) / f))
    return sorted(out)


HEX_RE = re.compile(r"#(?:[0-9a-fA-F]{3,8})\b")
FALLBACK_RE = re.compile(r"var\([^,]+,\s*#[0-9a-fA-F]{3,8}\)")
RGBA_BLACK_RE = re.compile(r"rgba\(\s*0\s*,\s*0\s*,\s*0\s*,")
COLOR_MIX_WHITE_RE = re.compile(r"color-mix\([^)]*#(?:fff|ffffff|f4f6f8)\b", re.I)

REDESIGNED_CSS = [
    "css/shroffin-shell.css",
    "css/shroffin-editorial.css",
    "css/shroffin-explore-banks.css",
    "css/shroffin-apply.css",
    "css/shroffin-calculators.css",
    "css/shroffin-guide.css",
    "css/shroffin-about.css",
    "css/shroffin-utility-pages.css",
    "css/shroffin-home.css",
    "css/shroffin-home-calm-phone.css",
    "css/shroffin-home-level-field.css",
    "css/shroffin-product-demo.css",
    "css/project-approvals.css",
]


def css_debt(rel):
    path = ROOT / rel
    if not path.exists():
        return {"missing": True}
    text = path.read_text(encoding="utf-8", errors="replace")
    hexes = HEX_RE.findall(text)
    return {
        "file": rel,
        "hex_count": len(hexes),
        "unique_hex": sorted(set(h.lower() for h in hexes)),
        "var_fallback_hex": len(FALLBACK_RE.findall(text)),
        "rgba_black": len(RGBA_BLACK_RE.findall(text)),
        "color_mix_white": len(COLOR_MIX_WHITE_RE.findall(text)),
        "mq_735": len(re.findall(r"min-width:\s*735px", text)),
        "mq_1069": len(re.findall(r"min-width:\s*1069px", text)),
        "mq_833": len(re.findall(r"max-width:\s*833px", text)),
        "mq_834": len(re.findall(r"min-width:\s*834px", text)),
        "mq_1440": len(re.findall(r"min-width:\s*1440px", text)),
        "mq_900h": len(re.findall(r"max-height:\s*900px", text)),
        "hover_rules": len(re.findall(r":hover", text)),
        "focus_rules": len(re.findall(r":focus", text)),
        "has_161616": "#161616" in text.lower() or "#161616" in text,
        "has_121212": "#121212" in text,
    }


def media_query_context(rel, px):
    """Return nearby selectors for a breakpoint (thin but useful)."""
    path = ROOT / rel
    if not path.exists():
        return []
    text = path.read_text(encoding="utf-8", errors="replace")
    hits = []
    for m in re.finditer(rf"@media[^{{]*{px}px[^{{]*\{{", text):
        snippet = text[m.start(): m.start() + 180].replace("\n", " ")
        hits.append(snippet[:180])
    return hits[:8]


def gitignore_fonts():
    gi = ROOT / ".gitignore"
    text = gi.read_text(encoding="utf-8") if gi.exists() else ""
    font_dir = ROOT / "fonts"
    listed = []
    if font_dir.exists():
        listed = [str(p.relative_to(ROOT)) for p in font_dir.rglob("*") if p.is_file()]
    ignored = bool(re.search(r"fonts?/", text)) or "fonts/" in text
    return {"gitignore_mentions_fonts": bool(re.search(r"font", text, re.I)), "files_present": listed, "gitignore_snippet": [ln for ln in text.splitlines() if "font" in ln.lower()]}


def nav_census():
    nav = (ROOT / "partials/global-nav.html").read_text(encoding="utf-8")
    triggers = re.findall(r'id="(nav-[^"]+)"', nav)
    flyouts = re.findall(r'id="(nav-[^"]*flyout[^"]*)"', nav)
    submenu_links = re.findall(r'class="globalnav-submenu-link"[^>]*href="([^"]*)"', nav)
    hrefs = re.findall(r'href="([^"]+)"', nav)
    edu = bool(re.search(r"education-loan|EDUCATION_LOAN", nav, re.I))
    return {
        "triggers": triggers,
        "flyouts": flyouts,
        "submenu_hrefs": submenu_links,
        "all_hrefs": hrefs,
        "education_mentioned": edu,
        "education_live_href": bool(re.search(r'href="[^"]*education-loan', nav)),
    }


def footer_census():
    foot = (ROOT / "partials/site-footer.html").read_text(encoding="utf-8")
    groups = re.findall(r'class="(site-footer-group[^"]*)"', foot)
    hrefs = re.findall(r'href="([^"]+)"', foot)
    theme = re.findall(r'data-theme-pref="([^"]+)"', foot)
    gsl = len(re.findall(r"guide-section-link", foot))
    details = len(re.findall(r"<details", foot))
    edu = bool(re.search(r"education-loan|EDUCATION_LOAN", foot, re.I))
    return {
        "groups": groups,
        "hrefs": hrefs,
        "theme_prefs": theme,
        "guide_section_links": gsl,
        "details": details,
        "education_mentioned": edu,
        "education_live_href": bool(re.search(r'href="[^"]*education-loan', foot)),
    }


def localnav_census():
    p = ROOT / "partials/guide-localnav.html"
    text = p.read_text(encoding="utf-8")
    hrefs = re.findall(r'href="([^"]+)"', text)
    items = re.findall(r'class="([^"]*localnav[^"]*)"', text)
    return {"hrefs": hrefs, "class_hits": items[:20], "item_count": len(hrefs)}


def hover_in_shell():
    files = REDESIGNED_CSS + ["css/shroffin-shell.css"]
    out = {}
    for rel in files:
        path = ROOT / rel
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        out[rel] = len(re.findall(r":hover", text))
    return out


def bank_logo_mismatch():
    banks_dir = ROOT / "images/banks"
    files = []
    if banks_dir.exists():
        files = sorted([p.name for p in banks_dir.iterdir() if p.is_file()])
    js = (ROOT / "src/bank-logos.js").read_text(encoding="utf-8") if (ROOT / "src/bank-logos.js").exists() else ""
    refs = set(re.findall(r"images/banks/([^\"'\s]+)", js))
    refs |= set(re.findall(r"banks/([^\"'\s]+\.png)", js))
    return {"dir_count": len(files), "dir_files": files, "js_refs": sorted(refs), "js_count": len(refs)}


def explore_controls():
    html = (ROOT / "pages/explore-banks.html").read_text(encoding="utf-8")
    help_btns = len(re.findall(r"hlc-field-help", html))
    tooltips = len(re.findall(r'role="tooltip"', html))
    inputs = len(re.findall(r"<input", html, re.I))
    selects = len(re.findall(r"<select", html, re.I))
    filters = re.findall(r'data-product-filter="([^"]+)"', html)
    drawer = "hlc-drawer" in html
    intel = "hlc-intelligence" in html
    dock = "hlc-filters-dock" in html or "hlc-mobile" in html or "hlc-filters-done" in html
    return {
        "help_class_hits": help_btns,
        "tooltips": tooltips,
        "inputs": inputs,
        "selects": selects,
        "product_filters": filters,
        "drawer": drawer,
        "intelligence": intel,
        "mobile_done": "hlc-filters-done" in html,
        "continue": "hlc-continue" in html or "Apply once" in html,
    }


def apply_contact_fields():
    html = (ROOT / "pages/apply-contact.html").read_text(encoding="utf-8")
    ids = re.findall(r'id="(hl-[^"]+)"', html)
    return {"hl_ids": ids}


def reading_mode_exists():
    hits = []
    for rel in [
        "js/shroffin-guide.js",
        "css/shroffin-guide.css",
        "pages/guide.html",
    ]:
        p = ROOT / rel
        if not p.exists():
            continue
        t = p.read_text(encoding="utf-8", errors="replace")
        if re.search(r"reading[- ]mode|guide-reading", t, re.I):
            hits.append(rel)
    return hits


def prototype_html():
    pages = sorted((ROOT / "pages").glob("_*.html"))
    return [p.name for p in pages]


def theme_boot_dark():
    t = (ROOT / "partials/theme-boot.html").read_text(encoding="utf-8")
    first_dark = bool(re.search(r"dark", t) and re.search(r"unset|first|localStorage", t))
    canvas = {
        "boot_has_161616": "#161616" in t,
        "boot_has_121212": "#121212" in t,
    }
    freeze = ROOT / "super-review-1/themes/_dark-mode-phase-b-shell-freeze.md"
    freeze_text = freeze.read_text(encoding="utf-8") if freeze.exists() else ""
    return {
        "theme_boot_snippet_dark_default": "dark" in t and "localStorage" in t,
        **canvas,
        "freeze_121212": "#121212" in freeze_text,
        "freeze_161616": "#161616" in freeze_text,
        "shell_161616": "#161616" in (ROOT / "css/shroffin-shell.css").read_text(encoding="utf-8"),
        "shell_121212": "#121212" in (ROOT / "css/shroffin-shell.css").read_text(encoding="utf-8"),
    }


def sitemap_edu():
    t = (ROOT / "sitemap.html").read_text(encoding="utf-8")
    return {
        "education_loan_href": bool(re.search(r"education-loan", t, re.I)),
        "education_word": bool(re.search(r"Education", t)),
    }


def robots_edu():
    p = ROOT / "robots.txt"
    t = p.read_text(encoding="utf-8") if p.exists() else ""
    return {"exists": p.exists(), "education": bool(re.search(r"education", t, re.I))}


def home_cta_edu():
    t = (ROOT / "index.html").read_text(encoding="utf-8")
    return bool(re.search(r"education-loan", t, re.I))


def calc_735_what_changes():
    css = (ROOT / "css/shroffin-calculators.css").read_text(encoding="utf-8")
    blocks = []
    for m in re.finditer(r"@media[^{]+\{", css):
        start = m.start()
        head = m.group(0)
        if "735" in head or "1069" in head:
            # grab next 400 chars of selectors
            blocks.append(css[start:start + 500].replace("\n", " ")[:500])
    return blocks


def duration_tokens():
    shell = (ROOT / "css/shroffin-shell.css").read_text(encoding="utf-8")
    toks = re.findall(r"--shroffin-[a-z0-9-]*(?:dur|ease|motion)[a-z0-9-]*\s*:[^;]+", shell, re.I)
    more = re.findall(r"cubic-bezier\([^)]+\)", shell)
    return {"motion_custom_props": toks[:40], "cubic_count": len(more)}


def extract_compare():
    v2 = json.loads((ROOT / "super-review-1/figma-migration/_figma-pre-transfer-conflict-audit-extract-v2.json").read_text())
    by_url = {row["url"]: row for row in v2}
    return by_url


def unique_section_filter(sections):
    chrome = ("globalnav", "site-footer", "site-help-strip", "site-prefooter")
    out = []
    for s in sections:
        cls = s.get("class") or ""
        if any(c in cls for c in chrome) or s.get("id") == "globalnav":
            continue
        if s["tag"] in ("section", "aside", "header", "article", "main") or (
            s["tag"] == "nav" and "localnav" in cls
        ) or (s["tag"] == "nav" and "sitemap" in cls):
            out.append(s)
    return out


def main():
    pages_out = []
    flips_by = {}
    for url, rel in PAGES:
        exists = (ROOT / rel).exists()
        rec = {
            "url": url,
            "rel": rel,
            "exists": exists,
            "bytes": (ROOT / rel).stat().st_size if exists else 0,
        }
        if not exists:
            pages_out.append(rec)
            continue
        p = parse_file(rel)
        unique = unique_section_filter(p.sections)
        body_headings = [h for h in p.headings if h["text"] not in {
            "Explore guide", "Explore tools", "Get support", "Guide", "Tools",
            "Company", "Support", "Connect", "Disclaimer",
        }]
        gsl_same = []
        for L in p.links:
            if "guide-section-link" not in (L.get("class") or "").split():
                continue
            href = L.get("href") or ""
            if href.startswith("http") and "shroffin.com" not in href:
                continue
            if href.startswith("mailto:") or href.startswith("tel:"):
                continue
            if href.startswith("http") and any(x in href for x in ("wa.me", "whatsapp", "linkedin.com", "rbi.org", "nhb.org", "irdai", "incometax", "consumerhelpline", "cms.rbi")):
                continue
            if not href.startswith("http"):
                gsl_same.append({"href": href, "text": L.get("text", "")[:80]})
        rec.update({
            "main_class": p.main_class,
            "body_class": p.body_class,
            "sections_all": len(p.sections),
            "unique_sections": [{"tag": s["tag"], "id": s["id"], "class": s["class"]} for s in unique],
            "headings": [{"tag": h["tag"], "id": h["id"], "text": h["text"]} for h in p.headings],
            "body_headings": [{"tag": h["tag"], "id": h["id"], "text": h["text"]} for h in body_headings],
            "buttons": len(p.buttons),
            "button_ids": [b["id"] for b in p.buttons if b["id"]],
            "links": len(p.links),
            "images": len(p.images),
            "image_srcs": [i["src"] for i in p.images],
            "picture_sources": len(p.picture_sources),
            "picture_srcsets": [s["srcset"][:120] for s in p.picture_sources if s["srcset"]],
            "inputs": len(p.inputs),
            "input_ids": [i["id"] for i in p.inputs if i["id"]],
            "selects": len(p.selects),
            "select_ids": [s["id"] for s in p.selects if s["id"]],
            "textareas": len(p.textareas),
            "details": len(p.details),
            "details_summaries": [d["summary"].strip() for d in p.details],
            "dialogs": p.dialogs,
            "iframes": p.iframes,
            "hidden": len(p.hidden),
            "aria_hidden": len(p.aria_hidden),
            "inert": p.inert,
            "flips": p.flips,
            "flip_count": len(p.flips),
            "flip_ids": [f["id"] for f in p.flips],
            "flip_links": len(p.flip_links),
            "tablists": len(p.tablists),
            "tabs": len(p.tabs),
            "tab_panels": len(p.tab_panels),
            "guide_moments": [{"id": g.get("id"), "class": g.get("class")} for g in p.guide_moments],
            "guide_section_links": len(p.guide_section_links),
            "gsl_same_site": gsl_same,
            "visually_hidden": len(p.visually_hidden),
            "home_moments": p.home_moments,
            "home_moment_titles": p.home_moment_titles,
            "home_embeds": p.home_embeds,
            "spd_frames": p.spd_frames,
            "tables": len(p.tables),
            "fieldsets": len(p.fieldsets),
            "labels": len(p.labels),
            "calc_form": p.calc_form,
            "calc_outs": p.calc_outs,
            "guide_scrub_on": p.guide_scrub_on,
            "edu_html": p.edu_html,
            "edu_commented": p.edu_commented,
            "edu_mentions": p.edu_mentions,
            "text_chunks": len(p.text_chunks),
            "role_listbox": p.role_listbox,
            "role_tooltip": p.role_tooltip,
            "role_dialog": p.role_dialog,
            "reading_mode": p.reading_mode,
            "has_prefooter": any("site-prefooter-cta" in (s.get("class") or "") for s in p.sections),
            "has_help": any("site-help-strip" in (s.get("class") or "") for s in p.sections),
            "has_localnav": any("localnav" in (s.get("class") or "") for s in p.sections),
        })
        if url.startswith("/pages/") and "guide" in url or url in {
            "/pages/tax-benefits.html", "/pages/concessions.html",
            "/pages/home-loan-insurance.html", "/pages/property-home-insurance.html",
            "/pages/credit-life-insurance.html", "/pages/home-loan-complaints.html",
            "/pages/guide.html", "/pages/guide-documents.html",
        }:
            flips_by[url] = {"flip_count": rec["flip_count"], "flip_ids": rec["flip_ids"], "tabs": rec["tabs"], "tablists": rec["tablists"], "details": rec["details"], "guide_section_links": rec["guide_section_links"], "guide_moments": len(rec["guide_moments"]), "scrub": rec["guide_scrub_on"]}
        pages_out.append(rec)

    extract = extract_compare()

    # conflict IDs from markdown
    md = (ROOT / "super-review-1/figma-migration/_figma-pre-transfer-conflict-audit.md").read_text()
    md_ids = re.findall(r"ID: `([^`]+)`", md)
    ledger = json.loads((ROOT / "super-review-1/figma-migration/_figma-pre-transfer-conflict-audit-ledger.json").read_text())
    ledger_ids = ledger.get("conflict_ids", [])

    # unverified in markdown
    md_unverified_ids = []
    blocks = re.split(r"\n(?=\d+\. \*\*ID:)", md)
    for b in blocks:
        m = re.search(r"ID: `([^`]+)`", b)
        if m and re.search(r"^\s*- UNVERIFIED", b, re.M):
            md_unverified_ids.append(m.group(1))
    # also trailing UNVERIFIED after capture lines
    for m in re.finditer(r"ID: `([^`]+)`([\s\S]*?)(?=\n\d+\. \*\*ID:|\n### T|\n## Must edit)", md):
        body = m.group(2)
        if re.search(r"- UNVERIFIED\.?\s*$", body, re.M) or body.strip().endswith("UNVERIFIED."):
            if m.group(1) not in md_unverified_ids:
                md_unverified_ids.append(m.group(1))

    out = {
        "pages": pages_out,
        "flips_by_guide_page": flips_by,
        "nav": nav_census(),
        "footer": footer_census(),
        "localnav": localnav_census(),
        "css_debt": [css_debt(f) for f in REDESIGNED_CSS],
        "hover_counts": hover_in_shell(),
        "bank_logos": bank_logo_mismatch(),
        "explore": explore_controls(),
        "apply_contact_ids": apply_contact_fields(),
        "reading_mode_files": reading_mode_exists(),
        "prototypes": prototype_html(),
        "theme": theme_boot_dark(),
        "sitemap_edu": sitemap_edu(),
        "robots_edu": robots_edu(),
        "home_cta_edu": home_cta_edu(),
        "calc_735_blocks": calc_735_what_changes(),
        "duration_tokens": duration_tokens(),
        "fonts": gitignore_fonts(),
        "images_logos": [p.name for p in sorted((ROOT / "images/logos").iterdir())] if (ROOT / "images/logos").exists() else [],
        "images_guide_heroes": [p.name for p in sorted((ROOT / "images/guide-heroes").iterdir())] if (ROOT / "images/guide-heroes").exists() else [],
        "media_demos": [p.name for p in sorted((ROOT / "media/demos").iterdir())] if (ROOT / "media/demos").exists() else [],
        "md_conflict_ids": md_ids,
        "ledger_conflict_ids": ledger_ids,
        "ids_md_not_ledger": sorted(set(md_ids) - set(ledger_ids)),
        "ids_ledger_not_md": sorted(set(ledger_ids) - set(md_ids)),
        "md_unverified_ids": md_unverified_ids,
        "ledger_unverified": ledger.get("unverified"),
        "extract_urls": sorted(extract.keys()),
        "mq_735_guide": media_query_context("css/shroffin-guide.css", 735) + media_query_context("css/shroffin-guide.css", 1069),
        "mq_735_calc": media_query_context("css/shroffin-calculators.css", 735) + media_query_context("css/shroffin-calculators.css", 1069),
    }

    # extract vs live unique sections
    extract_gaps = []
    for rec in pages_out:
        url = rec["url"]
        ex = extract.get(url)
        if not ex:
            extract_gaps.append({"url": url, "gap": "missing from extract-v2"})
            continue
        live_unique = [s["class"] for s in rec.get("unique_sections", [])]
        ex_sections = [s.get("class") or "" for s in ex.get("sections", [])]
        missing_in_extract = [c for c in live_unique if c not in ex_sections]
        extract_gaps.append({
            "url": url,
            "extract_main_class": ex.get("main_class"),
            "live_main_class": rec.get("main_class"),
            "extract_section_count": len(ex.get("sections", [])),
            "live_unique": live_unique,
            "extract_headings_non_chrome": [
                h["text"] for h in ex.get("headings", [])
                if h["text"] not in {"Explore guide", "Explore tools", "Get support", "Guide", "Tools", "Company", "Support", "Connect", "Disclaimer"}
            ],
            "live_body_headings": [h["text"] for h in rec.get("body_headings", [])],
            "extract_buttons": len(ex.get("buttons", [])),
            "live_buttons": rec.get("buttons"),
            "extract_inputs": len(ex.get("inputs", [])),
            "live_inputs": rec.get("inputs"),
            "extract_details": len(ex.get("details", [])),
            "live_details": rec.get("details"),
            "unique_not_in_extract_section_list": missing_in_extract,
        })
    out["extract_vs_live"] = extract_gaps

    dest = ROOT / "super-review-1/figma-migration/_completeness-census-raw.json"
    dest.write_text(json.dumps(out, indent=2, default=str))
    print(f"wrote {dest} pages={len(pages_out)}")
    print("flips", json.dumps(flips_by, indent=2))
    print("md vs ledger", out["ids_md_not_ledger"], out["ids_ledger_not_md"])
    print("md unverified", md_unverified_ids)
    print("theme", json.dumps(out["theme"], indent=2))
    print("edu sitemap", out["sitemap_edu"], "home", out["home_cta_edu"], "footer", out["footer"]["education_live_href"], "nav", out["nav"]["education_live_href"])
    print("fonts", out["fonts"])
    print("bank logos dir", out["bank_logos"]["dir_count"], "js", out["bank_logos"]["js_count"])
    print("guide heroes", len(out["images_guide_heroes"]), "demos", len(out["media_demos"]), "logos", len(out["images_logos"]))
    print("reading mode", out["reading_mode_files"])
    print("prototypes", out["prototypes"])
    hex_tot = sum(x.get("hex_count", 0) for x in out["css_debt"])
    print("hex total redesigned css", hex_tot)
    print("hover", out["hover_counts"])


if __name__ == "__main__":
    main()
