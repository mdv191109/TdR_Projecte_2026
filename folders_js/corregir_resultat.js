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

function corregirQuiz() {
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

  const texts = window.translations[window.currentLanguage].results;

  let missatge = "";

  if (puntuacio === 10) {
    missatge = texts.perfect;
  } else if (puntuacio >= 7) {
    missatge = `${texts.good} ${puntuacio}/10.`;
  } else if (puntuacio >= 5) {
    missatge = `${texts.medium} ${puntuacio}/10. ${texts.mediumEnd}`;
  } else {
    missatge = `${texts.low} ${puntuacio}/10. ${texts.lowEnd}`;
  }

  document.getElementById("resultat").textContent = missatge;
}

document
  .getElementById("res")
  .addEventListener("click", corregirQuiz);
