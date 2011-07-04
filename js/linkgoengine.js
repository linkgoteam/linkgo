/*
 * LinkGoEngine
*/
(function(window){
	var LinkGoEngine = (function(){
		var LinkGoEngine = function(initSettings){
			return new LinkGoEngine().init(initSettings);
		};
		LinkGoEngine.prototype = {
			init: function(initSettings){
				var settings = initSettings ? initSettings : null,
				row = settings && typeof settings.row == "number" ? settings.row : null,
				column = settings && typeof settings.column == "number" ? settings.column : null,
				category = settings && typeof setings.category == "number" ? settings.category : null;

				if(row && column){
					this.matrix = [];	
					var i = row * column;
					while(--i>=0){
						this.matrix[i] = i;
					}
				}
				this.category = category;
			},
		};
		return LinkGoEngine;
	})();
	window.LinkGoEngine=LinkGoEngine;
})(window);
