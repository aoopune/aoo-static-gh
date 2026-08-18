# Three indexes, two stars — an extra mark is here

After they define Dash vs notes (`12`), they count what is on Charges. **There is an extra mark here.** **A lot of indexes.** **There are three, right? Yes, there are three. And there are two stars.** They open Processing *, then Property check *, then Government ^ — that is **two stars and one caret**, three footnote indexes. They leave the clip by opening Indian Bank’s **₹2,500** processing drawer (next recording’s sentence).

## Classification
- kind: issue | footnotes / information architecture
- status: open
- surface: Charges column marks: **Processing fees \***, **Property check charges \***, **Government charges ^**. Notes summaries with the same * / *. / ^. Clicks **08:24.125** property-check note, **08:29.123** government note (`Open note for mark ^`).
- viewport: 1366x768 @2x
- speakers: Speaker A asks “three, right?”; **“Yes, there are three”** is likely Speaker B. Repeated “there are two stars” is A locking the count. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2355`
- recording id: `2136e699-2334-4e39-a724-eb3e92e1d3bd`
- clip: 26 of 30
- started_at: 2026-08-15T18:25:24.871Z
- ended_at: 2026-08-15T18:34:41.661Z
- duration_ms: 556790 (~9 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 200
- console: empty
- tabs: 1
- previous: `12` in this folder — dash vs star meaning
- next: `wb-rec-260816-0004` starts ~5 s later on processing fee meaning; this clip already opened Indian Bank ₹2,500

## Where on the page
- Charges still active (`0084.png`–`0088.png`). Notes **Collapse all** / three groups:
  - **Processing fees (\*)**
  - **Property check charges (\*)**
  - **Government charges (^)**
- **08:24.125** `details#hlc-charge-note-property-check-charges > summary` (`0084.png`)
- **08:29.123** `Open note for mark ^` + `details#hlc-charge-note-government-charges > summary` (`0085.png`)
- They scroll the notes (`0086.png`–`0089.jpg`).
- **09:07.538** `Show how processing fees for Indian Bank was calculated` text **₹2,500** (`0090.jpg`) — Processing fee drawer, **1. Flat fee ₹2,500**. That opener is the bridge into 0004, not a fourth index.

## What they said (faithful, complete)

**08:22.590–08:23.670** Speaker A:
> Raw ASR / corrected: “Nice, nice.” (after the Dash definition)

**08:32.730–08:41.670** both:
> Raw ASR: “Actually there is an extra mark here. There are a lot of indexes here. There are three, right? Yes, there are three. And there are two stars.”
> Corrected: same. **indexes** p≈0.82; **three** confirmed twice. **two stars** p≈0.96 on stars.
> On-screen: two * columns + one ^ column = **three indexes**. **Two stars** = the two * (Processing, Property check). **Extra mark** = the ^ (Government), or a duplicate * they see on the header. Do not invent a fourth column. Screenshot descriptions that show `* ^` doubled on headers are later-source noise if this recording’s frames show one mark per column — accept **three marks: * * ^**.

**08:42.330–08:48.990** Speaker A (repeats):
> Raw ASR: “There are two stars.” ×4
> Corrected: they are **counting**, not asking for more stars. Later repeats have high **no_speech_prob** (~0.60) — lock the count from the first clear “two stars,” don’t treat four echoes as four extra stars.

No processing-fee definition in this span (that is 0004).

## First-principles problem
- What must be true: the number of **index marks** matches the number of **notes**, and the customer can **count** them (three indexes, two of them stars).
- Root vs symptom: “extra mark” is the feeling. The root is **two symbols (\* and ^) for three notes** without saying why government is a caret.
- Constraints: they asked for a **star** in `12`. Government is currently **^**. Don’t add a third symbol.

## Directions they considered
- Count: **three indexes**, **two stars**, plus an **extra mark** they noticed.
- Lean: tidy the footnote legend so the count is obvious. Not a rewrite of fee math.
- They do **not** say to delete government notes or to make all three stars — they only count.

## Company / user / future thinking
- User: if they cannot count the marks, they will not open the right note (`12` already said marks confuse).
- Company: three honest notes beat a forest of indexes. Next clip still needs a **sentence** inside the * note.
- Future: keep Indian Bank ₹2,500 as the worked example in 0004; don’t solve fee meaning here.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Charges header `footnoteRefHtml` markers; `details#hlc-charge-note-processing-fees` / `property-check-charges` / `government-charges`.
- Acceptance criteria in their words: “there is an extra mark here.” “There are a lot of indexes here.” “There are three, right? Yes, there are three.” “And there are two stars.”
- What NOT to do: do not add more marks. Do not treat the Indian Bank drawer as a fourth index. Do not change * to dash (`12` forbade that).
- Open questions: should government stay ^ or become a third star. What “extra” was — doubled header glyphs vs the caret itself.
- Related recordings:
  - continues_from: `12`
  - continues_in: `wb-rec-260816-0004` `01` (processing fee one sentence), already queued by the 09:07 click

## Evidence index
- `audio.vtt` 08:32.730–08:48.990
- `audio.json`: indexes p≈0.82; three; two stars p≈0.96 (later echoes nsp≈0.60)
- `events.json`: property-check note t=504125; government ^ t=509123; Indian Bank processing t=547538
- `screenshots/0084.png`–`0091.jpg`
- `replay.spec.ts`: both remaining notes summaries; Indian Bank processing button
- `RECAP.md` 08:24–09:08
- Next bundle `wb-rec-260816-0004` starts 2026-08-15T18:34:46.547Z
