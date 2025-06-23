

//Vamos a crear un funcion que al abrir el navegador nos muestre un mensaje de 'El elemento con id 'p1' no existe'
//cuando borramos del HTML el 'id =p1'
//Esta funcion se ejecutará el sitio cuando la web termine de cargarse
window.onload=() => {
    //Obtiene referencia al elemento <p>  con 'id= p1'
    const miParrafo =  document.getElementById('p1');
    //Comprobamos si el elemento fe enecontrado
    if (miParrafo !== null){
        //Si existe, muestra el nombre del nodo
        alert("nodeName: "+ miParrafo.nodeName);
        //Muestra el objeto del parrafo
        alert(miParrafo);
    }
    //en caso contrario
    else{
        //Mustra mensaje de error
        alert("El elemento con id 'p1' no existe");
    }
};