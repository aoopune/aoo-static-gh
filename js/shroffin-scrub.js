(function () {
  if (window.ShroffinScrub) return;

  var cleanups = [];

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
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
      .call(document.querySelectorAll('[data-guide-scrub="on"]'))
      .filter(function (el) {
        return !el.closest("[hidden]");
      });
    if (!nodes.length) return;

    nodes.forEach(function (el) {
      el.classList.add("guide-scrub");
      el.style.setProperty("--guide-scrub", "0");
    });

    var frame = 0;

    function progressFor(el) {
      if (el.closest("[hidden]")) return 0;
      var moment = el.closest(".guide-moment");
      if (moment && !moment.classList.contains("is-in")) return 0;
      var rect = el.getBoundingClientRect();
      var vh = window.innerHeight || 1;
      var start = vh * 0.85;
      var end = vh * 0.35;
      var t = (start - rect.top) / (start - end);
      return Math.min(1, Math.max(0, t));
    }

    function tick() {
      frame = 0;
      nodes.forEach(function (el) {
        var p = progressFor(el);
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
