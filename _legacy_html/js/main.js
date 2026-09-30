/**
 * MONOPOLY RECRUITMENT — Main Entry Point
 * Initialises all JS modules after DOM is ready.
 */

import { initNav }    from './nav.js';
import { initReveal } from './reveal.js';
import { initForm }   from './form.js';

// ─── WHATSAPP CONSTANTS ──────────────────────────────────────
// PENDIENTE: Replace with client's actual WhatsApp number (no + or spaces)
// Format: country code + number, e.g. '573001234567' for +57 300 123 4567
const WHATSAPP_NUMBER  = '57XXXXXXXXXX';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello! I found Monopoly Recruitment online and I\'d like to find out more about your services.'
);

function initWhatsApp() {
  const btn = document.querySelector('.whatsapp-btn');
  if (!btn) return;
  btn.setAttribute(
    'href',
    `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
  );
}

// ─── BOOT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initForm();
  initWhatsApp();
});
