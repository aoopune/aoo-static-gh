# Tell users which property figure to enter: registrar agreement vs bank valuation

Explain in helper or (i) which rupee amount to type: recent purchase → registrar/sale agreement value; otherwise bank’s independent valuation (usually below market) → enter a conservative figure.
They asked “How does the loan get affected? Which value should I set?” and walked an 8-crore example where agreement amount may differ from felt market value.
Separate **agreement** and **registry** — two different words; “agreement value” alone leaves “which agreement?”
Use (i) for “official property value” detail if the label stays short (`solution-03`).

---
solution_id: "wb-rec-260815-2116/solution-04-property-value-guidance-registrar-vs-valuation"
solution_title: "Tell users which property figure to enter: registrar agreement vs bank valuation"
folder: "wb-rec-260815-2116"
sequence_index: 9
recording_id: "cff0d45a-1eff-4415-a374-98232f3208a8"
recording_started_at: "2026-08-15T15:46:08.706Z"
recording_ended_at: "2026-08-15T15:55:10.521Z"
duration_ms: 541815
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Property agreement value* input (#hlc-property-value) plus About Property agreement value (i)"
for_topic: "Guidance for which property value number to enter on Explore banks — agreement, registry, bank valuation, conservative estimate"
pinpoint: "On Explore banks, teach users which property figure to enter: registrar/sale agreement if recent purchase, otherwise banks’ independent valuation usually below market so use a conservative value; distinguish agreement vs registry; put ‘official property value’ detail in (i) if needed."
kind: ["proposed_change", "idea", "user_convenience"]
decidedness: "brainstorm"
basis: "Wrong figure changes loan shown; users think in market value but banks use agreement/valuation; Indian buyers know agreement and registry as separate ideas."
analog_source: "none"
linked_issue_files: ["issue-03-property-agreement-value-label-too-complex.md", "issue-02-property-helper-sets-ceiling-unknown-in-india.md"]
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-03-property-label-shorter-as-per-agreement.md", "solution-02-rewrite-sets-ceiling-helper-copy-india.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:03:07,470 --> 00:06:50,200"]
event_t_ms: [163878, 165890, 223747, 504861]
screenshot_files: ["screenshots/0039.jpg", "screenshots/0044.jpg", "screenshots/0049.jpg"]
tags: ["trust", "guidance", "copy", "convenience", "india"]
---

## Exact solution (or idea that can also be a solution)

They asked what Property agreement value is **for**: “How does the loan get affected? Which value should I set?” They sketched guidance users need:

1. **Recent purchase:** use value from registrar’s / sale agreement (“If you have a recent purchase, you get the value of your registrar's agreement.”).
2. **Otherwise:** independent loan assessment by banks, usually **less than market value** — “So you put a little conservative value.”
3. **Example:** property feels like 8 crore; agreement may be 8 crore; “the amount on the agreement is white” (declared agreement amount).
4. **Agreement vs registry:** “There are two words. Agreement and registry.” Banks ask both; site must not blur them (“If you just put the agreement value, which agreement?”).
5. **Official value / (i):** “The official property value.” / “Should I click on i?” — (i) is where longer explanation can live if the label is shortened.

This is content for helper/(i)/Learn more — separate from renaming the label (`solution-03`) and from dropping Sets/ceiling (`solution-02`).

## What this is for

User job: enter the rupee figure that drives loan-against-property on Explore banks. Linked issues: ambiguous label (`issue-03`) and unhelpful helper wording (`issue-02`).

## Why they said it that way

Users default to market value; banks lend against agreement/valuation. Without guidance they will type the wrong number and distrust results. Agreement and registry are distinct in Indian property purchase talk.

## How the files join (required)

- **187470–410200 ms (00:03:07–00:06:50)** — said: “Which value should I set?” / registrar agreement vs independent assessment / conservative value / 8 crore example / “Agreement and registry” / “Official property value” / “Should I click on i?” (`audio.srt`)
- **163878–504861 ms** — did: focus `#hlc-property-value`; open About Property agreement value while asking about official value (`events.json`)
- **seeing:** `screenshots/0039.jpg` — helper still says sale agreement price; `0044.jpg` — ₹ 62,50,000 in box
- **page/object:** Property agreement value* field + (i) on Explore banks
- **therefore the finding is:** add clear guidance on which number to enter (registrar/agreement vs bank valuation, agreement vs registry), likely split between short label and (i) body.

## Pinpoint

On Explore banks, they want Shroffin to teach which property value belongs in the box — registrar agreement for new purchases, conservative bank-assessed figure otherwise — and to spell out agreement vs registry so users do not enter market value by mistake.

## Related discussion (not the solution itself)

- “The agreement value makes sense. Otherwise, who would take the registry?” — validates focusing on agreement value for this field.
- “You need to keep the property value here” — field stays; guidance improves.
- Label shortening debate (`solution-03`) runs in parallel; this file is **what to explain**, not the shortest label string.

## Chronology in this recording

- 00:03:07–00:03:21 — which value; loan effect.
- 00:03:53–00:04:08 — registrar agreement OR independent assessment; conservative value.
- 00:03:36–00:04:21 — 8 crore example; agreement amount.
- 00:06:16–00:06:50 — official property value; agreement vs registry; (i) question.

## Cross-recording continuation

Standalone. Next folder CIBIL — no carry of property-value guidance.

## Evidence by file (every raw recorder file in the folder — no omissions)

Helper issues: `issue-03`, `issue-02` — `cross_link`.

Raw files: ledger lists all; speech block 187470–410200 ms across all audio artifacts; property field/(i) clicks in `events.json`/`replay.spec.ts`.

## ASR notes

- “the amount on the agreement is white” kept raw — likely “white money” / declared agreement amount in Indian property talk.
- “Independent loan assessment” matches bank valuation practice they describe.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2116/solution-04-property-value-guidance-registrar-vs-valuation",
  "solution_title": "Tell users which property figure to enter: registrar agreement vs bank valuation",
  "folder": "wb-rec-260815-2116",
  "sequence_index": 9,
  "recording_id": "cff0d45a-1eff-4415-a374-98232f3208a8",
  "recording_started_at": "2026-08-15T15:46:08.706Z",
  "recording_ended_at": "2026-08-15T15:55:10.521Z",
  "duration_ms": 541815,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Property agreement value field and (i)",
  "for_topic": "Which property value number to enter",
  "pinpoint": "Guide registrar agreement vs bank valuation; separate agreement and registry; use (i) for official value detail.",
  "kind": ["proposed_change", "idea", "user_convenience"],
  "decidedness": "brainstorm",
  "basis": "Users must not enter market value when banks use agreement/valuation.",
  "analog_source": "none",
  "linked_issue_files": ["issue-03-property-agreement-value-label-too-complex.md", "issue-02-property-helper-sets-ceiling-unknown-in-india.md"],
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": ["solution-03-property-label-shorter-as-per-agreement.md"],
  "source_files_used": ["audio.srt", "events.json", "screenshots/0039.jpg"],
  "speech_clock": ["00:03:07,470 --> 00:06:50,200"],
  "event_t_ms": [165890, 504861],
  "screenshot_files": ["screenshots/0039.jpg"],
  "tags": ["guidance", "trust"],
  "quotes": [
    {"clock": "00:03:18,650", "text": "Which value should I set?", "artifact": "audio.srt"},
    {"clock": "00:03:53,750", "text": "If you have a recent purchase, you get the value of your registrar's agreement.", "artifact": "audio.srt"},
    {"clock": "00:04:06,950", "text": "So you put a little conservative value.", "artifact": "audio.srt"},
    {"clock": "00:06:48,120", "text": "Agreement and registry.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 165890, "name": "About Property agreement value", "css": "second-field (i)"}],
  "related_discussion_present": true
}
```
