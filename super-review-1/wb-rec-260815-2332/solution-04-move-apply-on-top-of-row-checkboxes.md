# Move “Apply once” to sit on top of the bank row checkboxes
They said the Apply button should be positioned above the checkbox column they’re using for selection.
This is for the results table on Explore banks, where users select banks/lenders.
They pointed at the checkboxes and said “Apply should come here on top of these checkboxes.”
They treated this as a layout/interaction alignment improvement.

---
solution_id: "wb-rec-260815-2332/solution-04-move-apply-on-top-of-row-checkboxes"
solution_title: "Move “Apply once” to sit on top of the bank row checkboxes"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Apply once button vs the bank-row checkboxes in the first table column"
for_topic: "Selection controls alignment"
pinpoint: "On Explore banks, they instructed that Apply once should be placed above the row checkboxes so it aligns with the selection action they’re using."
kind: ["proposed_change","user_convenience"]
decidedness: "leaning"
basis: "They said “Beautiful.” then pointed at the checkbox column and explicitly directed the Apply placement."
analog_source: "none"
linked_issue_files: ["wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: []
source_files_used: ["manifest.json","pages.json","audio.srt","audio.tsv","audio.text","audio.json","events.json","tabs.json","console.json","screenshots/index.json","screenshots/0030.png","viewer.js","viewer.css","index.html","replay.spec.ts","audio.webm","audio_sentences.txt","audio.lrc","audio.txt","audio.vtt","_theme-cards.json"]
speech_clock: ["03:15.650–03:20.690"]
event_t_ms: [195650]
screenshot_files: ["screenshots/0030.png"]
tags: ["layout","interaction","apply","checkboxes"]
---

## Exact solution (or idea that can also be a solution)
Direct placement instruction: “Apply should come here on top of these checkboxes.”

## What this is for
Explore banks → the bank/lender selection table, so the Apply once action visually matches the checkbox selection column.

## Why they said it that way
They were actively selecting rows and treated the mismatch in placement as a user experience alignment problem.

## How the files join
- time: ~03:15–03:20 (audio.srt + audio.json)
- what they said: “Beautiful.” then “Apply should come here on top of these checkboxes.”
- what they did: they used the visible selection checkboxes shortly around this moment (events.json shows select-all / deselect actions)
- what was on screen: `screenshots/0030.png` shows the checkbox column plus the current Apply once placement on the table area
- therefore: move the Apply once button so it sits above the checkbox column, not far away on the right.

## Evidence by file (abbreviated)
- `screenshots/0030.png`: shows the checkboxes and the Apply once button in the layout they disliked.
- `audio.srt`: has the explicit placement sentence.
- `events.json`: has the checkbox selection click sequence around this area.

```json
{
  "solution_id": "wb-rec-260815-2332/solution-04-move-apply-on-top-of-row-checkboxes",
  "solution_title": "Move “Apply once” to sit on top of the bank row checkboxes",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Apply once button vs the bank-row checkboxes in the first table column",
  "for_topic": "Selection controls alignment",
  "pinpoint": "Apply once should sit above the checkbox column they’re selecting from.",
  "kind": ["proposed_change","user_convenience"],
  "decidedness": "leaning",
  "confidence": "high",
  "asr_conflict": false,
  "speech_clock": ["03:15.650–03:20.690"],
  "screenshot_files": ["screenshots/0030.png"],
  "linked_issue_files": ["wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes.md"]
}
```

