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

    $(".header_content_left a").bind('click', function() {
        $(".popup").addClass("is_open");
        $(document.body).addClass("not_scroll");
    });

    $(".popup_close").bind('click', function() {
        $(".popup").removeClass("is_open");
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

            if ($phone.val().length === 1 && (key === 8 || key === 46)) {
                $phone.val('(');
                return false;
            }
            else if ($phone.val().charAt(0) !== '(') {
                $phone.val('(' + String.fromCharCode(e.keyCode) + '');
            }
            if (key !== 8 && key !== 9) {
                if ($phone.val().length === 4) {
                    $phone.val($phone.val() + ')');
                }
                if ($phone.val().length === 5) {
                    $phone.val($phone.val() + ' ');
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

            if ($phone.val().length === 0) {
                $phone.val('(');
            } else {
                var val = $phone.val();
                $phone.val('').val(val);
            }
        })

        .blur(function() {
            $phone = $(this);

            if ($phone.val() === '(') {
                $phone.val('');
            }
        });
});