// Obtenemos el formulario del HTML
const formulario = document.getElementById("formEstudiante");

// Obtenemos el cuerpo de la tabla donde aparecerán los estudiantes
const tablaEstudiantes = document.getElementById("tablaEstudiantes");

// Función que se ejecuta cuando presionamos "Agregar estudiante"
function agregarEstudiante() {

    // Obtenemos el nombre escrito por el usuario
    const nombre = document.getElementById("nombre").value.trim();

    // Obtenemos el apellido escrito por el usuario
    const apellido = document.getElementById("apellido").value.trim();

    // Obtenemos el promedio escrito por el usuario
    const promedio = parseFloat(document.getElementById("promedio").value);

    // Validamos que nombre y apellido no estén vacíos
    if (nombre === "" || apellido === "") {
        alert("El nombre y el apellido son obligatorios.");
        return;
    }

    // Validamos que el promedio sea un número entre 1 y 7
    if (isNaN(promedio) || promedio < 1 || promedio > 7) {
        alert("El promedio debe ser un número entre 1.0 y 7.0.");
        return;
    }

    // Determinamos el estado según el promedio
    let estado;

    if (promedio >= 4.0) {
        estado = "Aprobado";
    } else {
        estado = "Reprobado";
    }

    // Creamos una nueva fila para la tabla
    const fila = document.createElement("tr");

    // Determinamos la clase del estado
    const claseEstado = promedio >= 4.0 ? "aprobado" : "reprobado";

    // Si el promedio es menor a 4, también agregamos una clase para destacarlo
    const clasePromedio = promedio < 4.0 ? "promedio-reprobado" : "";

    // Insertamos los datos dentro de la nueva fila
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td class="${clasePromedio}">${promedio.toFixed(1)}</td>
        <td>
            <span class="${claseEstado}">
                ${estado}
            </span>
        </td>
    `;

    // Agregamos la fila a la tabla
    tablaEstudiantes.appendChild(fila);

    // Limpiamos el formulario después de agregar
    formulario.reset();
}