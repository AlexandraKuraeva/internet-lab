// import Swiper bundle with all modules installed
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    speed: 800,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
});
