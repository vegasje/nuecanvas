(function() {
	'use strict';
	
	if (nuecanvas.util.object) {
		return;
	}

	function extend(dest, src) {
		for (var prop in src) {
			typeof prop !== 'undefined' && (dest[prop] = src[prop])
		}

		return dest;
	}

	function clone(src) {
		return extend({}, src);
	}

	neucanvas.util.object = {
		extend: extend,
		clone: clone
	};
})();