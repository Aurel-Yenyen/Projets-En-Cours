let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let content1 = document.getElementById("content1");
let change = true;

img2.addEventListener("click", (e) => {
  if (change == true) {
    img2.style.width = "450px";
    img1.style.width = "200px";
    img2.style.transform = 'translateX(-100px)'
    img2.style.backgroundPositionX = '(-40px)'
    img2.style.backgroundRepeat = 'no-repeat'
    img2.style.overflow = 'hidden'
    change = false;
  } else {
    img2.style.width = "200px";
    img1.style.width = "400px";
    change = true;
  }
});
img1.addEventListener("click", (e) => {
    if (change == false) {
      img1.style.width = "400px";
      img2.style.width = "200px";
      change = true;
    } else {
      img1.style.width = "200px";
      img2.style.width = "400px";
      change = false;
    }
  });

  