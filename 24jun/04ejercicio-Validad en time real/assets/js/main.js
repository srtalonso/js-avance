//declar variables
//relacionamos campos del form al JS

const contactForm = document.querySelector('#contactForm');
const cName= document.querySelector('#cName');
const cEmail = document.querySelector('#cEmail');
const cMsg = document.querySelector('#cMsg');

//Relecionamos los elementos para mostrar errore a cada capo
const eName = document.querySelector('#eName');
const eEmail = document.querySelector('#eEmail');
const eMsg = document.querySelector('#eMsg');


//Nombramos funcion para validar
// Funcion generica para validad u campo
//-field es el input o text area validar

function validateField(field, errorEl, validator, msg){
    //Llama a validator con el valor actual del campo
    if(validator(field.value)){
        //Si es valido, añade la clase 'valid'
        field.classList.add('valid');
        //Quitamos la clase 'invalid' por si estaba puerta
        field.classList.remove('invalid');
        //Limpiamos cualquier mensaje de errror previo
        errorEl.textContent = '';
    }

    ////Si no pasa esa validadción
    else{
        //Aádela clase 'invalid'
        field.classList.add('invalid');
        //quita la clase 'valid' por si estaba puesta
        field.classList.remove('valid');
        //muestra el mensaje de error
        errorEl.textContent = msg;    
    }
}


//Añadimos un listenr al evento 'blur' de cName' (cuando pier el foco)
cName.addEventListener('blur', () => {
    validateField(                  //Validad que no haya camos en blanco
        cName,                       //Campo a validad
        eName,                       //Elemnto de error
        v => v.trim() !== '',
        'obligatorio'                //Mensaje si falla
    );
});

cEmail.addEventListener('blur', () =>{
    validateField(                  //Valida formato email
        cEmail,                     //Campo a enviar
        eEmail,                     //Elemento error

        // Expresion regular (regex)
        // \S -> Nos indica cualquier caractger que no es un espacio
        // + -> uno o mas caracteres
        // @ -> el simbolo @
        // \. -> un puntoliteral (.)
        // esto ahor rechaza cadenas (ejem: @dominio)
        // .test -> es el metodo de expresiones regulares q evalua las cadenas (true o false)
        
        v => /\S+@\S+\.\S+/.test(v),   //validator : regex para email
        'Email no valido'
    );
});


cMsg.addEventListener('blur', () => {
    validateField(                                      //Valida que el mensaje tenga al menos 29carateris sin contra espacios
        cMsg,              
        eMsg,
        v => v.trim().length >=20 ,
        'Minimo 20 caracteres'
    );
});