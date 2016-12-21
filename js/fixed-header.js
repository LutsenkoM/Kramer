$(window).scroll(function() {
    var blockHeight = $(".welcome").height();
    var nav = $(".navbar");
    if( $(this).scrollTop() > (blockHeight-2)) {
        nav.addClass("nav-fixed")
    } else {
        $(".navbar").removeClass("nav-fixed");
    }
});
