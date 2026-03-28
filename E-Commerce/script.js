// ==========================================
// E-Commerce Website — JavaScript
// ==========================================

// --- Product Data ---
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "electronics",
    price: 12499,
    originalPrice: 16999,
    image: "images/headphones.png",
    description: "Immersive sound with active noise cancellation, 30-hour battery life, and ultra-comfortable fit.",
    rating: 4.8,
    reviews: 342,
    badge: "hot"
  },
  {
    id: 2,
    name: "Smart Fitness Watch Pro",
    category: "electronics",
    price: 21999,
    originalPrice: null,
    image: "images/smartwatch.png",
    description: "Track your health with advanced sensors, GPS, heart rate monitor, and 7-day battery life.",
    rating: 4.6,
    reviews: 218,
    badge: "new"
  },
  {
    id: 3,
    name: "AeroRun Performance Shoes",
    category: "sports",
    price: 7499,
    originalPrice: 10999,
    image: "images/running-shoes.png",
    description: "Lightweight, responsive cushioning for runners. Breathable mesh upper and durable outsole.",
    rating: 4.7,
    reviews: 156,
    badge: "sale"
  },
  {
    id: 4,
    name: "Urban Explorer Backpack",
    category: "fashion",
    price: 5499,
    originalPrice: null,
    image: "images/backpack.png",
    description: "Water-resistant 25L backpack with padded laptop sleeve, organizer pockets, and sleek design.",
    rating: 4.5,
    reviews: 89,
    badge: null
  },
  {
    id: 5,
    name: "Aviator Polarized Sunglasses",
    category: "fashion",
    price: 4999,
    originalPrice: 6999,
    image: "images/sunglasses.png",
    description: "Classic aviator style with UV400 polarized lenses and lightweight titanium frame.",
    rating: 4.4,
    reviews: 203,
    badge: "sale"
  },
  {
    id: 6,
    name: "ErgoLift Laptop Stand",
    category: "electronics",
    price: 3799,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    description: "Adjustable aluminum stand for better posture. Compatible with all laptops up to 17 inches.",
    rating: 4.3,
    reviews: 127,
    badge: "new"
  },
  {
    id: 7,
    name: "HydroFlask Insulated Bottle",
    category: "sports",
    price: 2999,
    originalPrice: 3799,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    description: "Double-wall vacuum insulated. Keeps drinks cold 24h or hot 12h. BPA-free stainless steel.",
    rating: 4.9,
    reviews: 418,
    badge: "hot"
  },
  {
    id: 8,
    name: "QiPad Wireless Charger",
    category: "electronics",
    price: 2499,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=400&h=400&fit=crop",
    description: "15W fast wireless charging pad with LED indicator. Compatible with all Qi-enabled devices.",
    rating: 4.2,
    reviews: 95,
    badge: null
  }
];

// --- State ---
let cart = [];
let activeFilter = 'all';

// --- SVG Icons ---
const icons = {
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  cart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starEmpty: `<svg class="empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  minus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  cartEmpty: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  bag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
};

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  setupNavigation();
  setupFilters();
  setupSearch();
  setupScrollAnimations();
  setupCart();
});

// --- Render Products ---
function renderProducts(productList) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = productList.map(product => {
    const starsHTML = renderStars(product.rating);
    const badgeHTML = product.badge ? `<span class="product-badge badge-${product.badge}">${product.badge}</span>` : '';
    const originalPriceHTML = product.originalPrice
      ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : '';

    return `
      <div class="product-card reveal" data-category="${product.category}" data-id="${product.id}">
        ${badgeHTML}
        <button class="wish-btn" onclick="toggleWish(this)" aria-label="Add to wishlist">${icons.heart}</button>
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-quick-actions">
            <button class="quick-action-btn" title="Quick View">${icons.eye}</button>
            <button class="quick-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">${icons.bag}</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h3>${product.name}</h3>
          <p class="description">${product.description}</p>
          <div class="product-rating">
            <div class="stars">${starsHTML}</div>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="product-footer">
            <div class="product-price">
              <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
              ${originalPriceHTML}
            </div>
            <button class="add-cart-btn" id="add-btn-${product.id}" onclick="addToCart(${product.id})">
              ${icons.bag}
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-trigger scroll animations
  setTimeout(() => {
    document.querySelectorAll('.product-card.reveal').forEach(el => {
      observeElement(el);
    });
  }, 100);
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    html += i < fullStars ? icons.star : icons.starEmpty;
  }
  return html;
}

// --- Navigation ---
function setupNavigation() {
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Scroll behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn?.classList.remove('active');
      navLinks?.classList.remove('open');
    });
  });
}

// --- Filters ---
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      activeFilter = filter;

      const filtered = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

      renderProducts(filtered);
    });
  });
}

// --- Search ---
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      const filtered = activeFilter === 'all'
        ? products
        : products.filter(p => p.category === activeFilter);
      renderProducts(filtered);
      return;
    }

    const results = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
    renderProducts(results);
  });
}

// --- Cart ---
function setupCart() {
  const cartBtn = document.getElementById('cart-btn');
  const closeBtn = document.getElementById('cart-close');
  const overlay = document.getElementById('cart-overlay');

  cartBtn?.addEventListener('click', openCart);
  closeBtn?.addEventListener('click', closeCart);
  overlay?.addEventListener('click', closeCart);
}

function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  showToast(`${product.name} added to cart!`);

  // Button animation
  const btn = document.getElementById(`add-btn-${productId}`);
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = `${icons.check} <span>Added</span>`;
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = `${icons.bag} <span>Add</span>`;
    }, 1500);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.querySelector('.cart-badge');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Badge
  if (badge) {
    badge.textContent = totalItems;
    badge.classList.toggle('show', totalItems > 0);
  }

  // Count
  if (cartCount) {
    cartCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
  }

  // Total
  if (cartTotal) {
    cartTotal.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
  }

  // Items
  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty">
          ${icons.cartEmpty}
          <h4>Your cart is empty</h4>
          <p>Add some products to get started!</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <div class="item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
            <div class="quantity-controls">
              <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">${icons.minus}</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">${icons.plus}</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">${icons.trash}</button>
        </div>
      `).join('');
    }
  }
}

// --- Wishlist ---
function toggleWish(btn) {
  btn.classList.toggle('active');
}

// --- Toast ---
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.querySelector('.toast-message').textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// --- Scroll Animations ---
function setupScrollAnimations() {
  document.querySelectorAll('.reveal').forEach(el => {
    observeElement(el);
  });
}

function observeElement(el) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(el);
}

// --- Newsletter Form ---
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input && input.value.includes('@')) {
    showToast('Thanks for subscribing! 🎉');
    input.value = '';
  }
}
