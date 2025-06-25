//declaramos una variable que contendra al identificador del teporizadro
let temporizador;

//Secionamso el input con el id buscador
document.getElementById('buscador').addEventListener('input', e =>{
        //cada vez que el usuario escribe algocancelamos el temporizador
        clearTimeout(temporizador);     //Limpiame ek temporizdor
        
        //Programamos un nuevo temporizador que tras 5sec sin mas pulsaciones ejecute la funcion de busqueda
        temporizador = setTimeout(() =>{
            // Cuando pasan 500ms sin mas eventos input, actualizamos el div con id log mostrando el texto "Buscando: <valor actual>"
            document.getElementById('log').textContent = 'buscando: ' +e .target.value;
        }, 500);
});