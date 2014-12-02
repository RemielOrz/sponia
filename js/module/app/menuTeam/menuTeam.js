/*!
 * Created By remiel.
 * Date: 14/11/28
 * Time: 下午9:23
 */

define(["Base","template"],function(Base,template) {
    console.log('[module: menuTeam]');
    var $ = Base.$;
    var u = Base.utils;

    var data = {
        typeList :[
            {
                name: "热门球队",
                list: [
                    {
                        name: "皇家马德里"
                    },
                    {
                        name: "广州恒大"
                    },
                    {
                        name: "皇家马德里"
                    }
                ]
            },
            {
                name: "炒鸡联赛",
                list: [
                    {
                        name: "皇家马德里2"
                    },
                    {
                        name: "广州恒大2"
                    },
                    {
                        name: "皇家马德里2"
                    }
                ]
            },
            {
                name: "西甲联赛",
                list: [
                    {
                        name: "皇家马德里3"
                    },
                    {
                        name: "广州恒大3"
                    },
                    {
                        name: "皇家马德里3"
                    }
                ]
            }
        ]};
    var tpl_menu = template("tpl-menu-team",data);
    var $menuTeam = $(tpl_menu);

    $menuTeam.insertAfter($('#js-recent-match').find('.mod-header-01'));
    $('#js-menu-team').on('click', function(){
        $(this).toggleClass('_active');
    });
});
