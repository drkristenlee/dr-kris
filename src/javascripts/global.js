import '../stylesheets/styles.sass';
var $ = require("jquery");

console.log("Global.js file has imported");

function addBackgroundImages() {
	$('.insert-background').each(function(){
		var link = $(this).attr('image-url');
		$(this).css('background-image', "url('"+link+"')");
	});
}

$(document).ready(function(){
	addBackgroundImages();

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
	
});