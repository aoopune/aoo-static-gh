# Show a rupee calculation for overdue after one missed EMI, not only percent per year

They asked Shroffin to show how an overdue is made in money after a missed EMI — how much extra, how much charge, how many days until a notice, how many days until a collection agency.
This is for Explore banks → Other charges → Overdue charge (figures like 5% p.a. and 2% p.a.).
They said a yearly percent is the wrong unit if the borrower only missed the next month, and that calculation means they can put their own numbers on top of it.
They were decided on needing a calculation; the next recording continues with a drawer for every overdue type.

---
solution_id: "wb-rec-260816-0013/solution-03-show-overdue-rupee-calculation-after-missed-emi"
solution_title: "Show a rupee calculation for overdue after one missed EMI, not only percent per year"
folder: "wb-rec-260816-0013"
sequence_index: 28
recording_id: "924b010f-fab9-4953-ba2d-7edc0de4e239"
recording_started_at: "2026-08-15T18:43:33.349Z"
recording_ended_at: "2026-08-15T18:52:58.320Z"
duration_ms: 564971
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Other charges → Overdue charge column (‡) and cells such as 5.00% p.a. / 2.00% p.a."
for_topic: "Overdue charge: a usable rupee walkthrough after missing one EMI, plus notice and collection-agency timelines"
pinpoint: "On Explore banks Other charges, looking at overdue percents, they said they need a calculation here: show how an overdue is made after missing an EMI, how much money and charge, how many days until notice and a collection agency; calculation means the user can put data on top of it — 2% per annum is wrong if they only missed next month."
kind: ["proposed_change","idea","user_convenience"]
decidedness: "decided"
basis: "A borrower who missed one EMI cannot use a yearly percent; they need rupees and a timeline, and inputs they can change."
analog_source: "none"
linked_issue_files: ["issue-03-overdue-charge-no-rupee-calculation.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260816-0029"
related_solution_files: []
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png","screenshots/0066.png","screenshots/0067.png","screenshots/0068.png","screenshots/0069.png","screenshots/0070.png","screenshots/0071.png","screenshots/0072.png","screenshots/0073.png","screenshots/0074.png","screenshots/0075.png","screenshots/0076.png","screenshots/0077.png","screenshots/0078.png","screenshots/0079.png","screenshots/0080.png","screenshots/0081.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:07:27,940-00:09:23,500"]
event_t_ms: [478319, 489973, 492982, 494097, 495044, 553442]
screenshot_files: ["screenshots/0068.png","screenshots/0069.png","screenshots/0070.png","screenshots/0071.png","screenshots/0073.png","screenshots/0074.png","screenshots/0080.png","screenshots/0081.png"]
tags: ["overdue","calculation","charges","user-convenience","notice","collection"]
---

## Exact solution (or idea that can also be a solution)

Still on Other charges, they asked “What is 5%?” then “I need a calculation here. This does not have a calculation.” The direction: **show how an overdue is made** after missing; how much money; how much charge; how many days until a notice; how many days until a collection agency. “You should know something.” “Show me the calculation.” **“Calculation means I can put the data on top of my calculation.”** They clicked 2.00% p.a. cells: “How did you get 2%? You have written the annum. But I put a total amount in the next month. I have not used the money for an annum.”

This is a proposed change (and an idea that is also the solution) for the overdue column. Issue `issue-03-overdue-charge-no-rupee-calculation.md` is the defect. This file is the calculation they demanded. Next recording names the UI: a **drawer** with a calculation for every overdue type.

## What this is for

Explore banks → Other charges → **Overdue charge (‡)** — turning % p.a. into a rupee story after one missed EMI.

## Why they said it that way

Convenience and honesty: a missed next-month EMI is not a year of money. They want monitoring value (inputs driving a shown sum), not a legal percent.

## How the files join (required)

- time 447940–462230 ms — said: “What is 5%?” doing: scroll after closing rate-change notes. seeing: overdue column with 8%/2%/5% p.a. (`0065`–`0067`, Karur Vysya 5.00% p.a. in `0066.png`). therefore: they named the 5% cell as meaningless without money.
- time 478319–495044 ms — said: need a calculation / how overdue is made / notice / collection agency. doing: Open note for mark ‡; clicks tbody tr30 and tr29 td4 (Tamilnad Mercantile / nearby 2% cells). seeing: `0068.png`–`0073.png`. therefore: show a calculation on this overdue object.
- time 535470–563500 ms — said: Show me the calculation / put data on top / How did you get 2% / annum vs next month. doing: scroll; click tr15 (`0080.png` IDBI 2.00% p.a. selected). therefore: unit must be the missed month in rupees, not 2% per year.

## Pinpoint

On Explore banks → Other charges → Overdue charge, they said to show a calculation of rupees after one missed EMI (charge, notice days, collection-agency days) that the user can feed their own numbers into — not only 2% or 5% per annum.

## Related discussion (not the solution itself)

“There is no monitoring value.” EMI bounce sits on the same table; they did not design bounce separately here. Next folder folds bounce into the same drawer. “Audio charge” in 0029 ASR is overdue charge.

## Chronology in this recording

- 00:07:27 What is 5%?
- 00:07:58 open ‡ overdue note.
- 00:08:10–00:08:56 calculation / notice / collection.
- 00:09:02–00:09:23 data on top of calculation; 2% p.a. vs next month.

## Cross-recording continuation

**Into wb-rec-260816-0029** (~6 minute gap). Speech continues: 0029 first line “For every type of audio charge, I need a drawer and I need a calculation in the drawer” (ASR audio = overdue) / extra money if one EMI is missed. Write the ask as stated here; 0029 adds the drawer-for-every-type and bank labels (J&K vs IndusInd). Previous folder did not discuss overdue.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json`: issue-03 card: show calculation / notice / collection. used_for: `checked_no_extra_signal`.
- `audio.json`: segments 112–150 ~448–563s 5%/calculation/2% p.a.; language=en. used_for: `supports_solution`.
- `audio.lrc`: timed calculation/overdue questions. used_for: `timeline_alignment`.
- `audio.srt`: primary clock 00:07:27–00:09:23. used_for: `supports_solution`.
- `audio.text`: plain overdue-calculation dump. used_for: `timeline_alignment`.
- `audio.tsv`: 447940–563500 ms 5% / show overdue / 2% annum. used_for: `supports_solution`.
- `audio.txt`: timed dump matching srt. used_for: `timeline_alignment`.
- `audio.vtt`: same cues as srt. used_for: `timeline_alignment`.
- `audio.webm`: binary mic not played. used_for: `checked_no_extra_signal`.
- `audio_sentences.txt`: includes Show me the calculation / How did you get 2%. used_for: `supports_solution`.
- `console.json`: empty array. used_for: `checked_no_extra_signal`.
- `events.json`: ‡ note 478319; clicks tr30/tr29 489973–495044; tr15 553442. used_for: `supports_solution`.
- `index.html`: player shell; inlined events include those clicks. used_for: `checked_no_extra_signal`.
- `manifest.json`: explore-banks 564971 ms. used_for: `timeline_alignment`.
- `pages.json`: Explore banks – Shroffin. used_for: `timeline_alignment`.
- `replay.spec.ts`: Open overdue ‡ note; click tr30/tr29/tr15 spans. used_for: `timeline_alignment`.
- `screenshots/0000.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0001.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0002.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0003.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0004.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0005.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0006.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0007.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0008.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0009.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0010.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0011.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0012.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0013.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0014.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0015.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0016.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0017.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0018.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0019.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0020.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0021.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0022.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0023.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0024.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0025.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0026.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0027.jpg`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0028.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0029.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0030.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0031.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0032.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0033.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0034.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0035.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0036.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0037.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0038.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0039.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0040.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0041.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0042.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0043.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0044.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0045.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0046.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0047.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0048.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0049.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0050.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0051.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0052.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0053.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0054.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0055.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0056.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0057.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0058.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0059.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0060.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0061.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0062.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0063.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0064.png`: Earlier Charges or Rate change; not the overdue-calc ask. used_for: `checked_no_extra_signal`.
- `screenshots/0065.png`: Scrolling Other charges toward overdue (IndusInd 24% p.a. visible). used_for: `timeline_alignment`.
- `screenshots/0066.png`: Scrolling Other charges toward overdue (IndusInd 24% p.a. visible). used_for: `timeline_alignment`.
- `screenshots/0067.png`: Scrolling Other charges toward overdue (IndusInd 24% p.a. visible). used_for: `timeline_alignment`.
- `screenshots/0068.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0069.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0070.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0071.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0072.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0073.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0074.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0075.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0076.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0077.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0078.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0079.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0080.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/0081.png`: Overdue column % p.a. / ‡ note / clicked 2% cells (TMB, then IDBI). used_for: `supports_solution`.
- `screenshots/index.json`: 0068 t=478721 ‡ note; 0070–0073 interaction clicks; 0080 t=553844 IDBI 2.00% p.a. used_for: `timeline_alignment`.
- `tabs.json`: single explore-banks tab. used_for: `timeline_alignment`.
- `viewer.css`: 17895 bytes generic player. used_for: `checked_no_extra_signal`.
- `viewer.js`: 32334 bytes generic player. used_for: `checked_no_extra_signal`.

### Helper issue files

- `issue-03-overdue-charge-no-rupee-calculation.md`: `timestamp_map` + `cross_link`.
- `issue-02-rate-change-charge-too-complex-legal-jargon.md`: `timestamp_map` (they leave rate-change for 5%).
- `issue-01-government-charges-same-on-every-bank-and-duplicated-in-card.md`: `not_used`.

## ASR notes

Transcripts agree on calculation / 2% / annum. “should I overdue after missing” = after missing an EMI. 0029 “audio charge” = overdue (join to same table).

## JSON

```json
{
  "solution_id": "wb-rec-260816-0013/solution-03-show-overdue-rupee-calculation-after-missed-emi",
  "solution_title": "Show a rupee calculation for overdue after one missed EMI, not only percent per year",
  "folder": "wb-rec-260816-0013",
  "sequence_index": 28,
  "recording_id": "924b010f-fab9-4953-ba2d-7edc0de4e239",
  "recording_started_at": "2026-08-15T18:43:33.349Z",
  "recording_ended_at": "2026-08-15T18:52:58.320Z",
  "duration_ms": 564971,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Other charges → Overdue charge column (‡) and cells such as 5.00% p.a. / 2.00% p.a.",
  "for_topic": "Overdue charge: a usable rupee walkthrough after missing one EMI, plus notice and collection-agency timelines",
  "pinpoint": "On Explore banks Other charges, looking at overdue percents, they said they need a calculation here: show how an overdue is made after missing an EMI, how much money and charge, how many days until notice and a collection agency; calculation means the user can put data on top of it — 2% per annum is wrong if they only missed next month.",
  "kind": ["proposed_change","idea","user_convenience"],
  "decidedness": "decided",
  "basis": "A borrower who missed one EMI cannot use a yearly percent; they need rupees and a timeline, and inputs they can change.",
  "analog_source": "none",
  "linked_issue_files": ["issue-03-overdue-charge-no-rupee-calculation.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260816-0029",
  "related_solution_files": [],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png","screenshots/0066.png","screenshots/0067.png","screenshots/0068.png","screenshots/0069.png","screenshots/0070.png","screenshots/0071.png","screenshots/0072.png","screenshots/0073.png","screenshots/0074.png","screenshots/0075.png","screenshots/0076.png","screenshots/0077.png","screenshots/0078.png","screenshots/0079.png","screenshots/0080.png","screenshots/0081.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:07:27,940-00:09:23,500"],
  "event_t_ms": [478319, 489973, 492982, 494097, 495044, 553442],
  "screenshot_files": ["screenshots/0068.png","screenshots/0069.png","screenshots/0070.png","screenshots/0071.png","screenshots/0073.png","screenshots/0074.png","screenshots/0080.png","screenshots/0081.png"],
  "tags": ["overdue","calculation","charges","user-convenience","notice","collection"],
  "quotes": [
    {"clock": "00:08:11,350", "text": "I need a calculation here.", "artifact": "audio.srt"},
    {"clock": "00:08:16,530", "text": "No, you have to show how an overdue is made.", "artifact": "audio.srt"},
    {"clock": "00:08:55,470", "text": "Show me the calculation.", "artifact": "audio.srt"},
    {"clock": "00:09:14,080", "text": "How did you get 2%?", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 478319, "name": "Open note for mark ‡", "css": "th#hlc-th-overdueChargeDisplay > button"},
    {"t_ms": 489973, "name": "overdue cell tr30", "css": "tbody#hlc-compare-body > tr:nth-of-type(30) > td:nth-of-type(4) > span > span"},
    {"t_ms": 553442, "name": "overdue cell tr15", "css": "tbody#hlc-compare-body > tr:nth-of-type(15) > td:nth-of-type(4) > span > span"}
  ],
  "related_discussion_present": true
}
```
