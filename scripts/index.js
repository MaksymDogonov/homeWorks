'use strict';

//task 1
const num = +prompt('add number');
if(num <= 0 || num === null || num.trim() === ''){
    alert('try again');
} else {
    alert('OK');
}

//task 2
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (isNaN(+numOrStr) ? "NaN" : numOrStr === null ? "null" : numOrStr.trim().length === 0 ? "" : "number") {
    case "null":
        console.log('вы отменили');
        break;
    case "NaN":
        console.log('number is Ba_NaN');
        break;
    case "":
        console.log('Empty String');
        break;
    default:
        console.log('OK!');
}