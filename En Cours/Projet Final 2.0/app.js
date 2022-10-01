
// ----------------   CAROUSSEL   -----------------

let input = document.getElementById('input')
let img = document.getElementById('images')
let cross1 = document.getElementById('radio1')
let cross2 = document.getElementById('radio2')
let cross3 = document.getElementById('radio3')
let cross4 = document.getElementById('radio4')
let cross5 = document.getElementById('radio5')
let cross6 = document.getElementById('radio6')
let cross7 = document.getElementById('radio7')
let cross8 = document.getElementById('radio8')
let image1 = document.getElementById('img1')
let image2 = document.getElementById('img2')
let image3 = document.getElementById('img3')
let image4 = document.getElementById('img4')
let image5 = document.getElementById('img5')
let image6 = document.getElementById('img6')
let image7 = document.getElementById('img7')
let image8 = document.getElementById('img8')

function reprise(){
    console.log("c'est bon")
    img.style.animation = "spin 10s ease-in-out infinite";
}

input.addEventListener('click', choix => {

    if (cross1.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(0px)'
        setTimeout(reprise, 5000)
        }
    else if (cross2.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-200px)'
        setTimeout(reprise, 5000)   
    }
    else if (cross3.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-405px)'    
        setTimeout(reprise, 5000)
    }
    else if (cross4.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-610px)' 
        setTimeout(reprise, 5000)  
    }
    else if (cross5.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-815px)'  
        setTimeout(reprise, 5000) 
    }
    else if (cross6.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-1020px)'
        setTimeout(reprise, 5000)    
    }
    else if (cross7.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-1080px)'
        setTimeout(reprise, 5000)    
    }
    else if (cross8.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-1120px)'
        setTimeout(reprise, 5000)    
    }

})

function check(){
    if (image1.style.transform = 'translateX(0px)'){
        cross1.checked = true

    }
    else if (image2.style.transform = 'translateX(0px)'){
        cross2.checked = true

    }
    else if (image3.style.transform = 'translateX(0px)'){
        cross3.checked = true

    }
    else if (image4.style.transform = 'translateX(0px)'){
        cross4.checked = true

    }
    else if (image5.style.transform = 'translateX(0px)'){
        cross5.checked = true

    }
    else if (image6.style.transform = 'translateX(0px)'){
        cross6.checked = true

    }
    else if (image7.style.transform = 'translateX(0px)'){
        cross7.checked = true

    }
    else if (image8.style.transform = 'translateX(0px)'){
        cross8.checked = true

    }
}

check()

// ----------------   CCOMPTEUR 1   -----------------

function countTo1(){
    let from = 0;
    let to = 232;
    let step = to > from ? 2 : -1
    let interval = 1

    if (from == to){
        document.querySelector('#compteur1').textContent = from
        return
    }
    let counter = setInterval(function(){
        from += step
        document.querySelector('#compteur1').textContent = from

        if (from == to){
            clearInterval(counter)
        }
    }, interval)
}
countTo1()

// ----------------   CCOMPTEUR 2   -----------------

function countTo2(){
    let from = 0;
    let to = 521;
    let step = to > from ? 1 : -1
    let interval = 1

    if (from == to){
        document.querySelector('#compteur2').textContent = from
        return
    }
    let counter = setInterval(function(){
        from += step
        document.querySelector('#compteur2').textContent = from

        if (from == to){
            clearInterval(counter)
        }
    }, interval)
}
countTo2()

// ----------------   CCOMPTEUR 3   -----------------

function countTo3(){
    let from = 0;
    let to = 1463;
    let step = to > from ? 7 : -1
    let interval = 1

    if (from == to){
        document.querySelector('#compteur3').textContent = from
        return
    }
    let counter = setInterval(function(){
        from += step
        document.querySelector('#compteur3').textContent = from

        if (from == to){
            clearInterval(counter)
        }
    }, interval)
}
countTo3()

// ----------------   CCOMPTEUR 3   -----------------

function countTo4(){
    let from = 0;
    let to = 15;
    let step = to > from ? 1 : -1
    let interval = 1

    if (from == to){
        document.querySelector('#compteur4').textContent = from
        return
    }
    let counter = setInterval(function(){
        from += step
        document.querySelector('#compteur4').textContent = from

        if (from == to){
            clearInterval(counter)
        }
    }, interval)
}
countTo4()

// ----------------   TABS   -----------------

let bouton = document.getElementById('nav-link-bar'),
    btn1 = document.getElementById('nav-link1'),
    btn2 = document.getElementById('nav-link2'),
    btn3 = document.getElementById('nav-link3'),
    btn4 = document.getElementById('nav-link4'),
    contentText1 = document.getElementById('content-text1'),
    contentText2 = document.getElementById('content-text2'),
    contentText3 = document.getElementById('content-text3'),
    contentText4 = document.getElementById('content-text4'), 
    imgText1 = document.getElementById('img-btn1'),
    imgText2 = document.getElementById('img-btn2'),
    imgText3 = document.getElementById('img-btn3'),
    imgText4 = document.getElementById('img-btn4'),
    change = true,
    change2 = true,
    change3 = true,
    change4 = true

btn1.addEventListener('click', changeBtn1 =>{

    if (change == false){

        btn1.style.background = '#fff'
        btn1.style.border = '1px solid black'
        btn1.style.color = '#000'
        change = true
    }


    btn1.style.background = '#D73232'
    btn1.style.border = 'none'
    btn1.style.color = '#fff'
    btn2.style.background = '#fff'
    btn2.style.border = '1px solid black'
    btn2.style.color = '#000'
    btn3.style.background = '#fff'
    btn3.style.border = '1px solid black'
    btn3.style.color = '#000'
    btn4.style.background = '#fff'
    btn4.style.border = '1px solid black'
    btn4.style.color = '#000'
    contentText1.style.visibility = 'visible'
    contentText2.style.visibility = 'hidden'
    contentText3.style.visibility = 'hidden'
    contentText4.style.visibility = 'hidden'
    change = false
})



btn2.addEventListener('click', changeBtn2 =>{

    if (change2 == false){
        btn2.style.background = '#fff'
        btn2.style.border = '1px solid black'
        btn2.style.color = '#000'
        change2 = true
    }

        btn2.style.background = '#D73232'
        btn2.style.border = 'none'
        btn2.style.color = '#fff'
        btn1.style.background = '#fff'
        btn1.style.border = '1px solid black'
        btn1.style.color = '#000'
        btn3.style.background = '#fff'
        btn3.style.border = '1px solid black'
        btn3.style.color = '#000'
        btn4.style.background = '#fff'
        btn4.style.border = '1px solid black'
        btn4.style.color = '#000'
        contentText1.style.visibility = 'hidden'
        contentText2.style.visibility = 'visible'
        contentText3.style.visibility = 'hidden'
        contentText4.style.visibility = 'hidden'
        change2 = false
})
btn3.addEventListener('click', changeBtn3 =>{

    if (change3 == false){
        btn3.style.background = '#fff'
        btn3.style.border = '1px solid black'
        btn3.style.color = '#000'
        change3 = true
    }

        btn3.style.background = '#D73232'
        btn3.style.border = 'none'
        btn3.style.color = '#fff'
        btn1.style.background = '#fff'
        btn1.style.border = '1px solid black'
        btn1.style.color = '#000'
        btn2.style.background = '#fff'
        btn2.style.border = '1px solid black'
        btn2.style.color = '#000'
        btn4.style.background = '#fff'
        btn4.style.border = '1px solid black'
        btn4.style.color = '#000'
        contentText1.style.visibility = 'hidden'
        contentText2.style.visibility = 'hidden'
        contentText3.style.visibility = 'visible'
        contentText4.style.visibility = 'hidden'
        change3 = false
})
btn4.addEventListener('click', changeBtn4 =>{

    if (change4 == false){
        btn4.style.background = '#fff'
        btn4.style.border = '1px solid black'
        btn4.style.color = '#000'
        change4 = true
    }

        btn4.style.background = '#D73232'
        btn4.style.border = 'none'
        btn4.style.color = '#fff'
        btn1.style.background = '#fff'
        btn1.style.border = '1px solid black'
        btn1.style.color = '#000'
        btn2.style.background = '#fff'
        btn2.style.border = '1px solid black'
        btn2.style.color = '#000'
        btn3.style.background = '#fff'
        btn3.style.border = '1px solid black'
        btn3.style.color = '#000'
        contentText1.style.visibility = 'hidden'
        contentText2.style.visibility = 'hidden'
        contentText3.style.visibility = 'hidden'
        contentText4.style.visibility = 'visible'
        change4 = false
})

