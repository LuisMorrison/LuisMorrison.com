"use strict";$(function(){$.loadScripts=function(n){var e=$.map(n,function(n){return $.getScript(n)});return e.push($.Deferred(function(n){$(n.resolve)})),$.when.apply($,e)},$.ajaxSetup({cache:!0}),$.getScript("//connect.facebook.net/es_LA/sdk.js",function(){FB.init({appId:"357987004560089",version:"v2.5"})}),$(".dropdown-toggle").dropdown()});
//# sourceMappingURL=../maps/scripts/main.js.map
