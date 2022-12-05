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

let cadre1 = document.getElementById('cadre-img1')
let cadre2 = document.getElementById('cadre-img2')
let cadre3 = document.getElementById('cadre-img3')
let cadre4 = document.getElementById('cadre-img4')
let cadre5 = document.getElementById('cadre-img5')
let cadre6 = document.getElementById('cadre-img6')
let cadre7 = document.getElementById('cadre-img7')
let cadre8 = document.getElementById('cadre-img8')

let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')
let image4 = document.getElementById('image4')
let image5 = document.getElementById('image5')
let image6 = document.getElementById('image6')
let image7 = document.getElementById('image7')
let image8 = document.getElementById('image8')

let change = true

cadre1.addEventListener('mouseover', window =>{
    overlay1.style.visibility = 'visible'
    image1.style.transform = 'scale(1.2)'
    image1.style.transition = ('transform 1s ease-in')
})
cadre1.addEventListener('mouseleave', disapear =>{
    overlay1.style.visibility = 'hidden' 
    image1.style.transform = 'scale(1)'
    image1.style.transition = ('transform 1s ease-in')  
})

cadre2.addEventListener('mouseover', window =>{
    overlay2.style.visibility = 'visible'
    image2.style.transform = 'scale(1.2)'
    image2.style.transition = ('transform 1s ease-in')
})
cadre2.addEventListener('mouseleave', disapear =>{
    overlay2.style.visibility = 'hidden' 
    image2.style.transform = 'scale(1)'
    image2.style.transition = ('transform 1s ease-in')  
})

cadre3.addEventListener('mouseover', window =>{
    overlay3.style.visibility = 'visible'
    image3.style.transform = 'scale(1.2)'
    image3.style.transition = ('transform 1s ease-in')
})
cadre3.addEventListener('mouseleave', disapear =>{
    overlay3.style.visibility = 'hidden' 
    image3.style.transform = 'scale(1)'
    image3.style.transition = ('transform 1s ease-in')  
})

cadre4.addEventListener('mouseover', window =>{
    overlay4.style.visibility = 'visible'
    image4.style.transform = 'scale(1.2)'
    image4.style.transition = ('transform 1s ease-in')
})
cadre4.addEventListener('mouseleave', disapear =>{
    overlay4.style.visibility = 'hidden' 
    image4.style.transform = 'scale(1)'
    image4.style.transition = ('transform 1s ease-in')  
})

cadre5.addEventListener('mouseover', window =>{
    overlay5.style.visibility = 'visible'
    image5.style.transform = 'scale(1.2)'
    image5.style.transition = ('transform 1s ease-in')
})
cadre5.addEventListener('mouseleave', disapear =>{
    overlay5.style.visibility = 'hidden' 
    image5.style.transform = 'scale(1)'
    image5.style.transition = ('transform 1s ease-in')  
})

cadre6.addEventListener('mouseover', window =>{
    overlay6.style.visibility = 'visible'
    image6.style.transform = 'scale(1.2)'
    image6.style.transition = ('transform 1s ease-in')
})
cadre6.addEventListener('mouseleave', disapear =>{
    overlay6.style.visibility = 'hidden' 
    image6.style.transform = 'scale(1)'
    image6.style.transition = ('transform 1s ease-in')  
})

cadre7.addEventListener('mouseover', window =>{
    overlay7.style.visibility = 'visible'
    image7.style.transform = 'scale(1.2)'
    image7.style.transition = ('transform 1s ease-in')
})
cadre7.addEventListener('mouseleave', disapear =>{
    overlay7.style.visibility = 'hidden' 
    image7.style.transform = 'scale(1)'
    image7.style.transition = ('transform 1s ease-in')  
})

cadre8.addEventListener('mouseover', window =>{
    overlay8.style.visibility = 'visible'
    image8.style.transform = 'scale(1.2)'
    image8.style.transition = ('transform 1s ease-in')
})
cadre8.addEventListener('mouseleave', disapear =>{
    overlay8.style.visibility = 'hidden' 
    image8.style.transform = 'scale(1)'
    image8.style.transition = ('transform 1s ease-in')   
})