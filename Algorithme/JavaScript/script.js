// let i = 0;
// let k = 1;

// let boucle1 = 0;
// let boucle2 = 0;
// let boucle3 = 0;

// do{
//     boucle1 = i == 0 ? boucle1 + 1 : boucle1 * 2;
//     i++;
// }while (i < 50);

// for (let j = 0; j < 100; j++){
//     if (j >= 42){
//         break;
//     }
//     if (j %2 == 0) {
//         boucle2 += 5;
//     }
// }
// while (k <= 35){
//     boucle3 = boucle3 < 10 ? boucle3 + 0.5 : boucle3 + 3;
//     k++;
// }

function nombreDanslaPortee(nombre, min, max) { //Création de la Fonction//
    const num = nombre === null ? 0 : nombre; // Création de la constant num, qui dit que nombre doit être de type entier

    let numMin = typeof min === "number" ? min : -Infinity; // Si l'argument 'min' n'est pas un nombre valide, il vaudra -Infinity.
    let numMax = typeof max === "number" ? max : Infinity; // Si l'argument 'max' n'est pas un nombre valide, il vaudra Infinity.

    const checkNum = numMax < numMin; //L'argument 'min' et 'max' s'inverse automatiquement si 'max' est inférieur à 'min'.

    const fnumMin = checkNum ? numMax : numMin;
    const fnumMax = checkNum ? numMin : numMax;

    if (num <= numMin) {
        return fnumMin
    }
    if (num >= numMax) {
        return fnumMax
    }

    return num * 1;

}

const resultat1 = nombreDanslaPortee(50);
const resultat2 = nombreDanslaPortee(50, "1");
const resultat3 = nombreDanslaPortee(50, "1", "2");
const resultat4 = nombreDanslaPortee(50, 1, 40);
const resultat5 = nombreDanslaPortee(-50, 1, 40);