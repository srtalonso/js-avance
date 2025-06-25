//JUEGO HELADOS! :)
// 1.Pedir un helado y recibirlo después de 3 segundos (con `setTimeout`)

function pedirHelado(callback) {
  console.log("Helado solicitado...🕛​🕧​🕐​🕜​🕑​🕝​🕒​🕚​🕤​");
  setTimeout(() => {
    console.log("Helado listo");
    callback();                         // te mandan el mensaje de 'helado listo'
  }, 5000);                             // 5 segundos después
}


//2.Pedir un helado y que te llamen cuando esté listo (con `callback`)
function avisar() {
  console.log("¡Tu helado está congelado esperandote!");
}

pedirHelado(avisar);

console.log("Inicio");
setTimeout(() => {
  console.log("Han pasado 4 segundos");
}, 4000);
console.log("Fin");

//3.Pedir un helado y que te prometan que te avisarán si está listo o si hubo un problema
// //(con `promesa`)

let promesaIceCream= new Promise((resolve, reject) => {
  let heladoCongelado = true;

  setTimeout(() => {
    if (heladoCongelado) {
      resolve("Tu helado  está congelado esperandote  ");
    } else {
      reject("Se derritio tu helado, lo sentimos ");
    }
  }, 10000);
});

promesaIceCream
  .then((mensaje) => {
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

