'use strict';

/* ── Data ─────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Andi R.',
    role: 'Trader Crypto Futures',
    stars: 5,
    initials: 'AR',
    text: 'EA MT5-nya luar biasa. Saya bisa menjalankan trading sambil kerja full-time tanpa harus mantengin chart seharian. Profit bulanan saya jauh lebih stabil sekarang.'
  },
  {
    name: 'Budi S.',
    role: 'Trader XAU/USD',
    stars: 5,
    initials: 'BS',
    text: 'Indikator TradingView V6 benar-benar game-changer. Sinyal BUY/SELL-nya akurat dan membantu saya menghindari false signal yang dulu sering memakan loss.'
  },
  {
    name: 'Citra M.',
    role: 'Trader Pemula',
    stars: 5,
    initials: 'CM',
    text: 'Akademi Crypto IPI mengajarkan saya dari nol dengan cara yang terstruktur. Sekarang saya sudah bisa membaca chart sendiri dan mulai konsisten profit kecil-kecilan.'
  },
  {
    name: 'Deni P.',
    role: 'Member VIP IPI DIGITAL',
    stars: 5,
    initials: 'DP',
    text: 'VIP Membership worth it banget! Sinyal harian selalu akurat, grup private aktif, dan mentor sangat responsif saat market bergerak volatil. Komunitas terbaik yang pernah saya ikuti.'
  },
  {
    name: 'Eka F.',
    role: 'Swing Trader Saham',
    stars: 5,
    initials: 'EF',
    text: 'Support tim IPI DIGITAL sangat responsif. Setiap pertanyaan tentang instalasi dan konfigurasi dijawab dengan cepat dan jelas. Produknya solid, after-sales-nya juga memuaskan.'
  },
  {
    name: 'Farhan W.',
    role: 'Trader Forex & Crypto',
    stars: 5,
    initials: 'FW',
    text: 'Sudah 6 bulan pakai EA MT5 dan hasilnya konsisten. Backtest memang tidak bohong — strategi breakout-nya terbukti bekerja di kondisi market apapun. Highly recommended!'
  }
];

const FAQS = [
  {
    q: 'Bagaimana cara mendapatkan produk setelah pembelian?',
    a: 'Setelah pembayaran dikonfirmasi melalui lynk.id/ipidigital, produk digital (file, akses, atau link) akan dikirimkan secara otomatis ke email atau WhatsApp Anda dalam hitungan menit. Kami juga menyediakan panduan instalasi dan onboarding untuk setiap produk.'
  },
  {
    q: 'Apakah EA MT5 menggunakan strategi martingale atau averaging?',
    a: 'Tidak. EA MT5 kami menggunakan strategi breakout dengan single entry yang bersih — tidak ada martingale, tidak ada averaging, dan tidak ada grid trading. Setiap trade memiliki stop loss yang jelas dengan risk reward minimum 1:2.'
  },
  {
    q: 'Indikator TradingView bisa digunakan di pair apa saja?',
    a: 'Indikator TradingView V6 kompatibel dengan semua instrumen yang tersedia di TradingView — Forex (EUR/USD, XAU/USD, dll.), Cryptocurrency (BTC, ETH, dll.), Saham Indonesia & Global, Komoditas, dan Indeks. Berfungsi optimal di semua timeframe dari M15 hingga D1.'
  },
  {
    q: 'Apakah Akademi Crypto IPI cocok untuk pemula absolut?',
    a: 'Ya, Akademi Crypto IPI dirancang khusus mulai dari level pemula absolut. Kurikulum dimulai dari dasar — apa itu trading, cara membaca chart, hingga strategi teknikal dan fundamental yang lebih advanced. Tidak perlu pengalaman sebelumnya.'
  },
  {
    q: 'Apa saja yang termasuk dalam VIP Membership?',
    a: 'VIP Membership mencakup: sinyal trading harian untuk Crypto & XAU/USD, analisis live market setiap pagi, akses grup private eksklusif, akses ke semua produk IPI DIGITAL, priority support 24/7, weekly performance report, dan sesi Q&A bulanan dengan mentor berpengalaman.'
  },
  {
    q: 'Bagaimana jika saya mengalami kendala teknis setelah pembelian?',
    a: 'Tim support kami siap membantu 24/7 melalui WhatsApp dan Telegram. Kami menyediakan panduan instalasi lengkap, sesi onboarding jika diperlukan, dan update berkala untuk semua produk tanpa biaya tambahan.'
  },
  {
    q: 'Apakah ada garansi atau refund jika produk tidak sesuai ekspektasi?',
    a: 'Karena sifat produk digital, kami tidak menyediakan refund setelah pengiriman. Namun, kami berkomitmen penuh terhadap kepuasan Anda — setiap masalah teknis akan diselesaikan dengan prioritas tinggi. Kami mendorong Anda untuk berkonsultasi terlebih dahulu sebelum membeli agar mendapat produk yang paling sesuai.'
  }
];

const TYPEWRITER_TEXTS = [
  'Trading Otomatis 24 Jam.',
  'Sinyal Presisi, Profit Konsisten.',
  'Komunitas Trader Elite Indonesia.',
  'Edukasi Terstruktur dari Dasar.',
  'Ekosistem Trading Terlengkap.'
];

/* ── Loader ───────────────────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('loader');
  const fill   = document.getElementById('loaderFill');
  if (!loader || !fill) return;

  let progress = 0;
  const interval = setInterval(function () {
    progress += Math.random() * 18 + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      fill.style.width = '100%';
      setTimeout(function () {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    } else {
      fill.style.width = progress + '%';
    }
  }, 80);

  document.body.style.overflow = 'hidden';
})();

/* ── Scroll Progress ──────────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  function update() {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
})();

/* ── Navbar ───────────────────────────────────────────────── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const navCta    = document.getElementById('navCta');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const scrollY  = window.scrollY + 120;
    let current    = '';

    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });

    navLinks && navLinks.querySelectorAll('a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
})();

/* ── Hero Canvas Particles ────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  var particles = [];
  var animId;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticle() {
    return {
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      vx:   (Math.random() - 0.5) * 0.4,
      vy:   (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1
    };
  }

  function init() {
    particles = [];
    var count = Math.min(80, Math.floor((canvas.width * canvas.height) / 14000));
    for (var i = 0; i < count; i++) particles.push(createParticle());
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(10,132,255,' + p.alpha + ')';
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var q = particles[j];
        var dx = p.x - q.x;
        var dy = p.y - q.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(10,132,255,' + (0.06 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', function () {
    resize();
    init();
  }, { passive: true });

  resize();
  init();
  draw();

  /* Pause when tab hidden */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      draw();
    }
  });
})();

/* ── Typewriter ───────────────────────────────────────────── */
(function initTypewriter() {
  var el = document.getElementById('titleLine2');
  if (!el) return;

  var idx      = 0;
  var charIdx  = 0;
  var deleting = false;
  var SPEED    = 60;
  var DELAY    = 1800;
  var BLINK    = '|';

  function tick() {
    var current = TYPEWRITER_TEXTS[idx];
    var shown   = current.substring(0, charIdx);

    el.textContent = shown + BLINK;

    if (!deleting) {
      if (charIdx < current.length) {
        charIdx++;
        setTimeout(tick, SPEED);
      } else {
        deleting = true;
        setTimeout(tick, DELAY);
      }
    } else {
      if (charIdx > 0) {
        charIdx--;
        setTimeout(tick, SPEED / 2);
      } else {
        deleting = false;
        idx = (idx + 1) % TYPEWRITER_TEXTS.length;
        setTimeout(tick, 300);
      }
    }
  }

  setTimeout(tick, 1200);
})();

/* ── Intersection Observer (fade-in + counters) ───────────── */
(function initObserver() {
  /* Fade-in */
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) { fadeObserver.observe(el); });
  }

  /* Counter animation */
  var statVals = document.querySelectorAll('.stat-val[data-target]');
  if (statVals.length > 0) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el     = entry.target;
        var target = parseInt(el.getAttribute('data-target'), 10);
        var start  = 0;
        var duration = 1200;
        var startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var elapsed  = timestamp - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var ease     = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(start + (target - start) * ease);
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    statVals.forEach(function (el) { counterObserver.observe(el); });
  }
})();

/* ── Testimonials Carousel ────────────────────────────────── */
(function initTestimonials() {
  var track   = document.getElementById('testiTrack');
  var dotsEl  = document.getElementById('testiDots');
  var prevBtn = document.getElementById('testiPrev');
  var nextBtn = document.getElementById('testiNext');
  if (!track || !dotsEl) return;

  function getPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  var current  = 0;
  var perView  = getPerView();
  var maxIndex = Math.ceil(TESTIMONIALS.length / perView) - 1;
  var autoId   = null;

  /* Build cards */
  TESTIMONIALS.forEach(function (t) {
    var stars = '';
    for (var s = 0; s < t.stars; s++) stars += '<span class="testi-star" aria-hidden="true">★</span>';

    var card = document.createElement('div');
    card.className = 'testi-card';
    card.innerHTML =
      '<div class="testi-inner">' +
        '<div class="testi-stars" aria-label="' + t.stars + ' dari 5 bintang">' + stars + '</div>' +
        '<p class="testi-text">"' + t.text + '"</p>' +
        '<div class="testi-author">' +
          '<div class="testi-avatar" aria-hidden="true">' + t.initials + '</div>' +
          '<div>' +
            '<div class="testi-name">' + t.name + '</div>' +
            '<div class="testi-role">' + t.role + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    track.appendChild(card);
  });

  /* Build dots */
  function buildDots() {
    dotsEl.innerHTML = '';
    for (var i = 0; i <= maxIndex; i++) {
      var dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === current ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.setAttribute('aria-selected', String(i === current));
      (function (idx) {
        dot.addEventListener('click', function () { goTo(idx); });
      }(i));
      dotsEl.appendChild(dot);
    }
  }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, maxIndex));
    var offset = current * (100 / perView) * perView;
    track.style.transform = 'translateX(-' + offset + '%)';

    dotsEl.querySelectorAll('.testi-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', String(i === current));
    });
  }

  function next() { goTo(current < maxIndex ? current + 1 : 0); }
  function prev() { goTo(current > 0 ? current - 1 : maxIndex); }

  prevBtn && prevBtn.addEventListener('click', function () { prev(); resetAuto(); });
  nextBtn && nextBtn.addEventListener('click', function () { next(); resetAuto(); });

  function startAuto() { autoId = setInterval(next, 4500); }
  function resetAuto()  { clearInterval(autoId); startAuto(); }

  /* Touch swipe */
  var touchStartX = 0;
  track.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', function (e) {
    var dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) { dx > 0 ? next() : prev(); resetAuto(); }
  }, { passive: true });

  /* Responsive recalc */
  window.addEventListener('resize', function () {
    perView  = getPerView();
    maxIndex = Math.ceil(TESTIMONIALS.length / perView) - 1;
    current  = Math.min(current, maxIndex);
    buildDots();
    goTo(current);
  }, { passive: true });

  buildDots();
  goTo(0);
  startAuto();
})();

/* ── FAQ Accordion ────────────────────────────────────────── */
(function initFaq() {
  var list = document.getElementById('faqList');
  if (!list) return;

  FAQS.forEach(function (item, i) {
    var el = document.createElement('div');
    el.className = 'faq-item';
    el.setAttribute('role', 'listitem');
    el.innerHTML =
      '<button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '" id="faq-q-' + i + '">' +
        item.q +
        '<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>' +
      '</button>' +
      '<div class="faq-a" id="faq-a-' + i + '" role="region" aria-labelledby="faq-q-' + i + '">' +
        '<div class="faq-a-inner">' + item.a + '</div>' +
      '</div>';

    var btn   = el.querySelector('.faq-q');
    var panel = el.querySelector('.faq-a');
    var inner = el.querySelector('.faq-a-inner');

    btn.addEventListener('click', function () {
      var isOpen = el.classList.contains('open');

      /* Close all */
      list.querySelectorAll('.faq-item.open').forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-a').style.maxHeight = '0';
      });

      if (!isOpen) {
        el.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = inner.scrollHeight + 'px';
      }
    });

    list.appendChild(el);
  });
})();

/* ── Contact Form ─────────────────────────────────────────── */
(function initForm() {
  var form      = document.getElementById('contactForm');
  var btnText   = document.getElementById('btnText');
  var btnSpinner = document.getElementById('btnSpinner');
  var successMsg = document.getElementById('formSuccess');
  var submitBtn  = document.getElementById('submitBtn');
  if (!form) return;

  function showErr(id, msg) {
    var el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function clearErr(id) {
    var el = document.getElementById(id);
    if (el) el.textContent = '';
  }

  function validate() {
    var ok = true;
    var fname    = document.getElementById('fname');
    var fcontact = document.getElementById('fcontact');
    var fmessage = document.getElementById('fmessage');

    clearErr('fnameErr');
    clearErr('fcontactErr');
    clearErr('fmessageErr');

    if (!fname || fname.value.trim().length < 2) {
      showErr('fnameErr', 'Nama minimal 2 karakter.');
      ok = false;
    }

    if (!fcontact || fcontact.value.trim().length < 6) {
      showErr('fcontactErr', 'Masukkan nomor WhatsApp atau email yang valid.');
      ok = false;
    }

    if (!fmessage || fmessage.value.trim().length < 10) {
      showErr('fmessageErr', 'Pesan minimal 10 karakter.');
      ok = false;
    }

    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    /* Simulate async send */
    submitBtn.disabled = true;
    if (btnText)    btnText.style.display    = 'none';
    if (btnSpinner) btnSpinner.style.display = 'inline-block';

    setTimeout(function () {
      submitBtn.disabled = false;
      if (btnText)    btnText.style.display    = 'inline';
      if (btnSpinner) btnSpinner.style.display = 'none';
      if (successMsg) successMsg.classList.add('visible');
      form.reset();
      setTimeout(function () {
        if (successMsg) successMsg.classList.remove('visible');
      }, 5000);
    }, 1600);
  });

  /* Real-time clear error on input */
  ['fname', 'fcontact', 'fmessage'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', function () { clearErr(id + 'Err'); });
  });
})();

/* ── Back to Top ──────────────────────────────────────────── */
(function initBackTop() {
  var btn = document.getElementById('backTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ── Smooth scroll for all # links ───────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
      var top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
