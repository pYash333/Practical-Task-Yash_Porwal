$(document).ready(function () {
    AOS.init();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<img src="assets/images/left-arrow.png" alt="left-arrow.png" />', '<img src="assets/images/right-arrwo.png" alt="right-arrwo.png" />'],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".accordion-button").click(function () {
        if (!$(this).next().hasClass("show")) {
            $('.accordion-item').removeClass("accordion-item-solid");
            $(this).closest('.accordion-item').addClass("accordion-border");
        }
    });
});