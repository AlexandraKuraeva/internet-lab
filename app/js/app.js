document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('burger-toggle');
  const navMenu = document.querySelector('.js-simplebar');
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  
  burgerToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    burgerToggle.classList.toggle('close');
    body.classList.toggle('menu-open');
  });

  window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      header.classList.add('header-static');
    } else {
      header.classList.remove('header-static');
    }
  });
});
