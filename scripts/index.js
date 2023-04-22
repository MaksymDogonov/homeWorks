'use strict';

const array = [1, 2, 3, [1, 2, [25, 5]]];
const flat = (...args) => {
    if (args.length !== 1) throw new Error('Function accepts only 1 argument, too much arguments provided');
    const resultArray = [];
    args[0].forEach((it) => {
        if (Array.isArray(it)) {
            resultArray.push(...flat(it));
        } else {
            resultArray.push(it);
        }
    })
    return resultArray;
}
console.log(flat(array));