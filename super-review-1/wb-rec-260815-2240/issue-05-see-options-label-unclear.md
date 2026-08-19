# “See options” is not a clear label

The submit button is labeled See options.
They did not know what “options” meant.
They contrasted it with See banks, said the two are different, and said See options is not a good answer.
They noted it is a form submit, and that Submit is also the wrong idea for this button.

---
issue_id: "wb-rec-260815-2240/issue-05-see-options-label-unclear"
issue_title: "See options is not a clear label"
folder: "wb-rec-260815-2240"
sequence_index: 18
recording_id: "a82e9a9f-c11f-4376-881d-25a436d5e6f5"
recording_started_at: "2026-08-15T17:10:04.687Z"
recording_ended_at: "2026-08-15T17:19:10.273Z"
duration_ms: 545586
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "See options button #hlc-see-options (type=submit) on the Loan inputs form"
pinpoint: "On Explore banks they said See options is not a good answer: they do not know what options are, See banks would mean something else, and the control is actually a form submit; they clicked #hlc-see-options at 378089, 383489, 386609, and 424777."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md", "issue-06-see-options-not-below-centered.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0045.jpg", "screenshots/0052.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:06:18,080-00:06:26,840", "00:07:07,860-00:07:48,760"]
event_t_ms: [378089, 378090, 383489, 383490, 386609, 424777, 424778]
screenshot_files: ["screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0045.jpg", "screenshots/0052.jpg"]
tags: ["copy", "interaction"]
---

## Exact issue
The primary action on the Explore banks form is **See options** (`#hlc-see-options`, `type=submit`, accessible name “See options”). They asked **what is See options**, then said **I don't know what options** and **See options is not a good answer**. They compared **See banks**, which would mean something different. They then said **Submit** is for form submits, agreed this *is* a form submit, and still: **See options is definitely not the answer.** Clicks submit the Loan inputs form and scroll to the bank table.

ASR heard “C option / C options”; events and screenshots fix that to **See options**.

## How the files join
- time: 378080–386840 ms (first “what is See options?”) and 427860–468760 ms (not a good answer / See banks / Submit)
- said: what is See options; don’t know what options; not a good answer; See banks is different; Submit is for form submits; See options is definitely not the answer
- did: focus+click `#hlc-see-options` and submit `#hlc-inputs` at 378089, 383489, 386609, 424777
- seeing: button on the form card (`0042.jpg`, `0043.jpg`); table after submit (`0045.jpg`, `0052.jpg`)
- therefore: the visible label See options does not say what the button does (submit the form / show bank rows)

## Pinpoint
On Explore banks, **See options** (`#hlc-see-options`) is a form-submit button whose label does not tell the user what “options” are; they rejected it versus See banks and versus Submit.

## Related discussion (not the issue itself)
- Placement of the same button (below Adjust eligibility, centered) is issue 06.
- Dropdown confusion on the neighboring Adjust eligibility control is issue 04.
- “Form. Just See options. Just move it.” bridges wording (this issue) into placement (issue 06).

## Chronology in this recording
- 00:06:18 “See options.” 00:06:25 “What is See options?”
- 00:07:07–00:07:17 Adjust eligibility and See options; don’t know what options; not a good answer.
- 00:07:20–00:07:24 See banks — both are very different.
- 00:07:26–00:07:38 See options / Submit / it is a form submit.
- 00:07:46 “See options is definitely not the answer.”

## Cross-recording continuation
Standalone as a label defect. Next folder still clicks See options but talks about columns, not renaming this button.

## Evidence by file (every file in the folder — no omissions)
- `audio.json` — segs 114–115, 135–148 “C option(s)” / Submit — `supports_issue`
- `audio.lrc` / `audio.srt` / `audio.text` / `audio.tsv` / `audio.txt` / `audio.vtt` / `audio_sentences.txt` — same; ASR “C options” — `supports_issue`
- `audio.webm` — binary — `checked_no_extra_signal`
- `console.json` — empty — `checked_no_extra_signal`
- `events.json` — accessible_name “See options”; css `#hlc-see-options`; type submit; form `#hlc-inputs` — `supports_issue`
- `index.html` — player — `checked_no_extra_signal`
- `manifest.json` — Explore banks — `timeline_alignment`
- `pages.json` — form Loan inputs; button not listed in the truncated actions list; events name it See options — `supports_issue`
- `replay.spec.ts` — `getByRole("button", { name: "See options" })` / `#hlc-see-options` — `supports_issue`
- `screenshots/0000.jpg`–`screenshots/0044.jpg` — See options on the form card — `supports_issue`
- `screenshots/0045.jpg`–`screenshots/0046.jpg` / `0052.jpg` — table after submit — `supports_issue`
- `screenshots/0047.jpg`–`screenshots/0066.jpg` — button stays on the Adjust eligibility row when expanded — `supports_issue`
- `screenshots/index.json` — interaction shots 0043, 0045, 0046, 0052 — `timeline_alignment`
- `tabs.json` — Explore banks — `timeline_alignment`
- `viewer.css` / `viewer.js` — generic — `checked_no_extra_signal`

## ASR notes
Every transcript says “C option / C options.” Join to **See options** via `#hlc-see-options` text and `replay.spec.ts`. “C banks” = See banks (they were contrasting labels). Used events+screenshots over raw “C.”

## JSON
```json
{
  "issue_id": "wb-rec-260815-2240/issue-05-see-options-label-unclear",
  "issue_title": "See options is not a clear label",
  "folder": "wb-rec-260815-2240",
  "sequence_index": 18,
  "recording_id": "a82e9a9f-c11f-4376-881d-25a436d5e6f5",
  "recording_started_at": "2026-08-15T17:10:04.687Z",
  "recording_ended_at": "2026-08-15T17:19:10.273Z",
  "duration_ms": 545586,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "See options button #hlc-see-options",
  "pinpoint": "On Explore banks they said See options is not a good answer: they do not know what options are, See banks would mean something else, and the control is a form submit.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md", "issue-06-see-options-not-below-centered.md"],
  "speech_clock": ["00:06:18,080-00:06:26,840", "00:07:07,860-00:07:48,760"],
  "event_t_ms": [378089, 378090, 383489, 383490, 386609, 424777, 424778],
  "screenshot_files": ["screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0045.jpg", "screenshots/0052.jpg"],
  "tags": ["copy", "interaction"],
  "quotes": [
    {"clock": "00:06:25,840", "text": "What is C option?", "artifact": "audio.srt"},
    {"clock": "00:07:13,920", "text": "I don't know what options.", "artifact": "audio.srt"},
    {"clock": "00:07:15,820", "text": "C options is not a good answer.", "artifact": "audio.srt"},
    {"clock": "00:07:20,200", "text": "C banks.", "artifact": "audio.srt"},
    {"clock": "00:07:46,260", "text": "C options is definitely not the answer.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 378089, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 383489, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 386609, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 424777, "name": "See options", "css": "#hlc-see-options"}
  ],
  "related_discussion_present": true
}
```
