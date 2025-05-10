document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });