document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const headerMenu = document.querySelector('.header-menu');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Aggiungiamo l'attributo --item-index per i ritardi nelle animazioni
    menuItems.forEach((item, index) => {
      item.style.setProperty('--item-index', index);
    });
    
    hamburgerIcon.addEventListener('click', function() {
      // Toggle della classe open per hamburger
      this.classList.toggle('open');
      
      // Toggle della classe open per il menu
      headerMenu.classList.toggle('open');
      
      // Toggle della classe open per ogni voce del menu
      menuItems.forEach(item => {
        item.classList.toggle('open');
      });
    });
  });