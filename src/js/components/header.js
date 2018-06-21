/* ============================================================
 * Generic: Header sticky scroll
 * ============================================================
 *
 * Determines scroll scrolling and if it is greater than X,
 * a given number adds a class to the body.
 *
 */

function headerSticky() {

  var scroll = $(window).scrollTop();
  var scrollY = 60;
  var lastScrollTop = 0;

  var $header = $('.c-header');


  function __action(scroll, scrollY) {
    if( (!$('.c-header').hasClass('is-active')) && (!$('.c-header').hasClass('has-waypoint')) ) {
      if (scroll >= scrollY) {
        $header.addClass('has-sticky');

        if (scroll > lastScrollTop){
          // downscroll code
          $header.addClass('has-scroll');
        } else {
          // upscroll code         
          $header.removeClass('has-scroll');         
        }
      } else {
        $header.removeClass('has-sticky has-scroll');
      }
      lastScrollTop = scroll;
    }
  }


  function __scroll() {
    $(window).scroll(function() {    
      scroll = $(window).scrollTop();
      __action(scroll, scrollY);   
    }); 
  }



  __action();
  __scroll();
}

