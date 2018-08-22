<?php
    if(isset($_POST['submit'])){
        $to = 'trickbeatsent@gmail.com';
        $subject = 'Feedback from the site';
    } 
    $message = 'Name:'.$_POST['name']."\r\n\r\n";
    $message = 'Email:'.$_POST['email']."\r\n\r\n";
    $message = 'Message:'.$_POST['msg'];

    $email = filter_input(INPUT_POST,'email', FILTER_VALIDATE_EMAIL);
    if ($email){
        $headers .= "\r\nReply-To : $email";
    }

    $headers = "From: trickbeatsent@gmail.com\r\n";
    $headers .= 'Content-Type: text/plain; charset=utf-8';
    $success = mail($to,$subject,$message,$headers, '-ftrickbeatsent@gmail.com');

?>