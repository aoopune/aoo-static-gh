'use strict';

var SESSION_ID_RE = /^\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}Z-[a-z0-9]{6}$/;

function isValidSessionId(id) {
  return typeof id === 'string' && SESSION_ID_RE.test(id);
}

function newSessionId(date) {
  var d = date || new Date();
  var stamp = d.toISOString().slice(0, 19).replace(/:/g, '-') + 'Z';
  var rand = Math.random().toString(36).slice(2, 8);
  while (rand.length < 6) rand += '0';
  return stamp + '-' + rand;
}

function msToClock(ms) {
  var total = Math.max(0, Math.floor(Number(ms) / 1000));
  var m = Math.floor(total / 60);
  var s = total % 60;
  return m + ':' + String(s).padStart(2, '0');
}

function pageLabel(url) {
  if (!url) return '(unknown page)';
  try {
    var u = new URL(url, 'http://localhost');
    var p = u.pathname || '/';
    if (p === '/' || p === '/index.html') return 'Home (' + p + ')';
    return p + (u.hash || '') + (u.search || '');
  } catch (e) {
    return String(url);
  }
}

function parseJsonl(text) {
  var events = [];
  String(text || '')
    .split(/\n/)
    .forEach(function (line) {
      line = line.trim();
      if (!line) return;
      try {
        events.push(JSON.parse(line));
      } catch (e) {
        /* skip a broken line so one bad event does not kill the session */
      }
    });
  events.sort(function (a, b) {
    return (a.t || 0) - (b.t || 0);
  });
  return events;
}

function segmentsForRange(segments, startMs, endMs) {
  var startS = startMs / 1000;
  var endS = endMs / 1000;
  return (segments || []).filter(function (seg) {
    var mid = (Number(seg.start) + Number(seg.end)) / 2;
    return mid >= startS && mid < endS;
  });
}

function buildSessionMarkdown(meta, events, segments) {
  events = events || [];
  segments = segments || [];
  var started = (meta && meta.startedAt) || '';
  var id = (meta && meta.id) || '';
  var durationMs = 0;
  events.forEach(function (ev) {
    if (typeof ev.t === 'number' && ev.t > durationMs) durationMs = ev.t;
  });
  if (segments.length) {
    var lastEnd = Number(segments[segments.length - 1].end) * 1000;
    if (lastEnd > durationMs) durationMs = lastEnd;
  }

  var lines = [];
  lines.push('# Review session ' + id);
  lines.push('');
  lines.push('Use this file when applying website changes from a spoken review.');
  lines.push('Speech may be Marathi, Hindi, and English mixed. Keep the original wording.');
  lines.push('');
  lines.push('- Started: ' + started);
  lines.push('- Duration: ' + msToClock(durationMs));
  if (meta && meta.viewport) {
    lines.push('- Viewport: ' + meta.viewport.w + ' × ' + meta.viewport.h);
  }
  if (meta && meta.initialPage) {
    lines.push('- First page: ' + meta.initialPage);
  }
  lines.push('');

  var marks = events.filter(function (ev) {
    return ev.type === 'mark';
  });
  if (marks.length) {
    lines.push('## Marks (things they pointed at)');
    lines.push('');
    marks.forEach(function (ev) {
      var click = ev.lastClick || {};
      lines.push(
        '- **' +
          msToClock(ev.t) +
          '** on `' +
          pageLabel(ev.url) +
          '`' +
          (click.label ? ' — "' + String(click.label).replace(/\s+/g, ' ').trim() + '"' : '') +
          (click.selector ? ' (`' + click.selector + '`)' : '')
      );
    });
    lines.push('');
  }

  lines.push('## Timeline');
  lines.push('');

  var pageStarts = [];
  events.forEach(function (ev) {
    if (ev.type === 'page' || ev.type === 'start') {
      pageStarts.push(ev);
    }
  });
  if (!pageStarts.length) {
    pageStarts.push({ t: 0, type: 'start', url: (meta && meta.initialPage) || '/' });
  }

  pageStarts.forEach(function (pageEv, i) {
    var startMs = pageEv.t || 0;
    var endMs = i + 1 < pageStarts.length ? pageStarts[i + 1].t : durationMs + 1;
    var url = pageEv.url || (meta && meta.initialPage) || '/';
    lines.push('### ' + msToClock(startMs) + ' — ' + pageLabel(url));
    lines.push('');

    var inRange = events.filter(function (ev) {
      return ev.t >= startMs && ev.t < endMs && ev.type !== 'start' && ev.type !== 'page';
    });
    inRange.forEach(function (ev) {
      if (ev.type === 'click') {
        lines.push(
          '- ' +
            msToClock(ev.t) +
            ' **click** "' +
            String(ev.label || '').replace(/\s+/g, ' ').trim() +
            '"' +
            (ev.selector ? ' `' + ev.selector + '`' : '')
        );
      } else if (ev.type === 'mark') {
        lines.push('- ' + msToClock(ev.t) + ' **MARK** (treat as a requested change)');
      } else if (ev.type === 'resize') {
        lines.push('- ' + msToClock(ev.t) + ' viewport ' + ev.w + ' × ' + ev.h);
      } else if (ev.type === 'caption' && ev.text) {
        lines.push('- ' + msToClock(ev.t) + ' live caption (draft): ' + ev.text);
      }
    });

    var segs = segmentsForRange(segments, startMs, endMs);
    if (segs.length) {
      lines.push('');
      lines.push('**Speech:**');
      lines.push('');
      segs.forEach(function (seg) {
        lines.push('- ' + msToClock(Number(seg.start) * 1000) + ' ' + String(seg.text || '').trim());
      });
    } else if (!inRange.length) {
      lines.push('- (no clicks, marks, or speech on this page yet)');
    }
    lines.push('');
  });

  if (segments.length) {
    lines.push('## Full transcript');
    lines.push('');
    segments.forEach(function (seg) {
      lines.push(msToClock(Number(seg.start) * 1000) + '  ' + String(seg.text || '').trim());
    });
    lines.push('');
  } else {
    lines.push('## Full transcript');
    lines.push('');
    lines.push('_Speech-to-text has not finished yet. Audio is saved. Re-run transcribe when ready._');
    lines.push('');
  }

  return lines.join('\n');
}

module.exports = {
  isValidSessionId: isValidSessionId,
  newSessionId: newSessionId,
  msToClock: msToClock,
  pageLabel: pageLabel,
  parseJsonl: parseJsonl,
  segmentsForRange: segmentsForRange,
  buildSessionMarkdown: buildSessionMarkdown
};
