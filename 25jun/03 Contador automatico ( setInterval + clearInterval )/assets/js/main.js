
// variable que contara los segundos
let seg = 0;
// Slecciona el elemento span con id contador
const span = document.getElementById('contador' );

// Inicia un temporizador que se ejecuta cada 1000 ms
const id = setInterval(()=>{
    seg++; // Aumenta el contador en 1
    // Actualiza el contenido del <span> con el nuevo numero
    span. textContent = seg;
}, 1000); // cada segundo

// cuando el usuario hace clic en el boton detener
document
.getElementById('btnDetener' )
// Detiene al contador
. addEventListener('click', () => clearInterval(id));

//setInterval = Es como un bucle temporizado.
// Ejecuta una funcion cada cierto tiempo (1s)
//clearInterval = Detiene el intervalo