# Explore banks filters are exclusive buttons and do not explain the choice

Bank type is All / Public / Private as one-at-a-time buttons, not checkboxes both on.
They said Public and Private should both be ticked by default, and All is not a separate filter.
The same exclusive pattern is wrong for Floating vs Fixed and Term loan vs Overdraft.
The labels also do not tell you why to pick Public vs Private or Floating vs Fixed, and Overdraft is unexplained except a higher-rate note.

---
theme_id: "theme-08-filters-exclusive-and-unexplained"
theme_title: "Explore banks filters are exclusive buttons and do not explain the choice"
pinpoint: "On Explore banks Filters, Bank type / Rate / Facility are exclusive one-at-a-time buttons instead of checkboxes both on, and the labels do not explain the trade-offs or what Overdraft is, so a customer cannot tell what to select."
thread_count: 3
issue_file_count: 3
issue_files:
  - "wb-rec-260815-2106/issue-01-all-public-private-exclusive-not-checkboxes.md"
  - "wb-rec-260815-2106/issue-04-filters-missing-public-private-floating-fixed-tradeoffs.md"
  - "wb-rec-260815-2106/issue-05-overdraft-facility-unexplained.md"
folders: ["wb-rec-260815-2106"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["unstated"]
confidence_range: ["high"]
tags: ["filters", "checkboxes", "exclusive-control", "trade-offs", "overdraft", "copy"]
---

## Exact theme

On Explore banks, Filters, the choice controls do not work as choices.

Bank type is three exclusive pills: All, Public, Private. Only one can be on. They said Public and Private should both be ticked by default, and All is not a separate filter. Quote: “Both are ticked by default. All is not a separate filter.” “All the checkboxes.” “Why do we need a separate button?” They said the same exclusive-button pattern is wrong for Floating vs Fixed and Term loan vs Overdraft. They compared it to Apple and Amazon checkboxes where more than one can stay on.

Even with the right control, the labels do not teach the decision. Quote: “Tell me what should I select?” “You tell me the trade-offs here only.” “Why I should select each of them? For floating and fixed.” They supplied the trade-offs themselves (public process harder, service, rate about 0.5; private service/rates/processing fee). Fixed only says it is about 1–2% higher.

Overdraft only says it is about 0.15–1% higher. They asked what that facility is, then explained a savings-linked overdraft themselves (loan 20 lakh, 5 lakh in savings, interest on 15 lakh). Quote: “You should explain it like this. We should learn this. It is very important.”

## Threads (members)

### Thread: Exclusive pills instead of checkboxes both on

- issue files: `wb-rec-260815-2106/issue-01-all-public-private-exclusive-not-checkboxes.md`
- continuation: standalone
- pinpoint: Bank type (and Rate / Facility) is an exclusive All/Public/Private-style control; Public and Private should both be ticked by default; All is not a separate filter

### Thread: Missing Public vs Private and Floating vs Fixed trade-offs

- issue files: `wb-rec-260815-2106/issue-04-filters-missing-public-private-floating-fixed-tradeoffs.md`
- continuation: standalone
- pinpoint: Bank type and Rate do not explain the trade-offs, so they asked what they should select; tell those trade-offs here only, and keep both selected by default

### Thread: Overdraft unexplained except a higher-rate note

- issue files: `wb-rec-260815-2106/issue-05-overdraft-facility-unexplained.md`
- continuation: standalone
- pinpoint: Overdraft is not explained except “About 0.15–1% higher”; they asked what that facility is and said the page should explain savings-linked overdraft

## How the files join (required)

Shared object class: **Explore banks Filters choice controls** (Bank type, Rate, Facility / Overdraft). Shared defect class: **the customer cannot make a real choice** — the control is exclusive instead of both-on checkboxes, and the copy does not explain why to pick each option or what Overdraft is.

Kept as three threads because they named three defects: exclusive vs checkbox, missing trade-off copy, missing Overdraft explanation. Default-both-on appears in both the control thread and the trade-off thread. Concessions Learn more is a different object (leaving the page).

## Related discussion (not the theme itself)

- Apple/Amazon analogy for multi-select checkboxes (not an Apple/Amazon bug on this site).
- “I feel the same when I press and hold one button.”
- Filter gaps between heading and subheading praised — not an issue.
- Empty lender table when Private is exclusive was on screen; they did not call empty results a defect.
- Public: application process a little difficult; end-to-end service not good; rate is 0.5.
- Private: service not that good; rates not as good as public; processing fee also not that good.
- Worked Overdraft example: 20 lakh loan, 5 lakh in savings, interest on 15 lakh; extra cost more than 0.25.
- Empty Private+Fixed+Overdraft results later were not discussed as this issue.

## Chronology in this recording

- `wb-rec-260815-2106` / issue-01 — exclusive All/Public/Private; same for Floating/Fixed and Term/Overdraft.
- `wb-rec-260815-2106` / issue-04 — tell me what to select; trade-offs here only; both on by default.
- `wb-rec-260815-2106` / issue-05 — what is Overdraft; savings-linked explanation belongs on the page.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2106/issue-01-all-public-private-exclusive-not-checkboxes.md` — pinpoint (exclusive pills); standalone; quotes on both ticked / All not a filter. `supports_theme` `related_discussion`
- `wb-rec-260815-2106/issue-04-filters-missing-public-private-floating-fixed-tradeoffs.md` — pinpoint (missing trade-off copy); standalone; quotes on what should I select / trade-offs here. `supports_theme`
- `wb-rec-260815-2106/issue-05-overdraft-facility-unexplained.md` — pinpoint (Overdraft unexplained); standalone; quotes on explain it like this. `supports_theme`

## JSON

```json
{
  "theme_id": "theme-08-filters-exclusive-and-unexplained",
  "theme_title": "Explore banks filters are exclusive buttons and do not explain the choice",
  "pinpoint": "On Explore banks Filters, Bank type / Rate / Facility are exclusive one-at-a-time buttons instead of checkboxes both on, and the labels do not explain the trade-offs or what Overdraft is, so a customer cannot tell what to select.",
  "thread_count": 3,
  "issue_file_count": 3,
  "issue_files": [
    "wb-rec-260815-2106/issue-01-all-public-private-exclusive-not-checkboxes.md",
    "wb-rec-260815-2106/issue-04-filters-missing-public-private-floating-fixed-tradeoffs.md",
    "wb-rec-260815-2106/issue-05-overdraft-facility-unexplained.md"
  ],
  "folders": ["wb-rec-260815-2106"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "Exclusive pills instead of checkboxes both on", "issue_files": ["wb-rec-260815-2106/issue-01-all-public-private-exclusive-not-checkboxes.md"], "continuation": "standalone"},
    {"title": "Missing Public vs Private and Floating vs Fixed trade-offs", "issue_files": ["wb-rec-260815-2106/issue-04-filters-missing-public-private-floating-fixed-tradeoffs.md"], "continuation": "standalone"},
    {"title": "Overdraft unexplained except a higher-rate note", "issue_files": ["wb-rec-260815-2106/issue-05-overdraft-facility-unexplained.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
