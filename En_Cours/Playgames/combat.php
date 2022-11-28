<?php
require 'connexion.php';
require 'header.php';
?>




<?php
$requete = "SELECT * FROM repertoire WHERE genre='combat'"; // choix requête
$resultats = $connexion->query($requete); // on envoit la requête

foreach($resultats as $ligne){
    echo '



    <div class="section" id="section1">
        <img width="300px" height="185px" src="affiches/' . $ligne["fichier"]  . '" class="img">
        <div class="desc">
            <p class="nom">Titre: ' . $ligne["titre"]  . '</p>
            <p class="plateforme">Plateforme: ' . $ligne["plateforme"]  . '</p>
            <p class="sortie">Sortie: ' . $ligne["sortie"]  . '</p>
        </div>
    </div>




    <div id="bg-modal1">
        <div class="modal-content1">
            <div class="modal-close1"></div>
            <div class="synoBa1">
                <p class="syno">Synopsis:</p><p class="syno-cont">' . $ligne["synopsis"]  . '</p>
                <p class="ba">Bande-Annonce: ' . $ligne["lien"]  . ' </p>

            </div>
        </div>
    </div>

';
        }

        require 'footer.php';

        ?>