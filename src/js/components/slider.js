/* ============================================================
 * Components: Waypoint navigation
 * ============================================================
 *
 * Navigated for the section blocks of the page.
 *
 */

// ============================================================
// Waypoint navigation
      

  function navMobileOpen() {
    $('.c-header').addClass('is-active');
    $('.c-header-logo').addClass('is-active');
    $('.c-nav-button').addClass('is-active');
    $('.c-nav-mobile').addClass('is-active');
  }

  function navMobileClose() {
    $('.c-header').removeClass('is-active');
    $('.c-header-logo').removeClass('is-active');
    $('.c-nav-button').removeClass('is-active');
    $('.c-nav-mobile').removeClass('is-active');
  }


  $('.c-nav-button').on('click', function() {
    if( $('.c-header-logo').hasClass('is-active') ) {
      navMobileClose();
    } else {
      navMobileOpen();
    }
  });


  function slider() {

    $sliderList = $('.c-slider__list');
    $sliderListItem = $('.c-slider__list__item');
    $sliderNavLink = $('.c-slider__nav__link');
    sliderNavPosition = 0;

    $sliderNavLink.on('click', function(event) {
      event.preventDefault();
      sliderNavPosition = $(this).parent().index();
      $sliderNavLink.removeClass('is-active');
      $(this).addClass('is-active');
      console.log(sliderNavPosition);
      $sliderList.addClass('is-active');
      setTimeout(function() {
        $sliderListItem.removeClass('is-active');
        $sliderListItem.eq(sliderNavPosition).addClass('is-active');
        $sliderList.removeClass('is-active');
      }, 500)
    });
  }

  $(document).ready(function() {
      slider();


  });