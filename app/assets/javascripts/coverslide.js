var coverslide = (function() {
  self = {
    init: function() {
      if ($.browser.webkit || $.browser.mozilla) {
        var $window = $(window);
        $window.bind('scroll', function() {
          var pos = $(window).scrollTop();

          if (pos > 2) {
            $('#cover').addClass("alt");
            $('#cover img').addClass("alt");
            $('nav').addClass("still");
          } else {
            $('nav').removeClass("alt");
            $('#cover img').removeClass("alt");
            $('nav').removeClass("still");
          }
        });
      }
    }
  }
  return self;
})();

$(document).ready(function() {
  coverslide.init();
});