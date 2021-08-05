$(function(){

    $(".top_banner i").on("click", function(){
        $(".top_banner").addClass("on")
    });

    $(window).on("resize", function(){
        $(".top_banner").removeClass("on");
    })

    $(".mopen").on("click", function(){
        $("nav").toggleClass("on");
        $(this).toggleClass("on");
    });

    //main slider
    $(".main_slider").slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        dots:true,
        pauseOnHover:false,
    });

    $(".main_slider figure").eq(1).addClass("on");
    $(".main_slider").on("afterChange", function(e, s, c){
        $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on")
    });

    $("#movie01 .xi-play").on("click", function(){
        $("#movie01 video").trigger("play");
    })
    
    $("#movie01 .xi-pause").on("click", function(){
        $("#movie01 video").trigger("pause");
    })

    $("#bgndVideo").YTPlayer({
        containment: "#movie02",
        autoPlay: true,
        mute: true,
        startAt:0,
        opacity:0.5,
        showcontrol:false,
    });

    $("#movie02 .xi-pause").on ("click", function(){
        $("#bgndVideo").YTPPause();
    })
    
    $("#movie02 .xi-play").on ("click", function(){
        $("#bgndVideo").YTPPlay();
    })

    $(".product_slider").slick({
        arrows:false,
        slidesToShow: 5,
        dots:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });
    
    $("#product .xi-arrow-left").on("click", function(){
        $(".product_slider").slick("slickPrev")
    });
    
    $("#product .xi-arrow-right").on("click", function(){
        $(".product_slider").slick("slickNext")
    });

    $(".tab li").on("click", function(){
        var idx=$(this).index();//0,1,2
        $(this).toggleClass("on").siblings
        $(".tab_item").eq(idx).show().siblings().hide();
    });

    $(".tab li").on("click", function(){
        $(this).addClass("on").siblings().removeClass("on");
    });

   $(".link select").on("change", function(){
       var lik=$(this).val();
       if(lik) window.open(lik)
   })
})