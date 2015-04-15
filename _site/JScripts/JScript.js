

$(document).ready(function(){
	//var origColor
	$(".navBtn").hover(
		function(){
			$(this).animate({backgroundColor: "#CACACA"}, 100);
			
		},
		function(){
			$(this).animate({backgroundColor: "#616161"}, 100);
		}
	);
	
	$(".menu-icon").click(function(){
		$(".headerNavBlock").slideToggle("fast");
	});
	
	$(window).resize(function(){
		if ($(window).width() > 700){
			$(".headerNavBlock").show();
		}
		else{
			$(".headerNavBlock").hide();
		}	
	
	});

});
