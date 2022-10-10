let selectedRow = null

function onFormSubmit(e){
    event.preventDefault()
    let formData = readFormData()
    if(selectedRow === null){
        insertNewRecord(formData)        
    }
    else{
        updateRecord(formData)
    }
    resetForm 
}
function readFormData(){ // Lire les données des inputs, récupère dans un tableau la valeur de chaque élément
    let formData = {}
    formData["name"] = document.getElementById('name').value
    formData["genre"] = document.getElementById('genre').value
    formData["year"] = document.getElementById('year').value
    formData["nombre"] = document.getElementById('nombre').value
    return formData
}

function insertNewRecord(data){ // Crée un tableau des éléments récupéré, incrémente une ligne
    let table = document.getElementById('movieList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length)
    let cell1 = newRow.insertCell(0) // Insère les lignes dans les colonnes des éléments th
        cell1.innerHTML = data.name
    let cell2 = newRow.insertCell(1)
        cell2.innerHTML = data.genre
    let cell3 = newRow.insertCell(2)
        cell3.innerHTML = data.year
    let cell4 = newRow.insertCell(3)
        cell4.innerHTML = data.nombre
    let cell5 = newRow.insertCell(4)
        cell5.innerHTML = `<button onClick='onEdit(this)'>Editer</button> <button onClick='onDelete(this)'>Supprimer</button>`
}

function onEdit(td){ // Création de l'évènement onClick pour éditer chaque ligne
    selectedRow = td.parentElement.parentElement
    document.getElementById('name').value = selectedRow.cells[0].innerHTML
    document.getElementById('genre').value = selectedRow.cells[1].innerHTML
    document.getElementById('year').value = selectedRow.cells[2].innerHTML
    document.getElementById('nombre').value = selectedRow.cells[3].innerHTML
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name
    selectedRow.cells[1].innerHTML = formData.genre
    selectedRow.cells[2].innerHTML = formData.year
    selectedRow.cells[3].innerHTML = formData.nombre
}

function onDelete(td){ // Création de l'évènement onClick pour supprimer chaque ligne
    if(confirm('Voulez-vous supprimer cette ligne?')){
        row = td.parentElement.parentElement
        document.getElementById('movieList').deleteRow(row.rowIndex)
    }
    resetForm()
}

function resetForm(){ //Permet de reset le formulaire
    document.getElementById('name').value = ""
    document.getElementById('genre').value = ""
    document.getElementById('year').value = ""
    document.getElementById('nombre').value = ""
}

