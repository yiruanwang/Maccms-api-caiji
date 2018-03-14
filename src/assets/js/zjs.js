(function (doc, win) {
	var docEl = doc.documentElement,
	
		
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = (clientWidth / 12) + 'px';
			console.log("zjs.js");
			
		};
		getencodeURI = function (url) {
			if (url != null) {
				return encodeURI(encodeURI(url));
			} else {
				return null;
			}
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);