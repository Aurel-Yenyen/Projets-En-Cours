let canvas = document.getElementById("fond");
let ctx = canvas.getContext("2d");
let commander = document.getElementById("ship1");
let invaders = document.getElementById("ship2");
let missileAlliee = document.getElementById("missile");
let missileEnemi = document.getElementById("missileEnemi");

// Alliée
let vaisseauAlliee = {
  x: 370,
  y: 510,
  width: 50,
  height: 49,
  image: null,
};

vaisseauAlliee.image = ctx.drawImage(
  commander,
  vaisseauAlliee.x,
  vaisseauAlliee.y,
  vaisseauAlliee.width,
  vaisseauAlliee.height
);

// Ennemi

let ennemis = [];

for(var i = 1; i <= 10; i++){
    let vaisseauEnnemi = {
        x: Math.random() * (700 - 50) + 50,
        y: Math.random() * (50 - 150) + 150,
        width: 50,
        height: 30,
        xMax: null,
        yMax: null,
        image: null,
        collision: function (x1, y1) {
          if (x1 > this.x && x1 < this.x + this.width && y1 > this.y && y1 < this.y + this.height) {
              ctx.clearRect(this.x, this.y, this.width, this.height);
            return true;
          }
          return false;
        },
    };
    vaisseauEnnemi.image = ctx.drawImage(
        invaders,
        vaisseauEnnemi.x,
        vaisseauEnnemi.y,
        vaisseauEnnemi.width,
        vaisseauEnnemi.height
    );
    // let missileEnemi1 = {
    //     x: vaisseauEnnemi.x,
    //     y: vaisseauEnnemi.y,
    //     width: 15,
    //     height: 40,
    //     xMax: null,
    //     yMax: null,
    //     image: null,
    //   };
    ennemis.push(vaisseauEnnemi);

}




// Missile Allié

let missileAlliee1 = {
  x: null,
  y: null,
  width: 15,
  height: 40,
  xMax: null,
  yMax: null,
  image: null,
};
let missileAlliee2 = {
  x: null,
  y: null,
  width: 15,
  height: 40,
  xMax: null,
  yMax: null,
  image: null,
};

// Missile Ennemi



// Fonction Feu Allié

function fire(x, y) {

  x = vaisseauAlliee.x + 30;
  y = vaisseauAlliee.y;
  dy = -2;
  let interval = setInterval(fireBall, 10);

  function fireBall() {
    ctx.clearRect(x - 30, y - 2 + 4, 13, 30);
    missileAlliee1.image = ctx.drawImage(missile, x - 30, y, 15, 40);
    ctx.clearRect(x, y - 2 + 4, 11, 30);
    missileAlliee2.image = ctx.drawImage(missile, x, y, 15, 40);
    y += dy;
    for(var i = 1; i <=10; i++){
        let vaisseauEnnemi = ennemis[i];
        let collisionEnemi = vaisseauEnnemi.collision(x, y);
        if(collisionEnemi){
            clearInterval(interval)
            ctx.clearRect(x - 30, y - 2 + 4, 13, 30)
            ctx.clearRect(x, y - 2 + 4, 11, 30);
        }
    }
  }
}

// Fonction Feu Ennemi

// function fireEnnemi() {
//   let dy = 2;

// //   function fireBallEnnemi() {
// //     ctx.clearRect(missileEnemi1.x, missileEnemi1.y - 3, 15, 40);
// //     missileEnemi1.image = ctx.drawImage(
// //       missileEnemi,
// //       missileEnemi1.x,
// //       missileEnemi1.y,
// //       15,
// //       40
// //     );
// //     missileEnemi1.y += dy;
// //   }

//   setInterval(fireBallEnnemi, 20);
// }

// fireEnnemi();

//Fonction Mouvement

 



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
