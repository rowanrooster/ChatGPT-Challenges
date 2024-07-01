// Scrolling Header by https://codepen.io/chris_cook/pen/MJwpPj

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".harmony-navbar").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".harmony-navbar").removeClass("active");
        }
    });
});