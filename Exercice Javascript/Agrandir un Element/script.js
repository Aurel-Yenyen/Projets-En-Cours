let titre = document.getElementById("titre");

titre.addEventListener("click", changetext,)
titre.removeEventListener("click" , reset,)


function changetext(){
    this.style.color = 'orange';
    this.style.fontSize = '40px';
}

function reset(){
    this.style.color = "";
    this.style.fontSize = "";
}

let number = 20;
let compte = document.getElementById("compte");

const body = document.querySelector('body')

for (let number = 20; number >= 0; number-=2){
    const para = document.createElement('p')
    para.innerHTML = number
    body.append (para)
    compte.innerHTML += number + " ";
}


para.innerHTML = "Bonjour"

