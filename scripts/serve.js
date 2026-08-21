#!/usr/bin/env node
// Minimal static file server for local dev / Playwright / Lighthouse.
// Serves HTTP/1.1 with gzip for text assets so local perf matches production.
var http = require("http");
var fs = require("fs");
var path = require("path");
var zlib = require("zlib");
var review = require("./review-capture/server");
var PORT = parseInt(process.env.PORT || "8765", 10);
var root = path.resolve(__dirname, "..");

function mime(name) {
  var ext = path.extname(name).toLowerCase();
  var map = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json",
    ".ico": "image/x-icon",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".md": "text/markdown",
    ".csv": "text/csv",
  };
  return map[ext] || "application/octet-stream";
}

function shouldGzip(file) {
  var ext = path.extname(file).toLowerCase();
  return (
    ext === ".html" ||
    ext === ".css" ||
    ext === ".js" ||
    ext === ".json" ||
    ext === ".svg" ||
    ext === ".md" ||
    ext === ".csv"
  );
}

function acceptsGzip(req) {
  var ae = req.headers["accept-encoding"] || "";
  return ae.split(",").some(function (part) {
    return part.trim().toLowerCase().indexOf("gzip") === 0;
  });
}

var server = http.createServer(function (req, res) {
  if (review.handle(req, res, root)) return;
  var urlPath = (req.url || "/").split("?")[0];
  var filePath = path.join(root, urlPath === "/" ? "index.html" : urlPath);
  if (
    !path
      .relative(root, filePath)
      .split(path.sep)
      .every(function (p) {
        return p !== "..";
      })
  ) {
    res.writeHead(403);
    res.end();
    return;
  }

  function applyCache(file) {
    var ext = path.extname(file).toLowerCase();
    var versioned = (req.url || "").indexOf("?v=") !== -1;
    if (ext === ".html") {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      return;
    }
    if (
      versioned &&
      (ext === ".js" ||
        ext === ".css" ||
        ext === ".json" ||
        ext === ".webp" ||
        ext === ".jpg" ||
        ext === ".png" ||
        ext === ".woff2" ||
        ext === ".ttf")
    ) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      return;
    }
    res.setHeader("Cache-Control", "no-cache");
  }

  function send(file, data) {
    res.setHeader("Content-Type", mime(file));
    applyCache(file);
    if (shouldGzip(file) && acceptsGzip(req) && data.length > 512) {
      zlib.gzip(data, function (err, compressed) {
        if (err) {
          res.end(data);
          return;
        }
        res.setHeader("Content-Encoding", "gzip");
        res.setHeader("Vary", "Accept-Encoding");
        res.end(compressed);
      });
      return;
    }
    res.end(data);
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      if (err.code === "ENOENT" && !path.extname(filePath)) {
        filePath = path.join(filePath, "index.html");
        fs.readFile(filePath, function (e2, d2) {
          if (e2) {
            res.writeHead(404);
            res.end("Not found");
            return;
          }
          send(filePath, d2);
        });
        return;
      }
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    send(filePath, data);
  });
});

server.listen(PORT, function () {
  console.log("Serving at http://localhost:" + PORT + " (gzip on)");
  console.log("Review capture: http://localhost:" + PORT + "/__review/");
});
