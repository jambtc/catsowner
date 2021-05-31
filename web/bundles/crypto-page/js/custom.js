$('.loading-wrapper').fadeOut(1500,function(e){
    $('.loading-wrapper').prop('display', 'none');
});

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

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'bundles/crypto-page/js/particle-dark.json', function() {
      console.log('callback - particles.js config loaded');
    });


    // count down
    $('.countdown').downCount({
        date: '07/01/2021 12:00:00',
        offset: -5
    }, function () {
        //alert('WOOT WOOT, done!');
    });

    // scroll reveal
    ScrollReveal().reveal('.container');


    // progress bar
    const tokenbar = document.querySelectorAll('#test li')
    tokenbar.forEach((item, i) => {
        if ($(item).hasClass('progress-active')) {
            var value = $(item).data('progress');
            $(item).css('width',value);
        } else {
            var value = $(item).data('position');
            $(item).css('left',value);
        }
    });



});
