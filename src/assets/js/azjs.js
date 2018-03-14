/**
 * yzjs 簡稱 zjs
 * @param {Object} window
 * @param {Object} document
 */
(function (window, document) {

    var zjs = {};
	/**
	 * 輸出地址包含中文等
	 * @param {Object} url
	 */
    zjs.encodeURI = function (url) {
        if (url != null) {
            return window.location.href = encodeURI(encodeURI(url));
        } else {
            return null;
        }
    };
	/**
	 * 地址包含中文等
	 * @param {Object} url
	 */
    zjs.getencodeURI = function (url) {
        if (url != null) {
            return encodeURI(encodeURI(url));
        } else {
            return null;
        }
    };
	/**
	 * 索取HTML url地址參數 包含中文字符參數
	 * @param {參數名稱} name
	 */
    zjs.getUrlParamZh = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(unescape(r[2]));
        } else {
            return null;
        }
    };
	/**
	 * 索取HTML url地址參數 不包含中文字符參數
	 * @param {參數名稱} name
	 */
    zjs.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    };

	/**
	 * 得到播放中文地址
	 * @param {Object} name
	 */
    zjs.getPlayUrlParam = function () {
        var reg = new RegExp("(^|&)url=([^&]*)(&|$)");
        var jxurl = decodeURIComponent(decodeURIComponent(window.location.search)).substr(1).match(reg);
        //		console.log(unescape(jxurl[2]));

        var urls = unescape(jxurl[2]);
        if (urls.split("url=")[1] != null) {
            return urls.split("url=")[1];
        } else {
            return urls;
        }

    };

    window.zjs = window.yzjs = window.yzapp = window.yazhitv = window.yz = window.yztv = window.$yzapp = zjs;
})(window, document);