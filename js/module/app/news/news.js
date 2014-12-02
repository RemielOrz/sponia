/*!
 * Created By remiel.
 * Date: 14/11/28
 * Time: 下午9:11
 */

define(["Base","template"],function(Base,template) {
    console.log('[module: news]');
    var $ = Base.$;
    var u = Base.utils;

    var data_news = {
        newsList:[
            {
                title: '中国足球队痛失好局客场1:1',
                content: '中国足球队１５日晚在客场对印度尼西亚队的２０１５年亚洲杯预选赛中痛失好局，在率先取得进球和控制了场面的情况下被对手的一次反击将比分扳为１:１平，出线前景不容乐观。中国队在战平印尼后积４分暂居Ｃ组第二名，而同组少赛一场的沙特阿拉伯队和伊拉克队分别以６分和３分位居第一名和第三名，印尼队则以１分垫底。',
                img: './images/pic/pic_03.jpg'
            },
            {
                title: '中国足球队痛失好局客场1:1',
                content: '中国足球队１５日晚在客场对印度尼西亚队的２０１５年亚洲杯预选赛中痛失好局，在率先取得进球和控制了场面的情况下被对手的一次反击将比分扳为１:１平，出线前景不容乐观。中国队在战平印尼后积４分暂居Ｃ组第二名，而同组少赛一场的沙特阿拉伯队和伊拉克队分别以６分和３分位居第一名和第三名，印尼队则以１分垫底。',
                img: './images/pic/pic_03.jpg'
            },
            {
                title: '中国足球队痛失好局客场1:1',
                content: '中国足球队１５日晚在客场对印度尼西亚队的２０１５年亚洲杯预选赛中痛失好局，在率先取得进球和控制了场面的情况下被对手的一次反击将比分扳为１:１平，出线前景不容乐观。中国队在战平印尼后积４分暂居Ｃ组第二名，而同组少赛一场的沙特阿拉伯队和伊拉克队分别以６分和３分位居第一名和第三名，印尼队则以１分垫底。',
                img: './images/pic/pic_03.jpg'
            }
        ]
    };
    var tpl_news = template("tpl-news",data_news);
    $('#js-news')
        .html(tpl_news)
        .find('[lazyload]')
        .lazyload();
});