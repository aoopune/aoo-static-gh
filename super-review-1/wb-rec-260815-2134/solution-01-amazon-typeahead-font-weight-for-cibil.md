# Amazon-style typeahead and font weight for CIBIL input

Borrow Amazon's search pattern for the CIBIL score field: normal weight for what you typed, extra weight for suggestions.
Let users pick from a dropdown as they type (like typing 7 opens the next five scores), not only a single exact box.
This continues the same CIBIL-input talk from the previous recording on Explore banks.

---
solution_id: "wb-rec-260815-2134/solution-01-amazon-typeahead-font-weight-for-cibil"
solution_title: "Amazon-style typeahead and font weight for CIBIL input"
folder: "wb-rec-260815-2134"
sequence_index: 11
recording_id: "1965821a-27df-4039-8e62-b268e8696a5b"
recording_started_at: "2026-08-15T16:04:29.489Z"
recording_ended_at: "2026-08-15T16:10:04.857Z"
duration_ms: 335368
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs CIBIL score* textbox #hlc-cibil"
for_topic: "How users enter CIBIL on Explore banks — borrowed Amazon search/typeahead UX"
pinpoint: "On Explore banks, while looking at the single CIBIL score box, they said to copy Amazon-style typeahead (type 7 → next five scores; typed amount normal font weight, suggestion extra font weight) so users select from a dropdown instead of guessing one exact number."
kind: ["borrowed_pattern", "proposed_change", "idea", "user_convenience"]
decidedness: "leaning"
basis: "Users do not know an exact CIBIL; Amazon already solved progressive search with visible suggestions; they cracked Amazon links and studied that pattern."
analog_source: "Amazon"
linked_issue_files: ["issue-01-cibil-single-exact-vs-min-max-range.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: false
continuation: "both"
continued_from_folder: "wb-rec-260815-2125"
continued_into_folder: null
related_solution_files: ["solution-02-cibil-dropdown-min-max-range-psychology.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:00:09,970 --> 00:00:27,230", "00:00:57,030 --> 00:01:00,030"]
event_t_ms: [205]
screenshot_files: ["screenshots/0000.jpg","screenshots/0006.jpg","screenshots/0034.jpg"]
tags: ["cibil","amazon","typeahead","dropdown","font-weight","borrowed-pattern","loan-inputs"]
---

## Exact solution (or idea that can also be a solution)
They want the **CIBIL score*** field on Explore banks to behave like **Amazon search**, not like a plain exact-number box. Concretely:
- **Typeahead / dropdown:** “Should I give him a drop down? You can select it.” When someone types **7**, show the **next five** CIBIL scores (766 → 760, etc.) — the same pattern they described in `wb-rec-260815-2125` (“when he puts 7, then the next 5-5 drop downs of 7 are open”).
- **Font weight cue:** “The amount you have typed, you keep the normal font weight. The type that you are going to type, you keep the extra font weight.” — so the user sees what is already entered vs what the suggestion offers (Amazon-style).
- **Why:** They “cracked all the Amazon links” and “studied it well”; users should **select** a score, not be forced to know one perfect number.

This is an **idea that can also be the solution** for the CIBIL input on this page. It sits next to `issue-01` (today’s single 780 box is wrong) but this file is the **constructive Amazon/typeahead direction**, not the defect restatement.

## What this is for
**Explore banks → Loan inputs → CIBIL score*** (`#hlc-cibil`). The screen still shows one required field with placeholder **780** throughout idle talk (`screenshots/0000.jpg`–`0034.jpg`). The borrowed pattern is meant to replace that interaction model.

## Why they said it that way
Real users remember a band, not an exact bureau score. Amazon’s search teaches: type a prefix, see weighted suggestions, pick one — lower friction than a mandatory exact integer. They explicitly contrast this with “when you type F, it freezes” on Amazon — they want the **helpful** part (suggestions), not a frozen field.

## How the files join (required)
- **time:** 9970–27230 ms (00:00:09–00:00:27)
- **said:** “I have cracked all the Amazon links.” … “The amount you have typed, you keep the normal font weight. The type that you are going to type, you keep the extra font weight.” … “You have studied it well.” (`audio.tsv`)
- **did:** idle on Explore banks; no CIBIL click yet
- **seeing:** `screenshots/0000.jpg`–`0004.jpg` — CIBIL **780**, required asterisk, Overview **Rate** header below
- **page/object:** Explore banks / `#hlc-cibil`
- **therefore:** the constructive direction is **Amazon-style typeahead + font-weight suggestion styling** for CIBIL entry.

- **time:** 57030–60030 ms (00:00:57–00:01:00)
- **said:** “Should I give him a drop down? You can select it.”
- **did:** still idle; same CIBIL 780 on screen
- **seeing:** `screenshots/0006.jpg`
- **therefore:** they name **dropdown selection** as the control for this same field — joins to the Amazon talk seconds earlier.

## Pinpoint
On **Explore banks**, for **CIBIL score** entry, they want an **Amazon-like typeahead dropdown** (type prefix → next scores; normal vs extra font weight for typed vs suggested text) so users **select** a score instead of entering one exact required number — because most people only know an approximate band.

## Related discussion (not the solution itself)
- `wb-rec-260815-2125` tail: same page, CIBIL 780 focused; “There are such searches on Amazon”; “if you put 766, then the drop downs are open”; “Either he should select the drop down”; “when you type F, it freezes.”
- “You have to pay so much for a PM” (~00:12) — aside about Prime, not a Shroffin feature.
- Later in this folder they also argue for **min/max ranges** (`solution-02`) — related CIBIL topic but a **second direction** (band entry vs typeahead).

## Chronology in this recording
| Clock | Speech | Action | Screenshot |
|---|---|---|---|
| 00:00:09–00:00:27 | Amazon links; font weight for typed vs suggestion | idle | 0000–0004 |
| 00:00:55 | “Why?” | idle | 0006 |
| 00:00:57–00:01:00 | Dropdown; you can select it | idle | 0006–0007 |

## Cross-recording continuation
**Continues from `wb-rec-260815-2125`.** That folder ended (~00:08:51) with CIBIL focused and Amazon typeahead vs dropdown talk. Gap ~8 s. This folder opens with Amazon link/font-weight talk, then “Should I give him a drop down?”

**Does not continue into `wb-rec-260815-2201`.** ~21 min gap; next recording is bar talk only.

## Evidence by file (every raw recorder file in the folder — no omissions)
- `_theme-cards.json`: issue theme cards; CIBIL exact vs range tagged — `related_discussion` for this finding.
- `audio.json`: 110 segments; segments 4–15 Amazon/font-weight/dropdown; language mr wrong — `supports_solution` for this finding.
- `audio.lrc`: timed lyrics-style same lines — `supports_solution` for this finding.
- `audio.srt`: Amazon links; font weight; dropdown cues 00:00:09–00:01:00 — `supports_solution` for this finding.
- `audio.text`: plain dump matches Amazon/dropdown talk — `supports_solution` for this finding.
- `audio.tsv`: ms clocks for Amazon/font-weight/dropdown speech — `supports_solution` for this finding.
- `audio.txt`: timed dump matches — `supports_solution` for this finding.
- `audio.vtt`: same cues as tsv — `supports_solution` for this finding.
- `audio.webm`: binary mic; not played — `timeline_alignment` for this finding.
- `audio_sentences.txt`: one-block transcript includes Amazon/dropdown — `supports_solution` for this finding.
- `console.json`: empty [] — `checked_no_extra_signal` for this finding.
- `events.json`: landmark lists CIBIL score* #hlc-cibil; idle until 302637 focus — `timeline_alignment` for this finding.
- `index.html`: player shell; inlined manifest/events/shots ids — `checked_no_extra_signal` for this finding.
- `manifest.json`: start_url Explore banks; 335368 ms; 40 screenshots — `timeline_alignment` for this finding.
- `pages.json`: form field CIBIL score* required text — `supports_solution` for this finding.
- `replay.spec.ts`: goto explore-banks; long idle then Other charges clicks — `timeline_alignment` for this finding.
- `screenshots/0000.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0001.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0002.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0003.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0004.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0005.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0006.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0007.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0008.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0009.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0010.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0011.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0012.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0013.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0014.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0015.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0016.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0017.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0018.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0019.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0020.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0021.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0022.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0023.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0024.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0025.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0026.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0027.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0028.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0029.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0030.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0031.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0032.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0033.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0034.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0035.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0036.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0037.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0038.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/0039.jpg`: timeline/session metadata only — `checked_no_extra_signal` for this finding.
- `screenshots/index.json`: 40 shots; 0000–0034 periodic same viewport CIBIL 780 — `timeline_alignment` for this finding.
- `tabs.json`: single tab Explore banks whole session — `timeline_alignment` for this finding.
- `viewer.css`: 660 lines generic player styles — `checked_no_extra_signal` for this finding.
- `viewer.js`: 746 lines generic Workbooks player; no session talk — `checked_no_extra_signal` for this finding.

### Helper issue files

- `issue-01-cibil-single-exact-vs-min-max-range.md`: `cross_link` / `timestamp_map` for CIBIL input defect adjacent to this direction.
- `issue-02-bank-options-one-rate-for-cibil-band.md`: `cross_link` / `timestamp_map` for Rate-column defect adjacent to solutions 03–04.
- `_coverage-ledger.json`: `not_used` (issue-run ledger; untouched).

## ASR notes
Amazon/font-weight/dropdown lines agree across srt/tsv/vtt/text/json. No conflict for this finding.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2134/solution-01-amazon-typeahead-font-weight-for-cibil",
  "solution_title": "Amazon-style typeahead and font weight for CIBIL input",
  "folder": "wb-rec-260815-2134",
  "sequence_index": 11,
  "recording_id": "1965821a-27df-4039-8e62-b268e8696a5b",
  "recording_started_at": "2026-08-15T16:04:29.489Z",
  "recording_ended_at": "2026-08-15T16:10:04.857Z",
  "duration_ms": 335368,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs CIBIL score* textbox #hlc-cibil",
  "for_topic": "How users enter CIBIL on Explore banks — borrowed Amazon search/typeahead UX",
  "pinpoint": "On Explore banks, while looking at the single CIBIL score box, they said to copy Amazon-style typeahead (type 7 → next five scores; typed amount normal font weight, suggestion extra font weight) so users select from a dropdown instead of guessing one exact number.",
  "kind": ["borrowed_pattern", "proposed_change", "idea", "user_convenience"],
  "decidedness": "leaning",
  "basis": "Users do not know an exact CIBIL; Amazon already solved progressive search with visible suggestions; they cracked Amazon links and studied that pattern.",
  "analog_source": "Amazon",
  "linked_issue_files": ["issue-01-cibil-single-exact-vs-min-max-range.md"],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2125",
  "continued_into_folder": null,
  "related_solution_files": ["solution-02-cibil-dropdown-min-max-range-psychology.md"],
  "source_files_used": ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:00:09,970 --> 00:00:27,230", "00:00:57,030 --> 00:01:00,030"],
  "event_t_ms": [205],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0006.jpg","screenshots/0034.jpg"],
  "tags": ["cibil","amazon","typeahead","dropdown","font-weight","borrowed-pattern","loan-inputs"],
  "quotes": [
    {"clock": "00:00:09,970", "text": "I have cracked all the Amazon links.", "artifact": "audio.tsv"},
    {"clock": "00:00:22,210", "text": "you keep the normal font weight.", "artifact": "audio.tsv"},
    {"clock": "00:00:25,570", "text": "you keep the extra font weight.", "artifact": "audio.tsv"},
    {"clock": "00:00:57,030", "text": "Should I give him a drop down?", "artifact": "audio.tsv"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
