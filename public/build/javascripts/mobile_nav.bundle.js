webpackJsonp([5],{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", function (event) {
	document.querySelector(".mobile_nav").addEventListener("click", function () {
		document.querySelector("body").classList.add("mobileOverlay");
	});
	document.querySelector(".mobile_nav_list .close-btn").addEventListener("click", function () {
		document.querySelector("body").classList.remove("mobileOverlay");
	});
});

window.addEventListener("resize", function (event) {
	if (window.innerWidth >= 800) {
		document.querySelector("body").classList.remove("mobileOverlay");
		$('.mobile_nav_list .nav_item').removeClass('drop-vis');
	}
});

$('.mobile_nav_list .has-dropdown').click(function () {
	$(this).parent().toggleClass("drop-vis");
});

/***/ })

},[5]);
//# sourceMappingURL=mobile_nav.bundle.js.map