# Rename property field to a shorter “as per agreement” label

Replace the label “Property agreement value” with shorter wording that still means the sale-agreement figure, not market value.
They brainstormed “Property value according to the agreement,” “Property value as per agreement,” and accepted a shorter form: “I'll take a small one” / “six characters as per agreement.”
“Property agreement value is complex” — they said it overloads adjectives and users won't know which value to type.
They debated fit on the input box but leaned toward clarity over the current three-word stack.

---
solution_id: "wb-rec-260815-2116/solution-03-property-label-shorter-as-per-agreement"
solution_title: "Rename property field to a shorter “as per agreement” label"
folder: "wb-rec-260815-2116"
sequence_index: 9
recording_id: "cff0d45a-1eff-4415-a374-98232f3208a8"
recording_started_at: "2026-08-15T15:46:08.706Z"
recording_ended_at: "2026-08-15T15:55:10.521Z"
duration_ms: 541815
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Field label “Property agreement value*” on #hlc-property-value"
for_topic: "Property agreement value field label on Explore banks — shorter name that fits the box"
pinpoint: "On Explore banks, rename the property amount field from “Property agreement value” to a shorter label along the lines of property value as per agreement, because they said the current name is complex, overloads adjectives, and they ended leaning to a small “as per agreement” form."
kind: ["proposed_change", "idea", "potential_suggestion"]
decidedness: "leaning"
basis: "Label must fit the input and tell users which rupee figure to enter without stacking adjectives; dropping “agreement” alone would read as market value."
analog_source: "none"
linked_issue_files: ["issue-03-property-agreement-value-label-too-complex.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-04-property-value-guidance-registrar-vs-valuation.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:05:47,430 --> 00:08:59,480"]
event_t_ms: [163878, 215720, 504861, 514561]
screenshot_files: ["screenshots/0034.jpg", "screenshots/0044.jpg", "screenshots/0090.jpg"]
tags: ["copy", "form-label", "convenience"]
---

## Exact solution (or idea that can also be a solution)

On `#hlc-property-value` they rejected the visible label “Property agreement value”: “But the property agreement value is complex. Like we overload adjectives.” They preferred “Property value according to the agreement” / “Property value as per agreement” as easier to parse, even if “according to the agreement, the input box…” adds characters (“Five characters extra mark”). They also said “Then remove the value and put the amount” when debating wording. Near the end they land on “Property is value as per agreement” (ASR grammar) and repeat “Okay, I'll take a small one” / “Six characters as per agreement” — meaning accept a **shorter label** that still signals agreement-value, not market price. Brief “Only the property value?” was rejected because the user still needs “as per agreement.”

## What this is for

The **field label** on Explore banks property amount input — not the helper sentence (`issue-02`) and not the full guidance content (`solution-04`). Issue `issue-03-property-agreement-value-label-too-complex.md` names the defect.

## Why they said it that way

Users must know which number to type at a glance. “Property agreement value” stacks nouns/adjectives; “agreement value” alone is ambiguous (“which agreement?”). They want copy that reads fast on a narrow label row.

## How the files join (required)

- **347430–539480 ms (00:05:47–00:08:59)** — said: “property agreement value is complex” / “Property value according to the agreement is easy” / “As per agreement” / “I'll take a small one” / “Six characters as per agreement” (`audio.srt`)
- **163878–514561 ms** — did: clicks on `#hlc-property-value` and label span; About Property agreement value (i) while debating official value (`events.json`)
- **seeing:** `screenshots/0044.jpg`, `0090.jpg` — label “Property agreement value” with ₹ 62,50,000 focused
- **page/object:** `pages.json` label “Property agreement value*”
- **therefore the finding is:** rename to shorter “as per agreement” style label, leaning decided at end of session.

## Pinpoint

On Explore banks, while clicking the property label and input, they chose direction for a simpler field name — property value as per agreement (short form) — because “Property agreement value” is too complex for the box and for users picking agreement vs market vs registry figures.

## Related discussion (not the solution itself)

- “Should I click on i?” — (i) may carry detail (`solution-04`) but does not replace a clear label.
- Agreement vs registry are two words — label debate sits next to which-number guidance.
- Last clicks on About Age while still saying “small one” — move-on gesture, not Age copy work.

## Chronology in this recording

- 00:05:47 — “property agreement value is complex.”
- 00:06:59–00:07:18 — “Property value according to the agreement is easy”; “As per agreement.”
- 00:08:12–00:08:59 — “Property is value as per agreement”; repeated “I'll take a small one.”

## Cross-recording continuation

Standalone; naming debate finishes in this recording. Next recording wb-rec-260815-2125 starts on CIBIL dropdown — no continuation of this label.

## Evidence by file (every raw recorder file in the folder — no omissions)

Helper: `issue-03-*` — `cross_link`.

Raw files: see ledger; primary speech 187470–539480 ms in `audio.tsv`; label clicks in `events.json`; visible label in screenshots 0034/0044/0090.

## ASR notes

- “Property is value as per agreement” kept raw — intended shape is “Property value as per agreement.”
- “I'll take a small one” = shorter label wording, not smaller loan amount — clicks stay on property label/field.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2116/solution-03-property-label-shorter-as-per-agreement",
  "solution_title": "Rename property field to a shorter “as per agreement” label",
  "folder": "wb-rec-260815-2116",
  "sequence_index": 9,
  "recording_id": "cff0d45a-1eff-4415-a374-98232f3208a8",
  "recording_started_at": "2026-08-15T15:46:08.706Z",
  "recording_ended_at": "2026-08-15T15:55:10.521Z",
  "duration_ms": 541815,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Property agreement value* label",
  "for_topic": "Shorter property field label",
  "pinpoint": "Rename to property value as per agreement (short form); current label too complex.",
  "kind": ["proposed_change", "idea", "potential_suggestion"],
  "decidedness": "leaning",
  "basis": "Fit on box + user must know agreement figure not market.",
  "analog_source": "none",
  "linked_issue_files": ["issue-03-property-agreement-value-label-too-complex.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-04-property-value-guidance-registrar-vs-valuation.md"],
  "source_files_used": ["audio.srt", "events.json", "screenshots/0090.jpg"],
  "speech_clock": ["00:05:47,430 --> 00:08:59,480"],
  "event_t_ms": [163878, 514561],
  "screenshot_files": ["screenshots/0090.jpg"],
  "tags": ["copy", "form-label"],
  "quotes": [
    {"clock": "00:05:47,430", "text": "But the property agreement value is complex.", "artifact": "audio.srt"},
    {"clock": "00:07:09,860", "text": "Property value according to the agreement is easy.", "artifact": "audio.srt"},
    {"clock": "00:08:18,010", "text": "Six characters as per agreement.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 163878, "name": "Property agreement value*", "css": "#hlc-property-value"}],
  "related_discussion_present": true
}
```
