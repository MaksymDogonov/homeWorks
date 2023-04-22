'use strict';
const array = [1, 2, 3, [1, 2]];
const resultArr = [];
const flat = (arr) => {
    if (flat.length !== 1) throw new Error('Function accepts only 1 argument, too much arguments provided');

    if (arr.every(item => Array.isArray(item))) console.log(resultArr === arr);

    // if (arr[i]) resultArr = arr;
}
flat(array,2);