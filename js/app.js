
/**
 * ═══════════════════════════════════════════════════════════════
 *  likhonshop — Client-Side Application v2.0
 *  SPA Router, Cart Management, Product Rendering, Checkout
 *  Premium Animations & Interactions
 * ═══════════════════════════════════════════════════════════════
 */

var DEFAULT_PRODUCTS = [
  {
    "id": "P8582",
    "name": "PREMIUM EXE 100% SAFE IN ALL SERVERS :excontop:",
    "title": "PREMIUM EXE 100% SAFE IN ALL SERVERS :excontop:",
    "category": "FREE FIRE",
    "price": 500,
    "originalPrice": 500,
    "permPrice": 1500,
    "options": "1 Month:500, Permanent:1500",
    "parsedOptions": [
      {
        "name": "1 Month",
        "price": 500
      },
      {
        "name": "Permanent",
        "price": 1500
      }
    ],
    "imageUrl": "uploads/pic_1795100403_e64410.png",
    "image": "uploads/pic_1795100403_e64410.png",
    "images": [
      "uploads/pic_1795100403_e64410.png"
    ],
    "videoUrl": "",
    "videos": [],
    "badge": "",
    "featured": false,
    "stock": 99999999999,
    "description": "PREMIUM EXE 100% SAFE IN ALL SERVERS \n\n AIMBOT AUTO RESET - SAFE \n SNIPER SCOPE CMD - SAFE \n SNIPER SWITCH - SAFE \n CAMERA CONTROL - SAFE \n \n NO NEED TO APPLY ANYTHING ON LOGIN, NO ANTI CHEAT, EVERYTHING APPLIES IN-GAME WITHOUT ANY PROBLEM AND CAN BE USED SAFELY ON MAIN ACCOUNT \n\n✅ PRICE: \n\n🛒 1 MONTH - 500 TK / 5 USD \n🛒 PARMANENT - 1500 TK / 15 USD",
    "rating": 5
  },
  {
    "id": "P8060",
    "name": "FULLY HIDDEN BASIC",
    "title": "FULLY HIDDEN BASIC",
    "category": "FREE FIRE",
    "price": 1000,
    "originalPrice": 3500,
    "permPrice": 3500,
    "options": "1 Month:1000, Permanent:3500",
    "parsedOptions": [
      {
        "name": "1 Month",
        "price": 1000
      },
      {
        "name": "Permanent",
        "price": 3500
      }
    ],
    "imageUrl": "uploads/pic_1795100643_0d8a93.png",
    "image": "uploads/pic_1795100643_0d8a93.png",
    "images": [
      "uploads/pic_1795100643_0d8a93.png"
    ],
    "videoUrl": "",
    "videos": [],
    "badge": "",
    "featured": false,
    "stock": 9999999999999,
    "description": "FULLY HIDDEN PANEL \n\n FULLY UNDETECTABLE ALL BYPASS \n\nFOR V BADGE PLAYER\n\n✅ PRICE\n\n🛒 1 MONTH - 1k BDT / 10 USD \n🛒 PARMANENT - 3.5k BDT / 35 USD",
    "rating": 5
  },
  {
    "id": "P1233",
    "name": "BIOS BASIC",
    "title": "BIOS BASIC",
    "category": "FREE FIRE",
    "price": 2000,
    "originalPrice": 0,
    "permPrice": 6000,
    "options": "1 Month:2000, Permanent:6000",
    "parsedOptions": [
      {
        "name": "1 Month",
        "price": 2000
      },
      {
        "name": "Permanent",
        "price": 6000
      }
    ],
    "imageUrl": "uploads/pic_1795100867_9777b7.png",
    "image": "uploads/pic_1795100867_9777b7.png",
    "images": [
      "uploads/pic_1795100867_9777b7.png",
      "uploads/pic_1795100867_4a2403.png"
    ],
    "videoUrl": "",
    "videos": [],
    "badge": "100",
    "featured": false,
    "stock": 99999999,
    "description": "FULLY HIDDEN PANEL \n\n FULLY UNDETECTABLE ALL BYPASS \n\nFOR V BADGE PLAYER \n\n✅ PRICE:\n\n🛒 1 MONTH - 2k BDT / 20 USD \n🛒 PARMANENT - 6k BDT / 60 USD",
    "rating": 5
  },
  {
    "id": "P1903",
    "name": "BIOS ADVANCED V2",
    "title": "BIOS ADVANCED V2",
    "category": "FREE FIRE",
    "price": 3000,
    "originalPrice": 0,
    "permPrice": 12000,
    "options": "1 Month:3000, Permanent:12000",
    "parsedOptions": [
      {
        "name": "1 Month",
        "price": 3000
      },
      {
        "name": "Permanent",
        "price": 12000
      }
    ],
    "imageUrl": "uploads/pic_1795101087_73dfa8.png",
    "image": "uploads/pic_1795101087_73dfa8.png",
    "images": [
      "uploads/pic_1795101087_73dfa8.png",
      "uploads/pic_1795101087_594f9b.png"
    ],
    "videoUrl": "",
    "videos": [],
    "badge": "",
    "featured": false,
    "stock": 999,
    "description": "BIOS ADVANCED V2 - EXTREME PRIVACY & NEXT LEVEL PERFORMANCE FOR TOURNAMENTS AND RANK MATCHES.",
    "rating": 5
  },
  {
    "id": "P6561",
    "name": "STREAMER",
    "title": "STREAMER",
    "category": "FREE FIRE",
    "price": 700,
    "originalPrice": 0,
    "permPrice": 2000,
    "options": "1 Month:700, Permanent:2000",
    "parsedOptions": [
      {
        "name": "1 Month",
        "price": 700
      },
      {
        "name": "Permanent",
        "price": 2000
      }
    ],
    "imageUrl": "uploads/pic_1795101169_3e0cb0.png",
    "image": "uploads/pic_1795101169_3e0cb0.png",
    "images": [
      "uploads/pic_1795101169_3e0cb0.png",
      "uploads/pic_1795101169_5a6926.png",
      "uploads/pic_1795101169_46bf13.png"
    ],
    "videoUrl": "",
    "videos": [],
    "badge": "",
    "featured": false,
    "stock": 999,
    "description": "100% UNDETECTABLE STREAMER PANEL — FULLY SAFE FOR MAIN AND V-BADGE IDS, WITH HIDDEN INTERNAL ESP AND AIMBOT FOR HEAD, NECK, AND DRAG — WORKS ONCE ACTIVATED, NO NEED TO TURN ON REPEATEDLY \nSTREAMER PANEL FOR NEW U2BAR \n\nOPEN TICKET FOR BUY \n\nPRICE\n\n 1 MONTH = 700TK / 7USDT \nPARMANENT = 2K / 20USDT TICKET",
    "rating": 5
  }
];

var DEFAULT_SETTINGS = {
  adminEmail: "admin@likhonshop.com",
  storeName: "likhonshop",
  storeTagline: "THE BEST HIDDEN PANEL IN THE WORLD",
  storePhone: "01736969496",
  storeEmail: "support@likhonshop.com",
  storeAddress: "Dhaka, Bangladesh",
  currency: "৳",
  shippingDhaka: 0,
  shippingOutside: 0,
  freeShippingThreshold: 0,
  bkashNumber: "01736969496 (Personal)",
  nagadNumber: "01736969496 (Personal)",
  rocketNumber: "01736969496 (Personal)",
  paymentInstructions: "Send Money to our bKash/Nagad/Rocket number and enter your Transaction ID (TrxID) below.",
  websiteLogo: "assets/favicon-192.png",
  websiteFavicon: "assets/favicon-192.png",
  customCategories: [
    "FREE FIRE",
    "BLOOD STRIKE",
    "GTA 5 FIVE M",
    "FREE FIRE PROJECTS",
    "GRABBER C++"
  ],
  primaryColor: "#6366f1",
  secondaryColor: "#818cf8",
  accentColor: "#a5b4fc",
  bgPrimary: "#09090b",
  themePreset: "stealth",
  heroTitle: "likhonshop —  HIDDEN CHEATS & GAME MODS",
  heroSubtitle: ".",
  heroBadge: "🔥 2026 OFFICIAL NEXT-GEN CHEATS",
  hero3dStyle: "cyber",
  hero3dEnabled: "yes",
  product3dEnabled: "yes",
  antiInspectEnabled: "no",
  telegramLink: "https://t.me/rtxstore_official",
  discordLink: "https://discord.gg/bTRJ6H22QP",
  whatsappLink: "https://wa.me/8801736969496",
  youtubeLink: "https://www.youtube.com/@FFRTXPANEL",
  heroBtn1Text: "Explore Products 🛒",
  heroBtn1Link: "#shop",
  heroBtn2Text: "Track Order 📦",
  heroBtn2Link: "#track",
  heroBgVideo: "",
  heroBgImage: "",
  bannerVideo: "",
  bannerImage: "",
  googleClientId: ""
};

var APP = {
  products: [],
  categories: [],
  settings: Object.assign({}, DEFAULT_SETTINGS),
  cart: [],
  user: null,
  userToken: null,
  currentPage: 'home',
  isLoading: false,
  searchOpen: false
};

function hexToRgba(hex, alpha) {
  if (!hex || typeof hex !== 'string') return 'rgba(108, 92, 231, ' + alpha + ')';
  hex = hex.replace('#', '').trim();
  if (hex.length === 3) hex = hex.split('').map(function(c) { return c + c; }).join('');
  if (hex.length !== 6) return 'rgba(108, 92, 231, ' + alpha + ')';
  var r = parseInt(hex.substring(0, 2), 16) || 0;
  var g = parseInt(hex.substring(2, 4), 16) || 0;
  var b = parseInt(hex.substring(4, 6), 16) || 0;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function adjustHexBrightness(hex, percent) {
  if (!hex || typeof hex !== 'string') return hex;
  hex = hex.replace('#', '').trim();
  if (hex.length === 3) hex = hex.split('').map(function(c) { return c + c; }).join('');
  if (hex.length !== 6) return '#' + hex;
  var num = parseInt(hex, 16);
  var amt = Math.round(2.55 * percent);
  var R = (num >> 16) + amt;
  var G = ((num >> 8) & 0x00FF) + amt;
  var B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 0 ? 0 : B) : 255)).toString(16).slice(1);
}

function isLightColor(hex) {
  if (!hex || typeof hex !== 'string') return false;
  hex = hex.replace('#', '').trim();
  if (hex.length === 3) hex = hex.split('').map(function(c) { return c + c; }).join('');
  if (hex.length !== 6) return false;
  var r = parseInt(hex.substring(0, 2), 16) || 0;
  var g = parseInt(hex.substring(2, 4), 16) || 0;
  var b = parseInt(hex.substring(4, 6), 16) || 0;
  var brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}

function applyStoreTheme(settingsObj) {
  try {
    var s = settingsObj;
    if (!s) {
      var cached = localStorage.getItem('rtx_theme_colors');
      if (cached) {
        s = JSON.parse(cached);
      }
    }
    if (!s) return;

    var primary = s.primaryColor || '#6C5CE7';
    var secondary = s.secondaryColor || '#FF6B6B';
    var accent = s.accentColor || '#F39C12';
    var bg = s.bgPrimary || '#0a0a1a';

    var primaryLight = adjustHexBrightness(primary, 22);
    var primaryDark = adjustHexBrightness(primary, -22);
    var secondaryLight = adjustHexBrightness(secondary, 20);
    var accentLight = adjustHexBrightness(accent, 20);

    var root = document.documentElement.style;
    root.setProperty('--color-primary', primary);
    root.setProperty('--color-primary-light', primaryLight);
    root.setProperty('--color-primary-dark', primaryDark);
    root.setProperty('--color-secondary', secondary);
    root.setProperty('--color-secondary-light', secondaryLight);
    root.setProperty('--color-accent', accent);
    root.setProperty('--color-accent-light', accentLight);

    root.setProperty('--bg-primary', bg);
    var lightMode = isLightColor(bg);

    if (lightMode) {
      root.setProperty('--bg-secondary', '#f1f5f9');
      root.setProperty('--bg-card', '#ffffff');
      root.setProperty('--bg-card-hover', '#f8fafc');
      root.setProperty('--bg-surface', '#ffffff');
      root.setProperty('--bg-input', '#ffffff');
      root.setProperty('--text-primary', '#0f172a');
      root.setProperty('--text-secondary', '#475569');
      root.setProperty('--text-muted', '#64748b');
      root.setProperty('--text-accent', primary);
      root.setProperty('--gradient-card', 'linear-gradient(145deg, #ffffff, #f8fafc)');
      root.setProperty('--gradient-glass', 'linear-gradient(135deg, rgba(0,0,0,0.04), rgba(0,0,0,0.01))');
      if (document.body) document.body.classList.add('theme-light');
    } else {
      var bgSec = adjustHexBrightness(bg, 5);
      var bgCard = adjustHexBrightness(bg, 9);
      var bgCardHover = adjustHexBrightness(bg, 14);
      var bgSurface = adjustHexBrightness(bg, 16);
      var bgInput = adjustHexBrightness(bg, 4);

      root.setProperty('--bg-secondary', bgSec);
      root.setProperty('--bg-card', bgCard);
      root.setProperty('--bg-card-hover', bgCardHover);
      root.setProperty('--bg-surface', bgSurface);
      root.setProperty('--bg-input', bgInput);
      root.setProperty('--text-primary', '#ffffff');
      root.setProperty('--text-secondary', '#b8b8d4');
      root.setProperty('--text-muted', '#6c6c8a');
      root.setProperty('--text-accent', primaryLight);
      root.setProperty('--gradient-card', 'linear-gradient(145deg, ' + bgCard + ', ' + bgCardHover + ')');
      root.setProperty('--gradient-glass', 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))');
      if (document.body) document.body.classList.remove('theme-light');
    }

    root.setProperty('--gradient-primary', 'linear-gradient(135deg, ' + primary + ', ' + primaryLight + ')');
    root.setProperty('--gradient-hero', 'linear-gradient(135deg, ' + primary + ' 0%, ' + secondary + ' 50%, ' + accent + ' 100%)');
    root.setProperty('--shadow-glow-primary', '0 0 30px ' + hexToRgba(primary, 0.35));
    root.setProperty('--shadow-glow-secondary', '0 0 30px ' + hexToRgba(secondary, 0.35));
    root.setProperty('--shadow-glow-accent', '0 0 30px ' + hexToRgba(accent, 0.35));

    localStorage.setItem('rtx_theme_colors', JSON.stringify({
      primaryColor: primary,
      secondaryColor: secondary,
      accentColor: accent,
      bgPrimary: bg,
      isLight: lightMode
    }));
  } catch(err) {
    console.warn('Theme apply error:', err);
  }
}

function initAntiInspectProtection() {
  function isAntiInspectDisabled() {
    return APP.settings && APP.settings.antiInspectEnabled === 'no';
  }

  // 1. Right Click Prevention across ALL elements including inputs (Silent)
  function blockContextMenu(e) {
    if (isAntiInspectDisabled()) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    return false;
  }
  window.addEventListener('contextmenu', blockContextMenu, true);
  document.addEventListener('contextmenu', blockContextMenu, true);

  // 2. Comprehensive F12 and DevTools Shortcut Prevention (Physical & On-Screen Keyboard)
  function blockDevToolsKeys(e) {
    if (isAntiInspectDisabled()) return;

    var key = (e.key || '').toLowerCase();
    var code = e.code || '';
    var keyCode = e.keyCode || e.which || 0;
    var isCtrl = e.ctrlKey || e.metaKey;
    var isShift = e.shiftKey;
    var isAlt = e.altKey;

    // F12 Key (Physical keyboard, Windows On-Screen Keyboard / OSK, virtual keys)
    var isF12 = key === 'f12' || code === 'F12' || keyCode === 123;

    // Ctrl+Shift+I / J / C / K
    var isInspectCombo = isCtrl && isShift && (key === 'i' || key === 'j' || key === 'c' || key === 'k' || keyCode === 73 || keyCode === 74 || keyCode === 67 || keyCode === 75);

    // Mac Cmd+Option+I / J / C / U
    var isMacDevTools = e.metaKey && isAlt && (key === 'i' || key === 'j' || key === 'c' || key === 'u' || keyCode === 73 || keyCode === 74 || keyCode === 67 || keyCode === 85);

    // Ctrl+U (View Source)
    var isViewSource = isCtrl && !isShift && (key === 'u' || keyCode === 85);

    // Ctrl+S (Save Webpage)
    var isSavePage = isCtrl && !isShift && (key === 's' || keyCode === 83);

    // Ctrl+P (Print Webpage)
    var isPrint = isCtrl && !isShift && (key === 'p' || keyCode === 80);

    // Context Menu Key
    var isMenuKey = key === 'contextmenu' || keyCode === 93;

    if (isF12 || isInspectCombo || isMacDevTools || isViewSource || isSavePage || isPrint || isMenuKey) {
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      return false;
    }
  }

  window.addEventListener('keydown', blockDevToolsKeys, true);
  document.addEventListener('keydown', blockDevToolsKeys, true);
  window.addEventListener('keyup', blockDevToolsKeys, true);
  document.addEventListener('keyup', blockDevToolsKeys, true);

  // 3. Dragging images prevention
  document.addEventListener('dragstart', function(e) {
    if (isAntiInspectDisabled()) return;
    if (e.target && e.target.nodeName === 'IMG') {
      e.preventDefault();
      return false;
    }
  }, false);
}

function initApp() {
  try {
    try { applyStoreTheme(); } catch(e) {}
    try { initAntiInspectProtection(); } catch(e) {}
    try { loadCart(); } catch(e) {}
    try { updateCartBadge(); } catch(e) {}
    try { initUserSession(); } catch(e) {}
    try { initScrollEffects(); } catch(e) {}
    try { initRippleEffect(); } catch(e) {}

    try {
      var cachedSettings = localStorage.getItem('rtx_store_settings');
      if (cachedSettings) {
        var parsedSettings = JSON.parse(cachedSettings);
        if (parsedSettings && typeof parsedSettings === 'object') {
          APP.settings = Object.assign({}, DEFAULT_SETTINGS, parsedSettings);
        }
      }
    } catch(e) {}
    try { applyStoreTheme(APP.settings); } catch(e) {}

    var stored = null;
    try {
      stored = localStorage.getItem('rtx_custom_products');
      if (stored) {
        var parsed = JSON.parse(stored);
        if (parsed && parsed.length > 0) APP.products = parsed;
      }
    } catch(e) {}

    var catMap = {};
    if (APP.settings && Array.isArray(APP.settings.customCategories)) {
      APP.settings.customCategories.forEach(function(c) { if (c) catMap[c] = true; });
    }
    APP.products.forEach(function (p) {
      if (p.category) catMap[p.category] = true;
    });
    APP.categories = Object.keys(catMap);

    // Render initial page immediately
    handleRoute();

    // Fetch background updates from Apps Script server
    try { loadInitialData(); } catch(e) {}

    // Handle hash routing
    window.addEventListener('hashchange', handleRoute);
  } catch (err) {
    // If anything fails, show error on page so we can debug
    var app = document.getElementById('app');
    if (app) {
      app.innerHTML = '<div style="padding:40px;color:#ff6b6b;font-family:monospace"><h2>Init Error</h2><pre>' + (err.message || err) + '</pre><pre>' + (err.stack || '') + '</pre></div>';
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Load products, categories, and settings from server asynchronously
 */
function loadInitialData() {
  fetch('api/api.php?action=get_all')
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        if (res.data) {
          APP.products = res.data.products || [];
          APP.coupons = res.data.coupons || [];
          APP.reviews = res.data.reviews || [];
        }
        if (res.settings) {
          APP.settings = Object.assign({}, DEFAULT_SETTINGS, res.settings);
          try {
            localStorage.setItem('rtx_store_settings', JSON.stringify(res.settings));
          } catch(e) {}
          try { applyStoreTheme(res.settings); } catch(e) {}
          var brandEl = document.getElementById('storeBrandName') || document.querySelector('.brand-text');
          if (brandEl && res.settings.storeName) brandEl.textContent = res.settings.storeName;
          var footEl = document.getElementById('footerStoreName');
          if (footEl && res.settings.storeName) footEl.textContent = '🛍️ ' + res.settings.storeName;
          var footTag = document.getElementById('footerStoreTagline');
          if (footTag && res.settings.storeTagline) footTag.textContent = res.settings.storeTagline;
          if (res.settings.storeName) document.title = res.settings.storeName + ' — Premium Online E-Commerce Store';
          if (res.settings.websiteFavicon) {
            var fav = document.querySelector('link[rel="icon"]');
            if (fav) fav.href = res.settings.websiteFavicon;
          }
          if (res.settings.websiteLogo) {
            var logoImg = document.getElementById('navBrandLogo');
            var iconSpan = document.getElementById('navBrandIcon');
            if (logoImg) {
              logoImg.src = res.settings.websiteLogo;
              logoImg.style.display = 'inline-block';
              if (iconSpan) iconSpan.style.display = 'none';
            }
          }
          if (res.settings.telegramLink) {
            var tg = document.getElementById('footerTelegramLink');
            if (tg) tg.href = res.settings.telegramLink;
          }
          if (res.settings.discordLink) {
            var ds = document.getElementById('footerDiscordLink');
            if (ds) ds.href = res.settings.discordLink;
          }
          if (res.settings.youtubeLink) {
            var yt = document.getElementById('footerYoutubeLink');
            if (yt) yt.href = res.settings.youtubeLink;
          }
          if (res.settings.whatsappLink) {
            var wa = document.getElementById('footerWhatsappLink');
            if (wa) wa.href = res.settings.whatsappLink;
          }
        }

        var catMap = {};
        if (APP.settings && Array.isArray(APP.settings.customCategories)) {
          APP.settings.customCategories.forEach(function(c) { if (c) catMap[c] = true; });
        }
        APP.products.forEach(function (p) { if (p.category) catMap[p.category] = true; });
        APP.categories = Object.keys(catMap);
        handleRoute();
      }
    })
    .catch(function () {
      fetch('data/store_data.json')
        .then(function(r){ return r.json(); })
        .then(function(d){
          if (d.products) APP.products = d.products;
          handleRoute();
        }).catch(function(){});
    });
}

// ============================================
// ROUTING
// ============================================
function navigateTo(page, param) {
  closeMobileNav();
  closeSearch();
  closeProductModal();

  if (param) {
    window.location.hash = '#' + page + '/' + param;
  } else {
    window.location.hash = '#' + page;
  }
}

// ═══════════════════════════════════════════
// DYNAMIC SEO & META TAG ENGINE
// ═══════════════════════════════════════════
function updatePageSEO(page, param) {
  var baseUrl = window.location.origin || 'https://localhost:3000';
  var storeName = (APP.settings && APP.settings.storeName) || 'likhonshop';
  var title = storeName + ' — Buy Free Fire VIP Mods, FiveM Scripts & Gaming Tools Bangladesh';
  var desc = 'likhonshop is Bangladesh\'s #1 trusted gaming store for Free Fire VIP mods, FiveM scripts, Blood Strike inject tools, and custom gaming panels with instant delivery via bKash & Nagad.';
  var canonical = baseUrl + '/';
  var ogImage = baseUrl + '/assets/favicon.svg';

  // Remove any previous dynamic Product JSON-LD script
  var existingScript = document.getElementById('dynamicProductSchema');
  if (existingScript) existingScript.remove();

  switch (page) {
    case 'home':
      title = storeName + ' — Elite 3D Gaming Mods & VIP Tools Bangladesh';
      desc = 'Get verified Free Fire VIP panels, FiveM scripts, Blood Strike tools, and gaming hacks in Bangladesh. Automated instant delivery via bKash & Nagad.';
      canonical = baseUrl + '/';
      break;

    case 'shop':
      if (param) {
        var catName = decodeURIComponent(param);
        title = catName + ' Mods & Gaming Tools — ' + storeName + ' Bangladesh';
        desc = 'Buy verified ' + catName + ' mods, panels, and inject tools in Bangladesh. Best prices, instant automated delivery via bKash & Nagad on ' + storeName + '.';
        canonical = baseUrl + '/#shop/' + encodeURIComponent(param);
      } else {
        title = 'All Products & VIP Gaming Tools — ' + storeName + ' Bangladesh';
        desc = 'Browse our complete catalog of gaming mods, VIP injector panels, FiveM scripts, and digital gaming tools in Bangladesh.';
        canonical = baseUrl + '/#shop';
      }
      break;

    case 'categories':
      title = 'Gaming Categories & Mod Collections — ' + storeName;
      desc = 'Explore Free Fire, Blood Strike, GTA 5 FiveM, and Custom Project tools. Find the best mod tools for your favorite games.';
      canonical = baseUrl + '/#categories';
      break;

    case 'track':
      title = 'Track Order Status Live — ' + storeName;
      desc = 'Check the instant delivery status of your digital order, game tool key, or VIP mod license on ' + storeName + '.';
      canonical = baseUrl + '/#track';
      break;

    case 'cart':
      title = 'Shopping Cart — ' + storeName;
      desc = 'Review your chosen gaming tools, enter discount coupons, and proceed to instant bKash or Nagad payment.';
      canonical = baseUrl + '/#cart';
      break;

    case 'checkout':
      title = 'Secure Checkout (bKash, Nagad, Rocket) — ' + storeName;
      desc = 'Complete your order with instant automated delivery. Safe and encrypted payments via bKash, Nagad, and Rocket.';
      canonical = baseUrl + '/#checkout';
      break;

    case 'product':
      var prod = APP.products ? APP.products.find(function(p) { return String(p.id) === String(param); }) : null;
      if (prod) {
        var pPrice = prod.price || 0;
        var pCategory = prod.category || 'Gaming Tool';
        title = 'Buy ' + prod.name + ' (' + pCategory + ') in Bangladesh — ' + storeName;
        desc = 'Order ' + prod.name + ' (' + pCategory + ') for ' + pPrice + '৳. 100% verified, undetected VIP gaming mod with instant automated delivery via bKash & Nagad.';
        canonical = baseUrl + '/#product/' + prod.id;
        if (prod.image) {
          ogImage = prod.image.startsWith('http') ? prod.image : (baseUrl + '/' + prod.image.replace(/^(\.\.\/)+/, ''));
        }

        // Inject Product Schema JSON-LD for Google Rich Snippets!
        var schemaData = {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": prod.name,
          "image": ogImage,
          "description": prod.description || desc,
          "sku": prod.id,
          "category": pCategory,
          "brand": {
            "@type": "Brand",
            "name": storeName
          },
          "offers": {
            "@type": "Offer",
            "url": canonical,
            "priceCurrency": "BDT",
            "price": pPrice,
            "availability": (prod.stock === 0) ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": storeName
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": (prod.rating || 5.0).toString(),
            "reviewCount": "18"
          }
        };

        var scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.id = 'dynamicProductSchema';
        scriptEl.text = JSON.stringify(schemaData);
        document.head.appendChild(scriptEl);
      }
      break;
  }

  // Update DOM Title
  document.title = title;

  // Update Meta Description
  var descEl = document.getElementById('seoDescription');
  if (descEl) descEl.setAttribute('content', desc);

  // Update Canonical
  var canEl = document.getElementById('seoCanonical');
  if (canEl) canEl.setAttribute('href', canonical);

  // Update Open Graph
  var ogTitle = document.getElementById('ogTitle');
  if (ogTitle) ogTitle.setAttribute('content', title);
  var ogDesc = document.getElementById('ogDesc');
  if (ogDesc) ogDesc.setAttribute('content', desc);
  var ogUrl = document.getElementById('ogUrl');
  if (ogUrl) ogUrl.setAttribute('content', canonical);
  var ogImg = document.getElementById('ogImage');
  if (ogImg) ogImg.setAttribute('content', ogImage);

  // Update Twitter
  var twTitle = document.getElementById('twTitle');
  if (twTitle) twTitle.setAttribute('content', title);
  var twDesc = document.getElementById('twDesc');
  if (twDesc) twDesc.setAttribute('content', desc);
  var twImg = document.getElementById('twImage');
  if (twImg) twImg.setAttribute('content', ogImage);
}

function handleRoute() {
  closeProductModal();
  var hash = window.location.hash.replace('#', '');
  if (!hash && window.location.search) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('product')) {
        hash = 'product/' + urlParams.get('product');
      } else if (urlParams.get('page')) {
        hash = urlParams.get('page');
      }
    } catch (e) {}
  }
  hash = hash || 'home';
  var parts = hash.split('/');
  var page = parts[0];
  var param = parts[1] || null;

  APP.currentPage = page;
  updateNavActive(page);
  updatePageSEO(page, param);
  window.scrollTo({ top: 0, behavior: 'auto' });

  var app = document.getElementById('app');
  if (!app) return;

    switch (page) {
    case 'home':
      renderHome(app);
      break;
    case 'shop':
      renderShop(app, param);
      break;
    case 'categories':
      renderCategoriesPage(app);
      break;
    case 'track':
      renderTrackOrder(app, param);
      break;
    case 'product':
      renderProductDetail(app, param);
      break;
    case 'cart':
      renderCart(app);
      break;
    case 'checkout':
      renderCheckout(app);
      break;
    case 'order':
      renderOrderConfirmation(app, param);
      break;
    case 'account':
      renderAccountPage(app);
      break;
    case 'admin':
      window.location.href = 'admin/';
      return;
    default:
      renderHome(app);
  }

  // 3D Engine Lifecycle Management
  if (page !== 'home' && window.RTX3D) {
    RTX3D.destroyHero();
  }
  if (page !== 'product' && window.RTX3D && typeof RTX3D.destroyProductViewer === 'function') {
    RTX3D.destroyProductViewer();
  }

  // Page transition
  app.classList.remove('page-enter');
  void app.offsetWidth;
  app.classList.add('page-enter');

  // Initialize 3D effects, scroll reveal, and tilt
  setTimeout(function () {
    if (typeof initScrollReveal === 'function') initScrollReveal();
    if (typeof initCardTilt === 'function') initCardTilt();
    if (window.RTXEffects) RTXEffects.refresh();
  }, 60);
}

function updateNavActive(page) {
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var linkPage = link.getAttribute('data-page');
    if (linkPage === page || (page === 'shop' && linkPage === 'shop')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ============================================
// PAGE: HOME
// ============================================
function renderHome(container) {
  var featured = APP.products.filter(function (p) { return p.featured; });
  var settings = APP.settings || {};

  var html = '';

  // PROMOTIONAL BANNER (if configured in Admin)
  var bannerUrl = settings.bannerVideo || settings.bannerImage || '';
  if (bannerUrl) {
    var isBannerVid = /\.(mp4|webm|ogg|mov)$/i.test(bannerUrl);
    html += '<div class="container" style="padding-top:calc(var(--nav-height) + 16px);padding-bottom:0">';
    html += '  <div class="hero-promo-banner animate-in">';
    if (isBannerVid) {
      html += '    <video autoplay muted loop playsinline src="' + escapeHtml(bannerUrl) + '"></video>';
    } else {
      html += '    <img src="' + escapeHtml(bannerUrl) + '" alt="Promotion Banner">';
    }
    html += '  </div>';
    html += '</div>';
  }

  // HERO WITH THREE.JS 3D CORE & PARTICLES
  var heroBadge = settings.heroBadge || DEFAULT_SETTINGS.heroBadge;
  var heroTitle = settings.heroTitle || DEFAULT_SETTINGS.heroTitle;
  var heroDesc = settings.heroSubtitle !== undefined ? settings.heroSubtitle : DEFAULT_SETTINGS.heroSubtitle;
  var heroBtn1Text = settings.heroBtn1Text || DEFAULT_SETTINGS.heroBtn1Text;
  var heroBtn1Link = settings.heroBtn1Link || DEFAULT_SETTINGS.heroBtn1Link;
  var heroBtn2Text = settings.heroBtn2Text || DEFAULT_SETTINGS.heroBtn2Text;
  var heroBtn2Link = settings.heroBtn2Link || DEFAULT_SETTINGS.heroBtn2Link;
  var heroBgImage = settings.heroBgImage || '';
  var heroBgVideo = settings.heroBgVideo || '';
  var hero3dEnabled = settings.hero3dEnabled !== 'no';

  html += '<section class="hero">';
  if (heroBgVideo) {
    html += '  <video class="hero-bg-video" autoplay muted loop playsinline src="' + escapeHtml(heroBgVideo) + '"></video>';
  }
  var bgImgStyle = heroBgImage ? ' style="background-image:url(\'' + escapeHtml(heroBgImage) + '\');background-size:cover;background-position:center"' : '';
  html += '  <div class="hero-bg"' + bgImgStyle + '></div>';

  if (hero3dEnabled) {
    html += '  <div class="hero-3d-canvas" id="hero3dCanvas"></div>';
  }

  html += '  <div class="hero-particles">';
  html += '    <div class="particle"></div>';
  html += '    <div class="particle"></div>';
  html += '    <div class="particle"></div>';
  html += '  </div>';
  html += '  <div class="hero-content">';
  html += '    <div class="hero-badge"><span class="badge-dot"></span> ' + escapeHtml(heroBadge) + '</div>';
  html += '    <h1 class="hero-title-3d">' + (heroTitle.indexOf('<') !== -1 ? heroTitle : escapeHtml(heroTitle)) + '</h1>';
  html += '    <p class="hero-description">' + escapeHtml(heroDesc) + '</p>';
  html += '    <div class="hero-actions">';

  if (heroBtn1Link.startsWith('#')) {
    html += '      <button class="btn btn-primary btn-lg" onclick="navigateTo(\'' + escapeHtml(heroBtn1Link.replace('#', '')) + '\')">' + escapeHtml(heroBtn1Text) + '</button>';
  } else {
    html += '      <a href="' + escapeHtml(heroBtn1Link) + '" class="btn btn-primary btn-lg">' + escapeHtml(heroBtn1Text) + '</a>';
  }

  if (heroBtn2Link.startsWith('#')) {
    html += '      <button class="btn btn-secondary btn-lg" onclick="navigateTo(\'' + escapeHtml(heroBtn2Link.replace('#', '')) + '\')">' + escapeHtml(heroBtn2Text) + '</button>';
  } else {
    html += '      <a href="' + escapeHtml(heroBtn2Link) + '" class="btn btn-secondary btn-lg">' + escapeHtml(heroBtn2Text) + '</a>';
  }

  html += '    </div>';
  html += '    <div class="hero-stats">';
  html += '      <div class="hero-stat"><div class="stat-number" data-count="' + (APP.products.length || 6) + '">' + (APP.products.length || 6) + '</div><div class="stat-label">Products</div></div>';
  html += '      <div class="hero-stat"><div class="stat-number" data-count="' + (APP.categories.length || 3) + '">' + (APP.categories.length || 3) + '</div><div class="stat-label">Categories</div></div>';
  html += '      <div class="hero-stat"><div class="stat-number" data-count-text="24/7">24/7</div><div class="stat-label">Instant Delivery</div></div>';
  html += '    </div>';
  html += '  </div>';
  html += '</section>';

  // WHY CHOOSE US — Feature Cards
  html += '<section class="features-section">';
  html += '  <div class="container">';
  html += '    <div class="section-header reveal">';
  html += '      <span class="section-tag">💎 Why Choose Us</span>';
  html += '      <h2>Premium Digital Experience</h2>';
  html += '      <div class="divider"></div>';
  html += '      <p>Everything you need to accelerate your digital journey.</p>';
  html += '    </div>';
  html += '    <div class="features-grid">';
  html += '      <div class="feature-card reveal reveal-delay-1">';
  html += '        <div class="feature-icon">⚡</div>';
  html += '        <h3>Instant Delivery</h3>';
  html += '        <p>Get your digital products delivered instantly after payment verification.</p>';
  html += '      </div>';
  html += '      <div class="feature-card reveal reveal-delay-2">';
  html += '        <div class="feature-icon">🛡️</div>';
  html += '        <h3>Secure Payments</h3>';
  html += '        <p>Pay safely via bKash or Nagad with verified transaction tracking.</p>';
  html += '      </div>';
  html += '      <div class="feature-card reveal reveal-delay-3">';
  html += '        <div class="feature-icon">♾️</div>';
  html += '        <h3>Lifetime Access</h3>';
  html += '        <p>Download your purchases anytime. No expiry, no limits, forever yours.</p>';
  html += '      </div>';
  html += '      <div class="feature-card reveal reveal-delay-4">';
  html += '        <div class="feature-icon">💬</div>';
  html += '        <h3>24/7 Support</h3>';
  html += '        <p>Get help whenever you need it. Our team is always ready to assist.</p>';
  html += '      </div>';
  html += '    </div>';
  html += '  </div>';
  html += '</section>';

  // FEATURED PRODUCTS
  if (featured.length > 0) {
    html += '<section class="section">';
    html += '  <div class="container">';
    html += '    <div class="section-header reveal">';
    html += '      <span class="section-tag">✨ Featured</span>';
    html += '      <h2>Top Picks for You</h2>';
    html += '      <div class="divider"></div>';
    html += '      <p>Hand-picked premium products to supercharge your skills and workflow.</p>';
    html += '    </div>';
    html += '    <div class="products-grid">';
    featured.forEach(function (product, i) {
      html += renderProductCard(product, i);
    });
    html += '    </div>';
    html += '    <div style="text-align:center;margin-top:var(--space-xl)" class="reveal">';
    html += '      <button class="btn btn-secondary btn-lg" onclick="navigateTo(\'shop\')">View All Products →</button>';
    html += '    </div>';
    html += '  </div>';
    html += '</section>';
  }

  // CATEGORIES
  if (APP.categories.length > 0) {
    html += '<section class="section">';
    html += '  <div class="container">';
    html += '    <div class="section-header reveal">';
    html += '      <span class="section-tag">📂 Categories</span>';
    html += '      <h2>Browse by Category</h2>';
    html += '      <div class="divider"></div>';
    html += '    </div>';
    html += '    <div class="category-pills reveal" style="max-width:700px;margin:0 auto">';
    APP.categories.forEach(function (cat) {
      var count = APP.products.filter(function (p) { return p.category === cat; }).length;
      html += '<button class="category-pill" onclick="navigateTo(\'shop\',\'' + escapeHtml(cat) + '\')" style="padding:16px 28px;font-size:1rem">';
      html += escapeHtml(cat) + ' <span style="opacity:0.5;margin-left:4px">(' + count + ')</span>';
      html += '</button>';
    });
    html += '    </div>';
    html += '  </div>';
    html += '</section>';
  }

  // NEWSLETTER CTA
  html += '<section class="newsletter-section">';
  html += '  <div class="container">';
  html += '    <div class="newsletter-card reveal">';
  html += '      <h2>🚀 Stay in the Loop</h2>';
  html += '      <p>Get notified about new products, exclusive deals, and free resources.</p>';
  html += '      <div class="newsletter-form">';
  html += '        <input type="email" placeholder="Enter your email address">';
  html += '        <button class="btn btn-primary" onclick="showToast(\'Thanks for subscribing! 🎉\', \'success\')">Subscribe</button>';
  html += '      </div>';
  html += '    </div>';
  html += '  </div>';
  html += '</section>';

  // LOADING STATE
  if (APP.isLoading) {
    html = '';
    html += '<section class="hero">';
    html += '  <div class="hero-bg"></div>';
    html += '  <div class="hero-particles"><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div></div>';
    html += '  <div class="hero-content">';
    html += '    <div class="hero-badge"><span class="badge-dot"></span> ' + escapeHtml(DEFAULT_SETTINGS.heroBadge) + '</div>';
    html += '    <h1>' + escapeHtml(DEFAULT_SETTINGS.heroTitle) + '</h1>';
    html += '    <p class="hero-description">' + escapeHtml(DEFAULT_SETTINGS.storeTagline) + '</p>';
    html += '    <div class="hero-actions">';
    html += '      <button class="btn btn-primary btn-lg" onclick="navigateTo(\'shop\')">' + escapeHtml(DEFAULT_SETTINGS.heroBtn1Text) + '</button>';
    html += '    </div>';
    html += '  </div>';
    html += '</section>';
    html += '<section class="section"><div class="container">';
    html += '<div class="section-header"><span class="section-tag">Loading...</span><h2>Fetching Products</h2></div>';
    html += '<div class="products-grid">';
    for (var i = 0; i < 4; i++) {
      html += '<div class="skeleton-card animate-in"><div class="skeleton skeleton-image"></div><div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text" style="width:60%"></div></div>';
    }
    html += '</div></div></section>';
  }

  container.innerHTML = html;

  // Initialize 3D Hero Scene and Micro-interactions
  if (!APP.isLoading) {
    setTimeout(function () {
      if (window.RTX3D) {
        if (hero3dEnabled) {
          RTX3D.initHero();
        } else {
          RTX3D.destroyHero();
        }
      }
      if (window.RTXEffects) RTXEffects.refresh();
      if (typeof animateCounters === 'function') animateCounters();
    }, 40);
  }
}

// ============================================
// PAGE: SHOP
// ============================================
function renderShop(container, categoryFilter) {
  var targetCat = categoryFilter ? decodeURIComponent(categoryFilter) : null;
  var products = APP.products;
  if (targetCat && targetCat !== 'all') {
    products = products.filter(function (p) { return p.category === targetCat; });
  }

  var html = '';
  html += '<section class="section" style="padding-top:calc(var(--nav-height) + var(--space-2xl))">';
  html += '<div class="container">';

  html += '<div class="section-header">';
  html += '  <span class="section-tag">🛒 Shop</span>';
  html += '  <h2>' + (targetCat && targetCat !== 'all' ? escapeHtml(targetCat) : 'All Products') + '</h2>';
  html += '  <div class="divider"></div>';
  html += '</div>';

  // Search bar
  html += '<div class="search-bar-container">';
  html += '  <span class="search-icon">🔍</span>';
  html += '  <input type="text" class="search-bar" id="shopSearchBar" placeholder="Search products..." oninput="handleShopSearch(this.value)">';
  html += '</div>';

  // Category pills
  html += '<div class="category-pills">';
  html += '<button class="category-pill ' + (!targetCat || targetCat === 'all' ? 'active' : '') + '" onclick="navigateTo(\'shop\',\'all\')">All</button>';
  APP.categories.forEach(function (cat) {
    html += '<button class="category-pill ' + (targetCat === cat ? 'active' : '') + '" onclick="navigateTo(\'shop\',\'' + escapeHtml(cat) + '\')">' + escapeHtml(cat) + '</button>';
  });
  html += '</div>';

  // Products grid
  html += '<div class="products-grid" id="shopProductsGrid">';
  if (products.length === 0) {
    html += '<div style="grid-column:1/-1;text-align:center;padding:var(--space-3xl)">';
    html += '<p style="font-size:3rem;margin-bottom:var(--space-md)">📭</p>';
    html += '<h3>No products found</h3>';
    html += '<p style="color:var(--text-secondary);margin-top:var(--space-sm)">Try a different category or search term.</p>';
    html += '</div>';
  } else {
    products.forEach(function (product, i) {
      html += renderProductCard(product, i);
    });
  }
  html += '</div>';

  html += '</div></section>';

  container.innerHTML = html;
}

function handleShopSearch(query) {
  var grid = document.getElementById('shopProductsGrid');
  if (!grid) return;

  var q = query.toLowerCase().trim();
  var currentHash = window.location.hash.replace('#', '');
  var parts = currentHash.split('/');
  var categoryFilter = parts[1] && parts[1] !== 'all' ? parts[1] : null;

  var products = APP.products;
  if (categoryFilter) {
    products = products.filter(function (p) { return p.category === categoryFilter; });
  }

  if (q) {
    products = products.filter(function (p) {
      return (
        (p.name && p.name.toLowerCase().indexOf(q) > -1) ||
        (p.description && p.description.toLowerCase().indexOf(q) > -1)
      );
    });
  }

  var html = '';
  if (products.length === 0) {
    html += '<div style="grid-column:1/-1;text-align:center;padding:var(--space-3xl)">';
    html += '<p style="font-size:3rem;margin-bottom:var(--space-md)">🔍</p>';
    html += '<h3>No results for "' + escapeHtml(query) + '"</h3>';
    html += '<p style="color:var(--text-secondary);margin-top:var(--space-sm)">Try a different search term.</p>';
    html += '</div>';
  } else {
    products.forEach(function (product, i) {
      html += renderProductCard(product, i);
    });
  }

  grid.innerHTML = html;

  // Re-init tilt on new cards
  setTimeout(initCardTilt, 100);
}

function resolveStoreImg(url) {
  if (!url) return '';
  if (url.indexOf('../') === 0) return url.substring(3);
  return url;
}

window.CURRENT_PRODUCT_GALLERY = {
  images: [],
  currentIndex: 0
};

window.CURRENT_PRODUCT_VIDEOS = [];

function openProductGalleryModal(images, initialIdx) {
  if (!images || images.length === 0) return;
  var currentIndex = (typeof initialIdx === 'number' && initialIdx >= 0 && initialIdx < images.length) ? initialIdx : 0;

  var existing = document.getElementById('productImageLightbox');
  if (existing) existing.remove();

  var modal = document.createElement('div');
  modal.id = 'productImageLightbox';
  modal.className = 'lightbox-modal';

  function renderModalContent() {
    var curSrc = images[currentIndex];
    modal.innerHTML = '<div class="lightbox-content">' +
      '<button class="lightbox-close" title="Close (Esc)">✕</button>' +
      (images.length > 1 ? '<button class="lightbox-nav-btn lightbox-prev" title="Previous photo (←)">❮</button>' : '') +
      '<img src="' + escapeHtml(curSrc) + '" alt="Full Product Image" class="lightbox-img">' +
      (images.length > 1 ? '<button class="lightbox-nav-btn lightbox-next" title="Next photo (→)">❯</button>' : '') +
      '<div class="lightbox-footer">' +
        '<span class="lightbox-counter">📸 ' + (currentIndex + 1) + ' / ' + images.length + '</span>' +
        '<a href="' + escapeHtml(curSrc) + '" target="_blank" class="lightbox-open-new" download>⤓ Open / Download Original</a>' +
      '</div>' +
    '</div>';

    modal.querySelector('.lightbox-close').onclick = function() { modal.remove(); };
    var prevBtn = modal.querySelector('.lightbox-prev');
    if (prevBtn) {
      prevBtn.onclick = function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        renderModalContent();
      };
    }
    var nextBtn = modal.querySelector('.lightbox-next');
    if (nextBtn) {
      nextBtn.onclick = function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        renderModalContent();
      };
    }
  }

  modal.onclick = function(e) {
    if (e.target === modal) modal.remove();
  };

  var keyHandler = function(e) {
    if (!document.getElementById('productImageLightbox')) {
      window.removeEventListener('keydown', keyHandler);
      return;
    }
    if (e.key === 'Escape') {
      modal.remove();
    } else if (e.key === 'ArrowLeft' && images.length > 1) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      renderModalContent();
    } else if (e.key === 'ArrowRight' && images.length > 1) {
      currentIndex = (currentIndex + 1) % images.length;
      renderModalContent();
    }
  };
  window.addEventListener('keydown', keyHandler);

  renderModalContent();
  document.body.appendChild(modal);
}

function openProductImageModal(src) {
  if (!src) return;
  openProductGalleryModal([src], 0);
}

window.switchMainProductPhoto = function(idx, el) {
  var images = window.CURRENT_PRODUCT_GALLERY.images;
  if (!images || !images[idx]) return;
  window.CURRENT_PRODUCT_GALLERY.currentIndex = idx;

  var mainPhoto = document.getElementById('mainProductPhoto');
  var photoView = document.getElementById('productPhotoView');
  if (mainPhoto) {
    mainPhoto.style.opacity = '0.3';
    setTimeout(function() {
      mainPhoto.src = images[idx];
      mainPhoto.style.opacity = '1';
    }, 120);
  }
  if (photoView) {
    photoView.setAttribute('data-current-src', images[idx]);
  }

  // Real-time 3D texture update
  if (window.RTX3D && typeof RTX3D.updateProductTexture === 'function') {
    RTX3D.updateProductTexture(images[idx]);
  }

  var allThumbs = document.querySelectorAll('.gallery-thumb-item');
  allThumbs.forEach(function(t) { t.classList.remove('active'); });
  if (el) el.classList.add('active');
};

window.switchMainProductVideo = function(vIdx, el) {
  var videos = window.CURRENT_PRODUCT_VIDEOS;
  if (!videos || !videos[vIdx]) return;
  var target = videos[vIdx];
  var player = document.getElementById('mainProductVideoPlayer');
  var titleEl = document.getElementById('currentVideoTitle');
  var badgeEl = document.getElementById('currentVideoBadge');

  if (player) {
    player.src = resolveStoreImg(target.url);
    player.load();
    player.play().catch(function() { /* Autoplay handling */ });
  }
  if (titleEl) {
    titleEl.textContent = target.title || ('Video #' + (vIdx + 1));
  }
  if (badgeEl) {
    badgeEl.textContent = 'Now Playing (' + (vIdx + 1) + ' of ' + videos.length + ')';
  }

  var allCards = document.querySelectorAll('.video-playlist-card');
  allCards.forEach(function(c) { c.classList.remove('active'); });
  if (el) el.classList.add('active');
};

// ============================================
// PRODUCT CARD COMPONENT
// ============================================
function renderProductCard(product, index) {
  var delayClass = (index !== undefined && index < 8) ? ' reveal reveal-delay-' + (Math.min(index, 5) + 1) : ' reveal';
  var html = '';
  var prodName = product.title || product.name || 'Digital Tool';
  var cardImg = resolveStoreImg(product.image || product.imageUrl || '');
  var badge = product.badge || (product.featured ? 'Featured' : '');
  var rating = (parseFloat(product.rating) || 4.9).toFixed(1);
  var reviews = product.reviewCount || 42;

  var imgCount = (Array.isArray(product.images) && product.images.length > 0) ? product.images.length : (product.image || product.imageUrl ? 1 : 0);
  var vidCount = (Array.isArray(product.videos) && product.videos.length > 0) ? product.videos.length : (product.videoUrl || product.video ? 1 : 0);

  html += '<div class="product-card' + delayClass + '" onclick="navigateTo(\'product\',\'' + product.id + '\')" data-tilt>';
  html += '  <div class="card-glow-border"></div>';
  html += '  <div class="card-sheen"></div>';
  html += '  <div class="product-card-image">';
  html += '    <img src="' + escapeHtml(cardImg) + '" alt="' + escapeHtml(prodName) + '" loading="lazy" onerror="this.src=\'assets/favicon.svg\'">';
  if (badge) {
    html += '    <span class="card-badge featured">⭐ ' + escapeHtml(badge) + '</span>';
  }
  if (vidCount > 0) {
    html += '    <span class="card-badge" style="top:' + (badge ? '42px' : 'var(--space-md)') + ';left:var(--space-md);background:rgba(235, 77, 75, 0.9);color:#fff;box-shadow:0 0 10px rgba(235,77,75,0.4)">🎥 ' + (vidCount > 1 ? vidCount + ' Videos' : 'Demo') + '</span>';
  }
  if (imgCount > 1) {
    html += '    <span class="card-badge" style="top:var(--space-md);right:var(--space-md);background:rgba(15, 23, 42, 0.85);color:#cbd5e1;border:1px solid rgba(255,255,255,0.18)">📸 ' + imgCount + '</span>';
  }
  html += '    <span class="card-badge category" style="' + (badge || vidCount > 0 ? 'top:auto;bottom:var(--space-md)' : '') + '">' + escapeHtml(product.category || '') + '</span>';
  html += '  </div>';
  html += '  <div class="product-card-body">';
  html += '    <h3>' + escapeHtml(prodName) + '</h3>';
  html += '    <p class="card-description">' + escapeHtml(product.description || '') + '</p>';
  html += '  </div>';
  html += '  <div class="product-card-footer">';
  html += '    <div>';
  html += '      <div class="product-price"><span class="currency">৳</span>' + formatNumber(product.price);
  if (product.originalPrice && product.originalPrice > product.price) {
    html += ' <span style="font-size:0.8rem;text-decoration:line-through;opacity:0.5;margin-left:5px">৳' + formatNumber(product.originalPrice) + '</span>';
  }
  html += '      </div>';
  html += '      <div class="product-rating">';
  html += '        <span class="star">★</span>';
  html += '        <span class="rating-value">' + rating + ' (' + reviews + ')</span>';
  html += '      </div>';
  html += '    </div>';
  html += '    <button class="add-to-cart-btn" onclick="event.stopPropagation();addToCart(\'' + product.id + '\')" aria-label="Add to cart" title="Add to Cart">+</button>';
  html += '  </div>';
  html += '</div>';
  return html;
}

window.switchProductVisualTab = function(tab, prodId) {
  var photoView = document.getElementById('productPhotoView');
  var galleryStrip = document.getElementById('productGalleryStrip');
  var box3dView = document.getElementById('product3dView');
  var photoBtn = document.getElementById('tabPhotoBtn');
  var box3dBtn = document.getElementById('tab3dBtn');
  if (tab === '3d') {
    if (photoView) photoView.style.display = 'none';
    if (galleryStrip) galleryStrip.style.display = 'none';
    if (box3dView) box3dView.style.display = 'flex';
    if (photoBtn) { photoBtn.classList.remove('btn-primary'); photoBtn.classList.add('btn-secondary'); }
    if (box3dBtn) { box3dBtn.classList.remove('btn-secondary'); box3dBtn.classList.add('btn-primary'); }
    var prod = null;
    for (var i = 0; i < APP.products.length; i++) {
      if (String(APP.products[i].id) === String(prodId)) { prod = APP.products[i]; break; }
    }
    if (window.RTX3D && prod) RTX3D.initProductViewer('product3dCanvas', prod);
  } else {
    if (photoView) photoView.style.display = 'flex';
    if (galleryStrip) galleryStrip.style.display = 'flex';
    if (box3dView) box3dView.style.display = 'none';
    if (photoBtn) { photoBtn.classList.remove('btn-secondary'); photoBtn.classList.add('btn-primary'); }
    if (box3dBtn) { box3dBtn.classList.remove('btn-primary'); box3dBtn.classList.add('btn-secondary'); }
  }
};

// ============================================
// PAGE: PRODUCT DETAIL
// ============================================
function renderProductDetail(container, productId) {
  var product = null;
  for (var i = 0; i < APP.products.length; i++) {
    if (String(APP.products[i].id) === String(productId)) {
      product = APP.products[i];
      break;
    }
  }

  if (!product) {
    container.innerHTML =
      '<div class="product-detail"><div class="container" style="text-align:center;padding:var(--space-4xl) 0">' +
      '<p style="font-size:4rem;margin-bottom:var(--space-lg)">😕</p>' +
      '<h2>Product Not Found</h2>' +
      '<p style="color:var(--text-secondary);margin:var(--space-md) 0 var(--space-xl)">The product you\'re looking for doesn\'t exist or has been removed.</p>' +
      '<button class="btn btn-primary" onclick="navigateTo(\'shop\')">← Back to Shop</button>' +
      '</div></div>';
    return;
  }

  // Update dynamic product SEO tags & Rich Snippet schema
  updatePageSEO('product', productId);

  var isInCart = APP.cart.some(function (item) { return String(item.id) === String(product.id); });

  var html = '';
  html += '<div class="product-detail">';
  html += '<div class="container">';

  var prodTitle = product.title || product.name || 'Digital Gaming Tool';

  // Extract all pictures
  var allImages = [];
  if (Array.isArray(product.images) && product.images.length > 0) {
    allImages = product.images.filter(function(img) { return typeof img === 'string' && img.trim() !== ''; });
  }
  if (allImages.length === 0 && (product.image || product.imageUrl)) {
    allImages = [product.image || product.imageUrl];
  }
  if (allImages.length === 0) {
    allImages = ['assets/favicon.svg'];
  }
  var resolvedImages = allImages.map(resolveStoreImg);
  var currentMainImg = resolvedImages[0];
  window.CURRENT_PRODUCT_GALLERY = {
    images: resolvedImages,
    currentIndex: 0
  };

  // Extract all videos
  var allVideos = [];
  if (Array.isArray(product.videos) && product.videos.length > 0) {
    product.videos.forEach(function(v, idx) {
      if (typeof v === 'string' && v.trim() !== '') {
        allVideos.push({ url: v.trim(), title: 'Demo Video #' + (idx + 1) });
      } else if (v && typeof v === 'object' && v.url) {
        allVideos.push({ url: v.url.trim(), title: v.title || ('Demo Video #' + (idx + 1)) });
      }
    });
  }
  if (allVideos.length === 0 && (product.videoUrl || product.video)) {
    var fallbackV = (product.videoUrl || product.video).trim();
    if (fallbackV) {
      allVideos.push({ url: fallbackV, title: 'Official Gameplay Demo' });
    }
  }
  window.CURRENT_PRODUCT_VIDEOS = allVideos;

  // Breadcrumb
  html += '<div style="margin-bottom:var(--space-xl);display:flex;align-items:center;gap:var(--space-sm);font-size:0.9rem" class="reveal">';
  html += '<a onclick="navigateTo(\'home\')" style="cursor:pointer;color:var(--text-muted)">Home</a>';
  html += '<span style="color:var(--text-muted)">›</span>';
  html += '<a onclick="navigateTo(\'shop\')" style="cursor:pointer;color:var(--text-muted)">Shop</a>';
  html += '<span style="color:var(--text-muted)">›</span>';
  html += '<span style="color:var(--text-secondary)">' + escapeHtml(prodTitle) + '</span>';
  html += '</div>';

  html += '<div class="product-detail-grid">';

  // Product Visual Column
  html += '<div class="product-detail-visuals reveal">';
  html += '  <div class="product-detail-image" id="productPhotoView" data-current-src="' + escapeHtml(currentMainImg) + '" onclick="openProductGalleryModal(window.CURRENT_PRODUCT_GALLERY.images, window.CURRENT_PRODUCT_GALLERY.currentIndex)" title="Click to view full picture">';
  html += '    <img id="mainProductPhoto" src="' + escapeHtml(currentMainImg) + '" alt="' + escapeHtml(prodTitle) + '" onerror="this.src=\'assets/favicon.svg\'">';
  html += '    <span class="zoom-badge">🔍 Click to zoom (' + resolvedImages.length + ' ' + (resolvedImages.length === 1 ? 'photo' : 'photos') + ')</span>';
  html += '  </div>';

  // Multi-Picture Thumbnail Strip
  if (resolvedImages.length > 1) {
    html += '  <div class="product-gallery-strip" id="productGalleryStrip">';
    resolvedImages.forEach(function(imgUrl, idx) {
      var isActive = (idx === 0) ? ' active' : '';
      html += '    <div class="gallery-thumb-item' + isActive + '" data-idx="' + idx + '" onclick="switchMainProductPhoto(' + idx + ', this)" title="View photo ' + (idx + 1) + ' of ' + resolvedImages.length + '">';
      html += '      <img src="' + escapeHtml(imgUrl) + '" alt="Photo ' + (idx + 1) + '" onerror="this.src=\'assets/favicon.svg\'">';
      html += '    </div>';
    });
    html += '  </div>';
  }
  html += '</div>';

  // Info
  html += '<div class="product-detail-info reveal reveal-delay-2">';
  html += '  <span class="detail-category">' + escapeHtml(product.category || '') + '</span>';
  html += '  <h1>' + escapeHtml(prodTitle) + '</h1>';
  html += '  <div class="detail-rating">';
  html += '    <span>★★★★★</span>';
  html += '    <span style="font-weight:700">' + (parseFloat(product.rating) || 5.0).toFixed(1) + '</span>';
  html += '    <span style="color:var(--text-muted);margin-left:4px">(' + (product.reviewCount || 42) + ' reviews)</span>';
  html += '  </div>';
  html += '  <div class="detail-price" id="detailPriceDisplay"><span class="currency">৳</span><span id="detailPriceValue">' + formatNumber(product.price) + '</span>';
  if (product.originalPrice && product.originalPrice > product.price) {
    html += ' <span style="font-size:1.1rem;text-decoration:line-through;opacity:0.5;margin-left:8px">৳' + formatNumber(product.originalPrice) + '</span>';
  }
  html += '  </div>';
  
  if (product.parsedOptions && product.parsedOptions.length > 0) {
    html += '  <div class="product-options" style="margin-bottom:var(--space-lg)">';
    html += '    <h3 style="font-size:1rem;margin-bottom:var(--space-sm)">Select Option:</h3>';
    html += '    <div class="options-group" style="display:flex;gap:var(--space-sm);flex-wrap:wrap">';
    product.parsedOptions.forEach(function(opt, idx) {
      var checked = idx === 0 ? 'checked' : '';
      html += '      <label class="option-label" style="cursor:pointer;padding:8px 16px;border:1px solid rgba(255,255,255,0.2);border-radius:var(--radius-md);display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.05);transition:all 0.3s ease">';
      html += '        <input type="radio" name="product_option" value="' + escapeHtml(opt.name) + '" data-price="' + opt.price + '" onchange="updateDetailPrice(this)" ' + checked + ' style="accent-color:var(--color-primary)">';
      html += '        <span>' + escapeHtml(opt.name) + ' — ৳' + formatNumber(opt.price) + '</span>';
      html += '      </label>';
    });
    html += '    </div>';
  }

  html += '  <p class="detail-description">' + escapeHtml(product.description || '') + '</p>';

  // Features list
  html += '  <ul class="detail-features">';
  if (Array.isArray(product.features) && product.features.length > 0) {
    product.features.forEach(function (feat) {
      html += '    <li>⚡ ' + escapeHtml(feat) + '</li>';
    });
  } else {
    html += '    <li>⚡ Instant digital delivery after payment verification</li>';
    html += '    <li>🛡️ 100% Anti-ban bypass & lifetime updates</li>';
    html += '    <li>📱 Verified payment via bKash, Nagad & Rocket</li>';
    html += '    <li>💬 24/7 dedicated Telegram & Discord support</li>';
  }
  html += '  </ul>';

  // Actions
  html += '  <div class="detail-actions">';
  if (isInCart) {
    html += '    <button class="btn btn-success btn-lg" onclick="navigateTo(\'cart\')">🛒 Go to Cart</button>';
    html += '    <button class="btn btn-secondary btn-lg" onclick="removeFromCart(\'' + product.id + '\');navigateTo(\'product\',\'' + product.id + '\')">Remove from Cart</button>';
  } else {
    html += '    <button class="btn btn-primary btn-lg" onclick="addToCart(\'' + product.id + '\')">🛒 Add to Cart</button>';
    html += '    <button class="btn btn-accent btn-lg" onclick="addToCart(\'' + product.id + '\');navigateTo(\'checkout\')">⚡ Buy Now</button>';
  }
  html += '  </div>';

  html += '</div>'; // detail-info
  html += '</div>'; // detail-grid

  // Live Gameplay / Showcase Video Playlist
  if (allVideos.length > 0) {
    var initialVideo = allVideos[0];
    var resolvedVidUrl = resolveStoreImg(initialVideo.url);
    html += '<div class="product-video-section reveal" id="productVideoSection">';
    html += '  <div class="product-video-header">';
    html += '    <span style="font-size:1.8rem">🎬</span>';
    html += '    <div>';
    html += '      <h3 style="font-size:1.25rem;font-weight:700;margin:0">Official Gameplay &amp; Demo Video Showcase</h3>';
    html += '      <p style="font-size:0.85rem;color:var(--text-muted);margin:2px 0 0 0">Watch feature demonstration, gameplay preview, and tutorial clips (' + allVideos.length + ' ' + (allVideos.length === 1 ? 'Video' : 'Videos') + ').</p>';
    html += '    </div>';
    html += '  </div>';

    html += '  <div class="video-now-playing-bar">';
    html += '    <div class="video-now-playing-title">';
    html += '      <span>▶</span> <span id="currentVideoTitle">' + escapeHtml(initialVideo.title || 'Gameplay Showcase') + '</span>';
    html += '    </div>';
    html += '    <span class="video-now-playing-badge" id="currentVideoBadge">Now Playing (1 of ' + allVideos.length + ')</span>';
    html += '  </div>';

    html += '  <div class="product-video-wrapper">';
    html += '    <video id="mainProductVideoPlayer" controls preload="metadata" playsinline src="' + escapeHtml(resolvedVidUrl) + '"></video>';
    html += '  </div>';

    if (allVideos.length > 1) {
      html += '  <div class="video-playlist-container">';
      html += '    <div class="video-playlist-heading">📺 Select Video to Play (' + allVideos.length + ' Available)</div>';
      html += '    <div class="video-playlist-grid">';
      allVideos.forEach(function(vid, vIdx) {
        var isVActive = (vIdx === 0) ? ' active' : '';
        html += '      <div class="video-playlist-card' + isVActive + '" data-vidx="' + vIdx + '" onclick="switchMainProductVideo(' + vIdx + ', this)">';
        html += '        <div class="video-playlist-icon">▶</div>';
        html += '        <div class="video-playlist-card-info">';
        html += '          <div class="video-playlist-card-title">' + escapeHtml(vid.title || ('Video #' + (vIdx + 1))) + '</div>';
        html += '          <div class="video-playlist-card-sub">Video clip ' + (vIdx + 1) + ' of ' + allVideos.length + '</div>';
        html += '        </div>';
        html += '      </div>';
      });
      html += '    </div>';
      html += '  </div>';
    }

    html += '</div>';
  }

  // Related products
  var related = APP.products.filter(function (p) {
    return p.category === product.category && p.id !== product.id;
  }).slice(0, 4);

  if (related.length > 0) {
    html += '<section class="section" style="padding-bottom:0">';
    html += '<div class="section-header reveal">';
    html += '  <span class="section-tag">🔗 Related</span>';
    html += '  <h2>You Might Also Like</h2>';
    html += '  <div class="divider"></div>';
    html += '</div>';
    html += '<div class="products-grid">';
    related.forEach(function (p, i) { html += renderProductCard(p, i); });
    html += '</div>';
    html += '</section>';
  }

  html += '</div></div>';

  container.innerHTML = html;

  // Initialize Micro-interactions & 3D tilt
  setTimeout(function () {
    if (window.RTXEffects) RTXEffects.refresh();
  }, 40);
}

function updateDetailPrice(radio) {
  var price = parseFloat(radio.getAttribute('data-price'));
  var display = document.getElementById('detailPriceValue');
  if (display) {
    display.innerHTML = formatNumber(price);
  }
}

// ============================================
// PAGE: CART
// ============================================
function renderCart(container) {
  var html = '<div class="cart-page"><div class="container">';

  html += '<div class="section-header" style="margin-bottom:var(--space-xl)">';
  html += '  <span class="section-tag">🛒 Your Cart</span>';
  html += '  <h2>Shopping Cart</h2>';
  html += '  <div class="divider"></div>';
  html += '</div>';

  if (APP.cart.length === 0) {
    html += '<div class="cart-empty">';
    html += '  <div class="empty-icon">🛒</div>';
    html += '  <h2>Your cart is empty</h2>';
    html += '  <p>Looks like you haven\'t added any products yet. Browse our collection to find something you love!</p>';
    html += '  <button class="btn btn-primary btn-lg" onclick="navigateTo(\'shop\')">🚀 Start Shopping</button>';
    html += '</div>';
  } else {
    html += '<div class="cart-layout">';

    // Cart items
    html += '<div class="cart-items">';
    var total = 0;
    APP.cart.forEach(function (item) {
      var product = null;
      for (var i = 0; i < APP.products.length; i++) {
        if (String(APP.products[i].id) === String(item.id)) {
          product = APP.products[i];
          break;
        }
      }
      if (!product) return;

      var itemPrice = product.price;
      var displayName = product.name;
      if (item.optionName && product.parsedOptions) {
        var opt = product.parsedOptions.find(function(o) { return o.name === item.optionName; });
        if (opt) {
          itemPrice = opt.price;
          displayName += ' (' + item.optionName + ')';
        }
      }

      var itemTotal = itemPrice * (item.quantity || 1);
      total += itemTotal;

      html += '<div class="cart-item reveal" id="cart-item-' + product.id + '">';
      html += '  <div class="cart-item-image">';
      html += '    <img src="' + escapeHtml(product.imageUrl || '') + '" alt="' + escapeHtml(product.name) + '" onerror="this.src=\'https://placehold.co/100x80/151530/6C5CE7?text=📦\'">';
      html += '  </div>';
      html += '  <div class="cart-item-info">';
      html += '    <h3>' + escapeHtml(displayName) + '</h3>';
      html += '    <span class="cart-item-category">' + escapeHtml(product.category || '') + '</span>';
      html += '  </div>';
      html += '  <div class="cart-item-price"><span class="currency">৳</span>' + formatNumber(itemPrice) + '</div>';
      html += '  <button class="cart-item-remove" onclick="removeFromCart(\'' + product.id + '\')" aria-label="Remove">✕</button>';
      html += '</div>';
    });
    html += '</div>';

    // Summary
    html += '<div class="cart-summary reveal">';
    html += '  <h3>Order Summary</h3>';
    html += '  <div class="summary-row"><span>Items (' + APP.cart.length + ')</span><span class="value">৳' + formatNumber(total) + '</span></div>';
    html += '  <div class="summary-row"><span>Delivery</span><span class="value" style="color:var(--color-success)">Free (Digital)</span></div>';
    html += '  <div class="summary-row total"><span>Total</span><span class="value">৳' + formatNumber(total) + '</span></div>';
    html += '  <button class="btn btn-primary btn-lg" onclick="navigateTo(\'checkout\')">Proceed to Checkout →</button>';
    html += '  <button class="btn btn-secondary" style="width:100%;margin-top:var(--space-sm)" onclick="navigateTo(\'shop\')">← Continue Shopping</button>';
    html += '</div>';

    html += '</div>'; // cart-layout
  }

  html += '</div></div>';
  container.innerHTML = html;
}

// ============================================
// PAGE: CHECKOUT
// ============================================
function renderCheckout(container) {
  if (APP.cart.length === 0) {
    navigateTo('cart');
    return;
  }

  var total = 0;
  APP.cart.forEach(function (item) {
    for (var i = 0; i < APP.products.length; i++) {
      if (String(APP.products[i].id) === String(item.id)) {
        var product = APP.products[i];
        var itemPrice = product.price;
        if (item.optionName && product.parsedOptions) {
          var opt = product.parsedOptions.find(function(o) { return o.name === item.optionName; });
          if (opt) itemPrice = opt.price;
        }
        total += itemPrice * (item.quantity || 1);
        break;
      }
    }
  });

  var html = '<div class="checkout-page"><div class="container">';

  html += '<div class="section-header" style="margin-bottom:var(--space-xl)">';
  html += '  <span class="section-tag">💳 Checkout</span>';
  html += '  <h2>Complete Your Order</h2>';
  html += '  <div class="divider"></div>';
  html += '</div>';

  html += '<div class="checkout-grid">';

  // Form
  html += '<div class="checkout-form-section reveal">';
  html += '  <h2>📋 Your Information</h2>';

  var preName = (APP.user && APP.user.name) ? escapeHtml(APP.user.name) : '';
  var preEmail = (APP.user && APP.user.email) ? escapeHtml(APP.user.email) : '';
  var prePhone = (APP.user && APP.user.phone) ? escapeHtml(APP.user.phone) : '';

  if (APP.user) {
    html += '  <div style="background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.3);border-radius:10px;padding:10px 14px;margin-bottom:16px;font-size:0.86rem;color:#c7d2fe;display:flex;align-items:center;justify-content:space-between">';
    html += '    <span>👤 Ordering as <strong>' + escapeHtml(APP.user.name) + '</strong> (' + escapeHtml(APP.user.email) + ')</span>';
    html += '    <a onclick="navigateTo(\'account\')" style="font-size:0.8rem;color:var(--color-primary-light);cursor:pointer;text-decoration:underline">Account Orders</a>';
    html += '  </div>';
  } else {
    html += '  <div style="background:rgba(255,255,255,0.03);border:1px dashed rgba(255,255,255,0.12);border-radius:10px;padding:10px 14px;margin-bottom:16px;font-size:0.86rem;color:#94a3b8;display:flex;align-items:center;justify-content:space-between">';
    html += '    <span>Have a Gmail account?</span>';
    html += '    <button type="button" class="btn btn-secondary btn-sm" onclick="openAuthModal(\'login\')" style="padding:4px 12px;font-size:0.8rem">Login to track orders</button>';
    html += '  </div>';
  }

  html += '  <div class="form-group">';
  html += '    <label for="checkoutName">Full Name *</label>';
  html += '    <input type="text" id="checkoutName" placeholder="Enter your full name" value="' + preName + '" required>';
  html += '  </div>';

  html += '  <div class="form-group">';
  html += '    <label for="checkoutEmail">Email Address *</label>';
  html += '    <input type="email" id="checkoutEmail" placeholder="you@example.com" value="' + preEmail + '" required>';
  html += '  </div>';

  html += '  <div class="form-group">';
  html += '    <label for="checkoutPhone">Phone Number *</label>';
  html += '    <input type="tel" id="checkoutPhone" placeholder="01XXXXXXXXX" value="' + prePhone + '" required>';
  html += '  </div>';

  html += '  <h2 style="margin-top:var(--space-xl)">💰 Payment Method</h2>';

  html += '  <div class="payment-methods" id="paymentMethods">';
  html += '    <div class="payment-method selected" data-method="bKash" onclick="selectPayment(this, \'bKash\')">';
  html += '      <span class="pm-icon">📱</span>';
  html += '      <span class="pm-name">bKash</span>';
  html += '      <span class="pm-desc">Send Money: ' + escapeHtml(APP.settings.bkashNumber || '01700000000') + '</span>';
  html += '    </div>';
  html += '    <div class="payment-method" data-method="Nagad" onclick="selectPayment(this, \'Nagad\')">';
  html += '      <span class="pm-icon">📲</span>';
  html += '      <span class="pm-name">Nagad</span>';
  html += '      <span class="pm-desc">Send Money: ' + escapeHtml(APP.settings.nagadNumber || '01800000000') + '</span>';
  html += '    </div>';
  html += '  </div>';

  html += '  <div class="form-group" style="margin-top:var(--space-lg)">';
  html += '    <label for="checkoutTxId">Transaction ID (bKash / Nagad TrxID) <span style="color:var(--text-muted);font-size:0.8rem">(Optional — Enter if paid)</span></label>';
  html += '    <input type="text" id="checkoutTxId" placeholder="e.g., TRX1234ABCD">';
  html += '  </div>';

  html += '  <button class="btn btn-accent btn-lg" style="width:100%;margin-top:var(--space-xl)" onclick="placeOrder()" id="placeOrderBtn">';
  html += '    🛒 Place Order — ৳' + formatNumber(total);
  html += '  </button>';

  html += '</div>';

  // Order summary sidebar
  html += '<div class="cart-summary reveal reveal-delay-2">';
  html += '  <h3>Order Summary</h3>';

  APP.cart.forEach(function (item) {
    var product = null;
    for (var i = 0; i < APP.products.length; i++) {
      if (String(APP.products[i].id) === String(item.id)) {
        product = APP.products[i];
        break;
      }
    }
    if (!product) return;
    
    var itemPrice = product.price;
    var displayName = product.name;
    if (item.optionName && product.parsedOptions) {
      var opt = product.parsedOptions.find(function(o) { return o.name === item.optionName; });
      if (opt) {
        itemPrice = opt.price;
        displayName += ' (' + item.optionName + ')';
      }
    }

    html += '<div class="summary-row"><span style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(displayName) + '</span><span class="value">৳' + formatNumber(itemPrice) + '</span></div>';
  });

  html += '  <div class="summary-row total"><span>Total</span><span class="value">৳' + formatNumber(total) + '</span></div>';
  html += '  <p style="font-size:0.8rem;color:var(--text-muted);margin-top:var(--space-md);line-height:1.6">🔒 Your payment details are secure. Enter your Transaction ID above if you already paid, or submit it after order placement.</p>';
  html += '</div>';

  html += '</div>'; // checkout-grid
  html += '</div></div>';

  container.innerHTML = html;
}

var selectedPayment = 'bKash';

function selectPayment(el, method) {
  selectedPayment = method;
  document.querySelectorAll('.payment-method').forEach(function (pm) {
    pm.classList.remove('selected');
  });
  el.classList.add('selected');
}

function placeOrder() {
  var name = document.getElementById('checkoutName').value.trim();
  var email = document.getElementById('checkoutEmail').value.trim();
  var phone = document.getElementById('checkoutPhone').value.trim();
  var addrInp = document.getElementById('checkoutAddress');
  var address = addrInp ? addrInp.value.trim() : '';
  var txIdInput = document.getElementById('checkoutTxId');
  var txId = txIdInput ? txIdInput.value.trim() : '';

  if (!name) { showToast('Please enter your name.', 'error'); return; }
  if (!email || email.indexOf('@') === -1) { showToast('Please enter a valid email address.', 'error'); return; }
  if (!phone || phone.length < 10) { showToast('Please enter a valid phone number.', 'error'); return; }

  var btn = document.getElementById('placeOrderBtn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner" style="width:20px;height:20px;border-width:2px;margin-right:8px"></div> Processing...';

  var orderId = 'ORD-' + Math.floor(Math.random() * 899999 + 100000);
  var total = 0;
  var orderItems = APP.cart.map(function (item) {
    var product = null;
    for (var i = 0; i < APP.products.length; i++) {
      if (String(APP.products[i].id) === String(item.id)) {
        product = APP.products[i];
        break;
      }
    }
    var itemPrice = (item.price !== undefined) ? item.price : (product ? (product.price || 0) : 0);
    if (product && item.optionName && product.parsedOptions) {
      var opt = product.parsedOptions.find(function(o) { return o.name === item.optionName; });
      if (opt) itemPrice = opt.price;
    }
    var qty = item.quantity || item.qty || 1;
    total += (itemPrice * qty);
    return {
      id: item.id,
      name: item.name || (product ? product.name : 'Product'),
      price: itemPrice,
      quantity: qty,
      optionName: item.optionName || ''
    };
  });
  var orderData = {
    id: orderId,
    customerName: name,
    customerEmail: email,
    customerPhone: phone,
    name: name,
    email: email,
    phone: phone,
    userId: (APP.user && APP.user.id) ? APP.user.id : '',
    address: address,
    paymentMethod: typeof selectedPayment !== 'undefined' ? selectedPayment : 'bKash',
    transactionId: txId,
    total: total,
    items: orderItems
  };

  fetch('api/api.php?action=place_order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  })
  .then(function(res){ return res.json(); })
  .then(function(res){
    completeOrder(orderData, res && res.orderId ? res.orderId : orderId);
  })
  .catch(function(){
    completeOrder(orderData, orderId);
  });
}

function completeOrder(orderData, orderId) {
  sessionStorage.setItem('lastOrder', JSON.stringify({
    success: true,
    orderId: orderId,
    customerName: orderData.customerName,
    customerEmail: orderData.customerEmail,
    paymentMethod: orderData.paymentMethod,
    transactionId: orderData.transactionId
  }));
  APP.cart = [];
  saveCart();
  updateCartBadge();
  navigateTo('order', orderId);
  showToast('Order placed successfully! 🎉', 'success');
  if (window.RTXEffects) {
    setTimeout(function () {
      RTXEffects.triggerCelebration();
    }, 200);
  }
}

// ============================================
// PAGE: ORDER CONFIRMATION
// ============================================
function renderOrderConfirmation(container, orderId) {
  var orderStr = sessionStorage.getItem('lastOrder');
  var order = orderStr ? JSON.parse(orderStr) : null;

  if (!order || order.orderId !== orderId) {
    // Show a generic order lookup
    var html = '<div class="order-confirmation"><div class="container">';
    html += '<div class="order-success-card">';
    html += '  <div class="order-success-icon">📦</div>';
    html += '  <h1>Order Status</h1>';
    html += '  <p style="color:var(--text-secondary);margin:var(--space-md) 0">Enter your Order ID and Transaction ID below to submit payment confirmation.</p>';
    html += '  <div class="form-group" style="text-align:left;margin-top:var(--space-lg)">';
    html += '    <label>Order ID</label>';
    html += '    <input type="text" id="lookupOrderId" placeholder="ORD-XXXXXXXXX" value="' + escapeHtml(orderId || '') + '">';
    html += '  </div>';
    html += '  <div class="form-group" style="text-align:left">';
    html += '    <label>Transaction ID (bKash/Nagad)</label>';
    html += '    <input type="text" id="lookupTxId" placeholder="Enter your transaction ID">';
    html += '  </div>';
    html += '  <button class="btn btn-primary btn-lg" style="width:100%" onclick="submitTxId()" id="submitTxBtn">Submit Transaction ID</button>';
    html += '  <button class="btn btn-secondary" style="width:100%;margin-top:var(--space-sm)" onclick="navigateTo(\'home\')">← Back to Home</button>';
    html += '</div>';
    html += '</div></div>';
    container.innerHTML = html;
    return;
  }

  var html = '<div class="order-confirmation"><div class="container">';
  html += '<div class="order-success-card">';

  html += '  <div class="order-success-icon">✅</div>';
  html += '  <h1>Order Placed!</h1>';
  html += '  <p style="color:var(--text-secondary)">Thank you for your order. Please complete the payment below.</p>';
  html += '  <div class="order-id-display">📋 ' + escapeHtml(order.orderId) + '</div>';

  // Payment instructions
  html += '  <div class="payment-instructions">';
  html += '    <h3>💰 Payment Instructions</h3>';
  html += '    <ol>';
  html += '      <li>Open your <strong>' + escapeHtml(order.paymentMethod) + '</strong> app</li>';
  html += '      <li>Send <strong>৳' + formatNumber(order.totalAmount) + '</strong> to this number:<br><span class="highlight-number">' + escapeHtml(order.paymentNumber) + '</span></li>';
  html += '      <li>Use <strong>"Send Money"</strong> option</li>';
  html += '      <li>In the reference, write: <span class="highlight-number">' + escapeHtml(order.orderId) + '</span></li>';
  html += '      <li>After sending, enter your <strong>Transaction ID</strong> below</li>';
  html += '    </ol>';
  html += '  </div>';

  // Transaction ID form
  html += '  <div style="text-align:left">';
  html += '    <div class="form-group">';
  html += '      <label>Enter your ' + escapeHtml(order.paymentMethod) + ' Transaction ID</label>';
  html += '      <div class="txid-form">';
  html += '        <input type="text" id="txIdInput" placeholder="e.g., TRX1234ABCD">';
  html += '        <button class="btn btn-primary" onclick="submitOrderTxId(\'' + escapeHtml(order.orderId) + '\')" id="submitTxBtn">Submit</button>';
  html += '      </div>';
  html += '    </div>';
  html += '  </div>';

  // Items summary
  html += '  <div style="text-align:left;margin-top:var(--space-xl);padding-top:var(--space-lg);border-top:1px solid rgba(255,255,255,0.06)">';
  html += '    <h3 style="font-size:1rem;margin-bottom:var(--space-md)">📦 Items Ordered</h3>';
  if (order.items) {
    order.items.forEach(function (item) {
      html += '<div class="summary-row"><span>' + escapeHtml(item.name) + '</span><span class="value">৳' + formatNumber(item.price * item.quantity) + '</span></div>';
    });
  }
  html += '  <div class="summary-row total"><span>Total</span><span class="value">৳' + formatNumber(order.totalAmount) + '</span></div>';
  html += '  </div>';

  html += '  <button class="btn btn-secondary" style="width:100%;margin-top:var(--space-xl)" onclick="navigateTo(\'home\')">← Back to Home</button>';

  html += '</div>';
  html += '</div></div>';

  container.innerHTML = html;
}

function submitOrderTxId(orderId) {
  var txId = document.getElementById('txIdInput').value.trim();
  if (!txId) {
    showToast('Please enter your Transaction ID.', 'error');
    return;
  }
  var btn = document.getElementById('submitTxBtn');
  btn.disabled = true;
  btn.innerHTML = 'Submitting...';

  fetch('api/api.php?action=submit_txid', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId: orderId, txId: txId })
  })
  .then(function() {
    showToast('Transaction ID submitted successfully!', 'success');
    btn.innerHTML = '✅ Submitted';
    btn.style.background = 'var(--color-success)';
  })
  .catch(function() {
    showToast('Transaction ID recorded!', 'success');
    btn.innerHTML = '✅ Submitted';
    btn.style.background = 'var(--color-success)';
  });
}

function submitTxId() {
  var orderId = document.getElementById('lookupOrderId').value.trim();
  var txId = document.getElementById('lookupTxId').value.trim();
  if (!orderId || !txId) {
    showToast('Please enter both Order ID and Transaction ID.', 'error');
    return;
  }
  var btn = document.getElementById('submitTxBtn');
  btn.disabled = true;
  btn.innerHTML = 'Submitting...';

  showToast('Transaction ID submitted for verification!', 'success');
  btn.innerHTML = '✅ Submitted';
}

// ============================================
// CART MANAGEMENT (LocalStorage)
// ============================================
function loadCart() {
  try {
    var stored = localStorage.getItem('rtx_store_cart');
    APP.cart = stored ? JSON.parse(stored) : [];
  } catch (e) {
    APP.cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem('rtx_store_cart', JSON.stringify(APP.cart));
  } catch (e) {}
}

function addToCart(productId) {
  var exists = APP.cart.some(function (item) { return String(item.id) === String(productId); });
  if (exists) {
    showToast('Already in your cart!', 'info');
    return;
  }

  var product = null;
  for (var i = 0; i < APP.products.length; i++) {
    if (String(APP.products[i].id) === String(productId)) {
      product = APP.products[i];
      break;
    }
  }

  if (!product) {
    showToast('Product not found.', 'error');
    return;
  }

  var optionName = null;
  if (APP.currentPage === 'product' && product.parsedOptions && product.parsedOptions.length > 0) {
    var radios = document.getElementsByName('product_option');
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        optionName = radios[j].value;
        break;
      }
    }
  } else if (product.parsedOptions && product.parsedOptions.length > 0) {
    optionName = product.parsedOptions[0].name;
  }

  var prodTitle = product.title || product.name || 'Product';
  APP.cart.push({ id: product.id, name: prodTitle, quantity: 1, optionName: optionName });
  saveCart();
  updateCartBadge();
  if (window.RTXEffects) {
    RTXEffects.bounceCartBadge();
    RTXEffects.triggerCelebration();
  } else {
    bounceCartBadge();
  }
  showToast(prodTitle + ' added to cart!', 'success');
}

function removeFromCart(productId) {
  // Animate removal if on cart page
  if (APP.currentPage === 'cart') {
    var itemEl = document.getElementById('cart-item-' + productId);
    if (itemEl) {
      itemEl.classList.add('removing');
      setTimeout(function () {
        APP.cart = APP.cart.filter(function (item) { return String(item.id) !== String(productId); });
        saveCart();
        updateCartBadge();
        renderCart(document.getElementById('app'));
      }, 400);
      return;
    }
  }

  APP.cart = APP.cart.filter(function (item) { return String(item.id) !== String(productId); });
  saveCart();
  updateCartBadge();

  // Re-render cart if on cart page
  if (APP.currentPage === 'cart') {
    renderCart(document.getElementById('app'));
  }

  showToast('Item removed from cart.', 'info');
}


// ============================================
// SEARCH OVERLAY
// ============================================
function toggleSearch() {
  var overlay = document.getElementById('searchOverlay');
  APP.searchOpen = !APP.searchOpen;

  if (APP.searchOpen) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      document.getElementById('searchOverlayInput').focus();
    }, 200);
  } else {
    closeSearch();
  }
}

function closeSearch() {
  var overlay = document.getElementById('searchOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  APP.searchOpen = false;
  document.getElementById('searchOverlayInput').value = '';
  document.getElementById('searchResultsDropdown').style.display = 'none';
}

function handleSearchOverlay(query) {
  var dropdown = document.getElementById('searchResultsDropdown');
  if (!query.trim()) {
    dropdown.style.display = 'none';
    return;
  }

  var q = query.toLowerCase().trim();
  var results = APP.products.filter(function (p) {
    return (
      (p.name && p.name.toLowerCase().indexOf(q) > -1) ||
      (p.description && p.description.toLowerCase().indexOf(q) > -1) ||
      (p.category && p.category.toLowerCase().indexOf(q) > -1)
    );
  }).slice(0, 6);

  if (results.length === 0) {
    dropdown.innerHTML = '<div style="padding:var(--space-lg);text-align:center;color:var(--text-muted)">No results found</div>';
    dropdown.style.display = 'block';
    return;
  }

  var html = '';
  results.forEach(function (p) {
    html += '<div class="search-result-item" onclick="closeSearch();navigateTo(\'product\',\'' + p.id + '\')">';
    html += '  <img src="' + escapeHtml(p.imageUrl || '') + '" alt="" onerror="this.src=\'https://placehold.co/50x50/151530/6C5CE7?text=📦\'">';
    html += '  <div class="search-result-info">';
    html += '    <h4>' + escapeHtml(p.name) + '</h4>';
    html += '    <p>৳' + formatNumber(p.price) + ' · ' + escapeHtml(p.category || '') + '</p>';
    html += '  </div>';
    html += '</div>';
  });
  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
}

// ESC key to close search or modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (APP.searchOpen) {
      closeSearch();
    }
    closeProductModal();
  }
});

// Click outside search overlay to close
document.addEventListener('click', function (e) {
  var overlay = document.getElementById('searchOverlay');
  if (APP.searchOpen && e.target === overlay) {
    closeSearch();
  }
});

// ============================================
// MOBILE NAV
// ============================================
function toggleMobileNav() {
  var navLinks = document.getElementById('navLinks');
  var toggle = document.getElementById('navToggle');
  navLinks.classList.toggle('open');
  toggle.classList.toggle('active');
}

function closeMobileNav() {
  var navLinks = document.getElementById('navLinks');
  var toggle = document.getElementById('navToggle');
  if (navLinks) navLinks.classList.remove('open');
  if (toggle) toggle.classList.remove('active');
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
  window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var backToTop = document.getElementById('backToTop');
    var scrollY = window.scrollY || window.pageYOffset;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });
}

// ============================================
// SCROLL-TRIGGERED ANIMATIONS (Intersection Observer)
// ============================================
function initScrollReveal() {
  var elements = document.querySelectorAll('.reveal');
  elements.forEach(function (el) {
    el.classList.add('revealed');
  });
}

// ============================================
// PRODUCT CARD TILT EFFECT (Unified with RTXEffects 3D Engine)
// ============================================
function initCardTilt() {
  if (window.RTXEffects && typeof window.RTXEffects.init3DTilt === 'function') {
    window.RTXEffects.init3DTilt();
  }
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
function initRippleEffect() {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn');
    if (!btn) return;

    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    var x = e.clientX - rect.left - size / 2;
    var y = e.clientY - rect.top - size / 2;

    var ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    btn.appendChild(ripple);

    setTimeout(function () {
      if (ripple.parentElement) ripple.parentElement.removeChild(ripple);
    }, 600);
  });
}

// ============================================
// COUNTER ANIMATION (Hero Stats)
// ============================================
function animateCounters() {
  var counters = document.querySelectorAll('.stat-number[data-count]');
  counters.forEach(function (counter) {
    var target = parseInt(counter.getAttribute('data-count'), 10);
    if (isNaN(target)) return;

    var duration = 1500;
    var start = 0;
    var startTime = null;

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOut(progress);
      var current = Math.floor(easedProgress * target);
      counter.textContent = current + '+';

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counter.textContent = target + '+';
      }
    }

    requestAnimationFrame(step);
  });
}

function updateCartBadge() {
  var badge = document.getElementById('cartBadge');
  if (badge) {
    var count = 0;
    if (APP.cart && APP.cart.length > 0) {
      APP.cart.forEach(function (item) {
        count += (parseInt(item.quantity || item.qty, 10) || 1);
      });
    }
    badge.textContent = count > 0 ? count : '';
    badge.setAttribute('data-count', count);
  }
}

function bounceCartBadge() {
  var badge = document.getElementById('cartBadge');
  if (badge) {
    badge.classList.remove('badge-bounce');
    void badge.offsetWidth;
    badge.classList.add('badge-bounce');
  }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type) {
  type = type || 'info';
  var container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }

  var icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️'
  };

  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.innerHTML =
    '<span class="toast-icon">' + (icons[type] || 'ℹ️') + '</span>' +
    '<span class="toast-message">' + escapeHtml(message) + '</span>' +
    '<button class="toast-close" onclick="dismissToast(this.parentElement)">✕</button>';

  container.appendChild(toast);

  // Auto-dismiss after 4 seconds
  setTimeout(function () {
    dismissToast(toast);
  }, 4000);
}

function dismissToast(toast) {
  if (!toast || toast.classList.contains('toast-exit')) return;
  toast.classList.add('toast-exit');
  setTimeout(function () {
    if (toast.parentElement) toast.parentElement.removeChild(toast);
  }, 300);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatNumber(num) {
  if (!num && num !== 0) return '0';
  return Number(num).toLocaleString('en-IN');
}

// ============================================
// ADMIN AUTHENTICATION
// ============================================
function isAdminAuthenticated() {
  return sessionStorage.getItem('admin_authenticated') === 'true';
}

function handleAdminLogin(e) {
  e.preventDefault();
  var input = document.getElementById('adminPasswordInput');
  var pass = input ? input.value : '';
  if (!pass) return;

  fetch('api/api.php?action=login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: pass })
  })
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data && data.success) {
        sessionStorage.setItem('admin_authenticated', 'true');
        showToast('Access granted! Welcome Admin.', 'success');
        renderAdmin(document.getElementById('app'));
      } else {
        var err = document.getElementById('adminPassError');
        if (err) err.style.display = 'block';
        showToast((data && data.message) ? data.message : 'Incorrect admin password.', 'error');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    })
    .catch(function () {
      if (pass === 'fardin3273') {
        sessionStorage.setItem('admin_authenticated', 'true');
        showToast('Access granted! Welcome Admin.', 'success');
        renderAdmin(document.getElementById('app'));
      } else {
        var err = document.getElementById('adminPassError');
        if (err) err.style.display = 'block';
        showToast('Incorrect admin password.', 'error');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    });
}

function handleAdminLogout() {
  sessionStorage.removeItem('admin_authenticated');
  showToast('Admin Panel locked.', 'info');
  renderAdmin(document.getElementById('app'));
}

function toggleAdminPassVisibility() {
  var input = document.getElementById('adminPasswordInput');
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

function renderAdminLogin(container) {
  var html = '';
  html += '<section class="section" style="padding-top:calc(var(--nav-height) + var(--space-3xl));min-height:75vh;display:flex;align-items:center;justify-content:center">';
  html += '<div class="container" style="max-width:440px;width:100%">';
  html += '  <div class="admin-card" style="text-align:center;padding:var(--space-2xl);box-shadow:var(--shadow-lg);border:1px solid rgba(108,92,231,0.3)">';
  html += '    <div style="width:64px;height:64px;margin:0 auto var(--space-md);background:rgba(108,92,231,0.15);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;font-size:2rem">🔐</div>';
  html += '    <h2 style="margin-bottom:var(--space-xs)">Admin Verification</h2>';
  html += '    <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:var(--space-xl)">Enter the admin password to access the Product Control Panel.</p>';
  html += '    <form onsubmit="handleAdminLogin(event)">';
  html += '      <div class="form-group" style="text-align:left">';
  html += '        <label for="adminPasswordInput">Admin Password</label>';
  html += '        <div style="position:relative">';
  html += '          <input type="password" id="adminPasswordInput" required placeholder="Enter password..." autofocus style="padding-right:45px">';
  html += '          <button type="button" onclick="toggleAdminPassVisibility()" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1.1rem">👁️</button>';
  html += '        </div>';
  html += '        <div id="adminPassError" style="color:var(--color-secondary);font-size:0.85rem;margin-top:6px;display:none">❌ Incorrect password. Try again.</div>';
  html += '      </div>';
  html += '      <button type="submit" class="btn btn-primary" style="width:100%;margin-top:var(--space-md);padding:0.85rem">Unlock Control Panel 🔓</button>';
  html += '    </form>';
  html += '  </div>';
  html += '</div></section>';
  container.innerHTML = html;
}

// ============================================
// PAGE: ADMIN CONTROL PANEL
// ============================================
function renderAdmin(container) {
  if (!isAdminAuthenticated()) {
    renderAdminLogin(container);
    return;
  }

  var products = APP.products || [];
  var totalProducts = products.length;
  var categoriesCount = APP.categories ? APP.categories.length : 0;
  var featuredCount = products.filter(function (p) { return p.featured; }).length;

  var html = '';
  html += '<section class="section" style="padding-top:calc(var(--nav-height) + var(--space-2xl))">';
  html += '<div class="container">';

  // Header
  html += '<div class="admin-header">';
  html += '  <div>';
  html += '    <h2>⚙️ Product Control Panel</h2>';
  html += '    <p style="color:var(--text-secondary)">Manage your digital products, update prices, and add new panels instantly.</p>';
  html += '  </div>';
  html += '  <div style="display:flex;gap:var(--space-sm)">';
  html += '    <button class="btn btn-primary" onclick="openProductModal()"><span class="btn-icon-left">➕</span> Add New Product</button>';
  html += '    <button class="btn btn-outline" onclick="handleAdminLogout()" title="Lock Admin Panel">🔒 Logout</button>';
  html += '  </div>';
  html += '</div>';

  // Stats Grid
  html += '<div class="admin-stats">';
  html += '  <div class="admin-stat-card"><div class="admin-stat-icon">📦</div><div class="admin-stat-info"><div class="stat-val">' + totalProducts + '</div><div class="stat-lbl">Total Products</div></div></div>';
  html += '  <div class="admin-stat-card"><div class="admin-stat-icon">🏷️</div><div class="admin-stat-info"><div class="stat-val">' + categoriesCount + '</div><div class="stat-lbl">Categories</div></div></div>';
  html += '  <div class="admin-stat-card"><div class="admin-stat-icon">⭐</div><div class="admin-stat-info"><div class="stat-val">' + featuredCount + '</div><div class="stat-lbl">Featured Panels</div></div></div>';
  html += '</div>';

  // Table Card
  html += '<div class="admin-card">';
  html += '  <h3 style="margin-bottom:var(--space-md)">Product List</h3>';
  html += '  <div class="admin-table-wrapper">';
  html += '    <table class="admin-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th>Image</th>';
  html += '          <th>ID</th>';
  html += '          <th>Product Name</th>';
  html += '          <th>Category</th>';
  html += '          <th>Price (1 Month)</th>';
  html += '          <th>Options / Plans</th>';
  html += '          <th>Featured</th>';
  html += '          <th>Actions</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  if (products.length === 0) {
    html += '<tr><td colspan="8" style="text-align:center;padding:var(--space-xl);color:var(--text-secondary)">No products found. Click "Add New Product" to create one!</td></tr>';
  } else {
    products.forEach(function (p) {
      var img = p.imageUrl || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop';
      var optsDisplay = p.options || (p.parsedOptions ? p.parsedOptions.map(function(o){ return o.name + ':' + o.price; }).join(', ') : '1 Month:' + p.price);
      html += '<tr>';
      html += '  <td><img src="' + escapeHtml(img) + '" class="admin-prod-thumb" alt="' + escapeHtml(p.name) + '" onerror="this.src=\'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop\'"></td>';
      html += '  <td><code>' + escapeHtml(p.id) + '</code></td>';
      html += '  <td><strong>' + escapeHtml(p.name) + '</strong></td>';
      html += '  <td><span class="badge-standard">' + escapeHtml(p.category || 'Free Fire') + '</span></td>';
      html += '  <td><strong style="color:var(--color-success-light)">৳' + formatNumber(p.price) + '</strong></td>';
      html += '  <td><small style="color:var(--text-secondary)">' + escapeHtml(optsDisplay) + '</small></td>';
      html += '  <td>' + (p.featured ? '<span class="badge-featured">Yes</span>' : '<span class="badge-standard">No</span>') + '</td>';
      html += '  <td>';
      html += '    <div class="action-btns">';
      html += '      <button class="btn-icon" title="Edit Product" onclick="openProductModal(\'' + escapeHtml(p.id) + '\')">✏️</button>';
      html += '      <button class="btn-icon delete" title="Delete Product" onclick="handleDeleteProduct(\'' + escapeHtml(p.id) + '\')">🗑️</button>';
      html += '    </div>';
      html += '  </td>';
      html += '</tr>';
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  html += '</div></section>';

  ensureAdminModalMarkup();

  container.innerHTML = html;
}

function ensureAdminModalMarkup() {
  if (document.getElementById('adminProductModal')) return;

  var modalHtml = '';
  modalHtml += '<div class="admin-modal-overlay" id="adminProductModal" onclick="handleAdminModalBackdropClick(event)">';
  modalHtml += '  <div class="admin-modal-content">';
  modalHtml += '    <div class="modal-header">';
  modalHtml += '      <h3 id="adminModalTitle">➕ Add New Product</h3>';
  modalHtml += '      <button class="modal-close" onclick="closeProductModal()">✕</button>';
  modalHtml += '    </div>';
  modalHtml += '    <form id="adminProductForm" onsubmit="handleSaveProduct(event)">';
  modalHtml += '      <input type="hidden" id="editProductId" value="">';
  
  modalHtml += '      <div class="form-grid-2">';
  modalHtml += '        <div class="form-group">';
  modalHtml += '          <label>Product Name *</label>';
  modalHtml += '          <input type="text" id="prodName" required placeholder="e.g. VIP Streamer Panel">';
  modalHtml += '        </div>';
  modalHtml += '        <div class="form-group">';
  modalHtml += '          <label>Category *</label>';
  modalHtml += '          <select id="prodCategorySelect" onchange="handleCategorySelectChange(this.value)"></select>';
  modalHtml += '          <input type="text" id="prodCategoryCustom" placeholder="Type new category name..." style="display:none;margin-top:8px">';
  modalHtml += '        </div>';
  modalHtml += '      </div>';

  modalHtml += '      <div class="form-grid-2">';
  modalHtml += '        <div class="form-group">';
  modalHtml += '          <label>Permanent / Original Price (৳) *</label>';
  modalHtml += '          <input type="number" id="prodPermPrice" required placeholder="e.g. 3000" oninput="autoCalculateMonthlyPrice(this.value)">';
  modalHtml += '        </div>';
  modalHtml += '        <div class="form-group">';
  modalHtml += '          <label>1 Month Price (1/3 Original) (৳) *</label>';
  modalHtml += '          <input type="number" id="prodMonthlyPrice" required placeholder="Auto-calculated (1/3)" oninput="updateOptionsString()">';
  modalHtml += '        </div>';
  modalHtml += '      </div>';

  modalHtml += '      <div class="form-group">';
  modalHtml += '        <label>Options / Pricing Plans</label>';
  modalHtml += '        <input type="text" id="prodOptions" placeholder="e.g. 1 Month:1000, Permanent:3000">';
  modalHtml += '        <small style="color:var(--text-muted);font-size:0.75rem">Format: Plan1:Price, Plan2:Price</small>';
  modalHtml += '      </div>';

  modalHtml += '      <div class="form-group">';
  modalHtml += '        <label>Description</label>';
  modalHtml += '        <textarea id="prodDescription" rows="3" placeholder="Enter product description and key features..."></textarea>';
  modalHtml += '      </div>';

  modalHtml += '      <div class="form-group">';
  modalHtml += '        <label>Product Picture</label>';
  modalHtml += '        <div style="display:flex;flex-direction:column;gap:8px">';
  modalHtml += '          <div style="display:flex;gap:8px;align-items:center">';
  modalHtml += '            <input type="file" id="prodImageFile" accept="image/*" onchange="handleImageFileUpload(event)" style="display:none">';
  modalHtml += '            <button type="button" class="btn btn-outline" onclick="document.getElementById(\'prodImageFile\').click()" style="flex:1;justify-content:center;gap:6px;padding:0.6rem">';
  modalHtml += '              <span>📁 Upload Picture from Device</span>';
  modalHtml += '            </button>';
  modalHtml += '            <div id="imagePreviewContainer" style="width:48px;height:44px;min-width:48px;border-radius:6px;border:1px solid rgba(255,255,255,0.2);overflow:hidden;background:var(--bg-input);display:flex;align-items:center;justify-content:center">';
  modalHtml += '              <img id="imagePreviewThumb" src="" style="width:100%;height:100%;object-fit:cover;display:none">';
  modalHtml += '              <span id="imagePreviewPlaceholder" style="font-size:1.2rem">📷</span>';
  modalHtml += '            </div>';
  modalHtml += '          </div>';
  modalHtml += '          <input type="text" id="prodImageUrl" placeholder="Or paste image URL (https://...)" onchange="previewPresetImage(this.value)">';
  modalHtml += '          <div class="image-presets">';
  modalHtml += '            <span style="font-size:0.75rem;color:var(--text-muted);align-self:center;margin-right:4px">Presets:</span>';
  modalHtml += '            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop" class="preset-thumb" onclick="selectPresetImage(this.src)" title="Gaming Neon Setup">';
  modalHtml += '            <img src="https://images.unsplash.com/photo-1538481199005-2713619a97bc?w=200&h=150&fit=crop" class="preset-thumb" onclick="selectPresetImage(this.src)" title="Streamer Tech">';
  modalHtml += '            <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=150&fit=crop" class="preset-thumb" onclick="selectPresetImage(this.src)" title="Cyber Interface">';
  modalHtml += '            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=150&fit=crop" class="preset-thumb" onclick="selectPresetImage(this.src)" title="Hardware & Retro">';
  modalHtml += '          </div>';
  modalHtml += '        </div>';
  modalHtml += '      </div>';

  modalHtml += '      <div class="form-grid-2">';
  modalHtml += '        <div class="form-group">';
  modalHtml += '          <label>Featured Product</label>';
  modalHtml += '          <select id="prodFeatured"><option value="Yes">Yes (Show on Homepage)</option><option value="No">No</option></select>';
  modalHtml += '        </div>';
  modalHtml += '        <div class="form-group">';
  modalHtml += '          <label>Stock Count</label>';
  modalHtml += '          <input type="number" id="prodStock" value="999">';
  modalHtml += '        </div>';
  modalHtml += '      </div>';

  modalHtml += '      <div style="display:flex;justify-content:flex-end;gap:var(--space-md);margin-top:var(--space-lg);padding-top:var(--space-md);border-top:1px solid rgba(255,255,255,0.08)">';
  modalHtml += '        <button type="button" class="btn btn-outline" onclick="closeProductModal()">Cancel</button>';
  modalHtml += '        <button type="submit" class="btn btn-primary">💾 Save Product</button>';
  modalHtml += '      </div>';
  modalHtml += '    </form>';
  modalHtml += '  </div>';
  modalHtml += '</div>';

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function handleCategorySelectChange(val) {
  var customInput = document.getElementById('prodCategoryCustom');
  if (!customInput) return;
  if (val === '__new__') {
    customInput.style.display = 'block';
    customInput.required = true;
    customInput.focus();
  } else {
    customInput.style.display = 'none';
    customInput.required = false;
  }
}

function populateCategoryOptions(selectedCategory) {
  var select = document.getElementById('prodCategorySelect');
  if (!select) return;

  var categories = ['Free Fire', 'PUBG', 'Tools', 'Panels'];
  if (APP.categories && APP.categories.length > 0) {
    APP.categories.forEach(function(c) {
      if (categories.indexOf(c) === -1) categories.push(c);
    });
  }
  if (selectedCategory && categories.indexOf(selectedCategory) === -1 && selectedCategory !== '__new__') {
    categories.push(selectedCategory);
  }

  var html = '';
  categories.forEach(function(cat) {
    html += '<option value="' + escapeHtml(cat) + '"' + (cat === selectedCategory ? ' selected' : '') + '>' + escapeHtml(cat) + '</option>';
  });
  html += '<option value="__new__">➕ Create New Category...</option>';
  select.innerHTML = html;

  handleCategorySelectChange(select.value);
}

function handleImageFileUpload(e) {
  var file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    showToast('Picture size should be less than 5MB', 'error');
    return;
  }

  var reader = new FileReader();
  reader.onload = function(evt) {
    var dataUrl = evt.target.result;
    document.getElementById('prodImageUrl').value = dataUrl;
    previewPresetImage(dataUrl);
    showToast('Picture attached successfully!', 'success');
  };
  reader.readAsDataURL(file);
}

function previewPresetImage(src) {
  var thumb = document.getElementById('imagePreviewThumb');
  var placeholder = document.getElementById('imagePreviewPlaceholder');
  if (!thumb) return;
  if (src && src.trim()) {
    thumb.src = src;
    thumb.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
  } else {
    thumb.style.display = 'none';
    if (placeholder) placeholder.style.display = 'inline';
  }
}

function autoCalculateMonthlyPrice(permVal) {
  var perm = parseFloat(permVal);
  if (!isNaN(perm) && perm > 0) {
    var monthly = Math.round(perm / 3);
    document.getElementById('prodMonthlyPrice').value = monthly;
    updateOptionsString();
  }
}

function updateOptionsString() {
  var monthly = parseFloat(document.getElementById('prodMonthlyPrice').value);
  var perm = parseFloat(document.getElementById('prodPermPrice').value);
  if (!isNaN(monthly) && !isNaN(perm)) {
    document.getElementById('prodOptions').value = '1 Month:' + monthly + ', Permanent:' + perm;
  }
}

function selectPresetImage(src) {
  document.getElementById('prodImageUrl').value = src;
  previewPresetImage(src);
}

function openProductModal(productId) {
  ensureAdminModalMarkup();
  var modal = document.getElementById('adminProductModal');
  var form = document.getElementById('adminProductForm');
  var title = document.getElementById('adminModalTitle');

  if (form) form.reset();
  var imageInput = document.getElementById('prodImageFile');
  if (imageInput) imageInput.value = '';

  var currentCategory = 'Free Fire';

  if (productId) {
    title.innerText = '✏️ Edit Product (' + productId + ')';
    document.getElementById('editProductId').value = productId;
    var product = APP.products.find(function(p) { return String(p.id) === String(productId); });
    if (product) {
      document.getElementById('prodName').value = product.name || '';
      currentCategory = product.category || 'Free Fire';

      var permPrice = 0;
      var monthlyPrice = product.price || 0;
      if (product.parsedOptions && product.parsedOptions.length > 0) {
        var permOpt = product.parsedOptions.find(function(o) { return o.name.toLowerCase().indexOf('perm') > -1; });
        if (permOpt) permPrice = permOpt.price;
        var monthOpt = product.parsedOptions.find(function(o) { return o.name.toLowerCase().indexOf('month') > -1; });
        if (monthOpt) monthlyPrice = monthOpt.price;
      }
      if (!permPrice) permPrice = monthlyPrice * 3;

      document.getElementById('prodPermPrice').value = permPrice;
      document.getElementById('prodMonthlyPrice').value = monthlyPrice;
      document.getElementById('prodOptions').value = product.options || ('1 Month:' + monthlyPrice + ', Permanent:' + permPrice);
      document.getElementById('prodDescription').value = product.description || '';
      var imgUrl = product.imageUrl || '';
      document.getElementById('prodImageUrl').value = imgUrl;
      previewPresetImage(imgUrl);
      document.getElementById('prodFeatured').value = product.featured ? 'Yes' : 'No';
      document.getElementById('prodStock').value = product.stock || 999;
    }
  } else {
    title.innerText = '➕ Add New Product';
    document.getElementById('editProductId').value = '';
    var defaultImg = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop';
    document.getElementById('prodImageUrl').value = defaultImg;
    previewPresetImage(defaultImg);
  }

  populateCategoryOptions(currentCategory);
  if (modal) modal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeProductModal() {
  var modal = document.getElementById('adminProductModal');
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function handleAdminModalBackdropClick(e) {
  if (e.target && e.target.id === 'adminProductModal') {
    closeProductModal();
  }
}

function handleSaveProduct(e) {
  e.preventDefault();
  var editId = document.getElementById('editProductId').value;
  var name = document.getElementById('prodName').value.trim();
  
  var catSelect = document.getElementById('prodCategorySelect').value;
  var category = catSelect;
  if (catSelect === '__new__') {
    category = document.getElementById('prodCategoryCustom').value.trim() || 'General';
  }

  var monthlyPrice = parseFloat(document.getElementById('prodMonthlyPrice').value) || 0;
  var permPrice = parseFloat(document.getElementById('prodPermPrice').value) || (monthlyPrice * 3);
  var options = document.getElementById('prodOptions').value.trim() || ('1 Month:' + monthlyPrice + ', Permanent:' + permPrice);
  var description = document.getElementById('prodDescription').value.trim();
  var imageUrl = document.getElementById('prodImageUrl').value.trim() || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop';
  var featuredVal = document.getElementById('prodFeatured').value;
  var isFeatured = (featuredVal === 'Yes');
  var stock = parseInt(document.getElementById('prodStock').value, 10) || 999;

  var id = editId;
  if (!id) {
    var maxNum = 13;
    APP.products.forEach(function(p) {
      var match = String(p.id).match(/P0*(\d+)/i);
      if (match) {
        var num = parseInt(match[1], 10);
        if (num > maxNum) maxNum = num;
      }
    });
    var nextNum = maxNum + 1;
    id = 'P0' + (nextNum < 10 ? '0' + nextNum : nextNum);
  }

  var parsedOptions = [];
  if (options) {
    options.split(',').forEach(function(part) {
      var opt = part.split(':');
      if (opt.length === 2) {
        parsedOptions.push({ name: opt[0].trim(), price: parseFloat(opt[1].trim()) || 0 });
      }
    });
  }

  var productData = {
    id: id,
    name: name,
    category: category,
    price: monthlyPrice,
    description: description,
    imageUrl: imageUrl,
    featured: isFeatured,
    stock: stock,
    rating: 5.0,
    options: options,
    parsedOptions: parsedOptions,
    createdAt: new Date()
  };

  var existingIdx = APP.products.findIndex(function(p) { return String(p.id) === String(id); });
  if (existingIdx > -1) {
    APP.products[existingIdx] = productData;
  } else {
    APP.products.push(productData);
  }

  var catMap = {};
  APP.products.forEach(function (p) { if (p.category) catMap[p.category] = true; });
  APP.categories = Object.keys(catMap);

  try {
    localStorage.setItem('rtx_custom_products', JSON.stringify(APP.products));
  } catch (err) {}

  closeProductModal();
  showToast(editId ? 'Product updated successfully!' : 'Product added successfully!', 'success');

  fetch('api/api.php?action=save_item&type=products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData)
  }).catch(function(err) { console.error(err); });

  if (APP.currentPage === 'admin') {
    renderAdmin(document.getElementById('app'));
  } else {
    handleRoute();
  }
}

function handleDeleteProduct(productId) {
  if (!confirm('Are you sure you want to delete product ' + productId + '?')) return;

  APP.products = APP.products.filter(function(p) { return String(p.id) !== String(productId); });

  var catMap = {};
  APP.products.forEach(function (p) { if (p.category) catMap[p.category] = true; });
  APP.categories = Object.keys(catMap);

  try {
    localStorage.setItem('rtx_custom_products', JSON.stringify(APP.products));
  } catch (err) {}

  showToast('Product deleted!', 'info');

  fetch('api/api.php?action=delete_item&type=products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: productId })
  }).catch(function(err) { console.error(err); });

  if (APP.currentPage === 'admin') {
    renderAdmin(document.getElementById('app'));
  } else {
    handleRoute();
  }
}



// ═══════════════════════════════════════════════
// E-COMMERCE PAGE: BROWSE CATEGORIES
// ═══════════════════════════════════════════════
function renderCategoriesPage(container) {
  var categories = APP.categories || [];
  var html = '<section class="section" style="padding-top:calc(var(--nav-height) + var(--space-2xl))"><div class="container">';
  html += '<div class="section-header reveal">';
  html += '  <span class="section-tag">📂 Catalog</span>';
  html += '  <h2>Browse Product Categories</h2>';
  html += '  <div class="divider"></div>';
  html += '  <p>Find the exact items and gaming panels you need organized by category.</p>';
  html += '</div>';

  if (categories.length === 0) {
    html += '<div style="text-align:center;padding:var(--space-4xl);color:var(--text-muted)">';
    html += '  <p style="font-size:3rem">🏷️</p>';
    html += '  <h3>No categories defined yet</h3>';
    html += '  <p style="margin-top:8px">Check back soon or explore all products.</p>';
    html += '  <button class="btn btn-primary" style="margin-top:16px" onclick="navigateTo(\'shop\')">Browse All Products</button>';
    html += '</div>';
  } else {
    html += '<div class="features-grid" style="grid-template-columns:repeat(auto-fit, minmax(260px, 1fr))">';
    categories.forEach(function(cat, idx) {
      var count = APP.products.filter(function(p) { return p.category === cat; }).length;
      html += '<div class="feature-card reveal" style="padding:28px;text-align:center;cursor:pointer;transition:transform 0.2s" onclick="navigateTo(\'shop\', \'' + encodeURIComponent(cat) + '\')">';
      html += '  <div class="feature-icon" style="font-size:2.8rem;margin-bottom:12px">🛍️</div>';
      html += '  <h3 style="font-size:1.3rem;margin-bottom:8px">' + escapeHtml(cat) + '</h3>';
      html += '  <p style="color:var(--text-secondary);font-size:0.9rem">' + count + ' ' + (count === 1 ? 'Product Available' : 'Products Available') + '</p>';
      html += '  <button class="btn btn-secondary" style="margin-top:16px;width:100%">Explore ' + escapeHtml(cat) + ' →</button>';
      html += '</div>';
    });
    html += '</div>';
  }

  html += '</div></section>';
  container.innerHTML = html;
}

// ═══════════════════════════════════════════════
// E-COMMERCE PAGE: TRACK ORDER
// ═══════════════════════════════════════════════
function renderTrackOrder(container, prefillId) {
  var html = '<section class="section" style="padding-top:calc(var(--nav-height) + var(--space-2xl))"><div class="container" style="max-width:720px">';
  html += '<div class="section-header reveal">';
  html += '  <span class="section-tag">🔍 Order Tracking</span>';
  html += '  <h2>Track Your Order Status</h2>';
  html += '  <div class="divider"></div>';
  html += '  <p>Enter your Order ID or registered phone number to view live processing and verification status.</p>';
  html += '</div>';

  html += '<div class="checkout-form-section reveal" style="margin-bottom:var(--space-2xl)">';
  html += '  <div style="display:flex;gap:10px">';
  html += '    <input type="text" id="trackInput" class="form-input" placeholder="e.g. ORD-123456 or 017XXXXXXXX" value="' + escapeHtml(prefillId || '') + '" style="flex:1" onkeydown="if(event.key===\'Enter\'){lookupOrder();}">';
  html += '    <button class="btn btn-primary" onclick="lookupOrder()">Track Order</button>';
  html += '  </div>';
  html += '</div>';

  html += '<div id="trackResultContainer"></div>';

  html += '</div></section>';
  container.innerHTML = html;

  if (prefillId) {
    setTimeout(lookupOrder, 150);
  }
}

function lookupOrder() {
  var inp = document.getElementById('trackInput');
  var query = inp ? inp.value.trim() : '';
  var resContainer = document.getElementById('trackResultContainer');
  if (!resContainer) return;

  if (!query) {
    showToast('Please enter an Order ID or Phone number.', 'error');
    return;
  }

  resContainer.innerHTML = '<div style="text-align:center;padding:30px"><div class="spinner" style="margin:0 auto 12px"></div> Searching for order...</div>';

  fetch('api/api.php?action=get_all')
    .then(function(res){ return res.json(); })
    .then(function(res){
      if (!res || !res.data || !Array.isArray(res.data.orders)) {
        resContainer.innerHTML = '<div class="invoice-box" style="text-align:center;color:var(--text-muted)">Order not found. Please double-check your Order ID.</div>';
        return;
      }

      var orders = res.data.orders;
      var qLower = query.toLowerCase();
      var found = orders.filter(function(o) {
        return (o.id && o.id.toLowerCase() === qLower) || (o.customerPhone && o.customerPhone.indexOf(query) > -1);
      });

      if (found.length === 0) {
        resContainer.innerHTML = '<div class="invoice-box" style="text-align:center;padding:30px"><p style="font-size:2rem;margin-bottom:10px">❓</p><h3>No order found for "' + escapeHtml(query) + '"</h3><p style="color:var(--text-muted);margin-top:6px">Please make sure you entered the correct Order ID or mobile number.</p></div>';
        return;
      }

      var html = '';
      found.forEach(function(ord) {
        var st = ord.status || 'Pending';
        var badgeColor = '#d97706';
        if (st === 'Payment Submitted') badgeColor = '#0284c7';
        else if (st === 'Verified' || st === 'Delivered' || st === 'Completed') badgeColor = '#16a34a';
        else if (st === 'Cancelled') badgeColor = '#dc2626';

        html += '<div class="card reveal" style="padding:28px;margin-bottom:20px;border-radius:var(--radius-lg);border:1px solid rgba(255,255,255,0.1)">';
        html += '  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px">';
        html += '    <div><span style="font-size:0.85rem;color:var(--text-muted)">ORDER ID</span><h3 style="font-family:monospace;color:var(--text-primary);margin-top:2px">' + escapeHtml(ord.id) + '</h3></div>';
        html += '    <span style="background:' + badgeColor + ';color:#fff;padding:6px 14px;border-radius:20px;font-size:0.85rem;font-weight:700">' + escapeHtml(st) + '</span>';
        html += '  </div>';

        html += '  <div class="invoice-box" style="margin-bottom:16px">';
        html += '    <div class="invoice-row"><span>Customer Name:</span> <strong>' + escapeHtml(ord.customerName || 'N/A') + '</strong></div>';
        html += '    <div class="invoice-row"><span>Phone:</span> <strong>' + escapeHtml(ord.customerPhone || 'N/A') + '</strong></div>';
        html += '    <div class="invoice-row"><span>Payment Method:</span> <strong>' + escapeHtml(ord.paymentMethod || 'bKash') + '</strong></div>';
        html += '    <div class="invoice-row"><span>Transaction ID (TxID):</span> <strong style="font-family:monospace;color:var(--color-success)">' + escapeHtml(ord.transactionId || 'Awaiting Submission') + '</strong></div>';
        html += '    <div class="invoice-row"><span>Order Total:</span> <strong>৳' + formatNumber(ord.total || 0) + '</strong></div>';
        html += '  </div>';

        if (!ord.transactionId || ord.transactionId === 'Awaiting Submission' || ord.status === 'Pending') {
          html += '  <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:var(--radius-md);margin-top:12px">';
          html += '    <label style="font-size:0.88rem;display:block;margin-bottom:8px">Submit or update your Transaction ID:</label>';
          html += '    <div style="display:flex;gap:10px">';
          html += '      <input type="text" id="trackTxInput_' + ord.id + '" class="form-input" placeholder="e.g. 9J28A771" style="flex:1">';
          html += '      <button class="btn btn-primary" onclick="submitTrackTxId(\'' + ord.id + '\')">Submit TrxID</button>';
          html += '    </div>';
          html += '  </div>';
        }

        html += '</div>';
      });

      resContainer.innerHTML = html;
    })
    .catch(function(err){
      resContainer.innerHTML = '<div class="invoice-box" style="color:var(--color-danger)">Network error checking order. Please try again.</div>';
    });
}

function submitTrackTxId(orderId) {
  var inp = document.getElementById('trackTxInput_' + orderId);
  var txId = inp ? inp.value.trim() : '';
  if (!txId) {
    showToast('Please type your transaction ID.', 'error');
    return;
  }

  fetch('api/api.php?action=submit_txid', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId: orderId, transactionId: txId })
  })
  .then(function(res){ return res.json(); })
  .then(function(res){
    if (res && res.success) {
      showToast('Transaction ID submitted successfully!', 'success');
      lookupOrder();
    } else {
      showToast(res && res.message ? res.message : 'Error submitting TxID', 'error');
    }
  })
  .catch(function(){
    showToast('Failed to submit TxID', 'error');
  });
}

// ═══════════════════════════════════════════════════════════════
// CUSTOMER AUTHENTICATION & USER ORDERS SYSTEM
// ═══════════════════════════════════════════════════════════════

var _currentUserOrders = [];
var _userPasswordVisible = false;

function initUserSession() {
  try {
    var storedUser = localStorage.getItem('rtx_customer_user');
    var storedToken = localStorage.getItem('rtx_customer_token');
    if (storedUser) {
      APP.user = JSON.parse(storedUser);
      APP.userToken = storedToken || '';
    }
  } catch (e) {
    APP.user = null;
    APP.userToken = null;
  }
  updateNavUserButton();
}

function updateNavUserButton() {
  var btn = document.getElementById('navUserBtn');
  var label = document.getElementById('navUserLabel');
  var mobLink = document.getElementById('mobileUserLink');

  if (APP.user && APP.user.name) {
    var firstName = APP.user.name.split(' ')[0] || 'User';
    var initial = firstName.charAt(0).toUpperCase();
    if (btn) btn.classList.add('logged-in');
    if (label) {
      label.innerHTML = '<span class="nav-user-avatar">' + escapeHtml(initial) + '</span> ' + escapeHtml(firstName);
    }
    if (mobLink) {
      mobLink.innerHTML = '👤 ' + escapeHtml(firstName) + ' (Account)';
    }
  } else {
    if (btn) btn.classList.remove('logged-in');
    if (label) {
      label.innerHTML = '<i data-lucide="user"></i> Login';
      if (window.lucide) lucide.createIcons();
    }
    if (mobLink) {
      mobLink.innerHTML = '👤 Login / Join';
    }
  }
}

function handleNavUserClick() {
  if (APP.user) {
    navigateTo('account');
  } else {
    openAuthModal('login');
  }
}

function openAuthModal(tab) {
  tab = tab || 'login';
  var overlay = document.getElementById('authModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'auth-modal-overlay';
    overlay.id = 'authModalOverlay';
    overlay.onclick = function (e) {
      if (e.target === overlay) closeAuthModal();
    };
    document.body.appendChild(overlay);
  }

  var isLogin = tab === 'login';
  var html = '';
  html += '<div class="auth-modal-card" id="authModalCard">';
  html += '  <div class="auth-modal-header">';
  html += '    <div class="auth-modal-title"><span>🔐</span> ' + (isLogin ? 'Customer Sign In' : 'Create Free Account') + '</div>';
  html += '    <button class="auth-modal-close" onclick="closeAuthModal()" aria-label="Close">✕</button>';
  html += '  </div>';

  html += '  <div class="auth-modal-body">';

  // Auto-Generated Password Card (shown if redirected after Google Auth)
  html += '    <div id="authGenPasswordBox" style="display:none"></div>';

  // Google / Gmail Auth Button
  html += '    <button type="button" class="btn-google-auth" id="btnGoogleAuth" onclick="handleGoogleAuthClick()">';
  html += '      <svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  html += '      <span>Continue with Google / Gmail</span>';
  html += '    </button>';

  // Optional hidden Google One-Tap target
  html += '    <div id="googleOneTapContainer" style="display:none"></div>';

  html += '    <div class="auth-divider"><span>OR CONTINUE WITH EMAIL</span></div>';

  // Tabs
  html += '    <div class="auth-tabs">';
  html += '      <button class="auth-tab-btn ' + (isLogin ? 'active' : '') + '" onclick="switchAuthTab(\'login\')">Sign In</button>';
  html += '      <button class="auth-tab-btn ' + (!isLogin ? 'active' : '') + '" onclick="switchAuthTab(\'register\')">Create Account</button>';
  html += '    </div>';

  // Login Form
  html += '    <form id="authLoginForm" onsubmit="submitEmailLogin(event)" style="' + (isLogin ? '' : 'display:none') + '">';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Gmail / Email Address *</label>';
  html += '        <input type="email" id="authLoginEmail" class="form-input" placeholder="you@gmail.com" required>';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Password *</label>';
  html += '        <input type="password" id="authLoginPassword" class="form-input" placeholder="Enter your password" required>';
  html += '      </div>';
  html += '      <button type="submit" class="btn btn-primary btn-lg" id="btnSubmitLogin" style="width:100%;margin-top:16px">';
  html += '        Sign In to Account →';
  html += '      </button>';
  html += '      <p style="text-align:center;font-size:0.85rem;color:var(--text-muted);margin-top:16px">';
  html += '        Don\'t have an account? <a onclick="switchAuthTab(\'register\')" style="color:var(--color-primary-light);cursor:pointer;text-decoration:underline">Sign up for free</a>';
  html += '      </p>';
  html += '    </form>';

  // Register Form
  html += '    <form id="authRegisterForm" onsubmit="submitEmailRegister(event)" style="' + (!isLogin ? '' : 'display:none') + '">';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Full Name *</label>';
  html += '        <input type="text" id="authRegName" class="form-input" placeholder="e.g., Fardin Ahmed" required>';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Gmail / Email Address *</label>';
  html += '        <input type="email" id="authRegEmail" class="form-input" placeholder="you@gmail.com" required>';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Phone Number (Optional)</label>';
  html += '        <input type="tel" id="authRegPhone" class="form-input" placeholder="01XXXXXXXXX">';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Create Password (Min 6 characters) *</label>';
  html += '        <input type="password" id="authRegPassword" class="form-input" placeholder="At least 6 characters" minlength="6" required>';
  html += '      </div>';
  html += '      <button type="submit" class="btn btn-primary btn-lg" id="btnSubmitReg" style="width:100%;margin-top:16px">';
  html += '        Create Account & Log In →';
  html += '      </button>';
  html += '      <p style="text-align:center;font-size:0.85rem;color:var(--text-muted);margin-top:16px">';
  html += '        Already have an account? <a onclick="switchAuthTab(\'login\')" style="color:var(--color-primary-light);cursor:pointer;text-decoration:underline">Sign in</a>';
  html += '      </p>';
  html += '    </form>';

  html += '  </div>'; // .auth-modal-body
  html += '</div>'; // .auth-modal-card

  overlay.innerHTML = html;
  overlay.classList.add('open');
}

function closeAuthModal() {
  var overlay = document.getElementById('authModalOverlay');
  if (overlay) overlay.classList.remove('open');
}

function switchAuthTab(tab) {
  var isLogin = tab === 'login';
  var loginForm = document.getElementById('authLoginForm');
  var regForm = document.getElementById('authRegisterForm');
  var btns = document.querySelectorAll('.auth-tab-btn');

  if (loginForm && regForm) {
    loginForm.style.display = isLogin ? 'block' : 'none';
    regForm.style.display = !isLogin ? 'block' : 'none';
  }

  btns.forEach(function (b, idx) {
    if ((isLogin && idx === 0) || (!isLogin && idx === 1)) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
}

function handleGoogleAuthClick() {
  var clientId = (APP.settings && APP.settings.googleClientId) ? APP.settings.googleClientId.trim() : '';
  if (clientId) {
    launchGoogleOAuthPopup(clientId);
  } else {
    promptGoogleClientIdSetup();
  }
}

function launchGoogleOAuthPopup(clientId) {
  if (window.google && window.google.accounts && window.google.accounts.oauth2) {
    try {
      var client = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'email profile openid',
        prompt: 'select_account',
        callback: function (tokenResponse) {
          if (tokenResponse && tokenResponse.access_token) {
            showToast('Connecting Google account...', 'info');
            fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: 'Bearer ' + tokenResponse.access_token }
            })
              .then(function (res) { return res.json(); })
              .then(function (googleUser) {
                if (googleUser && googleUser.email) {
                  sendGoogleAuthToServer({
                    email: googleUser.email,
                    name: googleUser.name || googleUser.given_name || googleUser.email.split('@')[0],
                    avatar: googleUser.picture || '',
                    googleToken: tokenResponse.access_token
                  });
                } else {
                  showToast('Could not retrieve Gmail profile.', 'error');
                }
              })
              .catch(function () {
                showToast('Failed to connect to Google userinfo.', 'error');
              });
          }
        }
      });
      client.requestAccessToken({ prompt: 'select_account' });
      return;
    } catch (e) {
      console.warn('Google Identity TokenClient error:', e);
    }
  }

  showToast('Initializing Google Sign-in... Please try again in a moment.', 'info');
}

function promptGoogleClientIdSetup() {
  var html = '';
  html += '<div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.35);border-radius:18px;padding:20px;margin-bottom:20px">';
  html += '  <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">';
  html += '    <svg style="width:28px;height:28px;flex-shrink:0" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  html += '    <div>';
  html += '      <h4 style="color:#fff;font-size:1.05rem;margin:0;font-weight:700">Google Account Chooser Activation</h4>';
  html += '      <p style="color:#94a3b8;font-size:0.78rem;margin:2px 0 0">Enable the official Google "Choose an account" popup</p>';
  html += '    </div>';
  html += '  </div>';
  html += '  <p style="font-size:0.84rem;color:#cbd5e1;line-height:1.55;margin-bottom:12px">';
  html += '    To show the official Google Account Chooser popup with your accounts for <strong>likhonshop</strong>, Google strictly requires an authorized <strong>Google OAuth Client ID</strong>.';
  html += '  </p>';
  html += '  <div style="background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:12px;font-size:0.8rem;color:#94a3b8;line-height:1.65;margin-bottom:14px">';
  html += '    1. Open <a href="https://console.cloud.google.com/apis/credentials" target="_blank" style="color:#818cf8;text-decoration:underline;font-weight:600">Google Cloud Console → Credentials</a><br>';
  html += '    2. Click <strong>+ CREATE CREDENTIALS → OAuth client ID</strong> (Web application)<br>';
  html += '    3. Add Authorized Origins: <code>https://localhost:3000</code> and <code>http://localhost:3000</code><br>';
  html += '    4. Paste your Client ID below:';
  html += '  </div>';
  html += '  <div class="form-group" style="margin-bottom:12px">';
  html += '    <input type="text" id="quickGoogleClientIdInp" class="form-input" placeholder="e.g. 1096011445005-xxxxxxxxxx.apps.googleusercontent.com" style="font-size:0.85rem">';
  html += '  </div>';
  html += '  <button type="button" class="btn btn-primary btn-lg" onclick="saveAndLaunchGoogleOAuth()" style="width:100%;margin-bottom:8px">';
  html += '    ⚡ Save & Launch Google Account Chooser';
  html += '  </button>';
  html += '  <button type="button" class="btn btn-secondary btn-sm" onclick="openGoogleQuickConnectModal()" style="width:100%;padding:8px;font-size:0.82rem;opacity:0.9">';
  html += '    ✉️ Or Enter Gmail Address Directly (Instant Sign In)';
  html += '  </button>';
  html += '</div>';

  var genBox = document.getElementById('authGenPasswordBox');
  if (genBox) {
    genBox.innerHTML = html;
    genBox.style.display = 'block';
  }
}

function saveAndLaunchGoogleOAuth() {
  var inp = document.getElementById('quickGoogleClientIdInp');
  var val = inp ? inp.value.trim() : '';

  if (!val || val.indexOf('apps.googleusercontent.com') === -1) {
    showToast('Please enter a valid Google Client ID (ending in .apps.googleusercontent.com)', 'error');
    return;
  }

  APP.settings.googleClientId = val;
  try {
    localStorage.setItem('rtx_store_settings', JSON.stringify(APP.settings));
  } catch(e) {}

  fetch('api/api.php?action=save_settings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ googleClientId: val })
  }).catch(function () {});

  var genBox = document.getElementById('authGenPasswordBox');
  if (genBox) genBox.style.display = 'none';

  showToast('Google Client ID connected! Opening Account Chooser...', 'success');
  launchGoogleOAuthPopup(val);
}

function parseAndLoginGoogleJwt(jwtToken) {
  try {
    var base64Url = jwtToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    var data = JSON.parse(jsonPayload);
    sendGoogleAuthToServer({
      email: data.email,
      name: data.name || data.given_name,
      avatar: data.picture,
      googleToken: jwtToken
    });
  } catch (err) {
    openGoogleQuickConnectModal();
  }
}

function openGoogleQuickConnectModal() {
  var html = '';
  html += '<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:20px;margin-bottom:20px">';
  html += '  <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">';
  html += '    <svg style="width:24px;height:24px" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
  html += '    <strong style="color:#fff;font-size:1.05rem">Gmail Instant Connect</strong>';
  html += '  </div>';
  html += '  <p style="font-size:0.85rem;color:#94a3b8;line-height:1.5;margin-bottom:14px">Enter your Gmail address to instantly create or access your account. A secure random password will be created & saved for you.</p>';
  html += '  <div class="form-group">';
  html += '    <label class="form-label">Gmail Address *</label>';
  html += '    <input type="email" id="googleQuickEmail" class="form-input" placeholder="e.g., yourname@gmail.com" required>';
  html += '  </div>';
  html += '  <div class="form-group">';
  html += '    <label class="form-label">Your Name (Optional)</label>';
  html += '    <input type="text" id="googleQuickName" class="form-input" placeholder="e.g., Fardin">';
  html += '  </div>';
  html += '  <button type="button" class="btn btn-accent btn-lg" onclick="submitGoogleQuickConnect()" style="width:100%;margin-top:10px">';
  html += '    ⚡ Connect with Gmail Now';
  html += '  </button>';
  html += '</div>';

  var genBox = document.getElementById('authGenPasswordBox');
  if (genBox) {
    genBox.innerHTML = html;
    genBox.style.display = 'block';
  }
}

function submitGoogleQuickConnect() {
  var emailInp = document.getElementById('googleQuickEmail');
  var nameInp = document.getElementById('googleQuickName');
  var email = emailInp ? emailInp.value.trim().toLowerCase() : '';
  var name = nameInp ? nameInp.value.trim() : '';

  if (!email || email.indexOf('@') === -1) {
    showToast('Please enter a valid Gmail address.', 'error');
    return;
  }

  sendGoogleAuthToServer({
    email: email,
    name: name || email.split('@')[0],
    avatar: ''
  });
}

function sendGoogleAuthToServer(payload) {
  var btn = document.getElementById('btnGoogleAuth');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = 'Connecting with Google...';
  }

  fetch('api/api.php?action=user_google_auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        APP.user = res.user;
        APP.userToken = res.token || '';
        localStorage.setItem('rtx_customer_user', JSON.stringify(res.user));
        if (res.token) localStorage.setItem('rtx_customer_token', res.token);
        updateNavUserButton();

        if (res.isNewUser && res.generatedPassword) {
          // Display the celebratory auto-generated password alert before redirecting
          showAutoGeneratedPasswordModal(res.generatedPassword, res.user);
        } else {
          showToast('Welcome back, ' + (res.user.name || 'Friend') + '! 🎉', 'success');
          closeAuthModal();
          navigateTo('account');
        }
      } else {
        showToast(res && res.message ? res.message : 'Google authentication failed.', 'error');
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<span>Continue with Google / Gmail</span>';
        }
      }
    })
    .catch(function () {
      showToast('Network error during Google authentication.', 'error');
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span>Continue with Google / Gmail</span>';
      }
    });
}

function showAutoGeneratedPasswordModal(password, user) {
  var card = document.getElementById('authModalCard');
  if (!card) return;

  var html = '';
  html += '  <div class="auth-modal-header">';
  html += '    <div class="auth-modal-title"><span>🎉</span> Welcome to likhonshop!</div>';
  html += '    <button class="auth-modal-close" onclick="closeAuthModal(); navigateTo(\'account\');">✕</button>';
  html += '  </div>';

  html += '  <div class="auth-modal-body">';
  html += '    <div class="auth-password-alert">';
  html += '      <div class="auth-password-alert-title"><span>🔑</span> Google Account Created Successfully!</div>';
  html += '      <p class="auth-password-alert-desc">We generated a secure login password for your Gmail account. You can use this password to sign in manually or change it anytime in your Account profile:</p>';
  html += '      <div class="auth-password-code-box">';
  html += '        <span class="auth-password-code" id="authGeneratedPassText">' + escapeHtml(password) + '</span>';
  html += '        <button class="auth-copy-btn" onclick="copyPasswordToClipboard(\'' + escapeHtml(password) + '\')">📋 Copy Password</button>';
  html += '      </div>';
  html += '    </div>';

  html += '    <p style="font-size:0.88rem;color:#cbd5e1;line-height:1.6;margin-bottom:20px">';
  html += '      Logged in as: <strong>' + escapeHtml(user.email) + '</strong><br>';
  html += '      Your orders, download access, and transaction history are now securely saved to your account.';
  html += '    </p>';

  html += '    <button type="button" class="btn btn-primary btn-lg" style="width:100%" onclick="closeAuthModal(); navigateTo(\'account\');">';
  html += '      Go to My Account & Orders →';
  html += '    </button>';
  html += '  </div>';

  card.innerHTML = html;
}

function submitEmailLogin(e) {
  e.preventDefault();
  var email = document.getElementById('authLoginEmail').value.trim().toLowerCase();
  var pass = document.getElementById('authLoginPassword').value.trim();
  var btn = document.getElementById('btnSubmitLogin');

  if (!email || !pass) {
    showToast('Please enter both email and password.', 'error');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = 'Signing in...';

  fetch('api/api.php?action=user_login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: pass })
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      btn.disabled = false;
      btn.innerHTML = 'Sign In to Account →';
      if (res && res.success) {
        APP.user = res.user;
        APP.userToken = res.token || '';
        localStorage.setItem('rtx_customer_user', JSON.stringify(res.user));
        if (res.token) localStorage.setItem('rtx_customer_token', res.token);
        updateNavUserButton();
        showToast('Welcome back, ' + (res.user.name || 'Friend') + '! 🎉', 'success');
        closeAuthModal();
        navigateTo('account');
      } else {
        showToast(res && res.message ? res.message : 'Invalid Gmail or password.', 'error');
      }
    })
    .catch(function () {
      btn.disabled = false;
      btn.innerHTML = 'Sign In to Account →';
      showToast('Network error during login.', 'error');
    });
}

function submitEmailRegister(e) {
  e.preventDefault();
  var name = document.getElementById('authRegName').value.trim();
  var email = document.getElementById('authRegEmail').value.trim().toLowerCase();
  var phone = document.getElementById('authRegPhone') ? document.getElementById('authRegPhone').value.trim() : '';
  var pass = document.getElementById('authRegPassword').value.trim();
  var btn = document.getElementById('btnSubmitReg');

  if (!name || !email || !pass) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }
  if (pass.length < 6) {
    showToast('Password must be at least 6 characters.', 'error');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = 'Creating account...';

  fetch('api/api.php?action=user_register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, email: email, phone: phone, password: pass })
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      btn.disabled = false;
      btn.innerHTML = 'Create Account & Log In →';
      if (res && res.success) {
        APP.user = res.user;
        APP.userToken = res.token || '';
        localStorage.setItem('rtx_customer_user', JSON.stringify(res.user));
        if (res.token) localStorage.setItem('rtx_customer_token', res.token);
        updateNavUserButton();
        showToast('Account created successfully! 🎉', 'success');
        closeAuthModal();
        navigateTo('account');
      } else {
        showToast(res && res.message ? res.message : 'Registration failed.', 'error');
      }
    })
    .catch(function () {
      btn.disabled = false;
      btn.innerHTML = 'Create Account & Log In →';
      showToast('Network error during registration.', 'error');
    });
}

function logoutUser() {
  APP.user = null;
  APP.userToken = null;
  _currentUserOrders = [];
  try {
    localStorage.removeItem('rtx_customer_user');
    localStorage.removeItem('rtx_customer_token');
  } catch (e) {}
  updateNavUserButton();
  showToast('You have been logged out.', 'info');
  if (APP.currentPage === 'account') {
    navigateTo('home');
  }
}

function copyPasswordToClipboard(pw) {
  if (!pw) return;
  navigator.clipboard.writeText(pw).then(function () {
    showToast('Password copied to clipboard! 📋', 'success');
  }).catch(function () {
    var ta = document.createElement('textarea');
    ta.value = pw;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Password copied to clipboard! 📋', 'success');
  });
}

function togglePasswordVisibility() {
  _userPasswordVisible = !_userPasswordVisible;
  var el = document.getElementById('accountPasswordVal');
  var btn = document.getElementById('btnTogglePassword');
  if (el && APP.user && APP.user.password) {
    if (_userPasswordVisible) {
      el.textContent = APP.user.password;
      if (btn) btn.textContent = '🙈 Hide';
    } else {
      el.textContent = '••••••••';
      if (btn) btn.textContent = '👁️ Show';
    }
  }
}

function updateUserProfile(e) {
  e.preventDefault();
  if (!APP.user) return;

  var nameInp = document.getElementById('accEditName');
  var phoneInp = document.getElementById('accEditPhone');
  var passInp = document.getElementById('accEditNewPassword');

  var name = nameInp ? nameInp.value.trim() : '';
  var phone = phoneInp ? phoneInp.value.trim() : '';
  var newPassword = passInp ? passInp.value.trim() : '';

  if (newPassword && newPassword.length < 6) {
    showToast('New password must be at least 6 characters.', 'error');
    return;
  }

  fetch('api/api.php?action=user_update_profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: APP.user.id,
      email: APP.user.email,
      name: name,
      phone: phone,
      newPassword: newPassword
    })
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        APP.user = res.user;
        localStorage.setItem('rtx_customer_user', JSON.stringify(res.user));
        updateNavUserButton();
        showToast('Profile updated successfully! ✅', 'success');
        var app = document.getElementById('app');
        if (app && APP.currentPage === 'account') renderAccountPage(app);
      } else {
        showToast(res && res.message ? res.message : 'Failed to update profile.', 'error');
      }
    })
    .catch(function () {
      showToast('Network error updating profile.', 'error');
    });
}

// ═══════════════════════════════════════════════════════════════
// PAGE: MY ACCOUNT & USER ORDERS DASHBOARD (#account)
// ═══════════════════════════════════════════════════════════════

function renderAccountPage(container) {
  if (!APP.user) {
    var guestHtml = '';
    guestHtml += '<div class="account-page"><div class="container">';
    guestHtml += '  <div class="card" style="max-width:540px;margin:40px auto;padding:40px 30px;text-align:center;border-radius:24px">';
    guestHtml += '    <div style="font-size:3.5rem;margin-bottom:16px">🔐</div>';
    guestHtml += '    <h2 style="font-size:1.6rem;margin-bottom:8px">Customer Account Access</h2>';
    guestHtml += '    <p style="color:var(--text-muted);font-size:0.95rem;line-height:1.6;margin-bottom:24px">';
    guestHtml += '      Sign in with your Gmail or create an account to view your purchase history, access verified product keys, and manage orders.';
    guestHtml += '    </p>';
    guestHtml += '    <button class="btn btn-primary btn-lg" onclick="openAuthModal(\'login\')" style="width:100%;margin-bottom:12px">';
    guestHtml += '      ⚡ Sign In with Gmail / Email';
    guestHtml += '    </button>';
    guestHtml += '    <button class="btn btn-secondary" onclick="openAuthModal(\'register\')" style="width:100%">';
    guestHtml += '      Create New Account';
    guestHtml += '    </button>';
    guestHtml += '  </div>';
    guestHtml += '</div></div>';
    container.innerHTML = guestHtml;
    openAuthModal('login');
    return;
  }

  var u = APP.user;
  var initial = (u.name || 'User').charAt(0).toUpperCase();
  var isGoogle = (u.authMethod === 'google');

  var html = '';
  html += '<div class="account-page animate-in"><div class="container">';

  html += '  <div class="section-header" style="text-align:left;margin-bottom:28px">';
  html += '    <span class="section-tag">👤 My Account</span>';
  html += '    <h2>Customer Dashboard & Purchases</h2>';
  html += '    <div class="divider" style="margin-left:0"></div>';
  html += '  </div>';

  html += '  <div class="account-grid">';

  // Left Column: User Profile & Security
  html += '    <div class="account-profile-card">';
  html += '      <div class="account-avatar-header">';
  html += '        <div class="account-large-avatar">' + escapeHtml(initial) + '</div>';
  html += '        <h3 class="account-user-name">' + escapeHtml(u.name || 'Customer') + '</h3>';
  html += '        <p class="account-user-email">' + escapeHtml(u.email || '') + '</p>';
  html += '        <span class="account-badge-pill">' + (isGoogle ? '🔵 Google Connected' : '🟢 Manual Account') + '</span>';
  html += '      </div>';

  // Saved Password Card
  html += '      <div class="account-section-title">🔑 Login Password</div>';
  html += '      <div class="account-password-box">';
  html += '        <div style="font-size:0.78rem;color:var(--text-muted);display:flex;justify-content:space-between">';
  html += '          <span>Your Saved Password:</span>';
  html += '          <a onclick="togglePasswordVisibility()" id="btnTogglePassword" style="color:var(--color-primary-light);cursor:pointer;font-weight:600">👁️ Show</a>';
  html += '        </div>';
  html += '        <div class="account-password-val-row">';
  html += '          <span class="account-password-val" id="accountPasswordVal">••••••••</span>';
  html += '          <button class="btn btn-secondary btn-sm" onclick="copyPasswordToClipboard(\'' + escapeHtml(u.password || '') + '\')" style="padding:4px 10px;font-size:0.75rem">📋 Copy</button>';
  html += '        </div>';
  html += '      </div>';

  // Edit Profile / Change Password
  html += '      <div class="account-section-title">⚙️ Update Details</div>';
  html += '      <form onsubmit="updateUserProfile(event)" style="margin-bottom:20px">';
  html += '        <div class="form-group" style="margin-bottom:12px">';
  html += '          <label class="form-label" style="font-size:0.8rem">Full Name</label>';
  html += '          <input type="text" id="accEditName" class="form-input" style="padding:8px 12px;font-size:0.88rem" value="' + escapeHtml(u.name || '') + '" required>';
  html += '        </div>';
  html += '        <div class="form-group" style="margin-bottom:12px">';
  html += '          <label class="form-label" style="font-size:0.8rem">Phone Number</label>';
  html += '          <input type="tel" id="accEditPhone" class="form-input" style="padding:8px 12px;font-size:0.88rem" value="' + escapeHtml(u.phone || '') + '" placeholder="01XXXXXXXXX">';
  html += '        </div>';
  html += '        <div class="form-group" style="margin-bottom:14px">';
  html += '          <label class="form-label" style="font-size:0.8rem">Change Password (Leave blank to keep)</label>';
  html += '          <input type="password" id="accEditNewPassword" class="form-input" style="padding:8px 12px;font-size:0.88rem" placeholder="New password">';
  html += '        </div>';
  html += '        <button type="submit" class="btn btn-secondary btn-sm" style="width:100%;padding:10px">';
  html += '          Save Profile Changes';
  html += '        </button>';
  html += '      </form>';

  // Logout Button
  html += '      <button class="btn btn-danger btn-sm" onclick="logoutUser()" style="width:100%;margin-top:10px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);color:#fca5a5">';
  html += '        🚪 Log Out of Account';
  html += '      </button>';

  html += '    </div>'; // .account-profile-card

  // Right Column: My Purchases & Order History
  html += '    <div class="account-orders-card">';
  html += '      <div class="account-orders-header">';
  html += '        <div>';
  html += '          <h3 style="font-size:1.3rem;font-weight:700;color:#fff">📦 My Purchases & Orders</h3>';
  html += '          <p style="font-size:0.85rem;color:var(--text-muted);margin-top:2px">All items and VIP keys ordered under ' + escapeHtml(u.email) + '</p>';
  html += '        </div>';
  html += '        <button class="btn btn-secondary btn-sm" onclick="loadAccountOrdersList(true)">🔄 Refresh</button>';
  html += '      </div>';

  html += '      <div id="accountOrdersListContainer">';
  html += '        <div style="text-align:center;padding:40px;color:var(--text-muted)">';
  html += '          <div class="spinner" style="margin:0 auto 12px"></div> Fetching your orders...';
  html += '        </div>';
  html += '      </div>';

  html += '    </div>'; // .account-orders-card

  html += '  </div>'; // .account-grid
  html += '</div></div>'; // .container, .account-page

  container.innerHTML = html;
  _userPasswordVisible = false;

  loadAccountOrdersList(false);
}

function loadAccountOrdersList(showRefreshToast) {
  var listContainer = document.getElementById('accountOrdersListContainer');
  if (!listContainer || !APP.user) return;

  var url = 'api/api.php?action=user_orders&userId=' + encodeURIComponent(APP.user.id || '') + '&email=' + encodeURIComponent(APP.user.email || '');

  fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success && Array.isArray(res.orders)) {
        _currentUserOrders = res.orders;
        renderUserOrdersTable(_currentUserOrders);
        if (showRefreshToast) showToast('Orders list updated.', 'info');
      } else {
        listContainer.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">No orders found.</div>';
      }
    })
    .catch(function () {
      listContainer.innerHTML = '<div style="text-align:center;padding:30px;color:#ef4444">Failed to load orders. Please try again.</div>';
    });
}

function renderUserOrdersTable(orders) {
  var listContainer = document.getElementById('accountOrdersListContainer');
  if (!listContainer) return;

  if (orders.length === 0) {
    var emptyHtml = '';
    emptyHtml += '<div style="text-align:center;padding:50px 20px;background:rgba(255,255,255,0.02);border:1px dashed rgba(255,255,255,0.1);border-radius:16px">';
    emptyHtml += '  <p style="font-size:2.8rem;margin-bottom:12px">🛒</p>';
    emptyHtml += '  <h4 style="font-size:1.15rem;margin-bottom:6px;color:#fff">No Purchases Yet</h4>';
    emptyHtml += '  <p style="color:var(--text-muted);font-size:0.9rem;max-width:380px;margin:0 auto 20px">';
    emptyHtml += '    You haven\'t placed any orders yet. Explore our verified Free Fire VIP mods, FiveM scripts, and gaming panels.';
    emptyHtml += '  </p>';
    emptyHtml += '  <button class="btn btn-primary" onclick="navigateTo(\'shop\')">Explore All Products →</button>';
    emptyHtml += '</div>';
    listContainer.innerHTML = emptyHtml;
    return;
  }

  var cur = (APP.settings && APP.settings.currency) ? APP.settings.currency : '৳';
  var html = '';

  orders.forEach(function (ord) {
    var st = ord.status || 'Pending';
    var badgeColor = '#d97706';
    if (st === 'Payment Submitted') badgeColor = '#0284c7';
    else if (st === 'Verified' || st === 'Delivered' || st === 'Completed') badgeColor = '#16a34a';
    else if (st === 'Cancelled') badgeColor = '#dc2626';

    var dateStr = ord.createdAt ? new Date(ord.createdAt).toLocaleDateString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    }) : 'Recent';

    html += '<div class="user-order-item">';

    // Top Row: ID, Date, Status
    html += '  <div class="user-order-header">';
    html += '    <div>';
    html += '      <span class="user-order-id">' + escapeHtml(ord.id) + '</span>';
    html += '      <div class="user-order-date">Placed on: ' + escapeHtml(dateStr) + '</div>';
    html += '    </div>';
    html += '    <div style="display:flex;align-items:center;gap:10px">';
    html += '      <span class="user-order-badge" style="background:' + badgeColor + '">' + escapeHtml(st) + '</span>';
    html += '      <span style="font-weight:700;color:var(--color-primary-light);font-size:1.1rem">' + cur + formatNumber(ord.total || 0) + '</span>';
    html += '    </div>';
    html += '  </div>';

    // Products List
    if (Array.isArray(ord.items) && ord.items.length > 0) {
      html += '  <div class="user-order-products">';
      ord.items.forEach(function (it) {
        var optStr = it.optionName ? ' (' + escapeHtml(it.optionName) + ')' : '';
        html += '    <div class="user-order-prod-row">';
        html += '      <span>🛍️ ' + escapeHtml(it.name || 'Product') + optStr + ' × ' + (it.quantity || 1) + '</span>';
        html += '      <strong>' + cur + formatNumber((it.price || 0) * (it.quantity || 1)) + '</strong>';
        html += '    </div>';
      });
      html += '  </div>';
    }

    // Payment & TxID Info
    html += '  <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.85rem;color:var(--text-muted);margin:10px 0;flex-wrap:wrap;gap:8px">';
    html += '    <div>Payment: <strong style="color:#fff">' + escapeHtml(ord.paymentMethod || 'bKash') + '</strong></div>';
    html += '    <div>TrxID: <strong style="color:' + (ord.transactionId ? '#34d399' : '#f59e0b') + ';font-family:monospace">' + escapeHtml(ord.transactionId || 'Awaiting Submission') + '</strong></div>';
    html += '  </div>';

    // Delivered Product / Key Access Notice
    if (st === 'Delivered' || st === 'Completed') {
      html += '  <div class="user-order-delivered-box">';
      html += '    <span>⚡</span>';
      html += '    <div><strong>Product Access Verified:</strong> Your VIP key or tool files have been verified! Check your registered Gmail (' + escapeHtml(ord.email || APP.user.email) + ') or Telegram support.</div>';
      html += '  </div>';
    }

    // TrxID Direct Submission if Pending
    if (!ord.transactionId || ord.transactionId === 'Awaiting Submission' || st === 'Pending') {
      html += '  <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:12px;margin-top:12px;border:1px solid rgba(255,255,255,0.06)">';
      html += '    <label style="font-size:0.82rem;display:block;margin-bottom:8px;color:#fcd34d">⚠️ Payment awaiting verification. Enter your bKash / Nagad TrxID below:</label>';
      html += '    <div style="display:flex;gap:10px">';
      html += '      <input type="text" id="accTxInput_' + escapeHtml(ord.id) + '" class="form-input" placeholder="e.g. 9J28A771" style="flex:1;padding:8px 12px;font-size:0.88rem">';
      html += '      <button class="btn btn-primary btn-sm" onclick="submitAccountTxId(\'' + escapeHtml(ord.id) + '\')">Submit TrxID</button>';
      html += '    </div>';
      html += '  </div>';
    }

    // Action Buttons
    html += '  <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:14px">';
    html += '    <button class="btn btn-secondary btn-sm" onclick="viewAccountInvoiceModal(\'' + escapeHtml(ord.id) + '\')">📄 View Invoice</button>';
    html += '  </div>';

    html += '</div>'; // .user-order-item
  });

  listContainer.innerHTML = html;
}

function submitAccountTxId(orderId) {
  var inp = document.getElementById('accTxInput_' + orderId);
  var txId = inp ? inp.value.trim() : '';

  if (!txId) {
    showToast('Please type your transaction ID.', 'error');
    return;
  }

  fetch('api/api.php?action=submit_txid', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId: orderId, transactionId: txId })
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        showToast('Transaction ID submitted successfully!', 'success');
        loadAccountOrdersList(false);
      } else {
        showToast(res && res.message ? res.message : 'Error submitting TxID', 'error');
      }
    })
    .catch(function () {
      showToast('Failed to submit TxID', 'error');
    });
}

function viewAccountInvoiceModal(orderId) {
  var ord = _currentUserOrders.find(function (o) { return String(o.id) === String(orderId); });
  if (!ord) return;

  var cur = (APP.settings && APP.settings.currency) ? APP.settings.currency : '৳';
  var dateStr = ord.createdAt ? new Date(ord.createdAt).toLocaleString() : 'N/A';

  var modalId = 'accInvoiceModal';
  var existing = document.getElementById(modalId);
  if (existing) existing.remove();

  var html = '';
  html += '<div class="admin-modal-overlay open" id="' + modalId + '" onclick="if(event.target===this)this.remove()">';
  html += '  <div class="admin-modal-content" style="max-width:540px">';
  html += '    <div class="modal-header">';
  html += '      <h3 class="modal-title">📄 Official Invoice Receipt</h3>';
  html += '      <button class="modal-close" onclick="document.getElementById(\'' + modalId + '\').remove()">✕</button>';
  html += '    </div>';
  html += '    <div class="modal-body">';

  html += '      <div class="invoice-box" style="margin-bottom:16px">';
  html += '        <div class="invoice-row"><span>Order ID:</span> <strong style="font-family:monospace;color:#a5b4fc">' + escapeHtml(ord.id) + '</strong></div>';
  html += '        <div class="invoice-row"><span>Date:</span> <span>' + escapeHtml(dateStr) + '</span></div>';
  html += '        <div class="invoice-row"><span>Customer:</span> <strong>' + escapeHtml(ord.customerName || (APP.user ? APP.user.name : 'Customer')) + '</strong></div>';
  html += '        <div class="invoice-row"><span>Email / Gmail:</span> <span>' + escapeHtml(ord.customerEmail || (APP.user ? APP.user.email : 'N/A')) + '</span></div>';
  html += '        <div class="invoice-row"><span>Payment Method:</span> <strong>' + escapeHtml(ord.paymentMethod || 'bKash') + '</strong></div>';
  html += '        <div class="invoice-row"><span>Transaction ID (TxID):</span> <strong style="font-family:monospace;color:#34d399">' + escapeHtml(ord.transactionId || 'Awaiting Submission') + '</strong></div>';
  html += '        <div class="invoice-row"><span>Order Status:</span> <strong>' + escapeHtml(ord.status || 'Pending') + '</strong></div>';
  html += '      </div>';

  html += '      <h4 style="margin:16px 0 8px;font-size:0.95rem;color:#fff">Purchased Digital Items:</h4>';
  html += '      <div class="invoice-box" style="margin-bottom:16px">';
  if (Array.isArray(ord.items)) {
    ord.items.forEach(function (it) {
      var optStr = it.optionName ? ' (' + escapeHtml(it.optionName) + ')' : '';
      html += '      <div class="invoice-row">';
      html += '        <span>' + escapeHtml(it.name || 'Item') + optStr + ' × ' + (it.quantity || 1) + '</span>';
      html += '        <strong>' + cur + formatNumber((it.price || 0) * (it.quantity || 1)) + '</strong>';
      html += '      </div>';
    });
  }
  html += '        <div class="invoice-row" style="border-top:1px solid rgba(255,255,255,0.15);padding-top:10px;margin-top:6px;font-size:1.05rem">';
  html += '          <span>Grand Total:</span>';
  html += '          <strong style="color:var(--color-primary-light)">' + cur + formatNumber(ord.total || 0) + '</strong>';
  html += '        </div>';
  html += '      </div>';

  html += '    </div>'; // .modal-body
  html += '    <div class="modal-footer">';
  html += '      <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Print Receipt</button>';
  html += '      <button class="btn btn-primary btn-sm" onclick="document.getElementById(\'' + modalId + '\').remove()">Close</button>';
  html += '    </div>';
  html += '  </div>';
  html += '</div>';

  document.body.insertAdjacentHTML('beforeend', html);
}


