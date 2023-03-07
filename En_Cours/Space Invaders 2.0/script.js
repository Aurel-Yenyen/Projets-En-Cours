let canvas = document.getElementById("fond");
let ctx = canvas.getContext("2d");


let commander = document.getElementById("ship1");
let invaders = document.getElementById("ship2");
let missileAllieeImg = document.getElementById("missileAlliee");
let missileEnemiImg = document.getElementById("missileEnemi");

canvas = {
    width: 800,
    height: 600
}
/***********************  Initialisation des vaisseaux  *************************/


// Vaisseau Alliée
//  

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



/***********************  Initialisation des Missiles  *************************/



let missileAlliee = {
    x: null,
    y: null,
    width: 21,
    height: 44,
    image: null,
  };




/******************************  Tir Vaisseaux  ********************************/


let dy = -2

function fire(x,y) {
    x = vaisseauAlliee.x + 45;
    y = vaisseauAlliee.y -46;
    dy = -2 ;

    function fireBall(){
        ctx.clearRect(x - 30, y, 21, 44);
        missileAlliee.image = ctx.drawImage(missileAllieeImg, x-30, y, missileAlliee.width, missileAlliee.height);
        y += dy;
        
        // Vérifier si le missile touche un ennemi
        for (let i = 0; i < ennemis.length; i++) {
          if (
            x >= ennemis[i].x &&
            x <= ennemis[i].x + ennemis[i].width &&
            y >= ennemis[i].y &&
            y <= ennemis[i].y + ennemis[i].height
          ) {
            ctx.clearRect(x - 30, y, 21, 44);
            clearInterval(interval);
            ennemis.splice(i, 1);
          }
        }
        
        // Vérifier si le missile est sorti du canvas
        if (y < 0) {
          clearInterval(interval);
          ctx.clearRect(x - 30, y, 21, 44);
        }
    }


    interval = setInterval(fireBall, 5)
}




  /*************************  Mouvement des vaisseaux  ***************************/



function moveRight() {
    ctx.clearRect(vaisseauAlliee.x, vaisseauAlliee.y, 50, 49);
    vaisseauAlliee.x += 10;
    ctx.drawImage(commander, vaisseauAlliee.x, vaisseauAlliee.y, 50, 49);
  }
  function moveLeft() {
    ctx.clearRect(vaisseauAlliee.x, vaisseauAlliee.y, 50, 49);
    vaisseauAlliee.x -= 10;
    ctx.drawImage(commander, vaisseauAlliee.x, vaisseauAlliee.y, 50, 49);
  }
  
  // Fonction Appui Touche
  
  document.addEventListener("keydown", (battle) => {
    if (battle.key == " ") {
      console.log("Space Key");
      fire();
    } else if (battle.key == "ArrowLeft") {
      console.log("Left");
      moveLeft();
    } else if (battle.key == "ArrowRight") {
      console.log("Right");
      moveRight();
    }
  });


/***********************  Initialisation des ennemis  *************************/

let ennemis = [];

// Créer 5 ennemis
for (let i = 0; i < 5; i++) {
    let ennemi = {
        x: i * 150 + 50,
        y: 50,
        width: 50,
        height: 49,
        image: invaders,
    };
    ennemis.push(ennemi);
}

// Dessiner les ennemis sur le canvas
function dessinerEnnemis() {
    ennemis.forEach((ennemi) => {
        ctx.drawImage(ennemi.image, ennemi.x, ennemi.y, ennemi.width, ennemi.height);
    });
}

// Appeler la fonction pour dessiner les ennemis
dessinerEnnemis();