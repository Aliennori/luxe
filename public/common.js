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