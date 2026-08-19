# Concessions Learn more takes you off the filter, and the page has no Back

On Explore banks, Concessions has one small i, then Learn more that opens another page.
They said do not take the user somewhere else — write the facts on the concessions filter.
Each option (Women applicant, Green home, Insurance) also needs its own i.
The concessions Guide page has no Back; they asked where the back is and said this is mobile.

---
theme_id: "theme-09-concessions-learn-more-takes-you-away"
theme_title: "Concessions Learn more takes you off the filter, and the page has no Back"
pinpoint: "On Explore banks, Concessions Learn more leaves the filter instead of explaining each option there, and the concessions Guide page has no Back."
thread_count: 2
issue_file_count: 2
issue_files:
  - "wb-rec-260815-2106/issue-02-concessions-learn-more-takes-you-away.md"
  - "wb-rec-260815-2106/issue-03-concessions-page-missing-back.md"
folders: ["wb-rec-260815-2106"]
pages: ["http://localhost:8765/pages/explore-banks.html", "http://localhost:8765/pages/concessions.html#bank-rates"]
severity_as_spoken_range: ["unstated"]
confidence_range: ["high"]
tags: ["navigation", "filters", "concessions", "tooltips", "back"]
---

## Exact theme

Concessions on Explore banks is explained off the page they were using to compare banks.

There is one heading i, then **Learn more** that opens the concessions Guide. Quote: “You shouldn't take this to someone else.” They wanted the facts written on the concessions filter, including the discount range and stacking woman + green home. Quote: “But each of these options also need to have their own eye information.” “Because I need to know what insurance concessions are.”

On the destination, the header is Guide plus Explore banks — no Back. Quote: “No back.” “Where is the back?” “This is mobile.” They left through the Guide chrome, then returned to Explore banks.

## Threads (members)

### Thread: Learn more takes you off the filter; options lack their own i

- issue files: `wb-rec-260815-2106/issue-02-concessions-learn-more-takes-you-away.md`
- continuation: standalone
- pinpoint: Concessions has one heading tooltip plus Learn more that leaves the page; do not take the user somewhere else; write the facts on the filter; each option needs its own i

### Thread: Concessions page has no Back after Learn more

- issue files: `wb-rec-260815-2106/issue-03-concessions-page-missing-back.md`
- continuation: standalone
- pinpoint: after Learn more, the concessions Guide page has no Back; they asked where the back is and said this is mobile

## How the files join (required)

Shared object class: **Concessions Learn more from Explore banks Filters**. Shared defect class: **explanation is off the filter, and the off-page trip has no Back.**

Issue-02 is the off-page Learn more / missing per-option i. Issue-03 is the destination missing Back. They used the Guide page to decode first name on the papers, the 0.05–0.3 range, and stacking — related talk, not extra issues.

## Related discussion (not the theme itself)

- Opened About Borrower i before Concessions — not named as its own defect here.
- On the concessions page: multiple names can be on the papers; she has to be one of them / an individual.
- “Nice, bro.” while reading the cards — praise of the Guide content, not of taking people there from the filter.
- Range 0.05 to 0.3 or 0.2 as total discounts; stacking woman and green home.
- “Is this blue?” immediately before “No back” — likely chrome color, not a separate color defect.
- They did get back via Guide header / Explore banks; that path is what they used, not a Back button.

## Chronology in this recording

- `wb-rec-260815-2106` / issue-02 — What are the concessions; Learn more; don’t take this to someone else; each option needs its own i.
- `wb-rec-260815-2106` / issue-03 — No back; where is the back; this is mobile.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2106/issue-02-concessions-learn-more-takes-you-away.md` — pinpoint (off-page Learn more / per-option i); standalone; quotes. `supports_theme` `related_discussion`
- `wb-rec-260815-2106/issue-03-concessions-page-missing-back.md` — pinpoint (no Back); standalone; quotes. `supports_theme`

## JSON

```json
{
  "theme_id": "theme-09-concessions-learn-more-takes-you-away",
  "theme_title": "Concessions Learn more takes you off the filter, and the page has no Back",
  "pinpoint": "On Explore banks, Concessions Learn more leaves the filter instead of explaining each option there, and the concessions Guide page has no Back.",
  "thread_count": 2,
  "issue_file_count": 2,
  "issue_files": [
    "wb-rec-260815-2106/issue-02-concessions-learn-more-takes-you-away.md",
    "wb-rec-260815-2106/issue-03-concessions-page-missing-back.md"
  ],
  "folders": ["wb-rec-260815-2106"],
  "pages": ["http://localhost:8765/pages/explore-banks.html", "http://localhost:8765/pages/concessions.html#bank-rates"],
  "threads": [
    {"title": "Learn more takes you off the filter; options lack their own i", "issue_files": ["wb-rec-260815-2106/issue-02-concessions-learn-more-takes-you-away.md"], "continuation": "standalone"},
    {"title": "Concessions page has no Back after Learn more", "issue_files": ["wb-rec-260815-2106/issue-03-concessions-page-missing-back.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
