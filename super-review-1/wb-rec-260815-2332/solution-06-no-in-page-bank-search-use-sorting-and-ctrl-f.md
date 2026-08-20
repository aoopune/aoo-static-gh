# Don’t add a bank-name search box; rely on sorting + Ctrl+F
They asked how to find a named bank (like SBI) when there are many banks, then decided adding a search control would add cognitive load.
This is for the bank results list on Explore banks.
They wanted the list to open with rate sorted (lowest → highest) and suggested Control‑F as the user’s search.
This keeps the UI simpler while still enabling fast lookup.

---
solution_id: "wb-rec-260815-2332/solution-06-no-in-page-bank-search-use-sorting-and-ctrl-f"
solution_title: "Don’t add a bank-name search box; rely on sorting + Ctrl+F"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options list (paginated with “Show 23 more banks”), missing in-page search for a named bank"
for_topic: "Lookup strategy when the list is long"
pinpoint: "On Explore banks, they argued against adding a dedicated search box for bank names, and instead wanted default rate sorting plus users to use Control‑F."
kind: ["proposed_change","user_convenience","company_thinking"]
decidedness: "leaning"
basis: "They said the search UI would not look nice / would be extra cognitive load, and “Control F will hold it,” while also stating the default should be rate sorted lowest to highest."
analog_source: "none"
linked_issue_files: ["wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: []
source_files_used: ["manifest.json","pages.json","audio.srt","audio.tsv","audio.text","audio.json","events.json","tabs.json","console.json","screenshots/index.json","screenshots/0044.png","screenshots/0045.png","screenshots/0047.png","viewer.js","viewer.css","index.html","replay.spec.ts","audio.webm","audio_sentences.txt","audio.lrc","audio.txt","audio.vtt","_theme-cards.json"]
speech_clock: ["04:18.220–05:46.050"]
event_t_ms: [299393,310859]
screenshot_files: ["screenshots/0044.png","screenshots/0045.png","screenshots/0047.png"]
tags: ["interaction","search","cognitive-load","sort","navigation"]
---

## Exact solution (or idea that can also be a solution)
Their rule for this UI: “But who will search the bank? Control F will hold it.” paired with keeping the page simpler and opening with rate sorting: “When it opens, by default, the rate is sorted. Lowest to highest.”

## What this is for
Explore banks → the bank/lender options list, especially when there are ~25–30 items and the UI currently shows only the previous 10 plus “Show 23 more banks.”

## Why they said it that way
They explicitly pushed back on adding a search control as “extra cognitive load” and said it would make the list not look nice (“the SBI doesn’t look nice”).

## How the files join
- time: ~04:40–05:39 (audio.srt speech_clock)
- what they said: ask “how do I search for SBI?”, then reject adding a search control and recommend Ctrl+F; also specify default rate sorting direction.
- what they did: they interacted with the filters/list (events show “Floating” and “Show 23 more banks” clicks, then continuing scrolling in the list).
- what was on screen: `screenshots/0044.png` (list state) and `screenshots/0045.png` / `screenshots/0047.png` (longer list after “Show 23 more banks”).
- therefore: avoid a dedicated in-page bank-name search box; rely on default sorted order + Ctrl+F.

## Evidence by file (abbreviated)
- `audio.srt`: includes the “cognitive load” rejection and the Ctrl+F line.
- `events.json` / `replay.spec.ts`: show the “Floating” and “Show 23 more banks” interactions.
- `screenshots/0045.png` / `screenshots/0047.png`: show the list and the “Show 23 more banks” flow.

```json
{
  "solution_id": "wb-rec-260815-2332/solution-06-no-in-page-bank-search-use-sorting-and-ctrl-f",
  "solution_title": "Don’t add a bank-name search box; rely on sorting + Ctrl+F",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options list with “Show 23 more banks” and no in-page named bank search",
  "for_topic": "Lookup strategy when list is long",
  "pinpoint": "Default sort + Ctrl+F instead of adding an extra search widget.",
  "kind": ["proposed_change","user_convenience","company_thinking"],
  "decidedness": "leaning",
  "confidence": "high",
  "asr_conflict": false,
  "speech_clock": ["04:18.220–05:46.050"],
  "screenshot_files": ["screenshots/0044.png","screenshots/0045.png","screenshots/0047.png"],
  "linked_issue_files": ["wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank.md"]
}
```

