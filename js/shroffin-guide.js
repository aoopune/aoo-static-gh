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
    if (!content || !menu || !list || !cta) return;

    localnav.dataset.shroffinReady = "true";
    list.id = list.id || "guide-localnav-list";

    var currentLink = list.querySelector('.localnav-link[aria-current="page"]');
    if (!currentLink && /(?:property-home|credit-life|home-loan)-insurance\.html$/.test(location.pathname)) {
      currentLink = Array.from(list.querySelectorAll(".localnav-link")).find(function (link) {
        return /home-loan-insurance\.html$/.test(link.getAttribute("href") || "");
      });
    }
    content.appendChild(cta);

    /* One control: current-page text + chevron both open the Guide menu. */
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "localnav-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", list.id);
    toggle.setAttribute("aria-label", "Open Guide pages");

    if (currentLink) {
      var currentLabel = document.createElement("span");
      currentLabel.className = "localnav-current-label";
      currentLabel.setAttribute("aria-hidden", "true");
      currentLabel.textContent = currentLink.textContent.trim();
      toggle.appendChild(currentLabel);
    }

    var toggleIcon = document.createElement("span");
    toggleIcon.className = "localnav-toggle-icon";
    toggleIcon.setAttribute("aria-hidden", "true");
    toggle.appendChild(toggleIcon);
    content.insertBefore(toggle, cta);

    var veil = document.createElement("div");
    veil.className = "localnav-veil";
    veil.hidden = true;
    document.body.appendChild(veil);

    var compactQuery = window.matchMedia("(max-width: 833px)");
    var open = false;
    var openSpacer = null;
    var globalSpacer = null;

    function mainBarStillInView() {
      var globalnav = document.querySelector(".globalnav");
      if (!globalnav) return false;
      return globalnav.getBoundingClientRect().bottom > 1;
    }

    function removeSpacer(node) {
      if (node && node.parentNode) node.parentNode.removeChild(node);
    }

    function setOpen(next) {
      open = Boolean(next && compactQuery.matches);
      var withMainBar = open && mainBarStillInView();
      var globalnav = document.querySelector(".globalnav");

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

        if (withMainBar && globalnav) {
          if (!globalSpacer) {
            globalSpacer = document.createElement("div");
            globalSpacer.className = "localnav-open-gn-spacer";
            globalSpacer.setAttribute("aria-hidden", "true");
          }
          globalSpacer.style.blockSize = globalnav.offsetHeight + "px";
          if (!globalSpacer.parentNode) {
            globalnav.parentNode.insertBefore(globalSpacer, globalnav);
          }
        } else {
          removeSpacer(globalSpacer);
        }
      }

      localnav.classList.toggle("is-open", open);
      localnav.classList.toggle("is-open-with-global", withMainBar);
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
        removeSpacer(openSpacer);
        removeSpacer(globalSpacer);
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

    closeLocalNavFn = close;
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

  /* Same right-chevron mark used by the sticky chapter picker. */
  function createGuideChevron(className) {
    var chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chevron.setAttribute("class", className);
    chevron.setAttribute("viewBox", "0 0 10 10");
    chevron.setAttribute("aria-hidden", "true");
    chevron.setAttribute("focusable", "false");
    var chevronPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    chevronPath.setAttribute("d", "M2.2 1.2 6.8 5 2.2 8.8");
    chevronPath.setAttribute("fill", "none");
    chevronPath.setAttribute("stroke", "currentColor");
    chevronPath.setAttribute("stroke-width", "1.6");
    chevronPath.setAttribute("stroke-linecap", "round");
    chevronPath.setAttribute("stroke-linejoin", "round");
    chevron.appendChild(chevronPath);
    return chevron;
  }

  var softScrollFrame = 0;
  var softScrollCancel = null;
  var softStripScrollFrame = 0;

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

  function cancelSoftStripScroll() {
    if (softStripScrollFrame) {
      window.cancelAnimationFrame(softStripScrollFrame);
      softStripScrollFrame = 0;
    }
  }

  var contentAbort = null;
  var contentCleanups = [];
  var pageCleanup = null;
  var closeLocalNavFn = null;

  function addContentCleanup(fn) {
    if (typeof fn === "function") contentCleanups.push(fn);
  }

  function contentSignal() {
    return contentAbort && contentAbort.signal ? contentAbort.signal : undefined;
  }

  function endContentLifecycle() {
    if (pageCleanup) {
      try {
        pageCleanup();
      } catch (error) {
        /* ignore */
      }
      pageCleanup = null;
    }
    while (contentCleanups.length) {
      try {
        contentCleanups.pop()();
      } catch (error) {
        /* ignore */
      }
    }
    if (contentAbort) {
      try {
        contentAbort.abort();
      } catch (error) {
        /* ignore */
      }
      contentAbort = null;
    }
    document.querySelectorAll(".mag-toc-compact").forEach(function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    document.body.classList.remove("mag-toc-compact-on");
    document.documentElement.style.setProperty(
      "--shroffin-toc-compact-offset",
      "0px"
    );
    cancelSoftScroll();
    cancelSoftStripScroll();
  }

  function beginContentLifecycle() {
    endContentLifecycle();
    contentAbort =
      typeof AbortController === "function" ? new AbortController() : null;
  }


  /* Soft horizontal nudge for the chapter strip more-cue (Move-band ~1s). */
  function softScrollStripBy(scroller, delta) {
    if (!scroller || !delta) return;
    cancelSoftStripScroll();
    var maxLeft = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    var startLeft = scroller.scrollLeft;
    var targetLeft = Math.max(0, Math.min(maxLeft, startLeft + delta));
    var distance = targetLeft - startLeft;
    if (prefersReducedMotion() || Math.abs(distance) < 2) {
      scroller.scrollLeft = targetLeft;
      return;
    }
    var duration = 1000;
    var startTime = null;
    function step(now) {
      if (startTime == null) startTime = now;
      var progress = Math.min(1, (now - startTime) / duration);
      scroller.scrollLeft = startLeft + distance * easeOutSoft(progress);
      if (progress < 1) {
        softStripScrollFrame = window.requestAnimationFrame(step);
        return;
      }
      softStripScrollFrame = 0;
    }
    softStripScrollFrame = window.requestAnimationFrame(step);
  }

  function softScrollTo(destination, done, topOffset) {
    cancelSoftScroll();

    var styles = window.getComputedStyle(destination);
    var marginTop =
      topOffset != null
        ? topOffset
        : parseFloat(styles.scrollMarginBlockStart || styles.scrollMarginTop) || 0;
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
    var interruptArmed = false;
    var armTimer = window.setTimeout(function () {
      interruptArmed = true;
    }, 120);

    function finish() {
      if (finished) return;
      finished = true;
      softScrollFrame = 0;
      window.clearTimeout(armTimer);
      if (softScrollCancel) {
        softScrollCancel();
        softScrollCancel = null;
      }
      if (done) done();
    }

    function onInterrupt() {
      /* Ignore the same tap/gesture that started the jump; if the user
         really scrolls, snap to the intended section instead of stopping mid-page. */
      if (!interruptArmed) return;
      if (softScrollFrame) {
        window.cancelAnimationFrame(softScrollFrame);
        softScrollFrame = 0;
      }
      window.scrollTo(0, targetY);
      finish();
    }

    window.addEventListener("wheel", onInterrupt, { passive: true, once: true });
    window.addEventListener("touchmove", onInterrupt, {
      passive: true,
      once: true
    });
    softScrollCancel = function () {
      window.clearTimeout(armTimer);
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
    var signal = contentSignal();
    var listenerOpts = signal
      ? { passive: true, signal: signal }
      : { passive: true };
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
      var stripScroller = null;
      var stripPrev = null;
      var stripNext = null;

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
          document.documentElement.style.setProperty(
            "--shroffin-toc-compact-offset",
            "0px"
          );
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
        document.documentElement.style.setProperty(
          "--shroffin-toc-compact-offset",
          show ? "2.875rem" : "0px"
        );
        compact.hidden = !show;
        if (!show) setCompactOpen(false);
      }

      function setActive(id) {
        activeId = id || "";
        var activeLink = null;
        links.forEach(function (item) {
          var isActive = activeId && item.getAttribute("href").slice(1) === activeId;
          item.classList.toggle("is-active", isActive);
          if (isActive) {
            item.setAttribute("aria-current", "true");
            activeLink = item;
          } else {
            item.removeAttribute("aria-current");
          }
        });
        if (compact && compactLabel) {
          compactLabel.textContent = linkLabel(activeLink || links[0]);
        }
        if (compactPanel) {
          compactPanel.querySelectorAll("a[href^='#']").forEach(function (item) {
            var isActive = activeId && item.getAttribute("href").slice(1) === activeId;
            item.classList.toggle("is-active", isActive);
            if (isActive) item.setAttribute("aria-current", "true");
            else item.removeAttribute("aria-current");
          });
        }
        ensureActiveVisibleInStrip(activeLink);
      }

      function stripHost() {
        return stripScroller || rail;
      }

      function scheduleStripCueSync() {
        window.setTimeout(syncStripCues, 40);
        window.setTimeout(syncStripCues, 520);
        window.setTimeout(syncStripCues, 1050);
      }

      function syncStripCues() {
        if (!rail.classList.contains("mag-index") || !stripPrev || !stripNext) return;
        var host = stripHost();
        /* On wide layouts the scroller is display:contents (no box) — no overflow. */
        var maxLeft = Math.max(0, host.scrollWidth - host.clientWidth);
        var hasLeft = maxLeft > 4 && host.scrollLeft > 4;
        var hasRight = maxLeft > 4 && host.scrollLeft < maxLeft - 4;
        rail.classList.toggle("has-more-left", hasLeft);
        rail.classList.toggle("has-more-right", hasRight);
        stripPrev.hidden = !hasLeft;
        stripNext.hidden = !hasRight;
      }

      function ensureActiveVisibleInStrip(activeLink) {
        if (!activeLink || wideQuery.matches) return;
        if (!rail.classList.contains("mag-index")) return;
        var host = stripHost();
        /* Scroller is the horizontal chapter row on phone/tablet. */
        if (host.scrollWidth <= host.clientWidth) return;
        var hostLeft = host.getBoundingClientRect().left;
        var cur = activeLink.getBoundingClientRect();
        var pad = 12;
        if (cur.right > hostLeft + host.clientWidth - pad) {
          host.scrollLeft += cur.right - (hostLeft + host.clientWidth - pad);
        } else if (cur.left < hostLeft + pad) {
          host.scrollLeft += cur.left - (hostLeft + pad);
        }
        syncStripCues();
      }

      function buildStripCues() {
        if (!rail.classList.contains("mag-index") || stripPrev || stripNext) return;
        var list = rail.querySelector(".mag-index-list");
        if (!list) return;

        stripScroller = document.createElement("div");
        stripScroller.className = "mag-index-scroller";
        list.parentNode.insertBefore(stripScroller, list);
        stripScroller.appendChild(list);

        function makeCue(side, label) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "mag-index-more mag-index-more--" + side;
          btn.hidden = true;
          btn.setAttribute("aria-label", label);
          btn.appendChild(createGuideChevron("mag-index-more-chevron"));
          btn.addEventListener("click", function () {
            var host = stripHost();
            var step = Math.max(120, Math.round(host.clientWidth * 0.7));
            softScrollStripBy(host, side === "prev" ? -step : step);
            scheduleStripCueSync();
          });
          return btn;
        }

        stripPrev = makeCue("prev", "Show earlier chapters");
        stripNext = makeCue("next", "Show more chapters");

        stripScroller.addEventListener("scroll", syncStripCues, { passive: true });
        rail.appendChild(stripPrev);
        rail.appendChild(stripNext);

        if (typeof ResizeObserver === "function") {
          var stripResize = new ResizeObserver(function () {
            syncStripCues();
          });
          stripResize.observe(stripScroller);
          stripResize.observe(list);
        }

        syncStripCues();
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
        /* Settle reveal before measuring — translated sections skew the landing. */
        destination.classList.add("is-in");
        setActive(id);
        setCompactOpen(false);
        window.requestAnimationFrame(function () {
          softScrollTo(
            destination,
            function () {
              finishJump(id);
              jumping = false;
              syncFromScroll();
            },
            stickyOffset()
          );
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

        compactToggle.appendChild(compactLabel);
        compactToggle.appendChild(createGuideChevron("mag-toc-compact-chevron"));

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
      buildStripCues();

      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          var id = link.getAttribute("href").slice(1);
          if (!destinations.get(id)) return;
          event.preventDefault();
          jumpTo(id);
        });
      });

      window.addEventListener(
        "hashchange",
        function () {
          syncFromHash(true);
        },
        signal ? { signal: signal } : false
      );
      window.addEventListener(
        "popstate",
        function () {
          syncFromHash(true);
        },
        signal ? { signal: signal } : false
      );
      window.addEventListener(
        "pageshow",
        function () {
          syncFromHash(false);
        },
        signal ? { signal: signal } : false
      );
      window.addEventListener("scroll", requestScrollSync, listenerOpts);
      window.addEventListener(
        "resize",
        function () {
          syncStripCues();
          requestScrollSync();
        },
        listenerOpts
      );
      function onWideChange() {
        syncCompactVisibility();
        syncStripCues();
        requestScrollSync();
      }
      if (wideQuery.addEventListener) {
        wideQuery.addEventListener("change", onWideChange);
        addContentCleanup(function () {
          wideQuery.removeEventListener("change", onWideChange);
        });
      } else if (wideQuery.addListener) {
        wideQuery.addListener(onWideChange);
        addContentCleanup(function () {
          wideQuery.removeListener(onWideChange);
        });
      }

      addContentCleanup(function () {
        if (compact && compact.parentNode) compact.parentNode.removeChild(compact);
        document.body.classList.remove("mag-toc-compact-on");
      });

      syncFromHash(false);
      requestScrollSync();
      syncStripCues();
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

      var observer = new MutationObserver(sync);
      observer.observe(flip, {
        attributes: true,
        attributeFilter: ["class"]
      });
      addContentCleanup(function () {
        observer.disconnect();
      });
      sync();
    });
  }

  function initFlipToggles() {
    document.querySelectorAll(".guide-flip").forEach(function (flip) {
      if (flip.dataset.flipBound === "true") return;
      flip.dataset.flipBound = "true";
      var back = flip.querySelector(".guide-flip-face--back");

      function setFlipped(open) {
        flip.classList.toggle("is-flipped", open);
        if (back) back.setAttribute("aria-hidden", open ? "false" : "true");
        flip.querySelectorAll("[data-flip]").forEach(function (btn) {
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
      }

      flip.querySelectorAll("[data-flip]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          setFlipped(!flip.classList.contains("is-flipped"));
        });
      });
    });
  }

  function initSegPanels() {
    document.querySelectorAll('.guide-seg[role="tablist"]').forEach(function (seg) {
      if (seg.dataset.segReady === "true") return;
      seg.dataset.segReady = "true";

      var tabs = Array.prototype.slice.call(seg.querySelectorAll('[role="tab"]'));
      var panelIds = tabs.map(function (tab) {
        return tab.getAttribute("aria-controls");
      });
      var panels = panelIds
        .map(function (id) {
          return id && document.getElementById(id);
        })
        .filter(Boolean);

      function activateTab(tab) {
        var nextId = tab.getAttribute("aria-controls");
        var current = null;
        var next = null;
        panels.forEach(function (panel) {
          if (!panel.hidden) current = panel;
          if (panel.id === nextId) next = panel;
        });

        tabs.forEach(function (btn) {
          var selected = btn === tab;
          btn.setAttribute("aria-selected", selected ? "true" : "false");
          btn.tabIndex = selected ? 0 : -1;
        });

        if (!next || next === current) {
          panels.forEach(function (panel) {
            panel.hidden = panel.id !== nextId;
          });
          return;
        }

        var reduce = prefersReducedMotion();
        var fadeMs =
          (window.ShroffinSelectionFade && window.ShroffinSelectionFade.duration) ||
          500;

        if (reduce) {
          panels.forEach(function (panel) {
            panel.hidden = panel !== next;
            panel.classList.remove("is-sel-fading");
          });
          return;
        }

        if (current) current.classList.add("is-sel-fading");
        window.setTimeout(function () {
          panels.forEach(function (panel) {
            panel.hidden = panel !== next;
            panel.classList.remove("is-sel-fading");
          });
          next.classList.add("is-sel-fading");
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              next.classList.remove("is-sel-fading");
            });
          });
        }, fadeMs);
      }

      tabs.forEach(function (tab, index) {
        tab.addEventListener("click", function () {
          activateTab(tab);
        });
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
          activateTab(tabs[targetIndex]);
        });
      });
    });
  }

  function initGuideMoments() {
    var moments = document.querySelectorAll(".guide-moment");
    if (!moments.length) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      moments.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    moments.forEach(function (el) {
      observer.observe(el);
    });
    addContentCleanup(function () {
      observer.disconnect();
    });
  }

  function ensureLocalnavCurrentVisible() {
    var list = document.querySelector(".localnav-list");
    var current =
      list && list.querySelector('.localnav-link[aria-current="page"]');
    if (!list || !current) return;
    list.scrollLeft = 0;
    if (list.scrollWidth <= list.clientWidth) return;
    var listLeft = list.getBoundingClientRect().left;
    var cur = current.getBoundingClientRect();
    var pad = 12;
    if (cur.right > listLeft + list.clientWidth - pad) {
      list.scrollLeft = Math.max(
        0,
        current.offsetLeft + current.offsetWidth - list.clientWidth + pad
      );
    }
  }

  function initPageModules() {
    if (pageCleanup) {
      try {
        pageCleanup();
      } catch (error) {
        /* ignore */
      }
      pageCleanup = null;
    }
    if (
      /(?:^|\/)guide\.html$/.test(location.pathname) &&
      window.ShroffinGuidePages &&
      typeof window.ShroffinGuidePages.overview === "function"
    ) {
      pageCleanup = window.ShroffinGuidePages.overview() || null;
    }
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

  function initGuideDisclosures() {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var CLOSE_MS = 900;

    document.querySelectorAll("details.guide-disclosure").forEach(function (details) {
      if (details.dataset.smoothReady === "true") return;
      details.dataset.smoothReady = "true";

      var summary = details.querySelector(":scope > summary");
      if (!summary) return;

      var panel = details.querySelector(":scope > .guide-disclosure-panel");
      if (!panel) {
        panel = document.createElement("div");
        panel.className = "guide-disclosure-panel";
        var inner = document.createElement("div");
        inner.className = "guide-disclosure-panel-inner";
        while (summary.nextSibling) {
          inner.appendChild(summary.nextSibling);
        }
        panel.appendChild(inner);
        details.appendChild(panel);
      }

      if (details.open) {
        panel.classList.add("is-open");
      }

      if (reduceMotion) return;

      var closingTimer = null;

      summary.addEventListener("click", function (event) {
        event.preventDefault();

        if (closingTimer) {
          clearTimeout(closingTimer);
          closingTimer = null;
        }

        var opening = !details.open;

        if (opening) {
          details.open = true;
          panel.getBoundingClientRect();
          panel.classList.add("is-open");
          return;
        }

        panel.classList.remove("is-open");

        function finishClose() {
          panel.removeEventListener("transitionend", onTransitionEnd);
          details.open = false;
          closingTimer = null;
        }

        function onTransitionEnd(ev) {
          if (ev.target !== panel) return;
          if (ev.propertyName !== "grid-template-rows") return;
          finishClose();
        }

        panel.addEventListener("transitionend", onTransitionEnd);
        closingTimer = setTimeout(finishClose, CLOSE_MS);
      });
    });
  }

  function initContent() {
    beginContentLifecycle();
    initPageModules();
    initSectionNav();
    initFlipToggles();
    initFlipAccessibility();
    initSegPanels();
    initScrollRegions();
    initBreadcrumbs();
    initGuideDisclosures();
    initGuideMoments();
    ensureLocalnavCurrentVisible();
  }

  function destroyContent() {
    endContentLifecycle();
  }

  function init() {
    initLocalNav();
    initContent();
    initReducedMotionUpdates();
    initDynamicAboutReveals();
  }

  window.ShroffinGuide = {
    init: init,
    initContent: initContent,
    destroyContent: destroyContent,
    closeLocalNav: function () {
      if (typeof closeLocalNavFn === "function") closeLocalNavFn();
    },
    ensureLocalnavCurrentVisible: ensureLocalnavCurrentVisible
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
