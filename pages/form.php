<?php

$nombre=$_post['name'];
$mail=$_post['email'];
$lastname=$_post['last-name'];
$mensaje=$_post['comments'];

$para= 'gianmollo03@gmail.com';
$asunto= 'Este mail proviene del formulario de soporte';
mail(
    $para,$asunto,utf8_decode($nombre,$lastname,$mensaje)
)
;
header('location:exito.html');











?>