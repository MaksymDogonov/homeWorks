'use strict';

const a = 16;
const b = 7;

//task 1
const result = a === 0 ? 'Верно' : 'Неверно';

//task 2
const result = a > 0 ? 'Верно' : 'Неверно';

//task 3
const result = a < 0 ? 'Верно' : 'Неверно';

//task 4
const result = a >= 0 ? 'Верно' : 'Неверно';

//task 5
const result = a <= 0 ? 'Верно' : 'Неверно';

//task 6
const result = a != 0 ? 'Верно' : 'Неверно';

//task 7
const result = a === 'test' ? 'Верно' : 'Неверно';

//task 8
const result = a === '1' && typeof a === 'string' ? 'Верно' : 'Неверно';

//task 9
const result = a > 0 && a < 5 ? 'Верно' : 'Неверно';

//task 10
const result = a === 0 || a === 2 ? a + 7 : a / 10;

//task 11
let result = null;
if (a <= 1 && b >= 3) {
    result = a + b;
} else {
    result =a - b;
}

// task 12
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task 13
const num = +prompt('add number 1-4');
let result = null;
    switch (num){
        case 1:
            result = 'зима';
            break;
        case 2:
            result = 'весна';
            break;
        case 3:
            result = 'лето';
            break;
        case 4:
            result = 'осень';
            break;
        default:
            result = 'not 1-4';
    }

console.log(result);