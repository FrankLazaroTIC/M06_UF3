document.addEventListener("DOMContentLoaded", function() {
    //Declarar una array buida on aniran tots els fitxers
    let files = [];

    //Declarar els objects que farem servir
    const dropArea = document.querySelector('.drop-area'); //div
    const dragDropText = document.querySelector('h2');
    const button = document.querySelector('button');
    const input = document.querySelector('#input-file');
    const preview = document.querySelector('#preview');

    //Invalidar l’acció per defecte del drag & drop ('dragover', 'dragleave', 'drop')
    ['dragover', 'dragleave', 'drop'].forEach(evt => {
        dropArea.addEventListener(evt, prevDefault);
    });

    function prevDefault(e) {
        e.preventDefault();
    }

    //Dragover = Al arroseger un fitxer al div es modifica
    dropArea.addEventListener("dragover", function(){
        //Afegim la classe active
        dropArea.classList.add('active');
        
        //Modifiquem el text quan s'executa l'event
        dragDropText.textContent = "Drop to upload files";
    });

    //En el moment de treure els arxius del div torna al seu estat original
    dropArea.addEventListener("dragleave", function(){
        //Eliminem la classe active
        dropArea.classList.remove('active');
        
        //Modifiquem per deixar el text original
        dragDropText.textContent = "Drag & Drop files";
    });

    //Acció drop
    dropArea.addEventListener("drop", (event)=>{
        files = files.concat(Array.from(event.dataTransfer.files));
    });
    
    function showFiles(){
        
    }
    
});
