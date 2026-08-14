#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');
var lib = require('./lib');

var dir = process.argv[2];
if (!dir) {
  console.error('Usage: node build-session-md.js <session-dir>');
  process.exit(2);
}
dir = path.resolve(dir);
var meta = {};
var events = [];
var segments = [];
try {
  meta = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8'));
} catch (e) {
  meta = { id: path.basename(dir) };
}
try {
  events = lib.parseJsonl(fs.readFileSync(path.join(dir, 'events.jsonl'), 'utf8'));
} catch (e) {
  events = [];
}
try {
  var t = JSON.parse(fs.readFileSync(path.join(dir, 'transcript.json'), 'utf8'));
  segments = t.segments || [];
} catch (e) {
  segments = [];
}
var md = lib.buildSessionMarkdown(meta, events, segments);
fs.writeFileSync(path.join(dir, 'session.md'), md);
console.log('Wrote', path.join(dir, 'session.md'));
