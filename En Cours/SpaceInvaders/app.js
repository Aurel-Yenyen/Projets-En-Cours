let canvas = document.getElementById('fond')
let ctx = canvas.getContext('2d')
let commander = document.getElementById('ship1')
let invaders = document.getElementById('ship2')
let missile = document.getElementById('missile')
let missileEnemi = document.getElementById('missileEnemi')

// Alliée

let vaisseauX = 370
let vaisseauY = 510
   
ctx.drawImage(commander, vaisseauX, vaisseauY, 50, 49)

// Ennemie
let ennemiX = Math.random() * (700 - 50) + 50
let ennemiY = Math.random() * (50 - 150) + 150
let commanderEnnemi = ctx.drawImage(invaders, ennemiX, ennemiY, 50, 30)


// Missile

let missile1
let missile2

// Missile Ennemi

let missileEnemi1

// Allié Fire

function fire(){
    let x = vaisseauX + 30
    let y = vaisseauY
    let dy = -2;


function fireBall() {
    ctx.clearRect(x-30, y-2 + 4, 13, 30);
    missile1 = ctx.drawImage(missile, x-30, y, 15, 40)
    ctx.clearRect(x, y-2 + 4, 11, 30);
    missile2 = ctx.drawImage(missile, x, y, 15, 40)
    y += dy   
}

setInterval(fireBall, 10)
}

 // Ennemi Fire
function fireEnnemi(){
    let x = ennemiX + 18
    let y = ennemiY + 30
    let dy = 2


function fireBallEnnemi() {
    ctx.clearRect(x, y-2, 15, 40);
    missileEnemi1 = ctx.drawImage(missileEnemi, x, y, 15, 40)
    y += dy   
}

setInterval(fireBallEnnemi, 20)
}

fireEnnemi()

if (fireEnnemi() == commander)
    alert('vous êtes touché')

function moveRight(){
    ctx.clearRect(vaisseauX, vaisseauY, 50, 49)
    vaisseauX += 10
    ctx.drawImage(commander, vaisseauX, vaisseauY, 50, 49)
}
function moveLeft(){
    ctx.clearRect(vaisseauX, vaisseauY, 50, 49)
    vaisseauX -= 10
    ctx.drawImage(commander, vaisseauX, vaisseauY, 50, 49)
}

document.addEventListener('keydown', battle =>{
    if (battle.key == ' '){
        console.log('Space Key');
        fire()

    }
    else if (battle.key == 'ArrowLeft'){
        console.log('Left');
        moveLeft()
    }
    else if (battle.key == 'ArrowRight'){
        console.log('Right');
        moveRight()
    }
})      

// function addition(a, b){
//     return a + b 
// }
// c = addition(1, 2)
// alert(c)

// function hello(name){
//     return 'Hello ' + name 
// }
// c = hello('Aurel')
// alert(c)

// let vaisseau = {
//     x : 570,
//     y :30,
       
//     move : function () {
//         x = x+1
//         y = y+1
//     }
// }

// let personne = {
//         name : 'Aurel',
//         age : 32,
//         condtionAge : function(ageMin, ageMax){
//             if (this.age >= ageMin && this.age <= ageMax)
//             console.log('valide');
//             else
//             console.log('invalide');
//         }
// }
// personne.condtionAge(18, 25)
