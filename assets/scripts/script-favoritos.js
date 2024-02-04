var contacto1 = false;
var contacto2 = false;
var contacto3 = false;
function clickFavoritos(valor, numeroContacto) {
    if (numeroContacto==1) {
        if (contacto1 != true) {
            valor.src = "../resources/img/corazon lleno.png";
            contacto1 = true;
        } else {
            valor.src = "../resources/img/corazon.png";
            contacto1 = false;
        }
    }else if(numeroContacto==2){
        if (contacto2 != true) {
            valor.src = "../resources/img/corazon lleno.png";
            contacto2 = true;
        } else {
            valor.src = "../resources/img/corazon.png";
            contacto2 = false;
        }
    }else if(numeroContacto==3){
        if (contacto3 != true) {
            valor.src = "../resources/img/corazon lleno.png";
            contacto3 = true;
        } else {
            valor.src = "../resources/img/corazon.png";
            contacto3 = false;
        }
    }
}