const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.top_menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('show-menu');
});
