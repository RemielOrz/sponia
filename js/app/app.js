/*!
 * Created By remiel.
 * Date: 14-11-27
 * Time: 上午13:15
 */

require.config({
    baseUrl: location.port === "3000" ? "./js/app/" : "./js/app/",
    paths: {
        "$":(new RegExp(" AppleWebKit/")).test(navigator.userAgent) ? "../lib/zepto/zepto.min" : "../lib/jquery/jquery-1.11.1.min"
        ,"lazyload":"../module/lazyload/lazyload"
        ,"Swipe": "../module/swipe/swipe"

        ,"Base": "../module/base"

        ,"header": "../module/app/header/header"
    },
    shim: {
        "$": {
            exports: "$"
        }
        ,"lazyload": ["$"]
        ,"Swipe": {
            deps: ["$"],
            exports: "Swipe"
        }

    }
});
//
require(["Base","header","Swipe","lazyload"],function(Base,header,Swipe,lazyload){
    console.log('[app init]');
    var $ = Base.$;
    var u = Base.utils;

    Base.BASE_URL = location.port === "3000" ? "" : "./assets";
    //init $wrapper
    var $wrapper = $('.wrapper');

    //banner
    var $swipe = $('#js-swipe-banner')
        ,$swipe__item = $swipe.find('.swipe-item')
        ,swipeLength = $swipe__item.length
        ,$swipe__dotBox = $('<div>').addClass('swipe-dot-box')
        ,$swipe__dot
        ,activeClass = '_active'
        ,startIndex = 0;
    if(swipeLength > 1){
        for(var i = 0;i < swipeLength;i++){
            $swipe__dotBox.append('<i>')
        }
        $swipe__dot = $swipe__dotBox.find('i');
        $swipe__dot.eq(startIndex).addClass('_active');
        $swipe.append($swipe__dotBox);
        var swipe = Swipe($swipe[0],{
            startSlide: startIndex,
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: function(index, elem) {
                $swipe__dot
                    .removeClass(activeClass)
                    .eq(index)
                    .addClass(activeClass);
            },
            transitionEnd: function(index, elem) {}
        });
        $swipe__item.find('img').show();
    }

    //post
    var $swipePost = $('#js-swipe-fans-post')
        ,$swipePost__item = $swipePost.find('.swipe-item');
    if($swipePost__item.length > 1){
        var swipePost = Swipe($swipePost[0],{
            axis: 'y',
            startSlide: 0,
            speed: 1000,
            auto: 3000,
            continuous: true,
            disableScroll: true,
            stopPropagation: true,
            callback: function(index, elem) {
                console.log(1)
            },
            transitionEnd: function(index, elem) {}
        });
        $swipePost__item.show();
    }

    $('[lazyload]').lazyload(function(e){console.log(e)});

});

