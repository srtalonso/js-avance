//CALLBACK
// He definido una funcion con dos parametros
// nombre : Nombre de la persona
// callback : Una funcion que se ejecutara despues de saludar
function saludar (nombre, callback){
console.log("Hola " + nombre);
// Permite ejecutar codigo adicional
callback();
}
//Definimos la funcion ddespedirse sin parametros
// esta funcion solo da el mensaje de despedida
function despedirse (){
console.log("Adiós!");

// la funcion despedirse esta como callback, para que se ejecute tras el saludo.
saludar("Daniel",despedirse);

//efinici la funcion leerArchivo y recibe un parámetro callback
function leerArchivo(callback){
    //
    setTimeout(() => {
        console.log("ARCHIVO LEIDO");
        callback();
    },2000 );

}

}
// Llamamos a leerArchivo, pasando por un callback anonimo =>
leerArchivo(()=>{
console.log("Siguiente paso")

});

// SETTIMEOUT Programa una funcion para que se ejecute mas tarde

console.log("Antes");
// programando un setTimeout para que se ejecute 3 segundos mas tarde
setTimeout(()=>{
console.log("Despues de 3 segundos");
}, 3000);

console.log("Despues");//Lllamamos a leerArchivo, pasando por un callback anonimo =
leerArchivo(() => {
    console.log("Siguiente paso");
});


//Programa una funcion para que se ejecute mas tarde
console.log("Antes");

setTimeout(() =>{
    console.log("Despues de 3 segundos");
},3000);

console.log("Despues");


//PROMESAS

//CreAMO UNA PROMEsa y le asignamos a la variable proesa
//El constructor de Promise recibe la funcion con dos parametros
//-resolve: cuando l aoperación es exitosa
//-reject:  cuando  hay un error
let promesa =new Promise((resolve,reject) =>{
    //Simulamos una operación de exito o fracaso segun correponda
    let exito = true;

    setTimeout(() =>{
        //Usamos setTimeout para emular la operacón
        if(exito){
            resolve("Exito!");
        }
        else{
            reject("Error");
        }
    }, 5000);                   //Le damos 5 segundos
});

promesa
    .then((resultado)=>{
        //Este callback redibe como argumento el valor pasado a resolve()
    console.log("Reaultado" + resultado);
    })
    .catch((error) => {
        // Este callback recibe como argumento el valor pasado a reject()
        console.log("Error" + error);
    });