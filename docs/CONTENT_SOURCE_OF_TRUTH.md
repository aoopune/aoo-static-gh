# Content source of truth

| Thing | Master | Command |
|---|---|---|
| **Customer wording (all redesigned pages)** | `site-words/pages/{home,explore,guide,about,tools,company}/**/*.words.md` + `site-words/common/chrome.words.md` | applied inside `build:content` / nav/footer sync; `npm run check:site-words` |
| **Tool UI wording (JS)** | `site-words/**/*.runtime.words.md` (Explore, Project Finder, Apply success) | `npm run build:site-words-runtime` (+ `build:compare` / `build:apf` as needed); also via `npm run words` |
| Top menu HTML shell | `partials/global-nav.html` (labels via site-words) | `npm run build:nav` |
| Footer HTML shell | `partials/site-footer.html` (labels via site-words) | `npm run build:footer` |
| Guide side menu shell | `partials/guide-localnav.html` (labels via site-words) | `npm run build:guide-localnav` |
| Page structure (markers) | `content/**/*.body.html` | `npm run build:content` |
| Legal (prose archive) | `../etc/docs/legal/*.md` (mirrors live wording) | `npm run sync:legal-content` |
| Legal (published page) | `content/legal/*.body.html` + site-words | `npm run build:content` |
| Contacts (values) | `data/site-contacts.json` | `npm run build:contacts` (Apply) + `build:nav` / `build:footer` |
| Bank / APF data | `data/*.json` | existing compare/APF builds |
| Page list | `data/redesigned-pages.json` | sitemap generate + contracts |
| Asset `?v=` | `data/asset-version.json` | content layouts / page CSS links |
| Wording index | `site-words/INDEX.md` | — |

After a page is on the content factory: edit **site-words** for wording. Body HTML holds `{{SW:…}}` markers + structure — do not put customer sentences back into HTML as the source of truth.

Hard rule: look, logic, exceptions, and how the site works must stay the same unless explicitly changed.
