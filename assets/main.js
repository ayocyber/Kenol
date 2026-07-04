/* ============ Shared behaviour: nav, mobile menu, scroll reveals ============ */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    themeToggle.setAttribute('aria-pressed', String(activeTheme === 'light'));
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('kenol-theme', next);
      themeToggle.setAttribute('aria-pressed', String(next === 'light'));
    });
  }

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.reveal').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }
});
