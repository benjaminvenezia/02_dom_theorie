import PersonCard from './personCard.js'
import Person from './person.js'

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

  const person1 = Person.create('Bob', 32, 'Doctor')
  const person2 = Person.create('Jon', 18, 'delivery boy')
  const person3 = Person.create('Ted', 53, 'engineer')

  
    const list = document.getElementById('ex2-people')
    const persons = [person1, person2, person3]

    persons.forEach((p) => {
      // const card = document.createElement('div')
      // card.textContent = p.name
      // card.className = 'card'
      // list.appendChild(card)
      const card = new PersonCard(p.name, p.age, p.job)
      list.appendChild(card)
    });

})()