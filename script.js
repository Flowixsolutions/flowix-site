const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (btn && nav) {
  const setMenuState = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  };

  btn.addEventListener('click', () => {
    setMenuState(!nav.classList.contains('open'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setMenuState(false);
      btn.focus();
    }
  });
}
