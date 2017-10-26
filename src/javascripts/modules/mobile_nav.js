document.addEventListener("DOMContentLoaded", function(event) { 
	document.querySelector(".mobile_nav").addEventListener("click", function(){
		document.querySelector("body").classList.add("mobileOverlay");
	});
	document.querySelector(".mobile_nav_list .close-btn").addEventListener("click", function(){
		document.querySelector("body").classList.remove("mobileOverlay");
	});
});

window.addEventListener("resize", function(event) {
	if (window.innerWidth >= 800) {
		document.querySelector("body").classList.remove("mobileOverlay");
	}
});