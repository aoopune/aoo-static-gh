# “Adjust eligibility” is not simple English

The extra-fields control is labeled Adjust eligibility.
They said eligibility is not a good word under their Super-English rule.
They want a plain name such as extra columns, extra attributes, or extra parameters.
The next recording keeps this topic: show those fields as columns instead of “adjusting.”

---
issue_id: "wb-rec-260815-2240/issue-03-adjust-eligibility-not-simple-english"
issue_title: "Adjust eligibility is not simple English"
folder: "wb-rec-260815-2240"
sequence_index: 18
recording_id: "a82e9a9f-c11f-4376-881d-25a436d5e6f5"
recording_started_at: "2026-08-15T17:10:04.687Z"
recording_ended_at: "2026-08-15T17:19:10.273Z"
duration_ms: 545586
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Adjust eligibility disclosure (details#hlc-form-more) on the Loan inputs card"
pinpoint: "On Explore banks they said Adjust eligibility is not a good word (Super-English) and should become extra columns, extra attributes, or extra parameters in very simple English; they opened that disclosure at 390395 ms while saying this."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2249"
related_issue_files: ["issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md", "issue-05-see-options-label-unclear.md", "issue-06-see-options-not-below-centered.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0041.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:06:05,780-00:06:15,840", "00:08:33,180-00:08:50,520"]
event_t_ms: [365383, 390395, 402822, 491770, 508104]
screenshot_files: ["screenshots/0041.jpg", "screenshots/0047.jpg", "screenshots/0060.jpg", "screenshots/0062.jpg"]
tags: ["copy"]
---

## Exact issue
The disclosure under the main Explore banks fields is labeled **Adjust eligibility** (`details#hlc-form-more`). They said **eligibility is not a good word**, applied a **Super-English** rule, and later said Adjust eligibility should become something else: extra columns, extra attributes, extra parameters — **but something in very simple English**. Screenshots show the label with extra fields (Existing EMIs, credit-card limits, FOIR, tenure, co-applicant) when opened.

ASR (`audio.srt`): "And just eligibility is not a good word." "Fine-tune… Super-English rule." "Adjust eligibility… should become something else. Like… Additional columns. Additional attributes. Additional parameters. But something in very simple English."

## How the files join
- time: 365780–375840 ms (wording) and 513180–530520 ms (rename)
- said: eligibility not a good word; Super-English; later extra columns/attributes/parameters in simple English
- did: click `details#hlc-form-more` at 390395, 402822, 491770, 508104 (`events.json` / `replay.spec.ts`)
- seeing: collapsed label on `0041.jpg`; expanded extra fields on `0047.jpg`, `0060.jpg`, `0062.jpg`
- therefore: the visible name Adjust eligibility is the defect they named

## Pinpoint
On Explore banks, the **Adjust eligibility** control (`#hlc-form-more`) is not simple English; they want a plain name in the extra-columns / extra-attributes / extra-parameters family.

## Related discussion (not the issue itself)
- Super-English / “fine-tune Super-English rule” is the naming standard they applied.
- Opening the same control as a dropdown vs demo is issue 04 (affordance), not this wording issue.
- Next folder `wb-rec-260815-2249` starts: “instead of adjusting the availability, we need to show the columns here” — same object, next step (show as columns). ASR “availability” = eligibility.

## Chronology in this recording
- 00:06:04 “Coming down.”
- 00:06:05–00:06:08 eligibility is not a good word.
- 00:06:12–00:06:15 Super-English rule.
- 00:08:33–00:08:50 rename to extra columns / attributes / parameters in simple English.

## Cross-recording continuation
Does not continue from `wb-rec-260815-2231`. Continues into `wb-rec-260815-2249` (show columns instead of adjusting eligibility).

## Evidence by file (every file in the folder — no omissions)
- `audio.json` — segs 110–113 and 160–167; “eligibility” / “Additional columns” word times — `supports_issue`
- `audio.lrc` / `audio.srt` / `audio.text` / `audio.tsv` / `audio.txt` / `audio.vtt` / `audio_sentences.txt` — same wording quotes — `supports_issue`
- `audio.webm` — binary — `checked_no_extra_signal`
- `console.json` — empty — `checked_no_extra_signal`
- `events.json` — clicks on `details#hlc-form-more` while they name and rename the control — `supports_issue`
- `index.html` — player — `checked_no_extra_signal`
- `manifest.json` — Explore banks session — `timeline_alignment`
- `pages.json` — form Loan inputs; extra fields Existing EMIs, FOIR, tenure, co-applicant — `supports_issue`
- `replay.spec.ts` — `details#hlc-form-more` clicks — `supports_issue`
- `screenshots/0000.jpg`–`screenshots/0046.jpg` — collapsed “Adjust eligibility” visible on the card — `supports_issue`
- `screenshots/0047.jpg`–`screenshots/0048.jpg` / `0060.jpg`–`0062.jpg` — expanded extra fields under that label — `supports_issue`
- `screenshots/0049.jpg`–`screenshots/0059.jpg` / `0063.jpg`–`0066.jpg` — collapsed again while they keep talking about the name — `supports_issue`
- `screenshots/index.json` — times for those shots — `timeline_alignment`
- `tabs.json` — Explore banks — `timeline_alignment`
- `viewer.css` / `viewer.js` — generic — `checked_no_extra_signal`

## ASR notes
“just eligibility” / “Adjust eligibility”: clicks on `#hlc-form-more` and on-screen label **Adjust eligibility** win. “Fine-tune Super-English” vs “Super-English rule”: both artifacts; used Super-English as they confirmed “Super-English, yes.” “Additional columns/attributes/parameters” consistent. Next-folder “availability” is the same word family as eligibility.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2240/issue-03-adjust-eligibility-not-simple-english",
  "issue_title": "Adjust eligibility is not simple English",
  "folder": "wb-rec-260815-2240",
  "sequence_index": 18,
  "recording_id": "a82e9a9f-c11f-4376-881d-25a436d5e6f5",
  "recording_started_at": "2026-08-15T17:10:04.687Z",
  "recording_ended_at": "2026-08-15T17:19:10.273Z",
  "duration_ms": 545586,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Adjust eligibility disclosure details#hlc-form-more",
  "pinpoint": "On Explore banks they said Adjust eligibility is not a good word (Super-English) and should become extra columns, extra attributes, or extra parameters in very simple English.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2249",
  "related_issue_files": ["issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md", "issue-05-see-options-label-unclear.md", "issue-06-see-options-not-below-centered.md"],
  "speech_clock": ["00:06:05,780-00:06:15,840", "00:08:33,180-00:08:50,520"],
  "event_t_ms": [365383, 390395, 402822, 491770, 508104],
  "screenshot_files": ["screenshots/0041.jpg", "screenshots/0047.jpg", "screenshots/0060.jpg", "screenshots/0062.jpg"],
  "tags": ["copy"],
  "quotes": [
    {"clock": "00:06:05,780", "text": "And just eligibility is not a good word.", "artifact": "audio.srt"},
    {"clock": "00:06:13,940", "text": "Super-English rule.", "artifact": "audio.srt"},
    {"clock": "00:08:37,540", "text": "Adjust eligibility… should become something else.", "artifact": "audio.srt"},
    {"clock": "00:08:48,840", "text": "But something in very simple English.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 390395, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary"},
    {"t_ms": 491770, "name": "Adjust eligibility chevron", "css": "details#hlc-form-more > summary svg"}
  ],
  "related_discussion_present": true
}
```
