//1 Obtener las referencias de los elementos a interactuar
 
let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")
 
// Registrar el Evento
 
post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)

//Prevenimos que el boton post haga su metodo default de recargar la pagina (por estar dentro de un formulario) y que mejor haga lo siguiente.
function TodoPost(e) {
e.preventDefault()

let todo = document.getElementById("todoText").value //Agarra el texto del cuadro de texto
let list = document.getElementById("todoList") //Obtenemos la referencia de la lista donde queremos escribir los todos.

//Creamos el div que contendra el input (checkbox) y el texto que agarramos previamente para ponerlo dentro de una label que ira al lado del checkbox.
let div = document.createElement("div")
let input = document.createElement("input") //Creamos el input.
let label = document.createElement("label") //Creamos la etiqueta.

//Creacion del checkbox
input.type = "checkbox"
input.name = "todo"
 
label.textContent = todo //Asignamos el texto de la caja como el texto de la etiqueta.

//Ponemos tanto el input como la label dentro del div.
div.appendChild(input)
div.appendChild(label)

//Agreguemos al div (que contiene al input/checkbox y la label) dentro de la lista.
list.append(div)
 
} //Cerramos la funcion/metodo que se le fue asignado al boton post.
 
function TodoClear(){
 
    let todos = document.getElementsByName("todo") //Obtenemos una coleccion/arreglo de todos los elementos que tienen el nombre de todo (o en otros terminos todos los inputs/checkboxes creados).
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = false //Ponemos su estado de checked como en false para que se les quite la palomita.
    }
 
}

//Lo mismo con el anterior pereo con el checked en true para ponerles a todos los checkboxes su palomita.
function TodoMark() {
 
    let todos = document.getElementsByName("todo")
    for(let i = 0; i< todos.length; i++){
        todos[i].checked = true
    }
 
}
 
function TodoDel() {
 
    let todos = document.getElementsByName("todo")
 
    for(let i = 0; i< todos.length; i++){
  
    if (todos[i].checked){
        todos[i].parentElement.remove() //Funcion que luego puede generar un bug esto causa que luego al eliminarlos, no se eliminen de golpe todos losque etsan en checked.
        //Tiene que ver con el todos.length que guarda pero no es necesario arreglarlo para este ejemplo basico.
    }
 
    }
 
}