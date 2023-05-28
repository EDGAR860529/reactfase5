document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener respuestas seleccionadas
    let responses = [];
    let selectedOptions = document.querySelectorAll("input[type='radio']:checked");
    for (let i = 0; i < selectedOptions.length; i++) {
      responses.push(selectedOptions[i].value);
    }
    
    // Calcular puntaje
    let score = 0;
    let correctAnswers = ["a", "c", "b", "d", "c"];
    for (let j = 0; j < correctAnswers.length; j++) {
      if (responses[j] === correctAnswers[j]) {
        score++;
      }
    }
    
    // Mostrar resultados
    let resultMessage = "Tu puntaje es: " + score + " de 5 respuestas correctas.";
    alert(resultMessage);
    
    // Redirigir a la página de resultados
    window.location.href = "resultado.html?score=" + score;
  });
  