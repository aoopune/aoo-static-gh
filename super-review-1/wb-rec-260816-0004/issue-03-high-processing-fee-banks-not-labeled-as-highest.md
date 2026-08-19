# High processing-fee banks are not labeled as among the highest

On Explore banks → Charges they opened Canara (₹10,000 cap), DCB (₹96,000), and IDFC FIRST (₹1,44,000).
Those rows only show the rupee amount and a calculation drawer.
They said the site must write that these banks are among the highest for processing fees in the market.
IDFC FIRST at 3% / ₹1,44,000 was called out as known for the highest processing fee in the whole market — with no such label on screen.

---
issue_id: "wb-rec-260816-0004/issue-03-high-processing-fee-banks-not-labeled-as-highest"
issue_title: "High processing-fee banks are not labeled as among the highest"
folder: "wb-rec-260816-0004"
sequence_index: 27
recording_id: "08aa721b-3f2e-484c-b39e-58b789d21095"
recording_started_at: "2026-08-15T18:34:46.547Z"
recording_ended_at: "2026-08-15T18:43:30.319Z"
duration_ms: 523772
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Processing fee cells and drawers for Canara Bank ₹10,000, DCB Bank ₹96,000, IDFC FIRST Bank ₹1,44,000"
pinpoint: "High processing-fee banks are shown only as rupee amounts (Canara capped ₹10,000, DCB 2% ₹96,000, IDFC FIRST 3% ₹1,44,000) with no on-screen label that they are among the highest processing-fee lenders in the market."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files:
  - "issue-01-processing-fee-star-note-missing-definition-mandatory-guide.md"
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
  - "screenshots/0033.png"
  - "screenshots/0034.png"
  - "screenshots/0035.png"
  - "screenshots/0036.png"
  - "screenshots/0040.png"
  - "screenshots/0041.png"
  - "screenshots/0045.png"
  - "screenshots/0051.png"
  - "screenshots/0052.png"
  - "screenshots/0053.png"
speech_clock:
  - "00:04:26,980 --> 00:06:53,850"
event_t_ms: [268510, 283266, 283874, 292473, 310821, 314438, 362126, 391256, 413154]
screenshot_files:
  - "screenshots/0033.png"
  - "screenshots/0040.png"
  - "screenshots/0051.png"
tags: ["copy", "charges", "processing-fee", "ranking", "intelligence"]
---

## Exact issue

On Explore banks Charges they opened three high processing-fee banks in a row:

- Canara Bank ₹10,000 — 0.50% of ₹48,00,000 = ₹24,000 then **capped at bank maximum ₹10,000** (0033–0036).
- DCB Bank ₹96,000 — 2.00% of ₹48,00,000 (0040–0046).
- IDFC FIRST Bank ₹1,44,000 — 3.00% of ₹48,00,000 (0051–0053).

They said if they want to save they already know how (₹2,000 vs reality ₹10,000), and then: **“you have to write that these banks are one of the highest who charge processing fees.”** On IDFC FIRST: **“This bank is known for the highest amount of processing fees in the whole market.”** No such label appears on the row or in the drawer.

Quote (audio.srt): “And you have to write that these banks are one of the highest who charge processing fees.” / “This bank is known for the highest amount of processing fees in the whole market.”

## How the files join

- time: clicks 268510, 310821, 391256 ms; speech 266980–413850 ms
- said: variable fee; pay ₹10,000; write these banks are among the highest; IDFC highest in the market
- did: open Canara / DCB / IDFC FIRST processing-fee drawers; poke calculation steps; close
- seeing: amounts and % math only; no “highest in market” chip or sentence
- therefore: missing ranking/intelligence label on high processing-fee banks

## Pinpoint

Canara, DCB, and IDFC FIRST processing-fee amounts on Explore banks Charges are not labeled as among the highest in the market, which is what they asked to write while those drawers were open.

## Related discussion

Google Flights / “search and check,” comfortable table, broker, “intelligence has become cheap” immediately before this stretch — they want the table to give that kind of intelligence, not only a number. They explained a **risk model**: high-risk borrowers pay high interest because default chance is higher; “No EMI” furniture as an analogy; “What is this? 3 million? You can put it on the website.” That is how they think about labeling expensive banks, not a separate UI bug. They asked “Highest?” as confirmation.

## Chronology in this recording

- 04:27 Processing fee. Variable fee.
- 04:28 click Canara ₹10,000; 04:39–05:26 ₹10,000 vs ₹2,000 they “wrote.”
- 05:28–05:34 write that these banks are among the highest.
- 05:10 click DCB ₹96,000; stay on 2% math.
- 06:31 click IDFC FIRST ₹1,44,000; 06:45–06:53 again one of the highest / known for highest in the market.
- 06:53 close IDFC drawer.

## Cross-recording continuation

Standalone. Previous folder ended on stars/processing-fee definition. Next folder starts stamp duty / government charges, not this ranking label.

## Evidence by file

- `events.json`: Canara t=268510 ₹10,000; DCB t=310821 ₹96,000; IDFC FIRST t=391256 ₹1,44,000. supports_issue
- `replay.spec.ts`: matching getByRole names for those three banks. supports_issue
- `audio.srt` cues 80–129. supports_issue
- `audio.tsv` / vtt / txt / text / lrc / sentences: same. timeline_alignment
- `audio.json`: “highest” / “10,000” / “2,000” word times. supports_issue
- `screenshots/0033.png`–`0036.png`: Canara cap ₹10,000. supports_issue
- `screenshots/0040.png`–`0046.png`: DCB 2% ₹96,000. supports_issue
- `screenshots/0051.png`–`0053.png`: IDFC FIRST 3% ₹1,44,000. supports_issue
- `pages.json` / `tabs.json` / `manifest.json`: same page. timeline_alignment
- `console.json` / `viewer.js` / `viewer.css` / `audio.webm`: checked_no_extra_signal

## ASR notes

srt says “10,000 cash” / “2,000 cash” — join with Canara drawer ₹10,000, so **₹10,000 / ₹2,000**, not literal cash. “Maximum apply” matches on-screen “Above the bank maximum.” “3 million” does not match ₹1,44,000; quoted raw; they may have meant putting the “highest in market” fact on the website. lrc: “Maximum apply. 10,000 cash.”

## JSON

```json
{
  "issue_id": "wb-rec-260816-0004/issue-03-high-processing-fee-banks-not-labeled-as-highest",
  "issue_title": "High processing-fee banks are not labeled as among the highest",
  "folder": "wb-rec-260816-0004",
  "sequence_index": 27,
  "recording_id": "08aa721b-3f2e-484c-b39e-58b789d21095",
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "on_screen_object": "Canara, DCB, and IDFC FIRST processing-fee cells and drawers",
  "pinpoint": "High processing-fee banks show only rupee math, with no 'among the highest in the market' label.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "speech_clock": ["00:04:26,980 --> 00:06:53,850"],
  "event_t_ms": [268510, 310821, 391256],
  "screenshot_files": ["screenshots/0033.png", "screenshots/0040.png", "screenshots/0051.png"],
  "tags": ["copy", "processing-fee", "ranking"],
  "quotes": [
    {"clock": "00:05:28", "text": "And you have to write that these banks are one of the highest who charge processing fees.", "artifact": "audio.srt"},
    {"clock": "00:06:49", "text": "This bank is known for the highest amount of processing fees in the whole market.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 268510, "name": "Show how processing fees for Canara Bank was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(5) > td:nth-of-type(2) > button"},
    {"t_ms": 310821, "name": "Show how processing fees for DCB Bank was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(29) > td:nth-of-type(2) > button"},
    {"t_ms": 391256, "name": "Show how processing fees for IDFC FIRST Bank was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(33) > td:nth-of-type(2) > button"}
  ],
  "related_discussion_present": true
}
```
