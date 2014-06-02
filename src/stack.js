(function() {
	'use strict';

	if (nuecanvas.Stack) {
		return;
	}

	nuecanvas.Stack = function(el, options) {
		options = options || {};
		init(options);
	}

	function init(options) {
		this.layers = [];

		if (options.width !== 'undefined') {
			this.width = options.width;
		}

		if (options.height !== 'undefined') {
			this.height = options.height;
		}
	}

	function addLayer(layer) {
		this.layers.push(layer);
	}

	function render() {
		for (var i = 0; i < this.layers.length; i++) {
			this.layers[i].render();
		}
	}

	function clear() {
		for (var i = 0; i < this.layers.length; i++) {
			this.layers[i].clear();
		}
	}

	nuecanvas.util.object.extend(nuecanvas.Stack.prototype, {
		addLayer: addLayer,
		render: render,
		clear: clear
	});
})();