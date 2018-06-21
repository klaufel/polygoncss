/* ============================================================
 * Cookie consent
 * ============================================================
 *
 * It shows a set of libraries and general functions that will
 * give us usefulness when using them in conjunction with after functions.
 *
 */


// ============================================================
// Click event trigger

function cookieConsent() {
  if (!$.cookie('opticaferao_cookieconsent') == 1) {
    cookieConsent__showModal();
  }
}

function cookieConsent__showModal() {
  setTimeout(function() {
    $('.c-cookie-consent').addClass('is-active');
  }, 100);
  $('.c-cookie-consent__button').on('click', function(event) {
    event.preventDefault();
    cookieConsent__setCookie();
  });
};

function cookieConsent__setCookie() {  
  var date = new Date();
  var minutes = 10080; // 7 days
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  $.cookie('opticaferao_cookieconsent', 1, {
    expires: date, 
    path: '/'
  });
  $('.c-cookie-consent').removeClass('is-active');
};
