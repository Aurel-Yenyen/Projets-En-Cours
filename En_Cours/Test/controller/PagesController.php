<?php

class PagesController extends Controller{
    
//     function view($nom){
//         $this->set(array(
//             'phrase' => 'Salut',
//             'nom'    => 'Machin'
//         ));
//         $this->render('index');
//     }
//     // Crée un tableau de variable qui nous permettera d'afficher des éléments dans l'index.html

    function index(){
        $this->render('index');
    }

}