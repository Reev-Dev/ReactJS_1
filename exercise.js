// let
let namae = "Rifai";
console.log(namae); // Output: Rifai

// const
const age = 17;
console.log(age); // Output: 17

// arrow function
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("Rifai"); // Output: Hello, Rifai!

// template literals
const boy = "Bowo";
const message = `Hey, ${boy}!`;
console.log(message); // Output: Hey, Bowo!

// destructuring array
const num = [10, 20, 30];
const [ten, twenty, thirty] = num;
console.log(ten, twenty, thirty); // Output: 10 20 30

// destructuring object
const person = { firstName: "Attar", lastName: "Rifai" };
const { firstName, lastName } = person;
console.log(firstName, lastName); // Output: Rifai 17

// spread operator array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// spread operator object
const names = { firstName: "Attar", lastname: "Rifai" };
const ages = { age: 17 };
const bio = { ...names, ...ages };
console.log(bio); // Output: {firstName: "Attar", lastname: "Rifai", age: 17}

// export and import
const { greeting } = require('./utils');
greeting("Rifai"); // Output: Hello, Rifai!