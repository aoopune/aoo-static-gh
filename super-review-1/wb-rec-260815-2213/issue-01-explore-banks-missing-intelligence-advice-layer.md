# Explore banks shows only a form and a bank table; the advice layer they described is missing

On Explore banks the screen is only the eligibility form and a lender comparison table.
They treated that as incomplete: the “intelligence” they just described (honest rate context, three pre-search tips, spouse/property hacks, “give me the best”) is not on this page.
They argued whether to dump that tool here or park it elsewhere, then said they do not want a second interface.
The click that joins the talk to the page is Self-employed, used as an example of occupation-based tips that the table does not give.

---
issue_id: "wb-rec-260815-2213/issue-01-explore-banks-missing-intelligence-advice-layer"
issue_title: "Explore banks shows only a form and a bank table; the advice layer they described is missing"
folder: "wb-rec-260815-2213"
sequence_index: 15
recording_id: "820288e7-0391-48c1-ae98-6c895d38b144"
recording_started_at: "2026-08-15T16:43:16.850Z"
recording_ended_at: "2026-08-15T16:52:07.526Z"
duration_ms: 530676
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Explore banks eligibility form (Monthly income, Occupation Salaried/Self-employed) plus the Bank options table (Canara Bank Housing loan row, Overview / Apply once)"
pinpoint: "On Explore banks they said the advice tool they had just described cannot live as this form-plus-table alone: the page never shows Google-Flights-style honesty about rates, pre-search tips, or a ‘give me the best’ answer, so they debated putting that intelligence here versus elsewhere, then clicked Self-employed while describing occupation tips that are not on screen."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2206"
continued_into_folder: "wb-rec-260815-2222"
related_issue_files: []
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","tabs.json","viewer.css","viewer.js","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg"]
speech_clock: ["00:00:00,000-00:00:28,480","00:00:28,920-00:01:38,720","00:01:35,480-00:02:22,220","00:02:25,700-00:04:55,800","00:05:09,610-00:06:06,970","00:07:43,660-00:08:41,800"]
event_t_ms: [184, 22269, 23120, 24725, 123974, 123975]
screenshot_files: ["screenshots/0000.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0015.jpg","screenshots/0016.jpg"]
tags: ["missing","product","copy","trust","interaction","data"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` the live screen is the “Explore banks.” eligibility card (Monthly income ₹1,00,000, Property agreement value, Age 35, CIBIL 780, Occupation, Purpose, See options) and, below it, Filters plus a Bank options table (Overview / Charges / Apply once, Canara Bank Housing loan). There is no on-page slot for advice, tips, or a “best offer” verdict.

They treated that gap as the defect. Opening line, while idle on that form: “Bro, we need to make a different tool.” Then, of the tool they had just described in the previous recording: “The one we just described, we can't just put it here. We need to put it in a different place.” They immediately reversed: “Or we can just put it here. We don't need a new interface. We don't need two interfaces.” Placement is unsettled; the missing intelligence is not.

They then described what this page should say after a search and does not: suggest beside the result (“Suppose it's right here. 1 Lakh. You just did 1.25 Lakh, right?”), Google Flights-style “prices are low / high / unlikely to go down,” three tips before search keyed to income and occupation, and at the end a user who fills the form and says “Give me the best.” The table never does any of that. The only matching click is Self-employed at t=123975 ms, while they said the borrower is self-employed and banks’ rates differ — Occupation is a form toggle, not the advice layer.

## How the files join (required)

- time (ms and clock): 0–28480 ms / 00:00:00–00:00:28
- what they said: audio.srt “Bro, we need to make a different tool.” … “The one we just described, we can't just put it here.” … “We don't need two interfaces. We can just put it here.”
- what they did: idle after landmark_snapshot; focus Monthly income at t=22269; scroll y=181 then y=98.5
- what was on screen: screenshots/0000.jpg–0002.jpg still show the form with Salaried selected and only the top of the bank table
- what page/object: Explore banks form + empty advice area
- therefore: they are pointing at this page as the wrong home *and* as the only home they want — because the described tool is not here yet

- time: 28920–138480 ms / 00:00:28–00:02:18
- what they said: suggest “right-right”; 1 Lakh vs 1.25 Lakh; Google Flights low/high prices; “There are three tips here. Before the search, we observed that your income is not more than 20,000.”; self-employed / six-month salary / “The rates of the banks are different. That's why we have two options.”
- what they did: click Self-employed (events.json t=123975, replay.spec.ts getByRole button Self-employed)
- what was on screen: 0003–0014 Salaried + Canara Bank row; 0015 onward Self-employed selected, same table, still no tips
- therefore: occupation-based tips are spoken against a control that only switches Salaried/Self-employed; the tips themselves are not on the page

- time: 145700–295800 ms / 00:02:25–00:04:55
- what they said: distrust of “prices are low”; juicer sale; Amazon fake discount / Prime Day — related discussion about honesty, not a second page object
- what they did: idle
- what was on screen: frozen Self-employed + Canara row (0016–0061, identical bytes)
- therefore: Google Flights / Amazon / juicer stay in Related discussion of this same missing honesty/advice layer

- time: 309610–521800 ms / 00:05:09–00:08:41
- what they said: “This is the intelligence that is being codified here. This is where the sections will be made.” Biggest saving = combine wife’s income, property in her name, PAN (ASR “fan card”). “It is not just comparing our lives. We are lawyers for you. How to squeeze the bank.” Then “This is fine. Let them do what they want” about the existing form, “And here only, we have implemented three things,” CIBIL 720–780 best offer, “first fill the form … Give me the best.”
- what they did: idle through end
- what was on screen: still only form + table
- therefore: they accept the comparison UI as a shell and still treat the missing sections / “give me the best” as the product hole. Next recording opens “this feature needs to be built.”

## Pinpoint

On Explore banks (`explore-banks.html`, title Explore banks – Shroffin), the on-screen object is the Loan inputs form plus the Bank options table. They said the intelligence tool they had just described is not this UI: it cannot simply be dumped here, they do not want a second interface either, and the page never shows rate-honesty, three pre-search tips, spouse/property saving sections, or a best-offer answer after the form. They clicked Self-employed while talking about self-employed tips; the screenshot only highlights that toggle. They cared because they do not want to “scam” the user the way Amazon sales do, and because a user who fills the form wants “give me the best,” not to sit and watch a table.

## Related discussion (not the issue itself)

- Google Flights: “Prices for this flight is low at this moment” vs “These prices are high for this time. They are unlikely to go down.” One speaker calls that a competitive advantage and “we don't get scammed.” The other: when they say prices are low, “I feel like I am being fooled.”
- Juicer message (ASR “Cove Air Bufa” / “Cove Air Bufa company”): sale price plus a year-long “we will double the difference” promise they do not trust.
- Amazon: hype prices before a sale, fake discount, Prime Day “you will never get the same sales,” they still plan spend then watch prices drop later — “making a fool out of the customer.”
- Codifying sections: biggest saving; combine wife’s income; property in wife’s name; “certificate of going home”; PAN card printed here (ASR “fan card”).
- “We are lawyers for you. How to squeeze the bank.” Not just comparing loans (ASR “our lives”).
- Feature is a one-day AI job; “Engineering is not a problem. Product is the problem.” No need of CTO; product vs engineering verticals. Off-topic company talk attached to this missing product, not a separate site bug.
- “This is fine. Let them do what they want” = keep the DIY form; still add the three things so people see how much they get. CIBIL 720–780 as the band for the best offer.
- User story: fill the form first; “You don't know anything. Give me the best.”

## Chronology in this recording

- 00:00:00–00:00:28 (idle, screenshots/0000–0002): different tool; cannot just put “the one we just described” here; or put it here; no second interface.
- 00:00:22 focus Monthly income; 00:00:23–00:00:24 scroll; screenshot/0003 shows Canara Bank row.
- 00:00:28–00:01:22: suggest beside the search (1 Lakh vs 1.25 Lakh); Google Flights honesty; “we think it's okay.”
- 00:01:35–00:02:03: three tips before search; income “not more than 20,000” (they question “20,000?”); self-employed / six-month salary.
- 00:02:03 (t=123975): click Self-employed. screenshot/0015+ show Self-employed selected; table unchanged.
- 00:02:14–00:02:22: bank rates differ, two options.
- 00:02:25–00:04:55: Google Flights distrust; juicer; Amazon/Prime Day. Idle, identical screenshots 0016–0061.
- 00:05:09–00:06:06: intelligence to be codified in sections here; lawyers / squeeze the bank.
- 00:06:19–00:07:19: feature vs product/CTO (related).
- 00:07:43–00:08:41: form is “fine”; three things here; 720–780 best offer; fill form; “Give me the best.” Unfinished — next folder continues the feature.

## Cross-recording continuation

Continues from `wb-rec-260815-2206`. That session ended on the same Explore banks page. Last speech: empty place for lawyer-style hacks (raise CIBIL, loan in wife’s/husband’s name, show salary as self-employed); “But this place is empty”; “Do you know what the problem is? The things below, they get approximated.” Last screenshots 0047–0051: same form (Salaried) and the bank table. This recording’s first line (“different tool … we can't just put it here”) is that empty-slot talk continuing.

Continues into `wb-rec-260815-2222`. First speech: “Approximately, we have seen that this feature needs to be built.” Same URL, first screenshots 0000–0004 already show Self-employed (state left from this recording’s click). They then debate not labelling the feature as AI. Write only this folder’s slice here.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json`: id `820288e7-0391-48c1-ae98-6c895d38b144`, start_url explore-banks.html, 2026-08-15T16:43:16.850Z–16:52:07.526Z, duration_ms 530676, events_count 67, screenshots_count 62, viewport 1366×768, mic true. Used: timeline_alignment, supports_issue.
- `audio.srt`: timed cues 1–205; primary speech clock for quotes above. Used: supports_issue, related_discussion, timeline_alignment.
- `audio.vtt`: same cue family as srt (WEBVTT). Used: timeline_alignment.
- `audio.tsv`: start/end ms + text; 0–1260 “Bro, we need to make a different tool.”; 123975-aligned self-employed lines; 520800–521800 “Give me the best.” Used: timeline_alignment, supports_issue.
- `audio.lrc`: lyric timestamps matching srt. Used: timeline_alignment.
- `audio.text`: untimed transcript of the same session. Used: timeline_alignment.
- `audio.txt`: `[mm:ss.mmm]` dump, same words as srt. Used: timeline_alignment.
- `audio_sentences.txt`: collapsed sentences; “we can't just put it here”; Google Flights; three tips; lawyers. Used: timeline_alignment.
- `audio.json`: 205 segments, language tagged `mr` (ignore), word probabilities; low-prob “Bro,” / “fan card” / “Cove Air Bufa”. Full `text` field matches the joined issue. Used: supports_issue, asr_conflict. Status: fully_read_chunked.
- `audio.webm`: 8541598-byte WebM mic. Cannot listen. Used: checked_no_extra_signal. Status: binary_audio_untranscribed_use_text_artifacts.
- `events.json`: landmark_snapshot t=184 Explore banks; focus Monthly income t=22269; scroll t=23120/24725; focus+click Self-employed t=123974/123975; remaining idle. Used: supports_issue, timeline_alignment.
- `pages.json`: title Explore banks – Shroffin; headings Explore banks. / Loan inputs / Bank options; Occupation Salaried/Self-employed actions. Used: supports_issue (names the object).
- `tabs.json`: one tab explore-banks.html entered_at 1786812196850 left_at 1786812727073. Used: timeline_alignment.
- `console.json`: `[]`. Used: checked_no_extra_signal.
- `replay.spec.ts`: goto explore-banks.html; click Self-employed locator; long idle comments. Used: supports_issue, timeline_alignment.
- `index.html`: player shell; inlined manifest id/url/times, events including Self-employed click, 62 screenshot index rows. No extra discussion. Used: timeline_alignment. Status: player_shell_with_inlined_json_fully_read.
- `viewer.js`: 32334-byte generic Workbooks player. Used: checked_no_extra_signal. Status: player_chrome_fully_read_confirmed.
- `viewer.css`: 17895-byte generic player CSS. Used: checked_no_extra_signal. Status: player_chrome_fully_read_confirmed.
- `screenshots/index.json`: 62 shots, all explore-banks.html; 0000 t=186 start; 0015 t=124241 (matches Self-employed click); mask_rects over rate column. Used: timeline_alignment, supports_issue.
- `screenshots/0000.jpg` (t=186): Explore banks form, Salaried, table headers only. Used: supports_issue.
- `screenshots/0001.jpg`–`0002.jpg` (t=8186, 16241): byte-identical pair; same form, Salaried. Used: timeline_alignment.
- `screenshots/0003.jpg` (t=24241): after scroll; Canara Bank Housing loan ₹5,400 / 20 yrs / ₹48 EMI; Salaried. Used: supports_issue.
- `screenshots/0004.jpg`–`0014.jpg` (t=34241–116241): identical hash group; Salaried + Canara row while they talk Google Flights and three tips. Used: supports_issue, related_discussion.
- `screenshots/0015.jpg` (t=124241): Self-employed selected right after the click; still no tips UI. Used: supports_issue.
- `screenshots/0016.jpg`–`0061.jpg` (t=134240–526240): identical hash group; Self-employed + Canara row for the rest of the talk (Amazon, sections, give me the best). Used: supports_issue, related_discussion, timeline_alignment.

## ASR notes

Transcripts agree on the spine (different tool, cannot put it here, no two interfaces, Google Flights, three tips, self-employed, intelligence/sections, give me the best). Conflicts resolved by screen+click:

- audio.json `language: "mr"` is wrong; speech is English (and Hindi/English mix). Do not trust language.
- “1 Lakh” / “1.25 Lakh” vs “1.25 Lakh”: screen Monthly income is ₹1,00,000, so lakh amounts are about the search inputs, not a new page.
- “20,000?” — they themselves question the figure; keep raw ASR; do not invent 2,00,000.
- “fan card” / “fan card printed here”: screenshot has no card UI; context is wife + property → ASR likely PAN card. Quoted raw; pinpoint uses (ASR likely meant: PAN card).
- “comparing our lives”: likely “loans”; quoted raw.
- “Cove Air Bufa company”: garbled juicer-brand name; related discussion only.
- “certificate of going home”: likely property/home in the wife’s name; quoted raw.
- “right-right”: likely “right here” beside the result; they also say “Suppose it's right here.”

## JSON

```json
{
  "issue_id": "wb-rec-260815-2213/issue-01-explore-banks-missing-intelligence-advice-layer",
  "issue_title": "Explore banks shows only a form and a bank table; the advice layer they described is missing",
  "folder": "wb-rec-260815-2213",
  "sequence_index": 15,
  "recording_id": "820288e7-0391-48c1-ae98-6c895d38b144",
  "recording_started_at": "2026-08-15T16:43:16.850Z",
  "recording_ended_at": "2026-08-15T16:52:07.526Z",
  "duration_ms": 530676,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Explore banks eligibility form (Monthly income, Occupation Salaried/Self-employed) plus the Bank options table (Canara Bank Housing loan row, Overview / Apply once)",
  "pinpoint": "On Explore banks they said the advice tool they had just described cannot live as this form-plus-table alone: the page never shows Google-Flights-style honesty about rates, pre-search tips, or a ‘give me the best’ answer, so they debated putting that intelligence here versus elsewhere, then clicked Self-employed while describing occupation tips that are not on screen.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2206",
  "continued_into_folder": "wb-rec-260815-2222",
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","tabs.json","viewer.css","viewer.js","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg","screenshots/0052.jpg","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.jpg","screenshots/0056.jpg","screenshots/0057.jpg","screenshots/0058.jpg","screenshots/0059.jpg","screenshots/0060.jpg","screenshots/0061.jpg"],
  "speech_clock": ["00:00:00,000-00:00:28,480","00:00:28,920-00:01:38,720","00:01:35,480-00:02:22,220","00:02:25,700-00:04:55,800","00:05:09,610-00:06:06,970","00:07:43,660-00:08:41,800"],
  "event_t_ms": [184, 22269, 23120, 24725, 123974, 123975],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0015.jpg","screenshots/0016.jpg"],
  "tags": ["missing","product","copy","trust","interaction","data"],
  "quotes": [
    {"clock": "00:00:00,000", "text": "Bro, we need to make a different tool.", "artifact": "audio.srt"},
    {"clock": "00:00:05,800", "text": "The one we just described, we can't just put it here.", "artifact": "audio.srt"},
    {"clock": "00:00:22,620", "text": "We don't need a new interface.", "artifact": "audio.srt"},
    {"clock": "00:00:24,780", "text": "We don't need two interfaces.", "artifact": "audio.srt"},
    {"clock": "00:00:43,040", "text": "How does it work in Google Flights?", "artifact": "audio.srt"},
    {"clock": "00:01:35,480", "text": "There are three tips here.", "artifact": "audio.srt"},
    {"clock": "00:05:09,610", "text": "This is the intelligence that is being codified here.", "artifact": "audio.srt"},
    {"clock": "00:06:01,430", "text": "We are lawyers for you.", "artifact": "audio.srt"},
    {"clock": "00:08:40,800", "text": "Give me the best.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 123975, "name": "Self-employed", "css": "form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(1) > div > button:nth-of-type(2)"}
  ],
  "related_discussion_present": true
}
```
