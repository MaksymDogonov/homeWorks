'use strict';

const number = prompt('add number');
let arrOfNumber = null;
if (isNaN(+number) || number === null || number.trim() === '') {
    alert('add number!');
} else {
    arrOfNumber = Array.from(number);
    const lastNumber = parseInt(arrOfNumber[arrOfNumber.length - 1]);
    if ([0, 5, 6, 7, 8, 9].includes(lastNumber)) {
        alert(`${number} лет`);
    } else if ([2, 3, 4].includes(lastNumber)) {
        alert(`${number} года`);
    } else {
        alert(`${number} год`);
    }
}