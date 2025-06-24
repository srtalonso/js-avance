// Declaramos constantes
//relacionamos campos del form al JS

const form = document.querySelector('#regForm');
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pwd = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwd2');
const result = document.querySelector('#result');

//Relecionamos los elementos para mostrra errore a cada capo
const errUser = document.querySelector('#errUser');
const errEmail = document.querySelector('#errEmail');
const errPwd = document.querySelector('#errPwd');
const errPwd2 = document.querySelector('#errPwd2');

//Añadimos un 'lissener' al elemento 'form'
form.addEventListener('submit', e =>{
    e.preventDefault();                     //Evitamos q el form se recargue al rellenar

    //1. Limpiar mensajes de error parq ue pueda volver a relenar
    [errUser, errEmail, errPwd, errPwd2].forEach(el => el.textContent ='');                  //Recorre las variables, or eso no van separadas entre corcheches 
    //Dejamos limpio el resultado
    result.textContent = '';

    //Variable ok
    //Dmaos un bollean: nos indicara si todos los campos psan la verificaión/comprobacion
    let ok = true;

    //Le decimos si el 'user' es menor de 3 caractres, sin contar espacios en blanco al inicio y al final
    if (user.value.trim().length < 3 ){
        errUser.textContent = 'minimo 3 caracteres.';
        ok = false;
    }

    //Validacion de email usando la validación nativa del HTML5
    if (!email.checkValidity()){
        errEmail.textContent = 'Email no valido, verifica ';
        ok = false;
    }

    if (pwd.value.length < 8 ){
        errPwd.textContent = 'minimo 8 caracteres.';
        ok = false;
    }

     //Validación (pwd2)
    if (pwd2.value !== pwd.value) {
        errPwd2.textContent = 'Las contraseñas no coinciden.';
        ok = false;
    }

    // Si todo está OK
    if (ok) {
        result.textContent = '¡Formulario válido!';
    }
});