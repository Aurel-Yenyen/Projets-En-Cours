let canvas = document.getElementById('fond')
let ctx = canvas.getContext('2d')
let commander = document.getElementById('ship1')
let invaders = document.getElementById('ship2')
let missileAlliee = document.getElementById('missile')
let missileEnemi = document.getElementById('missileEnemi')


// Alliée
let vaisseauAlliee = {
    x : 370,
    y: 510,
    width: 50,
    height: 49,
    xMax: null,
    yMax: null,
    image : null
}

vaisseauAlliee.image = ctx.drawImage(commander, vaisseauAlliee.x, vaisseauAlliee.y, vaisseauAlliee.width, vaisseauAlliee.height)

// Ennemi
let vaisseauEnnemi = {
    x : Math.random() * (700 - 50) + 50,
    y : Math.random() * (50 - 150) + 150,
    width : 50,
    height : 30,
    xMax : null,
    yMax : null,
    image : null
}

vaisseauEnnemi.image = ctx.drawImage(invaders, vaisseauEnnemi.x, vaisseauEnnemi.y, vaisseauEnnemi.width, vaisseauEnnemi.height)

let missileAlliee1 = {
    x : null,
    y : null,
    width : 15,
    height : 40,
    xMax : null,
    yMax : null,
    image : null
}
let missileAlliee2 = {
    x : null,
    y : null,
    width : 15,
    height : 40,
    xMax : null,
    yMax : null,
    image : null
}

// Missile Ennemi

let missileEnemi1 = {
    x : vaisseauEnnemi.x,
    y : vaisseauEnnemi.y,
    width : 15,
    height : 40,
    xMax : null,
    yMax : null,
    image : null
}



function fire(x, y){
    x = vaisseauAlliee.x + 30
    y = vaisseauAlliee.y
    dy = -2;


function fireBall() {
    ctx.clearRect(x-30, y-2 + 4, 13, 30);
    missileAlliee1.image = ctx.drawImage(missile, x-30, y, 15, 40)
    ctx.clearRect(x, y-2 + 4, 11, 30);
    missileAlliee2.image = ctx.drawImage(missile, x, y, 15, 40)
    y += dy   
    if (y > -50)
    missileAlliee1.image = null
    missileAlliee1.image = null
    console.log(missileAlliee1.image);
}

setInterval(fireBall, 10)
    
}

 // Ennemi Fire
function fireEnnemi(){
    let dy = 2


function fireBallEnnemi() {
    ctx.clearRect(missileEnemi1.x, missileEnemi1.y-3, 15, 40);
    missileEnemi1.image = ctx.drawImage(missileEnemi, missileEnemi1.x, missileEnemi1.y, 15, 40)
    missileEnemi1.y += dy   
}

setInterval(fireBallEnnemi, 20)
}

fireEnnemi()



if (fireEnnemi() == commander)
    alert('vous êtes touché')

function moveRight(){
    ctx.clearRect(vaisseauAlliee.x, vaisseauAlliee.y, 50, 49)
    vaisseauAlliee.x += 10
    ctx.drawImage(commander, vaisseauAlliee.x, vaisseauAlliee.y, 50, 49)
}
function moveLeft(){
    ctx.clearRect(vaisseauAlliee.x, vaisseauAlliee.y, 50, 49)
    vaisseauAlliee.x -= 10
    ctx.drawImage(commander, vaisseauAlliee.x, vaisseauAlliee.y, 50, 49)
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













