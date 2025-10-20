document.addEventListener("DOMContentLoaded", function () {
  const mainSwiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mySwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiper .swiper-button-next",
      prevEl: ".mySwiper .swiper-button-prev",
    },
    effect: "slide",
    speed: 800,
    grabCursor: true,
  });

  const menuSwiper = new Swiper(".menuSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".menuSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".menuSwiper .swiper-button-next",
      prevEl: ".menuSwiper .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const orderSection = document.querySelector(".order-banner");
  if (orderSection) {
    orderSection.addEventListener("click", function () {
      window.open("https://wa.me/201009105861", "_blank");
    });
    orderSection.style.cursor = "pointer";
  }
});
