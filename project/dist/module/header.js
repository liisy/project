"use strict";define(function(){function e(){}return e.prototype.init=function(){$("header").load("/html/component/header.html",function(){if(document.cookie)for(var e=document.cookie.split("; "),t=0;t<e.length;t++){var i=e[t].split("=");"name"==i[0]&&($("header .nav-right li a").eq(0).html(i[1]),$("header .nav-right li a").eq(0).attr("href","javascript:;"),$("header .nav-right li a").eq(1).html("退出"),$("header .nav-right li a").eq(1).attr("href","javascript:;"))}$("header .nav-right li a").eq(1).click(function(e){"登录"!=$("header .nav-right li a").eq(0).html()&&(!function(){var e=document.cookie.match(/[^ =;]+(?=\=)/g);if(e)for(var t=e.length;t--;)document.cookie=e[t]+"=0;expires="+new Date(0).toUTCString()}(),window.location.href="http://localhost:2333/")})})},new e});