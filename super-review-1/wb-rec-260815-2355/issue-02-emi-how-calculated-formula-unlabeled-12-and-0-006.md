# EMI how-calculated formula leaves 12 and 0.006 unnamed

On Explore banks they opened Bank of Maharashtra’s EMI drawer (₹37,938).
The formula shows 7.25% ÷ 12 and a bare 0.00604167 with no word “months” or “monthly rate”.
They asked why yearly interest is needed, why it says “into”, and what 0.06 is.
They still called showing EMI math revolutionary — that praise is not this issue.

---
issue_id: "wb-rec-260815-2355/issue-02-emi-how-calculated-formula-unlabeled-12-and-0-006"
issue_title: "EMI how-calculated formula leaves 12 and 0.006 unnamed"
folder: "wb-rec-260815-2355"
sequence_index: 26
recording_id: "2136e699-2334-4e39-a724-eb3e92e1d3bd"
recording_started_at: "2026-08-15T18:25:24.871Z"
recording_ended_at: "2026-08-15T18:34:41.661Z"
duration_ms: 556790
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks (from URL; pages.json empty)"
on_screen_object: "EMI drawer for Bank of Maharashtra · Maha Super Housing Loan (opened from ₹37,938 — Show how EMI was calculated)"
pinpoint: "On Explore banks, the Bank of Maharashtra EMI how-calculated drawer prints 7.25% ÷ 12 = 0.6042% and then 0.00604167^(240) without labeling 12 as months or 0.00604167 as the monthly rate, so they could not read the formula."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-loan-amount-how-calculated-steps-unlabeled-unsequenced.md"]
source_files_used: ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","events.json","pages.json","tabs.json","console.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0038.jpg","screenshots/0047.jpg"]
speech_clock: ["00:02:47,240–00:05:51,390"]
event_t_ms: [139904, 246110, 247825, 251366, 303612, 314269, 318562]
screenshot_files: ["screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0027.jpg","screenshots/0036.jpg","screenshots/0038.jpg","screenshots/0047.jpg"]
tags: ["copy","layout","trust","data"]
---

## Exact issue

After closing the loan-amount drawer they clicked **₹37,938** (`Show how EMI for Bank of Maharashtra was calculated`). The EMI drawer shows:

1. Monthly interest rate: **7.25% ÷ 12 = 0.6042%**  
2. EMI: ₹48,00,000 × **0.00604167** × (1.00604167)^**240** / ((1.00604167)^240 − 1) = ₹37,938  

They treated that notation as unreadable. Raw ASR: “I need to know that interest is monthly. I don't know why I need to calculate the annual interest.” Then “12 is divided by months. It would have been better if it was written as months. And then why is it written into? What is 0.06?” (screen shows 0.00604167, not 0.06). They also asked whether an amortization table is running and what principal vs interest is, while staring at this same formula.

## How the files join

- time 139904 ms (00:02:19)  
  - said: (gap, then 00:02:47) “Oh, I need to know that interest is monthly.”  
  - did: click EMI ₹37,938 button  
  - seeing: screenshots/0023.jpg–0027.jpg — EMI drawer, 7.25% / 12, 0.00604167, exponent 240  
  - therefore: speech about monthly vs yearly interest is aimed at box 1 (÷ 12).

- time 245460–253800 ms (00:04:05–00:04:13)  
  - said: “12 is divided by months. It would have been better if it was written as months. … What is 0.06?”  
  - did: clicks on formula spans 246110, 247825, 251366  
  - seeing: screenshots/0036.jpg–0038.jpg — same formula, 0.00604167 in the fraction  
  - therefore: “0.06” is the unlabeled monthly-rate decimal; “into” is the × in the formula; “12” should read as months.

## Pinpoint

On Explore banks, Bank of Maharashtra EMI how-calculated drawer: step 1 divides 7.25% by a bare **12**, and step 2 multiplies by a bare **0.00604167** raised to **240**, with no labels “months”, “monthly rate”, or “tenure in months”. They said they do not know why yearly interest is calculated and that 12 should have been written as months.

## Related discussion (not the issue itself)

After the complaint they praised the *existence* of the explanation: “Very nice. Nobody knows how EMI is calculated. This is a revolutionary product.” They said a branch agent does not know this much and only gets a system or head-office figure. They joked about not having money at home. They expected the drawer to open and slide-select on click — “Very nice.” That is praise of showing EMI math at all, not a second defect. They then said “we don't lie to the customer / we are here to empower you” as the reason this drawer should exist.

## Chronology in this recording

| Clock | Said | Did | Shot |
|---|---|---|---|
| 00:02:19 | (open EMI) | Click ₹37,938 how-calculated | 0023 |
| 00:02:47–00:03:38 | Interest is monthly; why yearly; outstanding; rate for a month; amortization; principal vs interest | Idle on EMI drawer | 0024–0035 |
| 00:04:05–00:04:13 | 12 should be written as months; why “into”; what is 0.06? | Click formula spans | 0036–0038 |
| 00:04:24–00:05:51 | Praise: nobody knows EMI; revolutionary; agent doesn’t know this; click will open and slide | Close 303612; reopen EMI 314269; close backdrop | 0045–0048 |

## Cross-recording continuation

Standalone in this folder. Previous folder 2341 ended on the **loan-amount** drawer, not EMI. Next folder 0004 starts on Charges processing-fee notes, not this EMI formula.

## Evidence by file (every raw file in the folder)

- `manifest.json` — explore-banks.html, 556790 ms. Used: timeline_alignment.
- `audio.text` / `audio.txt` / `audio_sentences.txt` / `audio.srt` / `audio.vtt` / `audio.tsv` / `audio.lrc` — 00:02:47–00:05:51 monthly vs yearly, 12/months, 0.06, then praise. Used: supports_issue, related_discussion.
- `audio.json` — words “0.06” p≈0.53; “into” p≈0.53; “Commodization” (amortization). Used: supports_issue, asr_conflict.
- `audio.webm` — binary. Used: checked_no_extra_signal.
- `events.json` — EMI button 139904 and 314269; formula span clicks 246110–251366; close 303612. Used: supports_issue.
- `pages.json` — `[]`. Used: checked_no_extra_signal.
- `tabs.json` — single explore-banks tab. Used: timeline_alignment.
- `console.json` — `[]`. Used: checked_no_extra_signal.
- `replay.spec.ts` — getByRole EMI button; drawer span clicks. Used: timeline_alignment.
- `index.html` / `viewer.js` / `viewer.css` — generic player. Used: checked_no_extra_signal.
- `screenshots/index.json` — t for 0023–0047. Used: timeline_alignment.
- `screenshots/0000.jpg`–`screenshots/0022.jpg` — loan-amount drawer (issue 01). Used: checked_no_extra_signal.
- `screenshots/0023.jpg`–`screenshots/0044.jpg` — EMI drawer formula 7.25%/12 and 0.00604167. Used: supports_issue.
- `screenshots/0045.jpg` — table after close. Used: timeline_alignment.
- `screenshots/0047.jpg` — EMI drawer reopened. Used: related_discussion.
- `screenshots/0048.jpg`–`screenshots/0091.jpg` — later loan-amount reopen / Charges. Used: checked_no_extra_signal.

## ASR notes

- “0.06” vs on-screen **0.00604167** / 0.6042% → used 0.006 monthly rate (ASR likely meant: 0.006).
- “Commodization table” → amortization table (ASR likely meant: amortization).
- “after every week” vs monthly outstanding → monthly (ASR likely meant: month).
- “BMS short” / “100% BMS short” — unintelligible; ignored for pinpoint.
- “divided by 2” vs ÷ 12 on screen — click+shot win; not treated as a separate ÷2 bug.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2355/issue-02-emi-how-calculated-formula-unlabeled-12-and-0-006",
  "issue_title": "EMI how-calculated formula leaves 12 and 0.006 unnamed",
  "folder": "wb-rec-260815-2355",
  "sequence_index": 26,
  "recording_id": "2136e699-2334-4e39-a724-eb3e92e1d3bd",
  "recording_started_at": "2026-08-15T18:25:24.871Z",
  "recording_ended_at": "2026-08-15T18:34:41.661Z",
  "duration_ms": 556790,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks (from URL; pages.json empty)",
  "on_screen_object": "EMI drawer for Bank of Maharashtra · Maha Super Housing Loan",
  "pinpoint": "The EMI formula shows a bare 12 and 0.00604167 with no months/monthly-rate labels.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-loan-amount-how-calculated-steps-unlabeled-unsequenced.md"],
  "source_files_used": ["manifest.json","audio.srt","audio.json","events.json","screenshots/0023.jpg","screenshots/0036.jpg"],
  "speech_clock": ["00:02:47,240–00:05:51,390"],
  "event_t_ms": [139904, 246110, 251366, 314269],
  "screenshot_files": ["screenshots/0023.jpg","screenshots/0036.jpg","screenshots/0038.jpg"],
  "tags": ["copy","layout","trust","data"],
  "quotes": [
    {"clock": "00:04:08,480", "text": "It would have been better if it was written as months.", "artifact": "audio.srt"},
    {"clock": "00:04:12,520", "text": "What is 0.06?", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 139904, "name": "Show how EMI for Bank of Maharashtra was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(5) > button"}
  ],
  "related_discussion_present": true
}
```
