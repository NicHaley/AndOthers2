var scrollLimit = 600;

$(window).on('scroll', function(){
	var scrollPos = $(this).scrollTop();

	if(scrollPos < scrollLimit) {
		$('.title').css({'opacity' : (1 - scrollPos / scrollLimit)})
	}
});