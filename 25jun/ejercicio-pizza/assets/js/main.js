// 1. Callback = “Haz esto cuando termines”
// Imagina que llamas a la pizzería y dices:

// “Quiero una pizza. Cuando esté lista, por favor mándame un mensaje.”

// Eso de “cuando esté lista, haz esto” es un callback. No te quedas esperando
//  sin hacer nada; sigues con tu vida, y cuando la pizza está lista, te avisan.

function pedirPizza(callback) {
  console.log("Pizza pedida...");
  setTimeout(() => {
    console.log("Pizza lista");
    callback(); // te mandan el mensaje
  }, 2000); // 2 segundos después
}

function avisar() {
  console.log("¡Tu pizza ha llegado!");
}

pedirPizza(avisar);

// 2. setTimeout = “Esperar un rato y luego hacer algo”
// setTimeout es como decir:

// “Espera 3 segundos y después muestra un mensaje”.

console.log("Inicio");
setTimeout(() => {
  console.log("Han pasado 3 segundos");
}, 3000);
console.log("Fin");


// 3. Promesa = “Te prometo que te aviso si la pizza está lista o si hay 
// un problema” Una promesa es un contrato:

// “Prometo avisarte cuando tenga una respuesta: si todo sale bien, 
// te digo ‘listo’. Si hay un problema, te aviso también.”
let promesaPizza = new Promise((resolve, reject) => {
  let pizzaLista = true;

  setTimeout(() => {
    if (pizzaLista) {
      resolve("Tu pizza está lista 🍕");
    } else {
      reject("Se quemó la pizza 😢");
    }
  }, 5000);
});

promesaPizza
  .then((mensaje) => {
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Resumen simple:
// Callback → “Haz esto cuando termines” → función que pasas como argumento.

// setTimeout → “Haz esto después de X segundos”.

// Promesa → “Te prometo que haré algo, y te aviso si fue bien o mal”.