(function(window){
	var LinkGoEngine = (function(){
		var LinkGoEngine = function(initSettings){
			return new LinkGoEngine().init(initSettings);
		};
		LinkGoEngine.prototype = {
			init: function(initSettings){

			},
		};
		return LinkGoEngine;
	})();
	window.LinkGoEngine=LinkGoEngine;
})(window);
