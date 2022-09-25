let titre = document.getElementById("titre");

titre.addEventListener("click", changetext)

// let compte = 0  //Avec Troisième Façon

// let change = true //Avec Deuxième Façon


function changetext(){
    //Première Façon, la moins couteuse car aucune variable, juste un test
    if (this.style.fontSize != "40px"){
        this.style.fontSize = "40px"
    }else{
        this.style.fontSize = "25px"
    }
    // //Deuxième Façon
    // if (change == false){
    //     this.style.fontSize = "40px"
    //     change = true
    // }else{
    //     this.style.fontSize = "25px"
    //     change = false
    // }
    // //Troisième Façon, plus couteuse car risque de rupture de la mémoire "Stock Overflow" à cause de l'incréentation qui ne se réinitialise pas.
    // if ((compte % 2) == 0){
    //     this.style.fontSize = "40px"
    // }else{
    //     this.style.fontSize = "25px"
    // }
    // compte++
    
 }

let number = 20;
let compte = document.getElementById("compte");

const body = document.querySelector('body')

for (let number = 20; number >= 0; number-=2){
    let para = document.createElement('p')
    para.innerHTML = number
    body.append(para)
    compte.innerHTML += number + " ";
}


