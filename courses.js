
'use strict';

const NAVBAR_HTML = `
<nav class="navbar">
  <a href="course-detail.html" class="navbar__logo">
  <img src="../images/logo.png" alt="Byway" style="height: 32px; width: auto;"/>
</a>
  <span class="navbar__categories hide-mobile">Categories</span>
  <div class="navbar__search hide-mobile">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C94A3" stroke-width="2">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    <input type="text" placeholder="Search courses"/>
  </div>
  <div class="navbar__right">
    <a href="#" class="navbar__teach hide-mobile">Teach on Byway</a>
    <div class="navbar__icons">
      <button class="icon-btn hide-mobile" title="Wishlist">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <a href="cart.html" class="icon-btn cart-btn" title="Cart">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span class="cart-count" id="cartCount">3</span>
      </a>
      <button class="icon-btn hide-mobile" title="Notifications">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </button>
    </div>
    <div class="navbar__avatar">J</div>
  </div>
  <button class="navbar__burger" id="burger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu__search">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C94A3" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input type="text" placeholder="Search courses"/>
  </div>
  <a href="#" class="mobile-menu__link">Categories</a>
  <a href="#" class="mobile-menu__link">Teach on Byway</a>
  <a href="cart.html" class="mobile-menu__link">Cart</a>
  <a href="#" class="mobile-menu__link">Wishlist</a>
  <div style="height:1px;background:var(--border);margin:8px 0"></div>
  <a href="#" class="mobile-menu__link">My Profile</a>
</div>
<div class="mobile-overlay" id="mobileOverlay"></div>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="course-detail.html" class="footer-logo">
     <img src="../images/logo1.png" alt="Byway" style="height: 28px; width: auto;"/>
        </a>
        <p>Empowering learners through accessible and engaging online education. Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
      </div>
      <div class="footer-col">
        <h4>Get Help</h4>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Latest Articles</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Programs</h4>
        <ul>
          <li><a href="#">Art &amp; Design</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">IT &amp; Software</a></li>
          <li><a href="#">Languages</a></li>
          <li><a href="#">Programming</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li>Address: 123 Main Street, Anytown, CA 12345</li>
          <li>Tel: +(123) 456-7890</li>
          <li>Mail: bywayedu@webkul.in</li>
        </ul>
        <div class="footer-socials">
          <a href="#" class="footer-social" title="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="footer-social" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
          <a href="#" class="footer-social" title="Google">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
          </a>
          <a href="#" class="footer-social" title="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="footer-social" title="Microsoft">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span class="footer-year"></span> Byway. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

/* ══════════════════════════════════════════════
   INJECT NAVBAR & FOOTER
══════════════════════════════════════════════ */
function injectLayout() {
  // Navbar
  const navbarEl = document.getElementById('navbar-placeholder');
  if (navbarEl) navbarEl.innerHTML = NAVBAR_HTML;

  // Footer
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Set current year
  document.querySelectorAll('.footer-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Highlight active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.navbar a').forEach(a => {
    if (a.href && path.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });

  // Init mobile menu after injection
  initMobileMenu();
  updateCartCount();
}

/* ══════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════ */
function initMobileMenu() {
  const burger  = document.getElementById('burger');
  const menu    = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  if (!burger || !menu) return;

  const open  = () => { menu.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { menu.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; };

  burger.addEventListener('click', open);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ══════════════════════════════════════════════
   CART STATE (localStorage)
══════════════════════════════════════════════ */
const Cart = {
  KEY: 'byway_cart',

  getItems() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },

  saveItems(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    updateCartCount();
  },

  addItem(item) {
    const items = this.getItems();
    if (!items.find(i => i.id === item.id)) {
      items.push(item);
      this.saveItems(items);
    }
  },

  removeItem(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
  },

  clear() { localStorage.removeItem(this.KEY); updateCartCount(); },

  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price, 0);
  }
};

function updateCartCount() {
  const count = Cart.getItems().length;
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ══════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════ */
function showToast(message, type = 'success') {
  const icons = { success: '✅', danger: '❌', info: 'ℹ️', warning: '⚠️' };
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${icons[type]||'ℹ️'}</span><span>${message}</span>`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transition='opacity .3s'; setTimeout(()=>t.remove(),300); }, 3200);
}

/* ══════════════════════════════════════════════
   PAGE: COURSE DETAIL
══════════════════════════════════════════════ */
function initCourseDetail() {
  if (!document.querySelector('.cd-layout')) return;

  /* -- Tabs -- */
  const tabs   = document.querySelectorAll('.cd-tab');
  const panels = document.querySelectorAll('.cd-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.querySelector(tab.dataset.target);
      if (target) target.classList.add('active');
    });
  });

  /* -- Syllabus accordion -- */
  document.querySelectorAll('.syl-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.syl-item');
      const body = item.querySelector('.syl-body');
      const icon = header.querySelector('.syl-icon');
      const open = item.classList.toggle('open');
      if (body) body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
      if (icon) icon.textContent = open ? '▾' : '▸';
    });
    // Open first by default
    if (header.closest('.syl-item')?.dataset.default === 'true') header.click();
  });

  /* -- Read more -- */
  const rmBtn  = document.getElementById('readMoreBtn');
  const rmWrap = document.getElementById('readMoreWrap');
  if (rmBtn && rmWrap) {
    rmBtn.addEventListener('click', () => {
      const open = rmWrap.classList.toggle('open');
      rmBtn.innerHTML = open ? 'Show less ▴' : 'Show more ▾';
    });
  }

  /* -- Add to cart -- */
  document.getElementById('addToCartBtn')?.addEventListener('click', () => {
    Cart.addItem({ id: 'ux-design-101', title: 'Introduction to User Experience Design', price: 45, instructor: 'John Doe', image: '' });
    showToast('Course added to cart!');
    setTimeout(() => window.location.href = 'cart.html', 1000);
  });

  document.getElementById('buyNowBtn')?.addEventListener('click', () => {
    Cart.addItem({ id: 'ux-design-101', title: 'Introduction to User Experience Design', price: 45, instructor: 'John Doe', image: '' });
    window.location.href = 'checkout.html';
  });
}

/* ══════════════════════════════════════════════
   PAGE: SHOPPING CART
══════════════════════════════════════════════ */
function initCart() {
  const cartList = document.getElementById('cartList');
  if (!cartList) return;

  function render() {
    const items = Cart.getItems();
    const countEl = document.getElementById('cartItemCount');
    if (countEl) countEl.textContent = `${items.length} Course${items.length !== 1 ? 's' : ''} in cart`;

    if (items.length === 0) {
      cartList.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart__icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Find a course to get started</p>
          <a href="course-detail.html" class="btn btn-primary">Browse Courses</a>
        </div>`;
      updateSummary(0);
      return;
    }

    cartList.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item__thumb">
          <div class="cart-item__thumb-placeholder">🎨</div>
        </div>
        <div class="cart-item__info">
          <h3 class="cart-item__title">${item.title}</h3>
          <p class="cart-item__author">By ${item.instructor}</p>
          <div class="cart-item__meta">
            <span class="cart-rating">4.6</span>
            <div class="stars">★★★★★</div>
            <span class="cart-meta-text">(250 rating) · 22 Total Hours. 155 Lectures. All levels</span>
          </div>
          <div class="cart-item__actions">
            <button class="cart-action-btn save-btn" data-id="${item.id}">Save for later</button>
            <button class="cart-action-btn remove-btn" data-id="${item.id}">Remove</button>
          </div>
        </div>
        <div class="cart-item__price">$${item.price.toFixed(2)}</div>
      </div>
    `).join('');

    // Remove buttons
    cartList.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Cart.removeItem(btn.dataset.id);
        render();
        showToast('Item removed from cart', 'info');
      });
    });

    // Save for later (mock)
    cartList.querySelectorAll('.save-btn').forEach(btn => {
      btn.addEventListener('click', () => showToast('Saved for later!', 'info'));
    });

    const total = items.reduce((s, i) => s + i.price, 0);
    updateSummary(total);
  }

  function updateSummary(total) {
    const discount = 10;
    const tax      = 20;
    const grand    = Math.max(0, total - discount + tax);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('summaryPrice',    `$${total.toFixed(2)}`);
    set('summaryDiscount', `-$${discount.toFixed(2)}`);
    set('summaryTax',      `$${tax.toFixed(2)}`);
    set('summaryTotal',    `$${grand.toFixed(2)}`);
  }

  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (Cart.getItems().length === 0) { showToast('Your cart is empty', 'warning'); return; }
    window.location.href = 'checkout.html';
  });

  render();
}

/* ══════════════════════════════════════════════
   PAGE: CHECKOUT
══════════════════════════════════════════════ */
function initCheckout() {
  if (!document.getElementById('checkoutForm')) return;

  /* -- Payment method toggle -- */
  const radios = document.querySelectorAll('input[name="payment"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById(`panel-${radio.value}`);
      if (panel) panel.classList.add('active');
    });
  });

  /* -- Coupon -- */
  document.getElementById('applyCouponBtn')?.addEventListener('click', () => {
    const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
    if (code === 'SAVE10') {
      showToast('Coupon applied! Extra $10 off 🎉', 'success');
    } else if (code) {
      showToast('Invalid coupon code', 'danger');
    }
  });

  /* -- Card number formatter -- */
  const cardInput = document.getElementById('cardNumber');
  if (cardInput) {
    cardInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 16);
      e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
    });
  }

  /* -- Expiry formatter -- */
  const expiryInput = document.getElementById('expiryDate');
  if (expiryInput) {
    expiryInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 4);
      if (v.length >= 2) v = v.slice(0,2) + '/' + v.slice(2);
      e.target.value = v;
    });
  }

  /* -- Form submit -- */
  document.getElementById('checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('submitPaymentBtn');
    if (!btn) return;
    btn.textContent = 'Processing...';
    btn.disabled = true;
    setTimeout(() => {
      Cart.clear();
      window.location.href = 'order-complete.html';
    }, 1800);
  });

  /* -- Render order sidebar -- */
  renderCheckoutSidebar();
}

function renderCheckoutSidebar() {
  const items = Cart.getItems();
  const container = document.getElementById('checkoutItems');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `<p style="padding:14px 20px;font-size:13px;color:var(--muted)">No items in cart.</p>`;
  } else {
    container.innerHTML = items.map(item => `
      <div class="co-item">
        <div class="co-item__thumb">🎨</div>
        <div class="co-item__info">
          <span class="co-item__category">Design</span>
          <p class="co-item__title">${item.title}</p>
          <p class="co-item__meta">155 Lectures · 22 Total Hours</p>
          <p class="co-item__price">$${item.price.toFixed(2)}</p>
        </div>
      </div>
    `).join('');
  }

  // Calculate totals from actual cart
  const subtotal  = Cart.getItems().reduce((sum, i) => sum + i.price, 0);
  const discount  = subtotal > 0 ? 10 : 0;
  const tax       = subtotal > 0 ? 20 : 0;
  const total     = Math.max(0, subtotal - discount + tax);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summaryPrice',    `$${subtotal.toFixed(2)}`);
  set('summaryDiscount', `-$${discount.toFixed(2)}`);
  set('summaryTax',      `$${tax.toFixed(2)}`);
  set('summaryTotal',    `$${total.toFixed(2)}`);
}

/* ══════════════════════════════════════════════
   PAGE: ORDER COMPLETE
══════════════════════════════════════════════ */
function initOrderComplete() {
  if (!document.querySelector('.order-complete-page')) return;

  // Animate checkmark on load
  const circle = document.querySelector('.success-circle');
  if (circle) {
    setTimeout(() => circle.classList.add('animate'), 100);
  }

  // Confetti burst (CSS-only, lightweight)
  spawnConfetti();
}

function spawnConfetti() {
  const colors = ['#FF6636','#23BD33','#0D6EFD','#FD8E1F','#6366F1','#EC4899'];
  const container = document.querySelector('.confetti-container');
  if (!container) return;

  for (let i = 0; i < 60; i++) {
    const dot = document.createElement('div');
    dot.className = 'confetti-dot';
    dot.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${Math.random() * 8 + 4}px;
      height: ${Math.random() * 8 + 4}px;
      animation-delay: ${Math.random() * 0.8}s;
      animation-duration: ${Math.random() * 1.5 + 1}s;
    `;
    container.appendChild(dot);
  }
}

/* ══════════════════════════════════════════════
   INIT ALL
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initCourseDetail();
  initCart();
  initCheckout();
  initOrderComplete();
});
