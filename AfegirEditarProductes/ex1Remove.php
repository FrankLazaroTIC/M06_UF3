<?php

if(isset($_POST["id"]) && !empty($_POST["id"])){
    $servidor = "localhost";
    $base_de_dades = "productesfrank";
    $usuari = "root";
    $contrasenya = "";
    
    //Cnnexió amb la base de dades
    $connexio = new mysqli($servidor, $usuari, $contrasenya, $base_de_dades);
    
    if ($connexio->connect_error) {
        die("Connexió fallida: " . $connexio->connect_error);
    }

    //Consulta SQL per eliminar el producte
    $consulta_sql = "DELETE FROM productes WHERE id=" . $_POST["id"];

    //Executem la consulta 
    if ($connexio->query($consulta_sql) === TRUE) {
        echo json_encode(array("èxit" => true));
    } else {
        echo json_encode(array("èxit" => false, "missatge_error" => "Error en eliminar el producte: " . $connexio->error));
    }

    $connexio->close();
} else {
    echo json_encode(array("èxit" => false, "missatge_error" => "ID de producte no proporcionat"));
}
?>