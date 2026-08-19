# The page says banks, but the list is lenders

They said the page talks about banks, but the list is lenders, including NBFCs that are not banks.
Ordinary people hear “bank”; people who know the product know NBFCs exist.
They asked where to use a neutral word (“lenders”) versus bank-specific wording.
Later they said Lenders is a good word and to put lenders everywhere instead of banks — the column already says Lenders while the title and buttons still say banks.

---
theme_id: "theme-16-banks-vs-lenders-wording"
theme_title: "The page says banks, but the list is lenders"
pinpoint: "On Explore banks, chrome still says banks while the list is lenders including NBFCs; they asked where to use the neutral word lenders, then said to put lenders everywhere instead of banks."
thread_count: 1
issue_file_count: 2
issue_files:
  - "wb-rec-260815-2322/issue-02-banks-vs-lenders-wording.md"
  - "wb-rec-260815-2332/issue-03-lenders-word-not-used-everywhere-instead-of-banks.md"
folders: ["wb-rec-260815-2322", "wb-rec-260815-2332"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["low", "medium"]
confidence_range: ["high"]
tags: ["copy", "wording", "lenders", "banks"]
---

## Exact theme

Explore banks names the product “banks” while the comparison is lenders, including housing-finance companies that are not banks.

Quote: “Right now, we have banks.” “Where should we use neutral?” “Neutral means lenders, right?” They left it for now: “It's just a term.” They will watch real users with a plugin.

Next recording: Quote: “Lenders is a good word.” “You can put lenders everywhere instead of banks.” The table header already says **Lenders**; the page title, Apply once to 33 banks, and Show 23 more banks still say banks.

## Threads (members)

### Thread: Banks vs lenders / NBFCs — use lenders everywhere

- issue files: `wb-rec-260815-2322/issue-02-banks-vs-lenders-wording.md`, `wb-rec-260815-2332/issue-03-lenders-word-not-used-everywhere-instead-of-banks.md`
- continuation: 2322-02 standalone; 2332-03 continues from 2322
- pinpoint: page talks banks while the list is lenders including NBFCs; put lenders everywhere instead of banks

## How the files join (required)

Same object: **banks vs lenders wording on Explore banks**. Same defect: **chrome still says banks while the list is lenders**. 2332-03 is the same preference stated more firmly after they saw the Lenders column.

## Related discussion (not the theme itself)

- Uncle / 2 lakh need vs 1 lakh income; credit-card user who uses a lender without knowing the word.
- Plugin to record customer video, then small wording changes.
- “It's okay.” after the later instruction — they are allowing the review to continue, not dropping the preference.
- Search-for-SBI talk later still says “banks” (separate search theme).
- Sandwich / cooking talk is about tabs, not this wording.

## Chronology across recordings

- 2322-02 — banks vs lenders / NBFCs; where to use neutral; defer for now.
- 2332-03 — Lenders is a good word; use it everywhere; column already says Lenders.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2322/issue-02-banks-vs-lenders-wording.md` — pinpoint; standalone; quotes. `supports_theme` `related_discussion`
- `wb-rec-260815-2332/issue-03-lenders-word-not-used-everywhere-instead-of-banks.md` — pinpoint; from 2322; quotes. `supports_theme` `continuation_link`

## JSON

```json
{
  "theme_id": "theme-16-banks-vs-lenders-wording",
  "theme_title": "The page says banks, but the list is lenders",
  "pinpoint": "On Explore banks, chrome still says banks while the list is lenders including NBFCs; they asked where to use the neutral word lenders, then said to put lenders everywhere instead of banks.",
  "thread_count": 1,
  "issue_file_count": 2,
  "issue_files": [
    "wb-rec-260815-2322/issue-02-banks-vs-lenders-wording.md",
    "wb-rec-260815-2332/issue-03-lenders-word-not-used-everywhere-instead-of-banks.md"
  ],
  "folders": ["wb-rec-260815-2322", "wb-rec-260815-2332"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "Banks vs lenders / NBFCs — use lenders everywhere", "issue_files": ["wb-rec-260815-2322/issue-02-banks-vs-lenders-wording.md", "wb-rec-260815-2332/issue-03-lenders-word-not-used-everywhere-instead-of-banks.md"], "continuation": "2332-03 continues from 2322"}
  ],
  "related_discussion_present": true
}
```
