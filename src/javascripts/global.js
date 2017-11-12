import '../stylesheets/styles.sass';
var $ = require("jquery");

console.log("Global.js file has imported");

$(document).ready(function(){
	$("#resources .category-list .category").click(function(){
		$("#resources .category-list .category").removeClass("active");
		$(this).addClass("active");
	});

	$("#resources .type-select .list-type").click(function(){
		$("#resources .type-select .list-type").removeClass("active");
		$(this).addClass("active");
		if ($("#list-view-select").hasClass('active')) {
			$("#resources .content").addClass('list-mode');
		} else {
			$("#resources .content").removeClass('list-mode');
		}
	});

	$('.contact-method-select .contact-method').click(function(){
		$('.contact-method-select .contact-method').removeClass("selected");
		$(this).toggleClass("selected");
	});
});