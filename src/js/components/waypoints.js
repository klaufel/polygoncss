/* ============================================================
 * Components: Waypoint navigation
 * ============================================================
 *
 * Navigated for the section blocks of the page.
 *
 */

// ============================================================
// Waypoint navigation
      



function waypoints() {
  var sectionWaypoint_control = true;

  
function landingGoTo(element, delay) {
  $(this).addClass('is-active');
  setTimeout(function() {
    $('html, body').stop().animate({
      scrollTop: $(element).offset().top - $('.c-header').height() + 1
    }, 800, 'easeInOutExpo');
    setTimeout(function() {
      sectionWaypoint_control = true;
      $('.c-header').removeClass('has-scroll has-waypoint');
    }, 850);
  }, delay);
}

  $('.js-waypoint').on('click', function(event) {
    sectionWaypoint_control = false;
    waypointDest = $(this).attr('data-waypoint');
    waypointNav = $(this).attr('data-nav');
    $('.js-waypoint').removeClass('is-active');    
    $(this).addClass('is-active');    
    var delay = 0;
    if(waypointNav == 'mobile') {
      delay = 400;
      navMobileClose();
    }    
    landingGoTo('#' + waypointDest, delay);
    event.preventDefault();
  });

  

  $('.js-go-top').on('click', function(event) {
    event.preventDefault();
    $('.c-header').addClass('has-waypoint has-sticky');
    if( $('.c-header').hasClass('has-nav') ) {
      navMobileClose();
    }
    landingGoTo('#point-index', 0);
    setTimeout(function() {
      $('.c-header').removeClass('has-waypoint has-sticky has-scroll');
    }, 400); 
  });


  var sectionWaypoint = $('.js-point').waypoint(function(direction) {
    console.log(sectionWaypoint_control);
    if(sectionWaypoint_control == true) {
      $('.js-waypoint').removeClass('is-active');
      $('.js-waypoint[data-waypoint="'+ this.element.id +'"]').addClass('is-active');      
    }   
  }, {
    offset: '110px'
  });
}


  $(document).ready(function() {
      waypoints();
  });