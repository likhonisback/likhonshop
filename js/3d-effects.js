/**
 * ═══════════════════════════════════════════════════════════════
 *  RTX STORE — 3D Micro-Interactions & Tilt Engine v3.0
 *  Holographic Sheen, 3D Card Tilt, Magnetic Buttons, Particle Burst
 * ═══════════════════════════════════════════════════════════════
 */

window.RTXEffects = (function () {
  'use strict';

  // 1. 3D Tilt with Holographic Rainbow Sheen & Ultra-Fast 60-144 FPS Responsiveness
  function init3DTilt() {
    var cards = document.querySelectorAll('.product-card, .feature-card, .category-pill, .category-card, .cart-item, .order-card, .hero-stat, .review-card, .checkout-card, .track-card');

    cards.forEach(function (card) {
      if (card.dataset.tiltInitialized) return;
      card.dataset.tiltInitialized = 'true';

      // Ensure sheen element
      var sheen = card.querySelector('.card-sheen');
      if (!sheen) {
        sheen = document.createElement('div');
        sheen.className = 'card-sheen';
        card.appendChild(sheen);
      }

      var rect = null;
      var rafId = null;
      var latestE = null;

      function renderTilt() {
        if (!rect || !latestE) return;
        var x = latestE.clientX - rect.left;
        var y = latestE.clientY - rect.top;

        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var rotateX = ((y - centerY) / centerY) * -12;
        var rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) translateZ(12px) scale3d(1.025, 1.025, 1.025)';

        // Position dynamic holographic rainbow sheen
        var sheenX = (x / rect.width) * 100;
        var sheenY = (y / rect.height) * 100;
        sheen.style.background = 'radial-gradient(circle at ' + sheenX + '% ' + sheenY + '%, rgba(255, 255, 255, 0.35) 0%, rgba(108, 92, 231, 0.22) 28%, rgba(255, 107, 107, 0.16) 50%, transparent 72%)';
        sheen.style.opacity = '1';
        rafId = null;
      }

      card.addEventListener('mouseenter', function () {
        rect = card.getBoundingClientRect();
        card.style.transition = 'transform 0.04s linear, box-shadow 0.15s ease';
      });

      card.addEventListener('mousemove', function (e) {
        if (!rect) rect = card.getBoundingClientRect();
        latestE = e;
        if (!rafId) {
          rafId = requestAnimationFrame(renderTilt);
        }
      }, { passive: true });

      card.addEventListener('mouseleave', function () {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        latestE = null;
        rect = null;
        card.style.transition = 'transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease';
        card.style.transform = '';
        sheen.style.opacity = '0';
      });
    });
  }

  // 2. Magnetic Buttons with 3D Depth
  function initMagneticButtons() {
    var btns = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-accent, .nav-cart-btn, .nav-search-btn, .add-to-cart-btn, .back-to-top');

    btns.forEach(function (btn) {
      if (btn.dataset.magneticInit) return;
      btn.dataset.magneticInit = 'true';

      var rect = null;
      var rafId = null;
      var latestE = null;

      function renderMagnetic() {
        if (!rect || !latestE) return;
        var relX = latestE.clientX - rect.left - rect.width / 2;
        var relY = latestE.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (relX * 0.22).toFixed(1) + 'px, ' + (relY * 0.22).toFixed(1) + 'px)';
        rafId = null;
      }

      btn.addEventListener('mouseenter', function () {
        rect = btn.getBoundingClientRect();
        btn.style.transition = 'transform 0.05s linear';
      });

      btn.addEventListener('mousemove', function (e) {
        if (!rect) rect = btn.getBoundingClientRect();
        latestE = e;
        if (!rafId) {
          rafId = requestAnimationFrame(renderMagnetic);
        }
      }, { passive: true });

      btn.addEventListener('mouseleave', function () {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        latestE = null;
        rect = null;
        btn.style.transition = 'transform 0.2s ease-out';
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // 3. Celebratory 3D Particle Explosion
  function triggerCelebration(originX, originY) {
    if (typeof confetti === 'function') {
      var count = 120;
      var defaults = {
        origin: { x: originX || 0.5, y: originY || 0.6 },
        colors: ['#6C5CE7', '#FF6B6B', '#F39C12', '#00F2FE', '#FFFFFF'],
        ticks: 250,
        gravity: 1.1,
        scalar: 1.1
      };

      confetti(Object.assign({}, defaults, {
        particleCount: count,
        spread: 90,
        startVelocity: 45
      }));

      // Secondary starburst
      setTimeout(function () {
        confetti(Object.assign({}, defaults, {
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: (originX || 0.5) - 0.1, y: originY || 0.6 }
        }));
        confetti(Object.assign({}, defaults, {
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: (originX || 0.5) + 0.1, y: originY || 0.6 }
        }));
      }, 150);
    }
  }

  // 4. Cart 3D Bounce Animation
  function bounceCartBadge() {
    var cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
      cartBtn.classList.remove('cart-bounce-3d');
      void cartBtn.offsetWidth; // trigger reflow
      cartBtn.classList.add('cart-bounce-3d');
    }
  }

  // 5. Number Counter Animation
  function animateCounters() {
    var counters = document.querySelectorAll('.stat-number[data-count]');
    counters.forEach(function (counter) {
      if (counter.dataset.animated) return;
      var target = parseInt(counter.dataset.count, 10);
      if (isNaN(target)) return;
      counter.dataset.animated = 'true';

      var current = 0;
      var step = Math.max(1, Math.ceil(target / 40));
      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      }, 25);
    });
  }

  // Auto-init on DOM updates
  function refresh() {
    init3DTilt();
    initMagneticButtons();
    animateCounters();
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  document.addEventListener('DOMContentLoaded', refresh);

  return {
    init3DTilt: init3DTilt,
    initMagneticButtons: initMagneticButtons,
    triggerCelebration: triggerCelebration,
    bounceCartBadge: bounceCartBadge,
    animateCounters: animateCounters,
    refresh: refresh
  };
})();
