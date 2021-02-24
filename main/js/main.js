// Custom JS code Start From Here
$(function () {
    "use strict";

    // Variables
    var html_body = $('html, body');
    var $window = $(window);
    var $offset = 500;
    var $fh = $('.mainHeader')
    var backToTop = $('.backToTop');


    // Sticky Menu
    $window.on('scroll', function () {
        var y = $(this).scrollTop();
        if (y > .5) {
            $fh.addClass('sticky');
        } else {
            $fh.removeClass('sticky');
        }
        if (y > $offset) {
            backToTop.fadeIn(1000);
        } else {
            backToTop.fadeOut(1000);
        }
    });

    // Back To Top
    backToTop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600)
    });

    // Mobile Menu Fixing
    $('.navbar-collapse li a').on('click', function(){
        $('#navbarToggle').removeClass('show');
    })

    // Dropdown menu
    $('.dropdown > a').on('click', function(){
        $('.dropdownCate').slideToggle('slow');
        $(this).toggleClass('active');
    });

    // Preloader
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // Animated Scroolspy
    $(".hasLink a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
        }
    });

    // Working Contact Form
    $('#contact-form').submit(function() {
        var action = $(this).attr('action');

        $("#message").slideUp(750, function() {
            $('#message').hide();

            $('#submit')
                .before('')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    comments: $('#comments').val(),
                },
                function(data) {
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown('slow');
                    $('#cform img.contact-loader').fadeOut('slow', function() {
                        $(this).remove()
                    });
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#cform').slideUp('slow');
                }
            );

        });
        return false;
    });

    // Venobox 
    $('.venobox').venobox(); 

    $(".priceBox").hover(function () {
        $('.priceBox').removeClass('active');
        $(this).addClass('active');
    });

    $('.bannerSlide').slick({
        speed: 500,
        autoPlay: true,
        dots: false,
        arrows: true,
        prevArrow: $('.bannerArrowsLeft'),
        nextArrow: $('.bannerArrowsRight'),
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.testimonialSlider').slick({
        speed: 500,
        autoPlay: true,
        dots: false,
        arrows: true,
        prevArrow: $('.testimonialArrowLeft'),
        nextArrow: $('.testimonialArrowRight'),
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});