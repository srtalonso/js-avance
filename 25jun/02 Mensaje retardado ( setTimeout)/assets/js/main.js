//Acede al elemento del DOM con 'id' 'btnMensaje'

document
    .getElementById('btnMensaje')
    .addEventListener('click', () => {
        //Al hacer click cambia el contenido del div con el div de 'retardo
        document.getElementById('retardo').textContent = '... pensando... ... ';

        //Inicia un temposrizador de 2milisegundos
        setTimeout(() =>{
            ///Cuando terminan los 2 sec, cambia el contenido del div
            document.getElementById('retardo').textContent= '¡Ya esta listo!';
        }, 2000);
        });