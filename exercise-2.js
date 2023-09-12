console.groupCollapsed('Exercise 2');

class Wizards {
    constructor(name, age, greeting) {
        this.name = name;
        this.age = age;
        this.greeting = greeting;
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    get greet() {
        return this.greeting;
    }
}

//Note: Ideally, like in the longer OOP video we would want to clean this up so that we don't have to repeat new users. For the sake of the exercise this outputs 2 users with name, age, and greeting

let person = new Wizards('Gandalf', 1000, 'Hello my friends!');
console.log(person);

let person2 = new Wizards('Hagrid', 56, 'Oye');
console.log(person2);

console.groupEnd();