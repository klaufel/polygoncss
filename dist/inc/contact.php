<?php

require_once('PHPMailer-master/PHPMailerAutoload.php');
require_once('form-contact-template.php');


  $contact_name = $_POST['NAME'];
  $contact_email = $_POST['EMAIL'];
  $contact_message = $_POST['MESSAGE'];

  date_default_timezone_set('Europe/Madrid');
  $date = date("Y-m-d H:i:s");

  $form = array(
    'name' => $contact_name,
    'email' => $contact_email,
    'message' => $contact_message,
    'date' => $date
  );


  $mail = new PHPMailer();
  $mail_client = new PHPMailer();
  
  $mail->From = "no-reply@opticaferao.com";
  $mail_client->From = "no-reply@opticaferao.com";
  
  $mail->FromName = "Óptica Ferao";
  $mail_client->FromName = "Óptica Ferao";
  
  $mail->Subject = "Óptica Ferao / Formulario de contacto (".$contact_name." <".$date.">)";
  $mail_client->Subject = "Hola ".$contact_name.". Hemos recibido tu mensaje.";
  
  $mail->Body = get_email_owner_template($form);
  $mail_client->Body = get_email_client_template($form);
  
  // Mail admin
  $mail->AddAddress( "juancarlos@droolstudio.com", "Óptica Ferao" );
  
  // Mail client
  $mail_client->AddAddress( $contact_email, $contact_name );   
  
  $mail->CharSet = "UTF-8";
  $mail_client->CharSet = "UTF-8";

  $mail->isHTML(true);
  $mail_client->isHTML(true); 
  
  if( ( $mail->send() ) && ( $mail_client->send() ) ) {
    ?>
    <p class="c-form__result__text">Gracias por contactar con nosotros.</p>
    <?php
  } else {
    ?>
    <p class="c-form__result__text c-form__result__text--error">Ha ocurrido un error al enviar tu mensaje.</p>
    <?php
  }


?>

