/**
 * About page — soft reveals + one sticky power-flip scrub.
 * Does not touch home stance JS.
 */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ——— Soft section reveals ——— */
  var reveals = Array.prototype.slice.call(
    document.querySelectorAll('.about-reveal')
  );

  function showReveals() {
    reveals.forEach(function (node) {
      node.classList.add('is-in');
    });
  }

  if (reveals.length) {
    if (reduce.matches || !('IntersectionObserver' in window)) {
      showReveals();
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.14 }
      );
      reveals.forEach(function (node) {
        observer.observe(node);
      });
    }
  }

  /* ——— Power flip scrub ——— */
  var flip = document.querySelector('.about-flip');
  if (!flip) return;

  function setFinal() {
    flip.style.setProperty('--progress', '1');
  }

  if (reduce.matches) {
    setFinal();
    return;
  }

  var ticking = false;

  function updateFlip() {
    ticking = false;
    var rect = flip.getBoundingClientRect();
    var run = Math.max(flip.offsetHeight - window.innerHeight, 1);
    var scrolled = -rect.top;
    var p = scrolled / run;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    flip.style.setProperty('--progress', String(p));
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateFlip);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateFlip();

  if (reduce.addEventListener) {
    reduce.addEventListener('change', function () {
      if (reduce.matches) {
        setFinal();
      } else {
        updateFlip();
      }
    });
  }
})();
