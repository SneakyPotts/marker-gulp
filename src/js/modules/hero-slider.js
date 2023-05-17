$('.heroSlider__list')
  .slick({
    dots: true,
    dotsClass: 'heroSlider__dots',
    arrows: false,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    draggable: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 745,
        settings: {},
      },
      {
        breakpoint: 641,
        settings: {},
      },
    ],
  })
  .on('swipe', initDots);

initDots();

$('.heroSlider__dots').on('click', () => {
  initDots();
});

function initDots() {
  const dots = $('.heroSlider__dots li');

  dots.each((index, item) => {
    if ($(dots[index - 1]).hasClass('slick-active') || $(dots[index + 1]).hasClass('slick-active')) {
      $(item).addClass('heroSlider__dots-nearby');
    } else {
      $(item).removeClass('heroSlider__dots-nearby');
    }
  });
}

$('.heroSlider-section .heroSlider__wrapper').removeClass('--loading');
$('.heroSlider-section .loader-wrapper').removeClass('--loading');
