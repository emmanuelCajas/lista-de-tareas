

const inputTarea = document.querySelector('.inputTarea');
const btnAddTarea = document.querySelector('.btnAddTarea');
const ulListaTarea = document.querySelector('.listaTareas');
//
const empty = document.querySelector('.empty');


const arregloDeTareas = [];
var generadorId = 1
class Tarea {

    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        generadorId++;
    }
}

btnAddTarea.addEventListener("click", (e) => {
    e.preventDefault();
    addTarea();
})

const addTarea = () => {

    let tarea = inputTarea.value;
    let tareaIngresarArreglo = new Tarea(generadorId, tarea);
    arregloDeTareas.push(tareaIngresarArreglo);

    // if (tarea !== '') {
    //     const li = document.createElement('li');

    //     let agregarTarea = arregloDeTareas[arregloDeTareas.length-1];
    //     //console.log(agregarTarea);
    //     li.textContent = agregarTarea.descripcion;
    //     li.id = arregloDeTareas.length-1
    //     ulListaTarea.appendChild(li);
    //     li.appendChild(deleteItem());

    //     empty.style.display = "none";

    //     inputTarea.value = '';
    //     inputTarea.focus();
    // }
    listarTareas();
    console.log(arregloDeTareas)
}

/*
function deleteItem() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btnEliminar';
    deleteBtn.id = arregloDeTareas.length-1;

    deleteBtn.addEventListener('click', (e) => {
        const idBoton = e.target.getAttribute('id');
        const item = e.target.parentElement;
        ulListaTarea.removeChild(item);
        arregloDeTareas.splice(idBoton,1);

        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            empty.style.display = 'block';
        }

        console.log(arregloDeTareas);
    })

    return deleteBtn;

}
*/

function listarTareas(){


const item = document.querySelectorAll('li');
ulListaTarea.remove(item);

   for (let i = 0; i < arregloDeTareas.length; i++) {
    const li = document.createElement('li');
    let agregarTarea = arregloDeTareas[i];
    li.textContent = agregarTarea.descripcion;
    
    ulListaTarea.appendChild(li);
    //li.appendChild(deleteItem());
    li.className = 'liTarea';
   }
} 



