/**
 * ═══════════════════════════════════════════════════════════════
 *  RTX STORE — Zero-Latency Hardware Gaming Cursor Engine
 *  Native OS Cursor Execution (0ms Input Latency, 144Hz+ Ultra-Smooth)
 *  Original 48px Solo Leveling Dagger with Hotspot (11, 2)
 * ═══════════════════════════════════════════════════════════════
 */
(function() {
  'use strict';

  // Completely disable on admin panel (prevent input glitches & form issues)
  if (window.location.pathname.indexOf('/admin') !== -1 || window.location.pathname.indexOf('admin') !== -1) {
    return;
  }

  // Disable on touch-only mobile devices
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) {
    return;
  }

  // Resolve base path universally across root and file protocol
  var assetBase = '/assets/cursor/';
  if (window.location.protocol === 'file:') {
    assetBase = 'assets/cursor/';
  }

  var cursorPng = assetBase + 'cursor_default_48.png';
  var cursorCur = assetBase + 'cursor_default.cur';

  var style = document.createElement('style');
  style.id = 'rtxZeroLagCursorStyles';
  style.textContent = [
    '/* ⚡ Native Hardware-Accelerated Zero-Latency Gaming Cursor (48px) */',
    'html, body {',
    '  cursor: url("' + cursorPng + '") 11 2, url("' + cursorCur + '") 11 2, auto !important;',
    '}',
    'a, button, [role="button"], label,',
    '.btn, .product-card, .category-pill, .category-card, .order-card, .modal-close, [onclick] {',
    '  cursor: url("' + cursorPng + '") 11 2, url("' + cursorCur + '") 11 2, pointer !important;',
    '}',
    'input, textarea, select {',
    '  cursor: text !important;',
    '}',
    '[disabled], .disabled {',
    '  cursor: not-allowed !important;',
    '}'
  ].join('\n');

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(style);
    });
  } else {
    document.head.appendChild(style);
  }
})();
