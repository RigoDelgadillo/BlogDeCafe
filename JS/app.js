// Declaramos Variables
const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputMensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#formulario input[type="submit"]');

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
        console.log('Todos los campos son obligatorios');
        return;
    } else {
        if(validarEmail(inputEmail.value)){
            console.log('Correcto')
        } else {
            console.log('Email No Valido');
        }
    }
}

// Funcion para validar Email
function validarEmail(inputEmail) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(inputEmail);
}

