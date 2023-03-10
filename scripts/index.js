'use strict'
const number1 = +prompt('Add number 1');
const number2 = +prompt('Add number 2');
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(addition(number1, number2));
console.log(subtraction(number1, number2));
console.log(multiplication(number1, number2));
console.log(division(number1, number2));