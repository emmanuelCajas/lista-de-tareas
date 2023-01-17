

const inputTarea = document.querySelector('.inputTarea');
const btnAddTarea = document.querySelector('.btnAddTarea');
const ulListaTarea = document.querySelector('.listaTareas');
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

// const tarea1 = new Tarea(generadorId,'ashdhashd');
// const tarea2 = new Tarea(generadorId,'ADFSGDFGH');
// const tarea3 = new Tarea(generadorId,'ashdhasHJKKGHhd');
// const tarea4 = new Tarea(generadorId,'ashdhDRTashd');
// const tarea5 = new Tarea(generadorId,'asSDFDGEhdhashd');
// const tarea6 = new Tarea(generadorId,'ashdhWERTERashd');

// arregloDeTareas.push(tarea1);
// arregloDeTareas.push(tarea2);
// arregloDeTareas.push(tarea3);
// arregloDeTareas.push(tarea4);
// arregloDeTareas.push(tarea5);
// console.log(arregloDeTareas);


btnAddTarea.addEventListener("click", (e) => {
    e.preventDefault();
    addTarea();
})

const addTarea = () => {

    let tarea = inputTarea.value;
    let tareaIngresarArreglo = new Tarea(generadorId, tarea);
    arregloDeTareas.push(tareaIngresarArreglo);

    if (tarea !== '') {
        const li = document.createElement('li');

        let agregarTarea = arregloDeTareas[arregloDeTareas.length-1];
        //console.log(agregarTarea);
        li.textContent = agregarTarea.id+agregarTarea.descripcion;
        ulListaTarea.appendChild(li);
        li.appendChild(deleteItem());

        empty.style.display = "none";

        inputTarea.value = '';
        inputTarea.focus();
    }
    console.log(arregloDeTareas)
}


function deleteItem() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btnEliminar'

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ulListaTarea.removeChild(item);

        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            empty.style.display = 'block';
        }
    })

    return deleteBtn;

}

function getTareaById(id) {

}

