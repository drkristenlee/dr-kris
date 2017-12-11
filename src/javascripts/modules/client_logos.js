var offset = 0;

function autoLogos() {
	offset-=1;
	document.querySelector('.client_carousel .offset_container').style.left = offset +"px";
	if ( document.querySelector('.client_carousel .offset_container .client_item').offsetWidth < (-1*offset) ) {
		// Add to end
		document.querySelector('.client_carousel .offset_container').appendChild(
			document.querySelector('.client_carousel .offset_container .client_item'));
		// Fix up offsets
		var marR = getComputedStyle(document.querySelector('.client_item')).getPropertyValue("margin-right");
		offset = parseInt(marR);
		document.querySelector('.client_carousel .offset_container').style.left = offset +"px";
	}
}

var interval = setInterval(autoLogos,25);