# Banks are not labeled as lowest or highest EMI-miss penalty

On Explore banks Other charges they said banks need labels for EMI-miss penalty, not only raw overdue and bounce numbers.
They named Jammu and Kashmir Bank as among the lowest penalty and IndusInd Bank as among the highest.
They said that ranking must be told to the site’s intelligence, even before someone takes a loan.
A bank that is 0.1% cheaper on interest should still be rejected if one missed EMI costs double.

---
issue_id: "wb-rec-260816-0029/issue-02-banks-missing-emi-miss-penalty-labels"
issue_title: "Banks are not labeled as lowest or highest EMI-miss penalty"
folder: "wb-rec-260816-0029"
sequence_index: 29
recording_id: "1ce6b2c1-5803-4478-9e29-c1f823caae0f"
recording_started_at: "2026-08-15T18:59:02.434Z"
recording_ended_at: "2026-08-15T19:01:28.697Z"
duration_ms: 146263
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks (from URL / screenshots; pages.json empty)"
on_screen_object: "Lender rows on Other charges, especially Jammu and Kashmir Bank and IndusInd Bank"
pinpoint: "On Explore banks Other charges, bank rows are not labeled as lowest or highest EMI-miss penalty, and that ranking is not fed to the product intelligence."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260816-0013"
continued_into_folder: null
related_issue_files: ["issue-01-other-charges-missing-emi-miss-calculation-drawer.md"]
source_files_used: ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:35,610 --> 00:00:54,330","00:01:13,930 --> 00:01:35,950","00:01:45,870 --> 00:01:47,530","00:02:09,970 --> 00:02:12,850"]
event_t_ms: [72065,73266,75798,77363,87997,95232,99197,100099,129931,130831]
screenshot_files: ["screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg"]
tags: ["trust","copy","data","intelligence","labels"]
---

## Exact issue

On Explore banks, Other charges, they looked at lender rows whose overdue and bounce numbers already differ a lot (Jammu and Kashmir Bank 0.20% p.a. overdue or ₹200, 15 days grace, ₹200 bounce; IndusInd Bank 24.00% p.a. or ₹100, 3 days grace, ₹750 bounce). The rows show those numbers only. There is no label such as least / highest EMI-miss penalty.

Raw ASR (`audio.srt` cues 13–17): "We need to put labels on the bank." "For example, Jammu and Kashmir Bank." "It is one of the least penalty for EMI misses bank." "And Indus land bank is one of the highest penalties for EMI misses bank." "We need to tell this to the intelligence."

Screenshot `0014.png` and `0008.png` show IndusInd Bank, not "Indus land bank". ASR intended IndusInd Bank.

They had already said the intelligence must warn people before taking a loan: do not take a bank where one missed EMI means double money, even if interest is 0.1% better. At the end they said they also need "this intelligence, which is already visible here" while scrolling back to the top of the same table — the numbers are on screen, but not turned into bank labels or a recommendation signal.

This is a different object from the missing calculation drawer (`issue-01-other-charges-missing-emi-miss-calculation-drawer.md`): here the defect is the lender row / intelligence, not the overdue cell calculator.

## How the files join (required)

- time: 35610–54330 ms (speech) with idle on Other charges
- said: even before taking a loan, tell them not to take this bank; if it has 0.1% interest, take that bank; do not take this bank because one missed EMI means withdrawing double money; that is part of the intelligence (`audio.srt` cues 6–9)
- did: idle + earlier scroll; no click on a bank name
- seeing: `screenshots/0004.png`–`0006.png` still in the CSB 24.00% p.a. region
- therefore: they want a pre-loan warning based on EMI-miss cost, not only a cheaper rate

- time: 73930–95950 ms; scrolls y=2201, 2196, 2253, then 1866, 1958.5
- said: put labels on the bank; J&K least EMI-miss penalty; Indus land bank highest; tell the intelligence (`audio.srt` cues 13–17)
- seeing: `screenshots/0008.png` (t=66199) and `0009.png` (t=74200) show Jammu and Kashmir Bank and IndusInd Bank in the same viewport, with 0.20% vs 24.00% overdue and ₹200 vs ₹750 bounce, and no penalty labels on the names
- therefore: the joined issue is missing least/highest EMI-miss labels on those lender rows, which intelligence should use

- time: 129970–132850 ms; scroll y=702.5 then 692
- said: "We also need this intelligence, which is already visible here." (`audio.srt` cue 25)
- seeing: `screenshots/0015.jpg` / `0016.jpg` — top of Other charges (Axis through Bank of Maharashtra) with overdue/bounce numbers still unlabeled
- therefore: they treat the visible numbers as unused intelligence

`pages.json` empty; `console.json` empty; `replay.spec.ts` has no click on J&K or IndusInd. Player files add no talk.

## Pinpoint

On Explore banks → Other charges, lender rows (Jammu and Kashmir Bank vs IndusInd Bank in `screenshots/0008.png`–`0014.png`) are not labeled as lowest or highest EMI-miss penalty, and that ranking is not given to the product intelligence, even though they said a 0.1% cheaper rate must not hide a bank that doubles money on one missed EMI.

## Related discussion (not the issue itself)

The extra-money drawer and clicking overdue/bounce underlines belong to issue 01; they are the mechanism, this issue is the bank-level label/intelligence. They compared a 0.1% interest advantage with "withdraw double money." They said "Interest rate is extraordinary" (`audio.srt` cue 18) between the label talk and the overdue/bounce calculation talk — related: rate alone is not the ranking they want. Previous folder `wb-rec-260816-0013` already had IndusInd 24.00% p.a. overdue on screen while they attacked the overdue percent; this folder is where they name J&K vs IndusInd as least/highest and demand labels.

## Chronology in this recording

- 00:35.610–00:54.330: pre-loan warning; 0.1% rate vs double money on one miss; part of intelligence.
- 01:13.930–01:17.410: "We need to put labels on the bank." Scroll around y=2201–2253 (`screenshots/0008.png` / `0009.png`: IndusInd and J&K both visible).
- 01:18.010–01:26.430: J&K as least EMI-miss penalty.
- 01:27.430–01:33.030: IndusInd (ASR Indus land) as highest.
- 01:34.670–01:35.950: tell this to the intelligence.
- 01:45.870–01:47.530: "Interest rate is extraordinary."
- 02:09.970–02:12.850: intelligence already visible here, scrolling back to the top of the table (`screenshots/0015.jpg`).

## Cross-recording continuation

Continues from `wb-rec-260816-0013`: same Other charges page; they were already staring at overdue percents including IndusInd 24.00% p.a. (`0079.png`–`0081.png`) and saying the annum figure is the wrong intelligence. This folder names the bank-level label and the J&K vs IndusInd pair.

Does not continue into `wb-rec-260816-0031`. Next speech is about legal symbols vs a friendly lawyer and MCLR/BPLR / how the rate is decided, with clicks on rate-change and bounce note marks — a different object.

## Evidence by file (every file in the folder — no omissions)

- `audio.json` — segments 6–9, 13–18, 25; words "Jammu"/"Kashmir" high probability; "Indus" 0.59 "land" 0.60; language `mr` wrong. `supports_issue`.
- `audio.lrc` — timed label/J&K/Indus lines. `supports_issue`.
- `audio.srt` — cues 6–9, 13–17, 18, 25 quoted. `supports_issue`.
- `audio.text` — same names in one block. `supports_issue`.
- `audio.tsv` — 35610, 73930, 78010, 87430, 94670, 105870, 129970 ms. `timeline_alignment`.
- `audio.txt` — same as srt. `supports_issue`.
- `audio.vtt` — same as srt. `supports_issue`.
- `audio.webm` — binary; speech from text artifacts. `checked_no_extra_signal`.
- `audio_sentences.txt` — includes J&K and Indus land sentences. `supports_issue`.
- `console.json` — `[]`. `checked_no_extra_signal`.
- `events.json` — scrolls at 72065–100099 ms while they name J&K/IndusInd; later 129931–130831 ms while they say intelligence is already visible; no click on those rows. `timeline_alignment`.
- `index.html` — inlined same URL/id; no extra talk. `checked_no_extra_signal`.
- `manifest.json` — session window and explore-banks URL. `timeline_alignment`.
- `pages.json` — `[]`. `checked_no_extra_signal`.
- `replay.spec.ts` — no bank-row click. `timeline_alignment`.
- `screenshots/0000.png`–`0007.png` — Other charges without J&K/IndusInd in the main named-label beat (CSB 24% still supports the double-money warning). `related_discussion`.
- `screenshots/0008.png` — IndusInd 24.00% p.a. / ₹750 and J&K 0.20% p.a. / ₹200, no labels. `supports_issue`.
- `screenshots/0009.png` — same pair during "least/highest" speech. `supports_issue`.
- `screenshots/0010.png` — J&K still in view. `supports_issue`.
- `screenshots/0011.png` — IndusInd and J&K. `supports_issue`.
- `screenshots/0012.png` — table bottom; Notes. `related_discussion`.
- `screenshots/0013.png` — J&K row during later scroll. `supports_issue`.
- `screenshots/0014.png` — IndusInd row highlighted, still unlabeled. `supports_issue`.
- `screenshots/0015.jpg` — "intelligence already visible" at top of table. `supports_issue`.
- `screenshots/0016.jpg` — same top of table. `supports_issue`.
- `screenshots/index.json` — t=66199, 74200, 112199, 120200, 130199, 140199 used for join. `timeline_alignment`.
- `tabs.json` — stayed on explore-banks.html. `timeline_alignment`.
- `viewer.css` — generic player, 17895 bytes. `checked_no_extra_signal`.
- `viewer.js` — generic player, 32334 bytes. `checked_no_extra_signal`.

## ASR notes

1. `Indus land bank` (srt cue 16; json "Indus land bank") vs IndusInd Bank on `screenshots/0008.png` / `0014.png`. Used IndusInd Bank; quoted raw ASR.
2. `Jammu and Kashmir Bank` matches the on-screen name (image descriptions also say Jammu and Kashmir Bank). Kept as spoken.
3. `least penalty for EMI misses bank` / `highest penalties for EMI misses bank` — awkward ASR but meaning is clear with the two rows on screen.
4. Cue 18 "Interest rate is extraordinary" vs json "Interest rate is extraordinary" — related talk, not a separate issue.
5. json language `mr` is wrong.

## JSON

```json
{
  "issue_id": "wb-rec-260816-0029/issue-02-banks-missing-emi-miss-penalty-labels",
  "issue_title": "Banks are not labeled as lowest or highest EMI-miss penalty",
  "folder": "wb-rec-260816-0029",
  "sequence_index": 29,
  "recording_id": "1ce6b2c1-5803-4478-9e29-c1f823caae0f",
  "recording_started_at": "2026-08-15T18:59:02.434Z",
  "recording_ended_at": "2026-08-15T19:01:28.697Z",
  "duration_ms": 146263,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks (from URL / screenshots; pages.json empty)",
  "on_screen_object": "Lender rows on Other charges, especially Jammu and Kashmir Bank and IndusInd Bank",
  "pinpoint": "On Explore banks Other charges, bank rows are not labeled as lowest or highest EMI-miss penalty, and that ranking is not fed to the product intelligence.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260816-0013",
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-other-charges-missing-emi-miss-calculation-drawer.md"],
  "source_files_used": ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:35,610 --> 00:00:54,330","00:01:13,930 --> 00:01:35,950","00:01:45,870 --> 00:01:47,530","00:02:09,970 --> 00:02:12,850"],
  "event_t_ms": [72065,73266,75798,77363,87997,95232,99197,100099,129931,130831],
  "screenshot_files": ["screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg"],
  "tags": ["trust","copy","data","intelligence","labels"],
  "quotes": [
    {"clock": "00:00:35,610", "text": "Even before taking a loan, I need to tell the bank to not take this bank.", "artifact": "audio.srt"},
    {"clock": "00:00:42,370", "text": "If it has a 0.1% interest rate, then take that bank.", "artifact": "audio.srt"},
    {"clock": "00:00:46,850", "text": "But don't take this bank, because if even one EMI is missed, you have to withdraw double money.", "artifact": "audio.srt"},
    {"clock": "00:01:13,930", "text": "We need to put labels on the bank.", "artifact": "audio.srt"},
    {"clock": "00:01:18,010", "text": "For example, Jammu and Kashmir Bank.", "artifact": "audio.srt"},
    {"clock": "00:01:20,230", "text": "It is one of the least penalty for EMI misses bank.", "artifact": "audio.srt"},
    {"clock": "00:01:27,430", "text": "And Indus land bank is one of the highest penalties for EMI misses bank.", "artifact": "audio.srt"},
    {"clock": "00:01:34,670", "text": "We need to tell this to the intelligence.", "artifact": "audio.srt"},
    {"clock": "00:02:09,970", "text": "We also need this intelligence, which is already visible here.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
