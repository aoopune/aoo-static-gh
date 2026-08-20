# Show each loan field's importance with stars, meter, or tiered cards

Each loan question on Explore banks should show how much it matters — stars, a color meter, or a score like 10/10.
FOIR is their example of a weaker field: it only nudges the rate a little, not the whole loan.
They also sketched tiered cards: a small red card with big type for what matters most, then quieter second- and third-level cards.
They rejected grouping each field to only one output because one answer can move amount, rate, tenure, and charges at once.

---
solution_id: "wb-rec-260815-2304/solution-02-show-column-importance-stars-meter-tiered-cards"
solution_title: "Show each loan field's importance with stars, meter, or tiered cards"
folder: "wb-rec-260815-2304"
sequence_index: 21
recording_id: "6033ef99-94cd-427e-b722-e831e6342b86"
recording_started_at: "2026-08-15T17:34:55.529Z"
recording_ended_at: "2026-08-15T17:43:48.848Z"
duration_ms: 533319
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs fields (Monthly income, Property agreement value, Age, CIBIL, Occupation, Purpose, Adjust eligibility extras including FOIR)"
for_topic: "Each loan form column on Explore banks should visibly show how much it matters to the loan — not equal weight for all ten fields"
pinpoint: "On Explore banks, they asked for stars, a red-orange-green meter, or a 10/10 score on each column, then the same idea as tiered cards (small red big-type for most important, quieter second and third levels); FOIR is the weak example because rate only nudges a little."
kind: ["proposed_change", "idea", "user_convenience"]
decidedness: "decided"
basis: "People skip fields when usefulness is unknown; even ten pre-filled columns need unequal importance; form should teach what moves loan amount, rate, and tenure; one field can affect all outputs so 1:1 sectioning fails"
analog_source: "none"
linked_issue_files: ["issue-02-loan-form-fields-lack-importance-indication.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2313"
related_solution_files: ["solution-01-extra-eligibility-prefilled-columns-tooltips-no-mandatory.md", "solution-03-rename-see-options-compare-banks-page-title.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:00:32,050 --> 00:01:05,690", "00:01:26,330 --> 00:01:33,930", "00:04:30,980 --> 00:05:20,180", "00:05:38,340 --> 00:08:52,590"]
event_t_ms: [37351, 72598, 72979, 73499, 73765, 74165, 74609, 129387, 299141, 337369, 421936, 426703, 485830, 504972, 505612, 511487]
screenshot_files: ["screenshots/0005.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0019.jpg", "screenshots/0040.jpg", "screenshots/0046.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0065.jpg"]
tags: ["form", "layout", "importance", "education", "eligibility"]
---

## Exact solution (or idea that can also be a solution)

On Explore banks, every Loan inputs column currently looks equally important. They asked for a visible mark of how much each column matters to the loan: **stars**, a **meter (red / orange / green)**, or a **score (10 on 10, 8 on 10)** — “tell me how important this column is.” Later they described the same idea as **tiered cards**: “this is a small card. Most important. This is red… Font is big,” then “this is the second level card,” then “this is the third level card.” **FOIR** is the worked example of a weaker field: “I don't know the foyer. But this is not that important” — if they said 8.5, adding more FOIR might make 8.4 or 8.6 (rate nudge only).

Even when all ten columns are pre-filled (solution-01), each still needs its own importance signal: “10 on 10 is the consequence; some columns are less consequential.” The form should teach what moves the loan: property agreement value → loan amount; age and CIBIL → interest rate; age / occupation / purpose → tenure; one field can hit rate, amount, tenure, and charges, so **1:1 vertical-tab sectioning does not work** (“Then there is no sectioning”). Importance marks replace failed grouping.

## What this is for

The Loan inputs grid on Explore banks — six primary fields plus Adjust eligibility extras (FOIR as weak example). Issue file `issue-02-loan-form-fields-lack-importance-indication.md` names the defect; this file is the direction they gave.

## Why they said it that way

Usefulness: people skip fields at the start when they do not know if filling helps; importance marks answer that without hiding fields. Education: filling the form should make the user intelligent about what moves money, rate, and tenure. Honesty about weak fields (FOIR) prevents false urgency. Layout: when effects overlap, visual importance beats fake sections.

## How the files join (required)

- time: 32050–65690 ms (`00:00:32,050`–`00:01:05,690`)
- said: need indication how important this column is; stars; meter red/orange/green; score 10/10 or 8/10 (`audio.srt`)
- doing: click Monthly income 37351 ms
- seeing: `screenshots/0005.jpg` — six primary fields, equal (i) icons, no stars/meter/score
- page/object: Loan inputs primary grid
- therefore: add per-column importance marks

- time: 86330–93930 ms (`00:01:26,330`–`00:01:33,930`)
- said: ten columns; 10/10 consequence; some less consequential
- doing: clicks Age, CIBIL, Salaried, Top-up 72979–74609 ms
- seeing: `screenshots/0010.jpg`–`0012.jpg` — equal-weight grid during 6+4 talk
- therefore: importance needed even when all columns visible

- time: 270980–320180 ms (`00:04:30,980`–`00:05:20,180`)
- said: small red big-type card most important; second/third level cards; FOIR not that important
- doing: FOIR click 299141 ms; collapse Adjust eligibility 337369 ms
- seeing: `screenshots/0040.jpg`, `0046.jpg` — FOIR 55% default; collapsed extras still equal primary weight
- therefore: tiered card visual hierarchy; FOIR should look weaker

- time: 338340–532590 ms (`00:05:38,340`–`00:08:52,590`)
- said: property value → amount; rate ← age/CIBIL; tenure ← age/occupation/purpose; sectioning big issue; vertical tabs tried; one field affects all → no sectioning
- doing: Monthly income 421936 ms; Overview tab 426703 ms; Property agreement value 485830 ms
- seeing: `screenshots/0056.jpg`, `0057.jpg`, `0065.jpg` — results shell + form during grouping walk
- therefore: show importance without false 1:1 grouping; talk continues in next folder

## Pinpoint

On Explore banks, while every Loan inputs field looks the same, they asked for stars, a color meter, or a 10/10 score on each column, then tiered cards (red big-type for most important, quieter lower levels), with FOIR as the weak example — so users know which answers are worth filling and the form teaches what moves amount, rate, and tenure without broken sectioning.

## Related discussion (not the solution itself)

- Pre-filled ten columns and consequence tooltips (solution-01) — visibility without equal importance.
- “10 on 10 is the consequence” overlaps tooltip payoff language.
- Future credit pull / “we won't keep anything” while pointing at FOIR — trust, not a separate page fix.
- “AI native” / vertical tabs sketch (tenure two cards, rate one card) — brainstorm they dropped.
- Processing fees / salary / self-employed as more effects beyond rate/amount/tenure.
- Next recording (`wb-rec-260815-2313`): top-to-bottom = money/rate/tenure; left-to-right = column importance; colors and order.

## Chronology in this recording

- **00:00:32–00:01:05** — Stars / meter / score ask. Click Monthly income 37351 ms (`0005.jpg`).
- **00:01:09–00:01:33** — Ten columns; unequal consequence. Clicks through grid (`0010.jpg`–`0012.jpg`).
- **00:02:46–00:03:31** — Button/page naming (solution-03); idle.
- **00:04:30–00:05:20** — Tiered cards; FOIR weak. FOIR click 299141 ms (`0040.jpg`).
- **00:05:38–00:08:52** — Field→output mapping; sectioning rejected. Clicks Overview, Property value (`0056.jpg`, `0057.jpg`, `0065.jpg`). Unfinished at end.

## Cross-recording continuation

**From previous:** `wb-rec-260815-2302` ended on trust/extras/Co-applicant, not importance marks. This importance talk starts fresh at 00:00:32.

**Into `wb-rec-260815-2313` (~2 s gap).** Next opens: top-to-bottom money/rate/tenure; left-to-right column importance; filling form should make user intelligent; colors and sequencing. Same Loan inputs card — continuation of this solution, not a new direction.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — issue-run theme card index; names three topics; map only. Used for: checked_no_extra_signal.
- `audio.json` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.lrc` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.srt` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.text` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.tsv` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.txt` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.vtt` — speech/transcript artifact read; cues joined to clicks and screenshots. Used for: supports_solution, timeline_alignment.
- `audio.webm` — 8584153 bytes binary mic; not played; text artifacts used. Used for: checked_no_extra_signal.
- `audio_sentences.txt` — sentence-level transcript including solution talk. Used for: supports_solution, timeline_alignment.
- `console.json` — empty []; no console errors captured. Used for: checked_no_extra_signal.
- `events.json` — 129 events with t_ms; clicks on form fields aligned to speech. Used for: supports_solution, timeline_alignment.
- `index.html` — replay player shell; inlined session id; no extra discussion. Used for: checked_no_extra_signal.
- `manifest.json` — id 6033ef99-94cd-427e-b722-e831e6342b86; explore-banks.html; 533319 ms; 73 shots; 129 events. Used for: timeline_alignment.
- `pages.json` — Explore banks title; Loan inputs field names; See options button. Used for: supports_solution.
- `replay.spec.ts` — Playwright replay mirroring click path and idle gaps. Used for: timeline_alignment.
- `screenshots/0000.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0001.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0002.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0003.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0004.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0005.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0006.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0007.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0008.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0009.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0010.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0011.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0012.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0013.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0014.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0015.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0016.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0017.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0018.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0019.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0020.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0021.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0022.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0023.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0024.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0025.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0026.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0027.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0028.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0029.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0030.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0031.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0032.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0033.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0034.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0035.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0036.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0037.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0038.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0039.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0040.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0041.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0042.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0043.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0044.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0045.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0046.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0047.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0048.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0049.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0050.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0051.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0052.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0053.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0054.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0055.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0056.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0057.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0058.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0059.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0060.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0061.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0062.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0063.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0064.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0065.jpg` — shot t from index; equal-weight fields; FOIR weak example; grouping walk. Used for: supports_solution.
- `screenshots/0066.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0067.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0068.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0069.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0070.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0071.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/0072.jpg` — shot t from index; Loan inputs grid; no stars/meter/score visible. Used for: timeline_alignment.
- `screenshots/index.json` — 73 shots with t and reason; shot clock for joins. Used for: timeline_alignment.
- `tabs.json` — single tab on explore-banks.html whole session. Used for: timeline_alignment.
- `viewer.css` — generic replay player chrome; no session-specific talk. Used for: checked_no_extra_signal.
- `viewer.js` — generic replay player chrome; no session-specific talk. Used for: checked_no_extra_signal.

## ASR notes

“foyer” / “fire ratio” = FOIR (on-screen Share of income for EMIs / FOIR). “civil score” = CIBIL. “sectioning” consistent across artifacts. `audio.json` language `mr` is wrong.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2304/solution-02-show-column-importance-stars-meter-tiered-cards",
  "solution_title": "Show each loan field's importance with stars, meter, or tiered cards",
  "folder": "wb-rec-260815-2304",
  "sequence_index": 21,
  "recording_id": "6033ef99-94cd-427e-b722-e831e6342b86",
  "recording_started_at": "2026-08-15T17:34:55.529Z",
  "recording_ended_at": "2026-08-15T17:43:48.848Z",
  "duration_ms": 533319,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "Loan inputs fields (Monthly income, Property agreement value, Age, CIBIL, Occupation, Purpose, Adjust eligibility extras including FOIR)",
  "for_topic": "Each loan form column on Explore banks should visibly show how much it matters to the loan \u2014 not equal weight for all ten fields",
  "pinpoint": "On Explore banks, they asked for stars, a red-orange-green meter, or a 10/10 score on each column, then the same idea as tiered cards (small red big-type for most important, quieter second and third levels); FOIR is the weak example because rate only nudges a little.",
  "kind": [
    "proposed_change",
    "idea",
    "user_convenience"
  ],
  "decidedness": "decided",
  "basis": "People skip fields when usefulness is unknown; even ten pre-filled columns need unequal importance; form should teach what moves loan amount, rate, and tenure; one field can affect all outputs so 1:1 sectioning fails",
  "analog_source": "none",
  "linked_issue_files": [
    "issue-02-loan-form-fields-lack-importance-indication.md"
  ],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2313",
  "related_solution_files": [
    "solution-01-extra-eligibility-prefilled-columns-tooltips-no-mandatory.md",
    "solution-03-rename-see-options-compare-banks-page-title.md"
  ],
  "source_files_used": [
    "_theme-cards.json",
    "audio.json",
    "audio.lrc",
    "audio.srt",
    "audio.text",
    "audio.tsv",
    "audio.txt",
    "audio.vtt",
    "audio.webm",
    "audio_sentences.txt",
    "console.json",
    "events.json",
    "index.html",
    "manifest.json",
    "pages.json",
    "replay.spec.ts",
    "screenshots/0000.jpg",
    "screenshots/0001.jpg",
    "screenshots/0002.jpg",
    "screenshots/0003.jpg",
    "screenshots/0004.jpg",
    "screenshots/0005.jpg",
    "screenshots/0006.jpg",
    "screenshots/0007.jpg",
    "screenshots/0008.jpg",
    "screenshots/0009.jpg",
    "screenshots/0010.jpg",
    "screenshots/0011.jpg",
    "screenshots/0012.jpg",
    "screenshots/0013.jpg",
    "screenshots/0014.jpg",
    "screenshots/0015.jpg",
    "screenshots/0016.jpg",
    "screenshots/0017.jpg",
    "screenshots/0018.jpg",
    "screenshots/0019.jpg",
    "screenshots/0020.jpg",
    "screenshots/0021.jpg",
    "screenshots/0022.jpg",
    "screenshots/0023.jpg",
    "screenshots/0024.jpg",
    "screenshots/0025.jpg",
    "screenshots/0026.jpg",
    "screenshots/0027.jpg",
    "screenshots/0028.jpg",
    "screenshots/0029.jpg",
    "screenshots/0030.jpg",
    "screenshots/0031.jpg",
    "screenshots/0032.jpg",
    "screenshots/0033.jpg",
    "screenshots/0034.jpg",
    "screenshots/0035.jpg",
    "screenshots/0036.jpg",
    "screenshots/0037.jpg",
    "screenshots/0038.jpg",
    "screenshots/0039.jpg",
    "screenshots/0040.jpg",
    "screenshots/0041.jpg",
    "screenshots/0042.jpg",
    "screenshots/0043.jpg",
    "screenshots/0044.jpg",
    "screenshots/0045.jpg",
    "screenshots/0046.jpg",
    "screenshots/0047.jpg",
    "screenshots/0048.jpg",
    "screenshots/0049.jpg",
    "screenshots/0050.jpg",
    "screenshots/0051.jpg",
    "screenshots/0052.jpg",
    "screenshots/0053.jpg",
    "screenshots/0054.jpg",
    "screenshots/0055.jpg",
    "screenshots/0056.jpg",
    "screenshots/0057.jpg",
    "screenshots/0058.jpg",
    "screenshots/0059.jpg",
    "screenshots/0060.jpg",
    "screenshots/0061.jpg",
    "screenshots/0062.jpg",
    "screenshots/0063.jpg",
    "screenshots/0064.jpg",
    "screenshots/0065.jpg",
    "screenshots/0066.jpg",
    "screenshots/0067.jpg",
    "screenshots/0068.jpg",
    "screenshots/0069.jpg",
    "screenshots/0070.jpg",
    "screenshots/0071.jpg",
    "screenshots/0072.jpg",
    "screenshots/index.json",
    "tabs.json",
    "viewer.css",
    "viewer.js"
  ],
  "speech_clock": [
    "00:00:32,050 --> 00:01:05,690",
    "00:01:26,330 --> 00:01:33,930",
    "00:04:30,980 --> 00:05:20,180",
    "00:05:38,340 --> 00:08:52,590"
  ],
  "event_t_ms": [
    37351,
    72598,
    72979,
    73499,
    73765,
    74165,
    74609,
    129387,
    299141,
    337369,
    421936,
    426703,
    485830,
    504972,
    505612,
    511487
  ],
  "screenshot_files": [
    "screenshots/0005.jpg",
    "screenshots/0010.jpg",
    "screenshots/0011.jpg",
    "screenshots/0012.jpg",
    "screenshots/0019.jpg",
    "screenshots/0040.jpg",
    "screenshots/0046.jpg",
    "screenshots/0056.jpg",
    "screenshots/0057.jpg",
    "screenshots/0065.jpg"
  ],
  "tags": [
    "form",
    "layout",
    "importance",
    "education",
    "eligibility"
  ],
  "quotes": [
    {
      "clock": "00:00:32,050",
      "text": "And somewhere, I need an indication that how important is this column to my loan application.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:00:46,270",
      "text": "Maybe you can give it stars.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:00:50,190",
      "text": "Red, orange, green",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:04:37,540",
      "text": "this is a small card. Most important.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:04:58,400",
      "text": "I don't know the foyer. But this is not that important.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:08:13,090",
      "text": "Then there is no sectioning.",
      "artifact": "audio.srt"
    }
  ],
  "clicks": [
    {
      "t_ms": 37351,
      "name": "Monthly income*",
      "css": "#hlc-monthly-income"
    },
    {
      "t_ms": 129387,
      "name": "Share of income for EMIs /FOIR",
      "css": "#hlc-foir"
    },
    {
      "t_ms": 299141,
      "name": "Share of income for EMIs /FOIR",
      "css": "#hlc-foir"
    },
    {
      "t_ms": 426703,
      "name": "Overview",
      "css": "section#hlc-results-shell button:nth-of-type(1)"
    },
    {
      "t_ms": 485830,
      "name": "Property agreement value*",
      "css": "#hlc-property-value"
    }
  ],
  "related_discussion_present": true
}
```
