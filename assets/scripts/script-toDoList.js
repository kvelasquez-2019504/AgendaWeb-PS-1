function irAToDo(){
    document.location.href = "../pages/toDoList.html";
}

function agregarTarea(){
    var tareaNueva= document.getElementById("txtTarea").value;
    var table = document.getElementById("tblTareas");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = tareaNueva;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = '<button>EDITAR</button> <button>ELIMINAR</button>';
    document.getElementById("tblTareas").value = "";
}

function editarTarea(){
    
}