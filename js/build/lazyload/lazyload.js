/*!
author: remiel <i@remiel.me> 
date: 2014-11-28 
*/
console.log("module:lazyload"),$.fn.lazyload=function(a){return this.each(function(b,c){var d,e,f,g=$(c),h=g.attr("lazyload"),i=g.attr("lazyload-size");return h?(i&&(i=i.split("x"),e=i[0],f=i[1],g.css({height:f/e*g.width()+"px"})),g.addClass("u-lazyload_hide"),d=document.createElement("img"),d.onload=function(){"IMG"===c.tagName?c.src=h:g.css({backgroundImage:'url("'+h+'")'}),g.addClass("u-lazyload_show").removeClass("u-lazyload_hide").removeAttr("lazyload"),"function"==typeof a&&a.call(this,"onload")},d.onerror=function(){console.log("img lazyload onerror"),"function"==typeof a&&a.call(this,"onerror")},void(d.src=h)):void console.log("lazyload url is error",c)})};