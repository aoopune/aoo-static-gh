# Clear the “Adjust eligibility” form with a real Clear/reset button
They want a quick way to wipe the already-filled loan inputs card.
This is for the **Adjust eligibility** (loan inputs) form on Explore banks.
They said “everyone has a button like this” and asked directly for it.
They accepted continuing without it, but the missing button was treated as a gap.

---
solution_id: "wb-rec-260815-2332/solution-01-clear-eligibility-form-with-button"
solution_title: "Clear the “Adjust eligibility” form with a real Clear/reset button"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Adjust eligibility / loan inputs card (expanded, already filled), missing Clear/reset control"
for_topic: "Loan inputs form editing on Explore banks"
pinpoint: "On Explore banks, they asked for a Clear/reset button to wipe the already-filled Adjust eligibility form so the user can start fresh."
kind: ["proposed_change","user_convenience"]
decidedness: "leaning"
basis: "They said clearing is a good idea, then asked if there is a button and said everyone has one."
analog_source: "none"
linked_issue_files: ["wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: "wb-rec-260815-2322"
continued_into_folder: null
related_solution_files: []
source_files_used: ["manifest.json","pages.json","audio.srt","audio.tsv","audio.text","audio.json","events.json","tabs.json","console.json","screenshots/index.json","screenshots/0000.jpg","viewer.js","viewer.css","index.html","replay.spec.ts","audio.webm","audio_sentences.txt","audio.lrc","audio.txt","audio.vtt","_theme-cards.json"]
speech_clock: ["00:10.040–00:20.600"]
event_t_ms: [10040,13320]
screenshot_files: ["screenshots/0000.jpg"]
tags: ["interaction","missing-control","loan-form","eligibility"]
---

## Exact solution (or idea that can also be a solution)
They treated this as a standard “start fresh” control: “It’s a good idea to clear this.” followed by “Do you have a button for this?” and “Everyone has a button like this.”

## What this is for
Explore banks → the **Adjust eligibility** (loan inputs) card at the top of the page, so users can clear already-filled fields without confusing navigation.

## Why they said it that way
They explicitly framed it as a common expectation (“everyone has a button like this”) and the product already had values filled when they asked.

## How the files join
- time: ~00:10–00:17 ms (10,040–17,700)
- what they said: “It’s a good idea to clear this.” + “Do you have a button for this?” (audio.srt)
- what they did: they stayed on the open Adjust eligibility card; no Clear/reset click happened because no such control was present (events.json shows only scroll/idle around this time)
- what was on screen: `screenshots/0000.jpg` shows the **Adjust eligibility** card expanded with fields already filled and “See options,” but no Clear/reset button
- therefore the finding is: add a **Clear/reset** button for the eligibility/loan inputs form.

## Related discussion (not the solution itself)
They accepted continuing without the button right after the question, and later they praised the table’s tab model (Overview/Charges/Other charges).

## Chronology in this recording
They opened the filled eligibility card, then asked for a Clear/reset button, then proceeded without getting it.

## Cross-recording continuation
Continues the “form editing needs an explicit control” direction from `wb-rec-260815-2322`.

## Evidence by file (abbreviated)
- `screenshots/0000.jpg`: shows the expanded Adjust eligibility card and the “See options” state with no Clear/reset control.
- `audio.srt` / `audio.json`: contains the “clear this / button / everyone has one” speech.
- `events.json`: shows they remained on Explore banks without clicking a Clear/reset control (no Clear click locator).
- `pages.json`: confirms the page and the “Loan inputs” region naming.

```json
{
  "solution_id": "wb-rec-260815-2332/solution-01-clear-eligibility-form-with-button",
  "solution_title": "Clear the “Adjust eligibility” form with a real Clear/reset button",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbc6ab",
  "recording_started_at": "2026-08-15T18:02:07.502Z",
  "recording_ended_at": "2026-08-15T18:11:22.771Z",
  "duration_ms": 555269,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Adjust eligibility / loan inputs card (expanded, already filled), missing Clear/reset control",
  "for_topic": "Loan inputs form editing on Explore banks",
  "pinpoint": "On Explore banks, they asked for a Clear/reset button to wipe the already-filled Adjust eligibility form so the user can start fresh.",
  "kind": ["proposed_change","user_convenience"],
  "decidedness": "leaning",
  "basis": "They said clearing is a good idea, then asked if there is a button and said everyone has one.",
  "analog_source": "none",
  "linked_issue_files": ["wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": "wb-rec-260815-2322",
  "continued_into_folder": null,
  "related_solution_files": [],
  "source_files_used": ["manifest.json","pages.json","audio.srt","audio.tsv","audio.text","audio.json","events.json","tabs.json","console.json","screenshots/index.json","screenshots/0000.jpg","viewer.js","viewer.css","index.html","replay.spec.ts","audio.webm","audio_sentences.txt","audio.lrc","audio.txt","audio.vtt","_theme-cards.json"],
  "speech_clock": ["00:10.040–00:20.600"],
  "event_t_ms": [10040,13320],
  "screenshot_files": ["screenshots/0000.jpg"],
  "tags": ["interaction","missing-control","loan-form","eligibility"],
  "quotes": [{"clock":"00:10.040–00:20.600","text":"It’s a good idea to clear this. Do you have a button for this? Everyone has a button like this.","artifact":"audio.srt"}],
  "clicks": [],
  "related_discussion_present": true
}
```

