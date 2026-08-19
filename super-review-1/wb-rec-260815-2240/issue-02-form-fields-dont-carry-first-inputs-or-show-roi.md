# Form fields do not carry the first inputs or show ROI first

If you enter income first, the other fields do not keep all of that information.
Changing property value or age then drops monthly income and changes ROI, but ROI is not shown first.
They said you need two tips, because you cannot see where the numbers come from.
Google-style sites were the comparison: put a fact in one place and you still do not know where it will appear.

---
issue_id: "wb-rec-260815-2240/issue-02-form-fields-dont-carry-first-inputs-or-show-roi"
issue_title: "Form fields do not carry the first inputs or show ROI first"
folder: "wb-rec-260815-2240"
sequence_index: 18
recording_id: "a82e9a9f-c11f-4376-881d-25a436d5e6f5"
recording_started_at: "2026-08-15T17:10:04.687Z"
recording_ended_at: "2026-08-15T17:19:10.273Z"
duration_ms: 545586
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs fields: Monthly income, Property agreement value, Age, and the Rate column on the bank table"
pinpoint: "On Explore banks they said you cannot take all pieces of the first information: put income, then change property value and age, monthly income falls and ROI changes, but ROI is not shown first; screenshots 0032–0042 show those fields on the form and Rate on the table."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-explore-banks-not-obvious-at-a-glance.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0028.jpg", "screenshots/0032.jpg", "screenshots/0035.jpg", "screenshots/0041.jpg", "screenshots/0045.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:04:38,640-00:05:48,640", "278640-348640ms"]
event_t_ms: [278732, 280166, 353351, 355051, 356750, 365383]
screenshot_files: ["screenshots/0032.jpg", "screenshots/0035.jpg", "screenshots/0041.jpg", "screenshots/0045.jpg"]
tags: ["interaction", "copy", "trust"]
---

## Exact issue
On Explore banks, after the glance/tooltips talk, they said the first information you put in cannot be fully reused. Example: put income, then change property value, then change age; monthly income goes down; ROI changes; **but first tell me what the ROI is**. They said Google sites do not hold the same information in one place, so if you put one fact you do not know where it will come from. They concluded **we need two tips**. On screen: Monthly income ₹1,00,000, Property agreement value ₹6,000, Age 35, and a Rate column on the lender table (often redacted in the recording).

Raw ASR (`audio.srt`): "If you put the first information… You can't take all the pieces of the first information." "Suppose I put the income there. Then I change the property value. Then I change the age. Then the monthly income will go down." "ROI will change. But before that, tell me what is the ROI?" "We need two tips."

## How the files join
- time: 278640–348640 ms (00:04:38–00:05:48)
- said (`audio.srt` / `audio.tsv` / `audio.json` segs 77–102): cannot take all pieces of first information; income → property → age → monthly income down; ROI changes without being shown first; Google sites lack the same information; need two tips
- did (`events.json`): idle plus scrolls 278732 y=287, 280166 y=106, later 353351–365383 while still on the form — they were looking at the fields, not typing this example
- seeing: `screenshots/0032.jpg`–`0041.jpg` form fields; `0045.jpg` table with Rate / loan amount / EMI after a later See options click
- page/object: Loan inputs Monthly income, Property agreement value, Age; Bank options Rate column
- therefore: linked fields do not carry the first input through, and ROI/rate is not explained before it changes

## Pinpoint
On Explore banks, Monthly income, Property agreement value, and Age do not keep all of the first information you enter; changing property or age is described as dropping monthly income and changing ROI, while ROI is not shown first, so they asked for two tips.

## Related discussion (not the issue itself)
- Follows issue 01’s “three tooltips / table at the bottom.” The two tips here are specifically about **where numbers come from** and **what ROI is**, not the whole-page glance.
- “Google sites don't have the same information” (`audio.srt`); `audio.tsv` “Google sites.” Likely meant a spreadsheet/site that does not share one source of truth. Quoted as ASR “Google sites.”
- ASR “ROI” in a home-loan table with a **Rate** column: likely rate of interest; quoted as ROI.
- API aside at 00:05:49 (“this one is API… otherwise this is all front-end”) is implementation talk, not a second defect.

## Chronology in this recording
- 00:04:38 “If you put it here, what can you do about it?”
- 00:04:49–00:04:55 cannot take all pieces of the first information (repeated).
- 00:05:12–00:05:23 income, then property, then age, monthly income down, ROI changes, ask ROI first.
- 00:05:34–00:05:42 Google sites / do not know where information will come from.
- 00:05:47–00:05:48 “We need two tips.”

## Cross-recording continuation
Standalone as a website defect. Related to issue 01 in this folder. Previous folder was sampling/opinionated product. Next folder is Adjust eligibility / columns, not this cascade.

## Evidence by file (every file in the folder — no omissions)
- `audio.json` — segs 77–102 word times for first-information / ROI / two tips; language `mr` ignored — `supports_issue`
- `audio.lrc` — timed lines for the same stretch — `supports_issue`
- `audio.srt` — primary quotes — `supports_issue`
- `audio.text` — plain dump — `supports_issue`
- `audio.tsv` — ms clock 278640–348640 — `supports_issue`
- `audio.txt` — second dump — `supports_issue`
- `audio.vtt` — same cues — `supports_issue`
- `audio.webm` — binary; not listened — `checked_no_extra_signal`
- `audio_sentences.txt` — same claims in sentence form — `supports_issue`
- `console.json` — empty — `checked_no_extra_signal`
- `events.json` — scrolls around the form during this talk; no field edits until later Age/See options — `supports_issue`
- `index.html` — player only — `checked_no_extra_signal`
- `manifest.json` — Explore banks session window — `timeline_alignment`
- `pages.json` — field names Monthly income, Property agreement value, Age; Rate not a form field but table column — `supports_issue`
- `replay.spec.ts` — later Age fill 35; does not replay the spoken cascade — `timeline_alignment`
- `screenshots/0000.jpg`–`screenshots/0031.jpg` — form showing the three fields before/during setup — `timeline_alignment`
- `screenshots/0032.jpg`–`screenshots/0042.jpg` — form in view while they describe cascade and ROI — `supports_issue`
- `screenshots/0043.jpg`–`screenshots/0046.jpg` — See options / table Rate column after submit — `supports_issue`
- `screenshots/0047.jpg`–`screenshots/0066.jpg` — later Adjust eligibility; checked not to merge into this issue — `checked_no_extra_signal`
- `screenshots/index.json` — shot times for 0032–0046 — `timeline_alignment`
- `tabs.json` — still Explore banks — `timeline_alignment`
- `viewer.css` / `viewer.js` — generic player — `checked_no_extra_signal`

## ASR notes
Conflict: `audio.srt` “Google sites” vs possible “Google Sheets.” All artifacts say “sites.” Quoted “Google sites.” “ROI” vs on-screen Rate: quoted ROI, likely rate of interest. “two tips” is consistent (`audio.tsv` “We need two tips.”).

## JSON
```json
{
  "issue_id": "wb-rec-260815-2240/issue-02-form-fields-dont-carry-first-inputs-or-show-roi",
  "issue_title": "Form fields do not carry the first inputs or show ROI first",
  "folder": "wb-rec-260815-2240",
  "sequence_index": 18,
  "recording_id": "a82e9a9f-c11f-4376-881d-25a436d5e6f5",
  "recording_started_at": "2026-08-15T17:10:04.687Z",
  "recording_ended_at": "2026-08-15T17:19:10.273Z",
  "duration_ms": 545586,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Monthly income, Property agreement value, Age, and table Rate column",
  "pinpoint": "On Explore banks they said you cannot take all pieces of the first information: income then property then age makes monthly income fall and ROI change, but ROI is not shown first; they asked for two tips.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-explore-banks-not-obvious-at-a-glance.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0028.jpg", "screenshots/0032.jpg", "screenshots/0035.jpg", "screenshots/0041.jpg", "screenshots/0045.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:04:38,640-00:05:48,640", "278640-348640ms"],
  "event_t_ms": [278732, 280166, 353351, 355051, 356750, 365383],
  "screenshot_files": ["screenshots/0032.jpg", "screenshots/0035.jpg", "screenshots/0041.jpg", "screenshots/0045.jpg"],
  "tags": ["interaction", "copy", "trust"],
  "quotes": [
    {"clock": "00:04:51,020", "text": "You can't take all the pieces of the first information.", "artifact": "audio.srt"},
    {"clock": "00:05:12,460", "text": "Suppose I put the income there.", "artifact": "audio.srt"},
    {"clock": "00:05:21,360", "text": "ROI will change. But before that, tell me what is the ROI?", "artifact": "audio.srt"},
    {"clock": "00:05:47,980", "text": "We need two tips.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
