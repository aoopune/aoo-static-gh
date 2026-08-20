# Monthly income helper should explain why income matters, not start with “Sets”

Rewrite the Monthly income helper so it answers why the site asks for income and what income does in loan processing.
Keep the take-home pay note — they accepted “use take-home, not CTC.”
Drop or replace the “Sets how much loan banks can offer you” wording; they said “Sets” does not work on this main eligibility field.
They were brainstorming the better sentence, not rejecting income as an input.

---
solution_id: "wb-rec-260815-2116/solution-01-monthly-income-helper-explain-why-not-sets"
solution_title: "Monthly income helper should explain why income matters, not start with “Sets”"
folder: "wb-rec-260815-2116"
sequence_index: 9
recording_id: "cff0d45a-1eff-4415-a374-98232f3208a8"
recording_started_at: "2026-08-15T15:46:08.706Z"
recording_ended_at: "2026-08-15T15:55:10.521Z"
duration_ms: 541815
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Helper under Monthly income: “Sets how much loan banks can offer you. Use take-home, not CTC.” plus About Monthly income (i)"
for_topic: "Monthly income helper copy on Explore banks — why income is asked and how it affects loan eligibility"
pinpoint: "On Explore banks, rewrite the Monthly income helper so it tells the user why monthly income is asked and what it does in loan processing, keep take-home-not-CTC, and stop opening with “Sets…” because they said that wording does not work on the main eligibility field."
kind: ["proposed_change", "user_convenience"]
decidedness: "brainstorm"
basis: "User should not have to ask “why do you want my monthly income?” on the main eligibility input; take-home vs CTC is fine but the “Sets…” sentence fails."
analog_source: "none"
linked_issue_files: ["issue-01-monthly-income-helper-sets-does-not-explain-why.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-02-rewrite-sets-ceiling-helper-copy-india.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/0084.jpg", "screenshots/0085.jpg", "screenshots/0086.jpg", "screenshots/0087.jpg", "screenshots/0088.jpg", "screenshots/0089.jpg", "screenshots/0090.jpg", "screenshots/0091.jpg", "screenshots/0092.jpg", "screenshots/0093.jpg", "screenshots/0094.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:01:06,120 --> 00:02:18,990"]
event_t_ms: [51102, 51103, 51645, 51913, 69688, 71016, 71554, 100341, 101294, 101907, 102547]
screenshot_files: ["screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0011.jpg", "screenshots/0014.jpg"]
tags: ["copy", "trust", "eligibility", "helper", "convenience"]
---

## Exact solution (or idea that can also be a solution)

They opened About Monthly income on Explore banks and read the helper: “Sets how much loan banks can offer you. Use take-home, not CTC.” They said the sentence can be better, this is the main eligibility criteria, and “the problem with this sentence is that the sets don't work.” They asked what the helper never answers: “Why do you want my monthly income?” and “Tell me, what does your monthly income work in loan processing?” They accepted the CTC note: “And yes, you can stay home, not CDC” (ASR for take-home, not CTC on screen). The constructive direction is not to remove income — it is to rewrite the helper so a user understands **why** income is asked and **how** it works in processing, without opening on “Sets…”.

## What this is for

The Monthly income helper on Explore banks (`form#hlc-inputs`, first field). Issue file `issue-01-monthly-income-helper-sets-does-not-explain-why.md` names the defect; this file is the direction they wanted instead.

## Why they said it that way

This is the main eligibility input. A user should not land on the most important field and still wonder why the site wants their salary. They were fine keeping take-home-not-CTC because that prevents a common wrong number; the failure is the unexplained “Sets…” opener.

## How the files join (required)

- **66120–138990 ms (00:01:06–00:02:18)** — said: “This sentence can be better. This is your main eligibility criteria.” / “The problem with this sentence is that the sets don't work.” / “Why do you want my monthly income?” / “And yes, you can stay home, not CDC.” (`audio.srt`, `audio.tsv`)
- **51102–102547 ms** — did: repeated clicks on About Monthly income / first-field (i) (`events.json`, `replay.spec.ts`)
- **seeing:** `screenshots/0009.jpg` — tooltip “Sets how much loan banks can offer you. Use take-home, not CTC. Learn more” over Monthly income
- **page/object:** `pages.json` Monthly income* helper; URL explore-banks.html
- **therefore the finding is:** rewrite this helper to explain why income matters in loan processing, keep take-home-not-CTC, drop the “Sets…” opener.

## Pinpoint

On Explore banks, while staring at the Monthly income (i) tooltip, they proposed better helper copy: explain why monthly income is collected and what it does for loan eligibility, preserve take-home-not-CTC, and replace “Sets how much loan banks can offer you” because “Sets” does not work for Indian users on this primary field.

## Related discussion (not the solution itself)

- They called it the main eligibility criteria — not a secondary detail field.
- “That's what sets how much bank loan works. But…” leads them to the property helper where the same “Sets” pattern repeats (`solution-02`).
- Prev folder wb-rec-260815-2106 ended on overdraft explanation (“You should explain it like this”) — different topic; ~44 s gap before this recording starts on Monthly income.

## Chronology in this recording

- 00:00:51 — first About Monthly income click (t=51102).
- 00:01:06–00:01:39 — read helper; sentence can be better; sets don't work.
- 00:01:44–00:02:09 — why monthly income; what it does in processing; take-home not CTC OK.
- 00:02:18 — “But…” then move to property helper.

## Cross-recording continuation

Standalone in this folder. wb-rec-260815-2106 tail (last ~2 min) was overdraft/savings-bank explanation and filter trade-offs — not this helper. wb-rec-260815-2125 opens on CIBIL score dropdown, not Monthly income.

## Evidence by file (every raw recorder file in the folder — no omissions)

Helper issue files: `issue-01-monthly-income-helper-sets-does-not-explain-why.md` — `timestamp_map` + `cross_link`. `issue-02-*`, `issue-03-*` — `timestamp_map` for hand-off to property topics.

Raw recorder files: see `_solution-coverage-ledger.json` `file_usage` — every file in `files_in_folder` was opened; speech/screenshot/event joins above use the subset that supports this finding; remaining files checked for no extra Monthly-income solution signal per ledger `checked_no_extra_signal` entries.

## ASR notes

- “You stay home, not CDC” / “stay home, not CDC” — on-screen and `pages.json`: “Use take-home, not CTC.” Quoted raw ASR; meaning from screenshot.
- “the sets don't work” matches visible helper starting with “Sets”.
- `audio.json` word “CDC” p≈0.0; screenshot wins.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2116/solution-01-monthly-income-helper-explain-why-not-sets",
  "solution_title": "Monthly income helper should explain why income matters, not start with “Sets”",
  "folder": "wb-rec-260815-2116",
  "sequence_index": 9,
  "recording_id": "cff0d45a-1eff-4415-a374-98232f3208a8",
  "recording_started_at": "2026-08-15T15:46:08.706Z",
  "recording_ended_at": "2026-08-15T15:55:10.521Z",
  "duration_ms": 541815,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Helper under Monthly income",
  "for_topic": "Monthly income helper copy on Explore banks",
  "pinpoint": "Rewrite Monthly income helper to explain why income is asked and how it works in loan processing; keep take-home-not-CTC; drop Sets opener.",
  "kind": ["proposed_change", "user_convenience"],
  "decidedness": "brainstorm",
  "basis": "Main eligibility field should not leave user asking why income is wanted.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-monthly-income-helper-sets-does-not-explain-why.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-02-rewrite-sets-ceiling-helper-copy-india.md"],
  "source_files_used": ["audio.srt", "audio.tsv", "events.json", "pages.json", "screenshots/0009.jpg"],
  "speech_clock": ["00:01:06,120 --> 00:02:18,990"],
  "event_t_ms": [51102, 69688, 102547],
  "screenshot_files": ["screenshots/0009.jpg"],
  "tags": ["copy", "trust", "eligibility"],
  "quotes": [
    {"clock": "00:01:17,960", "text": "This sentence can be better. This is your main eligibility criteria.", "artifact": "audio.srt"},
    {"clock": "00:01:33,380", "text": "The problem with this sentence is that the sets don't work.", "artifact": "audio.srt"},
    {"clock": "00:01:50,880", "text": "Why do you want my monthly income?", "artifact": "audio.srt"},
    {"clock": "00:02:05,250", "text": "And yes, you can stay home, not CDC.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 51103, "name": "About Monthly income", "css": "form#hlc-inputs first-field (i)"}],
  "related_discussion_present": true
}
```
