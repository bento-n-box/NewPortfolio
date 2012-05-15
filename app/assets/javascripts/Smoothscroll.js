$(document).ready(function(){
  $(".scroll").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top;
    $('html, body').animate({scrollTop:offset}, 500);
  });
});