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

function agrandirImage(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src;
    lightbox.classList.remove("hidden");
}

function fermerLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("hidden");
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let decalage = 0;

function genererTable() {
  const tbody = document.getElementById('cesar-body');
  tbody.innerHTML = '';
  for (let i = 0; i < 26; i++) {
    const lettreClair = alphabet[i];
    const lettreCodee = alphabet[(i + decalage + 26) % 26];
    const row = `<tr><td>${lettreClair}</td><td>${lettreCodee}</td></tr>`;
    tbody.innerHTML += row;
  }
}

function decaler(direction) {
  decalage = (decalage + direction + 26) % 26;
  genererTable();
}

function toggleContainer() {
    const container = document.querySelector('.container');
    const button = document.getElementById('toggle-button');
    
    // Toggle le style d'affichage
    if (container.style.display === 'none') {
      container.style.display = 'block';
      button.textContent = 'Masquer l\'aide au décalage';
    } else {
      container.style.display = 'none';
      button.textContent = 'Aide au décalage';
    }
  }

  function toggleContainerCode() {
    const container = document.querySelector('.containerCodes');
    const button = document.getElementById('toggle-button-codes');
    
    // Toggle le style d'affichage
    if (container.style.display === 'none') {
      container.style.display = 'block';
      button.textContent = 'Masquer les codes utiles';
    } else {
      container.style.display = 'none';
      button.textContent = 'Codes utiles';
    }
  }


window.onload = genererTable;
