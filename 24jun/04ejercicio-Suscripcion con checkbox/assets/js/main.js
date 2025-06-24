//declarar variables
//relacionamos los 'id' del form a los campos del JS

const subForm = document.querySelector('#subForm');
const sEmail = document.querySelector('#sEmail');
const agree = document.querySelector('#agree');

//Relecionamos los elementos para mostrar errore a cada capo
const errS = document.querySelector('#errSEmail');
const errA = document.querySelector('#errAgree');
const subResult = document.querySelector('#subResult ');


//Se pondra en marcha cuando se envien los parametros
//Para ello añadimos el 'listener' al evento 'submit'

subForm.addEventListener('submit', e =>{
    //
    e.preventDefault();
    //Limpia cualquier mensaje de error previo de email
    errS.textContent = '';
    //Limpia cualquier mensaje de error previo en el checkbox
    errA.textContent='';
    //Limpia cualquier mensaje de error previo de resultado
    subResult.textContent='';


    //Variable que controlará si todo el valido
    let valid=true;
    //Vamoas a usar la validdción nativa del input email
    if(!sEmail.checkValidity()){            //Si el valor no cumple con'type=email' o requiered 'checkValidyty() devuelve false
        errS.textContent ='Email no valido';
        valid = false;
    }
     //Comprobamos si el checkbox se enceuntra marcado
    if(!agree.checked){
        errA.textContent = 'Debes aceptar las condiciones antes de cpntinuar';
        valid = false;
    }
    //Si ambas validaciones pasaron, siguen siendo true, muestra mensaje
    if(valid){
        subResult.textContent ='Gracias por registarte';
    }
});