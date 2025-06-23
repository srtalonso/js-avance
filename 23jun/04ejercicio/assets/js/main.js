/** @type {HTMLAllCollection} */
const images = document.querySelectorAll('.image');


//SE SELECIONA TODOS LOS ELEPEMNTOS DEL 'span' que estén dentro de <p> 
//Aqui nombramos a la variable 'spans' 
const spans =document.querySelectorAll('p span');           //Incluimos los span que estén dentro de los parrafos

//recorer los span que se enceuntren dentro de los p
spans.forEach(span =>{
    //Mientras hace el recorrido inicamos evento click en cada span recorrido
    span.addEventListener('click', ()=> {
        //Nos indicara los estilos de ese span( tamaño fuente y rtio de fuente )
        const estilo = window.getComputedStyle(span);
        //se extrae el valor del tamaño de la letra
        const size = parseFloat(estilo.fontSize);
        //Incrementamos el tamaño en 2 px y se alica al elemento
        span.style.fontSize =(size + 2) + 'px';
    });
});