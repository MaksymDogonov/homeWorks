'use strict';

const number = +prompt('add number');
const lesserDivisor = (num) => {
    if (num < 1) return NaN;
    if (num === 1) return 1;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) return i;
    }
}
console.log(lesserDivisor(number));