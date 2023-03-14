'use strict';

// //task 1
// let x = 10, y = 7;
// const result = x > y ? console.log('x больше, чем y') : console.log('x не больше, чем y');
//
// //task 2
// const num = +prompt('Введите число');
// if (num % 2 === 0){
// console.log(`Число ${num} четное`);
// } else {
//     console.log(`Число ${num} нечетное`);
// }
//
// //task 3
let number = prompt('add integer');
const lengthNumber = number.length;
number = Number(number);

if (number > 0 && lengthNumber === 1) {
    console.log(`Число ${number} ,однозначное положительное`);
} else if (number > 0 && lengthNumber === 2) {
    console.log(`Число ${number} ,двухзначным  положительное`);
} else if (number > 0 && lengthNumber === 3) {
    console.log(`Число ${number} ,трехзначным  положительное`);
} else if (number > 0 && lengthNumber > 3) {
    console.log(`Число ${number} , положительное`);
} else if (number < 0 && lengthNumber - 1 === 1) {
    console.log(`Число ${number} ,однозначное отрицательное`);
} else if (number < 0 && lengthNumber - 1 === 2) {
    console.log(`Число ${number} ,двухзначным  отрицательное`);
} else if (number < 0 && lengthNumber - 1 === 3) {
    console.log(`Число ${number} ,трехзначным  отрицательное`);
} else if (number < 0 && lengthNumber - 1 > 3) {
    console.log(`Число ${number} , отрицательное`);
};

// if(number > 0){
//     console.log(`Число ${number} , ${length} значное положительное`);
// } else if (number < 0){
//     console.log(`Число ${number} , ${length} значное отрицательное`);
// } else {
//     console.log(`Число ${number} , ${length} значное`);
// }
