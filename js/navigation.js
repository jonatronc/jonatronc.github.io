$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html('<img src="img/mobile-menu.svg" alt="Hamburger menu">');
        } else {
            $(".item").addClass("active");
            $(this).find("a").html('<img src="img/mobile-menu-close.svg" alt="Close menu">');
        }
    });
});
