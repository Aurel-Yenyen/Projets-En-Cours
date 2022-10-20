<?php
// -----------------------------------    LES VARIABLES    -----------------------------------------
// Créer des variable
// Utilisé le symbole + pour additionner deux chiffres
// Utilisé le symbole (.) pour concatainer deux chaînes de caractères

$prenom = 'Aurélien';
$nom = 'VIVIER ';
$note1 = 15;
$note2 = 20;

echo $nom . $prenom . ' à eu ' . (($note1 + $note2) /2) . ' de moyenne.';

// -----------------------------------    LES TABLEAUX    -----------------------------------------

$notes = [15, 20];

// Récupère la valeur 2ème valeur dans le tableau
echo $notes[1];

//Faire plusieurs tableau

$eleve = ['Aurélien', 'VIVIER', [15, 20]];
//A partir du 3ème élément, on rentre dans un autre tableau
//Pour afficher la valeur
echo $eleve[0] . ' a eu ' . $eleve[2][1] . ' en histoire';

//Pour créer un tableau sous forme de clé

$eleves = [
    'nom' => 'VIVIER', 
    'prenom' => 'Aurélien', 
    'notes' => [15, 20]];
 echo $eleves['prenom'] . ' a eu ' . $eleves['notes'][1] . ' en histoire.';
 
 //Pour ajouter un élément de le tableau

 $eleves['notes'][2] = 16;
 echo $eleves['notes'][2];

 //Ou

 $eleves['notes'][] = 16;
 echo $eleves['notes'][2];

// Ajouter une clée dans le tableau

 $eleves['classe'] = 'CM2';
 echo $eleves['classe'];

// Afficher les valeaurs lorsqu'il y a plusieurs tableau*
// Affiche la note de Jonathan en histoire
$cours = [
    [
        'prenom' => 'Aurélien',
        'nom' => 'VIVIER',
        'notes' => ['Histoire' => [15, 14, 17], 
                    'Géographie' => [10, 13, 16],
                    'Science' => [15, 16, 15]]
    ],
    [
        'prenom' => 'Jonathan',
        'nom' => 'DESFONTAINE',
        'notes' => ['Histoire' => [15, 14, 17], 
                    'Géographie' => [10, 13, 16],
                    'Science' => [15, 16, 15]]
    ]
    ];
echo $cours[1]['notes']['Histoire'][2]

// -----------------------------------    LES CONDITIONS    -----------------------------------------



 





?>