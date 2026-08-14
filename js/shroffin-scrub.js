(function () {
  if (window.ShroffinScrub) return;

  var cleanups = [];

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function clamp01(t) {
    return Math.min(1, Math.max(0, t));
  }

  function easeOutSoft(t) {
    t = clamp01(t);
    return 1 - Math.pow(1 - t, 3);
  }

  function segment(p, a, b) {
    if (b <= a) return p >= b ? 1 : 0;
    return easeOutSoft((p - a) / (b - a));
  }

  function destroy() {
    while (cleanups.length) {
      try {
        cleanups.pop()();
      } catch (e) {}
    }
  }

  function init() {
    destroy();
    if (prefersReducedMotion()) return;

    var nodes = Array.prototype.slice
      .call(
        document.querySelectorAll(
          '[data-guide-scrub="on"], [data-home-scrub="zero"], [data-home-scrub="lead"]'
        )
      )
      .filter(function (el) {
        return !el.closest("[hidden]");
      });
    if (!nodes.length) return;

    nodes.forEach(function (el) {
      if (el.getAttribute("data-home-scrub") === "zero") {
        el.style.setProperty("--hz-rest", "0");
        el.style.setProperty("--hz-body", "0");
        return;
      }
      if (el.getAttribute("data-home-scrub") === "lead") {
        el.style.setProperty("--hl-line-1", "1");
        el.style.setProperty("--hl-line-2", "0");
        el.style.setProperty("--hl-line-3", "0");
        el.style.setProperty("--hl-line-4", "0");
        return;
      }
      el.classList.add("guide-scrub");
      el.style.setProperty("--guide-scrub", "0");
    });

    var frame = 0;

    function progressFor(el) {
      if (el.closest("[hidden]")) return 0;
      var vh = window.innerHeight || 1;

      if (el.getAttribute("data-home-scrub") === "zero") {
        /* Use the sticky runway so reveals feel controlled. */
        if (!el.classList.contains("is-in")) return 0;
        var track = el.querySelector(".home-zero-track") || el;
        var trackRect = track.getBoundingClientRect();
        var runway = Math.max(1, track.offsetHeight - vh);
        var traveled = Math.max(0, -trackRect.top);
        /* Finish the body line before the pin unsticks, then hold to read. */
        var revealRunway = runway * 0.58;
        return clamp01(traveled / Math.max(1, revealRunway));
      }
      if (el.getAttribute("data-home-scrub") === "lead") {
        var leadTrack = el.querySelector(".home-lead-track") || el;
        var leadRect = leadTrack.getBoundingClientRect();
        var leadRunway = Math.max(1, leadTrack.offsetHeight - vh);
        var leadTraveled = Math.max(0, -leadRect.top);
        /* Finish reveal before the runway ends, then hold fully visible. */
        var revealRunway = leadRunway * 0.78;
        return clamp01(leadTraveled / Math.max(1, revealRunway));
      }

      var moment = el.closest(".guide-moment");
      if (moment && !moment.classList.contains("is-in")) return 0;
      var rect = el.getBoundingClientRect();
      var start = vh * 0.85;
      var end = vh * 0.35;
      return clamp01((start - rect.top) / (start - end));
    }

    function applyHomeZero(el, p) {
      /* Soft stagger: commissions/bias first, body after more scroll.
         Body lands before progress hits 1 so the hold is fully readable. */
      var rest = segment(p, 0.38, 0.78);
      var body = segment(p, 0.56, 0.86);
      el.style.setProperty("--hz-rest", rest.toFixed(4));
      el.style.setProperty("--hz-body", body.toFixed(4));
    }

    function applyHomeLead(el, p) {
      /* Keep the hook visible, then reveal each line as scroll progresses. */
      var line2 = segment(p, 0.28, 0.62);
      var line3 = segment(p, 0.56, 0.84);
      var line4 = segment(p, 0.80, 1.0);
      el.style.setProperty("--hl-line-1", "1");
      el.style.setProperty("--hl-line-2", line2.toFixed(4));
      el.style.setProperty("--hl-line-3", line3.toFixed(4));
      el.style.setProperty("--hl-line-4", line4.toFixed(4));
    }

    function tick() {
      frame = 0;
      nodes.forEach(function (el) {
        var p = progressFor(el);
        if (el.getAttribute("data-home-scrub") === "zero") {
          applyHomeZero(el, p);
          return;
        }
        if (el.getAttribute("data-home-scrub") === "lead") {
          applyHomeLead(el, p);
          return;
        }
        el.style.setProperty("--guide-scrub", p.toFixed(4));
        if (p >= 1) el.classList.add("is-scrub-done");
        else el.classList.remove("is-scrub-done");
      });
    }

    function request() {
      if (frame) return;
      frame = window.requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    tick();

    cleanups.push(function () {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      nodes.forEach(function (el) {
        if (el.getAttribute("data-home-scrub") === "zero") {
          el.style.removeProperty("--hz-rest");
          el.style.removeProperty("--hz-body");
          return;
        }
        if (el.getAttribute("data-home-scrub") === "lead") {
          el.style.removeProperty("--hl-line-1");
          el.style.removeProperty("--hl-line-2");
          el.style.removeProperty("--hl-line-3");
          el.style.removeProperty("--hl-line-4");
          return;
        }
        el.classList.remove("guide-scrub", "is-scrub-done");
        el.style.removeProperty("--guide-scrub");
      });
    });
  }

  window.ShroffinScrub = { init: init, destroy: destroy };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      if (!document.body.classList.contains("guide-reading")) init();
    });
  } else if (!document.body.classList.contains("guide-reading")) {
    init();
  }
})();
