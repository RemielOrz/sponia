/*!
 * Created By remiel.
 * Date: 14/11/28
 * Time: 下午9:28
 */

define(["Base","Swipe"],function(Base,Swipe) {
    console.log('[module: banner]');
    var $ = Base.$;
    var u = Base.utils;

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

    $('[lazyload]').lazyload(function(e){
        //console.log(e);
    });

});