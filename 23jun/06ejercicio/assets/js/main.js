//Se selecciona el elemento <ul> con "id=itemList"

const ul = document.querySelector('#itemList');

//Se añade un evento para que cuando se haga click en el elemento de ul
ul.addEventListener('click', e => {
    //Iniciamso le tag name para nombrar a todos los 'li'
    //Si el elemnto clicado es un li 
    // 'tagName'=> siempre en mayusculas
    if( e.target.tagName === 'li'){
        //Altera la clase selecter en ese 'li'
        //Si la tiene se la quita, si no se la agrega
        e.target.classList.toggle('selected');
    }
});


//Se añade un evento que cuando se realice un doble click en un <li>
ul.addEventListener('dblclick', e => {
    //Iniciamso le tag name para nombrar a todos los 'li'
    //Si el elemnto clicado es un li 
    if (e.target.tagName === 'LI'){
        //Se elimina ese li de la lista
        e.target.remove();
    }
});
