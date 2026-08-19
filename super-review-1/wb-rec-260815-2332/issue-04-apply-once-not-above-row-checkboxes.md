# Apply once is not on top of the row checkboxes

After calling the table beautiful, they say Apply should sit here on top of these checkboxes.
The checkboxes are the first column of each bank row; Apply once sits up on the right of the tab bar.
They then select all rows so Apply once lights up, which is the same control they wanted moved.

---
issue_id: "wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes"
issue_title: "Apply once is not on top of the row checkboxes"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Apply once button (#hlc-apply-btn) vs the bank-row checkboxes in the first table column"
pinpoint: "On Explore banks, Apply once sits on the right of the Overview tab bar rather than on top of the row checkboxes; at 03:17 they said Apply should come here on top of these checkboxes."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: false
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-eligibility-form-missing-clear-button.md", "issue-06-no-in-page-search-for-named-bank.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.png", "screenshots/0070.png", "screenshots/0071.png", "screenshots/0072.png", "screenshots/0073.png", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["03:15.650–03:20.690"]
event_t_ms: [189529, 201401, 355791, 357026]
screenshot_files: ["screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0052.jpg"]
tags: ["layout", "interaction", "apply", "checkboxes"]
---

## Exact issue
They point at the **row checkboxes** and say **Apply should come here on top of these checkboxes**. On screen, **Apply once** is on the **far right of the tab row** (Overview / Charges / Other charges), not stacked above the checkbox column.

Joined object: `#hlc-apply-btn` (“Apply once” / “Apply once to 33 banks”) versus `th#hlc-th-bank` select-all + per-row checkboxes.

## How the files join
- time: 195650–200690 ms (03:15.650–03:20.690)
- said: srt 46–47: “Beautiful.” “Apply should come here on top of these checkboxes.”
- did: ~11s later, Select all visible banks (t=189529) — “8 selected” appears next to Apply once (`0030.png`); Deselect (t=201401); much later Select all again (355791) and click Apply once (357026) which goes to apply.html and immediately back.
- seeing: `0030.png` checkboxes in column 1, Apply once top-right with “8 selected”; `0032.png` after deselect, Apply once still top-right.
- page: Explore banks, Bank options table.
- therefore: Apply once is in the wrong place relative to the checkboxes they just used.

## Pinpoint
Explore banks → Apply once is on the tab bar’s right, not on top of the bank-row checkboxes, which is where they said it should sit.

## Related discussion (not the issue itself)
“Beautiful.” is about the table they are looking at, immediately before the placement instruction. Selecting all / deselecting is them operating the same checkbox + Apply once system. The brief apply.html visit (Review your application) is a click-through, not a new complaint in this recording.

## Chronology in this recording
- 03:15 Beautiful.
- 03:17 Apply should come on top of these checkboxes.
- 03:09 (clock 03:09 event 189529 is 03:09.5) wait: speech at 03:17 is *before* the 189529 click? 197410 ms = 03:17, click select-all at 189529 = 03:09. So they selected all first (~03:09, 8 selected), then at 03:17 said Apply should sit on top of those checkboxes.
- 03:21 deselect.
- 05:55 select all 33 and Apply once (navigation).

## Cross-recording continuation
Standalone here. Previous folder also used Apply once / 8 selected but the placement sentence is first spoken in this recording.

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
- `screenshots/0000.jpg` — t=196 start; Adjust eligibility expanded (Existing EMIs ₹555, See options); Overview table; no Clear button on the form. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0001.jpg` — t=8199 periodic; eligibility card scrolled up; table + Filters; still no form Clear. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0002.png` — t=18198; Overview/Charges/Other charges tabs; Lenders table; Fixed selected. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0003.png` — t=26198; same Overview table; they praise tabs. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0004.png` — t=36197; same; columns belong to tab talk. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0005.png` — t=44197; Rate Floating selected in later shots but here still table. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0006.png` — t=52197; Bank of Maharashtra ₹47,92,101 appears vs ₹48,00,000 others. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0007.png` — t=60198; same table; sort arrows visible. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0008.png` — t=64215 interaction More on PNB; More details drawer Scheme open. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0009.png` — t=67532 after Close; table restored. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0010.png` — t=76197; table after drawer close. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0011.png` — t=78681 Rate header click; sort on Rate. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0012.png` — t=79665 Rate span click. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0013.png` — t=81497 Loan amount header click. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0014.png` — t=90189 periodic after loan-amount sort. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0015.png` — t=97011 Loan amount sort icon click; BOM ₹47,92,101. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0016.png` — t=99304 Tenure sort. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0017.png` — t=100073 Tenure sort again. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0018.png` — t=108175 periodic tenure-sorted table. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0019.png` — t=118173 periodic. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0020.png` — t=125770 EMI header click; EMI ascending. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0021.png` — t=134169 EMI-sorted table; exact 8.75%/8.80% rates. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0022.png` — t=142169 same. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0023.png` — t=150169 same. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0024.png` — t=158169 same; PNB highlighted. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0025.png` — t=161601 EMI drawer for PNB ₹42,418 formula. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0026.png` — t=163899 after backdrop close. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0027.png` — t=172168 table; Lenders header. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0028.png` — t=180169 same. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0029.png` — t=188169 before select-all. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0030.png` — t=189933 Select all; 8 selected; Apply once. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0031.png` — t=198168 8 selected still. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0032.png` — t=201801 Deselect all; Apply once idle. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0033.png` — t=210169 scrolled; Data last checked on 14 July 2026 visible. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0034.png` — t=218169 Data last checked on still visible. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0035.png` — t=228169 Data last checked on; Apply once above table. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0036.png` — t=236169 footer Chat now; data last checked. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0037.png` — t=246170 full table + data last checked. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0038.png` — t=256169 scrolled up toward table top. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0039.png` — t=261995 click Lenders header area. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0040.png` — t=270169 table after lenders-header click. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0041.png` — t=280169 same. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0042.png` — t=290169 same. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0043.png` — t=296705 click main. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0044.png` — t=299796 Floating filter selected; rates drop to ~7.25%. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0045.png` — t=308169 Show 23 more banks visible. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0046.png` — t=311261 after Show 23 more banks; longer list. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0047.png` — t=320169 expanded bank list. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0048.png` — t=328169 expanded list. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0049.png` — t=336169 expanded list. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0050.png` — t=344169 expanded list. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0051.png` — t=352169 South Indian Bank highlighted; truncated first row. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0052.jpg` — t=356193 33 selected; Apply once; navigate toward apply. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0053.jpg` — t=360381 back on explore-banks after apply bounce. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0054.png` — t=370169 23 selected; table after return. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0055.png` — t=380169 More details opening for BOM; empty scheme fields in one frame. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0056.png` — t=388169 More details Scheme filled (Maha Super Housing Loan). Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0057.png` — t=396169 More details with Eligibility/How the rate is built. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0058.png` — t=406169 How the rate is built: repo 5.25 markup 2.80 discount 0.80 = 7.25%. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0059.png` — t=416169 Eligibility CIBIL 750–799 Age 18–75 Salaried. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0060.png` — t=424169 Discounts all None. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0061.png` — t=432169 Eligibility + rate build. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0062.png` — t=440171 Facility Term loan Rate type Floating. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0063.png` — t=450169 Discounts None vs 0.80% in rate build. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0064.png` — t=458169 Charges at the start list. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0065.png` — t=466169 CIC charges ₹100/₹1,000. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0066.png` — t=474169 Other charges accordion. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0067.png` — t=482169 Other charges including Not published by bank. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0068.png` — t=490169 Fees that may apply later list (loan document copy). Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0069.png` — t=498169 Incidental Loan Closure Charge highlighted. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0070.png` — t=506169 Account Handling Charge 0.10% min ₹500 max ₹11,000. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0071.png` — t=514169 same Account Handling Charge expanded. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0072.png` — t=522169 Discounts None; GST applicable footnote. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0073.png` — t=530172 Expand all; Scheme+Eligibility. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0074.jpg` — t=540170 Adjust eligibility + More details collapsed list. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.
- `screenshots/0075.jpg` — t=550169 same end state; More details still open — continues to 2341. Used: 0030–0032 and 0052 are the key Apply once vs checkbox shots; 0000–0029 show Apply once already top-right before they name the defect.

## ASR notes
srt / tsv / json agree: “Apply should come here on top of these checkboxes.” No conflict.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2332/issue-04-apply-once-not-above-row-checkboxes",
  "issue_title": "Apply once is not on top of the row checkboxes",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "recording_started_at": "2026-08-15T18:02:07.502Z",
  "recording_ended_at": "2026-08-15T18:11:22.771Z",
  "duration_ms": 555269,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "Apply once button (#hlc-apply-btn) vs the bank-row checkboxes in the first table column",
  "pinpoint": "On Explore banks, Apply once sits on the right of the Overview tab bar rather than on top of the row checkboxes; at 03:17 they said Apply should come here on top of these checkboxes.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": false,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [
    "issue-01-eligibility-form-missing-clear-button.md",
    "issue-06-no-in-page-search-for-named-bank.md"
  ],
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
    "03:15.650\u201303:20.690"
  ],
  "event_t_ms": [
    189529,
    201401,
    355791,
    357026
  ],
  "screenshot_files": [
    "screenshots/0030.png",
    "screenshots/0031.png",
    "screenshots/0032.png",
    "screenshots/0052.jpg"
  ],
  "tags": [
    "layout",
    "interaction",
    "apply",
    "checkboxes"
  ]
}
```
