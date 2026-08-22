# Cursor Theme Site Scan — paste-ready prompt

How to use this (for you, not for the AI):

This is a **later** job. Run it only after `_theme-fundamentals.md` exists in `super-review-1/themes/`.

**Site repo:** The Shroffin website that people use is built and served from the **`aoo-static-gh`** repo. This scan walks that repo’s HTML, CSS, JS, and related source — not recordings, not another folder.

You paste **one prompt, one time**, into **one** new Cursor Agent chat. Stop there.

1. Open a **new Cursor Agent chat** with the **`aoo-static-gh`** folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until **`_theme-site-scan.md`**, **`_site-scan-log.jsonl`**, and **`_site-scan-evidence-index.md`** all exist.

**Expect a very long run.** This job is deliberately slow. It cuts **every atom** (each page, section, sentence, link, button, hidden panel, JS string, …) and checks all 20 themes on each one — serially, with proof.

**No evidence = no work done.** Every **atom** must have a log line with a **verbatim snippet** from the source file that a verification script can find. If that proof is missing or fake, the job is **not finished** — even if other files exist.

This job does not invent themes. It does not regroup. It does not reopen recordings. It does not change the website. It does not suggest how to make anything better. It maps **the same kinds of problems** already named in the fundamentals to **every place they appear** in the working site source, with a written reason for each mapping.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert at spotting the same kind of human problem in a new place.

This message is the only prompt the human will give you. There is no second prompt. You must do the whole job from this one message.

You have exactly one job: take every existing theme’s **fundamental** (the general kind of problem), scan **every working user-facing surface in the `aoo-static-gh` site source**, find every place that same kind of problem appears, and map each hit to the matching theme with a written **why**. Do nothing else. Do not change the website. Do not suggest a better version. Do not write how to repair anything. Do not invent themes. Do not merge themes. Do not split themes. Do not reopen recordings. Do not reread `issue-*.md`.

## Absolute no-fix law (highest priority — never break this)

This job is a **map of bumps**, not a repair list.

**Never do:**

- edit HTML, CSS, JS, JSON, images, or any other website file
- write a replacement, a better label, a better layout, or a better flow
- write “should”, “could”, “instead of”, “the right way”, “fix this by”, “change this to”, “consider”, “recommend”, “next step”, “how to improve”
- add a “how to fix”, “what to do”, “owners”, or “priority to repair” section
- put remedies in the chat reply “to be helpful”

**Only do:** say what a person meets, which existing theme it is, and why you mapped it there.

If a sentence tells someone how to make the product different, delete that sentence. If you cannot describe the bump without a remedy, you have not named the problem yet — rewrite until the remedy is gone. The website must be bitwise unchanged when you finish.

## Absolute no-cheat law (same priority — never break this)

A previous run **faked** a full scan by generating the three output files with a Python script, collapsing whole pages into one “main” block, and marking `scanned: true` without reading. **That is forbidden forever.**

**Never do:**

- write or run a script (Python, Node, shell loop, etc.) that **creates hits**, **creates units**, or sets **`scanned: true`**
- mark a unit scanned because the page “looks fine” or “is probably the same as another page”
- collapse an entire page, guide body, calculator, or iframe document into **one unit** whose slug is `main` or `page-body`
- merge multiple `<p>`, `<li>`, links, or controls into one “section” unit **without** also creating separate atom units for each
- use **Grep-only** or **Glob-only** as the scan — Grep may **find** candidates; every unit still requires **Read** on the owning file at the cited lines
- launch **Task** children, parallel page agents, or any split where another process writes scan results for you
- copy a hit paragraph from one page to another without reading that page’s source (footer/help hits must still cite the shared partial **and** be checked per page if page-specific copy exists)
- skip an **iframe** or **embedded frame** because the path starts with `_`
- skip **guide body** files under `content/guide/` or `content/pages/` when the served page is built from them
- finish while any served page fails the **density gate** (Step 2f)

**Only do:**

- **You**, in **this chat**, **serially**: inventory → cut units → read each unit → match themes → write outputs
- use scripts **only** for **inventory counts** and **verification** (Step 2f, Step 6) — never to invent scan results

If you catch yourself generating bulk JSON “to save time,” stop, delete that output, and read the files.

## Absolute evidence law (same priority — no evidence = not done)

**An atom is not checked until it has a complete evidence record in `_site-scan-log.jsonl` that passes verification.**

If any atom lacks evidence, or the snippet cannot be found in the cited source file, **the scan did not happen** for that atom — and **you may not reply done**.

**Every atom’s log line must include ALL of:**

| field | rule |
|---|---|
| `unit_id` | must match universe exactly |
| `page` | served page path |
| `source_file` | repo-relative path you Read |
| `source_lines` | `"start-end"` line numbers (1-based) covering **this atom only** |
| `evidence_snippet` | **verbatim** text for **this atom only** — copied from `source_file` at `source_lines`. Min **20 characters** for prose; for short controls (e.g. “Back”, “Apply”) use the **full visible label** (min **3 characters**). Must appear **exactly** in the file. |
| `atom_kind` | one of: `page`, `section`, `sentence`, `list_item`, `link`, `button`, `form_label`, `form_control`, `helper_text`, `filter_group`, `tab`, `table_column`, `hidden_panel`, `drawer`, `iframe_doc`, `js_string`, `css_motion`, `alt_text`, `nav_link`, `flyout_link`, `legal_line`, `shared_chrome` |
| `parent_section_id` | `unit_id` of the `h1`–`h6` section this atom lives under, or `page-root` |
| `selector_or_id` | element `id`, `name`, `href`, or CSS selector — **required** for every atom (use `"none"` only for bare `<p>` with no id) |
| `themes` | object with **every** `theme-01` … `theme-N` key → value **`clean`** or **`hit`** (exactly one of those two strings) |
| `themes_checked_count` | must equal theme count (20) |
| `read_tool_used` | must be `true` — set only after you used Read on `source_file` for this atom |

**For hits**, also include in the same log line a `hits` array; each hit must repeat:

- `evidence_snippet` (same verbatim quote that shows the bump)
- `code_paths` with `file:start-end`
- `why_mapped`, `object_kind`, `failure_kind`

**Forbidden evidence:**

- placeholder snippets (`"…"`, `"TODO"`, `"main content"`, `"see file"`)
- snippets copied from a **different** atom or page
- `themes` missing any theme id, or values other than `clean` / `hit`
- `read_tool_used: false` or omitted
- log lines produced by a script without Read

**Human evidence index (mandatory):** After the log is complete, write `_site-scan-evidence-index.md` **from the log only** — **one subsection per atom** (same count as universe). Group under page headings for reading, but **do not omit atoms**. Each block shows `atom_kind`, source, lines, snippet, and all 20 theme marks.

**Verification (mandatory before reply):** Run the evidence verification script in Step 7. It must print `EVIDENCE_VERIFY_OK`. If it prints any `FAIL`, the job is **not done**.

## Full coverage scope (mandatory — every atom, every page)

The founder requires evidence for **each and every** user-facing thing that can affect a person’s path through the site — not one proof per page, not one proof per heading block.

**The universe must list every atom below. Each atom gets its own unit id, its own log line, its own evidence snippet, and all 20 theme checks.**

| Layer | What must be its own unit (never merged away) |
|---|---|
| **Page** | Each served URL / HTML document (including iframe documents) — proves the page was opened |
| **Section** | Each `h1`–`h6` block (heading + prose under it until next same-or-higher heading) |
| **Sentence / prose** | Each `<p>`, each standalone text block in a section that is not already its own control |
| **List line** | Each `<li>` |
| **Link** | Each `<a>` with visible text, each off-site link, each “Learn more”, each nav href |
| **Button** | Each `<button>`, each submit/reset input, each `[role="button"]`, each chip that acts as a toggle |
| **Label & field** | Each `<label>`, each `<input>`, each `<select>`, each `<textarea>`, each fieldset legend |
| **Helper & hidden text** | Each info icon + its popover/tooltip body, each `aria-label`, each `aria-describedby` target, each `title` on a control |
| **Choice group** | Each filter fieldset, each radio/checkbox group, each tab, each pill row |
| **List & table UI** | Each column header `<th>`, each tab label, each results shell (`Overview`, `Charges`, …), each row checkbox column |
| **Hidden / flow UI** | Each `<details>` (closed state), each drawer/modal shell, each `[hidden]` panel, each JS panel toggled by `hidden` / `open` / `aria-expanded`, each collapsed “more” block |
| **Embedded surface** | Each `iframe` document (cut atoms inside the iframe file too) |
| **JS-built text** | Each user-visible string or template in attached `src/*.js` that becomes on-screen words |
| **Motion / layout UX** | Each CSS rule block (Read the stylesheet) tied to scroll reveal, sticky gap, or spacing that affects how a section reads or flows |
| **Media words** | Each `alt` on informative images, each `<figcaption>`, each visible `<meta name="description">` content on the page |
| **Shared chrome** | Top nav (each flyout link), help strip, footer links, disclaimer block — once each, tagged `also_on` |

**Flow rule:** Anything a person can **see**, **read**, **click**, **expand**, **fill**, or **get stuck on** while moving through any page is an atom. If it is in source and can affect their path, it is in the universe.

**No evidence for an atom = that atom was not checked = the whole job is incomplete.**

## Site repo (where the scan runs)

The website lives in **`aoo-static-gh`** at:

`/home/yash/Projects Etc & aoo/aoo-static-gh`

That is the repo the site is built from and served out of (`npm run serve` / port 8765). Every path in this prompt is under that root unless stated otherwise.

Do not scan the `etc` workspace, recorder dumps under `super-review-1/wb-rec-*`, or any other repo. If the workspace has multiple folders, **`aoo-static-gh` is the only site universe.**

## Why this work exists (do not skip)

The fundamentals name the **kind** of trouble a person can hit. They were first seen in a few places during a review. That is not the same as knowing where else that kind of trouble lives.

The founder needs one map: this kind of problem → every place it still happens in the product source, including hidden extras, JS-built lists, iframe demos, guide sections, and pages nobody opened in the recordings.

If a working screen, sentence, button, form field, helper note, table column, drawer, or hidden extra in the source was never **read** and **checked against all 20 themes**, the job has failed — even if a file claims `scanned: true`.

## Strict input lock (non-negotiable)

**Allowed input — open only these:**

1. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-fundamentals.md` — **the matching lens**
2. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/theme-*.md` — **title + pinpoint only**, for original vs new. Do not read Exact theme, threads, or issue lists.
3. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-index.md` — completeness check only
4. **Site source** under `aoo-static-gh` that a person can meet (Step 2)

**Forbidden input:**

- any `wb-rec-*/issue-*.md`
- any `wb-rec-*/_theme-cards.json`
- any raw recorder file
- this prompt file and the other prompt files
- `_theme-recurrence.md`, `_grouping-ledger.json`, `_recurrence-ledger.json`
- any older `_theme-site-scan.md`, `_theme-site-scan-ledger.json`, `_site-scan-universe.json`, `_site-scan-log.jsonl`, `_site-scan-evidence-index.md` (overwrite them)
- tests, golden snapshots, `node_modules`

If index and live `theme-*.md` disagree, **live theme files win**. If fundamentals and theme file **count** disagree, **stop**. Reply only: Fundamentals and theme files do not match; run that job first.

## What you are extracting

For every **atom** (see cutting recipe), ask:

**Does this place show the same kind of object and the same kind of failure as an existing fundamental?**

If yes: write a hit with why. If no: record `clean` for that theme on that atom. Do not invent a new kind of problem.

## Hard laws

1. **Do not invent themes.** Same count, same numbers. Every theme appears in the output even at zero hits.
2. **Do not miss working source.** Served pages, hidden-from-menu pages, iframe targets, guide bodies, attached JS/CSS, shared chrome — all in the universe.
3. **Read, do not remember.** Open the file. Cite lines or selectors. No guess from another page.
4. **Match kind, not original button names.**
5. **Deterministic.** Same fundamentals + same source → same unit ids, same sort order, same match keys. No taste.
6. **One primary theme per hit.** Two different failures on one control = two hits.
7. **No fix language** in hits or reply.
8. **No facts** not in source or fundamentals.
9. **No website edits. No theme file edits. No commit.**
10. **No junk drawer** beyond at most 5 `refused_not_a_theme_match` rows in the ledger.
11. **No evidence, no credit.** A row in the ledger with `scanned: true` is valid **only** if the matching log line exists and passes evidence verification.

## Runtime contract (non-negotiable)

**One agent. This chat. Serial.**

1. Inventory themes
2. Freeze site universe + cut **every atom** (deterministic recipe)
3. **Pass atomic density gate** — if fail, cut missing atoms and re-freeze; do not scan yet
4. Scan every atom: Read source → check all 20 themes → append evidence line to log
5. Write evidence index from log (one block per atom)
6. Write human map + ledger from log
7. Run verification (density + evidence) — if fail, go back to step 4 for failed atoms

**Forbidden:** Task tool, parallel children, “your choice” parallel, bulk generators, finishing without `_site-scan-log.jsonl` with **one line per atom**.

## How to match (every atom, themes in order)

1. Read the fundamental’s 1–3 sentences. Name `object_kind` and `failure_kind` in ordinary words.
2. Read the atom’s source (HTML/CSS/JS) at the cited lines.
3. Hit only if **both** kinds match.
4. Write `why_mapped` (2–4 sentences), `why_not_neighbor` if needed, `code_paths`.
5. Tag `location_kind`: `original` if theme pinpoint names this place; else `new`.
6. Delete any remedy wording.

---

### Step 1 — Inventory themes

```bash
find "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes" -name 'theme-*.md' | sort
```

Zero files → stop. Reply only: Theme Grouper output is missing; run that job first.

Missing `_theme-fundamentals.md` → stop. Reply only: Theme Fundamentals output is missing; run that job first.

Read `_theme-fundamentals.md` in full. For each theme, store in the universe file:

- `match_keys`: `{ object_kind, failure_kind }` copied from the fundamental (short labels you will reuse on every unit)
- `fundamental_text`: paste the 1–3 sentences verbatim

From each `theme-*.md`, read **only** `#` title and YAML `pinpoint:` (or pinpoint line). Store `original_pinpoint`. Stop reading that file.

---

### Step 2 — Freeze the site universe

**Repo root:** `/home/yash/Projects Etc & aoo/aoo-static-gh`

#### 2a — Sitemap URLs

```bash
python3 - <<'PY'
from pathlib import Path
import re
root = Path("/home/yash/Projects Etc & aoo/aoo-static-gh")
xml = (root / "sitemap.xml").read_text()
for loc in re.findall(r"<loc>([^<]+)</loc>", xml):
    print(loc)
PY
```

Also read `data/redesigned-pages.json`. **Union** with sitemap if they differ. Note mismatch in ledger.

#### 2b — Every HTML file in the repo (classification)

```bash
find "/home/yash/Projects Etc & aoo/aoo-static-gh" \
  \( -path "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1" -o \
     -path "/home/yash/Projects Etc & aoo/aoo-static-gh/content/_golden" -o \
     -path "/home/yash/Projects Etc & aoo/aoo-static-gh/scripts" -o \
     -path "/home/yash/Projects Etc & aoo/aoo-static-gh/node_modules" -o \
     -path "/home/yash/Projects Etc & aoo/aoo-static-gh/tests" -o \
     -path "/home/yash/Projects Etc & aoo/aoo-static-gh/.git" \) -prune \
  -o -type f -name '*.html' -print | sort
```

Classify every path:

| class | rule | scan? |
|---|---|---|
| `served_public` | In sitemap / redesigned-pages, or `index.html`, legal pages, `sitemap.html`, or `pages/*.html` without leading `_` | **yes — full unit cut** |
| `served_hidden_from_menu` | Other root or `pages/*.html` that still opens (e.g. `education-loan.html`, `compare.html`, `faq.html`) | **yes — full** |
| `iframe_or_embed_target` | Any HTML referenced by `iframe[src]`, `embed`, or `object` on a served page | **yes — full** (even if under `pages/_*.html`) |
| `source_of_served` | `content/**/*.html`, `templates/**`, `partials/**` | **cut into units** when building the served page that includes them |
| `internal_probe` | `pages/_*.html` **not** loaded by any served page | list in `excluded` only |
| `not_site` | pruned dirs | ignore |

**Iframe rule:** If `index.html` (or any served page) has `<iframe src="pages/_product-demo-frame.html">`, then `pages/_product-demo-frame.html` is **`served_via_iframe`**, not excluded. Cut units inside it the same as any page.

#### 2c — Attached source per served page

For each served HTML file, collect in document order:

- every `iframe[src]`, `script[src]`, `link[rel=stylesheet]`
- matching `content/pages/*.body.html`, `content/guide/*.body.html`, `templates/layouts/*.html`, included `partials/*.html`
- for each `js/*.bundle.js`, also the matching `src/*.js` when it exists (**Read `src/` for user-facing strings**)

Store as `attached_source` on that page in the universe file.

#### 2d — Atomic unit-cutting recipe (mandatory — every atom, never merge)

Cut **atoms** in **document order**. Use the **Read** tool on the file you are cutting — not a script.

**Rule:** If two things appear in the table below, they are **two units** — never one combined unit. A section heading does **not** replace sentence units inside it; you need **both** the section unit **and** each sentence/control unit inside.

**Shared chrome (scan once; tag `also_on` every served page):**

| atom_kind | unit |
|---|---|
| `shared_chrome` | Global nav shell |
| `nav_link` | **Each** top-level nav link and **each** flyout / submenu link in `partials/global-nav.html` |
| `shared_chrome` | Help strip |
| `shared_chrome` | Footer link columns + disclaimer summary |

**Per served page, iframe document, and guide `content/*.body.html`:**

| atom_kind | Create one unit for each… |
|---|---|
| `page` | The document itself (first atom on that file — proves file opened) |
| `section` | Each `h1`, `h2`, `h3`, `h4`, `h5`, `h6` block |
| `sentence` | Each `<p>` tag (each paragraph is its own unit) |
| `list_item` | Each `<li>` |
| `link` | Each `<a …>` with visible text or meaningful `href` |
| `button` | Each `<button>`, each `<input type="submit|button|reset">`, each `[role="button"]` |
| `form_label` | Each `<label>`, each fieldset `<legend>` |
| `form_control` | Each `<input>`, `<select>`, `<textarea>` (including hidden inputs that change results) |
| `helper_text` | Each info-button + its popover/tooltip content block; each `aria-label` on a control |
| `filter_group` | Each filter fieldset / chip row (plus each chip if not already a `form_control`) |
| `tab` | Each tab label / tab panel shell |
| `table_column` | Each `<th>` / column header in compare tables |
| `hidden_panel` | Each `<details>`, each `[hidden]` block, each drawer/modal root id, each collapsed panel in HTML |
| `drawer` | Each “More details”, how-calculated, charges drawer region in HTML or JS template |
| `iframe_doc` | Each iframe target file — then cut **all atoms above** inside that file again |
| `js_string` | Each distinct user-visible string or template in attached `src/*.js` (labels, helpers, headers, footnotes, empty states, errors) |
| `css_motion` | Each `@keyframes` / scroll-reveal / sticky-spacing rule block in attached CSS that affects the page’s UX (cite selector + file lines) |
| `alt_text` | Each informative `alt=""` or `<figcaption>` |

**Inside a section:** cut **section** unit for the heading, then **separate** units for every `<p>`, `<li>`, link, button, and control under that heading. Do not stop at the section.

**Hidden / flow:** For every panel that starts hidden (`hidden`, `aria-expanded="false"`, closed `<details>`, JS `hidden` attribute), create a `hidden_panel` or `drawer` unit and Read its source text even if collapsed in the browser.

**JS-built UI:** Read attached `src/*.js`. Every string that becomes visible UI is its own `js_string` atom. Do not subsume JS strings into the HTML page unit.

**Unit id format (stable):**

`U-{page_slug}--{nth:05d}--{atom_kind}--{short_slug}`

- `nth` = global document order: page → sections top-to-bottom → within each section: sentences → lists → links → buttons → controls → helpers → hidden → js strings attached to page
- `short_slug` = `id`, `name`, `href` slug, or first 30 chars of text slugified

Each atom in `_site-scan-universe.json`:

```json
{
  "unit_id": "U-…",
  "page": "pages/guide.html",
  "source_file": "content/guide/overview.body.html",
  "source_lines": "42-42",
  "nth": 17,
  "atom_kind": "sentence",
  "parent_section_id": "U-pages__guide.html--00012--section--overview",
  "short_slug": "compare-side-by-side",
  "visibility": "visible",
  "section": "Overview — paragraph 3",
  "also_on": []
}
```

#### 2e — Write universe freeze

Write `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_site-scan-universe.json` **before** any scanning.

Must include: `theme_files`, `match_keys`, `fundamental_text`, `sitemap_urls`, `served_pages`, `served_via_iframe`, `attached_source`, `excluded`, `units` (full array).

Initialize `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_site-scan-log.jsonl` as an **empty file**.

#### 2f — Atomic density gate (must pass before Step 3)

Run this **verification only** script. It does **not** scan. It counts atoms in source files and compares to your universe — catches collapsed pages and missing sentences/controls.

```bash
python3 - <<'PY'
import json, re, sys
from pathlib import Path
root = Path("/home/yash/Projects Etc & aoo/aoo-static-gh")
uni = json.loads((root / "super-review-1/themes/_site-scan-universe.json").read_text())
units = uni["units"]
by_page = {}
kinds_by_page = {}
for u in units:
    by_page.setdefault(u["page"], []).append(u)
    kinds_by_page.setdefault(u["page"], {}).setdefault(u.get("atom_kind", "?"), 0)
    kinds_by_page[u["page"]][u.get("atom_kind", "?")] += 1

fail = []
ALLOWED_KINDS = {
    "page", "section", "sentence", "list_item", "link", "button", "form_label",
    "form_control", "helper_text", "filter_group", "tab", "table_column",
    "hidden_panel", "drawer", "iframe_doc", "js_string", "css_motion", "alt_text",
    "nav_link", "flyout_link", "legal_line", "shared_chrome",
}

def count_atoms_in_file(path):
    p = root / path
    if not p.exists():
        return {}
    t = p.read_text(errors="replace")
    return {
        "page": 1,
        "section": len(re.findall(r"<h[1-6][\\s>]", t, re.I)),
        "sentence": len(re.findall(r"<p[\\s>]", t, re.I)),
        "list_item": len(re.findall(r"<li[\\s>]", t, re.I)),
        "link": len(re.findall(r"<a[\\s>]", t, re.I)),
        "button": len(re.findall(r"<button[\\s>]|type=[\"'](?:submit|button|reset)[\"']", t, re.I)),
        "form_label": len(re.findall(r"<label[\\s>]|<legend[\\s>]", t, re.I)),
        "form_control": len(re.findall(r"<input[\\s>]|<select[\\s>]|<textarea[\\s>]", t, re.I)),
        "hidden_panel": len(re.findall(r"<details[\\s>]|[\\s]hidden[\\s>]|aria-expanded=\"false\"", t, re.I)),
        "table_column": len(re.findall(r"<th[\\s>]", t, re.I)),
        "alt_text": len(re.findall(r"\\balt=\"[^\"]+\"", t, re.I)),
    }

def files_for_page(page):
    paths = [page]
    att = uni.get("attached_source", {})
    if isinstance(att, dict):
        for p in att.get(page, []):
            paths.append(p)
    elif isinstance(att, list):
        for p in att:
            if isinstance(p, str) and (page.replace(".html", "") in p or p.endswith(".body.html")):
                paths.append(p)
    return paths

for u in units:
    if u.get("atom_kind") not in ALLOWED_KINDS:
        fail.append(f"FAIL {u['unit_id']}: bad atom_kind {u.get('atom_kind')}")

for page in uni["served_pages"] + uni.get("served_via_iframe", []):
    us = by_page.get(page, [])
    n_units = len(us)
    main_only = n_units == 1 and us[0].get("short_slug") in ("main", "page-body", "main-content")
    expected = {}
    for fp in files_for_page(page):
        for k, v in count_atoms_in_file(fp).items():
            expected[k] = expected.get(k, 0) + v
    got = kinds_by_page.get(page, {})
    # page atom required
    if got.get("page", 0) < 1:
        fail.append(f"FAIL {page}: missing page atom")
    # each structural kind in source must appear in universe (allow +shared chrome on nav partial only)
    for kind in ("section", "sentence", "list_item", "link", "button", "form_control", "table_column"):
        exp = expected.get(kind, 0)
        have = got.get(kind, 0)
        if exp >= 1 and have < exp:
            fail.append(f"FAIL {page}: {kind} atoms {have} < source count {exp}")
    if main_only and expected.get("section", 0) >= 2:
        fail.append(f"FAIL {page}: collapsed to single main unit with {expected.get('section')} headings")
    if n_units < max(5, sum(expected.values()) // 2):
        fail.append(f"FAIL {page}: {n_units} units looks too low for source atom count ~{sum(expected.values())}")

bad_slug = [u for u in units if u.get("short_slug") == "main" and count_atoms_in_file(u.get("source_file") or u["page"]).get("section", 0) >= 3]
for u in bad_slug:
    fail.append(f"FAIL {u['unit_id']}: illegal main slug on atom-rich file")

if fail:
    print("\\n".join(fail))
    sys.exit(1)
print("DENSITY_GATE_OK", "atoms", len(units), "pages", len(by_page))
PY
```

**If exit code is not 0:** do **not** start Step 3. Go back to 2d, cut missing atoms, update universe, run gate again until it passes.

---

### Step 3 — Scan every atom (serial, evidence required)

For each atom in universe order (page ASCII, then `nth`):

1. **Read** `source_file` at `source_lines` (expand ±15 lines if needed for context).
2. For each theme `theme-01` … `theme-N` in order, apply `match_keys`. Result = `clean` or `hit`.
3. Append **exactly one JSON line** to `_site-scan-log.jsonl` (full schema — **all fields required**):

```json
{
  "unit_id": "U-…",
  "page": "pages/guide.html",
  "source_file": "content/guide/overview.body.html",
  "source_lines": "42-42",
  "atom_kind": "sentence",
  "parent_section_id": "U-pages__guide.html--00012--section--overview",
  "evidence_snippet": "Verbatim words for THIS atom only — from those lines",
  "selector_or_id": "p.overview-lede",
  "read_tool_used": true,
  "themes_checked_count": 20,
  "themes": {
    "theme-01": "clean",
    "theme-02": "clean",
    "theme-03": "clean",
    "theme-04": "clean",
    "theme-05": "clean",
    "theme-06": "clean",
    "theme-07": "clean",
    "theme-08": "clean",
    "theme-09": "clean",
    "theme-10": "clean",
    "theme-11": "clean",
    "theme-12": "clean",
    "theme-13": "clean",
    "theme-14": "clean",
    "theme-15": "clean",
    "theme-16": "clean",
    "theme-17": "clean",
    "theme-18": "clean",
    "theme-19": "clean",
    "theme-20": "clean"
  },
  "hits": []
}
```

When a theme is `hit`, add an object to `hits` and set that theme’s value to `"hit"`.

Rules:

- `evidence_snippet` must be **copy-pasted** from the source you Read at `source_lines` — verification will search for it in that file.
- **One snippet = one atom.** Do not quote a whole section when the atom is a single `<p>` or button.
- For short controls (e.g. “Back”, “Apply”), quote the **full visible label** (min **3 characters**).
- For icon-only controls, quote the **`aria-label`**, **`placeholder`**, or **`title`** from source.
- `atom_kind` must match the universe record for this `unit_id`.
- `parent_section_id` must match the section atom that contains this atom (or `page-root`).
- `themes` must list **every** theme id from Step 1 — no shortcuts, no `"all_clean"`, no omitted keys.
- `read_tool_used` is `true` only after Read on this atom’s `source_file`.
- You may not append a line until all fields above are filled.
- **Log line count must equal atom count** when Step 3 finishes. Missing log line = atom **not checked**.

Do not sample. Do not skip legal pages. Theme-02 and theme-07 can appear on guide and policy pages — read **each sentence atom**.

For spacing/motion (theme-01, theme-03, theme-17): Read the CSS rules and JS that affect this atom’s selectors. If truly impossible from source alone, set `"visibility":"unjudgeable_from_source"` on the atom and explain in the log — still check all themes for non-motion failures on that atom.

---

### Step 4 — Write evidence index (from log only)

Write `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_site-scan-evidence-index.md`

This is the **human audit trail**. Build it by reading `_site-scan-log.jsonl` line by line — do not invent rows.

Format:

```markdown
# Site scan evidence index

Every **atom** in the universe appears below exactly once.
Each block shows `atom_kind`, the source that was read, and how all 20 themes were marked.
If an atom is missing from this file, it was not checked.

Total atoms: N

## <page path>

### <unit_id> — <atom_kind> — <section name>

- Kind: `<atom_kind>`
- Parent section: `<parent_section_id>`
- Source: `<source_file>:<source_lines>`
- Selector/id: `<selector_or_id>`
- Evidence: "<evidence_snippet>"
- Themes: theme-01 clean · theme-02 clean · … · theme-20 hit
- Hits: <none, or list theme ids that are hit>
```

Atoms in **same order** as universe: page ASCII, then `nth`.

The founder must be able to open `source_file` at `source_lines`, find `evidence_snippet` for **that specific atom**, and see that all 20 themes were marked.

---

### Step 5 — Build deliverables from the log (not from a generator)

Read `_site-scan-log.jsonl`. Aggregate hits into `_theme-site-scan-ledger.json` and `_theme-site-scan.md`. Do not add hits that are not in the log. Do not drop hits that are in the log.

Hit `id`: `H-{theme-NN}-{page_slug}-{unit nth}` — same as before.

Sort hits inside each theme by `page` ASCII, then unit `nth`.

---

### Step 6 — File shapes

#### A. `_site-scan-universe.json`

As frozen in 2e, plus final `"density_gate": "passed"`.

#### B. `_site-scan-log.jsonl`

One JSON object per line, one line per unit, in scan order. **This file is the machine evidence record.** Incomplete lines = job not done.

#### C. `_site-scan-evidence-index.md`

Human-readable audit trail — **one block per atom**, built from the log only (Step 4). If this file is missing or shorter than the atom count, the job is not done.

#### D. `_theme-site-scan.md`

First lines: **at most 4 short human lines** — whole working site, same kinds of problems as fundamentals, not a repair list, **every atom has a verified evidence line in the log and a block in the evidence index**.

Then **How matching was decided** (lens, universe, hit rule, one agent serial, density gate, **evidence law**).

Then **theme-01** … **theme-N** blocks:

```markdown
## theme-NN — <original theme title>

Fundamental: <verbatim from fundamentals file>

Hits: N (original: X, new: Y)

### H-theme-NN-…

<what_person_meets>

Why this theme: <why_mapped>

Why not <neighbor> (omit if none): <why_not_neighbor>

Where: <page> · <section> · <visibility> · <location_kind>

Evidence: <evidence_snippet from log> · <source_file>:<source_lines>
```

Zero hits: `Hits: 0 — this kind of problem did not show up on any scanned surface.`

Closing note: mapped to existing themes; not a new grouping; not a repair list.

#### E. `_theme-site-scan-ledger.json`

Must include:

- `scan_mode`: `"serial_single_agent"`
- `density_gate`: `"passed"`
- `evidence_gate`: `"passed"` (only after Step 7 evidence script succeeds)
- `universe_theme_count`, `universe_served_page_count`, `universe_unit_count`
- `log_line_count` (must equal `universe_unit_count`)
- `evidence_index_unit_count` (must equal `universe_unit_count`)
- `units_scanned_count` (must equal `universe_unit_count`)
- `units_with_verified_evidence` (must equal `universe_unit_count`)
- `hit_count`, `hits` (from log only)
- `every_theme_present_once`: true
- `every_unit_scanned`: true
- `every_unit_has_evidence`: true
- `cheat_checks_passed`: true
- `sitemap_vs_redesigned_pages`
- `forbidden_files_opened`: []
- `unit_coverage`: every unit with `scanned: true`, full `evidence_snippet`, `source_file`, `source_lines`, `themes_checked_count: 20`, `evidence_verified: true`

---

### Step 7 — Verify before you reply

Run all checks. Any failure → fix (re-read units, fix log, rebuild index and deliverables). **Do not reply until all pass.**

**Automated — log completeness + evidence in source files:**

```bash
python3 - <<'PY'
import json, sys, re
from pathlib import Path
root = Path("/home/yash/Projects Etc & aoo/aoo-static-gh")
themes_dir = root / "super-review-1/themes"
uni = json.loads((themes_dir / "_site-scan-universe.json").read_text())
ledger = json.loads((themes_dir / "_theme-site-scan-ledger.json").read_text())
lines = [l for l in (themes_dir / "_site-scan-log.jsonl").read_text().splitlines() if l.strip()]
theme_count = ledger.get("universe_theme_count") or len(uni.get("theme_files", []))
u_ids = {u["unit_id"] for u in uni["units"]}
log_ids = set()
fail = []

if len(lines) != len(uni["units"]):
    fail.append(f"log lines {len(lines)} != units {len(uni['units'])}")

# Count evidence index blocks
idx_text = (themes_dir / "_site-scan-evidence-index.md").read_text()
idx_blocks = len(re.findall(r"^### U-", idx_text, re.M))
if idx_blocks != len(uni["units"]):
    fail.append(f"evidence index blocks {idx_blocks} != units {len(uni['units'])}")

for raw in lines:
    o = json.loads(raw)
    uid = o["unit_id"]
    log_ids.add(uid)
    snippet = o.get("evidence_snippet", "")
    ak = o.get("atom_kind", "")
    min_len = 3 if ak in ("button", "link", "nav_link", "flyout_link", "tab", "form_label") else 20
    if len(snippet) < min_len:
        fail.append(f"FAIL {uid}: evidence_snippet too short ({len(snippet)} chars, min {min_len} for {ak})")
    if not ak:
        fail.append(f"FAIL {uid}: atom_kind missing")
    if not o.get("read_tool_used"):
        fail.append(f"FAIL {uid}: read_tool_used not true")
    themes = o.get("themes", {})
    if len(themes) != theme_count:
        fail.append(f"FAIL {uid}: themes count {len(themes)} != {theme_count}")
    for k, v in themes.items():
        if v not in ("clean", "hit"):
            fail.append(f"FAIL {uid}: bad theme value {k}={v}")
    if o.get("themes_checked_count") != theme_count:
        fail.append(f"FAIL {uid}: themes_checked_count mismatch")
    sf = o.get("source_file", "")
    sl = o.get("source_lines", "")
    fp = root / sf
    if not fp.exists():
        fail.append(f"FAIL {uid}: source_file missing {sf}")
        continue
    text = fp.read_text(errors="replace")
    if snippet not in text:
        fail.append(f"FAIL {uid}: evidence_snippet not found in {sf}")
    else:
        # also check snippet appears within cited line range when possible
        m = re.match(r"(\\d+)-(\\d+)", sl)
        if m:
            a, b = int(m.group(1)), int(m.group(2))
            chunk = "\\n".join(text.splitlines()[a - 1 : b])
            if snippet not in chunk and snippet not in text:
                fail.append(f"FAIL {uid}: snippet not in lines {sl} of {sf}")

if u_ids != log_ids:
    fail.append(f"missing log for {u_ids - log_ids}; extra {log_ids - u_ids}")
if ledger.get("scan_mode") != "serial_single_agent":
    fail.append("scan_mode not serial_single_agent")
if ledger.get("units_with_verified_evidence") != len(uni["units"]):
    fail.append("ledger units_with_verified_evidence mismatch")
if ledger.get("every_unit_has_evidence") is not True:
    fail.append("every_unit_has_evidence not true")

if fail:
    print("\\n".join(fail))
    sys.exit(1)
print("EVIDENCE_VERIFY_OK", "atoms", len(uni["units"]), "log", len(lines), "index", idx_blocks)
PY
```

**Manual:**

- [ ] **Five** output files exist: universe, **log**, **evidence index**, human map, ledger
- [ ] Evidence index has **exactly one block per atom** (same count as universe)
- [ ] Every log line has `atom_kind`, `parent_section_id`, `read_tool_used: true`, and 20 theme keys
- [ ] Every `evidence_snippet` is findable in its `source_file` (script proved it)
- [ ] Sentence atoms exist for guide/legal pages with many `<p>` tags (density gate proved counts)
- [ ] Theme headings count = `find theme-*.md` count
- [ ] No hit contains remedy words
- [ ] No atom uses slug `main` on an atom-rich page
- [ ] Iframe targets scanned atom-by-atom if parent embeds them
- [ ] Guide body files cut atom-by-atom (sections **and** each `<p>` / `<li>` / link / control)
- [ ] Website untouched; no `issue-*.md` used

**If evidence verification fails:** delete or fix the bad log lines, re-read those units, rebuild index and map, run verification again. **Do not reply done.**

---

## Reply to the user with only

- `scan_mode: serial_single_agent`
- `evidence_gate: passed` (or **do not reply** if not passed)
- how many themes, served pages, **atoms**
- **atoms_with_verified_evidence** (must equal atoms)
- log lines and evidence-index blocks (both must equal atoms)
- how many hits (original vs new)
- confirmation **five** files written: `_theme-site-scan.md`, ledger, universe, `_site-scan-log.jsonl`, **`_site-scan-evidence-index.md`**
- per-theme: `theme-NN` · hit count · one-line **new** example or `no new hits`

Do not paste the fundamentals. Do not paste code. Do not suggest repairs.

COPY TO HERE
