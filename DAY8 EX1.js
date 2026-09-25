Jour 7 — Objets et tableaux d'objets : catalogue complet des défis
Thèmes : création d'objets, propriétés, objets imbriqués, clés dynamiques, listes d'enregistrements, recherche, filtrage, mise à jour et classement.

Bases des objets
1. Créer et accéder — Facile
Contexte : Un objet utilise des paires clé–valeur; la notation point lit une propriété.
Description : Déclare un objet person avec exactement name (chaîne) et age (nombre). Affiche uniquement person.name.
Exemple de sortie :

Sara
2. Mettre à jour une propriété — Facile
Contexte : Une propriété existante peut être modifiée sans recréer l'objet.
Description : À partir de let car = { brand: "Toyota" }, remplace directement la marque par "Honda" puis affiche l'objet.
Exemple de sortie :

{ brand: "Honda" }
3. Ajouter une propriété — Facile
Contexte : Affecter une clé absente crée une nouvelle propriété.
Description : À partir de { title: "JS Basics" }, ajoute la propriété numérique price avec la valeur 20, sans supprimer le titre.
Exemple de sortie :

{ title: "JS Basics", price: 20 }
4. Notation avec crochets — Facile
Contexte : Les crochets sont nécessaires lorsqu'une clé est stockée dans une variable.
Description : Avec key = "age" et user = { age: 25 }, affiche l'âge avec user[key], et non user.key.
Exemple de sortie :

25
5. Vérifier l'existence d'une propriété — Moyen
Contexte : L'opérateur in vérifie qu'une clé existe dans un objet.
Description : Avec item = { name: "Pen" }, vérifie si la propriété "price" existe et affiche le booléen.
Exemple de sortie :

false
6. Supprimer une propriété — Moyen
Contexte : Le mot-clé delete retire une propriété précise.
Description : Supprime seulement temp de { name: "Sara", temp: "remove me" }, puis vérifie que name reste présent.
Exemple de sortie :

{ name: "Sara" }
7. Accès imbriqué — Moyen
Contexte : Chaque niveau d'un objet imbriqué demande un accès de propriété.
Description : Dans une voiture contenant specs: { year: 2022, color: "blue" }, affiche uniquement la couleur.
Exemple de sortie :

blue
8. Construire un objet depuis des variables — Moyen
Contexte : Le raccourci de propriété fonctionne si le nom de variable est le même que la clé.
Description : Crée name = "Omar" et age = 22, puis construis un objet person avec ces deux valeurs.
Exemple de sortie :

{ name: "Omar", age: 22 }
9. Clés dynamiques dans une boucle — Difficile
Contexte : Une liste de clés peut parcourir les propriétés d'un objet grâce aux crochets.
Description : Avec les scores math, art, sport et le tableau de ces matières, boucle sur les matières et affiche chaque matière avec son score.
Exemple de sortie :

math 90
art 70
sport 85
10. Comparer des propriétés d'objets — Difficile
Contexte : On compare le contenu de deux objets propriété par propriété.
Description : Compare les propriétés x et y de a = { x: 1, y: 2 } et b = { x: 1, y: 3 }, combine les résultats avec &&, puis affiche un seul booléen.
Exemple de sortie :

false
11. Mettre à jour une propriété imbriquée sous condition — Difficile
Contexte : Une condition protège une mise à jour dans un objet imbriqué.
Description : Avec product.stock.quantity = 5, retire une unité uniquement si la quantité est supérieure à zéro; elle ne doit jamais devenir négative.
Exemple de sortie :

4
12. Construire et valider un profil — Extrême
Contexte : La validation vérifie à la fois le type et la validité des données requises.
Description : Crée un profil avec name, age, email, isActive, puis écris isValidProfile(profile). La fonction retourne true seulement si le nom est une chaîne non vide, l'âge est un nombre positif et isActive est un booléen.
Exemple de sortie :

true
Tableaux d'objets
13. Lire un champ du premier enregistrement — Facile
Contexte : Accéder d'abord à l'index du tableau puis à la propriété de l'objet.
Description : Avec un tableau d'au moins deux étudiants, accède à l'index 0 puis affiche uniquement sa propriété name.
Exemple de sortie :

Sara
14. Boucler et afficher tous les noms — Facile
Contexte : Chaque élément du tableau est un objet dont les propriétés sont accessibles dans une boucle.
Description : Parcours tous les étudiants par index et affiche un nom par ligne.
Exemple de sortie :

Sara
Omar
15. Afficher deux champs par enregistrement — Facile
Contexte : Une itération peut lire plusieurs propriétés du même objet.
Description : Parcours des produits et affiche leur name et price sur une seule ligne par produit.
Exemple de sortie :

Pen 5
Book 20
16. Compter les enregistrements — Facile
Contexte : .length compte les objets du tableau, quelle que soit leur structure.
Description : Affiche le nombre d'enregistrements avec .length, sans écrire le nombre à la main.
Exemple de sortie :

3
17. Trouver un enregistrement par identifiant — Moyen
Contexte : Une fonction de recherche peut retourner l'objet complet ou null.
Description : Écris findById(list, id): parcours la liste, compare chaque id, retourne immédiatement l'objet trouvé ou null si aucun élément ne correspond.
Exemple de sortie :

{ id: 2, name: "Omar" }
18. Additionner un champ numérique — Moyen
Contexte : Le modèle d'accumulateur fonctionne aussi avec les propriétés d'objets.
Description : Initialise un total à zéro, ajoute chaque product.price dans une boucle et affiche le total final après la boucle.
Exemple de sortie :

35
19. Filtrer avec un champ booléen — Moyen
Contexte : Un nouveau tableau reçoit seulement les objets qui respectent la condition.
Description : Crée un tableau de produits disponibles en ajoutant seulement ceux dont inStock vaut true; le tableau initial ne doit pas être modifié.
Exemple de sortie :

[{ name: "Pen", inStock: true }]
20. Trouver l'étudiant le plus jeune — Moyen
Contexte : Le modèle du minimum compare ici la propriété age.
Description : Commence par le premier étudiant comme candidat, compare tous les âges restants, remplace le candidat si un âge plus petit apparaît, puis affiche l'objet final.
Exemple de sortie :

{ name: "Sara", age: 18 }
21. Mettre à jour un enregistrement précis — Difficile
Contexte : On peut trouver un objet dans une boucle et modifier directement sa propriété.
Description : Cherche le produit dont name === "Pen", augmente sa quantity de 10, ne modifie aucun autre produit, puis affiche le produit mis à jour.
Exemple de sortie :

{ name: "Pen", quantity: 15 }
22. Compter les enregistrements qui respectent une condition — Difficile
Contexte : Une comparaison de propriété est combinée avec un compteur.
Description : Parcours tous les étudiants; augmente un compteur seulement si student.age >= 20, puis affiche le résultat final.
Exemple de sortie :

2
23. Trouver le maximum et son index — Difficile
Contexte : Il faut mémoriser à la fois le meilleur objet et sa position.
Description : Avec une liste non vide de produits, trouve le produit le plus cher et son index. À chaque prix plus élevé, mets à jour simultanément l'objet et l'index.
Exemple de sortie :

{ name: "Book", price: 20 }
1
24. Créer un mini-classement — Extrême
Contexte : Un classement manuel sélectionne plusieurs fois le meilleur score restant.
Description : Avec des joueurs contenant name et score, retourne un nouveau tableau de noms, du score le plus grand au plus petit, sans .sort(). Copie la liste d'origine, sélectionne le meilleur score encore disponible à chaque tour, puis ajoute son nom au résultat.
Exemple de sortie :

["Sara", "Omar", "Lina"]
DAY7_OBJETS_TABLEAUX_OBJETS_ALL_CHALLENGES_FR.md
9 Ko