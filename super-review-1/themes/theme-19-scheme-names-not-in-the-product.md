# Scheme names live in More details, not in the product

Bank of Maharashtra’s Maha Super Housing Loan facts are useful — a customer could take them to the branch and say “this is your scheme.”
Those facts sit only in the More details drawer. The bank itself has no answer to “what is your scheme?”
The More / plus / underline cue is hard to guess, and “More about Bank of Maharashtra” sounds like more about the bank, not the loan.
The table still cannot show real scheme names or two schemes of the same bank (women vs general, PMAY).

---
theme_id: "theme-19-scheme-names-not-in-the-product"
theme_title: "Scheme names live in More details, not in the product"
pinpoint: "On Explore banks, scheme identity (name and facts, including two schemes of the same bank) sits in a More details dump with a confusing More-about-the-bank cue, instead of in the product table where a customer can see and choose."
thread_count: 3
issue_file_count: 3
issue_files:
  - "wb-rec-260815-2341/issue-01-scheme-facts-only-in-more-details.md"
  - "wb-rec-260815-2341/issue-02-more-cue-underline-plus-misleading-bank-label.md"
  - "wb-rec-260816-0031/issue-02-table-missing-scheme-names-multiple-schemes.md"
folders: ["wb-rec-260815-2341", "wb-rec-260816-0031"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["medium", "high"]
confidence_range: ["high"]
tags: ["schemes", "navigation", "copy", "table"]
---

## Exact theme

Scheme identity is buried, mislabeled, or missing from the comparison.

Quote: “No, this is definitely good information.” “There is no answer in the bank of Maharashtra.” “It should be in the product.” “Not as a blog.” If someone already thinks they are under another scheme, they may never open this dump.

The extra-info control is hard to notice. Quote: “The bank of Maharashtra didn't underline it.” “How to guess underline?” “It is a little misleading.” Accessible name: More about Bank of Maharashtra. They said a Super Housing Loan customer should know more about the loan. Putting More on the loan amount opens calculations — a different, clearer job.

Later, Yes Bank More shows Scheme name: Home Loan — a generic product. Quote: “I don't even know the name of the scheme.” “But where are the multiple schemes?” “You can't use any bank of the same bank in this table.” A woman can be eligible for more than one scheme (women vs general, PMAY) and must be told. Auto-picking the best and hiding the name was their debate, not a second defect.

## Threads (members)

### Thread: Scheme facts only in More details, not in the product

- issue files: `wb-rec-260815-2341/issue-01-scheme-facts-only-in-more-details.md`
- continuation: continues from 2332 (More details vs table)
- pinpoint: Maha Super Housing Loan scheme facts exist only in the More details drawer, not in the product

### Thread: More / plus / underline cue is confusing and the bank label is misleading

- issue files: `wb-rec-260815-2341/issue-02-more-cue-underline-plus-misleading-bank-label.md`
- continuation: standalone
- pinpoint: extra-info cue is hard to guess, and More about Bank of Maharashtra is a little misleading versus more about the loan

### Thread: Table cannot show scheme names or two schemes of the same bank

- issue files: `wb-rec-260816-0031/issue-02-table-missing-scheme-names-multiple-schemes.md`
- continuation: standalone
- pinpoint: table and Yes Bank More do not show a real scheme name or two applicable schemes of the same bank

## How the files join (required)

Shared object class: **scheme identity on Explore banks** (name, facts, extra-info cue, multiple schemes of one bank). Shared defect class: **the customer cannot see or choose the scheme in the product** — facts dumped in More details, cue/label wrong, table shows one generic Home Loan row.

How-calculated drawers are a different object. Charge-note jargon is a different object.

## Related discussion (not the theme itself)

- Super Housing Loan as a named scheme they do not necessarily want — they still need the bank to name its scheme.
- Other banks put a page per bank; they will talk about that page later; not as a blog.
- “Draw points are good” as praise of the dump’s points.
- More details is good but “not important” relative to putting the same facts in the product.
- ADD.info / plus sign / not big / not on the phone / column not big — brainstorming the cue.
- Brief EMI drawer open/close while comparing which numbers are clickable.
- ASR “solenoid” while they say they used to write more details.
- Top-up vs Regular is a purpose filter, not two schemes of the same bank.
- Canara (ASR Canada): women get a discount, not different schemes, but the bank wrote the scheme is only for women — they disagreed.
- “What should we do in Himalaya?” pick the best and hide the name versus the woman must know two schemes (PM Yojana and SCM Yojana); closing: do not add scheme-name information.
- Last-minute wrap-up: compare-and-apply product still not taken.

## Chronology across recordings

- 2341-01 — scheme facts only in More details; should be in the product; from 2332 More details.
- 2341-02 — More cue / misleading bank label.
- 0031-02 — table missing scheme names and multiple schemes.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2341/issue-01-scheme-facts-only-in-more-details.md` — pinpoint; from 2332; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2341/issue-02-more-cue-underline-plus-misleading-bank-label.md` — pinpoint; standalone; quotes. `supports_theme`
- `wb-rec-260816-0031/issue-02-table-missing-scheme-names-multiple-schemes.md` — pinpoint; standalone; quotes. `supports_theme` `related_discussion`

## JSON

```json
{
  "theme_id": "theme-19-scheme-names-not-in-the-product",
  "theme_title": "Scheme names live in More details, not in the product",
  "pinpoint": "On Explore banks, scheme identity (name and facts, including two schemes of the same bank) sits in a More details dump with a confusing More-about-the-bank cue, instead of in the product table where a customer can see and choose.",
  "thread_count": 3,
  "issue_file_count": 3,
  "issue_files": [
    "wb-rec-260815-2341/issue-01-scheme-facts-only-in-more-details.md",
    "wb-rec-260815-2341/issue-02-more-cue-underline-plus-misleading-bank-label.md",
    "wb-rec-260816-0031/issue-02-table-missing-scheme-names-multiple-schemes.md"
  ],
  "folders": ["wb-rec-260815-2341", "wb-rec-260816-0031"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "Scheme facts only in More details, not in the product", "issue_files": ["wb-rec-260815-2341/issue-01-scheme-facts-only-in-more-details.md"], "continuation": "continues_from_2332"},
    {"title": "More / plus / underline cue is confusing and the bank label is misleading", "issue_files": ["wb-rec-260815-2341/issue-02-more-cue-underline-plus-misleading-bank-label.md"], "continuation": "standalone"},
    {"title": "Table cannot show scheme names or two schemes of the same bank", "issue_files": ["wb-rec-260816-0031/issue-02-table-missing-scheme-names-multiple-schemes.md"], "continuation": "standalone"}
  ],
  "related_discussion_present": true
}
```
