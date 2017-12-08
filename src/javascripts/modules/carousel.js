// Updates everything, except for perPage, need to manually change that to match this since 
// you it's a key
const carouselBreakpoint = 1024;

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
	if (window.innerWidth <= carouselBreakpoint) { offset = 1; } else { offset = 2; };

	addClass('#carousel .slide-deck div:nth-child('+ (this.currentSlide+offset) +') .slide', 'active');
}

function slideChange() {
	var offset;
	if (window.innerWidth <= carouselBreakpoint) { offset = 1; } else { offset = 2; };
	
	removeClass('#carousel .slide', 'active');
	addClass('#carousel .slide-deck div:nth-child('+ (this.currentSlide+offset) +') .slide', 'active');
}

function startingState() {
	if( window.innerWidth <= carouselBreakpoint ) { 
		return 1; 
	} else { 
		return 0;
	}
}

// Init Siema carousel
const mySiema = new Siema({
	loop: true,
	perPage: {
		1024: 3
	},
	draggable: false,
	startIndex: startingState(),
	onInit: initSlide,
	onChange: slideChange
});

// Siema controls
document.querySelector('#carousel .control.back').addEventListener('click', function() {
	mySiema.prev();
	// check for mobile actions
	if (window.innerWidth <= carouselBreakpoint && mySiema.currentSlide == 0) {
		// need to do twice so it doesn't land on the other buffer index
		mySiema.prev();
		mySiema.prev();
	}
});
document.querySelector('#carousel .control.next').addEventListener('click', function() {
	mySiema.next();
	// check for mobile actions
	if (window.innerWidth <= carouselBreakpoint && mySiema.currentSlide == (mySiema.innerElements.length-1)) {
		// need to do twice so it doesn't land on the other buffer index
		mySiema.next();
		mySiema.next();
	}
});













