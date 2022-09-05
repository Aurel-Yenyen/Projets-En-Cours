let input = document.getElementById('input')

function choix() {
    let img = document.getElementById('image')
    let radio1 = document.getElementById('radio1')
    let radio2 = document.getElementById('radio2')
    let radio3 = document.getElementById('radio3')
    let radio4 = document.getElementById('radio4')
    let radio5 = document.getElementById('radio5')
    let radio6 = document.getElementById('radio6')

    if (radio1.checked || radio2.checked || radio3.checked || radio4.checked || radio5.checked || radio6.checked){
        img.style.animationPlayState = 'paused'
        console.log(radio1, radio2, radio3, radio4, radio5, radio6);
        if (radio1.checked)
        img.style.transform = 'translateX(0px)'
        
    }
        

}

input.addEventListener('click', choix)
choix()