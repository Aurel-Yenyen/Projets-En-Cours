<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

class FirstController extends AbstractController
{
    #[Route('/first', name: 'app_first')]
    public function index(): Response
    {
        // die('Je suis la requête /first');
        return $this->render('first/index.html.twig', [
            'controller_name' => 'FirstController',
            'name' => 'Aurélien'

        ]);
    }
}
