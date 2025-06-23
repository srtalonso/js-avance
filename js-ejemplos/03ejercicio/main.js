

//Vamos a crear un funcion que al abrir el navegador nos muestre un mensaje de 'El elemento con id 'p1' no existe'
//cuando borramos del HTML el 'id =p1'
//Esta funcion se ejecutará el sitio cuando la web termine de cargarse
window.onload=() => {
    //Obtienetodos los elementos 'div' 
    const divs =  document.getElementsByClassName("div")
    //Nos devuelve una coleccion del HTML

    //Se comprueba si al menos hay dos elementos 'div'
    if (divs.length >=2){
        //Se accede al segundo 'div'
        const segundoDiv =divs^[1];
        //Dentro del segundo div, se obtienen todolos elementos 'p'
        const listaP = segundoDiv.getElementsByClassName("p");
        //Vamoas a mostrar una alerta con todos los 'p' encontrados
        alert("Numero de parrafos en el 2º >div> en la paguina: " +listaP.length);
    }
    //si no hay al menos dos 'div', nos muestra la alerta siguiente:
    else{
        alert("No hay al menos dos <div> en la pag.</div>");
    }
};