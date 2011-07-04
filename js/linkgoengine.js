/*
 * LinkGoEngine
*/
(function(window) {
	var LinkGoEngine = (function() {
		var LinkGoEngine = function(initSettings) {
			return new LinkGoEngine.fn.init(initSettings);
		};
		LinkGoEngine.fn = LinkGoEngine.prototype = {
			init: function(initSettings) {
				var settings = initSettings ? initSettings: null,
				row = settings && typeof settings.row == "number" ? settings.row: null,
				column = settings && typeof settings.column == "number" ? settings.column: null,
				category = settings && typeof settings.category == "number" ? settings.category: null,
				members = settings && typeof settings.memebers == "number" ? settings.members: null;

				// init matrix
				this.initMatrix(row, column);

				// init members
				this.initMembers(row, column, category, members);
			},
			initMatrix: function(row, column) {
				this.matrix = [];
				if (row && column) {
					var i = row * column;
					while (--i >= 0) {
						this.matrix[i] = null;
					}
				}
			},
			initMembers: function(row, column, category, members) {
				if (members % 2 != 0 || members < category * 2) {
					throw "members error!";
				}
				var i = members / 2,
				matrix = this.matrix;

				while (i-- > 0) {
					var member = this.getMember(category);
					var position = this.getPosition(row, column);

					matrix[position.start] = member;
					matrix[position.end] = member;
				}
			},
			getMember: function(category) {
				return Math.floor(Math.random() * category + 1);
			},
			getPosition: function(row, column) {
				var n = row * column,
				matrix = this.matrix,
				result = {
					start: null,
					end: null
				};
				while (true) {
					var random = Math.floor(Math.random() * n + 1);
					if (!matrix[random]) {
						if (!result.start) {
							result.start = random;
						} else if (!result.end) {
							result.end = random;
						} else {
							return result;
						}
					}
				}
			}
		};
		return LinkGoEngine;
	})();
	window.LinkGoEngine = LinkGoEngine;
})(window);

