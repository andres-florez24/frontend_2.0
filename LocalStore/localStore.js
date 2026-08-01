// variables globales 
let nombrePro = document.getElementById("nombre-pro");
let precioPro = document.getElementById("precio-pro");
let cantidadPro = document.getElementById("cantidad-pro");
let imagenPro = document.getElementById("imagen-pro");
let btnGuardar = document.getElementsByClassName("btn-guardar") [0];
let imagenPrevia = document.querySelector (".imagen-previa");

//agregar evemto al campo de imagen 

imagenPro.addEventListener("change",function(){
    imagenPrevia.src = imagenPro.value;
});

//agregar evento al boton

btnGuardar.addEventListener("click", function(){
 //alert ("todo bien 💚")
    let pro = validForm();
    saveProducto (pro);
    console.log("producto :" , pro)
});

// funcion para validar datos 
function validForm(){
    let producto;
    if (nombrePro.value && precioPro.value && cantidadPro.value){
       // alert("formulario ok 💚 ")
       producto = {
        "nombre": nombrePro.value,
        "precio" : precioPro.value,
        "cantidad":cantidadPro.value,
        "imagen":imagenPro.value,
       }
       // limpiar el formulario
       nombrePro.value = "";
       precioPro.value="";
       cantidadPro.value="";
       imagenPro.value ="";
    }else {
    alert ("falta campos obligatorios🚨 ")
    }
    return producto;
}

// funcion para guardar los datos del formulario en localStore 
function saveProducto ( producto) {

    let productosPrevios = JSON.parse (localStorage.getItem("list-pro")) || [];
    productosPrevios.push(producto);
    localStorage.setItem("list-pro", JSON.stringify(productosPrevios));
    alert ("producto guardado con exito ✔️");
}
