// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(700);    // Fade in the arrow

        $('#juanred').fadeIn(700);          //juan game promo
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        $('#juanred').fadeOut(700);         //juan game promo
    }


});



// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//         $('#juanreseller').css({'opacity':(( 2700-scroll ))+0.1});
//     });



$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});







