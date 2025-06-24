//Arrays
const cities = [
    'Madrid', 
    'Avila', 
    'Salamanca', 
    'bcn', 
    'Valladolid',
    'Málaga', 
    'Valencia',
    'Lugo',
    'Sarria',
    'Pozuelo'
];

const search =document.querySelector('#search');
const sugg = document.querySelector('#suggestions');

search.addEventListener('input', () =>{
    //1.Tomamos el valor actual y lo pasamos a misculas
    const term = search.value.toLowerCase();
    //2. Vaciamos las sugerencias previas
    sugg.innerHTML = '';
    //3. Si el temino esta vacio, salimos de la función
    if(!term) return;

    //4. Filtramos lasciudades que emiezen por el termino introducido 
    cities
        .filter(ci =>
        //Convertimos cada ciudad a minusculas y comprobamos el 
        //.startWhith
        ci.toLowerCase().startsWith(term)
    )
    //5.Nos quedamos solo con las 5 coincidencias primeras
    .slice(0, 5)

    //6.Por cada ciudad coincidente
    .forEach(ci => {
        //6.1 Creamos un nuevo 'li'
        const li = document.createElement('li');
        //6.2 Le asignamos el texto de la ciudad
        li.textContent = ci;
        //6.3 Y lo añadimosal 'ul' de las sugerencias
        sugg.appendChild(li);
    });
});

//SELECCION DE UNA SUGRENCIA

//Usamos el 'mousedown' en lugar que click para capturar la selección
//antes del input pierda el foco
    sugg. addEventListener('mousedown', e => {
    // 1. Comprovamos que el elem ento sobre el que se hace el mousedown es un <li>
    if(e.target.tagName === 'LI' ){
    //2. Rellenamos el input con el texto <li> seleccionado
    search.value = e.target.textContent;
    //3. Vaciamos la lista de sugerencias para ocultarla
    sugg. innerHTML = '';
    }
});

