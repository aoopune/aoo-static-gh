# Two rates and two loans per bank on Overview

When a bank’s CIBIL band is 775–780, do not show only one Rate on Overview.
Show two rates and two loans so the user can see which applies and which is lowest.
They rejected checking prepayment charges as a substitute — “No, no. I want 2 rates. I want 2 loans.”

---
solution_id: "wb-rec-260815-2134/solution-04-two-rates-two-loans-per-bank-overview"
solution_title: "Two rates and two loans per bank on Overview"
folder: "wb-rec-260815-2134"
sequence_index: 11
recording_id: "1965821a-27df-4039-8e62-b268e8696a5b"
recording_started_at: "2026-08-15T16:04:29.489Z"
recording_ended_at: "2026-08-15T16:10:04.857Z"
duration_ms: 335368
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options Overview table Rate column"
for_topic: "Explore banks Overview — one Rate cell per bank cannot represent the bank’s CIBIL band (775–780)"
pinpoint: "On Explore banks Overview, they said the bank gives CIBIL 775–780 but Shroffin shows only one Rate, so they cannot filter or explain which is lowest; they explicitly want two rates and two loans per bank, not a single Rate after checking Other charges."
kind: ["proposed_change", "idea", "user_convenience"]
decidedness: "decided"
basis: "Bank data arrives as a band; one displayed rate misleads filtering and hides which offer applies at which score."
analog_source: "none"
linked_issue_files: ["issue-02-bank-options-one-rate-for-cibil-band.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-02-cibil-dropdown-min-max-range-psychology.md", "solution-03-show-possible-vs-minimum-cibil-scenarios.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js","_theme-cards.json"]
speech_clock: ["00:03:06,090 --> 00:03:34,310", "00:05:14,380 --> 00:05:20,020"]
event_t_ms: [304784, 307930, 312565, 315017, 317093]
screenshot_files: ["screenshots/0022.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0039.jpg"]
tags: ["rates","overview-table","cibil-band","two-loans","filtering","bank-options"]
---

## Exact solution (or idea that can also be a solution)
On **Explore banks → Bank options → Overview**, each bank row should expose **two rates and two loans**, not a single **Rate** cell, because backend/bank data is a **CIBIL band** (e.g. **775 to 780**):

- “In this case, we can't filter out what the rate is. We can't tell him. Because the bank tells us 775 to 780. But we have to show him only one rate. Which is the lowest rate? On which basis?”
- Closing demand after checking Other charges: **“No, no. I want 2 rates. I want 2 loans.”**

They explicitly **reject** using prepayment / balance-transfer charge differences as the answer (“The balance transfer will not change” → “No, no”) — the fix belongs on **Overview Rate/loan display**, not on the Other charges tab.

## What this is for
**Overview table Rate column** (and associated loan amount/EMI row) when bank pricing depends on a **CIBIL range**. `issue-02` states the defect; this file is the **display/filter direction**: **two rates + two loans per lender**.

## Why they said it that way
One number implies certainty Shroffin does not have. Users cannot tell **which rate matches their score** or **which is truly lowest**. Two visible offers match the bank’s band logic and make filtering honest when the user enters a CIBIL range (`solution-02`).

## How the files join (required)
- **time:** 186090–214310 ms (00:03:06–00:03:34)
- **said:** can't filter rate; bank 775–780; only one rate; which lowest; max limit 25 (`audio.tsv`)
- **did:** idle; Overview selected
- **seeing:** `screenshots/0022.jpg`–`0026.jpg` — **Rate** column header, sort arrow
- **therefore:** **one Rate** is insufficient for a **775–780** band.

- **time:** 304784–317093 ms (00:05:04–00:05:17) + speech 314380–320020
- **said:** “The balance transfer will not change. No, no. I want 2 rates. I want 2 loans.”
- **did:** click **Other charges** 304784 → **Prepayment method** 307930 → input `balanceTransfer` 312565 → Overview 317093
- **seeing:** `0036.jpg` Self funds prepayment; `0037.jpg` Balance transfer prepayment (Canara Nil→2%, BoB Nil→0.50%); `0039.jpg` Overview still **one Rate** per bank (PNB 8.75%, Canara 8.80%, BoB 9.15%, CUB 9.35%)
- **therefore:** they checked charges, still see **one Rate**, and name the wanted fix: **2 rates / 2 loans**.

## Pinpoint
On **Explore banks Overview**, when a bank’s offer spans **775–780 CIBIL**, Shroffin should show **two rates and two loans** for that bank instead of one **Rate**, so users know **which is lowest and on what basis** — explicitly **not** solved by switching prepayment method on Other charges.

## Related discussion (not the solution itself)
- CIBIL min/max input (`solution-02`) enables filtering but does not replace **two visible rates**.
- “Show possible vs minimum” (`solution-03`) is user-level exploration; **two rates** is **bank-row structure**.
- “Repayment charge and self-fund will be 300” — ASR; screen shows **2.00%/Nil** prepayment, not 300 — quoted raw; clicks win.
- Some prepayment values **did** change under Balance transfer — they still said “No, no” to that as the answer.

## Chronology in this recording
| Clock | Speech | Click | Screenshot |
|---|---|---|---|
| 00:03:06–00:03:34 | Bank 775–780; one rate; which lowest | idle Overview | 0022–0026 |
| 00:05:01–00:05:13 | Repayment/self-fund/BT talk | Other charges; Prepayment BT | 0035–0037 |
| 00:05:14–00:05:20 | No no — 2 rates, 2 loans | Overview tab | 0038–0039 |

## Cross-recording continuation
**Standalone** as the Rate-band / two-rates idea (first at 00:03:06). Prior folder `wb-rec-260815-2125` ended on CIBIL **input**, not Overview Rate bands. **No continuation into `wb-rec-260815-2201`.**

## Evidence by file (every raw recorder file in the folder — no omissions)
- `manifest.json`: Explore banks; 53 events — `timeline_alignment`
- `audio.text` / `audio.txt` / `audio_sentences.txt`: “only one rate”; “2 rates”; “2 loans”; 775–780 — `supports_solution`
- `audio.srt` / `audio.vtt` / `audio.tsv` / `audio.lrc`: timed cues — `supports_solution`
- `audio.json`: segments 63–74, 103–110 — `supports_solution`
- `audio.webm`: binary; not played — `timeline_alignment`
- `events.json`: Other charges 304784; Prepayment input balanceTransfer 312565; Overview 317093 — `supports_solution`
- `pages.json`: Bank options region — `supports_solution`
- `tabs.json`: Explore banks only — `timeline_alignment`
- `console.json`: `[]` — `checked_no_extra_signal`
- `replay.spec.ts`: Other charges → Prepayment balanceTransfer → Overview — `supports_solution`
- `index.html`: player shell — `checked_no_extra_signal`
- `viewer.js` / `viewer.css`: generic player — `checked_no_extra_signal`
- `screenshots/index.json`: interaction shots 0035–0038 at tab clicks — `supports_solution`
- `screenshots/0000.jpg`–`screenshots/0034.jpg`: Overview **Rate** header during 00:03 speech — `supports_solution`
- `screenshots/0035.jpg`–`screenshots/0037.jpg`: Other charges / prepayment method — `related_discussion`
- `screenshots/0038.jpg`–`screenshots/0039.jpg`: Overview with **single Rate** per bank — `supports_solution`
- `_theme-cards.json`: issue-02 card mirrors two-rates talk — `related_discussion`

### Helper issue files
- `issue-02-bank-options-one-rate-for-cibil-band.md`: defect this direction fixes — `cross_link`
- `issue-01-cibil-single-exact-vs-min-max-range.md`: related CIBIL input/filter — `timestamp_map`
- `_coverage-ledger.json`: untouched — `not_used`

## ASR notes
“2 rates / 2 loans” and “775 to 780” consistent across tsv/vtt/srt. “self-fund will be 300” does not match visible prepayment percents — not used as the solution. Max limit **5 vs 25** belongs with CIBIL range (`solution-02`).

## JSON
```json
{
  "solution_id": "wb-rec-260815-2134/solution-04-two-rates-two-loans-per-bank-overview",
  "solution_title": "Two rates and two loans per bank on Overview",
  "folder": "wb-rec-260815-2134",
  "sequence_index": 11,
  "recording_id": "1965821a-27df-4039-8e62-b268e8696a5b",
  "recording_started_at": "2026-08-15T16:04:29.489Z",
  "recording_ended_at": "2026-08-15T16:10:04.857Z",
  "duration_ms": 335368,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options Overview table Rate column",
  "for_topic": "Explore banks Overview — one Rate cell per bank cannot represent the bank’s CIBIL band (775–780)",
  "pinpoint": "On Explore banks Overview, they said the bank gives CIBIL 775–780 but Shroffin shows only one Rate, so they cannot filter or explain which is lowest; they explicitly want two rates and two loans per bank, not a single Rate after checking Other charges.",
  "kind": ["proposed_change", "idea", "user_convenience"],
  "decidedness": "decided",
  "basis": "Bank data arrives as a band; one displayed rate misleads filtering and hides which offer applies at which score.",
  "analog_source": "none",
  "linked_issue_files": ["issue-02-bank-options-one-rate-for-cibil-band.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-02-cibil-dropdown-min-max-range-psychology.md", "solution-03-show-possible-vs-minimum-cibil-scenarios.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","tabs.json","viewer.css","viewer.js","_theme-cards.json"],
  "speech_clock": ["00:03:06,090 --> 00:03:34,310", "00:05:14,380 --> 00:05:20,020"],
  "event_t_ms": [304784, 307930, 312565, 315017, 317093],
  "screenshot_files": ["screenshots/0022.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0039.jpg"],
  "tags": ["rates","overview-table","cibil-band","two-loans","filtering","bank-options"],
  "quotes": [
    {"clock": "00:03:17,570", "text": "775 to 780.", "artifact": "audio.srt"},
    {"clock": "00:03:20,750", "text": "But we have to show him only one rate.", "artifact": "audio.tsv"},
    {"clock": "00:03:23,450", "text": "Which is the lowest rate?", "artifact": "audio.tsv"},
    {"clock": "00:05:16,120", "text": "I want 2 rates.", "artifact": "audio.tsv"},
    {"clock": "00:05:19,320", "text": "I want 2 loans.", "artifact": "audio.tsv"}
  ],
  "clicks": [
    {"t_ms": 304784, "name": "Other charges", "css": "section#hlc-results-shell ... button:nth-of-type(3)"},
    {"t_ms": 312565, "name": "Prepayment method", "css": "th#hlc-th-prepaymentChargeDisplay > span > select"},
    {"t_ms": 317093, "name": "Overview", "css": "section#hlc-results-shell ... button:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
