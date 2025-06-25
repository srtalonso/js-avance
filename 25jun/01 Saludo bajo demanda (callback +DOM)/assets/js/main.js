// Funcion que recibe un nombre y un callback
function saludar(nombre, cb){
// Se construye un mensaje de saludo con el nombre
const mensaje = `!Hola!, ${nombre}!`;
// Se ejecuta la funcion callback, pasandole el mensaje
cb(mensaje);
}
// Se accede al boton id (btnSaludo)
document
.getElementById('btnSaludo')
.addEventListener('click', () => {
// Cuando se hace clic, se llama a la funcion 'saludar'
// con el nombre 'Ana y una funcion anonima como callback
// Esta funcion (msg) => {document.getElementById('salida')}
// function(msg){document.getElementById('salida'}
// Ambas hacen lo mismo, solo que la version con =>
// es mas moderna y compacta
saludar('Ana', msg => {
document.getElementById('salida' ) .textContent = msg;

I

});

});