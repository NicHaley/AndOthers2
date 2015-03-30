var scrollLimit = 500;
var sectionTwo = $('.section-two-tr').offset().top;
var poemOneTop = $('.poem1-tr').offset().top;
var poemTwoTop = $('.poem2-tr').offset().top;
var poemThreeTop = $('.poem3-tr').offset().top;

var vid1Top = $('.vid1').offset().top;
var vid2Top = $('.vid2').offset().top;
var vid3Top = $('.vid3').offset().top;


$(window).on('scroll', function(){
	var scrollPos = $(this).scrollTop();

	// Title Opacity Change
	if(scrollPos < scrollLimit) {
		$('.landing-bg').css({'opacity' : (1 - scrollPos / scrollLimit)});
	}
	if(scrollPos > scrollLimit) {
		$('.landing-bg').css({'opacity' : 0});
	}

	$('.vid-tr-container1').toggleClass("active", ((scrollPos > vid1Top) && (scrollPos < poemOneTop)));
	$('.vid-tr-container2').toggleClass("active", ((scrollPos > vid2Top) && (scrollPos < poemTwoTop)));
	$('.vid-tr-container3').toggleClass("active", ((scrollPos > vid3Top) && (scrollPos < poemThreeTop)));
});