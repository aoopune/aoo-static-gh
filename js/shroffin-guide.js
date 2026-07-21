(function () {
  "use strict";

  if (window.__shroffinGuideLoaded) return;
  window.__shroffinGuideLoaded = true;

  function initLocalNav() {
    var localnav = document.querySelector(".localnav");
    if (!localnav || localnav.dataset.shroffinReady === "true") return;

    var content = localnav.querySelector(".localnav-content");
    var menu = localnav.querySelector(".localnav-menu");
    var list = localnav.querySelector(".localnav-list");
    var cta = localnav.querySelector(".localnav-cta");
    var title = localnav.querySelector(".localnav-title");
    if (!content || !menu || !list || !cta) return;

    localnav.dataset.shroffinReady = "true";
    list.id = list.id || "guide-localnav-list";

    var currentLink = list.querySelector('.localnav-link[aria-current="page"]');
    if (!currentLink && /(?:property-home|credit-life|home-loan)-insurance\.html$/.test(location.pathname)) {
      currentLink = Array.from(list.querySelectorAll(".localnav-link")).find(function (link) {
        return /home-loan-insurance\.html$/.test(link.getAttribute("href") || "");
      });
    }
    if (title && currentLink) {
      var currentLabel = document.createElement("span");
      currentLabel.className = "localnav-current-label";
      currentLabel.textContent = currentLink.textContent.trim();
      title.appendChild(currentLabel);
    }

    content.appendChild(cta);

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "localnav-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", list.id);
    toggle.setAttribute("aria-label", "Open Guide pages");
    toggle.innerHTML = '<span class="localnav-toggle-icon" aria-hidden="true"></span>';
    content.insertBefore(toggle, cta);

    var veil = document.createElement("div");
    veil.className = "localnav-veil";
    veil.hidden = true;
    document.body.appendChild(veil);

    var compactQuery = window.matchMedia("(max-width: 833px)");
    var open = false;

    function setOpen(next) {
      open = Boolean(next && compactQuery.matches);
      localnav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close Guide pages" : "Open Guide pages");
      veil.classList.toggle("is-visible", open);

      if (open) {
        veil.hidden = false;
        if (window.ShroffinMenus) {
          window.ShroffinMenus.request("guide-local", close);
          window.ShroffinMenus.lock(localnav, veil);
        }
      } else {
        veil.hidden = true;
        if (window.ShroffinMenus) {
          window.ShroffinMenus.release("guide-local");
          window.ShroffinMenus.unlock();
        }
      }
    }

    function close() {
      setOpen(false);
    }

    toggle.addEventListener("click", function () {
      setOpen(!open);
    });
    veil.addEventListener("click", close);
    list.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape" || !open) return;
      close();
      toggle.focus({ preventScroll: true });
    });

    function handleModeChange() {
      if (!compactQuery.matches) close();
    }

    if (compactQuery.addEventListener) {
      compactQuery.addEventListener("change", handleModeChange);
    } else {
      compactQuery.addListener(handleModeChange);
    }
    window.addEventListener("orientationchange", close);
    window.addEventListener("pageshow", close);
  }

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  /* Soft ease-out matching cubic-bezier(0.22, 1, 0.36, 1); Move-band ~1s. */
  function easeOutSoft(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  var softScrollFrame = 0;
  var softScrollCancel = null;

  function cancelSoftScroll() {
    if (softScrollFrame) {
      window.cancelAnimationFrame(softScrollFrame);
      softScrollFrame = 0;
    }
    if (softScrollCancel) {
      softScrollCancel();
      softScrollCancel = null;
    }
  }

  function softScrollTo(destination, done) {
    cancelSoftScroll();

    var styles = window.getComputedStyle(destination);
    var marginTop =
      parseFloat(styles.scrollMarginBlockStart || styles.scrollMarginTop) || 0;
    var targetY = Math.max(
      0,
      Math.round(
        destination.getBoundingClientRect().top + window.pageYOffset - marginTop
      )
    );
    var startY = window.pageYOffset;
    var distance = targetY - startY;

    if (prefersReducedMotion() || Math.abs(distance) < 2) {
      window.scrollTo(0, targetY);
      if (done) done();
      return;
    }

    var duration = 1000;
    var startTime = null;

    var finished = false;

    function finish() {
      if (finished) return;
      finished = true;
      softScrollFrame = 0;
      if (softScrollCancel) {
        softScrollCancel();
        softScrollCancel = null;
      }
      if (done) done();
    }

    function onInterrupt() {
      if (softScrollFrame) {
        window.cancelAnimationFrame(softScrollFrame);
        softScrollFrame = 0;
      }
      finish();
    }

    window.addEventListener("wheel", onInterrupt, { passive: true, once: true });
    window.addEventListener("touchmove", onInterrupt, {
      passive: true,
      once: true
    });
    softScrollCancel = function () {
      window.removeEventListener("wheel", onInterrupt);
      window.removeEventListener("touchmove", onInterrupt);
    };

    function step(now) {
      if (finished) return;
      if (startTime == null) startTime = now;
      var progress = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, startY + distance * easeOutSoft(progress));
      if (progress < 1) {
        softScrollFrame = window.requestAnimationFrame(step);
        return;
      }
      finish();
    }

    softScrollFrame = window.requestAnimationFrame(step);
  }

  function initSectionNav() {
    document.querySelectorAll(".guide-jump-wrap").forEach(function (wrap) {
      var rail = wrap.querySelector(".guide-jump");
      if (!rail) return;

      var links = Array.prototype.slice.call(rail.querySelectorAll('a[href^="#"]'));
      var destinations = new Map();

      links = links.filter(function (link) {
        var id = link.getAttribute("href").slice(1);
        var destination = id && document.getElementById(id);
        if (!destination) return false;
        destinations.set(id, destination);
        destination.setAttribute("tabindex", "-1");
        return true;
      });
      if (links.length < 2) return;

      function getLocationId() {
        if (!location.hash) return "";
        try {
          return decodeURIComponent(location.hash.slice(1));
        } catch (error) {
          return location.hash.slice(1);
        }
      }

      function setActive(id) {
        links.forEach(function (item) {
          var isActive = item.getAttribute("href").slice(1) === id;
          item.classList.toggle("is-active", isActive);
          if (isActive) item.setAttribute("aria-current", "true");
          else item.removeAttribute("aria-current");
        });
      }

      function finishJump(id) {
        var destination = destinations.get(id);
        if (!destination) return;
        if (history.pushState) {
          history.pushState(null, "", "#" + id);
        } else {
          location.hash = id;
        }
        destination.focus({ preventScroll: true });
      }

      function syncFromHash(moveFocus) {
        var id = getLocationId();
        setActive(id);
        if (!moveFocus || !destinations.has(id)) return;

        window.requestAnimationFrame(function () {
          destinations.get(id).focus({ preventScroll: true });
        });
      }

      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          var id = link.getAttribute("href").slice(1);
          var destination = destinations.get(id);
          if (!destination) return;

          event.preventDefault();
          setActive(id);
          softScrollTo(destination, function () {
            finishJump(id);
          });
        });
      });

      window.addEventListener("hashchange", function () {
        syncFromHash(true);
      });
      window.addEventListener("pageshow", function () {
        syncFromHash(false);
      });
      syncFromHash(false);
    });
  }

  function initFlipAccessibility() {
    var compact = window.matchMedia(
      "(max-width: 833px), (max-height: 500px) and (orientation: landscape), (prefers-reduced-motion: reduce)"
    );

    document.querySelectorAll(".guide-flip").forEach(function (flip) {
      var front = flip.querySelector(".guide-flip-face--front");
      var back = flip.querySelector(".guide-flip-face--back");
      var inner = flip.querySelector(".guide-flip-inner");
      if (!front || !back || !inner) return;

      function sync() {
        var flipped = flip.classList.contains("is-flipped");
        front.setAttribute("aria-hidden", flipped ? "true" : "false");
        back.setAttribute("aria-hidden", flipped ? "false" : "true");
        front.inert = flipped;
        back.inert = !flipped;
        if (compact.matches) inner.style.removeProperty("height");
      }

      new MutationObserver(sync).observe(flip, {
        attributes: true,
        attributeFilter: ["class"]
      });
      if (compact.addEventListener) compact.addEventListener("change", sync);
      window.addEventListener("resize", function () {
        window.requestAnimationFrame(sync);
      });
      sync();
    });
  }

  function initTabs() {
    document.querySelectorAll('.guide-seg[role="tablist"]').forEach(function (tablist) {
      var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
      tabs.forEach(function (tab, index) {
        tab.addEventListener("keydown", function (event) {
          var targetIndex = null;
          if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            targetIndex = (index + 1) % tabs.length;
          } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            targetIndex = (index - 1 + tabs.length) % tabs.length;
          } else if (event.key === "Home") {
            targetIndex = 0;
          } else if (event.key === "End") {
            targetIndex = tabs.length - 1;
          }

          if (targetIndex == null) return;
          event.preventDefault();
          tabs[targetIndex].focus();
          tabs[targetIndex].click();
        });
      });
    });
  }

  function initScrollRegions() {
    document.querySelectorAll(".table-wrap, .guide-table-wrap").forEach(function (region) {
      var table = region.querySelector("table");
      region.classList.add("shroffin-scroll-region");
      region.tabIndex = 0;
      if (!region.hasAttribute("role")) region.setAttribute("role", "region");
      if (!region.hasAttribute("aria-label")) {
        region.setAttribute("aria-label", "Scrollable table");
      }
      if (!region.querySelector(".visually-hidden")) {
        var hint = document.createElement("span");
        hint.className = "visually-hidden";
        hint.textContent = "Scroll horizontally to see more columns.";
        region.insertBefore(hint, region.firstChild);
      }
      if (
        table &&
        !table.querySelector("thead") &&
        table.querySelector("th[scope='row']")
      ) {
        region.classList.add("shroffin-key-value-table");
      }
    });
  }

  function initBreadcrumbs() {
    document.querySelectorAll(".guide-breadcrumb").forEach(function (breadcrumb) {
      if (breadcrumb.dataset.grouped === "true") return;
      var items = Array.prototype.slice.call(breadcrumb.children);
      if (!items.length) return;
      breadcrumb.textContent = "";

      for (var index = 0; index < items.length; index += 1) {
        var segment = document.createElement("span");
        segment.className = "guide-breadcrumb-segment";
        segment.appendChild(items[index]);
        if (
          items[index + 1] &&
          items[index + 1].classList.contains("guide-breadcrumb-sep")
        ) {
          segment.appendChild(items[index + 1]);
          index += 1;
        }
        breadcrumb.appendChild(segment);
      }
      breadcrumb.dataset.grouped = "true";
    });
  }

  function initReducedMotionUpdates() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    function settle() {
      if (!reduce.matches) return;
      document.querySelectorAll(".guide-moment, .home-moment, .learn-card").forEach(
        function (node) {
          node.classList.add("is-in", "is-visible");
        }
      );
    }
    if (reduce.addEventListener) reduce.addEventListener("change", settle);
    settle();
  }

  function initDynamicAboutReveals() {
    var container = document.getElementById("about-container");
    if (!container) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    var observer =
      !reduce.matches && "IntersectionObserver" in window
        ? new IntersectionObserver(
            function (entries) {
              entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-in");
                observer.unobserve(entry.target);
              });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
          )
        : null;

    function register() {
      container.querySelectorAll(".about-section:not([data-reveal-ready])").forEach(
        function (section) {
          section.dataset.revealReady = "true";
          if (observer) observer.observe(section);
          else section.classList.add("is-in");
        }
      );
    }

    new MutationObserver(register).observe(container, { childList: true, subtree: true });
    register();
  }

  function init() {
    initLocalNav();
    initSectionNav();
    initFlipAccessibility();
    initTabs();
    initScrollRegions();
    initBreadcrumbs();
    initReducedMotionUpdates();
    initDynamicAboutReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
