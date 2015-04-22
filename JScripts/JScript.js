

$(document).ready(function(){
	var titleImgH = $("img.title-img").height();
	var titleImgW = $("img.title-img").width();
	var pageimageH = $("div.imageFrame").height();
	var pageheaderH = $("div.pageHeader").height();
	if (pageimageH < 300){
		pageimageH = 300;
	}
	if (pageheaderH < 300){
		pageheaderH = 300;
	}
	
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
		$("div.imageFrame").height($(window).width()/960 * pageimageH + 75);
		$("div.pageHeader").height($(window).width()/960 * pageheaderH + 75);
		$("img.title-img").height(titleImgH * 0.8);
		$("img.title-img").width(titleImgW * 0.8);		
	}
	else if($(window).width() > 1200){
		$("div.imageFrame").height(pageimageH + ($(window).width() - 1200) * 0.1);
		$("div.pageHeader").height(pageimageH + ($(window).width() - 1200) * 0.1);
	}
	
	$(window).resize(function(){
		if ($(window).width() > 700){
			if ($(window).width() > 1200){
				$("div.imageFrame").height(pageimageH + ($(window).width() - 1200) * 0.1);
				$("div.pageHeader").height(pageimageH + ($(window).width() - 1200) * 0.1);
			}
			else{
				$("div.imageFrame").height(pageimageH);
				$("div.pageHeader").height(pageheaderH);
			}
			$(".headerNavBlock").show();
			$("img.title-img").height(titleImgH);
			$("img.title-img").width(titleImgW);
		}
		else{
			$("div.imageFrame").height($(window).width()/960 * pageimageH + 75);
			$("div.pageHeader").height($(window).width()/960 * pageheaderH + 75);
			$(".headerNavBlock").hide();
			$("img.title-img").height(titleImgH * 0.8);
			$("img.title-img").width(titleImgW * 0.8);
			
		}
	
	});
	
	if ($(window).width() > 700){
		var delayBase = 200;
		$(".pageImage").delay(delayBase).animate({
			opacity: '1'},{
			queue: false,
			duration: 650
		});
		$(".pageImage").delay(delayBase + 150).animate({
			marginTop:'+=10'},{
			queue: false,
			duration: 650
		});
		$(".pageTitle").delay(delayBase + 350).animate({
			opacity: '1'},{
			queue: false, 
			duration: 1000
		});
		$(".pageTitle").delay(delayBase + 550).animate({
			marginTop: '+=60'},{
			queue: false, 
			duration: 1250
		});
	}
	else{
		var delayBase = 130;
		$(".pageImage").delay(delayBase).animate({
			opacity: '1'},{
			queue: false,
			duration: 350
		});
		$(".pageImage").delay(delayBase + 100).animate({
			marginTop:'+=10'},{
			queue: false,
			duration: 350
		});
		$(".pageTitle").delay(delayBase + 250).animate({
			opacity: '1'},{
			queue: false, 
			duration: 650
		});
		$(".pageTitle").delay(delayBase + 300).animate({
			marginTop: '+=20'},{
			queue: false, 
			duration: 650
		});
	}
});
