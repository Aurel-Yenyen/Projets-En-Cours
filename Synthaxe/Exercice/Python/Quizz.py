print("Bienvenue sur le Quizz de Yenyen")
print("")
print("De quelle couleur est le cheval blanc d'Henri IV?")
print("")
question = ['1.Blanc', '2.Bleu', '3.Rouge', "4.Orange"]
print(question)

reponse = input("Merci d'entrer un chiffre entre 1 et 4")

if reponse == "1":
    print('Bonne répoonse')
else:
    print('Mauvaise réponse')