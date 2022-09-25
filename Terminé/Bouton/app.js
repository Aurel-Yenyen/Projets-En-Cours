let rect = document.getElementById('rect')
let taille = document.getElementById('taille')
let vert = document.getElementById('vert')
let init = document.getElementById('init')
let invisible = document.getElementById('invisible')
let visible = document.getElementById('visible')
let hauteur = 100

taille.addEventListener('click', changetaille =>{

    if (hauteur < 300){
        hauteur = hauteur + 10
        rect.style.height = hauteur + 'px'
    }
    else {
        rect.style.height = '100px'
        hauteur = 100
    }
})  

vert.addEventListener('click', changecolor =>{
    rect.style.background = 'green'
})

init.addEventListener('click', reset =>{
    rect.style.background = 'blue'
})

invisible.addEventListener('click', disapear =>{
    rect.style.visibility = 'hidden'
})

visible.addEventListener('click', apear =>{
    rect.style.visibility = 'visible'
})

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowUp"){
        rect.style.transform = 'translateY(-100px)'
    }
     //show the message saying Left key"
    else{
        (event.key == "ArrowDown")
        rect.style.transform = 'translateY(0px)' //show the message saying Up key"
    }
});