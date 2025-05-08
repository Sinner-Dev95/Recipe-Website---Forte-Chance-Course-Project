document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const headerMenu = document.querySelector('.header-menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const header = document.querySelector('.header');

  hamburgerIcon.addEventListener('touchstart', function() {
    headerMenu.classList.toggle('open');
    header.classList.toggle('open');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.toggle('open');
      }, index * 50);
    });
  });
});