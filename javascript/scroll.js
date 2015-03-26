var scrollLimit = 500;

$(window).on('scroll', function(){
	var scrollPos = $(this).scrollTop();

	if(scrollPos < scrollLimit) {
		$('.landing-bg').css({'opacity' : (1 - scrollPos / scrollLimit)})
	}

	if(scrollPos > scrollLimit) {
		$('.landing-bg').css({'opacity' : 0})
	}
});