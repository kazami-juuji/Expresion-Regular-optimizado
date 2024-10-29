document.getElementById("convertir").addEventListener("click", () => {
    const expresion = document.getElementById("expresion").value.trim(), comparar = document.getElementById("comparar").value.trim(), resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    !expresion? resultadoDiv.innerText = "Por favor, ingresa una expresión en el primer campo." :false;
    !comparar? resultadoDiv.innerText = "Por favor, ingresa una expresión regular en el segundo campo." : false;
    try {
        const regex = new RegExp(comparar, 'g');
        const coincidencias = expresion.match(regex);
        coincidencias? resultadoDiv.innerHTML = `<p>Se encontraron ${coincidencias.length} coincidencia(s): ${coincidencias.join(", ")}</p>`: resultadoDiv.innerHTML = `<p>No se encontraron coincidencias.</p>`;
    } catch (error) {
        resultadoDiv.innerText = "Error en la expresión regular ingresada.";
    }
});