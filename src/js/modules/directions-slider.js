function initDots() {
    const dots = $('.direction__dots li');

    dots.each((index, item) => {
        if ($(dots[index - 1]).hasClass('slick-active') || $(dots[index + 1]).hasClass('slick-active')) {
            $(item).addClass('direction__dots-nearby');
        } else {
            $(item).removeClass('direction__dots-nearby');
        }
    });
}



initDots();

$('.direction__dots').on('click', () => {
  initDots();
});

$('.direction__btn-next').on('click', () => {
  initDots();
});

$('.direction__btn-prev').on('click', () => {
  initDots();
});

$('.works-section .works__wrapper').removeClass('--loading');
$('.works-section .loader-wrapper').removeClass('--loading');