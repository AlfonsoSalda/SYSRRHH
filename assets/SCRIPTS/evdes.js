// Asignar el evento de submit al formulario
document.getElementById("evaluacionForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Prevenir la acción predeterminada del formulario
});

// Función para calificar al empleado
function calificarEmpleado() {
    // Obtener valores de todas las preguntas
    const puntualidad = document.getElementById("puntualidad").value;
    const actitud = document.getElementById("actitud").value;
    const cumplimientoTareas = document.getElementById("cumplimientoTareas").value;
    const trabajoEquipo = document.getElementById("trabajoEquipo").value;
    const iniciativa = document.getElementById("iniciativa").value;
    const adaptabilidad = document.getElementById("adaptabilidad").value;
    const comunicacion = document.getElementById("comunicacion").value;
    const productividad = document.getElementById("productividad").value;
    const calidadTrabajo = document.getElementById("calidadTrabajo").value;
    const relacionesInterpersonales = document.getElementById("relacionesInterpersonales").value;

    // Verificar que todos los valores sean números
    if (
        esNumero(puntualidad) && esNumero(actitud) && esNumero(cumplimientoTareas) &&
        esNumero(trabajoEquipo) && esNumero(iniciativa) && esNumero(adaptabilidad) &&
        esNumero(comunicacion) && esNumero(productividad) && esNumero(calidadTrabajo) &&
        esNumero(relacionesInterpersonales)
    ) {
        // Calcular el promedio
        const promedio = (
            parseFloat(puntualidad) + parseFloat(actitud) + parseFloat(cumplimientoTareas) +
            parseFloat(trabajoEquipo) + parseFloat(iniciativa) + parseFloat(adaptabilidad) +
            parseFloat(comunicacion) + parseFloat(productividad) + parseFloat(calidadTrabajo) +
            parseFloat(relacionesInterpersonales)
        ) / 10;

        // Mostrar el mensaje con el promedio
        mostrarMensaje(`El empleado tiene una calificación de: ${promedio.toFixed(2)}`);

        // Redirigir a RRHH.html después de mostrar el mensaje
        setTimeout(() => {
            const confirmacion = confirm("Calificación de empleado entregada.");
            if (confirmacion) {
                window.location.href = "/pages/RRHH.html";
            } else {
                // Otra lógica si no se redirige
            }
        }, 1000);
    } else {
        // Mostrar mensaje de error si algún valor no es un número
        mostrarMensaje("Por favor, ingresa números en todas las preguntas.");
    }
}

// Función para verificar si un valor es un número
function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función para mostrar un mensaje
function mostrarMensaje(mensaje) {
    document.getElementById("mensajeTexto").innerText = mensaje;
    document.getElementById("mensajeCalificacion").style.display = "block";
}
