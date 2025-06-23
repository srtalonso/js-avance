//Selecina todos los elemntos dcon la clese thumb
const thumbs =document.querySelectorAll('.thumb');

//Se realiza un recorrido de los elementyos de los elementos selecionados nos ayudara a encontrarlo
thumbs.forEach(img =>{
    //Se agrega un evento cuano el raton pasa por encima de la imgen 
    img.addEventListener('mouseover' , () =>{
        //Cuando pase el maouse redicimla opacidad al 50% (se vuelve transparente)
        img.style.opacity = '0.5';
    });
        //cuando salga el mosuse ocurrira´esto
        img.addEventListener('mouseout' , () => {
            //Se VUELVO PTRA VEZ LA OPACIDAD AL 100%, SE VUELVE VISIBRE
            img.style.opacity= '1';
        });
});