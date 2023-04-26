'use strict';

const saveAndSum = () => {
    let result = 0;
    return (number) => {
        result += number;
        return result;
    }
};
const sum = saveAndSum();
console.log(sum(5));
console.log(sum(3));

