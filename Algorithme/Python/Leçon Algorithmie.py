# Algorithme

# Crée une variable et Concatainer des Chaînes de Caractères: {

# nom = "Toto "
# age = "ans"
# print(nom + age) #ou
# print("Je m'appelle Toto," + " j'ai 13 ans") #ou
# print("Je m'appelle " + nom + ",j'ai " + age) }

# Créer une variable et la réaffecter:

# n = 0 # <-- On créer une variable et on lui affecte la valeur 0
# n = 1 # <-- On réaffecte une nouvelle valeur à la variable.
# n = n + 1 # On incrémente (+1) la variable.

# Demander une donnée à l'utilisateur: {

# nom = input("Quel est ton nom? ") # <-- Demander une donnée
# age = input("Quel est votre age? ")
# print("Je m'appelle," + nom + ", j'ai " + age + " ans")  # <-- Ecrire notre donnée }

# Les types: {

# nom = "Aurélien"
# age = 32
# taille = 1,70
# profession = True
#
# print(type(nom))  # <-- Chaîne de Caractère ou String
# print(type(age)) # <-- Numérique ou Integer
# print(type(taille)) # <-- Nombre à virgule ou Float
# print(type(profession)) # <-- Vrai ou Fuax ou Booléen }

# Associé une chaîne de caractère et un numérique: {

# nom = "Aurélien"
# age = 32
#
# print("Je m'appelle " + nom + " j'ai " + str(age) + " ans") }

# Afficher des Erreurs

age = input("Quel est votre age? ")

try:  # On essaie
    age = int(age)
except:  # Si ça ne marche pas on affiche une exception
    print("Vous devez rentrer un chiffre ou un nombre! ")
else:  # Sinon on continue.
    print("Vous avez " + str(1) + " ans.")

# Les Boucles While, "tant que " l'utilisateur n'aura pas rentrer d'age valide il recommence.

n = 0 # On affecte la valeur 0 à n.

while n < 1O:  # Entrée de la boucle. On donne une condition. "Tant que" n est inférieur à 10.
    print("Valeur de n: " + str(n))
    n = n + 1  # On ajoute 1 à n.

#On sort ensuite de la boucle.




