let image1 = document.getElementById("img1")
let image2 = document.getElementById("img2")

let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")


image1.addEventListener('mouseover', changePosition =>{
    text1.style.visibility = 'visible'
    text1.style.transform = 'translateY(-4vh)'
    text1.style.opacity = '1'
    text1.style.transition = 'opacity 1s ease-in'
})

image1.addEventListener('mouseleave', changePosition =>{
    text1.style.visibility = 'hidden'
    text1.style.opacity ='0'
    text1.style.transition = 'opacity 1s ease-in'
})
image2.addEventListener('mouseover', changePosition =>{
    text2.style.visibility = 'visible'
    text1.style.transition = 'visibility 5s ease-in'
})

image2.addEventListener('mouseleave', changePosition =>{
    text2.style.visibility = 'hidden'
})