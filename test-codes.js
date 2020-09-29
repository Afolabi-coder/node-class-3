// const data = require('./data');

// const {
//   name,
//   person: { age },
// } = data;
// console.log(name);
// console.log(age);

const fs = require('fs');

// //blocking code
// const name = 'John Doe';

// function greetings(name) {
//   console.log(`good morning ${name}`);
// }

// function Sayname(data) {
//   greetings(name); //an example of a callback function
//   console.log(`my name is ${data}`);
// }

// Sayname(name);

// //non blocking code
// function one(number) {
//   console.log('I am number', number);
// }
// function two(number) {
//   console.log('I am number', number);
// }

// setTimeout(() => {
//   console.log('I am a non blocking code so I have no issue');
// }, 3000);

// function three(number) {
//   console.log('I am number', number);
// }
// function four(number) {
//   console.log('I am number', number);
// }
// function five(number) {
//   one(1);
//   two(2);
//   three(3);
//   four(4);
//   console.log('I am number', number);
// }

// five(5);

const html = fs.readFileSync('./public/index.html', 'utf-8');
console.log(html);
