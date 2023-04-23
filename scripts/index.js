'use strict';

// Вам нужно написать функцию, которая принимает один параметр. При первом вызове она его запоминает, при втором —
// суммирует переданный параметр с тем, что передали первый раз и тд. Например:
//
// sum(3) = 3;
// sum(5) = 8;

const sum = (number) => {
    let result = 0;
    const plus = number;
    function save() {
        result += plus;
        return result;
    }
    return save;
}
const result = sum(5);
const result2 = sum(3);
console.log(result());
console.log(result2());
console.log(result());
console.log(result());

