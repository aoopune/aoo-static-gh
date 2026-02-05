#!/usr/bin/env node
'use strict';
var passed = 0;
var failed = 0;
function ok(cond, msg) {
  if (cond) { passed++; return; }
  failed++;
  console.error('FAIL: ' + msg);
}
function parseCSV(text) {
  var rows = [];
  var row = [];
  var cell = '';
  var inQuotes = false;
  for (var i = 0; i < text.length; i++) {
    var c = text[i];
    if (c === '"') inQuotes = !inQuotes;
    else if (inQuotes) cell += c;
    else if (c === ',') { row.push(cell.trim()); cell = ''; }
    else if (c === '\n' || c === '\r') {
      row.push(cell.trim()); rows.push(row); row = []; cell = '';
      if (c === '\r' && text[i + 1] === '\n') i++;
    } else cell += c;
  }
  if (cell !== '' || row.length > 0) { row.push(cell.trim()); rows.push(row); }
  return rows;
}
var rows = parseCSV('a,b,c\n1,2,3\n"x,y",z,4');
ok(rows.length === 3, 'parseCSV row count');
ok(rows[0][0] === 'a' && rows[1][1] === '2', 'parseCSV cells');
ok(rows[2][0] === 'x,y', 'parseCSV quoted comma');
console.log('Unit tests: ' + passed + ' passed, ' + failed + ' failed');
process.exit(failed > 0 ? 1 : 0);
