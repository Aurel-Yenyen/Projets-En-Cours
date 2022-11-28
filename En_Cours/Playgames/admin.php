<?php require 'connexion.php'; 
require 'header.php';

if(isset($_POST['supprimer'])){
    $requete = "DELETE FROM repertoire WHERE id='" . $_POST['id'] . "' ;";
    $resultats = $connexion->query($requete);
}

if(isset($_POST['ajouter'])){
        $requete = "INSERT repertoire VALUES (NULL, '" . htmlentities($_POST['titre']) . "', '" . $_POST['genre'] . "', '" . htmlentities($_POST['realisateur']) . "', '" . $_POST['date'] . "', '" . htmlentities($_POST['synopsis']) . "', '" . $_POST['lien'] . "', '" . htmlentities($_POST['affiche']) . "');";
        $resultats = $connexion->query($requete);
}

?>



<div id="container1">
    <div id="formulaire_vide">
        <form action="admin.php" method="POST" enctype="multipart/form-data">
            <div id="division">
            <label for="titre">Titre:</label>
            <input type="text" class="titre" name="titre" id="titre" size="100">
            </div>
            <div id="division">
            <label for="synopsis">Synopsis:</label>
            <textarea  cols="130" rows="10" class="synopsis" name="synopsis" id="synopsis"></textarea>
            </div>
            <div id="division">
            <label for="date">Date de sortie:</label>
            <input type="text" class="date" name="date" id="date">
            </div>
            <div id="division">
            <label for="genre">Genre:</label>
            <input type="text" name="genre" class="genre" id="genre">
            </div>
            <div id="division">
            <label for="realisateur">Plateforme:</label>
            <input type="text" class="realisateur" name="realisateur" id="realisateur" size="100">
            </div>
            <div id="division">
            <label for="lien">Iframe youtube:</label>
            <input type="text" class="lien" name="lien" id="lien" size="100">
            </div>
            <div id="division">
            <label for="affiche">Choix de l'affiche:</label>
            <input type="text" id="affiche" name="affiche" class="affiche">
            </div>
            <input type="submit" name="ajouter" value="Ajouter" id="ajouter">
        </form>
    </div>
</div>


<hr>
<h3>Répertoire</h3>
<table>
<tr><th>Titre</th><th>Date de sortie</th><th>Lien Youtube</th><th>Affiche</th><th></th><th></th></tr>

<?php // construction du répertoire sous forme de tableau
    $requete = "SELECT * FROM repertoire"; // choix requête
    $resultats = $connexion->query($requete); // on envoit la requête 

    foreach($resultats as $ligne){
        echo "<tr><td>" . $ligne['titre'] . "</td><td>" . $ligne['sortie'] . "</td><td>" . $ligne['lien'] . "</td><td><img src='./affiches/" . $ligne['fichier'] . "' width='50px'></td><td><form action='admin.php' method='POST'><input type='hidden' name='id' value='" . $ligne['id'] . "'><input type='submit' name='supprimer' value='Supprimer'></form></td></tr>";
    }
?>

</table>

<?php require 'footer.php'; ?>