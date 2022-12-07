function palindrome(input = document.getElementById('input').value){
    console.log(input.split('')); // La Méthode Split avec la chaîne de caractère vide permet de renvoyer un tableau 
    console.log(input.split('').reverse()); //La Méthode reverse permet de renvoyer ce tableau en inversé
    console.log(input.split('').reverse().join()); // La Méthode join permet de transformé se tableau en chaîne de caractère
    console.log(input.split('').reverse().join("")); // Mettre une chaîne de caractère vide à l'intérieur de la méthode Join pour enlever la virgule qui sépare les lettres

    if ((input.split('').reverse().join("")) === input){
        alert("C'est un palindrome")
    } else {
        alert("Ce n'est pas un palindrome")
    }
}

palindrome('salut')