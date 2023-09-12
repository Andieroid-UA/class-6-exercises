console.groupCollapsed('Exercise 1');

//Global Variable
let testVariable = 'Hello World!';
console.log(testVariable);

//Object
const doggo ={
    name: 'Doggo',
    breed: 'Siberian Husky',
    dog: function() {
        console.log(this)
    }
};

doggo.dog();

//Arrow function inside an object
const user = {
    name: 'John',
    age: 25,
    arrowFunction: function() {

        const arrowFunction = () => {
            console.log(this);
        }

        arrowFunction();
    }
}

user.arrowFunction();

console.groupEnd();