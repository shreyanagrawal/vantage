$(document).ready(function(){
	$("#hamburgerMenu").click( function(){
		$('#hamburgerMenuContent').css({"left": "0%", "transition": "left .4s"});
		$('body').addClass('stop-scrolling');
		$('.d-md-none').css('display','block');
	});
	$("#closeMenu").click( function(){
		$('#hamburgerMenuContent').css({"left": "100%", "transition": "left .4s"});
		$('body').removeClass('stop-scrolling');
	});
});
