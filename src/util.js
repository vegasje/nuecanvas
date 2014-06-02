(function() {
	'use strict';

	if (nuecanvas.util) {
		return;
	}

	function isArray(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}

	function findAndDelete(src, prop) {
		var i = src.indexOf(prop);

		if (i !== -1) {
			src.splice(i, 1);
		}

		return src;
	}

	nuecanvas.util = {
		isArray: isArray,
		findAndDelete: findAndDelete
	};
})();