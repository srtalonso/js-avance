// CALLBACK
// Quiero una pizza. Cuando este lista, por favor mandame un mensaje

function pedirPizza(callback){
console.log("Pizza pedida ... ");
setTimeout(()=>{
console.log("Pizza lista");
callback();
},2000);

}

function avisar(){
console.log("!tu pizza ha llegado");

}

pedirPizza(avisar);