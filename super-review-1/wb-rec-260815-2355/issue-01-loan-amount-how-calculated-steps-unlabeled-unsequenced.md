# Loan-amount how-calculated steps have no names, so the chain cannot be followed

On Explore banks, they opened Bank of Maharashtra’s loan-amount drawer.
The six steps show bare numbers (80%, 55%, 10%, ₹555) without names.
They could not tell what 80% or 55% was, or why the next step exists.
They said the steps must be sequenced and each number must have a name and label.

---
issue_id: "wb-rec-260815-2355/issue-01-loan-amount-how-calculated-steps-unlabeled-unsequenced"
issue_title: "Loan-amount how-calculated steps have no names, so the chain cannot be followed"
folder: "wb-rec-260815-2355"
sequence_index: 26
recording_id: "2136e699-2334-4e39-a724-eb3e92e1d3bd"
recording_started_at: "2026-08-15T18:25:24.871Z"
recording_ended_at: "2026-08-15T18:34:41.661Z"
duration_ms: 556790
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks (from URL; pages.json empty)"
on_screen_object: "Loan amount drawer for Bank of Maharashtra · Maha Super Housing Loan (opened from ₹48,00,000 — Show how loan amount was calculated)"
pinpoint: "On Explore banks, the Bank of Maharashtra loan-amount how-calculated drawer shows six numbered arithmetic steps whose percentages and leftover rupees (80.00%, 55.00%, 10.00%, −₹555) have no names, so a reader cannot follow why step n is useful or where 80/55/10 came from."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2341"
continued_into_folder: null
related_issue_files: ["issue-02-emi-how-calculated-formula-unlabeled-12-and-0-006.md"]
source_files_used: ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","events.json","pages.json","tabs.json","console.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg"]
speech_clock: ["00:00:04,800–00:02:14,670"]
event_t_ms: [25420, 25658, 28233, 36887, 39319, 42843, 43320, 43753, 44120, 44552, 55485, 96952, 100568, 135652, 319980, 333992]
screenshot_files: ["screenshots/0000.jpg","screenshots/0003.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0010.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0049.jpg"]
tags: ["copy","layout","trust","data","interaction"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html`, they already had the **Loan amount** drawer open for **Bank of Maharashtra · Maha Super Housing Loan**, then closed it and reopened it from the table button **₹48,00,000** (`Show how loan amount for Bank of Maharashtra was calculated`).

The drawer shows six numbered cards:

1. Property limit: ₹60,00,000 × **80.00%** = ₹48,00,000  
2. Income allowance: ₹1,00,000 × **55.00%** = ₹55,000  
3. Credit-card load: ₹0 × **10.00%** = ₹0  
4. Monthly EMI available: ₹55,000 − **₹555** − ₹0 = ₹54,445  
5. Income limit: ₹54,445 / month, 7.25%, 240 months → ₹68,88,494  
6. Lowest of these limits: ₹48,00,000 vs ₹68,88,494 → ₹48,00,000  

They treated those bare figures as unusable. Raw ASR: “I followed 1, 2, 3, 4, 5. So I don't know why the next step is useful.” Then “Now he has done into 800. What is 800?” (screen shows **80.00%**, not 800). Then “And then 75. Where did he get this? … Or did he multiply it with 55?” (screen shows **55.00%**). Then “But what is the load of this?” while looking at credit-card load. They restated the intended chain as income allowance × FOIR (ASR: “fire”) minus existing EMIs minus credit-card load = monthly EMI eligibility, then lower-of income limit vs property limit. Closing demand: “Sequencing should be done. I need their names and labels. … It should be very easy.”

## How the files join

- time 4800–18760 ms (00:00:04–00:00:18)  
  - said (audio.srt): “We need to arrange the viewers. Step 1. Step 2. If we can carry 55,000, we can do the next step 3.” (ASR *viewers* / *FOIRs*; screen is FOIR/income-allowance 55,000)  
  - did: idle, then click `div#hlc-drawer-body > div:nth-of-type(2) > strong` at 25420 / 25658 (already in the loan-amount drawer from 2341)  
  - seeing: screenshots/0000.jpg–0003.jpg — Loan amount drawer, steps 1–6, Bank of Maharashtra  
  - therefore: they are still walking the same drawer and asking for a carry-forward sequence (step 2’s ₹55,000 into step 3/4).

- time 39319–44552 ms  
  - said: “I'll just show you. Basically, what is happening right now. I followed 1, 2, 3, 4, 5.”  
  - did: close backdrop 36887; click ₹48,00,000 loan-amount button 39319; click step cards 1–5 in the drawer  
  - seeing: screenshots/0006.jpg–0009.jpg — same six steps, 80.00% / 55.00% / 10.00% / −₹555 unlabeled on the arithmetic line  
  - therefore: they are pointing at each step and still cannot name the multipliers.

- time 54090–134670 ms  
  - said: “What is 800?” “And then 75.” “Total credit card limit … 10% load.” “Income allowance. Into fire. Minus existing EMI's. Minus credit card load. … Sequencing should be done. I need their names and labels.”  
  - did: idle talk; click spans in step 1 and step 4 (55485, 96952, 100568)  
  - seeing: screenshots/0010.jpg–0021.jpg — unchanged drawer math  
  - therefore: the defect is missing names on 80%, 55%/FOIR, 10% load, and −₹555 (existing EMI), plus no stated reason the next step exists.

## Pinpoint

On Explore banks, Bank of Maharashtra loan-amount how-calculated drawer: the six step cards print percentages and a leftover rupee (80.00%, 55.00%, 10.00%, −₹555) without saying they are LTV, FOIR/income share, credit-card monthly load, and existing EMI. They said a first-time reader cannot follow the chain and that sequencing plus names/labels is required so the lower-of ₹48,00,000 vs ₹68,88,494 is earned, not dumped.

## Related discussion (not the issue itself)

They called the loan amounts “amazing” / “we are getting a lot of loans” while still attacking the unlabeled math. They accepted a single calculation if it is easy to follow. They restated the intended formula in their own words (income allowance × FOIR − EMIs − credit-card load = monthly EMI eligibility; income limit 68 lakh; lower-of → 48 lakh). Later they reopened the same drawer at 319980 ms after the EMI drawer (“How is the loan amount? I will show you the details”) as proof that a bank agent only gets a system or head-office figure, not this chain — praise of *having* the drawer, not a second defect.

## Chronology in this recording

| Clock | Said | Did | Shot |
|---|---|---|---|
| 00:00:04 | Arrange the FOIRs/steps; carry 55,000 into step 3 | Idle on already-open loan-amount drawer | 0000–0003 |
| 00:00:24 | “Loan amount. We are getting a lot of loans.” | Scroll 28233; close drawer 36887 | 0004–0005 |
| 00:00:33 | “I'll just show you.” | Click ₹48,00,000 how-calculated 39319 | 0006 |
| 00:00:40–00:00:51 | Followed 1–5; don’t know why next step is useful | Click step cards 42843–44552 | 0007–0009 |
| 00:00:54–00:01:07 | What is 800? Then 75? Multiply by 5 or 55? | Idle | 0010–0011 |
| 00:01:09–00:01:46 | What is credit-card load? 10% of total limit. Income allowance × FOIR − EMIs − load | Click step 1 span 55485 | 0011–0016 |
| 00:01:47–00:02:14 | Income limit 68 lakh, lower-of 48 lakh; sequencing + names/labels | Click step 4 spans 96952, 100568; close 135652 | 0017–0022 |
| 00:05:19 | “How is the loan amount? I will show you the details.” | Reopen loan-amount 319980; close 333992 | 0049–0051 |

## Cross-recording continuation

**Continues from `wb-rec-260815-2341`.** That recording ended still in this same Bank of Maharashtra loan-amount drawer (prev last shots 0079/0083; speech about “minimum of 2”, left-side/right-side calculation, 20%, 1 lakh). Gap ~4.4 min. This folder’s first line is the same object: arrange the steps and carry ₹55,000. Write the unlabeled-names defect here; 2341 holds the earlier min-of-two / two-column talk.

Does not continue into `wb-rec-260816-0004` (that folder opens on Charges processing-fee notes).

## Evidence by file (every raw file in the folder)

- `manifest.json` — id 2136e699-2334-4e39-a724-eb3e92e1d3bd, start_url explore-banks.html, 556790 ms, 92 shots, 200 events. Used: timeline_alignment.
- `audio.text` / `audio.txt` / `audio_sentences.txt` / `audio.srt` / `audio.vtt` / `audio.tsv` / `audio.lrc` — same stretch 4.8s–134.7s on steps, 800, 75, credit-card load, names and labels. Used: supports_issue. Variants in ASR notes.
- `audio.json` — language tag `hi` (speech is Hindi/English mix; do not trust language). Word probs low on “viewers” (0.68), “800” (0.29), “fire” (FOIR). Used: supports_issue, asr_conflict.
- `audio.webm` — binary mic; not listened. Used: checked_no_extra_signal.
- `events.json` — clicks on drawer strong, backdrop, ₹48,00,000 how-calculated, step divs/spans, later reopen. Used: supports_issue.
- `pages.json` — `[]`. Used: checked_no_extra_signal.
- `tabs.json` — one tab, explore-banks.html entire session. Used: timeline_alignment.
- `console.json` — `[]`. Used: checked_no_extra_signal.
- `replay.spec.ts` — Playwright locators for the same loan-amount button and drawer steps. Used: timeline_alignment.
- `index.html` — inlined manifest/events/shots for this id; generic player shell. Used: checked_no_extra_signal.
- `viewer.js` (32334 bytes) / `viewer.css` (17895 bytes) — generic replay chrome, no session talk. Used: checked_no_extra_signal.
- `screenshots/index.json` — 92 entries, t and reason. Used: timeline_alignment.
- `screenshots/0000.jpg`–`screenshots/0022.jpg` — loan-amount drawer visible; 80%/55%/10%/−₹555 unlabeled. Used: supports_issue.
- `screenshots/0023.jpg`–`screenshots/0048.jpg` — EMI drawer / table; not this object. Used: checked_no_extra_signal.
- `screenshots/0049.jpg`–`screenshots/0051.jpg` — loan-amount drawer reopened. Used: related_discussion.
- `screenshots/0052.png`–`screenshots/0091.jpg` — later Charges/processing-fee; not this issue. Used: checked_no_extra_signal.

## ASR notes

- “viewers” (audio.srt 00:00:04) vs screen FOIR / income-allowance steps → used **FOIRs/steps** (ASR likely meant: FOIRs / figures).
- “into 800” vs on-screen **80.00%** → used 80% LTV (ASR likely meant: 80 / 80%).
- “75” vs on-screen **55.00%**; they also say “multiply with 55” → used 55% FOIR/income share.
- “into fire” vs FOIR → used FOIR (ASR likely meant: FOIR).
- audio.json `language: "hi"` is wrong for mixed English product terms.

## JSON

```json
{
  "issue_id": "wb-rec-260815-2355/issue-01-loan-amount-how-calculated-steps-unlabeled-unsequenced",
  "issue_title": "Loan-amount how-calculated steps have no names, so the chain cannot be followed",
  "folder": "wb-rec-260815-2355",
  "sequence_index": 26,
  "recording_id": "2136e699-2334-4e39-a724-eb3e92e1d3bd",
  "recording_started_at": "2026-08-15T18:25:24.871Z",
  "recording_ended_at": "2026-08-15T18:34:41.661Z",
  "duration_ms": 556790,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks (from URL; pages.json empty)",
  "on_screen_object": "Loan amount drawer for Bank of Maharashtra · Maha Super Housing Loan",
  "pinpoint": "The six step cards print 80.00%, 55.00%, 10.00%, and −₹555 without names, so the chain cannot be followed.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2341",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-emi-how-calculated-formula-unlabeled-12-and-0-006.md"],
  "source_files_used": ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","events.json","pages.json","tabs.json","console.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json"],
  "speech_clock": ["00:00:04,800–00:02:14,670"],
  "event_t_ms": [25420, 39319, 42843, 55485, 96952, 100568, 319980],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0006.jpg","screenshots/0010.jpg","screenshots/0049.jpg"],
  "tags": ["copy","layout","trust","data"],
  "quotes": [
    {"clock": "00:00:46,890", "text": "So I don't know why the next step is useful.", "artifact": "audio.srt"},
    {"clock": "00:00:54,090", "text": "Now he has done into 800. What is 800?", "artifact": "audio.srt"},
    {"clock": "00:02:02,070", "text": "I need their names and labels.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 39319, "name": "Show how loan amount for Bank of Maharashtra was calculated", "css": "tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(3) > button"}
  ],
  "related_discussion_present": true
}
```
