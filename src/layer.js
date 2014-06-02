function() {
	'use strict';

	if (nuecanvas.Layer) {
		return;
	}

	nuecanvas.Layer = function() {
		options = options || {};
		init(options);
	};

	nuecanvas.extensions.extend(nuecanvas.Layer, nuecanvas.extensions.Observable);
	nuecanvas.util.object.extend(nuecanvas.Layer, nuecanvas.extensions.Groupable);

	function init() {
		nuecanvas.extensions.Observable.init(this);
		nuecanvas.extensions.Groupable.init(this);

		createCanvas();
	}

	function createCanvas() {
		this._el = document.createElement('canvas');
		this._context = this._el.getContext('2d');
	}

	nuecanvas.util.object.extend(nuecanvas.Layer.prototype, {
		
	});
})();