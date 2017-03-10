$(window).load(function() {
  $('.loader').attr('style', 'opacity: 0;');

  setTimeout(function() {
    $('.loader').hide();
  }, 1000);

  if ($(window).width() < 800){
    $('header').addClass('header-active');
    $('#logo').addClass('logo-active');
    $('.future').addClass('future-active');
    $('.future h2').addClass('h2-active');
    $('.future .bt_github').addClass('bt_github-active');
  };

  if ($(window).width() >= 800){
    $('.leftmenu').on("click", function(){
      $('.leftmenu-open').removeClass('none');
      setTimeout(function(){
        $('.protection-menu').attr('style', 'opacity: 0.8;');
        $('.menu').attr('style', 'width: 25vw;');
        setTimeout(function(){
          $('.menu ul').attr('style', 'opacity: 1;');
        }, 500);
      }, 100);
    });

    $('.protection-menu').on("click", function(){
        $('.menu ul').attr('style', '');
        setTimeout(function(){
            $('.protection-menu').attr('style', '');
            $('.menu').attr('style', 'width: 0vw;');
            setTimeout(function(){
                $('.leftmenu-open').addClass('none');
            }, 500);
        }, 100);
    });

/*---------------------------------------VIDEO-----------------------------------------------------------*/
    function showIn() {
      $('.start').toggleClass('none');
      $('.leftmenu line').attr('style', 'stroke: black;');
      setTimeout(function(){
          $('.start').toggleClass('show');
      }, 500);
    };

    function showOut() {
      $('.start').toggleClass('show');
      $('.leftmenu line').attr('style', 'stroke: white;');
      setTimeout(function(){
          $('.start').toggleClass('none');
      }, 500);
    };

    function giroIn() {
      $('.section2 .video').toggleClass('none');
      setTimeout(function(){
          $('.start').toggleClass('giro-out');
          setTimeout(function(){
              $('.section2 .video').toggleClass('giro-in');
          }, 500);
      }, 500);
    };

    function giroOut() {
      $('.section2 .video').toggleClass('giro-in');
      setTimeout(function(){
          $('.start').toggleClass('giro-out');
          setTimeout(function(){
              $('.section2 .video').toggleClass('none');
          }, 500);
      }, 500);
    };

    function show2In() {
      $('.empty').toggleClass('none');
      $('.opensource').toggleClass('none');
      $('.opensource-images').toggleClass('none');
      setTimeout(function(){
          $('.empty').toggleClass('show2');
          $('.section2 .video').toggleClass('baixo');
          $('body').toggleClass('bgblack');
          $('.leftmenu line').attr('style', 'stroke: white;');
          setTimeout(function(){
              $('.opensource').toggleClass('show2');
              $('.opensource-images').toggleClass('show2');
          }, 500);
      }, 500);
    };

    function show2Out() {
      $('.opensource').toggleClass('show2');
      $('.opensource-images').toggleClass('show2');
      setTimeout(function(){
        $('.empty').toggleClass('show2');
        $('.section2 .video').toggleClass('baixo');
        $('body').toggleClass('bgblack');
        $('.leftmenu line').attr('style', 'stroke: black;');
        setTimeout(function(){
          $('.empty').toggleClass('none');
          $('.opensource').toggleClass('none');
          $('.opensource-images').toggleClass('none');
        }, 500);
      }, 500);
    };

    function customize1In() {
      $('.empty').toggleClass('show2');
      $('.opensource').toggleClass('show2');
      $('.opensource-images').toggleClass('show2');
      $('.section4 .customize').toggleClass('none');
      setTimeout(function (){
        $('.section2 .video').toggleClass('customize-video');
      }, 200);
      setTimeout(function (){
        $('.section4 .customize').toggleClass('show2');
        $('.customize h2').attr('style', 'color: #1455ff;');
        $('.empty').toggleClass('none');
        $('.opensource').toggleClass('none');
        $('.opensource-images').toggleClass('none');
      }, 1000);
    };

    function customize1Out() {
      $('.section4 .customize').toggleClass('show2');
      $('.customize h2').attr('style', 'color: #1455ff;');
      $('.empty').toggleClass('none');
      $('.opensource').toggleClass('none');
      $('.opensource-images').toggleClass('none');
      setTimeout(function (){
        $('.section2 .video').toggleClass('customize-video');
      }, 200);
      setTimeout(function (){
        $('.empty').toggleClass('show2');
        $('.opensource').toggleClass('show2');
        $('.opensource-images').toggleClass('show2');
        $('.section4 .customize').toggleClass('none');
      }, 1000);
    };

    function customize2In() {
      $('.infantil').toggleClass('none');
      setTimeout(function(){
        $('.infantil').toggleClass('show2');
        $('.customize h2').attr('style', 'color: #ffcc00;');
        $('.circle').toggleClass('blue');
        $('.circle2').toggleClass('yellow');
      }, 500);
    }

    function customize2Out() {
      $('.infantil').toggleClass('show2');
      $('.customize h2').attr('style', 'color: #1455ff;');
      $('.circle').toggleClass('blue');
      $('.circle2').toggleClass('yellow');
      setTimeout(function(){
        $('.infantil').toggleClass('none');
      }, 500);
    }

    function customize3In() {
      $('.infantil').toggleClass('show2');
      $('.customize h2').attr('style', 'color: #9740c9;');
      $('.circle2').toggleClass('yellow');
      $('.circle3').toggleClass('purple');
      $('.blur').toggleClass('show');
      $('.imgdevice').toggleClass('show2');
    }

    function customize3Out() {
      $('.infantil').toggleClass('show2');
      $('.customize h2').attr('style', 'color: #ffcc00;');
      $('.circle2').toggleClass('yellow');
      $('.circle3').toggleClass('purple');
      $('.blur').toggleClass('show');
      $('.imgdevice').toggleClass('show2');
    }

    function multidevice() {
      $('.section4 .customize').toggleClass('show2');
      $('.blur').toggleClass('show');
      $('.section2 .video').toggleClass('multidevice-video');
      $('.multidevice').toggleClass('show2');
    }

    function menublack() {
      $('.leftmenu line').attr('style', 'stroke: black;');
    }
    function menuwhite() {
      $('.leftmenu line').attr('style', 'stroke: white;');
    }

    function creditsIn() {
      $('.leftmenu line').attr('style', 'stroke: white;');
    }
    function creditsOut() {
      $('.leftmenu line').attr('style', 'stroke: black;');
    }

    function fadescrollIn() {
      $('.scroll span').attr('style', '');
      $('.scroll .line').attr('style', '');
      setTimeout(function(){
        $('.scroll span').hide();
        $('.scroll .line').hide();
      }, 1000);
    }

    function fadescrollOut() {
      $('.scroll span').show();
      $('.scroll .line').show();
      setTimeout(function(){
        $('.scroll span').attr('style', 'opacity: 100;');
        $('.scroll .line').attr('style', 'opacity: 100;');
      }, 100);
    }

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement:".section2",
      triggerHook: 0,
      offset: -500    // start this scene after scrolling for 50px
    })
    .on('enter', showIn)
    .on('leave', showOut)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section21",
      triggerHook: 0,
      offset: 0    // start this scene after scrolling for 50px
    })
    .on('enter', giroIn)
    .on('leave', giroOut)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section3",
      triggerHook: 0,
      offset: -1    // start this scene after scrolling for 50px
    })
    .on('enter', show2In)
    .on('leave', show2Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section4",
      triggerHook: 0,
      offset: -1    // start this scene after scrolling for 50px
    })
    .on('enter', customize1In)
    .on('leave', customize1Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section42",
      triggerHook: 0,
      offset: 0    // start this scene after scrolling for 50px
    })
    .on('enter', customize2In)
    .on('leave', customize2Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section43",
      triggerHook: 0,
      offset: 0    // start this scene after scrolling for 50px
    })
    .on('enter', customize3In)
    .on('leave', customize3Out)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section43",
      triggerHook: 0,
      offset: $(window).height()/2    // start this scene after scrolling for 50px
    })
    .on('enter', multidevice)
    .on('leave', multidevice)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".presentation",
      triggerHook: 0,
      offset: $(window).height()/2    // start this scene after scrolling for 50px
    })
    .on('enter', menublack)
    .on('enter', fadescrollIn)
    .on('leave', menuwhite)
    .on('leave', fadescrollOut)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section5",
      triggerHook: 0,
      offset: $(window).height()/2    // start this scene after scrolling for 50px
    })
    .on('enter', menublack)
    .on('leave', menuwhite)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement:".section6",
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
});
