const menuStyles = document.createElement('link');
menuStyles.rel = 'stylesheet';
menuStyles.href = 'menu.css';
document.head.appendChild(menuStyles);

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const existingNav = document.querySelector('.site-nav');

if (header && toggle) {
  if (existingNav) existingNav.remove();

  toggle.innerHTML = `
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
  `;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'site-menu');
  toggle.setAttribute('aria-label', 'Open menu');

  const menu = document.createElement('div');
  menu.id = 'site-menu';
  menu.className = 'menu-overlay';
  menu.setAttribute('aria-hidden', 'true');

  menu.innerHTML = `
    <div class="menu-shell">
      <nav class="menu-grid" aria-label="Site menu">
        <div class="menu-column menu-column-primary">
          <a class="menu-main-link" href="about.html">About Us</a>

          <div class="menu-group">
            <a class="menu-main-link" href="projects.html">Our Work</a>
            <div class="menu-card-grid">
              <a class="menu-card menu-card-land" href="projects.html#rural">
                <span class="menu-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48"><path d="M5 36h38M8 34l10-14 7 8 5-6 10 12M29 13c4 0 7-3 7-7-4 0-7 3-7 7Zm0 0c-4 0-7-3-7-7 4 0 7 3 7 7Zm0 0v8"/></svg>
                </span>
                <span><strong>Rural Projects</strong><small>Land, water and habitat</small></span>
              </a>

              <a class="menu-card menu-card-buildings" href="projects.html#urban">
                <span class="menu-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48"><path d="M7 40V19h15v21M22 40V9h19v31M12 25h5M12 31h5M28 16h6M28 23h6M28 30h6M4 40h40"/></svg>
                </span>
                <span><strong>Urban Projects</strong><small>Land and buildings</small></span>
              </a>

              <a class="menu-card menu-card-education" href="projects.html#education">
                <span class="menu-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48"><path d="M6 11c8-2 14 0 18 4v25c-4-4-10-6-18-4V11Zm36 0c-8-2-14 0-18 4v25c4-4 10-6 18-4V11Z"/></svg>
                </span>
                <span><strong>Education & Learning</strong><small>Field learning, research and public programs</small></span>
              </a>
            </div>
          </div>
        </div>

        <div class="menu-column menu-column-secondary">
          <div class="menu-group">
            <a class="menu-main-link" href="support.html">Support</a>
            <div class="menu-card-grid menu-card-grid-support">
              <a class="menu-card menu-card-donate" href="support.html#donate">
                <span class="menu-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48"><path d="M24 40S7 30 7 17c0-6 4-10 10-10 4 0 6 2 7 5 1-3 4-5 7-5 6 0 10 4 10 10 0 13-17 23-17 23Z"/></svg>
                </span>
                <span><strong>Donate</strong><small>Give resources or property</small></span>
              </a>

              <a class="menu-card menu-card-volunteer" href="support.html#volunteer">
                <span class="menu-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48"><circle cx="17" cy="15" r="6"/><circle cx="33" cy="17" r="5"/><path d="M6 39c1-9 5-14 11-14s10 5 11 14M27 39c1-7 3-11 7-11 5 0 8 4 9 11"/></svg>
                </span>
                <span><strong>Volunteer</strong><small>Give time, skills or expertise</small></span>
              </a>
            </div>
          </div>

          <a class="menu-main-link menu-contact-link" href="contact.html">Contact Us</a>

          <div class="menu-meta">
            <span>Canada</span>
            <span>Restoration · Conservation · Education</span>
          </div>
        </div>
      </nav>
    </div>
  `;

  document.body.appendChild(menu);

  const educationSection = document.querySelector('.education-band');
  if (educationSection && !educationSection.id) educationSection.id = 'education';

  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => {
    setMenu(!document.body.classList.contains('menu-open'));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenu(false);
      toggle.focus();
    }
  });
}
