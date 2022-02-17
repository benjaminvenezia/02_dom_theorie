export default class Person {
    constructor(name, age, job = 'undefined') {
        this.name = name
        this.age = age
        this.job = job
    }
}
//évite d'utiliser new qui est pas très bien
Person.create = function(...args) { //rest : transforme en tableau
    return new Person(...args)      //spread : passe le tableau en argument
}