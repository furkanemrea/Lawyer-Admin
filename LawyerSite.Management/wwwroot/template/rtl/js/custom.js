/*
Template Name: Osahan Deel - Coupons, Deals & Discounts HTML Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/

(function ($) {
    "use strict"; // Start of use strict

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });

    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    var oneobjowlcarousel = $(".owl-carousel-one");
    if (oneobjowlcarousel.length > 0) {
        oneobjowlcarousel.owlCarousel({
            items: 1,
            lazyLoad: true,
            pagination: false,
            loop: true,
            dots: false,
            autoPlay: 2000,
            nav: true,
            rtl:true,
            stopOnHover: true,
            navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
        });
    }

    var objowlcarousel = $(".owl-carousel-two");
    if (objowlcarousel.length > 0) {
        objowlcarousel.owlCarousel({
            items: 2,
            lazyLoad: true,
            pagination: false,
            loop: true,
            dots: false,
            autoPlay: 2000,
            margin: 15,
            nav: true,
            rtl:true,
            stopOnHover: true,
            navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                979: {
                    items: 2
                },
                1199: {
                    items: 2
                }
            }
        });
    }

    var threeobjowlcarousel = $(".owl-carousel-three");
    if (threeobjowlcarousel.length > 0) {
        threeobjowlcarousel.owlCarousel({
            items: 3,
            lazyLoad: true,
            pagination: false,
            loop: true,
            dots: false,
            autoPlay: 2000,
            margin: 15,
            rtl:true,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],

            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 3
                },
                1199: {
                    items: 3
                }
            }
        });
    }

    var fiveobjowlcarousel = $(".owl-carousel-four");
    if (fiveobjowlcarousel.length > 0) {
        fiveobjowlcarousel.owlCarousel({
            items: 4,
            lazyLoad: true,
            pagination: false,
            loop: true,
            dots: false,
            margin: 15,
            autoPlay: 2000,
            rtl:true,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }

        });
    }

    var fiveobjowlcarousel = $(".owl-carousel-five");
    if (fiveobjowlcarousel.length > 0) {
        fiveobjowlcarousel.owlCarousel({
            items: 5,
            lazyLoad: true,
            pagination: false,
            loop: true,
            dots: false,
            autoPlay: 2000,
            margin: 15,
            rtl:true,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 2
                },
                979: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }

        });
    }

    var restaurantslider = $(".restaurant-slider");
    if (restaurantslider.length > 0) {
        restaurantslider.owlCarousel({
            items: 1,
            lazyLoad: true,
            pagination: false,
            loop: true,
            dots: false,
            autoPlay: 2000,
            rtl:true,
            nav: true,
            stopOnHover: true,
            navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
        });
    }

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // ===========Select2============
    $('select').select2();

    // ===========Tooltip============
    $('[data-toggle="tooltip"]').tooltip()

})(jQuery); // End of use strict