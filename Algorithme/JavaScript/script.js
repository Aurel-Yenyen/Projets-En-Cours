// let a = "3";
// let b = 1;
// let c = 10;
// let d = 100;

// a++;
// b--;
// c += a;
// d -= b;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let intro = 'Bonjour';
// let prenom = 'Ted';
// let nom = 'Bundy';
// let age = "13"
// let age_prochain = 19
// console.log(intro + ' ' + prenom + ' ' + nom + '!');
// console.log(prenom + ' a' + age + ' ans')


let a = 10;     //Equivalent à (a = true puisque supérieur à 0, b = true puisque supérieur à 0, et c = false puisque égale à 0)
let b = 5;
let c = 6;
if(a && b && c) { //Une condition est false dont la condition if ne fonctionne pas
   console.log('Les variables $a, $b et $c contiennent des valeurs différentes de false.');
} else {
   console.log('Une des variables $a, $b ou $c contient false comme valeur.');
}

if(a >= 10 || b >= 10 || c >= 10) { //Une des conditions est vrai donc le if fonctionne
   console.log('Une des variables $a, $b ou $c a une valeur supérieure ou égale à 10.');
} else {
   console.log('Aucune des variables $a, $b ou $c ne contient une valeur supérieure ou égale à 10.');
}

if(!c === 0) {  // Inverse la logique
   console.log('La variable $c a une valeur équivalente à false.');
} else {
   console.log('La variable $c a une valeur équivalent à true.');
}