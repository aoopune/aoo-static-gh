# Form goes up / results down — they need a button

After clicking **edit** on the results, the loan form came back above the table.
They asked what edit does, then said they need a button because the form went up and the answer went down and they did not see how.
They compared it to Myntra: cards are not identical; you change selection in a strict way; going back up should be an explicit control.

---
issue_id: "wb-rec-260815-2322/issue-04-edit-form-needs-button"
issue_title: "Form goes up / results down — they need a button"
folder: "wb-rec-260815-2322"
sequence_index: 23
recording_id: "bcd9788e-d24d-4ab3-8482-49a528a01c2f"
recording_started_at: "2026-08-15T17:52:41.328Z"
recording_ended_at: "2026-08-15T18:01:46.586Z"
duration_ms: 545258
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Edit inputs control next to Overview/Charges/Other charges"
pinpoint: "After edit brought the loan form back above the table, they said they need a button because the form went up and the answer went down without a clear control."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "continues_into"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2332"
related_issue_files: ["issue-03-results-tabs-table-gap-too-large.md"]
speech_clock: ["06:13.230-06:54.650"]
event_t_ms: [363770, 375158, 382123, 392224, 531102]
screenshot_files: ["screenshots/0050.png", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg"]
tags: ["interaction", "edit", "explore-banks"]
---

## Exact issue
On Explore banks, **Edit inputs** (`#hlc-edit-inputs`, label “edit”) reveals the loan form above the results. They did not want mystery scrolling: “Form goes up, answer goes down. How did it go up? I need a button.” The control that exists is the small **edit** control next to the Overview/Charges/Other charges tabs; they still treated going back to the form as needing a clear button.

## How the files join
Speech 06:13–06:54 while they clicked **Edit inputs** at 375158 ms (`0051.jpg`: form + table, 8 selected, Apply once) and again at 382123 ms (`0052.jpg`). Then “If you go to Mintra or something… Form goes up, answer goes down. How did it go up? I need a button.” `audio.json` at 413.75 s: “I need a button.” Next recording `wb-rec-260815-2332` opens on the same layout (`0000.jpg`) with “It's a good idea to clear this. Do you have a button for this?”

## Pinpoint
Explore banks — returning the loan form above the results (via **edit**) is not obvious; they said they need a button for form-up / answer-down.

## Related discussion
Tabs should live where edit is; then “no edit, let it scroll by itself”; Myntra cards not same-to-same, strict selection. After the button line they agreed the four data columns belong to the tab, five tabs to judge a home loan (rate, loan, tenure, EMI, processing / legal charges). Sandwich analogy: cut and it fitted — the UI fits. That later talk is praise of the tab model, not a second defect. They also selected all banks (363770) then deselected (531102).

## Chronology in this recording
| Clock | Speech | Action | Screen |
|---|---|---|---|
| 06:06–06:12 | Tab design: keep it; done, perfect | After Overview clicks | `0042.png`–`0048.png` |
| 06:13–06:26 | Where edit is, tabs will be; what does edit do; no edit | Click Edit inputs 375158 | `0051.jpg` form over table |
| 06:28–06:48 | Let it scroll; Myntra; if you want to go up, edit | Click edit again 382123 | `0052.jpg` |
| 06:50–06:54 | Form up, answer down; how; I need a button | Idle | `0053.jpg` |
| 07:00+ | View should stay like this; columns belong to tabs | Idle on form+table | `0054.jpg`–`0069.jpg` |
| 08:51 | Deselect all | Click deselect 531102 | `0070.jpg` Apply once paler |

## Cross-recording continuation
**Continues into** `wb-rec-260815-2332`: first lines ask whether there is a button (to clear / for this), then they accept and praise the tabs. Write only this folder’s part here.

## Evidence by file
- `events.json`: click `#hlc-edit-inputs` 375158, 382123; focus monthly income; deselect 531102.
- `replay.spec.ts`: same locators.
- `audio.srt` 06:50–06:54; `audio.json` “I need a button.”
- `screenshots/0051.jpg`–`0071.jpg`: form stacked above results after edit.
- Next folder `screenshots/0000.jpg`: same stacked layout at start.

## ASR notes
`audio.srt`: “Mintra”; `audio.tsv`: “Mintra or something.” Screenshot/context: shopping site with cards — ASR likely **Myntra**. Quoted raw “Mintra.” “I need a button” is consistent across srt/tsv/json.


### Complete file list (all 91 raw files)

- `audio.json`: whisper language mr (wrong); 218 segments; text compare banks / lenders / gap too much / I need a button.
- `audio.lrc`: timed or plain transcript of compare-banks, lenders, gap, edit-button talk.
- `audio.srt`: timed or plain transcript of compare-banks, lenders, gap, edit-button talk.
- `audio.text`: timed or plain transcript of compare-banks, lenders, gap, edit-button talk.
- `audio.tsv`: timed or plain transcript of compare-banks, lenders, gap, edit-button talk.
- `audio.txt`: timed or plain transcript of compare-banks, lenders, gap, edit-button talk.
- `audio.vtt`: timed or plain transcript of compare-banks, lenders, gap, edit-button talk.
- `audio.webm`: binary mic 8776574 bytes untranscribed.
- `audio_sentences.txt`: sentence dump same as audio.text.
- `console.json`: empty array [] — no console errors captured.
- `events.json`: 149 events; clicks Regular 24686, #hlc-th-bank 258218/260785, Charges/Other charges/Overview 274823-304656, select all 363770, Edit inputs 375158/382123, deselect 531102; property input 60,00,000; scrolls form then results.
- `index.html`: player shell Workbooks Recording; inlined manifest id bcd9788e-d24d-4ab3-8482-49a528a01c2f; inlined events and 72 screenshot entries; no extra discussion.
- `manifest.json`: id bcd9788e-d24d-4ab3-8482-49a528a01c2f; start_url explore-banks.html; started 2026-08-15T17:52:41.328Z; ended 2026-08-15T18:01:46.586Z; duration_ms 545258; events 149; screenshots 72; console 0; tabs 1; pages 1; viewport 1366x768 dsf 2; audio.webm.
- `pages.json`: title Explore banks – Shroffin; h1 Explore banks.; form Loan inputs; regions Bank options Filters; first_visit_t 180.
- `replay.spec.ts`: goto explore-banks.html; fill #hlc-property-value 60,00,000; click Regular; click #hlc-th-bank; click Charges Other charges Overview; click Edit inputs; click deselect.
- `tabs.json`: one tab 1351502398 url explore-banks.html entered_at 1786816361328 left_at 1786816906125.
- `viewer.css`: generic player chrome 17895 bytes; no session talk.
- `viewer.js`: generic player 32334 bytes; no session talk.
- `screenshots/index.json`: 72 shots t 182-540187; 0000-0030 jpg 0031-0050 png 0051-0071 jpg.
- `screenshots/0000.jpg`: t~0 form/results start; See options / Apply once; property 60L after 0003.
- `screenshots/0001.jpg`: t~1 form/results start; See options / Apply once; property 60L after 0003.
- `screenshots/0002.jpg`: t~2 form/results start; See options / Apply once; property 60L after 0003.
- `screenshots/0003.jpg`: t~3 form/results start; See options / Apply once; property 60L after 0003.
- `screenshots/0004.jpg`: t~4 form/results start; See options / Apply once; property 60L after 0003.
- `screenshots/0005.jpg`: t~5 form/results start; See options / Apply once; property 60L after 0003.
- `screenshots/0006.jpg`: t~6 form/results start; See options / Apply once; property 60L after 0003.
- `screenshots/0007.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0008.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0009.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0010.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0011.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0012.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0013.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0014.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0015.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0016.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0017.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0018.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0019.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0020.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0021.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0022.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0023.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0024.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0025.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0026.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0027.jpg`: idle on filled loan form during banks-vs-lenders talk.
- `screenshots/0028.jpg`: results table Overview Apply once Lenders column; gap under tabs.
- `screenshots/0029.jpg`: results table Overview Apply once Lenders column; gap under tabs.
- `screenshots/0030.jpg`: results table Overview Apply once Lenders column; gap under tabs.
- `screenshots/0031.png`: results table Overview Apply once Lenders column; gap under tabs.
- `screenshots/0032.png`: results table Overview Apply once Lenders column; gap under tabs.
- `screenshots/0033.png`: results table Overview Apply once Lenders column; gap under tabs.
- `screenshots/0034.png`: results table Overview Apply once Lenders column; gap under tabs.
- `screenshots/0035.png`: Charges or Other charges tab; bank names stay; four data columns change.
- `screenshots/0036.png`: Charges or Other charges tab; bank names stay; four data columns change.
- `screenshots/0037.png`: Charges or Other charges tab; bank names stay; four data columns change.
- `screenshots/0038.png`: Charges or Other charges tab; bank names stay; four data columns change.
- `screenshots/0039.png`: Charges or Other charges tab; bank names stay; four data columns change.
- `screenshots/0040.png`: Charges or Other charges tab; bank names stay; four data columns change.
- `screenshots/0041.png`: Charges or Other charges tab; bank names stay; four data columns change.
- `screenshots/0042.png`: Overview table; select-all at 0049.
- `screenshots/0043.png`: Overview table; select-all at 0049.
- `screenshots/0044.png`: Overview table; select-all at 0049.
- `screenshots/0045.png`: Overview table; select-all at 0049.
- `screenshots/0046.png`: Overview table; select-all at 0049.
- `screenshots/0047.png`: Overview table; select-all at 0049.
- `screenshots/0048.png`: Overview table; select-all at 0049.
- `screenshots/0049.png`: Overview table; select-all at 0049.
- `screenshots/0050.png`: Overview table; select-all at 0049.
- `screenshots/0051.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0052.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0053.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0054.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0055.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0056.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0057.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0058.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0059.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0060.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0061.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0062.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0063.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0064.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0065.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0066.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0067.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0068.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0069.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0070.jpg`: edit revealed form above table; 8 selected then deselect at 0070.
- `screenshots/0071.jpg`: edit revealed form above table; 8 selected then deselect at 0070.

## JSON
```json
{
  "id": "wb-rec-260815-2322/issue-04-edit-form-needs-button",
  "title": "Form goes up / results down — they need a button",
  "folder": "wb-rec-260815-2322",
  "sequence_index": 23,
  "recording_id": "bcd9788e-d24d-4ab3-8482-49a528a01c2f",
  "started_at": "2026-08-15T17:52:41.328Z",
  "ended_at": "2026-08-15T18:01:46.586Z",
  "duration_ms": 545258,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "object": "Edit inputs control next to Overview/Charges/Other charges",
  "pinpoint": "After edit brought the loan form back above the table, they said they need a button because the form went up and the answer went down without a clear control.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into",
  "continues_from": null,
  "continues_into": "wb-rec-260815-2332",
  "related_issues_in_folder": ["issue-03-results-tabs-table-gap-too-large.md"],
  "speech_clock": ["06:13.230-06:54.650"],
  "event_t_ms": [363770, 375158, 382123, 392224, 531102],
  "screenshot_files": ["screenshots/0050.png", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg"],
  "tags": ["interaction", "edit", "explore-banks"],
  "quotes": [
    {"clock": "06:50.250", "text": "Form goes up, answer goes down.", "artifact": "audio.srt"},
    {"clock": "06:53.750", "text": "I need a button.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 375158, "name": "Edit inputs", "css": "#hlc-edit-inputs"},
    {"t_ms": 382123, "name": "Edit inputs svg", "css": "button#hlc-edit-inputs > svg"}
  ],
  "related_discussion_present": true,
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg"]
}
```
