# Education Loan Roadmap – How to Add and Edit the Sheet

The **Education loan roadmap** (timeline on the Quick overview page) is loaded from your Google Sheet. You can add or change steps anytime by editing the **Roadmap** sheet – no code changes needed.

---

## 1. Add the sheet in Google Sheets

1. Open your spreadsheet: [ApplyOnlyOnce - Loan Data](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit).
2. At the bottom, click **+** (or **Insert → Sheet**) to add a new sheet.
3. Rename the new sheet tab to **`Roadmap`** (exact name, no space).  
   - If you prefer a different name, use **`Quick_Overview_Roadmap`** – the site will try that as a fallback.

---

## 2. Sheet structure

**Row 1 – headers** (exact column names):

| heading   | time                      | description | sort_order |
|----------|---------------------------|-------------|------------|
| (step 1) | (e.g. 18–15 months before) | (text)      | 1          |

- **heading** – Title of the step (e.g. "Explore & Research").
- **time** – Time range shown in brackets (e.g. "18–15 months before intake"). Optional.
- **description** – Short paragraph under the heading. Optional but recommended.
- **sort_order** – Number for order (1 = first, 2 = second, …). Optional; if missing, row order is used.

**From row 2** – One row per roadmap step. Order on the page follows **sort_order** (or row order if sort_order is empty).

---

## 3. Paste this data to get started

Copy the table below (including the header row) and paste into the **Roadmap** sheet so that:
- **Column A** = heading  
- **Column B** = time  
- **Column C** = description  
- **Column D** = sort_order  

| heading | time | description | sort_order |
|---------|------|-------------|------------|
| Explore & Research | 18–15 months before intake | Research countries, universities, eligibility criteria, tuition fees, and living costs to shortlist suitable programs. | 1 |
| Exams & Profile Building | 15–12 months before intake | Register for and complete required standardized tests; prepare academic documents, Statement of Purpose (SOP), and Letters of Recommendation (LORs). | 2 |
| University Applications | 12–9 months before intake | Submit applications before deadlines, pay application fees, and upload required academic and test documents. | 3 |
| Receive Offers | 8–6 months before intake | Review admission decisions, compare offers, and confirm enrollment at the selected university. | 4 |
| Compare & Apply for Loan | 6–4 months before intake | Assess total funding requirements, compare loan options, and obtain a formal loan sanction letter. | 5 |
| Visa & Disbursement | 3–1 months before intake | Apply for a student visa, submit proof of funds, and coordinate loan disbursement as per university requirements. | 6 |

---

## 4. How to change the roadmap in the future

- **Edit text** – Change the cell (heading, time, or description). Save the sheet; the website will show updates after cache expiry (see **Config** sheet, `cache_minutes`).
- **Reorder steps** – Change the **sort_order** numbers (1, 2, 3, …). Smaller number = higher on the timeline.
- **Add a step** – Add a new row with heading, time, description, and sort_order. Use a new number (e.g. 7) or renumber existing rows.
- **Remove a step** – Delete the row or clear the **heading** and **description** cells (rows with both empty are hidden).
- **Rename the sheet** – Keep the tab name **Roadmap** (or **Quick_Overview_Roadmap**). Do not rename the columns; the site looks for **heading**, **time**, **description**, **sort_order**.

No code or redeploy is needed for data-only changes. After you save the sheet, wait for the cache to refresh (or clear site cache) to see changes on the Quick overview page.
