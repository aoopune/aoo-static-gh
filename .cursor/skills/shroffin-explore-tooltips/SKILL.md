---
name: shroffin-explore-tooltips
description: >-
  aoo-static-gh ONLY. Researches or writes Explore Banks home-loan compare
  tooltips (form field help and table column help). Use when the user mentions
  tooltips, field help, column help, hlc-help, Explore Banks tips, research
  briefs for tips, or asks to research / write / rewrite / add tooltip copy.
  Do NOT use for etc marketing copy or non-Explore UI chrome.
---

# Shroffin Explore Banks tooltips

**Repo — `aoo-static-gh` only.** Help copy and research for the home-loan compare tool.

Pick the mode from what the user asked. Do not mix: research does not write final tips; writing does not invent facts.

## Mode A — Research (new or missing fields)

**When:** user asks to research, dig facts, build briefs, or gives new fields/topics for tip research.

1. Read [research.md](research.md) and follow it **exactly** (same method as the original briefs work).
2. Research only the fields/topics the user named.
3. Prefer primary sources; mark confidence; separate regulation vs practice vs tool estimate.
4. Output per-field briefs in the research.md template.
5. Save into `super-review-1/explore-banks/_tooltip-research-briefs.md` only if the user asks to save.

## Mode B — Write / rewrite tips

**When:** user asks to write, rewrite, or draft tooltip copy.

1. `../etc/docs/brand/startup-core.md` (voice, claims, no villains) — if unavailable, use Shroffin voice rules already in project rules; do not invent brand claims.
2. [craft.md](craft.md) — formula, never/always, moment test, self-check
3. `super-review-1/explore-banks/_tooltip-research-briefs.md` — facts for the field(s). If a field has **no** brief yet, run **Mode A** for that field first, then write.
4. `super-review-1/explore-banks/_tooltip-approved-copy.md` — locked finals (when revising an existing tip, match or deliberately replace what is locked)

Then:

1. Run the moment test in craft.md.
2. Read that field’s research brief.
3. Draft ≤2 sentences per craft.md.
4. Output for review.
5. Update `_tooltip-approved-copy.md` only if the user asks to save or approve.

Do not polish old live tips by light edit — rewrite from briefs + craft.

## Hard bans (both modes)

- No ₹income → ₹loan / EMI maths in tips or as research “ammo”
- No UI coaching
- No guarantees / “best” / competitor names
- No villain framing of banks or agents
- No invented homework gates banks do not impose
- No capacity metaphors in tips or tip ammo: “EMI room”, “share that room”, “room for”, “FOIR room”, “eat the same pie”, “same pie”, soft “headroom” for FOIR — say the plain consequence instead
