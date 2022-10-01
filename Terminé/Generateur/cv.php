<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleCV.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div>
    <img src="image/fond.png" alt="" class="fond">
    </div>

    <section>

        <div class="nom_age">
            <h1 class="nom"><?php echo $_POST["nom"]?></h1>
            <h1 class="prenom"><?php echo $_POST["prenom"]?></h1>
            <h1 class="age"><?php echo $_POST["age"] . " ans"?></h1>
        </div>
        <div class="metier_phrase">
        <h3 class="metier"><?php echo $_POST["work"]?></h3>
        <h3 class="citation"><img src="image/gauche.png" alt="" class="gauche"><?php echo $_POST["citation"]?><img src="image/droit.png" alt="" class="droite"></h3>
        </div>  

        <div class="coordonne"> 
            <h3><img src="image/ici.png" alt="" class="icone"><?php echo $_POST["adresse"]?></h3>
            <h3><img src="image/phone.png" alt="" class="icone"><?php echo $_POST["phone"]?></h3>
            <h3><img src="image/mail.png" alt="" class="icone"><?php echo $_POST["mail"]?> </h3>
            <h3><img src="image/linkedin.png" alt="" class="icone"><?php echo $_POST["linkedin"]?> </h3>
            <h3><img src="image/facebook.png" alt="" class="icone"><?php echo $_POST["facebook"]?> </h3>
        </div>



    </section>

    <section>

    <p class="presentation"><?php echo $_POST["presentation"]?> </p>
    <div class="diplome">
        <h4><?php echo "Du " . $_POST["de1"] . " Au " . $_POST["a1"] . ": " . $_POST["diplome1"] . " à " . $_POST["local1"]?></h4>
        <h4><?php echo "Du " . $_POST["de2"] . " Au " . $_POST["a2"] . ": " . $_POST["diplome2"] . " à " . $_POST["local2"]?></h4>
        <h4><?php echo "Du " . $_POST["de3"] . " Au " . $_POST["a3"] . ": " . $_POST["diplome3"] . " à " . $_POST["local3"]?></h4>
        <h4><?php echo "Du " . $_POST["de4"] . " Au " . $_POST["a4"] . ": " . $_POST["diplome4"] . " à " . $_POST["local4"]?></h4>
    </div>
    </section>
    <section>
        <div class="comp">
            <h1>Mes Compétence</h1>
            <h3><?php echo $_POST["comp1"]?></h3>
            <h3><?php echo $_POST["comp2"]?></h3>
            <h3><?php echo $_POST["comp3"]?></h3>
            <h3><?php echo $_POST["comp4"]?></h3>
        </div>
    </section>
    <section class="loisir">
        <h1>Mes Hobbies</h1>
        <h3><?php echo $_POST["loisir1"]?></h3>
        <h3><?php echo $_POST["loisir2"]?></h3>
        <h3><?php echo $_POST["loisir3"]?></h3>
        <h3><?php echo $_POST["loisir4"]?></h3>
    </section>
</body>
</html>