/* hero */

const heroSwiper = new Swiper('.hero__swiper', {
  pagination: {
    el: '.hero__pagination',
  },
  slidesPerView: "auto",
  grid: {
    rows: 1
  },
  spaceBetween: 32,
  navigation: {
    nextEl: ".hero__next",
    prevEl: ".hero__prev",
    disabledClass: "hero__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
});

/* products */

const productsSlider = new Swiper('.products__swiper', {
  pagination: {
    el: '.products__pagination',
  },
  slidesPerView: "auto",
  grid: {
    rows: 1
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".products__next",
    prevEl: ".products__prev",
    disabledClass: "products__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    924: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    1150: {
      slidesPerView: 4,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    }
  }
});

/* earlier */

const earlierSlider = new Swiper('.earlier__list', {
  pagination: {
    el: '.earlier__pagination',
  },
  slidesPerView: "4",
  grid: {
    rows: 1
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".earlier__next",
    prevEl: ".earlier__prev",
    disabledClass: "earlier__btn--disabled"
  },
  scrollbar: {
    hide: true
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    924: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 32
    },
    1000: {
      slidesPerView: 4,
      grid: {
        rows: 1
      },
      spaceBetween: 20
    }
  }
});