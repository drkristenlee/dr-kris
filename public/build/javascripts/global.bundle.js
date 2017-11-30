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

function addBackgroundImages() {
	$('.insert-background').each(function () {
		var link = $(this).attr('image-url');
		$(this).css('background-image', "url('" + link + "')");
	});
}

$(document).ready(function () {
	addBackgroundImages();

	$('.button.dropdown').click(function (e) {
		$(e.target).toggleClass("active");
	});

	$("#resources .category-list .category").click(function () {
		$("#resources .category-list .category").removeClass("active");
		$(this).addClass("active");
	});

	$("#resources .type-select .list-type").click(function () {
		$("#resources .type-select .list-type").removeClass("active");
		$(this).addClass("active");
		if ($("#list-view-select").hasClass('active')) {
			$("#resources .content").addClass('list-mode');
		} else {
			$("#resources .content").removeClass('list-mode');
		}
	});
});

/***/ })
],[4]);
//# sourceMappingURL=global.bundle.js.map