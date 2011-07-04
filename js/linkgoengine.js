(function(window) {
	var LinkGoEngine = (function() {
		var LinkGoEngine = function(rowNumber, columnNumber) {
			return new LinkGoEngine().init(rowNumber, columnNumber);
		};
		LinkGoEngine.prototype = {
			init: function(rowNumber, columnNumber) {
				console.log(rowNumber);
				console.log(columnNumber);
			}
		};
		return LinkGoEngine;
	})();
	window.LinkGoEngine = LinkGoEngine;
})(window);

