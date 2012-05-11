$(document).ready(function() {	
	ImageSearcher.init();
});

ImageSearcher = {

	init: function (){
		$('button').bind('click', function(){
			ImageSearcher.ajaxCall()
		})
	},
	
	ajaxCall: function (){
	var $textbox = $('#imageSearch');
	var imageQuery = ($textbox.val()); /// result of image query 
	var googleURL = 'https://ajax.googleapis.com/ajax/services/search/images?v=4.0&q='+imageQuery+'&callback=?';
			$.getJSON(googleURL, function(json) {
		  console.log(json);
 			$('#query').append('<img src="'+ json.responseData.results[0].url +'" />')
 				
		});
	}
};	

