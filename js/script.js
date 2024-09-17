/* Mobile menu  */
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('active');
  document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  document.body.classList.remove('menu-open');
});

/* Animate on Scroll */
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 500,
    easing: 'ease',
  });
});
