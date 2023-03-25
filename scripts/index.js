'use strict';

const number = +prompt('add number');
const primeNumbers = (num) => {
    if (num === 1 || num === 0) return 'false';
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) arr.push(i);
    }
    if (arr.length === 2) return 'true';
    if (arr.length !== 2) return 'false';
}
console.log(primeNumbers(number));