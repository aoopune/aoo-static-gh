# Exact rates and loan amounts shown without a star

The results table prints exact rates (8.75%, 8.80%) and odd exact loan amounts (₹47,92,101) with no asterisk.
They say that exact figure without a star, then that they will put a star — including in charges — so the site stands behind the number.
They also notice age caps changing how much loan appears (₹5,000 / ₹15,000 / ₹20,000 in speech) while looking at those cells.

---
issue_id: "wb-rec-260815-2332/issue-02-exact-rate-and-loan-amount-without-star"
issue_title: "Exact rates and loan amounts shown without a star"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options table cells: Rate (8.75%, 8.80%) and Loan amount (₹48,00,000 vs Bank of Maharashtra ₹47,92,101) — no asterisk/footnote"
pinpoint: "On Explore banks Overview, exact Rate and Loan amount figures are shown without a star; at 02:07 they said the site has taken an exact amount without a star (8.7, 8.8) and that they will put a star, including in charges."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-03-lenders-word-not-used-everywhere-instead-of-banks.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.png", "screenshots/0070.png", "screenshots/0071.png", "screenshots/0072.png", "screenshots/0073.png", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["01:26.570–02:36.240"]
event_t_ms: [63812, 67129, 78278, 81091, 96608, 98900, 125366, 161200]
screenshot_files: ["screenshots/0006.png", "screenshots/0011.png", "screenshots/0015.png", "screenshots/0021.png", "screenshots/0025.png"]
tags: ["trust", "copy", "data", "rates", "asterisk"]
---

## Exact issue
On the Explore banks **Overview** table, **Rate** and **Loan amount** are shown as exact numbers (PNB 8.75%, Canara 8.80%; most loans ₹48,00,000; Bank of Maharashtra **₹47,92,101**) with **no star / footnote** on those cells. After sorting those columns they say the site has taken an **exact amount without a star**, quote 8.7 / 8.8, say it inspires confidence, then **“So I will put a star. In charges.”** and **“At least stand behind something.”**

The joined object is those numeric cells (and later they mention putting the star in **charges**). This is not praise of the numbers; the praise (“inspires a lot of confidence”) is why they still want a star — so they can stand behind the exact figure.

## How the files join
- time: 86570–156240 ms (01:26.570–02:36.240), after they have clicked Rate / Loan amount / Tenure / EMI headers (t=78278, 81091, 96608, 98900, 125366).
- said: srt 17–39: “What is this?” “I will give you a loan of Rs.99.99.” “I will give you a loan of Rs.7,99.” “They have a fixed rate of Rs.10.” “There are age restrictions.” “The max is 30.” “But if you are only 50, then you will get a loan of Rs.5,000.” … “They have taken an exact amount without a star.” “8.7, 8.8.” “This inspires a lot of confidence.” “8 star.” “So I will put a star.” “In charges.” audio.json: “They have taken an exact amount without a star.” “8.7, 8.8.” “So I will put a star.” “In charges.”
- did: More on PNB (t=63812) then Close (67129); then sort Rate, Loan amount (₹47,92,101 rises), Tenure, EMI; later EMI drawer on ₹42,418 (t=161200) — related inspection of exact figures, then closed.
- seeing: `0006.png`/`0015.png` BOM loan **₹47,92,101** vs others ₹48,00,000; `0021.png` rates 8.75 / 8.80 with no asterisk; `0025.png` EMI formula showing exact ₹42,418.
- page: Overview table, columns Rate and Loan amount (`th#hlc-th-effectiveRoiPct`, `#hlc-th-loanAmount`).
- therefore: exact published figures without a star/disclaimer.

## Pinpoint
Explore banks → Overview table → Rate and Loan amount cells print exact values (8.75%, ₹47,92,101, etc.) with no asterisk; they said they will add a star so the product stands behind the number, including in charges.

## Related discussion (not the issue itself)
- “What is this?” while looking at the odd ₹47,92,101 / spoken “Rs.99.99” / “Rs.7,99” — ASR of the odd amount, not a second issue.
- Age restrictions (max 30; if you are 50 you get a smaller loan) — they are explaining **why** amounts differ, still on the same exact-figure problem.
- “Charges are okay.” then “At least stand behind something.” / “I don't know if this is a star or not.”
- EMI drawer math (`0025.png`) is them inspecting how an exact EMI is built; they close it; not a separate defect in this recording.
- Later More details “How the rate is built” (7.25% = 5.25+2.80−0.80) is related confidence in exact rates, not a new complaint.

## Chronology in this recording
- 01:17 praise of up/down sort buttons (not this issue).
- 01:26–01:58: “What is this?” + loan-amount / age-cap talk while clicking Loan amount and seeing BOM’s odd rupee figure.
- 02:07–02:21: exact amount without a star; 8.7, 8.8; will put a star.
- 02:22–02:36: star in charges; stand behind something; unsure if current mark is a star.

## Cross-recording continuation
Standalone in this folder. Previous folder was on Edit inputs / tabs, not asterisks. Next folder continues **More details** for Bank of Maharashtra, not this star talk.

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
- `screenshots/0000.jpg` — t=196 start; Adjust eligibility expanded (Existing EMIs ₹555, See options); Overview table; no Clear button on the form. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0001.jpg` — t=8199 periodic; eligibility card scrolled up; table + Filters; still no form Clear. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0002.png` — t=18198; Overview/Charges/Other charges tabs; Lenders table; Fixed selected. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0003.png` — t=26198; same Overview table; they praise tabs. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0004.png` — t=36197; same; columns belong to tab talk. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0005.png` — t=44197; Rate Floating selected in later shots but here still table. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0006.png` — t=52197; Bank of Maharashtra ₹47,92,101 appears vs ₹48,00,000 others. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0007.png` — t=60198; same table; sort arrows visible. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0008.png` — t=64215 interaction More on PNB; More details drawer Scheme open. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0009.png` — t=67532 after Close; table restored. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0010.png` — t=76197; table after drawer close. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0011.png` — t=78681 Rate header click; sort on Rate. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0012.png` — t=79665 Rate span click. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0013.png` — t=81497 Loan amount header click. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0014.png` — t=90189 periodic after loan-amount sort. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0015.png` — t=97011 Loan amount sort icon click; BOM ₹47,92,101. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0016.png` — t=99304 Tenure sort. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0017.png` — t=100073 Tenure sort again. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0018.png` — t=108175 periodic tenure-sorted table. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0019.png` — t=118173 periodic. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0020.png` — t=125770 EMI header click; EMI ascending. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0021.png` — t=134169 EMI-sorted table; exact 8.75%/8.80% rates. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0022.png` — t=142169 same. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0023.png` — t=150169 same. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0024.png` — t=158169 same; PNB highlighted. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0025.png` — t=161601 EMI drawer for PNB ₹42,418 formula. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0026.png` — t=163899 after backdrop close. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0027.png` — t=172168 table; Lenders header. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0028.png` — t=180169 same. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0029.png` — t=188169 before select-all. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0030.png` — t=189933 Select all; 8 selected; Apply once. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0031.png` — t=198168 8 selected still. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0032.png` — t=201801 Deselect all; Apply once idle. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0033.png` — t=210169 scrolled; Data last checked on 14 July 2026 visible. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0034.png` — t=218169 Data last checked on still visible. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0035.png` — t=228169 Data last checked on; Apply once above table. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0036.png` — t=236169 footer Chat now; data last checked. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0037.png` — t=246170 full table + data last checked. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0038.png` — t=256169 scrolled up toward table top. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0039.png` — t=261995 click Lenders header area. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0040.png` — t=270169 table after lenders-header click. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0041.png` — t=280169 same. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0042.png` — t=290169 same. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0043.png` — t=296705 click main. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0044.png` — t=299796 Floating filter selected; rates drop to ~7.25%. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0045.png` — t=308169 Show 23 more banks visible. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0046.png` — t=311261 after Show 23 more banks; longer list. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0047.png` — t=320169 expanded bank list. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0048.png` — t=328169 expanded list. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0049.png` — t=336169 expanded list. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0050.png` — t=344169 expanded list. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0051.png` — t=352169 South Indian Bank highlighted; truncated first row. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0052.jpg` — t=356193 33 selected; Apply once; navigate toward apply. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0053.jpg` — t=360381 back on explore-banks after apply bounce. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0054.png` — t=370169 23 selected; table after return. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0055.png` — t=380169 More details opening for BOM; empty scheme fields in one frame. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0056.png` — t=388169 More details Scheme filled (Maha Super Housing Loan). Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0057.png` — t=396169 More details with Eligibility/How the rate is built. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0058.png` — t=406169 How the rate is built: repo 5.25 markup 2.80 discount 0.80 = 7.25%. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0059.png` — t=416169 Eligibility CIBIL 750–799 Age 18–75 Salaried. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0060.png` — t=424169 Discounts all None. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0061.png` — t=432169 Eligibility + rate build. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0062.png` — t=440171 Facility Term loan Rate type Floating. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0063.png` — t=450169 Discounts None vs 0.80% in rate build. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0064.png` — t=458169 Charges at the start list. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0065.png` — t=466169 CIC charges ₹100/₹1,000. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0066.png` — t=474169 Other charges accordion. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0067.png` — t=482169 Other charges including Not published by bank. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0068.png` — t=490169 Fees that may apply later list (loan document copy). Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0069.png` — t=498169 Incidental Loan Closure Charge highlighted. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0070.png` — t=506169 Account Handling Charge 0.10% min ₹500 max ₹11,000. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0071.png` — t=514169 same Account Handling Charge expanded. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0072.png` — t=522169 Discounts None; GST applicable footnote. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0073.png` — t=530172 Expand all; Scheme+Eligibility. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0074.jpg` — t=540170 Adjust eligibility + More details collapsed list. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.
- `screenshots/0075.jpg` — t=550169 same end state; More details still open — continues to 2341. Used: 0011–0025 support exact Rate/Loan/EMI without a star; 0006/0015 BOM ₹47,92,101; later 0058+ rate-build is related discussion.

## ASR notes
- srt: “I will give you a loan of Rs.99.99” / “Rs.7,99” — does not match any on-screen ₹99.99; screenshot shows **₹47,92,101** and ₹48,00,000. Prefer screen; raw ASR quoted (likely misheard the odd loan amount).
- “fixed rate of Rs.10” — Filters **Fixed** is selected in those shots; ASR likely “fixed rate” not rupees 10. Word “Rs.10” vs filter **Fixed** / rates near 10.65% (Bank of India). Join prefers the Fixed filter + 8.7/8.8 rates they then cite.
- audio.json: “They have taken an exact amount without a star.” agrees with srt and with the lack of `*` on rate cells.
- “8 star” vs “So I will put a star” — json “8 star” then “So I will put a star.”

## JSON

```json
{
  "issue_id": "wb-rec-260815-2332/issue-02-exact-rate-and-loan-amount-without-star",
  "issue_title": "Exact rates and loan amounts shown without a star",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "recording_started_at": "2026-08-15T18:02:07.502Z",
  "recording_ended_at": "2026-08-15T18:11:22.771Z",
  "duration_ms": 555269,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "Bank options table cells: Rate (8.75%, 8.80%) and Loan amount (\u20b948,00,000 vs Bank of Maharashtra \u20b947,92,101) \u2014 no asterisk/footnote",
  "pinpoint": "On Explore banks Overview, exact Rate and Loan amount figures are shown without a star; at 02:07 they said the site has taken an exact amount without a star (8.7, 8.8) and that they will put a star, including in charges.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": [
    "issue-03-lenders-word-not-used-everywhere-instead-of-banks.md"
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
    "01:26.570\u201302:36.240"
  ],
  "event_t_ms": [
    63812,
    67129,
    78278,
    81091,
    96608,
    98900,
    125366,
    161200
  ],
  "screenshot_files": [
    "screenshots/0006.png",
    "screenshots/0011.png",
    "screenshots/0015.png",
    "screenshots/0021.png",
    "screenshots/0025.png"
  ],
  "tags": [
    "trust",
    "copy",
    "data",
    "rates",
    "asterisk"
  ]
}
```
