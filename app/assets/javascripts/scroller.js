$("document").ready(function() {
	
		
                $('.portfolioscroll').click(function(){
 
                    $('html, body').animate({
                        scrollTop: $("#mywork").offset().top
                    }, 2000);
 
                 });
 
                $('.middle-title').click(function(){
 
                    $('html, body').animate({
                        scrollTop: $(".bottom").offset().top
                    }, 2000);
 
                 });
 
                    $('.bottom-title').click(function(){
 
                    $('html, body').animate({
                        scrollTop: $(".top").offset().top
                    }, 2000);
 
                 });
    
});
