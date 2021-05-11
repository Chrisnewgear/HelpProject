<?php
    //LLAMANDO A LOSCAMPOS
    $nombre=$_POST['nombre'];
    $nombre=$_POST['telefono'];
    $nombre=$_POST['mail'];
    $nombre=$_POST['mensaje'];

    //DATOS PARA EL CORREO
    $destinatario = "a.lescano@help.cl";
    $asunto = "Contacto desde la web";

    $carta = "De: $nombre \n";
    $carta .= "Correo: $mail \n";
    $carta .= "Teléfono: $telefono \n";
    $carta .= "Mensaje: $mensaje";

    //ENVIANDO MENSAJE
    mail($destinatario, $asunto, $carta);
    header('Location:sentms.html')
?>