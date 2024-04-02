document.addEventListener("DOMContentLoaded", function() {
    var seleccionarDistrictes = document.getElementById("districte");
    var seleccionarBarris = document.getElementById("barri");
    seleccionarBarris.disabled = true;

    //Funció per omplir el select dels districtes amb les dades de la BBDD
    function dadesDistrictesDB() {
        fetch("districtes.php")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(valor => {
                let opcion = document.createElement("option");
                opcion.value = valor.name;
                opcion.innerHTML = valor.name;
                seleccionarDistrictes.appendChild(opcion);
            });
        })
        .catch((error) => {console.log(error)});
    }

    //Funció per omplir el select dels barris amb les dades de la BBDD
    function dadesBarrisDB() {
        seleccionarBarris.disabled = false;
        seleccionarBarris.innerHTML = "";

        let formData = new FormData();
        formData.append("id", seleccionarDistrictes.selectedIndex);
        let opcions = {
            method: 'POST',
            body: formData
        }

        fetch("barris.php", opcions)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(valor => {
                let opcion = document.createElement("option");
                opcion.value = valor.name;
                opcion.innerHTML = valor.name;
                seleccionarBarris.appendChild(opcion);
            });
        })
    }

    seleccionarDistrictes.addEventListener("change", dadesBarrisDB);
    
    //Funció per gestionar l'enviament del formulari
    function dadesFormulari(e) {
        e.preventDefault();
    
        //Obtenim els valors dels camps del formulari
        let {
            nomPis,
            distritos,
            barrios,
            vies,
            nomVia,
            numeroVia,
            pis,
            escalera,
            puerta,
            cp,
            precio
        } = {
            nomPis: document.getElementById("nom_pis").value,
            distritos: document.getElementById("districte").options[document.getElementById("districte").selectedIndex].text,
            barrios: document.getElementById("barri").options[document.getElementById("barri").selectedIndex].text,
            vies: document.getElementById("vies").options[document.getElementById("vies").selectedIndex].text,
            nomVia: document.getElementById("nom_via").value,
            numeroVia: document.getElementById("numero_via").value,
            pis: document.getElementById("pis").value,
            escalera: document.getElementById("escala").value,
            puerta: document.getElementById("porta").value,
            cp: document.getElementById("cp").value,
            precio: document.getElementById("preu_pis").value
        };
    
        //Actualizamos el contenido de los elementos de texto a la derecha con la previsualización de los valores del formulario
        document.getElementById("nomPis").innerHTML = `${nomPis}: ${distritos}, ${barrios}`;
        document.getElementById("dir").innerHTML = `${vies} ${nomVia} ${numeroVia} ${pis} ${escalera} ${puerta} · ${cp} · ${distritos} · ${barrios}`;
        document.getElementById("preu").innerHTML = precio;
    }
    //Afegeix un event listener per gestionar l'enviament del formulari
    document.getElementById('form-user-register').addEventListener('submit', dadesFormulari);

    dadesDistrictesDB();
});