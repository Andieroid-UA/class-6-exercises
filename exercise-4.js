console.groupCollapsed('Exercise 4');

class Rabbit {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }

    //Cannot be called from instance, only from the class itself
    info() {
        return `${this.name} is ${this.age} years old`;
        //console.log(bugsie.info());
    }
}

const peter = new Rabbit('Peter', 3);
peter.speak('I love to eat dog food');
console.log(peter);
console.log(Object.getOwnPropertyNames(peter));

const bugsie = new Rabbit('Bugsie', 4);
bugsie.speak('I will destroy your books');
console.log(bugsie);
console.log(Object.getOwnPropertyNames(bugsie));

//I can call into the class from here...
console.log(peter.info());

console.groupEnd();