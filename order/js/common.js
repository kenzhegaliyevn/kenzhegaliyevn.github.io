$(document).ready(function() {
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab").removeClass("tab_active").eq($(this).index()).addClass("tab_active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".header-item-2").bind('click', function() {
        $(".mobile-menu").removeClass("hide");
        $("body").css({ "overflow": "hidden" });
    });


    $(".menu-button .close-icon").bind('click', function() {
        $(".mobile-menu").addClass("hide");
        $("body").css({"overflow":"visible"});
    });

    $(".mobile-menu li a").bind('click', function() {
        $(".mobile-menu").addClass("hide");
        $("body").css({"overflow":"visible"});
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html:not(:animated), body:not(:animated)").animate({ scrollTop: destination }, 1000);
        return false;
    });

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

    $(".form_block input[type='submit']").bind('click', function() {
        $(".popup-form").addClass("is_open");
        $(document.body).addClass("not_scroll");
    });

    $(".header_content_left a").bind('click', function() {
        $(".popup").addClass("is_open");
        $(document.body).addClass("not_scroll");
    });


    $(".popup_close").bind('click', function() {
        $(".popup").removeClass("is_open");
        $(document.body).removeClass("not_scroll");
    });

    $(".popup_close-form").bind('click', function() {
        $(".popup-form").removeClass("is_open");
        $(document.body).removeClass("not_scroll");
    });

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            $(".popup").removeClass("is_open");
            $(document.body).removeClass("not_scroll");
        }
    });

    $(".popup_content input[type='submit']").click(function() {
        $(".popup_content form").addClass("hide");
        $(".thanks_block").removeClass("hide");
    });


    $("a.scrollTo").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html:not(:animated), body:not(:animated)").animate({ scrollTop: destination }, 1000);
        return false;
    });

    $('.phone-number')
        .keydown(function(e) {
            var key = e.which || e.charCode || e.keyCode || 0;
            $phone = $(this);

            if ($phone.val().length === 1) {
                $phone.val($phone.val() + '(');
            }
            if (key !== 8 && key !== 9) {
                if ($phone.val().length === 5) {
                    $phone.val($phone.val() + ')');
                }
                if ($phone.val().length === 9) {
                    $phone.val($phone.val() + '-');
                }
            }
            return (key == 8 ||
                key == 9 ||
                key == 46 ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        })
        .bind('focus click', function() {
            $phone = $(this);

            if ($phone.val().length === 2) {
                $phone.val($phone().val() + '(');
            }
        })
        .blur(function() {
            $phone = $(this);

            if ($phone.val() === '(') {
                $phone.val('');
            }
        });

    var jssor_1_SlideshowTransitions = [
        { $Duration: 800, $Opacity: 2 }
    ];

    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
});