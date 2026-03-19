

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .p-card, .s-card, .member, .step').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ── NAVBAR SHRINK ON SCROLL ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.padding = window.scrollY > 60
    ? '0.7rem 3.5rem'
    : '1.1rem 3.5rem';
});



// ── CONTACT FORM SUBMIT ──
function handleSubmit(btn) {
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#1a7a44';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
  }, 3000);
}