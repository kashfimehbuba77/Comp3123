//Lab Exercise 01

//Exercise 01 - Rewrite code with ES6

const numbers = [1, 2, 3, 4];

const printNumbers = (arr) => {
  for (const num of arr) {
    console.log(`Number is ${num}`);
  }
};

console.log("Exercise 01 Output: ");
printNumbers(numbers);
console.log("");

//Exercise 02 - Captalize the first letter

const capitalize = ([first, ...rest]) => 
  `${first.toUpperCase()}${rest.join('')}`;

console.log("Exercise 02 Output: ");
console.log(capitalize("hello")); 
console.log(" ");

//Exercise 03 - Captalise first letter of each colour

const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map(capitalize);

console.log("Exercise 03 Output: ");
console.log(capitalizedColors); 
console.log("");

//Exercise 04 - Filter values less than 20

const values = [5, 12, 25, 7, 30, 18];

const filtered = values.filter(val => val >= 20);

console.log("Exercise 04 Output: ");
console.log(filtered); 
console.log(" ");

//Exercise 05 - Calculate sum & product of a given array

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => acc + curr, 0);
const product = nums.reduce((acc, curr) => acc * curr, 1);

console.log("Exercise 05 Output: ");
console.log(`Sum: ${sum}, Product: ${product}`);
console.log(" ");

//Exercise 06 - Classes

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
}

const mySedan = new Sedan("Honda Accord", 2020, 25000);
console.log("Exercise 06 Output: ");
console.log(mySedan);
console.log("");

