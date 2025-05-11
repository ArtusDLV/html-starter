const answers = {
    1: 'paris',
    2: '12'
};

const errorCounters = {
    1: 0,
    2: 0
};

function checkAnswer(qNum) {
    const input = document.getElementById(`answer-${qNum}`);
    const feedback = document.getElementById(`feedback-${qNum}`);
    const counter = document.getElementById(`errors-${qNum}`);
    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer === answers[qNum]) {
        feedback.textContent = "Bonne réponse !";
        feedback.className = 'feedback success';
        feedback.style.display = 'block';
        input.disabled = true;
        input.nextElementSibling.disabled = true; // disable button

        // afficher la question suivante si elle existe
        const nextQuestion = document.getElementById(`question-${qNum + 1}`);
        if (nextQuestion) {
            nextQuestion.style.display = 'block';
        }

    } else {
        errorCounters[qNum]++;
        counter.textContent = `Erreurs : ${errorCounters[qNum]}`;
        feedback.textContent = "Mauvaise réponse";
        feedback.className = 'feedback error';
        feedback.style.display = 'block';
    }
}

function afficherImage() {
    const img = document.getElementById("morse-image");
    const bouton = document.getElementById("bouton-image");
  
    img.classList.remove("hidden");  // Affiche l'image
    bouton.style.display = "none";   // Cache le bouton
}  