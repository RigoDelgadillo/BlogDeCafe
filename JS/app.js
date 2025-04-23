// Declaramos Variables
const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputMensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#formulario input[type="submit"]');
const divMensaje = document.querySelector('.mensaje');

// Event Listening
eventListeners();

function eventListeners () {

    formulario.addEventListener('submit', enviandoEmail);
    inputNombre.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

}
// Funciones

// Funcion para envíar formulario
function enviandoEmail(e) {
    e.preventDefault();

    console.log('Enviando Formulario...')
}

// Funcion para validar si hay campos vacíos en el formulario
function validar() {
    if( inputNombre.value.trim() === '' || inputEmail.value.trim() === '' || inputMensaje.value.trim() === '' ){
        mostrarMensaje('Todos los campos son obligatorios');
        return;
    } else {
        if(validarEmail(inputEmail.value)){
            eliminaMensajes(divMensaje)
        } else {
            mostrarMensaje('Email no valido');
        }
    }
}

// Funcion para validar Email
function validarEmail(inputEmail) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(inputEmail);
}

// Mostrar Mensaje en página web
function mostrarMensaje(mensaje) {
    const mensajeHTML = document.createElement('p');
    mensajeHTML.classList.add('error');
    mensajeHTML.textContent = mensaje;
    eliminaMensajes(divMensaje);
    divMensaje.appendChild(mensajeHTML);

    setTimeout((mensaje) => {
        mensajeHTML.remove();
    }, 3000);
}

function eliminaMensajes(divMensaje) {
    if(divMensaje.firstChild) {
        while(divMensaje.firstChild) {
            divMensaje.removeChild(divMensaje.firstChild);
        }
    }
}

