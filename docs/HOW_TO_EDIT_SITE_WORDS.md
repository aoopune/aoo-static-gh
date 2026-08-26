# How to edit site words

Also follow `docs/DEFINITION_OF_DONE.md` and `site-words/_schema.md`.

## Everyday wording (preferred)

### See changes live (do this while editing)

Once per session, in the website project folder:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run words
```

Leave that running. Open http://localhost:8765/

Then:

1. Open [`site-words/INDEX.md`](../site-words/INDEX.md) and click the page (or chrome).
2. Change the **plain text under** the `##` heading. Leave `{#…}` alone.
3. **Save** — the page on localhost rebuilds and refreshes by itself (usually under a second).

No commit. No deploy. No extra npm each time.

When you are happy and want it **live on the real site**: save → commit → push / deploy.

**Ignore `*.assistive.words.md` files.** Those are spoken names for screen readers — not marketing copy.

### Tool UI wording (dropdowns, table headers, success popup)

Some words only appear after the page runs (Explore tool, Project Finder, Apply success). Those live in `*.runtime.words.md` files — same edit style as other words files. Linked from [`site-words/INDEX.md`](../site-words/INDEX.md).

With `npm run words` running, **save** still rebuilds and refreshes. For a one-off without the watcher:

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run build:site-words-runtime
# Explore tool labels also need:
npm run build:compare
# Project Finder also needs:
npm run build:apf
```

Example:

```markdown
## Top bar — Guide {#nav.guide}
Guide
```

Change `Guide` to whatever label you want. Keep `{#nav.guide}`.

## Special cases

1. Legal archive in etc → still sync from etc when reconciling legal markdown archive, then site-words / content factory as usual.
2. Phone/email/WhatsApp **numbers** → edit only `data/site-contacts.json`, then:
   `npm run build:contacts && npm run build:nav && npm run build:footer`
3. Plain local server without auto-rebuild: `npm run serve` → http://localhost:8765/

## Checks

```bash
cd "/home/yash/Projects Etc & aoo/aoo-static-gh"
npm run check:site-words
```
