

$(document).ready(function(){
	//var origColor
	$(".navBtn").hover(
		function(){
			$(this).animate({backgroundColor: "#CACACA"}, 100);
			if ($(this) == "About"){
				$(this).hide();
			} 
		},
		function(){
			$(this).animate({background: "transparent"}, 100);
		}
	);
});
