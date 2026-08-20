# Company should give loan hacks, not today’s offer

Shroffin should tell the user the small moves that save lakhs — wait, raise CIBIL, take it in a spouse’s name, get a salary slip — instead of only showing today’s bank numbers for whatever they type.
This is for the Explore banks loan form (income, property, age, CIBIL, salaried vs self-employed) and the empty space around it.
They said Indian users do not want “tell me my loan.” They want maximum money with little extra effort, like a lawyer who is on their side.
They were leaning hard this way; they also said stuffing that advice into the bank list below would muddy it (that placement fight is a separate finding).

---
solution_id: "wb-rec-260815-2206/solution-01-company-gives-loan-hacks-intelligence"
solution_title: "Company should give loan hacks, not today’s offer"
folder: "wb-rec-260815-2206"
sequence_index: 14
recording_id: "125a22f8-b64d-419e-9196-9126d5f613f3"
recording_started_at: "2026-08-15T16:36:16.832Z"
recording_ended_at: "2026-08-15T16:43:07.910Z"
duration_ms: 411078
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form (Monthly income, Property agreement value, Age, CIBIL score, Salaried/Self-employed) and empty space above the Bank options table"
for_topic: "Explore banks intelligence: give the user loan hacks so they do not reverse-engineer them by poking the form"
pinpoint: "On Explore banks, while clicking property, Salaried, CIBIL, Age, and Monthly income, they said the company should give the intelligence (wait 3 months, raise CIBIL, wife’s name, salary slip) instead of the user gathering it by changing those fields; that idea can also be the product solution for the missing hacks."
kind: ["idea", "proposed_change", "user_convenience", "company_thinking", "product_principle", "borrowed_pattern"]
decidedness: "leaning"
basis: "Indian user wants maximum money with small effort; home loans happen a few times in a life; users should not have to feed different inputs to extract tricks; lawyers already give these hacks; rural cash earners without a salary slip should be helped."
analog_source: "lawyers"
linked_issue_files: ["issue-01-explore-banks-missing-hacks-intelligence.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2204"
continued_into_folder: "wb-rec-260815-2213"
related_solution_files: ["solution-02-eighth-unique-point-we-suggest-hacks.md", "solution-03-one-cibil-default-750-user-tries-780.md", "solution-04-keep-hacks-out-of-bank-table-interface.md"]
source_files_used: ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:02,630 --> 00:03:31,780", "00:03:38,760 --> 00:04:29,580", "00:05:13,190 --> 00:06:32,610"]
event_t_ms: [198, 2904, 3004, 3005, 36242, 36243, 40771, 40772, 43064, 43066, 92972, 92973, 98280, 98281, 104353, 104354, 140069]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0020.jpg","screenshots/0036.jpg","screenshots/0040.jpg","screenshots/0050.jpg"]
tags: ["intelligence","hacks","explore-banks","loan-inputs","cibil","user-convenience","company","borrowed-pattern","lawyers","indian-user"]
---

## Exact solution (or idea that can also be a solution)

They treated the Explore banks form as answering the wrong question. Today it only returns the offer for typed numbers. The constructive direction — an idea that can also be the product solution — is that **this company should give the intelligence**, so the user does not gather it by poking salary, CIBIL, and age.

Quoted from `audio.srt`: “Instead, I want that if this company gives me that intelligence,” then the voice of that advice: “Actually, sir, you just wait for 3 months… You can increase your credit score by 20 points or 5 points in 3 months… Combine your income in the name of your wife. And take the home loan in the name of your wife.” Later: “The Indian mentality is that today, don't tell me about my loan. You tell me how will I get my maximum amount of money?” And: “I need to know these hacks with this tool or this short film” (ASR; likely short form/tool). Near the empty form: “But this place is empty.” For rural cash earners: “And we should definitely help them” — wait four months, take a job, get a salary slip, “It will cost you 5 lakh rupees.”

The lawyer analogy is the method: a person thinking of the client’s benefit would say wait, set up the wife’s salary/rent, get 1% off. That is what this tool should do.

## What this is for

Explore banks (`http://localhost:8765/pages/explore-banks.html`), Loan inputs card: Monthly income, Property agreement value, Age, CIBIL score, Occupation. Linked issue `issue-01-explore-banks-missing-hacks-intelligence.md` is the defect (no hacks). This file is the direction: the company gives those hacks.

## Why they said it that way

Indian users already hack eligibility themselves (50 vs 40 lakh property, rest in black; farmer joining a company for a payslip). A home loan happens two or three times in a life, not as a cold next-day loan. Users should not feel they must squeeze intelligence out of a form. Rural people without a salary slip are the ones the tool would “genuinely help.”

## How the files join (required)

- time: 3005 ms (00:00:03)
  - said: “If your property value is 50 lakhs or 40 lakhs, then you have saved 5 lakhs.” (`audio.srt` cue 1)
  - did: click `#hlc-property-value` (`events.json` t=3005)
  - seeing: `screenshots/0001.jpg` — Explore banks form, property ₹6,000, Self-employed, no advice panel
  - where: explore-banks.html, Property agreement value
  - therefore: still on the “what to change to save lakhs” thread from the previous recording

- time: 36243–43066 ms (00:00:36–00:00:43)
  - said: if salary / civil score / age, how much EMI and loan; “I have gathered intelligence with these tools. Instead, I want that if this company gives me that intelligence”
  - did: click Salaried (36243), `#hlc-cibil` (40772), `#hlc-age` (43066)
  - seeing: `0006.jpg` CIBIL 780 focused after Salaried; `0007.jpg` Age focused
  - therefore: poking those fields is DIY intelligence; the company should give it

- time: 84570–107050 ms
  - said: don’t tell me my loan; tell me maximum money; “For this, I need to help this website in some form.”
  - did: click Monthly income (92973), Age (98281), CIBIL (104354)
  - seeing: `0013.jpg` / `0014.jpg` / `0015.jpg`
  - therefore: the form answers the wrong user-job

- time: 160330–207470 ms
  - said: lawyer who thinks of my benefit would say wait 3 months, set up wife salary/rent, 1% off; “I need to know these hacks with this tool”
  - did: idle after Monthly income click at 140069 (`0020.jpg`)
  - seeing: same form, still no hacks UI (`0021.jpg`–`0026.jpg`)
  - therefore: borrowed lawyer method applied to this tool

- time: 313190–392610 ms
  - said: “But this place is empty.” Then hack-the-tool examples (CIBIL +20, wife/husband name, salaried vs self-employed); rural salary-slip help
  - did: idle on the form
  - seeing: `0036.jpg`–`0050.jpg` — CIBIL still 780, Adjust eligibility closed, no advice copy
  - therefore: empty place is where company-given hacks should live

## Pinpoint

On Explore banks, they said Shroffin should give loan hacks/intelligence (wait, raise CIBIL, spouse’s name, salary slip) for the loan-input form so Indian users get maximum money without reverse-engineering fields; they analogized lawyers; they were looking at that empty form in `0006.jpg`–`0050.jpg`.

## Related discussion (not the solution itself)

- Property 50 vs 40 lakh, rest in black; farmer/payslip — examples of hacks Indians already do.
- ASR “Hindu and divided family” joined to “take the home loan in the name of your wife” (Hindu Undivided Family).
- Typical user is not “I need a loan tomorrow, these are my exact details.” Comfort over two or three lifetime loans.
- Pareto / profit curve and “8th unique point” live in `solution-02-eighth-unique-point-we-suggest-hacks.md`.
- CIBIL one field / default 750 lives in `solution-03-one-cibil-default-750-user-tries-780.md`.
- “Things below get approximated” / don’t sit only in this interface lives in `solution-04-keep-hacks-out-of-bank-table-interface.md`.
- ASR “short film” vs likely short form — quoted raw.

## Chronology in this recording

- 00:00:02–00:00:34 — Property click; 50 vs 40 lakh; black money; farmer payslip. Shot 0001.
- 00:00:36–00:00:52 — DIY via salary/CIBIL/age; company should give intelligence. Clicks Salaried, CIBIL, Age. Shots 0006–0007.
- 00:00:53–00:01:24 — Wait 3 months, CIBIL 695→700, wife’s name, 5 lakh net.
- 00:01:24–00:01:47 — Indian mentality: maximum money. Clicks income, age, CIBIL. Shots 0013–0015.
- 00:02:18–00:03:27 — Tool usage should be “how can I do my best”; lawyers; need hacks from this tool. Click income 0020.
- 00:03:38–00:04:29 — Not a cold next-day loan; convey min effort max money so users are not scared (opening copy also in solution-02).
- 00:05:13–00:06:32 — Empty place; hack the tool; rural salary slip. Shots 0036–0050.

## Cross-recording continuation

Continues from `wb-rec-260815-2204` (~6s gap). That session ended on the same form (CIBIL then Age): they do not want perfect parameters; they want advice that saves money (raise credit, salary vs self-employed, wife’s name, “you have saved Rs. 400,000”). This recording opens with the 50-vs-40-lakh save and names company-given intelligence.

Continues into `wb-rec-260815-2213` (~9s gap). Next starts: “Bro, we need to make a different tool… we can't just put it here.” Same missing-advice object; they move to where it should live (placement is solution-04).

## Evidence by file (every raw recorder file in the folder — no omissions)

- `_theme-cards.json` — theme card quotes the hacks gap and related talk; used as map of topics, not as proof. `checked_no_extra_signal`
- `manifest.json` — id `125a22f8-b64d-419e-9196-9126d5f613f3`, start_url explore-banks.html, 411078 ms, 71 events, 52 screenshots, viewport 1366×768. `timeline_alignment`
- `audio.text` — full plain transcript of company-gives-intelligence ask. `supports_solution`
- `audio.txt` — same arc with timed lines. `supports_solution`
- `audio_sentences.txt` — one-block sentences of the same talk. `supports_solution`
- `audio.srt` — primary speech clock cues 1–152 for this finding. `supports_solution` `timeline_alignment`
- `audio.vtt` — same cues; “civil score”, lawyer hacks. `supports_solution`
- `audio.tsv` — millisecond starts matching srt. `timeline_alignment`
- `audio.lrc` — lyric-style times. `timeline_alignment`
- `audio.json` — 165 segments, language `mr` (wrong), 1145 words; low-p “sell”, “civil”, “intelligence”. `supports_solution` `timeline_alignment`
- `audio.webm` — binary mic; not played. `checked_no_extra_signal`
- `events.json` — landmark t=198; clicks property/Salaried/CIBIL/Age/income. `supports_solution` `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; Loan inputs fields named. `supports_solution`
- `tabs.json` — one tab, explore-banks.html whole session. `timeline_alignment`
- `console.json` — `[]`. `checked_no_extra_signal`
- `replay.spec.ts` — Playwright locators for those clicks plus long idle. `timeline_alignment`
- `index.html` — generic player; inlined same id/events/52 shots; no extra talk. `checked_no_extra_signal`
- `viewer.js` — generic replay player, 32334 bytes. `checked_no_extra_signal`
- `viewer.css` — generic chrome, 17895 bytes. `checked_no_extra_signal`
- `screenshots/index.json` — 52 shots t=200–408195 all explore-banks.html. `timeline_alignment`
- `screenshots/0000.jpg` — start: Self-employed, Regular, table headers only, no hacks. `timeline_alignment`
- `screenshots/0001.jpg` — after property click during 50/40-lakh line. `supports_solution`
- `screenshots/0002.jpg`–`screenshots/0005.jpg` — same form, Self-employed, idle during farmer/payslip. `timeline_alignment`
- `screenshots/0006.jpg` — CIBIL focused, Salaried selected. `supports_solution`
- `screenshots/0007.jpg` — Age focused during DIY intelligence list. `supports_solution`
- `screenshots/0008.jpg`–`screenshots/0012.jpg` — Salaried selected, idle during wait-3-months / wife-name talk. `timeline_alignment`
- `screenshots/0013.jpg` — Monthly income click, “maximum amount of money.” `supports_solution`
- `screenshots/0014.jpg` — Age click. `supports_solution`
- `screenshots/0015.jpg` — CIBIL click. `supports_solution`
- `screenshots/0016.jpg`–`screenshots/0019.jpg` — idle form during unique-point talk (related). `related_discussion`
- `screenshots/0020.jpg` — Monthly income during “how can I do my best.” `supports_solution`
- `screenshots/0021.jpg`–`screenshots/0035.jpg` — same empty form during lawyers / Indian user. `timeline_alignment`
- `screenshots/0036.jpg`–`screenshots/0050.jpg` — still empty (“this place is empty”); CIBIL 780. `supports_solution`
- `screenshots/0051.jpg` — bank table after later scroll; used for placement (solution-04), not this finding’s object. `checked_no_extra_signal`

### Helper issue files

- `issue-01-explore-banks-missing-hacks-intelligence.md` — `timestamp_map` `cross_link`. Defect file; this file is the direction.

## ASR notes

- `civil` / `Sibyl` → CIBIL (`#hlc-cibil`, UI “CIBIL score”).
- “sell than self-employed” → salaried vs self-employed (Salaried click; word “sell” p≈0.11).
- “Hindu and divided family” → HUF, joined to wife’s name.
- “short film” vs likely short form — quoted raw.
- `language: "mr"` is wrong.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2206/solution-01-company-gives-loan-hacks-intelligence",
  "solution_title": "Company should give loan hacks, not today’s offer",
  "folder": "wb-rec-260815-2206",
  "sequence_index": 14,
  "recording_id": "125a22f8-b64d-419e-9196-9126d5f613f3",
  "recording_started_at": "2026-08-15T16:36:16.832Z",
  "recording_ended_at": "2026-08-15T16:43:07.910Z",
  "duration_ms": 411078,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form (Monthly income, Property agreement value, Age, CIBIL score, Salaried/Self-employed) and empty space above the Bank options table",
  "for_topic": "Explore banks intelligence: give the user loan hacks so they do not reverse-engineer them by poking the form",
  "pinpoint": "On Explore banks, while clicking property, Salaried, CIBIL, Age, and Monthly income, they said the company should give the intelligence (wait 3 months, raise CIBIL, wife’s name, salary slip) instead of the user gathering it by changing those fields; that idea can also be the product solution for the missing hacks.",
  "kind": ["idea", "proposed_change", "user_convenience", "company_thinking", "product_principle", "borrowed_pattern"],
  "decidedness": "leaning",
  "basis": "Indian user wants maximum money with small effort; home loans happen a few times in a life; users should not have to feed different inputs to extract tricks; lawyers already give these hacks; rural cash earners without a salary slip should be helped.",
  "analog_source": "lawyers",
  "linked_issue_files": ["issue-01-explore-banks-missing-hacks-intelligence.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2204",
  "continued_into_folder": "wb-rec-260815-2213",
  "related_solution_files": ["solution-02-eighth-unique-point-we-suggest-hacks.md", "solution-03-one-cibil-default-750-user-tries-780.md", "solution-04-keep-hacks-out-of-bank-table-interface.md"],
  "source_files_used": ["_theme-cards.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:02,630 --> 00:03:31,780", "00:03:38,760 --> 00:04:29,580", "00:05:13,190 --> 00:06:32,610"],
  "event_t_ms": [198, 2904, 3004, 3005, 36242, 36243, 40771, 40772, 43064, 43066, 92972, 92973, 98280, 98281, 104353, 104354, 140069],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0020.jpg","screenshots/0036.jpg","screenshots/0040.jpg","screenshots/0050.jpg"],
  "tags": ["intelligence","hacks","explore-banks","loan-inputs","cibil","user-convenience","company","borrowed-pattern","lawyers","indian-user"],
  "quotes": [
    {"clock": "00:00:47,890", "text": "Instead, I want that if this company gives me that intelligence,", "artifact": "audio.srt"},
    {"clock": "00:01:29,790", "text": "You tell me how will I get my maximum amount of money?", "artifact": "audio.srt"},
    {"clock": "00:03:06,890", "text": "I need to know these hacks with this tool or this short film.", "artifact": "audio.srt"},
    {"clock": "00:05:13,190", "text": "But this place is empty.", "artifact": "audio.srt"},
    {"clock": "00:06:05,770", "text": "And we should definitely help them.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 3005, "name": "Property agreement value", "css": "#hlc-property-value"},
    {"t_ms": 36243, "name": "Salaried", "css": "form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(1) > div > button:nth-of-type(1)"},
    {"t_ms": 40772, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 43066, "name": "Age", "css": "#hlc-age"},
    {"t_ms": 92973, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 98281, "name": "Age", "css": "#hlc-age"},
    {"t_ms": 104354, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 140069, "name": "Monthly income", "css": "#hlc-monthly-income"}
  ],
  "related_discussion_present": true
}
```
