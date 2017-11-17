$(document).ready(function() {

	$(".toggle_menu").click(function(){
		$(this).toggleClass("on");
		$(".main_menu").slideToggle(); 
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".slider").owlCarousel({
		items : 2,
		nav: true,
		navText: '',
		loop: true
	});

	$(".tab_item").not(":first").hide();
	$(".row .tab").click(function() {
		$(".row .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_wrapper .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});
