'use strict';

const fn = () => {
    let result = 0;
    return (number) => {
        result += number;
        return result;
    }
};
const sum = fn();
console.log(sum(5));
console.log(sum(3));

