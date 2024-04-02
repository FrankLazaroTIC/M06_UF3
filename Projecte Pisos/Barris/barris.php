<?php
//Connexió a la base de dades
$serverBD = "localhost"; 
$db_name = "pisos";
$db_user = "root";
$db_pwd = "";

$conn = mysqli_connect($serverBD, $db_user, $db_pwd, $db_name);

//Consulta SQL
if (mysqli_ping($conn)) {
    $id = $_POST["id"];
    $sql = "SELECT * FROM barris WHERE id_districte = $id";

    $query = mysqli_query($conn, $sql);

    $object = new stdClass();

    $return = array();
    while ($row = $query->fetch_assoc()) {
        $object = new stdClass();
        $object->id = $row["id"];
        $object->name = $row["name"];
    
        array_push($return, $object);
    }
    
    echo json_encode($return);

    mysqli_close($conn);
}