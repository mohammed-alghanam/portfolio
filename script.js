'use strict';

const root = document.documentElement;
const themeButton = document.getElementById('theme-toggle');
const menuButton = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

// Honor a previous choice; otherwise start in the site's designed dark theme.
let savedTheme = null;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (error) { /* Storage may be blocked. */ }
if (savedTheme === 'light') root.classList.add('light');
function updateThemeLabel() {
  const light = root.classList.contains('light');
  themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', light ? '#f4f6f2' : '#0c1520');
}
updateThemeLabel();
themeButton.addEventListener('click', () => {
  root.classList.toggle('light');
  const mode = root.classList.contains('light') ? 'light' : 'dark';
  try { localStorage.setItem('portfolio-theme', mode); } catch (error) { /* Optional preference. */ }
  updateThemeLabel();
});

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = open;
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation menu' : 'Close navigation menu');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const filterButtons = [...document.querySelectorAll('.filter-button')];
const projects = [...document.querySelectorAll('.project[data-categories]')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projects.forEach(project => { project.hidden = selected !== 'all' && !project.dataset.categories.split(' ').includes(selected); });
}));

const yearNode = document.getElementById('year');
yearNode.textContent = String(new Date().getFullYear());

const copyButton = document.getElementById('copy-email');
const copyLabel = document.getElementById('copy-label');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyLabel.textContent = 'COPIED ✓';
    copyStatus.textContent = 'Email address copied to clipboard.';
    window.setTimeout(() => { copyLabel.textContent = 'COPY EMAIL'; }, 2200);
  } catch (error) {
    // This can occur on file:// previews; mailto still works as a fallback.
    copyLabel.textContent = 'OPEN EMAIL ↗';
    copyStatus.textContent = 'Copy unavailable. Opening your email application.';
    window.location.href = `mailto:${email}`;
  }
});
