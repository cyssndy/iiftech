

$(document).ready(function(){
	var titleImgH = $("img.title-img").height();
	var titleImgW = $("img.title-img").width();
	
	$(".navBtn").hover(
		function(){
			$(this).stop();
			$(this).animate({backgroundColor: "#A0A0A0"}, 100);
			
		},
		function(){
			$(this).animate({backgroundColor: "#616161"}, 100);
		}
	);
	
	$(".menu-icon").click(function(){
		$(".headerNavBlock").slideToggle("fast");
	});
	
	if ($(window).width() < 700){
		$("img.title-img").height(titleImgH * 0.8);
		$("img.title-img").width(titleImgW * 0.8);		
	}
	
	$(window).resize(function(){
		if ($(window).width() > 700){
			$(".headerNavBlock").show();
			$("img.title-img").height(titleImgH);
			$("img.title-img").width(titleImgW);
		}
		else{
			$(".headerNavBlock").hide();
			$("img.title-img").height(titleImgH * 0.8);
			$("img.title-img").width(titleImgW * 0.8);
			
		}	
	
	});
	
	
	$(".pageImage").animate({
		marginTop:'+=10',
		opacity: '1'},{
		queue: false,
		duration: 650
	});
	$(".pageTitle").css({ top: '-=30'})
	$(".pageTitle").delay(500).animate({
		top: '+=30px',
		marginTop: '+=20',
		opacity: '1'},{
		queue: true, 
		duration: 1000
	});
});
