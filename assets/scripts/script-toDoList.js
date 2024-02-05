var fila;
var tarea;
function irAToDo(){
    document.location.href = "../pages/toDoList.html";
}

function agregarTarea(){
    var tareaNueva= document.getElementById("txtTarea").value;
    var tblTareas = document.getElementById("tblTareas");
    var row = tblTareas.insertRow(1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = tareaNueva;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = '<button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editTarea" onclick="editarTarea(this)">EDITAR</button><button class="btn btn-dark" onclick=eliminarTarea(this)>ELIMINAR</button>';
    tareaNueva.innerHTML ="";
}

function editarTarea(tarea){
    fila = tarea.parentNode.parentNode;
    tarea = fila.cells[0].innerHTML;
}

function modificarTarea(){
    var txtEditTarea = document.getElementById("txtEditTarea").value;
    fila.cells[0].innerHTML = txtEditTarea;
}

function eliminarTarea(tarea) {
    var opcion = prompt("¿Está seguro de eliminar?\nY/N");
    console.log(opcion);
    if(opcion.toUpperCase()=="Y"){
        var eliminarFila = tarea.parentNode.parentNode;
        eliminarFila.parentNode.removeChild(eliminarFila);
    }
}