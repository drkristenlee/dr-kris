var $ = require("jquery");

function activateMobileNav() {
	$('.mobile_nav').addClass('active');
	$('body').addClass('mobileOverlay');
}

function deactivateMobileNav() {
	$('.mobile_nav').removeClass('active');
	$('body').removeClass('mobileOverlay');
}

function closeNavList() {
	$('.mobile_nav_list .nav_item').removeClass('drop-vis');
}

$(document).ready(function(){
	
	$(window).resize(function(){
		if ($(window).width() >= 800) {
			deactivateMobileNav();
			closeNavList();
		}
	});

	$('.mobile_nav').click(function(){
		if ( $(this).hasClass('active') ) {
			deactivateMobileNav();
		} else {
			activateMobileNav();
		}
	});

	$('.mobile_nav_list .has-dropdown').click(function(){
		$(this).parent().toggleClass("drop-vis");
	});
});