//Nombramos variable de las eiquetas segun el nº de variable

const form = document.querySelector('#loginForm');
const email = document.querySelector('#email'); 
const pwd = document.querySelector('#password'); 
const msg= document.querySelector('#loginMsg'); 

//Iniciamos variable Form
//No lleva parentesisi la 'e' pq la funcion cibice un único parámetro 
// Form.addEventListenner('Submit)
form.addEventListener('submit', e => {

        //Evita la recarga automática de l apag al enviar el fom
        e.preventDefault();

        //Obtenemos los datos del form
        const correo = email.value.trim();

        //Obtenemos datos de la contraseña
                //No ponemos 'trim' para no eliminar espacios internos si los hubiera
        const clave =pwd.value;


    //Verificamos los datos
    //Ello lo hacemos con condicional
    //Le pedimos que el correo tenga una @
    if (!correo.includes('@')){
        msg.textContent = 'Introduce un correo válido';
        //Salimos del bucle para no continuar con la validación
        return;

    }
    //Validamos la clave
    //Que el 'pwd' tenga al menos 6 cracteres 
    if(clave.length < 6){
        msg.textContent = 'La contraseña debe tener al menos 6 caracteres';
        //Salimos del bucle para no continuar con la validación 
        return;
    }

    //Pasadas ambas validaciones,mensaje de bienvenida
    msg.textContent =`Bienvenido, ${correo} !!`;
});