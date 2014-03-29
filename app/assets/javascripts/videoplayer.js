var videoplayer = (function() {

  self = {
    cacheSelectors: function() {
      self.dom = {};
      self.dom.video = $('#video').find('video')[0];
      self.dom.jqueryVideo = $('#video').find('video');
    },

    init: function() {
      self.cacheSelectors();
      self.muteVideo();
      self.toggleControls();
      self.dom.video.volume = 0; 
      
      $(document).bind('scroll', function() {
        if (self.isScrolledIntoView(self.dom.video)) {
          self.dom.video.play();
        } else {
          self.dom.video.pause();
        }
      });

    },

    isScrolledIntoView: function(el) {
      var top = el.offsetTop;
      var height = el.offsetHeight;
                       
      return (
       ( top < (window.pageYOffset + window.innerHeight) && 
        (top + 600) >= (window.pageYOffset + window.innerHeight))
      )
    },
    
    muteVideo: function(e) {
      $('#video').toggle( function(){
        self.dom.video.volume = 0; 
      },
      function(){
        self.dom.video.volume = 1; 
      });
    },

    toggleControls: function(){
        self.dom.jqueryVideo.dblclick(function(){
          if (self.dom.video.hasAttribute("controls")) {
            self.dom.video.removeAttribute("controls")   
          } else {
            self.dom.video.setAttribute("controls","controls")   
          }
        }); 
    }
  }
    return self;

})(); 

$(document).ready(function() { 
  videoplayer.init(); 
});
