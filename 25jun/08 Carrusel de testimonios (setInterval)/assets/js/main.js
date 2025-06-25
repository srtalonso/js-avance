//Array contiene los testimonios a mostrar
const testimonials = [
    {text: '¡Servicio excelente!', author: 'Maria'},
    {text: '¡Siempre atentos!', author: 'Paco'},
    {text: '¡Recomendados 100%!', author: 'Jesus'},
    { text: 'No obtuve respuesta del soporte tecnico.', author: 'Laura'},
    { text: 'Muy lenta la carga, poco intuitiva.', author: 'Jorge' },
    { text: 'No cumplio con lo prometido. ', author: 'Sofia' },
    { text: 'Tuve problemas para registrarme.', author: 'Andrés' }

];

//Referencias a los elementos DOM

const block = document.getElementById('testimonial');
const auth = document.getElementById('author');
const btnPause = document.getElementById('pause' );
const btnResume = document.getElementById('resume');

// Muestre el testimonio correspondiente al indice actual,
// luego avanza el indice en bucle ( vuelve a 0 al llegar al final)



let idx = 0; //Indice que señala el testimonio actual en el array
let intervalId = null; // Guardara el Id de setInterval para detenerlo

// Muestre el testimonio correspondiente al indice actual,
// luego avanza el indice en bucle ( vuelve a 0 al llegar al final)

function showTestimonial(){
    const t = testimonials[idx]; // Obteniene el objeto {text, author}
    block.textContent = ` "${t.text}" `; //Mostrar entre comillas
    auth. textContent = `- ${t. author}`; // Mostrar el nombre del author

    //Avanzar el indice al ciclar al inicio y usar módulo
    idx = (idx + 1) % testimonials.length;
}


// Iniciar el carrusel:
//1. Llama inmediatemete a showTestimonial()
//2. Programa showTestimonial() cada 4 segundos.

function startCarousel(){
    showTestimonial(); // Primera llamada inmediata
    intervalId = setInterval(showTestimonial, 4000); // repite cada 4s
}

/*Detener el carrusel*/

function stopCarousel(){
    clearInterval(intervalId);
}

//Asociar los botones

btnPause. addEventListener('click', stopCarousel);
btnResume.addEventListener('click', startCarousel);

// Arrancar el carrusel

startCarousel();