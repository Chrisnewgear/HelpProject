<?php
    //LLAMANDO A LOS CAMPOS
    $nombre=$_POST['nombre'];
    $telefono=$_POST['telefono'];
    $correo=$_POST['correo'];
    $mensaje=$_POST['mensaje'];

    //DATOS PARA EL CORREO
    $destinatario = "christianabrahmsanchez@gmail.com";
    $asunto = "Contacto desde la web";

    $carta = "De: $nombre \n";
    $carta .= "Correo: $correo \n";
    $carta .= "Teléfono: $telefono \n";
    $carta .= "Mensaje: $mensaje";

    //ENVIANDO MENSAJE
    mail($destinatario, $asunto, $carta);
    header('Location:sentms.html')
?>