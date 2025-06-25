//Referencia al textarea
const editor =document.getElementById('editor');
const statusDiv = document.getElementById('status');

//Añadimos la vsriable para lamacenar el identifiador
let timerId;
 //Cada vez que el usuario escriba algo en el textarea
 editor.addEventListener('input' , ()=> {
    //Mostramso en el texto/sistema la escritura 
    statusDiv.textContent = 'Escribiendo ... ...'

    //Si ya habia un temporizdor lo cancelamos
    clearTimeout(timerId);

    //Programamos un nuevo guardado para dentro de dos segundos
    timerId = setTimeout(() => {
        //Aqui iria la llamada real del servidor para guardar contenido
        console.log('Guardado: ' , editor.value);

        //actualizamos el estado aq eu ya hemos guardado el borrador
        statusDiv.textContent = 'Borrador guardado';
    }, 2000);
 });