#!/usr/bin/env node
// Minimal static file server for local dev / Playwright (no Python required)
var http = require('http');
var fs = require('fs');
var path = require('path');
var PORT = parseInt(process.env.PORT || '8765', 10);
var root = path.resolve(__dirname, '..');

function mime(name) {
  var ext = path.extname(name).toLowerCase();
  var map = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.ico': 'image/x-icon', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.md': 'text/markdown', '.csv': 'text/csv' };
  return map[ext] || 'application/octet-stream';
}

var server = http.createServer(function (req, res) {
  var urlPath = (req.url || '/').split('?')[0];
  var filePath = path.join(root, urlPath === '/' ? 'index.html' : urlPath);
  if (!path.relative(root, filePath).split(path.sep).every(function (p) { return p !== '..'; })) {
    res.writeHead(403); res.end(); return;
  }
  fs.readFile(filePath, function (err, data) {
    if (err) {
      if (err.code === 'ENOENT' && !path.extname(filePath)) {
        filePath = path.join(filePath, 'index.html');
        fs.readFile(filePath, function (e2, d2) {
          if (e2) { res.writeHead(404); res.end('Not found'); return; }
          res.setHeader('Content-Type', mime(filePath));
          res.end(d2);
        });
        return;
      }
      res.writeHead(404); res.end('Not found'); return;
    }
    res.setHeader('Content-Type', mime(filePath));
    res.end(data);
  });
});
server.listen(PORT, function () { console.log('Serving at http://localhost:' + PORT); });
