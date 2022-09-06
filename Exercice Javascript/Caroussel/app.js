let input = document.getElementById('input')

function reprise(){
    // delay: 3000;
    console.log("c'est bon")
    let img = document.getElementById('image')
    img.style.animation = "spin 10s ease-in-out infinite";
}

function choix() {
    let img = document.getElementById('image')
    let radio1 = document.getElementById('radio1')
    let radio2 = document.getElementById('radio2')
    let radio3 = document.getElementById('radio3')
    let radio4 = document.getElementById('radio4')
    let radio5 = document.getElementById('radio5')
    let radio6 = document.getElementById('radio6')

    // if (radio1.checked || radio2.checked || radio3.checked || radio4.checked || radio5.checked || radio6.checked){
    //     img.style.animationPlayState = 'paused'
        // console.log(radio1, radio2, radio3, radio4, radio5, radio6);
        if (radio1.checked){
            img.style.animation = "none";
            // document.documentElement.style.setProperty('--image1', '0px');
            // document.documentElement.style.setProperty('--image2', '0px');
            // document.documentElement.style.setProperty('--image3', '0px');
            // document.documentElement.style.setProperty('--image4', '0px');
            // document.documentElement.style.setProperty('--image5', '0px');
            // document.documentElement.style.setProperty('--image6', '0px');
        // let img = document.getElementById('image')
        img.style.transform = 'translateX(0px)'
        // img.style.animation = 'transform 3s'
        // console.log("test")
        setTimeout(reprise, 5000);
    }
    if (radio2.checked){
        img.style.animation = "none";
        // document.documentElement.style.setProperty('--image1', '-200px');
        // document.documentElement.style.setProperty('--image2', '-200px');
        // document.documentElement.style.setProperty('--image3', '-200px');
        // document.documentElement.style.setProperty('--image4', '-200px');
        // document.documentElement.style.setProperty('--image5', '-200px');
        // document.documentElement.style.setProperty('--image6', '-200px');
    // let img = document.getElementById('image')
    img.style.transform = 'translateX(-200px)'
    // img.style.animation = 'transform 3s'
    // console.log("test")
    setTimeout(reprise, 5000);
}
if (radio3.checked){
    img.style.animation = "none";
    // document.documentElement.style.setProperty('--image1', '-405px');
    // document.documentElement.style.setProperty('--image2', '-405px');
    // document.documentElement.style.setProperty('--image3', '-405px');
    // document.documentElement.style.setProperty('--image4', '-405px');
    // document.documentElement.style.setProperty('--image5', '-405px');
    // document.documentElement.style.setProperty('--image6', '-405px');
// let img = document.getElementById('image')
img.style.transform = 'translateX(-405px)'
// img.style.animation = 'transform 3s'
// console.log("test")
setTimeout(reprise, 5000);
}
if (radio4.checked){
    img.style.animation = "none";
    // document.documentElement.style.setProperty('--image1', '-610px');
    // document.documentElement.style.setProperty('--image2', '-610px');
    // document.documentElement.style.setProperty('--image3', '-610px');
    // document.documentElement.style.setProperty('--image4', '-610px');
    // document.documentElement.style.setProperty('--image5', '-610px');
    // document.documentElement.style.setProperty('--image6', '-610px');
// let img = document.getElementById('image')
img.style.transform = 'translateX(-610px)'
// img.style.animation = 'transform 3s'
// console.log("test")
setTimeout(reprise, 5000);
}
if (radio5.checked){
    img.style.animation = "none";
    // document.documentElement.style.setProperty('--image1', '-815px');
    // document.documentElement.style.setProperty('--image2', '-815px');
    // document.documentElement.style.setProperty('--image3', '-815px');
    // document.documentElement.style.setProperty('--image4', '-815px');
    // document.documentElement.style.setProperty('--image5', '-815px');
    // document.documentElement.style.setProperty('--image6', '-815px');
// let img = document.getElementById('image')
img.style.transform = 'translateX(-815px)'
// img.style.animation = 'transform 3s'
// console.log("test")
setTimeout(reprise, 5000);
}
if (radio6.checked){
    img.style.animation = "none";
    // document.documentElement.style.setProperty('--image1', '-1020px');
    // document.documentElement.style.setProperty('--image2', '-1020px');
    // document.documentElement.style.setProperty('--image3', '-1020px');
    // document.documentElement.style.setProperty('--image4', '-1020px');
    // document.documentElement.style.setProperty('--image5', '-1020px');
    // document.documentElement.style.setProperty('--image6', '-1020px');
// let img = document.getElementById('image')
img.style.transform = 'translateX(-1020px)'
// img.style.animation = 'transform 3s'
// console.log("test")
setTimeout(reprise, 5000);
}
        
    // }
        

}

input.addEventListener('click', choix)
choix()