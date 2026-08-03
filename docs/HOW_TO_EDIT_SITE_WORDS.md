# How to edit site words

Also follow `docs/DEFINITION_OF_DONE.md`.

1. Legal → edit files in the etc project under `docs/legal/` (after reconciliation), then in the website folder run:
   `npm run sync:legal-content && npm run build:content -- --only=legal --write && npm run build:nav && npm run build:footer`
2. Guide / About / other content pages → edit the matching file under `content/`, then:
   `npm run build:content -- --write && npm run build:nav && npm run build:footer && npm run build:guide-localnav`
3. Preview: `npm run serve` → http://localhost:8765/
4. Phone/email/WhatsApp → edit only `data/site-contacts.json`, then:
   `npm run build:contacts && npm run build:nav && npm run build:footer`
