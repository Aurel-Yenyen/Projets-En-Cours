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

    <header>

        <div class="nom_age">
            <h1 class="nom"><?php echo $_GET["nom"]?></h1>
            <h1 class="prenom"><?php echo $_GET["prenom"]?></h1>
            <h1 class="age"><?php echo $_GET["age"] . " ans"?></h1>
        </div>
        <div class="metier_phrase">
        <h3 class="metier"><?php echo $_GET["work"]?></h3>
        <h3 class="citation"><img src="image/gauche.png" alt="" class="gauche"><?php echo $_GET["citation"]?><img src="image/droit.png" alt="" class="droite"></h3>
        </div>  

        <div class="coordonne"> 
            <h3><img src="image/ici.png" alt="" class="icone"><?php echo $_GET["adresse"]?></h3>
            <h3><img src="image/phone.png" alt="" class="icone"><?php echo $_GET["phone"]?></h3>
            <h3><img src="image/mail.png" alt="" class="icone"><?php echo $_GET["mail"]?> </h3>
            <h3><img src="image/linkedin.png" alt="" class="icone"><?php echo $_GET["linkedin"]?> </h3>
            <h3><img src="image/facebook.png" alt="" class="icone"><?php echo $_GET["facebook"]?> </h3>
        </div>



    </header>

    <main>

    </main>
</body>
</html>