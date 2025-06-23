//Referenciar  el 'id=countBtn'
const btnContar = document.querySelector('#countBtn');

//Obtener la referencia del span  'id=count' para mostrar el contador
const spanCount = document.querySelector('#count');

//Se inicializa una varianle llamda 'contador' con valor 0
let contador = 0;

//Se inicializa el evento listener click, para que comience a conatr cuando el usuario haga clic se ejecute la función
btnContar.addEventListener('click', () => {
    //contador =contador +1
    contador += 1;
    //Se acatualiza el contenido de 'span con  el nuevo valor del contador (añade el numero anterior')
spanCount.textContent = coun
});


