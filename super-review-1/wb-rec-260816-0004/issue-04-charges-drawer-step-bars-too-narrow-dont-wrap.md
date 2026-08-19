# Charges drawer step bars are too narrow and do not wrap

On Explore banks they opened property-check drawers (SBI, then Punjab & Sind) and later a loan-amount drawer.
Those drawers stack numbered steps (1, 2, 3, 4…) in a single skinny column.
They said the bar is small; if 1–2–3–4 try to sit in that width they will split; steps should come down one after another and flow.
They showed the same pattern on the loan-amount drawer and called it a repeatable, external layout — not a one-off.

---
issue_id: "wb-rec-260816-0004/issue-04-charges-drawer-step-bars-too-narrow-dont-wrap"
issue_title: "Charges drawer step bars are too narrow and do not wrap"
folder: "wb-rec-260816-0004"
sequence_index: 27
recording_id: "08aa721b-3f2e-484c-b39e-58b789d21095"
recording_started_at: "2026-08-15T18:34:46.547Z"
recording_ended_at: "2026-08-15T18:43:30.319Z"
duration_ms: 523772
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Numbered step cards in property-check and loan-amount drawers (1 Legal and technical, 2 Title search, 3 Valuation, 4 Total; and 1–6 on loan amount)"
pinpoint: "Numbered step bars in the charges/loan-amount drawers are a single narrow column that does not wrap, so 1–2–3–4 crowd or split instead of flowing down one after another."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files:
  - "issue-02-property-check-copy-omits-bank-wont-accept-own-report.md"
source_files_used:
  - "manifest.json"
  - "audio.json"
  - "audio.lrc"
  - "audio.srt"
  - "audio.text"
  - "audio.tsv"
  - "audio.txt"
  - "audio.vtt"
  - "audio.webm"
  - "audio_sentences.txt"
  - "console.json"
  - "events.json"
  - "index.html"
  - "pages.json"
  - "replay.spec.ts"
  - "tabs.json"
  - "viewer.css"
  - "viewer.js"
  - "screenshots/index.json"
  - "screenshots/0055.png"
  - "screenshots/0056.png"
  - "screenshots/0057.png"
  - "screenshots/0061.png"
  - "screenshots/0062.png"
  - "screenshots/0063.png"
  - "screenshots/0066.png"
  - "screenshots/0067.png"
  - "screenshots/0068.png"
  - "screenshots/0069.png"
  - "screenshots/0070.png"
speech_clock:
  - "00:07:00,580 --> 00:08:38,830"
event_t_ms: [421377, 452524, 463712, 483158, 485276, 487013, 521703]
screenshot_files:
  - "screenshots/0056.png"
  - "screenshots/0061.png"
  - "screenshots/0066.png"
  - "screenshots/0069.png"
tags: ["layout", "drawer", "spacing", "wrap", "charges"]
---

## Exact issue

After closing IDFC FIRST they opened **SBI property check ₹15,100** (t=421377) then **Punjab & Sind property check ₹14,700** (t=463712). Drawers show numbered cards stacked in a narrow right column: 1 Legal and technical, 2 Title search report, 3 Valuation, 4 Total (0056, 0061).

They said: “This bar / 1, 2, 3, put one at a time. And this bar is small. This is the width of the bar. If it is the width, 1, 2, 3, 4, it will split.” They rejected putting the standard on the side of the panel. They wanted 1–2–3–4 to **come down** with a line, wrap/flow, and sit even if width is less.

They then clicked Overview and opened **Punjab & Sind loan amount ₹48,00,000** (six numbered steps, 0066–0070) and said the same thing happens there: “How many blocks is this? It is an external thing. It is a repeatable thing.” / “It will flow.”

Quote (audio.srt): “And this bar is small.” / “If it is the width, 1, 2, 3, 4, it will split.” / “1, 2, 3, 4, 5, it will come down one by one.” / “It will flow.”

## How the files join

- time: 421377–521703 ms; speech 420580–518830 ms
- said: bar small; 1–2–3–4 will split; wrap down; same on this drawer; repeatable; flow
- did: SBI property-check drawer; Punjab & Sind property-check; Overview tab; Punjab & Sind loan-amount drawer
- seeing: skinny numbered step stack in every drawer
- therefore: step bars too narrow and don’t wrap — a shared drawer layout, not one bank

## Pinpoint

Numbered step bars in Explore banks charge/loan-amount drawers are too narrow and do not wrap, so steps 1–2–3–4 split instead of flowing down one by one.

## Related discussion

They said keep the standard on the side of the panel — then “No.” They used “2 is here, put a line like this” as a wrap sketch. “If the mat is normal from the top” is treated as **width** (ASR), because they are talking about the bar’s width. Indian Bank’s earlier property-check drawer (issue-02) used the same stacked steps; they only attacked the layout here.

## Chronology in this recording

- 07:00 Property check charges and technical / title search.
- 07:01 click SBI ₹15,100; 07:13–07:39 bar small, will split, don’t put one-at-a-time as the only layout.
- 07:32 close SBI; 07:43 click Punjab & Sind ₹14,700; wrap would be easy.
- 08:03 same thing here; 08:05 close; Overview; loan-amount drawer; 08:17 how many blocks; 08:21 repeatable; 08:23–08:38 come down one by one; if width less, ok; it will flow.
- 08:41 click backdrop (recording ends).

## Cross-recording continuation

Standalone for this defect. Next recording **wb-rec-260816-0013** starts “It is not a problem. It is stamp duty” and opens government-charges drawers — a new issue, not wrap. Previous recording did not discuss step-bar wrap.

## Evidence by file

- `events.json`: SBI property check t=421377; Punjab & Sind property check t=463712; Overview t=485276; loan amount t=487013. supports_issue
- `replay.spec.ts`: same locators plus `#hlc-drawer-backdrop`. supports_issue
- `audio.srt` cues 130–169. supports_issue
- `audio.tsv` / vtt / txt / text / lrc / sentences: “It will flow.” twice at end. timeline_alignment
- `audio.json`: “bar”, “split”, “width”, “flow”; “mat” low probability 0.11. asr_notes
- `screenshots/0055.png`–`0058.png`: SBI drawer stacked 1–4. supports_issue
- `screenshots/0061.png`–`0063.png`: Punjab & Sind same stack. supports_issue
- `screenshots/0065.png`: Overview after tab click. timeline_alignment
- `screenshots/0066.png`–`0070.png`: loan-amount 1–6 same narrow stack. supports_issue
- `screenshots/0071.png`: backdrop close. timeline_alignment
- `pages.json` / `tabs.json` / `manifest.json`: same URL. timeline_alignment
- `console.json` / viewers / `audio.webm`: checked_no_extra_signal

## ASR notes

“This bar is small” / “width of the bar” / “it will split” consistent across srt/tsv/vtt. “mat is normal from the top” (srt) vs likely **width**; chosen because they have been talking about bar width and wrap. “sequentialities” kept raw; means the numbered sequence. “guidance search” earlier in this minute is title search (on-screen).

## JSON

```json
{
  "issue_id": "wb-rec-260816-0004/issue-04-charges-drawer-step-bars-too-narrow-dont-wrap",
  "issue_title": "Charges drawer step bars are too narrow and do not wrap",
  "folder": "wb-rec-260816-0004",
  "sequence_index": 27,
  "recording_id": "08aa721b-3f2e-484c-b39e-58b789d21095",
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "on_screen_object": "Numbered step cards in property-check and loan-amount drawers",
  "pinpoint": "Step bars are a single narrow column that does not wrap, so 1-2-3-4 split instead of flowing down.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "speech_clock": ["00:07:00,580 --> 00:08:38,830"],
  "event_t_ms": [421377, 463712, 485276, 487013],
  "screenshot_files": ["screenshots/0056.png", "screenshots/0061.png", "screenshots/0066.png"],
  "tags": ["layout", "drawer", "wrap"],
  "quotes": [
    {"clock": "00:07:19", "text": "And this bar is small.", "artifact": "audio.srt"},
    {"clock": "00:07:28", "text": "it will split.", "artifact": "audio.srt"},
    {"clock": "00:08:35", "text": "It will flow.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 421377, "name": "Show how property check charges for State Bank of India was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(14) > td:nth-of-type(3) > button"},
    {"t_ms": 487013, "name": "Show how loan amount for Punjab & Sind Bank was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(11) > td:nth-of-type(3) > button"}
  ],
  "related_discussion_present": true
}
```
