import '../stylesheets/styles.sass';
var $ = require("jquery");

console.log("Global.js file has imported");

$(document).ready(function(){
	$("#resources .category-list .category").click(function(){
		$("#resources .category-list .category").removeClass("active");
		$(this).addClass("active");
	});
});

$(document).ready(function(){
	$("#resources .type-select .list-type").click(function(){
		$("#resources .type-select .list-type").removeClass("active");
		$(this).addClass("active");
	});
});