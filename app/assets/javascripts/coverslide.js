
	
$('section').click(function() {
		console.log('hover');
	 	$('.processWrapper figure img').animate({ 'margin-top': '300px'}, 300);	
});

if ($.browser.webkit || $.browser.mozilla ) {
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
	})	
} ;
	
