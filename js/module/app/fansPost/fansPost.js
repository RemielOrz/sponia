/*!
 * Created By remiel.
 * Date: 14/11/28
 * Time: 下午9:09
 */
define(["Base","template","Swipe"],function(Base,template,Swipe) {
    console.log('[module: fansPost]');
    var $ = Base.$;
    var u = Base.utils;


    var data_post = {
        postList : [
            {
                title: '球迷拽拽哥',
                teams: '皇家马德里 vs 塞维利亚',
                content: '塞维利亚是c罗请来的演员么？'
            },
            {
                title: '球迷拽拽哥',
                teams: '皇家马德里 vs 塞维利亚',
                content: '塞维利亚是c罗请来的演员么？'
            },
            {
                title: '球迷拽拽哥',
                teams: '皇家马德里 vs 塞维利亚',
                content: '塞维利亚是c罗请来的演员么？'
            },
            {
                title: '球迷拽拽哥',
                teams: '皇家马德里 vs 塞维利亚',
                content: '塞维利亚是c罗请来的演员么？'
            },
            {
                title: '球迷拽拽哥',
                teams: '皇家马德里 vs 塞维利亚',
                content: '塞维利亚是c罗请来的演员么？'
            },
            {
                title: '球迷拽拽哥',
                teams: '皇家马德里 vs 塞维利亚',
                content: '塞维利亚是c罗请来的演员么？'
            }
        ]
    };
    var tpl_post = template("tpl-fans-post",data_post);
    var $swipePost = $('#js-swipe-fans-post');
    $swipePost
        .html(tpl_post)
        .find('[lazyload]')
        .lazyload();
    //post swipe
    var $swipePost__item = $swipePost.find('.swipe-item');
    if($swipePost__item.length > 1){
        var swipePost = Swipe($swipePost[0],{
            axis: 'y',
            startSlide: 0,
            speed: 1000,
            auto: 3000,
            continuous: true,
            disableScroll: true,
            stopPropagation: true,
            callback: function(index, elem) {},
            transitionEnd: function(index, elem) {}
        });
        $swipePost__item.show();
    }
});