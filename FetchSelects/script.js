//Funció per carregar les categories
function showCategory() {
  //Obtenció de les referències als elements de categoria i subcategoria al DOM
  const categoriaSeleccionada = document.getElementById("categoria");
  const subcategoriaSeleccionada = document.getElementById("subcategoria");

  //Obtenció i visualització de les categories en carregar la pàgina
  fetch(obtenerCategoriasURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en getCats. ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      //Comprovació si data és un array o un objecte directe
      const categorias = Array.isArray(data) ? data : [data];

      //Creació d'opcions de categoria i afegir-les a l'element de categoria
      categorias.forEach((categoria) => {
        const optionCategoria = document.createElement("option");
        optionCategoria.value = categoria.id;
        optionCategoria.text = categoria.nombre;
        categoriaSeleccionada.appendChild(optionCategoria);
      });
      //Desencadenar l'esdeveniment 'change' en la categoria per carregar les subcategories
      categoriaSeleccionada.addEventListener("change", showSubcategories);
      categoriaSeleccionada.dispatchEvent(new Event("change"));
    })
    .catch((error) => {
      console.error("Error en la sol·licitud fetch per getCats:", error);
    });
}

//Funció per carregar les subcategories
function showSubcategories() {
  //Obtenció de les referències als elements de categoria i subcategoria al DOM
  const categoriaSeleccionada = document.getElementById("categoria");
  const subcategoriaSeleccionada = document.getElementById("subcategoria");

  //Creació de dades del formulari per enviar la categoria seleccionada
  let formData = new FormData();
  formData.append("cat", categoriaSeleccionada.value);

  //Configuració de les opcions per la sol·licitud fetch de subcategories
  let opciones = {
    method: "POST",
    body: formData,
  };

  //Obtenció i visualització de les subcategories corresponents a la categoria seleccionada
  fetch(obtenerSubcategoriasURL, opciones)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en getSubCats. ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //Netegem les opcions anteriors de subcategoria
      subcategoriaSeleccionada.innerHTML = "";

      //Creació d'opcions de subcategoria i afegir-les a l'element de subcategoria
      data.forEach((subcategoria) => {
        let optionSubcategoria = document.createElement("option");
        optionSubcategoria.value = subcategoria.id;
        optionSubcategoria.text = subcategoria.nombre;
        subcategoriaSeleccionada.appendChild(optionSubcategoria);
      });
    })
    .catch((error) => {
      console.error("Error en la sol·licitud fetch per getSubCats:", error);
    });
}

mostrarCategorias();
