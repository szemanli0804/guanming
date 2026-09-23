document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".site-loader");
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav a");
  const revealItems = document.querySelectorAll(".reveal");
  const year = document.getElementById("year");
  const whatsappButton = document.getElementById("whatsappButton");

  // ==============================
  // 1. 基本設定
  // ==============================
  // TODO: 把這裡改成你的 WhatsApp 號碼。
  // 格式：香港 +852，例如 "85291234567"，不要加 +、空格或括號。
  const WHATSAPP_NUMBER = "852XXXXXXXX";

  const whatsappMessage =
    "你好，我想了解「觀命」HK$388 專屬命書的預約流程。";

  if (whatsappButton && !WHATSAPP_NUMBER.includes("X")) {
    whatsappButton.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  } else if (whatsappButton) {
    whatsappButton.href = "#";
    whatsappButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("請先在 script.js 填入你的 WhatsApp 號碼。");
    });
  }

  if (year) year.textContent = new Date().getFullYear();

  // ==============================
  // 2. 頁面載入動畫
  // ==============================
  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("is-hidden"), 450);
  });

  // ==============================
  // 3. Header 滾動效果
  // ==============================
  const updateHeader = () => {
    if (window.scrollY > 40) header?.classList.add("scrolled");
    else header?.classList.remove("scrolled");
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // ==============================
  // 4. Mobile menu
  // ==============================
  const closeMenu = () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileNav?.classList.remove("is-open");
    mobileNav?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

  // ==============================
  // 5. Scroll reveal
  // ==============================
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // ==============================
  // 6. FAQ：保持原生 details 行為
  // ==============================
  document.querySelectorAll(".faq-list details").forEach(details => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        document.querySelectorAll(".faq-list details").forEach(other => {
          if (other !== details) other.removeAttribute("open");
        });
      }
    });
  });

  // ==============================
  // 7. 平滑 anchor：手機選單關閉
  // ==============================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      if (mobileNav?.classList.contains("is-open")) closeMenu();
    });
  });
});
