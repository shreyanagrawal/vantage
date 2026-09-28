$(document).ready(function () {
	/*CODE ADDED FOR SHOW HIDE PASSWORD*/
	$("[id^=tog]").click(function () {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
	/*CODE ADDED FOR SHOW HIDE PASSWORD END CODE*/

	var speed = 6000;
	var currencyPairWidth = $(".slideItem:first-child").outerWidth(true);
	function currencySlide() {
		if (speed !== 0) {
			$(".slideContainer").stop(true, true).animate(
				{ marginLeft: -currencyPairWidth }, speed, "linear",
				function () {
					$(this).css({ marginLeft: 0 }) .find("li:last") .after($(this).find("li:first"));
					currencySlide();
				}
			);
		} else {
			$(".slideContainer").stop(true, true).css("margin-left", 0);
		}
	}
	
	$( ".slideContainer" ).mouseenter(function() {
		speed = 0;
		$(".slideContainer").stop(true, true);
	});

	$( ".slideContainer" ).mouseleave(function() {
		speed = 6000;
		currencySlide();
	});

	currencySlide();
});

