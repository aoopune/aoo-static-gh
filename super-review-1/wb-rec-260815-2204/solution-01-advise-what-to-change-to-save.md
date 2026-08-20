# Advise what to change, and how much that saves

They do not want Explore banks to tell them the “best” numbers for a loan that already fits them.
They want the tool to say what a person could change — wait, raise the score, switch salaried vs self-employed, put a younger wife’s name on the loan — and how many rupees that would save.
That is the idea they discussed; it can also be the product job for this form.
They were still on that thought when the recording ended; the next clip continues it.

---
solution_id: "wb-rec-260815-2204/solution-01-advise-what-to-change-to-save"
solution_title: "Advise what to change, and how much that saves"
folder: "wb-rec-260815-2204"
sequence_index: 13
recording_id: "96bab1e5-65d0-462e-b148-21cf61aeb7cf"
recording_started_at: "2026-08-15T16:34:11.754Z"
recording_ended_at: "2026-08-15T16:36:10.834Z"
duration_ms: 119080
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form (Monthly income #hlc-monthly-income, Property agreement value #hlc-property-value, CIBIL score #hlc-cibil, Age #hlc-age, Occupation Salaried/Self-employed, co-applicant under Adjust eligibility)"
for_topic: "Explore banks Loan inputs — advice that names a change and rupees saved, instead of a loan that only matches today’s numbers"
pinpoint: "On Explore banks, while clicking Monthly income, Property agreement value, CIBIL score, and Age, they said they do not want the tool to tell them what the best parameters should be; they want it to tell them what to change (wait months, raise credit score, switch salaried vs self-employed, take a younger wife’s name) and how much money that saves — an idea that can also be the solution for this form."
kind: ["idea", "proposed_change", "user_convenience", "product_principle"]
decidedness: "leaning"
basis: "A person hunting for the best home-loan deal will game those fields anyway; they want rupees saved from a named change, not a loan that is only ‘perfect for me’."
analog_source: "none"
linked_issue_files: ["issue-01-loan-inputs-advise-what-to-change.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2206"
related_solution_files: []
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:07,700-00:00:21,620","00:00:26,480-00:00:31,680","00:00:32,400-00:00:39,940","00:00:42,100-00:00:58,420","00:00:59,590-00:01:24,100","00:01:26,160-00:01:52,120"]
event_t_ms: [20100,21995,22160,22325,22459,22610,22863,29283,31449,31451,34763,34940,35055,40042,40206,40388,53217,87301]
screenshot_files: ["screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0007.jpg","screenshots/0010.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg"]
tags: ["intelligence","hacks","loan-inputs","convenience","cibil","occupation","co-applicant","age"]
---

## Exact solution (or idea that can also be a solution)

On Explore banks, the Loan inputs card currently takes today’s figures so Bank options can list matching lenders. They restated what they want instead.

They said they do not want the tool to tell them “what the best parameters should be.” They want it to tell them **what to change** and **how much that would save**. That is the idea they discussed. It can also be the product solution for this form.

Their own examples, said while pointing at those fields:

- If the tool says they will get a stated loan after waiting, they will wait six months.
- They will take a small loan so things become “perfect,” and find a “credit agency” to raise the credit score.
- If salaried is better than self-employed, they will change how income is shown (raw ASR: “remove my pay slip”).
- If age 30 is “not good” and the wife is 28, they will take the loan in her name.
- They do not want a loan that is only “perfect for me.” They want the tool to save about four lakh even with a high CIBIL, by naming that wife’s-name change.

Quote (audio.srt): “Actually, I don't want you to tell me what the best parameters should be.”  
Quote (audio.srt): “I want you to save Rs. 400,000 even if you have a high civil score.”  
Quote (audio.srt): “If you have taken your wife's name, then you have saved Rs. 400,000.”

## What this is for

Explore banks (`http://localhost:8765/pages/explore-banks.html`), Loan inputs: Monthly income, Property agreement value, CIBIL score, Age, Occupation (Salaried / Self-employed on screen, Self-employed selected), and co-applicant listed under Adjust eligibility (not opened here).

The matching issue file is `issue-01-loan-inputs-advise-what-to-change.md`: that file is the defect (today’s numbers only). This file is the direction: change-this-to-save-that advice.

## Why they said it that way

They framed themselves as someone already trying to find the best home-loan deals. Filling a form that only fits today’s numbers is the wrong job. A person will wait, raise a score, switch occupation paperwork, or put a younger spouse’s name on the loan anyway. They want Shroffin to supply that advice, with a rupee amount attached, even when CIBIL is already high.

They were leaning, not shipping a button name. They did not disagree with each other on this point in this clip.

## How the files join (required)

- time (ms and clock): **20,100 ms / 00:00:20**
- what they said: “The main purpose of my discussion was that monthly income...” (audio.srt cue 1, 7,700–21,620 ms; audio.json words “monthly” / “income...” 20,920–21,620 ms)
- what they did: left-click `#hlc-monthly-income` (events.json t=20100, screenshot_id 3); then five Backspaces and fill `1,00,000`
- what was on screen: screenshots/0003.jpg then 0004.jpg — Monthly income on the Explore banks loan card (started as ₹12,000, restored to ₹1,00,000)
- what page/object: Explore banks – Shroffin; Loan inputs; Monthly income*
- therefore: they named Monthly income as the start of the restatement on this tool

- time: **32,400–40,388 ms / 00:00:32–00:00:40**
- said: “Then I felt that we had such a discussion on civility or on property.” (audio.srt cue 4; audio.json “civility” probability 0.47)
- did: click `#hlc-property-value` at 40,042 / 40,206 / 40,388
- seeing: screenshots/0007.jpg — Property agreement value (₹6,000 on screen)
- therefore: ASR “civility or on property” is CIBIL-or-property talk aimed at this card; they selected property at this beat

- time: **52,860–58,420 ms / 00:00:52–00:00:58**
- said: “Actually, I don't want you to tell me what the best parameters should be.” (audio.srt cue 7; audio.json “parameters” probability 0.28)
- did: click `#hlc-cibil` at 53,217 (screenshot_id 10)
- seeing: screenshots/0010.jpg — CIBIL score 780 focused; Occupation still Self-employed
- therefore the actual finding is: they reject prescribing the **best parameters**; they are pointing at the parameter fields themselves

- time: **72,660–92,880 ms / 00:01:12–00:01:32**
- said: “If you tell me that salary is more than self-employed, then I will remove my pay slip.” then “You told me that 30 years of age is not good. My wife is 28 years old. I will take her name.”
- did: Occupation visible, not clicked; click `#hlc-age` at 87,301
- seeing: screenshots/0014.jpg — Age 35 focused; Adjust eligibility lists “co-applicant”
- therefore: occupation and age / wife’s name are examples of **parameters they would change** if the tool said it paid

- time: **99,500–112,120 ms / 00:01:39–00:01:52**
- said: “I want you to save Rs. 400,000 even if you have a high civil score.” / “If you have taken your wife's name, then you have saved Rs. 400,000.”
- did: idle on Age after 87,301
- seeing: screenshots/0015.jpg–0016.jpg — same loan card, Age still last focused
- therefore: the wanted output is **rupees saved from a named change**, not a loan “perfect for me”

Idle after each click is when most of the design talk happens. console.json is `[]`. viewer.js / viewer.css are generic player chrome.

## Pinpoint

On Explore banks, the Loan inputs card (Monthly income, Property agreement value, CIBIL score, Age, Occupation, co-applicant under Adjust eligibility) currently collects present figures so Bank options can list matching lenders. They said they do not want that tool to tell them the best parameters. They want it to show what to change and how much that would save (wait six months, take a small loan / raise credit score, salaried vs self-employed, put a 28-year-old wife’s name on the loan and save about four lakh even with a high CIBIL). That idea can also be the solution. They cared because a person hunting for the best deal would game those fields anyway.

## Related discussion (not the solution itself)

- Restatement opener: “I will say everything once again.” They named monthly income as the main purpose, then “the values here should already be met,” then “I was looking at this tool.” Fields were already filled (₹12,000 income, ₹6,000 property, age 35, CIBIL 780). They cleared Monthly income and typed `1,00,000` (the field’s placeholder). Treat as restating that the form should already have values, not as a second product direction in this clip.
- User-gaming examples that flesh out the same advice job: wait six months for a stated loan; take a small loan so things become “perfect”; find a “credit agency” to raise the score; if salaried beats self-employed, change occupation documentation (raw ASR “remove my pay slip”; next recording says get a payslip / join a company).
- They contrasted a loan that is “perfect for me” with saving a large rupee amount even with a “high civil score” by adding the wife’s name. Co-applicant sits under Adjust eligibility on screen; they did not open that row here.
- They did not attack layout, recorder black masks on bank rows, See options, Apply once, or Filters as a separate constructive direction in this recording.

## Chronology in this recording

- **0–7.7 s** — idle on Explore banks; screenshots/0000.jpg–0002.jpg; no speech; card already filled (₹12,000 / ₹6,000 / 35 / 780 / Self-employed / Regular).
- **7.7–21.6 s** — “I will say everything once again. The main purpose of my discussion was that monthly income...” Focus Age at 19,976 ms, then focus+click Monthly income at 20,099–20,100 ms (0003.jpg).
- **21.6–22.9 s** — five Backspaces; input value `""` at 22,863 ms.
- **26.5–31.7 s** — “the values here should already be met” / “I was looking at this tool.” Input `"1,00,000"` at 29,283 ms; click `main` at 31,451 ms (0004.jpg, 0005.jpg).
- **32.4–39.9 s** — “discussion on civility or on property.” Reclicks Monthly income at 34,763–35,055 ms (0006.jpg).
- **40.0–40.4 s** — three clicks Property agreement value (0007.jpg). Idle through 0008.jpg.
- **52.1 s** — click `main`; **53,217 ms** focus+click CIBIL (0009.jpg, 0010.jpg).
- **52.9–58.4 s** — “I don't want you to tell me what the best parameters should be.” Idle on CIBIL (0011.jpg–0013.jpg).
- **59.6–84.1 s** — wait six months / small loan / credit agency / salaried vs self-employed / six months. Still idle on CIBIL.
- **86.2–92.9 s** — age 30 not good; wife 28; take her name. Click Age at 87,301 ms (0014.jpg).
- **94.3–112.1 s** — not a loan “perfect for me”; save Rs. 400,000 even with high civil score; wife’s name saved Rs. 400,000. Idle on Age (0015.jpg–0017.jpg). Speech ends ~112 s; recording continues idle to 119,080 ms.

## Cross-recording continuation

**From previous (`wb-rec-260815-2201`):** not the same topic. That folder is ~11 s on the same URL. Speech is bar talk (“Mahendra, do you want to go to the bar?” … “I don't want to go to the bar alone.”). Last non-idle event is the landmark snapshot; last shots 0000.jpg / 0001.jpg show the same loan card with no field walk. This folder opens with “I will say everything once again,” which points to an earlier restatement, not to 2201. `continued_from_folder` is null.

**Into next (`wb-rec-260815-2206`):** yes. Gap is ~6 s (this ended `16:36:10.834Z`, next started `16:36:16.832Z`). Next speech opens on property value (“If your property value is 50 lakhs or 40 lakhs, then you have saved 5 lakhs”), then salaried vs self-employed / farmer / payslip, then “I have gathered intelligence with these tools. Instead, I want that if this company gives me that intelligence.” First clicks: Property agreement value (~3 s), later Salaried, CIBIL, Age, Monthly income. Same page, same fields, same change-and-save job. The 8th unique point / “we suggest you hacks” is spoken in 2206, not here. Write this folder’s portion here; 2206 continues it.

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — issue-run theme card summarizing issue-01; used only as a timestamp/topic map. `checked_no_extra_signal`
- `audio.json` — Whisper object, `language: "mr"` (do not trust), 18 segments, full text to 112.12 s; word probabilities for “civility,” “parameters” (0.28), “750” (0.10), “civil” (0.44). `supports_solution` / `supports_idea`
- `audio.lrc` — same 18 timed lines as srt. `timeline_alignment`
- `audio.srt` — primary speech clock; cues 1–18 quoted above. `supports_solution` / `supports_idea`
- `audio.text` — untimed plain transcript matching srt. `supports_solution`
- `audio.tsv` — millisecond start/end 7700–112120. `timeline_alignment`
- `audio.txt` — timed dump matching srt. `timeline_alignment`
- `audio.vtt` — WEBVTT same cues. `timeline_alignment`
- `audio.webm` — binary mic (1,913,783 bytes); not played; speech from text artifacts. `checked_no_extra_signal`
- `audio_sentences.txt` — one paragraph, same sentences as audio.text. `supports_solution`
- `console.json` — `[]`; no console errors. `checked_no_extra_signal`
- `events.json` — 46 events on explore-banks.html; clicks/focus/input on `#hlc-monthly-income`, `#hlc-property-value`, `#hlc-cibil`, `#hlc-age`. `supports_solution`
- `index.html` — Workbooks viewer shell; HTML comments inline manifest id `96bab1e5-65d0-462e-b148-21cf61aeb7cf`, start_url explore-banks, events_count 46, screenshots_count 18; body script tags still sentinels. No extra discussion. `checked_no_extra_signal`
- `manifest.json` — id `96bab1e5-65d0-462e-b148-21cf61aeb7cf`, 16:34:11.754Z–16:36:10.834Z, duration_ms 119080, 46 events, 18 screenshots, viewport 1366×768, mic true. `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; form Loan inputs; fields Monthly income*, Property agreement value*, Age*, CIBIL score*, Occupation Salaried/Self-employed, co-applicant. Names the objects. `supports_solution`
- `replay.spec.ts` — Playwright replay: fill `#hlc-monthly-income` to `1,00,000`, click property, CIBIL, Age. `supports_solution`
- `screenshots/index.json` — 18 shots, t 198–114199, url explore-banks, mask_rects over bank-row area. `timeline_alignment`
- `screenshots/0000.jpg` — t=198 start; loan card before speech (₹12,000 / ₹6,000 / 35 / 780). `timeline_alignment`
- `screenshots/0001.jpg` — t=8199 periodic; opener speech. `timeline_alignment`
- `screenshots/0002.jpg` — t=16200 periodic; as “monthly income” is said. `timeline_alignment`
- `screenshots/0003.jpg` — t=20381 interaction; Monthly income click. `supports_solution`
- `screenshots/0004.jpg` — t=30198 periodic; after typing 1,00,000. `supports_solution`
- `screenshots/0005.jpg` — t=31850 interaction; after main click; Canara Bank row partly visible under Overview. `related_discussion`
- `screenshots/0006.jpg` — t=35164 interaction; Monthly income reclicks. `timeline_alignment`
- `screenshots/0007.jpg` — t=40444 interaction; Property agreement value clicks. `supports_solution`
- `screenshots/0008.jpg` — t=50200 periodic; idle before “best parameters.” `related_discussion`
- `screenshots/0009.jpg` — t=52453 interaction; main click before CIBIL. `timeline_alignment`
- `screenshots/0010.jpg` — t=53621 interaction; CIBIL 780 focused. `supports_solution`
- `screenshots/0011.jpg` — t=62199 periodic; idle on CIBIL during credit/occupation examples. `related_discussion`
- `screenshots/0012.jpg` — t=70200 periodic; same. `related_discussion`
- `screenshots/0013.jpg` — t=80199 periodic; same, just before age speech. `related_discussion`
- `screenshots/0014.jpg` — t=87702 interaction; Age click while saying 30 / wife 28. `supports_solution`
- `screenshots/0015.jpg` — t=96198 periodic; Age focused during “perfect for me” / save 400,000. `supports_solution`
- `screenshots/0016.jpg` — t=104200 periodic; same. `supports_solution`
- `screenshots/0017.jpg` — t=114199 periodic; after speech ended. `timeline_alignment`
- `tabs.json` — one tab 1351502398, url explore-banks whole session. `timeline_alignment`
- `viewer.css` — 17,895 bytes; generic replay-player styles; no session talk. `checked_no_extra_signal`
- `viewer.js` — 32,334 bytes; generic replay-player script; no session talk. `checked_no_extra_signal`

### Helper issue files

- `issue-01-loan-inputs-advise-what-to-change.md` — `timestamp_map` + `cross_link`. Defect map only; this file is the direction/idea.

## ASR notes

Transcripts mostly agree on the 18 cues. Conflicts, resolved by click + screenshot:

- audio.json `language: "mr"` while speech is English with Indian loan terms — ignored.
- “civility or on property” vs on-screen CIBIL and Property agreement value. Quoted raw “civility”; intended CIBIL or property. They clicked property immediately after this line, CIBIL ~13 s later.
- “high civil score” / json “civil” (0.44) after clicking CIBIL — intended CIBIL. Quoted raw “civil score.”
- “best parameters” is stable across srt/tsv/text; json “parameters” only 0.28 but matches the field walk.
- “Rs. 750,000” / json “750” (0.10) — quoted raw; next folder uses 50 lakh / 40 lakh / 5 lakh, so the rupee scale here may be misheard. Not silently corrected.
- “remove my pay slip” if salaried beats self-employed — Occupation Self-employed is on screen; they did not click it here. Next folder says get a payslip / join a company. Quoted raw; intended sense is change occupation documentation if salaried wins.
- “values here should already be met” — json “met.” probability 0.10. Fields were already filled; they restored `1,00,000`. Kept as related restatement, not a second solution file.
- Segment 18 `no_speech_prob` 0.96 is high, but words “wife's” (0.94) and “saved” (0.93) match the srt line and the Age/co-applicant screen.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2204/solution-01-advise-what-to-change-to-save",
  "solution_title": "Advise what to change, and how much that saves",
  "folder": "wb-rec-260815-2204",
  "sequence_index": 13,
  "recording_id": "96bab1e5-65d0-462e-b148-21cf61aeb7cf",
  "recording_started_at": "2026-08-15T16:34:11.754Z",
  "recording_ended_at": "2026-08-15T16:36:10.834Z",
  "duration_ms": 119080,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form (Monthly income #hlc-monthly-income, Property agreement value #hlc-property-value, CIBIL score #hlc-cibil, Age #hlc-age, Occupation Salaried/Self-employed, co-applicant under Adjust eligibility)",
  "for_topic": "Explore banks Loan inputs — advice that names a change and rupees saved, instead of a loan that only matches today’s numbers",
  "pinpoint": "On Explore banks, while clicking Monthly income, Property agreement value, CIBIL score, and Age, they said they do not want the tool to tell them what the best parameters should be; they want it to tell them what to change (wait months, raise credit score, switch salaried vs self-employed, take a younger wife’s name) and how much money that saves — an idea that can also be the solution for this form.",
  "kind": ["idea", "proposed_change", "user_convenience", "product_principle"],
  "decidedness": "leaning",
  "basis": "A person hunting for the best home-loan deal will game those fields anyway; they want rupees saved from a named change, not a loan that is only ‘perfect for me’.",
  "analog_source": "none",
  "linked_issue_files": ["issue-01-loan-inputs-advise-what-to-change.md"],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2206",
  "related_solution_files": [],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:07,700-00:00:21,620","00:00:26,480-00:00:31,680","00:00:32,400-00:00:39,940","00:00:42,100-00:00:58,420","00:00:59,590-00:01:24,100","00:01:26,160-00:01:52,120"],
  "event_t_ms": [20100,21995,22160,22325,22459,22610,22863,29283,31449,31451,34763,34940,35055,40042,40206,40388,53217,87301],
  "screenshot_files": ["screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0007.jpg","screenshots/0010.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg"],
  "tags": ["intelligence","hacks","loan-inputs","convenience","cibil","occupation","co-applicant","age"],
  "quotes": [
    {"clock": "00:00:07,700", "text": "I will say everything once again. The main purpose of my discussion was that monthly income...", "artifact": "audio.srt"},
    {"clock": "00:00:26,480", "text": "I mean, first of all, I said that the values here should already be met.", "artifact": "audio.srt"},
    {"clock": "00:00:52,860", "text": "Actually, I don't want you to tell me what the best parameters should be.", "artifact": "audio.srt"},
    {"clock": "00:00:59,590", "text": "If you tell me that I will get a loan of Rs. 750,000, I will give it to you in six months.", "artifact": "audio.srt"},
    {"clock": "00:01:12,660", "text": "If you tell me that salary is more than self-employed, then I will remove my pay slip.", "artifact": "audio.srt"},
    {"clock": "00:01:26,160", "text": "You told me that 30 years of age is not good.", "artifact": "audio.srt"},
    {"clock": "00:01:29,680", "text": "My wife is 28 years old. I will take her name.", "artifact": "audio.srt"},
    {"clock": "00:01:34,260", "text": "I don't want to have a loan that is perfect for me.", "artifact": "audio.srt"},
    {"clock": "00:01:39,500", "text": "I want you to save Rs. 400,000 even if you have a high civil score.", "artifact": "audio.srt"},
    {"clock": "00:01:47,400", "text": "If you have taken your wife's name, then you have saved Rs. 400,000.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 20100, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 31451, "name": "main", "css": "main"},
    {"t_ms": 34763, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 40042, "name": "Property agreement value", "css": "#hlc-property-value"},
    {"t_ms": 53217, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 87301, "name": "Age", "css": "#hlc-age"}
  ],
  "related_discussion_present": true
}
```
