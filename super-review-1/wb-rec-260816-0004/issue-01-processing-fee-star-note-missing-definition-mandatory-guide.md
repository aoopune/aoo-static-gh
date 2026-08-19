# Processing fee star note has no definition, mandatory line, or guide

On Explore banks → Charges, the Processing fee * note never says what a processing fee is.
It does not say the fee is mandatory, or that it is due even if the loan is not disbursed.
It also has no short guide on how private vs public banks charge (minimum vs variable).
They opened that * twice and asked for one sentence, then a mandatory line, then a guide — and said there is no guide.

---
issue_id: "wb-rec-260816-0004/issue-01-processing-fee-star-note-missing-definition-mandatory-guide"
issue_title: "Processing fee star note has no definition, mandatory line, or guide"
folder: "wb-rec-260816-0004"
sequence_index: 27
recording_id: "08aa721b-3f2e-484c-b39e-58b789d21095"
recording_started_at: "2026-08-15T18:34:46.547Z"
recording_ended_at: "2026-08-15T18:43:30.319Z"
duration_ms: 523772
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Charges table header 'Processing fee *' note button (th#hlc-th-processingFee > button) and Notes block heading 'Processing fee'"
pinpoint: "On Explore banks Charges, the Processing fee * note explains only that a login fee is bundled and not listed separately; it does not define the fee in one sentence, does not say it is mandatory / due on sanction not only on disbursement, and has no private-vs-public fee guide."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2355"
continued_into_folder: null
related_issue_files:
  - "issue-03-high-processing-fee-banks-not-labeled-as-highest.md"
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
  - "screenshots/0000.jpg"
  - "screenshots/0001.jpg"
  - "screenshots/0002.png"
  - "screenshots/0003.png"
  - "screenshots/0004.png"
  - "screenshots/0005.png"
  - "screenshots/0006.png"
  - "screenshots/0007.png"
  - "screenshots/0008.png"
  - "screenshots/0009.png"
  - "screenshots/0010.png"
  - "screenshots/0011.png"
  - "screenshots/0012.png"
  - "screenshots/0013.png"
  - "screenshots/0038.png"
  - "screenshots/0039.png"
speech_clock:
  - "00:00:20,340 --> 00:01:51,960"
  - "00:04:26,980 --> 00:04:32,720"
event_t_ms: [200, 4604, 4708, 10712, 12329, 13696, 98162, 103129, 104229, 294436, 296029, 303396]
screenshot_files:
  - "screenshots/0000.jpg"
  - "screenshots/0001.jpg"
  - "screenshots/0002.png"
  - "screenshots/0003.png"
  - "screenshots/0011.png"
  - "screenshots/0012.png"
  - "screenshots/0013.png"
  - "screenshots/0038.png"
  - "screenshots/0039.png"
tags: ["copy", "charges", "processing-fee", "notes", "guide", "trust"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` (page title Explore banks – Shroffin), Charges tab, they treated the **Processing fee \*** note as incomplete.

They clicked `Open note for mark *` on `th#hlc-th-processingFee > button` at t=10712 ms, scrolled the Notes block into view, and asked for a one-sentence definition of processing fee. The on-screen note (screenshots/0003.png–0013.png) only says a login fee is often taken upfront and is included in the shown processing fee — “we don't list it separately yet.” It does **not** say what the fee is, that it is mandatory, or that it is payable on sanction even if disbursement never happens.

They then said to write that it is a mandatory fee, then write private-bank minimum vs public-bank minimum/variable, and repeated “There is no guide.” They clicked the same * again at t=294436 ms after looking at high-fee banks.

Quote (audio.srt): “So, first I want to know what is a processing fee.” / “Yes. But I want to know one sentence.” / “So, you have to write, this is a mandatory fee.” / “There is no guide.”

## How the files join

- time: 10712 ms (00:00:10.7) then speech 20340–111960 ms
- said (audio.srt / audio.tsv): they want one sentence defining processing fee; it is not only on “successful” disbursement; write mandatory; write private/public fee shape; there is no guide
- did (events.json): click `Open note for mark *` on processing-fee header; scroll y≈2904–3126 to Notes; later click the same * again at 294436 ms
- seeing: screenshots/0002.png–0013.png show Charges sorted by processing fee with Notes “Processing fee (*)” about login fee only; 0000.jpg still had the leftover Indian Bank processing-fee drawer from the previous recording
- page/object: Explore banks – Shroffin; heading “Processing fee”; note button on processing-fee column
- therefore: the * note is missing definition, mandatory, and a short private/public guide

## Pinpoint

On Explore banks Charges, the Processing fee * note (header star + Notes “Processing fee” block) does not define the fee, does not say it is mandatory / due on sanction, and has no private-vs-public guide — which is what they asked for while that note was on screen.

## Related discussion

They argued the wording “successful loan disbursement / successful application”: “There is no success.” / “Not only successful.” ASR “function letter” is treated as **sanction letter** (join: pay the full fee if you want to proceed with the sanctioned loan). They said the fee is non-refundable and you pay even when there is only one application. They also asked whether there is a way to avoid the fee — that is why they wanted “mandatory” written first. Private vs public “minimum / variable” is the second line they wanted in the same guide, not a separate issue.

## Chronology in this recording

- 00:00–00:05 (t=4604–4708): leftover Indian Bank processing-fee drawer ₹2,500 from previous recording; click backdrop to close (screenshots/0000.jpg → 0001.jpg).
- 00:10 (t=10712): click Processing fee * note; scroll to Notes (0002–0013).
- 00:20–01:52: definition, not-only-successful, sanction letter, mandatory, private/public, “there is no guide,” “how to avoid this.”
- 04:27–04:32: they say “Processing fee. Variable fee.” while later looking at high-fee banks (same object; also used in issue-03).
- 04:54 (t=294436): click * again (0038.png).

## Cross-recording continuation

Continues from **wb-rec-260815-2355**. That recording ended with them counting two stars on the Charges notes, opening the processing-fee * note, then opening Indian Bank’s processing-fee drawer (₹2,500). This recording starts on that same drawer. The missing-definition talk is the first speech here. Does not continue into wb-rec-260816-0013 (that clip starts on stamp duty / government charges).

## Evidence by file

- `manifest.json`: session 08aa721b-3f2e-484c-b39e-58b789d21095; start_url explore-banks.html; 523772 ms; viewport 1366×768. supports_issue
- `audio.srt`: cues 1–39 (20.34s–111.96s) definition/mandatory/no-guide. supports_issue
- `audio.tsv`: same rows 20340–111960 ms. supports_issue
- `audio.vtt` / `audio.txt` / `audio.text` / `audio.lrc` / `audio_sentences.txt`: same stretch; lrc has slightly smoother English (“So, first I want to know what is a processing fee”). timeline_alignment
- `audio.json`: language `en` (not trusted as speaker language); word probs low on “What” (0.04) and “function”; 169 segments fully chunked. asr_notes
- `audio.webm`: binary mic; not listened; text artifacts used. checked_no_extra_signal
- `events.json`: landmark_snapshot t=200 title Explore banks – Shroffin; click * t=10712 and t=294436; scrolls to Notes. supports_issue
- `pages.json`: heading “Processing fee”; url explore-banks.html. supports_issue
- `tabs.json`: one tab, same URL whole session. timeline_alignment
- `console.json`: `[]`. checked_no_extra_signal
- `replay.spec.ts`: `getByRole("button", { name: "Open note for mark *" })` then processingFee header click. supports_issue
- `index.html`: player shell; inlined events match * clicks and screenshot list. player chrome; timeline_alignment
- `viewer.js` / `viewer.css`: generic replay player, no session talk. checked_no_extra_signal
- `screenshots/index.json`: 0002 t=11118 interaction after * click; 0003–0013 periodic on Notes. supports_issue
- `screenshots/0000.jpg`: leftover processing-fee drawer Indian Bank ₹2,500. related_discussion
- `screenshots/0001.jpg`: Charges table after close. timeline_alignment
- `screenshots/0002.png`–`0013.png`: Notes “Processing fee (*)” login-fee copy only. supports_issue
- `screenshots/0038.png`–`0039.png`: second * click, Notes visible again. supports_issue
- other screenshots in folder: later drawers (property check / high fees / wrap) — checked_no_extra_signal for this issue

## ASR notes

audio.srt/tsv/vtt/text agree on this stretch. audio.lrc restates some lines more cleanly (“So, first I want to know…”). audio.json `language: en`. Conflict: “function letter” (srt/tsv) vs likely **sanction letter** — chosen because they immediately say you must pay the full fee to proceed, while looking at processing-fee notes, not a “function.” “There is no success” is kept raw; they mean the fee is not only charged on successful disbursement. Low-probability words: “What” 0.04, “I” 0.09 at 26s.

## JSON

```json
{
  "issue_id": "wb-rec-260816-0004/issue-01-processing-fee-star-note-missing-definition-mandatory-guide",
  "issue_title": "Processing fee star note has no definition, mandatory line, or guide",
  "folder": "wb-rec-260816-0004",
  "sequence_index": 27,
  "recording_id": "08aa721b-3f2e-484c-b39e-58b789d21095",
  "recording_started_at": "2026-08-15T18:34:46.547Z",
  "recording_ended_at": "2026-08-15T18:43:30.319Z",
  "duration_ms": 523772,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Charges table header Processing fee * note and Notes block Processing fee",
  "pinpoint": "The Processing fee * note does not define the fee, does not say it is mandatory / due on sanction, and has no private-vs-public guide.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2355",
  "continued_into_folder": null,
  "related_issue_files": ["issue-03-high-processing-fee-banks-not-labeled-as-highest.md"],
  "speech_clock": ["00:00:20,340 --> 00:01:51,960", "00:04:26,980 --> 00:04:32,720"],
  "event_t_ms": [10712, 12329, 13696, 294436],
  "screenshot_files": ["screenshots/0002.png", "screenshots/0003.png", "screenshots/0012.png", "screenshots/0038.png"],
  "tags": ["copy", "charges", "processing-fee", "notes", "guide"],
  "quotes": [
    {"clock": "00:00:20", "text": "So, first I want to know what is a processing fee.", "artifact": "audio.srt"},
    {"clock": "00:01:16", "text": "So, you have to write, this is a mandatory fee.", "artifact": "audio.srt"},
    {"clock": "00:01:32", "text": "There is no guide.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 10712, "name": "Open note for mark *", "css": "th#hlc-th-processingFee > button"},
    {"t_ms": 294436, "name": "Open note for mark *", "css": "th#hlc-th-processingFee > button"}
  ],
  "related_discussion_present": true
}
```
