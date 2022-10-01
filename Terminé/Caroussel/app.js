let input = document.getElementById('input')
let img = document.getElementById('image')
let cross1 = document.getElementById('radio1')
let cross2 = document.getElementById('radio2')
let cross3 = document.getElementById('radio3')
let cross4 = document.getElementById('radio4')
let cross5 = document.getElementById('radio5')
let cross6 = document.getElementById('radio6')
let image1 = document.getElementById('img1')
let image2 = document.getElementById('img2')
let image3 = document.getElementById('img3')
let image4 = document.getElementById('img4')
let image5 = document.getElementById('img5')
let image6 = document.getElementById('img6')

function reprise(){
    console.log("c'est bon")
    img.style.animation = "spin 10s ease-in-out infinite";
}

input.addEventListener('click', choix => {



    if (cross1.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(0px)'
        // console.log(cross1);
        setTimeout(reprise, 5000)
        }
    else if (cross2.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-200px)'
        // console.log(cross2);  
        setTimeout(reprise, 5000)   
    }
    else if (cross3.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-405px)'
        // console.log(cross3);     
        setTimeout(reprise, 5000)
    }
    else if (cross4.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-610px)'
        // console.log(cross4);   
        setTimeout(reprise, 5000)  
    }
    else if (cross5.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-815px)'
        // console.log(cross5);    
        setTimeout(reprise, 5000) 
    }
    else if (cross6.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-1020px)'
        // console.log(cross6); 
        setTimeout(reprise, 5000)    
    }

})

function check(){
    if (image1.style.transform = 'translateX(0px)'){
        cross1.checked = true
        console.log(image1);
    }
    else if (image2.style.transform = 'translateX(0px)'){
        cross2.checked = true
        console.log(image2);
    }
    else if (image3.style.transform = 'translateX(0px)'){
        cross3.checked = true
        console.log(image3);
    }
    else if (image4.style.transform = 'translateX(0px)'){
        cross4.checked = true
        console.log(image4);
    }
    else if (image5.style.transform = 'translateX(0px)'){
        cross5.checked = true
        console.log(image5);
    }
    else if (image6.style.transform = 'translateX(0px)'){
        cross6.checked = true
        console.log(image6);
    }
}

check()
                            