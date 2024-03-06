<?php
//Connexió a la base de dades
$conexion = new mysqli("localhost", "usuario", "contraseña", "basedatos");

// Obtener la categoría seleccionada (estática para pruebas)
$cat = 1;

//Obtenció de la categoria seleccionada (estàtica per a proves)
$consulta = $conexion->prepare("SELECT * FROM subcategorias WHERE id_categoria = ?");
$consulta->bind_param("i", $cat);
$consulta->execute();
$resultado = $consulta->get_result();

//Array per emmagatzemar les subcategories
$return = array();

// Recorregut dels resultats i afegir-los a l'array
while ($row = $resultado->fetch_assoc()) {
    $object = new stdClass();
    $object->nombre = $row["nombre"];
    $object->id = $row["id"];
    $return[] = $object;
}

//JSON
echo json_encode($return);
?>
