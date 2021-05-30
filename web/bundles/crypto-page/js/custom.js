
$(document).ready(function(){
    // change bar color on scroll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Do something
        if (scroll > 100) {
    		$('.header-area').addClass("header-sticky");
            $('.light-logo').hide();
            $('.dark-logo').show();
    	} else {
    		$('.header-area').removeClass("header-sticky");
            $('.light-logo').show();
            $('.dark-logo').hide();
    	}
    });

    // menu trigger
    $('.menu-trigger').on('click', function(e){
        if ($(this).hasClass('active')){
			navMenuClose();
		} else {
            navMenuOpen();
        }
	});

    var navMenuOpen = function(){
        $('.menu-trigger').addClass('active');

    	$('ul.nav').fadeIn(250,function(e){
            $('ul.nav').prop('display', 'block');

    	});
    }
    var navMenuClose = function(){
    	$('.menu-trigger').removeClass('active');

        $('ul.nav').fadeOut(200,function(e){
    		$('ul.nav').prop('display', 'none');
            // $('ul.nav').toggle(); //('display', 'block');
    	});

    }





});