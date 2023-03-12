'use strict';

let number1 = +prompt('add 1 number');
let number2 = +prompt('add 2 number');

//task 1

let comparison = (a, b) => {
    return a === b;
};
console.log(comparison(number1, number2));

//task 2

let comparison = (a, b) => {
    return a + b > 10;
};
console.log(comparison(number1, number2));

//task 3

let comparison = (a) => {
    return (a < 0);
};
console.log(comparison(number1));

