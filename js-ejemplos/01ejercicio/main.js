//Esta funcion se ejecutará aito cuando la web termine de cargarse
window.onload=() => {
    //Obtiene referencia al elemento <p>  con 'id= p1'
    const miParrafo =  document.getElementById('p1');
    //2. Muesttr la alaerta el nobre del nodo, en este caso sera p
    alert("nodeName" + miParrafo.nodeName);
    //3. Se muestra en una alerta el objeto del parrafo completo
    alert(miParrafo);
};