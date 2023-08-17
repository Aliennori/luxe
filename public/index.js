
 
const swiper = new Swiper('.swiper', {
    
    autoplay: {
        delay: 4000,
        disableOninteraction: false,
    },
    loop: true,
    lazy: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
   
  });

  const hamburger = document.querySelector('.hamburger');
  const closeIcon = document.querySelector('.close');
  const mobileMenu = document.querySelector('.mobile-flex');

  hamburger.addEventListener('click', (e) => {
    mobileMenu.classList.add('absolute');
    mobileMenu.classList.remove('hidden');
  })
  closeIcon.addEventListener('click', (e) => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('absolute');
  })


 const popup = document.querySelector('.popup');
 const popupImage = document.getElementById("popupImage");

 function openPopupImage(pic) {
  popup.classList.add('flex');
  popup.classList.remove('hidden');
  popupImage.src = pic;
 }

 function closePopupImage() {
  popup.classList.remove('flex');
  popup.classList.add('hidden');
  
 }