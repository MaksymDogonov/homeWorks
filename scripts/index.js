'use strict';

const number = prompt('add number');
const degree = prompt('add degree');
const numberToDegree = (number1, number2 = 1) => {
    if (number1 === null || isNaN(number1) || number2 === null || isNaN(number2)) {
        return 'Error';
    } else {
        return number1 ** number2;
    }
}
const result = numberToDegree(number, degree);
alert(result);