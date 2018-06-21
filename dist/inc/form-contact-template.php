<?php
/**
  * Form Contact: General
  * Function to send email contact form
  */


function get_email_owner_template($form) {
  $email_header = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" lang="es"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>Contacto - Óptica Ferao</title></head><body style="-moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; background: #fff; font-family: Arial,sans-serif; margin: 0; padding: 20px;">';

  $email_body = '
    <span>Email recibido del formulario de contacto de la web (https://opticaferao.com) con fecha: <b>'. $form[ 'date' ] .'</b></span><br/><br/>
    <span><b>Nombre:</b> '. $form[ 'name' ] .'</span><br/>
    <span><b>Email:</b> '. $form[ 'email' ] .'</span><br/>
    <span><b>Mensaje:</b></span><br/><span>'. $form[ 'message' ] .'</span><br/>
  ';

  $email_footer = '</body></html>';

  $email = $email_header . $email_body . $email_footer;
  return $email;
}



function get_email_client_template($form) {


  $email_header = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" lang="es"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>Formulario de contacto / Óptica Ferao</title> <style type="text/css">      /* Client-specific styles */ #outlook a{ padding:0; } /* Force Outlook to provide a "view in browser" message */ .ReadMsgBody{ width:100%; } .ExternalClass{ width:100%; } /* Force Hotmail to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } /* Force Hotmail to display normal line spacing */ .appleBody a { color:#a09f9f!important; text-decoration: none; } .appleFooter a { color:#a09f9f!important; text-decoration: none; } /* Reset styles */ body { width:100%!important; height:100% !important; margin:0; padding:0; } body, table, td, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; } /* Prevent WebKit and Windows mobile changing default text sizes */ table, td { border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; } /* Remove spacing between tables in Outlook 2007 and up */ p { margin: 0; padding: 0; font-size: 0px; line-height: 0px; } /* squash Exact Target injected paragraphs */ img { outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border:0; height: auto; line-height:100%; outline:none; } /* Allow smoother rendering of resized image in Internet Explorer */ a { outline: none; } a img { border: none; } /* Media Queries */ @media screen and (max-width: 525px) {/* Components */ .c-header__container {padding-top: 20px; padding-bottom: 40px; } .c-header__logo-image {max-width: 120px; height: auto; } /* Utilities */ /*.u-global { font-size: 14px !important; line-height: 24px !important; }*/ .u-w100--xs { width: 100% !important; } .u-table-resp { box-sizing: border-box; width: 100%!important; padding-top: 0!important; padding-bottom: 0 !important; padding-left: 0 !important; padding-right: 0 !important; height: inherit !important; } .u-hidden--xs { display: none !important; } .u-visible--xs { display: inline; } .u-left--xs { text-align: left !important; } .u-right--xs { text-align: right !important; } } </style> </head> <body style="-moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; background: #fff; font-family: Courier,  Courier New, monospace; font-size: 18px; line-height: 30px; margin: 0; padding: 0;"> <table class="c-main" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #fff; border-collapse: collapse;"> <tr> <td align="center" style="border-collapse: collapse;"> <table class="c-header u-w100--xs" cellpadding="0" cellspacing="0" border="0" width="600" style="border-collapse: collapse;"> <tr> <td class="c-header__container" align="left" style="border-collapse: collapse; padding-bottom: 50px; padding-left: 30px; padding-right: 30px; padding-top: 40px;">           <a class="c-header__logo" href="https://opticaferao.com/" target="_blank" style="border: 0; color: #fafafa; text-decoration: none;"><img class="c-header__logo-image" src="https://opticaferao.com/mailing/images/header-logo.png" width="224" height="40" alt="Óptica Ferao" style="border: 0 none; font-style: italic; height: auto; line-height: 100%; max-width: 100%; outline: 0; text-decoration: none; vertical-align: middle;"></a></td> <!-- /.c-header__container--> </tr> </table> <!-- /.c-header--> <table class="c-wrapper u-w100--xs" cellpadding="0" cellspacing="0" border="0" width="600" style="border-collapse: collapse;"> <tr> <td class="c-wrapper__container" align="left" style="border-collapse: collapse; padding-bottom: 45px; padding-left: 30px; padding-right: 30px; padding-top: 0;"> <table cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-collapse: collapse;"> <tr> <td class="c-wrapper__element" style="border-collapse: collapse; padding-bottom: 20px;"> <table cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-collapse: collapse;"> <tr> <td style="border-collapse: collapse;"> <!-- /START: Content --> <table cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-collapse: collapse;">';


  $email_body = '
    <tr>
      <td class="u-title u-blue-01" style="border-collapse: collapse; color: #000000 !important; font-size: 20px; font-weight: 700; line-height: 30px;">Hola '. $form[ 'name' ] .'.<br><br></td>
    </tr>
    <tr>
      <td class="u-global u-dark" style="border-collapse: collapse; color: #001c2e !important; font-family: Arial, monospace !important; font-size: 16px; letter-spacing: 0; line-height: 24px;">Queríamos informarte de que hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo con la mayor brevedad posible.<br><br><strong style="font-weight: 700;">¡Muchas gracias!</strong></td>
    </tr>
  ';


  $email_footer = '</table> <!-- /END: Content--> </td> </tr> </table> </td> </tr> </table> </td> <!-- /.c-wrapper__container--> </tr> </table> <!-- /.c-wrapper--> </td> </tr> </table> <!-- /.c-main--> <table class="c-footer" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #000000; border-collapse: collapse;"> <tr> <td align="center" style="border-collapse: collapse;"> <table class="u-w100--xs" cellpadding="0" cellspacing="0" border="0" align="center" width="600" style="border-collapse: collapse;"> <tr> <td class="c-footer__container" align="center" style="border-collapse: collapse; font-weight: 700; padding-bottom: 40px; padding-left: 30px; padding-right: 30px; padding-top: 40px;"> <table cellpadding="0" cellspacing="0" border="0" align="left" width="100%" style="border-collapse: collapse;"> <tr> <td class="c-footer__legal u-font" align="left" style="border-collapse: collapse; color: #ffffff; font-family: Arial, monospace !important; font-size: 14px; line-height: 30px;"><span>©'. date( 'Y' ) .' Óptica Ferao. Todos los derechos reservados.</span></td> <!-- /.c-footer__legal --> </tr> </table> </td> </tr> <!-- /.c-footer__container --> </table> </td> </tr> </table> <!-- /.c-footer--> </body> </html>';

  $email = $email_header . $email_body . $email_footer;
  return $email;
}
