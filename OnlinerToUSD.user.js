// ==UserScript==
// @name         Onliner to USD
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://catalog.onliner.by/*
// @grant        none
// ==/UserScript==

var curs = +jQuery(".top-informer-currency span._u").text().replace(/[ $]/g, "");
function replacePrices(selector) {    
    jQuery(selector).each(function(){
        var c = jQuery(this).text();
        var r = /([\d\s]+)(?:- ([\d\s]+))?/.exec(c);
        var p1 = +r[1].replace(/\s/g, "");
        var p1usd = Math.ceil(p1 / curs);
        var text = "$" + p1usd;
        if(r[2]){
            var p2 = +r[2].replace(/\s/g, "");        
        	var p2usd = Math.ceil(p2 / curs);
            text += " - $" + p2usd;
        }        
        jQuery(this).text(text);
    });
}

replacePrices(".pprice");
replacePrices(".device_head table td:first");
