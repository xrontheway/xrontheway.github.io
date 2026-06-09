const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

const closeNav = () => {
  if (!navToggle || !navMenu) return;
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });
}

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    closeNav();
  });
});


