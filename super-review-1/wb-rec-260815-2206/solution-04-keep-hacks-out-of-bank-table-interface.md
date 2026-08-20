# Do not stuff hacks into this bank-table interface

If they only sit in this Explore banks layout, the bank rows below get “approximated” — muddied — when you try to put the hacks here.
This is for the Bank options table under the loan form (lenders, rate, loan amount, tenure, EMI).
They wanted the intelligence (solution-01) to live somewhere that does not wreck that comparison list.
Unfinished here; next recording starts “we need a different tool… we can't just put it here.”

---
solution_id: "wb-rec-260815-2206/solution-04-keep-hacks-out-of-bank-table-interface"
solution_title: "Do not stuff hacks into this bank-table interface"
folder: "wb-rec-260815-2206"
sequence_index: 14
recording_id: "125a22f8-b64d-419e-9196-9126d5f613f3"
recording_started_at: "2026-08-15T16:36:16.832Z"
recording_ended_at: "2026-08-15T16:43:07.910Z"
duration_ms: 411078
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options table (Lenders, Rate, Loan amount, Tenure, EMI) below Loan inputs — visible after scroll in screenshots/0051.jpg"
for_topic: "Where loan hacks should not live: stuffing them into this Explore banks comparison table muddies the bank rows"
pinpoint: "At the end of Explore banks, they scrolled the bank table into view and said the problem of this interface is that the things below get approximated, so sitting only here is the wrong place for the hacks they just described; that placement idea continues into the next recording."
kind: ["potential_suggestion", "idea"]
decidedness: "brainstorm"
basis: "Putting the intelligence into this same comparison UI approximates / muddies the bank list below; they cut off mid-sentence on Then."
analog_source: "none"
linked_issue_files: ["issue-01-explore-banks-missing-hacks-intelligence.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: false
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2213"
related_solution_files: ["solution-01-company-gives-loan-hacks-intelligence.md"]
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:06:33,090 --> 00:06:50,410"]
event_t_ms: [402346, 402749]
screenshot_files: ["screenshots/0050.jpg","screenshots/0051.jpg"]
tags: ["placement","bank-table","intelligence","interface","explore-banks"]
---

## Exact solution (or idea that can also be a solution)

After arguing the tool should give hacks, they named a placement constraint. Quoted `audio.srt`: “Or else, We have to sit in this interface. But in this interface, Do you know what the problem is? The things below, They get approximated.” Speech cuts on repeated “Then.”

The idea: do not only live in this Explore banks interface for that intelligence, because the bank comparison rows below get approximated (muddied). They did not lock an alternative layout in this folder.

## What this is for

Bank options table under Loan inputs on Explore banks. Issue-01 is missing hacks; this file is where not to dump them. Next folder proposes a different tool vs putting it here.

## Why they said it that way

The comparison list (rates, loan amounts, EMIs) would get messy if the hacks sat in the same interface. They scrolled to look at those rows while saying it.

## How the files join (required)

- time: 393090–410410 ms (00:06:33–00:06:50)
  - said: sit in this interface; problem is things below get approximated (`audio.srt`)
  - did: scroll y=429.5 at t=402346 (`events.json`)
  - seeing: `0050.jpg` still form+table headers; `0051.jpg` Canara, City Union, PNB, BOB, BOI rows (loan amounts ₹5,400 from the ₹6,000 property test)
  - where: explore-banks.html Bank options
  - therefore: stuffing hacks here muddies the table; unfinished, continues next

## Pinpoint

At session end on Explore banks they scrolled the lender table into view and said this interface approximates the things below, so the hacks should not only live here; next recording names a different tool.

## Related discussion (not the solution itself)

“When this is approximated, Then we will be able to save money” is cut/garbled; not treated as a second direction. What the hacks are is solution-01.

## Chronology in this recording

- 00:06:33–00:06:50 — interface problem; scroll; table in 0051; Then-Then cut.

## Cross-recording continuation

Continues into `wb-rec-260815-2213` (~9s gap). Next first lines: “Bro, we need to make a different tool. … The one we just described, we can't just put it here. We need to put it in a different place.” Then they also consider putting suggestions here anyway and Google Flights — that debate belongs in the next folder. Previous `wb-rec-260815-2204` did not raise table placement.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — related line on approximated rows and next “different tool.” `related_discussion`
- `manifest.json` — ended_at just before 2213. `timeline_alignment`
- `audio.text` / `audio.txt` / `audio_sentences.txt` — interface / approximated close. `supports_idea`
- `audio.srt` — cues 153–165. `supports_idea` `timeline_alignment`
- `audio.vtt` / `audio.lrc` / `audio.tsv` — same. `timeline_alignment`
- `audio.json` — segments 153–165; trailing Then p low. `supports_idea`
- `audio.webm` — not played. `checked_no_extra_signal`
- `events.json` — only scroll at 402346 in this stretch. `supports_idea` `timeline_alignment`
- `pages.json` — Bank options region and table headings. `supports_solution`
- `tabs.json` — still explore-banks.html. `timeline_alignment`
- `console.json` — empty. `checked_no_extra_signal`
- `replay.spec.ts` — trailing idle after clicks; no scroll step encoded. `timeline_alignment`
- `index.html` / `viewer.js` / `viewer.css` — player. `checked_no_extra_signal`
- `screenshots/index.json` — 0051 t=408195 reason periodic, mask_rects shifted after scroll. `timeline_alignment`
- `screenshots/0000.jpg`–`screenshots/0049.jpg` — table only as headers; “things below” not yet in view. `timeline_alignment`
- `screenshots/0050.jpg` — last pre-scroll form view. `timeline_alignment`
- `screenshots/0051.jpg` — bank rows after scroll. `supports_idea`

### Helper issue files

- `issue-01-explore-banks-missing-hacks-intelligence.md` — `timestamp_map` `cross_link`.

## ASR notes

“approximated” is consistent across srt/tsv/json. Trailing “Then” is a cut, not a new idea. Next folder speech confirms placement.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2206/solution-04-keep-hacks-out-of-bank-table-interface",
  "solution_title": "Do not stuff hacks into this bank-table interface",
  "folder": "wb-rec-260815-2206",
  "sequence_index": 14,
  "recording_id": "125a22f8-b64d-419e-9196-9126d5f613f3",
  "recording_started_at": "2026-08-15T16:36:16.832Z",
  "recording_ended_at": "2026-08-15T16:43:07.910Z",
  "duration_ms": 411078,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options table (Lenders, Rate, Loan amount, Tenure, EMI) below Loan inputs — visible after scroll in screenshots/0051.jpg",
  "for_topic": "Where loan hacks should not live: stuffing them into this Explore banks comparison table muddies the bank rows",
  "pinpoint": "At the end of Explore banks, they scrolled the bank table into view and said the problem of this interface is that the things below get approximated, so sitting only here is the wrong place for the hacks they just described; that placement idea continues into the next recording.",
  "kind": ["potential_suggestion", "idea"],
  "decidedness": "brainstorm",
  "basis": "Putting the intelligence into this same comparison UI approximates / muddies the bank list below; they cut off mid-sentence on Then.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-explore-banks-missing-hacks-intelligence.md"],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2213",
  "related_solution_files": ["solution-01-company-gives-loan-hacks-intelligence.md"],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:06:33,090 --> 00:06:50,410"],
  "event_t_ms": [402346, 402749],
  "screenshot_files": ["screenshots/0050.jpg","screenshots/0051.jpg"],
  "tags": ["placement","bank-table","intelligence","interface","explore-banks"],
  "quotes": [
    {"clock": "00:06:33,990", "text": "We have to sit in this interface.", "artifact": "audio.srt"},
    {"clock": "00:06:37,410", "text": "Do you know what the problem is?", "artifact": "audio.srt"},
    {"clock": "00:06:40,130", "text": "They get approximated.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
