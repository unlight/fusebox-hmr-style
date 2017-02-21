const fs = require('fs');
const vm = require('vm');

const file = require.resolve('fuse-box/modules/fsbx-default-css-plugin');
cssPluginContent = fs.readFileSync(file, 'utf8');

const context = {
	FuseBox: {
		on: function() {
		}
	}
};

vm.runInNewContext(cssPluginContent, context);

fs.writeFileSync('src/__fsbx_css.js', `module.exports = ${context.__fsbx_css.toString()}`);
