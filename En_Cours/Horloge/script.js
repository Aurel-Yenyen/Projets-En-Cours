let heure = document.querySelector('.heures')
let date = document.querySelector('.date')

let affichageHeure = function(){
    // Déclaration des variables
    let today, annee , listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres

    // Récupérer la date actuel
    today = new Date()

    annee = today.getFullYear()

    listeMois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

    mois = listeMois[today.getMonth()]
    // La méthode getMonth nous donnera l'index 0 si nous en janvier, 1 pour le mois de février...

    // Récuperer le numéro du jour du mois
    jourNumero = today.getDate()

    // Récuper le jour, attention en Javascript, la semaine commence par un dimanche.

    listeJours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    jourNom = listeJours[today.getDay()]

    deuxChiffres = function(element){
        if(element < 10){
            return element = '0' + element
        } else {
            return element
        }
    }
    // Récuperer les heures

    heures = deuxChiffres(today.getHours())   
    minutes = deuxChiffres(today.getMinutes())
    secondes = deuxChiffres(today.getSeconds())

    // Affichage dans le HTML
    heure.textContent = heures + ':' + minutes + ':' +secondes
    date.textContent = jourNom + ' ' + jourNumero + ' ' + mois + ' ' + annee

    // Lancer la fontion affiche toutes les secondes

    setTimeout(affichageHeure, 1000)
}

affichageHeure()

