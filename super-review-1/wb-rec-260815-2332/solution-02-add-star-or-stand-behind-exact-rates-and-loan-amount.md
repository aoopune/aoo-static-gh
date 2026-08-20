# Add a “stand behind” star/disclaimer for exact rates & loan amounts
They liked the confidence from exact numbers, but said the exact figure needs a star/disclaimer.
This is for the bank results table’s **Rate** and **Loan amount** values on Explore banks.
They said they’ll “put a star” so the site stands behind the exact value (and even “in charges”).
They also used the age-cap differences while looking at those exact cells.

---
solution_id: "wb-rec-260815-2332/solution-02-add-star-or-stand-behind-exact-rates-and-loan-amount"
solution_title: "Add a “stand behind” star/disclaimer for exact rates & loan amounts"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options results table cells: Rate and Loan amount (exact figures shown without a star/footnote)"
for_topic: "Trust cues for exact numeric values"
pinpoint: "On Explore banks, they said the table already shows exact Rate and Loan amount figures without a star, and they want a star/disclaimer so the site stands behind the exact number (including in charges)."
kind: ["proposed_change","user_convenience","company_thinking"]
decidedness: "leaning"
basis: "They said exact figures without a star inspire confidence, then said “So I will put a star… At least stand behind something,” and mentioned charges too."
analog_source: "none"
linked_issue_files: ["wb-rec-260815-2332/issue-02-exact-rate-and-loan-amount-without-star.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: []
source_files_used: ["manifest.json","pages.json","audio.srt","audio.tsv","audio.text","audio.json","events.json","tabs.json","console.json","screenshots/index.json","screenshots/0006.png","viewer.js","viewer.css","index.html","replay.spec.ts","audio.webm","audio_sentences.txt","audio.lrc","audio.txt","audio.vtt","_theme-cards.json"]
speech_clock: ["01:26.570–02:36.240"]
event_t_ms: [78278,79261,81091,96608]
screenshot_files: ["screenshots/0006.png"]
tags: ["trust","copy","data","rates","asterisk"]
---

## Exact solution (or idea that can also be a solution)
They explicitly framed it as standing behind exact numbers: “They have taken an exact amount without a star… This inspires a lot of confidence… So I will put a star… At least stand behind something… I don’t know if this is a star or not… In charges.”

## What this is for
Explore banks → the results table columns **Rate** and **Loan amount**, so exact values aren’t presented without an accompanying “we stand behind this” cue.

## Why they said it that way
They liked the precision (“inspires a lot of confidence”) but treated missing a star/footnote as a trust problem; they even extended the expectation to “charges.”

## How the files join
- time: ~01:26–02:36 (speech_clock)
- what they said: exact amounts without a star, then “put a star” (audio.srt / audio.json)
- what they did: they clicked/sorted the Rate and Loan amount headers (events.json shows clicks around the table header locators)
- what was on screen: `screenshots/0006.png` shows exact Rate and Loan amount values (including an odd loan figure) without any visible star/footnote on the cells they were inspecting
- therefore the finding is: add a star/footnote style cue for these exact numeric cells (and apply the same idea to charges).

## Related discussion (not the solution itself)
They noticed how eligibility caps affect shown loan amounts while still talking about exact figures.

## Evidence by file (abbreviated)
- `screenshots/0006.png`: shows the exact Rate and Loan amount cells and the style where they expect a star/disclaimer.
- `audio.srt`: contains “exact amount without a star… put a star… stand behind something… in charges.”
- `events.json` / `replay.spec.ts`: show sorting/header clicks for Rate and Loan amount.

```json
{
  "solution_id": "wb-rec-260815-2332/solution-02-add-star-or-stand-behind-exact-rates-and-loan-amount",
  "solution_title": "Add a “stand behind” star/disclaimer for exact rates & loan amounts",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options results table cells: Rate and Loan amount (exact figures shown without a star/footnote)",
  "for_topic": "Trust cues for exact numeric values",
  "pinpoint": "They want a star/disclaimer so the site stands behind exact Rate and Loan amount values (and charges).",
  "kind": ["proposed_change","user_convenience","company_thinking"],
  "decidedness": "leaning",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "linked_issue_files": ["wb-rec-260815-2332/issue-02-exact-rate-and-loan-amount-without-star.md"],
  "speech_clock": ["01:26.570–02:36.240"],
  "screenshot_files": ["screenshots/0006.png"],
  "quotes": [{"clock":"01:26.570–02:36.240","text":"They have taken an exact amount without a star… So I will put a star… At least stand behind something… In charges.","artifact":"audio.srt"}],
  "related_discussion_present": true
}
```

