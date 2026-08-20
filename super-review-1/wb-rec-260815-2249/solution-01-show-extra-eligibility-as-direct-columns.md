# Show extra eligibility questions as columns on the bank list

Instead of hiding extra loan questions behind “Adjust eligibility,” show those extras as columns here, directly.
This is for Explore banks: the extra questions (existing EMIs, credit cards, income share, tenure, co-applicant) versus the bank table that only has about four or five columns.
They said it will be a big challenge because opening the extra block already made the form huge, but they still have to show the banks and the intelligence — customers do not come asking for a bank name.
They were leaning: “What we need to do is…” not a maybe.

---
solution_id: "wb-rec-260815-2249/solution-01-show-extra-eligibility-as-direct-columns"
solution_title: "Show extra eligibility questions as columns on the bank list"
folder: "wb-rec-260815-2249"
sequence_index: 19
recording_id: "55f40b18-3bf3-46a3-b169-7adabe6886b1"
recording_started_at: "2026-08-15T17:19:17.338Z"
recording_ended_at: "2026-08-15T17:21:34.102Z"
duration_ms: 136764
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs details#hlc-form-more (“Adjust eligibility”) extras, Bank options table columns (Lenders, Rate, Loan amount, Tenure, EMI), See options #hlc-see-options"
for_topic: "Where extra eligibility questions live on Explore banks — columns on the bank list versus collapsed Adjust eligibility"
pinpoint: "On Explore banks they said to show the extra eligibility questions as columns here, directly, instead of “adjusting the availability” (on-screen: Adjust eligibility); the bank table only has four then five columns (Lenders, Rate, Loan amount, Tenure, EMI), and they still need to show banks and intelligence without the form becoming huge."
kind: ["proposed_change", "idea", "user_convenience", "company_thinking"]
decidedness: "leaning"
basis: "The extras should be visible where the bank list is, not behind a disclosure; customers decide loan amount and EMI, not a bank name first; opening Adjust eligibility already made the card too big."
analog_source: "none"
linked_issue_files: ["issue-01-adjust-eligibility-hidden-not-shown-as-columns.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2240"
continued_into_folder: "wb-rec-260815-2302"
related_solution_files: ["solution-02-mandate-income-share-not-every-extra.md"]
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:01,210 --> 00:00:37,950"]
event_t_ms: [184,1994,1995,1996,5031,6728,15088,16698,35476,35477,38432,42631]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg"]
tags: ["layout","eligibility","table-columns","convenience","intelligence","explore-banks"]
---

## Exact solution (or idea that can also be a solution)

They named a direction, not only a defect: **show the extra eligibility questions as columns here, directly**, instead of hiding them behind Adjust eligibility.

Raw ASR (audio.srt cue 1): “What we need to do is, instead of adjusting the availability, we need to show the columns here.” Join with the on-screen control **Adjust eligibility** (`details#hlc-form-more`) and the previous recording’s “Additional columns” talk: ASR likely meant **eligibility**, not “availability.” Cue 2: “Directly. There are only 4 columns here.” Cue 3: “5 columns.” After **See options**, the Bank options table in `screenshots/0001.jpg` / `0006.jpg` shows five columns: Lenders, Rate, Loan amount, Tenure (yrs), EMI.

That idea is also the solution for this topic: extras should live as visible columns with the bank list, not only inside a disclosure. They immediately named the constraint: “It will be a big challenge.” “See how big it has become.” “We have to show the banks.” “We have to show the banks and intelligence.” “And this is mostly the case that the customer does not ask for the bank.”

## What this is for

Explore banks (`http://localhost:8765/pages/explore-banks.html`): Loan inputs extras versus Bank options table. Linked issue `issue-01-adjust-eligibility-hidden-not-shown-as-columns.md` is the problem (extras hidden). This file is the direction (show them as columns, while still showing banks and intelligence).

## Why they said it that way

User convenience and company thinking: the customer’s job is loan amount and EMI, not “ask for a bank.” Hiding extras behind Adjust eligibility makes those questions easy to miss; stuffing them into the already-large card fights the need to still show banks. Layout size is the tension, not a reason to drop the columns idea.

## How the files join (required)

- time (ms and clock): **1210–16510 ms** (`00:00:01,210`–`00:00:16,510`)
- what they said (quote + audio file): audio.srt cues 1–2 — “instead of adjusting the availability, we need to show the columns here.” / “Directly. There are only 4 columns here.”
- what they did: focus+click **See options** `#hlc-see-options` at **1994–1995 ms**, submit `#hlc-inputs` at **1996 ms**; scroll y=214 at **5031 ms**; click `details#hlc-form-more` summary at **6728 ms**
- what was on screen: `0000.jpg` (t=185) Adjust eligibility open (Existing EMIs ₹555, Credit card limits ₹0, FOIR 55% default, Tenure 20, Co-applicant No); `0001.jpg` (t=2397) five-column bank table (Canara 8.80%, loan ₹5,400, tenure 20, EMI ₹48); `0002.jpg` (t=7134) extras collapsed over the table
- what page/object: Explore banks – Shroffin; Loan inputs + Bank options
- therefore the actual finding is: show extras as columns on this bank list, not behind Adjust eligibility

- time (ms and clock): **18870–37950 ms** (`00:00:18,870`–`00:00:37,950`)
- what they said: “5 columns.” “It will be a big challenge.” “We have to show the culture.” “See how big it has become.” “We have to show the banks and intelligence.” “the customer does not ask for the bank.”
- what they did: click form-more **15088 ms**; idle on expanded form; See options again **35477 ms**; scroll **38432 ms**; toggle form-more **42631 ms**
- what was on screen: `0003.jpg`–`0005.jpg` huge expanded extras card; `0006.jpg` table again; `0007.jpg` collapsed extras over table
- therefore: the columns idea must still leave room to show banks and intelligence; customers do not arrive asking for a bank name

Idle + empty console + player chrome added no extra proposal at those beats.

## Pinpoint

On Explore banks, extra eligibility inputs inside **Adjust eligibility** should be shown as columns here, directly, next to the bank list (which they counted as four then five columns: Lenders, Rate, Loan amount, Tenure, EMI). They wanted that because those extras belong with the results, customers decide loan amount and EMI rather than a bank first, and they still have to show banks and intelligence even though opening the extra block made the form huge.

## Related discussion (not the solution itself)

- “It will be a big challenge” — layout tension of adding columns.
- Raw ASR “We have to show the culture.” (word probability ~0.45). Join: immediately after “show the columns” / “big challenge”; ASR likely meant columns or calculator. Quote raw.
- “banks and intelligence” (intelligence probability ~0.49) — still show intelligence, not only a bank name list.
- “The customer does not ask for the bank” — page job is loan amount / EMI, not bank-first.
- Optional-vs-mandatory walk after ~59s is **solution-02**, not a second copy of this columns idea.
- Closing aside “This guy is playing a song.” is off-topic, not this finding.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:00 | 184–185 | (start) | landmark Explore banks; extras already open | 0000.jpg |
| 00:00:01–00:00:16 | 1210–16510 | Show columns here directly; only 4 columns | See options 1995; scroll 5031; toggle form-more 6728 | 0001 table; 0002 collapsed |
| 00:00:15–00:00:37 | 15088–37950 | 5 columns; big challenge; show banks and intelligence; customer does not ask for the bank | form-more 15088; idle; See options 35477 | 0003–0006 |
| 00:00:42 | 42631 | (gap before optional-columns talk) | toggle form-more | 0007 collapsed |
| 00:00:45–00:00:52 | 45532–52186 | (idle) | scroll toward top of card | 0008 heading + table headers |

## Cross-recording continuation

**From wb-rec-260815-2240** (~7s gap). That session ended on the same Explore banks card: rename **Adjust eligibility** to additional columns / attributes / parameters in simple English; **See options** should be a button below that block and in the center. Last srt: “Additional columns.” / “And this C options… should be a button… that is below this adjust eligibility. And in center.” Last shots `0062.jpg`–`0066.jpg` show the same extras and five-column table. This folder’s first line continues that thought: instead of adjusting eligibility, show the columns here.

**Into wb-rec-260815-2302** (~11 min gap, under 15 min; last layout topic matches first topic there). 2302 starts still on Explore banks with Adjust eligibility open (`0000.jpg`): “So we have to drop down so that the form doesn't get too big.” “Correct. But actually these things have to be affected.” Same extras-vs-form-size argument.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — issue-run theme card pointing at extras-vs-columns; used as timestamp map only. `checked_no_extra_signal`
- `audio.json` — 35 segments, `language` `mr` (ignored); “availability” p≈0.078; “culture” p≈0.45; “intelligence” p≈0.49; word times for cues 1–10. `supports_solution`
- `audio.lrc` — same timed lines as srt. `timeline_alignment`
- `audio.srt` — primary clock; quotes from cues 1–10. `supports_solution`
- `audio.text` — plain dump of columns / banks / intelligence talk. `supports_solution`
- `audio.tsv` — ms 1210–37950 for this finding. `timeline_alignment`
- `audio.txt` — same family as srt. `timeline_alignment`
- `audio.vtt` — same family as srt. `timeline_alignment`
- `audio.webm` — binary mic; not played. `checked_no_extra_signal`
- `audio_sentences.txt` — one-block transcript including “show the columns here.” `supports_solution`
- `console.json` — `[]`. `checked_no_extra_signal`
- `events.json` — See options clicks 1995/35477; form-more toggles 6728/15088/42631; scrolls. `supports_solution`
- `index.html` — player shell; HTML comment inlines session id `55f40b18-3bf3-46a3-b169-7adabe6886b1`, Explore banks URL, 43 events, 20 shots; no extra discussion. `checked_no_extra_signal`
- `manifest.json` — id, start_url Explore banks, duration 136764 ms, 20 screenshots, viewport 1366×768. `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; Loan inputs extras including Existing EMIs, FOIR, Tenure*, co-applicant. `supports_solution`
- `replay.spec.ts` — Playwright: `#hlc-see-options` twice, repeated `hlc-form-more` clicks. `timeline_alignment`
- `screenshots/0000.jpg` — extras open at start. `supports_solution`
- `screenshots/0001.jpg` — five-column bank table after See options. `supports_solution`
- `screenshots/0002.jpg` — extras collapsed over table. `supports_solution`
- `screenshots/0003.jpg` — extras open during 4/5-column talk. `supports_solution`
- `screenshots/0004.jpg` — expanded form (“how big”). `supports_solution`
- `screenshots/0005.jpg` — same expanded form. `supports_solution`
- `screenshots/0006.jpg` — table after second See options. `supports_solution`
- `screenshots/0007.jpg` — collapsed extras over table. `supports_solution`
- `screenshots/0008.jpg` — “Explore banks.” + table headers. `related_discussion`
- `screenshots/0009.jpg` — extras open later (optional-columns talk is solution-02). `timeline_alignment`
- `screenshots/0010.jpg` — collapsed extras + table. `timeline_alignment`
- `screenshots/0011.jpg` — extras open. `timeline_alignment`
- `screenshots/0012.jpg` — extras open. `timeline_alignment`
- `screenshots/0013.jpg` — collapsed extras + table. `timeline_alignment`
- `screenshots/0014.jpg` — collapsed extras + table. `timeline_alignment`
- `screenshots/0015.jpg` — extras open. `timeline_alignment`
- `screenshots/0016.jpg` — extras open. `timeline_alignment`
- `screenshots/0017.jpg` — extras open. `timeline_alignment`
- `screenshots/0018.jpg` — extras open. `timeline_alignment`
- `screenshots/0019.jpg` — same form during song aside. `checked_no_extra_signal`
- `screenshots/index.json` — 20 shots, all Explore banks. `timeline_alignment`
- `tabs.json` — one tab, Explore banks whole session. `timeline_alignment`
- `viewer.css` — 17895 bytes, generic player styles. `checked_no_extra_signal`
- `viewer.js` — 32334 bytes, generic player script. `checked_no_extra_signal`

### Helper issue files

- `issue-01-adjust-eligibility-hidden-not-shown-as-columns.md` — `timestamp_map` + `cross_link`. Defect is hiding extras; this file is the columns direction.

## ASR notes

`audio.srt` / `.vtt` / `.tsv` / `.text` / `.txt` / `audio_sentences.txt` share the same sentences. `audio.json` matches that family.

Conflicts resolved by screen + click (quotes stay raw):

1. **“adjusting the availability”** (p≈0.078) vs on-screen **Adjust eligibility** and previous folder “adjust eligibility.” Pinpoint uses eligibility. (ASR likely meant: eligibility.)
2. **“We have to show the culture.”** (p≈0.45) after “show the columns.” (ASR likely meant: columns or calculator.)
3. **“banks and intelligence”** (intelligence p≈0.49). Quote raw; join as still showing intelligence with the bank list.
4. `language`: `mr` ignored.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2249/solution-01-show-extra-eligibility-as-direct-columns",
  "solution_title": "Show extra eligibility questions as columns on the bank list",
  "folder": "wb-rec-260815-2249",
  "sequence_index": 19,
  "recording_id": "55f40b18-3bf3-46a3-b169-7adabe6886b1",
  "recording_started_at": "2026-08-15T17:19:17.338Z",
  "recording_ended_at": "2026-08-15T17:21:34.102Z",
  "duration_ms": 136764,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs details#hlc-form-more (“Adjust eligibility”) extras, Bank options table columns (Lenders, Rate, Loan amount, Tenure, EMI), See options #hlc-see-options",
  "for_topic": "Where extra eligibility questions live on Explore banks — columns on the bank list versus collapsed Adjust eligibility",
  "pinpoint": "On Explore banks they said to show the extra eligibility questions as columns here, directly, instead of “adjusting the availability” (on-screen: Adjust eligibility); the bank table only has four then five columns (Lenders, Rate, Loan amount, Tenure, EMI), and they still need to show banks and intelligence without the form becoming huge.",
  "kind": ["proposed_change", "idea", "user_convenience", "company_thinking"],
  "decidedness": "leaning",
  "basis": "The extras should be visible where the bank list is, not behind a disclosure; customers decide loan amount and EMI, not a bank name first; opening Adjust eligibility already made the card too big.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-adjust-eligibility-hidden-not-shown-as-columns.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2240",
  "continued_into_folder": "wb-rec-260815-2302",
  "related_solution_files": ["solution-02-mandate-income-share-not-every-extra.md"],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:01,210 --> 00:00:37,950"],
  "event_t_ms": [184,1994,1995,1996,5031,6728,15088,16698,35476,35477,38432,42631],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg"],
  "tags": ["layout","eligibility","table-columns","convenience","intelligence","explore-banks"],
  "quotes": [
    {"clock": "00:00:01,210", "text": "What we need to do is, instead of adjusting the availability, we need to show the columns here.", "artifact": "audio.srt"},
    {"clock": "00:00:13,930", "text": "Directly. There are only 4 columns here.", "artifact": "audio.srt"},
    {"clock": "00:00:18,870", "text": "5 columns.", "artifact": "audio.srt"},
    {"clock": "00:00:19,930", "text": "It will be a big challenge.", "artifact": "audio.srt"},
    {"clock": "00:00:25,990", "text": "We have to show the banks.", "artifact": "audio.srt"},
    {"clock": "00:00:29,330", "text": "We have to show the banks and intelligence.", "artifact": "audio.srt"},
    {"clock": "00:00:33,710", "text": "And this is mostly the case that the customer does not ask for the bank.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 1995, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 6728, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 15088, "name": "Adjust eligibility summary (nth-of-type 2)", "css": "details#hlc-form-more > summary > span > span:nth-of-type(2)"},
    {"t_ms": 35477, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 42631, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"}
  ],
  "related_discussion_present": true
}
```
