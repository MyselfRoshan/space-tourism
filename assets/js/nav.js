const navToggler = document.querySelector('.mobile-nav-toggler');
const primaryNav = document.querySelector('.primary-nav');

navToggler.addEventListener('click', (e) => {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === 'false') {
    navToggler.setAttribute('aria-expanded', true);
    primaryNav.setAttribute('data-visible', true);
  } else {
    navToggler.setAttribute('aria-expanded', false);
    primaryNav.setAttribute('data-visible', false);
  }
});
