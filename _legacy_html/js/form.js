/**
 * MONOPOLY RECRUITMENT — Contact Form
 * Handles: HTML5 + JS validation, honeypot anti-spam,
 * async submission via Web3Forms, accessible status messages.
 *
 * ─── CONFIGURATION ─────────────────────────────────────────
 * To update the destination e-mail or switch form service,
 * change only the constants below — nothing else needs editing.
 */

// PENDIENTE: Replace with actual Web3Forms access key
// Get a free key at https://web3forms.com
const FORM_ACCESS_KEY = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';

// PENDIENTE: Replace with actual submission endpoint if switching to Formspree
// Formspree example: 'https://formspree.io/f/YOUR_FORM_ID'
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

/* ─── VALIDATION RULES ──────────────────────────────────── */

const VALIDATION = {
  name: {
    required: true,
    minLength: 2,
    message: 'Please enter your full name (at least 2 characters).',
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid e-mail address.',
  },
  phone: {
    required: false,
    pattern: /^[\d\s\+\-\(\)]{7,20}$/,
    message: 'Please enter a valid phone number.',
  },
  enquiry: {
    required: true,
    message: 'Please select your type of enquiry.',
  },
  message: {
    required: true,
    minLength: 10,
    message: 'Please enter a message (at least 10 characters).',
  },
};

/* ─── HELPERS ───────────────────────────────────────────── */

function getField(form, name) {
  return form.querySelector(`[name="${name}"]`);
}

function setError(field, message) {
  const wrapper = field.closest('.form-field');
  if (!wrapper) return;
  wrapper.classList.add('has-error');
  const errEl = wrapper.querySelector('.field-error');
  if (errEl) errEl.textContent = message;
}

function clearError(field) {
  const wrapper = field.closest('.form-field');
  if (!wrapper) return;
  wrapper.classList.remove('has-error');
}

function validateField(name, value) {
  const rules = VALIDATION[name];
  if (!rules) return null;

  if (rules.required && !value.trim()) return rules.message;
  if (value.trim() === '' && !rules.required) return null; // optional field, empty is OK

  if (rules.minLength && value.trim().length < rules.minLength) return rules.message;
  if (rules.pattern && !rules.pattern.test(value.trim())) return rules.message;

  return null; // valid
}

function validateForm(form) {
  let valid = true;

  Object.keys(VALIDATION).forEach(name => {
    const field = getField(form, name);
    if (!field) return;

    const error = validateField(name, field.value);
    if (error) {
      setError(field, error);
      valid = false;
    } else {
      clearError(field);
    }
  });

  return valid;
}

/* ─── MAIN INIT ─────────────────────────────────────────── */

export function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const submitBtn  = form.querySelector('.form-submit .btn');
  const statusEl   = form.querySelector('.form-status');

  /* Live validation — clear error as user corrects a field */
  form.addEventListener('input', e => {
    const name = e.target.getAttribute('name');
    if (!name || !VALIDATION[name]) return;
    const error = validateField(name, e.target.value);
    if (!error) clearError(e.target);
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Reset status
    if (statusEl) {
      statusEl.className = 'form-status';
      statusEl.textContent = '';
    }

    // Check honeypot — if filled, silently reject (bot)
    const honeypot = form.querySelector('.form-honeypot input');
    if (honeypot && honeypot.value) {
      showSuccess(); // fake success so bots don't know they were caught
      return;
    }

    // Validate all fields
    if (!validateForm(form)) {
      // Focus on first invalid field for accessibility
      const firstErr = form.querySelector('.has-error input, .has-error textarea, .has-error select');
      firstErr?.focus();
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.textContent = 'Sending…';
    }

    // Build payload
    const data = new FormData(form);
    data.append('access_key', FORM_ACCESS_KEY);
    data.append('subject', 'New Enquiry — Monopoly Recruitment Website');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showSuccess();
        form.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      showError();
      console.error('Form error:', err);
    } finally {
      if (submitBtn) {
        submitBtn.removeAttribute('aria-busy');
        submitBtn.textContent = 'Send Message';
      }
    }
  });

  function showSuccess() {
    if (!statusEl) return;
    statusEl.className = 'form-status is-success';
    statusEl.textContent = 'Thank you! Your message has been sent. We\'ll be in touch shortly.';
    statusEl.setAttribute('aria-live', 'polite');
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function showError() {
    if (!statusEl) return;
    statusEl.className = 'form-status is-error';
    statusEl.textContent = 'Something went wrong. Please try again or contact us directly via WhatsApp.';
    statusEl.setAttribute('aria-live', 'assertive');
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
