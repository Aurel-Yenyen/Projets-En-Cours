let section1 = document.getElementById('section1')
let modal1 = document.getElementById('bg-modal1')
let content1 = document.querySelector('.modal-close1')
let change = true

section1.addEventListener('click', (e) =>{
    if (change == true){
        modal1.style.visibility = 'visible'
        modal1.style.animation = 'run 2s ease-in'
        change = false
    } else {
        change = true
    }
})
content1.addEventListener('click', (e) =>{
    if (change == false){
        modal1.style.visibility = 'hidden'
        change = true
    } else {
        change = false
    }
})