$('.default-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    slideTransition: "linear",
    stagePadding: 0,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2.5,
            margin: 10,
            autoplay: true,
        },
        420: {
            items: 3,
            margin: 10,
            autoplay: true,
        },
        600: {
            items: 3.5,
            margin: 20,
        },
        800: {
            items: 3.5,
            margin: 30,
        },
        900: {
            items: 4,
            margin: 30,
        },
        1000: {
            items: 4,
            margin: 30,
        },
        1300: {
            items: 4.5,
            margin: 40,
        },
        1600: {
            items: 5.5,
            margin: 50,
        },
        1800: {
            items: 6,
            margin: 50,
        },
        1850: {
            items: 7,
            margin: 50,
        }
    }
});


$('.mobile-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    items:3,
    autoplayTimeout: 1500,
    autoplaySpeed: 1500,
    slideTransition: "linear",
    stagePadding: 0,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2.5,
            margin: 10,
        },
        420: {
            items: 3,
            margin: 10,
        },
        600: {
            items: 3.5,
            margin: 20,
        },
        800: {
            items: 3.5,
            margin: 30,
        }
    }
});

var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '10px',
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                centerPadding: '10px',
            }
        }
    ]
});



