/*    $(window).bind("scroll", function() {
        if ($(this).scrollTop() > 180) {
            $("#magrig").fadeIn('slow');
        }
        else {
            $("#magrig").stop().fadeOut('fast');
        }
    });

*/$(document).ready(function(){$(window).scroll(function(){$(".navbar").fadeOut(400)})});