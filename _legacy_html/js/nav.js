/**
 * MONOPOLY RECRUITMENT — Navigation
 * Handles: mobile menu open/close, smooth scroll, active nav link,
 * navbar shadow on scroll, keyboard focus trap in mobile menu.
 */

const SELECTORS = {
  header:     '.site-header',
  navbar:     '.navbar',
  toggle:     '.navbar__toggle',
  mobileMenu: '.mobile-menu',
  closeBtn:   '.mobile-menu__close',
  mobileLinks:'.mobile-nav-link',
  navLinks:   '.nav-link',
  sections:   'main section[id]',
};

export function initNav() {
  const header     = document.querySelector(SELECTORS.header);
  const navbar     = document.querySelector(SELECTORS.navbar);
  const toggle     = document.querySelector(SELECTORS.toggle);
  const mobileMenu = document.querySelector(SELECTORS.mobileMenu);
  const closeBtn   = document.querySelector(SELECTORS.closeBtn);
  const mobileLinks= document.querySelectorAll(SELECTORS.mobileLinks);

  if (!navbar || !toggle || !mobileMenu) return;

  /* ─── MOBILE MENU ──────────────────────────────────────── */

  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    // Move focus to close button
    closeBtn?.focus();
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    toggle.focus();
  }

  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close menu when clicking outside (on the overlay backdrop)
  mobileMenu.addEventListener('click', e => {
    if (e.target === mobileMenu) closeMenu();
  });

  /* ─── FOCUS TRAP IN MOBILE MENU ─────────────────────────── */

  mobileMenu.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = mobileMenu.querySelectorAll(
      'button, a, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* ─── NAVBAR AUTO-HIDE & SCROLL PROGRESS ───────────────── */

  const progressBar = document.getElementById('scroll-progress');
  let lastScrollY = window.scrollY;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Navbar visual style change
    navbar.classList.toggle('is-scrolled', currentScrollY > 20);

    // Navbar Auto-hide (hide on scroll down, show on scroll up)
    if (currentScrollY > 150) {
      if (currentScrollY > lastScrollY && !mobileMenu.classList.contains('is-open')) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
    } else {
      header.classList.remove('is-hidden');
    }
    
    lastScrollY = currentScrollY;

    // Scroll progress bar logic
    if (progressBar) {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0;
      progressBar.style.height = scrolled + '%';
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ─── ACTIVE NAV LINK HIGHLIGHTING ──────────────────────── */
  // Highlights the nav link corresponding to the section in view.

  const navLinks = document.querySelectorAll(SELECTORS.navLinks);
  const sections = document.querySelectorAll(SELECTORS.sections);

  if (navLinks.length && sections.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('is-active', href === `#${id}`);
          });
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px', // trigger when section is ~in the middle of viewport
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
  }

  /* ─── SMOOTH SCROLL FOR ALL INTERNAL ANCHOR LINKS ─────── */
  // Accounts for the sticky header height so section headings
  // are not hidden behind the navbar.

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header?.offsetHeight ?? 80;
      const targetTop    = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Update URL hash without jumping
      history.pushState(null, '', targetId);
    });
  });
}
