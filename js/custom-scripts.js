// ======== Scroll Reveal ======== 
window.sr = ScrollReveal();
window.sr = ScrollReveal({ reset: true });
sr.reveal('.srTop',{
	origin: 'top',
	duration: 1000,
		distance:'200px'
});

sr.reveal('.srBottom',{
	origin: 'bottom',
	duration: 1000,
		distance:'200px'
});

sr.reveal('.srLeft',{
	origin:'left',
	duration:1000,
	distance:'200px'
});

sr.reveal('.srRight',{
	origin:'right',
	duration:1000
	
});


// ======== Nice Scroll ============= 
$(document).ready(function(){ 
	$("body").niceScroll({
		cursorcolor: "#bbb",
		cursorwidth: "8px",
		cursorborder: "none",
		background: 'transparent',
		cursorborderradius: "5px" 
	});
});



// ======== Hide Show Scroll ============= 
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#MainNav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
	if (didScroll) {
			hasScrolled();
			didScroll = false;
	}
}, 100);

function hasScrolled() {
	var st = $(this).scrollTop();
 
	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
			return;
	
	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	
	if (st > lastScrollTop && st > navbarHeight)
		$('#MainNav').removeClass('nav-down').addClass('nav-up');	// Scroll Down
		
	else 
		if(st + $(window).height() < $(document).height()) 
			$('#MainNav').removeClass('nav-up').addClass('nav-down'); // Scroll Up
		
	
	
	lastScrollTop = st;
}

