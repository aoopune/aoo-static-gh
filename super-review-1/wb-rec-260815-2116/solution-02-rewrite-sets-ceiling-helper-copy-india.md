# Rewrite eligibility helpers: drop “Sets” opener and “ceiling” for India

Change the helper sentences under Loan inputs so they no longer start with “Sets…” and do not use “ceiling.”
They said nobody in India knows “ceiling,” and “Sets the ceiling on the loan against this house” fails the same way Monthly income’s “Sets…” line does.
They called it a loop to change: “Our requirements have been captured in this. So we have to change the loop.”
This applies to the Property agreement value helper while they were on that (i) tooltip.

---
solution_id: "wb-rec-260815-2116/solution-02-rewrite-sets-ceiling-helper-copy-india"
solution_title: "Rewrite eligibility helpers: drop “Sets” opener and “ceiling” for India"
folder: "wb-rec-260815-2116"
sequence_index: 9
recording_id: "cff0d45a-1eff-4415-a374-98232f3208a8"
recording_started_at: "2026-08-15T15:46:08.706Z"
recording_ended_at: "2026-08-15T15:55:10.521Z"
duration_ms: 541815
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Helper under Property agreement value: “Sets the ceiling on the loan against this house. Use the sale agreement price.”"
for_topic: "Property agreement value helper wording (and shared “Sets…” helper pattern) on Explore banks for Indian users"
pinpoint: "On Explore banks, rewrite the Property agreement value helper (and the shared helper pattern) so it does not start with “Sets” and does not use “ceiling,” because they said that word does not work in India and the requirements captured in these helpers need a rewritten loop."
kind: ["proposed_change", "company_thinking", "user_convenience"]
decidedness: "decided"
basis: "Indian users do not know “ceiling”; repeated “Sets…” openers on eligibility helpers are a systemic copy loop to fix, not one line."
analog_source: "none"
linked_issue_files: ["issue-02-property-helper-sets-ceiling-unknown-in-india.md", "issue-01-monthly-income-helper-sets-does-not-explain-why.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-01-monthly-income-helper-explain-why-not-sets.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:02:32,160 --> 00:03:06,950"]
event_t_ms: [145290, 145292, 156537, 165890]
screenshot_files: ["screenshots/0026.jpg", "screenshots/0039.jpg", "screenshots/0089.jpg"]
tags: ["copy", "trust", "india", "helper", "company"]
---

## Exact solution (or idea that can also be a solution)

After Monthly income, they opened About Property agreement value and read: “Sets the ceiling on the loan against this house. Use the sale agreement price.” They said “No one in India knows about ceilings,” tied it to “Sets the ceilings,” and then: “This sentence starts with sets. And the word ceiling doesn't work in India.” They also said “Our requirements have been captured in this. So we have to change the loop” — treating the helper copy pattern as something to rewrite across eligibility fields, not a one-off typo. The direction is plain-language helper copy without “Sets…” openers and without “ceiling” for Indian users.

## What this is for

The Property agreement value helper on Explore banks (`#hlc-property-value` field). Issue `issue-02-property-helper-sets-ceiling-unknown-in-india.md` is the defect; this is the rewrite direction. Cross-links `issue-01` for the same “Sets” pattern on Monthly income (`solution-01`).

## Why they said it that way

Eligibility helpers should teach in words customers already use. “Ceiling” is jargon they said fails in India. Starting every helper with “Sets…” repeats a broken pattern they already rejected on Monthly income.

## How the files join (required)

- **152160–186950 ms (00:02:32–00:03:06)** — said: “Ceiling won the loan against this house.” / “No one in India knows about ceilings.” / “So we have to change the loop.” / “This sentence starts with sets. And the word ceiling doesn't work in India.” (`audio.srt`)
- **145290+ ms** — did: focus/click About Property agreement value (`events.json` t=145290, 165890)
- **seeing:** `screenshots/0039.jpg` — tooltip “Sets the ceiling on the loan against this house. Use the sale agreement price. Learn more”
- **page/object:** `pages.json` Property agreement value* helper text
- **therefore the finding is:** rewrite helper copy to drop “Sets” opener and “ceiling,” using India-friendly wording that still says the number caps loan against the house.

## Pinpoint

On Explore banks, at the Property agreement value (i) tooltip, they decided the helper loop must change: no “Sets…” sentence start, no “ceiling” word for India, because users will not understand what the field does to their loan limit.

## Related discussion (not the solution itself)

- “All the properties are in this house” / “Let's talk about it” — they stay on this field after reading the helper.
- Immediately after, they pivot to the **label** “Property agreement value” (`solution-03`, `issue-03`) — separate object from this helper sentence.
- Monthly income helper uses the same “Sets…” pattern (`solution-01`).

## Chronology in this recording

- 00:02:25 — About Property agreement value click (t=145290).
- 00:02:32–00:02:58 — ceiling unknown in India; change the loop.
- 00:03:01–00:03:06 — sentence starts with sets; ceiling doesn't work in India.
- 00:03:07+ — label/value debate begins.

## Cross-recording continuation

Standalone. Prev folder did not discuss this helper. Next folder starts on CIBIL, not property helper.

## Evidence by file (every raw recorder file in the folder — no omissions)

Helper issue files: `issue-02-*` — `cross_link`; `issue-01-*` — `cross_link` for shared Sets pattern.

Raw recorder files: full list in `_solution-coverage-ledger.json`; key joins use `audio.srt` cues 11–20, `events.json` property (i) clicks, `pages.json` helper string, `screenshots/0026.jpg`–`0039.jpg`/`0089.jpg`.

## ASR notes

- “Ceiling won the loan against this house” — ASR for on-screen “Sets the **ceiling** on the loan against this house.” Screenshot + pages.json used.
- “Sets the ceilings” — plural ASR; they point at the word “Sets” on screen.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2116/solution-02-rewrite-sets-ceiling-helper-copy-india",
  "solution_title": "Rewrite eligibility helpers: drop “Sets” opener and “ceiling” for India",
  "folder": "wb-rec-260815-2116",
  "sequence_index": 9,
  "recording_id": "cff0d45a-1eff-4415-a374-98232f3208a8",
  "recording_started_at": "2026-08-15T15:46:08.706Z",
  "recording_ended_at": "2026-08-15T15:55:10.521Z",
  "duration_ms": 541815,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Property agreement value helper",
  "for_topic": "Property helper Sets/ceiling wording for India",
  "pinpoint": "Rewrite helpers without Sets opener and without ceiling for Indian users.",
  "kind": ["proposed_change", "company_thinking", "user_convenience"],
  "decidedness": "decided",
  "basis": "Ceiling jargon fails in India; Sets pattern is a loop to change.",
  "analog_source": "none",
  "linked_issue_files": ["issue-02-property-helper-sets-ceiling-unknown-in-india.md", "issue-01-monthly-income-helper-sets-does-not-explain-why.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-01-monthly-income-helper-explain-why-not-sets.md"],
  "source_files_used": ["audio.srt", "pages.json", "screenshots/0039.jpg"],
  "speech_clock": ["00:02:32,160 --> 00:03:06,950"],
  "event_t_ms": [145292, 165890],
  "screenshot_files": ["screenshots/0039.jpg"],
  "tags": ["copy", "india", "helper"],
  "quotes": [
    {"clock": "00:02:35,460", "text": "No one in India knows about ceilings.", "artifact": "audio.srt"},
    {"clock": "00:02:57,390", "text": "So we have to change the loop.", "artifact": "audio.srt"},
    {"clock": "00:03:05,250", "text": "And the word ceiling doesn't work in India.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 145292, "name": "About Property agreement value", "css": "second-field (i)"}],
  "related_discussion_present": true
}
```
