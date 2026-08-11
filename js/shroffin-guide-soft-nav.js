/**
 * Soft navigation between Guide pages.
 * Keeps globalnav + localnav mounted; swaps only #guide-swap content.
 * URLs, Back/Forward, and full reload remain first-class.
 */
(function () {
  "use strict";

  if (window.ShroffinGuideSoftNav) return;

  var FADE_MS = 500;
  var GUIDE_FILES = [
    "guide.html",
    "guide-documents.html",
    "tax-benefits.html",
    "concessions.html",
    "home-loan-insurance.html",
    "property-home-insurance.html",
    "credit-life-insurance.html",
    "home-loan-complaints.html"
  ];

  var INSURANCE_FILES = {
    "home-loan-insurance.html": true,
    "property-home-insurance.html": true,
    "credit-life-insurance.html": true
  };

  var LOCALNAV_FILE_FOR = {
    "guide.html": "guide.html",
    "guide-documents.html": "guide-documents.html",
    "tax-benefits.html": "tax-benefits.html",
    "concessions.html": "concessions.html",
    "home-loan-insurance.html": "home-loan-insurance.html",
    "property-home-insurance.html": "home-loan-insurance.html",
    "credit-life-insurance.html": "home-loan-insurance.html",
    "home-loan-complaints.html": "home-loan-complaints.html"
  };

  var cache = Object.create(null);
  var scrollMemory = Object.create(null);
  var navigating = false;
  var started = false;
  var activeGuideFile = "";

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function fileFromUrl(url) {
    try {
      var parsed = new URL(url, window.location.href);
      if (parsed.origin !== window.location.origin) return "";
      var parts = parsed.pathname.split("/");
      return parts[parts.length - 1] || "";
    } catch (error) {
      return "";
    }
  }

  function isGuideFile(file) {
    return GUIDE_FILES.indexOf(file) !== -1;
  }

  function canHandle(url) {
    var file = fileFromUrl(url);
    if (!isGuideFile(file)) return false;
    var parsed = new URL(url, window.location.href);
    /* Soft-nav owns whole Guide pages; in-page hashes stay with Contents. */
    if (parsed.hash && file === activeGuideFile) return false;
    return true;
  }

  function absoluteHref(url) {
    return new URL(url, window.location.href).href;
  }

  function samePage(url) {
    return fileFromUrl(url) === fileFromUrl(window.location.href);
  }

  function swapRoot() {
    return document.getElementById("guide-swap");
  }

  function wait(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function fadeSwap(el, hide) {
    if (!el) return Promise.resolve();
    if (prefersReducedMotion()) {
      el.classList.toggle("is-guide-soft-fading", hide);
      if (!hide) el.classList.remove("is-guide-soft-fading");
      return Promise.resolve();
    }
    if (hide) {
      el.classList.add("is-guide-soft-fading");
      return wait(FADE_MS);
    }
    el.classList.add("is-guide-soft-fading");
    return new Promise(function (resolve) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.classList.remove("is-guide-soft-fading");
          wait(FADE_MS).then(resolve);
        });
      });
    });
  }

  function fetchPage(url) {
    var href = absoluteHref(url);
    var file = fileFromUrl(href);
    if (cache[file]) return Promise.resolve(cache[file]);

    return fetch(href, { credentials: "same-origin" }).then(function (response) {
      if (!response.ok) throw new Error("Guide soft-nav fetch failed: " + response.status);
      return response.text();
    }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, "text/html");
      var nextSwap = doc.getElementById("guide-swap");
      var nextMain = doc.querySelector("main.guide-content");
      if (!nextSwap || !nextMain) {
        throw new Error("Guide soft-nav missing .guide-swap on " + file);
      }
      var payload = {
        file: file,
        href: href,
        title: doc.title || "",
        description:
          (doc.querySelector('meta[name="description"]') || {}).content || "",
        mainClass: nextMain.className,
        swapHtml: nextSwap.innerHTML
      };
      cache[file] = payload;
      return payload;
    });
  }

  function prefetch(url) {
    if (!canHandle(url) || samePage(url)) return;
    fetchPage(url).catch(function () {
      /* Prefetch is best-effort. */
    });
  }

  function updateDocumentMeta(payload) {
    if (payload.title) document.title = payload.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && payload.description) meta.setAttribute("content", payload.description);
  }

  function updateMainClass(payload) {
    var main = document.querySelector("main.guide-content");
    if (main && payload.mainClass) main.className = payload.mainClass;
  }

  function syncLocalnavCurrent(file) {
    var list = document.querySelector(".localnav-list");
    if (!list) return;
    var currentFile = LOCALNAV_FILE_FOR[file] || file;
    list.querySelectorAll(".localnav-link").forEach(function (link) {
      var linkFile = fileFromUrl(link.href);
      if (linkFile === currentFile) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    var label = document.querySelector(".localnav-current-label");
    var current = list.querySelector('.localnav-link[aria-current="page"]');
    if (label && current) label.textContent = current.textContent.trim();
  }

  function syncGlobalGuideCurrent(file) {
    var guideItem = document.getElementById("nav-guide");
    if (!guideItem) return;
    var trigger = document.getElementById("nav-guide-trigger");
    if (trigger) trigger.setAttribute("aria-current", "page");

    var map = {
      "guide.html": "/pages/guide.html",
      "guide-documents.html": "/pages/guide-documents.html",
      "tax-benefits.html": "/pages/tax-benefits.html",
      "concessions.html": "/pages/concessions.html",
      "home-loan-insurance.html": "/pages/home-loan-insurance.html",
      "property-home-insurance.html": "/pages/home-loan-insurance.html",
      "credit-life-insurance.html": "/pages/home-loan-insurance.html",
      "home-loan-complaints.html": "/pages/home-loan-complaints.html"
    };
    var want = map[file];
    guideItem.querySelectorAll(".globalnav-submenu-link").forEach(function (link) {
      try {
        var path = new URL(link.href, window.location.href).pathname;
        if (want && path === want) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      } catch (error) {
        link.removeAttribute("aria-current");
      }
    });
  }

  function focusArrival() {
    var swap = swapRoot();
    var title = swap && swap.querySelector(".guide-hero-title, h1");
    var target = title || swap;
    if (!target) return;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    try {
      target.focus({ preventScroll: true });
    } catch (error) {
      /* ignore */
    }
  }

  function currentScrollY() {
    if (
      document.body.classList.contains("shroffin-scroll-locked") &&
      window.ShroffinMenus &&
      typeof window.ShroffinMenus.getLockedScrollY === "function"
    ) {
      return window.ShroffinMenus.getLockedScrollY();
    }
    return window.pageYOffset || window.scrollY || 0;
  }

  function syncMenuUnlockScroll(y) {
    if (
      window.ShroffinMenus &&
      typeof window.ShroffinMenus.adoptLockScroll === "function"
    ) {
      window.ShroffinMenus.adoptLockScroll(y);
    }
  }

  function applyPayload(payload, options) {
    var opts = options || {};
    var swap = swapRoot();
    if (!swap) return Promise.reject(new Error("Missing #guide-swap"));

    var scrollY =
      typeof opts.restoreScroll === "number" ? opts.restoreScroll : 0;
    /* Retarget menu unlock before close starts its delayed unlock. */
    syncMenuUnlockScroll(scrollY);

    if (window.ShroffinGuide && typeof window.ShroffinGuide.closeLocalNav === "function") {
      window.ShroffinGuide.closeLocalNav();
    }
    if (window.ShroffinGuide && typeof window.ShroffinGuide.destroyContent === "function") {
      window.ShroffinGuide.destroyContent();
    }

    updateDocumentMeta(payload);
    updateMainClass(payload);
    syncLocalnavCurrent(payload.file);
    syncGlobalGuideCurrent(payload.file);
    activeGuideFile = payload.file;
    swap.innerHTML = payload.swapHtml;

    window.scrollTo(0, scrollY);

    if (window.ShroffinGuide && typeof window.ShroffinGuide.initContent === "function") {
      window.ShroffinGuide.initContent();
    }
    if (window.ShroffinSelectionIndicator) {
      window.ShroffinSelectionIndicator.init();
      window.ShroffinSelectionIndicator.refresh();
    }

    focusArrival();
    window.dispatchEvent(
      new CustomEvent("shroffin:guide-navigated", {
        detail: { file: payload.file, href: payload.href }
      })
    );
    return Promise.resolve();
  }

  function navigate(url, options) {
    var opts = options || {};
    if (!canHandle(url)) {
      window.location.href = url;
      return Promise.resolve();
    }
    if (samePage(url) && !opts.force) return Promise.resolve();
    if (navigating) return Promise.resolve();

    navigating = true;
    var fromFile = fileFromUrl(window.location.href);
    scrollMemory[fromFile] = currentScrollY();
    /* Forward Guide hops open at the top — do not let a later menu unlock
       restore the mid-page offset captured when the Guide menu opened. */
    if (!opts.popstate) {
      syncMenuUnlockScroll(0);
    }

    var href = absoluteHref(url);
    var swap = swapRoot();

    return fetchPage(href)
      .then(function (payload) {
        return fadeSwap(swap, true).then(function () {
          if (!opts.replace && !opts.popstate) {
            history.pushState({ shroffinGuideSoft: true, file: payload.file }, "", href);
          } else if (opts.replace) {
            history.replaceState({ shroffinGuideSoft: true, file: payload.file }, "", href);
          }
          return applyPayload(payload, {
            restoreScroll: opts.popstate ? scrollMemory[payload.file] || 0 : 0
          }).then(function () {
            return fadeSwap(swap, false);
          });
        });
      })
      .catch(function () {
        window.location.href = href;
      })
      .then(function () {
        navigating = false;
      });
  }

  function isPlainActivate(event, link) {
    if (!event || !link) return false;
    if (event.defaultPrevented) return false;
    if (typeof event.button === "number" && event.button !== 0) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    var target = link.getAttribute("target");
    if (target && target !== "_self") return false;
    return true;
  }

  function onDocumentClick(event) {
    var link = event.target && event.target.closest
      ? event.target.closest("a[href]")
      : null;
    if (!link || !canHandle(link.href)) return;
    /* Localnav desktop exit underline owns the click (capture on list). */
    if (
      link.classList.contains("localnav-link") &&
      !(window.matchMedia && window.matchMedia("(max-width: 833px)").matches)
    ) {
      return;
    }
    if (!isPlainActivate(event, link)) return;
    event.preventDefault();
    navigate(link.href);
  }

  function onPointerPrefetch(event) {
    var link = event.target && event.target.closest
      ? event.target.closest("a[href]")
      : null;
    if (!link || !canHandle(link.href)) return;
    prefetch(link.href);
  }

  function onPopState() {
    var file = fileFromUrl(window.location.href);
    if (!isGuideFile(file)) return;
    /* Hash-only history within the same Guide page — Contents owns this. */
    if (file === activeGuideFile) return;
    navigate(window.location.href, { popstate: true, force: true });
  }

  function init() {
    if (started) return;
    if (!swapRoot()) return;
    if (!isGuideFile(fileFromUrl(window.location.href))) return;
    started = true;

    activeGuideFile = fileFromUrl(window.location.href);
    if (!history.state || !history.state.shroffinGuideSoft) {
      history.replaceState(
        { shroffinGuideSoft: true, file: activeGuideFile },
        "",
        window.location.href
      );
    }

    document.addEventListener("click", onDocumentClick);
    document.addEventListener("pointerenter", onPointerPrefetch, true);
    document.addEventListener("focusin", onPointerPrefetch, true);
    window.addEventListener("popstate", onPopState);

    document.querySelectorAll(".localnav-link[href], .guide-breadcrumb a[href]").forEach(function (link) {
      if (canHandle(link.href)) prefetch(link.href);
    });
  }

  window.ShroffinGuideSoftNav = {
    init: init,
    navigate: navigate,
    canHandle: canHandle,
    prefetch: prefetch,
    isInsuranceFile: function (file) {
      return Boolean(INSURANCE_FILES[file]);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
