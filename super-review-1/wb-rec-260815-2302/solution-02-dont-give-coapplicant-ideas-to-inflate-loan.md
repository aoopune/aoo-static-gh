# Do not coach applicants that adding a co-applicant increases the loan

They do not want the site to give applicants ideas that inflate the loan.
Turning Co-applicant to Yes reveals extra income and EMI boxes — that teaches “add someone, get more.”
They tried Yes, counted the new fields, asked who would actually pay, then switched back to No.
This is a Shroffin rule: help honestly, do not coach gaming the bank.

---
solution_id: "wb-rec-260815-2302/solution-02-dont-give-coapplicant-ideas-to-inflate-loan"
solution_title: "Do not coach applicants that adding a co-applicant increases the loan"
folder: "wb-rec-260815-2302"
sequence_index: 20
recording_id: "1c3a6e22-3a9a-475d-8d5b-350dfe605171"
recording_started_at: "2026-08-15T17:32:34.848Z"
recording_ended_at: "2026-08-15T17:34:36.510Z"
duration_ms: 121662
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs → Adjust eligibility → Co-applicant No/Yes (div#hlc-coapplicant-row) and extra Co-applicant income / EMIs / card limits fields"
for_topic: "Co-applicant Yes on Explore banks must not teach public applicants they can add someone just to get a bigger loan"
pinpoint: "On Explore banks, setting Co-applicant to Yes reveals extra income/EMI/card boxes and they said they do not want to give applicants the idea that adding a co-applicant increases the loan; they tried Yes, then switched back to No."
kind: ["company_thinking", "proposed_change", "user_convenience", "idea"]
decidedness: "decided"
basis: "Public applicants should not be coached to inflate loan amount; who actually pays matters more than showing a bigger number"
analog_source: "none"
linked_issue_files: ["issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2249"
continued_into_folder: "wb-rec-260815-2304"
related_solution_files: ["solution-01-collapsed-extra-fields-must-still-affect-no-surprise.md"]
source_files_used: ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","console.json","events.json","pages.json","tabs.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"]
speech_clock: ["00:01:22,370-00:01:55,280"]
event_t_ms: [87684, 88588, 90822, 103644, 104546]
screenshot_files: ["screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"]
tags: ["co-applicant","trust","coaching","loan-amount","company","form"]
---

## Exact solution (or idea that can also be a solution)

Under **Adjust eligibility** on Explore banks, **Co-applicant** is a No/Yes control (`div#hlc-coapplicant-row`). They say they **do not want to give ideas to any applicant** because **it increases the loan amount**. They click **Yes**; extra boxes appear (Co-applicant income, Co-applicant EMIs, Co-applicant card limits — all ₹0 on screen). They scroll to see them, say **“Brother, please give me the fixers”** and count **“1, 2, 2, 1, 1, 1”** while those fields are visible. They ask **“who is going to pay the rent”** (raw ASR; likely who pays the EMI/loan while looking at co-applicant income/EMIs). Then they click **No** and the extra boxes disappear.

The constructive direction: **do not design Co-applicant Yes so it coaches a public applicant to add a person just to inflate the loan.** Shroffin should help honestly, not teach gaming. They rejected the Yes state after seeing what it reveals.

## What this is for

Explore banks → Loan inputs → **Co-applicant** under Adjust eligibility, and the extra co-applicant income/EMI/card fields that appear on Yes. Linked defect: `issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md`. This file is the principle and proposed behavior change, not the defect restatement.

## Why they said it that way

- **Company thinking:** “I don't want to give ideas to any other applicant” — Shroffin must not teach tricks.
- **Stakes:** “Because it increases the loan amount” — the Yes path visibly ties adding a person to a bigger number.
- **Who pays:** while extra co-applicant boxes are on screen, they ask who will pay (raw ASR “rent”) — real obligation matters, not just inflating eligibility on paper.
- **They tried and rejected:** Yes → see fields → No again (“That's why I didn't come” / “That's it”) — the current UX failed their bar.

## How the files join (required)

- **time 82370–92670 ms** (00:01:22–00:01:32)
- **said:** “Yesterday, I didn't want to give ideas to any applicant.” / “I don't want to give ideas to any other applicant.” / “Because it increases the loan amount.”
- **doing:** still on Co-applicant No (`screenshots/0013.jpg`); then click Yes t=87684; hidden `#hlc-coapplicant` = `"yes"` t=88588
- **seeing:** `screenshots/0014.jpg`–`0015.jpg` Co-applicant Yes; three extra fields visible
- **page/object:** Explore banks; Co-applicant Yes + revealed fields
- **therefore:** Yes reveals coaching surface that increases loan in their words

- **time 97880–115280 ms** (00:01:37–00:01:55)
- **said:** “Brother, please give me the fixers.” / “1, 2, 2, 1, 1, 1.” / “who is going to pay the rent.” / “That's why I didn't come.”
- **doing:** scroll y=333.5 t=90822; click No t=103644; value `"no"` t=104546
- **seeing:** `screenshots/0016.jpg`–`0018.jpg` Co-applicant No; extra boxes gone
- **therefore:** they demo Yes, reject it, and revert to No

## Pinpoint

On Explore banks at 00:01:22–00:01:55, Co-applicant **Yes** under Adjust eligibility reveals extra income/EMI/card boxes. They said they do not want to give applicants the idea that adding a co-applicant increases the loan, tried Yes (`screenshots/0014.jpg`), counted the new fields, asked who pays, then switched back to No (`screenshots/0016.jpg`).

## Related discussion (not the solution itself)

“Brother, please give me the fixers” and “1, 2, 2, 1, 1, 1” likely count the extra co-applicant fields (ASR “fixers” low confidence ~0.25). “Who is going to pay the rent” (first “rent.” ~0.32) while co-applicant income/EMIs visible — likely EMI/payer concern, not a rent product. Earlier extra-fields/trust talk is `solution-01`, not this file. Previous recording (`wb-rec-260815-2249`) asked “How does this co-applicant make a difference?” with Co-applicant on No. Next recording (`wb-rec-260815-2304`) later says if an applicant says yes, take their details and do not overthink — different slice; this folder is the Yes-then-No rejection.

## Chronology in this recording

- 00:01:22–00:01:25 / 0013: Co-applicant No. “Yesterday, I didn't want to give ideas to any applicant.”
- 00:01:27–00:01:32: “I don't want to give ideas…” / “Because it increases the loan amount.”
- t=87684 click Yes / 0014: extra fields appear.
- t=90822 scroll / 0015: Yes state, extra fields visible.
- 00:01:37–00:01:49: fixers count; who pays rent.
- t=103644 click No / 0016–0018: No restored. “That's it.”

## Cross-recording continuation

**From `wb-rec-260815-2249`:** ended asking whether co-applicant is for everyone and how it makes a difference; Co-applicant stayed No. This session answers by trying Yes and rejecting the coaching.

**Into `wb-rec-260815-2304`:** ~19 s later; first focus on Co-applicant No. Later they discuss taking co-applicant details when user says yes without overthinking — continuation of co-applicant product thinking, not this folder’s rejection demo.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `manifest.json` — session id/url/window; timeline_alignment
- `audio.text` — give ideas / increases loan / who pays; supports_solution
- `audio.txt` — timed dump 00:01:22–01:55; supports_solution
- `audio_sentences.txt` — includes co-applicant stretch; supports_solution
- `audio.srt` — cues 32–43; supports_solution
- `audio.vtt` — WebVTT clone; timeline_alignment
- `audio.tsv` — ms 82370–115280; timeline_alignment
- `audio.lrc` — timed lines; timeline_alignment
- `audio.json` — segments 32–43; word probs for Yesterday/fixers/rent; fully_read_chunked; supports_solution
- `audio.webm` — binary; binary_audio_untranscribed_use_text_artifacts; checked_no_extra_signal
- `console.json` — `[]`; checked_no_extra_signal
- `events.json` — Yes 87684/88588; scroll 90822; No 103644/104546; supports_solution
- `pages.json` — Co-applicant income/EMIs on form; supports_solution
- `tabs.json` — single tab; timeline_alignment
- `replay.spec.ts` — Yes then No on co-applicant; timeline_alignment
- `index.html` — player shell inlined events; player_shell_with_inlined_json_fully_read; checked_no_extra_signal
- `viewer.js` — generic player 32334 bytes; player_chrome_fully_read_confirmed; checked_no_extra_signal
- `viewer.css` — generic player 17895 bytes; player_chrome_fully_read_confirmed; checked_no_extra_signal
- `screenshots/index.json` — 0014 t=88086; 0016 t=104048; timeline_alignment
- `screenshots/0000.jpg`–`0012.jpg` — Co-applicant No during earlier talk; timeline_alignment
- `screenshots/0013.jpg` — No before Yes; supports_solution
- `screenshots/0014.jpg` — Yes + extra fields; supports_solution
- `screenshots/0015.jpg` — Yes after scroll; supports_solution
- `screenshots/0016.jpg` — No after click; supports_solution
- `screenshots/0017.jpg`–`0018.jpg` — No at end; supports_solution

### Helper issue files

- `issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md` — cross_link defect map for same stretch
- `issue-01-collapsed-eligibility-fields-must-still-affect.md` — timestamp_map only; separate solution

## ASR notes

| Clock | `audio.srt` | Used |
|---|---|---|
| 01:22–01:25 | Yesterday, I didn't want to give ideas to any applicant. | json “Yesterday,” ~0.022; meaning joins Yes click |
| 01:30–01:32 | Because it increases the loan amount. | matches extra fields on Yes |
| 01:37–01:39 | Brother, please give me the fixers. | raw ASR; “fixers.” ~0.25 |
| 01:46–01:49 | who is going to pay the rent | raw ASR; co-applicant boxes on screen |
| 01:52–01:53 | That's why I didn't come. | then click No |

Prefer click + screenshot over mismatched words. Quote raw ASR.

## JSON

```json
{
  "solution_id": "wb-rec-260815-2302/solution-02-dont-give-coapplicant-ideas-to-inflate-loan",
  "solution_title": "Do not coach applicants that adding a co-applicant increases the loan",
  "folder": "wb-rec-260815-2302",
  "sequence_index": 20,
  "recording_id": "1c3a6e22-3a9a-475d-8d5b-350dfe605171",
  "recording_started_at": "2026-08-15T17:32:34.848Z",
  "recording_ended_at": "2026-08-15T17:34:36.510Z",
  "duration_ms": 121662,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs → Adjust eligibility → Co-applicant No/Yes (div#hlc-coapplicant-row) and extra Co-applicant income / EMIs / card limits fields",
  "for_topic": "Co-applicant Yes on Explore banks must not teach public applicants they can add someone just to get a bigger loan",
  "pinpoint": "On Explore banks, setting Co-applicant to Yes reveals extra income/EMI/card boxes and they said they do not want to give applicants the idea that adding a co-applicant increases the loan; they tried Yes, then switched back to No.",
  "kind": ["company_thinking", "proposed_change", "user_convenience", "idea"],
  "decidedness": "decided",
  "basis": "Public applicants should not be coached to inflate loan amount; who actually pays matters more than showing a bigger number",
  "analog_source": "none",
  "linked_issue_files": ["issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2249",
  "continued_into_folder": "wb-rec-260815-2304",
  "related_solution_files": ["solution-01-collapsed-extra-fields-must-still-affect-no-surprise.md"],
  "source_files_used": ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","console.json","events.json","pages.json","tabs.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"],
  "speech_clock": ["00:01:22,370-00:01:55,280"],
  "event_t_ms": [87684, 88588, 90822, 103644, 104546],
  "screenshot_files": ["screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"],
  "tags": ["co-applicant","trust","coaching","loan-amount","company","form"],
  "quotes": [
    {"clock": "00:01:22,370", "text": "Yesterday, I didn't want to give ideas to any applicant.", "artifact": "audio.srt"},
    {"clock": "00:01:27,270", "text": "I don't want to give ideas to any other applicant.", "artifact": "audio.srt"},
    {"clock": "00:01:30,950", "text": "Because it increases the loan amount.", "artifact": "audio.srt"},
    {"clock": "00:01:46,800", "text": "Brother, I want to know who is going to pay the rent.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 87684, "name": "Yes", "css": "div#hlc-coapplicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(2)"},
    {"t_ms": 103644, "name": "No", "css": "div#hlc-coapplicant-row > div:nth-of-type(1) > div > div > button:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
