//Seleciona el boton con id 'showBtn y lo guarda en la contante btn
const btn = document.querySelector('#showBtn');

//Seleciona 

//Alñade un listenr que al hacer click, cambia el texto del parrafo
btn.addEventListener('click', () => {
    msg.texContent = 'Hola mundo';

});

//Seleciona el 'div' con la clase 'hover-box' y lo guarda en la constante 'box'
const box = document.querySelector('.hover-box');


//Añade un listener que detecta cuando el ratón entra en el area del 'div'; 
        // lo que hace que cambie el texto para indicar que el raton está encima de ese texto
box.addEventListener('mouseover', () => {
    box.textContent='me estas haciendo cover :)';

});
//Añade un listener que detecta cuando el ratón sale en el area del 'div'; 
box.addEventListener('mouseout', () => {
    //Restable el texto original de div
    box.textContent = ' Pasa el ratón por aqui';
})