/*!
author: remiel <i@remiel.me> 
date: 2014-11-28 
*/
define(["Base","template"],function(a,b){console.log("[module: menuTeam]");var c=a.$,d=(a.utils,{typeList:[{name:"热门球队",list:[{name:"皇家马德里"},{name:"广州恒大"},{name:"皇家马德里"}]},{name:"炒鸡联赛",list:[{name:"皇家马德里2"},{name:"广州恒大2"},{name:"皇家马德里2"}]},{name:"西甲联赛",list:[{name:"皇家马德里3"},{name:"广州恒大3"},{name:"皇家马德里3"}]}]}),e=b("tpl-menu-team",d),f=c(e);f.insertAfter(c("#js-recent-match").find(".mod-header-01")),c("#js-menu-team").on("click",function(){c(this).toggleClass("_active")})});