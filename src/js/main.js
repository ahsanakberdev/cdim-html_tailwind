// FOR NEWS SLIDER

$('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    responsive: [
        {
            breakpoint: 767,
            settings: "unslick"
        }
    ]
});

// FOR MOBILE NAVIGATIONS

function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}

// FOR ACCORDION

$(document).on('click', '.mybox h3', function(){
    $(this).parent('.mybox').toggleClass('active')
});
