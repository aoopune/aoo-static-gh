# Extra eligibility fields should not vanish

On Explore banks they opened Adjust eligibility and said those extra fields should not disappear.
They said it is fine if the fields stay pre-filled.
They then set Co-applicant to No, and the extra co-applicant fields went away.
The object is the extra fields under Adjust eligibility, not the main loan card.

---
issue_id: "wb-rec-260815-2313/issue-02-adjust-eligibility-fields-should-not-disappear"
issue_title: "Extra eligibility fields should not vanish"
folder: "wb-rec-260815-2313"
sequence_index: 22
recording_id: "152443cc-6acb-4cd3-848e-1e260b989c24"
recording_started_at: "2026-08-15T17:43:51.324Z"
recording_ended_at: "2026-08-15T17:52:30.230Z"
duration_ms: 518906
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Adjust eligibility extra fields, including Co-applicant Yes/No"
pinpoint: "On Explore banks, extra fields under Adjust eligibility vanish (they said they should not disappear like that); pre-filled is acceptable. After Co-applicant No, the extra co-applicant fields are gone."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-loan-form-importance-not-shown-by-order-color.md"]
source_files_used: ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg"]
speech_clock: ["00:01:10,820 --> 00:01:17,660"]
event_t_ms: [70648, 70746, 72355, 75176, 76078]
screenshot_files: ["screenshots/0009.jpg", "screenshots/0010.jpg"]
tags: ["form", "interaction", "adjust-eligibility", "co-applicant"]
---

## Exact issue

On Explore banks they opened Adjust eligibility and said those extra fields should not disappear the way they do. Pre-filled values are fine. They clicked Co-applicant No. The extra co-applicant fields that were visible when Co-applicant was Yes are then gone. The defect is the vanishing extra fields, not that the section exists.

Raw ASR (`audio.srt`): "Let's talk about adjustability." / "That it should not disappear like this." / "And there is no problem if it is pre-filled."

## How the files join

- time: 70820–77660 ms (00:01:10–00:01:17)
- said: `audio.srt` cues 18–20; `audio.json` segs 017–019. They name “adjustability” and “should not disappear like this.”
- did: focus Property agreement value t=70648; click `details#hlc-form-more` t=70746 (opens Adjust eligibility); scroll t=72355; click Co-applicant No t=75176; hidden input `#hlc-co-applicant` set to `no` t=76078 (`events.json`, `replay.spec.ts`).
- seeing: `screenshots/0009.jpg` (t=71051) shows Adjust eligibility open, Co-applicant Yes, extra co-applicant fields visible (partly redacted). `screenshots/0010.jpg` (t=75577) shows Co-applicant No selected and those extra fields gone.
- page/object: same Loan inputs form, extra block under Adjust eligibility.
- therefore: extra eligibility fields disappear when they should remain (pre-filled is OK).

## Pinpoint

On Explore banks, extra fields under Adjust eligibility vanish instead of staying visible; they said that disappearing is wrong, and that keeping them pre-filled is not a problem. The click on Co-applicant No is the moment the extra co-applicant fields leave the screen.

## Related discussion (not the issue itself)

This sits next to issue 01 (form order/color) but is a different object: visibility of extra fields, not ranking of main fields. They did not say pre-filled values are dishonest.

## Chronology in this recording

- 00:01:10–00:01:12: “Let's talk about adjustability.” Click opens Adjust eligibility (`details#hlc-form-more`).
- 00:01:13–00:01:14: “That it should not disappear like this.” Shot 0009 still has Co-applicant Yes and extra fields.
- 00:01:15–00:01:17: “And there is no problem if it is pre-filled.” Click Co-applicant No at 75176 ms; shot 0010 shows No and extra fields gone.

## Cross-recording continuation

Standalone in this folder. Previous recording ended on rate / amount / tenure and an easy form, not on fields vanishing. Next recording starts on option count and banks vs lenders, not on this vanish behavior.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json`: Explore banks session window. `timeline_alignment`
- `audio.json`: segs 017–019, adjustability / disappear / pre-filled. `supports_issue`
- `audio.lrc`: same three lines. `supports_issue`
- `audio.srt`: cues 18–20, primary clock. `supports_issue`
- `audio.text`: “Let's talk about adjustability…” `supports_issue`
- `audio.tsv`: 70820–77660 ms. `timeline_alignment`
- `audio.txt`: same. `supports_issue`
- `audio.vtt`: same. `supports_issue`
- `audio.webm`: not listened. `checked_no_extra_signal`
- `audio_sentences.txt`: includes the adjustability sentences. `supports_issue`
- `console.json`: empty. `checked_no_extra_signal`
- `events.json`: click more t=70746; Co-applicant No t=75176; input value `no` t=76078. `supports_issue`
- `index.html`: player only. `checked_no_extra_signal`
- `pages.json`: Co-applicant income / Co-applicant EMIs fields exist on the form. `supports_issue`
- `replay.spec.ts`: click `details#hlc-form-more`; click Co-applicant No; fill `#hlc-co-applicant` with `no`. `supports_issue`
- `tabs.json`: still Explore banks. `timeline_alignment`
- `viewer.css`: generic player. `checked_no_extra_signal`
- `viewer.js`: generic player. `checked_no_extra_signal`
- `screenshots/index.json`: 0009 interaction t=71051; 0010 interaction t=75577. `timeline_alignment`
- `screenshots/0000.jpg`–`0008.jpg`: collapsed form before this issue. `checked_no_extra_signal`
- `screenshots/0009.jpg`: extra fields visible, Co-applicant Yes. `supports_issue`
- `screenshots/0010.jpg`: Co-applicant No; extra fields gone. `supports_issue`
- `screenshots/0011.jpg`–`0068.jpg` and `screenshots/0044.png`: later tooltip / Google / copy talk. `checked_no_extra_signal`

## ASR notes

`audio.srt`: “adjustability” / “should not disappear like this.” `audio.json`: “Let's talk about adjustability. That it should not disappear like this.” `audio.text`: “Let's talk about adjustability.” Used srt. “Adjustability” vs “adjustability” is the same idea. Screenshot 0010 plus the No click decide that “disappear” refers to extra fields going away.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2313/issue-02-adjust-eligibility-fields-should-not-disappear",
  "issue_title": "Extra eligibility fields should not vanish",
  "folder": "wb-rec-260815-2313",
  "sequence_index": 22,
  "recording_id": "152443cc-6acb-4cd3-848e-1e260b989c24",
  "recording_started_at": "2026-08-15T17:43:51.324Z",
  "recording_ended_at": "2026-08-15T17:52:30.230Z",
  "duration_ms": 518906,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Adjust eligibility extra fields, including Co-applicant Yes/No",
  "pinpoint": "On Explore banks, extra fields under Adjust eligibility vanish (they said they should not disappear like that); pre-filled is acceptable. After Co-applicant No, the extra co-applicant fields are gone.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-loan-form-importance-not-shown-by-order-color.md"],
  "source_files_used": ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg"],
  "speech_clock": ["00:01:10,820 --> 00:01:17,660"],
  "event_t_ms": [70648, 70746, 72355, 75176, 76078],
  "screenshot_files": ["screenshots/0009.jpg", "screenshots/0010.jpg"],
  "tags": ["form", "interaction", "adjust-eligibility", "co-applicant"],
  "quotes": [
    {"clock": "00:01:10,820", "text": "Let's talk about adjustability.", "artifact": "audio.srt"},
    {"clock": "00:01:13,560", "text": "That it should not disappear like this.", "artifact": "audio.srt"},
    {"clock": "00:01:15,440", "text": "And there is no problem if it is pre-filled.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 70746, "name": "Adjust eligibility", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"},
    {"t_ms": 75176, "name": "No", "css": "div#hlc-co-applicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
