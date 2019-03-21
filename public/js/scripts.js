/* --------------------------------------------------
    All javascript and jquery plugins acativation
----------------------------------------------------- */
(function ($) {
    'use strict';
    /* ---------------------------------------------
     Bootstrap scrollspy.
    --------------------------------------------- */
    $('body').scrollspy({
        target: '#navbar-main',
        offset: 80
    });

    /* ---------------------------------------------
     jQuery for page scrolling feature - requires jQuery Easing plugin
    --------------------------------------------- */
    $('.nav-link').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /* ---------------------------------------------
     Header sticky style.
    --------------------------------------------- */
    $(window).on('scroll', function () {
        var windowSize = $(window).width();
        if (windowSize > 1 && $(this).scrollTop() > 1) {
            $('.sticky-header').addClass('is_sticky');
        } else {
            $('.sticky-header').removeClass('is_sticky');
        }
    });

    /* ---------------------------------------------
     Menu hamburger for menu
    --------------------------------------------- */
    var hamburgerSelector = $('.hamburger');
    hamburgerSelector.on('click', function () {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-show');
    });
    // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function () {
        $('.navbar-collapse').collapse('hide');
        hamburgerSelector.removeClass('is-active');
    });

    /* ---------------------------------------------
     Bootstrap 4 dropdown active in hover
    --------------------------------------------- */
    $('body').on('mouseenter mouseleave', '.dropdown', function (e) {
        var wpsuperDropdpwn = $(e.target).closest('.dropdown');
        wpsuperDropdpwn.addClass('show');
        setTimeout(function () {
            wpsuperDropdpwn[wpsuperDropdpwn.is(':hover') ? 'addClass' : 'removeClass']('show');
            $('[data-toggle="dropdown"]', wpsuperDropdpwn).attr('aria-expanded', wpsuperDropdpwn.is(':hover'));
        }, 300);
    });

    /*---------------------------
     WoW js init
    -----------------------------*/
    var wowInit = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        scrollContainer: null
    });
    wowInit.init();

    /*---------------------------
     Main Slider
    -----------------------------*/
    function mainSlider() {
        var wpsuperSlider = $('#wpsuper-slider');
        wpsuperSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.wpsuper-single-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        wpsuperSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.wpsuper-single-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        wpsuperSlider.slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            fade: true,
            draggable: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }

    mainSlider();

    /*---------------------------
    Rellax Parallax
    -----------------------------*/
    if ($('.rellax').length != 0) {
        var rellax = new Rellax('.rellax', {
            speed: -2,
            center: true,
            round: true,
            vertical: true,
            horizontal: false
        });
    }
    /*---------------------------
    Interface slider
    -----------------------------*/
    var swiper = new Swiper('.interface-slider', {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    /*---------------------------
    VenoBox gallery popup
    -----------------------------*/
    $('.wpsuper-lightbox').venobox({
        framewidth: '450px',
        border: '10px',
        bgcolor: '#ddd'
    });
    /*---------------------------
    VenoBox video player
    -----------------------------*/
    $('.wpsuper-lightbox-video').venobox({
        border: '10px',
        bgcolor: '#ddd'
    });
    /*---------------------------
    Fact Counter
    -----------------------------*/
    $('.counter').counter();

    /*---------------------------
    3. Testimonial slider
    -----------------------------*/
    var testimonialSlides = $('.testimonial-content');
    testimonialSlides.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        infinite: true,
        asNavFor: '.testimonial-images'
    });
    var testimonialNav = $('.testimonial-images');
    testimonialNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-content',
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    var brandSlider = $('.branding-slider');
    brandSlider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });


    // particlesJS for team section / Bobble
    if ($(".particl-dot").length !== 0) {
        var config = {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#6ECDDD", "#36BB93", "#7D43AE", "#E31565", "#EBA91F"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#111820"
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 0.1,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 6,
                    "random": true
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 0.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "in",
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "push": {
                        "particles_nb": 3
                    }
                }
            },
            "retina_detect": true
        };
        particlesJS('particl-dot', config);
    }
    // particlesJS for slider section
    if ($("#slider-particl").length !== 0) {
        // particlesJS for slider
        var sliderPartical = {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": ["#9119B3", "#E64C4C", "#F86754", "#5225f8", "#AB46F8"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#111820"
                    }
                },
                "opacity": {
                    "value": 0.1,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 0.1,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#9119B3",
                    "opacity": 0.6,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 0.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "in",
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "push": {
                        "particles_nb": 3
                    }
                }
            },
            "retina_detect": true
        };
        particlesJS('slider-particl', sliderPartical);
    }
    /* ---------------------------------------------
     Back to top
    --------------------------------------------- */
    $('body').append('<a id="back-to-top" className="to-top-btn" href="#"><i className="fa fa-angle-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1250, 'easeInOutExpo');
        });
    }
    // Preloader activation
    $(window).on('load', function() {
        $("#wpsuper-loader").fadeOut(700);
    });

    /* ---------------------------------------------
     Ajax support for contact form
    --------------------------------------------- */
    // Get the form.
    var superContactForm = $('#gxap-contact-form');
    // Get the messages div.
    var superFormMessages = $('.form-send-message');
    // Set up an event listener for the contact form.
    $(superContactForm).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(superContactForm).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(superContactForm).attr('action'),
            data: formData
        })
            .done(function (response) {
                // Make sure that the superFormMessages div has the 'success' class.
                $(superFormMessages).removeClass('text-danger');
                $(superFormMessages).addClass('text-success');

                // Set the message text.
                $(superFormMessages).text(response);

                // Clear the form.
                $('#gxap-contact-form .form-control').val('');
            })
            .fail(function (data) {
                // Make sure that the superFormMessages div has the 'error' class.
                $(superFormMessages).removeClass('text-success');
                $(superFormMessages).addClass('text-danger');

                // Set the message text.
                if (data.responseText !== '') {
                    $(superFormMessages).text(data.responseText);
                } else {
                    $(superFormMessages).text('Oops! An error occurred and your message could not be sent.');
                }
            });
    });


    /* ---------------------------------------------
     Google Map
    --------------------------------------------- */
    if ($("#gxap-map").length !== 0) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', mapInit);
    }

    function mapInit() {

        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.679533, -73.999164), // New York
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('gxap-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        var contentString = '<div id="map-content">' +
            '<div id="bodyContent">' +
            '<p className="text-center"> <span className="map-info-icon"><i className="fa fa-map-o"></i></span> <span className="map-info-content">Microsoft Corporation <br>1 Microsoft Way, Reno,  ' +
            ' NV 89501, USA </span></p> ' +
            '<p className="text-center"> <span className="map-info-icon"><i className="fa fa-phone"></i></span> <span> +880044 545 989 626</span> </p> ' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: 'Microsoft Corporation, New York City, USA'
        });
        infowindow.open(map, marker);
    }
})(jQuery);