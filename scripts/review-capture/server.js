'use strict';

var fs = require('fs');
var path = require('path');
var { spawn } = require('child_process');
var lib = require('./lib');

var STATIC_FILES = {
  '/__review': 'shell.html',
  '/__review/': 'shell.html',
  '/__review/shell.html': 'shell.html',
  '/__review/shell.js': 'shell.js',
  '/__review/shell.css': 'shell.css'
};

var MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

function json(res, code, obj) {
  var body = JSON.stringify(obj);
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function readBody(req, limit, cb) {
  var chunks = [];
  var size = 0;
  var done = false;
  function fail(err) {
    if (done) return;
    done = true;
    cb(err);
  }
  req.on('data', function (chunk) {
    size += chunk.length;
    if (size > limit) {
      fail(new Error('too_large'));
      req.destroy();
      return;
    }
    chunks.push(chunk);
  });
  req.on('end', function () {
    if (done) return;
    done = true;
    cb(null, Buffer.concat(chunks));
  });
  req.on('error', fail);
}

function sessionDir(root, id) {
  return path.join(root, 'review-sessions', id);
}

function writeStatus(dir, state, extra) {
  var payload = Object.assign({ state: state, updatedAt: new Date().toISOString() }, extra || {});
  fs.writeFileSync(path.join(dir, 'status.json'), JSON.stringify(payload, null, 2));
}

function rebuildMarkdown(dir) {
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
  return md;
}

function startTranscribe(root, id) {
  var dir = sessionDir(root, id);
  var script = path.join(__dirname, 'transcribe.py');
  var venvPy = path.join(__dirname, '.venv', 'bin', 'python');
  var py = fs.existsSync(venvPy) ? venvPy : 'python3';
  writeStatus(dir, 'transcribing', { message: 'Turning speech into text. First time may take a few minutes.' });
  var logFd = fs.openSync(path.join(dir, 'transcribe.log'), 'a');
  var child = spawn(py, [script, dir], {
    cwd: root,
    detached: true,
    stdio: ['ignore', logFd, logFd],
    env: Object.assign({}, process.env, {
      WHISPER_MODEL: process.env.WHISPER_MODEL || 'small'
    })
  });
  child.unref();
}

function handle(req, res, root) {
  var urlPath = (req.url || '/').split('?')[0];
  if (urlPath.indexOf('/__review') !== 0) return false;

  if (req.method === 'GET' && STATIC_FILES[urlPath]) {
    var file = path.join(__dirname, STATIC_FILES[urlPath]);
    fs.readFile(file, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': 'no-store'
      });
      res.end(data);
    });
    return true;
  }

  if (req.method === 'POST' && urlPath === '/__review/api/sessions') {
    readBody(req, 256 * 1024, function (err, buf) {
      if (err) {
        json(res, 400, { error: String(err.message || err) });
        return;
      }
      var body = {};
      try {
        body = buf.length ? JSON.parse(buf.toString('utf8')) : {};
      } catch (e) {
        json(res, 400, { error: 'invalid_json' });
        return;
      }
      var id = lib.newSessionId();
      var dir = sessionDir(root, id);
      fs.mkdirSync(dir, { recursive: true });
      var meta = {
        id: id,
        startedAt: new Date().toISOString(),
        initialPage: body.initialPage || '/',
        viewport: body.viewport || null,
        userAgent: body.userAgent || req.headers['user-agent'] || ''
      };
      fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify(meta, null, 2));
      fs.writeFileSync(path.join(dir, 'events.jsonl'), '');
      writeStatus(dir, 'recording');
      json(res, 200, { id: id });
    });
    return true;
  }

  var chunkMatch = urlPath.match(/^\/__review\/api\/sessions\/([^/]+)\/chunk$/);
  var eventsMatch = urlPath.match(/^\/__review\/api\/sessions\/([^/]+)\/events$/);
  var finalizeMatch = urlPath.match(/^\/__review\/api\/sessions\/([^/]+)\/finalize$/);
  var statusMatch = urlPath.match(/^\/__review\/api\/sessions\/([^/]+)\/status$/);

  if (chunkMatch) {
    var chunkId = chunkMatch[1];
    if (!lib.isValidSessionId(chunkId)) {
      json(res, 400, { error: 'bad_session' });
      return true;
    }
    var chunkDir = sessionDir(root, chunkId);
    if (!fs.existsSync(chunkDir)) {
      json(res, 404, { error: 'missing_session' });
      return true;
    }
    if (req.method !== 'POST') {
      json(res, 405, { error: 'method' });
      return true;
    }
    readBody(req, 25 * 1024 * 1024, function (err, buf) {
      if (err) {
        json(res, 400, { error: String(err.message || err) });
        return;
      }
      fs.appendFileSync(path.join(chunkDir, 'audio.webm'), buf);
      json(res, 200, { ok: true, bytes: buf.length });
    });
    return true;
  }

  if (eventsMatch) {
    var eventsId = eventsMatch[1];
    if (!lib.isValidSessionId(eventsId)) {
      json(res, 400, { error: 'bad_session' });
      return true;
    }
    var eventsDir = sessionDir(root, eventsId);
    if (!fs.existsSync(eventsDir)) {
      json(res, 404, { error: 'missing_session' });
      return true;
    }
    if (req.method !== 'POST') {
      json(res, 405, { error: 'method' });
      return true;
    }
    readBody(req, 2 * 1024 * 1024, function (err, buf) {
      if (err) {
        json(res, 400, { error: String(err.message || err) });
        return;
      }
      var payload;
      try {
        payload = JSON.parse(buf.toString('utf8'));
      } catch (e) {
        json(res, 400, { error: 'invalid_json' });
        return;
      }
      var list = Array.isArray(payload) ? payload : payload.events || [];
      var lines = list
        .map(function (ev) {
          return JSON.stringify(ev);
        })
        .join('\n');
      if (lines) fs.appendFileSync(path.join(eventsDir, 'events.jsonl'), lines + '\n');
      rebuildMarkdown(eventsDir);
      json(res, 200, { ok: true, count: list.length });
    });
    return true;
  }

  if (finalizeMatch) {
    var finalId = finalizeMatch[1];
    if (!lib.isValidSessionId(finalId)) {
      json(res, 400, { error: 'bad_session' });
      return true;
    }
    var finalDir = sessionDir(root, finalId);
    if (!fs.existsSync(finalDir)) {
      json(res, 404, { error: 'missing_session' });
      return true;
    }
    if (req.method !== 'POST') {
      json(res, 405, { error: 'method' });
      return true;
    }
    readBody(req, 2 * 1024 * 1024, function (err, buf) {
      if (err) {
        json(res, 400, { error: String(err.message || err) });
        return;
      }
      if (buf.length) {
        try {
          var extra = JSON.parse(buf.toString('utf8'));
          var extraEvents = extra.events || [];
          if (extraEvents.length) {
            fs.appendFileSync(
              path.join(finalDir, 'events.jsonl'),
              extraEvents.map(JSON.stringify).join('\n') + '\n'
            );
          }
        } catch (e) {
          /* ignore trailing parse issues; audio is already saved */
        }
      }
      rebuildMarkdown(finalDir);
      writeStatus(finalDir, 'saved', { message: 'Audio saved. Starting speech-to-text.' });
      try {
        startTranscribe(root, finalId);
      } catch (e) {
        writeStatus(finalDir, 'saved', {
          message: 'Audio saved. Speech-to-text could not start automatically.',
          error: String(e.message || e)
        });
      }
      json(res, 200, { ok: true, id: finalId });
    });
    return true;
  }

  if (statusMatch && req.method === 'GET') {
    var statusId = statusMatch[1];
    if (!lib.isValidSessionId(statusId)) {
      json(res, 400, { error: 'bad_session' });
      return true;
    }
    var statusPath = path.join(sessionDir(root, statusId), 'status.json');
    if (!fs.existsSync(statusPath)) {
      json(res, 404, { error: 'missing_session' });
      return true;
    }
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    res.end(fs.readFileSync(statusPath));
    return true;
  }

  json(res, 404, { error: 'not_found' });
  return true;
}

module.exports = {
  handle: handle,
  rebuildMarkdown: rebuildMarkdown,
  sessionDir: sessionDir
};
