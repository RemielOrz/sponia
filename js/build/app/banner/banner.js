/*!
author: remiel <i@remiel.me> 
date: 2014-11-28 
*/
define(["Base","Swipe"],function(a,b){console.log("[module: banner]");var c,d=a.$,e=(a.utils,d("#js-swipe-banner")),f=e.find(".swipe-item"),g=f.length,h=d("<div>").addClass("swipe-dot-box"),i="_active",j=0;if(g>1){for(var k=0;g>k;k++)h.append("<i>");c=h.find("i"),c.eq(j).addClass("_active"),e.append(h);{b(e[0],{startSlide:j,speed:400,auto:3e3,continuous:!0,disableScroll:!1,stopPropagation:!1,callback:function(a){c.removeClass(i).eq(a).addClass(i)},transitionEnd:function(){}})}f.find("img").show()}d("[lazyload]").lazyload(function(){})});