# CIBIL min–max range with optional maximum and rejection psychology

Let users enter CIBIL as a minimum (required) and maximum (optional), not one exact score.
If they only give 750, show 750; if they also give 800, show 750–800.
Design it so fear of rejection pushes them to raise the minimum — “This is what I like.”

---
solution_id: "wb-rec-260815-2134/solution-02-cibil-dropdown-min-max-range-psychology"
solution_title: "CIBIL min–max range with optional maximum and rejection psychology"
folder: "wb-rec-260815-2134"
sequence_index: 11
recording_id: "1965821a-27df-4039-8e62-b268e8696a5b"
recording_started_at: "2026-08-15T16:04:29.489Z"
recording_ended_at: "2026-08-15T16:10:04.857Z"
duration_ms: 335368
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs CIBIL score* textbox #hlc-cibil"
for_topic: "How Explore banks accepts CIBIL when users only know a band, not an exact bureau score"
pinpoint: "On Explore banks, for CIBIL score entry, they said to offer a selectable dropdown and/or min–max ranges with minimum compulsory and maximum optional (750 alone vs 750–800), shaped by rejection psychology so users raise the minimum when they fear rejection — not a single required exact 780."
kind: ["proposed_change", "idea", "user_convenience", "product_principle"]
decidedness: "decided"
basis: "Users do not know exact CIBIL; they remember ~700 and would enter 680–700; exact entry can empty the bank table or hide lower rates."
analog_source: "none"
linked_issue_files: ["issue-01-cibil-single-exact-vs-min-max-range.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2125"
continued_into_folder: null
related_solution_files: ["solution-01-amazon-typeahead-font-weight-for-cibil.md", "solution-03-show-possible-vs-minimum-cibil-scenarios.md", "solution-04-two-rates-two-loans-per-bank-overview.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js","_theme-cards.json"]
speech_clock: ["00:00:57,030 --> 00:02:39,320", "00:02:44,730 --> 00:03:34,310"]
event_t_ms: [205, 302637]
screenshot_files: ["screenshots/0000.jpg","screenshots/0034.jpg","screenshots/0035.jpg"]
tags: ["cibil","range","dropdown","min-max","rejection","loan-inputs","filtering"]
---

## Exact solution (or idea that can also be a solution)
Replace the **single required CIBIL score** box with a control that matches how users actually remember credit scores:

1. **Dropdown and/or min–max range:** “Should I give him a drop down? You can select it.” … “You can also give me a minimum, a maximum. You have to give ranges.” Pick **one** primary pattern (“You have to take one and drop it”) — dropdown **or** min/max, not both competing controls.
2. **Minimum compulsory, maximum optional:** “You have to keep the minimum compulsive.” … “You can also recommend a maximum.” If the user gives **750** only → show **750**. If they also give **800** → show **750 to 800**.
3. **No exact score required:** “You don't need to know your exact Sibyl score.” Example: “Yes, I had around 700 … 680 to 700, I will give him.” (ASR: Sibyl/civil → **CIBIL** joined to `#hlc-cibil`.)
4. **Rejection psychology (how the range should behave):** If the user thinks “my rejection is more,” they will **raise the minimum** (e.g. 760). If they give only a maximum of 760, show **only 760**; if they give a max, show that max. “This is what I like.”
5. **Bound the max for filtering:** “When he gives a maximum, he has to give a limit of 5” / “if I give a maximum limit of 25, then our filter will be correct” — cap how wide an optional max can be so rate filtering stays honest (ASR **5 vs 25** conflict; both quoted raw).

This is the **constructive direction** for `issue-01`. The defect is the current **780** exact box; this file is what they want instead.

## What this is for
**Explore banks → Loan inputs → CIBIL score*** (`#hlc-cibil`, placeholder 780, required). Speech is idle on that field until **focus at 302637 ms** (`events.json`), confirming the talk targets this control even though the UI still shows one number.

## Why they said it that way
Indian borrowers often remember “around 700,” not today’s bureau integer. Forcing exact CIBIL makes the product feel like a test they will fail. A **minimum** lets them be honest; an **optional maximum** lets hopeful users explore without pretending they already have a higher score. Rejection fear is used **on purpose** to nudge a safer minimum, not to trick them.

## How the files join (required)
- **time:** 57030–107950 ms (00:00:57–00:01:47)
- **said:** dropdown; min/max; “keep the minimum compulsive”; 750 vs 750–800 (`audio.tsv`)
- **did:** idle; Overview tab visible below
- **seeing:** `screenshots/0006.jpg`–`0016.jpg` — CIBIL **780** single box
- **therefore:** proposed **min/max (+ optional dropdown)** replaces single exact CIBIL.

- **time:** 128180–159320 ms (00:02:08–00:02:39)
- **said:** rejection psychology; min 760; “This is what I like.”
- **did:** idle
- **seeing:** same CIBIL 780 field
- **therefore:** **UX rules** for how min-only vs min+max should filter/display.

- **time:** 164730–214310 ms (00:02:44–00:03:34)
- **said:** don’t need exact CIBIL; 680–700; max limit 5/25; “can't filter out what the rate is” (bridges to rate table — see `solution-04`)
- **seeing:** `screenshots/0019.jpg`–`0026.jpg` — **Rate** column header
- **therefore:** CIBIL range must connect to **rate filtering** on Overview.

- **time:** 302637 ms
- **did:** **focus `#hlc-cibil`**
- **seeing:** `screenshots/0034.jpg` then scroll `0035.jpg`
- **therefore:** speech throughout was about this field; they finally pointed at it.

## Pinpoint
On **Explore banks**, **CIBIL score** entry should be a **dropdown and/or min–max range** with **required minimum** and **optional maximum**, designed around **rejection psychology**, because users do not know an exact score (e.g. 680–700) and a single exact value breaks rate filtering downstream.

## Related discussion (not the solution itself)
- One speaker wants accuracy (“I want to know it accurately”); the other rejects exact-only entry — mild **disagreement** on precision vs band; band/range direction wins in this stretch.
- “We have to give a maximum of two” — means offer **both** min and max fields, not two unrelated CIBIL products.
- Hoped-for +20 points / 6-month loan / empty table → `solution-03`.
- “I want 2 rates / 2 loans” → `solution-04`.
- Amazon typeahead alternative → `solution-01`.

## Chronology in this recording
| Clock | Speech | Action | Screenshot |
|---|---|---|---|
| 00:00:57–00:01:47 | Dropdown; min/max; compulsory min | idle | 0006–0016 |
| 00:02:08–00:02:39 | Rejection → higher min; “This is what I like” | idle | 0017–0019 |
| 00:02:44–00:03:34 | No exact CIBIL; 680–700; max limit 5/25; rate filter | idle | 0019–0026 |
| 00:05:02.637 | (no new CIBIL words) | focus `#hlc-cibil` | 0034–0035 |

## Cross-recording continuation
**Continues from `wb-rec-260815-2125`** (~8 s gap): same Explore banks page, CIBIL 780, Amazon/dropdown/range talk at end of 2125 (“Here, we need a drop down”; “give a range but do not give a drop down”).

**Does not continue into `wb-rec-260815-2201`** (~21 min gap; bar talk only).

## Evidence by file (every raw recorder file in the folder — no omissions)
- `manifest.json`: Explore banks session 335368 ms; 40 screenshots — `timeline_alignment`
- `audio.text`: full CIBIL min/max/rejection/range talk — `supports_solution`
- `audio.txt`: timed dump same — `supports_solution`
- `audio_sentences.txt`: one-block includes Sibyl score + 680–700 — `supports_solution`
- `audio.srt`: cue clock; “compulsive” for minimum — `supports_solution`
- `audio.vtt`: cleaner English same cues — `supports_solution`
- `audio.tsv`: ms clock for joins — `supports_solution`
- `audio.lrc`: timed lines same family — `supports_solution`
- `audio.json`: 110 segments fully read; segments 14–74 CIBIL/range/rate; language `mr` wrong — `supports_solution`
- `audio.webm`: binary; not played — `timeline_alignment`
- `events.json`: CIBIL field in landmark; **focus #hlc-cibil 302637** — `supports_solution`
- `pages.json`: CIBIL score* required text field — `supports_solution`
- `tabs.json`: stayed on Explore banks — `timeline_alignment`
- `console.json`: `[]` — `checked_no_extra_signal`
- `replay.spec.ts`: idle then late clicks — `timeline_alignment`
- `index.html`: player shell + inlined JSON — `checked_no_extra_signal`
- `viewer.js`: generic player 746 lines — `checked_no_extra_signal`
- `viewer.css`: generic player 660 lines — `checked_no_extra_signal`
- `screenshots/index.json`: 40 entries; 0000–0034 periodic CIBIL 780 — `timeline_alignment`
- `screenshots/0000.jpg`–`screenshots/0034.jpg`: idle talk — single CIBIL **780**, Overview **Rate** header — `supports_solution`
- `screenshots/0035.jpg`: after CIBIL focus + scroll — CIBIL 780 still visible — `supports_solution`
- `screenshots/0036.jpg`–`screenshots/0039.jpg`: Other charges / Overview return — `related_discussion`
- `_theme-cards.json`: issue-01 card lists same CIBIL range direction — `related_discussion`

### Helper issue files
- `issue-01-cibil-single-exact-vs-min-max-range.md`: **problem** this direction answers — `cross_link`
- `issue-02-bank-options-one-rate-for-cibil-band.md`: rate-filter talk overlaps at 00:03:06 — `timestamp_map`
- `_coverage-ledger.json`: issue-run ledger — `not_used`

## ASR notes
Prefer **tsv/vtt** for min/max/dropdown. **Sibyl/civil** → **CIBIL** (screen + `#hlc-cibil` focus). “Compulsive” → **compulsory**. Max limit **5** vs **25**: both appear; likely **points cap** on optional max — keep both quotes. “Maximum of two” = two fields (min + max), not two scores.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2134/solution-02-cibil-dropdown-min-max-range-psychology",
  "solution_title": "CIBIL min–max range with optional maximum and rejection psychology",
  "folder": "wb-rec-260815-2134",
  "sequence_index": 11,
  "recording_id": "1965821a-27df-4039-8e62-b268e8696a5b",
  "recording_started_at": "2026-08-15T16:04:29.489Z",
  "recording_ended_at": "2026-08-15T16:10:04.857Z",
  "duration_ms": 335368,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs CIBIL score* textbox #hlc-cibil",
  "for_topic": "How Explore banks accepts CIBIL when users only know a band, not an exact bureau score",
  "pinpoint": "On Explore banks, for CIBIL score entry, they said to offer a selectable dropdown and/or min–max ranges with minimum compulsory and maximum optional (750 alone vs 750–800), shaped by rejection psychology so users raise the minimum when they fear rejection — not a single required exact 780.",
  "kind": ["proposed_change", "idea", "user_convenience", "product_principle"],
  "decidedness": "decided",
  "basis": "Users do not know exact CIBIL; they remember ~700 and would enter 680–700; exact entry can empty the bank table or hide lower rates.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-cibil-single-exact-vs-min-max-range.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2125",
  "continued_into_folder": null,
  "related_solution_files": ["solution-01-amazon-typeahead-font-weight-for-cibil.md", "solution-03-show-possible-vs-minimum-cibil-scenarios.md", "solution-04-two-rates-two-loans-per-bank-overview.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js","_theme-cards.json"],
  "speech_clock": ["00:00:57,030 --> 00:02:39,320", "00:02:44,730 --> 00:03:34,310"],
  "event_t_ms": [205, 302637],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0034.jpg","screenshots/0035.jpg"],
  "tags": ["cibil","range","dropdown","min-max","rejection","loan-inputs","filtering"],
  "quotes": [
    {"clock": "00:01:06,820", "text": "a minimum, a maximum.", "artifact": "audio.tsv"},
    {"clock": "00:01:32,730", "text": "You have to keep the minimum compulsive.", "artifact": "audio.srt"},
    {"clock": "00:02:37,660", "text": "This is what I like.", "artifact": "audio.tsv"},
    {"clock": "00:02:51,910", "text": "680 to 700, I will give him.", "artifact": "audio.tsv"}
  ],
  "clicks": [{"t_ms": 302637, "name": "CIBIL score*", "css": "#hlc-cibil"}],
  "related_discussion_present": true
}
```
