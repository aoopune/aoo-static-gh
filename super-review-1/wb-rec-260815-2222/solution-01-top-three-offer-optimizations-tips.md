# Top three offer optimizations (Top 3 tips)

Build a feature on Explore banks: from the full offer list, show the top three optimizations so the user can reach the best offer over the next few months to a year.
Those tips must be accurate — examples they gave include salary, the gap between two offers, and current offer vs closest offer.
They also said being very helpful (“how can you be so helpful?”) is fine; accuracy matters more than hiding the advice.
This continues the intelligence feature talk from the previous recording; the page they sat on still has no tips block.

---
solution_id: "wb-rec-260815-2222/solution-01-top-three-offer-optimizations-tips"
solution_title: "Top three offer optimizations (Top 3 tips)"
folder: "wb-rec-260815-2222"
sequence_index: 16
recording_id: "8fda53c4-d7ea-49a9-806d-492199ec6b40"
recording_started_at: "2026-08-15T16:52:14.273Z"
recording_ended_at: "2026-08-15T17:01:08.512Z"
duration_ms: 534239
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Explore banks main view (loan inputs + bank options table); missing top-three optimizations / tips block"
for_topic: "Explore banks intelligence — how a user reaches a better offer over months to a year"
pinpoint: "On Explore banks, while idle on the loan form and Canara Bank row, they said to take all offers and suggest the top three optimizations (Top 3 tips) so the user can reach the best offer in the next few months to one year — and those tips must be accurate (salary, gap between offers, current vs closest offer)."
kind: ["idea", "proposed_change"]
decidedness: "decided"
basis: "Product intelligence job: user should see a path to a better offer, not just today's row; tips must be trustworthy enough that no one can dismiss them as wrong or 'AI fluff'."
analog_source: "none"
linked_issue_files: ["issue-01-explore-banks-missing-top-three-offer-optimizations.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2213"
continued_into_folder: null
related_solution_files: ["solution-02-never-mention-ai-show-as-product.md", "solution-03-google-flights-honesty-for-rates.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg","screenshots/0062.jpg","screenshots/0063.jpg","screenshots/0064.jpg","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:11,100 --> 00:01:01,080","00:05:54,790 --> 00:06:48,070"]
event_t_ms: [202,606,8305,16303,24299,32322,40322,50327,58327,66328,74329,82328,90302,98329,106327,114331,122331,130330,138330,148328,156303,164330,172327,180304,188329,198328,208329,216329,224330,234330,242303,250302,258303,266330,274330,282328,290303,298330,306332,314332,322330,332322,340329,348303,356325,364331,374296,382330,390297,398327,408328,418330,426329,434298,442340,450349,458359,466335,474367,482367,490335,498371,506368,514369,524342]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0044.jpg","screenshots/0064.jpg"]
tags: ["explore-banks","intelligence","tips","accuracy","product"]
---

## Exact solution (or idea that can also be a solution)

They said this feature still **needs to be built**. The call: **we have all the offers** → **you suggest top three optimizations** so **the user can reach the best offer in the next few months to one year**. “That's it. This is all it is.”

Later they named the same thing **Top 3 tips** and said **they must be accurate**. Examples of accurate content: if the user **doesn't have a salary** (show that), **gap between two offers**, **your offer is this / the closest offer**. They do **not** actually use an LLM (“AI means we don't actually use LLM”); complexity is **not very complex** unless **age** is added wrongly — they already have **a list of offers**.

On helpfulness: if someone says **“how can you be so helpful?”** / **“you are giving so much money”** — **“It's okay bro.”**

## What this is for

**Explore banks** intelligence layer: the user-job is “how do I get to a better home-loan offer over the next months to a year?” not just see one Canara Bank row.

Sits next to `issue-01-explore-banks-missing-top-three-offer-optimizations.md` (the defect is the missing UI; this file is the direction).

## Why they said it that way

Users need a **path**, not a static table. Tips must be **accurate** or trust breaks. Helpfulness that saves money is acceptable if the facts hold up.

## How the files join (required)

- **11100–61080 ms / 00:00:11–00:01:01** — said: “this feature needs to be built”; “You suggest top three optimizations… best offer in the next few months to one year.” (audio.srt cues 1–11). Did: idle on Explore banks (events.json). Seeing: `screenshots/0001.jpg` (t=8204) — loan inputs, See options, Canara Bank row, **no tips block**. Page: explore-banks.html, Loan inputs / Bank options (pages.json). **Finding:** build top-three optimizations feature here.

- **354790–408070 ms / 00:05:54–00:06:48** — said: “Top 3 tips. But they must be accurate.”; salary; gap between offers; current vs closest; “how can you be so helpful?” → “It's okay bro.” (audio.srt cues 105–122). Did: idle. Seeing: `screenshots/0044.jpg` (t=364205) — same viewport, still no tips UI. **Finding:** same feature, accuracy bar + example tip content.

## Pinpoint

On Explore banks, idle on the pre-filled form and single bank row, they defined the missing intelligence product: **top three optimizations / Top 3 tips** from the full offer list so the user can reach the **best offer within months to a year**, with **accurate** concrete examples (salary, offer gap, closest offer), and no worry if the advice feels unusually helpful.

## Related discussion (not the solution itself)

- Prev folder `wb-rec-260815-2213`: “Give me the best”; CIBIL 720–780 best offer; three tips before search keyed to income — same feature arc.
- **Never mention AI** (solution-02) and **Google Flights honesty** (solution-03) are how to *present* this intelligence, not a second feature.
- Birbal / AI-funding competitor talk supports not labeling tips as AI (under solution-02).

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:00 | 202 | (start) | landmark_snapshot | 0000.jpg |
| 00:00:11 | 11100 | feature needs to be built | idle | 0001.jpg |
| 00:00:17–00:00:38 | 17060–38940 | not complex; list of offers; no LLM | idle | 0002–0004 |
| 00:00:41–00:01:01 | 41560–61080 | top three optimizations → best offer | idle | 0005–0007 |
| 00:05:54–00:06:48 | 354790–408070 | Top 3 tips; must be accurate; helpfulness OK | idle | 0044.jpg |

## Cross-recording continuation

**From `wb-rec-260815-2213`** (~7s gap): ended with “first fill the form… Give me the best” and CIBIL 720–780 best-offer talk on the same Explore banks screen. This recording opens: “this feature needs to be built.”

**Into `wb-rec-260815-2231`**: gift-card / survey / launch-trust talk continues; top-3 feature not reopened there first.

## Evidence by file (every raw recorder file in the folder — no omissions)

Helper issue `issue-01-explore-banks-missing-top-three-offer-optimizations.md`: `cross_link` + `timestamp_map`.

- `manifest.json` — id, explore-banks start_url, 534239 ms, 65 events/shots. `timeline_alignment`
- `audio.json` — 172 segments; segs 1, 9–11, 105–117 for feature + accuracy. `supports_solution` (fully_read_chunked; language tag `mr` wrong)
- `audio.srt` — primary clock; cues quoted above. `supports_solution`
- `audio.tsv` — ms ranges match srt. `supports_solution`
- `audio.vtt` / `audio.lrc` / `audio.text` / `audio.txt` / `audio_sentences.txt` — same transcript family. `timeline_alignment`
- `audio.webm` — binary; not played. `checked_no_extra_signal`
- `events.json` — landmark t=202 then 64 idle; no clicks. `supports_solution`
- `pages.json` — Loan inputs, Bank options; no tips heading. `supports_solution`
- `tabs.json` — single tab explore-banks.html whole session. `timeline_alignment`
- `console.json` — `[]`. `checked_no_extra_signal`
- `replay.spec.ts` — goto + idle only. `timeline_alignment`
- `index.html` — player shell; inlined session ids/counts. `checked_no_extra_signal`
- `viewer.js` (32334 B) / `viewer.css` (17895 B) — generic player. `player_chrome_fully_read_confirmed`
- `screenshots/index.json` — 65 shots, t=204–532243, all explore-banks URL. `timeline_alignment`
- `screenshots/0000.jpg`–`screenshots/0064.jpg` — all 65 fully_read_image; MD5 `68df1950…` identical; Explore banks form + Canara row, **no tips UI**. `supports_solution` (0000, 0044 representative; all confirm same)

## ASR notes

Whisper `language: mr` is wrong (English). “age” at 00:00:20 may mean Age field on screen or mishear — immediately corrected with “list of offers.” “seeing” in “not seeing a gap” has very low word probability (~0.006 in audio.json); kept as spoken example of **accurate tip content**, not a separate layout bug. Competitor name: srt **Birbal** vs json segment text **Birbal** — quoted srt/tsv.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2222/solution-01-top-three-offer-optimizations-tips",
  "solution_title": "Top three offer optimizations (Top 3 tips)",
  "folder": "wb-rec-260815-2222",
  "sequence_index": 16,
  "recording_id": "8fda53c4-d7ea-49a9-806d-492199ec6b40",
  "recording_started_at": "2026-08-15T16:52:14.273Z",
  "recording_ended_at": "2026-08-15T17:01:08.512Z",
  "duration_ms": 534239,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Explore banks main view (loan inputs + bank options table); missing top-three optimizations / tips block",
  "for_topic": "Explore banks intelligence — how a user reaches a better offer over months to a year",
  "pinpoint": "On Explore banks, while idle on the loan form and Canara Bank row, they said to take all offers and suggest the top three optimizations (Top 3 tips) so the user can reach the best offer in the next few months to one year — and those tips must be accurate (salary, gap between offers, current vs closest offer).",
  "kind": ["idea", "proposed_change"],
  "decidedness": "decided",
  "basis": "Product intelligence job: user should see a path to a better offer, not just today's row; tips must be trustworthy enough that no one can dismiss them as wrong or 'AI fluff'.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-explore-banks-missing-top-three-offer-optimizations.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2213",
  "continued_into_folder": null,
  "related_solution_files": ["solution-02-never-mention-ai-show-as-product.md", "solution-03-google-flights-honesty-for-rates.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg","screenshots/0062.jpg","screenshots/0063.jpg","screenshots/0064.jpg","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:11,100 --> 00:01:01,080","00:05:54,790 --> 00:06:48,070"],
  "event_t_ms": [202,606,8305,16303,24299,32322,40322,50327,58327,66328,74329,82328,90302,98329,106327,114331,122331,130330,138330,148328,156303,164330,172327,180304,188329,198328,208329,216329,224330,234330,242303,250302,258303,266330,274330,282328,290303,298330,306332,314332,322330,332322,340329,348303,356325,364331,374296,382330,390297,398327,408328,418330,426329,434298,442340,450349,458359,466335,474367,482367,490335,498371,506368,514369,524342],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0044.jpg","screenshots/0064.jpg"],
  "tags": ["explore-banks","intelligence","tips","accuracy","product"],
  "quotes": [
    {"clock": "00:00:11,100", "text": "Approximately, we have seen that this feature needs to be built.", "artifact": "audio.srt"},
    {"clock": "00:00:48,540", "text": "You suggest top three optimizations that the user can reach the best offer in the next few months to one year.", "artifact": "audio.srt"},
    {"clock": "00:05:54,790", "text": "Top 3 tips.", "artifact": "audio.srt"},
    {"clock": "00:06:04,270", "text": "But they must be accurate.", "artifact": "audio.srt"},
    {"clock": "00:06:50,410", "text": "It's okay bro.", "artifact": "audio.srt"}
  ],
  "clicks": [],
  "related_discussion_present": true
}
```
