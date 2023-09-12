console.groupCollapsed('Exercise 5');

class persons {
    #name;
    #age;

    constructor(name, age, ssn) {
        this.#name = name;
        this.#age = age;
    }

    get nameAndAge() {
        return this.#name + ' ' + this.#age;
    }

    set age(age) {
        if (age < 0) {
          throw new Error('Age cannot be negative!!!');
        }
        this.#age = age;
      }

}

const person1 = new persons('Oskar', 37);
console.log(person1.nameAndAge);
//person1.age = -37;

console.groupEnd();