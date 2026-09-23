document.addEventListener("DOMContentLoaded", () => {
  const config = window.GUANMING_CONFIG || {};

  // Google Forms / PayMe links
  document.querySelectorAll('[data-form-link="formA"]').forEach(el => {
    if (config.formA && !config.formA.startsWith("REPLACE_")) {
      el.href = config.formA;
      el.removeAttribute("data-form-link");
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("網站尚未設定 Google Form A。請先在 index.html 的 GUANMING_CONFIG 填入你的 Google Form 網址。");
      });
    }
  });

  document.querySelectorAll('[data-form-link="formB"]').forEach(el => {
    if (config.formB && !config.formB.startsWith("REPLACE_")) {
      el.href = config.formB;
      el.removeAttribute("data-form-link");
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("網站尚未設定 Google Form B。請先在 index.html 的 GUANMING_CONFIG 填入你的付款截圖表格網址。");
      });
    }
  });

  document.querySelectorAll('[data-payme-link]').forEach(el => {
    if (config.payme) el.href = config.payme;
  });

  // Mobile navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      mobileNav.setAttribute('aria-hidden', String(open));
      mobileNav.classList.toggle('is-open', !open);
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      mobileNav.classList.remove('is-open');
    }));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Loader
  window.setTimeout(() => document.body.classList.add('loaded'), 500);

  // FAQ
  document.querySelectorAll('.faq-item').forEach(item => {
    const button = item.querySelector('.faq-question');
    if (!button) return;
    button.addEventListener('click', () => {
      const active = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!active) item.classList.add('open');
    });
  });
});
