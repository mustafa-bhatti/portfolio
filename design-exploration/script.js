// ------------------------------------------------------------------
// Tab switcher
// ------------------------------------------------------------------
const tabs = document.querySelectorAll('.tab');
const designs = document.querySelectorAll('.design');

function activate(targetId) {
  designs.forEach((d) => d.classList.toggle('active', d.id === targetId));
  tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.target === targetId)));
  const active = document.getElementById(targetId);
  active.querySelectorAll('.reveal').forEach((el) => el.classList.remove('visible'));
  requestAnimationFrame(() => setupReveal(active));
  runFlaps(active);
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activate(tab.dataset.target));
});

// ------------------------------------------------------------------
// Scroll-triggered staggered reveal (IntersectionObserver)
// ------------------------------------------------------------------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

function setupReveal(scope) {
  scope.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
}

// ------------------------------------------------------------------
// Split-flap "rolling board" effect for numbers + status badges
// ------------------------------------------------------------------
const FLAP_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomChar() {
  return FLAP_CHARS[Math.floor(Math.random() * FLAP_CHARS.length)];
}

function splitFlap(el) {
  const final = el.dataset.final;
  if (!final) return;
  let tick = 0;
  const ticks = 7;
  el.style.willChange = 'transform, opacity';
  const interval = setInterval(() => {
    tick += 1;
    if (tick >= ticks) {
      clearInterval(interval);
      el.textContent = final;
      el.style.transform = 'none';
      return;
    }
    const settled = tick / ticks;
    el.textContent = final
      .split('')
      .map((ch) => (Math.random() < settled ? ch : randomChar()))
      .join('');
    el.style.transform = `rotateX(${tick % 2 === 0 ? '8deg' : '-8deg'})`;
  }, 55);
}

function runFlaps(scope) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const flaps = scope.querySelectorAll('.flap');
  flaps.forEach((el, i) => {
    if (prefersReduced) {
      el.textContent = el.dataset.final;
      return;
    }
    setTimeout(() => splitFlap(el), i * 120);
  });
}

// ------------------------------------------------------------------
// Init
// ------------------------------------------------------------------
setupReveal(document.getElementById('var-a'));
runFlaps(document.getElementById('var-a'));
