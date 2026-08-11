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
        document.querySelectorAll('[data-guide-scrub="on"], [data-home-scrub="zero"]')
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
      el.classList.add("guide-scrub");
      el.style.setProperty("--guide-scrub", "0");
    });

    var frame = 0;

    function progressFor(el) {
      if (el.closest("[hidden]")) return 0;
      var vh = window.innerHeight || 1;

      if (el.getAttribute("data-home-scrub") === "zero") {
        /* Short nudge — commissions / bias after a little more scroll */
        if (!el.classList.contains("is-in")) return 0;
        var pin = el.querySelector(".home-zero-pin") || el;
        var rect = pin.getBoundingClientRect();
        var start = vh * 0.72;
        var end = vh * 0.48;
        return clamp01((start - rect.top) / (start - end));
      }

      var moment = el.closest(".guide-moment");
      if (moment && !moment.classList.contains("is-in")) return 0;
      var rect = el.getBoundingClientRect();
      var start = vh * 0.85;
      var end = vh * 0.35;
      return clamp01((start - rect.top) / (start - end));
    }

    function applyHomeZero(el, p) {
      var rest = segment(p, 0.12, 0.58);
      var body = segment(p, 0.45, 0.92);
      el.style.setProperty("--hz-rest", rest.toFixed(4));
      el.style.setProperty("--hz-body", body.toFixed(4));
    }

    function tick() {
      frame = 0;
      nodes.forEach(function (el) {
        var p = progressFor(el);
        if (el.getAttribute("data-home-scrub") === "zero") {
          applyHomeZero(el, p);
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
