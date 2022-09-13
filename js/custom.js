$(function () {

    //Back To Top  Scroll
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 150) {
            $('.back2top').fadeIn(500);
        } else {
            $('.back2top').fadeOut(500);
        }
    });


    //Back To Top  
    $('.back2top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });




})();



