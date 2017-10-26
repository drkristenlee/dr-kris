webpackJsonp([3],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var $ = __webpack_require__(0);

console.log("Global.js file has imported");

$(document).ready(function () {
	$("#resources .category-list .category").click(function () {
		$("#resources .category-list .category").removeClass("active");
		$(this).addClass("active");
	});
});

$(document).ready(function () {
	$("#resources .type-select .list-type").click(function () {
		$("#resources .type-select .list-type").removeClass("active");
		$(this).addClass("active");
	});
});

/***/ })
],[4]);
//# sourceMappingURL=global.bundle.js.map