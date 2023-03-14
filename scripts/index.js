'use strict';

//task 1
let x = 10, y = 7;
const result = x > y ? console.log('x больше, чем y') : console.log('x не больше, чем y');

//task 2
const num = +prompt('Введите число');
if (num % 2 === 0){
console.log(`Число ${num} четное`);
} else {
    console.log(`Число ${num} нечетное`);
}

//task 3
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
}

// if(number > 0){
//     console.log(`Число ${number} , ${length} значное положительное`);
// } else if (number < 0){
//     console.log(`Число ${number} , ${length} значное отрицательное`);
// } else {
//     console.log(`Число ${number} , ${length} значное`);
// }

//task 4
const number1 = +prompt('add number 1');
const number2 = +prompt('add number 2');
const number3 = +prompt('add number 3');
if (number1 >= number2 && number1 >= number3){
    alert(number1);
} else if (number2 >= number1 && number2 >= number3){
    alert(number2);
} else if (number3 >= number1 && number3 >= number2) {
    alert(number3);
} else {
    alert('add number');
}

//task 5
const side1 = +prompt('add side 1');
const side2 = +prompt('add side 2');
const side3 = +prompt('add side 3');
if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    alert('triangle unreal');
} else if (side1 + side2 > side3 || side1 + side3 > side2 || side3 + side2 > side1) {
    alert('triangle is real');
} else {
    alert('triangle unreal');
}