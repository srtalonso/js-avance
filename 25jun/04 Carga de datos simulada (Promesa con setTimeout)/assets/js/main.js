/// Funcion que devuelve una Promesa para simular una carga de datos

function simularCarga(){
    return new Promise((resolve, reject) => {
    // Simular un retraso de 1.5 seg
        setTimeout (() => {
        //Math.random = |1-0|
        //console.log(Math.random()); // 0.823476291 ... (primer "aleator
        //console.log(Math.random()); // 0.432918273 ...  (otro distinto)
        //console.log(Math.random()); // .019283746 ...  (y así sucesivam
        const ok = Math.random() > 0.3; // 70% de probabilidad de éxito
        
        //Si ok' es true, se revuelve la promesa
        ok  
            ? resolve({usuario:'Juan', edad:28})
            //Si ok es fase, se rclaz la promesa con mensaje de error
            : reject('Error en la carga');
        },1500);

    });

}

//console.log(Math.random());//


//Agregar un evento al boton con id  'btnCargar'
document
    .getElementById('btnCargar')
    .addEventListener('click', () => {
        //Al hacer click m uestra el mensaje cargando
        document.getElementById('datos').textContent = 'Cargando... ... ...';

        //Llama ala functiojn que devuevle la promesa
        simularCarga()
            //Si la promesa se resuelva, (exito)
            .then(info =>{
                document.getElementById('datos').textContent = `Usuario: ${info.usuario}\ nEdad :${info.edad}`;
            })

            //Si la promesa falla (error)
            .catch(err => {
                document.getElementById('datos').textContent = err;
            });
    });