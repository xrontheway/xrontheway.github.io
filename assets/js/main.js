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

const calendarLink = document.querySelector('[data-calendar-download]');

if (calendarLink) {
  calendarLink.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(calendarLink.getAttribute('href'), { cache: 'no-store' });
      if (!response.ok) throw new Error(`Calendar download failed: ${response.status}`);

      const calendarText = await response.text();
      const blob = new Blob([calendarText], { type: 'text/calendar;charset=utf-8' });
      const objectUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');

      downloadLink.href = objectUrl;
      downloadLink.download = calendarLink.getAttribute('download') || 'xrway26.ics';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();

      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (error) {
      window.location.href = calendarLink.getAttribute('href');
    }
  });
}
