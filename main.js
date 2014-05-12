$(function (){
    var mainBrowser = $('html');
    if( navigator.platform == 'Win32' ){
        mainBrowser.addClass('windows');
    }
    if( navigator.platform == 'MacIntel' ){
        mainBrowser.addClass('mac');
    }
    if(jQuery.browser.webkit){
        mainBrowser.addClass('webkit');
    }
    if(jQuery.browser.mozilla){
        mainBrowser.addClass('firefox');
    }
    if(jQuery.browser.opera){
        mainBrowser.addClass('opera');
    }
    if(jQuery.browser.msie){
        mainBrowser.addClass('msie');
        if($.browser.version == '11.0'){
            mainBrowser.addClass('ie11');
        }
        if($.browser.version == '10.0'){
            mainBrowser.addClass('ie10');
        }
        if($.browser.version == '9.0'){
            mainBrowser.addClass('ie9');
        }
        if($.browser.version == '8.0'){
            mainBrowser.addClass('ie8');
        }
        if($.browser.version == '7.0'){
            mainBrowser.addClass('ie7');
        }
        if($.browser.version == '6.0'){
            mainBrowser.addClass('ie6');
        }
    }
});