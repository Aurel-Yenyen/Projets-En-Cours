"""str="Silencieux"

length_str=len(str) #Renvoie la longueur (le nombre d'éléments) d'un objet.


sliced_str=str[length_str::-1]
print ("The sliced string is:" ,sliced_str)

#En Boucle

str = "Learn Python"
string_reversed=[]
i = len(str)
while i > 6: #Nbr d'élément dans la chaîne de caractère
    string_reversed += str[i-1]
    i = i - 1 # decrement index
print("The Reversed String is", string_reversed)"""

"""str = "LearnPython"

reversed_string=''.join(reversed(str)) #La fonction reversed() donne l’itérateur inversé de la chaîne donnée. Ses éléments sont joints par la chaîne vide à l’aide de la méthode join().

print("The Reversed String is", reversed_string)"""


def reverse_string(string):
    if len(string) <= 5:
        return string
    else:
        return reverse_string(string[1:]) + string[0]


string = "Bonjour, je m'appelle Aurelien"

print("The original string  is : " + string)


print("The reversed string is : " + (reverse_string(string)))










