/**
 * ═══════════════════════════════════════════════════════════════
 *  PURE E-COMMERCE ADMIN CONTROL PANEL — JAVASCRIPT
 *  Complete Management: Dashboard, Orders, Products, Categories,
 *  Coupons, Customers, Payment Gateways & Store Settings.
 * ═══════════════════════════════════════════════════════════════
 */

// Default Fallback Data (Products start at 0 as requested!)
var DEFAULT_DATA = {
  products: [],
  orders: [],
  coupons: [
    { id: 'coup-1', code: 'WELCOME10', discount: 10, type: 'percent', minSpend: 500, active: true },
    { id: 'coup-2', code: 'SAVE100', discount: 100, type: 'fixed', minSpend: 1000, active: true }
  ],
  reviews: [
    { id: 'rev-1', author: 'Tanvir Hasan', rating: 5, comment: 'Outstanding service! Fast delivery and 100% genuine products.', date: '2025-09-15' },
    { id: 'rev-2', author: 'Sabbir Hossain', rating: 5, comment: 'Quick response and smooth bKash payment verification.', date: '2025-09-20' }
  ]
};

var DEFAULT_SETTINGS = {
  adminEmail: 'admin@likhonshop.com',
  storeName: 'likhonshop',
  storeTagline: 'Your Premium Online E-Commerce Store',
  storePhone: '01700000000',
  storeEmail: 'support@likhonshop.com',
  storeAddress: 'Dhaka, Bangladesh',
  currency: '৳',
  shippingDhaka: 60,
  shippingOutside: 120,
  freeShippingThreshold: 2000,
  bkashNumber: '01700000000 (Personal)',
  nagadNumber: '01800000000 (Personal)',
  rocketNumber: '01900000000 (Personal)',
  paymentInstructions: 'Send Money to our bKash/Nagad/Rocket number and enter your Transaction ID (TrxID) below.',
  websiteLogo: '../assets/favicon-192.png',
  websiteFavicon: '../assets/favicon-192.png',
  customCategories: ['Free Fire', 'PUBG', 'Gaming Panels', 'Digital Tools', 'Accessories'],
  primaryColor: '#6C5CE7',
  secondaryColor: '#FF6B6B',
  accentColor: '#F39C12',
  bgPrimary: '#0a0a1a',
  themePreset: 'royal'
};

// Global Admin State
var ADMIN_STATE = {
  currentTab: 'dashboard',
  data: JSON.parse(JSON.stringify(DEFAULT_DATA)),
  settings: JSON.parse(JSON.stringify(DEFAULT_SETTINGS)),
  orderFilter: 'all',
  orderSearchQuery: '',
  productCategoryFilter: 'all',
  productSearchQuery: '',
  pendingLogo: null,
  pendingFavicon: null
};

// ═══════════════════════════════════════════
// INITIALIZATION & ANTI-INSPECT PROTECTION
// ═══════════════════════════════════════════
var _adminInitialized = false;

function initAdminAntiInspectProtection() {
  // 1. Right Click Prevention across ALL elements with zero exceptions (including inputs and textareas)
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    return false;
  }, true);

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    return false;
  }, true);

  document.oncontextmenu = function () { return false; };

  // 2. F12 and DevTools Shortcut Prevention (Physical & On-Screen Keyboard)
  function blockAdminDevToolsKeys(e) {
    var key = (e.key || '').toLowerCase();
    var code = e.code || '';
    var keyCode = e.keyCode || e.which || 0;
    var isCtrl = e.ctrlKey || e.metaKey;
    var isShift = e.shiftKey;
    var isAlt = e.altKey;

    // F12 Key (Physical, OSK, or Fn+F12)
    var isF12 = key === 'f12' || code === 'F12' || keyCode === 123;

    // Ctrl+Shift+I / J / C / K
    var isInspectCombo = isCtrl && isShift && (key === 'i' || key === 'j' || key === 'c' || key === 'k' || keyCode === 73 || keyCode === 74 || keyCode === 67 || keyCode === 75);

    // Mac Cmd+Option+I / J / C / U
    var isMacDevTools = e.metaKey && isAlt && (key === 'i' || key === 'j' || key === 'c' || key === 'u' || keyCode === 73 || keyCode === 74 || keyCode === 67 || keyCode === 85);

    // Ctrl+U (View Page Source)
    var isViewSource = isCtrl && !isShift && (key === 'u' || keyCode === 85);

    // Ctrl+S (Save Page HTML)
    var isSavePage = isCtrl && !isShift && (key === 's' || keyCode === 83);

    // Ctrl+P (Print Page)
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

  window.addEventListener('keydown', blockAdminDevToolsKeys, true);
  document.addEventListener('keydown', blockAdminDevToolsKeys, true);
  window.addEventListener('keyup', blockAdminDevToolsKeys, true);
  document.addEventListener('keyup', blockAdminDevToolsKeys, true);

  // 3. Block Dragging
  document.addEventListener('dragstart', function (e) {
    if (e.target && e.target.nodeName === 'IMG') {
      e.preventDefault();
      return false;
    }
  }, false);
}

function initAdmin() {
  if (_adminInitialized) return;
  _adminInitialized = true;
  initAdminAntiInspectProtection();
  loadLocalState();
  fetchServerData();

  if (!isAuthenticated()) {
    renderLoginView();
  } else {
    renderAppLayout();
    switchTab('dashboard');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdmin);
} else {
  initAdmin();
}

// ═══════════════════════════════════════════
// AUTHENTICATION & SECURE API TRANSPORT
// ═══════════════════════════════════════════
function getAdminToken() {
  return sessionStorage.getItem('admin_token') || sessionStorage.getItem('admin_pass') || localStorage.getItem('likhon_admin_token') || localStorage.getItem('rtx_admin_token') || 'admin';
}

function isAuthenticated() {
  return sessionStorage.getItem('admin_logged_in') === 'true';
}

function adminFetch(url, options) {
  options = options || {};
  options.credentials = 'same-origin';
  options.headers = options.headers || {};

  var token = getAdminToken();
  if (token) {
    if (typeof options.headers.set === 'function') {
      options.headers.set('X-Admin-Token', token);
      options.headers.set('Authorization', 'Bearer ' + token);
    } else {
      options.headers['X-Admin-Token'] = token;
      options.headers['Authorization'] = 'Bearer ' + token;
    }
  }

  return fetch(url, options).then(function (res) {
    if (res.status === 401 || res.status === 403) {
      sessionStorage.removeItem('admin_logged_in');
      showToast('Admin session expired. Please enter your password to continue.', 'error');
      renderLoginView();
      throw new Error('Unauthorized');
    }
    return res;
  });
}

function handleLoginSubmit(e) {
  e.preventDefault();
  var input = document.getElementById('loginPassInput');
  var pass = input ? input.value.trim() : '';
  if (!pass) return;

  var submitBtn = e.target.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Verifying...';
  }

  fetch('../api/api.php?action=login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: pass })
  })
    .then(function (res) { return res.json(); })
    .then(function (result) {
      if (result && result.success) {
        sessionStorage.setItem('admin_logged_in', 'true');
        sessionStorage.setItem('admin_token', result.token || pass);
        sessionStorage.setItem('admin_pass', pass);
        localStorage.setItem('rtx_admin_token', result.token || pass);
        showToast('Welcome back, Admin!', 'success');
        renderAppLayout();
        switchTab('dashboard');
        fetchServerData();
      } else {
        showToast((result && result.message) ? result.message : 'Invalid admin password. Access denied.', 'error');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    })
    .catch(function (err) {
      showToast('Login verification failed: ' + err.message, 'error');
    })
    .finally(function () {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Access Control Panel →';
      }
    });
}

function handleLogout() {
  adminFetch('../api/api.php?action=logout', { method: 'POST' }).catch(function () { });
  sessionStorage.removeItem('admin_logged_in');
  sessionStorage.removeItem('admin_token');
  sessionStorage.removeItem('admin_pass');
  localStorage.removeItem('rtx_admin_token');
  showToast('Admin logged out safely.', 'info');
  renderLoginView();
}

function togglePasswordVisibility(id) {
  var el = document.getElementById(id);
  if (el) el.type = el.type === 'password' ? 'text' : 'password';
}

// ═══════════════════════════════════════════
// DATA MANAGEMENT & SYNC
// ═══════════════════════════════════════════
function loadLocalState() {
  try {
    var storedData = localStorage.getItem('ecommerce_admin_data');
    if (storedData) {
      var parsed = JSON.parse(storedData);
      if (parsed) {
        ADMIN_STATE.data = parsed;
        if (!ADMIN_STATE.data.products) ADMIN_STATE.data.products = [];
        if (!ADMIN_STATE.data.orders) ADMIN_STATE.data.orders = [];
        if (!ADMIN_STATE.data.coupons) ADMIN_STATE.data.coupons = DEFAULT_DATA.coupons;
      }
    }
    var storedSettings = localStorage.getItem('ecommerce_admin_settings');
    if (storedSettings) {
      var parsedSettings = JSON.parse(storedSettings);
      if (parsedSettings) ADMIN_STATE.settings = Object.assign({}, DEFAULT_SETTINGS, parsedSettings);
    }
  } catch (e) {
    console.warn('LocalStorage load failed', e);
  }
}

function saveLocalState() {
  try {
    localStorage.setItem('ecommerce_admin_data', JSON.stringify(ADMIN_STATE.data));
    localStorage.setItem('ecommerce_admin_settings', JSON.stringify(ADMIN_STATE.settings));
  } catch (e) { }
}

function fetchServerData() {
  adminFetch('../api/api.php?action=get_all')
    .then(function (res) { return res.json(); })
    .then(function (result) {
      if (result && result.success) {
        if (result.data) {
          ADMIN_STATE.data.products = result.data.products || [];
          ADMIN_STATE.data.orders = result.data.orders || [];
          if (result.data.coupons) ADMIN_STATE.data.coupons = result.data.coupons;
          if (result.data.reviews) ADMIN_STATE.data.reviews = result.data.reviews;
          if (result.data.users) ADMIN_STATE.data.users = result.data.users;
        }
        if (result.settings) {
          ADMIN_STATE.settings = Object.assign({}, DEFAULT_SETTINGS, result.settings);
        }
        saveLocalState();
        if (isAuthenticated()) {
          renderCurrentTab();
          updateSidebarBadges();
        }
      }
    })
    .catch(function (err) {
      console.log('API sync notice:', err.message);
    });
}

function syncItemToServer(type, item) {
  saveLocalState();
  return adminFetch('../api/api.php?action=save_item', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: type, item: item, admin_token: getAdminToken() })
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        showToast('Saved to server! ✅', 'success');
      } else {
        showToast('Failed to save: ' + (res && res.message ? res.message : 'Unknown server error'), 'error');
      }
      return res;
    })
    .catch(function (err) {
      if (err.message !== 'Unauthorized') {
        showToast('Save error: ' + err.message, 'error');
      }
    });
}

function deleteItemFromServer(type, id) {
  saveLocalState();
  adminFetch('../api/api.php?action=delete_item', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: type, id: id, admin_token: getAdminToken() })
  }).catch(function () { });
}

function syncSettingsToServer(settingsObj) {
  saveLocalState();
  var payload = Object.assign({}, settingsObj || ADMIN_STATE.settings, { admin_token: getAdminToken() });
  adminFetch('../api/api.php?action=save_settings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(function () { });
}

// ═══════════════════════════════════════════
// RENDERING: LOGIN VIEW
// ═══════════════════════════════════════════
function renderLoginView() {
  var root = document.getElementById('adminApp');
  if (!root) return;

  var currentFavicon = ADMIN_STATE.settings.websiteFavicon || '../assets/favicon.svg';

  var html = '';
  html += '<div class="login-screen" oncontextmenu="return false;">';
  html += '  <div class="login-card" oncontextmenu="return false;">';
  html += '    <div class="login-icon">';
  html += '      <img src="' + currentFavicon + '" style="width:44px;height:44px;border-radius:8px;object-fit:contain" onerror="this.outerHTML=\'🛍️\'">';
  html += '    </div>';
  html += '    <h1 class="login-title">' + escapeHtml(ADMIN_STATE.settings.storeName || 'likhonshop') + '</h1>';
  html += '    <p class="login-subtitle">E-Commerce Admin Dashboard. Enter your password to manage orders, products, and store settings.</p>';
  html += '    <form onsubmit="handleLoginSubmit(event)" oncontextmenu="return false;">';
  html += '      <div class="form-group" style="text-align:left">';
  html += '        <label class="form-label" for="loginPassInput">Admin Password</label>';
  html += '        <div class="password-input-wrapper">';
  html += '          <input type="password" id="loginPassInput" class="form-input" placeholder="Enter secret admin password..." required autofocus autocomplete="current-password" oncontextmenu="return false;">';
  html += '          <button type="button" class="password-toggle-btn" onclick="togglePasswordVisibility(\'loginPassInput\')" aria-label="Toggle password visibility">👁️</button>';
  html += '        </div>';
  html += '      </div>';
  html += '      <button type="submit" class="btn-dark" style="width:100%;margin-top:10px;padding:12px;font-size:1rem">Access Dashboard →</button>';
  html += '    </form>';
  html += '  </div>';
  html += '</div>';

  root.innerHTML = html;
}

// ═══════════════════════════════════════════
// RENDERING: APP LAYOUT (SIDEBAR & MAIN)
// ═══════════════════════════════════════════
function renderAppLayout() {
  var root = document.getElementById('adminApp');
  if (!root) return;

  var logoSrc = ADMIN_STATE.settings.websiteLogo || ADMIN_STATE.settings.websiteFavicon || '../assets/favicon.svg';
  var orders = ADMIN_STATE.data.orders || [];
  var pendingOrdersCount = orders.filter(function (o) { return o.status === 'Pending' || o.status === 'Payment Submitted'; }).length;

  var html = '';
  html += '<div class="admin-layout">';

  // ── SIDEBAR ──
  html += '  <aside class="admin-sidebar" id="adminSidebar">';
  html += '    <div>';
  html += '      <div class="sidebar-brand">';
  html += '        <div class="sidebar-brand-logo">';
  html += '          <img id="sidebarLogoImg" src="' + logoSrc + '" alt="Logo" onerror="this.outerHTML=\'<span>🛍️</span>\'">';
  html += '        </div>';
  html += '        <div class="sidebar-brand-text">';
  html += '          <h2>' + escapeHtml(ADMIN_STATE.settings.storeName || 'likhonshop') + '</h2>';
  html += '          <span>E-Commerce Admin</span>';
  html += '        </div>';
  html += '      </div>';
  html += '      <ul class="sidebar-nav">';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'dashboard' ? 'active' : '') + '" onclick="switchTab(\'dashboard\')">📊 Dashboard</a></li>';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'orders' ? 'active' : '') + '" onclick="switchTab(\'orders\')">📦 Orders' + (pendingOrdersCount > 0 ? ' <span class="nav-counter-badge" id="sidebarOrderBadge">' + pendingOrdersCount + '</span>' : '') + '</a></li>';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'products' ? 'active' : '') + '" onclick="switchTab(\'products\')">🛍️ Products</a></li>';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'categories' ? 'active' : '') + '" onclick="switchTab(\'categories\')">🏷️ Categories</a></li>';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'media' ? 'active' : '') + '" onclick="switchTab(\'media\')">🎬 Media Library (Pics &amp; Videos)</a></li>';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'coupons' ? 'active' : '') + '" onclick="switchTab(\'coupons\')">🎟️ Coupons</a></li>';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'customers' ? 'active' : '') + '" onclick="switchTab(\'customers\')">👥 Customers</a></li>';
  html += '        <li><a class="sidebar-nav-item ' + (ADMIN_STATE.currentTab === 'settings' ? 'active' : '') + '" onclick="switchTab(\'settings\')">⚙️ Store Settings</a></li>';
  html += '      </ul>';
  html += '    </div>';
  html += '    <div class="sidebar-footer">';
  html += '      <button class="sidebar-logout-btn" onclick="handleLogout()">Logout</button>';
  html += '      <a href="../" target="_blank" class="sidebar-view-site">🌐 View Live Store ↗</a>';
  html += '    </div>';
  html += '  </aside>';

  // ── MAIN CONTENT CONTAINER ──
  html += '  <main class="admin-main" id="adminMain">';
  html += '    <div class="mobile-header">';
  html += '      <button class="menu-toggle-btn" onclick="toggleSidebar()">☰ Menu</button>';
  html += '      <strong>' + escapeHtml(ADMIN_STATE.settings.storeName || 'likhonshop') + '</strong>';
  html += '      <a href="../" target="_blank" style="font-size:0.85rem">Live Store ↗</a>';
  html += '    </div>';
  html += '    <div id="tabContent"></div>';
  html += '  </main>';

  html += '</div>';

  html += '<div class="admin-toast-container" id="adminToastContainer"></div>';

  root.innerHTML = html;
}

function toggleSidebar() {
  var sb = document.getElementById('adminSidebar');
  if (sb) sb.classList.toggle('open');
}

function switchTab(tabName) {
  ADMIN_STATE.currentTab = tabName;

  document.querySelectorAll('.sidebar-nav-item').forEach(function (el) {
    var txt = el.textContent.toLowerCase();
    if (txt.indexOf(tabName.toLowerCase()) > -1) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  var sb = document.getElementById('adminSidebar');
  if (sb) sb.classList.remove('open');

  renderCurrentTab();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateSidebarBadges() {
  var orders = ADMIN_STATE.data.orders || [];
  var pendingOrdersCount = orders.filter(function (o) { return o.status === 'Pending' || o.status === 'Payment Submitted'; }).length;
  var badge = document.getElementById('sidebarOrderBadge');
  if (badge) {
    if (pendingOrdersCount > 0) {
      badge.textContent = pendingOrdersCount;
      badge.style.display = 'inline-flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

function renderCurrentTab() {
  var container = document.getElementById('tabContent');
  if (!container) return;

  updateSidebarBadges();

  switch (ADMIN_STATE.currentTab) {
    case 'dashboard':
      renderDashboard(container);
      break;
    case 'orders':
      renderOrders(container);
      break;
    case 'products':
      renderProducts(container);
      break;
    case 'categories':
      renderCategoriesTab(container);
      break;
    case 'media':
      renderMediaLibrary(container);
      break;
    case 'coupons':
      renderCoupons(container);
      break;
    case 'customers':
      renderCustomers(container);
      break;
    case 'settings':
      renderSettings(container);
      break;
    default:
      renderDashboard(container);
  }
}

// ═══════════════════════════════════════════
// VIEW 1: E-COMMERCE DASHBOARD
// ═══════════════════════════════════════════
function renderDashboard(container) {
  var data = ADMIN_STATE.data;
  var orders = data.orders || [];
  var products = data.products || [];
  var cur = ADMIN_STATE.settings.currency || '৳';

  var totalRevenue = 0;
  var pendingCount = 0;
  var completedCount = 0;

  orders.forEach(function (o) {
    var amt = 0;
    if (o.total) amt = parseFloat(o.total) || 0;
    else if (Array.isArray(o.items)) {
      o.items.forEach(function (it) { amt += (parseFloat(it.price) || 0) * (parseInt(it.quantity, 10) || 1); });
    }
    totalRevenue += amt;
    if (o.status === 'Pending' || o.status === 'Payment Submitted') pendingCount++;
    if (o.status === 'Verified' || o.status === 'Completed' || o.status === 'Delivered') completedCount++;
  });

  // Unique customers count
  var custMap = {};
  orders.forEach(function (o) { if (o.customerPhone) custMap[o.customerPhone] = true; });
  var uniqueCustomers = Object.keys(custMap).length;

  var html = '';
  html += '<div class="page-header">';
  html += '  <div>';
  html += '    <h1 class="page-title">Store Dashboard</h1>';
  html += '    <p class="page-desc">Overview of your online store sales, customer orders, and product inventory.</p>';
  html += '  </div>';
  html += '  <div style="display:flex;gap:10px">';
  html += '    <button class="btn-dark" onclick="openProductModal()">+ Add New Product</button>';
  html += '    <a href="../" target="_blank" class="btn-sm" style="display:inline-flex;align-items:center;text-decoration:none">🌐 Live Store ↗</a>';
  html += '  </div>';
  html += '</div>';

  // 4 Top Stats Cards
  html += '<div class="stats-grid">';
  html += '  <div class="stat-card">';
  html += '    <div class="stat-card-title">Total Sales Revenue</div>';
  html += '    <div class="stat-card-value" style="color:#059669">' + cur + totalRevenue.toLocaleString() + '</div>';
  html += '    <div class="stat-card-subtitle">Gross lifetime store sales</div>';
  html += '  </div>';
  html += '  <div class="stat-card">';
  html += '    <div class="stat-card-title">Total Orders</div>';
  html += '    <div class="stat-card-value">' + orders.length + '</div>';
  html += '    <div class="stat-card-subtitle">' + pendingCount + ' awaiting verification</div>';
  html += '  </div>';
  html += '  <div class="stat-card">';
  html += '    <div class="stat-card-title">Active Products</div>';
  html += '    <div class="stat-card-value">' + products.length + '</div>';
  html += '    <div class="stat-card-subtitle">' + getAllCategories().length + ' active categories</div>';
  html += '  </div>';
  html += '  <div class="stat-card">';
  html += '    <div class="stat-card-title">Total Customers</div>';
  html += '    <div class="stat-card-value">' + uniqueCustomers + '</div>';
  html += '    <div class="stat-card-subtitle">Buyers who ordered from store</div>';
  html += '  </div>';
  html += '</div>';

  // Quick Action Buttons
  html += '<div class="card" style="margin-bottom:24px;padding:16px 20px">';
  html += '  <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">';
  html += '    <span style="font-weight:600;font-size:0.9rem;color:#0f172a;margin-right:8px">⚡ Quick Actions:</span>';
  html += '    <button class="btn-dark" onclick="openProductModal()">+ Add Product</button>';
  html += '    <button class="btn-sm" onclick="switchTab(\'orders\')">📦 View Orders (' + orders.length + ')</button>';
  html += '    <button class="btn-sm" onclick="openCategoryManagerModal()">🏷️ Categories</button>';
  html += '    <button class="btn-sm" onclick="openCouponModal()">🎟️ New Coupon</button>';
  html += '    <button class="btn-sm" onclick="switchTab(\'settings\')">⚙️ Store Settings</button>';
  html += '  </div>';
  html += '</div>';

  // Two Column Section
  html += '<div class="dashboard-grid">';

  // Left Column: Recent Orders
  html += '  <div class="card">';
  html += '    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
  html += '      <h3 style="font-size:1.1rem;font-weight:700">Recent Customer Orders</h3>';
  html += '      <button class="btn-sm" onclick="switchTab(\'orders\')">View All Orders →</button>';
  html += '    </div>';
  html += '    <div class="table-responsive">';
  html += '      <table class="data-table">';
  html += '        <thead>';
  html += '          <tr>';
  html += '            <th>ORDER</th>';
  html += '            <th>CUSTOMER</th>';
  html += '            <th>AMOUNT</th>';
  html += '            <th>STATUS</th>';
  html += '            <th style="text-align:right">ACTION</th>';
  html += '          </tr>';
  html += '        </thead>';
  html += '        <tbody>';

  var recentOrders = orders.slice(0, 6);
  if (recentOrders.length === 0) {
    html += '<tr><td colspan="5" style="text-align:center;padding:32px;color:#94a3b8">No customer orders yet. When customers place an order, it will appear here instantly!</td></tr>';
  } else {
    recentOrders.forEach(function (ord) {
      var statusClass = getStatusClass(ord.status);
      var amt = ord.total || 0;
      html += '<tr>';
      html += '  <td><strong style="font-family:monospace;color:#0f172a">' + escapeHtml(ord.id) + '</strong></td>';
      html += '  <td><div><strong>' + escapeHtml(ord.customerName || 'Customer') + '</strong></div><small style="color:#64748b">' + escapeHtml(ord.customerPhone || '') + '</small></td>';
      html += '  <td><strong style="color:#059669">' + cur + amt + '</strong></td>';
      html += '  <td><span class="badge-status ' + statusClass + '">' + escapeHtml(ord.status || 'Pending') + '</span></td>';
      html += '  <td style="text-align:right">';
      html += '    <button class="table-action-edit" onclick="viewOrderDetails(\'' + escapeHtml(ord.id) + '\')">Details</button>';
      html += '  </td>';
      html += '</tr>';
    });
  }

  html += '        </tbody>';
  html += '      </table>';
  html += '    </div>';
  html += '  </div>';

  // Right Column: Store Info & Payment Numbers
  html += '  <div class="card">';
  html += '    <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px">Store Configuration</h3>';
  html += '    <div class="invoice-box" style="margin-bottom:16px">';
  html += '      <div class="invoice-row"><span>Store Name:</span> <strong>' + escapeHtml(ADMIN_STATE.settings.storeName) + '</strong></div>';
  html += '      <div class="invoice-row"><span>bKash Payment:</span> <strong>' + escapeHtml(ADMIN_STATE.settings.bkashNumber) + '</strong></div>';
  html += '      <div class="invoice-row"><span>Nagad Payment:</span> <strong>' + escapeHtml(ADMIN_STATE.settings.nagadNumber) + '</strong></div>';
  html += '      <div class="invoice-row"><span>Rocket Payment:</span> <strong>' + escapeHtml(ADMIN_STATE.settings.rocketNumber) + '</strong></div>';
  html += '      <div class="invoice-row"><span>Free Shipping:</span> <strong>Orders over ' + cur + ADMIN_STATE.settings.freeShippingThreshold + '</strong></div>';
  html += '    </div>';
  html += '    <button class="btn-dark" style="width:100%" onclick="switchTab(\'settings\')">Edit Store & Payment Details</button>';
  html += '  </div>';

  html += '</div>';

  container.innerHTML = html;
}

function getStatusClass(status) {
  var st = (status || 'Pending').toLowerCase();
  if (st.indexOf('verified') > -1 || st.indexOf('complete') > -1 || st.indexOf('deliver') > -1) return 'completed';
  if (st.indexOf('submit') > -1) return 'submitted';
  if (st.indexOf('cancel') > -1) return 'cancelled';
  if (st.indexOf('process') > -1 || st.indexOf('ship') > -1) return 'submitted';
  return 'pending';
}

// ═══════════════════════════════════════════
// VIEW 2: ORDERS MANAGEMENT
// ═══════════════════════════════════════════
function renderOrders(container) {
  var orders = ADMIN_STATE.data.orders || [];
  var filter = ADMIN_STATE.orderFilter || 'all';
  var query = (ADMIN_STATE.orderSearchQuery || '').toLowerCase();
  var cur = ADMIN_STATE.settings.currency || '৳';

  var filtered = orders.filter(function (o) {
    if (filter === 'pending' && o.status !== 'Pending') return false;
    if (filter === 'submitted' && o.status !== 'Payment Submitted') return false;
    if (filter === 'processing' && o.status !== 'Processing') return false;
    if (filter === 'delivered' && o.status !== 'Delivered' && o.status !== 'Verified' && o.status !== 'Completed') return false;
    if (filter === 'cancelled' && o.status !== 'Cancelled') return false;

    if (query) {
      var idMatch = (o.id || '').toLowerCase().indexOf(query) > -1;
      var nameMatch = (o.customerName || '').toLowerCase().indexOf(query) > -1;
      var phoneMatch = (o.customerPhone || '').toLowerCase().indexOf(query) > -1;
      var txMatch = (o.transactionId || '').toLowerCase().indexOf(query) > -1;
      return idMatch || nameMatch || phoneMatch || txMatch;
    }
    return true;
  });

  var pendingCount = orders.filter(function (o) { return o.status === 'Pending'; }).length;
  var submittedCount = orders.filter(function (o) { return o.status === 'Payment Submitted'; }).length;
  var deliveredCount = orders.filter(function (o) { return o.status === 'Delivered' || o.status === 'Verified' || o.status === 'Completed'; }).length;

  var html = '';
  html += '<div class="page-header">';
  html += '  <div>';
  html += '    <h1 class="page-title">📦 Customer Orders</h1>';
  html += '    <p class="page-desc">Track buyer purchases, verify mobile banking TxIDs, and process shipments.</p>';
  html += '  </div>';
  html += '</div>';

  // Search & Filter Bar
  html += '<div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;align-items:center">';
  html += '  <input type="text" class="form-input" style="max-width:320px" placeholder="Search by Order ID, Phone, TxID..." value="' + escapeHtml(ADMIN_STATE.orderSearchQuery) + '" oninput="ADMIN_STATE.orderSearchQuery=this.value;renderCurrentTab()">';
  html += '</div>';

  // Filter Pills
  html += '<div class="order-filter-pills">';
  html += '  <button class="order-pill ' + (filter === 'all' ? 'active' : '') + '" onclick="filterOrders(\'all\')">All (' + orders.length + ')</button>';
  html += '  <button class="order-pill ' + (filter === 'submitted' ? 'active' : '') + '" onclick="filterOrders(\'submitted\')">Payment Submitted (' + submittedCount + ')</button>';
  html += '  <button class="order-pill ' + (filter === 'pending' ? 'active' : '') + '" onclick="filterOrders(\'pending\')">Pending (' + pendingCount + ')</button>';
  html += '  <button class="order-pill ' + (filter === 'processing' ? 'active' : '') + '" onclick="filterOrders(\'processing\')">Processing</button>';
  html += '  <button class="order-pill ' + (filter === 'delivered' ? 'active' : '') + '" onclick="filterOrders(\'delivered\')">Delivered / Completed (' + deliveredCount + ')</button>';
  html += '  <button class="order-pill ' + (filter === 'cancelled' ? 'active' : '') + '" onclick="filterOrders(\'cancelled\')">Cancelled</button>';
  html += '</div>';

  // Orders Table Card
  html += '<div class="card">';
  html += '  <div class="table-responsive">';
  html += '    <table class="data-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th>ORDER ID</th>';
  html += '          <th>CUSTOMER</th>';
  html += '          <th>ITEMS PURCHASED</th>';
  html += '          <th>TOTAL</th>';
  html += '          <th>PAYMENT / TXID</th>';
  html += '          <th>STATUS</th>';
  html += '          <th>DATE</th>';
  html += '          <th style="text-align:right">ACTIONS</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  if (filtered.length === 0) {
    html += '<tr><td colspan="8" style="text-align:center;padding:36px;color:#94a3b8">No orders matching this filter.</td></tr>';
  } else {
    filtered.forEach(function (ord) {
      var itemsDesc = '';
      if (Array.isArray(ord.items)) {
        itemsDesc = ord.items.map(function (it) {
          return escapeHtml(it.name || 'Product') + (it.optionName ? ' (' + escapeHtml(it.optionName) + ')' : '') + ' ×' + (it.quantity || 1);
        }).join(', ');
      } else {
        itemsDesc = 'Product Order';
      }

      var statusClass = getStatusClass(ord.status);
      var dateStr = ord.createdAt ? new Date(ord.createdAt).toLocaleDateString() + ' ' + new Date(ord.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recent';
      var amt = ord.total || 0;

      html += '<tr>';
      html += '  <td><strong style="font-family:monospace;color:#0f172a">' + escapeHtml(ord.id) + '</strong></td>';
      html += '  <td>';
      html += '    <div style="font-weight:600">' + escapeHtml(ord.customerName || 'Anonymous') + '</div>';
      html += '    <div style="font-size:0.8rem;color:#64748b">📞 ' + escapeHtml(ord.customerPhone || 'N/A') + '</div>';
      if (ord.customerEmail) html += '    <div style="font-size:0.75rem;color:#94a3b8">✉️ ' + escapeHtml(ord.customerEmail) + '</div>';
      html += '  </td>';
      html += '  <td style="max-width:200px;font-size:0.85rem">' + itemsDesc + '</td>';
      html += '  <td><strong style="color:#059669">' + cur + amt + '</strong></td>';
      html += '  <td>';
      html += '    <div style="font-weight:600">' + escapeHtml(ord.paymentMethod || 'bKash') + '</div>';
      if (ord.transactionId) {
        html += '    <div style="font-size:0.8rem;color:#059669;font-family:monospace">TxID: ' + escapeHtml(ord.transactionId) + ' <button class="copy-btn" onclick="navigator.clipboard.writeText(\'' + escapeHtml(ord.transactionId) + '\');showToast(\'TxID copied!\',\'success\')">Copy</button></div>';
      } else {
        html += '    <div style="font-size:0.75rem;color:#d97706">TxID Pending</div>';
      }
      html += '  </td>';
      html += '  <td><span class="badge-status ' + statusClass + '">' + escapeHtml(ord.status || 'Pending') + '</span></td>';
      html += '  <td style="font-size:0.8rem;color:#64748b">' + dateStr + '</td>';
      html += '  <td style="text-align:right;white-space:nowrap">';
      html += '    <button class="table-action-edit" onclick="viewOrderDetails(\'' + escapeHtml(ord.id) + '\')">Details</button>';
      if (statusClass !== 'completed') {
        html += '    <button class="table-action-edit" style="color:#059669" onclick="updateOrderStatus(\'' + escapeHtml(ord.id) + '\', \'Verified\')">Verify</button>';
      }
      html += '    <button class="table-action-delete" onclick="deleteOrder(\'' + escapeHtml(ord.id) + '\')">Delete</button>';
      html += '  </td>';
      html += '</tr>';
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  container.innerHTML = html;
}

function filterOrders(filterName) {
  ADMIN_STATE.orderFilter = filterName;
  renderCurrentTab();
}

function updateOrderStatus(orderId, newStatus) {
  var ord = ADMIN_STATE.data.orders.find(function (o) { return String(o.id) === String(orderId); });
  if (ord) {
    ord.status = newStatus;
    saveLocalState();
    adminFetch('../api/api.php?action=update_order_status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: orderId, status: newStatus })
    }).catch(function () { });

    showToast('Order ' + orderId + ' updated to ' + newStatus, 'success');
    renderCurrentTab();
  }
}

function deleteOrder(orderId) {
  if (!confirm('Are you sure you want to delete order ' + orderId + '?')) return;
  ADMIN_STATE.data.orders = ADMIN_STATE.data.orders.filter(function (o) { return String(o.id) !== String(orderId); });
  saveLocalState();
  adminFetch('../api/api.php?action=delete_order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId: orderId })
  }).catch(function () { });

  showToast('Order deleted', 'info');
  renderCurrentTab();
}

function viewOrderDetails(orderId) {
  var ord = ADMIN_STATE.data.orders.find(function (o) { return String(o.id) === String(orderId); });
  if (!ord) return;
  var cur = ADMIN_STATE.settings.currency || '৳';

  var itemsHtml = '';
  var subtotal = 0;
  if (Array.isArray(ord.items)) {
    ord.items.forEach(function (it) {
      var itPrice = parseFloat(it.price) || 0;
      var qty = parseInt(it.quantity, 10) || 1;
      var sub = itPrice * qty;
      subtotal += sub;
      itemsHtml += '<div class="invoice-row">';
      itemsHtml += '  <div><strong>' + escapeHtml(it.name || 'Product') + '</strong>' + (it.optionName ? ' — ' + escapeHtml(it.optionName) : '') + ' <small>×' + qty + '</small></div>';
      itemsHtml += '  <div>' + cur + sub + '</div>';
      itemsHtml += '</div>';
    });
  }

  var html = '';
  html += '<div class="admin-modal-overlay open" id="orderModal" onclick="handleModalBackdropClick(event, \'orderModal\')">';
  html += '  <div class="admin-modal-content">';
  html += '    <div class="modal-header">';
  html += '      <h3 class="modal-title">📄 Order Invoice (' + escapeHtml(ord.id) + ')</h3>';
  html += '      <button class="modal-close" onclick="closeModal(\'orderModal\')">✕</button>';
  html += '    </div>';
  html += '    <div class="modal-body">';

  html += '      <div class="invoice-box">';
  html += '        <div class="invoice-row"><span>Customer Name:</span> <strong>' + escapeHtml(ord.customerName || 'N/A') + '</strong></div>';
  html += '        <div class="invoice-row"><span>Phone Number:</span> <strong>' + escapeHtml(ord.customerPhone || 'N/A') + '</strong></div>';
  html += '        <div class="invoice-row"><span>Email Address:</span> <strong>' + escapeHtml(ord.customerEmail || 'N/A') + '</strong></div>';
  if (ord.address) html += '        <div class="invoice-row"><span>Shipping Address:</span> <strong>' + escapeHtml(ord.address) + '</strong></div>';
  html += '        <div class="invoice-row"><span>Payment Method:</span> <strong>' + escapeHtml(ord.paymentMethod || 'bKash') + '</strong></div>';
  html += '        <div class="invoice-row"><span>Transaction ID (TxID):</span> <strong style="color:#059669;font-family:monospace">' + escapeHtml(ord.transactionId || 'Awaiting submission') + '</strong></div>';
  html += '        <div class="invoice-row"><span>Order Date:</span> <span>' + (ord.createdAt ? new Date(ord.createdAt).toLocaleString() : 'N/A') + '</span></div>';
  html += '      </div>';

  html += '      <h4 style="margin-bottom:10px;font-size:0.95rem">Purchased Items:</h4>';
  html += '      <div class="invoice-box" style="margin-bottom:16px">';
  html += itemsHtml;
  html += '        <div class="invoice-row" style="font-weight:700;font-size:1.05rem;color:#0f172a;border-top:2px solid #cbd5e1;margin-top:6px;padding-top:10px">';
  html += '          <span>Total Amount:</span>';
  html += '          <span>' + cur + (ord.total || subtotal) + '</span>';
  html += '        </div>';
  html += '      </div>';

  html += '      <div class="form-group">';
  html += '        <label class="form-label">Update Order Status:</label>';
  html += '        <select id="modalStatusSelect" class="form-input" onchange="updateOrderStatus(\'' + escapeHtml(ord.id) + '\', this.value);closeModal(\'orderModal\')">';
  var statuses = ['Pending', 'Payment Submitted', 'Processing', 'Shipped', 'Delivered', 'Verified', 'Completed', 'Cancelled'];
  statuses.forEach(function (st) {
    html += '<option value="' + st + '"' + (ord.status === st ? ' selected' : '') + '>' + st + '</option>';
  });
  html += '        </select>';
  html += '      </div>';

  html += '    </div>';
  html += '    <div class="modal-footer">';
  html += '      <button class="btn-sm" onclick="window.print()">🖨️ Print Invoice</button>';
  html += '      <button class="btn-dark" onclick="closeModal(\'orderModal\')">Close</button>';
  html += '    </div>';
  html += '  </div>';
  html += '</div>';

  removeModal('orderModal');
  document.body.insertAdjacentHTML('beforeend', html);
}

// ═══════════════════════════════════════════
// VIEW 3: PRODUCTS CATALOG
// ═══════════════════════════════════════════
function getAllCategories() {
  var catSet = {};
  if (Array.isArray(ADMIN_STATE.settings.customCategories)) {
    ADMIN_STATE.settings.customCategories.forEach(function (c) {
      if (c && c.trim()) catSet[c.trim()] = true;
    });
  }
  (ADMIN_STATE.data.products || []).forEach(function (p) {
    if (p.category && p.category.trim()) catSet[p.category.trim()] = true;
  });
  var cats = Object.keys(catSet);
  return cats;
}

function renderProducts(container) {
  var list = ADMIN_STATE.data.products || [];
  var filter = ADMIN_STATE.productCategoryFilter || 'all';
  var query = (ADMIN_STATE.productSearchQuery || '').toLowerCase();
  var cur = ADMIN_STATE.settings.currency || '৳';

  var categories = getAllCategories();
  var filtered = list.filter(function (p) {
    if (filter !== 'all' && p.category !== filter) return false;
    if (query && (p.name || '').toLowerCase().indexOf(query) === -1 && (p.description || '').toLowerCase().indexOf(query) === -1) return false;
    return true;
  });

  var html = '';
  html += '<div class="page-header">';
  html += '  <div>';
  html += '    <h1 class="page-title">🛍️ Products Catalog</h1>';
  html += '    <p class="page-desc">Manage store products, set pricing, upload pictures, and update stock counts.</p>';
  html += '  </div>';
  html += '  <div style="display:flex;gap:10px">';
  html += '    <button class="btn-sm" onclick="openCategoryManagerModal()" style="display:inline-flex;align-items:center;gap:6px">🏷️ Categories</button>';
  html += '    <button class="btn-dark" onclick="openProductModal()">+ Add New Product</button>';
  html += '  </div>';
  html += '</div>';

  // Search input
  html += '<div style="margin-bottom:16px">';
  html += '  <input type="text" class="form-input" style="max-width:320px" placeholder="Search products..." value="' + escapeHtml(ADMIN_STATE.productSearchQuery) + '" oninput="ADMIN_STATE.productSearchQuery=this.value;renderCurrentTab()">';
  html += '</div>';

  // Category Filter Pills
  html += '<div class="order-filter-pills">';
  html += '  <button class="order-pill ' + (filter === 'all' ? 'active' : '') + '" onclick="filterProductsCategory(\'all\')">All Products (' + list.length + ')</button>';
  categories.forEach(function (cat) {
    var count = list.filter(function (p) { return p.category === cat; }).length;
    html += '  <button class="order-pill ' + (filter === cat ? 'active' : '') + '" onclick="filterProductsCategory(\'' + escapeHtml(cat) + '\')">' + escapeHtml(cat) + ' (' + count + ')</button>';
  });
  html += '</div>';

  // Products Table
  html += '<div class="card">';
  html += '  <div class="table-responsive">';
  html += '    <table class="data-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th>IMAGE</th>';
  html += '          <th>PRODUCT NAME</th>';
  html += '          <th>CATEGORY</th>';
  html += '          <th>PRICE</th>';
  html += '          <th>STOCK</th>';
  html += '          <th>FEATURED</th>';
  html += '          <th style="text-align:right">ACTIONS</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  if (filtered.length === 0) {
    html += '<tr><td colspan="7" style="text-align:center;padding:40px;color:#94a3b8">';
    html += '  <div style="font-size:2.5rem;margin-bottom:10px">📦</div>';
    html += '  <div style="font-size:1.1rem;font-weight:600;color:#0f172a">No Products Found (0)</div>';
    html += '  <p style="margin:8px 0 16px 0;font-size:0.9rem">You currently have 0 products. Click the button below to add your first product!</p>';
    html += '  <button class="btn-dark" onclick="openProductModal()">+ Add First Product</button>';
    html += '</td></tr>';
  } else {
    filtered.forEach(function (p) {
      var img = p.imageUrl || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop';
      var stock = p.stock !== undefined ? p.stock : 99;
      var stockBadge = stock > 5
        ? '<span class="item-badge" style="background:#dcfce7;color:#15803d">' + stock + ' in stock</span>'
        : (stock > 0
          ? '<span class="item-badge" style="background:#fef3c7;color:#b45309">Low: ' + stock + '</span>'
          : '<span class="item-badge" style="background:#fee2e2;color:#b91c1c">Out of stock</span>');

      var imgCount = (Array.isArray(p.images) && p.images.length > 0) ? p.images.length : (p.imageUrl || p.image ? 1 : 0);
      var vidCount = (Array.isArray(p.videos) && p.videos.length > 0) ? p.videos.length : (p.videoUrl ? 1 : 0);
      var mediaBadges = '';
      if (imgCount > 0) {
        mediaBadges += '<span style="font-size:0.72rem;background:#e0e7ff;color:#4338ca;padding:2px 6px;border-radius:4px;font-weight:600">📸 ' + imgCount + ' pic' + (imgCount > 1 ? 's' : '') + '</span> ';
      }
      if (vidCount > 0) {
        mediaBadges += '<span style="font-size:0.72rem;background:#fee2e2;color:#b91c1c;padding:2px 6px;border-radius:4px;font-weight:600">🎥 ' + vidCount + ' vid' + (vidCount > 1 ? 's' : '') + '</span>';
      }

      html += '<tr>';
      html += '  <td><img src="' + escapeHtml(img) + '" style="width:48px;height:40px;border-radius:6px;object-fit:cover" onerror="this.src=\'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop\'"></td>';
      html += '  <td><strong style="color:#0f172a">' + escapeHtml(p.name) + '</strong><br><small style="color:#94a3b8">ID: ' + escapeHtml(p.id) + '</small>' + (mediaBadges ? '<div style="margin-top:4px">' + mediaBadges + '</div>' : '') + '</td>';
      html += '  <td><span class="item-badge">' + escapeHtml(p.category || 'General') + '</span></td>';
      html += '  <td><strong style="color:#059669">' + cur + (p.price || 0) + '</strong></td>';
      html += '  <td>' + stockBadge + '</td>';
      html += '  <td>' + (p.featured ? '<span class="item-badge" style="background:#dcfce7;color:#15803d">Yes</span>' : '<span class="item-badge">No</span>') + '</td>';
      html += '  <td style="text-align:right">';
      html += '    <button class="table-action-edit" onclick="openProductModal(\'' + escapeHtml(p.id) + '\')">Edit</button>';
      html += '    <button class="table-action-delete" onclick="deleteProductItem(\'' + escapeHtml(p.id) + '\')">Delete</button>';
      html += '  </td>';
      html += '</tr>';
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  container.innerHTML = html;
}

function filterProductsCategory(cat) {
  ADMIN_STATE.productCategoryFilter = cat;
  renderCurrentTab();
}

var CURRENT_PROD_MEDIA = {
  images: [],
  videos: []
};

function openProductModal(id) {
  var item = id ? ADMIN_STATE.data.products.find(function (p) { return p.id === id; }) : null;
  var title = item ? 'Edit Product' : 'Add New Product';
  var categories = getAllCategories();

  CURRENT_PROD_MEDIA.images = [];
  CURRENT_PROD_MEDIA.videos = [];

  if (item) {
    if (Array.isArray(item.images) && item.images.length > 0) {
      CURRENT_PROD_MEDIA.images = item.images.slice();
    } else if (item.imageUrl || item.image) {
      CURRENT_PROD_MEDIA.images = [item.imageUrl || item.image];
    }

    if (Array.isArray(item.videos) && item.videos.length > 0) {
      CURRENT_PROD_MEDIA.videos = item.videos.map(function (v) {
        return typeof v === 'string' ? { url: v, title: 'Demo Video' } : { url: v.url, title: v.title || 'Demo Video' };
      });
    } else if (item.videoUrl) {
      CURRENT_PROD_MEDIA.videos = [{ url: item.videoUrl, title: 'Official Gameplay Demo' }];
    }
  }

  var html = '';
  html += '<div class="admin-modal-overlay open" id="productModal" onclick="handleModalBackdropClick(event, \'productModal\')">';
  html += '  <div class="admin-modal-content" style="max-width:760px">';
  html += '    <div class="modal-header">';
  html += '      <h3 class="modal-title">' + title + '</h3>';
  html += '      <button class="modal-close" onclick="closeModal(\'productModal\')">✕</button>';
  html += '    </div>';
  html += '    <form onsubmit="handleSaveProduct(event)">';
  html += '      <input type="hidden" id="prodId" value="' + (item ? item.id : '') + '">';
  html += '      <div class="modal-body">';

  html += '        <div class="form-group">';
  html += '          <label class="form-label">Product Name *</label>';
  html += '          <input type="text" id="prodName" class="form-input" required value="' + (item ? escapeHtml(item.name || item.title || '') : '') + '" placeholder="e.g. Premium VIP Panel">';
  html += '        </div>';

  html += '        <div class="form-group">';
  html += '          <label class="form-label">Category *</label>';
  html += '          <select id="prodCategorySelect" class="form-input" onchange="handleProdCatSelectChange(this.value)">';
  categories.forEach(function (c) {
    html += '<option value="' + escapeHtml(c) + '"' + (item && item.category === c ? ' selected' : '') + '>' + escapeHtml(c) + '</option>';
  });
  html += '            <option value="__new__">➕ Create New Category...</option>';
  html += '          </select>';
  html += '          <input type="text" id="prodNewCatInput" class="form-input" style="display:none;margin-top:8px" placeholder="Type new category name...">';
  html += '        </div>';

  html += '        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Regular Price (৳) *</label>';
  html += '            <input type="number" id="prodPrice" class="form-input" required value="' + (item ? item.price : '') + '" placeholder="e.g. 500" oninput="autoCalcOptions()">';
  html += '          </div>';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Permanent / Special Price (৳)</label>';
  html += '            <input type="number" id="prodPermPrice" class="form-input" value="' + (item && item.permPrice ? item.permPrice : '') + '" placeholder="e.g. 1500" oninput="autoCalcOptions()">';
  html += '          </div>';
  html += '        </div>';

  html += '        <div class="form-group">';
  html += '          <label class="form-label">Pricing Plans / Options</label>';
  html += '          <input type="text" id="prodOptions" class="form-input" value="' + (item ? escapeHtml(item.options || '') : '') + '" placeholder="1 Month:500, Permanent:1500">';
  html += '          <small style="color:#94a3b8;font-size:0.75rem">Format: Plan1:Price, Plan2:Price</small>';
  html += '        </div>';

  // MULTI-PICTURES GALLERY SECTION
  html += '        <div class="multi-media-section">';
  html += '          <div class="multi-media-header">';
  html += '            <span class="multi-media-title">📸 Product Pictures Gallery</span>';
  html += '            <span class="badge" id="prodMediaImgCount" style="background:#e0e7ff;color:#4338ca">' + CURRENT_PROD_MEDIA.images.length + ' Pictures</span>';
  html += '          </div>';
  html += '          <p style="font-size:0.8rem;color:#64748b;margin-bottom:10px">Upload multiple screenshots, covers, and showcase pictures at once. First picture is the main store cover.</p>';
  html += '          <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;flex-wrap:wrap">';
  html += '            <input type="file" id="prodMultiImgPicker" accept="image/*" multiple style="display:none" onchange="handleProductMultiImagePick(event)">';
  html += '            <button type="button" class="btn-sm btn-dark" onclick="document.getElementById(\'prodMultiImgPicker\').click()">📁 Upload Multiple Pictures</button>';
  html += '            <span id="prodImgUploadStatus" style="font-size:0.8rem;color:#64748b"></span>';
  html += '          </div>';
  html += '          <div style="display:flex;gap:8px;margin-bottom:10px">';
  html += '            <input type="text" id="prodAddImageUrlInput" class="form-input" style="flex:1" placeholder="Or paste picture URL (uploads/pic_... or https://...)">';
  html += '            <button type="button" class="btn-sm" onclick="handleAddProductImageUrl()">+ Add Picture</button>';
  html += '          </div>';
  html += '          <div class="media-thumbs-grid" id="prodMediaThumbsGrid">';
  html += '          </div>';
  html += '        </div>';

  // MULTI-VIDEOS GALLERY SECTION
  html += '        <div class="multi-media-section">';
  html += '          <div class="multi-media-header">';
  html += '            <span class="multi-media-title">🎥 Product Gameplay & Demo Videos</span>';
  html += '            <span class="badge" id="prodMediaVidCount" style="background:#fef3c7;color:#92400e">' + CURRENT_PROD_MEDIA.videos.length + ' Videos</span>';
  html += '          </div>';
  html += '          <p style="font-size:0.8rem;color:#64748b;margin-bottom:10px">Upload multiple gameplay demonstrations, tutorial clips, and feature walk-throughs (MP4/WebM up to 150MB each).</p>';
  html += '          <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;flex-wrap:wrap">';
  html += '            <input type="file" id="prodMultiVideoPicker" accept="video/mp4,video/webm,video/ogg,video/quicktime,video/*" multiple style="display:none" onchange="handleProductMultiVideoPick(event)">';
  html += '            <button type="button" class="btn-sm btn-dark" onclick="document.getElementById(\'prodMultiVideoPicker\').click()">🎬 Upload Multiple Videos</button>';
  html += '            <span id="prodVideoUploadStatus" style="font-size:0.8rem;color:#64748b"></span>';
  html += '          </div>';
  html += '          <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">';
  html += '            <input type="text" id="prodAddVideoUrlInput" class="form-input" style="flex:2;min-width:200px" placeholder="Video URL (uploads/video_... or https://...)">';
  html += '            <input type="text" id="prodAddVideoTitleInput" class="form-input" style="flex:1;min-width:140px" placeholder="Video Title (Optional)">';
  html += '            <button type="button" class="btn-sm" onclick="handleAddProductVideoUrl()">+ Add Video</button>';
  html += '          </div>';
  html += '          <div class="video-items-list" id="prodMediaVideosList">';
  html += '          </div>';
  html += '        </div>';

  html += '        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Original Price (৳)</label>';
  html += '            <input type="number" id="prodOrigPrice" class="form-input" value="' + (item && item.originalPrice ? item.originalPrice : '') + '" placeholder="e.g. 1500 (Discounted from)">';
  html += '          </div>';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Badge Label</label>';
  html += '            <input type="text" id="prodBadge" class="form-input" value="' + (item && item.badge ? escapeHtml(item.badge) : '') + '" placeholder="e.g. Best Seller, Hot, VIP">';
  html += '          </div>';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Featured on Home?</label>';
  html += '            <select id="prodFeatured" class="form-input">';
  html += '              <option value="yes"' + (item && item.featured ? ' selected' : '') + '>Yes (Showcase)</option>';
  html += '              <option value="no"' + (!item || !item.featured ? ' selected' : '') + '>No</option>';
  html += '            </select>';
  html += '          </div>';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Stock Count</label>';
  html += '            <input type="number" id="prodStock" class="form-input" value="' + (item && item.stock !== undefined ? item.stock : 999) + '">';
  html += '          </div>';
  html += '        </div>';

  html += '        <div class="form-group">';
  html += '          <label class="form-label">Description & Features</label>';
  html += '          <textarea id="prodDesc" class="form-input" rows="3" placeholder="Enter key product features...">' + (item ? escapeHtml(item.description) : '') + '</textarea>';
  html += '        </div>';

  html += '      </div>';
  html += '      <div class="modal-footer">';
  html += '        <button type="button" class="btn-sm" onclick="closeModal(\'productModal\')">Cancel</button>';
  html += '        <button type="submit" class="btn-dark">Save Product</button>';
  html += '      </div>';
  html += '    </form>';
  html += '  </div>';
  html += '</div>';

  removeModal('productModal');
  document.body.insertAdjacentHTML('beforeend', html);
  renderProductMediaPreviews();
}

function handleProdCatSelectChange(val) {
  var newCatInput = document.getElementById('prodNewCatInput');
  if (!newCatInput) return;
  if (val === '__new__') {
    newCatInput.style.display = 'block';
    newCatInput.required = true;
    newCatInput.focus();
  } else {
    newCatInput.style.display = 'none';
    newCatInput.required = false;
  }
}

function autoCalcOptions() {
  var monthly = parseFloat(document.getElementById('prodPrice').value);
  var permInput = document.getElementById('prodPermPrice');
  var perm = parseFloat(permInput.value);

  if (!isNaN(monthly) && monthly > 0) {
    if (isNaN(perm) || perm <= 0) {
      perm = monthly * 3;
      permInput.value = perm;
    }
    document.getElementById('prodOptions').value = '1 Month:' + monthly + ', Permanent:' + perm;
  }
}

function renderProductMediaPreviews() {
  // Render Image Thumbnails
  var imgContainer = document.getElementById('prodMediaThumbsGrid');
  var imgCountEl = document.getElementById('prodMediaImgCount');
  if (imgContainer) {
    if (CURRENT_PROD_MEDIA.images.length === 0) {
      imgContainer.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:16px;color:#94a3b8;font-size:0.85rem">No pictures attached yet. Upload or add URLs above.</div>';
    } else {
      var html = '';
      CURRENT_PROD_MEDIA.images.forEach(function (url, idx) {
        var isCover = (idx === 0);
        html += '<div class="media-thumb-item ' + (isCover ? 'is-cover' : '') + '">';
        html += '  <img src="' + escapeHtml(url) + '" alt="Product picture ' + (idx + 1) + '" onerror="this.src=\'../assets/favicon.svg\'" onclick="window.open(\'' + escapeHtml(url) + '\', \'_blank\')" style="cursor:pointer" title="Click to view full picture">';
        if (isCover) {
          html += '  <span class="thumb-cover-badge">★ Cover</span>';
        } else {
          html += '  <button type="button" class="thumb-set-cover-btn" onclick="setProductCoverImage(' + idx + ')">Set as Cover</button>';
        }
        html += '  <button type="button" class="thumb-btn-remove" title="Remove picture" onclick="removeProductImage(' + idx + ')">✕</button>';
        if (CURRENT_PROD_MEDIA.images.length > 1) {
          html += '  <div class="thumb-reorder-bar">';
          if (idx > 0) {
            html += '    <button type="button" class="thumb-reorder-btn" title="Move Left" onclick="moveProductImage(' + idx + ', -1)">◀</button>';
          }
          if (idx < CURRENT_PROD_MEDIA.images.length - 1) {
            html += '    <button type="button" class="thumb-reorder-btn" title="Move Right" onclick="moveProductImage(' + idx + ', 1)">▶</button>';
          }
          html += '  </div>';
        }
        html += '</div>';
      });
      imgContainer.innerHTML = html;
    }
    if (imgCountEl) {
      imgCountEl.textContent = CURRENT_PROD_MEDIA.images.length + ' Picture' + (CURRENT_PROD_MEDIA.images.length === 1 ? '' : 's');
    }
  }

  // Render Video Cards
  var vidContainer = document.getElementById('prodMediaVideosList');
  var vidCountEl = document.getElementById('prodMediaVidCount');
  if (vidContainer) {
    if (CURRENT_PROD_MEDIA.videos.length === 0) {
      vidContainer.innerHTML = '<div style="text-align:center;padding:16px;color:#94a3b8;font-size:0.85rem">No demo videos attached yet. Upload or add URLs above.</div>';
    } else {
      var html = '';
      CURRENT_PROD_MEDIA.videos.forEach(function (vid, idx) {
        html += '<div class="video-item-card">';
        html += '  <div class="video-item-preview">';
        html += '    <video src="' + escapeHtml(vid.url) + '" controls preload="metadata"></video>';
        html += '  </div>';
        html += '  <div class="video-item-info">';
        html += '    <input type="text" value="' + escapeHtml(vid.title || ('Demo Video #' + (idx + 1))) + '" placeholder="Video Title (e.g. Gameplay Showcase)" oninput="updateProductVideoTitle(' + idx + ', this.value)">';
        html += '    <div style="font-size:0.75rem;color:#64748b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(vid.url) + '</div>';
        html += '  </div>';
        html += '  <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">';
        if (idx > 0) {
          html += '    <button type="button" class="btn-sm" style="padding:2px 8px;font-size:0.75rem" title="Move Up" onclick="moveProductVideo(' + idx + ', -1)">▲</button>';
        }
        if (idx < CURRENT_PROD_MEDIA.videos.length - 1) {
          html += '    <button type="button" class="btn-sm" style="padding:2px 8px;font-size:0.75rem" title="Move Down" onclick="moveProductVideo(' + idx + ', 1)">▼</button>';
        }
        html += '    <button type="button" class="btn-sm" style="background:#fee2e2;color:#b91c1c;border-color:#fca5a5;padding:2px 8px;font-size:0.75rem" onclick="removeProductVideo(' + idx + ')">🗑️</button>';
        html += '  </div>';
        html += '</div>';
      });
      vidContainer.innerHTML = html;
    }
    if (vidCountEl) {
      vidCountEl.textContent = CURRENT_PROD_MEDIA.videos.length + ' Video' + (CURRENT_PROD_MEDIA.videos.length === 1 ? '' : 's');
    }
  }
}

function moveProductImage(idx, direction) {
  var newIdx = idx + direction;
  if (newIdx >= 0 && newIdx < CURRENT_PROD_MEDIA.images.length) {
    var item = CURRENT_PROD_MEDIA.images.splice(idx, 1)[0];
    CURRENT_PROD_MEDIA.images.splice(newIdx, 0, item);
    renderProductMediaPreviews();
    showToast('Picture order updated!', 'info');
  }
}

function moveProductVideo(idx, direction) {
  var newIdx = idx + direction;
  if (newIdx >= 0 && newIdx < CURRENT_PROD_MEDIA.videos.length) {
    var item = CURRENT_PROD_MEDIA.videos.splice(idx, 1)[0];
    CURRENT_PROD_MEDIA.videos.splice(newIdx, 0, item);
    renderProductMediaPreviews();
    showToast('Video order updated!', 'info');
  }
}

function handleProductMultiImagePick(e) {
  var files = Array.from(e.target.files);
  if (!files || files.length === 0) return;
  var status = document.getElementById('prodImgUploadStatus');
  if (status) status.textContent = 'Uploading ' + files.length + ' picture' + (files.length > 1 ? 's' : '') + '...';

  var uploads = files.map(function (file) {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('admin_token', getAdminToken());
    return adminFetch('../api/api.php?action=upload', { method: 'POST', body: formData })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.url) {
          CURRENT_PROD_MEDIA.images.push('../' + res.url);
        } else if (res && res.message) {
          showToast('Image upload failed: ' + res.message, 'error');
        }
      });
  });

  Promise.all(uploads).then(function () {
    renderProductMediaPreviews();
    if (status) status.textContent = 'Uploaded ' + files.length + ' picture' + (files.length > 1 ? 's' : '') + ' successfully! 📸';
    showToast(files.length + ' pictures added to product gallery!', 'success');
  }).catch(function (err) {
    showToast('Failed to upload some pictures: ' + err.message, 'error');
  });
}

function handleAddProductImageUrl() {
  var input = document.getElementById('prodAddImageUrlInput');
  if (!input) return;
  var val = input.value.trim();
  if (!val) return;
  CURRENT_PROD_MEDIA.images.push(val);
  input.value = '';
  renderProductMediaPreviews();
  showToast('Picture added to gallery!', 'success');
}

function setProductCoverImage(idx) {
  if (idx > 0 && idx < CURRENT_PROD_MEDIA.images.length) {
    var cover = CURRENT_PROD_MEDIA.images.splice(idx, 1)[0];
    CURRENT_PROD_MEDIA.images.unshift(cover);
    renderProductMediaPreviews();
    showToast('Primary cover picture updated! ★', 'info');
  }
}

function removeProductImage(idx) {
  if (idx >= 0 && idx < CURRENT_PROD_MEDIA.images.length) {
    CURRENT_PROD_MEDIA.images.splice(idx, 1);
    renderProductMediaPreviews();
  }
}

function handleProductMultiVideoPick(e) {
  var files = Array.from(e.target.files);
  if (!files || files.length === 0) return;
  var status = document.getElementById('prodVideoUploadStatus');
  if (status) status.textContent = 'Uploading ' + files.length + ' video' + (files.length > 1 ? 's' : '') + ' (up to 150MB each)...';

  var uploads = files.map(function (file) {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('admin_token', getAdminToken());
    return adminFetch('../api/api.php?action=upload', { method: 'POST', body: formData })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.url) {
          var cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
          CURRENT_PROD_MEDIA.videos.push({
            url: '../' + res.url,
            title: cleanName || ('Gameplay Demo #' + (CURRENT_PROD_MEDIA.videos.length + 1))
          });
        } else if (res && res.message) {
          showToast('Video upload failed: ' + res.message, 'error');
        }
      });
  });

  Promise.all(uploads).then(function () {
    renderProductMediaPreviews();
    if (status) status.textContent = 'Uploaded ' + files.length + ' video' + (files.length > 1 ? 's' : '') + ' successfully! 🎬';
    showToast(files.length + ' videos added to product demo list!', 'success');
  }).catch(function (err) {
    showToast('Failed to upload some videos: ' + err.message, 'error');
  });
}

function handleAddProductVideoUrl() {
  var urlInput = document.getElementById('prodAddVideoUrlInput');
  var titleInput = document.getElementById('prodAddVideoTitleInput');
  if (!urlInput) return;
  var url = urlInput.value.trim();
  if (!url) return;
  var title = (titleInput ? titleInput.value.trim() : '') || ('Demo Video #' + (CURRENT_PROD_MEDIA.videos.length + 1));
  CURRENT_PROD_MEDIA.videos.push({ url: url, title: title });
  urlInput.value = '';
  if (titleInput) titleInput.value = '';
  renderProductMediaPreviews();
  showToast('Video added to product demo list!', 'success');
}

function updateProductVideoTitle(idx, title) {
  if (CURRENT_PROD_MEDIA.videos[idx]) {
    CURRENT_PROD_MEDIA.videos[idx].title = title;
  }
}

function removeProductVideo(idx) {
  if (idx >= 0 && idx < CURRENT_PROD_MEDIA.videos.length) {
    CURRENT_PROD_MEDIA.videos.splice(idx, 1);
    renderProductMediaPreviews();
  }
}

function handleSaveProduct(e) {
  e.preventDefault();
  var id = document.getElementById('prodId').value;
  var name = document.getElementById('prodName').value.trim();
  var catSelect = document.getElementById('prodCategorySelect').value;
  var category = catSelect;
  if (catSelect === '__new__') {
    category = document.getElementById('prodNewCatInput').value.trim() || 'General';
  }

  if (!Array.isArray(ADMIN_STATE.settings.customCategories)) ADMIN_STATE.settings.customCategories = [];
  if (category && ADMIN_STATE.settings.customCategories.indexOf(category) === -1) {
    ADMIN_STATE.settings.customCategories.push(category);
    syncSettingsToServer({ customCategories: ADMIN_STATE.settings.customCategories });
  }

  var monthlyPrice = parseFloat(document.getElementById('prodPrice').value) || 0;
  var permPrice = parseFloat(document.getElementById('prodPermPrice').value) || (monthlyPrice * 3);
  var origPrice = document.getElementById('prodOrigPrice') ? (parseFloat(document.getElementById('prodOrigPrice').value) || 0) : 0;
  var options = document.getElementById('prodOptions').value.trim() || ('1 Month:' + monthlyPrice + ', Permanent:' + permPrice);

  var images = CURRENT_PROD_MEDIA.images.slice();
  var videos = CURRENT_PROD_MEDIA.videos.slice();
  var imageUrl = images.length > 0 ? images[0] : 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop';
  var videoUrl = videos.length > 0 ? videos[0].url : '';
  var badge = document.getElementById('prodBadge') ? document.getElementById('prodBadge').value.trim() : '';
  var isFeatured = document.getElementById('prodFeatured').value === 'yes';
  var stock = parseInt(document.getElementById('prodStock').value, 10);
  if (isNaN(stock)) stock = 999;
  var description = document.getElementById('prodDesc').value.trim();

  if (!id) id = 'P' + Math.floor(Math.random() * 8999 + 1000);

  var parsedOptions = [];
  if (options) {
    options.split(',').forEach(function (part) {
      var opt = part.split(':');
      if (opt.length === 2) {
        parsedOptions.push({ name: opt[0].trim(), price: parseFloat(opt[1].trim()) || 0 });
      }
    });
  }

  var item = {
    id: id,
    name: name,
    title: name,
    category: category,
    price: monthlyPrice,
    originalPrice: origPrice,
    permPrice: permPrice,
    options: options,
    parsedOptions: parsedOptions,
    imageUrl: imageUrl,
    image: imageUrl,
    images: images,
    videoUrl: videoUrl,
    videos: videos,
    badge: badge,
    featured: isFeatured,
    stock: stock,
    description: description,
    rating: 5.0
  };

  var idx = ADMIN_STATE.data.products.findIndex(function (p) { return String(p.id) === String(id); });
  if (idx >= 0) {
    ADMIN_STATE.data.products[idx] = item;
  } else {
    ADMIN_STATE.data.products.unshift(item);
  }

  syncItemToServer('products', item);
  closeModal('productModal');
  showToast('Product and all media saved successfully! 🎉', 'success');
  renderCurrentTab();
}

function deleteProductItem(id) {
  if (!confirm('Are you sure you want to delete this product?')) return;
  ADMIN_STATE.data.products = ADMIN_STATE.data.products.filter(function (p) { return String(p.id) !== String(id); });
  deleteItemFromServer('products', id);
  showToast('Product deleted', 'info');
  renderCurrentTab();
}

// ═══════════════════════════════════════════
// VIEW 4: CATEGORIES MANAGEMENT TAB
// ═══════════════════════════════════════════
function renderCategoriesTab(container) {
  var categories = getAllCategories();
  var products = ADMIN_STATE.data.products || [];

  var html = '';
  html += '<div class="page-header">';
  html += '  <div>';
  html += '    <h1 class="page-title">🏷️ Categories Manager</h1>';
  html += '    <p class="page-desc">Create product categories, organize items, and control customer browsing filters.</p>';
  html += '  </div>';
  html += '  <div>';
  html += '    <button class="btn-dark" onclick="openCategoryManagerModal()">+ Add New Category</button>';
  html += '  </div>';
  html += '</div>';

  html += '<div class="card">';
  html += '  <div class="table-responsive">';
  html += '    <table class="data-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th>CATEGORY NAME</th>';
  html += '          <th>TOTAL PRODUCTS</th>';
  html += '          <th style="text-align:right">ACTIONS</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  if (categories.length === 0) {
    html += '<tr><td colspan="3" style="text-align:center;padding:36px;color:#94a3b8">No categories created yet. Click "+ Add New Category" to create one.</td></tr>';
  } else {
    categories.forEach(function (cat) {
      var count = products.filter(function (p) { return p.category === cat; }).length;
      html += '<tr>';
      html += '  <td><strong style="color:#0f172a;font-size:0.95rem">🏷️ ' + escapeHtml(cat) + '</strong></td>';
      html += '  <td><span class="item-badge">' + count + ' ' + (count === 1 ? 'product' : 'products') + '</span></td>';
      html += '  <td style="text-align:right">';
      html += '    <button class="table-action-edit" onclick="filterProductsCategory(\'' + escapeHtml(cat) + '\');switchTab(\'products\')">View Products</button>';
      html += '    <button class="table-action-delete" onclick="handleDeleteCategory(\'' + escapeHtml(cat) + '\')">Delete</button>';
      html += '  </td>';
      html += '</tr>';
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  container.innerHTML = html;
}

function openCategoryManagerModal() {
  var categories = getAllCategories();
  var products = ADMIN_STATE.data.products || [];

  var html = '';
  html += '<div class="admin-modal-overlay open" id="categoryModal" onclick="handleModalBackdropClick(event, \'categoryModal\')">';
  html += '  <div class="admin-modal-content" style="max-width:540px">';
  html += '    <div class="modal-header">';
  html += '      <h3 class="modal-title">🏷️ Manage Product Categories</h3>';
  html += '      <button class="modal-close" onclick="closeModal(\'categoryModal\')">✕</button>';
  html += '    </div>';
  html += '    <div class="modal-body">';
  html += '      <p style="font-size:0.88rem;color:#64748b;margin-bottom:16px">Add new categories or delete existing ones. Categories organize products on both the store and admin panel.</p>';

  html += '      <div style="display:flex;gap:8px;margin-bottom:20px">';
  html += '        <input type="text" id="newCatModalInput" class="form-input" placeholder="Type category name (e.g. Free Fire, PUBG, Tools)..." style="flex:1" onkeydown="if(event.key===\'Enter\'){event.preventDefault();handleAddCategorySubmit();}">';
  html += '        <button type="button" class="btn-dark" onclick="handleAddCategorySubmit()">+ Add Category</button>';
  html += '      </div>';

  html += '      <div style="font-size:0.85rem;font-weight:600;color:#0f172a;margin-bottom:10px">CURRENT CATEGORIES (' + categories.length + ')</div>';
  html += '      <div style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;background:#f8fafc">';

  if (categories.length === 0) {
    html += '      <div style="padding:24px;text-align:center;color:#94a3b8;font-size:0.9rem">No categories yet. Create your first category above!</div>';
  } else {
    categories.forEach(function (cat) {
      var count = products.filter(function (p) { return p.category === cat; }).length;
      html += '    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;border-bottom:1px solid #e2e8f0;background:#ffffff">';
      html += '      <div style="display:flex;align-items:center;gap:10px">';
      html += '        <strong style="color:#0f172a;font-size:0.92rem">' + escapeHtml(cat) + '</strong>';
      html += '        <span class="item-badge" style="font-size:0.75rem">' + count + ' ' + (count === 1 ? 'product' : 'products') + '</span>';
      html += '      </div>';
      html += '      <button type="button" class="table-action-delete" onclick="handleDeleteCategory(\'' + escapeHtml(cat) + '\')">✕ Delete</button>';
      html += '    </div>';
    });
  }

  html += '      </div>';
  html += '    </div>';
  html += '    <div class="modal-footer">';
  html += '      <button type="button" class="btn-sm" onclick="closeModal(\'categoryModal\')">Close</button>';
  html += '    </div>';
  html += '  </div>';
  html += '</div>';

  removeModal('categoryModal');
  document.body.insertAdjacentHTML('beforeend', html);
  setTimeout(function () {
    var inp = document.getElementById('newCatModalInput');
    if (inp) inp.focus();
  }, 100);
}

function handleAddCategorySubmit() {
  var inp = document.getElementById('newCatModalInput');
  if (!inp) return;
  var name = inp.value.trim();
  if (!name) {
    showToast('Please type a category name.', 'error');
    return;
  }

  if (!Array.isArray(ADMIN_STATE.settings.customCategories)) {
    ADMIN_STATE.settings.customCategories = [];
  }

  var existing = getAllCategories();
  var match = existing.find(function (c) { return c.toLowerCase() === name.toLowerCase(); });
  if (match) {
    showToast('Category "' + match + '" already exists!', 'info');
    return;
  }

  ADMIN_STATE.settings.customCategories.push(name);
  saveLocalState();
  syncSettingsToServer({ customCategories: ADMIN_STATE.settings.customCategories });
  showToast('Category "' + name + '" added!', 'success');
  openCategoryManagerModal();
  renderCurrentTab();
}

function handleDeleteCategory(catName) {
  var products = ADMIN_STATE.data.products || [];
  var inUse = products.filter(function (p) { return p.category === catName; }).length;
  var msg = 'Are you sure you want to delete category "' + catName + '"?';
  if (inUse > 0) {
    msg += ' Warning: ' + inUse + ' product(s) currently belong to this category.';
  }
  if (!confirm(msg)) return;

  if (Array.isArray(ADMIN_STATE.settings.customCategories)) {
    ADMIN_STATE.settings.customCategories = ADMIN_STATE.settings.customCategories.filter(function (c) {
      return c !== catName;
    });
  }

  if (inUse > 0) {
    products.forEach(function (p) {
      if (p.category === catName) {
        p.category = 'General';
        syncItemToServer('products', p);
      }
    });
  }

  saveLocalState();
  syncSettingsToServer({ customCategories: ADMIN_STATE.settings.customCategories });
  showToast('Category "' + catName + '" deleted.', 'info');
  openCategoryManagerModal();
  renderCurrentTab();
}

// ═══════════════════════════════════════════
// VIEW: MEDIA LIBRARY (PICTURES & VIDEOS)
// ═══════════════════════════════════════════
var ADMIN_MEDIA_STATE = {
  items: [],
  filter: 'all',
  search: '',
  isLoading: false
};

function renderMediaLibrary(container) {
  var html = '';
  html += '<div class="media-container">';
  html += '  <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px">';
  html += '    <div>';
  html += '      <h1 class="page-title">🎬 Media Library (Pictures &amp; Videos)</h1>';
  html += '      <p class="page-desc">Upload, preview, copy URLs, and manage all gameplay videos, product pictures, logos, and banners.</p>';
  html += '    </div>';
  html += '    <div style="display:flex;gap:10px">';
  html += '      <input type="file" id="mediaLibraryUploader" accept="image/*,video/*" multiple style="display:none" onchange="handleMediaBatchUpload(event)">';
  html += '      <button class="btn-dark" onclick="document.getElementById(\'mediaLibraryUploader\').click()">📤 Upload Pictures / Videos</button>';
  html += '    </div>';
  html += '  </div>';

  // Upload Zone
  html += '  <div class="media-upload-zone" onclick="document.getElementById(\'mediaLibraryUploader\').click()">';
  html += '    <div style="font-size:2.4rem;margin-bottom:6px">🎥 📸</div>';
  html += '    <h3 style="font-size:1.1rem;font-weight:700;color:#0f172a;margin-bottom:4px">Click or Drag &amp; Drop Media Here to Upload</h3>';
  html += '    <p style="font-size:0.85rem;color:#64748b">Supports MP4, WebM, MOV gameplay videos (up to 150MB) and JPG, PNG, WebP, SVG, GIF pictures</p>';
  html += '    <span id="mediaUploadProgress" style="display:none;margin-top:10px;font-weight:700;color:#4834d4">Uploading files... please wait</span>';
  html += '  </div>';

  // Filters & Search Bar
  var items = ADMIN_MEDIA_STATE.items || [];
  var vidCount = items.filter(function (m) { return m.isVideo || m.mediaType === 'video'; }).length;
  var picCount = items.filter(function (m) { return !m.isVideo && m.mediaType !== 'video'; }).length;

  html += '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin:16px 0">';
  html += '    <div class="media-filters">';
  html += '      <button class="media-filter-btn ' + (ADMIN_MEDIA_STATE.filter === 'all' ? 'active' : '') + '" onclick="filterMediaLibrary(\'all\')">All Media (' + items.length + ')</button>';
  html += '      <button class="media-filter-btn ' + (ADMIN_MEDIA_STATE.filter === 'image' ? 'active' : '') + '" onclick="filterMediaLibrary(\'image\')">📸 Pictures (' + picCount + ')</button>';
  html += '      <button class="media-filter-btn ' + (ADMIN_MEDIA_STATE.filter === 'video' ? 'active' : '') + '" onclick="filterMediaLibrary(\'video\')">🎥 Videos (' + vidCount + ')</button>';
  html += '    </div>';
  html += '    <div style="min-width:240px">';
  html += '      <input type="text" class="form-input" placeholder="🔍 Search media by name..." value="' + escapeHtml(ADMIN_MEDIA_STATE.search) + '" oninput="searchMediaLibrary(this.value)">';
  html += '    </div>';
  html += '  </div>';

  html += '  <div id="mediaGridContainer">';
  html += renderMediaGridHtml();
  html += '  </div>';
  html += '</div>';

  container.innerHTML = html;
  fetchMediaList();
}

function fetchMediaList() {
  adminFetch('../api/api.php?action=get_media')
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success && Array.isArray(res.files)) {
        ADMIN_MEDIA_STATE.items = res.files;
        var grid = document.getElementById('mediaGridContainer');
        if (grid) grid.innerHTML = renderMediaGridHtml();
      }
    })
    .catch(function () { });
}

function renderMediaGridHtml() {
  var items = ADMIN_MEDIA_STATE.items || [];
  var filter = ADMIN_MEDIA_STATE.filter;
  var search = (ADMIN_MEDIA_STATE.search || '').toLowerCase();

  var filtered = items.filter(function (item) {
    if (filter === 'image' && item.isVideo) return false;
    if (filter === 'video' && !item.isVideo) return false;
    if (search && item.filename.toLowerCase().indexOf(search) === -1) return false;
    return true;
  });

  if (filtered.length === 0) {
    return '<div class="card" style="text-align:center;padding:48px 20px;color:#94a3b8">' +
      '<div style="font-size:2.8rem;margin-bottom:8px">📂</div>' +
      '<h3 style="color:#0f172a;font-size:1.1rem;margin-bottom:6px">No media files found</h3>' +
      '<p style="font-size:0.85rem">Upload pictures or videos above to populate your media library.</p>' +
      '</div>';
  }

  var html = '<div class="media-grid">';
  filtered.forEach(function (m) {
    var isVid = m.isVideo || m.mediaType === 'video';
    var mediaUrl = m.url.startsWith('../') ? m.url : ('../' + m.url);
    var cleanUrl = m.url.replace(/^\.\.\//, '');

    html += '<div class="media-card">';
    html += '  <div class="media-card-preview">';
    html += '    <span class="media-type-badge ' + (isVid ? 'badge-video' : 'badge-image') + '">' + (isVid ? '🎥 VIDEO' : '📸 IMAGE') + '</span>';
    if (isVid) {
      html += '    <video class="media-card-video" controls preload="metadata" src="' + escapeHtml(mediaUrl) + '"></video>';
    } else {
      html += '    <img class="media-card-img" src="' + escapeHtml(mediaUrl) + '" alt="' + escapeHtml(m.filename) + '" loading="lazy" onclick="window.open(\'' + escapeHtml(mediaUrl) + '\')">';
    }
    html += '  </div>';
    html += '  <div class="media-card-body">';
    html += '    <div class="media-card-filename" title="' + escapeHtml(m.filename) + '">' + escapeHtml(m.filename) + '</div>';
    html += '    <div class="media-card-meta">';
    html += '      <span>' + (m.sizeFormatted || 'Media') + '</span>';
    html += '      <span>' + (m.createdAt ? new Date(m.createdAt).toLocaleDateString() : 'Uploaded') + '</span>';
    html += '    </div>';
    html += '    <div class="media-card-actions">';
    html += '      <button type="button" class="btn-sm" onclick="copyMediaUrl(\'' + escapeHtml(cleanUrl) + '\')">📋 Copy URL</button>';
    html += '      <button type="button" class="table-action-delete" style="flex:none;padding:6px 10px" onclick="deleteMediaItem(\'' + escapeHtml(m.filename) + '\')">🗑️</button>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}

function filterMediaLibrary(type) {
  ADMIN_MEDIA_STATE.filter = type;
  renderCurrentTab();
}

function searchMediaLibrary(query) {
  ADMIN_MEDIA_STATE.search = query;
  var grid = document.getElementById('mediaGridContainer');
  if (grid) grid.innerHTML = renderMediaGridHtml();
}

function copyMediaUrl(url) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function () {
      showToast('Copied media URL: ' + url, 'success');
    }).catch(function () {
      prompt('Copy Media URL:', url);
    });
  } else {
    prompt('Copy Media URL:', url);
  }
}

function deleteMediaItem(filename) {
  if (!confirm('Are you sure you want to permanently delete this media file (' + filename + ')?')) return;

  adminFetch('../api/api.php?action=delete_media', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename: filename })
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        showToast('Media file deleted.', 'info');
        ADMIN_MEDIA_STATE.items = ADMIN_MEDIA_STATE.items.filter(function (x) { return x.filename !== filename; });
        var grid = document.getElementById('mediaGridContainer');
        if (grid) grid.innerHTML = renderMediaGridHtml();
      } else {
        showToast(res.message || 'Failed to delete media', 'error');
      }
    })
    .catch(function (err) {
      showToast('Delete error: ' + (err.message || err), 'error');
    });
}

function handleMediaBatchUpload(e) {
  var files = e.target.files;
  if (!files || files.length === 0) return;

  var progressEl = document.getElementById('mediaUploadProgress');
  if (progressEl) {
    progressEl.style.display = 'block';
    progressEl.textContent = 'Uploading ' + files.length + ' file(s)...';
  }

  var uploadPromises = Array.from(files).map(function (file) {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('admin_token', getAdminToken());
    return adminFetch('../api/api.php?action=upload', {
      method: 'POST',
      body: formData
    }).then(function (r) { return r.json(); });
  });

  Promise.all(uploadPromises).then(function (results) {
    if (progressEl) progressEl.style.display = 'none';
    var successCount = results.filter(function (r) { return r && r.success; }).length;
    showToast('Uploaded ' + successCount + ' media files successfully! 🚀', 'success');
    fetchMediaList();
  }).catch(function (err) {
    if (progressEl) progressEl.style.display = 'none';
    showToast('Upload error: ' + (err.message || err), 'error');
    fetchMediaList();
  });
}

// ═══════════════════════════════════════════
// VIEW 5: COUPONS & DISCOUNTS
// ═══════════════════════════════════════════
function renderCoupons(container) {
  var coupons = ADMIN_STATE.data.coupons || [];
  var cur = ADMIN_STATE.settings.currency || '৳';

  var html = '';
  html += '<div class="page-header">';
  html += '  <div>';
  html += '    <h1 class="page-title">🎟️ Discount Coupons</h1>';
  html += '    <p class="page-desc">Create promo codes and discount vouchers for customers to use at checkout.</p>';
  html += '  </div>';
  html += '  <div>';
  html += '    <button class="btn-dark" onclick="openCouponModal()">+ Create Coupon</button>';
  html += '  </div>';
  html += '</div>';

  html += '<div class="card">';
  html += '  <div class="table-responsive">';
  html += '    <table class="data-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th>COUPON CODE</th>';
  html += '          <th>DISCOUNT VALUE</th>';
  html += '          <th>MIN SPEND</th>';
  html += '          <th>STATUS</th>';
  html += '          <th style="text-align:right">ACTIONS</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  if (coupons.length === 0) {
    html += '<tr><td colspan="5" style="text-align:center;padding:36px;color:#94a3b8">No coupons created yet. Click "+ Create Coupon" to add your first promo code.</td></tr>';
  } else {
    coupons.forEach(function (c) {
      var valDesc = c.type === 'percent' ? c.discount + '%' : cur + c.discount;
      html += '<tr>';
      html += '  <td><strong style="font-family:monospace;font-size:1rem;color:#0f172a">' + escapeHtml(c.code) + '</strong></td>';
      html += '  <td><strong style="color:#059669">' + valDesc + ' OFF</strong></td>';
      html += '  <td>' + cur + (c.minSpend || 0) + '</td>';
      html += '  <td>' + (c.active ? '<span class="item-badge" style="background:#dcfce7;color:#15803d">Active</span>' : '<span class="item-badge">Disabled</span>') + '</td>';
      html += '  <td style="text-align:right">';
      html += '    <button class="table-action-edit" onclick="toggleCouponActive(\'' + escapeHtml(c.id) + '\')">' + (c.active ? 'Disable' : 'Enable') + '</button>';
      html += '    <button class="table-action-delete" onclick="deleteCouponItem(\'' + escapeHtml(c.id) + '\')">Delete</button>';
      html += '  </td>';
      html += '</tr>';
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  container.innerHTML = html;
}

function openCouponModal() {
  var html = '';
  html += '<div class="admin-modal-overlay open" id="couponModal" onclick="handleModalBackdropClick(event, \'couponModal\')">';
  html += '  <div class="admin-modal-content" style="max-width:480px">';
  html += '    <div class="modal-header">';
  html += '      <h3 class="modal-title">🎟️ Create Discount Coupon</h3>';
  html += '      <button class="modal-close" onclick="closeModal(\'couponModal\')">✕</button>';
  html += '    </div>';
  html += '    <form onsubmit="handleSaveCoupon(event)">';
  html += '      <div class="modal-body">';

  html += '        <div class="form-group">';
  html += '          <label class="form-label">Coupon Code (Uppercase) *</label>';
  html += '          <input type="text" id="coupCode" class="form-input" required placeholder="e.g. SAVE20" style="text-transform:uppercase">';
  html += '        </div>';

  html += '        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Discount Type</label>';
  html += '            <select id="coupType" class="form-input">';
  html += '              <option value="percent">Percentage (%)</option>';
  html += '              <option value="fixed">Fixed Amount (৳)</option>';
  html += '            </select>';
  html += '          </div>';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Discount Value *</label>';
  html += '            <input type="number" id="coupDiscount" class="form-input" required placeholder="e.g. 10 or 100">';
  html += '          </div>';
  html += '        </div>';

  html += '        <div class="form-group">';
  html += '          <label class="form-label">Minimum Spend (৳)</label>';
  html += '          <input type="number" id="coupMinSpend" class="form-input" value="500">';
  html += '        </div>';

  html += '      </div>';
  html += '      <div class="modal-footer">';
  html += '        <button type="button" class="btn-sm" onclick="closeModal(\'couponModal\')">Cancel</button>';
  html += '        <button type="submit" class="btn-dark">Save Coupon</button>';
  html += '      </div>';
  html += '    </form>';
  html += '  </div>';
  html += '</div>';

  removeModal('couponModal');
  document.body.insertAdjacentHTML('beforeend', html);
}

function handleSaveCoupon(e) {
  e.preventDefault();
  var code = document.getElementById('coupCode').value.trim().toUpperCase();
  var type = document.getElementById('coupType').value;
  var discount = parseFloat(document.getElementById('coupDiscount').value) || 0;
  var minSpend = parseFloat(document.getElementById('coupMinSpend').value) || 0;

  if (!code) return;

  var item = {
    id: 'coup-' + Date.now(),
    code: code,
    type: type,
    discount: discount,
    minSpend: minSpend,
    active: true
  };

  if (!ADMIN_STATE.data.coupons) ADMIN_STATE.data.coupons = [];
  ADMIN_STATE.data.coupons.unshift(item);
  syncItemToServer('coupons', item);
  closeModal('couponModal');
  showToast('Coupon ' + code + ' created!', 'success');
  renderCurrentTab();
}

function toggleCouponActive(id) {
  var c = ADMIN_STATE.data.coupons.find(function (x) { return x.id === id; });
  if (c) {
    c.active = !c.active;
    syncItemToServer('coupons', c);
    renderCurrentTab();
  }
}

function deleteCouponItem(id) {
  if (!confirm('Delete this coupon?')) return;
  ADMIN_STATE.data.coupons = ADMIN_STATE.data.coupons.filter(function (x) { return x.id !== id; });
  deleteItemFromServer('coupons', id);
  showToast('Coupon removed', 'info');
  renderCurrentTab();
}

// ═══════════════════════════════════════════
// VIEW 6: CUSTOMERS DIRECTORY
// ═══════════════════════════════════════════
function renderCustomers(container) {
  var orders = ADMIN_STATE.data.orders || [];
  var cur = ADMIN_STATE.settings.currency || '৳';

  // Aggregate customers by phone number
  var custMap = {};
  orders.forEach(function (o) {
    var phone = (o.customerPhone || '').trim();
    if (!phone) phone = (o.customerName || 'Anonymous');

    if (!custMap[phone]) {
      custMap[phone] = {
        name: o.customerName || 'Anonymous',
        phone: o.customerPhone || 'N/A',
        email: o.customerEmail || 'N/A',
        totalOrders: 0,
        totalSpent: 0,
        lastOrderDate: o.createdAt || null
      };
    }

    custMap[phone].totalOrders++;
    custMap[phone].totalSpent += parseFloat(o.total) || 0;
    if (o.customerName && (!custMap[phone].name || custMap[phone].name === 'Anonymous')) {
      custMap[phone].name = o.customerName;
    }
  });

  var customers = Object.values(custMap);

  var users = ADMIN_STATE.data.users || [];

  var html = '';
  html += '<div class="page-header">';
  html += '  <div>';
  html += '    <h1 class="page-title">👥 Customer Accounts & Buyers</h1>';
  html += '    <p class="page-desc">Registered Gmail/manual customer accounts, saved login passwords, and order frequency totals.</p>';
  html += '  </div>';
  html += '</div>';

  // Table 1: Registered Accounts (Gmail & Manual)
  html += '<div class="card" style="margin-bottom:24px">';
  html += '  <div style="padding:18px 24px 12px;border-bottom:1px solid #21262d;display:flex;justify-content:space-between;align-items:center">';
  html += '    <h3 style="font-size:1.05rem;color:#f0f6fc;margin:0">🔐 Registered Customer Accounts (' + users.length + ')</h3>';
  html += '    <span style="font-size:0.8rem;color:#8b949e">Auto-generated & manual login passwords</span>';
  html += '  </div>';
  html += '  <div class="table-responsive">';
  html += '    <table class="data-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th>NAME</th>';
  html += '          <th>GMAIL / EMAIL</th>';
  html += '          <th>AUTH METHOD</th>';
  html += '          <th>LOGIN PASSWORD</th>';
  html += '          <th>PURCHASES</th>';
  html += '          <th>JOINED</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  if (users.length === 0) {
    html += '<tr><td colspan="6" style="text-align:center;padding:32px;color:#8b949e">No registered customer accounts yet. When users sign in with Google or create an account, their credentials will be logged here.</td></tr>';
  } else {
    users.forEach(function (u) {
      var isGoogle = (u.authMethod === 'google');
      var userOrderCount = orders.filter(function (o) {
        return (o.userId && o.userId === u.id) || (o.email && o.email.toLowerCase() === (u.email || '').toLowerCase());
      }).length;
      var joinDate = u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A';

      html += '<tr>';
      html += '  <td><strong style="color:#f0f6fc">' + escapeHtml(u.name || 'User') + '</strong></td>';
      html += '  <td>' + escapeHtml(u.email || '') + '</td>';
      html += '  <td>' + (isGoogle ? '<span class="item-badge" style="background:#1e3a8a;color:#93c5fd">🔵 Google</span>' : '<span class="item-badge" style="background:#064e3b;color:#6ee7b7">🟢 Manual</span>') + '</td>';
      html += '  <td><code style="background:#161b22;padding:4px 8px;border-radius:4px;color:#a5b4fc;font-family:monospace;font-size:0.88rem">' + escapeHtml(u.password || 'N/A') + '</code></td>';
      html += '  <td><span class="item-badge">' + userOrderCount + ' orders</span></td>';
      html += '  <td><small style="color:#8b949e">' + escapeHtml(joinDate) + '</small></td>';
      html += '</tr>';
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  // Table 2: Guest Buyers Directory
  html += '<div class="card">';
  html += '  <div style="padding:18px 24px 12px;border-bottom:1px solid #21262d">';
  html += '    <h3 style="font-size:1.05rem;color:#f0f6fc;margin:0">📋 All Store Buyers & Spend Aggregates</h3>';
  html += '  </div>';
  html += '  <div class="table-responsive">';
  html += '    <table class="data-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th>CUSTOMER NAME</th>';
  html += '          <th>PHONE NUMBER</th>';
  html += '          <th>EMAIL</th>';
  html += '          <th>TOTAL ORDERS</th>';
  html += '          <th>TOTAL SPENT</th>';
  html += '          <th style="text-align:right">ACTIONS</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  if (customers.length === 0) {
    html += '<tr><td colspan="6" style="text-align:center;padding:36px;color:#94a3b8">No customer records yet. Orders placed by customers will automatically compile here!</td></tr>';
  } else {
    customers.forEach(function (cust) {
      var cleanPhone = cust.phone.replace(/[^0-9]/g, '');
      var waLink = cleanPhone ? 'https://wa.me/88' + cleanPhone : '#';

      html += '<tr>';
      html += '  <td><strong style="color:#0f172a">' + escapeHtml(cust.name) + '</strong></td>';
      html += '  <td>📞 ' + escapeHtml(cust.phone) + '</td>';
      html += '  <td>' + escapeHtml(cust.email) + '</td>';
      html += '  <td><span class="item-badge">' + cust.totalOrders + ' ' + (cust.totalOrders === 1 ? 'order' : 'orders') + '</span></td>';
      html += '  <td><strong style="color:#059669">' + cur + cust.totalSpent.toLocaleString() + '</strong></td>';
      html += '  <td style="text-align:right">';
      if (cleanPhone) {
        html += '    <a href="' + waLink + '" target="_blank" class="table-action-edit" style="text-decoration:none;color:#16a34a">💬 WhatsApp</a>';
        html += '    <a href="tel:' + cust.phone + '" class="table-action-edit" style="text-decoration:none">📞 Call</a>';
      }
      html += '  </td>';
      html += '</tr>';
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  container.innerHTML = html;
}

// ═══════════════════════════════════════════
// VIEW 7: STORE SETTINGS
// ═══════════════════════════════════════════
function renderSettings(container) {
  var settings = ADMIN_STATE.settings;
  var currentFavicon = settings.websiteFavicon || '../assets/favicon.svg';

  var html = '';
  html += '<div class="settings-container">';
  html += '  <div class="page-header">';
  html += '    <h1 class="page-title">Store & Payment Settings</h1>';
  html += '    <p class="page-desc">Configure your e-commerce store profile, mobile payment numbers, shipping rates, and security credentials.</p>';
  html += '  </div>';

  // Card 1: Change Login Credentials
  html += '  <div class="settings-card">';
  html += '    <h3 class="settings-card-title">Change Login Credentials</h3>';
  html += '    <form onsubmit="handleSaveCredentials(event)">';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Current Password (Required) *</label>';
  html += '        <input type="password" id="currPassInput" class="form-input" required placeholder="Enter current password">';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">New Admin Email Address</label>';
  html += '        <input type="email" id="newEmailInput" class="form-input" value="' + escapeHtml(settings.adminEmail || '') + '" placeholder="e.g. admin@yourstore.com">';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">New Password (leave blank if keeping current)</label>';
  html += '        <div class="password-input-wrapper">';
  html += '          <input type="password" id="newPassInput" class="form-input" placeholder="Type new secure password">';
  html += '          <button type="button" class="password-toggle-btn" onclick="togglePasswordVisibility(\'newPassInput\')">👁️</button>';
  html += '        </div>';
  html += '      </div>';
  html += '      <button type="submit" class="btn-dark">Save Credentials</button>';
  html += '    </form>';
  html += '  </div>';

  // Card 2: Store Profile & Details
  html += '  <div class="settings-card">';
  html += '    <h3 class="settings-card-title">Store Profile & Branding</h3>';
  html += '    <form onsubmit="handleSaveStoreProfile(event)">';
  html += '      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Store Name</label>';
  html += '          <input type="text" id="storeNameInput" class="form-input" value="' + escapeHtml(settings.storeName || '') + '" required>';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Currency Symbol</label>';
  html += '          <input type="text" id="storeCurrencyInput" class="form-input" value="' + escapeHtml(settings.currency || '৳') + '" required>';
  html += '        </div>';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Store Tagline / Slogan</label>';
  html += '        <input type="text" id="storeTaglineInput" class="form-input" value="' + escapeHtml(settings.storeTagline || '') + '" placeholder="Your Premium Online E-Commerce Store">';
  html += '      </div>';
  html += '      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Customer Support Phone / WhatsApp</label>';
  html += '          <input type="text" id="storePhoneInput" class="form-input" value="' + escapeHtml(settings.storePhone || '') + '">';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Customer Support Email</label>';
  html += '          <input type="email" id="storeEmailInput" class="form-input" value="' + escapeHtml(settings.storeEmail || '') + '">';
  html += '        </div>';
  html += '      </div>';
  html += '      <button type="submit" class="btn-dark">Save Store Profile</button>';
  html += '    </form>';
  html += '  </div>';

  // Card 3: Website Theme & Color Scheme
  var curPrimary = settings.primaryColor || '#6C5CE7';
  var curSecondary = settings.secondaryColor || '#FF6B6B';
  var curAccent = settings.accentColor || '#F39C12';
  var curBg = settings.bgPrimary || '#0a0a1a';
  var curPreset = settings.themePreset || 'royal';

  html += '  <div class="settings-card" id="themeSettingsCard">';
  html += '    <h3 class="settings-card-title">🎨 Website Theme & Color Scheme (Full Website)</h3>';
  html += '    <p style="font-size:0.85rem;color:#64748b;margin-bottom:16px">Customize your storefront colors, gradients, button glows, and background mode. Updates apply across the whole website instantly.</p>';

  // Preset Palettes
  html += '    <label class="form-label" style="margin-bottom:10px">✨ One-Click Curated Color Palettes</label>';
  html += '    <div class="theme-presets-grid" id="themePresetsGrid">';
  var presets = [
    { key: 'royal', name: 'Royal Nebula', primary: '#6C5CE7', secondary: '#FF6B6B', accent: '#F39C12', bg: '#0a0a1a' },
    { key: 'cyber', name: 'Cyber Ocean', primary: '#0284c7', secondary: '#06b6d4', accent: '#38bdf8', bg: '#030712' },
    { key: 'emerald', name: 'Emerald Matrix', primary: '#10b981', secondary: '#059669', accent: '#34d399', bg: '#022c22' },
    { key: 'sunset', name: 'Fiery Sunset', primary: '#f59e0b', secondary: '#ef4444', accent: '#fbbf24', bg: '#0c0a09' },
    { key: 'crimson', name: 'Crimson Velvet', primary: '#e11d48', secondary: '#f43f5e', accent: '#fb7185', bg: '#0f0507' },
    { key: 'stealth', name: 'Midnight Stealth', primary: '#6366f1', secondary: '#818cf8', accent: '#a5b4fc', bg: '#09090b' },
    { key: 'neon', name: 'Cyberpunk Neon', primary: '#d946ef', secondary: '#ec4899', accent: '#06b6d4', bg: '#0f051d' },
    { key: 'light', name: 'Modern Light', primary: '#4f46e5', secondary: '#0284c7', accent: '#f59e0b', bg: '#f8fafc' }
  ];
  presets.forEach(function (p) {
    var isActive = curPreset === p.key;
    html += '      <div class="theme-preset-card ' + (isActive ? 'active' : '') + '" data-preset="' + p.key + '" onclick="handleSelectThemePreset(\'' + p.key + '\')">';
    if (isActive) html += '        <span class="theme-preset-badge">Active</span>';
    html += '        <div class="theme-swatch-row">';
    html += '          <span class="theme-swatch-circle" style="background:' + p.primary + '"></span>';
    html += '          <span class="theme-swatch-circle" style="background:' + p.secondary + '"></span>';
    html += '          <span class="theme-swatch-circle" style="background:' + p.bg + '"></span>';
    html += '        </div>';
    html += '        <div class="theme-preset-name">' + p.name + '</div>';
    html += '      </div>';
  });
  html += '    </div>';

  // Live Interactive Preview Box
  html += '    <label class="form-label" style="margin-bottom:8px">👁️ Live Storefront Preview</label>';
  html += '    <div class="theme-live-preview" id="themeLivePreview">';
  html += '      <div class="theme-preview-header">';
  html += '        <div class="theme-preview-brand" id="prevBrandName">🛍️ ' + escapeHtml(settings.storeName || 'likhonshop') + '</div>';
  html += '        <div class="theme-preview-badge" id="prevBadge">Active Theme</div>';
  html += '      </div>';
  html += '      <div class="theme-preview-card" id="prevCard">';
  html += '        <div>';
  html += '          <div style="font-weight:700;font-size:0.95rem;margin-bottom:4px" id="prevCardTitle">Exclusive Game Pass VIP</div>';
  html += '          <div style="font-size:0.85rem;font-weight:700" id="prevCardPrice">' + (settings.currency || '৳') + ' 1,200 <span style="font-size:0.75rem;opacity:0.7;font-weight:400;text-decoration:line-through">' + (settings.currency || '৳') + ' 1,500</span></div>';
  html += '        </div>';
  html += '        <button type="button" class="theme-preview-btn" id="prevBtn">Add to Cart 🛒</button>';
  html += '      </div>';
  html += '    </div>';

  // Custom Color Pickers
  html += '    <form onsubmit="handleSaveThemeSettings(event)">';
  html += '      <div class="theme-color-row">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Primary Brand Color *</label>';
  html += '          <div class="color-picker-box">';
  html += '            <input type="color" id="themePrimaryColor" class="color-input-native" value="' + curPrimary + '" oninput="handleColorInputSync(\'primary\')">';
  html += '            <input type="text" id="themePrimaryText" class="color-hex-text" value="' + curPrimary + '" maxlength="7" oninput="handleHexTextSync(\'primary\')">';
  html += '          </div>';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Secondary / Glow Accent *</label>';
  html += '          <div class="color-picker-box">';
  html += '            <input type="color" id="themeSecondaryColor" class="color-input-native" value="' + curSecondary + '" oninput="handleColorInputSync(\'secondary\')">';
  html += '            <input type="text" id="themeSecondaryText" class="color-hex-text" value="' + curSecondary + '" maxlength="7" oninput="handleHexTextSync(\'secondary\')">';
  html += '          </div>';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Accent / Highlight *</label>';
  html += '          <div class="color-picker-box">';
  html += '            <input type="color" id="themeAccentColor" class="color-input-native" value="' + curAccent + '" oninput="handleColorInputSync(\'accent\')">';
  html += '            <input type="text" id="themeAccentText" class="color-hex-text" value="' + curAccent + '" maxlength="7" oninput="handleHexTextSync(\'accent\')">';
  html += '          </div>';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Background Mode / Tone *</label>';
  html += '          <div class="color-picker-box">';
  html += '            <input type="color" id="themeBgColor" class="color-input-native" value="' + (curBg.startsWith('#') && curBg.length === 7 ? curBg : '#0a0a1a') + '" oninput="handleColorInputSync(\'bg\')">';
  html += '            <input type="text" id="themeBgText" class="color-hex-text" value="' + curBg + '" maxlength="7" oninput="handleHexTextSync(\'bg\')">';
  html += '          </div>';
  html += '        </div>';
  html += '      </div>';
  html += '      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">';
  html += '        <button type="submit" class="btn-dark">💾 Save Theme Colors</button>';
  html += '        <button type="button" class="btn-sm" onclick="handleResetThemeSettings()">↺ Reset to Default Theme</button>';
  html += '        <a href="../" target="_blank" class="btn-sm" style="text-decoration:none;display:inline-flex;align-items:center;gap:6px">🌐 View Live Website →</a>';
  html += '      </div>';
  html += '    </form>';
  html += '  </div>';

  // Card 4: Payment Gateways (bKash, Nagad, Rocket)
  html += '  <div class="settings-card">';
  html += '    <h3 class="settings-card-title">Mobile Banking Payment Numbers (bKash, Nagad, Rocket)</h3>';
  html += '    <p style="font-size:0.85rem;color:#64748b;margin-bottom:16px">Customers will see these numbers at checkout to send payments.</p>';
  html += '    <form onsubmit="handleSavePaymentSettings(event)">';
  html += '      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">bKash Number</label>';
  html += '          <input type="text" id="bkashInput" class="form-input" value="' + escapeHtml(settings.bkashNumber || '') + '" placeholder="017XXXXXXXX (Personal)">';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Nagad Number</label>';
  html += '          <input type="text" id="nagadInput" class="form-input" value="' + escapeHtml(settings.nagadNumber || '') + '" placeholder="018XXXXXXXX (Personal)">';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Rocket Number</label>';
  html += '          <input type="text" id="rocketInput" class="form-input" value="' + escapeHtml(settings.rocketNumber || '') + '" placeholder="019XXXXXXXX (Personal)">';
  html += '        </div>';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Payment Instructions for Buyers</label>';
  html += '        <textarea id="payInstInput" class="form-input" rows="2">' + escapeHtml(settings.paymentInstructions || '') + '</textarea>';
  html += '      </div>';
  html += '      <button type="submit" class="btn-dark">Save Payment Methods</button>';
  html += '    </form>';
  html += '  </div>';

  // Card 4: Shipping & Delivery Rates
  html += '  <div class="settings-card">';
  html += '    <h3 class="settings-card-title">Shipping & Delivery Rates</h3>';
  html += '    <form onsubmit="handleSaveShippingSettings(event)">';
  html += '      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Inside Dhaka Delivery Fee (৳)</label>';
  html += '          <input type="number" id="shipDhakaInput" class="form-input" value="' + (settings.shippingDhaka || 60) + '">';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Outside Dhaka Delivery Fee (৳)</label>';
  html += '          <input type="number" id="shipOutsideInput" class="form-input" value="' + (settings.shippingOutside || 120) + '">';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Free Shipping Minimum Spend (৳)</label>';
  html += '          <input type="number" id="shipFreeInput" class="form-input" value="' + (settings.freeShippingThreshold || 2000) + '">';
  html += '        </div>';
  html += '      </div>';
  html += '      <button type="submit" class="btn-dark">Save Shipping Rates</button>';
  html += '    </form>';
  html += '  </div>';

  // Card 5: Logo, Favicon & Store Banner
  html += '  <div class="settings-card">';
  html += '    <h3 class="settings-card-title">Website Logo, Favicon & Store Banner</h3>';
  html += '    <p style="font-size:0.85rem;color:#64748b;margin-bottom:16px">Upload branding visuals and promotional media displayed across your storefront.</p>';
  html += '    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">';
  html += '      <div>';
  html += '        <label class="form-label">Store Logo</label>';
  if (settings.websiteLogo) {
    html += '        <div style="margin-bottom:10px;padding:10px;background:#0d1117;border-radius:8px;border:1px solid #21262d;text-align:center"><img src="' + escapeHtml(settings.websiteLogo) + '" style="max-height:50px;object-fit:contain"></div>';
  }
  html += '        <div class="file-drop-area" onclick="document.getElementById(\'logoFileInput\').click()">';
  html += '          <input type="file" id="logoFileInput" accept="image/*" style="display:none" onchange="handleLogoSelect(event)">';
  html += '          <p style="font-size:0.88rem;color:#64748b">📤 Click to upload new Store Logo (PNG/SVG/WebP)</p>';
  html += '        </div>';
  html += '      </div>';
  html += '      <div>';
  html += '        <label class="form-label">Website Favicon</label>';
  if (settings.websiteFavicon) {
    html += '        <div style="margin-bottom:10px;padding:10px;background:#0d1117;border-radius:8px;border:1px solid #21262d;text-align:center"><img src="' + escapeHtml(settings.websiteFavicon) + '" style="max-height:36px;object-fit:contain"></div>';
  }
  html += '        <div class="file-drop-area" onclick="document.getElementById(\'faviconFileInput\').click()">';
  html += '          <input type="file" id="faviconFileInput" accept="image/*" style="display:none" onchange="handleFaviconSelect(event)">';
  html += '          <p style="font-size:0.88rem;color:#64748b">📤 Click to upload Favicon (ICO/PNG/SVG)</p>';
  html += '        </div>';
  html += '      </div>';
  html += '    </div>';
  html += '    <div style="margin-top:20px;border-top:1px solid #21262d;padding-top:16px">';
  html += '      <label class="form-label">Store Promotional Banner (Picture or Video)</label>';
  html += '      <p style="font-size:0.82rem;color:#8b949e;margin-bottom:8px">Upload or provide a video/picture URL for promotional banners across the store.</p>';
  html += '      <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">';
  html += '        <input type="text" id="bannerMediaInput" class="form-input" style="flex:1" value="' + escapeHtml(settings.bannerVideo || settings.bannerImage || '') + '" placeholder="e.g. uploads/banner.mp4 or uploads/banner.webp" oninput="updateBannerMediaPreview(this.value)">';
  html += '        <button type="button" class="btn-dark" style="white-space:nowrap" onclick="document.getElementById(\'bannerMediaFile\').click()">📤 Upload Banner</button>';
  html += '        <input type="file" id="bannerMediaFile" accept="image/*,video/*" style="display:none" onchange="handleBannerMediaPick(event)">';
  html += '      </div>';
  html += '      <div id="bannerMediaPreviewContainer" style="margin-top:10px;' + (settings.bannerVideo || settings.bannerImage ? '' : 'display:none') + '">';
  var bannerUrl = settings.bannerVideo || settings.bannerImage || '';
  var isBannerVid = /\.(mp4|webm|ogg|mov)$/i.test(bannerUrl);
  if (isBannerVid) {
    html += '        <video id="bannerMediaVidPreview" src="' + escapeHtml(bannerUrl) + '" controls autoplay muted loop style="max-height:160px;width:100%;object-fit:cover;border-radius:8px;border:1px solid #30363d"></video>';
  } else {
    html += '        <img id="bannerMediaImgPreview" src="' + escapeHtml(bannerUrl) + '" style="max-height:160px;width:100%;object-fit:cover;border-radius:8px;border:1px solid #30363d">';
  }
  html += '      </div>';
  html += '      <button type="button" class="btn-dark" style="margin-top:12px" onclick="handleSaveBannerMedia()">Save Banner</button>';
  html += '    </div>';
  html += '  </div>';
  html += '';
  // Card 6: 🎮 3D Storefront & Hero Customization
  var heroBadge = settings.heroBadge !== undefined ? settings.heroBadge : '✨ ULTRA NEXT-GEN 3D EXPERIENCE';
  var heroTitle = settings.heroTitle !== undefined ? settings.heroTitle : 'NEXT LEVEL GAMING & SOFTWARE GEAR';
  var heroSubtitle = settings.heroSubtitle !== undefined ? settings.heroSubtitle : 'Explore premium verified game passes, digital tools, instant top-ups, and game mods with real-time 3D showcase.';
  var hero3dEnabled = settings.hero3dEnabled !== undefined ? settings.hero3dEnabled : 'yes';
  var hero3dStyle = settings.hero3dStyle || 'cyber';
  var heroBtn1Text = settings.heroBtn1Text || 'Explore Products 🛒';
  var heroBtn1Link = settings.heroBtn1Link || '#shop';
  var heroBtn2Text = settings.heroBtn2Text || 'Track Order 📦';
  var heroBtn2Link = settings.heroBtn2Link || '#track';
  var heroBgVideo = settings.heroBgVideo || '';
  var heroBgImage = settings.heroBgImage || '';

  html += '  <div class="settings-card">';
  html += '    <h3 class="settings-card-title">🎮 3D Storefront & Hero Media Customizer</h3>';
  html += '    <p style="font-size:0.85rem;color:#64748b;margin-bottom:16px">Customize your storefront hero header with animated video background, 3D interactive crystal centerpiece, headline, and action buttons.</p>';
  html += '    <form onsubmit="handleSaveHeroCustomizer(event)">';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Hero Top Announcement Badge</label>';
  html += '        <input type="text" id="heroBadgeInput" class="form-input" value="' + escapeHtml(heroBadge) + '" placeholder="e.g. ✨ ULTRA NEXT-GEN 3D EXPERIENCE">';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Hero Main Title (Heading 1)</label>';
  html += '        <input type="text" id="heroTitleInput" class="form-input" value="' + escapeHtml(heroTitle) + '" placeholder="e.g. NEXT LEVEL GAMING & SOFTWARE GEAR" required>';
  html += '      </div>';
  html += '      <div class="form-group">';
  html += '        <label class="form-label">Hero Subtitle / Description</label>';
  html += '        <textarea id="heroSubtitleInput" class="form-input" rows="2" placeholder="Describe your store features, instant deliveries, or premium collection">' + escapeHtml(heroSubtitle) + '</textarea>';
  html += '      </div>';
  html += '      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Hero 3D Centerpiece</label>';
  html += '          <select id="hero3dEnabledSelect" class="form-input">';
  html += '            <option value="yes"' + (hero3dEnabled !== 'no' ? ' selected' : '') + '>Enabled (Active)</option>';
  html += '            <option value="no"' + (hero3dEnabled === 'no' ? ' selected' : '') + '>Disabled (Hidden)</option>';
  html += '          </select>';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Hero 3D Color Theme</label>';
  html += '          <select id="hero3dStyleSelect" class="form-input">';
  html += '            <option value="cyber"' + (hero3dStyle === 'cyber' ? ' selected' : '') + '>Cyber Cyan Glow</option>';
  html += '            <option value="emerald"' + (hero3dStyle === 'emerald' ? ' selected' : '') + '>Emerald Matrix Green</option>';
  html += '            <option value="crimson"' + (hero3dStyle === 'crimson' ? ' selected' : '') + '>Crimson Fury Red</option>';
  html += '            <option value="gold"' + (hero3dStyle === 'gold' ? ' selected' : '') + '>Golden Sunset Amber</option>';
  html += '            <option value="royal"' + (hero3dStyle === 'royal' ? ' selected' : '') + '>Royal Purple Nebula</option>';
  html += '          </select>';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">Product Detail 3D Box</label>';
  html += '          <select id="product3dEnabledSelect" class="form-input">';
  html += '            <option value="yes"' + (settings.product3dEnabled !== 'no' ? ' selected' : '') + '>Always 3D Spatial Mode (Active 360° Package Showcase)</option>';
  html += '            <option value="no"' + (settings.product3dEnabled === 'no' ? ' selected' : '') + '>2D Photos Only</option>';
  html += '          </select>';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">🛡️ Right-Click & F12 Inspect Protection</label>';
  html += '          <select id="antiInspectSelect" class="form-input">';
  html += '            <option value="yes"' + (settings.antiInspectEnabled !== 'no' ? ' selected' : '') + '>Active (Blocks Right Click, F12, DevTools shortcuts)</option>';
  html += '            <option value="no"' + (settings.antiInspectEnabled === 'no' ? ' selected' : '') + '>Disabled (Allow Right Click & F12)</option>';
  html += '          </select>';
  html += '          <small style="color:#8b949e;font-size:0.75rem">Stops visitors from right-clicking to inspect elements, pressing F12, or viewing page source.</small>';
  html += '        </div>';
  html += '        <div class="form-group" style="grid-column: 1 / -1">';
  html += '          <label class="form-label">🔐 Google OAuth Client ID (Optional for One-Tap / Popup)</label>';
  html += '          <input type="text" id="googleClientIdInput" class="form-input" value="' + escapeHtml(settings.googleClientId || '') + '" placeholder="e.g. 123456789-abcdef.apps.googleusercontent.com">';
  html += '          <small style="color:#8b949e;font-size:0.75rem">Optional. If omitted, visitors seamlessly connect with their Gmail via built-in Instant Connect.</small>';
  html += '        </div>';
  html += '      </div>';
  html += '      <div style="border-top:1px solid #21262d;padding-top:16px;margin-top:16px">';
  html += '        <h4 style="font-size:0.95rem;color:#f0f6fc;margin-bottom:6px">🎬 Hero Background Video (Cinematic Loop)</h4>';
  html += '        <p style="font-size:0.82rem;color:#8b949e;margin-bottom:10px">Upload a gameplay teaser, motion graphics loop, or ambient video for a cinema-grade hero background.</p>';
  html += '        <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">';
  html += '          <input type="text" id="heroBgVideoInput" class="form-input" style="flex:1" value="' + escapeHtml(heroBgVideo) + '" placeholder="Upload video or enter URL (e.g. uploads/hero_bg.mp4)" oninput="updateHeroVideoPreview(this.value)">';
  html += '          <button type="button" class="btn-dark" style="white-space:nowrap" onclick="document.getElementById(\'heroBgVideoFile\').click()">🎥 Upload Video</button>';
  html += '          <input type="file" id="heroBgVideoFile" accept="video/*" style="display:none" onchange="handleHeroBgVideoPick(event)">';
  html += '        </div>';
  html += '        <div id="heroVideoPreviewContainer" style="margin-bottom:14px;' + (heroBgVideo ? '' : 'display:none') + '">';
  html += '          <video id="heroVideoPreview" src="' + escapeHtml(heroBgVideo) + '" controls autoplay muted loop style="max-height:160px;width:100%;object-fit:cover;border-radius:8px;border:1px solid #30363d"></video>';
  html += '        </div>';
  html += '      </div>';
  html += '      <div style="border-top:1px solid #21262d;padding-top:16px;margin-top:16px">';
  html += '        <h4 style="font-size:0.95rem;color:#f0f6fc;margin-bottom:6px">🖼️ Hero Background Picture (Fallback / Wallpaper)</h4>';
  html += '        <p style="font-size:0.82rem;color:#8b949e;margin-bottom:10px">Poster wallpaper shown before or behind 3D graphics.</p>';
  html += '        <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">';
  html += '          <input type="text" id="heroBgImageInput" class="form-input" style="flex:1" value="' + escapeHtml(heroBgImage) + '" placeholder="Upload image or enter URL (e.g. uploads/wallpaper.jpg)" oninput="updateHeroImagePreview(this.value)">';
  html += '          <button type="button" class="btn-dark" style="white-space:nowrap" onclick="document.getElementById(\'heroBgImageFile\').click()">🖼️ Upload Picture</button>';
  html += '          <input type="file" id="heroBgImageFile" accept="image/*" style="display:none" onchange="handleHeroBgImagePick(event)">';
  html += '        </div>';
  html += '        <div id="heroImagePreviewContainer" style="margin-bottom:14px;' + (heroBgImage ? '' : 'display:none') + '">';
  html += '          <img id="heroImagePreview" src="' + escapeHtml(heroBgImage) + '" style="max-height:160px;width:100%;object-fit:cover;border-radius:8px;border:1px solid #30363d">';
  html += '        </div>';
  html += '      </div>';
  html += '      <div style="border-top:1px solid #21262d;padding-top:16px;margin-top:16px">';
  html += '        <h4 style="font-size:0.95rem;color:#f0f6fc;margin-bottom:10px">🔘 Call-to-Action Buttons</h4>';
  html += '        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Primary Button Text</label>';
  html += '            <input type="text" id="heroBtn1TextInput" class="form-input" value="' + escapeHtml(heroBtn1Text) + '">';
  html += '          </div>';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Primary Button Link / Action</label>';
  html += '            <input type="text" id="heroBtn1LinkInput" class="form-input" value="' + escapeHtml(heroBtn1Link) + '">';
  html += '          </div>';
  html += '        </div>';
  html += '        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Secondary Button Text</label>';
  html += '            <input type="text" id="heroBtn2TextInput" class="form-input" value="' + escapeHtml(heroBtn2Text) + '">';
  html += '          </div>';
  html += '          <div class="form-group">';
  html += '            <label class="form-label">Secondary Button Link / Action</label>';
  html += '            <input type="text" id="heroBtn2LinkInput" class="form-input" value="' + escapeHtml(heroBtn2Link) + '">';
  html += '          </div>';
  html += '        </div>';
  html += '      </div>';
  html += '      <button type="submit" class="btn-dark" style="margin-top:16px">💾 Save 3D & Hero Settings</button>';
  html += '    </form>';
  html += '  </div>';
  html += '';
  // Card 7: 🌐 Social Media & Community Channels
  html += '  <div class="settings-card">';
  html += '    <h3 class="settings-card-title">🌐 Social Media & Community Channels</h3>';
  html += '    <p style="font-size:0.85rem;color:#64748b;margin-bottom:16px">Display your gaming community channels in footer, header, and support popups.</p>';
  html += '    <form onsubmit="handleSaveSocialSettings(event)">';
  html += '      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">✈️ Telegram Channel / Group</label>';
  html += '          <input type="url" id="socialTelegramInput" class="form-input" value="' + escapeHtml(settings.telegramLink || '') + '" placeholder="https://t.me/yourchannel">';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">👾 Discord Server Invite</label>';
  html += '          <input type="url" id="socialDiscordInput" class="form-input" value="' + escapeHtml(settings.discordLink || '') + '" placeholder="https://discord.gg/yourinvite">';
  html += '        </div>';
  html += '      </div>';
  html += '      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">💬 WhatsApp Direct Support / Group</label>';
  html += '          <input type="url" id="socialWhatsappInput" class="form-input" value="' + escapeHtml(settings.whatsappLink || '') + '" placeholder="https://wa.me/88017XXXXXXXX">';
  html += '        </div>';
  html += '        <div class="form-group">';
  html += '          <label class="form-label">▶️ YouTube Channel / Gameplay</label>';
  html += '          <input type="url" id="socialYoutubeInput" class="form-input" value="' + escapeHtml(settings.youtubeLink || '') + '" placeholder="https://youtube.com/@yourchannel">';
  html += '        </div>';
  html += '      </div>';
  html += '      <button type="submit" class="btn-dark">💾 Save Social Links</button>';
  html += '    </form>';
  html += '  </div>';

  html += '</div>';

  container.innerHTML = html;
  setTimeout(updateLiveThemePreview, 20);
}

// ═══════════════════════════════════════════
// THEME CUSTOMIZER HANDLERS
// ═══════════════════════════════════════════
var THEME_PRESETS_MAP = {
  royal: { name: 'Royal Nebula', primary: '#6C5CE7', secondary: '#FF6B6B', accent: '#F39C12', bg: '#0a0a1a' },
  cyber: { name: 'Cyber Ocean', primary: '#0284c7', secondary: '#06b6d4', accent: '#38bdf8', bg: '#030712' },
  emerald: { name: 'Emerald Matrix', primary: '#10b981', secondary: '#059669', accent: '#34d399', bg: '#022c22' },
  sunset: { name: 'Fiery Sunset', primary: '#f59e0b', secondary: '#ef4444', accent: '#fbbf24', bg: '#0c0a09' },
  crimson: { name: 'Crimson Velvet', primary: '#e11d48', secondary: '#f43f5e', accent: '#fb7185', bg: '#0f0507' },
  stealth: { name: 'Midnight Stealth', primary: '#6366f1', secondary: '#818cf8', accent: '#a5b4fc', bg: '#09090b' },
  neon: { name: 'Cyberpunk Neon', primary: '#d946ef', secondary: '#ec4899', accent: '#06b6d4', bg: '#0f051d' },
  light: { name: 'Modern Light', primary: '#4f46e5', secondary: '#0284c7', accent: '#f59e0b', bg: '#f8fafc' }
};

function handleSelectThemePreset(presetKey) {
  var p = THEME_PRESETS_MAP[presetKey];
  if (!p) return;

  var primPicker = document.getElementById('themePrimaryColor');
  var primText = document.getElementById('themePrimaryText');
  var secPicker = document.getElementById('themeSecondaryColor');
  var secText = document.getElementById('themeSecondaryText');
  var accPicker = document.getElementById('themeAccentColor');
  var accText = document.getElementById('themeAccentText');
  var bgPicker = document.getElementById('themeBgColor');
  var bgText = document.getElementById('themeBgText');

  if (primPicker) primPicker.value = p.primary;
  if (primText) primText.value = p.primary;
  if (secPicker) secPicker.value = p.secondary;
  if (secText) secText.value = p.secondary;
  if (accPicker) accPicker.value = p.accent;
  if (accText) accText.value = p.accent;
  if (bgPicker) bgPicker.value = (p.bg.startsWith('#') && p.bg.length === 7) ? p.bg : '#0a0a1a';
  if (bgText) bgText.value = p.bg;

  ADMIN_STATE._selectedPreset = presetKey;

  var cards = document.querySelectorAll('.theme-preset-card');
  cards.forEach(function (c) { c.classList.remove('active'); });
  var activeCard = document.querySelector('.theme-preset-card[data-preset="' + presetKey + '"]');
  if (activeCard) activeCard.classList.add('active');

  updateLiveThemePreview();
}

function handleColorInputSync(type) {
  var idMap = {
    primary: { picker: 'themePrimaryColor', text: 'themePrimaryText' },
    secondary: { picker: 'themeSecondaryColor', text: 'themeSecondaryText' },
    accent: { picker: 'themeAccentColor', text: 'themeAccentText' },
    bg: { picker: 'themeBgColor', text: 'themeBgText' }
  };
  var pair = idMap[type];
  if (!pair) return;
  var picker = document.getElementById(pair.picker);
  var text = document.getElementById(pair.text);
  if (picker && text) {
    text.value = picker.value.toUpperCase();
  }
  ADMIN_STATE._selectedPreset = 'custom';
  var cards = document.querySelectorAll('.theme-preset-card');
  cards.forEach(function (c) { c.classList.remove('active'); });
  updateLiveThemePreview();
}

function handleHexTextSync(type) {
  var idMap = {
    primary: { picker: 'themePrimaryColor', text: 'themePrimaryText' },
    secondary: { picker: 'themeSecondaryColor', text: 'themeSecondaryText' },
    accent: { picker: 'themeAccentColor', text: 'themeAccentText' },
    bg: { picker: 'themeBgColor', text: 'themeBgText' }
  };
  var pair = idMap[type];
  if (!pair) return;
  var picker = document.getElementById(pair.picker);
  var text = document.getElementById(pair.text);
  if (picker && text) {
    var val = text.value.trim();
    if (!val.startsWith('#') && val.length > 0) val = '#' + val;
    if (val.length === 7 && /^#[0-9A-Fa-f]{6}$/.test(val)) {
      picker.value = val;
    }
  }
  ADMIN_STATE._selectedPreset = 'custom';
  var cards = document.querySelectorAll('.theme-preset-card');
  cards.forEach(function (c) { c.classList.remove('active'); });
  updateLiveThemePreview();
}

function updateLiveThemePreview() {
  var prim = (document.getElementById('themePrimaryText') ? document.getElementById('themePrimaryText').value : ADMIN_STATE.settings.primaryColor) || '#6C5CE7';
  var sec = (document.getElementById('themeSecondaryText') ? document.getElementById('themeSecondaryText').value : ADMIN_STATE.settings.secondaryColor) || '#FF6B6B';
  var acc = (document.getElementById('themeAccentText') ? document.getElementById('themeAccentText').value : ADMIN_STATE.settings.accentColor) || '#F39C12';
  var bg = (document.getElementById('themeBgText') ? document.getElementById('themeBgText').value : ADMIN_STATE.settings.bgPrimary) || '#0a0a1a';

  var previewBox = document.getElementById('themeLivePreview');
  var prevBtn = document.getElementById('prevBtn');
  var prevBadge = document.getElementById('prevBadge');
  var prevCard = document.getElementById('prevCard');
  var brandName = document.getElementById('prevBrandName');

  if (!previewBox) return;

  var isLight = isLightColorHex(bg);
  previewBox.style.backgroundColor = bg;
  previewBox.style.color = isLight ? '#0f172a' : '#ffffff';
  previewBox.style.borderColor = isLight ? '#cbd5e1' : 'rgba(255,255,255,0.15)';

  if (prevCard) {
    prevCard.style.backgroundColor = isLight ? '#ffffff' : adjustHexBrightnessStr(bg, 10);
    prevCard.style.borderColor = isLight ? '#e2e8f0' : 'rgba(255,255,255,0.1)';
    prevCard.style.boxShadow = isLight ? '0 4px 15px rgba(0,0,0,0.06)' : '0 4px 20px rgba(0,0,0,0.4)';
  }

  if (prevBtn) {
    prevBtn.style.background = 'linear-gradient(135deg, ' + prim + ', ' + adjustHexBrightnessStr(prim, 20) + ')';
    prevBtn.style.boxShadow = '0 0 16px ' + hexToRgbaStr(prim, 0.4);
  }

  if (prevBadge) {
    prevBadge.style.background = hexToRgbaStr(acc, 0.18);
    prevBadge.style.color = acc;
    prevBadge.style.border = '1px solid ' + hexToRgbaStr(acc, 0.4);
  }

  if (brandName) {
    brandName.style.color = isLight ? '#0f172a' : '#ffffff';
  }
}

function handleSaveThemeSettings(e) {
  if (e) e.preventDefault();
  var prim = (document.getElementById('themePrimaryText').value || '#6C5CE7').trim();
  var sec = (document.getElementById('themeSecondaryText').value || '#FF6B6B').trim();
  var acc = (document.getElementById('themeAccentText').value || '#F39C12').trim();
  var bg = (document.getElementById('themeBgText').value || '#0a0a1a').trim();

  if (!prim.startsWith('#')) prim = '#' + prim;
  if (!sec.startsWith('#')) sec = '#' + sec;
  if (!acc.startsWith('#')) acc = '#' + acc;
  if (!bg.startsWith('#')) bg = '#' + bg;

  var preset = ADMIN_STATE._selectedPreset || 'custom';

  ADMIN_STATE.settings.primaryColor = prim;
  ADMIN_STATE.settings.secondaryColor = sec;
  ADMIN_STATE.settings.accentColor = acc;
  ADMIN_STATE.settings.bgPrimary = bg;
  ADMIN_STATE.settings.themePreset = preset;

  localStorage.setItem('rtx_theme_colors', JSON.stringify({
    primaryColor: prim,
    secondaryColor: sec,
    accentColor: acc,
    bgPrimary: bg,
    themePreset: preset,
    isLight: isLightColorHex(bg)
  }));

  syncSettingsToServer({
    primaryColor: prim,
    secondaryColor: sec,
    accentColor: acc,
    bgPrimary: bg,
    themePreset: preset
  });

  showToast('Website theme colors saved successfully!', 'success');
  renderCurrentTab();
}

function handleResetThemeSettings() {
  if (!confirm('Reset theme back to default Royal Nebula colors?')) return;
  handleSelectThemePreset('royal');
  handleSaveThemeSettings();
}

function hexToRgbaStr(hex, alpha) {
  if (!hex || typeof hex !== 'string') return 'rgba(108, 92, 231, ' + alpha + ')';
  hex = hex.replace('#', '').trim();
  if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
  if (hex.length !== 6) return 'rgba(108, 92, 231, ' + alpha + ')';
  var r = parseInt(hex.substring(0, 2), 16) || 0;
  var g = parseInt(hex.substring(2, 4), 16) || 0;
  var b = parseInt(hex.substring(4, 6), 16) || 0;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function adjustHexBrightnessStr(hex, percent) {
  if (!hex || typeof hex !== 'string') return hex;
  hex = hex.replace('#', '').trim();
  if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
  if (hex.length !== 6) return '#' + hex;
  var num = parseInt(hex, 16);
  var amt = Math.round(2.55 * percent);
  var R = (num >> 16) + amt;
  var G = ((num >> 8) & 0x00FF) + amt;
  var B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 0 ? 0 : B) : 255)).toString(16).slice(1);
}

function isLightColorHex(hex) {
  if (!hex || typeof hex !== 'string') return false;
  hex = hex.replace('#', '').trim();
  if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
  if (hex.length !== 6) return false;
  var r = parseInt(hex.substring(0, 2), 16) || 0;
  var g = parseInt(hex.substring(2, 4), 16) || 0;
  var b = parseInt(hex.substring(4, 6), 16) || 0;
  var brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}

function handleSaveCredentials(e) {
  e.preventDefault();
  var curr = document.getElementById('currPassInput').value.trim();
  var newEmail = document.getElementById('newEmailInput').value.trim();
  var newPass = document.getElementById('newPassInput').value.trim();

  adminFetch('../api/api.php?action=change_credentials', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ currentPassword: curr, newEmail: newEmail, newPassword: newPass, admin_token: getAdminToken() })
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        if (newPass) {
          ADMIN_STATE.settings.adminPassword = newPass;
          sessionStorage.setItem('admin_token', newPass);
          sessionStorage.setItem('admin_pass', newPass);
          localStorage.setItem('rtx_admin_token', newPass);
        }
        if (newEmail) ADMIN_STATE.settings.adminEmail = newEmail;
        saveLocalState();
        showToast('Admin credentials updated successfully!', 'success');
        document.getElementById('currPassInput').value = '';
        document.getElementById('newPassInput').value = '';
      } else {
        showToast(res && res.message ? res.message : 'Failed to update credentials', 'error');
      }
    })
    .catch(function (err) {
      showToast('Network error while saving credentials', 'error');
    });
}

function handleSaveStoreProfile(e) {
  e.preventDefault();
  ADMIN_STATE.settings.storeName = document.getElementById('storeNameInput').value.trim() || 'likhonshop';
  ADMIN_STATE.settings.currency = document.getElementById('storeCurrencyInput').value.trim() || '৳';
  ADMIN_STATE.settings.storeTagline = document.getElementById('storeTaglineInput').value.trim();
  ADMIN_STATE.settings.storePhone = document.getElementById('storePhoneInput').value.trim();
  ADMIN_STATE.settings.storeEmail = document.getElementById('storeEmailInput').value.trim();

  syncSettingsToServer(ADMIN_STATE.settings);
  showToast('Store profile saved!', 'success');
  renderAppLayout();
  switchTab('settings');
}

function handleSavePaymentSettings(e) {
  e.preventDefault();
  ADMIN_STATE.settings.bkashNumber = document.getElementById('bkashInput').value.trim();
  ADMIN_STATE.settings.nagadNumber = document.getElementById('nagadInput').value.trim();
  ADMIN_STATE.settings.rocketNumber = document.getElementById('rocketInput').value.trim();
  ADMIN_STATE.settings.paymentInstructions = document.getElementById('payInstInput').value.trim();

  syncSettingsToServer(ADMIN_STATE.settings);
  showToast('Payment methods updated!', 'success');
}

function handleSaveShippingSettings(e) {
  e.preventDefault();
  ADMIN_STATE.settings.shippingDhaka = parseFloat(document.getElementById('shipDhakaInput').value) || 0;
  ADMIN_STATE.settings.shippingOutside = parseFloat(document.getElementById('shipOutsideInput').value) || 0;
  ADMIN_STATE.settings.freeShippingThreshold = parseFloat(document.getElementById('shipFreeInput').value) || 0;

  syncSettingsToServer(ADMIN_STATE.settings);
  showToast('Shipping rates saved!', 'success');
}

function handleLogoSelect(e) {
  var file = e.target.files[0];
  if (!file) return;

  var formData = new FormData();
  formData.append('file', file);
  formData.append('admin_token', getAdminToken());
  adminFetch('../api/api.php?action=upload', { method: 'POST', body: formData })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.url) {
        ADMIN_STATE.settings.websiteLogo = '../' + res.url;
        syncSettingsToServer({ websiteLogo: ADMIN_STATE.settings.websiteLogo });
        showToast('Logo uploaded and saved!', 'success');
        renderAppLayout();
        switchTab('settings');
      } else if (res && res.message) {
        showToast('Logo upload failed: ' + res.message, 'error');
      }
    });
}

function handleFaviconSelect(e) {
  var file = e.target.files[0];
  if (!file) return;

  var formData = new FormData();
  formData.append('file', file);
  formData.append('admin_token', getAdminToken());
  adminFetch('../api/api.php?action=upload', { method: 'POST', body: formData })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.url) {
        ADMIN_STATE.settings.websiteFavicon = '../' + res.url;
        syncSettingsToServer({ websiteFavicon: ADMIN_STATE.settings.websiteFavicon });
        showToast('Favicon updated!', 'success');
        renderAppLayout();
        switchTab('settings');
      } else if (res && res.message) {
        showToast('Favicon upload failed: ' + res.message, 'error');
      }
    });
}

function updateBannerMediaPreview(url) {
  var c = document.getElementById('bannerMediaPreviewContainer');
  if (!c) return;
  if (!url || !url.trim()) { c.style.display = 'none'; return; }
  c.style.display = 'block';
  var isVid = /\.(mp4|webm|ogg|mov)$/i.test(url.trim());
  if (isVid) {
    c.innerHTML = '<video src="' + escapeHtml(url.trim()) + '" controls autoplay muted loop style="max-height:160px;width:100%;object-fit:cover;border-radius:8px;border:1px solid #30363d"></video>';
  } else {
    c.innerHTML = '<img src="' + escapeHtml(url.trim()) + '" style="max-height:160px;width:100%;object-fit:cover;border-radius:8px;border:1px solid #30363d">';
  }
}

function handleBannerMediaPick(e) {
  var file = e.target.files[0];
  if (!file) return;
  var formData = new FormData();
  formData.append('file', file);
  formData.append('admin_token', getAdminToken());
  showToast('Uploading banner media...', 'info');
  adminFetch('../api/api.php?action=upload', { method: 'POST', body: formData })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.url) {
        var url = '../' + res.url;
        var input = document.getElementById('bannerMediaInput');
        if (input) input.value = url;
        updateBannerMediaPreview(url);
        var isVid = /\.(mp4|webm|ogg|mov)$/i.test(res.url);
        if (isVid) {
          ADMIN_STATE.settings.bannerVideo = url;
          ADMIN_STATE.settings.bannerImage = '';
        } else {
          ADMIN_STATE.settings.bannerImage = url;
          ADMIN_STATE.settings.bannerVideo = '';
        }
        syncSettingsToServer({ bannerVideo: ADMIN_STATE.settings.bannerVideo, bannerImage: ADMIN_STATE.settings.bannerImage });
        showToast('Banner uploaded and saved! 🎬', 'success');
      } else if (res && res.message) {
        showToast('Banner upload failed: ' + res.message, 'error');
      }
    })
    .catch(function (err) {
      showToast('Banner upload failed: ' + err.message, 'error');
    });
}

function handleSaveBannerMedia() {
  var val = (document.getElementById('bannerMediaInput') ? document.getElementById('bannerMediaInput').value : '').trim();
  var isVid = /\.(mp4|webm|ogg|mov)$/i.test(val);
  if (isVid) {
    ADMIN_STATE.settings.bannerVideo = val;
    ADMIN_STATE.settings.bannerImage = '';
  } else {
    ADMIN_STATE.settings.bannerImage = val;
    ADMIN_STATE.settings.bannerVideo = '';
  }
  syncSettingsToServer({ bannerVideo: ADMIN_STATE.settings.bannerVideo, bannerImage: ADMIN_STATE.settings.bannerImage });
  showToast('Store banner updated!', 'success');
}

function updateHeroVideoPreview(url) {
  var c = document.getElementById('heroVideoPreviewContainer');
  var v = document.getElementById('heroVideoPreview');
  if (!c || !v) return;
  if (url && url.trim()) {
    v.src = url.trim();
    c.style.display = 'block';
  } else {
    c.style.display = 'none';
  }
}

function handleHeroBgVideoPick(e) {
  var file = e.target.files[0];
  if (!file) return;
  var formData = new FormData();
  formData.append('file', file);
  formData.append('admin_token', getAdminToken());
  showToast('Uploading hero background video (' + (file.size / (1024 * 1024)).toFixed(1) + ' MB)...', 'info');
  adminFetch('../api/api.php?action=upload', { method: 'POST', body: formData })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.url) {
        var url = '../' + res.url;
        var input = document.getElementById('heroBgVideoInput');
        if (input) input.value = url;
        updateHeroVideoPreview(url);
        ADMIN_STATE.settings.heroBgVideo = url;
        syncSettingsToServer({ heroBgVideo: url });
        showToast('Hero background video uploaded & saved! 🎥', 'success');
      } else if (res && res.message) {
        showToast('Hero video upload error: ' + res.message, 'error');
      }
    })
    .catch(function (err) {
      showToast('Hero video upload error: ' + err.message, 'error');
    });
}

function updateHeroImagePreview(url) {
  var c = document.getElementById('heroImagePreviewContainer');
  var img = document.getElementById('heroImagePreview');
  if (!c || !img) return;
  if (url && url.trim()) {
    img.src = url.trim();
    c.style.display = 'block';
  } else {
    c.style.display = 'none';
  }
}

function handleHeroBgImagePick(e) {
  var file = e.target.files[0];
  if (!file) return;
  var formData = new FormData();
  formData.append('file', file);
  formData.append('admin_token', getAdminToken());
  showToast('Uploading hero wallpaper image...', 'info');
  adminFetch('../api/api.php?action=upload', { method: 'POST', body: formData })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.url) {
        var url = '../' + res.url;
        var input = document.getElementById('heroBgImageInput');
        if (input) input.value = url;
        updateHeroImagePreview(url);
        ADMIN_STATE.settings.heroBgImage = url;
        syncSettingsToServer({ heroBgImage: url });
        showToast('Hero background image uploaded & saved! 📸', 'success');
      } else if (res && res.message) {
        showToast('Hero image upload error: ' + res.message, 'error');
      }
    })
    .catch(function (err) {
      showToast('Hero image upload error: ' + err.message, 'error');
    });
}

function handleSaveHeroCustomizer(e) {
  if (e) e.preventDefault();
  var badge = document.getElementById('heroBadgeInput').value.trim();
  var title = document.getElementById('heroTitleInput').value.trim();
  var subtitle = document.getElementById('heroSubtitleInput').value.trim();
  var hero3dEnabled = document.getElementById('hero3dEnabledSelect').value;
  var hero3dStyle = document.getElementById('hero3dStyleSelect').value;
  var product3dEnabled = document.getElementById('product3dEnabledSelect') ? document.getElementById('product3dEnabledSelect').value : 'yes';
  var antiInspectEnabled = document.getElementById('antiInspectSelect') ? document.getElementById('antiInspectSelect').value : 'yes';
  var googleClientId = document.getElementById('googleClientIdInput') ? document.getElementById('googleClientIdInput').value.trim() : '';
  var bgVideo = document.getElementById('heroBgVideoInput').value.trim();
  var bgImage = document.getElementById('heroBgImageInput').value.trim();
  var btn1Text = document.getElementById('heroBtn1TextInput').value.trim();
  var btn1Link = document.getElementById('heroBtn1LinkInput').value.trim();
  var btn2Text = document.getElementById('heroBtn2TextInput').value.trim();
  var btn2Link = document.getElementById('heroBtn2LinkInput').value.trim();

  ADMIN_STATE.settings.heroBadge = badge;
  ADMIN_STATE.settings.heroTitle = title;
  ADMIN_STATE.settings.heroSubtitle = subtitle;
  ADMIN_STATE.settings.hero3dEnabled = hero3dEnabled;
  ADMIN_STATE.settings.hero3dStyle = hero3dStyle;
  ADMIN_STATE.settings.product3dEnabled = product3dEnabled;
  ADMIN_STATE.settings.antiInspectEnabled = antiInspectEnabled;
  ADMIN_STATE.settings.googleClientId = googleClientId;
  ADMIN_STATE.settings.heroBgVideo = bgVideo;
  ADMIN_STATE.settings.heroBgImage = bgImage;
  ADMIN_STATE.settings.heroBtn1Text = btn1Text;
  ADMIN_STATE.settings.heroBtn1Link = btn1Link;
  ADMIN_STATE.settings.heroBtn2Text = btn2Text;
  ADMIN_STATE.settings.heroBtn2Link = btn2Link;

  syncSettingsToServer({
    heroBadge: badge,
    heroTitle: title,
    heroSubtitle: subtitle,
    hero3dEnabled: hero3dEnabled,
    hero3dStyle: hero3dStyle,
    product3dEnabled: product3dEnabled,
    antiInspectEnabled: antiInspectEnabled,
    googleClientId: googleClientId,
    heroBgVideo: bgVideo,
    heroBgImage: bgImage,
    heroBtn1Text: btn1Text,
    heroBtn1Link: btn1Link,
    heroBtn2Text: btn2Text,
    heroBtn2Link: btn2Link
  });

  showToast('🎮 3D Hero and storefront customizations saved!', 'success');
}

function handleSaveSocialSettings(e) {
  if (e) e.preventDefault();
  var tg = document.getElementById('socialTelegramInput').value.trim();
  var ds = document.getElementById('socialDiscordInput').value.trim();
  var wa = document.getElementById('socialWhatsappInput').value.trim();
  var yt = document.getElementById('socialYoutubeInput').value.trim();

  ADMIN_STATE.settings.telegramLink = tg;
  ADMIN_STATE.settings.discordLink = ds;
  ADMIN_STATE.settings.whatsappLink = wa;
  ADMIN_STATE.settings.youtubeLink = yt;

  syncSettingsToServer({
    telegramLink: tg,
    discordLink: ds,
    whatsappLink: wa,
    youtubeLink: yt
  });

  showToast('🌐 Social media links updated successfully!', 'success');
}

// ═══════════════════════════════════════════
// GLOBAL HELPERS & TOAST
// ═══════════════════════════════════════════
function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(msg, type) {
  var c = document.getElementById('adminToastContainer');
  if (!c) return;

  var toast = document.createElement('div');
  toast.className = 'admin-toast ' + (type || 'info');
  toast.textContent = msg;

  c.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

function closeModal(id) {
  var el = document.getElementById(id);
  if (el) el.remove();
}

function removeModal(id) {
  closeModal(id);
}

function handleModalBackdropClick(event, modalId) {
  if (event.target && event.target.id === modalId) {
    closeModal(modalId);
  }
}
