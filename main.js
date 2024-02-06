var swiper = new Swiper(".category", {
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


  var swiper = new Swiper(".examinationSwiper", {
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    mousewheel: true,
    keyboard: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      500: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  });


  var swiper = new Swiper(".testimonial", {
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 60,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      500: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  }
  });

  var swiper = new Swiper(".competition", {
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      500: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  });


  var swiper = new Swiper(".customer", {
    
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    // centeredSlides: true,
    // cssMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    mousewheel: true,
    keyboard: true,

     breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
 });

  // var swiper = new Swiper(".customer", {
  //   loop: true,
  //   slidesPerView: 3,
  //   spaceBetween: 30,

  //   cssMode: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   mousewheel: true,
  //   keyboard: true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //       spaceBetween: 15,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1024: {
  //       slidesPerView: 5,
  //       spaceBetween: 30,
  //     },
  //   },
  // });