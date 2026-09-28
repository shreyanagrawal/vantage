$(document).ready(function(){


	var myIndex = 0;
	carousel();

	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("img");
	  for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "hidden"; 
		x[i].style.opacity = "0.8"; 
		x[i].style.transition = "visibility 0s, opacity 0.5s ease"; 
	  }
	  myIndex++;
	  if (myIndex > x.length) {myIndex = 1}    
	  x[myIndex-1].style.visibility = "visible";  
	  x[myIndex-1].style.opacity = "1"; 
		var y = document.getElementsByClassName("img")[myIndex-1].getAttribute("data-name");
		//console.log(y); 
		switch(y){
				case "data-sources":
					//console.log('data');
					$('.content.half-div').addClass('current-slide').fadeIn("slow");
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div').addClass('current-slide1').fadeIn("slow");
					
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "data-hub":
				//debugger;
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div1').addClass('current-slide').fadeIn("slow");
					//debugger;
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					//debugger;
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div1').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1 .half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "dashboards":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div2').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div2').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "security":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.half-div3').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div3').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "technology":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div4').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div4').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "economic":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div5').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div5').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "methodology":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div6').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div6').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "management":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div7').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div7').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "agile":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div8').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div8').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				case "benchmark":
					//console.log('data');
					//$('img.img').css('transform','translate(16.666%, 0%)');
					$('.content.half-div9').addClass('current-slide').fadeIn("slow");
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div9').addClass('current-slide1').fadeIn("slow");
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
				default:
					//$('img.img').css('transform','inherit');
					$('.content.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide');
						}
					);
					$('.content1.half-div').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div1').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div2').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div3').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div4').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div5').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div6').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div7').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div8').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
					$('.content1.half-div9').fadeOut("slow",function() {
							$(this).removeClass('current-slide1');
						}
					);
				break;
			}				
			
	  setTimeout(carousel, 60); 
	}

});