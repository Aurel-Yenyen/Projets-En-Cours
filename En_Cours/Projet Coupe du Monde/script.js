let deadline = new Date("Jan 01, 2023 00:00:00").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("jour").innerHTML = days 
document.getElementById("heure").innerHTML = hours
document.getElementById("minute").innerHTML = minutes 
document.getElementById("seconde").innerHTML = seconds

    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

let overlay1 = document.getElementById('overlay1')
let overlay2 = document.getElementById('overlay2')
let overlay3 = document.getElementById('overlay3')
let overlay4 = document.getElementById('overlay4')
let overlay5 = document.getElementById('overlay5')
let overlay6 = document.getElementById('overlay6')
let overlay7 = document.getElementById('overlay7')
let overlay8 = document.getElementById('overlay8')

let cadre1 = document.getElementById('card1')
let cadre2 = document.getElementById('card2')
let cadre3 = document.getElementById('card3')
let cadre4 = document.getElementById('card4')
let cadre5 = document.getElementById('card5')
let cadre6 = document.getElementById('card6')
let cadre7 = document.getElementById('card7')
let cadre8 = document.getElementById('card8')

let cadre = document.getElementById('cards')
let btnleft = document.getElementById('btnleft')
let btnright = document.getElementById('btnright')

let change = true

cadre1.addEventListener('mouseover', window =>{
    overlay1.style.visibility = 'visible'
    overlay1.style.transform = 'translateX(0vw)'
    overlay1.style.transition = 'transform 1s'
})
cadre1.addEventListener('mouseleave', disapear =>{
    overlay1.style.visibility = 'hidden' 
    overlay1.style.transform = 'translateX(-6vw)'
    overlay1.style.transition = 'transform 1s'
})

cadre2.addEventListener('mouseover', window =>{
    overlay2.style.visibility = 'visible'
    overlay2.style.transform = 'translateX(0vw)'
    overlay2.style.transition = 'transform 1s'
})
cadre2.addEventListener('mouseleave', disapear =>{
    overlay2.style.visibility = 'hidden'  
    overlay2.style.transform = 'translateX(-6vw)'
    overlay2.style.transition = 'transform 1s'
})

cadre3.addEventListener('mouseover', window =>{
    overlay3.style.visibility = 'visible'
    overlay3.style.transform = 'translateX(0vw)'
    overlay3.style.transition = 'transform 1s'
})
cadre3.addEventListener('mouseleave', disapear =>{
    overlay3.style.visibility = 'hidden'   
    overlay3.style.transform = 'translateX(-6vw)'
    overlay3.style.transition = 'transform 1s'
})

cadre4.addEventListener('mouseover', window =>{
    overlay4.style.visibility = 'visible'
    overlay4.style.transform = 'translateX(0vw)'
    overlay4.style.transition = 'transform 1s'
})
cadre4.addEventListener('mouseleave', disapear =>{
    overlay4.style.visibility = 'hidden'  
    overlay4.style.transform = 'translateX(-6vw)'
    overlay4.style.transition = 'transform 1s' 
})

cadre5.addEventListener('mouseover', window =>{
    overlay5.style.visibility = 'visible'
    overlay5.style.transform = 'translateX(0vw)'
    overlay5.style.transition = 'transform 1s'
})
cadre5.addEventListener('mouseleave', disapear =>{
    overlay5.style.visibility = 'hidden'  
    overlay5.style.transform = 'translateX(-6vw)'
    overlay5.style.transition = 'transform 1s' 
})

cadre6.addEventListener('mouseover', window =>{
    overlay6.style.visibility = 'visible'
    overlay6.style.transform = 'translateX(0vw)'
    overlay6.style.transition = 'transform 1s'
})
cadre6.addEventListener('mouseleave', disapear =>{
    overlay6.style.visibility = 'hidden'   
    overlay6.style.transform = 'translateX(-6vw)'
    overlay6.style.transition = 'transform 1s'
})

cadre7.addEventListener('mouseover', window =>{
    overlay7.style.visibility = 'visible'
    overlay7.style.transform = 'translateX(0vw)'
    overlay7.style.transition = 'transform 1s'
})
cadre7.addEventListener('mouseleave', disapear =>{
    overlay7.style.visibility = 'hidden'   
    overlay7.style.transform = 'translateX(-6vw)'
    overlay7.style.transition = 'transform 1s'
})

cadre8.addEventListener('mouseover', window =>{
    overlay8.style.visibility = 'visible'
    overlay8.style.transform = 'translateX(0vw)'
    overlay8.style.transition = 'transform 1s'
})
cadre8.addEventListener('mouseleave', disapear =>{
    overlay8.style.visibility = 'hidden' 
    overlay8.style.transform = 'translateX(-6vw)'
    overlay8.style.transition = 'transform 1s' 
})

let count = 0



