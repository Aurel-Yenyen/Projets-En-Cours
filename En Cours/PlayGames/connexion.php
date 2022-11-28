<?php

$chaine_connexion="mysql:host=localhost;dbname=playgames";
$login="root";
$pass="";
try{ // à tester
    $connexion=new PDO($chaine_connexion, $login, $pass);
}
catch (Exception $e) // si erreur
{
    echo "erreur: " . $e->getMessage() . ""; // écrit le message d'erreur retourné
    die;
}