# Keep one CIBIL field, default 750 so 780 users look again

Drop the old min-versus-max CIBIL debate. Keep a single CIBIL score and put 750 in front of the user.
This is for the Explore banks CIBIL score field (`#hlc-cibil`).
They wanted the person who thinks they are 780 to type 780 and then see what they are missing — a tactic for the same intelligence gap.
They said “I think we should put that in the final.”

---
solution_id: "wb-rec-260815-2206/solution-03-one-cibil-default-750-user-tries-780"
solution_title: "Keep one CIBIL field, default 750 so 780 users look again"
folder: "wb-rec-260815-2206"
sequence_index: 14
recording_id: "125a22f8-b64d-419e-9196-9126d5f613f3"
recording_started_at: "2026-08-15T16:36:16.832Z"
recording_ended_at: "2026-08-15T16:43:07.910Z"
duration_ms: 411078
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "CIBIL score field #hlc-cibil (single field showing 780 in screenshots; placeholder 780)"
for_topic: "Explore banks CIBIL input: one score, default 750, so a 780 user discovers the gap"
pinpoint: "On Explore banks, idle on the single CIBIL field showing 780, they closed min/max CIBIL, said keep only one score, put 750 so a user who thinks they are 780 will type 780 and see what they don’t have; they said put that in the final."
kind: ["proposed_change", "user_convenience"]
decidedness: "leaning"
basis: "The default 750 is a trap-door that makes the user compare their real score and notice missing values — intelligence without two CIBIL fields."
analog_source: "none"
linked_issue_files: ["issue-01-explore-banks-missing-hacks-intelligence.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-01-company-gives-loan-hacks-intelligence.md"]
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:04:47,510 --> 00:05:12,250"]
event_t_ms: [287510, 288303, 296307, 304310]
screenshot_files: ["screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg"]
tags: ["cibil","loan-inputs","proposed-change","defaults","explore-banks"]
---

## Exact solution (or idea that can also be a solution)

They closed an earlier min-versus-max CIBIL discussion and named a concrete default. Quoted `audio.srt`: “The complete discussion of the Sibyl score Whether to keep minimum or maximum. … I think let it go. Keep only one Sibyl score. … You have to put 750 to the user. Put 750 and see. And he thinks it is 780. Where have we caught him? He will go and put 780. And he will see again what values he doesn't have. … I think we should put that in the final.”

ASR Sibyl = CIBIL. The page already had one CIBIL field showing 780 (`screenshots/0037.jpg`, earlier clicks on `#hlc-cibil`). This is not “add a second CIBIL.” It is: one field; default 750; the 780 user types their score and sees the gap.

## What this is for

Explore banks CIBIL score field. Issue-01 is missing hacks overall; this file is the CIBIL-default tactic toward that intelligence.

## Why they said it that way

Default 750 “catches” someone who believes they are 780. They then overwrite 780 and notice what they lack. Convenience: one score, not min and max.

## How the files join (required)

- time: 287510–312250 ms (00:04:47–00:05:12)
  - said: drop min/max; one CIBIL; put 750; user thinks 780 and types 780 (`audio.srt`)
  - did: idle (`events.json` idle t=278303, 288303, 296307, 304310) — last CIBIL click was 104354
  - seeing: `0036.jpg`–`0039.jpg` — single CIBIL field 780, not two fields
  - where: explore-banks.html `#hlc-cibil` (placeholder 780 in events)
  - therefore: proposed default 750 on the existing single field

## Pinpoint

On Explore banks, they said keep one CIBIL score and default it to 750 so a user who thinks they are 780 will type 780 and see missing values; they wanted that in the final; screen already showed one field at 780.

## Related discussion (not the solution itself)

Immediately after: “But this place is empty” (solution-01 empty advice slot). Min/max was an earlier debate they now drop; not a second defect of this screen.

## Chronology in this recording

- 00:04:47–00:05:12 — close min/max; one score; default 750; user types 780. Shots 0036–0039.

## Cross-recording continuation

Standalone in this folder. Previous `wb-rec-260815-2204` ended on save-money advice with a CIBIL click, not min/max. Next `wb-rec-260815-2213` does not reopen this default.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — related line on one CIBIL / default 750. `related_discussion`
- `manifest.json` — URL and duration. `timeline_alignment`
- `audio.text` / `audio.txt` / `audio_sentences.txt` — Sibyl min/max / 750 / 780. `supports_solution`
- `audio.srt` — cues 96–109. `supports_solution` `timeline_alignment`
- `audio.vtt` / `audio.lrc` / `audio.tsv` — same. `timeline_alignment`
- `audio.json` — segments 96–109; Sibyl low-p. `supports_solution`
- `audio.webm` — not played. `checked_no_extra_signal`
- `events.json` — `#hlc-cibil` clicks earlier t=40772 and 104354; idle at this speech. `supports_solution` `timeline_alignment`
- `pages.json` — one CIBIL score field in Loan inputs. `supports_solution`
- `tabs.json` — same URL. `timeline_alignment`
- `console.json` — empty. `checked_no_extra_signal`
- `replay.spec.ts` — `#hlc-cibil` locators. `timeline_alignment`
- `index.html` / `viewer.js` / `viewer.css` — player chrome. `checked_no_extra_signal`
- `screenshots/index.json` — 0036–0039 times ~278–304s. `timeline_alignment`
- `screenshots/0000.jpg`–`screenshots/0035.jpg` — form with CIBIL 780 throughout; no min/max pair. `timeline_alignment`
- `screenshots/0036.jpg`–`screenshots/0039.jpg` — idle during the default-750 talk. `supports_solution`
- `screenshots/0040.jpg`–`screenshots/0051.jpg` — later empty-place / table. `checked_no_extra_signal`

### Helper issue files

- `issue-01-explore-banks-missing-hacks-intelligence.md` — `timestamp_map` `cross_link` (related discussion closed min/max).

## ASR notes

`Sibyl` / `civil` → CIBIL via `#hlc-cibil` and label “CIBIL score.” Screen shows one field, matching “keep only one.”

## JSON
```json
{
  "solution_id": "wb-rec-260815-2206/solution-03-one-cibil-default-750-user-tries-780",
  "solution_title": "Keep one CIBIL field, default 750 so 780 users look again",
  "folder": "wb-rec-260815-2206",
  "sequence_index": 14,
  "recording_id": "125a22f8-b64d-419e-9196-9126d5f613f3",
  "recording_started_at": "2026-08-15T16:36:16.832Z",
  "recording_ended_at": "2026-08-15T16:43:07.910Z",
  "duration_ms": 411078,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "CIBIL score field #hlc-cibil (single field showing 780 in screenshots; placeholder 780)",
  "for_topic": "Explore banks CIBIL input: one score, default 750, so a 780 user discovers the gap",
  "pinpoint": "On Explore banks, idle on the single CIBIL field showing 780, they closed min/max CIBIL, said keep only one score, put 750 so a user who thinks they are 780 will type 780 and see what they don’t have; they said put that in the final.",
  "kind": ["proposed_change", "user_convenience"],
  "decidedness": "leaning",
  "basis": "The default 750 is a trap-door that makes the user compare their real score and notice missing values — intelligence without two CIBIL fields.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-explore-banks-missing-hacks-intelligence.md"],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-01-company-gives-loan-hacks-intelligence.md"],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:04:47,510 --> 00:05:12,250"],
  "event_t_ms": [287510, 288303, 296307, 304310],
  "screenshot_files": ["screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg"],
  "tags": ["cibil","loan-inputs","proposed-change","defaults","explore-banks"],
  "quotes": [
    {"clock": "00:04:54,990", "text": "Keep only one Sibyl score.", "artifact": "audio.srt"},
    {"clock": "00:04:57,770", "text": "You have to put 750 to the user.", "artifact": "audio.srt"},
    {"clock": "00:05:11,070", "text": "I think we should put that in the final.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 40772, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 104354, "name": "CIBIL score", "css": "#hlc-cibil"}
  ],
  "related_discussion_present": true
}
```
