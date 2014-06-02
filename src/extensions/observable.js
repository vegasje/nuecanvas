(function() {
	'use strict';

	if (nuecanvas.extensions.Observable) {
		return;
	}

	function init(instance) {
		instance._eventListeners = {};
	}

	function on(events, callback) {
		if (!nuecanvas.util.isArray(events)) {
			events = [events];
		}

		for (var i = 0; i < events.length; i++) {
			var e = events[i];
			if (!this._eventListeners[e]) {
				this._eventListeners[e] = [];
			}
			
			this._eventListeners[e].push(callback);
		}

		return this;
	}

	function fire(events) {
		if (!nuecanvas.util.isArray(events)) {
			events = [events];
		}

		for (var i = 0; i < events.length; i++) {
			var e = events[i];
			if (this._eventListeners[e]) {
				for (var j = 0; j < this._eventListeners[e].length; j++) {
					this._eventListeners[e][j]();
				}
			}
		}

		return this;
	}

	function off(events, callback) {
		if (!nuecanvas.util.isArray(events)) {
			events = [events];
		}

		for (var i = 0; i < events.length; i++) {
			var e = events[i];
			if (this._eventListeners[e]) {
				if (callback) {
					nuecanvas.util.findAndDelete(this._eventListeners[e], callback);
				} else {
					delete this._eventListeners[e];
				}
			}
		}

		return this;
	}

	nuecanvas.Observable = {
		methods: {
			on: on,
			fire: fire,
			off: off
		},
		init: init
	};
})();