//Se obtiene el boton qque alternará el menú, con id="toggleMenu"
const btnToggle =document.querySelector('#toggleMenu');

//Se obtiene el menú de navegadorcon id=
const nav = document.querySelector('#mainNav');

btnToggle.addEventListener('click', () => {
  const abierto = nav.style.display === 'block';
  nav.style.display = abierto ? 'none' : 'block';


//Cambia el texto del boton según el estado actual del menú
btnToggle.textContent = abierto? 'Mostrar Menú: Ocultar Menú';
});
