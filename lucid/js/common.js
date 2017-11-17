$(document).ready(function() {
	$('.menu_icon').click(function(){
		$('.top_menu').slideToggle();
	});

	$('.slider').owlCarousel({
		items : 2,
		loop: true
	});
});

