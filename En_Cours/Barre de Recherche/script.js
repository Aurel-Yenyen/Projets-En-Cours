let input = document.getElementById('input')
let btn = document.getElementById('btn')
let change = true

btn.addEventListener('click', slideSearch =>{
    if (change == true){
        input.style.transform = 'translateX(0)'
        input.style.transition = 'transform 2s ease-in'
        change = false
    } else {
        input.style.transform = 'translateX(13vw)'
        input.style.transition = 'transform 2s ease-in'
        change = true
    }

})
