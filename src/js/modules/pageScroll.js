export function pageup() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });
  
      new WOW().init();
};