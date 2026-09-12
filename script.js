const formulario = document.getElementById("formEstudiante");
const tablaEstudiantes = document.getElementById("tablaEstudiantes");

function agregarEstudiante() {

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const asistencia = parseFloat(
        document.getElementById("asistencia").value
    );

    // Validar nombre y apellido
    if (nombre === "" || apellido === "") {
        alert("El nombre y el apellido son obligatorios.");
        return;
    }

    // Validar notas
    if (
        isNaN(nota1) || nota1 < 1 || nota1 > 7 ||
        isNaN(nota2) || nota2 < 1 || nota2 > 7 ||
        isNaN(nota3) || nota3 < 1 || nota3 > 7
    ) {
        alert("Todas las notas deben estar entre 1.0 y 7.0.");
        return;
    }

    // Validar asistencia
    if (
        isNaN(asistencia) ||
        asistencia < 0 ||
        asistencia > 100
    ) {
        alert("La asistencia debe estar entre 0% y 100%.");
        return;
    }

    // Calcular promedio ponderado
    const promedio =
        (nota1 * 0.30) +
        (nota2 * 0.40) +
        (nota3 * 0.30);

    const promedioFinal = promedio.toFixed(1);

    let estado;
    let claseEstado;

    // Menos de 60% de asistencia
    if (asistencia < 60) {

        estado = "Reprobado por inasistencia";
        claseEstado = "reprobado-asistencia";

    // Desde 60% hasta menos de 70%
    } else if (asistencia < 70) {

        if (promedio >= 5.0) {
            estado = "Aprobado";
            claseEstado = "aprobado";
        } else {
            estado = "Reprobado";
            claseEstado = "reprobado";
        }

    // 70% o más
    } else {

        if (promedio >= 4.0) {
            estado = "Aprobado";
            claseEstado = "aprobado";
        } else {
            estado = "Reprobado";
            claseEstado = "reprobado";
        }
    }

    const fila = document.createElement("tr");

    const clasePromedio =
        promedio < 4.0
            ? "promedio-reprobado"
            : "";

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${nota1.toFixed(1)}</td>
        <td>${nota2.toFixed(1)}</td>
        <td>${nota3.toFixed(1)}</td>
        <td class="${clasePromedio}">
            ${promedioFinal}
        </td>
        <td>${asistencia.toFixed(1)}%</td>
        <td>
            <span class="${claseEstado}">
                ${estado}
            </span>
        </td>
    `;

    tablaEstudiantes.appendChild(fila);

    formulario.reset();
}