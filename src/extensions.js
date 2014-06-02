(function() {
	'use strict';

	if (nuecanvas.extensions) {
		return;
	}

	function add(dest, src) {
		nuecanvas.util.object.extend(dest.prototype, src.methods);
	}

	nuecanvas.extensions = {
		add: add
	};
})();