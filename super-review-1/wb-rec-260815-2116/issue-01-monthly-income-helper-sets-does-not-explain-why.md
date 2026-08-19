# Monthly income helper starts with “Sets” and does not say why income is asked

On Explore banks, the line under Monthly income says banks use it to set how much loan they can offer, and to use take-home pay, not CTC.
They said that sentence can be better: it is the main eligibility input, but “Sets” does not work.
The line does not answer why the site wants monthly income, or what income does in loan processing.
They were fine with “take-home, not CTC.” The problem is the “Sets…” sentence itself.

---
issue_id: "wb-rec-260815-2116/issue-01-monthly-income-helper-sets-does-not-explain-why"
issue_title: "Monthly income helper starts with “Sets” and does not say why income is asked"
folder: "wb-rec-260815-2116"
sequence_index: 9
recording_id: "cff0d45a-1eff-4415-a374-98232f3208a8"
recording_started_at: "2026-08-15T15:46:08.706Z"
recording_ended_at: "2026-08-15T15:55:10.521Z"
duration_ms: 541815
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Helper under Monthly income: “Sets how much loan banks can offer you. Use take-home, not CTC.” plus About Monthly income (i)"
pinpoint: "On Explore banks, the Monthly income helper “Sets how much loan banks can offer you. Use take-home, not CTC.” is a bad sentence: they said “Sets” does not work and the line does not tell the user why monthly income is asked or how it works in loan processing, even though this is the main eligibility input."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: "true"
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-02-property-helper-sets-ceiling-unknown-in-india.md"]
source_files_used: ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/0084.jpg", "screenshots/0085.jpg", "screenshots/0086.jpg", "screenshots/0087.jpg", "screenshots/0088.jpg", "screenshots/0089.jpg", "screenshots/0090.jpg", "screenshots/0091.jpg", "screenshots/0092.jpg", "screenshots/0093.jpg", "screenshots/0094.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"]
speech_clock: ["00:01:06,120 --> 00:02:18,990"]
event_t_ms: [51102, 51103, 51645, 51913, 69688, 71016, 71554, 100341, 101294, 101907, 102547]
screenshot_files: ["screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0011.jpg", "screenshots/0014.jpg", "screenshots/0017.jpg", "screenshots/0021.jpg"]
tags: ["copy", "trust", "eligibility"]
---

## Exact issue

On Explore banks (`http://localhost:8765/pages/explore-banks.html`), Loan inputs, the required Monthly income field shows helper copy “Sets how much loan banks can offer you. Use take-home, not CTC.” The (i) is About Monthly income. After they opened it, they read that sentence.

audio.srt 00:01:06: “So this sentence, how much loan banks can offer you. You stay home, not CDC.” (ASR for on-screen “Use take-home, not CTC.”) Then: “This sentence can be better. This is your main eligibility criteria.” Then: “The problem with this sentence is that the sets don't work.”

They asked what the helper never answers: “Why do you want my monthly income?” / “Tell me, what does your monthly income work in loan processing?” They accepted take-home vs CTC: “And yes, you can stay home, not CDC.” The defect is the “Sets…” sentence, not the CTC note.

## How the files join (required)

- time: 51102–102547 ms (clicks 00:00:51–00:01:42; speech 00:01:06–00:02:18)
- what they said (audio.srt): “This sentence can be better.” / “This is your main eligibility criteria.” / “The problem with this sentence is that the sets don't work.” / “Why do you want my monthly income?”
- what they did (events.json / replay.spec.ts): repeated click on About Monthly income, first field in `form#hlc-inputs`
- what was on screen: screenshots/0007.jpg–0008.jpg form; 0009.jpg / 0014.jpg / 0021.jpg tooltip “Sets how much loan banks can offer you. Use take-home, not CTC. Learn more”
- what page/object: pages.json Monthly income* helper “Sets how much loan banks can offer you. Use take-home, not CTC.” URL explore-banks.html
- therefore the actual issue is: the Monthly income helper is a “Sets…” line that does not explain why income is asked; they said that wording does not work for this main eligibility field.

## Pinpoint

On Explore banks, the Monthly income helper “Sets how much loan banks can offer you. Use take-home, not CTC.” is badly worded. “Sets” does not work, and a user still has to ask why you want monthly income and what it does in loan processing. They cared because this is the main eligibility input. Take-home-not-CTC was accepted.

## Related discussion (not the issue itself)

- They called this the main eligibility criteria while on this helper, not a second field.
- “And yes, you can stay home, not CDC” = keep take-home, not CTC.
- After “That's what sets how much bank loan works. But…” they moved to the property helper (issue-02). Same “Sets” pattern, different object.

## Chronology in this recording

- 00:00:00–00:00:44 — silent; All in Bank type; Explore banks heading. 0000.png–0006.jpg.
- 00:00:51 — first About Monthly income click (t=51102). 0007.jpg.
- 00:01:06–00:01:17 — they read the helper. Tooltip 0009.jpg / 0014.jpg.
- 00:01:17–00:01:39 — sentence can be better; main eligibility; sets don't work. (i) clicks t=69688, 71016, 71554.
- 00:01:44–00:02:17 — why monthly income; what it does in processing; take-home not CTC is OK.
- 00:02:32 onward — property helper (issue-02).

## Cross-recording continuation

Standalone. wb-rec-260815-2106 ended on overdraft vs savings-bank (“You should explain it like this”), ~44 s gap. First talk here is this helper, not OD. wb-rec-260815-2125 starts on CIBIL (“You are forcing me to tell the exact score”), not this helper.

## Evidence by file (every file in the folder — no omissions)

- audio.json — Whisper segments 66.12–138.99s; “sets” / “CDC”. supports_issue
- audio.lrc — LRC same monthly-income lines. timeline_alignment
- audio.srt — Cues 1–10: sentence can be better; sets don't work; why monthly income. supports_issue
- audio.text — Untimed prose of monthly-income helper critique. supports_issue
- audio.tsv — ms 66120–138990. timeline_alignment
- audio.txt — Clocked dump matching srt monthly stretch. timeline_alignment
- audio.vtt — VTT same as srt monthly cues. timeline_alignment
- audio.webm — 8721461-byte mic; not listened; text used. checked_no_extra_signal
- audio_sentences.txt — Same monthly sentences untimed. supports_issue
- console.json — Empty []. checked_no_extra_signal
- events.json — About Monthly income clicks t=51102–102547. supports_issue
- index.html — Inlined manifest/events/shots; player only. timeline_alignment
- manifest.json — id cff0d45a-1eff-4415-a374-98232f3208a8; explore-banks.html; 541815ms. timeline_alignment
- pages.json — Field Monthly income* helper “Sets how much loan banks can offer you. Use take-home, not CTC.” supports_issue
- replay.spec.ts — Replays first-field (i) clicks. supports_issue
- screenshots/0000.png — t=188 reason=start; Explore banks Loan inputs. Before income talk (filters/form). timeline_alignment
- screenshots/0001.png — t=7478 reason=interaction; Explore banks Loan inputs. Before income talk (filters/form). timeline_alignment
- screenshots/0002.jpg — t=16188 reason=periodic; Explore banks Loan inputs. Before income talk (filters/form). timeline_alignment
- screenshots/0003.jpg — t=24189 reason=periodic; Explore banks Loan inputs. Before income talk (filters/form). timeline_alignment
- screenshots/0004.jpg — t=32189 reason=periodic; Explore banks Loan inputs. Before income talk (filters/form). timeline_alignment
- screenshots/0005.jpg — t=42188 reason=periodic; Explore banks Loan inputs. Before income talk (filters/form). timeline_alignment
- screenshots/0006.jpg — t=45354 reason=interaction; Explore banks Loan inputs. Before income talk (filters/form). timeline_alignment
- screenshots/0007.jpg — t=51504 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0008.jpg — t=52048 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0009.jpg — t=60189 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0010.jpg — t=68189 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0011.jpg — t=70091 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0012.jpg — t=71421 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0013.jpg — t=71958 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0014.jpg — t=80189 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0015.jpg — t=90188 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0016.jpg — t=98189 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0017.jpg — t=100748 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0018.jpg — t=101696 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0019.jpg — t=102309 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0020.jpg — t=102949 reason=interaction; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0021.jpg — t=112188 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0022.jpg — t=120188 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0023.jpg — t=128188 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0024.jpg — t=136188 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0025.jpg — t=144188 reason=periodic; Explore banks Loan inputs. Monthly income (i)/tooltip while they attack “Sets”. supports_issue
- screenshots/0026.jpg — t=145691 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0027.jpg — t=146720 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0028.jpg — t=147349 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0029.jpg — t=156188 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0030.jpg — t=156940 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0031.jpg — t=157595 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0032.jpg — t=159252 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0033.jpg — t=160083 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0034.jpg — t=164281 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0035.jpg — t=166295 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0036.jpg — t=167016 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0037.jpg — t=170962 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0038.jpg — t=171952 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0039.jpg — t=180187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0040.jpg — t=188188 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0041.jpg — t=196188 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0042.jpg — t=206188 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0043.jpg — t=215217 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0044.jpg — t=216123 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0045.jpg — t=217119 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0046.jpg — t=224149 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0047.jpg — t=224817 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0048.jpg — t=225573 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0049.jpg — t=230736 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0050.jpg — t=231726 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0051.jpg — t=240187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0052.jpg — t=248188 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0053.jpg — t=256188 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0054.jpg — t=266188 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0055.jpg — t=270529 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0056.jpg — t=276536 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0057.jpg — t=286187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0058.jpg — t=294187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0059.jpg — t=294857 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0060.jpg — t=298196 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0061.jpg — t=308187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0062.jpg — t=316187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0063.jpg — t=326187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0064.jpg — t=332315 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0065.jpg — t=342187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0066.jpg — t=352187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0067.jpg — t=362187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0068.jpg — t=366004 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0069.jpg — t=374186 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0070.jpg — t=382186 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0071.jpg — t=390103 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0072.jpg — t=398185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0073.jpg — t=406186 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0074.jpg — t=414180 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0075.jpg — t=422186 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0076.jpg — t=432187 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0077.jpg — t=442185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0078.jpg — t=450186 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0079.jpg — t=453149 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0080.jpg — t=453973 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0081.jpg — t=456724 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0082.jpg — t=462153 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0083.jpg — t=470185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0084.jpg — t=478185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0085.jpg — t=486185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0086.jpg — t=494185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0087.jpg — t=502185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0088.jpg — t=505263 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0089.jpg — t=514185 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0090.jpg — t=514962 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0091.jpg — t=524182 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0092.jpg — t=528778 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0093.jpg — t=538178 reason=periodic; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/0094.jpg — t=539021 reason=interaction; Explore banks Loan inputs. Later property/age work; not this helper. checked_no_extra_signal
- screenshots/index.json — 95 shots; t used to bind tooltip frames. timeline_alignment
- tabs.json — One tab explore-banks.html. timeline_alignment
- viewer.css — Generic player CSS. checked_no_extra_signal
- viewer.js — Generic player JS. checked_no_extra_signal

## ASR notes

- “You stay home, not CDC” / audio.json “CDC.” p≈0.54. On-screen and pages.json: “Use take-home, not CTC.” Quoted raw ASR; meaning taken from screenshot+pages.json.
- “how much loan banks can offer you” matches the helper.
- “the sets don't work” kept; on-screen first word is “Sets.”
- audio.text and audio.srt agree on this stretch; srt used for clock.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2116/issue-01-monthly-income-helper-sets-does-not-explain-why",
  "issue_title": "Monthly income helper starts with “Sets” and does not say why income is asked",
  "folder": "wb-rec-260815-2116",
  "sequence_index": 9,
  "recording_id": "cff0d45a-1eff-4415-a374-98232f3208a8",
  "recording_started_at": "2026-08-15T15:46:08.706Z",
  "recording_ended_at": "2026-08-15T15:55:10.521Z",
  "duration_ms": 541815,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Helper under Monthly income: “Sets how much loan banks can offer you. Use take-home, not CTC.” plus About Monthly income",
  "pinpoint": "On Explore banks, the Monthly income helper “Sets how much loan banks can offer you. Use take-home, not CTC.” is a bad sentence: they said “Sets” does not work and the line does not tell the user why monthly income is asked or how it works in loan processing, even though this is the main eligibility input.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-property-helper-sets-ceiling-unknown-in-india.md"],
  "source_files_used": ["audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "screenshots/0000.png", "screenshots/0001.png", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/0067.jpg", "screenshots/0068.jpg", "screenshots/0069.jpg", "screenshots/0070.jpg", "screenshots/0071.jpg", "screenshots/0072.jpg", "screenshots/0073.jpg", "screenshots/0074.jpg", "screenshots/0075.jpg", "screenshots/0076.jpg", "screenshots/0077.jpg", "screenshots/0078.jpg", "screenshots/0079.jpg", "screenshots/0080.jpg", "screenshots/0081.jpg", "screenshots/0082.jpg", "screenshots/0083.jpg", "screenshots/0084.jpg", "screenshots/0085.jpg", "screenshots/0086.jpg", "screenshots/0087.jpg", "screenshots/0088.jpg", "screenshots/0089.jpg", "screenshots/0090.jpg", "screenshots/0091.jpg", "screenshots/0092.jpg", "screenshots/0093.jpg", "screenshots/0094.jpg", "screenshots/index.json", "tabs.json", "viewer.css", "viewer.js"],
  "speech_clock": ["00:01:06,120 --> 00:02:18,990"],
  "event_t_ms": [51102, 51103, 51645, 51913, 69688, 71016, 71554, 100341, 101294, 101907, 102547],
  "screenshot_files": ["screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0011.jpg", "screenshots/0014.jpg", "screenshots/0017.jpg", "screenshots/0021.jpg"],
  "tags": ["copy", "trust", "eligibility"],
  "quotes": [
    {"clock": "00:01:17,960", "text": "This sentence can be better. This is your main eligibility criteria.", "artifact": "audio.srt"},
    {"clock": "00:01:33,380", "text": "The problem with this sentence is that the sets don't work.", "artifact": "audio.srt"},
    {"clock": "00:01:50,880", "text": "Why do you want my monthly income?", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 51103, "name": "About Monthly income", "css": "form#hlc-inputs first-field (i)"},
    {"t_ms": 69688, "name": "About Monthly income", "css": "form#hlc-inputs first-field (i)"}
  ],
  "related_discussion_present": true
}
```
