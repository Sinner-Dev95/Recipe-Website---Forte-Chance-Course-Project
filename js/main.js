document.addEventListener('DOMContentLoaded', function() {
  // Definizione delle variabili
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const headerMenu = document.querySelector('.header-menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const header = document.querySelector('.header');
  
  // Aggiungi sia touchstart che click per una migliore compatibilità cross-device
  hamburgerIcon.addEventListener('touchstart', toggleMenu);
  hamburgerIcon.addEventListener('click', toggleMenu);
  
  function toggleMenu(event) {
    console.log('Menu toggle triggerato!');
    event.preventDefault(); // Previene comportamenti indesiderati
    
    // Toggle delle classi sui vari elementi
    hamburgerIcon.classList.toggle('open');
    headerMenu.classList.toggle('open');
    
    // Aggiungi la variabile --item-index a ciascun elemento menu-item
    menuItems.forEach((item, index) => {
      item.style.setProperty('--item-index', index);
      item.classList.toggle('open');
    });
  }
});