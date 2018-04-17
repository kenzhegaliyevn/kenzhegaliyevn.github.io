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
                height: 500,
                scroll: false
            });
            return true;
        });
    }).call(this);
});