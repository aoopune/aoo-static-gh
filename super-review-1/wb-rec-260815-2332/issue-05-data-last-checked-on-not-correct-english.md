# “Data last checked on” is not correct English

Under the bank table a line reads “Data last checked on 14 July 2026”.
They say that sentence is not correct English and ask for polished English.
They suggest wording like “Accuracy guaranteed” or “updated as of”.

---
issue_id: "wb-rec-260815-2332/issue-05-data-last-checked-on-not-correct-english"
issue_title: "“Data last checked on” is not correct English"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Footer line under the bank table: “Data last checked on 14 July 2026”"
pinpoint: "On Explore banks, the line under the table “Data last checked on 14 July 2026” is the sentence they called not correct English (03:32), asking for polished English such as Accuracy guaranteed or updated as of."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: []
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.png", "screenshots/0070.png", "screenshots/0071.png", "screenshots/0072.png", "screenshots/0073.png", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["03:32.030–03:57.550"]
event_t_ms: [206003, 207234, 224005, 242502, 247102, 248535, 251368, 256337]
screenshot_files: ["screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png"]
tags: ["copy", "english", "trust", "freshness"]
---

## Exact issue
After scrolling the bank table, the line **“Data last checked on 14 July 2026”** sits under the rows. They quote that sentence and say it is **not correct English**, and ask to **make it good polished English**, offering **“Accuracy guaranteed”** or **“updated as of.”**

Joined object: that one freshness line under the Overview table (not the Chat now footer).

## How the files join
- time: 212030–237550 ms (03:32.030–03:57.550)
- said: srt 48–51: “This sentence, data last checked on, is not correct English.” “Just make it good polished English.” “Something like maybe Accuracy guaranteed or updated as of.” audio.json: “This sentence, data last checked on, is not correct English.” / “Accuracy guaranteed or updated as of.”
- did: series of scrolls t=206003–256337 bringing the table foot into view (y up to 1681 then back).
- seeing: `0033.png`–`0037.png` explicitly show **“Data last checked on 14 July 2026.”**
- page: Explore banks, under Bank options table.
- therefore: the freshness sentence is badly worded English.

## Pinpoint
Explore banks → table footer “Data last checked on 14 July 2026” → they called it incorrect English and asked for polished phrasing (accuracy guaranteed / updated as of).

## Related discussion (not the issue itself)
Suggested replacements are brainstorming, not extra issues. “Navani is sorting” / “Are you going to jail?” immediately after is a side conversation (ASR of a name + joke) while they stay on this page; it is not a second product defect.

## Chronology in this recording
- ~03:26–03:31 scrolls to table bottom.
- 03:32–03:36 name the sentence; not correct English.
- 03:38–03:57 ask for polished English; offer Accuracy guaranteed / updated as of.
- 04:18 “Like this.” then they move to search-for-SBI (issue-06).

## Cross-recording continuation
Standalone. Not in 2322 ending or 2341 opening.

## Evidence by file (every raw file)
- `audio.webm` — 8,938,066-byte WebM mic capture; not listened; speech taken from text artifacts. Used: timeline only.
- `audio.srt` — timed cues, primary speech clock (cues 1–150, 00:10.040–09:14.550).
- `audio.tsv` — same lines with ms start/end (10040–554550).
- `audio.vtt` — WebVTT duplicate of srt times.
- `audio.lrc` — lyric-style timestamps matching srt.
- `audio.text` — untimed transcript (same words as srt).
- `audio.txt` — timestamped dump matching srt ranges.
- `audio_sentences.txt` — one-block transcript, same content.
- `audio.json` — Whisper object, language tag `mr` (wrong; speech is English/Hindi mix), 150 segments, word timings; first segment 10.04s “It's a good idea to clear this.”
- `manifest.json` — id 244b886f-17a3-4f87-b2bf-d28ddfbcf6ab; start_url explore-banks.html; also apply.html; 2026-08-15T18:02:07.502Z–18:11:22.771Z; 555269ms; 158 events; 76 screenshots; viewport 1366×768 @2x.
- `events.json` — 158 events: landmark, scrolls, clicks (More, Close, Rate/Loan/Tenure/EMI sorts, EMI drawer, Select all/Deselect, Floating, Show 23 more banks, Select all, Apply once), navigations explore-banks→apply→explore-banks.
- `pages.json` — page p1 Explore banks – Shroffin; p2 Review your application – Shroffin at t=357084.
- `tabs.json` — one tab 1351502398 on explore-banks.html for the whole session (apply visit too short to split the tab record).
- `console.json` — `[]`; no console errors.
- `replay.spec.ts` — Playwright locators matching events (More svg, drawer close, sort headers, Floating, #hlc-show-more, #hlc-apply-btn, apply.html).
- `index.html` — generic Workbooks player shell; inlined manifest/events/tabs/shots JSON; no extra discussion.
- `viewer.js` — generic player (747 lines); no session talk.
- `viewer.css` — generic player styles (661 lines); no session talk.
- `screenshots/index.json` — 76 shots, t=196–550169, urls explore-banks.html (apply visit captured as 0052/0053 on explore-banks after bounce).
- `screenshots/0000.jpg` — t=196 start; Adjust eligibility expanded (Existing EMIs ₹555, See options); Overview table; no Clear button on the form. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0001.jpg` — t=8199 periodic; eligibility card scrolled up; table + Filters; still no form Clear. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0002.png` — t=18198; Overview/Charges/Other charges tabs; Lenders table; Fixed selected. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0003.png` — t=26198; same Overview table; they praise tabs. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0004.png` — t=36197; same; columns belong to tab talk. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0005.png` — t=44197; Rate Floating selected in later shots but here still table. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0006.png` — t=52197; Bank of Maharashtra ₹47,92,101 appears vs ₹48,00,000 others. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0007.png` — t=60198; same table; sort arrows visible. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0008.png` — t=64215 interaction More on PNB; More details drawer Scheme open. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0009.png` — t=67532 after Close; table restored. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0010.png` — t=76197; table after drawer close. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0011.png` — t=78681 Rate header click; sort on Rate. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0012.png` — t=79665 Rate span click. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0013.png` — t=81497 Loan amount header click. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0014.png` — t=90189 periodic after loan-amount sort. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0015.png` — t=97011 Loan amount sort icon click; BOM ₹47,92,101. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0016.png` — t=99304 Tenure sort. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0017.png` — t=100073 Tenure sort again. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0018.png` — t=108175 periodic tenure-sorted table. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0019.png` — t=118173 periodic. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0020.png` — t=125770 EMI header click; EMI ascending. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0021.png` — t=134169 EMI-sorted table; exact 8.75%/8.80% rates. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0022.png` — t=142169 same. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0023.png` — t=150169 same. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0024.png` — t=158169 same; PNB highlighted. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0025.png` — t=161601 EMI drawer for PNB ₹42,418 formula. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0026.png` — t=163899 after backdrop close. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0027.png` — t=172168 table; Lenders header. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0028.png` — t=180169 same. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0029.png` — t=188169 before select-all. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0030.png` — t=189933 Select all; 8 selected; Apply once. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0031.png` — t=198168 8 selected still. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0032.png` — t=201801 Deselect all; Apply once idle. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0033.png` — t=210169 scrolled; Data last checked on 14 July 2026 visible. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0034.png` — t=218169 Data last checked on still visible. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0035.png` — t=228169 Data last checked on; Apply once above table. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0036.png` — t=236169 footer Chat now; data last checked. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0037.png` — t=246170 full table + data last checked. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0038.png` — t=256169 scrolled up toward table top. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0039.png` — t=261995 click Lenders header area. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0040.png` — t=270169 table after lenders-header click. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0041.png` — t=280169 same. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0042.png` — t=290169 same. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0043.png` — t=296705 click main. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0044.png` — t=299796 Floating filter selected; rates drop to ~7.25%. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0045.png` — t=308169 Show 23 more banks visible. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0046.png` — t=311261 after Show 23 more banks; longer list. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0047.png` — t=320169 expanded bank list. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0048.png` — t=328169 expanded list. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0049.png` — t=336169 expanded list. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0050.png` — t=344169 expanded list. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0051.png` — t=352169 South Indian Bank highlighted; truncated first row. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0052.jpg` — t=356193 33 selected; Apply once; navigate toward apply. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0053.jpg` — t=360381 back on explore-banks after apply bounce. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0054.png` — t=370169 23 selected; table after return. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0055.png` — t=380169 More details opening for BOM; empty scheme fields in one frame. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0056.png` — t=388169 More details Scheme filled (Maha Super Housing Loan). Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0057.png` — t=396169 More details with Eligibility/How the rate is built. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0058.png` — t=406169 How the rate is built: repo 5.25 markup 2.80 discount 0.80 = 7.25%. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0059.png` — t=416169 Eligibility CIBIL 750–799 Age 18–75 Salaried. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0060.png` — t=424169 Discounts all None. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0061.png` — t=432169 Eligibility + rate build. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0062.png` — t=440171 Facility Term loan Rate type Floating. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0063.png` — t=450169 Discounts None vs 0.80% in rate build. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0064.png` — t=458169 Charges at the start list. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0065.png` — t=466169 CIC charges ₹100/₹1,000. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0066.png` — t=474169 Other charges accordion. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0067.png` — t=482169 Other charges including Not published by bank. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0068.png` — t=490169 Fees that may apply later list (loan document copy). Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0069.png` — t=498169 Incidental Loan Closure Charge highlighted. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0070.png` — t=506169 Account Handling Charge 0.10% min ₹500 max ₹11,000. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0071.png` — t=514169 same Account Handling Charge expanded. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0072.png` — t=522169 Discounts None; GST applicable footnote. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0073.png` — t=530172 Expand all; Scheme+Eligibility. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0074.jpg` — t=540170 Adjust eligibility + More details collapsed list. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.
- `screenshots/0075.jpg` — t=550169 same end state; More details still open — continues to 2341. Used: 0033–0037 (and 0044) show the Data last checked on line; other shots do not include that footer.

## ASR notes
- srt: “data last checked on”
- screenshot: **“Data last checked on 14 July 2026.”**
- audio.json: “data last checked on”
Prefer the screenshot wording for the on-screen object; quote ASR as “data last checked on”. Same sentence.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2332/issue-05-data-last-checked-on-not-correct-english",
  "issue_title": "\u201cData last checked on\u201d is not correct English",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "recording_started_at": "2026-08-15T18:02:07.502Z",
  "recording_ended_at": "2026-08-15T18:11:22.771Z",
  "duration_ms": 555269,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "Footer line under the bank table: \u201cData last checked on 14 July 2026\u201d",
  "pinpoint": "On Explore banks, the line under the table \u201cData last checked on 14 July 2026\u201d is the sentence they called not correct English (03:32), asking for polished English such as Accuracy guaranteed or updated as of.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [],
  "source_files_used": [
    "audio.json",
    "audio.lrc",
    "audio.srt",
    "audio.text",
    "audio.tsv",
    "audio.txt",
    "audio.vtt",
    "audio.webm",
    "audio_sentences.txt",
    "console.json",
    "events.json",
    "index.html",
    "manifest.json",
    "pages.json",
    "replay.spec.ts",
    "screenshots/0000.jpg",
    "screenshots/0001.jpg",
    "screenshots/0002.png",
    "screenshots/0003.png",
    "screenshots/0004.png",
    "screenshots/0005.png",
    "screenshots/0006.png",
    "screenshots/0007.png",
    "screenshots/0008.png",
    "screenshots/0009.png",
    "screenshots/0010.png",
    "screenshots/0011.png",
    "screenshots/0012.png",
    "screenshots/0013.png",
    "screenshots/0014.png",
    "screenshots/0015.png",
    "screenshots/0016.png",
    "screenshots/0017.png",
    "screenshots/0018.png",
    "screenshots/0019.png",
    "screenshots/0020.png",
    "screenshots/0021.png",
    "screenshots/0022.png",
    "screenshots/0023.png",
    "screenshots/0024.png",
    "screenshots/0025.png",
    "screenshots/0026.png",
    "screenshots/0027.png",
    "screenshots/0028.png",
    "screenshots/0029.png",
    "screenshots/0030.png",
    "screenshots/0031.png",
    "screenshots/0032.png",
    "screenshots/0033.png",
    "screenshots/0034.png",
    "screenshots/0035.png",
    "screenshots/0036.png",
    "screenshots/0037.png",
    "screenshots/0038.png",
    "screenshots/0039.png",
    "screenshots/0040.png",
    "screenshots/0041.png",
    "screenshots/0042.png",
    "screenshots/0043.png",
    "screenshots/0044.png",
    "screenshots/0045.png",
    "screenshots/0046.png",
    "screenshots/0047.png",
    "screenshots/0048.png",
    "screenshots/0049.png",
    "screenshots/0050.png",
    "screenshots/0051.png",
    "screenshots/0052.jpg",
    "screenshots/0053.jpg",
    "screenshots/0054.png",
    "screenshots/0055.png",
    "screenshots/0056.png",
    "screenshots/0057.png",
    "screenshots/0058.png",
    "screenshots/0059.png",
    "screenshots/0060.png",
    "screenshots/0061.png",
    "screenshots/0062.png",
    "screenshots/0063.png",
    "screenshots/0064.png",
    "screenshots/0065.png",
    "screenshots/0066.png",
    "screenshots/0067.png",
    "screenshots/0068.png",
    "screenshots/0069.png",
    "screenshots/0070.png",
    "screenshots/0071.png",
    "screenshots/0072.png",
    "screenshots/0073.png",
    "screenshots/0074.jpg",
    "screenshots/0075.jpg",
    "screenshots/index.json",
    "tabs.json",
    "viewer.css",
    "viewer.js"
  ],
  "speech_clock": [
    "03:32.030\u201303:57.550"
  ],
  "event_t_ms": [
    206003,
    207234,
    224005,
    242502,
    247102,
    248535,
    251368,
    256337
  ],
  "screenshot_files": [
    "screenshots/0033.png",
    "screenshots/0034.png",
    "screenshots/0035.png",
    "screenshots/0036.png",
    "screenshots/0037.png"
  ],
  "tags": [
    "copy",
    "english",
    "trust",
    "freshness"
  ]
}
```
