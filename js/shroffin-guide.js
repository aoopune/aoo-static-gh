(function () {
  "use strict";

  if (window.__shroffinGuideLoaded) return;
  window.__shroffinGuideLoaded = true;

  /* Paired with the 1024px / 1023px media queries in css/shroffin-editorial.css.
     Change both together or the compact chapter bar desyncs from the rail. */
  var WIDE_MIN = 1024;
  /* Guide bar handoff: chapter jumps yield / restore / sync chrome. */
  var guideYieldLocalnav = function () {};
  var guideShowLocalnav = function () {};
  var guideSyncLocalnav = function () {};

  function layoutPageTop(el) {
    if (!el) return 0;
    var layoutTop = el.getBoundingClientRect().top + window.pageYOffset;
    var node = el;
    while (node && node !== document.documentElement) {
      var nodeTransform = window.getComputedStyle(node).transform;
      if (nodeTransform && nodeTransform !== "none") {
        try {
          layoutTop -= new DOMMatrixReadOnly(nodeTransform).m42;
        } catch (error) {
          /* Older engines without DOMMatrixReadOnly — keep transformed top. */
        }
      }
      node = node.parentElement;
    }
    return layoutTop;
  }

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
    var closing = false;
    var closeTimer = null;
    var openSpacer = null;
    var globalSpacer = null;
    /* Match --shroffin-ui-duration; keep fixed chrome until panel eases shut. */
    var CLOSE_MS = 850;

    function mainBarStillInView() {
      var globalnav = document.querySelector(".globalnav");
      if (!globalnav) return false;
      return globalnav.getBoundingClientRect().bottom > 1;
    }

    function removeSpacer(node) {
      if (node && node.parentNode) node.parentNode.removeChild(node);
    }

    function clearCloseTimer() {
      if (closeTimer == null) return;
      window.clearTimeout(closeTimer);
      closeTimer = null;
    }

    function ensureSpacers(withMainBar) {
      var globalnav = document.querySelector(".globalnav");
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

    function measureMenuMax() {
      var withMainBar = localnav.classList.contains("is-open-with-global");
      var gn = withMainBar
        ? parseFloat(
            window
              .getComputedStyle(document.documentElement)
              .getPropertyValue("--shroffin-gn-height")
          ) || 48
        : 0;
      var ln = localnav.offsetHeight || 52;
      var room = Math.max(
        120,
        window.innerHeight - gn - ln - (window.visualViewport ? 0 : 0)
      );
      /* Cap by viewport; floor by content so short lists ease fully. */
      var content = list.scrollHeight || 0;
      var maxPx = Math.min(content, room, 28 * 16);
      return Math.max(content > 0 ? content : 280, 0) > room
        ? Math.min(content, room)
        : content || Math.min(280, room);
    }

    function setMenuMaxVar(px) {
      localnav.style.setProperty("--localnav-menu-max", Math.round(px) + "px");
    }

    function finishCloseChrome() {
      clearCloseTimer();
      closing = false;
      localnav.classList.remove("is-closing");
      localnav.classList.remove("is-open-with-global");
      localnav.style.removeProperty("--localnav-menu-max");
      veil.hidden = true;
      removeSpacer(openSpacer);
      removeSpacer(globalSpacer);
      if (window.ShroffinMenus) {
        window.ShroffinMenus.release("guide-local");
        window.ShroffinMenus.unlock();
      }
    }

    function setOpen(next) {
      var wantOpen = Boolean(next && compactQuery.matches);

      if (wantOpen) {
        clearCloseTimer();
        closing = false;
        localnav.classList.remove("is-closing");
        open = true;
        var withMainBar = mainBarStillInView();
        ensureSpacers(withMainBar);
        localnav.classList.add("is-open");
        localnav.classList.toggle("is-open-with-global", withMainBar);
        /* Measure after open class so list layout is the open one; set max
           so open/close eases to real height (not a tall 28rem dead zone). */
        setMenuMaxVar(measureMenuMax());
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close Guide pages");
        veil.hidden = false;
        veil.classList.add("is-visible");
        if (window.ShroffinMenus) {
          window.ShroffinMenus.request("guide-local", close);
          window.ShroffinMenus.lock(localnav, veil);
        }
        return;
      }

      if (!open && !closing) return;

      open = false;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open Guide pages");
      /* Keep measured max while is-open drops so max-block-size eases 0←N. */
      if (!localnav.style.getPropertyValue("--localnav-menu-max")) {
        setMenuMaxVar(measureMenuMax());
      }
      localnav.classList.remove("is-open");
      veil.classList.remove("is-visible");

      if (prefersReducedMotion() || !compactQuery.matches) {
        finishCloseChrome();
        return;
      }

      /* Soft close: hold fixed bar + spacers while the panel eases to 0. */
      closing = true;
      localnav.classList.add("is-closing");
      clearCloseTimer();
      closeTimer = window.setTimeout(finishCloseChrome, CLOSE_MS);
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
      if (event.key !== "Escape" || (!open && !closing)) return;
      close();
      toggle.focus({ preventScroll: true });
    });

    function handleModeChange() {
      if (!compactQuery.matches) {
        clearCloseTimer();
        open = false;
        closing = false;
        localnav.classList.remove("is-open");
        localnav.classList.remove("is-closing");
        veil.classList.remove("is-visible");
        finishCloseChrome();
      }
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
       Soft-scroll to the layout position so sticky offset lands correctly.
       Walk ancestors — chapter titles sit inside .guide-moment, which owns the rise. */
    var layoutTop = layoutPageTop(destination);
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
    var wideQuery = window.matchMedia("(min-width: " + WIDE_MIN + "px)");
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
      var hashLockUntil = 0;
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

      /* Lift any opener above Contents. Do not wrap mag-toc-shell — desktop
         uses a sticky horizontal chapter strip; phone keeps in-flow strip. */
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

      function isPhoneGuide() {
        return window.matchMedia("(max-width: 833px)").matches;
      }

      function stripBandPx() {
        var stripBand = parseFloat(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("--guide-chapter-strip-band")
        );
        if (!Number.isFinite(stripBand) || stripBand <= 0) stripBand = 52;
        if (rail.classList.contains("mag-index")) {
          var live = rail.getBoundingClientRect().height;
          if (live > 0) stripBand = live;
        }
        return stripBand;
      }

      /* Phone chapter tap: title sits just under the strip. */
      function phoneLandingAir() {
        return 16;
      }

      function phoneGuideLnPx() {
        var localnav = document.querySelector(".localnav");
        if (localnav && localnav.offsetHeight) return localnav.offsetHeight;
        var ln = parseFloat(
          window
            .getComputedStyle(document.documentElement)
            .getPropertyValue("--shroffin-ln-height")
        );
        if (!Number.isFinite(ln) || ln <= 0) {
          ln = parseFloat(
            window
              .getComputedStyle(document.documentElement)
              .getPropertyValue("--ln-height")
          );
        }
        return Number.isFinite(ln) && ln > 0 ? ln : 52;
      }

      function phoneLandingOffset(withGuideBar) {
        var air = phoneLandingAir();
        var strip = stripBandPx();
        if (withGuideBar) return Math.round(phoneGuideLnPx() + strip + air);
        return Math.round(strip + air);
      }

      /* First chapter sits under the strip near the top — Guide bar returns,
         so strip-alone math leaves the title short. Later chapters keep the bar away. */
      function isFirstChapterId(id) {
        var first = links[0] && links[0].getAttribute("href");
        return Boolean(first) && first === "#" + id;
      }

      function snapPhoneTitleToStrip(landOn) {
        if (!landOn || !rail.classList.contains("mag-index")) return;
        guideSyncLocalnav();
        var desired = Math.round(
          rail.getBoundingClientRect().bottom + phoneLandingAir()
        );
        var drift = Math.round(landOn.getBoundingClientRect().top - desired);
        if (Math.abs(drift) > 2) window.scrollBy(0, drift);
      }

      /* Phone: scroll to the chapter title, not the padded section box. */
      function chapterJumpTarget(destination) {
        if (!isPhoneGuide() || !destination) return destination;
        var title = destination.querySelector(
          ".guide-tile-title, .mag-section-title, h2"
        );
        return title || destination;
      }

      function stickyOffset() {
        /* Phone spy uses live sticky chrome. Landing uses phoneLandingOffset
           on the title so chapter padding does not become empty air under
           the strip after the Guide bar yields. */
        if (isPhoneGuide() && rail.classList.contains("mag-index")) {
          var stripRect = rail.getBoundingClientRect();
          var stickyTop = parseFloat(window.getComputedStyle(rail).top);
          if (!Number.isFinite(stickyTop)) stickyTop = 0;
          if (
            stripRect.height > 0 &&
            Math.abs(stripRect.top - stickyTop) <= 2
          ) {
            return Math.round(stripRect.bottom + 8);
          }
          return phoneLandingOffset(false);
        }

        var root = document.documentElement;
        var styles = window.getComputedStyle(root);
        var gnOffset = parseFloat(styles.getPropertyValue("--shroffin-gn-offset"));
        var gn = Number.isFinite(gnOffset)
          ? gnOffset
          : parseFloat(styles.getPropertyValue("--shroffin-gn-height")) ||
            parseFloat(styles.getPropertyValue("--gn-height")) ||
            48;
        var lnOffset = parseFloat(styles.getPropertyValue("--shroffin-ln-offset"));
        var ln = Number.isFinite(lnOffset)
          ? lnOffset
          : parseFloat(styles.getPropertyValue("--shroffin-ln-height")) ||
            parseFloat(styles.getPropertyValue("--ln-height")) ||
            52;
        /* Phone compact bar or desktop sticky chapter strip (~2.875rem). */
        var stripOrCompact = 46;
        return gn + ln + stripOrCompact + 20;
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
        /* Phone: sticky chapter strip stays put — compact TOC bar not needed. */
        if (window.matchMedia("(max-width: 833px)").matches) {
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
        var delta = 0;
        if (cur.right > hostLeft + host.clientWidth - pad) {
          delta = cur.right - (hostLeft + host.clientWidth - pad);
        } else if (cur.left < hostLeft + pad) {
          delta = cur.left - (hostLeft + pad);
        }
        if (!delta) {
          syncStripCues();
          return;
        }
        /* Phone: soft nudge so selecting a chapter doesn’t snap the strip. */
        if (window.matchMedia("(max-width: 833px)").matches) {
          softScrollStripBy(host, delta);
        } else {
          host.scrollLeft += delta;
        }
        scheduleStripCueSync();
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
        if (Date.now() < hashLockUntil) return;
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
        /* Keep the tapped chapter selected while sticky handoff / paint settle. */
        hashLockUntil = Date.now() + 500;
        setActive(id);
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
        var landOn = chapterJumpTarget(destination);
        var landOffset = stickyOffset();
        if (isPhoneGuide() && rail.classList.contains("mag-index")) {
          /* Freeze handoff tween while we set the final chrome for this jump. */
          document.body.classList.add("guide-ln-jump");
          if (isFirstChapterId(id)) {
            /* Near the top the Guide bar comes back — land under bar + strip. */
            guideShowLocalnav();
            landOffset = phoneLandingOffset(true);
          } else {
            guideYieldLocalnav();
            landOffset = phoneLandingOffset(false);
          }
        }
        window.requestAnimationFrame(function () {
          softScrollTo(
            landOn,
            function () {
              if (isPhoneGuide() && rail.classList.contains("mag-index")) {
                snapPhoneTitleToStrip(landOn);
                document.body.classList.remove("guide-ln-jump");
              }
              finishJump(id);
              jumping = false;
              syncFromScroll();
            },
            landOffset
          );
        });
      }

      function syncFromHash(moveFocus) {
        var id = getLocationId();
        if (id && destinations.has(id)) {
          setActive(id);
          /* Ignore scroll-spy briefly after history/hash changes so the hash
             remains the active chapter while the browser restores scroll. */
          hashLockUntil = Date.now() + 400;
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

    function measureNaturalFrontHeight(front) {
      var card = front.querySelector(".guide-chapter-card");
      if (!card) return front.offsetHeight || 0;

      /*
       * Front card uses height:100% once the scene is locked, so clear that
       * briefly and read content size (title stack + dock, no empty stretch).
       */
      var faceStyle = front.style;
      var cardStyle = card.style;
      var prevFaceHeight = faceStyle.height;
      var prevCardHeight = cardStyle.height;
      var prevCardMinHeight = cardStyle.minHeight;

      faceStyle.height = "auto";
      cardStyle.height = "auto";
      cardStyle.minHeight = "0";

      var h = card.offsetHeight || front.offsetHeight || 0;

      faceStyle.height = prevFaceHeight;
      cardStyle.height = prevCardHeight;
      cardStyle.minHeight = prevCardMinHeight;

      return h;
    }

    function measureNaturalBackHeight(back) {
      var card = back.querySelector(".guide-chapter-card");
      if (!card) return 0;

      /*
       * Clone off-DOM so 3D absolute layout cannot clip the measurement.
       * Avoids ResizeObserver loops from temporarily restyling the live scrollport.
       */
      var width = card.offsetWidth || back.offsetWidth || 0;
      var clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.style.cssText =
        "position:absolute;left:-99999px;top:0;visibility:hidden;pointer-events:none;" +
        "width:" +
        width +
        "px;height:auto;max-height:none;overflow:visible;" +
        "display:flex;flex-direction:column;align-items:stretch;";
      var scroll = clone.querySelector(".guide-flip-back-scroll");
      if (scroll) {
        scroll.style.cssText =
          "flex:0 0 auto;height:auto;min-height:0;overflow:visible;width:100%;";
      }
      document.body.appendChild(clone);
      var h = clone.offsetHeight || 0;
      document.body.removeChild(clone);
      return h;
    }

    function applySceneHeight(scene, heightPx, animate) {
      if (!(heightPx > 0)) return;
      var next = Math.ceil(heightPx) + "px";
      if (scene.style.height === next) return;
      if (!animate) {
        var prev = scene.style.transition;
        scene.style.transition = "none";
        scene.style.height = next;
        /* Force layout so enabling transition later does not replay from 0. */
        void scene.offsetHeight;
        scene.style.transition = prev;
        return;
      }
      scene.style.height = next;
    }

    document.querySelectorAll(".guide-flip").forEach(function (flip) {
      var scene = flip.querySelector("[data-flip-scene]") || flip.querySelector(".guide-flip-scene");
      var front = flip.querySelector(".guide-flip-face--front");
      var back = flip.querySelector(".guide-flip-face--back");
      if (!front || !back || !scene) return;

      var docks = flip.querySelectorAll(".guide-flip-dock[data-flip]");
      var heightReady = false;
      var syncingHeight = false;

      function syncSceneHeight(animate) {
        if (syncingHeight) return;
        /*
         * Closed: front owns the box (no reserved empty air for the back).
         * Open: grow to the back’s natural height (clone-measured) so the
         * body does not need an inner scrollbar. Same rule for every flip —
         * including rate / structure — so section gaps stay even when closed.
         */
        syncingHeight = true;
        try {
          var open = flip.classList.contains("is-flipped");
          var hFront = measureNaturalFrontHeight(front);
          var hBack = measureNaturalBackHeight(back);
          var h = open ? hBack : hFront;
          applySceneHeight(scene, h, animate && heightReady);
          heightReady = true;
        } finally {
          syncingHeight = false;
        }
      }

      function sync() {
        var open = flip.classList.contains("is-flipped");
        front.setAttribute("aria-hidden", open ? "true" : "false");
        front.inert = !!open;
        back.setAttribute("aria-hidden", open ? "false" : "true");
        back.inert = !open;
        syncSceneHeight(true);
        /* Two docks (front open + back Close) keep authored labels.
           A single shared dock still swaps Estimate ↔ Close. */
        if (docks.length >= 2) {
          docks.forEach(function (btn) {
            btn.setAttribute("aria-expanded", open ? "true" : "false");
          });
        } else {
          docks.forEach(function (btn) {
            setToggleLabel(btn, open);
          });
        }
      }

      var observer = new MutationObserver(sync);
      observer.observe(flip, {
        attributes: true,
        attributeFilter: ["class"]
      });

      var ro = null;
      if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(function () {
          syncSceneHeight(false);
        });
        ro.observe(front);
        var frontCard = front.querySelector(".guide-chapter-card");
        if (frontCard) ro.observe(frontCard);
        /* Watch form/result nodes so revealing an estimate reflows height. */
        var backScroll = back.querySelector(".guide-flip-back-scroll");
        if (backScroll) {
          Array.prototype.forEach.call(backScroll.children, function (child) {
            ro.observe(child);
          });
        }
      }

      function onResize() {
        syncSceneHeight(false);
      }
      window.addEventListener("resize", onResize);

      addContentCleanup(function () {
        observer.disconnect();
        if (ro) ro.disconnect();
        window.removeEventListener("resize", onResize);
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
          var nextOpen = !flip.classList.contains("is-flipped");
          setFlipped(nextOpen);
          /* Keep keyboard focus on the visible dock without sliding the page. */
          var next = nextOpen
            ? flip.querySelector(".guide-flip-face--back .guide-flip-dock[data-flip]")
            : flip.querySelector(".guide-flip-face--front .guide-flip-dock[data-flip]");
          if (next && typeof next.focus === "function") {
            try {
              next.focus({ preventScroll: true });
            } catch (err) {
              next.focus();
            }
          }
        });
      });
    });
  }

  /*
   * calm product-site focus: when a card is flipped, dim + blur the rest of the page
   * so only that card stays sharp. Scrim click and Escape close the card.
   */
  function initFlipFocus() {
    var flips = document.querySelectorAll(".guide-flip");
    if (!flips.length) return;

    var scrim = document.querySelector(".guide-flip-focus-scrim");
    if (!scrim) {
      scrim = document.createElement("button");
      scrim.type = "button";
      scrim.className = "guide-flip-focus-scrim";
      scrim.setAttribute("aria-label", "Close card");
      document.body.appendChild(scrim);
    }

    var syncing = false;

    function clearFlip(flip) {
      if (!flip.classList.contains("is-flipped")) return;
      flip.classList.remove("is-flipped");
      var back = flip.querySelector(".guide-flip-face--back");
      if (back) back.setAttribute("aria-hidden", "true");
      flip.querySelectorAll("[data-flip]").forEach(function (btn) {
        btn.setAttribute("aria-expanded", "false");
      });
    }

    function syncFocus(preferred) {
      if (syncing) return;
      syncing = true;

      var open = [];
      flips.forEach(function (flip) {
        if (flip.classList.contains("is-flipped")) open.push(flip);
      });

      /* One focused card at a time — prefer the flip that just opened. */
      if (open.length > 1) {
        var keep =
          preferred && open.indexOf(preferred) !== -1
            ? preferred
            : open[open.length - 1];
        open.forEach(function (flip) {
          if (flip !== keep) clearFlip(flip);
        });
        open = [keep];
      }

      var hasOpen = open.length > 0;
      document.body.classList.toggle("guide-flip-focus", hasOpen);
      scrim.classList.toggle("is-open", hasOpen);
      scrim.setAttribute("aria-hidden", hasOpen ? "false" : "true");
      syncing = false;
    }

    function closeAll() {
      flips.forEach(clearFlip);
      syncFocus();
    }

    scrim.addEventListener("click", closeAll);

    flips.forEach(function (flip) {
      var observer = new MutationObserver(function () {
        if (flip.classList.contains("is-flipped")) {
          syncFocus(flip);
        } else {
          syncFocus();
        }
      });
      observer.observe(flip, {
        attributes: true,
        attributeFilter: ["class"]
      });
      addContentCleanup(function () {
        observer.disconnect();
      });
    });

    function onKey(event) {
      if (event.key !== "Escape") return;
      if (!document.body.classList.contains("guide-flip-focus")) return;
      closeAll();
    }
    window.addEventListener("keydown", onKey);

    addContentCleanup(function () {
      window.removeEventListener("keydown", onKey);
      scrim.classList.remove("is-open");
      document.body.classList.remove("guide-flip-focus");
      if (scrim.parentNode) scrim.parentNode.removeChild(scrim);
    });

    syncFocus();
  }

  function initSegPanels() {
    var phoneMq =
      window.matchMedia && window.matchMedia("(max-width: 833px)");

    document.querySelectorAll('.guide-seg[role="tablist"]').forEach(function (seg) {
      if (seg.dataset.segReady === "true") return;
      seg.dataset.segReady = "true";

      var mobileOnly = seg.getAttribute("data-guide-seg-mobile") === "true";
      var tabs = Array.prototype.slice.call(seg.querySelectorAll('[role="tab"]'));
      var panelIds = tabs.map(function (tab) {
        return tab.getAttribute("aria-controls");
      });
      var panels = panelIds
        .map(function (id) {
          return id && document.getElementById(id);
        })
        .filter(Boolean);

      function isPhone() {
        return !phoneMq || phoneMq.matches;
      }

      function showAllPanelsDesktop() {
        panels.forEach(function (panel) {
          panel.hidden = false;
          panel.classList.remove("is-sel-fading");
        });
        tabs.forEach(function (btn, index) {
          btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
          btn.tabIndex = -1;
        });
        window.dispatchEvent(new Event("resize"));
      }

      function activateTab(tab) {
        if (mobileOnly && !isPhone()) {
          showAllPanelsDesktop();
          return;
        }

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

        function afterPanelChange() {
          /*
           * Flip scenes size to front content. When a taller tab opens (e.g.
           * Overdraft), remeasure so the switch is not clipped/shrunk.
           */
          window.dispatchEvent(new Event("resize"));
        }

        if (!next || next === current) {
          panels.forEach(function (panel) {
            panel.hidden = panel.id !== nextId;
          });
          afterPanelChange();
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
          afterPanelChange();
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
              afterPanelChange();
            });
          });
        }, fadeMs);
      }

      function syncMobileOnlyMode() {
        if (!mobileOnly) return;
        if (!isPhone()) {
          showAllPanelsDesktop();
          return;
        }
        var selected =
          tabs.find(function (tab) {
            return tab.getAttribute("aria-selected") === "true";
          }) || tabs[0];
        if (selected) {
          panels.forEach(function (panel) {
            panel.hidden =
              panel.id !== selected.getAttribute("aria-controls");
            panel.classList.remove("is-sel-fading");
          });
          tabs.forEach(function (btn) {
            var on = btn === selected;
            btn.setAttribute("aria-selected", on ? "true" : "false");
            btn.tabIndex = on ? 0 : -1;
          });
          window.dispatchEvent(new Event("resize"));
        }
      }

      tabs.forEach(function (tab, index) {
        tab.addEventListener("click", function () {
          if (mobileOnly && !isPhone()) return;
          activateTab(tab);
        });
        tab.addEventListener("keydown", function (event) {
          if (mobileOnly && !isPhone()) return;
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

      if (mobileOnly && phoneMq) {
        syncMobileOnlyMode();
        if (phoneMq.addEventListener) {
          phoneMq.addEventListener("change", syncMobileOnlyMode);
        } else if (phoneMq.addListener) {
          phoneMq.addListener(syncMobileOnlyMode);
        }
      }
    });
  }

  function initGuideMoments() {
    var moments = Array.prototype.slice.call(
      document.querySelectorAll(".guide-moment")
    );
    var riseTargets = [];
    document.querySelectorAll(".guide-chapter-card").forEach(function (card) {
      /* Rise the scene, not .guide-flip — titles sit above the scene inside .guide-flip. */
      var scene = card.closest(".guide-flip-scene");
      var target = scene || card;
      if (riseTargets.indexOf(target) === -1) riseTargets.push(target);
    });
    /* Cover empty scenes if markup ever has a scene without a card yet. */
    document.querySelectorAll(".guide-flip-scene").forEach(function (scene) {
      if (riseTargets.indexOf(scene) === -1) riseTargets.push(scene);
    });

    var nodes = moments.concat(riseTargets);
    if (!nodes.length) return;

    function settle(el) {
      el.classList.add("is-in");
    }

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      nodes.forEach(settle);
      return;
    }

    var phone =
      window.matchMedia && window.matchMedia("(max-width: 833px)").matches;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          settle(entry.target);
          observer.unobserve(entry.target);
        });
      },
      phone
        ? { rootMargin: "0px 0px -2% 0px", threshold: 0.04 }
        : { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    nodes.forEach(function (el) {
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
        ".guide-moment, .mag-reveal, .home-moment, .learn-card, .guide-chapter-card, .guide-flip-scene"
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

    /* Respect HTML: open first row only when that <details> has the open attribute. */
    document.querySelectorAll(".guide-disclosure-stack").forEach(function (stack) {
      var first = stack.querySelector(":scope > details.guide-disclosure");
      if (!first) return;
      first.classList.remove("guide-disclosure--stay-open");
      if (first.hasAttribute("open")) {
        first.open = true;
      }
    });

    document
      .querySelectorAll("details.guide-disclosure")
      .forEach(function (details) {
      if (details.dataset.smoothReady === "true") return;
      details.dataset.smoothReady = "true";

      details.classList.remove("guide-disclosure--stay-open");
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
        details.open = true;
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
    initFlipFocus();
    initSegPanels();
    initScrollRegions();
    initBreadcrumbs();
    initGuideDisclosures();
    if (window.ShroffinScrub) window.ShroffinScrub.init();
    initGuideMoments();
    ensureLocalnavCurrentVisible();
  }

  function destroyContent() {
    if (window.ShroffinScrub) window.ShroffinScrub.destroy();
    endContentLifecycle();
  }

  /* Guide reading: keep Guide localnav until the chapter strip meets it, then
     hand the top to the strip. After that, scroll-up peeks the Guide bar again
     for 2s (unless the cursor is on it; leaving the bar restarts the 2s timer).
     Loop-safe: no-op if state unchanged; ignore scroll briefly after toggle.
     Phone drawer open / pointer on the bar force it visible. */
  function initGuideLocalnavHandoff() {
    var localnav = document.querySelector(".localnav");
    if (!localnav || !document.body.classList.contains("guide-reading")) return;
    if (localnav.dataset.shroffinLnHandoff === "true") return;
    localnav.dataset.shroffinLnHandoff = "true";

    var lastY = window.scrollY || 0;
    var ticking = false;
    var lnHeight = 52;
    var deltaArmed = 12;
    var hideAfterMs = 2000;
    var isAway = false;
    var ignoreUntil = 0;
    var hideTimer = null;
    var pointerOver = false;
    /* Hysteresis so the bar does not flicker at the pin boundary. */
    var hideSlack = 1;
    var showSlack = 10;

    function measure() {
      lnHeight = localnav.offsetHeight || 52;
    }

    function menuBusy() {
      return (
        localnav.classList.contains("is-open") ||
        localnav.classList.contains("is-closing")
      );
    }

    function chapterStrip() {
      return document.querySelector(".mag-index");
    }

    /* Bottom edge of the Guide bar when it is (or would be) stuck visible. */
    function guideBarBottom() {
      var styles = window.getComputedStyle(document.documentElement);
      var gnOffset = parseFloat(styles.getPropertyValue("--shroffin-gn-offset"));
      var gn = Number.isFinite(gnOffset)
        ? gnOffset
        : parseFloat(styles.getPropertyValue("--shroffin-gn-height")) || 48;
      return gn + lnHeight;
    }

    /* True once the chapter strip has reached (and still holds) the top zone. */
    function stripOwnsTop() {
      var strip = chapterStrip();
      if (!strip) return false;
      var stripTop = strip.getBoundingClientRect().top;
      var line = guideBarBottom();
      if (isAway) return stripTop <= line + showSlack;
      return stripTop <= line + hideSlack;
    }

    function clearHideTimer() {
      if (hideTimer == null) return;
      clearTimeout(hideTimer);
      hideTimer = null;
    }

    function scheduleHide() {
      if (pointerOver || menuBusy()) return;
      if (!stripOwnsTop()) return;
      clearHideTimer();
      hideTimer = setTimeout(function () {
        hideTimer = null;
        if (pointerOver || menuBusy()) return;
        if (!stripOwnsTop()) return;
        setAway(true);
      }, hideAfterMs);
    }

    function setAway(away) {
      /* Pointer on the bar forces visible. Menu open must NOT clear away —
         that slides --shroffin-ln-offset and the sticky chapter strip under
         the dropdown. CSS (.guide-ln-away .localnav.is-open) shows the bar. */
      if (pointerOver) {
        away = false;
        clearHideTimer();
      }
      away = Boolean(away);
      if (away === isAway) return;
      isAway = away;
      if (isAway) clearHideTimer();
      document.body.classList.toggle("guide-ln-away", isAway);
      /* Set on body — body CSS vars shadow :root; html inline would lose. */
      document.body.style.setProperty(
        "--shroffin-ln-offset",
        (isAway ? 0 : lnHeight) + "px"
      );
      /* Ignore scroll events caused by sticky top / paint settle after toggle. */
      ignoreUntil = performance.now() + 120;
      lastY = window.scrollY || 0;
    }

    /* Chapter taps: match Guide bar to the landing chrome before scroll. */
    guideYieldLocalnav = function () {
      if (menuBusy() || pointerOver) return;
      setAway(true);
    };
    guideShowLocalnav = function () {
      if (menuBusy()) return;
      clearHideTimer();
      setAway(false);
    };
    guideSyncLocalnav = function () {
      measure();
      if (menuBusy() || pointerOver) return;
      if (!stripOwnsTop()) {
        clearHideTimer();
        setAway(false);
      } else {
        setAway(true);
      }
    };

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        if (menuBusy()) {
          clearHideTimer();
          lastY = window.scrollY || 0;
          return;
        }
        if (pointerOver) {
          clearHideTimer();
          setAway(false);
          lastY = window.scrollY || 0;
          return;
        }
        if (performance.now() < ignoreUntil) {
          lastY = window.scrollY || 0;
          return;
        }

        var y = window.scrollY || 0;
        var delta = y - lastY;

        if (!stripOwnsTop()) {
          clearHideTimer();
          setAway(false);
        } else if (delta < -deltaArmed) {
          setAway(false);
          scheduleHide();
        } else if (delta > deltaArmed) {
          setAway(true);
        } else if (!isAway && !hideTimer) {
          /* Strip owns the top and this is not an active scroll-up peek. */
          setAway(true);
        }

        lastY = y;
      });
    }

    function onChange() {
      measure();
      ignoreUntil = 0;
      if (menuBusy() || pointerOver) {
        clearHideTimer();
        if (pointerOver && !menuBusy()) setAway(false);
      } else if (!stripOwnsTop()) {
        clearHideTimer();
        setAway(false);
      } else if (!hideTimer) {
        setAway(true);
      }
      lastY = window.scrollY || 0;
    }

    function onPointerEnter() {
      pointerOver = true;
      clearHideTimer();
      setAway(false);
    }

    function onPointerLeave() {
      pointerOver = false;
      scheduleHide();
    }

    measure();
    setAway(false);
    onChange();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onChange, { passive: true });
    localnav.addEventListener("pointerenter", onPointerEnter);
    localnav.addEventListener("pointerleave", onPointerLeave);
    /* Menu open/close: do not yank the chapter strip; settle handoff after close. */
    var mo = new MutationObserver(function () {
      if (menuBusy()) {
        clearHideTimer();
        return;
      }
      ignoreUntil = 0;
      onChange();
    });
    mo.observe(localnav, { attributes: true, attributeFilter: ["class"] });
  }

  function init() {
    initLocalNav();
    initGuideLocalnavHandoff();
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
    ensureLocalnavCurrentVisible: ensureLocalnavCurrentVisible,
    yieldLocalnav: function () {
      guideYieldLocalnav();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
