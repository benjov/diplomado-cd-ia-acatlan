/* main.js — Diplomado CD, FES Acatlán UNAM */

/* --- Navbar scroll effect & active link --- */
const navbar = document.getElementById('navbar');
const secciones = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  let actual = '';
  secciones.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) actual = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('activo', a.getAttribute('href') === `#${actual}`);
  });
});

/* --- Hamburger menu --- */
const hamburger = document.querySelector('.nav-hamburger');
const navMenu   = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('abierto');
  navMenu.classList.toggle('abierto');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('abierto');
    navMenu.classList.remove('abierto');
  });
});

/* --- Acordeón temario --- */
document.querySelectorAll('.acordeon-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.acordeon-item');
    const body = item.querySelector('.acordeon-body');
    const abierto = btn.classList.contains('activo');

    // Cerrar todos
    document.querySelectorAll('.acordeon-btn.activo').forEach(b => {
      b.classList.remove('activo');
      b.closest('.acordeon-item').querySelector('.acordeon-body').classList.remove('abierto');
    });

    if (!abierto) {
      btn.classList.add('activo');
      body.classList.add('abierto');
    }
  });
});

/* --- Fade-up on scroll (IntersectionObserver) --- */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* --- Sticky CTA: ocultar cuando el CTA final es visible --- */
const ctaFinal  = document.getElementById('cta-final');
const stickyCta = document.querySelector('.sticky-cta');

if (ctaFinal && stickyCta) {
  const ctaObs = new IntersectionObserver(
    ([entry]) => { stickyCta.style.opacity = entry.isIntersecting ? '0' : '1'; },
    { threshold: 0.1 }
  );
  ctaObs.observe(ctaFinal);
}

/* --- Año actual en footer --- */
const anioEl = document.getElementById('anio-actual');
if (anioEl) anioEl.textContent = new Date().getFullYear();
