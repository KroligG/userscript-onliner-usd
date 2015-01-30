// ==UserScript==
// @name         Onliner to USD
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://catalog.onliner.by/*
// @grant        none
// ==/UserScript==

(function($) {
	var curs = +$(".top-informer-currency span._u").text().replace(/[ $]/g, "");
	function replacePrices(selector) {    
		$(selector).each(function(){
			var c = $(this).text();
			var r = /([\d\s]+)(?:- ([\d\s]+))?/.exec(c);
			var p1 = +r[1].replace(/\s/g, "");
			var p1usd = Math.ceil(p1 / curs);
			var text = "$" + p1usd;
            var title = r[1];
			if(r[2]){
				var p2 = +r[2].replace(/\s/g, "");        
				var p2usd = Math.ceil(p2 / curs);
				text += " - $" + p2usd;
                title += "- " + r[2];
			}        
			$(this).text(text).attr("title", title + "���.");
		});
	}

	replacePrices(".pprice");
})(jQuery);