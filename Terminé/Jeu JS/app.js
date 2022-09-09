
let reponse
let btn = document.getElementById('btn')
let coups = 0
let random

function nbrAleatoire() {
    random = Math.floor(Math.random() * (100 - 1 + 1));
    return random
  }

btn.addEventListener('click', trouver =>{
    coups += 1
    reponse = document.getElementById('rep').value
    if( reponse < random ){
        alert('Trop Petit')
    }
    else if ( reponse > random){
        alert('Trop Grand')
    }
    else{
        alert('Bonne réponse, vous avez trouvé en ' + coups + ' coups')
    }
})


let resultat = nbrAleatoire(1, 100);
console.log(resultat);

