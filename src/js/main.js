/* ============================================================
 * Main JS file
 * ============================================================
 *
 * This document includes all calls and initializations of all
 * functions of the project, are also declared constants and
 * global variables to be used within the functions.
 *
 */


// ============================================================
// Global variables

//var HOST = window.location.protocol + "//" + window.location.host;
var HOST = window.location.protocol + "//" + window.location.host + "/";
var HOST_TEMPLATE = HOST + '/';
console.log(HOST);
console.log(HOST_TEMPLATE);

var DEBUG = true;
if(!DEBUG){
  if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn"];
    for(var i = 0; i < methods.length; i++) {
      console[methods[i]] = function() {};
  }
}


// ============================================================
// Window width & height, breakpoints and responsive utilities

var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight

window.onresize = function() {
  WINDOW_WIDTH = window.innerWidth;
  WINDOW_HEIGHT = window.innerHeight;
};

var BREAKPOINTS = {
  sm: 768,
  md: 992,
  lg: 1200
};

function isMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    return true;
  } else {
    return false;
  }
}


// ============================================================
// Document ready


$(document).ready(function() {


  var controllerAnimation = new ScrollMagic.Controller();   

  var animationGlobal__offset = WINDOW_HEIGHT / 4;

  $( '.a-global' ).each(function( index ) {
    var element = $('.a-global').eq(index);
    var elementDuration = element.height();
    var scene = new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 'onEnter',
        offset: animationGlobal__offset
      })
      .on('enter', function() {
        $(element).addClass('is-inview');
      })
      .addTo(controllerAnimation);
    //scene.addIndicators();    
  });
 
  contactMap();

  contactForm();

  headerSticky();

  if( !isMobile() ) {
    autosize($('textarea'));
  }

});

