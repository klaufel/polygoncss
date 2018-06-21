/* ============================================================
 * Google Maps
 * ============================================================
 *
 * It shows a set of libraries and general functions that will
 * give us usefulness when using them in conjunction with after functions.
 *
 */


// ============================================================
// Click event trigger

function contactForm() {

  $formContact  = $('#form-contact');
  $formResult = $('.c-form__result');

  $formContact.on('submit', function(event) {
    event.preventDefault();
    $formContact.ajaxSubmit({
      type: 'POST',
      success: function(data){

        
       
          $formResult.html(data);
      

      },
    });
    return false;
  })  
}