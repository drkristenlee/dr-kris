import '../stylesheets/styles.sass';
var $ = require("jquery");

// console.log("Global.js file has imported");

// ---- Functions ----

function addBackgroundImages() {
	$('.insert-background').each(function(){
		var link = $(this).attr('image-url');
		$(this).css('background-image', `url("`+link+`")`);
	});
}

function closeNotifBanner() {
	$('#notification_banner').remove();
}

function completeNewsletter() {
	$('#footer .subscribe_input').toggleClass("completed");
}

// ---- Document Ready ----

document.addEventListener("DOMContentLoaded", function(event) {
	$('#container').addClass('loaded');
});

$(document).ready(function(){
	if ($('#notification_banner .close-btn') !== null) {
		$('#notification_banner .close-btn').click(closeNotifBanner);
	}

	addBackgroundImages();

	$('.button.dropdown').click(function(e){
		$(e.target).toggleClass("active");
	});

	$('#footer .subscribe_input button').click(function(e){
		completeNewsletter();
	});

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