function perfil(){
    var user = localStorage.getItem("usuario");
    var password = localStorage.getItem("password");
    document.getElementById("user").innerHTML = user;
    document.getElementById("password").innerHTML = password;
}