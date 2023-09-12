console.groupCollapsed('Exercise 3');

class Wizard {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }
}

const gandalf = new Wizard('Gandalf', 1000);
gandalf.speak('You shall not pass!');
console.log(gandalf);
console.log(Object.getOwnPropertyNames(gandalf));

const hagrid = new Wizard('Hagrid', 56);
hagrid.speak('I should not have said that.');
console.log(hagrid);
console.log(Object.getOwnPropertyNames(hagrid));

console.groupEnd();