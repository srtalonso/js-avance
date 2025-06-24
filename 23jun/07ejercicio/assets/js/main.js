// JavaScript
const form = document.querySelector('#myForm');
const input = document.querySelector('#textInput');
const output = document.querySelector('#output');

form.addEventListener('submit', e => {
  e.preventDefault();                          // Evita recarga
  const texto = input.value.trim();
  if (texto) {
    output.textContent = `Has escrito: ${texto}`;
    input.value = '';                          // Limpia campo
  } else {
    output.textContent = 'Por favor, escribe algo.';
  }
});