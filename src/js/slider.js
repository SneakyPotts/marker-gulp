$(document).ready(function(){
	if ($('.main-slider').children('.main-slider__item').length > 1) {
		$('.main-slider').slick({
		  autoplay: true,
		  autoplaySpeed: 5000,
		  pauseOnHover: true,
		  dots: true,
		  arrows: false,
		  infinite: true,
		  speed: 400,
		  slidesToShow: 1,
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var nextSlideElelemnt = slick.$slider.find(`[data-slick-index=${nextSlide}]`);
			var nextSlideElelemntImg =  nextSlideElelemnt.find('div');
			nextSlideElelemntImg.each(function( index, element ) {
				if(!$(this).hasClass('loaded')){
					$(this).attr('style', $(this).data('slickjs'));
					$(this).addClass('loaded');
				}
			});
		});
	}else{
		$('.main-slider').slick({
		  autoplay: false,
		  dots: false,
		  arrows: false,
		  infinite: false,
		  speed: 400,
		  slidesToShow: 1,
		});
	}
});
