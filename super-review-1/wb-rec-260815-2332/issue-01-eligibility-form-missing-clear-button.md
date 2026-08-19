# Adjust eligibility has no Clear button

The loan form at the top of Explore banks is filled (existing EMIs ₹555 and the other fields), and they want a way to wipe it.
They ask whether there is a button for that, say every product has one, then accept going on without it.
This continues the same “edit form needs a button” talk from the previous recording.
The form shows See options but no Clear / reset control.

---
issue_id: "wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button"
issue_title: "Adjust eligibility has no Clear button"
folder: "wb-rec-260815-2332"
sequence_index: 24
recording_id: "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab"
recording_started_at: "2026-08-15T18:02:07.502Z"
recording_ended_at: "2026-08-15T18:11:22.771Z"
duration_ms: 555269
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Adjust eligibility / Loan inputs card (Existing EMIs ₹555, See options) — missing Clear/reset button"
pinpoint: "On Explore banks, the expanded Adjust eligibility card has no Clear (or reset) button; at 00:10 they said it is a good idea to clear the form and asked if there is a button, noting everyone has one."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2322"
continued_into_folder: null
related_issue_files: ["issue-04-apply-once-not-above-row-checkboxes.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.png", "screenshots/0003.png", "screenshots/0004.png", "screenshots/0005.png", "screenshots/0006.png", "screenshots/0007.png", "screenshots/0008.png", "screenshots/0009.png", "screenshots/0010.png", "screenshots/0011.png", "screenshots/0012.png", "screenshots/0013.png", "screenshots/0014.png", "screenshots/0015.png", "screenshots/0016.png", "screenshots/0017.png", "screenshots/0018.png", "screenshots/0019.png", "screenshots/0020.png", "screenshots/0021.png", "screenshots/0022.png", "screenshots/0023.png", "screenshots/0024.png", "screenshots/0025.png", "screenshots/0026.png", "screenshots/0027.png", "screenshots/0028.png", "screenshots/0029.png", "screenshots/0030.png", "screenshots/0031.png", "screenshots/0032.png", "screenshots/0033.png", "screenshots/0034.png", "screenshots/0035.png", "screenshots/0036.png", "screenshots/0037.png", "screenshots/0038.png", "screenshots/0039.png", "screenshots/0040.png", "screenshots/0041.png", "screenshots/0042.png", "screenshots/0043.png", "screenshots/0044.png", "screenshots/0045.png", "screenshots/0046.png", "screenshots/0047.png", "screenshots/0048.png", "screenshots/0049.png", "screenshots/0050.png", "screenshots/0051.png", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.png", "screenshots/0055.png", "screenshots/0056.png", "screenshots/0057.png", "screenshots/0058.png", "screenshots/0059.png", "screenshots/0060.png", "screenshots/0061.png", "screenshots/0062.png", "screenshots/0063.png", "screenshots/0064.png", "screenshots/0065.png", "screenshots/0066.png", "screenshots/0067.png", "screenshots/0068.png", "screenshots/0069.png", "screenshots/0070.png", "screenshots/0071.png", "screenshots/0072.png", "screenshots/0073.png", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:10.040–00:20.600"]
event_t_ms: [195, 5230, 9162]
screenshot_files: ["screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg"]
tags: ["interaction", "missing-control", "loan-form", "eligibility"]
---

## Exact issue
On Explore banks, the **Adjust eligibility** card is open with values already filled (Existing EMIs ₹555, credit-card limits ₹0, FOIR 55%, tenure 20, co-applicant No). They treat the missing wipe control as a real gap: they want to **clear this form** and ask for a **button**, the kind “everyone has”.

Joined object: the eligibility / loan-inputs card at the top of `explore-banks.html`, not the Filters “Clear all” on the left (that clears filters, not the form). Screenshot `0000.jpg` shows **See options** on the card and no Clear/reset on the form itself.

## How the files join
- time: 10040–20600 ms (00:10.040–00:20.600)
- said: audio.srt cue 1–6: “It's a good idea to clear this.” / “Do you have a button for this?” / “I don't know.” / “Everyone has a button like this.” / “Okay.” / “I accept.” audio.json first segments match: “It's a good idea to clear this.” / “Do you have a button for this?” / “Everyone has a button like this.” / “I accept.”
- did: idle + small scrolls (events t=5230, 9162); they do not click a Clear control because none exists on the form. Previous recording ended on **Edit inputs** opening this same card (`wb-rec-260815-2322` clicks at t=375158 / 382123).
- seeing: `screenshots/0000.jpg` (t=196) Adjust eligibility expanded; `0001.jpg` after scroll. Filters sidebar has “Clear all”; the form does not.
- page: `http://localhost:8765/pages/explore-banks.html` — pages.json p1 “Loan inputs” / landmark “Loan details for bank options”.
- therefore: the defect is a **missing Clear/reset button on the eligibility form**.

## Pinpoint
Explore banks → Adjust eligibility (loan inputs) card → no Clear/reset button, while the form is already filled and they explicitly asked for one.

## Related discussion (not the issue itself)
After “I accept.” they immediately praise the **Overview / Charges / Other charges** tabs (“These tabs are the best. Columns belong to this tab.”) and the Chrome-like tab animation — that is praise, not this issue. Sort arrows (“I definitely like this button. Up and down.”) are also praise. Filters “Clear all” is a different control; they did not click it.

## Chronology in this recording
- 00:10–00:16: ask to clear the filled form; ask for a button; “everyone has a button like this.”
- 00:17–00:20: “Okay.” “I accept.” — they park the request and move on.
- Rest of session: form stays filled (₹555 still on `0074.jpg` / `0075.jpg` at the end). They never get a clear action.

## Cross-recording continuation
**Continues from `wb-rec-260815-2322`.** That session’s last non-idle work is clicking **Edit inputs** / focusing Monthly income on this same card (events ~375158–383234). Gap ~21s. This recording’s first words are the clear-button ask on that open form. Does not continue into `wb-rec-260815-2341` (that folder opens still on More details for Bank of Maharashtra).

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
- `screenshots/0000.jpg` — t=196 start; Adjust eligibility expanded (Existing EMIs ₹555, See options); Overview table; no Clear button on the form. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0001.jpg` — t=8199 periodic; eligibility card scrolled up; table + Filters; still no form Clear. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0002.png` — t=18198; Overview/Charges/Other charges tabs; Lenders table; Fixed selected. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0003.png` — t=26198; same Overview table; they praise tabs. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0004.png` — t=36197; same; columns belong to tab talk. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0005.png` — t=44197; Rate Floating selected in later shots but here still table. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0006.png` — t=52197; Bank of Maharashtra ₹47,92,101 appears vs ₹48,00,000 others. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0007.png` — t=60198; same table; sort arrows visible. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0008.png` — t=64215 interaction More on PNB; More details drawer Scheme open. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0009.png` — t=67532 after Close; table restored. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0010.png` — t=76197; table after drawer close. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0011.png` — t=78681 Rate header click; sort on Rate. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0012.png` — t=79665 Rate span click. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0013.png` — t=81497 Loan amount header click. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0014.png` — t=90189 periodic after loan-amount sort. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0015.png` — t=97011 Loan amount sort icon click; BOM ₹47,92,101. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0016.png` — t=99304 Tenure sort. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0017.png` — t=100073 Tenure sort again. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0018.png` — t=108175 periodic tenure-sorted table. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0019.png` — t=118173 periodic. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0020.png` — t=125770 EMI header click; EMI ascending. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0021.png` — t=134169 EMI-sorted table; exact 8.75%/8.80% rates. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0022.png` — t=142169 same. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0023.png` — t=150169 same. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0024.png` — t=158169 same; PNB highlighted. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0025.png` — t=161601 EMI drawer for PNB ₹42,418 formula. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0026.png` — t=163899 after backdrop close. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0027.png` — t=172168 table; Lenders header. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0028.png` — t=180169 same. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0029.png` — t=188169 before select-all. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0030.png` — t=189933 Select all; 8 selected; Apply once. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0031.png` — t=198168 8 selected still. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0032.png` — t=201801 Deselect all; Apply once idle. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0033.png` — t=210169 scrolled; Data last checked on 14 July 2026 visible. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0034.png` — t=218169 Data last checked on still visible. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0035.png` — t=228169 Data last checked on; Apply once above table. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0036.png` — t=236169 footer Chat now; data last checked. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0037.png` — t=246170 full table + data last checked. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0038.png` — t=256169 scrolled up toward table top. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0039.png` — t=261995 click Lenders header area. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0040.png` — t=270169 table after lenders-header click. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0041.png` — t=280169 same. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0042.png` — t=290169 same. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0043.png` — t=296705 click main. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0044.png` — t=299796 Floating filter selected; rates drop to ~7.25%. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0045.png` — t=308169 Show 23 more banks visible. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0046.png` — t=311261 after Show 23 more banks; longer list. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0047.png` — t=320169 expanded bank list. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0048.png` — t=328169 expanded list. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0049.png` — t=336169 expanded list. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0050.png` — t=344169 expanded list. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0051.png` — t=352169 South Indian Bank highlighted; truncated first row. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0052.jpg` — t=356193 33 selected; Apply once; navigate toward apply. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0053.jpg` — t=360381 back on explore-banks after apply bounce. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0054.png` — t=370169 23 selected; table after return. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0055.png` — t=380169 More details opening for BOM; empty scheme fields in one frame. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0056.png` — t=388169 More details Scheme filled (Maha Super Housing Loan). Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0057.png` — t=396169 More details with Eligibility/How the rate is built. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0058.png` — t=406169 How the rate is built: repo 5.25 markup 2.80 discount 0.80 = 7.25%. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0059.png` — t=416169 Eligibility CIBIL 750–799 Age 18–75 Salaried. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0060.png` — t=424169 Discounts all None. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0061.png` — t=432169 Eligibility + rate build. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0062.png` — t=440171 Facility Term loan Rate type Floating. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0063.png` — t=450169 Discounts None vs 0.80% in rate build. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0064.png` — t=458169 Charges at the start list. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0065.png` — t=466169 CIC charges ₹100/₹1,000. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0066.png` — t=474169 Other charges accordion. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0067.png` — t=482169 Other charges including Not published by bank. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0068.png` — t=490169 Fees that may apply later list (loan document copy). Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0069.png` — t=498169 Incidental Loan Closure Charge highlighted. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0070.png` — t=506169 Account Handling Charge 0.10% min ₹500 max ₹11,000. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0071.png` — t=514169 same Account Handling Charge expanded. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0072.png` — t=522169 Discounts None; GST applicable footnote. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0073.png` — t=530172 Expand all; Scheme+Eligibility. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0074.jpg` — t=540170 Adjust eligibility + More details collapsed list. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.
- `screenshots/0075.jpg` — t=550169 same end state; More details still open — continues to 2341. Used: supports this issue for 0000–0001 and 0074–0075 (form still filled); other shots = later topics.

## ASR notes
- `audio.srt` / `audio.tsv`: “It's a good idea to clear this.”
- `audio.json` segment 1: “It's a good idea to clear this.” (same intent). Language field `mr` is wrong.
- Low-probability words on “clear” / “button”; screenshot of the filled eligibility card makes the intended meaning obvious (ASR likely meant: clear this form). Quoted raw ASR above; not silently corrected.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2332/issue-01-eligibility-form-missing-clear-button",
  "issue_title": "Adjust eligibility has no Clear button",
  "folder": "wb-rec-260815-2332",
  "sequence_index": 24,
  "recording_id": "244b886f-17a3-4f87-b2bf-d28ddfbcf6ab",
  "recording_started_at": "2026-08-15T18:02:07.502Z",
  "recording_ended_at": "2026-08-15T18:11:22.771Z",
  "duration_ms": 555269,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "Adjust eligibility / Loan inputs card (Existing EMIs \u20b9555, See options) \u2014 missing Clear/reset button",
  "pinpoint": "On Explore banks, the expanded Adjust eligibility card has no Clear (or reset) button; at 00:10 they said it is a good idea to clear the form and asked if there is a button, noting everyone has one.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2322",
  "continued_into_folder": null,
  "related_issue_files": [
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
    "00:10.040\u201300:20.600"
  ],
  "event_t_ms": [
    195,
    5230,
    9162
  ],
  "screenshot_files": [
    "screenshots/0000.jpg",
    "screenshots/0001.jpg",
    "screenshots/0074.jpg",
    "screenshots/0075.jpg"
  ],
  "tags": [
    "interaction",
    "missing-control",
    "loan-form",
    "eligibility"
  ]
}
```
