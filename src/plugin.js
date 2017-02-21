const __fsbx_css = require('./__fsbx_css');

module.exports = {
	
	hmrUpdate: function(data) {
		if (data.type !== 'css') return;
		
		var sPath = JSON.stringify(data.path);
		var sContent = JSON.stringify(data.content);
		var newContent = '(' + __fsbx_css.toString() + ')(' + sPath + ', ' + sContent + ')';
		FuseBox.dynamic(data.path, newContent);
		
		__fsbx_css(data.path, data.content);
		
		return true;
	}
};