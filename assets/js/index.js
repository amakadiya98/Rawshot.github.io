
$(function () {
    $(".video-carousel").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: "linear",
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

$(function () {
    $(".video-carousel-mobile").slick({
        centerMode:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: "linear",
        arrows: false,
        dots: false,
     
    });
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