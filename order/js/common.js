$(document).ready(function() {
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab").removeClass("tab_active").eq($(this).index()).addClass("tab_active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    (function() {
        jQuery(function() {
            this.film_rolls || (this.film_rolls = []);
            this.film_rolls['demo'] = new FilmRoll({
                container: '#demo',
                height: 420,
                scroll: false
            });
            return true;
        });
    }).call(this);

	$(".header_content_left a").bind('click', function(){
		$(".popup").addClass("is_open");
		$(document.body).addClass("not_scroll");
	});

	$(".popup_close").bind('click', function(){
		$(".popup").removeClass("is_open");
		$(document.body).removeClass("not_scroll");		
	});

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
			$(".popup").removeClass("is_open");
			$(document.body).removeClass("not_scroll");
        }
    });

    $(".popup_content input[type='submit']").click(function(){
		$(".popup_content form").addClass("hide");
		$(".thanks_block").removeClass("hide");
    });

});