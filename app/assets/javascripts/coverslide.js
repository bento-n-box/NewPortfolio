var $window = $(window);	
		$window.bind('scroll', function(){ 	
		var pos = $(window).scrollTop();	
		
			if (pos > 2){
				$('#cover').addClass("alt");
				$('#cover img').addClass("alt");
				$('.logo').addClass("alt");
				$('nav').addClass("still");
			

				
			}	
			if (pos < 1){
				$('nav').removeClass("alt");	
				$('#cover img').removeClass("alt");
				$('hgroup').removeClass("alt");			
				$('.logo').removeClass("alt");
				$('nav').removeClass("still");
				
			
			
			}		
	});	
	

			
