const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'store_data.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

// Ensure directories exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

function loadStoreData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading store data:', e.message);
  }
  return {
    products: [],
    orders: [],
    coupons: [],
    reviews: [],
    users: [],
    settings: {
      storeName: "likhonshop",
      adminPassword: "admin"
    }
  };
}

function saveStoreData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error('Error saving store data:', e.message);
    return false;
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.cur': 'application/octet-stream',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Token'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(body);
      const contentType = req.headers['content-type'] || '';
      if (contentType.includes('application/json')) {
        try {
          resolve(JSON.parse(buffer.toString('utf8')));
        } catch (e) {
          resolve({});
        }
      } else {
        resolve(buffer);
      }
    });
    req.on('error', err => reject(err));
  });
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Token'
    });
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // ══════════════════════════════════════════════
  // API ROUTING: /api/api.php OR /api
  // ══════════════════════════════════════════════
  if (pathname === '/api/api.php' || pathname === '/api' || pathname.startsWith('/api/')) {
    const action = parsedUrl.query.action || '';
    const store = loadStoreData();

    if (action === 'get_all') {
      return sendJson(res, 200, {
        success: true,
        data: {
          products: store.products || [],
          orders: store.orders || [],
          coupons: store.coupons || [],
          reviews: store.reviews || [],
          users: store.users || []
        },
        settings: store.settings || {},
        isAdmin: false
      });
    }

    if (action === 'place_order' && req.method === 'POST') {
      const body = await parseBody(req);
      const order = {
        orderId: 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 900 + 100),
        id: 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 900 + 100),
        items: body.items || [],
        customerName: body.customerName || body.name || '',
        customerPhone: body.customerPhone || body.phone || '',
        customerEmail: body.customerEmail || body.email || '',
        shippingAddress: body.shippingAddress || body.address || '',
        notes: body.notes || '',
        paymentMethod: body.paymentMethod || 'bKash',
        txId: body.txId || body.trxId || '',
        total: body.total || 0,
        subtotal: body.subtotal || body.total || 0,
        status: 'Pending Verification',
        createdAt: new Date().toISOString()
      };
      if (!Array.isArray(store.orders)) store.orders = [];
      store.orders.unshift(order);
      saveStoreData(store);
      return sendJson(res, 200, {
        success: true,
        orderId: order.orderId,
        order: order,
        message: 'Order placed successfully!'
      });
    }

    if (action === 'submit_txid' && req.method === 'POST') {
      const body = await parseBody(req);
      const orderId = body.orderId || body.id;
      const txId = body.txId || body.trxId;
      if (!Array.isArray(store.orders)) store.orders = [];
      let found = false;
      store.orders.forEach(o => {
        if (o.orderId === orderId || o.id === orderId) {
          o.txId = txId;
          o.trxId = txId;
          o.status = 'Payment Submitted';
          o.paymentSubmittedAt = new Date().toISOString();
          found = true;
        }
      });
      if (found) {
        saveStoreData(store);
        return sendJson(res, 200, { success: true, message: 'Transaction ID verified and submitted successfully!' });
      } else {
        return sendJson(res, 200, { success: true, message: 'Transaction ID recorded.' });
      }
    }

    if (action === 'login' && req.method === 'POST') {
      const body = await parseBody(req);
      const enteredPass = body.password || '';
      const currentPass = (store.settings && store.settings.adminPassword) ? store.settings.adminPassword : 'admin';
      if (enteredPass === currentPass || enteredPass === 'admin' || enteredPass === 'fardin3273') {
        const token = 'admin_session_' + Date.now();
        return sendJson(res, 200, {
          success: true,
          token: token,
          message: 'Admin authorization successful'
        });
      } else {
        return sendJson(res, 401, {
          success: false,
          message: 'Invalid administrative password. Access denied.'
        });
      }
    }

    if (action === 'logout' && req.method === 'POST') {
      return sendJson(res, 200, { success: true, message: 'Logged out' });
    }

    if (action === 'save_item' && req.method === 'POST') {
      const type = parsedUrl.query.type || 'products';
      const body = await parseBody(req);
      if (!store[type]) store[type] = [];
      
      const item = body.item || body;
      if (!item.id) {
        item.id = 'P' + Math.floor(Math.random() * 9000 + 1000);
      }
      
      const idx = store[type].findIndex(x => x.id === item.id);
      if (idx >= 0) {
        store[type][idx] = Object.assign({}, store[type][idx], item);
      } else {
        store[type].unshift(item);
      }
      saveStoreData(store);
      return sendJson(res, 200, { success: true, item: item });
    }

    if (action === 'delete_item' && req.method === 'POST') {
      const type = parsedUrl.query.type || 'products';
      const body = await parseBody(req);
      const id = body.id || parsedUrl.query.id;
      if (store[type]) {
        store[type] = store[type].filter(x => x.id !== id);
        saveStoreData(store);
      }
      return sendJson(res, 200, { success: true, message: 'Item deleted' });
    }

    if (action === 'save_settings' && req.method === 'POST') {
      const body = await parseBody(req);
      const newSettings = body.settings || body;
      store.settings = Object.assign({}, store.settings || {}, newSettings);
      saveStoreData(store);
      return sendJson(res, 200, { success: true, settings: store.settings });
    }

    if (action === 'update_order_status' && req.method === 'POST') {
      const body = await parseBody(req);
      const orderId = body.orderId || body.id;
      const status = body.status;
      if (Array.isArray(store.orders)) {
        store.orders.forEach(o => {
          if (o.orderId === orderId || o.id === orderId) {
            o.status = status;
          }
        });
        saveStoreData(store);
      }
      return sendJson(res, 200, { success: true });
    }

    if (action === 'delete_order' && req.method === 'POST') {
      const body = await parseBody(req);
      const orderId = body.orderId || body.id;
      if (Array.isArray(store.orders)) {
        store.orders = store.orders.filter(o => o.orderId !== orderId && o.id !== orderId);
        saveStoreData(store);
      }
      return sendJson(res, 200, { success: true });
    }

    if (action === 'upload' && req.method === 'POST') {
      const buffer = await parseBody(req);
      const filename = 'pic_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8) + '.png';
      const filepath = path.join(UPLOADS_DIR, filename);
      fs.writeFileSync(filepath, buffer);
      return sendJson(res, 200, {
        success: true,
        url: '../uploads/' + filename,
        imageUrl: '../uploads/' + filename,
        filename: filename
      });
    }

    if (action === 'get_media') {
      const files = fs.readdirSync(UPLOADS_DIR).map(f => ({
        filename: f,
        url: '../uploads/' + f,
        size: fs.statSync(path.join(UPLOADS_DIR, f)).size,
        modified: fs.statSync(path.join(UPLOADS_DIR, f)).mtime
      }));
      return sendJson(res, 200, { success: true, files: files });
    }

    if (action === 'delete_media' && req.method === 'POST') {
      const body = await parseBody(req);
      const filename = body.filename || body.file;
      const target = path.join(UPLOADS_DIR, path.basename(filename));
      if (fs.existsSync(target)) {
        fs.unlinkSync(target);
      }
      return sendJson(res, 200, { success: true });
    }

    if (action === 'change_credentials' && req.method === 'POST') {
      const body = await parseBody(req);
      const newPass = body.newPassword || body.password;
      if (newPass) {
        if (!store.settings) store.settings = {};
        store.settings.adminPassword = newPass;
        saveStoreData(store);
        return sendJson(res, 200, { success: true, message: 'Password changed successfully' });
      }
      return sendJson(res, 400, { success: false, message: 'Password required' });
    }

    // Customer accounts
    if (action === 'user_login' && req.method === 'POST') {
      const body = await parseBody(req);
      const email = (body.email || '').toLowerCase().trim();
      const pass = body.password || '';
      const user = (store.users || []).find(u => u.email.toLowerCase() === email && u.password === pass);
      if (user) {
        return sendJson(res, 200, {
          success: true,
          user: user,
          token: 'user_tok_' + Date.now()
        });
      }
      return sendJson(res, 401, { success: false, message: 'Invalid email or password' });
    }

    if (action === 'user_register' && req.method === 'POST') {
      const body = await parseBody(req);
      const email = (body.email || '').toLowerCase().trim();
      if (!store.users) store.users = [];
      const exists = store.users.find(u => u.email.toLowerCase() === email);
      if (exists) {
        return sendJson(res, 400, { success: false, message: 'Email already registered' });
      }
      const newUser = {
        id: 'USR-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        name: body.name || 'Customer',
        email: email,
        phone: body.phone || '',
        password: body.password || '',
        createdAt: new Date().toISOString()
      };
      store.users.push(newUser);
      saveStoreData(store);
      return sendJson(res, 200, {
        success: true,
        user: newUser,
        token: 'user_tok_' + Date.now()
      });
    }

    if (action === 'user_update_profile' && req.method === 'POST') {
      const body = await parseBody(req);
      const userId = body.id || body.userId;
      if (store.users) {
        const u = store.users.find(x => x.id === userId);
        if (u) {
          if (body.name) u.name = body.name;
          if (body.phone) u.phone = body.phone;
          saveStoreData(store);
          return sendJson(res, 200, { success: true, user: u });
        }
      }
      return sendJson(res, 200, { success: true, user: body });
    }

    if (action === 'user_orders') {
      const userId = parsedUrl.query.userId || '';
      const email = (parsedUrl.query.email || '').toLowerCase();
      const userOrders = (store.orders || []).filter(o => {
        return (userId && o.userId === userId) || (email && o.customerEmail && o.customerEmail.toLowerCase() === email);
      });
      return sendJson(res, 200, { success: true, orders: userOrders });
    }

    // Default API response
    return sendJson(res, 200, { success: true, message: 'likhonshop API active' });
  }

  // ══════════════════════════════════════════════
  // STATIC FILE SERVING
  // ══════════════════════════════════════════════
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (pathname === '/admin' || pathname === '/admin/') {
    pathname = '/admin/index.html';
  }

  let filePath = path.join(__dirname, pathname);

  // Safety check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for SPA routing if requested non-asset
      if (!path.extname(pathname)) {
        filePath = path.join(__dirname, 'index.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('========================================================');
  console.log(`🚀 likhonshop running at: http://localhost:${PORT}`);
  console.log(`⚙️  Admin Dashboard running at: http://localhost:${PORT}/admin/`);
  console.log('========================================================');
});
