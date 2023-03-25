'use strict';

const number = +prompt('add number');
const primeNumbers = (num) => {
    if (num === 1 || num === 0) return false;
    const arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) arr.push(i);
    }
    return arr.length === 2;
}
console.log(primeNumbers(number));