var listaRegistro =[{nombre:"kenneth",clave:123},{nombre:"bryan",clave:456}];
let usuario="";
let clave="";
let contador =0;

function guardarCuenta(){
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("clave").value;
    listaRegistro.push({nombre:user,clave:password});
    alert("Se ha creado su cuenta");
}

function verificacion(persona){
    if(usuario == persona.nombre&&persona.clave==clave){
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("password", clave);
        document.location.href ="./assets/pages/contacto.html";
    }else{
        contador++;
        if(contador==listaRegistro.length){
            contador=0;
            alert("Usuario o contraseña inválidos");
        }
        
    }
}

function iniciarSesion(){
    usuario = document.getElementById("txtUser").value;
    clave = document.getElementById("txtPassword").value;
    listaRegistro.forEach(verificacion);
}

