// JavaScript document

$(function () {
    'use strict';

    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top
            },
            800
        );
    });

    let offset = $('#bottom_header').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('#bottom_header').addClass('fixedNav');
        } else {
            $('#bottom_header').removeClass('fixedNav');
        }
    });


    // desktop view
    if (window.innerWidth > 1024) {
        $('#slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    } else { // mobile view
        $('#slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    $('#modal_box, #black_fill').hide();

    $('#call').click(function() {
        $('#modal_box, #black_fill').show();
    });

    $('#close_modal, #black_fill').click(function() {
        $('#modal_box, #black_fill').hide();
    });
});