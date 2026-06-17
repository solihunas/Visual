'use strict';

// ===== REAL PRODUCT DATA FROM LYNK.ID/IPIDIGITAL =====
const products = [
  {
    id: 1,
    cat: 'prompt',
    icon: '🧠',
    badge: 'Best Seller',
    badgeCls: 'badge-bestseller',
    name: 'Neurobro Prompt: Basic, Pro, Ultra',
    desc: '15 template prompt siap pakai untuk AI signal crypto. Output lebih rapi, tidak ngawur, format clean — fokus setup high probability. Cocok untuk scalping 2–4 jam.',
    tiers: ['Basic', 'Pro', 'Ultra'],
    price: 'Rp 50.000',
    priceClass: 'price-paid',
    note: 'Format: BUY/SELL/HOLD + Entry, SL, TP1, TP2',
    link: 'https://lynk.id/ipidigital',
    btnText: 'Beli Sekarang',
    btnClass: 'btn-outline',
  },
  {
    id: 2,
    cat: 'ai',
    icon: '🤖',
    badge: 'Best Seller',
    badgeCls: 'badge-bestseller',
    name: 'Latih ChatGPT / Claude Jadi AI Trade Signaler',
    desc: 'E-book cara melatih ChatGPT / Claude agar memahami gaya trading Anda, setup favorit, kebiasaan market XAU, dan pola fake breakout. AI semakin nyambung seiring waktu.',
    tiers: [],
    price: 'Rp 550.000',
    priceClass: 'price-paid',
    note: 'Cocok untuk: XAUUSD, Crypto, Forex, Saham',
    link: 'https://lynk.id/ipidigital',
    btnText: 'Beli Sekarang',
    btnClass: 'btn-outline',
  },
  {
    id: 3,
    cat: 'ai',
    icon: '🎯',
    badge: 'Premium',
    badgeCls: 'badge-hot',
    name: 'Sniper Claude AI Signaler',
    desc: 'Paket lengkap: E-book latih Claude untuk sniper entry + 500.000 data candle XAUUSD + Indikator Breakout V7.0. AI yang benar-benar belajar dari market & pengalaman trading Anda.',
    tiers: [],
    price: 'Rp 3.500.000',
    priceClass: 'price-paid',
    note: 'Termasuk: E-book + Data XAUUSD 500K candle + Indikator V7.0',
    link: 'https://lynk.id/ipidigital',
    btnText: 'Beli Sekarang',
    btnClass: 'btn-outline',
  },
  {
    id: 4,
    cat: 'ea',
    icon: '⚙️',
    badge: 'Otomatis',
    badgeCls: '',
    name: 'Trend Following EA MT5',
    desc: 'Expert Advisor breakout strategy untuk MT5. Single entry, tanpa martingale. Rata-rata 1–2 trade/hari. Backtest Jan–Okt 2025: profit ±$6.620, drawdown $105.',
    tiers: [],
    price: 'Rp 3.000.000',
    priceClass: 'price-paid',
    note: 'Backtest RR 1:3 | Profit ±$6.620 | 0.01 Lot',
    link: 'https://lynk.id/ipidigital',
    btnText: 'Beli Sekarang',
    btnClass: 'btn-outline',
  },
  {
    id: 5,
    cat: 'indikator',
    icon: '📊',
    badge: 'Diskon 83%',
    badgeCls: 'badge-new',
    name: 'Indikator TradingView V6',
    desc: 'Kombinasi RSI + EMA + ATR untuk deteksi reversal & tren akurat. Tersedia panduan instalasi + optimasi. Cocok untuk Forex, Crypto, dan Saham.',
    tiers: [],
    price: 'Rp 750.000',
    priceClass: 'price-paid',
    note: '~~Rp 4.500.000~~ → Rp 750.000 | Harga promo terbatas',
    link: 'https://lynk.id/ipidigital',
    btnText: 'Beli Sekarang',
    btnClass: 'btn-outline',
  },
  {
    id: 6,
    cat: 'ai',
    icon: '🆓',
    badge: 'GRATIS',
    badgeCls: 'badge-free',
    name: 'AI Crypto Signal',
    desc: 'Akses sinyal kripto berbasis AI secara gratis. Cocok untuk trader pemula yang ingin mencoba kualitas sinyal IPIDIGITAL sebelum upgrade ke paket premium.',
    tiers: [],
    price: 'GRATIS',
    priceClass: 'price-free',
    note: 'Tidak perlu pembayaran',
    link: 'https://lynk.id/ipidigital',
    btnText: 'Ambil Gratis',
    btnClass: 'btn-green',
  },
];

const testimonials = [
  { name: 'Andi R.', role: 'Trader Crypto Futures', stars: 5, text: 'Neurobro Prompt benar-benar game changer! Sinyal AI jadi jauh lebih rapi dan terarah. Sekarang saya bisa scalping dengan lebih percaya diri karena output-nya clean banget.' },
  { name: 'Budi S.', role: 'Trader XAU/USD', stars: 5, text: 'Habis beli e-book Latih Claude, cara pakai AI buat trading saya berubah total. AI-nya makin ngerti gaya entry saya seiring waktu. Worth banget di harga segitu!' },
  { name: 'Citra M.', role: 'Full-time Trader', stars: 5, text: 'Sniper Claude AI Signaler paketnya lengkap banget — ada data candle 500K XAUUSD dan indikator Breakout V7. Akurasi entry saya meningkat signifikan sejak pakai ini.' },
  { name: 'Doni P.', role: 'Trader MT5', stars: 5, text: 'EA Trend Following benar-benar autopilot! Satu kali setup, biarkan jalan. Backtest-nya jujur dan hasilnya di akun live saya cukup konsisten. Tidak martingale, aman!' },
  { name: 'Eka W.', role: 'Trader TradingView', stars: 5, text: 'Indikator V6 dengan kombinasi RSI+EMA+ATR ini luar biasa! Sinyal reversal-nya akurat banget. Harga promo Rp750K dari Rp4.5jt itu nilai yang gila-gilaan!' },
  { name: 'Fahri L.', role: 'Trader Pemula', stars: 5, text: 'Mulai dari AI Crypto Signal gratis dulu, langsung ketagihan kualitas sinyalnya. Akhirnya upgrade ke Neurobro Prompt. Komunitas dan support-nya juga aktif banget!' },
];

const faqs = [
  { q: 'Bagaimana cara mendapatkan produk setelah pembelian?', a: 'Semua produk IPIDIGITAL adalah digital dan dikirim instan. Setelah pembayaran dikonfirmasi melalui lynk.id/ipidigital, link akses atau file akan langsung dikirim ke email Anda dalam beberapa menit.' },
  { q: 'Apakah Neurobro Prompt bisa dipakai di ChatGPT dan Claude?', a: 'Ya! Neurobro Prompt dirancang agar kompatibel dengan ChatGPT, Claude, dan AI assistant lainnya. Cukup copy-paste prompt ke AI pilihan Anda dan hasilnya akan langsung rapi dan terstruktur.' },
  { q: 'EA MT5 apakah aman? Apakah menggunakan martingale?', a: 'EA Trend Following menggunakan sistem single entry — TIDAK ada martingale dan TIDAK ada averaging. Ini artinya risiko per trade terkontrol. Selalu gunakan money management yang baik dan lakukan backtest sendiri sebelum live trading.' },
  { q: 'Indikator TradingView V6 bekerja di timeframe berapa?', a: 'Indikator V6 bekerja di semua timeframe TradingView. Sinyal di TF berbeda akan berbeda karena indikator membaca data candle yang berbeda — ini justru kelebihan, Anda bisa konfirmasi arah tren di TF besar dan entry di TF kecil.' },
  { q: 'Apa perbedaan Latih Claude (Rp550K) dengan Sniper Claude AI (Rp3.5jt)?', a: 'Latih Claude (Rp550K) adalah e-book panduan cara melatih AI untuk memahami gaya trading Anda. Sniper Claude AI (Rp3.5jt) adalah paket lengkap yang mencakup e-book + 500.000 data candle XAUUSD + Indikator Breakout V7.0 untuk sniper entry.' },
  { q: 'Apakah ada garansi profit dari produk ini?', a: 'Trading adalah aktivitas berisiko tinggi dan tidak ada yang bisa menjamin profit. Produk kami adalah tools bantu untuk meningkatkan akurasi dan disiplin trading. Selalu gunakan manajemen risiko yang baik. Data backtest adalah hasil historis, bukan jaminan performa masa depan.' },
  { q: 'Bagaimana cara memulai Challenge Crypto & XAU dengan modal $10?', a: 'Daftar exchange OKX, deposit minimal $10, lalu hubungi kami via kontak atau lynk.id/ipidigital untuk mendapatkan panduan strategi challenge. Tim kami akan memandu Anda step by step.' },
];

// ===== TICKER DATA (simulated live prices) =====
const tickerData = [
  { name: 'BTC/USDT', price: '107,234', change: '+2.31%', up: true },
  { name: 'ETH/USDT', price: '3,891', change: '+1.87%', up: true },
  { name: 'XAU/USD', price: '3,248.50', change: '-0.42%', up: false },
  { name: 'SOL/USDT', price: '182.40', change: '+4.12%', up: true },
  { name: 'EUR/USD', price: '1.0892', change: '-0.18%', up: false },
  { name: 'BNB/USDT', price: '712.30', change: '+0.95%', up: true },
  { name: 'ADA/USDT', price: '0.847', change: '+3.20%', up: true },
  { name: 'XRP/USDT', price: '2.341', change: '-1.05%', up: false },
];

// ===== LOADING SCREEN =====
(function initLoader() {
  document.body.classList.add('loading');
  const fill = document.getElementById('loaderFill');
  const loader = document.getElementById('loader');
  const tickerEl = document.getElementById('loaderTicker');
  const msgs = ['Memuat data pasar...', 'Menghubungkan ke OKX...', 'Sinkronisasi indikator...', 'Siap trading!'];
  let mi = 0, progress = 0;

  const msgInterval = setInterval(() => {
    if (tickerEl) tickerEl.textContent = msgs[Math.min(mi++, msgs.length - 1)];
  }, 400);

  const interval = setInterval(() => {
    progress += Math.random() * 20 + 8;
    if (progress >= 100) {
      progress = 100;
      fill.style.width = '100%';
      clearInterval(interval);
      clearInterval(msgInterval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 350);
    } else {
      fill.style.width = progress + '%';
    }
  }, 70);
})();

// ===== TICKER BAR =====
(function initTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = [...tickerData, ...tickerData]; // duplicate for seamless loop
  track.innerHTML = items.map(t => `
    <span class="ticker-item">
      <span class="t-name">${t.name}</span>
      <span class="t-price">${t.price}</span>
      <span class="${t.up ? 't-up' : 't-down'}">${t.up ? '▲' : '▼'} ${t.change}</span>
    </span>
    <span class="ticker-sep">|</span>
  `).join('');
})();

// ===== SCROLL PROGRESS =====
const scrollBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - window.innerHeight;
  if (scrollBar) scrollBar.style.width = (window.scrollY / max * 100) + '%';
}, { passive: true });

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navSections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
  const btt = document.getElementById('backToTop');
  if (btt) btt.classList.toggle('show', window.scrollY > 400);
  const scrollY = window.scrollY + 100;
  navSections.forEach(sec => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (link) link.classList.toggle('active', scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight);
  });
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

// ===== BACK TO TOP =====
const bttBtn = document.getElementById('backToTop');
if (bttBtn) bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== TYPEWRITER =====
(function initTypewriter() {
  const texts = [
    'Indikator TradingView yang Presisi.',
    'AI Signaler untuk XAUUSD & Crypto.',
    'EA MT5 Otomatis Tanpa Emosi.',
    'Prompt AI untuk Signal Berkualitas.',
    'Trading Cerdas dengan Tools Modern.',
  ];
  const el = document.getElementById('typewriter');
  if (!el) return;
  let ti = 0, ci = 0, deleting = false;
  function type() {
    const cur = texts[ti];
    el.textContent = deleting ? cur.slice(0, ci--) : cur.slice(0, ci++);
    let delay = deleting ? 35 : 65;
    if (!deleting && ci > cur.length) { delay = 2000; deleting = true; }
    else if (deleting && ci < 0) { deleting = false; ci = 0; ti = (ti + 1) % texts.length; delay = 400; }
    setTimeout(type, delay);
  }
  setTimeout(type, 1500);
})();

// ===== PARTICLES =====
(function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const pts = [];
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize, { passive: true });
  for (let i = 0; i < 55; i++) pts.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.4 + 0.3, a: Math.random() * 0.45 + 0.1 });
  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.x = (p.x + p.vx + canvas.width) % canvas.width;
      p.y = (p.y + p.vy + canvas.height) % canvas.height;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,170,255,${p.a})`; ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < 95) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(0,170,255,${0.07 * (1 - d / 95)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  })();
})();

// ===== FADE-IN OBSERVER =====
function observeFadeIns() {
  const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

// ===== COUNTERS =====
(function initCounters() {
  const io = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    io.disconnect();
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = +el.dataset.target;
      let cur = 0;
      const step = target / (1500 / 16);
      const t = setInterval(() => { cur = Math.min(cur + step, target); el.textContent = Math.floor(cur).toLocaleString('id-ID'); if (cur >= target) clearInterval(t); }, 16);
    });
  }, { threshold: 0.3 });
  const about = document.getElementById('about');
  if (about) io.observe(about);
})();

// ===== RENDER PRODUCTS =====
function renderProducts(filter) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const list = (!filter || filter === 'all') ? products : products.filter(p => p.cat === filter);
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-dim);text-align:center;grid-column:1/-1;padding:2rem">Tidak ada produk di kategori ini.</p>';
    return;
  }

  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.style.transitionDelay = (i * 0.07) + 's';

    const tiers = p.tiers.length ? `<div class="product-tiers">${p.tiers.map(t => `<span class="tier-chip">${t}</span>`).join('')}</div>` : '';
    const noteHtml = p.note ? `<div class="product-price-note">${p.note.replace(/~~(.+?)~~/g, '<s>$1</s>')}</div>` : '';
    const btnClass = p.btnClass || 'btn-outline';
    const btnColor = p.priceClass === 'price-free' ? 'btn-green' : btnClass;

    card.innerHTML = `
      <div class="product-stripe"></div>
      <span class="product-badge ${p.badgeCls}">${p.badge}</span>
      <div class="product-icon">${p.icon}</div>
      <h3>${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      ${tiers}
      <div class="product-price ${p.priceClass}">${p.price}</div>
      ${noteHtml}
      <a href="${p.link}" target="_blank" rel="noopener" class="btn ${btnColor}">${p.btnText} ↗</a>
    `;
    grid.appendChild(card);
  });
  observeFadeIns();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// ===== RENDER TESTIMONIALS =====
(function initTestimonials() {
  const track = document.getElementById('testiTrack');
  const dotsEl = document.getElementById('testiDots');
  if (!track || !dotsEl) return;
  testimonials.forEach((t, i) => {
    const stars = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
    const initials = t.name.split(' ').map(w => w[0]).join('').slice(0, 2);
    const card = document.createElement('div');
    card.className = 'testi-card fade-in';
    card.innerHTML = `<div class="testi-stars">${stars}</div><p class="testi-text">"${t.text}"</p><div class="testi-author"><div class="testi-avatar">${initials}</div><div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div></div>`;
    track.appendChild(card);
    const dot = document.createElement('button');
    dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => { goTo(i); resetAuto(); });
    dotsEl.appendChild(dot);
  });

  let current = 0;
  function perView() { return window.innerWidth <= 768 ? 1 : window.innerWidth <= 1100 ? 2 : 3; }
  function maxIdx() { return Math.ceil(testimonials.length / perView()) - 1; }
  function cardW() { const c = track.querySelector('.testi-card'); return c ? c.offsetWidth + 24 : 0; }
  function goTo(idx) {
    current = Math.max(0, Math.min(idx, maxIdx()));
    track.style.transform = `translateX(-${current * perView() * cardW()}px)`;
    document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }
  let autoTimer;
  function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(() => goTo(current >= maxIdx() ? 0 : current + 1), 5000); }
  document.getElementById('testiNext').addEventListener('click', () => { goTo(current >= maxIdx() ? 0 : current + 1); resetAuto(); });
  document.getElementById('testiPrev').addEventListener('click', () => { goTo(current <= 0 ? maxIdx() : current - 1); resetAuto(); });
  window.addEventListener('resize', () => goTo(0), { passive: true });
  resetAuto();
})();

// ===== RENDER FAQ =====
(function initFAQ() {
  const grid = document.getElementById('faqGrid');
  if (!grid) return;
  faqs.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item fade-in';
    item.innerHTML = `
      <div class="faq-question" role="button" tabindex="0" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${f.q}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </div>
      <div class="faq-answer" id="faq-a-${i}">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    `;
    const q = item.querySelector('.faq-question');
    const a = item.querySelector('.faq-answer');
    const inner = item.querySelector('.faq-answer-inner');
    function toggle() {
      const open = item.classList.toggle('open');
      a.style.maxHeight = open ? inner.scrollHeight + 'px' : '0';
      q.setAttribute('aria-expanded', String(open));
      document.querySelectorAll('.faq-item.open').forEach(sib => {
        if (sib !== item) { sib.classList.remove('open'); sib.querySelector('.faq-answer').style.maxHeight = '0'; sib.querySelector('.faq-question').setAttribute('aria-expanded', 'false'); }
      });
    }
    q.addEventListener('click', toggle);
    q.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    grid.appendChild(item);
  });
})();

// ===== CONTACT FORM =====
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  function validate() {
    let ok = true;
    const name = document.getElementById('cname');
    const contact = document.getElementById('cemail');
    const msg = document.getElementById('cmessage');
    [name, contact, msg].forEach(el => { el.classList.remove('error'); });
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    if (!name.value.trim()) { document.getElementById('nameError').textContent = 'Nama tidak boleh kosong.'; name.classList.add('error'); ok = false; }
    if (!contact.value.trim()) { document.getElementById('emailError').textContent = 'Email atau WhatsApp wajib diisi.'; contact.classList.add('error'); ok = false; }
    if (!msg.value.trim()) { document.getElementById('messageError').textContent = 'Pesan tidak boleh kosong.'; msg.classList.add('error'); ok = false; }
    return ok;
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validate()) return;
    const btn = document.getElementById('submitBtn');
    const text = document.getElementById('submitText');
    const spin = document.getElementById('submitSpinner');
    btn.disabled = true; text.style.display = 'none'; spin.style.display = 'inline-block';
    setTimeout(() => {
      btn.disabled = false; text.style.display = 'inline'; spin.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
      form.reset();
      setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 6000);
    }, 1400);
  });
})();

// ===== INIT =====
renderProducts('all');
observeFadeIns();
