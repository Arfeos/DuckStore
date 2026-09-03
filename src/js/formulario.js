// Carga del documento
document.addEventListener('DOMContentLoaded', () => {

    function validarFormulario() {
        let nombre = document.forms["formulario"]['nombre'].value;
        if (nombre == "") {
            alert("Por favor, ingresa tu nombre.");
            return false;
        }
        let email = document.forms["formulario"]['email'].value;
        if (email == "") {
            alert("Por favor, ingresa tu email.");
            return false;
        }
        let mensaje = document.forms["formulario"]['mensaje'].value;
        if (mensaje == "") {
            alert("Por favor, ingresa un mensaje.");
            return false;
        }
        return true;
    }
//Validar el formulario al enviar
formulario.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault();
            return;
        }
//Mensaje al enviar el formulario
        console.log('Datos listos para enviar');
        alert('¡Mensaje enviado con éxito!');
        formulario.reset();
    });
});