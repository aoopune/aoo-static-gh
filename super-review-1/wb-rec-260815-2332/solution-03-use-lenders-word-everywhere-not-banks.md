# Use “lenders” wording everywhere instead of “banks”
They said the table header is correctly using **Lenders**, and they want the same neutral word across the rest of the page.
This is for the Explore banks page copy and button labels surrounding the results table.
They noted the list includes non-bank lenders, so “banks” can feel misleading to ordinary users.
They allowed continuing for now, but the word choice was treated as important.

---
solution_id: "wb-rec-260815-2332/solution-03-use-lenders-word-everywhere-not-banks"
solution_title: "Use “lenders” wording everywhere instead of “banks”"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbc6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Explore banks page titles/buttons still saying “banks” while table column says “Lenders”"
for_topic: "Neutral copywriting for mixed lender types"
pinpoint: "On Explore banks, they said “Lenders is a good word” and they want “lenders” used everywhere instead of “banks,” since the results list contains more than just banks."
kind: ["proposed_change","company_thinking","user_convenience"]
decidedness: "leaning"
basis: "They said you can put lenders everywhere instead of banks; they treated it as a wording mismatch."
analog_source: "none"
linked_issue_files: ["wb-rec-260815-2332/issue-03-lenders-word-not-used-everywhere-instead-of-banks.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2322"
continued_into_folder: null
related_solution_files: []
source_files_used: ["manifest.json","pages.json","audio.srt","audio.tsv","audio.text","audio.json","events.json","tabs.json","console.json","screenshots/index.json","screenshots/0001.jpg","screenshots/0052.jpg","viewer.js","viewer.css","index.html","replay.spec.ts","audio.webm","audio_sentences.txt","audio.lrc","audio.txt","audio.vtt","_theme-cards.json"]
speech_clock: ["02:55.300–03:13.270"]
event_t_ms: [310860]
screenshot_files: ["screenshots/0001.jpg","screenshots/0052.jpg"]
tags: ["copy","wording","lenders","banks"]
---

## Exact solution (or idea that can also be a solution)
They wanted copy consistency around the results: “Lenders is a good word.” and “You can put lenders everywhere instead of banks.”

## What this is for
Explore banks → the surrounding page copy (title and button-like labels) so it matches the neutral results column header “Lenders.”

## Why they said it that way
They treated ordinary-user expectations as the driver: if the list contains NBFC/lending entities, calling it “banks” can mislead, so “lenders” is the safer neutral word.

## How the files join
- time: ~02:55–03:02
- what they said: “Lenders… a good word… put lenders everywhere instead of banks.” (audio.srt)
- what they did: no specific control click to change wording; they reviewed the page state (events.json shows they were focused on the table area)
- what was on screen: `screenshots/0001.jpg` shows the table column header **Lenders**; `screenshots/0052.jpg` shows selection state with **Lenders** still present while the rest of the page remains in the Explore-banks framing.
- therefore the finding is: update the page’s surrounding copy/button labels to consistently use “lenders,” not “banks.”

## Related discussion (not the solution itself)
They followed up by continuing the review of the table UI (including Apply placement and other table wording).

```json
{
  "solution_id": "wb-rec-260815-2332/solution-03-use-lenders-word-everywhere-not-banks",
  "solution_title": "Use “lenders” wording everywhere instead of “banks”",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Explore banks page copy and button labels still saying “banks” while table uses “Lenders”",
  "for_topic": "Neutral copywriting for mixed lender types",
  "pinpoint": "Use “lenders” everywhere instead of “banks” so the copy matches the lender list (including NBFCs).",
  "kind": ["proposed_change","company_thinking","user_convenience"],
  "decidedness": "leaning",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2322",
  "linked_issue_files": ["wb-rec-260815-2332/issue-03-lenders-word-not-used-everywhere-instead-of-banks.md"],
  "speech_clock": ["02:55.300–03:13.270"],
  "screenshot_files": ["screenshots/0001.jpg","screenshots/0052.jpg"]
}
```

