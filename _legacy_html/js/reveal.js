/**
 * MONOPOLY RECRUITMENT — Scroll Reveal Animations
 * Uses IntersectionObserver to add the .is-visible class to elements
 * with the .reveal class when they enter the viewport.
 *
 * CSS handles the actual animation (opacity + transform transitions).
 * Falls back gracefully when IntersectionObserver is unavailable.
 * Respects prefers-reduced-motion (handled in CSS).
 */

export function initReveal() {
  // If IntersectionObserver is not supported, make all elements visible immediately
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop observing once revealed — animation plays only once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,      // trigger when 12% of element is visible
      rootMargin: '0px 0px -40px 0px', // slight offset from bottom of viewport
    }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
