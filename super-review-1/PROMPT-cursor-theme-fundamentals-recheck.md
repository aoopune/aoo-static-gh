# Cursor Theme Fundamentals Recheck — paste-ready prompt

How to use this (for you, not for the AI):

Run this **after** you and your co-founder already discussed the issues, **and after you changed the website**. It is not the first site scan. It is not a new grouping. It is a **fresh check against the same 20 fundamentals** on **today’s source**.

**Site repo:** `aoo-static-gh`. The agent must read the **current** HTML / CSS / JS people would meet now — not memory of the old review, not “we already fixed that.”

You paste **one prompt, one time**, into **one new Cursor Agent chat**. Stop there.

1. Open a **new Cursor Agent chat** with the **`aoo-static-gh`** folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until these exist under `super-review-1/themes/`:
   - `_theme-fundamentals-recheck.md`
   - `_theme-fundamentals-recheck-ledger.json`

This job does **not** invent themes. It does **not** change the website. It does **not** write how to repair anything. It answers only: **for each existing fundamental, does a person still meet that kind of problem on the live source — including on places you thought were already solved?**

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert at checking whether a **kind of human problem** is still true on a product after people tried to fix it.

This message is the only prompt the human will give you. There is no second prompt. You must do the whole job from this one message.

You have exactly one job: take every existing theme **fundamental**, look at the **current** Shroffin site source, and say for each kind of problem:

1. **still open** — a person still meets this kind of failure
2. **closed against the fundamental** — the kind of failure is gone on the surfaces you checked
3. **looks changed, still open** — labels, layout, or names moved, but the **same kind of object + same kind of failure** is still there (a “fix” that did not close the fundamental)

Do nothing else. Do not change the website. Do not invent themes. Do not merge themes. Do not split themes. Do not reopen recordings. Do not write how to repair anything.

## Why this work exists (do not skip)

The founder and co-founder already named the kinds of trouble (fundamentals). A later site scan mapped those kinds onto source. Then **the founder changed some of the site**.

A list that only says “old hit IDs still present” is not enough. A renamed button can still be the same failure. A helper that no longer starts with “Sets” can still not say why the number is asked. Extra questions can sit in a new panel and still look optional while they change the result.

The founder needs one map: **does today’s product still fail the fundamental — including on things we believed we had solved?**

If you mark something closed because the old words are gone, but the same kind of trouble remains, **the job has failed**.

## Absolute no-fix law (highest priority)

This job is a **status map**, not a repair list.

**Never do:**

- edit HTML, CSS, JS, JSON, images, or any other website file
- write a replacement, a better label, a better layout, or a better flow
- write “should”, “could”, “instead of”, “the right way”, “fix this by”, “change this to”, “consider”, “recommend”, “next step”, “how to improve”
- add owners, priority, or a how-to-fix section
- put remedies in the chat reply “to be helpful”

**Only do:** say what a person meets **now**, which fundamental it is, whether that kind of failure is still true, and why.

If a sentence tells someone how to make the product different, delete that sentence.

The website must be bitwise unchanged when you finish.

## Absolute no-cheat law

**Never do:**

- mark a theme closed because “they said they fixed it” or because an old label is missing
- copy old scan hits into the new file without **Read** of **current** source at the cited place (or the current equivalent control)
- use Grep-only as the whole check — Grep may find candidates; you still Read
- launch Task children to write the recheck for you
- invent hits from the old `_theme-site-scan.md` without opening today’s files
- collapse a page into “looks fine”
- finish while any previously mapped **original pinpoint** surface was not Read in current source

**Only do:** you, in this chat, serial: load fundamentals → load old map as a **checklist of places**, not as truth → Read current source → judge object_kind + failure_kind **now**.

## Strict input lock

**Allowed input — open only these:**

1. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-fundamentals.md` — **the matching lens**. Read in full first.
2. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/theme-*.md` — **title + `pinpoint:` only** (original place). Do not read Exact theme, threads, or issue lists.
3. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-index.md` — completeness check only (20 themes).
4. `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-site-scan.md` and `_theme-site-scan-ledger.json` — **prior map of places only**. Use them to know where to look again. They are not today’s verdict.
5. **Current site source** under `/home/yash/Projects Etc & aoo/aoo-static-gh` that a person can meet (same universe as the site scan: served pages, hidden-from-menu pages that still open, iframe targets, `content/**/*.body.html`, `partials/`, attached `src/*.js` / CSS that become on-screen words or motion).

**Forbidden input:**

- any `wb-rec-*/issue-*.md`
- any recorder dump, `_theme-cards.json`, raw audio/events/screenshots
- this prompt file and the other prompt files
- `_theme-recurrence.md`, grouping ledgers
- `_theme-site-scan-solvability-rank.md` (that is confidence-to-fix, not whether the bump still exists)
- tests, `node_modules`, golden snapshots
- older `_theme-fundamentals-recheck.md` / ledger (overwrite them)

If fundamentals count and `theme-*.md` count disagree, **stop**. Reply only: Fundamentals and theme files do not match; run that job first.

Zero `theme-*.md` → stop. Reply only: Theme Grouper output is missing; run that job first.

Missing `_theme-fundamentals.md` → stop. Reply only: Theme Fundamentals output is missing; run that job first.

## What you are judging (every surface, every theme)

For a place in **current** source, hit **only if both** are still true:

- **object_kind** from the fundamental (the kind of thing)
- **failure_kind** from the fundamental (the kind of trouble)

Match **kind**, not old button names. “See options” may now say “Compare” and **still** fail theme-14 if the page name still sounds like browsing everything and the button still sits in the wrong place. Extra eligibility may no longer say “Adjust eligibility” and **still** fail theme-13 if the extra questions are still tucked away, look optional, and still change the result.

**Closed** only if a person **cannot** meet that kind of failure on that surface anymore.

**Looks changed, still open** when:

- the old words / old control name are gone, **and**
- the same object_kind + failure_kind are still true on that surface or its replacement

That status is **mandatory** to look for. It is the point of this job.

## Hard laws

1. **Do not invent themes.** Same 20, same numbers. Every theme appears in the output even if closed.
2. **Do not trust the old scan as today’s truth.** Re-Read current source.
3. **Do not miss working source** the old scan covered: served pages, iframe docs, guide bodies, shared chrome, JS-built strings that are still user-facing.
4. **One primary theme per remaining bump.** Two different failures on one control = two remaining hits.
5. **No fix language.**
6. **No facts** not in current source or fundamentals.
7. **No website edits. No theme file edits. No commit.**
8. **Theme-02 special rule:** do not treat “this sentence is long” as a hit. Hit only if the sentence is **too heavy, overlapping, empty, or not plain English** in the same kind as the fundamental — not because a legal or guide paragraph is long. If the old scan over-tagged, say so: those old hits are **not automatically still open**.

## Runtime contract (one agent, this chat, serial)

### Step 1 — Inventory themes

```bash
find "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes" -name 'theme-*.md' | sort
```

Read `_theme-fundamentals.md` in full. For each theme store `object_kind`, `failure_kind`, and the 1–3 sentences verbatim.

From each `theme-*.md`, read **only** `#` title and YAML `pinpoint:`. Store `original_pinpoint`. Stop reading that file.

### Step 2 — Load the old map as a place list (not a verdict)

Read `_theme-site-scan-ledger.json` (or `_theme-site-scan.md` if ledger missing).

Build a **place list** per theme: page + source_file + source_lines + old evidence_snippet + location_kind (original / new).

This list is **where to look again**. It is not “still a hit.”

If the ledger is missing, still run Steps 3–5 on original pinpoints + current Explore banks / home / footer / concessions / demo frames.

### Step 3 — Recheck every old place against **current** source

For each old place, in theme order, then page ASCII:

1. **Read** the current file. If lines moved, search the current file for the control `id`, nearby heading, or the kind of control (do not skip because line numbers drifted).
2. If the file or control is **gone**, say so and judge the **replacement** if a person now meets a substitute (new label, new panel, new button).
3. Apply object_kind + failure_kind to **what is there now**.
4. Set status:

| status | meaning |
|---|---|
| `still_open` | Same kind of failure, same kind of object. Old words may still be there. |
| `looks_changed_still_open` | Surface was edited (new words, new layout, new name) but the fundamental still matches. |
| `closed` | That kind of failure is not present on this surface now. |
| `gone_surface` | The old control/page is not in source; no replacement carries the failure. |
| `old_hit_was_not_a_match` | The old scan tagged this place, but even now (or on re-read) it does not actually match both kinds. Do not keep it as an open issue. |

Write `why_now` (2–4 sentences, no remedies): what a person meets today, why the status is that value.

`evidence_snippet` = **verbatim from current source**. If closed, quote the current words that show the failure is gone (or quote enough of the current control to prove the old bump is not there). Min 20 characters for prose; min 3 for short labels.

### Step 4 — Fresh fundamental pass (mandatory — not only old places)

The founder may have “fixed” a screen in a way that **moves** the failure.

For each theme, after old places:

1. Read the original pinpoint surface in **current** source (home, Explore banks, footer, concessions, etc.).
2. Read nearby replacements: new button names, new panels, iframe demo frames, shared partials.
3. If you find a **new** place with the same object_kind + failure_kind that was not in the old map, add it as `still_open` with `location_kind: new_since_recheck`.

You are not inventing a new theme. You are finding the **same kind** in a new or renamed place.

Minimum surfaces you must Read even if the old map is quiet:

- `index.html` / `content/pages/home.body.html` (hero, zero block, story, product demo, help/footer)
- `pages/explore-banks.html` / `content/pages/explore-banks.body.html` (form, filters, results, apply once, more details)
- `partials/site-footer.html` and help strip if present
- `pages/concessions.html` / concessions body (Back / learn-more path)
- iframe targets still embedded from home (`pages/_product-demo-frame.html`, `pages/_product-demo-frame-mobile.html` if still referenced)

### Step 5 — Theme-level verdict

For each theme `theme-01` … `theme-20`, set **one** theme verdict:

| verdict | rule |
|---|---|
| `open` | At least one `still_open` or `looks_changed_still_open` remains |
| `closed` | Every checked surface for this fundamental is `closed` or `gone_surface` or `old_hit_was_not_a_match`, and Step 4 found no new match |
| `not_in_current_source` | Fundamental never matched current source (e.g. old theme-05 with 0 hits and still 0) |

A theme is **not** closed if you only closed the old label. If extras still hide, CIBIL is still one exact number, scheme names still live only in a dump, etc. — `open`.

### Step 6 — Write deliverables

Overwrite:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-fundamentals-recheck.md`

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-fundamentals-recheck-ledger.json`

#### A. `_theme-fundamentals-recheck.md`

First lines: **at most 5 short human lines** — this is a recheck after fixes; same 20 fundamentals; today’s source; includes “looks changed but still the same kind”; not a repair list.

Then **How judging was decided** (lens, old map = place list only, kind not old names, looks_changed_still_open, theme-02 long-sentence rule).

Then **Counts:** themes open / closed / not in source. Remaining open place count. Count of `looks_changed_still_open` (this number matters).

Then **theme-01** … **theme-20**:

```markdown
## theme-NN — <title>

Fundamental: <verbatim>

Theme verdict: open | closed | not_in_current_source

Open places: N (still_open: X, looks_changed_still_open: Y, new_since_recheck: Z)
Closed places: N
Old hits that were not a real match: N

### <place id>

Status: still_open | looks_changed_still_open | closed | gone_surface | old_hit_was_not_a_match

What a person meets now: <no remedies>

Why this status: <why the fundamental still matches or no longer matches>

Where: <page> · <source_file>:<source_lines>

Evidence now: <verbatim current snippet>
```

Zero remaining open: `Theme verdict: closed — this kind of problem did not show up on checked current surfaces.`

Closing note: same themes; not a new grouping; not a repair list.

#### B. `_theme-fundamentals-recheck-ledger.json`

Must include:

- `recheck_mode`: `"serial_single_agent"`
- `fundamentals_count`: 20
- `old_map_used`: true/false
- `theme_verdicts`: object theme-01 … theme-20 → `open` | `closed` | `not_in_current_source`
- `open_theme_count`, `closed_theme_count`
- `place_results`: every rechecked place with `status`, `theme_id`, `page`, `source_file`, `source_lines`, `evidence_snippet`, `why_now`, `looks_changed_still_open` boolean
- `looks_changed_still_open_count`
- `new_since_recheck_count`
- `every_theme_present_once`: true
- `website_untouched`: true
- `forbidden_files_opened`: []

### Step 7 — Verify before you reply

- [ ] Both output files exist
- [ ] Theme heading count = `find theme-*.md` count (20)
- [ ] Every theme has a verdict
- [ ] At least the original pinpoint surface for each theme with old hits was Read in current source
- [ ] No hit/status uses remedy words
- [ ] Website untouched
- [ ] `looks_changed_still_open` was actually considered (if every edited surface is only `closed` or only `still_open` with old wording, you likely skipped the point of the job — re-read renamed controls)

## Reply to the user with only

- `recheck_mode: serial_single_agent`
- how many themes **open** vs **closed** vs **not in current source**
- how many remaining open places
- how many **looks_changed_still_open** (name 1–3 examples in one line each, or `none`)
- how many **new_since_recheck**
- confirmation of the two files written
- per-theme one line: `theme-NN · verdict · open places N`

Do not paste the fundamentals. Do not paste code. Do not suggest repairs. Do not say what they should change next.

COPY TO HERE
