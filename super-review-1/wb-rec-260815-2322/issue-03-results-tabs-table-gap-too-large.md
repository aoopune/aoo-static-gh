# Too much gap between the result tabs and the table

They liked the results header block, then said there is a little gap between the buttons and the table, then a little more, then “but it’s too much.”
On screen that is the Overview / Charges / Other charges tabs (and Apply once) sitting above the Lenders table with a large empty band.
They also said the header colour is different so they “don’t know the header.”

---
issue_id: "wb-rec-260815-2322/issue-03-results-tabs-table-gap-too-large"
issue_title: "Too much gap between the result tabs and the table"
folder: "wb-rec-260815-2322"
sequence_index: 23
recording_id: "bcd9788e-d24d-4ab3-8482-49a528a01c2f"
recording_started_at: "2026-08-15T17:52:41.328Z"
recording_ended_at: "2026-08-15T18:01:46.586Z"
duration_ms: 545258
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Space between Overview/Charges/Other charges (and Apply once) and the Lenders table"
pinpoint: "They said the gap between the result tabs/buttons and the table is too large, and the header colour does not read as a header."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-04-edit-form-needs-button.md"]
speech_clock: ["03:52.290-04:36.950"]
event_t_ms: [227465, 232400, 250932, 258218, 260785]
screenshot_files: ["screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0034.png"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg"]
tags: ["layout", "spacing", "explore-banks"]
---

## Exact issue
On Explore banks results, the space between the **Overview / Charges / Other charges** tab row (plus **Apply once**) and the **Lenders** table is too large. They asked to tighten it (“a little more”) and then judged the current gap **too much**. Related: the header strip colour does not read clearly as the table header.

## How the files join
At ~03:52 they scrolled the results into view (227465, 232400, 235099, 250932 ms). Speech 03:52–04:36: “The header block. It looks good. … The color is also different. We don't know the header. … There is a little gap between the buttons and the table. … A little more. … But it's too much.” Screenshots `0028.jpg`–`0034.png` show Overview selected, **Apply once**, then a wide white gap, then Lenders / Rate / Loan amount / Tenure / EMI. Clicks on `#hlc-th-bank` (258218, 260785) while pointing at the bank column. No click on the gap itself; they were looking at it while idle.

## Pinpoint
Explore banks results — the gap between the tab/button row and the Lenders table is too large; the header colour also fails to read as a header.

## Related discussion
Lender column: “I don't know if it's high or low” (sorted Rate 8.75% upward). Chrome-circle / tab switcher talk that follows is a **different** question (whether tabs should cover only the four data columns). They later said that tab-scope design is **not** a problem (“Done. It's perfect.”) — not this issue.

## Chronology in this recording
| Clock | Speech | Action | Screen |
|---|---|---|---|
| 03:47–04:11 | Header looks good; lender high/low; colour different; don't know the header | Scroll to results | `0028.jpg`–`0030.jpg` |
| 04:13–04:36 | Little gap buttons-to-table; a little more; too much | Idle; click bank header | `0031.png`–`0034.png` |

## Cross-recording continuation
**Standalone.** Previous folder ended before this layout pass. Next folder praises the tabs and asks for a clear button — not this gap.

## Evidence by file
- `audio.srt` 03:54–04:35: header good; gap; too much.
- `events.json`: scrolls 227465–250932; clicks `#hlc-th-bank` 258218 / 260785.
- `screenshots/0028.jpg`–`0034.png`: visible empty band under Overview/Charges/Other charges and Apply once.
- `pages.json`: region Bank options; heading Bank options.
- Other audio/player files: timeline only.

## ASR notes
`audio.tsv`: “There is a little gap between the buttons and the table.” `audio.json` ~258–275 s same. “Header block” vs “header” — screenshots show the results chrome, not the site nav. Used srt + screenshot.


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
  "id": "wb-rec-260815-2322/issue-03-results-tabs-table-gap-too-large",
  "title": "Too much gap between the result tabs and the table",
  "folder": "wb-rec-260815-2322",
  "sequence_index": 23,
  "recording_id": "bcd9788e-d24d-4ab3-8482-49a528a01c2f",
  "started_at": "2026-08-15T17:52:41.328Z",
  "ended_at": "2026-08-15T18:01:46.586Z",
  "duration_ms": 545258,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "object": "Space between Overview/Charges/Other charges (and Apply once) and the Lenders table",
  "pinpoint": "They said the gap between the result tabs/buttons and the table is too large, and the header colour does not read as a header.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continues_from": null,
  "continues_into": null,
  "related_issues_in_folder": ["issue-04-edit-form-needs-button.md"],
  "speech_clock": ["03:52.290-04:36.950"],
  "event_t_ms": [227465, 232400, 250932, 258218, 260785],
  "screenshot_files": ["screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0034.png"],
  "tags": ["layout", "spacing", "explore-banks"],
  "quotes": [
    {"clock": "04:18.110", "text": "There is a little gap between the buttons and the table.", "artifact": "audio.srt"},
    {"clock": "04:33.790", "text": "But it's too much.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 258218, "name": "Lenders header", "css": "#hlc-th-bank"}],
  "related_discussion_present": true,
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/index.json", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg"]
}
```
