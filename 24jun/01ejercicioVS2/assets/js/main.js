//Nombramos variable de las eiquetas segun el nº de variable
//Selecion de elementos del DOM
const form = document.querySelector('#loginForm');
const email = document.querySelector('#email'); 
const pwd = document.querySelector('#password'); 
const msg= document.querySelector('#loginMsg');
//Todos los input del form 
const inputs= form.querySelector('input'); 
const display= document.querySelector('#timerDisplay'); 


//vARIABLES PARA CONTROLAR EL TEMPORIAZADOR
//Duración total del contador en seg
const TOTAL_SECONDS = 30;
//Segundos restantes
let timeLetf =TOTAL_SECONDS;
let timeoutId,                     //ID q devulve el setTimeout para poder cancelarlo
    intervalId;                         //ID q devulve el setInterval para poder cancelarlo


//3. Funcion q se ejecuta cuando el timpo se agota
function onTimeout(){
    msg.textContent = 'Tiempo agotado. Recarga la página.';
    inputs.forEach(i => i.disabled = true);                  //Desabilitar todos los inputs
    form.querySelector('button').disabled = true;           //Desabilitar el boton de envio
    clearInterval(intervalId);                              //Detener el inteerval q actualiza el contador
}

//4. Funcion q reinicia el countdawn y(interval) como el timeout final
function resetTimers(){
    //
    clearTimeout(timeoutId);                               //Cancela cualqueir timeout pendiente
    clearInterval(intervalId);                              //
    
    timeLetf= TOTAL_SECONDS;                               //Resetea los sec restantes del contador ala duracion total
    display.textContent=timeLetf;                         //Nos muestra el valor inicial en la pantalla


    //Cada sec decremente el contador 
    intervalId=setInterval(() => {
        timeLetf --;                                       //Restaar un sec
        display.textContent =timeLetf;                     //Actualizar text contador
        if(timeLetf <= 0 ){
            clearInterval(intervalId);                      //Detener interval. Evitamos asi los nº negativos
        }
        },1000);                                            //1000MS = 1SEC

        //Programar la funcion onTimeout para q e ejecute tras TOAL
        timeoutId = setTimeout(onTimeout,TOTAL_SECONDS*1000);
}


//5. Al recargar la web, arrancamos el temporizador por 1ª vez

resetTimers();

// 6. Cada vez que ussusario interecatua con cual input se reinicia el contador
inputs.forEach(input => {
    //1. Recorremos todos los inputs
    ['input', 'keydown', 'focus'].forEach(evt =>
        //2. PaR CADA UNO DE LOSs tres nombres de evento
            //-'input' (cuando cambia el valor del campo)
            //- 'keydowN' (Cuando se pulsa una tecla)
            // - 'focus (cuando el campo recibe el foco )

        //3.Añadimos un Lissener para ejecutar el 'resetTimer'
        input.addEventListener(evt, resetTimers)
    );
});

//Iniciamos variable For
//No lleva parentesisi la 'e' pq la funcion cibice un único parámetro 
// Form.addEventListenner('Submit)
form.addEventListener('submit', e => {

        //Evita la recarga automática de l apag al enviar el fom
        e.preventDefault();

        //Obtenemos los datos del form
        const correo = email.value.trim();

        //oBTENMOS VALOR DE LA CONTRASEÑA. 
        //No ponemos 'trim' para no eliminar espacios internos si los hubiera
        const clave =pwd.value;


    //Verificamos los datos
    //Ello lo hacemos con condicional
    //Le pedimos que el correo tenga una @
    if (!correo.includes('@')){
        msg.textContent = 'introduce un correo válido';
        //Salimos del bucle para no continuar con la validación
        return;

    }
    //Validamos la clave
    //Que el pwd tenga al menos 6 cracteres 
    if(clave.length < 6){
        msg.textContent = 'La contraseña debe tener al menos 6 caracteres';
        //Salimos del bucle para no continuar con la validación 
        return;
    }

    //Pasadas ambas validaciones,mensaje de bienvenida
    msg.textContent =`Bienvenido, ${correo} !!`;
});