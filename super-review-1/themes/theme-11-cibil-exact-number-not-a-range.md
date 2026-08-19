# CIBIL is one exact number, so the table can only show one rate

The CIBIL box is a type-in field. It forces one exact score.
They said people often know only a band. They want a dropdown of windows, or a min–max range (minimum required, maximum optional).
They rejected calling the result “approximate” with a star footnote.
Because the bank actually quotes a CIBIL band, the results table’s single Rate cannot be filtered or explained; they asked which rate is lowest, and later wanted two rates.

---
theme_id: "theme-11-cibil-exact-number-not-a-range"
theme_title: "CIBIL is one exact number, so the table can only show one rate"
pinpoint: "On Explore banks, CIBIL is a required exact number instead of a range or dropdown of score windows, and the bank table then shows only one Rate for a CIBIL band, so they cannot tell which rate applies."
thread_count: 2
issue_file_count: 4
issue_files:
  - "wb-rec-260815-2125/issue-01-cibil-score-exact-text-instead-of-range-dropdown.md"
  - "wb-rec-260815-2134/issue-01-cibil-single-exact-vs-min-max-range.md"
  - "wb-rec-260815-2134/issue-02-bank-options-one-rate-for-cibil-band.md"
  - "wb-rec-260815-2231/issue-01-cibil-number-vs-dropdown-same-range.md"
folders: ["wb-rec-260815-2125", "wb-rec-260815-2134", "wb-rec-260815-2231"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["high", "unstated"]
confidence_range: ["high"]
tags: ["cibil", "dropdown", "range", "rates", "loan-inputs"]
---

## Exact theme

CIBIL on Explore banks is treated as one exact number. That is the wrong control, and it forces the bank list to show one rate.

Quote: “You are forcing me to tell the exact score.” “No. Here, we need a drop down.” Examples: 750 to 780, 730 to 750. They do not want a vague “approximate” with a star at the bottom.

Next recording: people often remember a band such as 680–700. Quote: “You don't need to know your exact Sibyl score.” Minimum should be required; maximum optional. If someone types a hoped-for higher score, “Then the table will be empty.”

Because the bank tells a band such as 775 to 780, one Rate cell cannot be filtered or explained. Quote: “But we have to show him only one rate.” “Which is the lowest rate?” “On which basis?” Later: “I want 2 rates.” “I want 2 loans.”

They later returned to the same box (showing 780 next to Age 35) and asked whether to keep the free number or use the dropdown pattern so it does not sit in the same range.

## Threads (members)

### Thread: CIBIL input is an exact number instead of a range dropdown

- issue files: `wb-rec-260815-2125/issue-01-cibil-score-exact-text-instead-of-range-dropdown.md`, `wb-rec-260815-2134/issue-01-cibil-single-exact-vs-min-max-range.md`, `wb-rec-260815-2231/issue-01-cibil-number-vs-dropdown-same-range.md`
- continuation: 2125-01 continues into 2134; 2134-01 continues from 2125; 2231-01 continues from 2222 as a return to this CIBIL control (not as the intelligence feature)
- pinpoint: the CIBIL field forces an exact score; they want dropdown windows and/or min–max (min required, max optional)

### Thread: Bank table shows only one rate for a CIBIL band

- issue files: `wb-rec-260815-2134/issue-02-bank-options-one-rate-for-cibil-band.md`
- continuation: standalone (same minute as the input thread; different object: Rate column)
- pinpoint: each bank row has one Rate while the bank quotes a CIBIL band, so they cannot filter or say which rate is lowest

## How the files join (required)

Shared object class: **CIBIL as a single exact number on Explore banks** (the input, then the Rate column that can only publish one number for a band). Shared defect class: **a band cannot be entered or shown**, so the user is forced into one score and one rate.

The Rate-column thread is a different object from the input box, kept separate, but they talked it as the reason a range input is needed. 2231-01 is the same input control, later in the day. Missing hacks/intelligence is a different theme.

## Related discussion (not the theme itself)

- Coarse words like Average / high / 700+ excellent — they want numeric windows, not those words.
- Bucket size: 10-point vs 5-point; finer near 900 makes the list long.
- Negotiation: “I have 776 also. Show me the offer of 780.”
- Bank-specific breakouts are not parallel.
- Amazon typeahead: type 766 and dropdowns open; do not mix type-and-select in a confusing way.
- Font weight on typed vs to-type (Amazon-style) — related to typeahead, not a second page object.
- “You have to pay so much for a PM” — aside.
- Other charges / Prepayment / Balance transfer: they switched Self funds → Balance transfer as a check, then “No, no. I want 2 rates” — not a separate BT-charges-wrong issue.
- Sit-down customer-feedback / gift-card / basement-vs-polish talk around 2231-01 is not this control.

## Chronology across recordings

- `wb-rec-260815-2125` / issue-01 — forcing exact score; need dropdown of windows; reject approximate+star; continues into 2134.
- `wb-rec-260815-2134` / issue-01 — min–max; min compulsory; max optional; table empty if hoped-for score.
- `wb-rec-260815-2134` / issue-02 — one Rate for 775–780 band; which is lowest; want two rates.
- `wb-rec-260815-2231` / issue-01 — back to CIBIL; number vs dropdown so it does not go in the same range.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2125/issue-01-cibil-score-exact-text-instead-of-range-dropdown.md` — pinpoint; continues into 2134; quotes. `supports_theme` `continuation_link` `related_discussion`
- `wb-rec-260815-2134/issue-01-cibil-single-exact-vs-min-max-range.md` — pinpoint; from 2125; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2134/issue-02-bank-options-one-rate-for-cibil-band.md` — pinpoint (one Rate); standalone; quotes. `supports_theme`
- `wb-rec-260815-2231/issue-01-cibil-number-vs-dropdown-same-range.md` — pinpoint (number vs dropdown / same range); continues from 2222 session; quotes. `supports_theme` `continuation_link`

## JSON

```json
{
  "theme_id": "theme-11-cibil-exact-number-not-a-range",
  "theme_title": "CIBIL is one exact number, so the table can only show one rate",
  "pinpoint": "On Explore banks, CIBIL is a required exact number instead of a range or dropdown of score windows, and the bank table then shows only one Rate for a CIBIL band, so they cannot tell which rate applies.",
  "thread_count": 2,
  "issue_file_count": 4,
  "issue_files": [
    "wb-rec-260815-2125/issue-01-cibil-score-exact-text-instead-of-range-dropdown.md",
    "wb-rec-260815-2134/issue-01-cibil-single-exact-vs-min-max-range.md",
    "wb-rec-260815-2134/issue-02-bank-options-one-rate-for-cibil-band.md",
    "wb-rec-260815-2231/issue-01-cibil-number-vs-dropdown-same-range.md"
  ],
  "folders": ["wb-rec-260815-2125", "wb-rec-260815-2134", "wb-rec-260815-2231"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "CIBIL input is an exact number instead of a range dropdown", "issue_files": ["wb-rec-260815-2125/issue-01-cibil-score-exact-text-instead-of-range-dropdown.md", "wb-rec-260815-2134/issue-01-cibil-single-exact-vs-min-max-range.md", "wb-rec-260815-2231/issue-01-cibil-number-vs-dropdown-same-range.md"], "continuation": "2125-01 into 2134-01; 2231-01 later return"},
    {"title": "Bank table shows only one rate for a CIBIL band", "issue_files": ["wb-rec-260815-2134/issue-02-bank-options-one-rate-for-cibil-band.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
