'use strict';

const number = +prompt('add number');
const lesserDivisor = (num) => {
    if (num < 1) return NaN;
    if (num === 1) return 1;
    let arr = [];
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) arr.push(i);
    }
    return arr[0];
}
console.log(lesserDivisor(number));