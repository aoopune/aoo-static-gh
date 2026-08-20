# Collapse extra eligibility for size, but hidden values must still change bank results

They accept folding Adjust eligibility so the form does not get too big.
Even when collapsed, Existing EMIs, FOIR, and the rest must still change what banks show.
If the site surprises them later, they said they will lose trust in Shroffin.
They treat those extra fields as mandatory in effect even though the form does not mark them that way.

---
solution_id: "wb-rec-260815-2302/solution-01-collapsed-extra-fields-must-still-affect-no-surprise"
solution_title: "Collapse extra eligibility for size, but hidden values must still change bank results"
folder: "wb-rec-260815-2302"
sequence_index: 20
recording_id: "1c3a6e22-3a9a-475d-8d5b-350dfe605171"
recording_started_at: "2026-08-15T17:32:34.848Z"
recording_ended_at: "2026-08-15T17:34:36.510Z"
duration_ms: 121662
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form details#hlc-form-more (Adjust eligibility), #hlc-existing-emis Existing EMIs, #hlc-foir Share of income for EMIs / FOIR"
for_topic: "Extra eligibility fields on Explore banks must keep changing bank options when collapsed, without a later surprise that breaks trust"
pinpoint: "On Explore banks they collapse Adjust eligibility so the form stays short, but insist Existing EMIs and FOIR inside that block must still affect bank options; a later surprise makes them lose trust in the website."
kind: ["proposed_change", "user_convenience", "company_thinking", "idea"]
decidedness: "decided"
basis: "Form size vs accuracy trade-off; trust if results change later; extra fields are mandatory in effect for honest eligibility"
analog_source: "credit-card issuers (Scapia/HDFC rejection story)"
linked_issue_files: ["issue-01-collapsed-eligibility-fields-must-still-affect.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2249"
continued_into_folder: "wb-rec-260815-2304"
related_solution_files: ["solution-02-dont-give-coapplicant-ideas-to-inflate-loan.md"]
source_files_used: ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","console.json","events.json","pages.json","tabs.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"]
speech_clock: ["00:00:00,000-00:00:07,820","00:00:42,160-00:01:07,580","00:01:11,750-00:01:20,690"]
event_t_ms: [199, 4186, 5699, 42881, 42882, 43073, 72017, 74010]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg"]
tags: ["layout","eligibility","trust","no-surprise","form","emi","foir","mandatory-in-effect"]
---

## Exact solution (or idea that can also be a solution)

On Explore banks they accept collapsing **Adjust eligibility** (`details#hlc-form-more`) so the loan form does not get too big — but they immediately add: **these things still have to be affected**. That means Existing EMIs (`#hlc-existing-emis`, ₹555 on screen), FOIR (`#hlc-foir`, 55% default), and the other extra fields must keep changing the bank list and amounts even when the block is shut.

They click Existing EMIs while saying existing EMI is “a big thing” and name FOIR (“Fixed obligation to something” → on-screen Share of income for EMIs / FOIR). They agree eligibility is not fixed from salary and score alone.

Their trust rule: **“That means if I get a surprise later, I will lose my trust from the website.”** One speaker echoes “But you will lose your trust”; the other says they still have to think. This is company thinking applied to Explore banks: no late surprise on loan amount or EMI.

After closing and reopening the block they say **“This is all mandatory”** and **“But I have to do everything”** / **“Already”** — treating optional-looking extra columns as mandatory in effect for an honest result, even without asterisks on every field.

## What this is for

Explore banks → Loan inputs → **Adjust eligibility** disclosure and the extra fields inside it (especially Existing EMIs and FOIR). The linked defect is `issue-01-collapsed-eligibility-fields-must-still-affect.md` (collapse hides fields); this file is the direction: collapse for size is OK only if values still drive results and never surprise later.

## Why they said it that way

- **Form size:** “drop down so that the form doesn't get too big” while clicking the disclosure closed (`screenshots/0001.jpg`).
- **Accuracy:** “these things have to be affected” — hidden must not mean ignored.
- **Trust:** surprise later = lose trust; they treat that as launch-critical, not cosmetic.
- **Mandatory in effect:** optional labels vs “I have to do everything” — users should fill or the site should assume defaults that still count.
- **Credit-card story (supporting analogy):** decent salary and strong score still rejected; Scapia/HDFC card denied; issuers “looking at my education”; existing EMI and utilization/FOIR explain why headline inputs lie — same logic they want on this form.

## How the files join (required)

- **time 0–7820 ms** (00:00:00–00:00:07)
- **said:** “So we have to drop down so that the form doesn't get too big.” / “Correct. But actually these things have to be affected.” (`audio.srt` cues 1–2)
- **doing:** click `details#hlc-form-more > summary` t=4186 (close); click again t=5699 (open)
- **seeing:** `screenshots/0000.jpg` extra block open (Existing EMIs ₹555, FOIR 55%); `0001.jpg` collapsed; `0002.jpg` open again
- **page/object:** Explore banks – Shroffin; Adjust eligibility disclosure
- **therefore:** collapse for size is accepted; collapsed extra values must still affect bank options

- **time 42160–67580 ms** (00:00:42–00:01:07)
- **said:** “Because this existing EMI is a big thing.” / FOIR naming / “if I get a surprise later, I will lose my trust from the website”
- **doing:** focus+click `#hlc-existing-emis` t=42881–43073; idle while talking
- **seeing:** `screenshots/0007.jpg`–`0010.jpg` Existing EMIs focused; expanded Adjust eligibility
- **page/object:** Existing EMIs; Share of income for EMIs / FOIR on form
- **therefore:** EMI and FOIR are the concrete inputs they fear will not apply until too late

- **time 71750–80690 ms** (00:01:11–00:01:20)
- **said:** “Bro, nothing.” / “This is all mandatory.” / “But I have to do everything.” / “Already.”
- **doing:** click chevron t=72017 (close); click summary t=74010 (open)
- **seeing:** `screenshots/0011.jpg` collapsed; `0012.jpg` open
- **therefore:** they rehearse collapse vs still-must-count; extra fields mandatory in effect

## Pinpoint

On Explore banks at 00:00–01:20, they collapsed and reopened Adjust eligibility so the form would not get too big, focused Existing EMIs (₹555), named FOIR, and said those extra things still have to be affected — otherwise a later surprise makes them lose trust. `screenshots/0001.jpg` shows the extra block shut while bank results remain visible; `screenshots/0007.jpg` shows Existing EMIs active during the EMI/FOIR/trust talk.

## Related discussion (not the solution itself)

Credit-card rejection analogy (idle 00:00:08–00:00:41, shots 0003–0006): applied with decent salary and best score, still rejected, “don't even get the Scapia, HDFC card,” issuers “looking at my education,” card-to-card but not “such a card.” Debt/utilization / “Fixed obligation to something” maps to FOIR on this form. “That's why your EMI is not fixed” (raw ASR; json word “fixed” low probability). Trust echo disagreement: both agree surprise kills trust; one still has to think about implementation. Previous recording (`wb-rec-260815-2249`) already said extra columns are optional to fill but change loan amount/EMI; asked “why is there no mandating?” Next recording (`wb-rec-260815-2304`) opens “No, because I don't want to get a surprise later” and proposes pre-filled extra columns plus importance marks — continuation of this trust thread.

## Chronology in this recording

- 00:00:00 / t≈199: Explore banks; shot 0000 extra eligibility open.
- 00:00:00–00:00:03: drop down so form doesn't get too big.
- t=4186 collapse; shot 0001.
- 00:00:04–00:00:07: these things have to be affected.
- t=5699 reopen; shot 0002.
- 00:00:08–00:00:41 idle credit-card story; shots 0003–0006.
- 00:00:42–00:00:44 existing EMI is a big thing; t=42881–43073 Existing EMIs; shot 0007.
- 00:00:45–00:01:07 FOIR/trust; shots 0008–0010.
- 00:01:11–00:01:20 mandatory / do everything; t=72017/74010 close/open; shots 0011–0012.
- 00:01:22+ co-applicant coaching talk → separate solution file.

## Cross-recording continuation

**From `wb-rec-260815-2249`** (~11 min gap; same URL). Ended on optional extra columns, existing EMI “not for everyone,” share of income, co-applicant “not for everyone,” form getting bigger, “why is there no mandating?” Last shots show Adjust eligibility expanded with Existing EMIs ₹555.

**Into `wb-rec-260815-2304`** (~19 s later). First line: “No, because I don't want to get a surprise later.” Then pre-filled extra columns and importance indication (stars/meter/score) so people fill without surprise — direct continuation of this trust and extra-field direction.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `manifest.json` — id, start_url Explore banks, 121662 ms, 34 events, 19 screenshots; timeline_alignment
- `audio.text` — drop-down, affected, existing EMI, FOIR, surprise/trust, mandatory; supports_solution
- `audio.txt` — timed dump 00:00–01:20; supports_solution
- `audio_sentences.txt` — one-block same sentences; supports_solution
- `audio.srt` — primary clock cues 1–31; supports_solution
- `audio.vtt` — same family as srt; timeline_alignment
- `audio.tsv` — ms 0–80690 for this stretch; timeline_alignment
- `audio.lrc` — lyric-style same lines; timeline_alignment
- `audio.json` — 43 segments, language `mr` (wrong); word probs; fully_read_chunked; supports_solution
- `audio.webm` — binary mic; binary_audio_untranscribed_use_text_artifacts; checked_no_extra_signal
- `console.json` — `[]`; checked_no_extra_signal
- `events.json` — more-summary clicks 4186/5699/72017/74010; Existing EMIs 42881–43073; supports_solution
- `pages.json` — Existing EMIs, FOIR, Co-applicant fields on Loan inputs; supports_solution
- `tabs.json` — single tab Explore banks; timeline_alignment
- `replay.spec.ts` — Playwright clicks on more-summary and #hlc-existing-emis; supports_solution
- `index.html` — player shell; inlined session id/URL/events; player_shell_with_inlined_json_fully_read; checked_no_extra_signal
- `viewer.js` — 32334 bytes generic replay player; player_chrome_fully_read_confirmed; checked_no_extra_signal
- `viewer.css` — 17895 bytes generic player chrome; player_chrome_fully_read_confirmed; checked_no_extra_signal
- `screenshots/index.json` — 19 shots indexed; timeline_alignment
- `screenshots/0000.jpg` — extra block open at start; supports_solution
- `screenshots/0001.jpg` — collapsed after first click; supports_solution
- `screenshots/0002.jpg` — open again; supports_solution
- `screenshots/0003.jpg`–`0006.jpg` — expanded during card-rejection idle talk; related_discussion
- `screenshots/0007.jpg` — Existing EMIs focused ₹555; supports_solution
- `screenshots/0008.jpg`–`0010.jpg` — same during FOIR/trust talk; supports_solution
- `screenshots/0011.jpg` — collapsed at mandatory talk; supports_solution
- `screenshots/0012.jpg` — open again; supports_solution
- `screenshots/0013.jpg`–`0018.jpg` — later co-applicant demo; timeline_alignment for this solution

### Helper issue files

- `issue-01-collapsed-eligibility-fields-must-still-affect.md` — cross_link timestamp map for collapse/trust stretch
- `issue-02-coapplicant-yes-gives-ideas-to-inflate-loan.md` — timestamp_map only; separate solution

## ASR notes

Transcripts agree on drop-down / affected / existing EMI / surprise-trust / mandatory. Prefer join: “drop down” + clicks on `details#hlc-form-more`; “Fixed obligation to something” + FOIR on screen; “Scapia, HDFC” = card issuer names in analogy. audio.json “fixed” ~0.0009 — keep raw “EMI is not fixed.” Do not treat “education” as a missing form field.

## JSON

```json
{
  "solution_id": "wb-rec-260815-2302/solution-01-collapsed-extra-fields-must-still-affect-no-surprise",
  "solution_title": "Collapse extra eligibility for size, but hidden values must still change bank results",
  "folder": "wb-rec-260815-2302",
  "sequence_index": 20,
  "recording_id": "1c3a6e22-3a9a-475d-8d5b-350dfe605171",
  "recording_started_at": "2026-08-15T17:32:34.848Z",
  "recording_ended_at": "2026-08-15T17:34:36.510Z",
  "duration_ms": 121662,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form details#hlc-form-more (Adjust eligibility), #hlc-existing-emis Existing EMIs, #hlc-foir Share of income for EMIs / FOIR",
  "for_topic": "Extra eligibility fields on Explore banks must keep changing bank options when collapsed, without a later surprise that breaks trust",
  "pinpoint": "On Explore banks they collapse Adjust eligibility so the form stays short, but insist Existing EMIs and FOIR inside that block must still affect bank options; a later surprise makes them lose trust in the website.",
  "kind": ["proposed_change", "user_convenience", "company_thinking", "idea"],
  "decidedness": "decided",
  "basis": "Form size vs accuracy trade-off; trust if results change later; extra fields are mandatory in effect for honest eligibility",
  "analog_source": "credit-card issuers (Scapia/HDFC rejection story)",
  "linked_issue_files": ["issue-01-collapsed-eligibility-fields-must-still-affect.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2249",
  "continued_into_folder": "wb-rec-260815-2304",
  "related_solution_files": ["solution-02-dont-give-coapplicant-ideas-to-inflate-loan.md"],
  "source_files_used": ["manifest.json","audio.text","audio.txt","audio_sentences.txt","audio.srt","audio.vtt","audio.tsv","audio.lrc","audio.json","audio.webm","console.json","events.json","pages.json","tabs.json","replay.spec.ts","index.html","viewer.js","viewer.css","screenshots/index.json","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"],
  "speech_clock": ["00:00:00,000-00:00:07,820","00:00:42,160-00:01:07,580","00:01:11,750-00:01:20,690"],
  "event_t_ms": [199, 4186, 5699, 42881, 42882, 43073, 72017, 74010],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg"],
  "tags": ["layout","eligibility","trust","no-surprise","form","emi","foir","mandatory-in-effect"],
  "quotes": [
    {"clock": "00:00:00,000", "text": "So we have to drop down so that the form doesn't get too big.", "artifact": "audio.srt"},
    {"clock": "00:00:04,640", "text": "Correct. But actually these things have to be affected.", "artifact": "audio.srt"},
    {"clock": "00:00:42,160", "text": "Because this existing EMI is a big thing.", "artifact": "audio.srt"},
    {"clock": "00:00:59,020", "text": "That means if I get a surprise later, I will lose my trust from the website.", "artifact": "audio.srt"},
    {"clock": "00:01:13,090", "text": "This is all mandatory.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 4186, "name": "hlc-form-more summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 5699, "name": "hlc-form-more summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 42882, "name": "Existing EMIs", "css": "#hlc-existing-emis"},
    {"t_ms": 72017, "name": "hlc-form-more chevron", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > svg"},
    {"t_ms": 74010, "name": "hlc-form-more summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
