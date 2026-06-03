const respostesCorrectes = {
  q1: "a",
  q2: "b",
  q3: "a",
  q4: "b",
  q5: "c",
  q6: "b",
  q7: "a",
  q8: "c",
  q9: "b",
  q10: "b"
};

document.getElementById("corregir").addEventListener("click", function () {
  let puntuacio = 0;

  for (let pregunta in respostesCorrectes) {
    const respostaSeleccionada = document.querySelector(
      `input[name="${pregunta}"]:checked`
    );

    if (
      respostaSeleccionada &&
      respostaSeleccionada.value === respostesCorrectes[pregunta]
    ) {
      puntuacio++;
    }
  }

let missatge = "";

if (puntuacio === 10) {
  missatge = "Perfecte! Has respost totes les preguntes correctament.";
} else if (puntuacio >= 7) {
  missatge = `Molt bé! Has obtingut ${puntuacio}/10.`;
} else if (puntuacio >= 5) {
  missatge = `Has obtingut ${puntuacio}/10. Repassa alguns conceptes.`;
} else {
  missatge = `Has obtingut ${puntuacio}/10. Et recomano tornar a llegir la teoria.`;
}

document.getElementById("resultat").textContent = missatge; })