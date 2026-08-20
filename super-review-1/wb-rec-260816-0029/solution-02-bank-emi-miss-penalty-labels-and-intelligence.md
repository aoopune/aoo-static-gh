# Label banks by EMI-miss penalty and warn before loan choice

Banks on Other charges should carry labels like least or highest EMI-miss penalty, not only raw numbers.
Jammu and Kashmir Bank is their example of lowest penalty; IndusInd Bank of highest — and that ranking must feed the site’s intelligence.
Even before someone takes a loan, Shroffin should warn: do not pick a bank where one missed EMI costs double, even if interest is 0.1% better.
The overdue and bounce numbers are already on screen; the idea is to turn that visible data into actionable intelligence.

---
solution_id: "wb-rec-260816-0029/solution-02-bank-emi-miss-penalty-labels-and-intelligence"
solution_title: "Label banks by EMI-miss penalty and warn before loan choice"
folder: "wb-rec-260816-0029"
sequence_index: 29
recording_id: "1ce6b2c1-5803-4478-9e29-c1f823caae0f"
recording_started_at: "2026-08-15T18:59:02.434Z"
recording_ended_at: "2026-08-15T19:01:28.697Z"
duration_ms: 146263
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks (from URL / screenshots; pages.json empty)"
on_screen_object: "Lender rows on Other charges — especially Jammu and Kashmir Bank and IndusInd Bank"
for_topic: "Bank-level EMI-miss penalty ranking, pre-loan warnings, and intelligence from visible Other charges data"
pinpoint: "On Explore banks Other charges, label lender rows as least/highest EMI-miss penalty (e.g. J&K vs IndusInd), feed that ranking to product intelligence, and warn users before loan choice not to take a high-penalty bank even for a 0.1% rate advantage."
kind: ["proposed_change", "idea", "company_thinking", "user_convenience", "product_principle"]
decidedness: "decided"
basis: "Users choose banks on rate alone but EMI-miss cost can dwarf a small rate edge; visible overdue/bounce numbers should become labels and pre-loan advice, not dead table cells."
analog_source: "none"
linked_issue_files: ["issue-02-banks-missing-emi-miss-penalty-labels.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260816-0013"
continued_into_folder: null
related_solution_files: ["solution-01-clickable-charge-drawer-emi-miss-calculation.md"]
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:35,610 --> 00:00:54,330","00:01:13,930 --> 00:01:35,950","00:01:45,870 --> 00:01:47,530","00:02:09,970 --> 00:02:12,850"]
event_t_ms: [29065,72065,73266,75798,77363,87997,95232,99197,100099,129931,130831]
screenshot_files: ["screenshots/0004.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg"]
tags: ["intelligence","labels","trust","bank-choice","emi-miss","pre-loan"]
---

## Exact solution (or idea that can also be a solution)

They want **labels on the bank** for EMI-miss penalty severity, not only separate overdue and bounce numbers. Raw ASR: `"We need to put labels on the bank."` They named two anchors on the table they were scrolling:

- **Jammu and Kashmir Bank** — `"It is one of the least penalty for EMI misses bank."` On screen (`screenshots/0008.png`–`0010.png`): **0.20% p.a.** overdue (or ₹200, whichever is higher; 15 days grace) and **₹200** bounce.  
- **IndusInd Bank** (ASR: *Indus land bank*) — `"one of the highest penalties for EMI misses bank."` On screen: **24.00% p.a.** overdue (or ₹100, whichever is higher; 3 days grace) and **₹750** bounce (`screenshots/0008.png`, `0014.png`).

They said **`"We need to tell this to the intelligence."`** — the product should know and surface least vs highest EMI-miss penalty, not leave it for the user to infer from raw percents.

Separately but in the same thread, they stated a **pre-loan company rule**: `"Even before taking a loan, I need to tell the bank to not take this bank."` If another bank is **0.1% cheaper** on interest, still prefer it over a bank where **one missed EMI means withdrawing double money**. They said **`"This is also a part of the intelligence."`**

Closing the recording, they said **`"We also need this intelligence, which is already visible here."`** while scrolling back to the top of the same Other charges table (`screenshots/0015.jpg` / `0016.jpg`) — the data exists on screen; Shroffin should **use it** as labels and advice. They also said **`"Interest rate is extraordinary"`** between label talk and calculation talk — meaning **interest rate alone is not the ranking they want** when EMI-miss penalty differs this much.

The per-cell calculation drawer is the mechanism in `solution-01-clickable-charge-drawer-emi-miss-calculation.md`; this file is the **bank-row intelligence and pre-loan warning** layer.

## What this is for

**Explore banks → Other charges → Lender rows**, especially **Jammu and Kashmir Bank** vs **IndusInd Bank**, and the product **intelligence layer** that should rank or warn on EMI-miss penalty before someone commits to a bank. The defect is in `issue-02-banks-missing-emi-miss-penalty-labels.md`; this file is the constructive direction they gave.

## Why they said it that way

Indian home-loan shoppers often optimize on **interest rate** and miss that **one bounced EMI** on a 24% overdue bank can cost far more than a 0.1% rate saving. Labels and pre-loan warnings treat Shroffin as an advocate — telling people what the visible table already implies but does not say out loud. They want that **before** the loan, not as a surprise after a miss.

## How the files join (required)

- **time:** 35610–54330 ms (idle + scroll on Other charges)  
- **said:** pre-loan *don't take this bank*; 0.1% cheaper rate vs *withdraw double money* on one miss; *part of the intelligence* (`audio.srt` cues 6–9)  
- **did:** idle; scroll toward CSB 24% region (y=1272 at 29065 ms)  
- **seeing:** `screenshots/0004.png`–`0006.png` — CSB **24.00% p.a.** overdue  
- **therefore:** intelligence must warn on EMI-miss cost before loan, not only celebrate lower rate  

- **time:** 73930–95950 ms; scrolls y=2201–2323 (`events.json` 72065–100099 ms)  
- **said:** put labels on bank; J&K least; IndusInd (ASR Indus land) highest; tell intelligence (`audio.srt` cues 13–17)  
- **seeing:** `screenshots/0008.png` (t=66199) and `0009.png` (t=74200) — **both banks in same viewport**, no penalty labels on names  
- **therefore:** joined finding is least/highest EMI-miss labels on lender rows for intelligence  

- **time:** 105870–107530 ms  
- **said:** `"Interest rate is extraordinary."`  
- **seeing:** still on Other charges table mid-scroll  
- **therefore:** rate alone is insufficient ranking signal — supports label/warning direction  

- **time:** 129970–132850 ms; scroll y=702.5 → 692 (`events.json` 129931–130831 ms)  
- **said:** `"We also need this intelligence, which is already visible here."`  
- **seeing:** `screenshots/0015.jpg` / `0016.jpg` — top of table, overdue/bounce numbers visible but unlabeled  
- **therefore:** product should convert on-screen charge data into intelligence users can act on  

## Pinpoint

On **Explore banks → Other charges**, **lender rows** should show **EMI-miss penalty labels** (e.g. least vs highest, with **Jammu and Kashmir Bank** and **IndusInd Bank** as the spoken pair), that ranking should **feed Shroffin’s intelligence**, and users should get a **pre-loan warning not to choose a high-penalty bank** even for a **0.1% interest advantage**, because the overdue and bounce figures are **already visible** on this table but not yet turned into advice.

## Related discussion (not the solution itself)

The **clickable calculation drawer** for overdue + bounce (`solution-01-clickable-charge-drawer-emi-miss-calculation.md`) is how a user sees rupees for one miss; this solution is the **bank-level label and choice intelligence** on top. **`wb-rec-260816-0013`** already showed IndusInd **24.00% p.a.** while attacking the annum figure; this folder is where they name the **J&K vs IndusInd** contrast and demand labels. **`wb-rec-260816-0031`** starts a new topic (friendly lawyer vs legal symbols, MCLR/BPLR) — not a continuation of this ranking.

## Chronology in this recording

- 00:27.030–00:32.850: 24% bank context (CSB on screen).  
- 00:35.610–00:54.330: pre-loan warning; 0.1% rate vs double money; intelligence.  
- 01:13.930–01:35.950: labels on bank; J&K least; IndusInd highest; tell intelligence.  
- 01:45.870–01:47.530: interest rate extraordinary.  
- 02:09.970–02:12.850: intelligence already visible here.  

## Cross-recording continuation

**Continues from `wb-rec-260816-0013`**: same Other charges page; prior session ended clicking overdue cells and demanding a calculation while IndusInd 24% was on screen. This folder adds **bank labels**, **J&K vs IndusInd naming**, and **pre-loan intelligence**.

**Does not continue into `wb-rec-260816-0031`**: next session’s first speech is legal-language vs friendly-lawyer and rate-benchmark notes — different user job.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — issue-02 card summarizes labels/J&K/IndusInd/pre-loan warning. `timestamp_map` helper. `checked_no_extra_signal` beyond map.
- `audio.json` — segments 6–9, 13–18, 25; Indus word prob ~0.59; Jammu/Kashmir high prob. `supports_solution`.
- `audio.lrc` — timed label and intelligence lines. `supports_solution`.
- `audio.srt` — cues 6–9, 13–17, 18, 25. `supports_solution`.
- `audio.text` — same content in one block. `supports_solution`.
- `audio.tsv` — 35610, 73930, 78010, 87430, 94670, 105870, 129970 ms. `timeline_alignment`.
- `audio.txt` — timed dump matches srt. `supports_solution`.
- `audio.vtt` — same cues. `supports_solution`.
- `audio.webm` — binary 2350857 bytes; not played. `checked_no_extra_signal`.
- `audio_sentences.txt` — includes J&K and Indus land sentences. `supports_solution`.
- `console.json` — `[]`. `checked_no_extra_signal`.
- `events.json` — scrolls 72065–100099 ms during label talk; 129931–130831 ms during "already visible". No bank-row click. `timeline_alignment`.
- `index.html` — replay shell; inlined session metadata. `player_shell_with_inlined_json_fully_read`.
- `manifest.json` — session window and URL. `timeline_alignment`.
- `pages.json` — `[]`. `checked_no_extra_signal`.
- `replay.spec.ts` — no bank-row interaction recorded. `timeline_alignment`.
- `screenshots/0000.png`–`0007.png` — Other charges without J&K/IndusInd pair during first label beat; CSB 24% supports double-money warning. `related_discussion`.
- `screenshots/0008.png` — J&K 0.20%/₹200 and IndusInd 24%/₹750, no labels. `supports_solution`.
- `screenshots/0009.png` — same pair during least/highest speech. `supports_solution`.
- `screenshots/0010.png` — J&K and IndusInd visible. `supports_solution`.
- `screenshots/0011.png` — both banks in view. `supports_solution`.
- `screenshots/0012.png` — Notes section; related drawer pattern. `related_discussion`.
- `screenshots/0013.png` — J&K row. `supports_solution`.
- `screenshots/0014.png` — IndusInd row highlighted, still unlabeled. `supports_solution`.
- `screenshots/0015.jpg` — table top during "already visible". `supports_solution`.
- `screenshots/0016.jpg` — same. `supports_solution`.
- `screenshots/index.json` — t=66199, 74200, 130199 for join. `timeline_alignment`.
- `tabs.json` — stayed on explore-banks.html. `timeline_alignment`.
- `viewer.css` — 17895 bytes generic player. `player_chrome_fully_read_confirmed`.
- `viewer.js` — 32334 bytes generic player. `player_chrome_fully_read_confirmed`.

### Helper issue files

- `issue-02-banks-missing-emi-miss-penalty-labels.md` — `cross_link` + `timestamp_map`.

## ASR notes

1. **Indus land bank** → **IndusInd Bank** on `screenshots/0008.png` / `0014.png`; quoted raw ASR in body.  
2. **Jammu and Kashmir Bank** matches on-screen name.  
3. **least/highest penalty for EMI misses bank** — awkward grammar but clear with the two rows side by side.  
4. **Interest rate is extraordinary** — related talk that rate-only comparison is wrong; not a separate solution.  

## JSON

```json
{
  "solution_id": "wb-rec-260816-0029/solution-02-bank-emi-miss-penalty-labels-and-intelligence",
  "solution_title": "Label banks by EMI-miss penalty and warn before loan choice",
  "folder": "wb-rec-260816-0029",
  "sequence_index": 29,
  "recording_id": "1ce6b2c1-5803-4478-9e29-c1f823caae0f",
  "recording_started_at": "2026-08-15T18:59:02.434Z",
  "recording_ended_at": "2026-08-15T19:01:28.697Z",
  "duration_ms": 146263,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks (from URL / screenshots; pages.json empty)",
  "on_screen_object": "Lender rows on Other charges — especially Jammu and Kashmir Bank and IndusInd Bank",
  "for_topic": "Bank-level EMI-miss penalty ranking, pre-loan warnings, and intelligence from visible Other charges data",
  "pinpoint": "On Explore banks Other charges, label lender rows as least/highest EMI-miss penalty (e.g. J&K vs IndusInd), feed that ranking to product intelligence, and warn users before loan choice not to take a high-penalty bank even for a 0.1% rate advantage.",
  "kind": ["proposed_change", "idea", "company_thinking", "user_convenience", "product_principle"],
  "decidedness": "decided",
  "basis": "Users choose banks on rate alone but EMI-miss cost can dwarf a small rate edge; visible overdue/bounce numbers should become labels and pre-loan advice, not dead table cells.",
  "analog_source": "none",
  "linked_issue_files": ["issue-02-banks-missing-emi-miss-penalty-labels.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260816-0013",
  "continued_into_folder": null,
  "related_solution_files": ["solution-01-clickable-charge-drawer-emi-miss-calculation.md"],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:35,610 --> 00:00:54,330","00:01:13,930 --> 00:01:35,950","00:01:45,870 --> 00:01:47,530","00:02:09,970 --> 00:02:12,850"],
  "event_t_ms": [29065,72065,73266,75798,77363,87997,95232,99197,100099,129931,130831],
  "screenshot_files": ["screenshots/0004.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg"],
  "tags": ["intelligence","labels","trust","bank-choice","emi-miss","pre-loan"],
  "quotes": [
    {"clock": "00:00:35,610", "text": "Even before taking a loan, I need to tell the bank to not take this bank.", "artifact": "audio.srt"},
    {"clock": "00:00:42,370", "text": "If it has a 0.1% interest rate, then take that bank.", "artifact": "audio.srt"},
    {"clock": "00:00:46,850", "text": "But don't take this bank, because if even one EMI is missed, you have to withdraw double money.", "artifact": "audio.srt"},
    {"clock": "00:00:51,730", "text": "This is also a part of the intelligence.", "artifact": "audio.srt"},
    {"clock": "00:01:13,930", "text": "We need to put labels on the bank.", "artifact": "audio.srt"},
    {"clock": "00:01:20,230", "text": "It is one of the least penalty for EMI misses bank.", "artifact": "audio.srt"},
    {"clock": "00:01:27,430", "text": "And Indus land bank is one of the highest penalties for EMI misses bank.", "artifact": "audio.srt"},
    {"clock": "00:01:34,670", "text": "We need to tell this to the intelligence.", "artifact": "audio.srt"},
    {"clock": "00:02:09,970", "text": "We also need this intelligence, which is already visible here.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
