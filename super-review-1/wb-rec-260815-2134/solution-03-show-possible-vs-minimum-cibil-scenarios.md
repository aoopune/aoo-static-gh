# Show what is possible vs minimum at current CIBIL

Let users see bank options at their honest current score and at what becomes possible if the score improves.
Do not make them enter a hoped-for higher CIBIL that empties the whole bank table.
“If you show me, I will bring that score” — exploration without punishment.

---
solution_id: "wb-rec-260815-2134/solution-03-show-possible-vs-minimum-cibil-scenarios"
solution_title: "Show what is possible vs minimum at current CIBIL"
folder: "wb-rec-260815-2134"
sequence_index: 11
recording_id: "1965821a-27df-4039-8e62-b268e8696a5b"
recording_started_at: "2026-08-15T16:04:29.489Z"
recording_ended_at: "2026-08-15T16:10:04.857Z"
duration_ms: 335368
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options Overview table (Rate column) driven by CIBIL score* #hlc-cibil"
for_topic: "Explore banks results when the user’s real CIBIL is lower than they hope — keep rows visible and show both minimum and possible outcomes"
pinpoint: "On Explore banks, they said Shroffin should show what is possible and what is minimum at the score they actually have (e.g. remember 700, enter 680) without forcing a future +20-point score that empties the table — ‘If you show me, I will bring that score.’"
kind: ["idea", "user_convenience", "product_principle", "proposed_change"]
decidedness: "brainstorm"
basis: "Users may improve CIBIL in 3–6 months but need to see today’s options first; a single optimistic exact score hides lower rates or clears all banks."
analog_source: "none"
linked_issue_files: ["issue-01-cibil-single-exact-vs-min-max-range.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-02-cibil-dropdown-min-max-range-psychology.md", "solution-04-two-rates-two-loans-per-bank-overview.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js","_theme-cards.json"]
speech_clock: ["00:03:56,010 --> 00:04:56,980"]
event_t_ms: [205]
screenshot_files: ["screenshots/0025.jpg","screenshots/0034.jpg","screenshots/0039.jpg"]
tags: ["cibil","exploration","trust","overview-table","user-convenience","empty-table"]
---

## Exact solution (or idea that can also be a solution)
They want Explore banks to support **two mental modes** for CIBIL without breaking the results table:

1. **Show me what is minimum** — at the score they **actually have today** (“I remember it was 700. Now it might be 680. I want to see 680.” / “Show me what is minimum.”).
2. **Show me what is possible** — if they could reach a higher score (“If you show me I will bring that score”; “I have 3 months … I will find someone to increase the score.”).

The product must **not** force them to type a **future/hoped-for** exact CIBIL first:
- “What I see is I will increase it by 20 points … Then the table will be empty. Otherwise, the rate will not be lower.”
- They even sketch a **6-month small loan** to rebuild score — but they still need **today’s** bank rows visible at **680**.

This is an **idea that can also be the solution** for how CIBIL input (`solution-02`) connects to **Overview results**: exploration and honesty, not one exact filter that punishes optimism or pessimism.

## What this is for
**Explore banks → CIBIL score input → Bank options Overview table** (Rate / Loan amount / EMI). When CIBIL filters rates, the user job is: *see what I can get now* and *see what improves if my score moves* — without a blank table.

## Why they said it that way
Shroffin should feel like a **guide**, not a gate. If entering a slightly higher hoped-for score **wipes all banks**, the user learns the tool is brittle. Showing **minimum vs possible** matches how people actually plan home loans (fix CIBIL over months, but still shop today).

## How the files join (required)
- **time:** 236010–292720 ms (00:03:56–00:04:52)
- **said:** “If you show me I will bring that score.” … “Show me what is possible.” … “Show me what is minimum.” … “I want to see 680.” … “I will increase it by 20 points … Then the table will be empty. Otherwise, the rate will not be lower.” (`audio.tsv`)
- **did:** idle; no CIBIL edit on screen (still shows **780**)
- **seeing:** `screenshots/0025.jpg`–`0034.jpg` — Overview **Rate** column header; bank rows below (partially masked)
- **page/object:** Explore banks Overview + CIBIL-driven filtering
- **therefore:** constructive direction = **dual view: minimum (current) vs possible (improved CIBIL)** without empty-table penalty.

- **time:** 290760–296980 ms (00:04:50–00:04:56)
- **said:** “Then the table will be empty. Otherwise, the rate will not be lower.”
- **seeing:** `screenshots/0034.jpg` — Overview table headers including **Rate**
- **therefore:** ties explicitly to **Overview Rate column** behavior when CIBIL is wrong/optimistic.

## Pinpoint
On **Explore banks**, when users only roughly know CIBIL (680 vs remembered 700), Shroffin should **show minimum outcomes at today’s score and possible outcomes if the score improves**, instead of making them enter a hoped-for +20 points that **empties the bank table** or hides a lower rate.

## Related discussion (not the solution itself)
- “I can't increase it” — some users cannot wait; minimum view is mandatory for them.
- 3 months / 6-month loan / find someone to increase score — user journey examples, not separate products.
- CIBIL min/max input rules → `solution-02`.
- “Two rates / two loans” when bank gives a band → `solution-04`.
- End-of-session clicks through Other charges were a **check**, not this idea (`issue-02` related discussion).

## Chronology in this recording
| Clock | Speech | Action | Screenshot |
|---|---|---|---|
| 00:03:56–00:04:12 | If you show me … show possible | idle | 0025–0028 |
| 00:04:16–00:04:30 | Show minimum; remember 700 → 680 | idle | 0028–0030 |
| 00:04:37–00:04:52 | +20 points; table empty; rate not lower | idle | 0030–0034 |

## Cross-recording continuation
**Standalone in this folder** as the “possible vs minimum” idea (first named ~00:03:56). Builds on earlier CIBIL range talk (`solution-02`) in the same recording. **No continuation into `wb-rec-260815-2201`.**

## Evidence by file (every raw recorder file in the folder — no omissions)
- `manifest.json`: Explore banks; 335368 ms — `timeline_alignment`
- `audio.text` / `audio.txt` / `audio_sentences.txt`: “Show me what is possible/minimum”; empty table — `supports_solution`
- `audio.srt` / `audio.vtt` / `audio.tsv` / `audio.lrc`: timed cues 00:03:56–00:04:56 — `supports_solution`
- `audio.json`: segments 75–99; “Show me what is possible” high confidence words — `supports_solution`
- `audio.webm`: binary; not played — `timeline_alignment`
- `events.json`: idle during speech; landmark lists Overview region — `timeline_alignment`
- `pages.json`: Bank options region — `supports_solution`
- `tabs.json`: single Explore banks tab — `timeline_alignment`
- `console.json`: `[]` — `checked_no_extra_signal`
- `replay.spec.ts`: idle waits before late tab clicks — `timeline_alignment`
- `index.html`: player shell — `checked_no_extra_signal`
- `viewer.js` / `viewer.css`: generic player — `checked_no_extra_signal`
- `screenshots/index.json`: 40 shots indexed — `timeline_alignment`
- `screenshots/0000.jpg`–`screenshots/0034.jpg`: CIBIL 780 + Overview Rate header during speech — `supports_solution`
- `screenshots/0035.jpg`–`screenshots/0039.jpg`: later tab clicks; `0039` shows one Rate per bank (8.75%–9.35%) — `related_discussion`
- `_theme-cards.json`: issue-01 related discussion mentions show possible vs minimum — `related_discussion`

### Helper issue files
- `issue-01-cibil-single-exact-vs-min-max-range.md`: exact CIBIL causes empty table — `cross_link`
- `issue-02-bank-options-one-rate-for-cibil-band.md`: separate Rate-column band problem — `timestamp_map`
- `_coverage-ledger.json`: untouched issue ledger — `not_used`

## ASR notes
“Show me what is possible/minimum” consistent across artifacts. “Civil score will be 60” (00:04:58) is garbled/low-confidence tail — not used for this finding.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2134/solution-03-show-possible-vs-minimum-cibil-scenarios",
  "solution_title": "Show what is possible vs minimum at current CIBIL",
  "folder": "wb-rec-260815-2134",
  "sequence_index": 11,
  "recording_id": "1965821a-27df-4039-8e62-b268e8696a5b",
  "recording_started_at": "2026-08-15T16:04:29.489Z",
  "recording_ended_at": "2026-08-15T16:10:04.857Z",
  "duration_ms": 335368,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options Overview table (Rate column) driven by CIBIL score* #hlc-cibil",
  "for_topic": "Explore banks results when the user’s real CIBIL is lower than they hope — keep rows visible and show both minimum and possible outcomes",
  "pinpoint": "On Explore banks, they said Shroffin should show what is possible and what is minimum at the score they actually have (e.g. remember 700, enter 680) without forcing a future +20-point score that empties the table — ‘If you show me, I will bring that score.’",
  "kind": ["idea", "user_convenience", "product_principle", "proposed_change"],
  "decidedness": "brainstorm",
  "basis": "Users may improve CIBIL in 3–6 months but need to see today’s options first; a single optimistic exact score hides lower rates or clears all banks.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-cibil-single-exact-vs-min-max-range.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-02-cibil-dropdown-min-max-range-psychology.md", "solution-04-two-rates-two-loans-per-bank-overview.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js","_theme-cards.json"],
  "speech_clock": ["00:03:56,010 --> 00:04:56,980"],
  "event_t_ms": [205],
  "screenshot_files": ["screenshots/0025.jpg","screenshots/0034.jpg","screenshots/0039.jpg"],
  "tags": ["cibil","exploration","trust","overview-table","user-convenience","empty-table"],
  "quotes": [
    {"clock": "00:04:00,250", "text": "I will bring that score.", "artifact": "audio.tsv"},
    {"clock": "00:04:11,050", "text": "Show me what is possible.", "artifact": "audio.tsv"},
    {"clock": "00:04:16,240", "text": "Show me what is minimum.", "artifact": "audio.tsv"},
    {"clock": "00:04:50,760", "text": "Then the table will be empty.", "artifact": "audio.tsv"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
