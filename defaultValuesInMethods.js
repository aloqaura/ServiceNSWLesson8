function sayHello(name = "John", greeting = "Hello") { // Default values always go after non-default values.
    console.log(`${greeting} ${name}`)
}

sayHello("Alex", "Hey There"); // default value won't populate because the parameters have been assigned to "Alex" and "Hey There".

sayHello(); // Log nothing and it will log the Default value/s.

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

class Dog extends Animal {
    constructor(name, species, breed) {
        super (name, species); 
        this.breed = breed;
    }
}

