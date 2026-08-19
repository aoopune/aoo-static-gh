# Property check copy never says the bank will not accept your own report

On Explore banks → Charges they opened Indian Bank’s property-check drawer.
The drawer lists Legal and technical, Title search, and Valuation, plus an industry-average disclaimer.
It never says the bank still does its own check and will not take a report the customer already paid for.
They said even if your brother is a lawyer and the title is already clear, the bank will not accept that report.

---
issue_id: "wb-rec-260816-0004/issue-02-property-check-copy-omits-bank-wont-accept-own-report"
issue_title: "Property check copy never says the bank will not accept your own report"
folder: "wb-rec-260816-0004"
sequence_index: 27
recording_id: "08aa721b-3f2e-484c-b39e-58b789d21095"
recording_started_at: "2026-08-15T18:34:46.547Z"
recording_ended_at: "2026-08-15T18:43:30.319Z"
duration_ms: 523772
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Property check charges drawer for Indian Bank · IB Home Loan (Legal and technical / Title search report / Valuation)"
pinpoint: "The property-check drawer copy lists the three checks and an industry-average disclaimer but never states that the bank will still run its own check and will not accept a report the customer already obtained."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files:
  - "issue-04-charges-drawer-step-bars-too-narrow-dont-wrap.md"
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
  - "screenshots/0014.png"
  - "screenshots/0015.png"
  - "screenshots/0016.png"
  - "screenshots/0017.png"
  - "screenshots/0018.png"
  - "screenshots/0019.png"
  - "screenshots/0020.png"
  - "screenshots/0021.png"
  - "screenshots/0022.png"
  - "screenshots/0028.png"
  - "screenshots/0030.png"
speech_clock:
  - "00:02:00,500 --> 00:03:09,210"
event_t_ms: [120329, 128253, 132671, 259486]
screenshot_files:
  - "screenshots/0014.png"
  - "screenshots/0015.png"
  - "screenshots/0016.png"
  - "screenshots/0021.png"
tags: ["copy", "charges", "property-check", "trust", "mandatory"]
---

## Exact issue

On Explore banks Charges they opened **Show how property check charges for Indian Bank was calculated** (₹13,300) at t=128253 ms. The drawer (screenshots/0015.png–0030.png) shows:

1. Legal and technical ₹4,000  
2. Title search report ₹4,400  
3. Valuation ₹4,900  
Total ₹13,300  

Footer: “Typical industry average for legal, title-search, and valuation checks. GST is extra. Exact fees may differ by lender.”

They said they already checked the property; “my brother is my lawyer”; legal and technical means title search; title is already clear — and still **this is mandatory**, **the bank does it**, **even if you have done it, the report will not be accepted by the bank**. That sentence is not on the drawer.

Quote (audio.srt): “Even if you have done it, the report will not be accepted by the bank.” / “This is mandatory. The bank does it.”

## How the files join

- time: 128253 ms click; speech 120500–189210 ms
- said: property check; legal and technical; brother is lawyer; TSR; title clear; mandatory; bank won’t accept your report
- did: click Indian Bank property-check ₹13,300; click a span inside the first drawer step
- seeing: three numbered cards + industry-average disclaimer; no “bank’s own panel / own report not accepted”
- page/object: Explore banks; property-check drawer Indian Bank · IB Home Loan
- therefore: copy omits that the customer’s own report is not accepted

## Pinpoint

Indian Bank property-check drawer on Explore banks Charges never tells the user that the bank will still do legal/technical, title search, and valuation itself and will not accept a report the customer already paid for.

## Related discussion

They said the first job of the site is to help the customer save money, and “don’t worry, we have the same page.” They called this one of the cheapest fees, then analogized Google Flights / “search and check,” sitting in a chair, needing a comfortable table, and that if you are a broker they can still do broker work because “intelligence has become cheap.” That talk is about giving useful advice on this charge, not a second defect. Later SBI and Punjab & Sind property-check drawers (issue-04) use the same three-step copy without the “won’t accept your report” line.

## Chronology in this recording

- 02:00 “Property check charge. I know how much.”
- 02:08 click Indian Bank ₹13,300; drawer opens (0015).
- 02:10–02:47 legal/technical, lawyer, TSR, mandatory, bank won’t accept own report, customer must be fully informed.
- 02:52–03:09 save money; same page.
- 04:19 close drawer (t=259486) after a long idle on the same drawer.

## Cross-recording continuation

Standalone in this folder. Previous recording ended on processing-fee notes/drawer, not property-check copy. Next recording reopens an SBI property-check drawer then moves to stamp duty / government charges — a new topic.

## Evidence by file

- `manifest.json` / `tabs.json` / `pages.json`: stay on explore-banks.html; headings include Processing fee / Charges. timeline_alignment
- `audio.srt` cues 40–61 (120.5s–189.2s). supports_issue
- `audio.tsv` / `audio.vtt` / `audio.txt` / `audio.text` / `audio.lrc` / `audio_sentences.txt`: same. timeline_alignment
- `audio.json`: words “Legal”, “lawyer”, “Title”, “mandatory”, “accepted” with usable probability. supports_issue
- `audio.webm`: not listened. checked_no_extra_signal
- `events.json`: click t=128253 Indian Bank property check ₹13,300; inner click t=132671; close t=259486. supports_issue
- `replay.spec.ts`: `Show how property check charges for Indian Bank was calculated`. supports_issue
- `console.json`: empty. checked_no_extra_signal
- `index.html` / `viewer.js` / `viewer.css`: player only. checked_no_extra_signal
- `screenshots/0014.png`: table before click, Indian Bank property check ₹13,300 visible. timeline_alignment
- `screenshots/0015.png`–`0030.png`: drawer with three steps + industry-average footer, no “won’t accept own report.” supports_issue
- other files: checked_no_extra_signal for this issue

## ASR notes

srt/tsv/vtt/text agree. lrc: “Property check charge. I know how much.” Chosen reading: **title search report** (on-screen “Title search report”) not “guidance search.” “be fully proofed” kept raw; likely “fully informed / fully proved.” “function” is not in this stretch.

## JSON

```json
{
  "issue_id": "wb-rec-260816-0004/issue-02-property-check-copy-omits-bank-wont-accept-own-report",
  "issue_title": "Property check copy never says the bank will not accept your own report",
  "folder": "wb-rec-260816-0004",
  "sequence_index": 27,
  "recording_id": "08aa721b-3f2e-484c-b39e-58b789d21095",
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "on_screen_object": "Indian Bank property-check charges drawer",
  "pinpoint": "Drawer lists three checks and an average disclaimer but never says the bank will not accept the customer's own report.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "speech_clock": ["00:02:00,500 --> 00:03:09,210"],
  "event_t_ms": [128253, 132671, 259486],
  "screenshot_files": ["screenshots/0015.png", "screenshots/0016.png"],
  "tags": ["copy", "property-check", "trust"],
  "quotes": [
    {"clock": "00:02:31", "text": "This is mandatory.", "artifact": "audio.srt"},
    {"clock": "00:02:38", "text": "the report will not be accepted by the bank.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 128253, "name": "Show how property check charges for Indian Bank was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(3) > button"}],
  "related_discussion_present": true
}
```
