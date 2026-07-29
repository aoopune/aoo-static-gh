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
    /*
     * Localnav title stays "Guide" only. The current page is signalled by the
     * aria-current underline in the link row (desktop) / menu list (mobile),
     * so we no longer append the page name onto the title.
     */
    void title;

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
    var openSpacer = null;

    function setOpen(next) {
      open = Boolean(next && compactQuery.matches);
      if (open) {
        if (!openSpacer) {
          openSpacer = document.createElement("div");
          openSpacer.className = "localnav-open-spacer";
          openSpacer.setAttribute("aria-hidden", "true");
        }
        openSpacer.style.blockSize = localnav.offsetHeight + "px";
        if (!openSpacer.parentNode) {
          localnav.parentNode.insertBefore(openSpacer, localnav);
        }
      }

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
        if (openSpacer && openSpacer.parentNode) {
          openSpacer.parentNode.removeChild(openSpacer);
        }
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
    localnav.querySelectorAll("a[href]").forEach(function (link) {
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
    /* getBoundingClientRect includes CSS transforms (e.g. reveal translateY).
       Soft-scroll to the layout position so sticky offset lands correctly. */
    var layoutTop =
      destination.getBoundingClientRect().top + window.pageYOffset;
    var transform = styles.transform;
    if (transform && transform !== "none") {
      try {
        layoutTop -= new DOMMatrixReadOnly(transform).m42;
      } catch (error) {
        /* Older engines without DOMMatrixReadOnly — keep transformed top. */
      }
    }
    var targetY = Math.max(0, Math.round(layoutTop - marginTop));
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
    var wideQuery = window.matchMedia("(min-width: 1200px)");
    var rails = [];
    document.querySelectorAll(".guide-jump-wrap .guide-jump").forEach(function (rail) {
      rails.push(rail);
    });
    document.querySelectorAll(".mag-index").forEach(function (rail) {
      rails.push(rail);
    });

    rails.forEach(function (rail) {
      if (!rail || rail.dataset.shroffinTocReady === "true") return;
      rail.dataset.shroffinTocReady = "true";

      var links = Array.prototype.slice.call(rail.querySelectorAll('a[href^="#"]'));
      var destinations = new Map();
      var jumping = false;
      var activeId = "";
      var compact = null;
      var compactToggle = null;
      var compactLabel = null;
      var compactPanel = null;
      var compactOpen = false;
      var spyFrame = 0;

      links = links.filter(function (link) {
        var id = link.getAttribute("href").slice(1);
        var destination = id && document.getElementById(id);
        if (!destination) return false;
        destinations.set(id, destination);
        destination.setAttribute("tabindex", "-1");
        return true;
      });
      if (links.length < 2) return;

      /* Pair Contents with the story so the rail can stick beside long pages.
         Lead/opener copy stays above — Contents starts with the first section. */
      if (rail.classList.contains("mag-index")) {
        var story = rail.nextElementSibling;
        if (
          story &&
          story.classList.contains("guide-story") &&
          !rail.parentElement.classList.contains("mag-toc-shell")
        ) {
          var parent = rail.parentNode;
          var firstId = links[0] && links[0].getAttribute("href").slice(1);
          var firstSection = firstId && document.getElementById(firstId);

          if (firstSection && story.contains(firstSection)) {
            while (
              story.firstElementChild &&
              story.firstElementChild !== firstSection
            ) {
              parent.insertBefore(story.firstElementChild, rail);
            }
          }

          var shell = document.createElement("div");
          shell.className = "mag-toc-shell";
          parent.insertBefore(shell, rail);
          shell.appendChild(rail);
          shell.appendChild(story);
        }
      }

      function linkLabel(link) {
        var label = link.querySelector(".mag-index-label");
        return ((label && label.textContent) || link.textContent || "")
          .replace(/\s+/g, " ")
          .trim();
      }

      function getLocationId() {
        if (!location.hash) return "";
        try {
          return decodeURIComponent(location.hash.slice(1));
        } catch (error) {
          return location.hash.slice(1);
        }
      }

      function stickyOffset() {
        var root = document.documentElement;
        var styles = window.getComputedStyle(root);
        var gnOffset = parseFloat(styles.getPropertyValue("--shroffin-gn-offset"));
        var gn = Number.isFinite(gnOffset)
          ? gnOffset
          : parseFloat(styles.getPropertyValue("--shroffin-gn-height")) ||
            parseFloat(styles.getPropertyValue("--gn-height")) ||
            48;
        var ln =
          parseFloat(styles.getPropertyValue("--shroffin-ln-height")) ||
          parseFloat(styles.getPropertyValue("--ln-height")) ||
          52;
        var compactExtra =
          !wideQuery.matches && document.body.classList.contains("mag-toc-compact-on")
            ? 46
            : 0;
        return gn + ln + compactExtra + 24;
      }

      function setCompactOpen(next) {
        if (!compact || !compactToggle || !compactPanel) return;
        compactOpen = Boolean(next);
        compact.classList.toggle("is-open", compactOpen);
        compactToggle.setAttribute("aria-expanded", compactOpen ? "true" : "false");
        compactPanel.hidden = !compactOpen;
        if (compactOpen) {
          document.addEventListener("keydown", onCompactKey);
        } else {
          document.removeEventListener("keydown", onCompactKey);
        }
      }

      function onCompactKey(event) {
        if (event.key !== "Escape" || !compactOpen) return;
        setCompactOpen(false);
        if (compactToggle) compactToggle.focus({ preventScroll: true });
      }

      function syncCompactVisibility() {
        if (!compact || !rail.classList.contains("mag-index")) return;
        if (wideQuery.matches) {
          document.body.classList.remove("mag-toc-compact-on");
          compact.hidden = true;
          setCompactOpen(false);
          return;
        }
        var rect = rail.getBoundingClientRect();
        var localnav = document.querySelector(".localnav");
        var localBottom = localnav ? localnav.getBoundingClientRect().bottom : 100;
        var pastContents = rect.bottom < localBottom + 8;

        /* Hide once the last section has scrolled away — otherwise the bar
           (e.g. “Other”) sticks through the disclaimer and footer. */
        var pastEnd = false;
        var lastLink = links[links.length - 1];
        var lastId = lastLink && lastLink.getAttribute("href").slice(1);
        var lastSection = lastId && destinations.get(lastId);
        if (lastSection) {
          pastEnd = lastSection.getBoundingClientRect().bottom <= localBottom + 8;
        }

        var show = pastContents && !pastEnd;
        document.body.classList.toggle("mag-toc-compact-on", show);
        compact.hidden = !show;
        if (!show) setCompactOpen(false);
      }

      function setActive(id) {
        activeId = id || "";
        links.forEach(function (item) {
          var isActive = activeId && item.getAttribute("href").slice(1) === activeId;
          item.classList.toggle("is-active", isActive);
          if (isActive) item.setAttribute("aria-current", "true");
          else item.removeAttribute("aria-current");
        });
        if (compact && compactLabel) {
          var activeLink =
            (activeId &&
              links.find(function (item) {
                return item.getAttribute("href").slice(1) === activeId;
              })) ||
            links[0];
          compactLabel.textContent = linkLabel(activeLink);
        }
        if (compactPanel) {
          compactPanel.querySelectorAll("a[href^='#']").forEach(function (item) {
            var isActive = activeId && item.getAttribute("href").slice(1) === activeId;
            item.classList.toggle("is-active", isActive);
            if (isActive) item.setAttribute("aria-current", "true");
            else item.removeAttribute("aria-current");
          });
        }
      }

      function activeFromScroll() {
        var offset = stickyOffset();
        var current = "";
        links.forEach(function (link) {
          var id = link.getAttribute("href").slice(1);
          var destination = destinations.get(id);
          if (!destination) return;
          if (destination.getBoundingClientRect().top <= offset) current = id;
        });
        return current;
      }

      function syncFromScroll() {
        if (jumping) return;
        var id = activeFromScroll();
        if (id !== activeId) setActive(id);
        syncCompactVisibility();
      }

      function requestScrollSync() {
        if (spyFrame) return;
        spyFrame = window.requestAnimationFrame(function () {
          spyFrame = 0;
          syncFromScroll();
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

      function jumpTo(id) {
        var destination = destinations.get(id);
        if (!destination) return;
        jumping = true;
        setActive(id);
        setCompactOpen(false);
        softScrollTo(destination, function () {
          finishJump(id);
          jumping = false;
          syncFromScroll();
        });
      }

      function syncFromHash(moveFocus) {
        var id = getLocationId();
        if (id && destinations.has(id)) {
          setActive(id);
          if (moveFocus) {
            window.requestAnimationFrame(function () {
              destinations.get(id).focus({ preventScroll: true });
            });
          }
        } else if (!jumping) {
          setActive(activeFromScroll());
        }
        syncCompactVisibility();
      }

      function buildCompact() {
        if (!rail.classList.contains("mag-index") || compact) return;

        compact = document.createElement("div");
        compact.className = "mag-toc-compact";
        compact.hidden = true;

        compactToggle = document.createElement("button");
        compactToggle.type = "button";
        compactToggle.className = "mag-toc-compact-toggle";
        compactToggle.setAttribute("aria-expanded", "false");
        compactToggle.setAttribute("aria-controls", "mag-toc-compact-panel");

        compactLabel = document.createElement("span");
        compactLabel.className = "mag-toc-compact-label";
        compactLabel.textContent = linkLabel(links[0]);

        var chevron = document.createElement("span");
        chevron.className = "mag-toc-compact-chevron";
        chevron.setAttribute("aria-hidden", "true");

        compactToggle.appendChild(compactLabel);
        compactToggle.appendChild(chevron);

        compactPanel = document.createElement("div");
        compactPanel.className = "mag-toc-compact-panel";
        compactPanel.id = "mag-toc-compact-panel";
        compactPanel.hidden = true;

        var list = document.createElement("ul");
        list.className = "mag-toc-compact-list";
        links.forEach(function (link) {
          var item = document.createElement("li");
          var clone = document.createElement("a");
          clone.className = "mag-toc-compact-link";
          clone.href = link.getAttribute("href");
          clone.textContent = linkLabel(link);
          clone.addEventListener("click", function (event) {
            event.preventDefault();
            jumpTo(link.getAttribute("href").slice(1));
          });
          item.appendChild(clone);
          list.appendChild(item);
        });
        compactPanel.appendChild(list);

        compactToggle.addEventListener("click", function () {
          setCompactOpen(!compactOpen);
        });

        compact.appendChild(compactToggle);
        compact.appendChild(compactPanel);
        document.body.appendChild(compact);

        document.addEventListener("click", function (event) {
          if (!compactOpen || !compact) return;
          if (compact.contains(event.target)) return;
          setCompactOpen(false);
        });
      }

      buildCompact();

      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          var id = link.getAttribute("href").slice(1);
          if (!destinations.get(id)) return;
          event.preventDefault();
          jumpTo(id);
        });
      });

      window.addEventListener("hashchange", function () {
        syncFromHash(true);
      });
      window.addEventListener("popstate", function () {
        syncFromHash(true);
      });
      window.addEventListener("pageshow", function () {
        syncFromHash(false);
      });
      window.addEventListener("scroll", requestScrollSync, { passive: true });
      window.addEventListener("resize", requestScrollSync);
      if (wideQuery.addEventListener) {
        wideQuery.addEventListener("change", function () {
          syncCompactVisibility();
          requestScrollSync();
        });
      } else if (wideQuery.addListener) {
        wideQuery.addListener(function () {
          syncCompactVisibility();
          requestScrollSync();
        });
      }

      syncFromHash(false);
      requestScrollSync();
    });
  }

  function initFlipAccessibility() {
    function closedLabel(btn) {
      if (!btn.dataset.closedLabel) {
        var text = "";
        Array.prototype.forEach.call(btn.childNodes, function (node) {
          if (node.nodeType === 3) text += node.textContent;
        });
        btn.dataset.closedLabel = text.replace(/\s+/g, " ").trim() || "Open";
      }
      return btn.dataset.closedLabel;
    }

    function setToggleLabel(btn, open) {
      var label = open ? "Close" : closedLabel(btn);
      Array.prototype.slice.call(btn.childNodes).forEach(function (node) {
        if (node.nodeType === 3) btn.removeChild(node);
      });
      var svg = btn.querySelector("svg");
      btn.insertBefore(document.createTextNode(label + (svg ? " " : "")), svg || null);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    document.querySelectorAll(".guide-flip").forEach(function (flip) {
      var front = flip.querySelector(".guide-flip-face--front");
      var back = flip.querySelector(".guide-flip-face--back");
      if (!front || !back) return;
      var wasOpen = flip.classList.contains("is-flipped");
      var toggles = flip.querySelectorAll(".guide-flip-face--front [data-flip]");

      function scrollToOpened() {
        var target = toggles[0] || back;
        /* Same soft ~1s ease as Contents section jumps. */
        window.requestAnimationFrame(function () {
          softScrollTo(target);
        });
      }

      function sync() {
        var open = flip.classList.contains("is-flipped");
        front.setAttribute("aria-hidden", "false");
        front.inert = false;
        back.setAttribute("aria-hidden", open ? "false" : "true");
        back.inert = !open;
        toggles.forEach(function (btn) {
          setToggleLabel(btn, open);
        });
        if (open && !wasOpen) scrollToOpened();
        wasOpen = open;
      }

      new MutationObserver(sync).observe(flip, {
        attributes: true,
        attributeFilter: ["class"]
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
      document.querySelectorAll(
        ".guide-moment, .mag-reveal, .home-moment, .learn-card"
      ).forEach(function (node) {
        node.classList.add("is-in", "is-visible");
      });
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
