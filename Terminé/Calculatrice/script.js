const touches = [...document.querySelectorAll(".bouton")]; // On récupère les touches et on les transforme en tableau
const listeKeycode = touches.map(touche => touche.dataset.key); // On utilise un nouveau tableau pour donner le dataset au touche
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {  // Création de l'évènement touche sur le clavier
  const valeur = e.keyCode.toString(); // On convertit la valeur des touche en chaine de caractère
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {  // Si le tableau des touches inclus la valeur d'un key code
    switch (valeur) { // On fais un switch de valeur
      case "8": // Dans le cas de la touche C
        ecran.textContent = ""; // On ne mets rien
      case "13": // Dans le cas de la touche egal
        const calcul = eval(ecran.textContent); // On crée un constante avec l'objet 'eval' qui rend la valeur de deux integer
        ecran.textContent = calcul; // On ajout le contenu du calcul à l'écran
        break;
      default: // Par défault
        const indexKeycode = listeKeycode.indexOf(valeur); // Créer un index des touches
        const touche = touches[indexKeycode]; // Leur donner la valeur de l'index dans le tableau
        ecran.textContent += touche.innerHTML; // In scire à chaque fois qu'on tape sur une touche
    }
  }
};

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul') + (e).message
})

// Petit plus pour CSS:

// On peut faire button[data-(nom du dataset)] {}...