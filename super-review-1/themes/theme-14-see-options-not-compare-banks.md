# “See options” and “Explore banks” are the wrong names, and the button sits in the wrong place

The submit button is See options. They did not know what “options” meant.
They said the real action is Compare banks. Explore banks sounds like dumping everything in.
See options sits to the right of Adjust eligibility, not below it in the center.
After scrolling to results they said again: change a button to compare banks.

---
theme_id: "theme-14-see-options-not-compare-banks"
theme_title: "“See options” and “Explore banks” are the wrong names, and the button sits in the wrong place"
pinpoint: "On Explore banks, the primary action is labeled See options (unclear) instead of Compare banks, the page name Explore banks does not mean compare, and See options sits to the right of Adjust eligibility instead of below it in the center."
thread_count: 2
issue_file_count: 4
issue_files:
  - "wb-rec-260815-2240/issue-05-see-options-label-unclear.md"
  - "wb-rec-260815-2240/issue-06-see-options-not-below-centered.md"
  - "wb-rec-260815-2304/issue-03-see-options-explore-banks-naming.md"
  - "wb-rec-260815-2322/issue-01-compare-banks-button.md"
folders: ["wb-rec-260815-2240", "wb-rec-260815-2304", "wb-rec-260815-2322"]
pages: ["http://localhost:8765/pages/explore-banks.html"]
severity_as_spoken_range: ["unstated"]
confidence_range: ["high"]
tags: ["copy", "naming", "cta", "layout"]
---

## Exact theme

The main action on Explore banks is misnamed and misplaced.

Quote: “What is See options?” “I don't know what options.” “See options is definitely not the answer.” See banks would mean something else; Submit is also the wrong idea even though the control is a form submit.

Quote: “The name of the button is compare banks.” “What is explore banks?” “Explore means just put everything in.” “That means compare.” “Explore doesn't work.”

Placement: Quote: “Just move it.” “See options should be below this Adjust eligibility.” “And in center.” After opening extra fields they still have to go to a separate button on the right to see results.

After scrolling to the table: “We have come down from here. We have to change a button to compare banks.” Visible actions then were See options on the form and Apply once on the table. This continues the compare-all-and-apply talk.

## Threads (members)

### Thread: See options label is unclear; should be Compare banks

- issue files: `wb-rec-260815-2240/issue-05-see-options-label-unclear.md`, `wb-rec-260815-2304/issue-03-see-options-explore-banks-naming.md`, `wb-rec-260815-2322/issue-01-compare-banks-button.md`
- continuation: 2240-05 standalone; 2304-03 standalone; 2322-01 continues from 2313 (compare-and-apply wording)
- pinpoint: See options / Explore banks do not name the compare action; they want Compare banks

### Thread: See options is not below Adjust eligibility and not centered

- issue files: `wb-rec-260815-2240/issue-06-see-options-not-below-centered.md`
- continuation: continues into 2249 (unfinished layout + columns talk; columns belong to the hidden-eligibility theme)
- pinpoint: See options should be a centered button below Adjust eligibility, not on the right of that header

## How the files join (required)

Shared object class: **the primary Explore banks action and page name**. Shared defect class: **it does not say “compare,” and it does not sit where the extra fields finish.**

Label vs placement are two threads on the same button. 2322-01 is the same rename after they reached results. 2240-06’s continuation into 2249 is about columns (assigned to hidden eligibility), not a second See options sentence.

## Related discussion (not the theme itself)

- Joke derivation “your items, your options, C-Options.”
- “Check” as a stepping-stone before Compare banks.
- Confusion with Adjust eligibility on the same row (dropdown vs See options).
- Previous recording: “Compare all and apply in one shot” / banks competing; cognitive-load reading.
- Typed property 60,00,000; clicked Regular after Top-up.

## Chronology across recordings

- 2240-05 — What is See options; not a good answer.
- 2240-06 — Move it below Adjust eligibility, centered; continues into 2249.
- 2304-03 — Button should be Compare banks; Explore doesn’t work.
- 2322-01 — Change a button to compare banks after scrolling to results.

## Evidence by issue file (every file in this theme — no omissions)

- `wb-rec-260815-2240/issue-05-see-options-label-unclear.md` — pinpoint; standalone; quotes. `supports_theme`
- `wb-rec-260815-2240/issue-06-see-options-not-below-centered.md` — pinpoint; into 2249; quotes. `supports_theme` `continuation_link`
- `wb-rec-260815-2304/issue-03-see-options-explore-banks-naming.md` — pinpoint; standalone; quotes. `supports_theme`
- `wb-rec-260815-2322/issue-01-compare-banks-button.md` — pinpoint; from 2313; quotes. `supports_theme` `continuation_link`

## JSON

```json
{
  "theme_id": "theme-14-see-options-not-compare-banks",
  "theme_title": "“See options” and “Explore banks” are the wrong names, and the button sits in the wrong place",
  "pinpoint": "On Explore banks, the primary action is labeled See options (unclear) instead of Compare banks, the page name Explore banks does not mean compare, and See options sits to the right of Adjust eligibility instead of below it in the center.",
  "thread_count": 2,
  "issue_file_count": 4,
  "issue_files": [
    "wb-rec-260815-2240/issue-05-see-options-label-unclear.md",
    "wb-rec-260815-2240/issue-06-see-options-not-below-centered.md",
    "wb-rec-260815-2304/issue-03-see-options-explore-banks-naming.md",
    "wb-rec-260815-2322/issue-01-compare-banks-button.md"
  ],
  "folders": ["wb-rec-260815-2240", "wb-rec-260815-2304", "wb-rec-260815-2322"],
  "pages": ["http://localhost:8765/pages/explore-banks.html"],
  "threads": [
    {"title": "See options label is unclear; should be Compare banks", "issue_files": ["wb-rec-260815-2240/issue-05-see-options-label-unclear.md", "wb-rec-260815-2304/issue-03-see-options-explore-banks-naming.md", "wb-rec-260815-2322/issue-01-compare-banks-button.md"], "continuation": "2322-01 continues from 2313"},
    {"title": "See options is not below Adjust eligibility and not centered", "issue_files": ["wb-rec-260815-2240/issue-06-see-options-not-below-centered.md"], "continuation": "continues_into_2249"}
  ],
  "related_discussion_present": true
}
```
