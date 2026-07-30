const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');


function agregarTarea(){
    if (input.value){
        //crea tarea 
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //texto ingresado por el usuario 

        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //crear y agregar contenedor de iconos 
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        //iconos
        
        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','iconos-eliminar');

        iconos.append(completar,eliminar);

        // agragar tarea a la lista 
         listaDeTarea.appendChild(tareaNueva);
    }else{
        alert('por favor ingresar una tarea.');

    }
}

boton.addEventListener('click',agregarTarea);


