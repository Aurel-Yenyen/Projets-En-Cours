
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
let image9 = document.getElementById('img9')
let image10 = document.getElementById('img10')
let image11 = document.getElementById('img11')
let image12 = document.getElementById('img12')
let image13 = document.getElementById('img13')
let image14 = document.getElementById('img14')
let image15 = document.getElementById('img15')
let image16 = document.getElementById('img16')

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
        img.style.transform = 'translateX(-400px)'    
        setTimeout(reprise, 5000)
    }
    else if (cross4.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-600px)' 
        setTimeout(reprise, 5000)  
    }
    else if (cross5.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-800px)'  
        setTimeout(reprise, 5000) 
    }
    else if (cross6.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-1000px)'
        setTimeout(reprise, 5000)    
    }
    else if (cross7.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-1200px)'
        setTimeout(reprise, 5000)    
    }
    else if (cross8.checked){
        img.style.animation = 'none'
        img.style.transform = 'translateX(-1400px)'
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
    let to = 99;
    let step = to > from ? 3 : -1
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
    let to = 25;
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
    let to = 8;
    let step = to > from ? 1 : -1
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
    let to = 0;
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

// ----------------   PORTFOLIO   -----------------

let btnAll = document.getElementById('all')
let btnApp = document.getElementById('app')
let btnCard = document.getElementById('card')
let btnWeb = document.getElementById('web')

let imgApp1 = document.getElementById('image')
let imgWeb1 = document.getElementById('image2')
let imgApp2 = document.getElementById('image3')
let imgCard1 = document.getElementById('image4')
let imgWeb2 = document.getElementById('image5')
let imgApp3 = document.getElementById('image6')
let imgCard2 = document.getElementById('image7')
let imgCard3 = document.getElementById('image8')
let imgWeb3 = document.getElementById('image9')


btnAll.addEventListener('click', function reverse() {
    imgWeb1.style.visibility = 'visible'
    imgWeb2.style.visibility = 'visible'
    imgWeb3.style.visibility = 'visible'
    imgCard1.style.visibility = 'visible'
    imgCard2.style.visibility = 'visible'
    imgCard3.style.visibility = 'visible'
    imgApp1.style.visibility = 'visible'
    imgApp2.style.visibility = 'visible'
    imgApp3.style.visibility = 'visible'
})

btnApp.addEventListener('click', function reverse2() {
    imgWeb1.style.visibility = 'hidden'
    imgWeb2.style.visibility = 'hidden'
    imgWeb3.style.visibility = 'hidden'
    imgCard1.style.visibility = 'hidden'
    imgCard2.style.visibility = 'hidden'
    imgCard3.style.visibility = 'hidden'
    imgApp1.style.visibility = 'visible'
    imgApp2.style.visibility = 'visible'
    imgApp3.style.visibility = 'visible'

    imgCard1.style.transition = '0s'
    imgCard2.style.transition = '0s'
    imgCard3.style.transition = '0s'
    imgWeb1.style.transition = '0s'
    imgWeb2.style.transition = '0s'
    imgWeb3.style.transition = '0s'

    imgApp2.style.transform = 'translateX(-422px)'
    imgApp2.style.transition = '0.5s ease-in-out'
    imgApp3.style.transform = 'translateY(-332px)'
    imgApp3.style.transition = '0.5s ease-in-out'
})
btnCard.addEventListener('click', function reverse3() {
    imgWeb1.style.visibility = 'hidden'
    imgWeb2.style.visibility = 'hidden'
    imgWeb3.style.visibility = 'hidden'
    imgApp1.style.visibility = 'hidden'
    imgApp2.style.visibility = 'hidden'
    imgApp3.style.visibility = 'hidden'
    imgCard1.style.visibility = 'visible'
    imgCard2.style.visibility = 'visible'
    imgCard3.style.visibility = 'visible'

    imgApp1.style.transition = '0s'
    imgApp2.style.transition = '0s'
    imgApp3.style.transition = '0s'
    imgWeb1.style.transition = '0s'
    imgWeb2.style.transition = '0s'
    imgWeb3.style.transition = '0s'

    imgCard1.style.transform = 'translateY(-332px)'
    imgCard1.style.transition = '0.5s ease-in-out'
    imgCard2.style.transform = 'translateY(-664px)' + 'translateX(422px)'
    imgCard2.style.transition = '0.5s ease-in-out'
    imgCard3.style.transform = 'translateY(-664px)' + 'translateX(422px)'
    imgCard3.style.transition = '0.5s ease-in-out'
})
btnWeb.addEventListener('click', function reverse4() {
    imgCard1.style.visibility = 'hidden'
    imgCard2.style.visibility = 'hidden'
    imgCard3.style.visibility = 'hidden'
    imgApp1.style.visibility = 'hidden'
    imgApp2.style.visibility = 'hidden'
    imgApp3.style.visibility = 'hidden'
    imgWeb1.style.visibility = 'visible'
    imgWeb2.style.visibility = 'visible'
    imgWeb3.style.visibility = 'visible'

    imgApp1.style.transition = '0s'
    imgApp2.style.transition = '0s'
    imgApp3.style.transition = '0s'
    imgCard1.style.transition = '0s'
    imgCard2.style.transition = '0s'
    imgCard3.style.transition = '0s'

    imgWeb1.style.transform = 'translateX(-422px)'
    imgWeb1.style.transition = '0.5s ease-in-out'
    imgWeb2.style.transform = 'translateY(-332px)'
    imgWeb2.style.transition = '0.5s ease-in-out'
    imgWeb3.style.transform = 'translateY(-664px)'
    imgWeb3.style.transition = '0.5s ease-in-out'
})

btnAll.addEventListener('click', function reverseAll(){
    imgCard1.style.visibility = 'visible'
    imgCard2.style.visibility = 'visible'
    imgCard3.style.visibility = 'visible'
    imgApp1.style.visibility = 'visible'
    imgApp2.style.visibility = 'visible'
    imgApp3.style.visibility = 'visible'
    imgWeb1.style.visibility = 'visible'
    imgWeb2.style.visibility = 'visible'
    imgWeb3.style.visibility = 'visible'

    imgApp1.style.transition = '0s'
    imgApp2.style.transition = '0s'
    imgApp3.style.transition = '0s'
    imgWeb1.style.transition = '0s'
    imgWeb2.style.transition = '0s'
    imgWeb3.style.transition = '0s'
    imgCard1.style.transition = '0s'
    imgCard2.style.transition = '0s'
    imgCard3.style.transition = '0s'

    imgWeb1.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgWeb2.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgWeb3.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgCard1.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgCard2.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgCard3.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgApp1.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgApp2.style.transform = 'translateY(0px)'+'translateX(0px)'
    imgApp3.style.transform = 'translateY(0px)'+'translateX(0px)'
})

// ----------------   QUESTION   -----------------

let btnFerm1 = document.getElementById('ferme1')
let btnFerm2 = document.getElementById('ferme2')
let btnFerm3 = document.getElementById('ferme3')
let btnFerm4 = document.getElementById('ferme4')
let btnFerm5 = document.getElementById('ferme5')
let btnFerm6 = document.getElementById('ferme6')

let rep1 = document.getElementById('reponse1')
let rep2 = document.getElementById('reponse2')
let rep3 = document.getElementById('reponse3')
let rep4 = document.getElementById('reponse4')
let rep5 = document.getElementById('reponse5')
let rep6 = document.getElementById('reponse6')

let change5 = true
let change6 = true
let change7 = true
let change8 = true
let change9 = true
let change10 = true

btnFerm1.addEventListener('click', open =>{
    if (change5 == false){
        rep1.style.display = 'none'
        change5 = true
    }else{
        rep1.style.display = 'block'
        rep1.style.transform = 'translateY(10px)'
        rep1.style.transition = '2s ease-in'
        change5 = false
    }
})
btnFerm2.addEventListener('click', open =>{
    if (change6 == false){
        rep2.style.display = 'none'
        change6 = true
    }else{
        rep2.style.display = 'block'
        rep2.style.transform = 'translateY(10px)'
        rep2.style.transition = '2s ease-in'
        change6 = false
    }
})
btnFerm3.addEventListener('click', open =>{
    if (change7 == false){
        rep3.style.display = 'none'
        change7 = true
    }else{
        rep3.style.display = 'block'
        rep3.style.transform = 'translateY(10px)'
        rep3.style.transition = '2s ease-in'
        change7 = false
    }
})
btnFerm1.addEventListener('click', open =>{
    if (change8 == false){
        rep4.style.display = 'none'
        change8 = true
    }else{
        rep4.style.display = 'block'
        rep4.style.transform = 'translateY(10px)'
        rep4.style.transition = '2s ease-in'
        change8 = false
    }
})
btnFerm1.addEventListener('click', open =>{
    if (change9 == false){
        rep5.style.display = 'none'
        change9 = true
    }else{
        rep5.style.display = 'block'
        rep5.style.transform = 'translateY(10px)'
        rep5.style.transition = '2s ease-in'
        change9 = false
    }
})
btnFerm1.addEventListener('click', open =>{
    if (change10 == false){
        rep6.style.display = 'none'
        change10 = true
    }else{
        rep6.style.display = 'block'
        rep6.style.transform = 'translateY(10px)'
        rep6.style.transition = '2s ease-in'
        change10 = false
    }
})

// ----------------   TEAM   -----------------

let social1 = document.getElementById('social1')
let social2 = document.getElementById('social2')
let social3 = document.getElementById('social3')
let social4 = document.getElementById('social4')

let cardTeam1 = document.getElementById('card-team1')
let cardTeam2 = document.getElementById('card-team2')
let cardTeam3 = document.getElementById('card-team3')
let cardTeam4 = document.getElementById('card-team4')

cardTeam1.addEventListener('mouseover', function (e) {
    social1.style.visibility = 'visible'
    social1.style.transform = 'translateY(0px)'
    social1.style.transition = '0.5s ease-in'    

})
cardTeam1.addEventListener('mouseout', changeSocialReverse => {
    social1.style.transform = 'translateY(-10px)'
    social1.style.visibility = 'hidden'
})
cardTeam2.addEventListener('mouseover', function (e) {
    social2.style.visibility = 'visible'
    social2.style.transform = 'translateY(0px)'
    social2.style.transition = '0.5s ease-in'    

})
cardTeam2.addEventListener('mouseout', changeSocialReverse => {
    social2.style.transform = 'translateY(-10px)'
    social2.style.visibility = 'hidden'
})
cardTeam3.addEventListener('mouseover', function (e) {
    social3.style.visibility = 'visible'
    social3.style.transform = 'translateY(0px)'
    social3.style.transition = '0.5s ease-in'    

})
cardTeam3.addEventListener('mouseout', changeSocialReverse => {
    social3.style.transform = 'translateY(-10px)'
    social3.style.visibility = 'hidden'
})
cardTeam4.addEventListener('mouseover', function (e) {
    social4.style.visibility = 'visible'
    social4.style.transform = 'translateY(0px)'
    social4.style.transition = '0.5s ease-in'    

})
cardTeam4.addEventListener('mouseout', changeSocialReverse => {
    social4.style.transform = 'translateY(-10px)'
    social4.style.visibility = 'hidden'
})