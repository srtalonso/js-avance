//Aqui vamos a importar 
//Esta llam a la contante baseURL
//  import { baseURL } from "./config";
import { baseURL } from "./config.js";



// La palabra clave async antes declaracion de la funcion, convierte a callAPI' en una funcion asincronica.
// En programación, asincronico se refiere a operaciones que no bloquean la ejecucion del resto de programas mientras espera
// a que ocurra algun evento.

//NO BLOQUEA EL HILO PRINCIPAL

export async function callAPI(path, options = {} ) {
    const url = `${baseURL}${path} `;

    //await -> pausa la ejecucion de la duncion asincronica
    //hasta que la promesa devuelta por fetch(url) se resulta ( es decir, cuando tengas los datos del servidor no llamaes ma veces a la API)
    //Esto no bloquea el hilo principal
    try{
        const res = await fetch(url, {
            //header :Especificamos que se enviaran y estamos datos en formato json
            headers: {"Content-Type" : "application/JSON"},
            ...options
        });

         if(!res.ok) throw new Error (`Error ${res.status}`);

        // Volvemos a usar await para esperar que la promesa de res.json() se resuelva, obteniendo un objeto json
        return await res.json();
    }

    catch (err){
        console.log("API Error:" , err);
        throw err;
    }
}
