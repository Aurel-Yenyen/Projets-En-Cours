let titre = document.getElementById("titre");

const taille = ["18px", "40px", "60px"];
titre.addEventListener("click", changetext)


function changetext(){
    const number = Math.floor(Math.random()*taille.length);
    if (number == 0){
        this.style.fontSize = taille[0]
        console.log(number)
    }else{
        this.style.fontSize = taille[1]
        console.log(number)
    }
 }

let number = 20;
let compte = document.getElementById("compte");

const body = document.querySelector('body')

for (let number = 20; number >= 0; number-=2){
    let para = document.createElement('p')
    para.innerHTML = number
    body.append (para)
    compte.innerHTML += number + " ";
}


