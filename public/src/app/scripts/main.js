'use strict';

$(function() {
    $.loadScripts = function(arr) {
        var _arr = $.map(arr, function(scr) {
            return $.getScript(scr);
        });
        _arr.push($.Deferred(function(deferred) {
            $(deferred.resolve);
        }));
        return $.when.apply($, _arr);
    }

    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/es_LA/sdk.js', function() {
        FB.init({
            appId: '357987004560089',
            version: 'v2.5'
        });
    });

    $('.dropdown-toggle').dropdown();
});
