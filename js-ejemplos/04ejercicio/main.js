

//Vamos a crear un funcion que al abrir el navegador nos muestre los parrafos con styles
//cuando borramos del HTML el 'id =p1'
//Esta funcion se ejecutará el sitio cuando la web termine de cargarse
window.onload=() => {
    //1. Primer div: se busca el elemntp con id intro
    const divIntro =document.getElementById("intro");
    //Si el div con id=intro, le vamos asignar un color morado ( #322d50)
    if(divIntro){
        //llamamaos a los stilos
        divIntro.style.backgroundColor="#322d50";
    }

    //Se accede al siguiente hermano del div, es decir, al segundo <div>
    const segundoDiv = divIntro?.nextElementSibling;

    //2.Acedemos al segun 'div. Si existe le damos color al texto azul
    if(segundoDiv){
        segundoDiv.style.color='blue';
    }

}

  