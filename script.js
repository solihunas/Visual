// ===== PRODUCTS DATA =====
const products = [
  { id: 1, cat: 'elektronik', icon: '💻', name: 'Laptop Gaming Pro X1', desc: 'Performa tinggi untuk gaming dan profesional.', price: 'Rp 18.500.000', badge: 'Terlaris' },
  { id: 2, cat: 'elektronik', icon: '📱', name: 'Smartphone Ultra 5G', desc: 'Layar AMOLED 120Hz, baterai tahan lama.', price: 'Rp 7.200.000', badge: 'Baru' },
  { id: 3, cat: 'elektronik', icon: '🖥️', name: 'Monitor 4K Curved', desc: '32 inci, 165Hz, panel IPS warna akurat.', price: 'Rp 9.800.000', badge: 'Hot' },
  { id: 4, cat: 'aksesori', icon: '🎧', name: 'Headset Wireless Pro', desc: 'Noise cancelling, suara jernih, 30 jam baterai.', price: 'Rp 1.250.000', badge: 'Diskon' },
  { id: 5, cat: 'aksesori', icon: '⌨️', name: 'Keyboard Mekanikal RGB', desc: 'Switch tactile, RGB 16 juta warna, tahan lama.', price: 'Rp 850.000', badge: 'Terlaris' },
  { id: 6, cat: 'aksesori', icon: '🖱️', name: 'Mouse Gaming 16000 DPI', desc: 'Sensor optik presisi tinggi untuk competitive gaming.', price: 'Rp 450.000', badge: 'Baru' },
  { id: 7, cat: 'software', icon: '🛡️', name: 'Antivirus Premium 1 Tahun', desc: 'Perlindungan real-time, 3 perangkat sekaligus.', price: 'Rp 320.000', badge: 'Promo' },
  { id: 8, cat: 'software', icon: '🎨', name: 'Design Suite Pro', desc: 'Paket lengkap untuk desainer grafis profesional.', price: 'Rp 1.800.000', badge: 'Hot' },
];

// ===== RENDER PRODUCTS =====
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? products : products.filter(p => p.cat === filter);
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.innerHTML = `
      <span class="product-badge">${p.badge}</span>
      <div class="product-icon">${p.icon}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="product-price">${p.price}</div>
      <a href="#contact" class="btn btn-outline">Pesan Sekarang</a>
    `;
    grid.appendChild(card);
  });
  observeFadeIns();
}

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
});

// ===== INTERSECTION OBSERVER (fade-in) =====
function observeFadeIns() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => { el.classList.remove('visible'); io.observe(el); });
}

// ===== ANIMATED COUNTERS =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString('id-ID');
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

const aboutSection = document.getElementById('about');
const counterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) { animateCounters(); counterObserver.disconnect(); }
}, { threshold: 0.3 });
counterObserver.observe(aboutSection);

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.classList.add('show');
  this.reset();
  setTimeout(() => success.classList.remove('show'), 5000);
});

// ===== ADD FADE-IN TO SECTIONS =====
document.querySelectorAll('.about-card, .product-card, .info-item, .about-text, .about-cards, .contact-form').forEach(el => {
  el.classList.add('fade-in');
});

// ===== INIT =====
renderProducts();
observeFadeIns();
