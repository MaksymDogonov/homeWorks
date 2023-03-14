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

// if (numOrStr === null) {
//     console.log('вы отменили')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

switch (numOrStr) {
    case null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}