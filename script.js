const formulario = document.getElementById("formEstudiante");
const tablaEstudiantes = document.getElementById("tablaEstudiantes");

function agregarEstudiante() {

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (nombre === "" || apellido === "") {
        alert("El nombre y el apellido son obligatorios.");
        return;
    }

    if (
        isNaN(nota1) || nota1 < 1 || nota1 > 7 ||
        isNaN(nota2) || nota2 < 1 || nota2 > 7 ||
        isNaN(nota3) || nota3 < 1 || nota3 > 7
    ) {
        alert("Todas las notas deben estar entre 1.0 y 7.0.");
        return;
    }

    const promedio =
        (nota1 * 0.30) +
        (nota2 * 0.40) +
        (nota3 * 0.30);

    const promedioFinal = promedio.toFixed(1);

    let estado;
    let claseEstado;

    if (promedio >= 4.0) {
        estado = "Aprobado";
        claseEstado = "aprobado";
    } else {
        estado = "Reprobado";
        claseEstado = "reprobado";
    }

    const fila = document.createElement("tr");

    const clasePromedio = promedio < 4.0
        ? "promedio-reprobado"
        : "";

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${nota1.toFixed(1)}</td>
        <td>${nota2.toFixed(1)}</td>
        <td>${nota3.toFixed(1)}</td>
        <td class="${clasePromedio}">${promedioFinal}</td>
        <td>
            <span class="${claseEstado}">
                ${estado}
            </span>
        </td>
    `;

    tablaEstudiantes.appendChild(fila);

    formulario.reset();
}