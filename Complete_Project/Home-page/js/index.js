$(".owl-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,

  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".owl1-2").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,

  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});
