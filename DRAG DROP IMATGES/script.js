document.addEventListener("DOMContentLoaded", function () {
  //Declarar una array buid on aniran tots els fitxers
  let inputFiles = [];

  //Declarar els objects que farem servir
  const dropArea = document.querySelector(".drop-area"); //div
  const dragDropText = document.querySelector("h2");
  const button = document.querySelector("button");
  const input = document.querySelector("#input-file");
  const preview = document.querySelector("#preview");

  // Invalidar l’acció per defecte del drag & drop ('dragover', 'dragleave', 'drop')
  ["dragover", "dragleave", "drop"].forEach((evt) => {
    dropArea.addEventListener(evt, prevDefault);
  });

  function prevDefault(e) {
    e.preventDefault();
  }

  //Dragover = Al arrosseger un fitxer al div es modifica
  dropArea.addEventListener("dragover", function () {
    //Afegim la classe active
    dropArea.classList.add("active");

    //Modifiquem el text quan s'executa l'event
    dragDropText.textContent = "Drop to upload files";
  });

  //En el moment de treure els arxius del div torna al seu estat original
  dropArea.addEventListener("dragleave", function () {
    //Eliminem la classe active
    dropArea.classList.remove("active");

    //Modifiquem per deixar el text original
    dragDropText.textContent = "Drag & Drop files";
  });

  // Acció drop
  dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    //Afegim al array el arxiu arrosegat que (Gracies al dataTransfer podem emmagatzemar-lo al array) 
    inputFiles = inputFiles.concat(Array.from(event.dataTransfer.files));
    showFiles(); //Cridem la funcio showFiles per mostrar els fitxers
  });

  function showFiles() {
    //Si l'array te fitxers
    if (inputFiles.length > 0) {
        //Recorrem l'array amb el seu index
        inputFiles.forEach((file, index) => {
            //A cada iteració cridem la funcio processFile
            processFile(file, index);
        });
    }
}

  function processFile(file, index) {
    //Defenim un array amb les extensions de les imatges
    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];

    //Extensió del fitxer
    const docType = file.type;


    //Si l'extensió del fitxer esta dintre del array d'extensions validExtensions[]
    if (validExtensions.includes(docType)) {
        //Declarem un objecte de la classe FileReader(Ens permet llegir la informació del fitxer)
      let reader = new FileReader();

      reader.onload = function (event) {
        const fileURL = event.target.result;

        //Creem l'element de previsualització
        let previewImage = document.createElement("div");
        previewImage.classList.add("previewImage");
        previewImage.innerHTML = `
          <img src="${fileURL}"/>
          <span>${file.name}</span>
          <span class="material-symbols-outlined removeBtn">c</span>
      `;

        //Agreguem la funcio de removeBtn al span
        previewImage
          .querySelector(".removeBtn")
          //Si fem click s'executara la funció
          .addEventListener("click", function () {
            removeBtn(index);
          });

        //Afegim l'element de previewImage 
      };

      //Llegim el fitxer com a URL
      reader.readAsDataURL(file);
    } else {
      //Si l'arxiu no es una imatge, mostrem aquest missatge
      alert("L'arxiu " + file.name + " no es vàlida.");
      //Eliminem l'arxiu del array
      inputFiles.splice(index, 1);
    }
  }

  function removeBtn(i) {
    //Eliminem el file a la posicio i
    inputFiles.splice(i, 1);
    preview.innerHTML = "";

    //Cridem la funció showFiles() per mostrar els files
    showFiles();
  }
  button.addEventListener("click", function (e) {
    e.preventDefault();
    input.click();
  });

  input.addEventListener("change", function () {
    const selectedFiles = Array.from(input.files);
    inputFiles = inputFiles.concat(selectedFiles);
    preview.innerHTML = "";
    showFiles();
  });
});
