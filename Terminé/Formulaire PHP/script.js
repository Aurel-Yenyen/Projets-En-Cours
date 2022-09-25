btn=document.getElementById("envoyer");
btn.addEventListener('click', test);

function test(){
    var valeur1 = document.querySelector("#prenom").value;
    var valeur2 = document.querySelector("#nom").value;
    var valeur3 = document.querySelector("#mail").value;
    if(valeur1==""){
        document.getElementById("erreur1").style.display = "block";
    }

    if(valeur2==""){
        document.getElementById("erreur2").style.display = "block";
    }

    if(valeur3==""){
        document.getElementById("erreur3").style.display = "block";
    }


}