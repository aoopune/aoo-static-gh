# Apply Only Once – Audit Trail & Requirements

**Last updated**: 2026-02-13 (Pro-Tips: UI – two-column layout, contained table, compact spacing)

This document is the comprehensive audit trail of requirements, implementation status, and changes for applyonlyonce.com.

---

## 1. Source Documents

- **Plan**: `/home/parth/.cursor/plans/applyonlyonce_requirements_6fe877e7.plan.md`
- **Diagram**: `/home/parth/Downloads/aoo.html` (Draw.io/diagrams.net – authoritative layout source)
- **Schema Manifest**: `SCHEMA_MANIFEST.md`

---

## 2. Original Plan Summary

### Executive Summary
- Content + comparison platform for education loans
- Google Sheets as data layer (public, no API key)
- Static site hostable on GitHub Pages
- SBI blue (#00B5EF) and white theme

### Pages (10)
1. Landing (index.html)
2. Compare on your own (compare.html)
3. See what fits you (questions.html)
4. FAQ (faq.html)
5. PM-Vidyalaxmi Scheme & Bank interest rates (schemes.html)
6. Government schemes (government-schemes.html)
7. Document checklist (document-checklist.html)
8. Results (results.html)
9. About us (about.html)
10. Quick overview (quick-overview.html)

### Key Constraints
- Static only (GitHub Pages)
- No API keys
- Config-driven column visibility
- All constants in Config sheet

---

## 3. Diagram Layout (from aoo.html – authoritative)

### Navbar (all pages)
- **Exactly 4 items**: Apply Only Once (logo) | Home | Quick overview | About us
- **Not** in navbar: FAQ, PM-Vidyalaxmi, Government Schemes, Document list (those are homepage content links)

### Page 1 – Landing (homepage)
- **Main heading**: "Education loan rules differ from bank to bank"
- **Subheading**: "Clean & Simplified information of 35+ banks and NBFCs on one platform to get the best loan offer"
- **Course types**: "Loans available from School education to Diploma, Graduation, Post-Graduation, Doctorate courses, Executive & working-professional programs, Skill development & vocational courses (job-oriented as well) and Professional & Technical courses."
- **Trust line**: "We are not partnered with any bank or NBFCs. Lenders do not pay us to be listed, ranked, or recommended."
- **Two cards side-by-side**:
  1. **Compare on your own** – "Browse loan eligibility criteria, features, fees & charges, etc. across all banks in India at your own pace"
  2. **See what fits you** – "Takes 20 seconds. Answer 6 questions. No documents needed."
- **4 links below cards** (homepage content, not navbar): Frequently Asked Questions | PM-Vidyalaxmi Scheme & Bank Interest rates | Government Schemes | Standardized Document list
- **Footer**: "Let us know anything we should know by: Call / WhatsApp : +91 91123 34367, Mail: applyonlyonceindia@gmail.com"

### Page 2 – Compare on your own
- Heading: "Compare on your own across all banks"
- **Indian Education** | **Abroad Education** buttons (centered)
- Table with horizontal and vertical scroll
- Rows = banks (with checkboxes)
- Cols = attributes (scrollable)
- No "Choose bank" dropdown
- Text below: "This information is same for everyone. If you want your profile specific information, you can see what fits you"

### Page 3 – See what fits you
- 6 questions
- Submit → Results page

### Page 4 – FAQ
- Accordion, content from doc

### Page 5 – PM-Vidyalaxmi
- Content above QHEI table (from PM_Vidyalaxmi sheet)
- QHEI table below

### Page 6 – Government schemes
### Page 7 – Document checklist
### Page 8 – Results
- "Based on your answers, following banks fit your profile"
- "Want to change answers?"
- Bank cards (Bank A, B, C, D, E…)
- "This information is based on your answers. To compare banks in general explore on your own"

---

## 4. Todo List History

### Phase 1 (Completed)
- [x] Prerequisites (0.1–0.5) – scan/parse sheets, finalize data model
- [x] Repo setup at /home/parth/Projects/applyonlyonce
- [x] Implement all pages, layout, theme, sheets integration, unit/functional/UI tests

### Phase 2 (Completed – from user prompt 2025-02-05)
- [x] Create comprehensive audit trail doc
- [x] Navbar: Apply Only Once (logo) left, Home, Quick overview, About us right; mobile hamburger
- [x] Homepage layout: heading, 2 cards, 4 content links; hero gradient, card accents
- [x] Compare page: scrollable table, banks as rows with checkboxes, centered tabs, no dropdown
- [x] Center align navbar and footer, responsive
- [x] See what fits: bank ranking from sheets, Config for cols, results cards with fit score
- [x] FAQ: modern accordion, all expanded by default
- [x] QHEI table: Config for visibility, all cols when no config
- [x] PM-Vidyalaxmi: section above QHEI from sheet
- [x] All tables: sortable; sticky headers
- [x] Document checklist: section header + accordion by subcategory
- [x] Results: 10 by default, load more; Edit answers restores form; compact fit badge
- [x] 44 UI tests; unit tests pass

### Phase 4 (Next – Deploy to GitHub Pages)
- [ ] Initialize git, add .gitignore, initial commit
- [ ] Create GitHub repo `applyonlyonce`, push to main
- [ ] Settings → Pages → Source: main, Folder: / (root)
- [ ] Verify site live at https://&lt;username&gt;.github.io/applyonlyonce/

### Phase 5 (Next – Verification)
- [ ] Run full test suite locally (unit + UI) — **passes**
- [ ] Run UI tests against deployed URL: `BASE_URL=https://...github.io/applyonlyonce/ npm run test:ui`
- [ ] Confirm all sheets load on deployed site
- [ ] Mark project complete when Definition of Done satisfied

---

## 5. Requirements from User Prompt (2025-02-05)

### 1. Navbar
- **Only 4 items** per diagram: Frequently Asked Questions | PM-Vidyalaxmi Scheme & Bank Interest rates | Government Schemes | Document checklist
- Header has: Apply Only Once (logo) + Home

### 2. Homepage Layout
- Match diagram exactly: heading, 2 cards side-by-side (Explore on your own, See what fits you), 4 nav links below

### 3. Compare on your own
- Table goes out of screen → fix with scroll
- Rows = banks with checkboxes
- Cols and rows both scrollable
- Include all cols from sheets by default
- Config sheet for column visibility
- Both India and Abroad tabs
- Buttons (Indian/Abroad) centered
- **Remove** "Choose bank" dropdown
- Update UI tests

### 4. Navbar and Footer
- Center aligned, responsive (not left aligned)

### 5. See what fits you (most important flow)
- Questions correct; answers/results not returned correctly
- Query sheets, find relevant cols, add to Config
- Query those cols, generate bank ranking
- Results = list of all banks that fit, with relevant info per bank in cards
- Show all banks by default
- Ranking changes based on answers
- Banks list not loading → fix
- **20+ UI tests** for various answer combinations and expected results
- Ensure list renders correctly based on ranking
- Ensure ranking generated correctly

### 6. FAQ
- Accordion looks dated → use modern one
- Proper alignment, responsive
- **All expanded by default**
- UI tests

### 7. QHEI table (PM-Vidyalaxmi)
- Truncated cols → include all cols by default
- Config in Config sheet for dynamic add/edit visibility
- UI tests

### 8. Section above QHEI tables
- Currently blank
- Pull and use data from PM_Vidyalaxmi sheet
- Extensive UI tests

### 9. Sortable Tables
- Indian education, abroad education, QHEI table
- All rows sortable by all cols individually, both orders (asc/desc)
- Extensive UI tests for all cols

### 10. Audit Trail
- Document everything implemented, plan, todos
- Capture requirements from this prompt

---

## 5b. Requirements from User Prompt (Config, Navbar, Compare, Styling, Pastel)

### 1. Tables must use Config to render columns
- **Requirement**: Visible columns must come from Config sheet. If config is not updated yet, do not show all sheet columns.
- **Implementation**: Compare, QHEI, Government schemes now only show columns that are explicitly `true` in config (e.g. `compare.india.column.COLNAME.visible = true`). When no column keys exist in config, a **default subset** is shown (e.g. bank_name, Scheme_name, Purpose, Eligibility_criteria, Security_/_Collateral, Processing_fees, Course for Compare; default QHEI and gov_schemes columns). Paste `config/config.csv` from `node scripts/generate-config.js` into the Config sheet to get all columns; then set `value = false` to hide.
- **UI tests**: Compare table column count asserted to be &lt; 30 (config-driven or default subset).

### 2. Navbar: Apply Only Once left, other buttons right
- **Requirement**: "Apply Only Once" logo left-aligned; Home, Quick overview, About us right-aligned.
- **Implementation**: `.site-header-inner` with `display: flex; justify-content: space-between`; logo first, `.site-nav` second with `margin-left: auto`. Max-width 960px for content band.
- **UI tests**: Navbar test verifies `.site-header-inner`, logo and nav visible, and logo precedes nav in DOM.

### 3. Compare: table fits screen, only table scrolls
- **Requirement**: User should not need to scroll the page; only the table content scrolls.
- **Implementation**: `main.compare-main` has fixed height `calc(100vh - 64px)` and flex layout; `#table-wrapper.compare-table-wrapper` has `flex: 1 1 0`, `min-height: 0`, `overflow: auto` so only the table area scrolls.
- **UI tests**: Compare page asserts `main.compare-main` and `#table-wrapper.compare-table-wrapper` visible; table wrapper has overflow auto/scroll; main height &gt; 200px.

### 4. Homepage styling + coloured navbar
- **Requirement**: Make homepage attractive and beautiful; colour the navbar.
- **Implementation**: Navbar uses pastel gradient background (`--bg-nav`). Homepage has hero gradient (`--home-hero-bg`), larger heading, card accent strip (gradient bar on top), hover states, and styled link buttons below cards.
- **UI tests**: Existing homepage layout tests unchanged.

### 5. Pastel colours across the website
- **Requirement**: Use brand colours but in pastel variants site-wide.
- **Implementation**: CSS variables: `--primary-pastel`, `--secondary-pastel`, `--bg-surface`, `--bg-nav`, `--home-hero-bg`, `--home-card-accent`, `--card-border`. Body and surfaces use pastel backgrounds; cards, table row hover, and accents use pastel tints. Navbar uses pastel gradient.
- **UI tests**: No new assertions; styling only.

---

## 5c. Requirements (Footer, Navbar Logo, Want to Change Button, Results Cards)

### 1. Footer should not be white
- **Requirement**: Footer must have a non-white background for visual separation.
- **Implementation**: `--footer-bg: #e8f4f8` (light blue tint); `.site-footer { background: var(--footer-bg); }`.
- **UI tests**: "Footer has non-white background" – asserts computed background is not rgb(255,255,255).

### 2. Apply Only Once logo on navbar must be visible
- **Requirement**: The "Apply Only Once" link in the navbar was not visible (e.g. blue on blue).
- **Implementation**: `.site-logo a { color: inherit; text-decoration: none; }` so the link inherits white from `.site-logo` (which uses `--nav-text: #FFFFFF`). Ensures logo text is white on SBI blue navbar.
- **UI tests**: "Navbar Apply Only Once logo is visible" – asserts `[data-testid="nav-logo"]` is visible, has text "Apply Only Once", and computed color is white.

### 3. Want to change answers button – modern look and alignment
- **Requirement**: "Want to change answers?" looked dated and alignment was messed up.
- **Implementation**: Wrapped in `.results-actions` (flex column, align-items flex-start). `#toggle-answers` styled as modern button: padding, border, border-radius, box-shadow, hover state (primary-light background). `#change-answers-panel` styled with card-like border, padding, rounded corners.
- **UI tests**: "Results page Want to change answers is styled as modern button" – asserts button visible, text contains "Want to change answers", padding ≥ 8px.

### 4. Results page – beautiful modern cards, no trimming
- **Requirement**: Results cards should be modern: left = bank name, amount, interest rate, collateral required; right = fit score. Do not trim text (trimming was in UI only; full sheet data is shown).
- **Implementation**: New card layout in `results.js`: `.result-card-modern` with `.result-card-left` (bank name as h3, then rows for Loan amount, Interest rate, Collateral required – **full text**, no `.slice()`) and `.result-card-right` (circular fit score badge + "Fit: X%" label). `getCardFields(bank)` uses `findCol()` to resolve amount, rate, collateral columns; values are `String(bank[col]).trim()` with no length limit. CSS: flex layout, labels uppercase, fit score in circle, responsive.
- **UI tests**: "Results page cards have modern layout with fit score on right" – asserts `.result-card-modern`, `.result-card-left`, `.result-card-right`, `.result-card-name`, `.result-card-fit` are present and visible on first card.

### 4b. Results page – show actual bank name (not just "Bank")
- **Requirement**: Results cards must show the actual bank name from the sheet (e.g. "Union Bank of India", "State Bank of India"), not the literal label "Bank".
- **Implementation**: In `getCardFields(bank)`, bank name and scheme name are now resolved via `findCol(bank, ['bank_name', 'bank name', 'bank'])` and `findCol(bank, ['scheme_name', 'scheme name', 'scheme'])` so the correct sheet column (whose header may be long, e.g. "bank_name State Bank of India Bank of India ...") is used and its value is displayed. Fallback to `bank.bank_name` / `bank.Scheme_name` if present; display name is `bankName + (schemeName ? ' – ' + schemeName : '')` or `'Bank'` only when both are empty.
- **UI tests**: "Results page first card shows actual bank name from sheet (not just Bank)" – submits answers, waits for results, asserts first `.result-card-name` is visible, text length > 4, and text is not exactly "Bank".

### 5. Mobile & UX (2025-02-05)

1. **Navbar on mobile**: Logo + hamburger only; hamburger opens side drawer (from right) with Home, Quick overview, About us. Drawer closes on link click or overlay click. CSS: `.site-nav { display: none }`, `.nav-hamburger { display: flex }` at max-width 768px.
2. **Compare table on mobile**: Table was not showing – main had fixed height and table area collapsed. Fix: on mobile, `main.compare-main { height: auto; min-height: 60vh }`, `#table-wrapper.compare-table-wrapper { min-height: 280px }` so table is visible and scrollable.
3. **Results card layout**: Top row = bank name (left), fit score (right); below = amount, interest, collateral. New structure: `.result-card-top` (name + fit), `.result-card-details` (rows). Same for desktop and mobile.
4. **Document list**: No table. Heading "Type of document"; accordion by category using `<details>`/`<summary>`; all collapsed by default; inside each: subcategory headings + list of items (with optional mandatory badge). data-testid=doc-accordion-list, doc-accordion.
5. **Sticky table headers**: All tables in scroll wrappers – Compare and QHEI – have `thead th { position: sticky; top: 0; z-index: 3 }` so column names stay visible when scrolling.

- **UI tests**: Mobile hamburger + drawer; compare table visible at 375px; results card has .result-card-top and .result-card-details; document checklist has accordion (no table); compare and QHEI thead th position sticky.

### 6. Document list, Results UX, Compare mobile (2025-02-05)

1. **Document checklist**: Category as section header (e.g. "Academic docs", "KYC Documents"); under each header, subcategory as expandable accordion (e.g. "Current Academic Documents"). All collapsed by default. Structure: `<section><h2 class="doc-section-header">Category</h2><details class="doc-accordion"><summary>Subcategory</summary><ul>items</ul></details>...</section>`.
2. **Results fit score**: Round icon replaced with compact text badge "Fit X%" (.result-card-fit-badge) to save space; better UI/UX.
3. **Compare on phone**: Table wrapper max-height 320px on mobile so only a few rows visible; user scrolls inside the table.
4. **Results initial count**: Show only `results.initial_count` (config, default 10) cards initially; button "See the remaining X banks" loads the full list on click. Config key `results.initial_count`.
5. **Edit answers**: Remove "Want to change answers?" button and hidden panel; show direct "Edit answers" link (href=questions.html) in .results-actions, well aligned.
6. **Edit answers restores form**: When user clicks "Edit answers" from results, questions page must restore previously saved answers (aoo_answers in sessionStorage) into the form so user can edit, not start from scratch. questions.js restoreAnswers() runs on load and sets q1–q6 select values from sessionStorage.

- **UI tests**: Doc checklist section header + accordion; fit badge visible and contains "Fit N%"; results at most 10 initially, "See remaining" when visible; compare mobile wrapper overflow auto; Edit answers link visible and href to questions.html; Edit answers restores saved answers to form (submit → results → click Edit → verify q1–q6 have selected values); Results list ordered by fit uses /Fit \d+%/.

---

## 6. Implementation Status

| Component | Status | Notes |
|-----------|--------|-------|
| Navbar (4 items) | Done | Apply Only Once (logo) **left**, Home, Quick overview, About us **right** – per diagram |
| Navbar coloured | Done | Pastel gradient background |
| Homepage layout | Done | Heading, subheading, course types, trust line, 2 cards, 4 content links; hero gradient, card accents |
| Compare page | Done | Scrollable table, banks as rows with checkboxes, centered tabs, no dropdown |
| Compare table fits viewport | Done | Only table scrolls; main has fixed height, table wrapper flex + overflow |
| **Tables use Config** | Done | Compare, QHEI, Govt schemes: only columns with `visible=true` in config; else default subset |
| Center align nav/footer | Done | Responsive; logo left, nav right |
| See what fits results | Done | All banks in cards, ranking from sheets, Config for cols |
| FAQ accordion | Done | Modern, all expanded by default |
| QHEI cols + Config | Done | Per-column visibility from config; default subset when no config keys |
| PM-Vidyalaxmi content | Done | Section above QHEI from PM_Vidyalaxmi sheet |
| Sortable tables | Done | Compare + QHEI sortable by all cols |
| **Pastel palette** | Done | Pastel primary/secondary, bg-surface, nav, hero, cards site-wide |
| **Footer non-white** | Done | `--footer-bg: #e8f4f8` |
| **Navbar logo visible** | Done | `.site-logo a { color: inherit }` so logo is white on blue |
| **Want to change button** | Done | Modern button styling + `.results-actions` alignment |
| **Results cards modern** | Done | Left: bank name, amount, rate, collateral (full text); right: fit score circle; no trim |
| **Results page bank name** | Done | getCardFields uses findCol for bank_name/scheme_name so actual sheet column values shown (not literal "Bank") |
| **QHEI columns from Config** | Done | schemes.js uses getVisibleColumns(keys, config); config.csv has qhei.column.COL.visible; default all keys when no config |
| **PM-Vidyalaxmi scheme block** | Done | Section above QHEI populated from PM_Vidyalaxmi sheet (section/key/value); empty key/value filtered out |
| **Document checklist grouped table** | Superseded | Replaced by accordion (see below) |
| **Navbar darker SBI blue** | Done | --bg-nav: #0077a0 |
| **Footer lighter SBI blue** | Done | --footer-bg: #e0f7fc |
| **Mobile navbar** | Done | Logo + hamburger on viewport ≤768px; side drawer with nav links; drawer closes on link/overlay click |
| **Compare table on mobile** | Done | main.compare-main height auto on mobile, table wrapper min-height 280px so table visible |
| **Results card layout** | Done | Top row: bank name (left), fit score (right); below: amount, interest, collateral in .result-card-details |
| **Document list accordion** | Done | Category as section header (h2); subcategory as expandable accordion (details/summary); all collapsed by default |
| **Sticky table headers** | Done | .table-scroll-wrapper .data-table thead th { position: sticky; top: 0; z-index: 3 } for Compare and QHEI |
| **Results fit score compact** | Done | Round icon replaced with text badge "Fit X%" (.result-card-fit-badge); less space, better UX |
| **Compare mobile table scroll** | Done | On mobile, #table-wrapper max-height 320px so few rows visible; user scrolls inside table |
| **Results initial 10 + load more** | Done | Show results.initial_count (config, default 10) cards; "See the remaining X banks" button loads rest; config key results.initial_count |
| **Edit answers direct** | Done | "Want to change answers?" + hidden panel removed; direct "Edit answers" link (href=questions.html) in .results-actions |
| **Edit answers restores form** | Done | questions.js restoreAnswers() loads aoo_answers from sessionStorage on load; form pre-populates so user edits, not starts from scratch |
| UI tests | Done | 44 tests including Edit answers restores saved answers to form |
| **Quick overview section-wise UI** | Done | 2026-02-13: Section-wise layout; content split into paragraphs (double newline → &lt;p&gt;); CSS .overview-section, .overview-section-title, .overview-section-card, .overview-para; sheet data steps in QUICK_OVERVIEW_SHEET_STEPS.md |
| **Quick overview – all content visible + italic subtitle** | Done | 2026-02-13: Content split by single newline (every line → &lt;p&gt;) so all sheet content visible; optional column **subtitle** shown as italic below section title; case-insensitive column names (Section/Content/etc.); .overview-subtitle CSS |
| **Pro-Tips: sections + table + paragraphs + links** | Done | 2026-02-13: Sheet columns section_heading, block_type, content; block_type heading \| table_header \| table_row \| paragraph; table cells pipe-separated in content; [text](url) for links; **bold**; PRO_TIPS_SHEET_STEPS.md; AGENT_CONTEXT.md for agent instructions |
| **Pro-Tips: UI – less scroll, more info visible** | Done | 2026-02-13: #protips-container two-column grid on desktop (≥900px); sections with table span full width; .protips-table-wrapper max-height 320px/40vh + overflow auto; compact table font/padding; tighter section/para margins |
| **Government Schemes: height reset, no double scheme name, Sort order row, full data capture** | Done | 2026-02-13: Table height reverted to min(85vh, 900px). Scheme name shown only in column header (not as a body row). Optional **Sort order** row: first column = "Sort order", put 1–17 in each column to set row order on site; that row excluded from scheme columns. Data from fetchSheetRaw + buildRowsFromRaw so all columns captured (empty headers → Column_N). GOVERNMENT_SCHEMES_ORDER.md, DATA_SHEET_GUIDE.md updated. |

---

## 7. Config Sheet Keys (to add/use)

- `compare.visible_columns` – comma-separated column IDs for Compare table (India/Abroad)
- `qhei.visible_columns` – comma-separated for QHEI table
- `results.visible_columns` – columns to show in bank cards
- `results.initial_count` – number of result cards shown initially (default 10); "See the remaining X banks" loads rest
- `results.columns_to_rank` – columns used for fit/ranking logic

---

## 8. Sheet Schemas (from SCHEMA_MANIFEST)

| Sheet | Cols | Rows |
|-------|------|------|
| Education_Loans_India | 85 | 71 |
| Education_Loans_Abroad | 83 | 39 |
| PM_Vidyalaxmi_QHEI | 14 | 918 |
| PM_Vidyalaxmi | 4 (section, key, value, extra) | 39 |
| Config | 2 (key, value) | 3 |
| FAQ | 4 | 18 |

---

## 9. Change log (recent)

| Date | Change | Files / Notes |
|------|--------|----------------|
| 2026-02-13 | **Government Schemes: height, no double scheme name, Sort order row, full data** | |
| | • Table height reset to previous: max-height min(85vh, 900px); padding 0.35rem | `css/style.css` |
| | • Scheme name shown only in header; "Scheme name" excluded from body rows (no doubling) | `js/government-schemes.js` |
| | • **Sort order** row: row with first column = "Sort order" and numbers 1–17 per column sets row order; row not shown as scheme | `js/government-schemes.js` |
| | • Data capture: use fetchSheetRaw + buildRowsFromRaw; empty headers → Column_N so all 17 columns preserved | `js/government-schemes.js` |
| | • Docs: GOVERNMENT_SCHEMES_ORDER.md (Sort order section), DATA_SHEET_GUIDE.md, AUDIT_TRAIL.md | docs |
| 2026-02-13 | **Quick overview – section-wise readable UI and new content** | |
| | • Section-wise layout: each sheet row → `<section class="overview-section">` with `<h2 class="overview-section-title">` + card | `js/quick-overview.js` |
| | • Content with multiple paragraphs: split by double newline, each paragraph in `<p class="overview-para">` for readability | `js/quick-overview.js` |
| | • CSS for overview: .overview-section, .overview-section-title, .overview-section-card, .overview-para (spacing, typography) | `css/style.css` |
| | • Step-by-step guide for Google Sheets data: 5 sections (Foundation, Secured vs Unsecured, Money Flow, Repayment, Strategy) with exact copy | `QUICK_OVERVIEW_SHEET_STEPS.md` (new) |
| | • Audit trail entry and this changelog | `AUDIT_TRAIL.md` |
| 2026-02-13 | **Quick overview – all content visible + italic subtitle** | |
| | • Content split by single newline (/\n+/) so every line in sheet becomes a paragraph; all content visible on site | `js/quick-overview.js` |
| | • Optional **subtitle** column: italic sentence below section title; .overview-subtitle CSS | `js/quick-overview.js`, `css/style.css` |
| | • Case-insensitive column names (Section/Content/Subtitle/Sort_order) via get(r, key) | `js/quick-overview.js` |
| | • QUICK_OVERVIEW_SHEET_STEPS.md and DATA_SHEET_GUIDE.md updated for subtitle column | docs |
