<?php
$to = "pasha.gorulev@gmail.com";
$tema = "Форма обратной связи";
$message = "Имя: ".$_POST['name']."<br>";
$message .= "Телефон: ".$_POST['tel']."<br>";
$message .= "E-mail: ".$_POST['email']."<br>";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
?>