/*!
author: remiel <i@remiel.me> 
date: 2014-11-28 
*/
define(["Base"],function(a){console.log("[module: header]");var b=a.$,c=a.utils,d=b(window),e=b(document),f=(b("body"),b(".header")),g=f.find(".search"),h=g.find(".search__ipt"),i=f.find(".icon-nav"),j=f.find(".nav"),k="_active",l=".header";g.on(c.events.click+l,function(){b(this).addClass(k)}).on(c.events.click,"input",function(){}),h.on("blur"+l,function(){g.removeClass(k)}).on("focus"+l,function(){g.addClass(k)}),i.on(c.events.click+l,function(a){a.stopPropagation(),d.width()<=640&&j.toggleClass(k)}),e.on(c.events.click+l,function(){j.hasClass(k)&&j.removeClass(k)}),d.on("resize"+l,function(){console.log("resize"),j.hasClass(k)&&j.removeClass(k)})});