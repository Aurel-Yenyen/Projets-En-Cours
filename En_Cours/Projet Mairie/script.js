let burger = document.getElementById('menu')
let close = document.getElementById('close')
let overlay = document.getElementById('overlay')
let menuNav = document.getElementById('nav')

burger.addEventListener('click', openOverlay =>{
    overlay.style.visibility = 'visible'
    menuNav.style.visibility = 'visible'
    close.style.visibility = 'visible'
});
close.addEventListener('click', closeOverlay =>{
    overlay.style.visibility = 'hidden'
    menuNav.style.visibility = 'hidden'
    close.style.visibility = 'hidden'
})

let lienCard1 = document.getElementById('lien-card1')
let buttonCard1 = document.getElementById('btn1')
let 