const assert = require('assert');

var FuseBox;

global.FuseBox = FuseBox = {
	plugins: [],
	addPlugin: function(plugin) {
		assert(plugin);
		assert(plugin.hmrUpdate);
		
		this.plugins.push(plugin);
	}
};

require('./lib');

assert(FuseBox.plugins.length === 1);