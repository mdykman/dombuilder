
buildDom = function(el) {

	// TODO:: need better test
	var isObj = function(e) {
		if($.isArray(e)) {
			return false;
		}
		return typeof(e) === 'object';
//		 return e.toString() === '[object Object]';
	 };

	var doChildren = function(parent,cl) {
		if($.isArray(cl)) {
			for(var i = 0; i < cl.length; ++i) {
				parent.appendChild(buildDom(cl[i]));
			}
		} else {
			parent.appendChild(buildDom(cl));
		}
	};

	if($.isArray(el)) {
		if(el.length < 1) {
			console.log("empty element");
			return null;
		} else {
			var name = el[0];
			var del = document.createElement(name);
			if(el.length > 1) {
				var nxt = el[1];
				if(isObj(nxt)) {
					for(var cc in nxt) {
						del.setAttribute(cc,nxt[cc]);
					} 
					nxt = el.length > 2 ? el[2] : null;
				}
				if(nxt) doChildren(del,nxt);
			}
			return del;
		}
	} else {
		return document.createTextNode(el);
	}
}
