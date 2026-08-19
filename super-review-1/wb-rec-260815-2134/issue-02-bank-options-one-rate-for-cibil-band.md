# Bank table shows only one rate for a CIBIL band

On Explore banks, each bank row has a single Rate.
They said the bank actually gives a band such as 775 to 780, so one rate cannot be filtered or explained.
They asked which rate is the lowest, and on what basis.
At the end they said they want two rates and two loans, after opening Other charges and switching Prepayment to Balance transfer.

---
issue_id: "wb-rec-260815-2134/issue-02-bank-options-one-rate-for-cibil-band"
issue_title: "Bank table shows only one rate for a CIBIL band"
folder: "wb-rec-260815-2134"
sequence_index: 11
recording_id: "1965821a-27df-4039-8e62-b268e8696a5b"
recording_started_at: "2026-08-15T16:04:29.489Z"
recording_ended_at: "2026-08-15T16:10:04.857Z"
duration_ms: 335368
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options Overview table Rate column (sortable header Rate)"
pinpoint: "On Explore banks Overview, each bank is shown with only one Rate, while they said the bank tells a CIBIL band such as 775–780, so they cannot filter or tell the user which rate applies; they asked which is the lowest rate and on what basis, and later said they want two rates and two loans."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-cibil-single-exact-vs-min-max-range.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:03:06,090 --> 00:03:34,310", "00:04:50,760 --> 00:05:20,020"]
event_t_ms: [304784, 307930, 312565, 315017, 317093]
screenshot_files: ["screenshots/0000.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg"]
tags: ["rates","bank-options","cibil","filtering","overview-table"]
---

## Exact issue

On Explore banks Overview, the bank table has a **Rate** column (sorted ascending). Each lender is one row with **one** rate. They said that is not enough: “Because the bank tells us 775 to 780. But we have to show him only one rate. Which is the lowest rate? On which basis?”

They tied this to CIBIL filtering: if the user gives a CIBIL **range**, they “can’t filter out what the rate is” and “can’t tell him,” unless a maximum limit (ASR: 25, or 5) makes the filter “correct.” They also said if someone puts a hoped-for higher score, **the table will be empty**; otherwise **the rate will not be lower**.

At 00:05:16 they said “No, no. I want 2 rates. I want 2 loans,” after opening **Other charges**, changing **Prepayment method** to **balanceTransfer**, and returning to **Overview**. Join: they want **two rates / two loans** visible, not a single Rate cell per bank.

This is a **different object** from the CIBIL input control (`issue-01`). Same page, same minute, two problems: how the user **enters** CIBIL, and how the **Rate column** can only show one number for a bank band.

## How the files join (required)

- time: **186090–214310 ms** (00:03:06–00:03:34)
- said (`audio.tsv`): “In this case, we can't filter out what the rate is. We can't tell him. Because the bank tells us 775 to 780. But we have to show him only one rate. Which is the lowest rate? On which basis? … if I give a maximum limit of 25, then our filter will be correct.”
- did: idle; Overview tab is selected (no click yet)
- seeing: `screenshots/0022.jpg`–`0026.jpg` — Bank options **Overview**, header **Rate** with sort arrow, one rate column
- page/object: Explore banks / Bank options Rate column
- therefore: they treated **one Rate per bank** as unable to represent the bank’s **775–780** band or to filter it.

- time: **290760–296980 ms** (00:04:50–00:04:56)
- said: “Then the table will be empty. Otherwise, the rate will not be lower.”
- seeing: `screenshots/0034.jpg` — Overview table headers including Rate
- therefore: a single-score filter either **empties the table** or **does not show a lower rate**.

- time: **304784–317093 ms** (00:05:04–00:05:17)
- said (00:05:01–00:05:20): “The repayment charge and the self-fund will be 300. The balance transfer will not change. No, no. I want 2 rates. I want 2 loans.”
- did: click **Other charges** (304784) → click **Prepayment method** (307930) → input `balanceTransfer` (312565) → click Prepayment method again (315017) → click **Overview** (317093)
- seeing: `0035.jpg` Other charges; `0036.jpg` Prepayment = Self funds (PNB 2%, Canara Nil, BoB Nil); `0037.jpg` Prepayment = Balance transfer (PNB 2%, Canara 2%, BoB 0.50%); `0038.jpg`–`0039.jpg` Overview with **one Rate per bank** (PNB 8.75%, Canara 8.80%, BoB 9.15%, CUB 9.35%)
- therefore: after checking charges, they rejected that path (“No, no”) and named the Overview defect: **two rates / two loans**, while the table still shows **one Rate**.

## Pinpoint

On **Explore banks → Bank options → Overview**, the **Rate** column shows **one** rate per lender. They said the **bank gives a CIBIL band** (775–780), so they **cannot filter** or **tell the user** which rate is shown, or **which is lowest and on what basis**. They later said they **want 2 rates and 2 loans**. They care because a single Rate plus a single CIBIL either **empties the table** or **does not show a lower rate**.

## Related discussion (not the issue itself)

- This talk sits on top of `issue-01` (CIBIL min/max / dropdown). Analogies and user psychology (rejection, 680–700, 20 points, 6-month loan) belong with the **input**. The **Rate column / one-vs-two rates** is this file.
- “Maximum limit of 5” vs “25”: ASR disagrees; both are about bounding a CIBIL range so a rate filter can work. Quoted raw; not a separate issue.
- Other charges / Prepayment method / Balance transfer: they opened that tab and switched Self funds → Balance transfer. Some banks’ prepayment **did** change (Canara Nil→2%, BoB Nil→0.50%). They said “the balance transfer will not change,” then “No, no. I want 2 rates.” That is **not** a separate “BT charges are wrong” issue; they used charges as a check and returned to **two rates on Overview**.
- “Repayment charge and self-fund will be 300”: ASR; on screen Self funds prepayment is **2.00% / Nil**, not “300.” Join prefers the **Prepayment method** dropdown they actually clicked.

## Chronology in this recording

| Clock | Speech | Click | Screenshot |
|---|---|---|---|
| 00:03:06–00:03:34 | Can’t filter the rate; bank 775–780; only one rate; which lowest; max limit 25 | idle, Overview | 0022–0026 Rate header |
| 00:04:50–00:04:56 | Table empty; else rate not lower | idle | 0034 |
| 00:05:01–00:05:13 | Repayment / self-fund / BT will not change | Other charges; Prepayment method; value balanceTransfer | 0035–0037 |
| 00:05:14–00:05:20 | No, no. I want 2 rates. I want 2 loans. | Overview tab | 0038–0039 one Rate per bank |

## Cross-recording continuation

**Standalone in this folder as a Rate-column issue.** `wb-rec-260815-2125` ended on **CIBIL input** (Amazon typeahead / range / dropdown), not on “one Rate vs 775–780.” Short gap (~8s) continues the **CIBIL field** (`issue-01`), not this Rate-band problem, which is first named here at 00:03:06.

**Does not continue into `wb-rec-260815-2201`.** ~21 minute gap; next audio is bar talk only; screenshots there are Explore banks with different income/property figures, no Rate-band talk.

## Evidence by file (every raw file in the folder)

- `manifest.json`: Explore banks, 335368 ms, 40 screenshots, 53 events. `timeline_alignment`
- `audio.text` / `audio.txt` / `audio_sentences.txt`: “only one rate”; “775 to 780”; “I want 2 rates”; “I want 2 loans.” `supports_issue`
- `audio.srt`: same cues; “Sibyl/civil”; “self-fund will be 300.” `supports_issue`
- `audio.vtt` / `audio.tsv` / `audio.lrc`: preferred clock; “only one rate”; “2 rates”; “2 loans.” `supports_issue`
- `audio.json`: segments 63–74 and 96–110; language `mr` (wrong); word probs on “rate” high, on “civil/Sibyl” low. `supports_issue`
- `audio.webm`: binary. `timeline_alignment`
- `events.json`: click Other charges 304784; Prepayment method 307930 / 315017; input `balanceTransfer` 312565; Overview 317093. `supports_issue`
- `pages.json`: Bank options region; Overview/Charges/Other charges are in later screenshots not in the opening landmark table headers. `timeline_alignment`
- `tabs.json`: stayed on Explore banks. `timeline_alignment`
- `console.json`: `[]`. `checked_no_extra_signal`
- `replay.spec.ts`: Other charges click, Prepayment fill `balanceTransfer`, Overview click. `supports_issue`
- `index.html`: player shell with inlined events/screenshots; no extra talk. `checked_no_extra_signal`
- `viewer.js` (32334 bytes): generic player. `checked_no_extra_signal`
- `viewer.css` (17895 bytes): generic player. `checked_no_extra_signal`
- `screenshots/index.json`: 0000–0034 Overview Rate header; 0035–0037 Other charges; 0038–0039 Overview rates. `supports_issue`
- `screenshots/0000.jpg`–`screenshots/0034.jpg`: Overview, Rate column header visible. `supports_issue`
- `screenshots/0035.jpg`: Other charges tab. `related_discussion`
- `screenshots/0036.jpg`: Prepayment Self funds. `related_discussion`
- `screenshots/0037.jpg`: Prepayment Balance transfer. `related_discussion`
- `screenshots/0038.jpg`–`screenshots/0039.jpg`: Overview, one Rate per bank (8.75% / 8.80% / 9.15% / 9.35%). `supports_issue`

## ASR notes

Prefer `audio.tsv` / `audio.vtt` for “only one rate” / “2 rates” / “2 loans” because they match Overview Rate cells and the Other charges → Overview click path. `audio.srt` agrees on those phrases. “775 to 780” is consistent across artifacts (bank CIBIL band, not a page URL). “self-fund will be 300” does **not** match on-screen 2.00%/Nil; quoted raw; click+screenshot win (Prepayment method). “civil score will be 60” is leftover CIBIL talk (`issue-01`), low word probability.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2134/issue-02-bank-options-one-rate-for-cibil-band",
  "issue_title": "Bank table shows only one rate for a CIBIL band",
  "folder": "wb-rec-260815-2134",
  "sequence_index": 11,
  "recording_id": "1965821a-27df-4039-8e62-b268e8696a5b",
  "recording_started_at": "2026-08-15T16:04:29.489Z",
  "recording_ended_at": "2026-08-15T16:10:04.857Z",
  "duration_ms": 335368,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options Overview table Rate column (sortable header Rate)",
  "pinpoint": "On Explore banks Overview, each bank is shown with only one Rate, while they said the bank tells a CIBIL band such as 775–780, so they cannot filter or tell the user which rate applies; they asked which is the lowest rate and on what basis, and later said they want two rates and two loans.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-cibil-single-exact-vs-min-max-range.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:03:06,090 --> 00:03:34,310", "00:04:50,760 --> 00:05:20,020"],
  "event_t_ms": [304784, 307930, 312565, 315017, 317093],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg"],
  "tags": ["rates","bank-options","cibil","filtering","overview-table"],
  "quotes": [
    {"clock": "00:03:06,090", "text": "In this case, we can't filter out what the rate is.", "artifact": "audio.tsv"},
    {"clock": "00:03:17,570", "text": "775 to 780.", "artifact": "audio.srt"},
    {"clock": "00:03:20,750", "text": "But we have to show him only one rate.", "artifact": "audio.tsv"},
    {"clock": "00:03:23,450", "text": "Which is the lowest rate?", "artifact": "audio.tsv"},
    {"clock": "00:04:50,760", "text": "Then the table will be empty.", "artifact": "audio.tsv"},
    {"clock": "00:05:16,120", "text": "I want 2 rates.", "artifact": "audio.tsv"},
    {"clock": "00:05:19,320", "text": "I want 2 loans.", "artifact": "audio.tsv"}
  ],
  "clicks": [
    {"t_ms": 304784, "name": "Other charges", "css": "section#hlc-results-shell ... button:nth-of-type(3)"},
    {"t_ms": 307930, "name": "Prepayment method", "css": "th#hlc-th-prepaymentChargeDisplay > span > select"},
    {"t_ms": 312565, "name": "Prepayment method", "css": "th#hlc-th-prepaymentChargeDisplay > span > select"},
    {"t_ms": 317093, "name": "Overview", "css": "section#hlc-results-shell ... button:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
