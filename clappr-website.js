!function(e){function o(s){if(t[s])return t[s].exports;var n=t[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o){$(window).load(function(){function e(){$(".start").toggleClass("none"),$(".leftmenu line").attr("style","stroke: black;"),setTimeout(function(){$(".start").toggleClass("show")},500)}function o(){$(".start").toggleClass("show"),$(".leftmenu line").attr("style","stroke: white;"),setTimeout(function(){$(".start").toggleClass("none")},500)}function t(){$(".section2 .video").toggleClass("none"),setTimeout(function(){$(".start").toggleClass("giro-out"),setTimeout(function(){$(".section2 .video").toggleClass("giro-in")},500)},500)}function s(){$(".section2 .video").toggleClass("giro-in"),setTimeout(function(){$(".start").toggleClass("giro-out"),setTimeout(function(){$(".section2 .video").toggleClass("none")},500)},500)}function n(){$(".empty").toggleClass("none"),$(".opensource").toggleClass("none"),$(".opensource-images").toggleClass("none"),setTimeout(function(){$(".empty").toggleClass("show2"),$(".section2 .video").toggleClass("baixo"),$("body").toggleClass("bgblack"),$(".leftmenu line").attr("style","stroke: white;"),setTimeout(function(){$(".opensource").toggleClass("show2"),$(".opensource-images").toggleClass("show2")},500)},500)}function l(){$(".opensource").toggleClass("show2"),$(".opensource-images").toggleClass("show2"),setTimeout(function(){$(".empty").toggleClass("show2"),$(".section2 .video").toggleClass("baixo"),$("body").toggleClass("bgblack"),$(".leftmenu line").attr("style","stroke: black;"),setTimeout(function(){$(".empty").toggleClass("none"),$(".opensource").toggleClass("none"),$(".opensource-images").toggleClass("none")},500)},500)}function i(){$(".empty").toggleClass("show2"),$(".opensource").toggleClass("show2"),$(".opensource-images").toggleClass("show2"),$(".section4 .customize").toggleClass("none"),setTimeout(function(){$(".section2 .video").toggleClass("customize-video")},200),setTimeout(function(){$(".section4 .customize").toggleClass("show2"),$(".customize h2").attr("style","color: #1455ff;"),$(".empty").toggleClass("none"),$(".opensource").toggleClass("none"),$(".opensource-images").toggleClass("none")},1e3)}function g(){$(".section4 .customize").toggleClass("show2"),$(".customize h2").attr("style","color: #1455ff;"),$(".empty").toggleClass("none"),$(".opensource").toggleClass("none"),$(".opensource-images").toggleClass("none"),setTimeout(function(){$(".section2 .video").toggleClass("customize-video")},200),setTimeout(function(){$(".empty").toggleClass("show2"),$(".opensource").toggleClass("show2"),$(".opensource-images").toggleClass("show2"),$(".section4 .customize").toggleClass("none")},1e3)}function a(){$(".infantil").toggleClass("none"),setTimeout(function(){$(".infantil").toggleClass("show2"),$(".customize h2").attr("style","color: #ffcc00;"),$(".circle").toggleClass("blue"),$(".circle2").toggleClass("yellow")},500)}function c(){$(".infantil").toggleClass("show2"),$(".customize h2").attr("style","color: #1455ff;"),$(".circle").toggleClass("blue"),$(".circle2").toggleClass("yellow"),setTimeout(function(){$(".infantil").toggleClass("none")},500)}function r(){$(".infantil").toggleClass("show2"),$(".customize h2").attr("style","color: #9740c9;"),$(".circle2").toggleClass("yellow"),$(".circle3").toggleClass("purple"),$(".blur").toggleClass("show"),$(".imgdevice").toggleClass("show2")}function u(){$(".infantil").toggleClass("show2"),$(".customize h2").attr("style","color: #ffcc00;"),$(".circle2").toggleClass("yellow"),$(".circle3").toggleClass("purple"),$(".blur").toggleClass("show"),$(".imgdevice").toggleClass("show2")}function f(){$(".section4 .customize").toggleClass("show2"),$(".blur").toggleClass("show"),$(".section2 .video").toggleClass("multidevice-video"),$(".multidevice").toggleClass("show2")}function m(){$(".leftmenu line").attr("style","stroke: black;")}function h(){$(".leftmenu line").attr("style","stroke: white;")}function d(){$(".scroll span").attr("style",""),$(".scroll .line").attr("style",""),setTimeout(function(){$(".scroll span").hide(),$(".scroll .line").hide()},1e3)}function C(){$(".scroll span").show(),$(".scroll .line").show(),setTimeout(function(){$(".scroll span").attr("style","opacity: 100;"),$(".scroll .line").attr("style","opacity: 100;")},100)}if($(".loader").attr("style","opacity: 0;"),setTimeout(function(){$(".loader").hide()},1e3),$(window).width()<800&&($("header").addClass("header-active"),$("#logo").addClass("logo-active"),$(".future").addClass("future-active"),$(".future h2").addClass("h2-active"),$(".future .bt_github").addClass("bt_github-active")),$(window).width()>=800){$(".leftmenu").on("click",function(){$(".leftmenu-open").removeClass("none"),setTimeout(function(){$(".protection-menu").attr("style","opacity: 0.8;"),$(".menu").attr("style","width: 50vw;"),setTimeout(function(){$(".menu ul").attr("style","opacity: 1;")},500)},100)}),$(".protection-menu").on("click",function(){$(".menu ul").attr("style",""),setTimeout(function(){$(".protection-menu").attr("style",""),$(".menu").attr("style","width: 0vw;"),setTimeout(function(){$(".leftmenu-open").addClass("none")},500)},100)});var w=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".section2",triggerHook:0,offset:-500}).on("enter",e).on("leave",o).addTo(w),new ScrollMagic.Scene({triggerElement:".section21",triggerHook:0,offset:0}).on("enter",t).on("leave",s).addTo(w),new ScrollMagic.Scene({triggerElement:".section3",triggerHook:0,offset:-1}).on("enter",n).on("leave",l).addTo(w),new ScrollMagic.Scene({triggerElement:".section4",triggerHook:0,offset:-1}).on("enter",i).on("leave",g).addTo(w),new ScrollMagic.Scene({triggerElement:".section42",triggerHook:0,offset:0}).on("enter",a).on("leave",c).addTo(w),new ScrollMagic.Scene({triggerElement:".section43",triggerHook:0,offset:0}).on("enter",r).on("leave",u).addTo(w),new ScrollMagic.Scene({triggerElement:".section43",triggerHook:0,offset:$(window).height()/2}).on("enter",f).on("leave",f).addTo(w),new ScrollMagic.Scene({triggerElement:".presentation",triggerHook:0,offset:$(window).height()/2}).on("enter",m).on("enter",d).on("leave",h).on("leave",C).addTo(w),new ScrollMagic.Scene({triggerElement:".section5",triggerHook:0,offset:$(window).height()/2}).on("enter",m).on("leave",h).addTo(w),new ScrollMagic.Scene({triggerElement:".section6",triggerHook:0,offset:$(window).height()/2}).on("enter",h).on("leave",m).addTo(w)}$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}})})}]);