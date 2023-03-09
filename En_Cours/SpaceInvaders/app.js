const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const fond = document.getElementById('fond')


    // Set canvas size
    canvas.width = 1200;//window.innerWidth;
    canvas.height = 700 //window.innerHeight;


// Création du Canvas des étoile
    const starsCanvas = document.createElement('canvas');

// Taille des étoile
starsCanvas.width = canvas.width;
starsCanvas.height = canvas.height;
document.body.appendChild(starsCanvas);
const starsCtx = starsCanvas.getContext('2d');
// Generate stars
const stars = [];
const numStars = 1000;
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3
  });
}

// Draw stars
function drawStars() {
  starsCtx.fillStyle = '#ffffff';
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];
    starsCtx.beginPath();
    starsCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    starsCtx.closePath();
    starsCtx.fill();
  }
}
// Animate stars
function animateStars() {
  starsCtx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
  updateStars();
  requestAnimationFrame(animateStars);
}

function updateStars() {
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];
    star.x -= 0.2;
    if (star.x < 0) {
      star.x = canvas.width;
    }
  }
}

// Start animation
animateStars();



// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// // Set canvas size
// canvas.width = 800;
// canvas.height = 600;

// Chargement des images
const vaisseauJoueurImg = new Image();
vaisseauJoueurImg.src = "img/commander.png";

const vaisseauEnnemiImg = new Image();
vaisseauEnnemiImg.src = "img/ennemi.png";

const missileAllieeImg = new Image();
missileAllieeImg.src = "img/Missile_Alliee.png";

const missileEnnemiImg = new Image();
missileEnnemiImg.src = "img/Missile_Ennemi.png";

// Dessiner les vaisseaux
vaisseauJoueurImg.onload = function() {
  ctx.drawImage(vaisseauJoueurImg, 250, 500, 50, 50);
}

vaisseauEnnemiImg.onload = function() {
  ctx.drawImage(vaisseauEnnemiImg, 100, 100, 50, 50);
}

missileAllieeImg.onload = function() {
  ctx.drawImage(missileAllieeImg, 300, 400, 50, 50);
}

missileEnnemiImg.onload = function() {
  ctx.drawImage(missileEnnemiImg, 200, 300, 50, 50);
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 10;
    this.score = 0;
    this.lives = 3;
    this.shots = [];
    
    // Gestion des touches clavier
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowLeft') {
        this.moveLeft();
      } else if (event.code === 'ArrowRight') {
        this.moveRight();
      } else if (event.code === 'ArrowUp') {
        this.moveUp();
      } else if (event.code === 'ArrowDown') {
        this.moveDown();
      } else if (event.code === 'Space') {
        this.shoot();
      }
    });
  }

  draw() {
    ctx.drawImage(vaisseauJoueurImg, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= this.speed;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  moveRight() {
    this.x += this.speed;
    if (this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    }
  }

  moveUp() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = 0;
    }
  }

  moveDown() {
    this.y += this.speed;
    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
  }

  shoot() {
    const missile = new Missile(this.x + this.width / 2, this.y);
    this.shots.push(missile);
    missiles.push(missile); // Ajouter le nouveau missile au tableau de missiles
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 2;
    this.shotProbability = 0.004; // Probabilité de tirer à chaque mise à jour
  }
  
  draw() {
    ctx.drawImage(vaisseauEnnemiImg, this.x, this.y, this.width, this.height);
  }
  
  update() {
    
    this.y += this.speed;

    // Change de direction lorsqu'il atteint les bords du canvas
    if (this.x + this.width >= canvas.width || this.x <= 0) {
      this.speed *= -1;
    }
  
    // Tirer un missile
    if (Math.random() < 0.1) {
      this.shoot();
    }
  
    // Réinitialiser la position de l'ennemi s'il sort du canvas
    if (this.y > canvas.height) {
      this.reset();
    }
  }
  
  collide(player) {
    if (this.x < player.x + player.width &&
      this.x + this.width > player.x &&
      this.y < player.y + player.height &&
      this.y + this.height > player.y) {
      return true;
    }
    return false;
  }
  
  reset() {
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = Math.floor(Math.random() * -canvas.height);
    this.speed = Math.floor(Math.random() * 3) - 2;
  }

  shoot() {
    const missile = new Missile(this.x + this.width / 2, this.y + this.height, 5, true);
    missiles.push(missile);
  }
}
  
  class Missile {
  constructor(x, y, speed, isEnemy) {
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 60;
  this.speed = speed || 5;
  this.isEnemy = isEnemy || false;
  }
  
  draw() {
  if (this.isEnemy) {
  ctx.drawImage(missileEnnemiImg, this.x, this.y, this.width, this.height);
  } else {
  ctx.drawImage(missileAllieeImg, this.x, this.y, this.width, this.height);
  }
  }
  
  update() {
  if (this.isEnemy) {
  this.y += this.speed;
  } else {
  this.y -= this.speed;
  }
  }
  
  collide(other) {
  if (this.x < other.x + other.width &&
  this.x + this.width > other.x &&
  this.y < other.y + other.height &&
  this.y + this.height > other.y) {
  return true;
  }
  return false;
  }
  
  reset() {
    this.x = Math.floor(Math.random() * (canvas.width - this.width*3));
    this.y = Math.floor(Math.random() * -canvas.height);
    this.speed = (Math.floor(Math.random() * 3) + 2) / 2;
  }
  }
  
  // Définition des variables de jeu
  const player = new Player(canvas.width / 2 - 25, canvas.height - 75);
  const enemies = [];
  const missiles = [];
  let score = 0;
  let lives = 3;
  let gameover = false;
  
  // Création des ennemis
  for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
  const enemy = new Enemy(50 + i * 200, 150 + j * 100);
  enemies.push(enemy);
  }
  }
  
  // Fonction pour dessiner les éléments du jeu
  function draw() {
  // Efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Dessine les éléments
  player.draw();
  
  enemies.forEach(enemy => enemy.draw());
  
  missiles.forEach(missile => missile.draw());
  }

  // Fonction pour mettre à jour la logique du jeu
function update() {
  // Déplace les ennemis
  enemies.forEach(enemy => enemy.update());

  // Déplace les missiles
  missiles.forEach(missile => missile.update());

  // Vérifie si le joueur a perdu une vie
  missiles.forEach(missile => {
    if (missile.isEnemy && missile.collide(player)) {
      lives--;
      missile.reset();
    }
  });

  // Vérifie si un missile du joueur touche un ennemi
  missiles.forEach((missile, missileIndex) => {
    enemies.forEach((enemy, enemyIndex) => {
      if (!missile.isEnemy && missile.collide(enemy)) {
        score += 100;
        missiles.splice(missileIndex, 1);
        enemy.reset();
      }
    });
  });

  // Vérifie si un ennemi atteint le joueur
  enemies.forEach(enemy => {
    if (enemy.collide(player)) {
      lives--;
      enemy.reset();
    }
  });

  // Supprime les missiles qui sont sortis du canvas
  missiles.forEach((missile, missileIndex) => {
    if (missile.y < 0 || missile.y > canvas.height) {
      missiles.splice(missileIndex, 1);
    }
  });

  // Vérifie si le joueur a perdu toutes ses vies
  if (lives === 0) {
    gameover = true;
  }
}

// Fonction pour dessiner le score et le nombre de vies restantes
function drawHUD() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`Score: ${score}`, 10, 30);
  ctx.fillText(`Lives: ${lives}`, canvas.width - 110, 30);
}
// Ecouteur d'événements pour les touches de déplacement
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  } else if (event.code === "ArrowUp") {
    player.moveUp();
  } else if (event.code === "ArrowDown") {
    player.moveDown();
  } else if (event.code === "Space") {
    player.shoot();
  }
});
window.addEventListener("keydown", function (e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

// Fonction principale du jeu
function gameLoop() {
  if (!gameover) {
    requestAnimationFrame(gameLoop);
  }


  update();
  draw();
  drawHUD();
}

function nouvellePartie() {
  fond.style.display = 'none'
  // Réinitialiser les variables de jeu
  score = 0;
  lives = 3;
  gameover = false;

  // Réinitialiser la position du joueur et des ennemis
  player.x = canvas.width / 2 - 25;
  player.y = canvas.height - 75;
  enemies.forEach(enemy => enemy.reset());

  // Effacer le tableau de missiles
  missiles.length = 1;

  // Recréer les ennemis
  enemies.length = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const enemy = new Enemy(50 + i * 330, -50 - j * 100);
      enemies.push(enemy);
    }
  }
    // Tirer un missile
    if (Math.random() < 0.001) {
      this.shoot();
    }
  // Relancer le jeu
  gameLoop();
}

// Créer le bouton "Nouvelle partie"
const newGameButton = document.createElement('button');
newGameButton.textContent = 'Nouvelle partie';
document.body.appendChild(newGameButton);

// Gérer l'événement de clic sur le bouton "Nouvelle partie"
newGameButton.addEventListener('click', nouvellePartie);