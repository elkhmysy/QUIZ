 let score = 0;
  let totalQuestions = 5;
  let timer;
  let timeLeft = 30;

  function corriger(formId, bonneReponse, resultId) {
    const form = document.getElementById(formId);
    const checked = form.querySelector('input[type="radio"]:checked');
    const result = document.getElementById(resultId);
    if (!checked) {
      result.textContent = "❗ Veuillez choisir une réponse.";
      result.style.color = "orange";
      return;
    }

    if (!form.dataset.checked) {
      form.dataset.checked = "true";
      stopTimer();
      if (checked.value === bonneReponse) {
        result.textContent = "😊 Bravo ! Bonne réponse.";
        result.style.color = "green";
        score++;
      } else {
        result.textContent = "😕 Mauvaise réponse. La bonne réponse est : " + bonneReponse + ".";
        result.style.color = "red";
      }
    }
  }

  function suivant(num) {
    document.getElementById("bloc" + num).style.display = "none";
    document.getElementById("bloc" + (num + 1)).style.display = "block";
    startTimer("timer" + (num + 1));
  }

  function precedent(num) {
    document.getElementById("bloc" + num).style.display = "none";
    document.getElementById("bloc" + (num - 1)).style.display = "block";
    startTimer("timer" + (num - 1));
  }

  function afficherScore() {
    document.getElementById("bloc3").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
    document.getElementById("scoreText").textContent = "Tu as obtenu " + score + " / " + totalQuestions + " bonne(s) réponse(s).";
  }

  function startTimer(timerId) {
    clearInterval(timer);
    timeLeft = 30;
    const el = document.getElementById(timerId);
    el.textContent = "⏳ Temps restant : " + timeLeft + "s";

    timer = setInterval(() => {
      timeLeft--;
      el.textContent = "⏳ Temps restant : " + timeLeft + "s";
      if (timeLeft <= 0) {
        clearInterval(timer);
        el.textContent = "⏰ Temps écoulé !";
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  window.onload = function() {
    startTimer("timer1");
  };
