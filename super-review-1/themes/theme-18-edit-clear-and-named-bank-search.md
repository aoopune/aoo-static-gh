# Results need a clear edit/clear button, and there is no search for a named bank

After Edit, the loan form came back above the table. They said they need a button because the form went up and the answer went down without a clear control.
On the filled Adjust eligibility card they asked for a Clear button — every product has one — then accepted going on without it.
They also asked how to find SBI among 25–30 banks. There is no in-page search. They said a search box is extra load and Control-F can hold it, with rate already sorted lowest to highest.

---
theme_id: "theme-18-edit-clear-and-named-bank-search"
theme_title: "Results need a clear edit/clear button, and there is no search for a named bank"
pinpoint: "On Explore banks, returning to the loan form after Edit and wiping a filled eligibility card have no clear button, and the bank list has no in-page search for a named bank such as SBI."
thread_count: 2
issue_file_count: 3
issue_files:
  - "wb-rec-260815-2322/issue-04-edit-form-needs-button.md"
  - "wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button.md"
  - "wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank.md"
folders: ["wb-rec-260815-2322", "wb-rec-260815-2332"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["medium"]
confidence_range: ["high"]
tags: ["interaction", "edit", "clear", "search"]
---

## Exact theme

Once results are on screen, they cannot clearly go back, wipe the form, or find a named bank.

Quote: “Form goes up, answer goes down.” “How did it go up? I need a button.” Edit inputs had brought the loan form back above the table. They compared it to Myntra: you change selection in a strict way; going back up should be an explicit control.

Next clip, same filled card: Quote: “It's a good idea to clear this.” “Do you have a button for this?” “Everyone has a button like this.” Then “I accept.” The card shows See options, not Clear. Filters “Clear all” is a different control.

Finding a bank: Quote: “Suppose there are 25-30 banks here.” “Then how do I search for it?” They opened Floating, showed 23 more banks, and said a search control is extra cognitive load. Quote: “Control F will hold it.” Default: when the list opens, rate should already be sorted lowest to highest.

## Threads (members)

### Thread: Edit / Clear needs a button

- issue files: `wb-rec-260815-2322/issue-04-edit-form-needs-button.md`, `wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button.md`
- continuation: 2322-04 into 2332; 2332-01 from 2322
- pinpoint: after Edit, form-up / results-down needs a clear button; the filled Adjust eligibility card has no Clear

### Thread: No in-page search for a named bank

- issue files: `wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank.md`
- continuation: standalone
- pinpoint: no in-page search for a named bank (SBI); they treated a search widget as extra load and said Control-F plus default rate-sort can hold it

## How the files join (required)

Shared object class: **operating the Explore banks results after they appear** (return to the form, wipe inputs, find a named row). Shared defect class: **missing or unclear controls for those jobs**.

Edit and Clear are one continued “I need a button” thread. Named-bank search is a different missing control on the same list, kept as a second thread. Tabs-to-table gap and Apply-once placement are layout of existing chrome, not missing buttons.

## Related discussion (not the theme itself)

- Tabs should live where edit is; then “no edit, let it scroll by itself.”
- Myntra / ASR “Mintra”: cards are not identical; strict selection.
- After the button line they praised the tab model (sandwich / cut and it fitted).
- Selected all banks then deselected.
- After “I accept,” they praised Overview / Charges tabs, Chrome-like tab animation, and sort arrows.
- Filters “Clear all” was not clicked.
- “Navani is sorting / going to jail” — side talk.
- “Let's see the floating slip” → they click Floating.
- “I don't want to show the survey” joined with not adding a search widget.
- More details after 06:23 is a new stretch, mostly praise.

## Chronology across recordings

- 2322-04 — Edit: form up, answer down; I need a button; continues into 2332.
- 2332-01 — Clear this form; do you have a button; everyone has one; I accept.
- 2332-06 — How do I search for SBI; Control-F; default rate sort.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2322/issue-04-edit-form-needs-button.md` — pinpoint; into 2332; quotes. `supports_theme` `continuation_link` `related_discussion`
- `wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button.md` — pinpoint; from 2322; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank.md` — pinpoint; standalone; quotes. `supports_theme` `related_discussion`

## JSON

```json
{
  "theme_id": "theme-18-edit-clear-and-named-bank-search",
  "theme_title": "Results need a clear edit/clear button, and there is no search for a named bank",
  "pinpoint": "On Explore banks, returning to the loan form after Edit and wiping a filled eligibility card have no clear button, and the bank list has no in-page search for a named bank such as SBI.",
  "thread_count": 2,
  "issue_file_count": 3,
  "issue_files": [
    "wb-rec-260815-2322/issue-04-edit-form-needs-button.md",
    "wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button.md",
    "wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank.md"
  ],
  "folders": ["wb-rec-260815-2322", "wb-rec-260815-2332"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "Edit / Clear needs a button", "issue_files": ["wb-rec-260815-2322/issue-04-edit-form-needs-button.md", "wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button.md"], "continuation": "2322-04 into 2332-01"},
    {"title": "No in-page search for a named bank", "issue_files": ["wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
