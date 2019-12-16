$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html('<img src="img/mobile-menu-light.svg" alt="Hamburger menu">');
        } else {
            $(".item").addClass("active");
            $(this).find("a").html('<img src="img/mobile-menu-close-light.svg" alt="Close menu">');
        }
    });
});
