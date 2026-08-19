# Results tabs sit too far from the table, and Apply once is not on the checkboxes

They liked the results header, then said the gap between the tabs and the table is too large.
The header color also does not read as a header.
Apply once sits on the right of the tab bar, not on top of the row checkboxes.
After calling the table beautiful, they said Apply should come here on top of these checkboxes.

---
theme_id: "theme-17-results-tabs-gap-and-apply-once"
theme_title: "Results tabs sit too far from the table, and Apply once is not on the checkboxes"
pinpoint: "On Explore banks results, the gap between the Overview/Charges tabs and the Lenders table is too large, and Apply once sits on the tab bar instead of on top of the row checkboxes."
thread_count: 2
issue_file_count: 2
issue_files:
  - "wb-rec-260815-2322/issue-03-results-tabs-table-gap-too-large.md"
  - "wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes.md"
folders: ["wb-rec-260815-2322", "wb-rec-260815-2332"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["medium"]
confidence_range: ["high"]
tags: ["layout", "spacing", "apply", "checkboxes"]
---

## Exact theme

The results chrome is detached from the table it belongs to.

Quote: “There is a little gap between the buttons and the table.” “But it's too much.” “The color is also different. We don't know the header.” On screen: Overview / Charges / Other charges (and Apply once) sit above the Lenders table with a large empty band.

Later: Quote: “Beautiful.” “Apply should come here on top of these checkboxes.” The checkboxes are the first column of each bank row; Apply once sits on the right of the tab bar. They selected all rows so Apply once lit up — the same control they wanted moved.

## Threads (members)

### Thread: Gap between result tabs and the table is too large

- issue files: `wb-rec-260815-2322/issue-03-results-tabs-table-gap-too-large.md`
- continuation: standalone
- pinpoint: too much space between the result tabs/buttons and the table; header color does not read as a header

### Thread: Apply once is not on top of the row checkboxes

- issue files: `wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes.md`
- continuation: standalone
- pinpoint: Apply once sits on the tab bar’s right instead of on top of the row checkboxes

## How the files join (required)

Shared object class: **Explore banks results chrome** (tabs, Apply once, table). Shared defect class: **controls sit away from the table they act on** (empty gap; Apply once not on the checkboxes).

Two threads because gap/header-color and Apply-once placement are different defects they named separately. Edit/clear and named-bank search are different missing controls.

## Related discussion (not the theme itself)

- Lender column: “I don't know if it's high or low” (sorted Rate 8.75% upward).
- Chrome-circle / tab switcher: whether tabs should cover only the four data columns; they later said that tab-scope design is not a problem (“Done. It's perfect.”).
- “Beautiful.” is about the table immediately before the Apply placement line.
- Selecting all / deselecting is operating the same checkbox + Apply once system.
- Brief apply.html visit is a click-through, not a new complaint.

## Chronology across recordings

- 2322-03 — gap between tabs and table too much; header color.
- 2332-04 — Apply should sit on top of the row checkboxes.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2322/issue-03-results-tabs-table-gap-too-large.md` — pinpoint; standalone; quotes. `supports_theme`
- `wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes.md` — pinpoint; standalone; quotes. `supports_theme`

## JSON

```json
{
  "theme_id": "theme-17-results-tabs-gap-and-apply-once",
  "theme_title": "Results tabs sit too far from the table, and Apply once is not on the checkboxes",
  "pinpoint": "On Explore banks results, the gap between the Overview/Charges tabs and the Lenders table is too large, and Apply once sits on the tab bar instead of on top of the row checkboxes.",
  "thread_count": 2,
  "issue_file_count": 2,
  "issue_files": [
    "wb-rec-260815-2322/issue-03-results-tabs-table-gap-too-large.md",
    "wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes.md"
  ],
  "folders": ["wb-rec-260815-2322", "wb-rec-260815-2332"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "Gap between result tabs and the table is too large", "issue_files": ["wb-rec-260815-2322/issue-03-results-tabs-table-gap-too-large.md"], "continuation": "standalone"},
    {"title": "Apply once is not on top of the row checkboxes", "issue_files": ["wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
