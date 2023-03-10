'use strict';

let number1 = +prompt('add 1 number');
let number2 = +prompt('add 2 number');

//task 1
let comparison = (a, b) => {
    if (a === b) {
        console.log(true);
    } else {
        console.log(false);
    }
};
comparison(number1, number2);

//task 2
let comparison = (a, b) => {
    if (a + b > 10) {
        console.log(true);
    } else {
        console.log(false);
    }
};
comparison(number1, number2);

//task 3

let comparison = (a) => {
    if (a < 0) {
        console.log(true);
    } else {
        console.log(false);
    }
};
comparison(number1);

