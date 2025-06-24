const slider = document.querySelector('#volumen');
const valor = document.querySelector('#valor');

slider.addEventListener('input', ()=>{
const v = slider.value;

valor.textContent = v; // Muestra los valores 0 - 100
// Mapeamos el valor 0-100 a escala de gris 0-255
//Para gris: R = G = b= g
//g = 255 (blanco) cuando v = 0
//g = 0 (negro) cuando v = 100
// formula : g = 255 -(v*2.55)
const g = 255 - Math.round(v * 2.55);
document.body.style.backgroundColor =`rgb(${g},${g},${g})`;
});