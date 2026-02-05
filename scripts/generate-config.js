#!/usr/bin/env node
/**
 * Generate Config CSV for the Apply Only Once Config sheet.
 * Run: node scripts/generate-config.js
 * Output: config/config.csv - paste this into the Config sheet in Google Sheets.
 *
 * Fetches column headers from each sheet and generates per-column visibility keys.
 */

const SPREADSHEET_ID = '1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g';
const BASE = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=`;

function parseCSVLine(line) {
  const out = [];
  let cell = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') inQuotes = !inQuotes;
    else if (inQuotes) cell += c;
    else if (c === ',') { out.push(cell.trim()); cell = ''; }
    else cell += c;
  }
  out.push(cell.trim());
  return out;
}

async function fetchHeaders(sheetName) {
  const url = BASE + encodeURIComponent(sheetName);
  const res = await fetch(url);
  const text = await res.text();
  const firstLine = text.split(/\r?\n/)[0] || '';
  const cells = parseCSVLine(firstLine);
  return cells.map(c => c.replace(/^"|"$/g, '').trim()).filter(Boolean);
}

function escapeCSV(val) {
  if (val == null) return '';
  const s = String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

async function main() {
  const config = [];

  config.push({ key: 'key', value: 'value' });
  config.push({ key: 'cache_minutes', value: '5' });
  config.push({ key: 'contact_phone', value: '+91 91123 34367' });
  config.push({ key: 'contact_email', value: 'applyonlyonceindia@gmail.com' });
  config.push({ key: 'default_compare_tab', value: 'india' });
  config.push({ key: 'faq.expand_default', value: 'true' });
  config.push({ key: 'document_checklist.group_by', value: 'category' });
  config.push({ key: 'gov_schemes.cards_per_row', value: '2' });
  config.push({ key: 'qhei.rows_per_page', value: '50' });
  config.push({ key: 'results.initial_count', value: '10' });

  const sheets = [
    { name: 'Education_Loans_India', prefix: 'compare.india.column' },
    { name: 'Education_Loans_Abroad', prefix: 'compare.abroad.column' },
    { name: 'PM_Vidyalaxmi_QHEI', prefix: 'qhei.column' },
    { name: 'Government_Schemes', prefix: 'gov_schemes.column' }
  ];

  for (const { name, prefix } of sheets) {
    try {
      const headers = await fetchHeaders(name);
      for (const col of headers) {
        config.push({ key: `${prefix}.${col}.visible`, value: 'true' });
      }
      console.error(`Fetched ${headers.length} columns from ${name}`);
    } catch (e) {
      console.error(`Failed to fetch ${name}:`, e.message);
    }
  }

  config.push({ key: 'results.visible_columns', value: 'bank_name,Scheme_name,Purpose,Security_/_Collateral,Processing_fees(of_loan_amount),Course,Quantum_of_Loan_Amount_(Max)Disbursement_-_Tution_fees_is_disbursed_directly_to_the_institution_and_eligible_expenses_are_paid_in_instalments_to_the_student_or_co-borrower_as_per_bank_norms' });

  const csv = config.map(r => `${escapeCSV(r.key)},${escapeCSV(r.value)}`).join('\n');
  const fs = await import('fs');
  const path = await import('path');
  const outDir = path.join(process.cwd(), 'config');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'config.csv');
  fs.writeFileSync(outPath, csv, 'utf8');
  console.error(`\nWrote ${config.length} rows to ${outPath}`);
  console.error('\nPaste the contents of config/config.csv into your Config sheet in Google Sheets.');
  console.error('Columns: key | value');
}

main().catch(e => { console.error(e); process.exit(1); });
