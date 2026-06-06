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
    let answer = window.translations[window.currentLanguage].results;
  let encerts = 0;

  for (let pregunta in respostesCorrectes) {
    let resposta = document.querySelector(
      'input[name="' + pregunta + '"]:checked'
    );

    if (resposta) {
     if (resposta.value == respostesCorrectes[pregunta]) {
        encerts++;
    } else  (!resposta) {
                document.getElementById("resultat").textContent = answer;

      }
    }
  }

  let texts = window.translations[window.currentLanguage].results;
  let missatge = "";

  if (encerts == 10) {
    missatge = texts.perfect;
  } else if (encerts >= 7) {
    missatge = texts.good + " " + encerts + "/10.";
  } else if (encerts >= 5) {
    missatge =
      texts.medium + " " + encerts + "/10. " + texts.mediumEnd;
  } else {
    missatge =
      texts.low + " " + encerts + "/10. " + texts.lowEnd;
  }

  document.getElementById("resultat").textContent = missatge;
}

document.getElementById("res").addEventListener("click", corregirQuiz);