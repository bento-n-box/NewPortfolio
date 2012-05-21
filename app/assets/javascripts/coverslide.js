


var $window = $(window);	
		$window.bind('scroll', function(){ 	
		var pos = $(window).scrollTop();	
		
			if (pos > 2){
				$('#cover').addClass("alt");
				$('#cover img').addClass("alt");
			
				$('nav').addClass("still");			
			}	
			if (pos < 1){
				$('nav').removeClass("alt");	
				$('#cover img').removeClass("alt");
				

				$('nav').removeClass("still");
			}		
	});	
	

			
if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 ){
$('#cover').addClass("alt");
				$('#cover img').addClass("alt");
				$('nav').addClass("still");		
};