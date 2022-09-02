let b = document.;
let imc = document.querySelector("p");
let grand = document.createElement("p");

function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur
  let taille = document.getElementById("taille").value;
  let tail = Number(taille);
  if (tail > 1.9);
  grand.textContent = "Vous êtes grand";
  b.prepend(grand)

  // Afficher la valeur
  let poids = document.getElementById("poids").value;
  let poid = Number(poids);

  imc.innerHTML = poid / (tail * tail);
}
