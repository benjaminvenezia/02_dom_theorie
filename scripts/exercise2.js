import PersonCard from './personCard.js'

(function exercise2() {
  /**
   * Le code ci-dessous est une ébauche avec des défauts et des améliorations possibles.
   * 
   * 1. créer une classe Person avec les propriétés name, age et job
   *  a. classe
   *  b. attribuer une valeur par défaut à job
   *  c. exporter la classe dans le fichier person.js et l'importer dans le fichier d'exercice
   * 
   * 2. remplacer les occurences person1, person2 et person3 par des instances de Person
   * 
   * 3. les éléments cardX sont mal rajoutés au DOM, chercher l'erreur
   * 
   * 4. remplacer les cartes créées par des occurences de la classe PersonCard en fin de fichier
   * 
   * 5. afficher l'âge de la personne dans le sous-titre de sa carte
   *  a. utiliser un template string
   * 
   * 
   * 
   * Bonus
   * 1. effectuer la création des cartes dans une boucle plutôt que manuellement
   * 
   * 2. modifier le constructeur de PersonCard pour prendre une instance de Person en paramètre
   */

  var person1 = { name: 'Bob', age: 32, job: 'doctor' }
  var person2 = { name: 'Jon', age: 18, job: 'delivery boy' }
  var person3 = { name: 'Ted', age: 53, job: 'engineer' }

  var card1 = document.createElement('div')
  var card2 = document.createElement('div')
  var card3 = document.createElement('div')

  card1.textContent = person1.name
  card2.textContent = person2.name
  card3.textContent = person3.name

  card1.className =
    card2.className =
    card3.className = 'card'

  document
    .getElementById('ex2-people')
    .appendChild(card1)
    .appendChild(card2)
    .appendChild(card3)

})()