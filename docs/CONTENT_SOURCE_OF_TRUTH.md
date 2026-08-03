# Content source of truth

| Thing | Master | Command |
|---|---|---|
| Top menu | `partials/global-nav.html` | `npm run build:nav` |
| Footer | `partials/site-footer.html` | `npm run build:footer` |
| Guide side menu | `partials/guide-localnav.html` | `npm run build:guide-localnav` |
| Site page words | `content/**/*.body.html` (and later `.md`) | `npm run build:content` |
| Legal (prose archive) | `../etc/docs/legal/*.md` (mirrors live wording) | `npm run sync:legal-content` |
| Legal (published page) | `content/legal/*.body.html` | `npm run build:content` |
| Contacts | `data/site-contacts.json` | `npm run build:contacts` (Apply) + `build:nav` / `build:footer` |
| Bank / APF data | `data/*.json` | existing compare/APF builds |
| Page list | `data/redesigned-pages.json` | sitemap generate + contracts |
| Asset `?v=` | `data/asset-version.json` | content layouts / page CSS links |

After a page is on the content factory: edit the content master only. Never hand-edit the generated HTML body.

Hard rule: look, logic, exceptions, and how the site works must stay the same unless explicitly changed.
