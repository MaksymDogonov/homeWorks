'use strict';

const palindrome = (number, steps = 0) => {
    const elReverse = +Array.from(String(number)).reverse().join('');
    if (number === elReverse) return {result: elReverse, steps};
    return palindrome(number + elReverse, steps +1);
}
console.log(palindrome(96))