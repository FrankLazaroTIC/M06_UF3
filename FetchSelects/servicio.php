<?php
header('Content-Type: application/json');

//Configuració de les credencials de connexió a la base de dades
$servername = "localhost";
$dbname = "tablafrank";
$username = "root";
$password = "";

try {
    //Establiment de la connexió amb la base de dades
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Obtenció de la categoria enviada a través de la sol·licitud POST
    $cat = isset($_POST['cat']) ? $_POST['cat'] : '';

    try {
        //Preparació de la consulta SQL per obtenir les subcategories de la categoria especificada
        $stmt = $conn->prepare("SELECT * FROM subcategorias WHERE id_categoria = :cat");
        $stmt->bindParam(':cat', $cat);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $return = array();

        //Creació d'un array d'objectes amb les subcategories obtingudes de la consulta
        foreach ($result as $row) {
            $object = new stdClass();
            $object->nombre = $row["nombre"];
            $object->id = $row["id"];
            $return[] = $object;
        }

        //Codificació de l'array d'objectes a format JSON i retorn al client
        echo json_encode($return);
    } catch (PDOException $e) {
        //En cas d'error durant l'execució de la consulta, es retorna un missatge d'error JSON
        echo json_encode(array('error' => 'Error en la consulta: ' . $e->getMessage()));
    }
} catch (PDOException $e) {
    //En cas d'error durant l'establiment de la connexió, es retorna un missatge d'error JSON
    echo json_encode(array('error' => 'Error en la connexió: ' . $e->getMessage()));
} finally {
    //Tancament de la connexió amb la base de dades
    $conn = null;
}
?>