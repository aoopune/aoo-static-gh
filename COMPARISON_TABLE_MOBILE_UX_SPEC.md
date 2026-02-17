# Comparison Table – Mobile UX Specification (for your friend)

Use this document as the **mobile UX script/spec** for the comparison table on phones. Give it to your friend so they (or Cursor) can implement the mobile experience. It extends the main script ([COMPARISON_TABLE_IMPLEMENTATION_SCRIPT.md](COMPARISON_TABLE_IMPLEMENTATION_SCRIPT.md) and Section 10); all desktop behaviour (6 inputs, filters, PDF, Apply only once, View details) still applies. Here we define **mobile-specific layout, scrolling, and touch behaviour**.

**Reference for table behaviour on mobile:** [ComparisonTables – Google Pixel phones](https://comparisontabl.es/google-pixel-phones/). On that site, in portrait: the first column stays **fixed (sticky)** on the left; the rest **slide horizontally** when the user swipes or uses scroll buttons (&lt; and &gt;). Our design: **one fixed column (Lender)** and **horizontal slide for all other columns** in portrait mode.

---

## 1. Mobile layout (portrait, single-page)

Layout from top to bottom must match the wireframe. This is the spec only.

### 1.1 Header (top)

- **Top bar:** Left: **ApplyOnlyOnce** (button or link, e.g. to home or apply flow). Right: **Menu** (hamburger or "Menu" text) opening the main site navigation (Pro tips, Quick overview, Schemes, FAQ, etc.).
- **Main title (centred):** **Let Banks Compete for Your Education Loan. You Choose the Best Offer.**
- **Value proposition (two lines):**  
  - Compare 35+ lenders. Apply with one request to all. Zero Personal Information.  
  - Save 40+ hours of branch visits, repeated paperwork and get the lowest interest rates.
- **Call to action:** Just answer 6 questions. We'll show your best-matched lenders.
- **Guidance link:** Not sure what to select? See Pro tips & Quick Guide. (links to Pro tips and Quick overview or equivalent).

### 1.2 Six inputs (middle)

Same 6 inputs as in the main script, laid out for mobile (stacked or grid for narrow screens):

1. **Gender** – Two options (radio or toggle): Male, Female. One can be selected; optional (neither = no gender filter).
2. **Security Type** – Two options: Secured, Unsecured. Optional.
3. **Loan amount** – Single numeric input, e.g. placeholder "Rs. 999999" or "9,99,999". Used for range matching as in the main script.
4. **Level of Education** – Dropdown, e.g. "Undergraduate" (options from data or fixed list).
5. **Country** – Dropdown; options from Institutes data abroad (distinct "Country / Main Campus"); filter University list by selected country.
6. **University** – Dropdown with **search**: options filtered by selected Country; substring match (e.g. "vard" → "Harvard University", "insitute" → "Massachusetts Institute of Technology"). Use institutes-abroad-standardized data for display and search.

Filter logic (prioritisation, 100% match for Security, loan amount range, etc.) is unchanged from the main script; only the UI is mobile-friendly (touch targets, spacing, no hover-only controls).

### 1.3 Action buttons (below inputs)

- **Primary CTA:** **Apply to Selected Banks, at ₹100 Flat Fee (₹50 Refundable or Money Back)** (or the agreed copy). Tapping it runs the same flow as "Apply only once": if no bank selected, show "Please select at least one bank."; if more than 6 banks selected, show the CIBIL warning (see below); then email step.
- **Secondary:** **Download Results** – same as desktop: PDF (or fallback) with user's 6 answers, current table, and View details at the end.

### 1.4 Comparison table (bottom)

- **Structure:** Same columns as desktop: **Lender** (with logo + link to official website), **Sector**, **Select** (checkbox per row), **Eligibility criteria** (EC 1–EC 5), **Loan features** (LF 1–LF 5), **Fees & Charges** (FC 1–FC 2).
- **Mobile behaviour (portrait):**
  - **Lender column:** Always visible and **fixed (sticky)** on the left. It does not scroll away when the user scrolls the table horizontally.
  - **All other columns** (Sector, Select, EC 1–5, LF 1–5, FC 1–2): In a **horizontally scrollable area**. When the user **swipes left/right** (or drags), the table content **slides horizontally**. No column is hidden; all are reachable by horizontal scroll.
- **Scroll affordances:** At least one of:
  - **Touch/swipe:** Table wrapper allows horizontal touch scroll (e.g. overflow-x: auto, -webkit-overflow-scrolling: touch on iOS).
  - **Scroll buttons:** Optional **&lt; and &gt;** (or left/right arrows) that shift horizontal scroll by one "page" or a fixed amount (like ComparisonTables).
- **Vertical scroll:** Page scrolls vertically (header, inputs, buttons, then table). Table block can have a max height with vertical scroll inside the table body if there are many rows; the **header row** of the table stays sticky when scrolling rows.

So: **Lender column fixed; other columns slide horizontally in portrait; optionally scroll buttons; table header sticky when scrolling rows.**

---

## 2. How each feature works on mobile (detail)

All behaviour from the main script and Section 10 applies. Below is how it translates on mobile (touch, no hover).

### 2.1 Input-change highlighting (column + cell)

- When the user changes any of the 6 inputs: **highlight the column(s)** that correspond to that input with a visible **border** (or equivalent); **highlight the specific cell(s)** in that column where the value matches the user's selection (distinct style, e.g. background or border).
- **Mobile:** Same. If the highlighted column is off-screen, consider a short hint (e.g. "Scroll right to see highlighted column") or auto-scroll so the highlighted column is in view when an input changes (optional).

### 2.2 Info on subheaders (tap only on phone)

- **Desktop:** Hover on the info icon next to a subheader shows a tooltip.
- **Mobile:** No hover. **Every subheader** (Lender, Sector, EC 1–EC 5, LF 1–LF 5, FC 1–FC 2) has an **info icon or control**. When the user **taps** it: show the **same explanation text** (from data: "Columns to show on website" Info column, or View details section / Attribute_Info-style data) in a **small popup or modal** (dismissible by tapping outside or "OK" / close). **Click/tap only** for mobile; do not rely on hover on touch devices.

### 2.3 Bank official website link

- The Lender cell shows the **bank name as a clickable link** that opens the bank's official website (new tab, target="_blank", rel="noopener"). **Mobile:** Same. Ensure the link is easy to tap (sufficient touch target). If the lender name is long, truncate with ellipsis; the whole cell can remain tappable.

### 2.4 Lender logo

- The **bank logo** appears **in front of** the lender name in the Lender column. If no logo is available, show only the name (no broken image). **Mobile:** Same. Logo can be smaller on mobile to keep the fixed Lender column narrow; keep it readable.

### 2.5 Warning when more than 6 banks are selected

- When the user has selected **more than 6 banks** (e.g. 7th checkbox), show a **warning popup/modal**. **Message:** e.g. "You have selected [N] banks. Please note: during application, CIBIL will be checked." [N] = actual count. User can **dismiss** (e.g. "OK" or "I understand") and continue; do not block selection or the Apply flow permanently. The warning can show again when they tap "Apply to Selected Banks..." if the count is still > 6. **Mobile:** Same. Use a **modal** that fits the small screen (full-width, readable text, one clear dismiss button).

### 2.6 Sort, filter & search (per column)

- **Desktop:** Each subheader can have a control for that column; sort = asc/desc, filter = multi-select or distinct values, search = text substring.
- **Mobile:** Same behaviour, but **controls must be touch-friendly**: **Sort:** Tapping the column header can cycle sort (none → asc → desc) or open a small menu "Sort A–Z" / "Sort Z–A". No hover-only behaviour. **Filter / Search:** Use a **tap** to open a **bottom sheet or modal** (or inline expandable) with filter options or a search input for that column. Avoid hover-only tooltips.

### 2.7 Select column and "Apply to Selected Banks"

- **Select column:** Each row has a **checkbox** in the Select column. Optional: "Select all" in the header. Touch targets must be at least ~44px for accessibility.
- **Apply to Selected Banks:** When the user taps the primary CTA: (1) If **no** bank is selected → show "Please select at least one bank." (2) If **more than 6** banks selected → show the CIBIL warning modal; after dismiss, continue to step 3. (3) Show the **email step** (modal or next screen): user enters email, submits. Backend receives selected banks + email (+ optional 6 answers). Show success message and confirmation that you will contact them.

### 2.8 Download Results

- Tapping "Download Results" generates the same PDF (or fallback) as on desktop: user's 6 selections, current table (as visible or current sort/filter state), and View details at the end. On mobile, the file should download or open in a way the OS supports (e.g. "Save" or "Open in…").

### 2.9 View details section

- **Placement:** Below the table (or in a collapsible block). Same content as desktop: per-lender additional details from the "View details section" sheet. **Mobile:** Use an **accordion or expandable sections** (one per lender); user taps to expand/collapse. In the PDF, View details remain at the end as on desktop.

---

## 3. Reference: ComparisonTables behaviour (summary)

From [comparisontabl.es/google-pixel-phones/](https://comparisontabl.es/google-pixel-phones/):

- **Scroll:** "Scroll sideways, or click the scroll buttons; &lt; &gt;, to see all data." So: horizontal scroll (swipe/drag) plus optional left/right buttons.
- **Sort:** "Click column headers to sort; click again: change direction."
- **Filter:** "Use checkboxes (), select from dropdowns (), or enter a range."

On mobile (portrait), the table keeps the **first column (e.g. Name) fixed** and the **rest of the columns scroll horizontally**. Our implementation: **Lender column fixed**, **all other columns in a horizontally scrollable container**, with smooth touch scroll and optionally scroll buttons.

---

## 4. Summary checklist for the developer (mobile)

| Item | What to do on mobile |
|------|----------------------|
| Layout | Single column, portrait: Header (ApplyOnlyOnce, Menu, title, value prop, 6 questions link) → 6 inputs → Apply CTA + Download Results → Comparison table. |
| Table scroll | **Lender column fixed (sticky left)**. Sector, Select, EC 1–5, LF 1–5, FC 1–2 in **horizontally scrollable** area (swipe/drag). Optional &lt; / &gt; scroll buttons. |
| Sticky header | Table header row stays visible when user scrolls table rows vertically (if table has inner vertical scroll). |
| 6 inputs | Same logic as desktop; UI stacked/grid for narrow width; touch-friendly (dropdowns, buttons, searchable University). |
| Info on subheaders | **Tap** (not hover) opens popup/modal with explanation text from data. Same for all subheaders. |
| Highlighting | On input change: highlight corresponding column (border) and matching cells (background/border). Works in horizontally scrolled area. |
| Lender column | Logo + name; name = link to bank official website (open in new tab). |
| Warning >6 banks | Modal with CIBIL message; dismissible; can show again on Apply if still >6. |
| Apply / Download | Same flow as desktop: Apply → email step; Download → PDF with selections + table + View details. |
| View details | Below table; accordion/expandable per lender on mobile. |
| Sort/filter/search | Same as desktop; controls opened by **tap** (no hover); use bottom sheet/modal or inline expandable for filter/search. |

---

## 5. No code in the repo

This document is a **specification only**. Do not add or edit code in the project based on this doc until the friend (or Cursor) implements it. All logic (data source, filter rules, column mapping, PDF, Apply-only-once backend) is as in the main comparison table script and Section 10; this doc only adds **mobile layout and touch behaviour** so the table works the same way on phone as on desktop, with fixed Lender column and horizontal slide for the rest.
