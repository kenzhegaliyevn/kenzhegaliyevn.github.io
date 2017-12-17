$(document).ready(function() {
	$(".menu_icon svg").click(function(){
		console.log("click");
		$('.main_menu').slideToggle();
	});
});
