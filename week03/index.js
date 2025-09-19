const os = require('os'); //Built-in module
const path = require('path'); //Built-in module
const fs = require('fs'); //Built-in module
const http = require('http'); //Built-in module
const { buffer } = require('stream/consumers');

const arithmetic = require('./modules/Arithmetic.js') //custom module
//const { sum, sub } = require('./modules/Arithmetic.js') //destructuring
const college = require('./modules/college.js') //custom module
const maths = require('./modules/maths.js') //custom module 

//Global objects
global.message = 'Hello World';
//console.log(message);
//console.log(console);
//console.log(__dirname); //Current directory
//console.log(__filename); //Current file
//console.log(process); //Info about env where
//console.log(Buffer); //Used to handle binary data

console.log(module); // info about current module
console.log(arithmetic);
console.log(arithmetic.sum(5, 3)); 
console.log(arithmetic.sub(5, 3));
console.log(college);
