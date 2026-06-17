'use strict';

// ===== DATA =====
const products = [
  { id: 1, cat: 'elektronik', icon: '💻', name: 'Laptop Gaming Pro X1', desc: 'Performa tinggi untuk gaming dan profesional.', price: 'Rp 18.500.000', badge: 'Terlaris', badgeCls: '' },
  { id: 2, cat: 'elektronik', icon: '📱', name: 'Smartphone Ultra 5G', desc: 'Layar AMOLED 120Hz, baterai tahan lama.', price: 'Rp 7.200.000', badge: 'Baru', badgeCls: 'badge-new' },
  { id: 3, cat: 'elektronik', icon: '🖥️', name: 'Monitor 4K Curved', desc: '32 inci, 165Hz, panel IPS, warna akurat.', price: 'Rp 9.800.000', badge: 'Hot', badgeCls: 'badge-hot' },
  { id: 4, cat: 'aksesori', icon: '🎧', name: 'Headset Wireless Pro', desc: 'Noise cancelling, suara jernih, 30 jam baterai.', price: 'Rp 1.250.000', badge: 'Diskon', badgeCls: 'badge-sale' },
  { id: 5, cat: 'aksesori', icon: '⌨️', name: 'Keyboard Mekanikal RGB', desc: 'Switch tactile, RGB 16 juta warna, tahan lama.', price: 'Rp 850.000', badge: 'Terlaris', badgeCls: '' },
  { id: 6, cat: 'aksesori', icon: '🖱️', name: 'Mouse Gaming 16000 DPI', desc: 'Sensor optik presisi tinggi untuk competitive gaming.', price: 'Rp 450.000', badge: 'Baru', badgeCls: 'badge-new' },
  { id: 7, cat: 'software', icon: '🛡️', name: 'Antivirus Premium 1 Tahun', desc: 'Perlindungan real-time, 3 perangkat sekaligus.', price: 'Rp 320.000', badge: 'Promo', badgeCls: 'badge-sale' },
  { id: 8, cat: 'software', icon: '🎨', name: 'Design Suite Pro', desc: 'Paket lengkap untuk desainer grafis profesional.', price: 'Rp 1.800.000', badge: 'Hot', badgeCls: 'badge-hot' },
];

const testimonials = [
  { name: 'Andi Pratama', role: 'Mahasiswa Teknik', stars: 5, text: 'IPISTORE luar biasa! Laptop yang saya beli sampai dalam kondisi sempurna dan pengirimannya super cepat. Harga juga sangat kompetitif dibanding tempat lain.' },
  { name: 'Siti Rahayu', role: 'Content Creator', stars: 5, text: 'Headset yang saya beli kualitasnya jauh melebihi ekspektasi. Customer service-nya ramah dan responsif. Pasti akan belanja lagi di IPISTORE!' },
  { name: 'Budi Santoso', role: 'Software Engineer', stars: 5, text: 'Sudah 3 kali belanja di sini, selalu memuaskan. Produk original, pengiriman cepat, dan garansi resmi. Sangat direkomendasikan!' },
  { name: 'Dewi Anggraini', role: 'Graphic Designer', stars: 5, text: 'Design Suite Pro yang saya beli di sini harganya lebih murah dari toko lain. Aktivasi mudah dan langsung bisa dipakai. Top!' },
  { name: 'Rizky Fadhillah', role: 'Gamer & Streamer', stars: 5, text: 'Monitor curved 4K-nya mantap banget! Gambar tajam dan refresh rate tinggi bikin gaming makin seru. Packaging juga aman.' },
  { name: 'Maya Sari', role: 'Digital Marketing', stars: 4, text: 'Pelayanan memuaskan, produk sesuai deskripsi. Proses pembayaran mudah dan konfirmasi order cepat. Recommended!' },
];

const faqs = [
  { q: 'Bagaimana cara melakukan pemesanan di IPISTORE?', a: 'Anda bisa memesan melalui website kami dengan memilih produk, klik "Pesan Sekarang", lalu isi formulir kontak atau hubungi kami langsung via WhatsApp. Tim kami akan memproses pesanan Anda segera.' },
  { q: 'Apakah produk di IPISTORE original dan bergaransi?', a: 'Ya, semua produk yang kami jual adalah 100% original dan dilengkapi garansi resmi dari produsen. Kami tidak menjual produk KW atau refurbished tanpa keterangan.' },
  { q: 'Berapa lama proses pengiriman ke seluruh Indonesia?', a: 'Pengiriman ke Jawa: 1-3 hari kerja. Luar Jawa: 3-7 hari kerja. Kami bekerja sama dengan JNE, J&T, SiCepat, dan Anteraja untuk memastikan produk sampai dengan aman dan tepat waktu.' },
  { q: 'Metode pembayaran apa saja yang diterima?', a: 'Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit, dan COD untuk area tertentu.' },
  { q: 'Apakah ada kebijakan pengembalian barang?', a: 'Ya, kami menyediakan garansi retur 7 hari jika produk yang diterima mengalami kerusakan atau tidak sesuai deskripsi. Hubungi customer service kami untuk proses retur.' },
  { q: 'Bagaimana cara menghubungi customer service IPISTORE?', a: 'Anda bisa menghubungi kami via formulir kontak di website, email ke hello@ipistore.id, atau WhatsApp di +62 812 3456 7890. Tim kami aktif Senin–Jumat 08.00–20.00 WIB.' },
];

// ===== LOADING SCREEN =====
(function initLoader() {
  document.body.classList.add('loading');
  const fill = document.getElementById('loaderFill');
  const loader = document.getElementById('loader');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      fill.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 400);
    } else {
      fill.style.width = progress + '%';
    }
  }, 80);
})();

// ===== SCROLL PROGRESS =====
const scrollBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - window.innerHeight;
  scrollBar.style.width = (window.scrollY / max * 100) + '%';
}, { passive: true });

// ===== NAVBAR SCROLL + ACTIVE LINK =====
const navbar = document.getElementById('navbar');
const navSections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  // back-to-top visibility
  const btt = document.getElementById('backToTop');
  btt.classList.toggle('show', window.scrollY > 400);

  // active link
  const scrollY = window.scrollY + 100;
  navSections.forEach(sec => {
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    link.classList.toggle('active', scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight);
  });
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===== BACK TO TOP =====
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== TYPEWRITER =====
(function initTypewriter() {
  const texts = [
    'Produk Terpilih, Kualitas Terjamin.',
    'Pengiriman Cepat ke Seluruh Indonesia.',
    'Garansi Resmi Setiap Produk.',
    'Harga Terbaik, Layanan Prima.',
  ];
  const el = document.getElementById('typewriter');
  if (!el) return;
  let ti = 0, ci = 0, deleting = false;

  function type() {
    const current = texts[ti];
    el.textContent = deleting ? current.slice(0, ci--) : current.slice(0, ci++);
    let delay = deleting ? 40 : 70;
    if (!deleting && ci > current.length) { delay = 2000; deleting = true; }
    else if (deleting && ci < 0) { deleting = false; ci = 0; ti = (ti + 1) % texts.length; delay = 400; }
    setTimeout(type, delay);
  }
  setTimeout(type, 1200);
})();

// ===== PARTICLES CANVAS =====
(function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x = (p.x + p.vx + canvas.width) % canvas.width;
      p.y = (p.y + p.vy + canvas.height) % canvas.height;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,170,255,${p.alpha})`;
      ctx.fill();
    });
    // draw lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,170,255,${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  }
  draw();
})();

// ===== FADE-IN OBSERVER =====
function observeFadeIns() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

// ===== COUNTER ANIMATION =====
(function initCounters() {
  const io = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    io.disconnect();
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = +el.dataset.target;
      const duration = 1600;
      const step = target / (duration / 16);
      let cur = 0;
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur).toLocaleString('id-ID');
        if (cur >= target) clearInterval(t);
      }, 16);
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
  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.style.transitionDelay = (i * 0.07) + 's';
    card.innerHTML = `
      <div class="product-stripe"></div>
      <span class="product-badge ${p.badgeCls}">${p.badge}</span>
      <div class="product-icon">${p.icon}</div>
      <h3>${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      <div class="product-price">${p.price}</div>
      <a href="#contact" class="btn btn-outline">Pesan Sekarang</a>
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
    card.innerHTML = `
      <div class="testi-stars">${stars}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${initials}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement('button');
    dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  let current = 0;
  let perView = getPerView();
  let maxIdx = Math.ceil(testimonials.length / perView) - 1;
  let autoTimer;

  function getPerView() {
    return window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  }
  function getCardWidth() {
    const firstCard = track.querySelector('.testi-card');
    if (!firstCard) return 0;
    const gap = 24;
    return firstCard.offsetWidth + gap;
  }
  function goTo(idx) {
    perView = getPerView();
    maxIdx = Math.ceil(testimonials.length / perView) - 1;
    current = Math.max(0, Math.min(idx, maxIdx));
    const offset = current * perView * getCardWidth();
    track.style.transform = `translateX(-${offset}px)`;
    document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }
  function next() { goTo(current >= maxIdx ? 0 : current + 1); }
  function prev() { goTo(current <= 0 ? maxIdx : current - 1); }

  document.getElementById('testiNext').addEventListener('click', () => { next(); resetAuto(); });
  document.getElementById('testiPrev').addEventListener('click', () => { prev(); resetAuto(); });

  function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(next, 5000); }
  resetAuto();

  window.addEventListener('resize', () => goTo(0), { passive: true });
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
      <div class="faq-answer" id="faq-a-${i}" role="region">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    `;
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const inner = item.querySelector('.faq-answer-inner');

    function toggle() {
      const isOpen = item.classList.toggle('open');
      answer.style.maxHeight = isOpen ? inner.scrollHeight + 'px' : '0';
      question.setAttribute('aria-expanded', String(isOpen));
      // close siblings
      document.querySelectorAll('.faq-item.open').forEach(sib => {
        if (sib !== item) {
          sib.classList.remove('open');
          sib.querySelector('.faq-answer').style.maxHeight = '0';
          sib.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });
    }
    question.addEventListener('click', toggle);
    question.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    grid.appendChild(item);
  });
})();

// ===== CONTACT FORM =====
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  function validate() {
    let valid = true;
    const name = document.getElementById('cname');
    const email = document.getElementById('cemail');
    const msg = document.getElementById('cmessage');

    const nameErr = document.getElementById('nameError');
    const emailErr = document.getElementById('emailError');
    const msgErr = document.getElementById('messageError');

    nameErr.textContent = '';
    emailErr.textContent = '';
    msgErr.textContent = '';
    name.classList.remove('error');
    email.classList.remove('error');
    msg.classList.remove('error');

    if (!name.value.trim()) {
      nameErr.textContent = 'Nama tidak boleh kosong.';
      name.classList.add('error');
      valid = false;
    }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email.value.trim())) {
      emailErr.textContent = 'Format email tidak valid.';
      email.classList.add('error');
      valid = false;
    }
    if (!msg.value.trim()) {
      msgErr.textContent = 'Pesan tidak boleh kosong.';
      msg.classList.add('error');
      valid = false;
    }
    return valid;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validate()) return;

    const btn = document.getElementById('submitBtn');
    const text = document.getElementById('submitText');
    const spinner = document.getElementById('submitSpinner');
    btn.disabled = true;
    text.style.display = 'none';
    spinner.style.display = 'inline-block';

    setTimeout(() => {
      btn.disabled = false;
      text.style.display = 'inline';
      spinner.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
      form.reset();
      setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 6000);
    }, 1500);
  });
})();

// ===== NEWSLETTER =====
document.getElementById('newsletterBtn').addEventListener('click', () => {
  const input = document.getElementById('newsletterEmail');
  const msg = document.getElementById('newsletterMsg');
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(input.value.trim())) {
    msg.textContent = 'Masukkan email yang valid.';
    msg.style.color = '#ff6060';
    return;
  }
  msg.textContent = 'Terima kasih! Anda telah berlangganan newsletter kami.';
  msg.style.color = '';
  input.value = '';
});

// ===== INIT =====
renderProducts('all');
observeFadeIns();
