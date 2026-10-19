/* =========================================
   main.js – Recipe Secrets Restaurant
   ========================================= */

// ── Hamburger Menu ──────────────────────────────────────────────────────────
(function initHamburger() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ── Scroll Reveal ────────────────────────────────────────────────────────────
(function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Skip animation – make everything visible immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ── Menu Tabs ────────────────────────────────────────────────────────────────
(function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Update buttons
      tabBtns.forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });

      // Update panels
      document.querySelectorAll('.tab-panel').forEach(panel => {
        const isActive = panel.id === target;
        panel.classList.toggle('active', isActive);
        panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });
    });
  });
})();

// ── Reservation Form Validation ──────────────────────────────────────────────
(function initReservationForm() {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  const msgEl = document.getElementById('form-msg');

  function showError(fieldId, message) {
    const el = document.getElementById(fieldId + '-error');
    if (el) {
      el.textContent = message;
      el.style.display = message ? 'block' : 'none';
    }
  }

  function clearErrors() {
    form.querySelectorAll('.form-error').forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });
  }

  function validate() {
    clearErrors();
    let valid = true;

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const date = form.querySelector('[name="date"]').value;
    const time = form.querySelector('[name="time"]').value;
    const guests = parseInt(form.querySelector('[name="guests"]').value, 10);

    if (!name) { showError('name', 'Please enter your name.'); valid = false; }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }

    if (!phone) { showError('phone', 'Please enter a phone number.'); valid = false; }

    if (!date) {
      showError('date', 'Please select a date.');
      valid = false;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(date);
      if (selected < today) {
        showError('date', 'Date cannot be in the past.');
        valid = false;
      }
    }

    if (!time) {
      showError('time', 'Please select a time.');
      valid = false;
    } else {
      const [h, m] = time.split(':').map(Number);
      const mins = h * 60 + m;
      if (mins < 11 * 60 + 30 || mins > 22 * 60) {
        showError('time', 'Time must be between 11:30 AM and 10:00 PM.');
        valid = false;
      }
    }

    if (isNaN(guests) || guests < 1 || guests > 20) {
      showError('guests', 'Please enter between 1 and 20 guests.');
      valid = false;
    }

    return valid;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      // Replace the action URL with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (response.ok) {
        msgEl.textContent = '🎉 Your reservation request has been sent! We will confirm within 24 hours.';
        msgEl.className = 'form-msg success';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      msgEl.textContent = 'Something went wrong. Please call us at +65 6123 4567 to make a reservation.';
      msgEl.className = 'form-msg error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Reservation';
      msgEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
})();

// ── Contact Form ──────────────────────────────────────────────────────────────
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const msgEl = document.getElementById('contact-form-msg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      // Replace the action URL with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (response.ok) {
        msgEl.textContent = 'Thank you! We have received your message and will be in touch soon.';
        msgEl.className = 'form-msg success';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      msgEl.textContent = 'Something went wrong. Please email us at hello@recipesecrets.sg.';
      msgEl.className = 'form-msg error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
})();

// ── Active nav link (fallback for browsers that don't support :local-link) ──
(function setActiveNav() {
  const links = document.querySelectorAll('.nav-list a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
})();
