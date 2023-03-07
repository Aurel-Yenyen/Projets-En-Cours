const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

// Animate stars
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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