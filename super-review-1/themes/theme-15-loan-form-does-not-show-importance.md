# The loan form does not show which fields matter most

Every loan question looks equally important.
They wanted stars, a red–orange–green meter, or a score, then a loud first card and quieter second and third.
Later they said top-to-bottom should mean money, then rate, then tenure, and left-to-right should mean column importance, using color and order so filling the form makes the user “intelligent” without an explanation.
The many (i) icons also need arranging.

---
theme_id: "theme-15-loan-form-does-not-show-importance"
theme_title: "The loan form does not show which fields matter most"
pinpoint: "On Explore banks, Loan inputs fields have no mark of how much each one matters (stars, meter, score, order, color), so filling the form does not teach importance, and the (i) tooltips need arranging."
thread_count: 2
issue_file_count: 3
issue_files:
  - "wb-rec-260815-2304/issue-02-loan-form-fields-lack-importance-indication.md"
  - "wb-rec-260815-2313/issue-01-loan-form-importance-not-shown-by-order-color.md"
  - "wb-rec-260815-2313/issue-03-loan-form-info-icons-need-arranging.md"
folders: ["wb-rec-260815-2304", "wb-rec-260815-2313"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["unstated", "medium"]
confidence_range: ["medium", "high"]
tags: ["form", "importance", "color", "order", "tooltips"]
---

## Exact theme

The loan form treats every input as equal, so a user does not learn what moves the loan.

Quote: “And somewhere, I need an indication that how important is this column to my loan application.” “Maybe you can give it stars.” FOIR was the weak example: it only nudges the rate a little.

Next recording: Quote: “While filling this form, I become intelligent.” “And this is the most important property, the tenure.” “And you can use just colors and sequencing and order, right?” Top-to-bottom: how much money, then rate, then tenure. Left-to-right: column importance. They said this may not be the most urgent change, but it should still be done.

They also pointed at the cluster of (i) icons. Quote: “Let's arrange all these tooltips.” They opened Credit card limits, Tenure, and Existing EMIs.

## Threads (members)

### Thread: Importance not shown by marks, order, or color

- issue files: `wb-rec-260815-2304/issue-02-loan-form-fields-lack-importance-indication.md`, `wb-rec-260815-2313/issue-01-loan-form-importance-not-shown-by-order-color.md`
- continuation: 2304-02 into 2313; 2313-01 from 2304
- pinpoint: fields lack importance marks; filling should teach money/rate/tenure via order and color without an explanation

### Thread: Info icons need arranging

- issue files: `wb-rec-260815-2313/issue-03-loan-form-info-icons-need-arranging.md`
- continuation: standalone
- pinpoint: the (i) tooltip cluster on Loan inputs needs arranging

## How the files join (required)

Shared object class: **Loan inputs on Explore banks as a teaching form**. Shared defect class: **the form does not make importance obvious** — no stars/meter/order/color, and the info icons are a messy cluster.

Info-icon arranging is a narrower thread on the same form. Hidden extras and See options naming are different defects.

## Related discussion (not the theme itself)

- Ten pre-filled columns so friction does not rise (visibility is the hidden-eligibility theme).
- Future credit pull / “we won't keep anything” — trust talk at FOIR.
- Vertical tabs sketch, then dropped; 1:1 sectioning not allowed if effects overlap.
- Joke about being “hit” if they have to explain the form.
- Tesla / foolproof / mass market sits with extra-words copy, not this layout.
- They imagined most of the public as “stupid”; details do not impress — why tooltips must stay simple.

## Chronology across recordings

- 2304-02 — need importance indication; stars / meter / score; red first card.
- 2313-01 — order and color; become intelligent while filling.
- 2313-03 — arrange these tooltips; opened three of them.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2304/issue-02-loan-form-fields-lack-importance-indication.md` — pinpoint; into 2313; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2313/issue-01-loan-form-importance-not-shown-by-order-color.md` — pinpoint; from 2304; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2313/issue-03-loan-form-info-icons-need-arranging.md` — pinpoint; standalone; quotes. `supports_theme`

## JSON

```json
{
  "theme_id": "theme-15-loan-form-does-not-show-importance",
  "theme_title": "The loan form does not show which fields matter most",
  "pinpoint": "On Explore banks, Loan inputs fields have no mark of how much each one matters (stars, meter, score, order, color), so filling the form does not teach importance, and the (i) tooltips need arranging.",
  "thread_count": 2,
  "issue_file_count": 3,
  "issue_files": [
    "wb-rec-260815-2304/issue-02-loan-form-fields-lack-importance-indication.md",
    "wb-rec-260815-2313/issue-01-loan-form-importance-not-shown-by-order-color.md",
    "wb-rec-260815-2313/issue-03-loan-form-info-icons-need-arranging.md"
  ],
  "folders": ["wb-rec-260815-2304", "wb-rec-260815-2313"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "Importance not shown by marks, order, or color", "issue_files": ["wb-rec-260815-2304/issue-02-loan-form-fields-lack-importance-indication.md", "wb-rec-260815-2313/issue-01-loan-form-importance-not-shown-by-order-color.md"], "continuation": "2304-02 into 2313-01"},
    {"title": "Info icons need arranging", "issue_files": ["wb-rec-260815-2313/issue-03-loan-form-info-icons-need-arranging.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
