/*------------------------------------ Exercice 1 -----------------------------------*/

/* Forcer l'utilisateur à rentrer un chiffre entre 1 et 3. */

/* let nbr = 5 // ou let nbr = prompt('Merci de rentrer un chiffre entre 1 et 3! ')

while (parseInt(nbr) > 3)
    nbr = prompt('Merci de rentrer un chiffre entre 1 et 3! ')*/

/*------------------------------------ Exercice 2 -----------------------------------*/

/* Forcer l'utilisateur à rentrer un chiffre entre 10 et 20. */

/*let nbr = prompt("Merci de rentrer un chiffre entre 10 et 20: ");

while ((parseInt(nbr) < 10) || (parseInt(nbr) > 20)) { // Lorque l'on mets plusieurs condition à l'intérieur de la boucle. Utilisé ||
  if (parseInt(nbr) < 10) {
    alert("Chiffre trop petit");
  } else if (parseInt(nbr) > 20) {
    alert("Chiffre trop grand");
  } else if (nbr == "") {
    alert("Merci de rentrer un chiffre");
  }
  nbr = prompt("Merci de rentrer un chiffre entre 10 et 20! ");
}
alert("Bonne réponse");*/

/*------------------------------------ Exercice 3 -----------------------------------*/

/* Affiche les 10 nombres après celui saisi. */

/* nbr = prompt('Rentrez un nombre: ')

for (let i = 0; i <=10; i++){
    console.log(parseInt(nbr) + i);
} */



/*------------------------------------ Exercice 4 -----------------------------------*/

/* Demander un chiffre entre 1 et 9, afficher la table du chiffre */

/* nbr = prompt('Rentrez un chiffre entre 1 et 9: ')
console.log("Voici la table de multiplication de " + nbr);

for (let i = 0; i <= 10; i++){
    console.log(nbr, "+", i, "=", nbr*i);
} */

/* Avec la boucle while: */

/* j = 0 // Créer une variable pour la boucle for

while (j <= 10){
    console.log(nbr, "+", j, "=", nbr*j);
    j++
} */

/*------------------------------------ Exercice 5 -----------------------------------*/

/* Calculer la somme des entier jusqu'au nombre */

/* nbr = prompt("Merci de rentrer un nombre: ")
let j = 0,
    k = ""

for (let i = 1; i < nbr; i++){
    j += i  // Equivaut à j = j + i 
    if (i === 1){
        k += i
    } else {
        k += '+' + i
    }
}
console.log(k , "=" , j);*/

/*------------------------------------ Exercice 6 -----------------------------------*/

