$(document).ready(function() {

    // semantic abur jubur
    $(".ui.sticky").sticky();
    $('.ui.rating').rating();
    $('.ui.dropdown').dropdown();
    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    // sidebar - blur
    $('.cu-sidebar').blurjs({ 
        source: 'body', 
        radius: 10, 
        overlay: 'rgba(255,255,255,0.3)' 
    });

    // slider
    $('.slider').sss();
});