const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const contacts = JSON.parse(
  fs.readFileSync(path.join(root, 'data', 'site-contacts.json'), 'utf8')
);

const outPath = path.join(root, 'js', 'site-contacts.generated.js');
const next =
  '/* Generated from data/site-contacts.json — do not edit by hand. */\n' +
  'window.ShroffinSiteContacts = ' +
  JSON.stringify(contacts, null, 2) +
  ';\n';

if (checkOnly) {
  if (!fs.existsSync(outPath) || fs.readFileSync(outPath, 'utf8') !== next) {
    console.error(
      'js/site-contacts.generated.js is out of date. Run: npm run build:contacts'
    );
    process.exit(1);
  }
  const apply = fs.readFileSync(
    path.join(root, 'js', 'home-loan-apply.js'),
    'utf8'
  );
  if (
    /var HL_SUPPORT_EMAIL = "/.test(apply) ||
    /href="https:\/\/wa\.me\/919112334367"/.test(apply)
  ) {
    console.error(
      'js/home-loan-apply.js still hard-codes contacts; use ShroffinSiteContacts.'
    );
    process.exit(1);
  }
  console.log('site-contacts.generated.js OK and apply uses shared contacts.');
  process.exit(0);
}

fs.writeFileSync(outPath, next);
console.log('Wrote js/site-contacts.generated.js');
