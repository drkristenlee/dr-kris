// Pure JS addClass
function addClass(selector, _class) {
	var classSelect = document.querySelectorAll(selector);
	var numberclass =  document.querySelectorAll(selector).length;  
	for(i = 0; i< numberclass; i++) {
		classSelect[i].classList.add(_class);
	}	
}
// Pure JS removeClass
function removeClass(selector, _class) {
	var classSelect = document.querySelectorAll(selector);
	var numberclass =  document.querySelectorAll(selector).length;  
	for(i = 0; i< numberclass; i++) {
		classSelect[i].classList.remove(_class);
	}	
}

// Carousel Functions
function initSlide() {
	var offset;
	if (window.innerWidth <= 700) { offset = 0; } else { offset = 2; };

	addClass('#carousel .slide-deck div:nth-child('+ (this.currentSlide+2) +') .slide', 'active');
}

function slideChange() {
	var offset;
	if (window.innerWidth <= 700) { offset = 1; } else { offset = 2; };
	
	removeClass('#carousel .slide', 'active');
	addClass('#carousel .slide-deck div:nth-child('+ (this.currentSlide+offset) +') .slide', 'active');
}

// Init Siema carousel
const mySiema = new Siema({
	loop: true,
	perPage: {
		1024: 3,
		700: 1
	},
	onInit: initSlide,
	onChange: slideChange
});

// Siema controls
document.querySelector('#carousel .control.back').addEventListener('click', function() {
	mySiema.prev();
});
document.querySelector('#carousel .control.next').addEventListener('click', function() {
	mySiema.next();
});













