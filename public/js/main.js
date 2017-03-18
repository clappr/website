require('./../stylesheets/main.scss')
require('./../stylesheets/itWasToBeASVG.scss')
require('./../stylesheets/scroll-anim.scss')

$(window).load(function() {
  $('.clappr-ws__loader').attr('style', 'opacity: 0;');

  setTimeout(function() {
    $('.clappr-ws__loader').hide();
  }, 1000);

  if ($(window).width() >= 800){
    $('.clappr-ws__closed-menu').on("click", function(){
      $('.clappr-ws__open-menu').removeClass('none');
      setTimeout(function(){
        $('.clappr-ws__side-menu').attr('style', 'opacity: 0.8;');
        $('.clappr-ws__menu').attr('style', 'width: 25vw;');
        setTimeout(function(){
          $('.clappr-ws__menu-list').attr('style', 'opacity: 1;');
        }, 500);
      }, 100);
    });

    $('.clappr-ws__side-menu').on("click", function(){
        $('.clappr-ws__menu-list').attr('style', '');
        setTimeout(function(){
            $('.clappr-ws__side-menu').attr('style', '');
            $('.clappr-ws__menu').attr('style', 'width: 0vw;');
            setTimeout(function(){
                $('.clappr-ws__open-menu').addClass('none');
            }, 500);
        }, 100);
    });

/*---------------------------------------VIDEO-----------------------------------------------------------*/
    function showIn() {
      $('.clappr-ws__how-to').toggleClass('none');
      $('.clappr-ws__burger-icon line').attr('style', 'stroke: black;');
      setTimeout(function(){
          $('.clappr-ws__how-to').toggleClass('show');
      }, 500);
    };

    function showOut() {
      $('.clappr-ws__how-to').toggleClass('show');
      $('.clappr-ws__burger-icon line').attr('style', 'stroke: white;');
      setTimeout(function(){
          $('.clappr-ws__how-to').toggleClass('none');
      }, 500);
    };

    function giroIn() {
      $('.clappr-ws__video-example').toggleClass('none');
      setTimeout(function(){
          $('.clappr-ws__how-to').toggleClass('giro-out');
          setTimeout(function(){
              $('.clappr-ws__video-example').toggleClass('giro-in');
          }, 500);
      }, 500);
    };

    function giroOut() {
      $('.clappr-ws__video-example').toggleClass('giro-in');
      setTimeout(function(){
          $('.clappr-ws__how-to').toggleClass('giro-out');
          setTimeout(function(){
              $('.clappr-ws__video-example').toggleClass('none');
          }, 500);
      }, 500);
    };

    function show2In() {
      $('.empty').toggleClass('none');
      $('.clappr-ws__opensource-text').toggleClass('none');
      $('.clappr-ws__opensource-images').toggleClass('none');
      setTimeout(function(){
          $('.empty').toggleClass('show2');
          $('.clappr-ws__video-example').toggleClass('baixo');
          $('.clappr-ws').toggleClass('bgblack');
          $('.clappr-ws__burger-icon line').attr('style', 'stroke: white;');
          setTimeout(function(){
              $('.clappr-ws__opensource-text').toggleClass('show2');
              $('.clappr-ws__opensource-images').toggleClass('show2');
          }, 500);
      }, 500);
    };

    function show2Out() {
      $('.clappr-ws__opensource-text').toggleClass('show2');
      $('.clappr-ws__opensource-images').toggleClass('show2');
      setTimeout(function(){
        $('.empty').toggleClass('show2');
        $('.clappr-ws__video-example').toggleClass('baixo');
        $('.clappr-ws').toggleClass('bgblack');
        $('.clappr-ws__burger-icon line').attr('style', 'stroke: black;');
        setTimeout(function(){
          $('.empty').toggleClass('none');
          $('.clappr-ws__opensource-text').toggleClass('none');
          $('.clappr-ws__opensource-images').toggleClass('none');
        }, 500);
      }, 500);
    };

    function customize1In() {
      $('.empty').toggleClass('show2');
      $('.clappr-ws__opensource-text').toggleClass('show2');
      $('.clappr-ws__opensource-images').toggleClass('show2');
      $('.clappr-ws__customize-container').toggleClass('none');
      setTimeout(function (){
        $('.clappr-ws__video-example').toggleClass('customize-video');
      }, 200);
      setTimeout(function (){
        $('.clappr-ws__customize-container').toggleClass('show2');
        $('.clappr-ws__title--customize').attr('style', 'color: #1455ff;');
        $('.empty').toggleClass('none');
        $('.clappr-ws__opensource-text').toggleClass('none');
        $('.clappr-ws__opensource-images').toggleClass('none');
      }, 1000);
    };

    function customize1Out() {
      $('.clappr-ws__customize-container').toggleClass('show2');
      $('.clappr-ws__title--customize').attr('style', 'color: #1455ff;');
      $('.empty').toggleClass('none');
      $('.clappr-ws__opensource-text').toggleClass('none');
      $('.clappr-ws__opensource-images').toggleClass('none');
      setTimeout(function (){
        $('.clappr-ws__video-example').toggleClass('customize-video');
      }, 200);
      setTimeout(function (){
        $('.empty').toggleClass('show2');
        $('.clappr-ws__opensource-text').toggleClass('show2');
        $('.clappr-ws__opensource-images').toggleClass('show2');
        $('.clappr-ws__customize-container').toggleClass('none');
      }, 1000);
    };

    function customize2In() {
      $('.clappr-ws__infantil-theme').toggleClass('none');
      setTimeout(function(){
        $('.clappr-ws__infantil-theme').toggleClass('show2');
        $('.clappr-ws__title--customize').attr('style', 'color: #ffcc00;');
        $('.clappr-ws__circle--to-left').toggleClass('clappr-ws__circle--blue');
        $('.clappr-ws__circle--to-center').toggleClass('clappr-ws__circle--yellow');
      }, 500);
    }

    function customize2Out() {
      $('.clappr-ws__infantil-theme').toggleClass('show2');
      $('.clappr-ws__title--customize').attr('style', 'color: #1455ff;');
      $('.clappr-ws__circle--to-left').toggleClass('clappr-ws__circle--blue');
      $('.clappr-ws__circle--to-center').toggleClass('clappr-ws__circle--yellow');
      setTimeout(function(){
        $('.clappr-ws__infantil-theme').toggleClass('none');
      }, 500);
    }

    function customize3In() {
      $('.clappr-ws__infantil-theme').toggleClass('show2');
      $('.clappr-ws__title--customize').attr('style', 'color: #9740c9;');
      $('.clappr-ws__circle--to-center').toggleClass('clappr-ws__circle--yellow');
      $('.clappr-ws__circle--to-right').toggleClass('clappr-ws__circle--purple');
      $('.clappr-ws__blur-theme').toggleClass('show');
      $('.clappr-ws__multidevice-image').toggleClass('show2');
    }

    function customize3Out() {
      $('.clappr-ws__infantil-theme').toggleClass('show2');
      $('.clappr-ws__title--customize').attr('style', 'color: #ffcc00;');
      $('.clappr-ws__circle--to-center').toggleClass('clappr-ws__circle--yellow');
      $('.clappr-ws__circle--to-right').toggleClass('clappr-ws__circle--purple');
      $('.clappr-ws__blur-theme').toggleClass('show');
      $('.clappr-ws__multidevice-image').toggleClass('show2');
    }

    function multidevice() {
      $('.clappr-ws__customize-container').toggleClass('show2');
      $('.clappr-ws__blur-theme').toggleClass('show');
      $('.clappr-ws__video-example').toggleClass('multidevice-video');
      $('.clappr-ws__multidevice-container').toggleClass('show2');
    }

    function menublack() {
      $('.clappr-ws__burger-icon line').attr('style', 'stroke: black;');
    }
    function menuwhite() {
      $('.clappr-ws__burger-icon line').attr('style', 'stroke: white;');
    }

    function creditsIn() {
      $('.clappr-ws__burger-icon line').attr('style', 'stroke: white;');
    }
    function creditsOut() {
      $('.clappr-ws__burger-icon line').attr('style', 'stroke: black;');
    }

    function fadescrollIn() {
      $('.clappr-ws__initial-scroll-text').attr('style', '');
      $('.clappr-ws__initial-scroll-line').attr('style', '');
      setTimeout(function(){
        $('.clappr-ws__initial-scroll-text').hide();
        $('.clappr-ws__initial-scroll-line').hide();
      }, 1000);
    }

    function fadescrollOut() {
      $('.clappr-ws__initial-scroll-text').show();
      $('.clappr-ws__initial-scroll-line').show();
      setTimeout(function(){
        $('.clappr-ws__initial-scroll-text').attr('style', 'opacity: 100;');
        $('.clappr-ws__initial-scroll-line').attr('style', 'opacity: 100;');
      }, 100);
    }

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--get-started",
      triggerHook: 0,
      offset: -500    // start this scene after scrolling for 50px
    })
    .on('enter', showIn)
    .on('leave', showOut)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--running-example",
      triggerHook: 0,
      offset: 0    // start this scene after scrolling for 50px
    })
    .on('enter', giroIn)
    .on('leave', giroOut)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--open-source",
      triggerHook: 0,
      offset: -1    // start this scene after scrolling for 50px
    })
    .on('enter', show2In)
    .on('leave', show2Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--customize-first",
      triggerHook: 0,
      offset: -1    // start this scene after scrolling for 50px
    })
    .on('enter', customize1In)
    .on('leave', customize1Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--customize-second",
      triggerHook: 0,
      offset: 0    // start this scene after scrolling for 50px
    })
    .on('enter', customize2In)
    .on('leave', customize2Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--customize-third",
      triggerHook: 0,
      offset: 0    // start this scene after scrolling for 50px
    })
    .on('enter', customize3In)
    .on('leave', customize3Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--customize-third",
      triggerHook: 0,
      offset: $(window).height()/2    // start this scene after scrolling for 50px
    })
    .on('enter', multidevice)
    .on('leave', multidevice)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--presentation",
      triggerHook: 0,
      offset: $(window).height()/2    // start this scene after scrolling for 50px
    })
    .on('enter', menublack)
    .on('enter', fadescrollIn)
    .on('leave', menuwhite)
    .on('leave', fadescrollOut)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--multidevice",
      triggerHook: 0,
      offset: $(window).height()/2    // start this scene after scrolling for 50px
    })
    .on('enter', menublack)
    .on('leave', menuwhite)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".clappr-ws__section--plugins",
      triggerHook: 0,
      offset: $(window).height()/2    // start this scene after scrolling for 50px
    })
    .on('enter', menuwhite)
    .on('leave', menublack)
    .addTo(controller);
  };

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  //tentando fazer o smooth scrolling sem JQuery /:
  // var sections = document.querySelectorAll('a[href*="#"]:not([href="#"])');
  // for(var section of sections) {
  //   section.addEventListener('click', function() {
  //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //       var target = document.getElementById(this.hash.slice(1));
  //       if (target) {
  //         var keyframes = [
  //           {scrollTop: target.offsetTop, easing: 'ease-out'}
  //         ];
  //         var animateOptions = {
  //           duration:1000,
  //           iterations: Infinity
  //         };
  //         document.body.animate(keyframes, animateOptions);
  //         return false;
  //       }
  //     }
  //   });
  // };
});
