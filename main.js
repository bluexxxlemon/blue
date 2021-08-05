$(function(){
////////////////////////////////////


    $("#portfolio").fullpage({
        anchors:['intro', 'pf01', 'pf02', 'pf03','pf04', 'pf05', 'info'],
        afterLoad: function(origin, destination, direction){
            // console.log("여기는"+destination.index)
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");

        $("nav ul li").eq(destination.index).addClass("on").siblings().removeClass("on");

        },

    
    });
        
    $(".xi-pause").on("click", function(){
        $(".portfolio01 video").trigger("pause");
    });

    $(".xi-play").on("click", function(){
        $(".portfolio01 video").trigger("play");
    });

    $(".xi-pause").on("click", function(){
        $(".portfolio02 video").trigger("pause");
    });

    $(".xi-play").on("click", function(){
        $(".portfolio02 video").trigger("play");
    });

    // $("xxx").on("mouseenter", function(){
    //     var ht=$(this).find("img").height();
    //     $(this).find("img").animate({top:-100 + "%"},2000)
    // });

    // $("xxx").on("mouseleave", function(){
    //     var ht=$(this).find("img").height();
    //     $(this).find("img").animate({top:-100 + "%"},2000)
    // });

    $(".visual_slider").slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        responive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slider_arrows i.right").on("click", function(){
        $(".visual_slider").slick("slickNext");
    });

    $(".slider_arrows i.left").on("click", function(){
        $(".visual_slider").slick("slickPrev");
    });

    $("header .mopen").on("click", function(){
        $(this).toggleClass("on");
        $(".cover").toggleClass("on");
    });

    $(".cover li a").on("click", function(){
        $(".cover").removeClass("on");
        $("header .mopen").removeClass("on");
      });


      var options = {
        strings: ['Kimboeun 2021 portfolio'],
        typeSpeed: 120,
        startDelay: 50,
        loop: true,
        loopCount: Infinity,
      };
      
      var typed = new Typed('.intro_slogan .text', options);








///////////////////////////////////
})