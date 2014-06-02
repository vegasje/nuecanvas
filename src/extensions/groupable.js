(function() {
	'use strict';

	if (nuecanvas.extensions.Groupable) {
		return;
	}

	function init(instance) {
		instance._objects = {0: []};
		instance._keys = [0];
	}
	
	function add(objects, options) {
		if (!nuecanvas.util.isArray(objects)) {
			objects = [objects];
		}

		options = options || {};

		if (typeof options.zIndex !== 'undefined') {
			if (!this._objects[options.zIndex]) {
				this._objects[options.zIndex] = [];
				this._keys.push(options.zIndex);
				this._keys.sort();
			}

			this._objects[options.zIndex].push.apply(this._objects[options.zIndex], objects);
		}
		
		this.renderOnAddRemove && this.render();

		return this;
	}

	function remove(objects) {
		if (!nuecanvas.util.isArray(objects)) {
			objects = [objects];
		}

		for (var i = 0; i < objects.length; i++) {
			var object = objects[i];

			for (var j = 0; j < this._keys.length; j++) {
				nuecanvas.util.findAndDelete(this._objects[this._keys[j]], object);
			}
		}

		this.renderOnAddRemove && this.render();

		return this;
	}

	function isEmpty() {
		return this._keys.length === 1 && this._objects[this._keys[0]].length === 0;
	}

	function render() {
		for (var i = 0; i < this._objects.length; i++) {
			this._objects[i].render();
		}
	}

	function clear() {
		for (var i = 0; )
	}

	nuecanvas.extensions.Groupable = {
		methods: {
			add: add,
			remove: remove,
			isEmpty: isEmpty,
			render: render,
			clear: clear
		},
		init: init
	};
})();