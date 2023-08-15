
 
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


  function openPopup(imageSrc) {
    const popup= document.querySelector(".popup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src=imageSrc;
    popup.classList.remove("hidden");

  }
  function closePopup() {
    const popup= document.querySelector(".popup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src="";
    popup.classList.add("hidden");

  }
