# Explore banks asks for today’s numbers instead of showing what to change to save money

On Explore banks they walked the loan form (income, property, credit score, age) and restated the same complaint.
They do not want the site to tell them what the “best” numbers should be.
They want it to show what a person could change — wait months, raise the score, switch salaried vs self-employed, put a younger wife’s name on the loan — and how much that would save.
That talk was unfinished here and continues in the next recording.

---
issue_id: "wb-rec-260815-2204/issue-01-loan-inputs-advise-what-to-change"
issue_title: "Explore banks asks for today’s numbers instead of showing what to change to save money"
folder: "wb-rec-260815-2204"
sequence_index: 13
recording_id: "96bab1e5-65d0-462e-b148-21cf61aeb7cf"
recording_started_at: "2026-08-15T16:34:11.754Z"
recording_ended_at: "2026-08-15T16:36:10.834Z"
duration_ms: 119080
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form on Explore banks (Monthly income #hlc-monthly-income, Property agreement value #hlc-property-value, CIBIL score #hlc-cibil, Age #hlc-age, Occupation Salaried/Self-employed, co-applicant under Adjust eligibility)"
pinpoint: "On Explore banks, the Loan inputs card currently collects the user’s present figures to list matching banks; they said that is the wrong job because they want change-this-to-save-that advice, not a prescription of the best parameters."
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: "true"
continuation: "continues_into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2206"
related_issue_files: []
source_files_used: ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:07,700-00:00:21,620","00:00:26,480-00:00:31,680","00:00:32,400-00:00:39,940","00:00:44,040-00:00:58,420","00:00:59,590-00:01:24,100","00:01:26,160-00:01:52,120"]
event_t_ms: [20100,21995,22160,22325,22459,22610,22863,29283,31449,31451,34763,34940,35055,40042,40206,40388,53217,87301]
screenshot_files: ["screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0010.jpg","screenshots/0014.jpg"]
tags: ["copy","interaction","data","product-job","loan-inputs","cibil","occupation","co-applicant"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` (“Explore banks – Shroffin”), the **Loan inputs** form is on screen the whole session. They clicked through **Monthly income**, **Property agreement value**, **CIBIL score**, and **Age** while restating one product complaint.

Raw ASR (audio.srt): “Actually, I don't want you to tell me what the best parameters should be.”

Joined with the clicks and the form: the page currently takes the user’s present numbers and lists bank options for those numbers. They treated that as the wrong job. They want the tool to show what a person could **change** (wait, raise credit score, switch salaried vs self-employed, put a younger wife’s name on the loan) and **how much money that would save**, not to prescribe the “best” parameters or only a loan that is “perfect for me.”

They opened with a restatement that “the values here should already be met” while looking at this tool (they cleared Monthly income, then typed `1,00,000`). That is preamble to the same tool talk, not a separate empty-field bug: the fields were already filled.

## How the files join (required)

- time (ms and clock): **20,100 ms / 00:00:20.100**
- what they said (quote + audio file): “The main purpose of my discussion was that monthly income...” (audio.srt cue 1, 7,700–21,620 ms; audio.json words “monthly income...” 20,920–21,620 ms, probabilities ~0.62 / 0.65)
- what they did: left-click `#hlc-monthly-income` (events.json t=20100, screenshot_id 3); five Backspaces then input `""` then `"1,00,000"`
- what was on screen: screenshots/0003.jpg (interaction) then 0004.jpg / 0005.jpg — Explore banks loan card, Monthly income focused/edited
- what page/object: Explore banks – Shroffin; Loan inputs; Monthly income*
- therefore: they named **Monthly income** as the start of the restatement, on that field

- time: **32,400–40,388 ms / 00:00:32–00:00:40**
- said: “Then I felt that we had such a discussion on civility or on property.” (audio.srt cue 4; audio.json “civility” probability 0.47)
- did: after that line, click `#hlc-property-value` at 40,042 / 40,206 / 40,388
- seeing: screenshots/0007.jpg — Property agreement value field on the same card
- page/object: Property agreement value*
- therefore: ASR “civility or on property” is CIBIL-or-property talk aimed at this card; click selects **property** at this beat (CIBIL is clicked next)

- time: **52,860–58,420 ms / 00:00:52–00:00:58**
- said: “Actually, I don't want you to tell me what the best parameters should be.” (audio.srt cue 7; audio.json same idea, word “parameters” probability 0.28)
- did: idle after property clicks; then click `#hlc-cibil` at 53,217
- seeing: screenshots/0010.jpg — CIBIL score field focused (value 780 in screenshot descriptions)
- page/object: CIBIL score* (“Changes the rates banks show you.” in pages.json)
- therefore the actual issue is: they reject the tool’s job of telling them the **best parameters**; they are pointing at the parameter fields themselves

- time: **72,660–92,880 ms / 00:01:12–00:01:32**
- said: “If you tell me that salary is more than self-employed, then I will remove my pay slip.” then “You told me that 30 years of age is not good. My wife is 28 years old. I will take her name.”
- did: Occupation Salaried/Self-employed visible but not clicked here; click `#hlc-age` at 87,301
- seeing: screenshots/0014.jpg — Age field focused; Occupation Self-employed selected; Adjust eligibility lists “co-applicant”
- page/object: Occupation toggles + Age* + co-applicant (hidden under Adjust eligibility)
- therefore: occupation and age/co-applicant are examples of **parameters they would change** if the tool told them it paid

- time: **99,500–112,120 ms / 00:01:39–00:01:52**
- said: “I want you to save Rs. 400,000 even if you have a high civil score.” / “If you have taken your wife's name, then you have saved Rs. 400,000.”
- did: idle on Age after 87,301
- seeing: screenshots/0015.jpg–0017.jpg — same loan card, Age still the last focused field
- therefore: the wanted output is **rupees saved from a named change** (wife’s name), even with a high CIBIL, not a loan “perfect for me”

If a feed was idle or empty at a beat, it still timestamps the talk: most of the argument happens during `idle` after each field click. console.json is `[]` (no extra runtime signal). viewer.js / viewer.css are generic player chrome.

## Pinpoint

On Explore banks, the **Loan inputs** card (Monthly income, Property agreement value, CIBIL score, Age, Occupation, with co-applicant under Adjust eligibility) currently collects the user’s present figures so **Bank options** can list matching lenders. They said they do not want that tool to tell them what the best parameters should be. They want it to show what to change and how much that would save (their examples: wait six months, take a small loan / raise credit score, salaried vs self-employed, put a 28-year-old wife’s name on the loan and save about four lakh even with a high CIBIL). They cared because a person hunting for the best home-loan deal would game those fields anyway, and they want Shroffin to supply that “intelligence” instead of only a fit for today’s numbers.

## Related discussion (not the issue itself)

- Restatement opener: “I will say everything once again.” Main purpose named as monthly income, then “the values here should already be met,” then “I was looking at this tool.” Fields were already filled; they cleared Monthly income and typed `1,00,000` (placeholder on the field). Treat as restating that the form should already have values, not as a second defect.
- User-gaming examples they used to explain the wanted job: wait six months for a stated loan amount; take a small loan so things become “perfect”; find a “credit agency” to raise the score; if salaried beats self-employed, change how income is shown (raw ASR “remove my pay slip”; next recording says get a payslip / join a company); age 30 “not good,” wife 28, “I will take her name.”
- They contrasted a loan that is “perfect for me” with saving a large rupee amount even with a “high civil score” by adding the wife’s name.
- They did not attack layout, the black recorder masks on bank rows, the low-looking property figure, See options, Apply once, or Filters as separate problems in this recording.

## Chronology in this recording

- **0–7.7 s** — idle on Explore banks; screenshots/0000.jpg–0002.jpg; no speech yet.
- **7.7–21.6 s** — “I will say everything once again. The main purpose of my discussion was that monthly income...” Idle, then at **19,976 ms** focus Age, **20,099–20,100 ms** focus+click Monthly income (0003.jpg).
- **21.6–22.9 s** — five Backspaces on Monthly income; input value `""` at 22,863 ms.
- **26.5–31.7 s** — “the values here should already be met” / “I was looking at this tool.” Input `"1,00,000"` at 29,283 ms; final input + click `main` at 31,449–31,451 ms (0004.jpg, 0005.jpg).
- **32.4–39.9 s** — “discussion on civility or on property.” Reclicks Monthly income at 34,763–35,055 ms (0006.jpg).
- **40.0–40.4 s** — focus+three clicks Property agreement value (0007.jpg). Idle through 0008.jpg.
- **52.1 s** — click `main`; **53,217 ms** focus+click CIBIL score (0009.jpg, 0010.jpg).
- **52.9–58.4 s** — “I don't want you to tell me what the best parameters should be.” Idle on CIBIL (0011.jpg–0013.jpg).
- **59.6–84.1 s** — loan-amount / six months / small loan / credit agency / salaried vs self-employed / six months. Still idle on CIBIL.
- **86.2–92.9 s** — age 30 not good; wife 28; take her name. **87,300–87,301 ms** focus+click Age (0014.jpg).
- **94.3–112.1 s** — not a loan “perfect for me”; save Rs. 400,000 even with high civil score; wife’s name saved Rs. 400,000. Idle on Age (0015.jpg–0017.jpg). Speech ends ~112 s; recording continues idle to 119,080 ms.

## Cross-recording continuation

**From previous (`wb-rec-260815-2201`):** not the same topic. That folder is ~11 s on the same Explore banks URL. Speech is off-topic (“Mahendra, do you want to go to the bar?” … “I don't want to go to the bar alone.”). Last non-idle event is only the landmark snapshot; last screenshots 0000.jpg / 0001.jpg show the same loan card with no field walk. They start this folder with “I will say everything once again,” which points to an earlier restatement, not to 2201’s bar talk. `continued_from_folder` is null.

**Into next (`wb-rec-260815-2206`):** yes. Gap is ~6 s (this ended `16:36:10.834Z`, next started `16:36:16.832Z`). Next speech opens on property value (“If your property value is 50 lakhs or 40 lakhs, then you have saved 5 lakhs”), then salaried vs self-employed, farmer/payslip, then “If there is a salary / civil score / age, then how much will be my loan?” and “I have gathered intelligence with these tools. Instead, I want that if this company gives me that intelligence.” First clicks: Property agreement value (~3 s), later Salaried, CIBIL, Age, Monthly income. Same page, same fields, same “tell me what to change / how much I save” job. Write the 2204 portion here; 2206 continues it.

## Evidence by file (every file in the folder — no omissions)

- `audio.json` — Whisper object, `language: "mr"` (do not trust), 18 segments, words with probabilities; full text ends at 112.12 s; “civility,” “civil score,” “parameters” (0.28), “750” (0.10). Used as `supports_issue` + ASR conflict source.
- `audio.lrc` — same 18 timed lines as srt. `timeline_alignment`.
- `audio.srt` — primary speech clock; cues 1–18 quoted above. `supports_issue`.
- `audio.text` — untimed plain transcript matching srt wording. `supports_issue`.
- `audio.tsv` — millisecond start/end for every cue (7700–112120). `timeline_alignment`.
- `audio.txt` — timed dump matching srt. `timeline_alignment`.
- `audio.vtt` — WEBVTT same cues. `timeline_alignment`.
- `audio.webm` — binary mic (1,913,783 bytes); not listened; speech taken from text artifacts. `checked_no_extra_signal`.
- `audio_sentences.txt` — one paragraph, same sentences as audio.text. `supports_issue`.
- `console.json` — `[]`; no console errors. `checked_no_extra_signal`.
- `events.json` — 46 events on explore-banks.html; clicks/focus/input on `#hlc-monthly-income`, `#hlc-property-value`, `#hlc-cibil`, `#hlc-age`; landmark names Loan inputs fields. `supports_issue`.
- `index.html` — generic Workbooks viewer shell; HTML comments inline manifest id `96bab1e5-65d0-462e-b148-21cf61aeb7cf`, start_url explore-banks, events_count 46, screenshots_count 18, plus inlined events/tabs/shots; script tags still sentinels. No extra discussion. `player_shell_with_inlined_json_fully_read` / `checked_no_extra_signal`.
- `manifest.json` — id `96bab1e5-65d0-462e-b148-21cf61aeb7cf`, start_url explore-banks, 16:34:11.754Z–16:36:10.834Z, duration_ms 119080, 46 events, 18 screenshots, viewport 1366×768, mic true, audio.webm. `timeline_alignment`.
- `pages.json` — page title Explore banks – Shroffin; form Loan inputs; fields Monthly income*, Property agreement value*, Age*, CIBIL score*, Occupation Salaried/Self-employed, Purpose Regular/Top-up, Co-applicant income/EMIs. Names the objects they meant. `supports_issue`.
- `replay.spec.ts` — Playwright replay: goto explore-banks, click/fill `#hlc-monthly-income` to `1,00,000`, click main, reclick income, click `#hlc-property-value`, `#hlc-cibil`, `#hlc-age`. Second timeline of the field walk. `supports_issue`.
- `screenshots/index.json` — 18 shots, t 198–114199, url explore-banks, mask_rects over bank-row area. `timeline_alignment`.
- `screenshots/0000.jpg` — t=198 start; Explore banks loan card before speech. `timeline_alignment`.
- `screenshots/0001.jpg` — t=8199 periodic; same card during opener speech. `timeline_alignment`.
- `screenshots/0002.jpg` — t=16200 periodic; still on card as “monthly income” is said. `timeline_alignment`.
- `screenshots/0003.jpg` — t=20381 interaction; Monthly income click. `supports_issue`.
- `screenshots/0004.jpg` — t=30198 periodic; after typing 1,00,000. `supports_issue`.
- `screenshots/0005.jpg` — t=31850 interaction; after main click. `supports_issue`.
- `screenshots/0006.jpg` — t=35164 interaction; Monthly income reclicks. `supports_issue`.
- `screenshots/0007.jpg` — t=40444 interaction; Property agreement value clicks. `supports_issue`.
- `screenshots/0008.jpg` — t=50200 periodic; idle on property / “best parameters” setup. `related_discussion`.
- `screenshots/0009.jpg` — t=52453 interaction; main click before CIBIL. `timeline_alignment`.
- `screenshots/0010.jpg` — t=53621 interaction; CIBIL score focused. `supports_issue`.
- `screenshots/0011.jpg` — t=62199 periodic; idle on CIBIL during credit/occupation examples. `related_discussion`.
- `screenshots/0012.jpg` — t=70200 periodic; same. `related_discussion`.
- `screenshots/0013.jpg` — t=80199 periodic; same, just before age speech. `related_discussion`.
- `screenshots/0014.jpg` — t=87702 interaction; Age click while saying 30 / wife 28. `supports_issue`.
- `screenshots/0015.jpg` — t=96198 periodic; Age focused during “perfect for me” / save 400,000. `supports_issue`.
- `screenshots/0016.jpg` — t=104200 periodic; same. `supports_issue`.
- `screenshots/0017.jpg` — t=114199 periodic; after speech ended, still on Age/card. `timeline_alignment`.
- `tabs.json` — one tab 1351502398, url explore-banks for the whole session. `timeline_alignment`.
- `viewer.css` — 17,895 bytes; generic replay-player styles; no session talk. `player_chrome_fully_read_confirmed` / `checked_no_extra_signal`.
- `viewer.js` — 32,334 bytes; generic replay-player script; no session talk. `player_chrome_fully_read_confirmed` / `checked_no_extra_signal`.

## ASR notes

Transcripts mostly agree on the 18 cues. Conflicts and low-probability words, resolved by click + screenshot:

- audio.json `language: "mr"` while speech is English with Indian loan terms — ignored.
- “civility or on property” (srt/json) vs on-screen **CIBIL score** and **Property agreement value**. Used “CIBIL or property” as intended; quoted raw “civility.” They clicked property immediately after this line, CIBIL ~13 s later.
- “high civil score” / json “civil” (0.44) while focused on Age after having clicked CIBIL — intended **CIBIL**. Quoted raw “civil score.”
- “best parameters” is stable across srt/tsv/text; json word “parameters” only 0.28 but matches the field walk.
- “Rs. 750,000” / json “750” (0.10) — quoted raw; next folder uses 50 lakh / 40 lakh / 5 lakh, so the rupee scale here may be misheard. Not silently corrected.
- “remove my pay slip” if “salary is more than self-employed” — Occupation Salaried/Self-employed is on screen (Self-employed selected); they did not click it here. Next folder says get a payslip / join a company. Quoted raw; intended sense is **change occupation documentation if salaried wins**, not a separate payslip-UI bug.
- “values here should already be met” — json “met.” probability 0.10. Fields were already filled; they restored `1,00,000`. Kept as related restatement, not a second issue.
- audio.json segment 2 wording “the values here should already be met” matches srt; segment 7 json “I don't want you to tell me what the best parameters should be” is slightly cleaner English than srt “what the best parameters should be” — same meaning; srt used for clock, json used to confirm the thesis.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2204/issue-01-loan-inputs-advise-what-to-change",
  "issue_title": "Explore banks asks for today’s numbers instead of showing what to change to save money",
  "folder": "wb-rec-260815-2204",
  "sequence_index": 13,
  "recording_id": "96bab1e5-65d0-462e-b148-21cf61aeb7cf",
  "recording_started_at": "2026-08-15T16:34:11.754Z",
  "recording_ended_at": "2026-08-15T16:36:10.834Z",
  "duration_ms": 119080,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form on Explore banks (Monthly income #hlc-monthly-income, Property agreement value #hlc-property-value, CIBIL score #hlc-cibil, Age #hlc-age, Occupation Salaried/Self-employed, co-applicant under Adjust eligibility)",
  "pinpoint": "On Explore banks, the Loan inputs card currently collects the user’s present figures to list matching banks; they said that is the wrong job because they want change-this-to-save-that advice, not a prescription of the best parameters.",
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2206",
  "related_issue_files": [],
  "source_files_used": ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:07,700-00:00:21,620","00:00:26,480-00:00:31,680","00:00:32,400-00:00:39,940","00:00:44,040-00:00:58,420","00:00:59,590-00:01:24,100","00:01:26,160-00:01:52,120"],
  "event_t_ms": [20100,21995,22160,22325,22459,22610,22863,29283,31449,31451,34763,34940,35055,40042,40206,40388,53217,87301],
  "screenshot_files": ["screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0010.jpg","screenshots/0014.jpg"],
  "tags": ["copy","interaction","data","product-job","loan-inputs","cibil","occupation","co-applicant"],
  "quotes": [
    {"clock": "00:00:07,700","text": "I will say everything once again. The main purpose of my discussion was that monthly income...","artifact": "audio.srt"},
    {"clock": "00:00:26,480","text": "I mean, first of all, I said that the values here should already be met.","artifact": "audio.srt"},
    {"clock": "00:00:32,400","text": "Then I felt that we had such a discussion on civility or on property.","artifact": "audio.srt"},
    {"clock": "00:00:52,860","text": "Actually, I don't want you to tell me what the best parameters should be.","artifact": "audio.srt"},
    {"clock": "00:00:59,590","text": "If you tell me that I will get a loan of Rs. 750,000, I will give it to you in six months.","artifact": "audio.srt"},
    {"clock": "00:01:12,660","text": "If you tell me that salary is more than self-employed, then I will remove my pay slip.","artifact": "audio.srt"},
    {"clock": "00:01:26,160","text": "You told me that 30 years of age is not good.","artifact": "audio.srt"},
    {"clock": "00:01:29,680","text": "My wife is 28 years old. I will take her name.","artifact": "audio.srt"},
    {"clock": "00:01:39,500","text": "I want you to save Rs. 400,000 even if you have a high civil score.","artifact": "audio.srt"},
    {"clock": "00:01:47,400","text": "If you have taken your wife's name, then you have saved Rs. 400,000.","artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 20100, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 31451, "name": "main", "css": "main"},
    {"t_ms": 34763, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 34940, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 35055, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 40042, "name": "Property agreement value", "css": "#hlc-property-value"},
    {"t_ms": 40206, "name": "Property agreement value", "css": "#hlc-property-value"},
    {"t_ms": 40388, "name": "Property agreement value", "css": "#hlc-property-value"},
    {"t_ms": 52051, "name": "main", "css": "main"},
    {"t_ms": 53217, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 87301, "name": "Age", "css": "#hlc-age"}
  ],
  "related_discussion_present": true
}
```
