# Loan form info icons need arranging

On Explore banks they pointed at the many (i) icons on the loan form.
They said to arrange all of those tooltips, then argued about whether to read them.
They opened Credit card limits, Tenure, and Existing EMIs.
The object is the info-icon tooltips on Loan inputs, not the field order.

---
issue_id: "wb-rec-260815-2313/issue-03-loan-form-info-icons-need-arranging"
issue_title: "Loan form info icons need arranging"
folder: "wb-rec-260815-2313"
sequence_index: 22
recording_id: "152443cc-6acb-4cd3-848e-1e260b989c24"
recording_started_at: "2026-08-15T17:43:51.324Z"
recording_ended_at: "2026-08-15T17:52:30.230Z"
duration_ms: 518906
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Info-icon tooltips on Loan inputs (Credit card limits, Tenure, Existing EMIs)"
pinpoint: "On Explore banks, the (i) tooltips on the loan form need arranging; they said to arrange them, then opened Credit card limits, Tenure, and Existing EMIs instead of leaving the cluster as-is."
severity_as_spoken: "unstated"
confidence: "medium"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-loan-form-importance-not-shown-by-order-color.md", "issue-04-copy-extra-words-raise-cognitive-load.md"]
source_files_used: ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0016.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg"]
speech_clock: ["00:01:31,260 --> 00:01:48,690"]
event_t_ms: [85016, 89708, 90336, 90980, 94076, 94693, 95458, 97643, 106943]
screenshot_files: ["screenshots/0013.jpg", "screenshots/0016.jpg", "screenshots/0021.jpg"]
tags: ["copy", "tooltips", "info-icons", "form"]
---

## Exact issue

On Explore banks, with Adjust eligibility open, they said to arrange all the tooltips on the form. One person did not want to read them all; the other insisted they be read. They then opened About Credit card limits, About Tenure, and About Existing EMIs. The issue is that this tooltip cluster needs arranging, not a specific sentence inside one tooltip (they did not attack a quoted tooltip line as wrong).

Raw ASR (`audio.srt`): "Let's arrange all these tooltips." / "Let's not read all the tooltips." / "I haven't read it myself." / "No, read it." / "Yes, read it."

## How the files join

- time: 91260–108690 ms (00:01:31–00:01:48), then clicks through ~106943 ms
- said: `audio.srt` cues 21–25. “Arrange all these tooltips.”
- did: click combobox Share of credit card limits t=85016; three clicks About Credit card limits t=89708/90336/90980; three clicks About Tenure t=94076/94693/95458; click main card t=97643; click About Existing EMIs t=106943 (`events.json`).
- seeing: shots 0013–0015 during Credit card limits info; 0016–0018 during Tenure info; 0020–0021 show Existing EMIs tooltip: “Lowers how much new loan you can get. Learn more.”
- page/object: buttons named About Credit card limits, About Tenure, About Existing EMIs on the Loan inputs form.
- therefore: they treated the form’s (i) tooltips as something that must be arranged (and then actually opened three of them).

## Pinpoint

On Explore banks, the loan form’s info-icon tooltips need arranging. They said so, then opened Credit card limits, Tenure, and Existing EMIs. This is separate from ranking fields by color/order (issue 01).

## Related discussion (not the issue itself)

They then imagined most of the public as “stupid,” said details do not impress those people, and talked about climbing a ladder from non-stupid to stupid and making the product foolproof. That is audience talk for why tooltips/copy must be simple; it is not a second tooltip defect. Tesla / foolproof spelling sits with issue 04.

## Chronology in this recording

- 00:01:31–00:01:35: Arrange all these tooltips; don’t read all of them.
- 00:01:40–00:01:48: Haven’t read them; “No, read it”; “Yes, read it.”
- 00:01:29–00:01:31 (events): Credit card limits combobox, then About Credit card limits clicks (~89708–90980).
- 00:01:34–00:01:35: About Tenure clicks (~94076–95458).
- 00:01:46: About Existing EMIs (~106943); tooltip visible on shots 0020–0021.

## Cross-recording continuation

Standalone. Previous recording did not close on arranging these (i) icons. Next recording does not open on tooltips.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json`: session metadata. `timeline_alignment`
- `audio.json`: segs 020–024, arrange/read tooltips. `supports_issue`
- `audio.lrc`: same. `supports_issue`
- `audio.srt`: cues 21–25. `supports_issue`
- `audio.text`: “Let's arrange all these tooltips.” `supports_issue`
- `audio.tsv`: 91260–108690 ms. `timeline_alignment`
- `audio.txt`: same. `supports_issue`
- `audio.vtt`: same. `supports_issue`
- `audio.webm`: not listened. `checked_no_extra_signal`
- `audio_sentences.txt`: includes tooltip-arrange sentences. `supports_issue`
- `console.json`: empty. `checked_no_extra_signal`
- `events.json`: tooltip button clicks listed above. `supports_issue`
- `index.html`: player. `checked_no_extra_signal`
- `pages.json`: many “About …” buttons on Loan inputs. `supports_issue`
- `replay.spec.ts`: clicks on Credit card limits, Tenure, Existing EMIs info SVGs. `supports_issue`
- `tabs.json`: Explore banks. `timeline_alignment`
- `viewer.css`: generic. `checked_no_extra_signal`
- `viewer.js`: generic. `checked_no_extra_signal`
- `screenshots/index.json`: 0013–0021 interaction times. `timeline_alignment`
- `screenshots/0000.jpg`–`0012.jpg`: before tooltip review. `checked_no_extra_signal`
- `screenshots/0013.jpg`–`0015.jpg`: Credit card limits info. `supports_issue`
- `screenshots/0016.jpg`–`0018.jpg`: Tenure info. `supports_issue`
- `screenshots/0019.jpg`: click away on main card. `timeline_alignment`
- `screenshots/0020.jpg`–`0021.jpg`: Existing EMIs tooltip text. `supports_issue`
- `screenshots/0022.jpg`–`0068.jpg` and `0044.png`: later idle/Google/copy. `checked_no_extra_signal`

## ASR notes

`audio.srt`: “Let's arrange all these tooltips.” `audio.json`: “Let's arrange all these tooltips.” Used srt. They did not quote a tooltip as wrongly worded; “arrange” plus the three opens is the join. Confidence medium because they also used “arrange” as a review step, but they still treated the cluster as needing change.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2313/issue-03-loan-form-info-icons-need-arranging",
  "issue_title": "Loan form info icons need arranging",
  "folder": "wb-rec-260815-2313",
  "sequence_index": 22,
  "recording_id": "152443cc-6acb-4cd3-848e-1e260b989c24",
  "recording_started_at": "2026-08-15T17:43:51.324Z",
  "recording_ended_at": "2026-08-15T17:52:30.230Z",
  "duration_ms": 518906,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Info-icon tooltips on Loan inputs (Credit card limits, Tenure, Existing EMIs)",
  "pinpoint": "On Explore banks, the (i) tooltips on the loan form need arranging; they said to arrange them, then opened Credit card limits, Tenure, and Existing EMIs instead of leaving the cluster as-is.",
  "severity_as_spoken": "unstated",
  "confidence": "medium",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-loan-form-importance-not-shown-by-order-color.md", "issue-04-copy-extra-words-raise-cognitive-load.md"],
  "source_files_used": ["manifest.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0016.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg"],
  "speech_clock": ["00:01:31,260 --> 00:01:48,690"],
  "event_t_ms": [85016, 89708, 90336, 90980, 94076, 94693, 95458, 97643, 106943],
  "screenshot_files": ["screenshots/0013.jpg", "screenshots/0016.jpg", "screenshots/0021.jpg"],
  "tags": ["copy", "tooltips", "info-icons", "form"],
  "quotes": [
    {"clock": "00:01:31,260", "text": "Let's arrange all these tooltips.", "artifact": "audio.srt"},
    {"clock": "00:01:33,800", "text": "Let's not read all the tooltips.", "artifact": "audio.srt"},
    {"clock": "00:01:43,090", "text": "No, read it.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 89708, "name": "About Credit card limits", "css": "div#hlc-form-more-panel > div > div:nth-of-type(1) > div > span > span > button"},
    {"t_ms": 94076, "name": "About Tenure", "css": "div#hlc-form-more-panel > div > label:nth-of-type(3) > span:nth-of-type(1) > span > span:nth-of-type(2) > button"},
    {"t_ms": 106943, "name": "About Existing EMIs", "css": "div#hlc-form-more-panel > div > label:nth-of-type(1) > span:nth-of-type(1) > span > span > button"}
  ],
  "related_discussion_present": true
}
```
