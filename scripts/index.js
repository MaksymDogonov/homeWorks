'use strict';

const number1 = +prompt('add 1 number');
const number2 = +prompt('add 2 number');

//task 1
const comparison = (a, b) => {
    return a === b;
};
console.log(comparison(number1, number2));

//task 2
const comparison = (a, b) => {
    return a + b > 10;
};
console.log(comparison(number1, number2));

//task 3
const comparison = (a) => {
    return (a < 0);
};
console.log(comparison(number1));

