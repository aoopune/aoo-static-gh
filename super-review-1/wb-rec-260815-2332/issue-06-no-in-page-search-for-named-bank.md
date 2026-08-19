# No way on the page to search for a named bank

They imagine 25–30 banks on the list and ask how they would find SBI.
There is no search box; they open Floating, show 23 more banks, and talk about cognitive load if search is added.
They say when the list opens, rate should already be sorted lowest to highest, and that Control-F can hold a search instead of a new control.

---
issue_id: "wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank"
issue_title: "No way on the page to search for a named bank"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options list (first ~10 rows + “Show 23 more banks”) with no in-page search field for a bank name such as SBI"
pinpoint: "On Explore banks, with ~10 rows then Show 23 more banks, there is no in-page search for a named bank; at 04:40 they asked how to search for SBI among 25–30 banks, then said a search control is extra cognitive load and Control-F will hold it, with default sort by rate lowest to highest."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-03-lenders-word-not-used-everywhere-instead-of-banks.md", "issue-04-apply-once-not-above-row-checkboxes.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.png", "screenshots/0070.png", "screenshots/0071.png", "screenshots/0072.png", "screenshots/0073.png", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["04:18.220–05:46.050"]
event_t_ms: [296303, 299394, 304104, 310859, 314735, 321636]
screenshot_files: ["screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0051.png"]
tags: ["interaction", "search", "cognitive-load", "sort", "navigation"]
---

## Exact issue
They set up the user job: **25–30 banks on this list**, **want SBI**, **how do I search for it?** The screen has **no search field**. They click **Floating**, then **Show 23 more banks**, and argue that adding a search control would be **cognitive load** (SBI “doesn’t look nice”; click-to-bring-SBI-down). They also state the default: **when it opens, rate is sorted lowest to highest** because **rate is the main thing**. They close with **who will search the bank? Control F will hold it.**

Joined object: the Bank options list + missing in-page bank-name search, including the truncated first-10 / “Show 23 more banks” pattern.

## How the files join
- time: 258220–346050 ms (04:18–05:46)
- said: srt 61–86: “Suppose there are 25-30 banks here.” “And I want to search for SBI.” “Then how do I search for it?” … “We were only showing them the previous 10.” “If we control the search, the SBI doesn't look nice.” “That's my cognitive load.” “When it opens, by default, the rate is sorted. Lowest to highest.” “But who will search the bank? Control F will hold it.”
- did: click main (296303); **Floating** (299394) — rates jump to 7.25% band (`0044.png`); scroll; **Show 23 more banks** (310859) — `0045.png`/`0046.png` long list; more scrolling looking for a named bank.
- seeing: before expand, ~7–10 rows + “Show 23 more banks”; after expand, Axis/Union/IOB/PNB etc., still **no search box**. SBI is not in the visible rows they scroll.
- page: Explore banks, Bank options / Filters (Rate = Floating).
- therefore: users cannot search a named bank on the page; they treat that as a problem, then reject a heavy search UI in favour of default rate-sort + Ctrl+F.

## Pinpoint
Explore banks → bank list (paginated with Show 23 more banks) has no in-page search for a name like SBI; they asked how to search, called a search control cognitive load, and said Control-F would hold it, with default sort by rate lowest to highest.

## Related discussion (not the issue itself)
- “Navani is sorting / going to jail / perfect bank” — side talk, not a second issue.
- “Let's see the floating slip” → they click **Floating** (ASR “floating slip”).
- “I don't want to show the survey” — ASR; join with “don't add a search UI / extra widget”.
- “It's like a search symbol” — analogy that sort/rate already works like search.
- More details / charges / vertical-vs-horizontal after 06:23 is a **new stretch of exploration**, mostly praise (“Nice”), not this search issue. Next recording continues More details for Bank of Maharashtra (“this is definitely good information”).

## Chronology in this recording
- 04:22–04:38 side talk while idle on the table.
- 04:40–04:50 SBI search question.
- 04:55–05:02 Floating; scroll down.
- 05:03–05:15 only showing previous 10; search control would be ugly / cognitive load.
- 05:17–05:26 default rate sort lowest to highest.
- 05:29–05:39 search symbol vs who will search; Ctrl+F.
- 05:43 Okay. Then they later click Show 23 more banks (05:10 event 310859 ≈ 05:10).

Wait clock: Show 23 more is t=310859 = 05:10.859, which sits **inside** the search speech (05:03–05:15). Good join.

## Cross-recording continuation
Topic starts and ends in this folder (they resolve to Ctrl+F). Next folder does not continue SBI search; it continues More details on Bank of Maharashtra.

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
- `screenshots/0000.jpg` — t=196 start; Adjust eligibility expanded (Existing EMIs ₹555, See options); Overview table; no Clear button on the form. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0001.jpg` — t=8199 periodic; eligibility card scrolled up; table + Filters; still no form Clear. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0002.png` — t=18198; Overview/Charges/Other charges tabs; Lenders table; Fixed selected. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0003.png` — t=26198; same Overview table; they praise tabs. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0004.png` — t=36197; same; columns belong to tab talk. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0005.png` — t=44197; Rate Floating selected in later shots but here still table. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0006.png` — t=52197; Bank of Maharashtra ₹47,92,101 appears vs ₹48,00,000 others. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0007.png` — t=60198; same table; sort arrows visible. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0008.png` — t=64215 interaction More on PNB; More details drawer Scheme open. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0009.png` — t=67532 after Close; table restored. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0010.png` — t=76197; table after drawer close. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0011.png` — t=78681 Rate header click; sort on Rate. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0012.png` — t=79665 Rate span click. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0013.png` — t=81497 Loan amount header click. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0014.png` — t=90189 periodic after loan-amount sort. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0015.png` — t=97011 Loan amount sort icon click; BOM ₹47,92,101. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0016.png` — t=99304 Tenure sort. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0017.png` — t=100073 Tenure sort again. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0018.png` — t=108175 periodic tenure-sorted table. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0019.png` — t=118173 periodic. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0020.png` — t=125770 EMI header click; EMI ascending. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0021.png` — t=134169 EMI-sorted table; exact 8.75%/8.80% rates. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0022.png` — t=142169 same. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0023.png` — t=150169 same. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0024.png` — t=158169 same; PNB highlighted. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0025.png` — t=161601 EMI drawer for PNB ₹42,418 formula. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0026.png` — t=163899 after backdrop close. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0027.png` — t=172168 table; Lenders header. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0028.png` — t=180169 same. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0029.png` — t=188169 before select-all. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0030.png` — t=189933 Select all; 8 selected; Apply once. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0031.png` — t=198168 8 selected still. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0032.png` — t=201801 Deselect all; Apply once idle. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0033.png` — t=210169 scrolled; Data last checked on 14 July 2026 visible. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0034.png` — t=218169 Data last checked on still visible. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0035.png` — t=228169 Data last checked on; Apply once above table. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0036.png` — t=236169 footer Chat now; data last checked. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0037.png` — t=246170 full table + data last checked. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0038.png` — t=256169 scrolled up toward table top. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0039.png` — t=261995 click Lenders header area. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0040.png` — t=270169 table after lenders-header click. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0041.png` — t=280169 same. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0042.png` — t=290169 same. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0043.png` — t=296705 click main. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0044.png` — t=299796 Floating filter selected; rates drop to ~7.25%. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0045.png` — t=308169 Show 23 more banks visible. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0046.png` — t=311261 after Show 23 more banks; longer list. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0047.png` — t=320169 expanded bank list. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0048.png` — t=328169 expanded list. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0049.png` — t=336169 expanded list. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0050.png` — t=344169 expanded list. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0051.png` — t=352169 South Indian Bank highlighted; truncated first row. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0052.jpg` — t=356193 33 selected; Apply once; navigate toward apply. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0053.jpg` — t=360381 back on explore-banks after apply bounce. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0054.png` — t=370169 23 selected; table after return. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0055.png` — t=380169 More details opening for BOM; empty scheme fields in one frame. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0056.png` — t=388169 More details Scheme filled (Maha Super Housing Loan). Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0057.png` — t=396169 More details with Eligibility/How the rate is built. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0058.png` — t=406169 How the rate is built: repo 5.25 markup 2.80 discount 0.80 = 7.25%. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0059.png` — t=416169 Eligibility CIBIL 750–799 Age 18–75 Salaried. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0060.png` — t=424169 Discounts all None. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0061.png` — t=432169 Eligibility + rate build. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0062.png` — t=440171 Facility Term loan Rate type Floating. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0063.png` — t=450169 Discounts None vs 0.80% in rate build. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0064.png` — t=458169 Charges at the start list. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0065.png` — t=466169 CIC charges ₹100/₹1,000. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0066.png` — t=474169 Other charges accordion. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0067.png` — t=482169 Other charges including Not published by bank. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0068.png` — t=490169 Fees that may apply later list (loan document copy). Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0069.png` — t=498169 Incidental Loan Closure Charge highlighted. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0070.png` — t=506169 Account Handling Charge 0.10% min ₹500 max ₹11,000. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0071.png` — t=514169 same Account Handling Charge expanded. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0072.png` — t=522169 Discounts None; GST applicable footnote. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0073.png` — t=530172 Expand all; Scheme+Eligibility. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0074.jpg` — t=540170 Adjust eligibility + More details collapsed list. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.
- `screenshots/0075.jpg` — t=550169 same end state; More details still open — continues to 2341. Used: 0044 Floating; 0045 Show 23 more banks; 0046–0051 expanded list still without a search field.

## ASR notes
- srt “SBI” vs some English “SBI”; audio.json “SBI” / “search for SBI”. Screenshot never shows an SBI row — that absence is the point.
- “floating slip” → click **Floating** at 299394; ASR likely “floating” (rate type).
- “I don't want to show the survey” — no survey on screen; treat as related talk about not adding extra UI.
- “Skiing lane / Left side floating wall” later (06:27) is More details, not this issue (ASR garbage; drawer sections Eligibility / Discounts).

## JSON

```json
{
  "issue_id": "wb-rec-260815-2332/issue-06-no-in-page-search-for-named-bank",
  "issue_title": "No way on the page to search for a named bank",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "recording_started_at": "2026-08-15T18:02:07.502Z",
  "recording_ended_at": "2026-08-15T18:11:22.771Z",
  "duration_ms": 555269,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "Bank options list (first ~10 rows + \u201cShow 23 more banks\u201d) with no in-page search field for a bank name such as SBI",
  "pinpoint": "On Explore banks, with ~10 rows then Show 23 more banks, there is no in-page search for a named bank; at 04:40 they asked how to search for SBI among 25\u201330 banks, then said a search control is extra cognitive load and Control-F will hold it, with default sort by rate lowest to highest.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [
    "issue-03-lenders-word-not-used-everywhere-instead-of-banks.md",
    "issue-04-apply-once-not-above-row-checkboxes.md"
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
    "04:18.220\u201305:46.050"
  ],
  "event_t_ms": [
    296303,
    299394,
    304104,
    310859,
    314735,
    321636
  ],
  "screenshot_files": [
    "screenshots/0044.png",
    "screenshots/0045.png",
    "screenshots/0046.png",
    "screenshots/0047.png",
    "screenshots/0051.png"
  ],
  "tags": [
    "interaction",
    "search",
    "cognitive-load",
    "sort",
    "navigation"
  ]
}
```
