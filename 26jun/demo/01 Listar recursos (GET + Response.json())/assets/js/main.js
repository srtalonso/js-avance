// Importa la función generica del callAPI
import { callAPI } from "./api.js";

//Nombramos las variables-Referenciamos
const bntListar = document.getElementById("btn-listar");
const output =document.getElementById("output");

//creamos-iniciamos evento click
bntListar.addEventListener('click', () => {
    //llamamaos  la funcio
    callAPI("/posts")
        //Si la llamada es exitosa recivios los dartos en formato JSON
        .then(data =>{
            //Convertimos el objeto dta a texto legible y lo mostramos en el contenedor
            // output JSON. stringify recibe: (objeto, replacer, espacios de indentacion)
            output.textContent = JSON.stringify(data,null,2);
        })

        //Si ocurre algun error
        .catch(err =>{
            output.textContent = "Error:" + err.message;
        });
});