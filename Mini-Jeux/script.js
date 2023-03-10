const cards = document.querySelectorAll('.memory-card');


// Sélectionne toutes les cartes dans le document et les stocke dans une constante "cards"

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;

// Initialise des variables pour suivre l'état du jeu (retournement de cartes, verrouillage du plateau, première et deuxième carte sélectionnées)

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  // Empêche le joueur de cliquer sur une carte s'il y a déjà deux cartes retournées ou s'il clique sur la même carte deux fois

  this.classList.add('flip');

  // Ajoute la classe "flip" à la carte cliquée pour la retourner

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

// Fonction qui gère le retournement des cartes et la vérification si elles correspondent ou non

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

// Vérifie si les deux cartes sélectionnées correspondent, si oui, elles sont désactivées, sinon elles sont retournées

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  
    score++;
    scoreDisplay.textContent = score;
  
    resetBoard();
}

// Réinitialise les variables de suivi de l'état du jeu

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

// Retourne les deux cartes sélectionnées face cachée après un délai de 1,5 seconde et réinitialise les variables de suivi de l'état du jeu

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Réinitialise les variables de suivi de l'état du jeu

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

// Mélange les cartes en changeant l'ordre de leur affichage

cards.forEach(card => card.addEventListener('click', flipCard));

const newGameBtn = document.getElementById('new-game');

newGameBtn.addEventListener('click', function() {
  cards.forEach(card => card.classList.remove('flip'));
  resetBoard();
  shuffle();
});

const scoreDisplay = document.getElementById('score');
scoreDisplay.textContent = score;





