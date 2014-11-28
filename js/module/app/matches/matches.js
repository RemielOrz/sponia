/*!
 * Created By remiel.
 * Date: 14/11/28
 * Time: 下午10:24
 */


define(["Base","template"],function(Base,template) {
    console.log('[module: matches]');
    var $ = Base.$;
    var u = Base.utils;

    var data_matches = {
        matches:[
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            },
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            },
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            },
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            },
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            },
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            },
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            },
            {
                icon1:'./images/pic/pic_04@2x.png',
                icon2:'./images/pic/pic_05@2x.png',
                time:'19:00',
                date:'2014-11-11',
                team:['辽宁宏运','广州恒大']
            }
        ]
    };
    var tpl_matches = template("tpl-matches",data_matches);
    $('#js-recent-match').find('.mod-list-03').html(tpl_matches);
});