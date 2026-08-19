# Label “Property agreement value” is too complex for the box

On Explore banks, the second box is labelled Property agreement value.
They said that name is complex: it stacks adjectives, and a user will not know which value to type.
They spent the rest of the recording trying shorter names (property value as per agreement, official property value) and whether to use the (i).
They ended leaning to a shorter “as per agreement” form, not the current three-word label.

---
issue_id: "wb-rec-260815-2116/issue-03-property-agreement-value-label-too-complex"
issue_title: "Label “Property agreement value” is too complex for the box"
folder: "wb-rec-260815-2116"
sequence_index: 9
recording_id: "cff0d45a-1eff-4415-a374-98232f3208a8"
recording_started_at: "2026-08-15T15:46:08.706Z"
recording_ended_at: "2026-08-15T15:55:10.521Z"
duration_ms: 541815
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Field label “Property agreement value*” on #hlc-property-value (placeholder 62,50,000) plus About Property agreement value (i)"
pinpoint: "On Explore banks, the label “Property agreement value” on the property box is too complex: they said it overloads adjectives, a user will not know which value (agreement vs registry vs market) to enter, and they wanted a simpler name such as property value as per agreement."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-02-property-helper-sets-ceiling-unknown-in-india.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/0084.jpg", "screenshots/0085.jpg", "screenshots/0086.jpg", "screenshots/0087.jpg", "screenshots/0088.jpg", "screenshots/0089.jpg", "screenshots/0090.jpg", "screenshots/0091.jpg", "screenshots/0092.jpg", "screenshots/0093.jpg", "screenshots/0094.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:03:07,470 --> 00:08:59,480"]
event_t_ms: [163875, 163877, 163878, 214814, 215719, 215720, 230333, 230335, 294455, 294457, 331906, 331907, 365596, 365597, 413978, 413980, 452746, 452747, 504861, 514559, 514561]
screenshot_files: ["screenshots/0034.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0049.jpg", "screenshots/0064.jpg", "screenshots/0074.jpg", "screenshots/0080.jpg", "screenshots/0090.jpg"]
tags: ["copy", "trust", "form-label"]
---

## Exact issue

On Explore banks, the second Loan inputs box is labelled “Property agreement value*” (`#hlc-property-value`, placeholder 62,50,000). After they finished the helper’s “ceiling” line, they asked what that name actually wants.

audio.srt 00:03:07: “What I want to know is that property agreement value… How does the loan get affected? Which value should I set?” Later: “But the property agreement value is complex. Like we overload adjectives.” And: “If you just put the agreement value, which agreement?” They preferred “Property value according to the agreement” / “as per agreement,” and worried the longer phrase would not fit the input.

The object is the **label**, not the helper sentence (issue-02).

## How the files join (required)

- time: 163875–514561 ms (speech 00:03:07–00:08:59)
- what they said (audio.srt): “property agreement value is complex” / “overload adjectives” / “which agreement?” / “Property value according to the agreement is easy” / “as per agreement” / “I'll take a small one”
- what they did: click the label, `#hlc-property-value`, and About Property agreement value many times (events.json; replay.spec.ts getByLabel / #hlc-property-value)
- what was on screen: 0034.jpg and later frames show the label “Property agreement value” and a focused ₹ 62,50,000 box; 0039.jpg/0051.jpg/0089.jpg still show the (i) tooltip while they debate the name
- what page/object: pages.json form field label “Property agreement value*”
- therefore the actual issue is: that label is too complex for a user to know which rupee figure to type.

## Pinpoint

On Explore banks, the visible name “Property agreement value” on the property box is the defect. They said it is complex and overloaded, that “agreement value” alone is ambiguous (which agreement? agreement vs registry), and that the user needs a plain name for the official / sale-agreement amount. They cared because the wrong figure changes how much loan the table can show.

## Related discussion (not the issue itself)

- Recent purchase: use registrar/sale agreement; otherwise banks do their own valuation, usually below market, so enter a conservative figure.
- Example: they feel the property is 8 crore; agreement may be 8 crore; “the amount on the agreement is white.”
- Agreement vs registry: two different words; if you only write “agreement value,” which agreement?
- “Official property value” / “Should I click on i?” — they treat (i) as a possible place to explain official vs market, not as a substitute for a clear label.
- Character count: “as per agreement” is about five or six extra letters; they still wanted it shorter on the box (“I'll take a small one”).
- “Only the property value?” — they briefly asked if dropping “agreement” is enough; they decided the user still needs “as per agreement” so it is not market value.
- Last clicks on About Age (t=528374) happen while they are still saying “I'll take a small one” about this label; next recording starts on CIBIL, not Age. No Age issue in this folder.

## Chronology in this recording

- 00:03:07–00:03:21 — they name Property agreement value and ask which value and how the loan is affected.
- 00:03:36–00:05:00 — 8 crore example; registrar vs independent valuation; agreement amount is white; “agreement value makes sense” vs registry.
- 00:05:09–00:05:53 — keep property value here; “property agreement value is complex”; overload adjectives. Clicks on #hlc-property-value t=163878, 215720.
- 00:06:04–00:06:50 — must show which property value; official; “Should I click on i?”; bank asks agreement vs registry.
- 00:06:55–00:07:22 — which agreement; “property value according to the agreement is easy”; “as per agreement”; five extra characters.
- 00:07:33–00:08:16 — still complex; they land on “Property is value as per agreement.”
- 00:08:16–00:08:59 — “I'll take a small one” / “six characters as per agreement” / repeat the two candidate names. Field still focused (0090.jpg). Age (i) at 00:08:48 is them moving on.

## Cross-recording continuation

Standalone as a product issue. Previous folder did not discuss this label. They finish the naming debate in this recording (“I'll take a small one”). Next folder wb-rec-260815-2125 starts on CIBIL exact score vs dropdown, not this label.

## Evidence by file (every file in the folder — no omissions)

- audio.json — Whisper 187.47–539.48s label debate. supports_issue
- audio.lrc — LRC 03:07–end label lines. timeline_alignment
- audio.srt — Cues 21–116: Property agreement value complex; as per agreement. supports_issue
- audio.text — Untimed prose of label debate. supports_issue
- audio.tsv — ms 187470–539480. timeline_alignment
- audio.txt — Clocked dump label stretch. timeline_alignment
- audio.vtt — VTT label cues. timeline_alignment
- audio.webm — Same webm; text used for label quotes. checked_no_extra_signal
- audio_sentences.txt — Same label sentences. supports_issue
- console.json — Empty []. checked_no_extra_signal
- events.json — Label/field/i clicks t=145290–514561; Age i at 528374 is move-on. supports_issue
- index.html — Same player shell. timeline_alignment
- manifest.json — Same session metadata. timeline_alignment
- pages.json — Label text “Property agreement value”. supports_issue
- replay.spec.ts — Replays property label/input clicks then Age (i). supports_issue
- screenshots/0000.png — t=188 reason=start; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0001.png — t=7478 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0002.jpg — t=16188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0003.jpg — t=24189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0004.jpg — t=32189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0005.jpg — t=42188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0006.jpg — t=45354 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0007.jpg — t=51504 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0008.jpg — t=52048 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0009.jpg — t=60189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0010.jpg — t=68189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0011.jpg — t=70091 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0012.jpg — t=71421 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0013.jpg — t=71958 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0014.jpg — t=80189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0015.jpg — t=90188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0016.jpg — t=98189 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0017.jpg — t=100748 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0018.jpg — t=101696 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0019.jpg — t=102309 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0020.jpg — t=102949 reason=interaction; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0021.jpg — t=112188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0022.jpg — t=120188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0023.jpg — t=128188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0024.jpg — t=136188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0025.jpg — t=144188 reason=periodic; Explore banks Loan inputs. Earlier monthly-income work. timeline_alignment
- screenshots/0026.jpg — t=145691 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0027.jpg — t=146720 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0028.jpg — t=147349 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0029.jpg — t=156188 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0030.jpg — t=156940 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0031.jpg — t=157595 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0032.jpg — t=159252 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0033.jpg — t=160083 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0034.jpg — t=164281 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0035.jpg — t=166295 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0036.jpg — t=167016 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0037.jpg — t=170962 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0038.jpg — t=171952 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0039.jpg — t=180187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0040.jpg — t=188188 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0041.jpg — t=196188 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0042.jpg — t=206188 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0043.jpg — t=215217 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0044.jpg — t=216123 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0045.jpg — t=217119 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0046.jpg — t=224149 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0047.jpg — t=224817 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0048.jpg — t=225573 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0049.jpg — t=230736 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0050.jpg — t=231726 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0051.jpg — t=240187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0052.jpg — t=248188 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0053.jpg — t=256188 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0054.jpg — t=266188 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0055.jpg — t=270529 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0056.jpg — t=276536 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0057.jpg — t=286187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0058.jpg — t=294187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0059.jpg — t=294857 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0060.jpg — t=298196 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0061.jpg — t=308187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0062.jpg — t=316187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0063.jpg — t=326187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0064.jpg — t=332315 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0065.jpg — t=342187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0066.jpg — t=352187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0067.jpg — t=362187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0068.jpg — t=366004 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0069.jpg — t=374186 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0070.jpg — t=382186 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0071.jpg — t=390103 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0072.jpg — t=398185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0073.jpg — t=406186 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0074.jpg — t=414180 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0075.jpg — t=422186 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0076.jpg — t=432187 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0077.jpg — t=442185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0078.jpg — t=450186 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0079.jpg — t=453149 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0080.jpg — t=453973 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0081.jpg — t=456724 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0082.jpg — t=462153 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0083.jpg — t=470185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0084.jpg — t=478185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0085.jpg — t=486185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0086.jpg — t=494185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0087.jpg — t=502185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0088.jpg — t=505263 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0089.jpg — t=514185 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0090.jpg — t=514962 reason=interaction; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0091.jpg — t=524182 reason=periodic; Explore banks Loan inputs. Property label/field/tooltip while they call the name complex. supports_issue
- screenshots/0092.jpg — t=528778 reason=interaction; Explore banks Loan inputs. Age (i) at end while still saying “I'll take a small one” about the label. related_discussion
- screenshots/0093.jpg — t=538178 reason=periodic; Explore banks Loan inputs. Age (i) at end while still saying “I'll take a small one” about the label. related_discussion
- screenshots/0094.jpg — t=539021 reason=interaction; Explore banks Loan inputs. Age (i) at end while still saying “I'll take a small one” about the label. related_discussion
- screenshots/index.json — t used to bind label-focus frames. timeline_alignment
- tabs.json — One tab explore-banks.html. timeline_alignment
- viewer.css — Generic player CSS. checked_no_extra_signal
- viewer.js — Generic player JS. checked_no_extra_signal

## ASR notes

- “Property agreement value” is stable across srt/text and matches the on-screen label and events.json accessible name.
- “according to the agreement” vs they also say “as per agreement” — both kept; screenshot never shows a renamed label, only the current “Property agreement value.”
- “the amount on the agreement is white” kept raw (likely “white money” / declared agreement amount).
- “Should I click on i?” matches them actually clicking About Property agreement value (t=165890, 223747, 297794, 504861).
- “I'll take a small one” / “What small?” — they mean a shorter label, not a smaller loan; they are still clicking the property label, not a size control.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2116/issue-03-property-agreement-value-label-too-complex",
  "issue_title": "Label “Property agreement value” is too complex for the box",
  "folder": "wb-rec-260815-2116",
  "sequence_index": 9,
  "recording_id": "cff0d45a-1eff-4415-a374-98232f3208a8",
  "recording_started_at": "2026-08-15T15:46:08.706Z",
  "recording_ended_at": "2026-08-15T15:55:10.521Z",
  "duration_ms": 541815,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Field label “Property agreement value*” on #hlc-property-value plus About Property agreement value",
  "pinpoint": "On Explore banks, the label “Property agreement value” on the property box is too complex: they said it overloads adjectives, a user will not know which value to enter, and they wanted a simpler name such as property value as per agreement.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-property-helper-sets-ceiling-unknown-in-india.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/0084.jpg", "screenshots/0085.jpg", "screenshots/0086.jpg", "screenshots/0087.jpg", "screenshots/0088.jpg", "screenshots/0089.jpg", "screenshots/0090.jpg", "screenshots/0091.jpg", "screenshots/0092.jpg", "screenshots/0093.jpg", "screenshots/0094.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:03:07,470 --> 00:08:59,480"],
  "event_t_ms": [163875, 163877, 163878, 214814, 215719, 215720, 230333, 230335, 294455, 294457, 331906, 365596, 413980, 452747, 504861, 514561],
  "screenshot_files": ["screenshots/0034.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0049.jpg", "screenshots/0064.jpg", "screenshots/0074.jpg", "screenshots/0080.jpg", "screenshots/0090.jpg"],
  "tags": ["copy", "trust", "form-label"],
  "quotes": [
    {"clock": "00:05:47,430", "text": "But the property agreement value is complex.", "artifact": "audio.srt"},
    {"clock": "00:05:51,570", "text": "Like we overload adjectives.", "artifact": "audio.srt"},
    {"clock": "00:06:55,800", "text": "If you just put the agreement value, which agreement?", "artifact": "audio.srt"},
    {"clock": "00:07:17,400", "text": "As per agreement.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 163878, "name": "Property agreement value*", "css": "#hlc-property-value"},
    {"t_ms": 215720, "name": "Property agreement value*", "css": "#hlc-property-value"},
    {"t_ms": 504861, "name": "About Property agreement value", "css": "second-field (i)"}
  ],
  "related_discussion_present": true
}
```
