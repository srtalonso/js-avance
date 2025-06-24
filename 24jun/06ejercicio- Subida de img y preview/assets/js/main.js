const imgInput = document.querySelector('#imgInput');
const preview = document.querySelector('#preview');
const errorMsg = document.querySelector('#errorMsg');

// Cuando el usuario selecciona un archivo
imgInput.addEventListener('change', () =>{
    // Limpiar la previsualizacion y mensaje previo
    preview.style.display = 'none';
    preview.src            = '';
    errorMsg.style.display = 'none';
    errorMsg.textContent   = '';

    // Tomamos el primer archivo (si no hay, salimos)
    const file = imgInput.files[0];
    if (!file) return;

    // VALIDACION MIME : Comprobamos que sea imagen I
    // El Mime type (o media type) es una cadena que identifica el formato y la nat
    //image/jpg video/mp4 text/plain application/json

    if(!file.type.startsWith('image/')){
        //Mostramos error y n o seguimos
        errorMsg.textContent= 'Error, por favor, seleciona u archivo de imagen';
        errorMsg.style.display='block';
        return;
    }

    //Si la img es correcta, creamos un FileReder par leerla
    const reader   = new FileReader();
    reader.onload = () => {
        //Al terminar la lectura, asignamos laurl al img
        preview.src = reader.result;
        //Mostramos la iagen
        preview.style.display='block';
    };
    
    //Iniciamos la lectura de la img como DataURL
    reader.readAsDataURL(file);
});
