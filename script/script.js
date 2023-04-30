let bandera = 0;
let mg = 200;

const botonOriginal = document.getElementById('seguir');
const contenedor = botonOriginal.parentNode;

const botonOriginal2 = document.getElementById('MeGusta');
const contenedor2 = botonOriginal2.parentNode;

var messageBox = document.getElementById('messageBox');

function mostrarFormulario() {
    var formulario = document.getElementById("form");
    formulario.style.display = "block";
}

function cerrarFormulario() {
    var formulario2 = document.getElementById("formularioInicioSesion2");
    var datosFormulario2 = new FormData(formulario2);
    
    if (datosFormulario2.get("usuario") === "nicolas" && datosFormulario2.get("contrasena") === "123456789"){
        agregarBoton();
        var formulario = document.getElementById("form");
        formulario.style.display = "none";
        bandera = 1;
    }
    else{
        alert("Usuario/Contraseña incorrecto! \nPrueba con 'nicolas' y '123456789'.");
    }
}

function agregarBoton() {
    const contenedorBoton = document.getElementById("botonIniciarSesion").parentNode;
    contenedorBoton.removeChild(document.getElementById("botonIniciarSesion"));
    const nuevoBoton = document.createElement("button");
    nuevoBoton.innerHTML = "Bienvenido!";
    nuevoBoton.classList.add("usuario");
    contenedorBoton.appendChild(nuevoBoton);
  }

function crearBotonNuevo() {
    if (bandera === 0){
        messageBox.style.display = "block";
        setTimeout();
    }else{
        const botonNuevo = document.createElement('button');
        botonNuevo.textContent = 'Dejar de seguir';
        botonNuevo.classList.add('mDejarSeguir');
        botonNuevo.addEventListener('click', () => {
            contenedor.replaceChild(botonOriginal, botonNuevo);
        }); 
        contenedor.replaceChild(botonNuevo, botonOriginal);
    }
}

botonOriginal.addEventListener('click', crearBotonNuevo);

function meGusta(){
    if (bandera === 0){
        messageBox.style.display = "block";
        setTimeout();
    }else{
        const botonNuevo4 = document.createElement('button4');
        botonNuevo4.textContent = 'No me gusta';
        botonNuevo4.classList.add('mNoMeGusta');
        mg++;
        refrescar();
        botonNuevo4.addEventListener('click', () => {
            contenedor2.replaceChild(botonOriginal2, botonNuevo4);
            mg--;
            refrescar();
        }); 
        contenedor2.replaceChild(botonNuevo4, botonOriginal2);
    }
}

botonOriginal2.addEventListener('click', meGusta);

function refrescar(){
    const contMG = document.getElementById('contMG');
    contMG.textContent = mg + "Likes";
}

document.addEventListener('DOMContentLoaded', function(){
    const contMG = document.getElementById('contMG');
    contMG.textContent = mg + "Likes";;
});



function comentar() {
    if (bandera === 0){
        messageBox.style.display = "block";
        setTimeout();
    }else{
    // Obtener el nombre y comentario ingresados por el usuario
    var name = document.getElementById("usuario").value;
    var comment = document.getElementById("comment").value;
    
    // Crear un nuevo elemento para el comentario
    var commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    
    var nameDiv = document.createElement("div");
    nameDiv.classList.add("comment-name");
    nameDiv.innerHTML = name + ":";
    
    var commentDiv2 = document.createElement("div");
    commentDiv2.classList.add("comment-text");
    commentDiv2.innerHTML = comment;
    
    var deleteDiv = document.createElement("div");
    deleteDiv.classList.add("delete-btn");
    
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Eliminar";
    deleteBtn.onclick = function() {
      commentDiv.remove();
    }
    
    deleteDiv.appendChild(deleteBtn);
    
    commentDiv.appendChild(nameDiv);
    commentDiv.appendChild(commentDiv2);
    commentDiv.appendChild(deleteDiv);
    
    // Agregar el nuevo comentario a la sección de comentarios
    var commentSection = document.getElementById("comment-section");
    commentSection.appendChild(commentDiv);
    
    // Limpiar los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }
}

setTimeout(function() {
    messageBox.style.display = "none";
  }, 3000);