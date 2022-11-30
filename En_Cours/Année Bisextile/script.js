
function getValue(){
    let input = document.getElementById('input').value;
    let annee = 0

    if (input % 4 === 0){
        alert('Année Bisextile')
    } else {
        alert('Année non Bisextile')
    }
}

