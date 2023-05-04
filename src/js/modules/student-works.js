$('.works__list')
  .slick({
    dots: true,
    dotsClass: 'works__dots',
    arrows: true,
    nextArrow: $('.works__btn-next'),
    prevArrow: $('.works__btn-prev'),
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    draggable: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 745,
        settings: { centerPadding: '23%', slidesToShow: 1, draggable: true },
      },
      {
        breakpoint: 641,
        settings: { centerPadding: '15%', slidesToShow: 1 },
      },
    ],
  })
  .on('swipe', initDots);

initDots();

$('.works__dots').on('click', () => {
  initDots();
});

$('.works__btn-next').on('click', () => {
  initDots();
});

$('.works__btn-prev').on('click', () => {
  initDots();
});

function initDots() {
  const dots = $('.works__dots li');

  dots.each((index, item) => {
    if ($(dots[index - 1]).hasClass('slick-active') || $(dots[index + 1]).hasClass('slick-active')) {
      $(item).addClass('works__dots-nearby');
    } else {
      $(item).removeClass('works__dots-nearby');
    }
  });
}
