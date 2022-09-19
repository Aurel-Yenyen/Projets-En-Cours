# Algorithme

# Crée une variable et Concatainer des Chaînes de Caractères:

# nom = "Toto "
# age = "ans"
# print(nom + age) #ou
# print("Je m'appelle Toto," + " j'ai 13 ans") #ou
# print("Je m'appelle " + nom + ",j'ai " + age)
#
#_________________________________________________________________________________________________________#
# Créer une variable et la réaffecter:

# n = 0 ## <-- On créer une variable et on lui affecte la valeur 0
# n = 1 ## <-- On réaffecte une nouvelle valeur à la variable.
# n = n + 1 ## On incrémente (+1) la variable.
#
#_________________________________________________________________________________________________________#
# Demander une donnée à l'utilisateur:

# nom = input("Quel est ton nom? ") ## <-- Demander une donnée
# age = input("Quel est votre age? ")
# print("Je m'appelle," + nom + ", j'ai " + age + " ans")  ## <-- Ecrire notre donnée
#
#_________________________________________________________________________________________________________#
# Les types:

# nom = "Aurélien"
# age = 32
# taille = 1,70
# profession = True
#
# print(type(nom))  # <-- Chaîne de Caractère ou String
# print(type(age)) # <-- Numérique ou Integer
# print(type(taille)) # <-- Nombre à virgule ou Float
# print(type(profession)) # <-- Vrai ou Fuax ou Booléen
#
#_________________________________________________________________________________________________________#
# Associé une chaîne de caractère et un numérique:
#
# nom = "Aurélien"
# age = 32
#
# print("Je m'appelle " + nom + " j'ai " + str(age) + " ans") ##str() ou int() convertie la valeur choisie}
#
#_________________________________________________________________________________________________________#
# Afficher des Erreurs:
#
# age = input("Quel est votre age? ")
#
# try:  # On essaie
#     age = int(age)
# except:  # Si ça ne marche pas on affiche une exception
#     print("Vous devez rentrer un chiffre ou un nombre! ")
# else:  # Sinon on continue.
#     print("Vous avez " + str(1) + " ans.")
#
#_________________________________________________________________________________________________________#
# # Les Boucles While:
#
# n = 0  # On affecte la valeur 0 à n.
#
# print("Début de la boucle:")
# print("")
#
# while n < 10:  # Entrée de la boucle. On donne une condition. "Tant que" n est inférieur à 10.
#     print("Valeur de n: " + str(n))
#     n = n + 1  # On incrémente 1 à n.
#
# print("")
# print("Fin de la boucle.")
#
#_________________________________________________________________________________________________________#
# Boucle While not: Demande de mdp:
#
# mdp = ""
# mdp = input("Rentrer un Mot de Passe: ")
# mdp2 = input("Veuillez confirmer votre mot de passe: ")
#
# while not mdp2 == mdp:  # Est équivalent à != ou différent.
#     print("Merci de rentrer le bon mot de passe. ")
#     mdp2 = input("Veuillez confirmer votre mot de passe: ")
#
# print("")
# print("Vous êtes connecté")
#
#_________________________________________________________________________________________________________#
# Boucle While sur le programme:
#
# nom = ""
# age_en_cours = 0 # Création d'une nouvelle variable de comparaison pour la boucle.
#
# while nom == "":
#     nom = input("Quel est votre nom? ")
#     print("Erreur, veuillez rentrer des caractère alphabétique")
#
#
# while age_en_cours == 0:
#     age = input("Quel est votre age? ")
#     try:
#         age_en_cours = int(age) # La variable de compraraison doit être de valeur int.
#     except:
#         print("Erreur: Veuillez rentrer un nombre ou un chiffre.")
#
# print("Vous vous appelez " + nom + ", vous avez " + str(age_en_cours) + " ans.")  # Sortie de la boucle.
#_________________________________________________________________________________________________________#
# Les Fonctions:
#
#
# def demander_nom(): # Donner un nom à sa fonction
#     name = ""
#     while name == "":
#         name = input("Quel est votre nom? ")
#     return name  # Retourner name pour avoir accès à la variable nom
#
#
# def demander_age():
#     age_en_cours = 0
#     while age_en_cours == 0 :
#         age_int = input("Quel est votre age? ")
#         try :
#             age_en_cours = int(age_int)
#         except :
#             print("Erreur: Veuillez rentrer un nombre ou un chiffre.")
#     return age_int
#
#
# nom = demander_nom()  # Appel de la fonctiion
# age = demander_age()
#
# print("Vous vous appelez " + nom + ", vous avez " + str(age) + " ans.")
#_________________________________________________________________________________________________________#
# Appel global dans une fonction: Peu utiliser car peut empêcher de paramétrer une fonction.
#
# nom = ""  # Sortir la variable de la fonction
#
#
# def demander_nom():
#     global nom  # Appel de la variable nom qui est hors de la fonction
#     while nom == "":
#         nom = input("Quel est votre nom? ")
#     return nom
#
#
# age_en_cours = 0
#
#
# def demander_age():
#     global age, age_en_cours
#     while age_en_cours == 0:
#         age = input("Quel est votre age? ")
#         try :
#             age_en_cours = int(age)
#         except :
#             print("Erreur: Veuillez rentrer un nombre ou un chiffre.")
#     return age
#
#
# demander_nom()  # Plus besoin de mettre la variable hors de la fonction
# demander_age()
#
# print("Vous vous appelez " + nom + ", vous avez " + str(age) + " ans.")
#
#_________________________________________________________________________________________________________#
# Les paramètres d'une fonction
#
#
# def demander_nom():
#     name = ""
#     while name == "":
#         name = input("Quel est votre nom? ")
#     return name
#
#
# def demander_age(nom_personne):  # Nous devons retrouver le nom du paramètre dans la fonction.
#     age_int = 0
#     while age_int == 0 :
#         age_str = input(nom_personne + ",quel est votre age? ")  # Ajouter le paramètre de la fonction afin de savoir de quel paramètre on s'occupe
#         try :
#             age_int = int(age_str)
#         except :
#             print("Erreur: Veuillez rentrer un nombre ou un chiffre.")
#     return age_int
#
#
# def info_personne(nom, age):
#     print("Vous vous appelez " + nom + ", vous avez " + str(age) + " ans.")
#
#
# nom = demander_nom()  # Ajout de variable pour les différents appel de la fonction.
# nom1 = demander_nom()
#
# age = demander_age(nom)  # Ajouter les variables en paramètres lors de l'appel d'une fonction
# age1 = demander_age(nom1)
#
# info = info_personne(nom, age)
# info1 = info_personne(nom1, age1)
#
#_________________________________________________________________________________________________________

