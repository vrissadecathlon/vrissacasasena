<?php

 $destino= "tatan.rodriguez.399@gmail.com";
 $nombre= $_POST["nombre"];
 $email= $_POST["email"];
 $telefono= $_POST["telefono"];
 $mensaje= $_POST["mensaje"];

 $contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;

 mail($destino,"Contacto", utf8_decode($contenido));

    header("location:contacto.html");
?>