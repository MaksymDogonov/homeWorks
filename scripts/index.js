'use strict';

const operation = prompt('select arithmetic operation (add, sub, mult, div)');
const number1 = +prompt('Add number 1');
const number2 = +prompt('Add number 2');
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

if (operation === 'add') {
    console.log(`${number1} + ${number2} = ${addition(number1, number2)}`);
}
if (operation === 'sub') {
    console.log(`${number1} - ${number2} = ${subtraction(number1, number2)}`);
}
if (operation === 'mult') {
    console.log(`${number1} * ${number2} = ${multiplication(number1, number2)}`);
}
if (operation === 'div') {
    console.log(`${number1} / ${number2} = ${division(number1, number2)}`);
}
else {
    console.log('Only one of the listed operations')
}