function iniciarSesion(){
    let usuario = document.getElementById("txtUser").value;
    let clave = document.getElementById("txtPassword").value;
    if(usuario=="Admin"&&clave=="123"){
        document.location.href ="./assets/pages/contacto.html";
    }else{
        alert("Usuario o contraseña inválidos");
    }
}