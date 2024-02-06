const mobileMenuEl = document.querySelector('.mobileNavMenu');
const openEl = document.querySelector('.burger-menu');
const closeEl = document.querySelector('.close');

openEl.addEventListener('click', () => {
    mobileMenuEl.classList.toggle("open");
    
  });
  closeEl.addEventListener('click', () => {
    mobileMenuEl.classList.remove("open");
  });
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });